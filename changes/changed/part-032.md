# Changed — Bundle Modifications Report (Part 032 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `32 / 115` (**319** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 031](part-031.md) · [Part 033 →](part-033.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3951-L3966` → after: `L163-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L163-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L163-L171) · [Before (L3951-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3951-L3966)

```diff
- 
-     function RU(UU, XU) {
-       for (const zU of function(UU) {
-           let {
-             anchor: XU,
-             rot: zU,
-             width: cU,
-             height: QU
-           } = UU;
-           const [AU, , FU] = yU.s[zU][IU], oU = [];
-           for (let yU = 0; yU < QU; yU++)
-             for (let UU = 0; UU < cU; UU++) oU.push([XU[0] + AU * UU, XU[1] - yU, XU[2] + FU * UU]);
-           return oU
-         }(UU))
-         if (tU(XU(zU[0], zU[1], zU[2]))) return zU;
-       return null
+     class SH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         this.callback = HH, this.mask = BH, this.scope = LH, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+       }
+       remove() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         this._remove && this._remove(HH)
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3968-L3988` → after: `L173-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L173-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L173-L216) · [Before (L3968-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3968-L3988)

```diff
- 
-     function PU(UU, XU, zU, yU, QU) {
-       const AU = UU(zU, yU, QU);
-       if (!oU(AU)) return null;
-       const {
-         rootId: FU,
-         rot: DU
-       } = cU.h[AU].meta, EU = [
-         [zU, yU, QU]
-       ], NU = new Set([EU[0].join()]);
-       let IU = EU[0],
-         pU = null;
-       for (let cU = 0; cU < EU.length; cU++) {
-         const zU = EU[cU];
-         if (GU(DU, zU, IU) < 0 && (IU = zU), tU(XU(zU[0], zU[1], zU[2]))) {
-           const XU = ZU(UU, zU[0], zU[1], zU[2]);
- ... (5 more removed lines; see GitHub link above)
+     class hH {
+       static FromPromise(HH, BH) {
+         const LH = new hH;
+         return HH.then((HH => {
+           LH.notifyObservers(HH)
+         })).catch((HH => {
+           if (!BH) throw HH;
+           BH.notifyObservers(HH)
+         })), LH
+       }
+       get observers() {
+         return this._observers
+       }
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.notifyIfTriggered = BH, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new rH(0), HH && (this._onObserverAdded = HH)
+ ... (28 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3991-L3995` → after: `L220-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L220-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L220-L223) · [Before (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3991-L3995)

```diff
-       return pU ??= ZU(UU, IU[0], IU[1], IU[2]), {
-         cells: EU,
-         topLeft: IU,
-         rect: pU,
-         textCell: RU(pU, XU)
+       _deferUnregister(HH) {
+         HH._willBeUnregistered || (this._numObserversMarkedAsDeleted++, HH.unregisterOnNextCall = !1, HH._willBeUnregistered = !0, setTimeout((() => {
+           this._remove(HH)
+         }), 0))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3997-L4010` → after: `L225-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L225-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L225-L261) · [Before (L3997-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L3997-L4010)

```diff
-     }
- 
-     function WU(UU, XU, zU, AU, FU) {
-       if (null !== zU && oU(zU)) {
-         const {
-           rootName: UU,
-           rot: XU
-         } = cU.h[zU].meta;
-         if (yU.s[XU].some((UU => {
-             let [XU, zU, cU] = UU;
-             return XU === AU[0] && zU === AU[1] && cU === AU[2]
-           }))) return {
-           root: UU,
-           rot: XU
+       _remove(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (!HH) return !1;
+         const LH = this._observers.indexOf(HH);
+         return -1 !== LH && (BH && this._numObserversMarkedAsDeleted--, this._observers.splice(LH, 1), !0)
+       }
+       makeObserverTopPriority(HH) {
+         this._remove(HH, !1), this._observers.unshift(HH)
+       }
+       makeObserverBottomPriority(HH) {
+         this._remove(HH, !1), this._observers.push(HH)
+       }
+       notifyObservers(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0,
+ ... (21 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4013-L4016` → after: `L265-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L265-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L265-L276) · [Before (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4013-L4016)

```diff
-       const [DU, EU] = yU.i[FU], YU = UU(XU[0] - DU, XU[1], XU[2] - EU);
-       return {
-         root: (0, QU.h)(YU) ? yU.x : yU.w,
-         rot: FU
+       cleanLastNotifiedState() {
+         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       }
+       clone() {
+         const HH = new hH;
+         return HH._observers = this._observers.slice(0), HH
+       }
+       hasSpecificMask() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
+         for (const BH of this._observers)
+           if (BH.mask & HH || BH.mask === HH) return !0;
+         return !1
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4020` → after: `L280-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L280-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L280-L290) · [Before (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4020)

```diff
-   38981: (UU, XU, zU) => {
+   64093: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       AsyncLoop: () => AH.e,
+       RegisterTools: () => AH.f,
+       Tools: () => AH.i,
+       className: () => AH.j
+     });
+     var AH = LH(41387);
+     (0, AH.f)()
+   },
+   38012: (HH, BH, LH) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4022-L4031` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L292-L293) · [Before (L4022-L4031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4022-L4031)

```diff
-       d: () => gU,
-       h: () => BU,
-       i: () => PU,
-       k: () => WU,
-       m: () => pU,
-       o: () => YU,
-       q: () => IU,
-       u: () => dU,
-       x: () => LU,
-       z: () => NU
+       b: () => SH,
+       f: () => rH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4033-L4245` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L295) · [Before (L4033-L4245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4033-L4245)

```diff
-     var cU = zU(7056),
-       yU = zU(37780),
-       QU = zU(9782);
-     const AU = (0, QU.j)("Water"),
-       FU = (0, QU.j)("Lava"),
-       oU = (0, QU.j)("Air"),
-       DU = {
-         physicsState: {
-           type: cU.o.CAR,
-           tier: cU.j.KART
-         },
-         validBlockIds: "solidBlocks",
-         meshSize: 4,
-         placeSound: null
-       },
-       EU = {
- ... (197 more removed lines; see GitHub link above)
+     const AH = {};
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4248-L4431` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L298) · [Before (L4248-L4431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4248-L4431)

```diff
-       const zU = UU.validBlockIds;
-       if (Array.isArray(zU)) return zU.includes(XU);
-       if (XU === oU) return !1;
-       if ("solidBlocks" === zU) return !0 !== QU.h[XU].BI;
-       if ("solidBlocksOrFluid" === zU) return !0;
-       throw new Error(`Unsupported validBlockIds for ${XU}: ${JSON.stringify(zU)}`)
-     }
-     const aU = {
-         meshAttachment: {
-           size: .12,
-           offset: [0, 1.8, -.24],
-           rotation: [0, 0, 0]
-         }
-       },
-       tU = {
-         "Yellow Balloon": {
- ... (168 more removed lines; see GitHub link above)
+       AH[HH] = BH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4435-L4463` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/260.js#L302) · [Before (L4435-L4463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/260.js#L4435-L4463)

```diff
-       return UU === cU.o.DEFAULT || function(UU) {
-         return ZU.has(UU) || RU.has(UU)
-       }(UU)
-     }
- 
-     function LU(UU) {
-       return !dU(UU) && UU !== cU.o.SLEEPING
-     }
-   },
-   39002: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => QU,
-       f: () => AU,
-       g: () => yU,
-       j: () => FU
-     });
- ... (13 more removed lines; see GitHub link above)
+       return AH[HH]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   38809: (UU, XU, zU) => {
+   38032: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L7` → after: `L7-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L7-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/261.js#L7-L375) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/261.js#L7)

```diff
-       f: () => cU,
+       g: () => hH,
+       h: () => rH
+     });
+     const AH = 1024,
+       rH = 16,
+       SH = 36e4;
+     class hH {
+       constructor(HH) {
+         this.boneCount = HH, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * HH), this.position = new Float64Array(3 * HH), this.scale = new Float64Array(3 * HH).fill(1), this.touched = new Uint8Arra … [truncated]
+       }
+       clampToLimits() {
+         for (let HH = 0; HH < this.boneCount; HH++)
+           if (0 !== this.touched[HH])
+             for (let BH = 3 * HH; BH < 3 * HH + 3; BH++) {
+               const HH = this.rotation[BH],
+                 LH = this.position[BH],
+ ... (353 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L9-L11` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/261.js#L377) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/261.js#L9-L11)

```diff
-       m: () => yU,
-       o: () => AU,
-       r: () => QU
+       m: () => rH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L13-L645` → after: `L379-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L379-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/261.js#L379-L390) · [Before (L13-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/261.js#L13-L645)

```diff
-     const cU = 1.001,
-       yU = .501,
-       QU = .025,
-       AU = .75,
-       FU = .08,
-       oU = 4;
- 
-     function DU() {
-       const UU = yU,
-         XU = QU,
-         zU = UU - XU / 2,
-         cU = (2 * UU - 2 * XU) / (2 * oU - 1),
-         AU = [];
-       for (const yU of [-zU, zU])
-         for (const QU of [-zU, zU])
-           for (let zU = 0; zU < oU; zU++) {
- ... (617 more removed lines; see GitHub link above)
+     let AH = function(HH) {
+         return HH[HH.Linear = 0] = "Linear", HH[HH.CatmullRomSpline = 1] = "CatmullRomSpline", HH
+       }({}),
+       rH = function(HH) {
+         return HH[HH.NoLoop = 0] = "NoLoop", HH[HH.LoopOnLastFrame = 1] = "LoopOnLastFrame", HH[HH.HoldOnLastFrame = 2] = "HoldOnLastFrame", HH
+       }({}),
+       SH = function(HH) {
+         return HH[HH.Movement = 0] = "Movement", HH[HH.Action = 1] = "Action", HH[HH.Emote = 2] = "Emote", HH[HH.Custom = 3] = "Custom", HH
+       }({}),
+       hH = function(HH) {
+         return HH[HH.Start = 0] = "Start", HH[HH.Stop = 1] = "Stop", HH
+       }({})
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4-L7` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/262.js#L4) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/262.js#L4-L7)

```diff
-   39926: (UU, XU, zU) => {
-     function cU(UU) {
-       return !(!UU.lobbyLeaderboardInfo && !UU.lobbyManage)
-     }
+   38071: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L9-L4684` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/262.js#L6-L7) · [Before (L9-L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/262.js#L9-L4684)

```diff
-       c: () => cU
-     })
-   },
-   39900: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => QU,
-       h: () => AU
-     });
-     var cU = zU(31);
-     let yU = !1;
- 
-     function QU() {
-       return yU
-     }
- 
-     function AU(UU) {
- ... (4660 more removed lines; see GitHub link above)
+       Color3: () => AH.c,
+       d: () => AH.g
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4686-L4694` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/262.js#L9-L10) · [Before (L4686-L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/262.js#L4686-L4694)

```diff
-     const cU = ["description", "label"];
- 
-     function yU(UU) {
-       const XU = UU.type;
-       return {
-         type: XU,
-         params: UU[XU]
-       }
-     }
+     var AH = LH(38074);
+     (0, AH.j)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/263.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/263.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696)

#### 1. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L4-L6)

```diff
-   39285: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
+   64115: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       DEVTOOLS_SHADERS: () => SH,
+       registerDevtoolsShader: () => hH
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L52` → after: `L9-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L9-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L9-L27) · [Before (L8-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L8-L52)

```diff
-     var cU = zU(39293);
-     const yU = [0, 0, 0];
-     class QU {
-       constructor(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU;
-         this.pool = UU, this.origin = XU, this.count = 0, this.free = []
-       }
-       take() {
-         var UU;
-         const XU = null !== (UU = this.free.pop()) && void 0 !== UU ? UU : this.count++;
-         return XU >= this.pool.xY && this.pool.grow(Math.max(2 * this.pool.xY, XU + 1)), this.hide(XU), XU
-       }
-       release(UU) {
-         this.hide(UU), this.free.push(UU)
-       }
-       write(UU, XU, zU, yU) {
- ... (29 more removed lines; see GitHub link above)
+     var AH = LH(41138),
+       rH = LH(38086);
+     const SH = {
+       devtoolsNormal: function(HH) {
+         return {
+           vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.d)(HH,"normal","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\t\t\t${(0,rH.yb)(HH,"world","mat4")}\n\t\t\t${(0,rH.Eb)(HH,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,rH.Eb)(HH,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t\n\t\t\t\t${(0,rH.C)(HH,"vec3","normalColor",`abs(${(0,rH.U)(HH,"vNormal")})`)}\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(HH) {
+         return {
+           vertex: `\n\t\t\t${(0,rH.d)(HH,"position","vec3")}\n\t\t\t${(0,rH.yb)(HH,"worldViewProjection","mat4")}\n\n\t\t\t${(0,rH.Hb)(HH,`\n\t\t\t\t${(0,rH.j)(HH)} = ${(0,rH.Cb)(HH,"worldViewProjection")} * ${(0,rH.l)(HH,"vec4",(0,rH.Lb)(HH,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,rH.T)(HH,`\n\t\t\t\t${(0,rH.P)(HH)} = ${(0,rH.l)(HH,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsDepth: function(HH) {
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L74` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L40) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L74)

```diff
-   39299: (UU, XU, zU) => {
+   38086: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L78-L120` → after: `L61-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L61-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L61-L78) · [Before (L78-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L78-L120)

```diff
-       g: () => oU
-     });
-     const cU = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
-       yU = [0, 1, 2, 0, 2, 3],
-       QU = [4, 5];
- 
-     function AU(UU, XU, zU, cU, yU) {
-       for (let AU = 0; AU < 6; AU++) QU.includes(AU) === yU && DU(UU, XU, zU, cU, AU)
-     }
- 
-     function FU(UU, XU, zU, cU) {
-       for (let yU = 0; yU < 6; yU++) DU(UU, XU, zU, cU, yU)
-     }
- 
-     function oU(UU, XU, zU, QU, AU) {
-       for (let FU = 0; FU < 6; FU++)
- ... (27 more removed lines; see GitHub link above)
+       eb: () => jH,
+       fb: () => FH,
+       g: () => bH,
+       ib: () => VH,
+       j: () => xH,
+       kb: () => UH,
+       l: () => zH,
+       nb: () => nH,
+       o: () => qH,
+       ob: () => DH,
+       pb: () => RH,
+       q: () => gH,
+       rb: () => TH,
+       t: () => GH,
+       ub: () => CH,
+       x: () => YH,
+ ... (2 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L591-L595` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L81-L82) · [Before (L591-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L591-L595)

```diff
-       11: "uraniumLine",
-       12: "centrifuge",
-       13: "reactorOnline",
-       14: "cryoCoolant",
-       15: "moreLasers"
+       GLSL: 0,
+       WGSL: 1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L603-L604` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L86) · [Before (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L603-L604)

```diff
-       var XU, zU;
-       return null !== (XU = null === (zU = yU[UU - 1]) || void 0 === zU ? void 0 : zU.reactorTier) && void 0 !== XU ? XU : 0
+       return HH === AH.WGSL
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L607-L609` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L89-L90) · [Before (L607-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L607-L609)

```diff
-     function NU(UU, XU) {
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU(UU) > 0;
-       return zU && !AU ? "hidden" : UU <= XU ? "open" : zU ? XU < 5 ? "hidden" : XU < QU ? "teaser" : "locked" : "locked"
+     function SH(HH, BH, LH) {
+       return rH(HH) ? LH : BH
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L613-L623` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L104-L107) · [Before (L613-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L613-L623)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const {
-         kind: cU,
-         n: yU
-       } = tU(UU);
-       return {
-         key: XU[cU],
-         params: {
-           [cU]: zU ? String(yU) : yU
-         }
-       }
+       if (!rH(HH)) return BH;
+       const LH = hH.get(BH);
+       if (!LH) throw new Error(`No WGSL name for shader type "${BH}"`);
+       return LH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L632-L657` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L111-L112) · [Before (L632-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L632-L657)

```diff
-       return YU(UU) > 0 && XU < QU
-     }
- 
-     function tU(UU) {
-       const XU = YU(UU);
-       if (XU > 0) return {
-         kind: "atomic",
-         n: XU,
-         short: `A${XU}`
-       };
-       const zU = function(UU) {
-         return UU >= 6 && UU <= 10 ? UU - 6 + 1 : 0
-       }(UU);
-       return zU > 0 ? {
-         kind: "stage",
-         n: zU,
- ... (10 more removed lines; see GitHub link above)
+       for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
+       return `${tH(HH,BH)}(${AH.join(", ")})`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L661-L678` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L116) · [Before (L661-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L661-L678)

```diff
-       return UU < XU ? function(UU) {
-         var XU;
-         return null !== (XU = yU[UU]) && void 0 !== XU ? XU : null
-       }(UU) : null
-     }
-     const GU = "baf2coresubmit",
-       BU = "baf2corebankpause",
-       ZU = "baf2coredeposit",
-       RU = "baf2corechargepause";
- 
-     function PU(UU) {
-       var XU;
-       return null !== (XU = UU.baf2CoreOpen) && void 0 !== XU ? XU : QU
-     }
-     const WU = ["Machine Bench", "Parts Bench", "Tool Bench", "Atomic Bench"];
- 
- ... (2 more removed lines; see GitHub link above)
+       return zH(HH, "int", BH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L684-L690` → after: `L119-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L119-L120) · [Before (L684-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L684-L690)

```diff
-     function CU(UU) {
-       var XU;
-       return null !== (XU = eU[UU]) && void 0 !== XU ? XU : ["Workbench"]
-     }
- 
-     function wU(UU) {
-       return CU(UU)[0]
+     function EH(HH, BH, LH, AH, SH) {
+       return rH(HH) ? `var ${LH}: ${tH(HH,BH)} = ${AH};` : `${uH(HH,SH)}${BH} ${LH} = ${AH};`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L696-L697` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L123-L124) · [Before (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L696-L697)

```diff
-     function SU(UU) {
-       return "on" === UU
+     function XH(HH, BH, LH) {
+       return rH(HH) ? `var ${LH}: ${tH(HH,BH)};` : `${BH} ${LH};`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L722-L723` → after: `L127-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L127-L128) · [Before (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L722-L723)

```diff
-     function sU(UU) {
-       return `lifeform:${(0,rU.Ie)(UU)}`
+     function GH(HH, BH, LH, AH) {
+       return rH(HH) ? `const ${LH}: ${tH(HH,BH)} = ${AH};` : `const ${BH} ${LH} = ${AH};`
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L726-L734` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L131-L133) · [Before (L726-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L726-L734)

```diff
-     function nU(UU) {
-       if (!UU) return null;
-       if (UU.startsWith(vU)) {
-         const XU = UU.slice(6);
-         return iU.includes(XU) ? XU : null
-       }
-       if (UU.endsWith(VU)) {
-         const XU = UU.slice(0, -14);
-         return void 0 !== fU[XU] ? XU : null
+     function YH(HH, BH, LH, AH, SH) {
+       if (rH(HH)) {
+         return `fn ${LH}(${AH.map((BH=>`${BH.name}: ${tH(HH,BH.type)}`)).join(", ")}) -> ${tH(HH,BH)} {${SH}}`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L736-L740` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L135) · [Before (L736-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L736-L740)

```diff
-       return null
-     }
- 
-     function mU(UU) {
-       return !0 === UU.mobFarm
+       return `${BH} ${LH}(${AH.map((HH=>`${HH.type} ${HH.name}`)).join(", ")}) {${SH}}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L744-L752` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L139) · [Before (L744-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L744-L752)

```diff
-       return HU[fU[XU]] * UU.opMs / 1e3
-     }
-     const xU = new Map;
-     const JU = "baf2islands",
-       jU = "baf2islandnew";
- 
-     function KU(UU) {
-       const XU = yU.findIndex((XU => XU.unlocks.includes(UU)));
-       return XU < 0 ? 1 : XU + 1
+       return !BH || rH(HH) ? "" : `${BH} `
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L755-L756` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L142-L143) · [Before (L755-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L755-L756)

```diff
-     function bU(UU) {
-       return Math.floor(UU).toLocaleString("en-US")
+     function QH(HH, BH, LH, AH) {
+       return rH(HH) ? `attribute ${BH}: ${tH(HH,LH)};` : `attribute ${uH(HH,AH)}${LH} ${BH};`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L763-L764` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L146-L147) · [Before (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L763-L764)

```diff
-     function zX(UU, XU, zU) {
-       return `${hU} ${UU} ${XU} ${zU}`
+     function WH(HH, BH, LH, AH) {
+       return rH(HH) ? `varying ${BH}: ${tH(HH,LH)};` : `varying ${uH(HH,AH)}${LH} ${BH};`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L768` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L151) · [Before (L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L768)

```diff
-       return `${UX} ${UU} ${XU} ${zU}`
+       return rH(HH) ? `uniform ${BH}: ${tH(HH,LH)};` : `uniform ${LH} ${BH};`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L772-L801` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L155) · [Before (L772-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L772-L801)

```diff
-       return `${UX} ${UU}`
-     }
-     const QX = [
-       [`${hU} `, "take"],
-       [`${UX} `, "put"]
-     ];
- 
-     function AX(UU) {
-       const XU = QX.find((XU => {
-         let [zU] = XU;
-         return UU.startsWith(zU)
-       }));
-       if (!XU) return null;
-       const [zU, cU] = XU, [yU, QU, ...AU] = UU.slice(zU.length).trim().split(" "), FU = Number(yU);
-       if (!Number.isSafeInteger(FU) || FU <= 0) return null;
-       if ("put" === cU && void 0 === QU) return {
- ... (14 more removed lines; see GitHub link above)
+       return rH(HH) ? "vertexOutputs.position" : "gl_Position"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L805-L806` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L159) · [Before (L805-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L805-L806)

```diff
-       const zU = "number" === typeof UU ? UU : "one" === UU ? 1 : "stack" === UU ? 99 : XU;
-       return Math.min(XU, zU)
+       return rH(HH) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${BH}}` : `void main() {${BH}}`
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L810-L811` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L163) · [Before (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L810-L811)

```diff
-       const zU = UU => "number" === typeof UU ? UU : "one" === UU ? 1 : 99;
-       return "fill" === UU || "fill" === XU ? "fill" : zU(UU) + zU(XU)
+       return rH(HH) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${BH}}` : `void main() {${BH}}`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L814-L830` → after: `L166-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L166-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L166-L170) · [Before (L814-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L814-L830)

```diff
-     function DX(UU, XU) {
-       const zU = AX(UU),
-         cU = AX(XU),
-         yU = zU && cU ? function(UU, XU) {
-           return "take" === UU.kind || "take" === XU.kind ? "take" === UU.kind && "take" === XU.kind && UU.item === XU.item ? {
-             ...XU,
-             mode: oX(UU.mode, XU.mode)
-           } : null : "putAll" === UU.kind || "putAll" === XU.kind ? {
-             kind: "putAll",
-             seq: XU.seq
-           } : UU.item === XU.item ? {
-             ...XU,
-             mode: oX(UU.mode, XU.mode)
-           } : null
-         }(zU, cU) : null;
-       return yU ? "putAll" === (QU = yU).kind ? yX(QU.seq) : "put" === QU.kind ? cX(QU.seq, QU.mode, QU.item) : zX(QU.seq, QU.mode, QU.item) : null;
- ... (1 more removed lines; see GitHub link above)
+     function TH(HH, BH, LH) {
+       if (rH(HH)) {
+         return [`var ${BH}Sampler: sampler;`, `var ${BH}: ${"2dArray"===LH?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+       }
+       return `uniform highp ${"2dArray"===LH?"sampler2DArray":"sampler2D"} ${BH};`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L834-L836` → after: `L173-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L173-L174) · [Before (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L834-L836)

```diff
-     function YX(UU, XU) {
-       for (var zU = arguments.length, cU = new Array(zU > 2 ? zU - 2 : 0), yU = 2; yU < zU; yU++) cU[yU - 2] = arguments[yU];
-       return [EX, UU[0], UU[1], UU[2], XU, ...cU].join(" ")
+     function UH(HH, BH, LH) {
+       return rH(HH) ? `textureSample(${BH}, ${BH}Sampler, ${LH})` : `texture2D(${BH}, ${LH})`
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L876-L881` → after: `L177-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L177-L179) · [Before (L876-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L876-L881)

```diff
-     function dX(UU) {
-       return {
-         input: PX,
-         inputAmount: 1,
-         output: UU,
-         outputAmount: 1
+     function VH(HH, BH, LH, AH, SH) {
+       if (rH(HH)) {
+         return `${SH?"textureSampleLevel":"textureSample"}(${BH}, ${BH}Sampler, ${LH}, ${CH(HH,`round(${AH})`)}${SH?`, ${SH}`:""})`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1117-L1118` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L186) · [Before (L1117-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1117-L1118)

```diff
-       var XU, zU;
-       return null !== (XU = null !== (zU = UU.fuelSlot) && void 0 !== zU ? zU : UU.couplerSlot) && void 0 !== XU ? XU : null
+       return rH(HH) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1122-L1143` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L190-L193) · [Before (L1122-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1122-L1143)

```diff
-       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-       if (!UU.couplable) throw new Error(`${UU.kind} takes no Power Coupler`);
-       let zU = vX.get(UU);
-       zU || (zU = [], vX.set(UU, zU));
-       let cU = zU[XU];
-       if (!cU) {
-         var yU;
-         const {
-           divisor: QU,
-           powerPerS: AU
-         } = MX[XU - 1], FU = UU.opMs / QU, oU = void 0 !== UU.fluidMade || void 0 !== UU.cryoMade ? UU.powerPerOp : AU * FU / 1e3;
-         cU = {
-           ...UU,
-           fuelSlot: null,
-           couplerSlot: null !== (yU = VX(UU)) && void 0 !== yU ? yU : void 0,
-           opMs: FU,
- ... (6 more removed lines; see GitHub link above)
+       return rH(HH) ? {
+         "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
+       } : {
+         "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1151-L1161` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L198) · [Before (L1151-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1151-L1161)

```diff
-       if (null === XU || (zU = XU, !WX.includes(zU))) return UU;
-       var zU;
-       let cU = mX.get(XU);
-       return cU || (cU = {
-         ...UU,
-         recipes: [dX(XU)]
-       }, mX.set(XU, cU)), cU
-     }
- 
-     function xX(UU) {
-       return !0 === UU.synth
+       return rH(HH) ? `vertexInputs.${BH}` : BH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1282-L1310` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L202) · [Before (L1282-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1282-L1310)

```diff
-       let zU = rX[UU];
-       if (XU.atomic && (zU = function(UU) {
-           const XU = uX[UU.kind];
-           if (!XU) return UU;
-           let zU = nX.get(UU.kind);
-           if (!zU) {
-             const cU = new Set(XU.map((UU => UU.input))),
-               yU = UU.recipes.filter((UU => !cU.has(UU.input)));
-             zU = {
-               ...UU,
-               recipes: [...yU, ...XU]
-             }, nX.set(UU.kind, zU)
-           }
-           return zU
-         }(zU)), zU.synth) return lX(zU, XU.taught);
-       if (XU.coupled && zU.couplable) return sX(zU, XU.level);
- ... (13 more removed lines; see GitHub link above)
+       return rH(HH) ? `vertexOutputs.${BH}` : BH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1436-L1441` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L206) · [Before (L1436-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1436-L1441)

```diff
-       var zU;
-       const cU = qz(UU);
-       if (!fz.has(cU)) return UU;
-       if (cU !== gz) return XU ? cU + uz : cU;
-       const yU = null !== (zU = Sz(UU)) && void 0 !== zU ? zU : "fuel";
-       return XU ? "fuel" === yU ? cU + uz : `${cU}${uz}|${"water"===yU?"Water":"Waste"}` : Bz[yU]
+       return rH(HH) ? `fragmentInputs.${BH}` : BH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1445-L1452` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L210) · [Before (L1445-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1445-L1452)

```diff
-       const zU = cc(UU, XU);
-       if ("Air" === zU) return !1;
-       const cU = "reactor" === UU ? dz : Lz;
-       return ez.some((UU => cU[UU].includes(zU))) || "reactor" === UU && Cz.includes(zU)
-     }
- 
-     function Mz(UU) {
-       return Rz[UU]
+       return rH(HH) ? `uniforms.${BH}` : BH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1455-L1457` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L213-L214) · [Before (L1455-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1455-L1457)

```diff
-     function vz(UU) {
-       var XU;
-       return null !== (XU = Zz[UU]) && void 0 !== XU ? XU : Zz[1]
+     function fH(HH, BH, LH) {
+       return rH(HH) ? `frame.${BH}` : LH
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1461-L1487` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L218) · [Before (L1461-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1461-L1487)

```diff
-       const [XU, , zU] = vz(UU);
-       return [zU, 0, -XU]
-     }
- 
-     function sz(UU, XU, zU, cU, yU, QU) {
-       return {
-         ctrl: [UU[0], UU[1], UU[2]],
-         rot: Zz[XU] ? XU : 1,
-         w: zU,
-         h: cU,
-         d: yU,
-         cu: QU[0],
-         cv: QU[1]
-       }
-     }
- 
- ... (11 more removed lines; see GitHub link above)
+       return rH(HH) ? "scene.vEyePosition" : "vEyePosition"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1494` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L222) · [Before (L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1494)

```diff
-       return UU.w * UU.h * UU.d
+       return rH(HH) ? "mesh.visibility" : "visibility"
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1498-L1499` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L226) · [Before (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1498-L1499)

```diff
-       const XU = Vz(UU.rot);
-       return [UU.ctrl[0] - XU[0] * UU.cu, UU.ctrl[1] - UU.cv, UU.ctrl[2] - XU[2] * UU.cu]
+       return rH(HH) ? "fragmentInputs.position" : "gl_FragCoord"
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1503-L1526` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L230) · [Before (L1503-L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1503-L1526)

```diff
-       return UU.cv * UU.d * UU.w + UU.cu
-     }
- 
-     function bz(UU, XU) {
-       const zU = XU % UU.w,
-         cU = Math.floor(XU / UU.w) % UU.d;
-       return [zU, Math.floor(XU / (UU.w * UU.d)), cU]
-     }
- 
-     function Tz(UU, XU) {
-       const [zU, cU, yU] = bz(UU, XU), QU = jz(UU), AU = vz(UU.rot), FU = Vz(UU.rot);
-       return [QU[0] + FU[0] * zU - AU[0] * yU, QU[1] + cU, QU[2] + FU[2] * zU - AU[2] * yU]
-     }
- 
-     function hz(UU, XU) {
-       const zU = jz(UU),
- ... (8 more removed lines; see GitHub link above)
+       return rH(HH) ? "fragmentOutputs.color" : "gl_FragColor"
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1530-L1532` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L234) · [Before (L1530-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1530-L1532)

```diff
-       if (XU === Kz(UU)) return "ctrl";
-       const [zU, cU, yU] = bz(UU, XU), QU = 0 === cU || cU === UU.h - 1, AU = Number(0 === zU || zU === UU.w - 1) + Number(QU) + Number(0 === yU || yU === UU.d - 1);
-       return AU >= 2 ? "edge" : 1 === AU ? QU ? "cap" : "wall" : "inside"
+       return rH(HH) ? `dpdx(${BH})` : `dFdx(${BH})`
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1536-L1537` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L238) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1536-L1537)

```diff
-       const [zU, cU, yU] = bz(UU, XU);
-       return 0 === zU || zU === UU.w - 1 || 0 === cU || cU === UU.h - 1 || 0 === yU || yU === UU.d - 1 ? -1 : ((cU - 1) * (UU.d - 2) + (yU - 1)) * (UU.w - 2) + (zU - 1)
+       return rH(HH) ? `dpdy(${BH})` : `dFdy(${BH})`
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1541-L1545` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L242) · [Before (L1541-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1541-L1545)

```diff
-       const zU = UU.w - 2,
-         cU = UU.d - 2,
-         yU = XU % zU + 1,
-         QU = Math.floor(XU / zU) % cU + 1;
-       return ((Math.floor(XU / (zU * cU)) + 1) * UU.d + QU) * UU.w + yU
+       return rH(HH) ? `inverseSqrt(${BH})` : `inversesqrt(${BH})`
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1548-L1550` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L245-L246) · [Before (L1548-L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1548-L1550)

```diff
-     function cc(UU, XU) {
-       const zU = qz(XU);
-       return "reactor" === UU && zU === tz ? Pz : zU
+     function RH(HH, BH, LH, AH) {
+       return rH(HH) ? `select(${AH}, ${LH}, ${BH})` : `((${BH}) ? (${LH}) : (${AH}))`
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1554-L1603` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L250) · [Before (L1554-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1554-L1603)

```diff
-       const cU = "ctrl" === XU ? qz(zU) : cc(UU, zU);
-       return ("reactor" === UU ? dz : Lz)[XU].includes(cU) ? "ok" : "Air" === cU ? "missing" : Hz(UU, zU) ? "wrong" : "blocked"
-     }
- 
-     function Qc(UU, XU) {
-       return "battery" === UU ? kz : "inside" === XU ? null : function(UU, XU) {
-         if ("inside" === XU || "ctrl" === XU || "battery" === UU) return null;
-         return "edge" === XU ? Pz : Wz
-       }(UU, XU)
-     }
-     const Ac = {
-         LASER_DRAW: 5e3,
-         FOCUS_BY_LASERS: [0, 1e3, 2500, 5e3, 8e3],
-         NOVA_FOCUS: 48e4,
-         NOVA_SA: 16,
-         NOVA_GD: 4,
- ... (34 more removed lines; see GitHub link above)
+       return rH(HH) ? `((${BH}) - (${LH}) * floor((${BH}) / (${LH})))` : `mod(${BH}, ${LH})`
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1613-L1627` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L254) · [Before (L1613-L1627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1613-L1627)

```diff
-       const cU = ac[XU];
-       return [UU[0] + cU[0] * zU, UU[1], UU[2] + cU[2] * zU]
-     }
- 
-     function gc(UU, XU) {
-       if (XU[1] !== UU[1]) return null;
-       const zU = XU[0] - UU[0],
-         cU = XU[2] - UU[2];
-       if (0 !== zU === (0 !== cU)) return null;
-       const yU = Math.abs(zU + cU);
-       if (yU > Ac.LASER_D) return null;
-       return {
-         dir: cU < 0 ? 0 : zU > 0 ? 1 : cU > 0 ? 2 : 3,
-         OD: yU
-       }
+       return rH(HH) ? `${BH} = vec4f(${LH}, ${BH}.a);` : `${BH}.rgb = ${LH};`
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1631-L1644` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L258) · [Before (L1631-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1631-L1644)

```diff
-       const cU = XU => Math.abs(UU[0] - XU[0]) <= 1 && Math.abs(UU[1] - XU[1]) <= 1;
-       return cU(XU) || cU(zU)
-     }
- 
-     function Gc(UU, XU) {
-       return function(UU, XU, zU, cU) {
-         return [0, 1, 2, 3].map((yU => {
-           for (let QU = 1; QU <= Ac.LASER_D; QU++) {
-             const AU = tc(UU, yU, QU);
-             if (kc([AU[0], AU[2]], XU, zU) || !cU(AU)) return !1
-           }
-           return !0
-         }))
-       }(pc(UU)[1], XU.spawnXZ, XU.coreXZ, (UU => UU[1] >= Nz.n && UU[1] < Nz.n + Nz.r && UU[0] >= XU.minXZ[0] && UU[0] <= XU.maxXZ[0] && UU[2] >= XU.minXZ[1] && UU[2] <= XU.maxXZ[1]))
+       return rH(HH) ? `${BH} = vec4f(${BH}.rgb * (${LH}), ${BH}.a);` : `${BH}.rgb *= ${LH};`
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1648-L1666` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L261-L262) · [Before (L1648-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1648-L1666)

```diff
-     function Zc(UU) {
-       return Math.max(48 + 16 * UU, gU(UU).machineAllowance)
-     }
-     const Rc = ["_Solar Panel SE", "_Solar Panel NW", "_Solar Panel NE"];
- 
-     function Pc(UU) {
-       const XU = UU.split("|")[0];
-       return Rc.includes(XU) ? "Solar Panel" : XU === pz.e ? "Fluid Pipe" : Nc(XU) >= 0 ? "Collider" : (zU = XU, Bc.includes(zU) ? XU : null);
-       var zU
-     }
-     const Wc = "buildAFactory2Game:solarPanelDescription";
-     const dc = ["Wood Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe"];
- 
-     function Lc(UU, XU) {
-       var zU;
-       return null !== (zU = dc.find((zU => {
- ... (3 more removed lines; see GitHub link above)
+     function DH(HH, BH, LH) {
+       return rH(HH) ? `${BH} = vec4f(${LH}, ${BH}.w);` : `${BH}.xyz = ${LH};`
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1668-L1741` → after: `L264-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L264-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L264-L271) · [Before (L1668-L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1668-L1741)

```diff
-     const ec = "buildAFactory2Game:";
-     let Cc = null;
-     const wc = {
-         Workbench: "lookWorkbench",
-         Furnace: "lookFurnace",
-         Chest: "lookChest",
-         Stone: "lookStone",
-         "Messy Stone": "lookMessyStone",
-         Gravel: "lookGravel",
-         Sand: "lookSand",
-         "Tilled Soil": "lookTilledSoil",
-         "Fertilised Soil": "lookFertilisedSoil",
-         "Wheat Seeds": "lookWheatGrowing",
-         Wheat: "lookWheatRipe",
-         "Loot Chest": "lookRuinChest"
-       },
- ... (58 more removed lines; see GitHub link above)
+   },
+   41138: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => AH
+     });
+     class AH {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1743-L1746` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L273-L274) · [Before (L1743-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1743-L1746)

```diff
-       return {
-         name: EU,
-         detail: (0, rU.Se)(UU.description(XU)),
-         detailItem: null
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersStore : AH.ShadersStoreWGSL
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L1748-L16672` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L276-L277) · [Before (L1748-L16672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L1748-L16672)

```diff
-     }
- 
-     function uc(UU) {
-       return UU < Nz.n - 24
-     }
-     const fc = new Set(["Comet Ore", "Comet Heart", "Isotope Comet Ore", "Isotope Comet Heart"]);
-     const ic = "Wrench",
-       Hc = "Nova Wrench";
- 
-     function Mc(UU) {
-       return UU === ic || UU === Hc
-     }
-     const vc = [...Nz.J, "Belt Lift", "Belt Drop"];
-     const Vc = ["Belt Lift", "Belt Drop"],
-       sc = {
-         leftRight: "leftFront",
- ... (14909 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.IncludesShadersStore : AH.IncludesShadersStoreWGSL
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/263.js` (Changed code · before: `L16675-L17827` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-dbf40035a114b28c3cb1adf98b68d0556014aaa350ec7b73f73fe190b2e86696) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/263.js#L280) · [Before (L16675-L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/263.js#L16675-L17827)

```diff
-     const Hg = [.1, .05, .1],
-       Mg = {
-         texture: "effect_5",
-         xY: Math.ceil(48),
-         minLifeTime: .35,
-         maxLifeTime: .8,
-         minEmitPower: 1,
-         maxEmitPower: 2,
-         minSize: .2,
-         maxSize: .45,
-         emitRate: 0,
-         gravity: [0, -2, 0],
-         dir1: [-.15, -1, -.15],
-         dir2: [.15, -1, .15],
-         colorGradients: [{
-           timeFraction: 0,
- ... (1137 more removed lines; see GitHub link above)
+     AH.ShadersRepository = "src/Shaders/", AH.ShadersStore = {}, AH.IncludesShadersStore = {}, AH.ShadersRepositoryWGSL = "src/ShadersWGSL/", AH.ShadersStoreWGSL = {}, AH.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/264.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/264.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42)

#### 1. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L4)

```diff
-   44290: (UU, XU, zU) => {
+   42369: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L6-L59` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L6) · [Before (L6-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L6-L59)

```diff
-       e: () => QU
-     });
-     var cU = zU(41210),
-       yU = zU(44292);
-     class QU {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
-         this.maxDepth = zU, this.tyU = [], this._maxBlockCapacity = XU || 64, this._selectionContent = new cU.c(1024), this._creationFunc = UU
-       }
-       update(UU, XU, zU) {
-         yU.c._CreateBlocks(UU, XU, zU, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
-       }
-       UyU(UU) {
-         for (let XU = 0; XU < this.blocks.length; XU++) {
-           this.blocks[XU].addEntry(UU)
-         }
- ... (38 more removed lines; see GitHub link above)
+       noaDevTools: () => XH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L61-L85` → after: `L8-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L8-L36) · [Before (L61-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L61-L85)

```diff
-     var cU = zU(37819),
-       yU = zU(41389);
-     class QU {
-       constructor(UU, XU, zU, cU, yU, QU) {
-         this.entries = [], this.gyU = new Array, this._capacity = zU, this._depth = cU, this._maxDepth = yU, this._creationFunc = QU, this._minPoint = UU, this._maxPoint = XU, this.gyU.push(UU.clone()), this.gyU.push(XU.clone()), this.gyU.push(UU.clone()), this.gyU[2].x = XU.x, t … [truncated]
-       }
-       get xY() {
-         return this._capacity
-       }
-       get DyU() {
-         return this._minPoint
-       }
-       get oyU() {
-         return this._maxPoint
-       }
-       addEntry(UU) {
- ... (9 more removed lines; see GitHub link above)
+     var AH = LH(38304),
+       rH = LH(38295),
+       SH = LH(3038),
+       hH = LH(1789),
+       tH = LH(42292);
+ 
+     function zH(HH) {
+       const {
+         mX: BH
+       } = HH, LH = BH.engine, AH = {
+         width: LH.getRenderWidth(),
+         height: LH.getRenderHeight()
+       };
+       return {
+         canvas: LH.getRenderingCanvas(),
+         maxTextureSize: LH.getCaps().maxTextureSize,
+ ... (13 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L98-L102` → after: `L40-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L40-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L40-L79) · [Before (L98-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L98-L102)

```diff
-       select(UU, XU, zU) {
-         if (yU.e.IsInFrustum(this.gyU, UU)) {
-           if (this.blocks) {
-             for (let cU = 0; cU < this.blocks.length; cU++) {
-               this.blocks[cU].select(UU, XU, zU)
+     }
+     var CH = LH(34856);
+ 
+     function EH(HH, BH) {
+       let {
+         width: CH,
+         height: EH,
+         colouring: XH
+       } = BH;
+       const GH = "normals" === XH,
+         YH = "depth" === XH;
+       return new Promise((BH => {
+         try {
+           const uH = (0, SH.c)();
+           if (uH.mX.yu) return "screenshot" !== HH || null !== XH ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void BH()) : void(0, tH.f)(zH(uH), CH, EH).finally(BH);
+           const QH = uH.mX.engine,
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L104-L113` → after: `L81-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L81-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L81-L128) · [Before (L104-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L104-L113)

```diff
-             return
-           }
-           zU ? XU.concat(this.entries) : XU.concatWithNoDuplicate(this.entries)
-         }
-       }
-       intersects(UU, XU, zU, cU) {
-         if (yU.e.IntersectsSphere(this._minPoint, this._maxPoint, UU, XU)) {
-           if (this.blocks) {
-             for (let yU = 0; yU < this.blocks.length; yU++) {
-               this.blocks[yU].intersects(UU, XU, zU, cU)
+             if (GH) {
+               const HH = [],
+                 BH = [];
+               PH.forEach((LH => {
+                 const AH = LH.name.toLowerCase(),
+                   rH = LH.jF().boundingBox.center,
+                   SH = WH.activeCamera.position.subtract(rH).length();
+                 AH.includes("sky") || AH.includes("background") || AH.includes("environment") || SH > 1e3 ? BH.push(LH) : HH.push(LH)
+               })), XH("devtoolsNormal", uH);
+               const LH = new zH("normalMaterial", WH, "devtoolsNormal", {
+                 attributes: ["position", "normal"],
+                 uniforms: ["worldViewProjection", "world"],
+                 shaderLanguage: uH
+               });
+               XH("devtoolsWhite", uH);
+               const AH = new zH("whiteMaterial", WH, "devtoolsWhite", {
+ ... (32 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L115-L124` → after: `L130-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L130-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L130-L221) · [Before (L115-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L115-L124)

```diff
-             return
-           }
-           cU ? zU.concat(this.entries) : zU.concatWithNoDuplicate(this.entries)
-         }
-       }
-       intersectsRay(UU, XU) {
-         if (UU.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
-           if (this.blocks) {
-             for (let zU = 0; zU < this.blocks.length; zU++) {
-               this.blocks[zU].intersectsRay(UU, XU)
+             if ((0, AH.f)(WH.meshes, !0), TH = !0, "glb" === HH && (UH = (0, rH.b)(WH.meshes)), "screenshot" === HH) {
+               let HH = `bloxd-screenshot-${MH}x${xH}-${Date.now()}.png`;
+               GH ? HH = `bloxd-screenshot-normals-${MH}x${xH}-${Date.now()}.png` : YH && (HH = `bloxd-screenshot-depth-${MH}x${xH}-${Date.now()}.png`), tH(QH, WH.activeCamera, {
+                 width: MH,
+                 height: xH
+               }, (function(LH) {
+                 VH(), fetch(LH).then((function(HH) {
+                   return HH.blob()
+                 })).then((function(LH) {
+                   (0, hH.downloadBlob)(LH, HH), BH()
+                 })).catch((function(HH) {
+                   console.error("Error processing screenshot:", HH), BH()
+                 }))
+               }), "image/png", void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, (function() {
+                 console.error("Screenshot timed out"), VH(), BH()
+               }))
+ ... (76 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L126-L128` → after: `L223-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L223-L227) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L126-L128)

```diff
-             return
-           }
-           XU.concatWithNoDuplicate(this.entries)
+           })).catch((HH => {
+             console.error("Error downloading the scene:", HH), BH()
+           }))
+         } catch (uH) {
+           console.error("Error taking screenshot:", uH), BH()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L131-L132` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L235-L236) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L131-L132)

```diff
-       createInnerBlocks() {
-         QU._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
+       downloadScene(HH, BH) {
+         return EH(HH, BH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L134-L144` → after: `L238-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L238-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L238-L247) · [Before (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L134-L144)

```diff
-       static _CreateBlocks(UU, XU, zU, yU, AU, FU, oU, DU) {
-         oU.blocks = new Array;
-         const EU = new cU.q((XU.x - UU.x) / 2, (XU.y - UU.y) / 2, (XU.z - UU.z) / 2);
-         for (let cU = 0; cU < 2; cU++)
-           for (let XU = 0; XU < 2; XU++)
-             for (let YU = 0; YU < 2; YU++) {
-               const NU = UU.add(EU.multiplyByFloats(cU, XU, YU)),
-                 IU = UU.add(EU.multiplyByFloats(cU + 1, XU + 1, YU + 1)),
-                 pU = new QU(NU, IU, yU, AU + 1, FU, DU);
-               pU.addEntries(zU), oU.blocks.push(pU)
-             }
+       async setAmbientLightIntensity(HH) {
+         const {
+           Color3: BH
+         } = await Promise.all([LH.e(259), LH.e(262)]).then((() => LH(38071)));
+         (0, SH.c)().mX.yN().ambientColor = BH.FromArray([HH, HH, HH])
+       }
+       capturePhoto(HH, BH, LH) {
+         return function(HH, BH, LH, AH) {
+           return (0, tH.c)(zH(HH), BH, LH, AH)
+         }((0, SH.c)(), HH, BH, LH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L148` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L251) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L148)

```diff
-   44300: (UU, XU, zU) => {
+   42292: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L150` → after: `L253-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L253-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L253-L254) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L150)

```diff
-       b: () => EU
+       c: () => tH,
+       f: () => zH
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L152-L167` → after: `L256-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L256-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L256-L315) · [Before (L152-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L152-L167)

```diff
-     var cU = zU(41202),
-       yU = zU(37819),
-       QU = zU(41512),
-       AU = zU(44235),
-       FU = zU(41265),
-       oU = zU(37841),
-       DU = zU(44290);
-     class EU {
-       constructor(UU) {
-         this.name = FU.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new AU.E(yU.q.Zero(), new yU.q(1, 1, 1)), (UU = UU || oU.b.LastCreatedScene) && (this.sa = UU, this.sa.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.sa.getActiveSubMeshCandidat … [truncated]
-       }
-       register() {
-         this.sa.onMeshRemovedObservable.add((UU => {
-           const XU = this.sa.selectionOctree;
-           if (void 0 !== XU && null !== XU) {
-             const zU = XU.tyU.indexOf(UU); - 1 !== zU && XU.tyU.splice(zU, 1)
+     var AH = LH(1807);
+     const rH = 33177600,
+       SH = 3e4;
+     let hH = !1;
+ 
+     function tH(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: tH = 1,
+         type: zH = "image/png",
+         quality: CH
+       } = AH;
+       return HH.VX() ? hH ? Promise.reject(new Error("A screenshot is already being taken")) : (hH = !0, new Promise(((AH, EH) => {
+         let XH, GH = 2,
+           YH = null;
+         const uH = () => {
+ ... (44 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L224` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L329) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L224)

```diff
-   44235: (UU, XU, zU) => {
+   38304: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L229-L235` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L332-L333) · [Before (L229-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L229-L235)

```diff
-       e: () => aU,
-       i: () => pU,
-       l: () => IU,
-       o: () => eU,
-       s: () => LU,
-       t: () => PU,
-       x: () => dU
+       f: () => tH,
+       h: () => hH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L237-L455` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L335-L337) · [Before (L237-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L237-L455)

```diff
-     var cU = zU(37825),
-       yU = zU(37819),
-       QU = zU(37827),
-       AU = zU(41383),
-       FU = zU(41235),
-       oU = zU(37841),
-       DU = zU(41289);
-     const EU = {
-       internalPickerForMesh: void 0
-     };
-     class YU {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
-           yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cU.c;
-         this.origin = UU, this.direction = XU, this.length = zU, this.epsilon = yU
-       }
- ... (203 more removed lines; see GitHub link above)
+     var AH = LH(38302),
+       rH = LH(38308);
+     let SH = 0;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L457-L459` → after: `L339-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L339-L343) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L457-L459)

```diff
-     function pU(UU, XU, zU, cU) {
-       const yU = YU.Zero();
-       return aU(UU, XU, zU, yU, cU), yU
+     function hH(HH, BH) {
+       const LH = HH;
+       LH._noaFaceGroups = null !== BH && void 0 !== BH ? BH : null, LH._noaFaceEpoch = -1, LH._noaFaceMask = -1, LH._noaFaceCount = -1, LH._noaFaceMaterial = null;
+       const AH = HH.jU;
+       AH && 1 === AH.length && (AH[0].indexStart = 0, AH[0].indexCount = HH.getTotalIndices())
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L462-L476` → after: `L346-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L346-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L346-L353) · [Before (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L462-L476)

```diff
-     function aU(UU, XU, zU, cU, QU) {
-       if (!FU.c) return UU;
-       const AU = UU.qp();
-       if (!QU && !(QU = UU.activeCamera) && !(QU = UU.cameraToUseForPointers)) throw new Error("Active camera not set");
-       const oU = QU.viewport,
-         DU = AU.getRenderHeight(),
-         {
-           x: EU,
-           y: YU,
-           width: NU,
-           height: IU
-         } = oU.toGlobal(AU.getRenderWidth(), DU),
-         pU = yU.e.Identity(),
-         aU = 1 / AU.getHardwareScalingLevel();
-       return XU = XU * aU - EU, zU = zU * aU - (DU - YU - IU), cU.update(XU, zU, NU, IU, pU, pU, QU.getProjectionMatrix()), UU
+     function tH(HH, BH) {
+       if (BH) {
+         SH++;
+         for (const BH of HH) {
+           const HH = BH._noaFaceGroups;
+           HH && hH(BH, HH)
+         }
+       } else SH = Math.max(0, SH - 1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L479-L480` → after: `L356-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L356-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L356-L364) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L479-L480)

```diff
-     function tU(UU, XU, zU, cU, yU, QU, AU, FU) {
-       return gU(UU, zU, cU, XU(cU, zU.enableDistantPicking), yU, QU, AU, FU)
+     function zH(HH, BH, LH) {
+       let rH = -1,
+         SH = 0;
+       for (let hH = 0; hH < AH.e; hH++) {
+         const LH = HH[hH],
+           tH = HH[hH + 1];
+         tH > LH && BH & 1 << AH.c[hH] && (rH < 0 && (rH = LH), SH = tH)
+       }
+       return rH < 0 ? (LH[0] = 0, LH[1] = 0, 0) : (LH[0] = rH, LH[1] = SH - rH, SH - rH)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L482-L485` → after: `L366-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L366-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L366-L413) · [Before (L482-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L482-L485)

```diff
- 
-     function gU(UU, XU, zU, cU, yU, QU, AU, FU) {
-       const oU = XU.intersects(cU, yU, AU, QU, zU, FU);
-       return oU && oU.hit ? !yU && null != UU && oU.distance >= UU.distance ? null : oU : null
+     class CH {
+       constructor(HH, BH) {
+         this.xX = HH, this.engine = BH, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+       }
+       apply(HH, BH) {
+         if (!BH) return;
+         const LH = BH.getProjectionMatrix().m,
+           hH = 0 === SH && 0 === LH[15],
+           tH = BH.globalPosition,
+           {
+             engine: CH
+           } = this,
+           EH = hH ? (0, rH.d)(LH, CH.getRenderWidth(), CH.getRenderHeight()) : 0;
+         tH.x === this.eyeX && tH.y === this.eyeY && tH.z === this.eyeZ && EH === this.focalPx && hH === this.culling || (this.epoch++, this.eyeX = tH.x, this.eyeY = tH.y, this.eyeZ = tH.z, this.focalPx = EH, this.culling = hH);
+         const {
+           epoch: XH,
+ ... (32 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L489` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L426) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L489)

```diff
-       return "InstancedLinesMesh" === UU || "LinesMesh" === UU ? XU.intersectionThreshold : 0
+       HH._data = BH
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L493-L507` → after: `L430-L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L430-L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L430-L431) · [Before (L493-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L493-L507)

```diff
-       const XU = UU.getClassName();
-       if ("GreasedLineMesh" === XU) return {
-         rawBoundingInfo: null,
-         intersectionThreshold: 0
-       };
-       const zU = UU.rawBoundingInfo;
-       return {
-         rawBoundingInfo: zU,
-         intersectionThreshold: zU ? kU(XU, UU) : 0
-       }
-     }
- 
-     function BU(UU, XU, zU, cU, yU) {
-       const QU = UU(zU, XU.enableDistantPicking);
-       return QU.intersectsSphere(cU.dyU, yU) && QU.intersectsBox(cU.boundingBox, yU) ? QU : null
+       var BH, LH;
+       (null !== (BH = null === (LH = HH.getBuffer()) || void 0 === LH ? void 0 : LH.aX) && void 0 !== BH ? BH : 0) > 0 && (AH.add(HH), 0 === rH ? hH(HH, null) : SH.add(HH))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L510-L542` → after: `L434-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L434-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L434-L443) · [Before (L510-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L510-L542)

```diff
-     function ZU(UU, XU, zU, cU, QU, AU) {
-       let oU = null;
-       const DU = !!(UU.activeCameras && UU.activeCameras.length > 1 && UU.cameraToUseForPointers !== UU.activeCamera),
-         YU = UU.cameraToUseForPointers || UU.activeCamera,
-         NU = EU.internalPickerForMesh || tU,
-         IU = NU === tU;
-       for (let FU = 0; FU < UU.meshes.length; FU++) {
-         const EU = UU.meshes[FU];
-         if (zU) {
-           if (!zU(EU, -1)) continue
-         } else if (!EU.isEnabled() || !EU.isVisible || !EU.ma) continue;
-         const pU = DU && EU.isWorldMatrixCameraDependent(),
-           aU = EU.computeWorldMatrix(pU, YU);
-         if (EU.hasThinInstances && EU.RzU) {
-           const UU = NU(oU, XU, EU, aU, !0, !0, AU);
-           if (UU) {
- ... (17 more removed lines; see GitHub link above)
+     function zH(HH) {
+       rH++;
+       for (const LH of function(HH) {
+           const BH = new Set;
+           for (const rH of HH) {
+             const HH = rH.geometry;
+             for (const rH of Object.values(null !== (LH = null === HH || void 0 === HH ? void 0 : HH.getVertexBuffers()) && void 0 !== LH ? LH : {})) {
+               var LH;
+               const HH = rH.getWrapperBuffer();
+               AH.has(HH) && BH.add(HH)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L545-L547` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L446-L452) · [Before (L545-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L545-L547)

```diff
-         } else {
-           const UU = NU(oU, XU, EU, aU, cU, QU, AU);
-           if (UU && (oU = UU, cU)) return oU
+           return BH
+         }(HH)) LH.getData() || CH(LH), SH.add(LH);
+       let BH = !0;
+       return () => {
+         if (BH && (BH = !1, rH--, 0 === rH)) {
+           for (const HH of SH) hH(HH, null);
+           SH.clear()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L553-L592` → after: `L457-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L457-L462) · [Before (L553-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L553-L592)

```diff
-     function RU(UU, XU, zU, cU) {
-       if (!FU.c) return null;
-       const QU = [],
-         AU = !!(UU.activeCameras && UU.activeCameras.length > 1 && UU.cameraToUseForPointers !== UU.activeCamera),
-         oU = UU.cameraToUseForPointers || UU.activeCamera,
-         DU = EU.internalPickerForMesh || tU,
-         YU = DU === tU;
-       for (let FU = 0; FU < UU.meshes.length; FU++) {
-         const EU = UU.meshes[FU];
-         if (zU) {
-           if (!zU(EU, -1)) continue
-         } else if (!EU.isEnabled() || !EU.isVisible || !EU.ma) continue;
-         const NU = AU && EU.isWorldMatrixCameraDependent(),
-           IU = EU.computeWorldMatrix(NU, oU);
-         if (EU.hasThinInstances && EU.RzU) {
-           if (DU(null, XU, EU, IU, !0, !0, cU)) {
- ... (24 more removed lines; see GitHub link above)
+     function CH(HH) {
+       const BH = HH.getBuffer();
+       if (!BH || !(BH.aX > 0)) return;
+       const LH = HH._engine,
+         AH = new Uint8Array(BH.aX);
+       LH.bindArrayBuffer(BH), LH._gl.getBufferSubData(LH._gl.ARRAY_BUFFER, 0, AH), LH._resetVertexBufferBinding(), hH(HH, AH)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L595-L598` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L488-L489) · [Before (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L595-L598)

```diff
-     function PU(UU, XU, zU, cU, QU, AU) {
-       if (!FU.c) return null;
-       const oU = ZU(UU, (cU => (UU._tempPickingRay || (UU._tempPickingRay = YU.Zero()), IU(UU, XU, zU, cU, UU._tempPickingRay, AU || null), UU._tempPickingRay)), cU, QU, !0);
-       return oU && (oU.ray = NU(UU, XU, zU, yU.e.Identity(), AU || null)), oU
+     function CH(HH) {
+       return !!HH && HH.backFaceCulling && (0 === HH.transparencyMode || 1 === HH.transparencyMode)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L601-L603` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L506-L507) · [Before (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L601-L603)

```diff
-     function WU(UU, XU, zU, cU, QU, AU, FU) {
-       const oU = ZU(UU, ((cU, yU) => (UU._tempPickingRay || (UU._tempPickingRay = YU.Zero()), IU(UU, XU, zU, cU, UU._tempPickingRay, AU || null, !1, yU), UU._tempPickingRay)), cU, QU, !1, FU);
-       return oU && (oU.ray = NU(UU, XU, zU, yU.e.Identity(), AU || null)), oU
+     function tH(HH, BH, LH) {
+       return Math.min(Math.abs(HH[0] * BH), Math.abs(HH[5] * LH)) / 2
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L606-L608` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L510-L511) · [Before (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L606-L608)

```diff
-     function dU(UU, XU, zU, cU, QU) {
-       const AU = ZU(UU, (zU => (UU._pickWithRayInverseMatrix || (UU._pickWithRayInverseMatrix = yU.e.Identity()), zU.invertToRef(UU._pickWithRayInverseMatrix), UU._cachedRayForTransform || (UU._cachedRayForTransform = YU.Zero()), YU.TransformToRef(XU, UU._pickWithRayInverseMatrix … [truncated]
-       return AU && (AU.ray = XU), AU
+     function zH(HH, BH) {
+       return rH + SH * HH * HH / BH
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L611-L612` → after: `L514-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L514-L516) · [Before (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L611-L612)

```diff
-     function LU(UU, XU, zU, cU, yU, QU) {
-       return RU(UU, (cU => NU(UU, XU, zU, cU, yU || null)), cU, QU)
+     function CH(HH, BH, LH, rH, SH) {
+       const hH = AH.q;
+       return EH(HH[hH], HH[hH + 1], HH[hH + 2], HH[hH + 3], HH[hH + 4], HH[hH + 5], BH, LH, rH, SH)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L615-L616` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L519-L520) · [Before (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L615-L616)

```diff
-     function eU(UU, XU, zU, cU) {
-       return RU(UU, (zU => (UU._pickWithRayInverseMatrix || (UU._pickWithRayInverseMatrix = yU.e.Identity()), zU.invertToRef(UU._pickWithRayInverseMatrix), UU._cachedRayForTransform || (UU._cachedRayForTransform = YU.Zero()), YU.TransformToRef(XU, UU._pickWithRayInverseMatrix, UU … [truncated]
+     function EH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+       return (hH <= HH - CH ? 0 : 1) | (hH >= BH + CH ? 0 : 2) | (tH <= LH - CH ? 0 : 4) | (tH >= AH + CH ? 0 : 8) | (zH <= rH - CH ? 0 : 16) | (zH >= SH + CH ? 0 : 32)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L620-L627` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L541-L542) · [Before (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L620-L627)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
-         cU = arguments.length > 3 ? arguments[3] : void 0,
-         QU = arguments.length > 4 ? arguments[4] : void 0;
-       cU || (cU = UU.getWorldMatrix()), XU.length = zU, QU ? XU.origin.YL(QU) : XU.origin.YL(UU.position);
-       const AU = yU.l.Sp[2];
-       AU.set(0, 0, UU._scene.useRightHandedSystem ? -1 : 1);
-       const FU = yU.l.Sp[3];
-       return yU.q.TransformNormalToRef(AU, cU, FU), yU.q.NormalizeToRef(FU, XU.direction), XU
+       const LH = AH.i[BH];
+       return HH[LH + 1] - HH[LH]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/264.js` (Changed code · before: `L630-L947` → after: `L545-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ed1d5a33ace6ad3b56ea7d25d2ed37b1c5dde7c9918537df3c8e89b9059bae42) · [After (L545-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/264.js#L545-L579) · [Before (L630-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/264.js#L630-L947)

```diff
-     function wU(UU, XU) {
-       XU && (XU.prototype.getForwardRay = function() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
-           XU = arguments.length > 1 ? arguments[1] : void 0,
-           zU = arguments.length > 2 ? arguments[2] : void 0;
-         return CU(this, new YU(yU.q.Zero(), yU.q.Zero(), UU), UU, XU, zU)
-       }, XU.prototype.getForwardRayToRef = function(UU) {
-         return CU(this, UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
-       }), UU && (DU.e._IsPickingAvailable = !0, UU.prototype.createPickingRay = function(UU, XU, zU, cU) {
-         return NU(this, UU, XU, zU, cU, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
-       })
-     }
-     YU._TmpVector3 = (0, QU.d)(6, yU.q.Zero), YU._RayDistant = YU.Zero(), YU._Smallnum = 1e-8, YU._Rayl = 1e9
-   },
-   44227: (UU, XU, zU) => {
-     zU.d(XU, {
- ... (302 more removed lines; see GitHub link above)
+     function uH(HH, BH, LH) {
+       let rH = 0;
+       for (let hH = 0; hH < AH.m; hH++) YH(HH, hH) > 0 && (rH |= 1 << hH);
+       if (0 === (BH &= rH)) return 0;
+       if (BH === rH) return LH[0] = 0, LH[1] = HH[AH.e], 1;
+       let SH = null,
+         tH = 1 / 0;
+       for (const CH of function(HH) {
+           let BH = GH[HH];
+           if (BH) return BH;
+           const LH = new Map,
+             AH = (HH, BH) => {
+               const AH = 4 * HH + BH.length / 2;
+               LH.has(AH) || LH.set(AH, {
+                 pS: HH,
+                 windows: BH
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/265.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/265.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250)

#### 1. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L2)

```diff
- export const ids = [265];
+ export const ids = [265, 266];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L4)

```diff
-   42190: (UU, XU, zU) => {
+   41533: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L6-L8)

```diff
-       d: () => AU,
-       f: () => EU,
-       g: () => DU
+       b: () => EH,
+       c: () => GH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L10-L27` → after: `L9-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L9-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L9-L95) · [Before (L10-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L10-L27)

```diff
-     var cU, yU = zU(37855),
-       QU = zU(37819);
-     ! function(UU) {
-       UU[UU.CW = 0] = "CW", UU[UU.CCW = 1] = "CCW"
-     }(cU || (cU = {}));
-     class AU {
-       static Interpolate(UU, XU, zU, cU, yU) {
-         if (0 === UU) return 0;
-         const QU = 1 - 3 * cU + 3 * XU,
-           AU = 3 * cU - 6 * XU,
-           FU = 3 * XU;
-         let oU = UU;
-         for (let DU = 0; DU < 5; DU++) {
-           const XU = oU * oU;
-           oU -= (QU * (XU * oU) + AU * XU + FU * oU - UU) * (1 / (3 * QU * XU + 2 * AU * oU + FU)), oU = Math.min(1, Math.max(0, oU))
-         }
- ... (2 more removed lines; see GitHub link above)
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(37963),
+       hH = LH(38074),
+       tH = LH(41535),
+       zH = LH(41498),
+       CH = LH(38012);
+     let EH = (() => {
+         var HH;
+         let BH, LH, zH = tH.b,
+           CH = [],
+           EH = [],
+           XH = [],
+           GH = [];
+         return HH = class extends zH {
+           constructor(HH, BH, LH, rH) {
+ ... (71 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L30-L31` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L104-L107) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L30-L31)

```diff
-       constructor(UU) {
-         this._radians = UU, this._radians < 0 && (this._radians += 2 * Math.PI)
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L33-L34` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L109-L111) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L33-L34)

```diff
-       degrees() {
-         return 180 * this._radians / Math.PI
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L36-L37` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L113-L115) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L36-L37)

```diff
-       radians() {
-         return this._radians
+       static GetFarPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L39-L42` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L117-L119) · [Before (L39-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L39-L42)

```diff
-       static BetweenTwoPoints(UU, XU) {
-         const zU = XU.subtract(UU),
-           cU = Math.atan2(zU.y, zU.x);
-         return new FU(cU)
+       static GetLeftPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L44-L51` → after: `L121-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L121-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L121-L123) · [Before (L44-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L44-L51)

```diff
-       static BetweenTwoVectors(UU, XU) {
-         let zU = UU.lengthSquared() * XU.lengthSquared();
-         if (0 === zU) return new FU(Math.PI / 2);
-         zU = Math.sqrt(zU);
-         let cU = UU.dot(XU) / zU;
-         cU = (0, yU.Clamp)(cU, -1, 1);
-         const QU = Math.acos(cU);
-         return new FU(QU)
+       static GetRightPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L53-L54` → after: `L125-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L125-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L125-L127) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L53-L54)

```diff
-       static FromRadians(UU) {
-         return new FU(UU)
+       static GetTopPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L56-L57` → after: `L129-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L129-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L129-L131) · [Before (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L56-L57)

```diff
-       static FromDegrees(UU) {
-         return new FU(UU * Math.PI / 180)
+       static GetBottomPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L59-L71` → after: `L133-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L133-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L133-L139) · [Before (L59-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L59-L71)

```diff
-     }
-     class oU {
-       constructor(UU, XU, zU) {
-         this.startPoint = UU, this.midPoint = XU, this.endPoint = zU;
-         const cU = Math.pow(XU.x, 2) + Math.pow(XU.y, 2),
-           yU = (Math.pow(UU.x, 2) + Math.pow(UU.y, 2) - cU) / 2,
-           AU = (cU - Math.pow(zU.x, 2) - Math.pow(zU.y, 2)) / 2,
-           oU = (UU.x - XU.x) * (XU.y - zU.y) - (XU.x - zU.x) * (UU.y - XU.y);
-         this.centerPoint = new QU.m((yU * (XU.y - zU.y) - AU * (UU.y - XU.y)) / oU, ((UU.x - XU.x) * AU - (XU.x - zU.x) * yU) / oU), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = FU.BetweenTwoPoints(this.centerPoint, this.startPoint);
-         const DU = this.startAngle.degrees();
-         let EU = FU.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
-           YU = FU.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
-         EU - DU > 180 && (EU -= 360), EU - DU < -180 && (EU += 360), YU - EU > 180 && (YU -= 360), YU - EU < -180 && (YU += 360), this.orientation = EU - DU < 0 ? 0 : 1, this.angle = FU.FromDegrees(0 === this.orientation ? DU - YU : YU - DU)
+       static GetPlanesToRef(HH, BH) {
+         rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
+       }
+       static IsPointInFrustum(HH, BH) {
+         for (let LH = 0; LH < 6; LH++)
+           if (BH[LH].dotCoordinate(HH) < 0) return !1;
+         return !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L75-L149` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L149-L150) · [Before (L75-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L75-L149)

```diff
-       constructor(UU, XU) {
-         this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new QU.m(UU, XU))
-       }
-       addLineTo(UU, XU) {
-         if (this.closed) return this;
-         const zU = new QU.m(UU, XU),
-           cU = this._points[this._points.length - 1];
-         return this._points.push(zU), this._length += zU.subtract(cU).length(), this
-       }
-       addArcTo(UU, XU, zU, cU) {
-         let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
-         if (this.closed) return this;
-         const AU = this._points[this._points.length - 1],
-           FU = new QU.m(UU, XU),
-           DU = new QU.m(zU, cU),
-           EU = new oU(AU, FU, DU);
- ... (59 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L151-L152` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L152-L153) · [Before (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L151-L152)

```diff
-       close() {
-         return this.closed = !0, this
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L154-L160` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L155-L156) · [Before (L154-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L154-L160)

```diff
-       length() {
-         let UU = this._length;
-         if (this.closed) {
-           const XU = this._points[this._points.length - 1];
-           UU += this._points[0].subtract(XU).length()
-         }
-         return UU
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L162-L166` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L158-L159) · [Before (L162-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L162-L166)

```diff
-       area() {
-         const UU = this._points.length;
-         let XU = 0;
-         for (let zU = UU - 1, cU = 0; cU < UU; zU = cU++) XU += this._points[zU].x * this._points[cU].y - this._points[cU].x * this._points[zU].y;
-         return .5 * XU
+       getClassName() {
+         return "Plane"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L168-L169` → after: `L161-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L161-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L161-L163) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L168-L169)

```diff
-       getPoints() {
-         return this._points
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+         return HH = 397 * HH ^ this.d, HH
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L171-L173` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L165-L166) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L171-L173)

```diff
-       getPointAtLengthPosition(UU) {
-         if (UU < 0 || UU > 1) return QU.m.Zero();
-         const XU = UU * this.length();
+       normalize() {
+         const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L175-L187` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L168) · [Before (L175-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L175-L187)

```diff
-         for (let cU = 0; cU < this._points.length; cU++) {
-           const UU = (cU + 1) % this._points.length,
-             yU = this._points[cU],
-             AU = this._points[UU].subtract(yU),
-             FU = AU.length() + zU;
-           if (XU >= zU && XU <= FU) {
-             const UU = AU.normalize(),
-               cU = XU - zU;
-             return new QU.m(yU.x + UU.x * cU, yU.y + UU.y * cU)
-           }
-           zU = FU
-         }
-         return QU.m.Zero()
+         return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L189-L190` → after: `L170-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L170-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L170-L182) · [Before (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L189-L190)

```diff
-       static StartingAt(UU, XU) {
-         return new DU(UU, XU)
+       transform(HH) {
+         const BH = rH._TmpMatrix;
+         HH.invertToRef(BH);
+         const LH = BH.m,
+           AH = this.normal.x,
+           SH = this.normal.y,
+           hH = this.normal.z,
+           tH = this.d,
+           zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
+           CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
+           EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
+           XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
+         return new rH(zH, CH, EH, XH)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L192-L271` → after: `L184-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L184-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L184-L185) · [Before (L192-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L192-L271)

```diff
-     }
-     class EU {
-       static CreateQuadraticBezier(UU, XU, zU, cU) {
-         cU = cU > 2 ? cU : 3;
-         const yU = [],
-           AU = (UU, XU, zU, cU) => (1 - UU) * (1 - UU) * XU + 2 * UU * (1 - UU) * zU + UU * UU * cU;
-         for (let FU = 0; FU <= cU; FU++) yU.push(new QU.q(AU(FU / cU, UU.x, XU.x, zU.x), AU(FU / cU, UU.y, XU.y, zU.y), AU(FU / cU, UU.z, XU.z, zU.z)));
-         return new EU(yU)
-       }
-       static CreateCubicBezier(UU, XU, zU, cU, yU) {
-         yU = yU > 3 ? yU : 4;
-         const AU = [],
-           FU = (UU, XU, zU, cU, yU) => (1 - UU) * (1 - UU) * (1 - UU) * XU + 3 * UU * (1 - UU) * (1 - UU) * zU + 3 * UU * UU * (1 - UU) * cU + UU * UU * UU * yU;
-         for (let oU = 0; oU <= yU; oU++) AU.push(new QU.q(FU(oU / yU, UU.x, XU.x, zU.x, cU.x), FU(oU / yU, UU.y, XU.y, zU.y, cU.y), FU(oU / yU, UU.z, XU.z, zU.z, cU.z)));
-         return new EU(AU)
-       }
- ... (64 more removed lines; see GitHub link above)
+       dotCoordinate(HH) {
+         return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L273-L274` → after: `L187-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L187-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L187-L199) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L273-L274)

```diff
-       constructor(UU) {
-         this._length = 0, this._points = UU, this._length = this._computeLength(UU)
+       copyFromPoints(HH, BH, LH) {
+         const AH = BH.x - HH.x,
+           rH = BH.y - HH.y,
+           SH = BH.z - HH.z,
+           hH = LH.x - HH.x,
+           tH = LH.y - HH.y,
+           zH = LH.z - HH.z,
+           CH = rH * zH - SH * tH,
+           EH = SH * hH - AH * zH,
+           XH = AH * tH - rH * hH,
+           GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
+         let YH;
+         return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L276-L277` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L201-L202) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L276-L277)

```diff
-       getPoints() {
-         return this._points
+       isFrontFacingTo(HH, BH) {
+         return AH.o.Dot(this.normal, HH) <= BH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L279-L280` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L204-L205) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L279-L280)

```diff
-       length() {
-         return this._length
+       signedDistanceTo(HH) {
+         return AH.o.Dot(HH, this.normal) + this.d
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L282-L287` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L207-L208) · [Before (L282-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L282-L287)

```diff
-       continue (UU) {
-         const XU = this._points[this._points.length - 1],
-           zU = this._points.slice(),
-           cU = UU.getPoints();
-         for (let yU = 1; yU < cU.length; yU++) zU.push(cU[yU].subtract(cU[0]).add(XU));
-         return new EU(zU)
+       static FromArray(HH) {
+         return new rH(HH[0], HH[1], HH[2], HH[3])
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L289-L292` → after: `L210-L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L210-L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L210-L223) · [Before (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L289-L292)

```diff
-       _computeLength(UU) {
-         let XU = 0;
-         for (let zU = 1; zU < UU.length; zU++) XU += UU[zU].subtract(UU[zU - 1]).length();
-         return XU
+       static FromPoints(HH, BH, LH) {
+         const AH = new rH(0, 0, 0, 0);
+         return AH.copyFromPoints(HH, BH, LH), AH
+       }
+       static FromPositionAndNormal(HH, BH) {
+         const LH = new rH(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(HH, BH, LH)
+       }
+       static FromPositionAndNormalToRef(HH, BH, LH) {
+         return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
+         const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
+         return AH.o.Dot(LH, BH) + rH
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L296` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L228) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L296)

```diff
-   39486: (UU, XU, zU) => {
+   38966: (HH, BH, LH) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L300` → after: `L232-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L232-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L232-L251) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L300)

```diff
-     var cU = zU(39493);
+     class AH {
+       constructor(HH, BH, LH, AH) {
+         this.x = HH, this.y = BH, this.width = LH, this.height = AH
+       }
+       toGlobal(HH, BH) {
+         return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
+       }
+       toGlobalToRef(HH, BH, LH) {
+         return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
+       }
+       clone() {
+         return new AH(this.x, this.y, this.width, this.height)
+       }
+     }
+   },
+   39588: (HH, BH, LH) => {
+ ... (4 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L333` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L284) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L333)

```diff
-             cU.b.Warn(oU.message)
+             AH.e.Warn(zH.message)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L339` → after: `L290-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L290-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L290-L301) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L339)

```diff
-   39493: (UU, XU, zU) => {
+   38790: (HH, BH, LH) => {
+     function AH() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
+     }
+     LH.d(BH, {
+       e: () => AH
+     })
+   },
+   39595: (HH, BH, LH) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L341` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L303) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L341)

```diff
-       b: () => cU
+       e: () => AH
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L362` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L324) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L362)

```diff
-         const XU = UU => UU < 10 ? "0" + UU : "" + UU,
+         const BH = HH => HH < 10 ? "0" + HH : "" + HH,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/265.js` (Changed code · before: `L377` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-8247f614f919bd87d4c472f4d12a667ff83f1b69cc48adba4cd108d63457b250) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/265.js#L339) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/265.js#L377)

```diff
-         const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
+         const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/266.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/266.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927)

#### 1. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L4-L66` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L4) · [Before (L4-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L4-L66)

```diff
-   39624: (UU, XU, zU) => {
-     var cU = {
-       "./cape_cow_cream.png": 28639,
-       "./cape_cow_normal.png": 28646,
-       "./cape_creator_level1.png": 28648,
-       "./cape_creator_level2.png": 28651,
-       "./cape_creator_level3.png": 28660,
-       "./cape_none.png": 28669,
-       "./cape_pig.png": 28676,
-       "./cape_sheep.png": 28683,
-       "./cape_super.png": 28686,
-       "./cape_super_inverted.png": 28689,
-       "./cape_youtuber.png": 28694
-     };
- 
-     function yU(UU) {
- ... (47 more removed lines; see GitHub link above)
+   38610: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L68-L94` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L6) · [Before (L68-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L68-L94)

```diff
-       c: () => QU,
-       g: () => DU,
-       k: () => oU,
-       m: () => AU
-     });
-     var cU = zU(220);
-     const yU = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
-       QU = "PetRoot";
-     let AU = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
-       FU = yU;
-     new Map, new Map;
- 
-     function oU(UU) {
-       var XU;
-       return null !== (XU = (0, cU.b)(AU, UU)) && void 0 !== XU ? XU : null
-     }
- ... (11 more removed lines; see GitHub link above)
+       e: () => rH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L97-L104` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L10-L13) · [Before (L97-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L97-L104)

```diff
-       constructor() {
-         this.pose = {
-           pos: [0, 0, 0],
-           yaw: 0,
-           mode: "flying",
-           seated: !1,
-           clip: void 0
-         }, this.Et = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L106-L137` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L15-L17) · [Before (L106-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L106-L137)

```diff
-       step(UU) {
-         var XU;
-         const {
-           feet: zU,
-           heading: cU,
-           tuning: AU
-         } = UU, FU = Math.min(Math.max(UU.dt, 0), .1), {
-           pose: oU,
-           Et: DU,
-           target: EU
-         } = this;
-         if (this.started && FU > 0) {
-           const UU = Math.hypot(zU[0] - this.lastFeet[0], zU[1] - this.lastFeet[1], zU[2] - this.lastFeet[2]);
-           this.speed += (UU / FU - this.speed) * Math.min(FU / .15, 1)
-         }
-         this.lastFeet[0] = zU[0], this.lastFeet[1] = zU[1], this.lastFeet[2] = zU[2], this.stillS = this.speed > .3 ? 0 : this.stillS + FU;
- ... (16 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L139-L140` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L19-L21) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L139-L140)

```diff
-       reset() {
-         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       static GetFarPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L142-L143` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L23-L25) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L142-L143)

```diff
-       YX(UU) {
-         return "perched" === UU ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       static GetLeftPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L145-L250` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L27-L29) · [Before (L145-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L145-L250)

```diff
-     }
- 
-     function yU(UU, XU) {
-       return UU.bobAmplitude * Math.sin(2 * Math.PI * UU.bobHz * XU)
-     }
- 
-     function QU(UU, XU, zU, cU, yU) {
-       const [QU, AU, FU] = zU;
-       UU[0] = XU[0] + QU * yU + FU * cU, UU[1] = XU[1] + AU, UU[2] = XU[2] - QU * cU + FU * yU
-     }
-   },
-   39962: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => QU
-     });
-     var cU = zU(37814),
- ... (90 more removed lines; see GitHub link above)
+       static GetRightPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L252-L321` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L31-L33) · [Before (L252-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L252-L321)

```diff
-     }
- 
-     function BU() {
-       return Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(44223)))
-     }
-     async function ZU() {
-       return (await BU()).createSceneParticleSystem
-     }
-     async function RU() {
-       Promise.all([zU.e(277), zU.e(609)]).then((() => zU(44309))).then((UU => {
-         UU.installImageBitmapTextureLoader()
-       })).catch((() => {}));
-       const [UU, XU] = await Promise.all([BU(), Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(44318))), Promise.all([zU.e(277), zU.e(2 … [truncated]
-       return (0, FU.e)(XU.SkyMaterial), UU.default
-     }
- 
- ... (54 more removed lines; see GitHub link above)
+       static GetTopPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L323-L324` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L35-L37) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L323-L324)

```diff
-       write(UU) {
-         this.pose.pose(UU), (0, AU.l)(this.pose, this.nodes)
+       static GetBottomPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L326-L366` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L39-L40) · [Before (L326-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L326-L366)

```diff
-     }
- 
-     function oU(UU) {
-       UU.unfreezeWorldMatrix();
-       for (const XU of UU.getChildren()) oU(XU)
-     }
-     async function DU(UU, XU, zU, cU) {
-       let {
-         keepTransforms: yU,
-         backFaceCulling: AU
-       } = cU;
-       const FU = await (0, QU.j)(XU, UU),
-         DU = (0, QU.g)(null !== zU && void 0 !== zU ? zU : XU, UU, void 0, AU);
-       (0, QU.m)(FU, DU, {
-         keepTransforms: yU,
-         backFaceCulling: AU,
- ... (25 more removed lines; see GitHub link above)
+       static GetPlanesToRef(HH, BH) {
+         rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L368-L428` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L42-L45) · [Before (L368-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L368-L428)

```diff
-       loadModel(UU, XU, zU) {
-         const cU = (0, QU.h)(UU, XU);
-         return cU in this.modelCache || (this.modelCache[cU] = (async () => {
-           try {
-             const cU = YU(await DU(this.sa, UU, XU, {
-                 keepTransforms: void 0 !== zU,
-                 backFaceCulling: !1
-               })),
-               yU = void 0 === zU ? null : (0, AU.h)(zU, (UU => {
-                 const XU = cU.get(UU);
-                 return XU ? (0, AU.g)(XU) : null
-               }));
-             return {
-               nodesByName: cU,
-               bones: null === yU ? null : new FU(yU, cU)
-             }
- ... (45 more removed lines; see GitHub link above)
+       static IsPointInFrustum(HH, BH) {
+         for (let LH = 0; LH < 6; LH++)
+           if (BH[LH].dotCoordinate(HH) < 0) return !1;
+         return !0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L432-L434` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L49-L51) · [Before (L432-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L432-L434)

```diff
-   42288: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       openCharacterPreview: () => zX
+   38619: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => rH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L436-L461` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L53) · [Before (L436-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L436-L461)

```diff
-     var cU = zU(38849),
-       yU = zU(3043),
-       QU = zU(625),
-       AU = zU(37876),
-       FU = zU(2338),
-       oU = zU(37870),
-       DU = zU(40929),
-       EU = zU(41199),
-       YU = zU(42184),
-       NU = zU(37814),
-       IU = zU(41331),
-       pU = zU(37919),
-       aU = zU(41348),
-       tU = zU(42242),
-       gU = zU(37812),
-       kU = zU(42213),
- ... (10 more removed lines; see GitHub link above)
+     var AH = LH(37963);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L463-L499` → after: `L55-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L55-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L55-L103) · [Before (L463-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L463-L499)

```diff
-       constructor(UU) {
-         this.node = UU, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
-         for (const XU of UU.getChildTransformNodes()) this.nodesByName.set(XU.name, XU), this.rests.set(XU.name, (0, eU.g)(XU))
-       }
-       play(UU, XU) {
-         const zU = this.clip(UU);
-         zU && (zU.pose.pose(XU), (0, eU.l)(zU.pose, zU.nodes))
-       }
-       clip(UU) {
-         let XU = this.clips.get(UU);
-         if (void 0 === XU) {
-           const zU = (0, eU.h)(UU, (UU => {
-             var XU;
-             return null !== (XU = this.rests.get(UU)) && void 0 !== XU ? XU : null
-           }));
-           XU = zU && {
- ... (21 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
+       }
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+         return HH = 397 * HH ^ this.d, HH
+       }
+ ... (33 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L501-L661` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L105) · [Before (L501-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L501-L661)

```diff
-         try {
-           cU = await this.petNode(zU.model)
-         } catch {
-           return
-         }
-         this.petName === UU && (cU.node.YC(!0), this.shownPet = cU)
-       }
-       setAura(UU) {
-         const XU = (0, RU.g)(UU);
-         return UU === this.auraName && XU === this.auraTuning || (this.auraName = UU, this.auraTuning = XU, this.auraDrawn = this.showAura(UU, XU)), this.auraDrawn
-       }
-       async showAura(UU, XU) {
-         var zU, cU, yU;
-         const QU = ++this.auraSeq;
-         if (null === (zU = this.aura) || void 0 === zU || zU.dispose(!1), this.aura = null, !XU) return;
-         const AU = await (0, ZU.h)().catch((XU => (console.error(`Couldn't load the preview's particles for ${UU}:`, XU), null)));
- ... (145 more removed lines; see GitHub link above)
+         return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L663-L664` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L107-L108) · [Before (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L663-L664)

```diff
-       setCosmetic(UU, XU) {
-         bU(UU, XU)
+       isFrontFacingTo(HH, BH) {
+         return AH.o.Dot(this.normal, HH) <= BH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L666-L670` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L110-L111) · [Before (L666-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L666-L670)

```diff
-       playEmote(UU) {
-         if (!nU) return;
-         if (!UU) return void nU.stopAnimation(oU.f.Emote);
-         const XU = (0, AU.g)((0, FU.g)(UU).animation);
-         nU.startAnimation(XU, oU.f.Emote, 0, FU.b)
+       signedDistanceTo(HH) {
+         return AH.o.Dot(HH, this.normal) + this.d
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L672-L686` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L113-L114) · [Before (L672-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L672-L686)

```diff
-       async untilDrawn(UU) {
-         if (await jU(), "cape" === UU && vU) {
-           const UU = vU.material,
-             XU = null === UU || void 0 === UU ? void 0 : UU.diffuseTexture;
-           XU && !XU.isReady() && (await new Promise((UU => {
-             XU.onLoadObservable.addOnce((() => {
-               UU()
-             }))
-           })), await jU())
-         }
-         KU[UU] && (await KU[UU], await jU()), await HU.whenReadyAsync(), await new Promise((UU => {
-           HU.onAfterRenderObservable.addOnce((() => {
-             UU()
-           }))
-         }))
+       static FromArray(HH) {
+         return new rH(HH[0], HH[1], HH[2], HH[3])
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L688-L689` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L116-L118) · [Before (L688-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L688-L689)

```diff
-       setOrbit(UU) {
-         XX(UU)
+       static FromPoints(HH, BH, LH) {
+         const AH = new rH(0, 0, 0, 0);
+         return AH.copyFromPoints(HH, BH, LH), AH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L691-L692` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L120-L122) · [Before (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L691-L692)

```diff
-       resetCamera() {
-         iU.inertialAlphaOffset = 0, iU.inertialBetaOffset = 0, iU.inertialRadiusOffset = 0, XX(rU.e[this.framing])
+       static FromPositionAndNormal(HH, BH) {
+         const LH = new rH(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(HH, BH, LH)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L694-L695` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L124-L125) · [Before (L694-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L694-L695)

```diff
-       resize(UU, XU) {
-         TU(UU, XU)
+       static FromPositionAndNormalToRef(HH, BH, LH) {
+         return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L697-L698` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L127-L129) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L697-L698)

```diff
-       close() {
-         this.closed || (this.closed = !0, hU--, 0 === hU && fU.stopRenderLoop())
+       static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
+         const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
+         return AH.o.Dot(LH, BH) + rH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L701-L740` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L132) · [Before (L701-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L701-L740)

```diff
- 
-     function XX(UU) {
-       let {
-         yaw: XU,
-         pitch: zU,
-         radius: cU,
-         target: yU
-       } = UU;
-       iU.alpha = XU, iU.beta = zU, cU && (iU.radius = cU), yU && iU.target.set(yU[0], yU[1], yU[2])
-     }
- 
-     function zX(UU, XU) {
-       return UU.appendChild(JU), fU || function() {
-         fU = new DU.c(JU, !0, {
-           preserveDrawingBuffer: !0
-         });
- ... (24 more removed lines; see GitHub link above)
+     rH._TmpMatrix = AH.e.Identity()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L742` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L134) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L742)

```diff
-   39621: (UU, XU, zU) => {
+   39588: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L744` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L136) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L744)

```diff
-       e: () => NU
+       d: () => SH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L746-L856` → after: `L138-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L138-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L138-L171) · [Before (L746-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L746-L856)

```diff
-     var cU = zU(37940),
-       yU = zU(38037),
-       QU = zU(38077),
-       AU = zU(37961),
-       FU = zU(37946);
- 
-     function oU(UU) {
-       return `\n\t\t\t\t${(0,FU.x)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, FU.C)(UU, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, FU.C)(UU, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, FU.k)(UU, "mat2", "c", "s", "-s", "c")
- ... (95 more removed lines; see GitHub link above)
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+             const LH = Object.getOwnPropertyNames(HH);
+             for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
+           } while (HH = Object.getPrototypeOf(HH));
+           return BH
+         }(HH);
+         for (const CH of tH) {
+ ... (18 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L932-L942` → after: `L177-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L177-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L177-L182) · [Before (L932-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L932-L942)

```diff
-   42292: (UU, XU, zU) => {
-     zU.d(XU, {
-       e: () => QU
-     });
-     const cU = 4e5,
-       yU = 2;
- 
-     function QU(UU, XU, zU) {
-       let [QU, AU] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [UU, XU], FU = Math.min(Number.isFinite(zU) && zU > 0 ? zU : 1, yU);
-       const oU = Math.max(0, QU, UU) * Math.max(0, AU, XU) * FU * FU;
-       return oU > cU && (FU *= Math.sqrt(cU / oU)), [Math.max(1, Math.floor(Math.max(0, UU) * FU)), Math.max(1, Math.floor(Math.max(0, XU) * FU))]
+   38790: (HH, BH, LH) => {
+     function AH() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L947-L1247` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L185) · [Before (L947-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L947-L1247)

```diff
-       e: () => VU,
-       i: () => kU,
-       l: () => JU
-     });
-     var cU = zU(41348),
-       yU = zU(42233),
-       QU = zU(42279),
-       AU = zU(42242),
-       FU = zU(38563),
-       oU = zU(38573),
-       DU = zU(38581),
-       EU = zU(38589),
-       YU = zU(37995),
-       NU = zU(38004),
-       IU = zU(42248),
-       pU = zU(37961),
- ... (285 more removed lines; see GitHub link above)
+       e: () => AH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1250` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L188) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L1250)

```diff
-   42273: (UU, XU, zU) => {
+   39595: (HH, BH, LH) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1252-L1254` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L190) · [Before (L1252-L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L1252-L1254)

```diff
-       e: () => EU,
-       f: () => YU,
-       i: () => NU
+       e: () => AH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1256-L1417` → after: `L192-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L192-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L192-L242) · [Before (L1256-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L1256-L1417)

```diff
-     var cU = zU(42261),
-       yU = zU(41177),
-       QU = zU(41387),
-       AU = zU(41495),
-       FU = zU(42269),
-       oU = zU(41493),
-       DU = zU(38121);
-     class EU extends AU.d {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (UU, XU) => {
-           this.releaseUnlessInstanced(XU)
-         }, this.onLinked = null
-       }
-       link(UU) {
-         var XU;
-         (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
- ... (146 more removed lines; see GitHub link above)
+     class AH {
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+       }
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
+       }
+       static _AddLogEntry(HH) {
+ ... (35 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/266.js` (Changed code · before: `L1443-L1457` → after: `L245-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c92f9d43770d0fc46cdd1c099ce45838b28e19c096a0c0ebcb22d4ea345b9927) · [After (L245-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/266.js#L245-L257) · [Before (L1443-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/266.js#L1443-L1457)

```diff
-   },
-   39566: (UU, XU, zU) => {
-     function cU(UU, XU) {
-       return "object" === typeof UU && null !== UU ? Object.assign(UU, {
-         startStep: XU
-       }) : UU
-     }
- 
-     function yU(UU) {
-       return "object" === typeof UU && null !== UU && "startStep" in UU ? UU.startStep : null
-     }
-     zU.d(XU, {
-       d: () => yU,
-       g: () => cU
-     })
+     AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels =  … [truncated]
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
+     }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/267.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/267.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L2)

```diff
- export const ids = [267];
+ export const ids = [266, 267];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L4-L10` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L11) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L4-L10)

```diff
-   42213: (UU, XU, zU) => {
-     zU.d(XU, {
-       c: () => IU,
-       d: () => DU,
-       g: () => YU,
-       k: () => EU,
-       n: () => NU
+   64100: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       RegisterShaderMaterial: () => AH.e,
+       ShaderMaterial: () => AH.r,
+       ShaderMaterialCreateFromSnippetAsync: () => AH.f,
+       ShaderMaterialParse: () => AH.q,
+       ShaderMaterialParseFromFileAsync: () => AH.j,
+       ShaderMaterialParseFromSnippetAsync: () => AH.n
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L12-L127` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L13-L14) · [Before (L12-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L12-L127)

```diff
-     var cU = zU(1236),
-       yU = zU(2334),
-       QU = zU(37886),
-       AU = zU(38258);
-     class FU {
-       constructor(UU, XU) {
-         this.pose = UU, this.nodes = void 0, this.nodes = UU.boneNames.map((UU => XU.get(UU)))
-       }
-       write(UU) {
-         this.pose.pose(UU), (0, AU.l)(this.pose, this.nodes)
-       }
-     }
- 
-     function oU(UU) {
-       UU.unfreezeWorldMatrix();
-       for (const XU of UU.getChildren()) oU(XU)
- ... (100 more removed lines; see GitHub link above)
+     var AH = LH(41769);
+     (0, AH.e)()
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L129-L133` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L16-L18) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L129-L133)

```diff
-   42180: (UU, XU, zU) => {
-     zU.r(XU), zU.d(XU, {
-       openMobLineupPreview: () => lU,
-       openMobPreview: () => mU,
-       openPetPreview: () => xU
+   38610: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => rH
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L135-L331` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L20) · [Before (L135-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L135-L331)

```diff
-     var cU = zU(40929),
-       yU = zU(41199),
-       QU = zU(42184),
-       AU = zU(37919),
-       FU = zU(37814),
-       oU = zU(41331),
-       DU = zU(42205),
-       EU = zU(39250),
-       YU = zU(37882),
-       NU = zU(37870),
-       IU = zU(37812),
-       pU = zU(39152),
-       aU = zU(39144),
-       tU = zU(38849),
-       gU = zU(37886),
-       kU = zU(3043),
- ... (181 more removed lines; see GitHub link above)
+     var AH = LH(38619);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L333-L342` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L22-L25) · [Before (L333-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L333-L342)

```diff
-       constructor(UU, XU) {
-         this.place = XU, this.remove = null;
-         const {
-           engine: zU,
-           sa: cU,
-           canvas: yU
-         } = fU();
-         UU.appendChild(yU), zU.resize(), zU.runRenderLoop((() => {
-           cU.render()
-         }))
+       static GetPlanes(HH) {
+         const BH = [];
+         for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
+         return rH.GetPlanesToRef(HH, BH), BH
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L344-L346` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L27-L29) · [Before (L344-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L344-L346)

```diff
-       show(UU) {
-         var XU;
-         null === (XU = this.remove) || void 0 === XU || XU.call(this), this.remove = this.place(UU)
+       static GetNearPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L348-L353` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L31-L33) · [Before (L348-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L348-L353)

```diff
-       resize(UU, XU) {
-         const {
-           engine: zU,
-           canvas: cU
-         } = fU();
-         cU.width = UU, cU.height = XU, zU.resize()
+       static GetFarPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L355-L357` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L35-L37) · [Before (L355-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L355-L357)

```diff
-       close() {
-         var UU;
-         fU().engine.stopRenderLoop(), null === (UU = this.remove) || void 0 === UU || UU.call(this), this.remove = null
+       static GetLeftPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L359-L368` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L39-L41) · [Before (L359-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L359-L368)

```diff
-     }
-     class nU {
-       constructor(UU) {
-         this.preview = void 0, this.view = {
-           figures: [],
-           shown: []
-         }, this.aspect = 1, this.placed = [], this.preview = new sU(UU, (() => () => {}))
-       }
-       show(UU) {
-         UU.figures !== this.view.figures && this.preload(UU.figures), this.view = UU, this.place()
+       static GetRightPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L370-L371` → after: `L43-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L43-L45) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L370-L371)

```diff
-       resize(UU, XU) {
-         this.preview.resize(UU, XU), this.aspect = UU / XU, this.place()
+       static GetTopPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L373-L376` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L47-L49) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L373-L376)

```diff
-       close() {
-         this.preview.close();
-         for (const UU of this.placed) null === UU || void 0 === UU || UU.remove();
-         this.placed = []
+       static GetBottomPlaneToRef(HH, BH) {
+         const LH = HH.m;
+         BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L378-L385` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L51-L52) · [Before (L378-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L378-L385)

```diff
-       preload(UU) {
-         const XU = () => {};
-         iU("NPC").catch(XU);
-         for (const {
-             jB: zU,
-             cosmetics: cU
-           }
-           of UU) null !== zU && HU(zU).catch(XU), RU(fU().sa, cU).catch(XU)
+       static GetPlanesToRef(HH, BH) {
+         rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L387-L404` → after: `L54-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L54-L57) · [Before (L387-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L387-L404)

```diff
-       place() {
-         const {
-           figures: UU,
-           shown: XU
-         } = this.view, zU = UU.map(((zU, cU) => {
-           var yU;
-           const QU = null !== (yU = this.placed[cU]) && void 0 !== yU ? yU : null;
-           if (!XU[cU]) return null === QU || void 0 === QU || QU.remove(), null;
-           const AU = (FU = (cU + .5) / UU.length, oU = this.aspect, (.5 - FU) * (2 * eU * Math.tan(fU().camera.fov / 2)) * oU);
-           var FU, oU;
-           return null !== QU && QU.figure === zU && QU.x === AU ? QU : (null === QU || void 0 === QU || QU.remove(), {
-             figure: zU,
-             x: AU,
-             remove: vU(zU, AU)
-           })
-         }));
- ... (2 more removed lines; see GitHub link above)
+       static IsPointInFrustum(HH, BH) {
+         for (let LH = 0; LH < 6; LH++)
+           if (BH[LH].dotCoordinate(HH) < 0) return !1;
+         return !0
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L420` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L61) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L420)

```diff
-   39621: (UU, XU, zU) => {
+   38619: (HH, BH, LH) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L422-L545` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L63) · [Before (L422-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L422-L545)

```diff
-       e: () => NU
-     });
-     var cU = zU(37940),
-       yU = zU(38037),
-       QU = zU(38077),
-       AU = zU(37961),
-       FU = zU(37946);
- 
-     function oU(UU) {
-       return `\n\t\t\t\t${(0,FU.x)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, FU.C)(UU, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, FU.C)(UU, "float", "c", "cos(ang)")
-       }\
- ... (108 more removed lines; see GitHub link above)
+       d: () => rH
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L547-L577` → after: `L65-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L65-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L65-L144) · [Before (L547-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L547-L577)

```diff
-     var cU = zU(42229),
-       yU = zU(38758);
-     class QU extends((0, cU.i)(yU.e)) {}(0, cU.l)(yU.e, QU);
-     var AU = zU(38034);
-     class FU extends((0, cU.i)(AU.d)) {}(0, cU.l)(AU.d, FU);
-     var oU = zU(38597);
-     class DU extends((0, cU.i)(oU.e)) {}(0, cU.l)(oU.e, DU);
-     var EU = zU(38057),
-       YU = zU(41348),
-       NU = zU(38053);
-     class IU extends((0, cU.i)(NU.g)) {
-       constructor(UU, XU, zU) {
-         super(UU, XU, zU), (0, EU.h)(UU)
-       }
-       dispose(UU) {
-         (0, EU.k)(this._material), super.dispose(UU)
- ... (15 more removed lines; see GitHub link above)
+     var AH = LH(37963);
+     class rH {
+       constructor(HH, BH, LH, rH) {
+         this.normal = new AH.o(HH, BH, LH), this.d = rH
+       }
+       xrH() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let HH = this.normal.getHashCode();
+ ... (64 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L579` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L146) · [Before (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L579)

```diff
-   42229: (UU, XU, zU) => {
+   39588: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L581-L583` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L148) · [Before (L581-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L581-L583)

```diff
-       e: () => VU,
-       i: () => kU,
-       l: () => JU
+       d: () => SH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L585-L620` → after: `L150-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L150-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L150-L183) · [Before (L585-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L585-L620)

```diff
-     var cU = zU(41348),
-       yU = zU(42233),
-       QU = zU(42279),
-       AU = zU(42242),
-       FU = zU(38563),
-       oU = zU(38573),
-       DU = zU(38581),
-       EU = zU(38589),
-       YU = zU(37995),
-       NU = zU(38004),
-       IU = zU(42248),
-       pU = zU(37961),
-       aU = zU(37977),
-       tU = zU(37946);
- 
-     function gU(UU, XU) {
- ... (20 more removed lines; see GitHub link above)
+     var AH = LH(39595);
+     const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
+       ...HH
+     } : null : HH.clone(BH) : null;
+     class SH {
+       static DeepCopy(HH, BH, LH, SH) {
+         let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const tH = function(HH) {
+           const BH = [];
+           do {
+             const LH = Object.getOwnPropertyNames(HH);
+             for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
+           } while (HH = Object.getPrototypeOf(HH));
+           return BH
+         }(HH);
+         for (const CH of tH) {
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L698-L798` → after: `L188-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L188-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L188-L194) · [Before (L698-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L698-L798)

```diff
-     var eU = zU(42261),
-       CU = zU(41387),
-       wU = zU(37814),
-       qU = zU(42269),
-       OU = zU(41493),
-       SU = zU(41378),
-       rU = zU(42205),
-       uU = zU(38236),
-       fU = zU(42273);
-     class iU extends eU.b {
-       getData() {
-         return null
-       }
-       _rebuild() {}
-       restore() {
-         super._rebuild()
- ... (85 more removed lines; see GitHub link above)
+   },
+   38790: (HH, BH, LH) => {
+     function AH() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
+         const BH = 16 * Math.random() | 0;
+         return ("x" === HH ? BH : 3 & BH | 8).toString(16)
+       }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L800-L881` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L196-L197) · [Before (L800-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L800-L881)

```diff
-     JU(FU.c, GU), JU(oU.j, LU), JU(DU.f, lU), JU(EU.h, vU), (0, YU.e)({
-       create: (UU, XU) => {
-         const zU = new cU.StandardMaterial(UU.name, XU);
-         return (0, sU.m)(UU, zU), zU.detailMap._pluginDefineNames
-       },
-       write: (UU, XU, zU) => {
-         (0, sU.S)(UU.mirror, XU, zU)
-       },
-       addFeature: (UU, XU, zU) => {
-         const cU = xU.get(XU.feature);
-         if (!cU) throw new Error(`${XU.feature.name} has no plugin class (registerPluginClass)`);
-         new cU(UU.mirror, XU.state, ...zU)
-       },
-       texture: (UU, XU, zU) => {
-         let {
-           url: cU,
- ... (66 more removed lines; see GitHub link above)
+     LH.d(BH, {
+       e: () => AH
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L884` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L200) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L884)

```diff
-   42273: (UU, XU, zU) => {
+   39595: (HH, BH, LH) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L886-L888` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L202) · [Before (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L886-L888)

```diff
-       e: () => EU,
-       f: () => YU,
-       i: () => NU
+       e: () => AH
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/267.js` (Changed code · before: `L890-L1051` → after: `L204-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3cR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-465464e980e01b2ca78ea007957fbd03e3c06d133dfdc3cc63840340d40f6e3c) · [After (L204-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/267.js#L204-L254) · [Before (L890-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/267.js#L890-L1051)

```diff
-     var cU = zU(42261),
-       yU = zU(41177),
-       QU = zU(41387),
-       AU = zU(41495),
-       FU = zU(42269),
-       oU = zU(41493),
-       DU = zU(38121);
-     class EU extends AU.d {
-       constructor() {
-         super(...arguments), this.model = null, this.onGeometryUpdated = (UU, XU) => {
-           this.releaseUnlessInstanced(XU)
-         }, this.onLinked = null
-       }
-       link(UU) {
-         var XU;
-         (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
- ... (146 more removed lines; see GitHub link above)
+     class AH {
+       static _CheckLimit(HH, BH) {
+         let LH = AH._LogLimitOutputs[HH];
+         return LH ? LH.current++ : (LH = {
+           limit: BH,
+           current: 1
+         }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
+       }
+       static _GenerateLimitMessage(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const LH = AH._LogLimitOutputs[HH];
+         if (!LH || !AH.MessageLimitReached) return;
+         const rH = this._Levels[BH];
+         LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
+       }
+       static _AddLogEntry(HH) {
+ ... (35 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/268.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/268.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813)

#### 1. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L4)

```diff
-   42138: (UU, XU, zU) => {
+   38667: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L6-L7)

```diff
-       d: () => QU,
-       f: () => AU
+       c: () => XH,
+       e: () => hH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L9-L10` → after: `L9-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L9-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L9-L3406) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L9-L10)

```diff
-     var cU = zU(2014);
-     let yU = !1;
+     var AH = LH(9955),
+       rH = LH(9940),
+       SH = LH(317);
+     const hH = {
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L12-L13` → after: `L3408-L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3408-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3408-L3566) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L12-L13)

```diff
-     function QU() {
-       yU = !0
+     function tH(HH) {
+       return {
+         [`${HH} Banner`]: {
+           positions: [{
+             block: `${HH} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${HH} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${HH} Banner|meta|rot2|bot`]: {
+ ... (143 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L16-L17` → after: `L3569-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3569-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3569-L3664) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L16-L17)

```diff
-     function AU() {
-       yU && (yU = !1, (0, cU.e)())
+     function zH(HH) {
+       const BH = (0, SH.$b)(HH);
+       return {
+         [BH]: {
+           positions: [{
+             block: BH,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${BH} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${BH} Top Right`,
+ ... (80 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L30-L46` → after: `L3668-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3668-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3668-L3742) · [Before (L30-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L30-L46)

```diff
-       if (UU.queries.drawCensus() < cU.Cb.BYTES) return null;
-       const XU = UU.memoryData(UU.scratch(), cU.Cb.BYTES, 4, "the draw census");
-       return null === XU ? null : {
-         terrainOpaque: cU.Cb.terrainOpaque(XU, 0),
-         terrainTransparent: cU.Cb.terrainTransparent(XU, 0),
-         terrainPack: cU.Cb.terrainPack(XU, 0),
-         earthSky: cU.Cb.earthSky(XU, 0),
-         skyMeshes: cU.Cb.skyMeshes(XU, 0),
-         regular: cU.Cb.regular(XU, 0),
-         thin: cU.Cb.thin(XU, 0),
-         line: cU.Cb.line(XU, 0),
-         text: cU.Cb.text(XU, 0),
-         particles: cU.Cb.particles(XU, 0),
-         terrainParts: cU.Cb.terrainParts(XU, 0),
-         terrainCompiling: cU.Cb.terrainCompiling(XU, 0),
-         ringCopiesMax: cU.Cb.ringCopiesMax(XU, 0),
- ... (1 more removed lines; see GitHub link above)
+       const BH = `_${HH} Back`,
+         LH = `_${HH} Dish`;
+       return {
+         [HH]: {
+           positions: [{
+             block: HH,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: BH,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+             block: LH,
+ ... (59 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L51-L62` → after: `L3747-L3767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3747-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3747-L3767) · [Before (L51-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L51-L62)

```diff
-       const {
-         terrainOpaque: XU,
-         terrainTransparent: zU,
-         earthSky: cU,
-         skyMeshes: yU,
-         regular: QU,
-         thin: AU,
-         line: FU,
-         text: oU,
-         particles: DU
-       } = UU;
-       return XU + zU + cU + yU + QU + AU + FU + oU + DU
+       const BH = `Small ${HH} Pod`;
+       return {
+         [BH]: {
+           positions: [{
+             block: BH,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${HH} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_Small ${HH} Pod Top`,
+             x: 0,
+ ... (5 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L64-L98` → after: `L3769-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3769-L3772) · [Before (L64-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L64-L98)

```diff
- 
-     function FU() {
-       const UU = (0, yU.f)();
-       return !0 === (null === UU || void 0 === UU ? void 0 : UU.isCoreRunning) ? function(UU) {
-         const XU = QU(UU);
-         if (null === XU) return [];
-         const {
-           terrainOpaque: zU,
-           terrainTransparent: cU,
-           terrainPack: yU,
-           earthSky: FU,
-           skyMeshes: oU,
-           regular: DU,
-           thin: EU,
-           line: YU,
-           text: NU,
- ... (19 more removed lines; see GitHub link above)
+     for (const GH in hH) {
+       for (const HH of hH[GH].positions)
+         if (HH.id = rH.g[HH.block].id, GH === HH.block && (0 !== HH.x || 0 !== HH.y || 0 !== HH.z)) throw new Error(`Multiblock "${GH}" has main block "${HH.block}" at non-origin position (${HH.x}, ${HH.y}, ${HH.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       hH[rH.g[GH].id] = hH[GH]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L101` → after: `L3792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3792) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L101)

```diff
-   42121: (UU, XU, zU) => {
+   39111: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L104-L105` → after: `L3795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3795) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L104-L105)

```diff
-       f: () => NU,
-       j: () => IU
+       c: () => tH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L107-L114` → after: `L3797-L3806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3797-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3797-L3806) · [Before (L107-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L107-L114)

```diff
-     var cU = zU(2023),
-       yU = zU(1319),
-       QU = zU(41660),
-       AU = zU(41676),
-       FU = zU(41680),
-       oU = zU(41695);
-     const DU = new yU.e;
-     let EU = !1;
+     var AH = LH(9940),
+       rH = LH(9982),
+       SH = LH(9988);
+     const hH = rH.x.map((HH => {
+       let {
+         dx: BH,
+         dz: LH
+       } = HH;
+       return [BH, 0, LH]
+     }));
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L117-L140` → after: `L3809-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3809-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3809-L3810) · [Before (L117-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L117-L140)

```diff
-       const XU = (0, QU.f)();
-       return null !== XU && +UU === XU.api.localId
-     }
- 
-     function NU() {
-       EU || (EU = !0, (0, oU.m)(AU.o, (UU => {
-         var XU, zU;
-         const cU = (0, FU.d)(AU.o, UU);
-         if (!(0, FU.b)(cU)) return;
-         const yU = cU;
-         YU(yU.iX) && IU(yU.HX, {
-           icon: yU.wQ,
-           level: yU.OQ,
-           displayName: null !== (XU = yU.MX) && void 0 !== XU ? XU : null,
-           durationMs: null !== (zU = yU.qQ) && void 0 !== zU ? zU : null
-         })
- ... (8 more removed lines; see GitHub link above)
+       const BH = AH.g[HH];
+       return !!BH && HH !== AH.c && !BH.model && !BH.UY && !1 !== BH.solid && !BH.hW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L142-L150` → after: `L3812-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3812-L3835) · [Before (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L142-L150)

```diff
- 
-     function IU(UU, XU) {
-       cU.b.update(UU, XU), DU.forEach((XU => {
-         XU(UU)
-       }))
-     }
-     const pU = {
-       localEffectUpdated: {
-         watch: UU => DU.add(UU)
+     class zH {
+       constructor(HH) {
+         this.model = HH, this.reshapeOffsets = [...hH, [0, -1, 0]]
+       }
+       handles(HH) {
+         const BH = AH.g[HH];
+         return (null === BH || void 0 === BH ? void 0 : BH.model) === this.model && void 0 !== BH.attachedTop
+       }
+       affects(HH) {
+         return this.handles(HH) || tH(HH) || (0, SH.r)(AH.g[HH])
+       }
+       shape(HH, BH, LH, hH, zH) {
+         let CH = this.handles(HH(BH, LH + 1, hH)) ? rH.j : 0;
+         return rH.x.forEach(((zH, EH) => {
+           let {
+             dx: XH,
+ ... (8 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L154-L165` → after: `L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3839) · [Before (L154-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L154-L165)

```diff
-   42125: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => EU
-     });
-     var cU = zU(5326),
-       yU = zU(5318),
-       QU = zU(41685),
-       AU = zU(41695);
-     const FU = new Set(cU.O),
-       oU = cU.O.map((UU => (new TextEncoder).encode(UU))),
-       DU = new Map;
- 
+   38871: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L168-L175` → after: `L3842-L3852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3842-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3842-L3852) · [Before (L168-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L168-L175)

```diff
-       return null === (zU = DU.get(UU)) || void 0 === zU ? void 0 : zU[XU]
-     }(0, AU.m)(cU.oc.NewOtherEntitySettings, (UU => {
-       UU.payloadKind === yU.jc.Msgpack && oU.some((XU => function(UU, XU) {
-         const zU = XU[0];
-         for (let cU = UU.indexOf(zU); - 1 !== cU && cU + XU.length <= UU.length; cU = UU.indexOf(zU, cU + 1)) {
-           let zU = 1;
-           for (; zU < XU.length && UU[cU + zU] === XU[zU];) zU++;
-           if (zU === XU.length) return !0
+       BH || (BH = {});
+       const AH = null !== (LH = BH.customAttributes) && void 0 !== LH ? LH : {};
+       var rH, SH, hH;
+       "Gun" === (null === HH || void 0 === HH ? void 0 : HH.type) && (AH.shotsLeft = null !== (rH = null !== (SH = AH.shotsLeft) && void 0 !== SH ? SH : null === (hH = AH.gunStats) || void 0 === hH ? void 0 : hH.clipSize) && void 0 !== rH ? rH : HH.clipSize);
+       if (AH.enchantmentTier && (AH.enchantmentTier = AH.enchantmentTier.toString()), AH.enchantments)
+         for (const XH in AH.enchantments) {
+           const HH = AH.enchantments[XH];
+           if ("number" !== typeof HH) {
+             const BH = parseInt(HH);
+             isNaN(BH) || BH < 0 ? AH.enchantments[XH] = void 0 : AH.enchantments[XH] = BH > 1e9 ? 1e9 : BH
+           }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L177-L186` → after: `L3854-L3866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3854-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3854-L3866) · [Before (L177-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L177-L186)

```diff
-         return !1
-       }(UU.payload, XU))) && function(UU) {
-         if (null === UU || "object" !== typeof UU || null === UU.settings || "object" !== typeof UU.settings) return;
-         const XU = String(UU.eId),
-           zU = UU.settings;
-         let cU = DU.get(XU);
-         for (const yU in zU) {
-           if (!FU.has(yU)) continue;
-           const UU = zU[yU];
-           null === UU || void 0 === UU ? cU && delete cU[yU] : (cU ??= {}, cU[yU] = UU)
+       if (AH.enchantmentData)
+         for (const XH in AH.enchantmentData) {
+           const HH = AH.enchantmentData[XH];
+           if (!HH) continue;
+           if ("object" !== typeof HH) {
+             AH.enchantmentData[XH] = void 0;
+             continue
+           }
+           const BH = HH.icon,
+             LH = HH.description;
+           var tH, zH, CH, EH;
+           if ("string" !== typeof BH) AH.enchantmentData[XH].icon = null !== (tH = null === BH || void 0 === BH || null === (zH = BH.toString) || void 0 === zH ? void 0 : zH.call(BH)) && void 0 !== tH ? tH : void 0;
+           if ("string" !== typeof LH) AH.enchantmentData[XH].description = null !== (CH = null === LH || void 0 === LH || null === (EH = LH.toString) || void 0 === EH ? void 0 : EH.call(LH)) && void 0 !== CH ? CH : void 0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L188-L192` → after: `L3868-L3872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3868-L3872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3868-L3872) · [Before (L188-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L188-L192)

```diff
-         cU && DU.set(XU, cU)
-       }((0, QU.d)(UU.payload))
-     })), (0, AU.e)((() => {
-       DU.clear()
-     }))
+       return BH.customAttributes = AH, BH
+     }
+     LH.d(BH, {
+       d: () => AH
+     })
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L194` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3874) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L194)

```diff
-   42112: (UU, XU, zU) => {
+   39105: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L198` → after: `L3878-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3878-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3878-L3880) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L198)

```diff
-       g: () => YU
+       e: () => zH,
+       g: () => XH,
+       h: () => OH
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L200-L207` → after: `L3882-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3882-L3886) · [Before (L200-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L200-L207)

```diff
-     var cU = zU(39835),
-       yU = zU(2012),
-       QU = zU(1319),
-       AU = zU(41676),
-       FU = zU(41680),
-       oU = zU(41695);
-     const DU = new cU.c;
-     let EU = {};
+     var AH = LH(9940),
+       rH = LH(9965),
+       SH = LH(39111);
+     const hH = (0, AH.h)("Noticeboard"),
+       tH = (0, AH.h)("Standing Noticeboard|meta|rot4|lrud");
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L210` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3889) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L210)

```diff
-       return EU[UU]
+       return hH <= HH && HH <= tH
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L212` → after: `L3891-L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3891-L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3891-L3895) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L212)

```diff
-     const NU = new QU.e;
+     const CH = new Uint8Array(tH - hH + 1);
+     for (let bH = hH; bH <= tH; bH++) CH[bH - hH] = (0, rH.q)(AH.g[bH].meta.metaStr);
+     const EH = 64,
+       XH = EH * EH,
+       [GH, YH, uH, QH] = [0, 1, 2, 3];
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L215` → after: `L3898-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3898-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3898-L3899) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L215)

```diff
-       return NU.add(UU)
+       var BH, LH;
+       return "string" === typeof(null === HH || void 0 === HH || null === (BH = HH.persisted) || void 0 === BH || null === (LH = BH.shared) || void 0 === LH ? void 0 : LH.text)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L219-L316` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3903) · [Before (L219-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L219-L316)

```diff
-       NU.callEach(UU, "a roster listener")
-     }(0, oU.m)(AU.Z, (UU => {
-       const XU = (0, FU.d)(AU.Z, UU);
-       if (void 0 === XU) return;
-       const zU = XU.KQ.some((UU => {
-           let {
-             bQ: XU,
-             TQ: zU
-           } = UU;
-           return null !== zU && DU.has(XU) && DU.getName(XU) !== zU
-         })),
-         {
-           added: cU,
-           removed: QU,
-           settingChanges: oU
-         } = DU.apply(XU),
- ... (82 more removed lines; see GitHub link above)
+       return WH(HH) && "" !== HH.persisted.shared.text.trim()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L319-L330` → after: `L3906-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3906-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3906-L3909) · [Before (L319-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L319-L330)

```diff
-     function aU(UU) {
-       let {
-         killer: XU,
-         victim: zU,
-         withItem: cU
-       } = UU;
-       return {
-         killer: BU(XU),
-         victim: BU(zU),
-         withItem: cU,
-         killstreak: 0
-       }
+     function xH(HH, BH) {
+       let [LH, , AH] = BH;
+       const [SH, , hH] = rH.s[HH][YH];
+       return LH * SH + AH * hH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L333-L334` → after: `L3912-L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3912-L3913) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L333-L334)

```diff
-     function tU(UU) {
-       WU && LU((() => "killed" === UU.kind ? pU(UU.body) : aU(UU.body)))
+     function vH(HH, BH, LH) {
+       return LH[1] - BH[1] || xH(HH, BH) - xH(HH, LH)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L339` → after: `L3916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3916) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L339)

```diff
-     function GU(UU, XU) {
+     function PH(HH, BH, LH, SH, tH) {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L341` → after: `L3918-L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3918-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3918-L3921) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L341)

```diff
-       return YU.d.has(UU) ? null === (zU = YU.d.getSettings(UU)) || void 0 === zU ? void 0 : zU[XU] : (0, EU.b)(UU, XU)
+       let EH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : HH(BH[0], BH[1], BH[2]);
+       if (!(CH[EH - hH] & 1 << LH)) return null;
+       const [XH, GH, YH] = rH.s[tH][LH], uH = [BH[0] + XH, BH[1] + GH, BH[2] + YH], QH = HH(uH[0], uH[1], uH[2]), WH = null === (zH = AH.g[QH]) || void 0 === zH ? void 0 : zH.meta;
+       return (null === WH || void 0 === WH ? void 0 : WH.rootId) === SH && WH.rot === tH && CH[QH - hH] & 1 << (1 ^ LH) ? uH : null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L344-L353` → after: `L3924-L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3924-L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3924-L3933) · [Before (L344-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L344-L353)

```diff
-     function BU(UU) {
-       var XU, zU, AU, FU, EU;
-       let {
-         eId: NU,
-         name: IU,
-         colour: pU,
-         lifeformType: aU
-       } = UU;
-       if (void 0 === NU || null === NU || "" === NU) {
-         const UU = IU || null;
+     function TH(HH, BH, LH, SH) {
+       const hH = HH(BH, LH, SH);
+       if (!zH(hH)) return null;
+       const {
+         rootId: tH,
+         rot: CH
+       } = AH.g[hH].meta, XH = (BH, LH) => {
+         let AH = BH,
+           rH = 1;
+         for (let SH = PH(HH, AH, LH, tH, CH); SH && rH < EH; SH = PH(HH, AH, LH, tH, CH)) AH = SH, rH++;
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L355-L360` → after: `L3935-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3935-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3935-L3936) · [Before (L355-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L355-L360)

```diff
-           id: null,
-           shownName: UU,
-           lifeformType: null === UU && null !== aU && void 0 !== aU ? aU : null,
-           colour: pU || null,
-           local: !1,
-           realName: null
+           end: AH,
+           cells: rH
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L363-L368` → after: `L3950-L3978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3950-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3950-L3978) · [Before (L363-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L363-L368)

```diff
-       const tU = String(NU),
-         BU = null === (XU = (0, DU.f)()) || void 0 === XU ? void 0 : XU.api,
-         ZU = void 0 !== BU && String(BU.localId) === tU,
-         RU = null !== (zU = YU.d.getName(tU)) && void 0 !== zU ? zU : null,
-         PU = null !== (AU = GU(tU, "hideNameSeed")) && void 0 !== AU ? AU : null;
-       let WU = null === RU ? null : (0, cU.b)(RU, !QU.featureFlags.canSeeRealPlayerNames, PU) || null,
+     }
+ 
+     function UH(HH, BH) {
+       for (const LH of function(HH) {
+           let {
+             anchor: BH,
+             rot: LH,
+             width: AH,
+             height: SH
+           } = HH;
+           const [hH, , tH] = rH.s[LH][YH], zH = [];
+           for (let rH = 0; rH < SH; rH++)
+             for (let HH = 0; HH < AH; HH++) zH.push([BH[0] + hH * HH, BH[1] - rH, BH[2] + tH * HH]);
+           return zH
+         }(HH))
+         if (WH(BH(LH[0], LH[1], LH[2]))) return LH;
+ ... (13 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L370-L372` → after: `L3980-L4011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L3980-L4011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L3980-L4011) · [Before (L370-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L370-L372)

```diff
-       if (null === WU && void 0 !== BU) {
-         const UU = BU.getEntityType(tU);
-         "Player" !== UU && (WU = (0, oU.h)(BU, +tU) || null), dU = yU.h.includes(UU) ? UU : null
+       for (let AH = 0; AH < EH.length; AH++) {
+         const LH = EH[AH];
+         if (vH(CH, LH, YH) < 0 && (YH = LH), WH(BH(LH[0], LH[1], LH[2]))) {
+           const BH = TH(HH, LH[0], LH[1], LH[2]);
+           (!uH || vH(CH, BH.anchor, uH.anchor) < 0) && (uH = BH)
+         }
+         for (let BH = 0; BH < 4 && EH.length < XH; BH++) {
+           const AH = PH(HH, LH, BH, tH, CH);
+           AH && !GH.has(AH.join()) && (GH.add(AH.join()), EH.push(AH))
+         }
+       }
+       return uH ??= TH(HH, YH[0], YH[1], YH[2]), {
+         cells: EH,
+         topLeft: YH,
+         rect: uH,
+         textCell: UH(uH, BH)
+ ... (16 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L375-L380` → after: `L4015-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4015-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4015-L4016) · [Before (L375-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L375-L380)

```diff
-         id: tU,
-         shownName: WU,
-         lifeformType: null === WU && null !== (FU = null !== (EU = dU) && void 0 !== EU ? EU : aU) && void 0 !== FU ? FU : null,
-         colour: pU || GU(tU, "killfeedColour") || (ZU ? gU : kU),
-         local: ZU,
-         realName: RU
+         root: (0, SH.c)(XH) ? rH.x : rH.w,
+         rot: tH
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L383-L387` → after: `L4019-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4019-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4019-L4239) · [Before (L383-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L383-L387)

```diff
-     const ZU = 32;
-     let RU = [],
-       PU = null,
-       WU = !1,
-       dU = !1;
+   },
+   39096: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => MH,
+       c: () => PH,
+       d: () => VH,
+       h: () => OH,
+       l: () => uH,
+       o: () => XH,
+       p: () => YH,
+       s: () => bH,
+       v: () => kH,
+       w: () => GH
+     });
+     var AH = LH(7007),
+       rH = LH(37928),
+ ... (205 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L390` → after: `L4242-L4244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4242-L4244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4242-L4244) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L390)

```diff
-       null === PU ? (RU.length === ZU && RU.shift(), RU.push(UU)) : PU(UU())
+       for (const BH of rH.c)
+         if (XH[BH].meshItemName === HH) return BH;
+       return null
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L393-L402` → after: `L4247-L4253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4247-L4253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4247-L4253) · [Before (L393-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L393-L402)

```diff
-     function eU() {
-       dU || (dU = !0, (0, IU.m)(AU.oc.PlayerKilled, (UU => {
-         const XU = (0, NU.f)(UU);
-         (0, NU.b)(XU) && LU((() => pU(XU)))
-       })), (0, IU.m)(AU.oc.CustomKillfeed, (UU => {
-         const XU = (0, NU.f)(UU);
-         (0, NU.b)(XU) && (0, NU.b)(XU.killer) && (0, NU.b)(XU.victim) && LU((() => aU(XU)))
-       })), (0, IU.e)((() => {
-         RU = []
-       })))
+     function uH(HH, BH) {
+       const LH = HH.validBlockIds;
+       if (Array.isArray(LH)) return LH.includes(BH);
+       if (BH === zH) return !1;
+       if ("solidBlocks" === LH) return !0 !== SH.g[BH].UY;
+       if ("solidBlocksOrFluid" === LH) return !0;
+       throw new Error(`Unsupported validBlockIds for ${BH}: ${JSON.stringify(LH)}`)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L404-L406` → after: `L4255-L4261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4255-L4261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4255-L4261) · [Before (L404-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L404-L406)

```diff
-     const CU = Object.freeze([0, 0, 0]),
-       wU = [0, 0, 0],
-       qU = [0, 0, 0],
+     const QH = {
+         meshAttachment: {
+           size: .12,
+           offset: [0, 1.8, -.24],
+           rotation: [0, 0, 0]
+         }
+       },
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L408-L424` → after: `L4263-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4263-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4263-L4323) · [Before (L408-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L408-L424)

```diff
-         kill: {
-           watch(UU) {
-             if (WU = !0, 0 === RU.length) return PU = UU, () => {
-               WU = !1, PU = null
-             };
-             const XU = setTimeout((() => {
-               const XU = RU;
-               RU = [], PU = UU;
-               for (const cU of XU) try {
-                 UU(cU())
-               } catch (zU) {
-                 console.error("[bloxd-wasm-client] a kept kill couldn't be handed on", zU)
-               }
-             }), 0);
-             return () => {
-               clearTimeout(XU), WU = !1, PU = null
- ... (1 more removed lines; see GitHub link above)
+         "Yellow Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.YELLOW
+           }
+         },
+         "White Balloon": {
+           ...QH,
+           physicsState: {
+             type: AH.o.BALLOON,
+             tier: AH.d.WHITE
+           }
+         },
+         "Red Balloon": {
+           ...QH,
+ ... (45 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L429-L434` → after: `L4389-L4394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4389-L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4389-L4394) · [Before (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L429-L434)

```diff
-         localPos() {
-           const UU = (0, DU.f)();
-           if (null === UU) return CU;
-           const XU = UU.api.apiView;
-           for (let zU = 0; zU < 3; zU++) wU[zU] = FU.w.localPos(XU, 0, zU);
-           return wU
+         "Wood Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.WOOD
+           }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L436-L440` → after: `L4396-L4415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4396-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4396-L4415) · [Before (L436-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L436-L440)

```diff
-         targetedBlockPos() {
-           const UU = (0, DU.f)();
-           if (null === UU || FU.w.targetBlockId(UU.api.apiView, 0) === FU.cd) return null;
-           for (let XU = 0; XU < 3; XU++) qU[XU] = FU.w.targetBlock(UU.api.apiView, 0, XU);
-           return qU
+         "Iron Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.IRON
+           }
+         },
+         "Gold Hang Glider": {
+           ...xH,
+           physicsState: {
+             type: AH.o.GLIDER,
+             tier: AH.i.GOLD
+           }
+         },
+         "Diamond Hang Glider": {
+           ...xH,
+ ... (4 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L442` → after: `L4417-L4442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4417-L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4417-L4442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L442)

```diff
-       }
+       };
+ 
+     function PH(HH) {
+       var BH;
+       return null === HH || void 0 === HH ? null : null !== (BH = vH[HH]) && void 0 !== BH ? BH : null
+     }
+     const TH = new Set(Object.values(WH).map((HH => HH.physicsState.type))),
+       UH = new Set(Object.values(vH).map((HH => HH.physicsState.type)));
+ 
+     function VH(HH) {
+       return TH.has(HH)
+     }
+ 
+     function OH(HH) {
+       return UH.has(HH)
+     }
+ ... (10 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L444` → after: `L4444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L444)

```diff
-   39835: (UU, XU, zU) => {
+   39114: (HH, BH, LH) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L446` → after: `L4446-L4449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4446-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4446-L4449) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L446)

```diff
-       c: () => cU
+       d: () => SH,
+       e: () => hH,
+       i: () => rH,
+       m: () => tH
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/268.js` (Changed code · before: `L448-L502` → after: `L4451-L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-089f8387ebd41dd3a597ac7fed02b4bf13ebad378e7f34b729af81275fd24813) · [After (L4451-L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/268.js#L4451-L4462) · [Before (L448-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/268.js#L448-L502)

```diff
-     class cU {
-       constructor() {
-         this.members = new Map
-       }
-       apply(UU) {
-         const XU = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const cU of UU.KQ) {
-           let UU = this.members.get(cU.bQ);
-           if (UU || (UU = {
-               name: null,
-               settings: {}
-             }, this.members.set(cU.bQ, UU), XU.added.push(cU.bQ)), null !== cU.TQ && (UU.name = cU.TQ), null !== cU.hQ || cU.UA.length > 0) {
- ... (39 more removed lines; see GitHub link above)
+     var AH = LH(323);
+     const rH = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...LH(614).w.map((HH => `${HH} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       SH = ["Obby RPG"];
+ 
+     function hH(HH) {
+       const BH = HH.indexOf("|");
+       return -1 === BH ? {
+         item: HH,
+         clientPredictedThrower: null
+       } : {
+         item: HH.slice(0, BH),
+         clientPredictedThrower: HH.slice(BH + 1)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (64 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L4)

```diff
-   40278: (UU, XU, zU) => {
+   38935: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L6` → after: `L6-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L6-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L6-L48) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L6)

```diff
-       e: () => AU,
+       c: () => CH,
+       d: () => AH,
+       g: () => tH,
+       i: () => rH,
+       l: () => hH,
+       m: () => SH
+     });
+     const AH = 1.001,
+       rH = .501,
+       SH = .025,
+       hH = .75,
+       tH = .08,
+       zH = 4;
+ 
+     function CH() {
+       const HH = rH,
+ ... (27 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L8` → after: `L50-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L50-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L50-L56) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L8)

```diff
-       i: () => QU
+       i: () => vH,
+       m: () => CH,
+       n: () => tH,
+       p: () => hH,
+       t: () => SH,
+       x: () => VH,
+       y: () => YH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L10` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L58) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L10)

```diff
-     var cU = zU(61);
+     var AH = LH(10015);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L13` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L61) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L13)

```diff
-       return FU(UU, oU)
+       return Math.floor(HH).toLocaleString("en-US")
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L17` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L72-L73) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L17)

```diff
-       return FU(UU, DU)
+       const BH = HH.split("|")[0];
+       return (0, AH.i)(BH) ? BH === AH.b ? "cryo" : "water" : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L21` → after: `L86-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L86-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L86-L103) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L21)

```diff
-       return `${Math.floor(UU/60)}:${String(UU%60).padStart(2,"0")}`
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const LH = BH ? function(HH, BH, LH) {
+         const AH = YH.findIndex((AH => {
+           let [rH, SH, hH] = AH;
+           return rH === HH && SH === BH && hH === LH
+         }));
+         return AH < 0 ? 0 : 1 << AH
+       }(BH[0], BH[1], BH[2]) : 0;
+       return "maker" === HH ? {
+         kind: HH,
+         faces: LH
+       } : "user" === HH ? {
+         kind: HH,
+         faces: uH & ~LH
+       } : {
+         kind: HH,
+ ... (2 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L24-L38` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L106-L107) · [Before (L24-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L24-L38)

```diff
-     function FU(UU, XU) {
-       const [, zU] = (0, cU.useState)(null);
-       return (0, cU.useEffect)((() => {
-         if (0 === UU) return;
-         const cU = window.setInterval((() => {
-           const cU = XU(UU);
-           zU((XU => (null === XU || void 0 === XU ? void 0 : XU.endsAt) === UU && XU.value === cU ? XU : {
-             endsAt: UU,
-             value: cU
-           }))
-         }), 250);
-         return () => {
-           window.clearInterval(cU)
-         }
-       }), [UU, XU]), XU(UU)
+     function WH(HH) {
+       return "pipe" === HH || "tank" === HH || "maker" === HH
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L41-L42` → after: `L110-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L110-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L110-L169) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L41-L42)

```diff
-     function oU(UU) {
-       return (UU - performance.now()) / 1e3
+     function MH(HH, BH, LH) {
+       return 0 !== (HH.faces & 1 << LH) && 0 !== (BH.faces & 1 << (1 ^ LH)) && (WH(HH.kind) || WH(BH.kind))
+     }
+     const xH = (HH, BH, LH, AH) => ({
+         input: HH,
+         inputAmount: AH,
+         output: BH,
+         outputAmount: LH
+       }),
+       vH = {
+         Condenser: {
+           kind: "Condenser",
+           opMs: 2e3,
+           inputSlot: null,
+           fuelSlot: null,
+           outputSlots: [],
+ ... (44 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L46-L58` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L173-L175) · [Before (L46-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L46-L58)

```diff
-       return Math.max(0, Math.ceil(oU(UU)))
-     }
-   },
-   40303: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => yU
-     });
-     var cU = zU(40307);
-     async function yU() {
-       const {
-         averageColors: UU
-       } = await zU.e(222).then((() => zU(34975)));
-       return new cU.c(UU)
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const LH = PH(vH["Coolant Mixer"], XH) * BH;
+       return HH <= 0 ? 0 : Math.ceil(HH / LH - 1e-9)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L61` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L181) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L61)

```diff
-   40281: (UU, XU, zU) => {
+   39279: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L63-L169` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L183-L184) · [Before (L63-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L63-L169)

```diff
-       d: () => oU
-     });
-     var cU = zU(37414),
-       yU = zU(1193),
-       QU = zU(1266),
-       AU = zU(39278),
-       FU = zU(39331);
-     class oU {
-       constructor(UU, XU) {
-         var zU;
-         this.classes = UU, this.distanceKey = XU, this.markers = new Map, this.refs = new Map, this.viewport = {
-           width: window.innerWidth,
-           height: window.innerHeight
-         }, this.render = null, this.kp = !1, this.QG = () => {
-           this.viewport = {
-             width: window.innerWidth,
- ... (91 more removed lines; see GitHub link above)
+       c: () => KH,
+       e: () => cH
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L171-L233` → after: `L186-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L186-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L186-L208) · [Before (L171-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L171-L233)

```diff
-     const cU = "ore sell",
-       yU = "lumber ",
-       QU = "farm ",
-       AU = ["market", "demolition", "mining", "woodcutting", "farming"];
-     var FU = zU(61),
-       oU = zU(31),
-       DU = zU(39374),
-       EU = zU(37325);
-     const YU = "greenvilleBackpackView";
-     class NU {
-       constructor(UU) {
-         this.UY = UU, this.view = null, this.arrivalToken = 0, this.showToken = 0
-       }
-       getView() {
-         return this.view
-       }
- ... (47 more removed lines; see GitHub link above)
+     var AH = LH(9940),
+       rH = LH(9965);
+     const SH = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var hH = LH(9982),
+       tH = LH(39111),
+       zH = LH(9979);
+     const CH = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L283-L287` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L211-L212) · [Before (L283-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L283-L287)

```diff
-     function WU() {
-       const UU = new Image;
-       UU.src = ZU, UU.decode().catch((UU => {
-         console.error("[greenville] backpack art failed to load", UU)
-       }))
+     function XH(HH, BH) {
+       return HH[0] === BH[0] && HH[1] === BH[1]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L330-L341` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L215-L216) · [Before (L330-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L330-L341)

```diff
-     function wU(UU) {
-       let {
-         controller: XU
-       } = UU;
-       (0, kU.j)(YU, null), (0, FU.useEffect)(WU, []);
-       const zU = XU.getView();
-       return null === zU ? null : (0, RU.jsx)(tU.e, {
-         placement: "bottomLeft",
-         children: (0, RU.jsx)(qU, {
-           view: zU
-         })
-       })
+     function GH(HH, BH) {
+       return HH[0] * BH[0] + HH[1] * BH[1] === 0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L344-L471` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L226-L227) · [Before (L344-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L344-L471)

```diff
-     function qU(UU) {
-       let {
-         view: XU
-       } = UU;
-       const {
-         t: zU
-       } = (0, BU.I)(), {
-         isTouchScreen: cU
-       } = (0, aU.q)(["isTouchScreen"]), [yU, QU] = (0, FU.useState)([]), AU = (0, FU.useRef)(null), oU = (0, FU.useRef)(null), DU = (0, FU.useRef)([]), EU = (0, FU.useRef)({
-         arrival: XU.arrival,
-         showToken: XU.showToken
-       }), {
-         arrival: YU,
-         showToken: NU
-       } = XU;
-       (0, FU.useLayoutEffect)((() => {
- ... (112 more removed lines; see GitHub link above)
+     function QH(HH, BH, LH, AH, rH) {
+       return BH < uH.s || BH >= uH.s + uH.u || Math.floor(HH / uH.z) === Math.floor(AH / uH.z) && Math.floor(LH / uH.z) === Math.floor(rH / uH.z)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L475-L488` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L244-L245) · [Before (L475-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L475-L488)

```diff
-       let {
-         shards: XU,
-         shardsPerItem: zU
-       } = UU;
-       return (0, RU.jsx)("div", {
-         className: "GreenvilleBackpackShards",
-         children: Array.from({
-           length: zU
-         }, ((UU, zU) => (0, RU.jsx)("span", {
-           className: pU()("GreenvilleBackpackShard", {
-             Filled: zU < XU
-           })
-         }, zU)))
-       })
+       var BH, LH;
+       return null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.meta.rootName) && void 0 !== BH ? BH : ""
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L492-L531` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L249) · [Before (L492-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L492-L531)

```diff
-       let {
-         drop: XU,
-         onLanded: zU
-       } = UU;
-       const cU = (0, FU.useRef)(null);
-       return (0, FU.useLayoutEffect)((() => {
-         const {
-           driftEm: UU,
-           spinDeg: yU
-         } = XU, QU = cU.current.animate([{
-           transform: `translate(${UU}em, -3.2em) rotate(${yU}deg) scale(1.2)`,
-           opacity: 0
-         }, {
-           transform: `translate(${.7*UU}em, -2.4em) rotate(${.7*yU}deg) scale(1.1)`,
-           opacity: 1,
-           offset: .25
- ... (24 more removed lines; see GitHub link above)
+       return UH(HH) === uH.k && (0, uH.$)(AH.g[HH].name)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L533-L554` → after: `L251-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L251-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L251-L258) · [Before (L533-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L533-L554)

```diff
-     var rU = zU(73),
-       uU = zU(34891),
-       fU = zU(2616),
-       iU = zU(2827);
-     const HU = [{
-         transform: "scale(1.18)"
-       }, {
-         transform: "scale(1)"
-       }],
-       MU = [{
-         transform: "scale(1)",
-         filter: "brightness(1)"
-       }, {
-         transform: "scale(1.3)",
-         filter: "brightness(1.5)",
-         offset: .3
- ... (6 more removed lines; see GitHub link above)
+     var OH = LH(9973),
+       bH = LH(9994);
+     const kH = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L557-L565` → after: `L261-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L261-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L261-L266) · [Before (L557-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L557-L565)

```diff
-       var XU;
-       let {
-         sounds: zU
-       } = UU;
-       const cU = null === (XU = (0, fU.f)("currencyAmounts")) || void 0 === XU ? void 0 : XU.gold;
-       return !cU || cU.hidden ? null : (0, RU.jsx)(nU, {
-         gold: cU.amount,
-         sounds: zU
-       })
+       var BH, LH;
+       const rH = null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta;
+       return (null === rH || void 0 === rH ? void 0 : rH.rootName) !== bH.s ? null : {
+         rot: null !== (LH = rH.rot) && void 0 !== LH ? LH : 1,
+         half: (0, bH.h)(rH.rootName, rH.metaStr)
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L568-L651` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L269-L270) · [Before (L568-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L568-L651)

```diff
-     function nU(UU) {
-       let {
-         gold: XU,
-         sounds: zU
-       } = UU;
-       const cU = (0, iU.e)(),
-         [yU, QU] = (0, FU.useState)([]),
-         AU = (0, FU.useRef)(null),
-         oU = (0, FU.useRef)(null),
-         DU = (0, FU.useRef)(null),
-         EU = (0, FU.useRef)(XU);
-       (0, FU.useLayoutEffect)((() => {
-         const UU = XU - EU.current;
-         if (EU.current = XU, !(UU <= 0) && (zU.onGain(), !cU && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
-           const XU = function(UU) {
-             const XU = Math.max(1, Math.min(8, Math.floor(UU))),
- ... (68 more removed lines; see GitHub link above)
+     function oH(HH, BH, LH, AH) {
+       return mH(HH(BH, LH, AH))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L654` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L273) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L654)

```diff
-     function mU(UU) {
+     function IH(HH, BH, LH, AH, rH) {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L656-L658` → after: `L275-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L275-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L275-L276) · [Before (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L656-L658)

```diff
-         coin: XU,
-         target: zU,
-         onLanded: cU
+         rot: SH,
+         half: hH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L660-L708` → after: `L278-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L278-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L278-L279) · [Before (L660-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L660-L708)

```diff
-       const yU = (0, FU.useRef)(null);
-       return (0, FU.useEffect)((() => {
-         var UU;
-         const QU = (null !== (UU = VU) && void 0 !== UU ? UU : zU.current).getBoundingClientRect(),
-           {
-             burst: AU
-           } = XU,
-           FU = window.innerWidth / 2,
-           oU = window.innerHeight / 2,
-           DU = QU.left + QU.width / 2,
-           EU = QU.top + QU.height / 2,
-           YU = yU.current.animate([{
-             transform: `translate(${FU}px, ${oU}px) scale(0.3)`,
-             opacity: 0,
-             easing: "ease-out"
-           }, {
- ... (33 more removed lines; see GitHub link above)
+       const [tH, zH] = (0, bH.o)(SH, hH), CH = oH(HH, BH + tH, LH, AH + zH);
+       return null !== CH && CH.rot === SH && CH.half === bH.t[hH]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L710-L732` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L281-L284) · [Before (L710-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L710-L732)

```diff
-     class lU {
-       constructor(UU, XU, zU) {
-         this.pacer = UU, this.send = XU, this.onAnswersTimedOut = zU, this.queued = [], this.unanswered = [], this.answerTimer = null, this.flushing = !1, this.flush = () => {
-           if (!this.flushing) {
-             this.flushing = !0;
-             try {
-               for (; this.queued.length > 0 && this.pacer.tryStart();) {
-                 const UU = this.queued.shift();
-                 this.unanswered.push(UU), this.answerTimer ??= setTimeout(this.onAnswerTimeout, 15e3), this.send(UU)
-               }
-             } finally {
-               this.flushing = !1
-             }
-           }
-         }, this.onAnswerTimeout = () => {
-           this.answerTimer = null, this.unanswered = [], this.onAnswersTimedOut()
- ... (7 more removed lines; see GitHub link above)
+     var fH = LH(39288);
+     const lH = [new class {
+       constructor() {
+         this.reshapeOffsets = YH
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L734-L748` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L286) · [Before (L734-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L734-L748)

```diff
-       getLastSent() {
-         return this.unanswered.at(-1)
-       }
-       getLastPending() {
-         var UU;
-         return null !== (UU = this.queued.at(-1)) && void 0 !== UU ? UU : this.unanswered.at(-1)
-       }
-       push(UU) {
-         this.queued.push(UU), this.flush()
-       }
-       dropWaiting() {
-         const UU = this.queued.length > 0;
-         return this.queued = [], UU
-       }
-       takeAnswer() {
+       handles(HH) {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L750-L754` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L288) · [Before (L750-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L750-L754)

```diff
-         const XU = null !== (UU = this.unanswered.shift()) && void 0 !== UU ? UU : null;
-         return this.stopAnswerTimer(), this.unanswered.length > 0 && (this.answerTimer = setTimeout(this.onAnswerTimeout, 15e3)), XU
-       }
-       clear() {
-         this.queued = [], this.unanswered = [], this.stopAnswerTimer()
+         return "Stairs" === (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.model)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L756-L757` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L290-L291) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L756-L757)

```diff
-       stopAnswerTimer() {
-         null !== this.answerTimer && (clearTimeout(this.answerTimer), this.answerTimer = null)
+       affects(HH) {
+         return this.handles(HH)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L759-L762` → after: `L293-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L293-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L293-L297) · [Before (L759-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L759-L762)

```diff
-     }
-     class xU {
-       constructor(UU, XU, zU, cU) {
-         this.confirmed = UU, this.picks = void 0, this.picks = new lU(XU, zU, cU)
+       shape(HH, BH, LH, rH, SH) {
+         const hH = this.stairsOf(SH),
+           tH = this.cornerAt(HH, BH, LH, rH, hH),
+           CH = hH.half === zH.c.top ? "top" : "bot";
+         return (0, AH.h)(`${AH.g[SH].meta.rootName}|meta|rot${hH.rot}|${CH}${null===tH?"":`|${tH}`}`)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L764-L765` → after: `L299-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L299-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L299-L307) · [Before (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L764-L765)

```diff
-       confirm(UU) {
-         this.confirmed = UU
+       stairsOf(HH) {
+         const {
+           rot: BH,
+           halfblockPlacement: LH
+         } = AH.g[HH].meta;
+         return {
+           rot: BH,
+           half: LH
+         }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L767-L768` → after: `L309-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L309-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L309-L311) · [Before (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L767-L768)

```diff
-       getLastPending() {
-         return this.picks.getLastPending()
+       stairsAt(HH, BH, LH, AH) {
+         const rH = HH(BH, LH, AH);
+         return this.handles(rH) ? this.stairsOf(rH) : null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L770-L772` → after: `L313-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L313-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L313-L334) · [Before (L770-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L770-L772)

```diff
-       getLatest() {
-         var UU;
-         return null !== (UU = this.getLastPending()) && void 0 !== UU ? UU : this.confirmed
+       cornerAt(HH, BH, LH, AH, rH) {
+         let {
+           rot: SH,
+           half: hH
+         } = rH;
+         const tH = CH[SH],
+           zH = rH => {
+             let [tH, zH] = rH;
+             const CH = this.stairsAt(HH, BH + tH, LH, AH + zH);
+             return null !== CH && CH.rot === SH && CH.half === hH
+           },
+           YH = this.stairsAt(HH, BH + tH[0], LH, AH + tH[1]);
+         if (null !== YH && YH.half === hH) {
+           const HH = CH[YH.rot];
+           if (GH(tH, HH) && !zH([-HH[0], -HH[1]])) return XH(HH, EH(tH)) ? "outerLeft" : "outerRight"
+         }
+ ... (6 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L774-L775` → after: `L336-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L336-L338) · [Before (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L774-L775)

```diff
-       kY() {
-         return this.picks.kY()
+     }, new class {
+       constructor() {
+         this.reshapeOffsets = SH, this.rootIds = new Set(rH.j.map((HH => (0, AH.h)(HH))))
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L777` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L340) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L777)

```diff
-       pushLatest(UU) {
+       handles(HH) {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L779-L780` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L342-L343) · [Before (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L779-L780)

```diff
-         const zU = null !== (XU = this.picks.getLastSent()) && void 0 !== XU ? XU : this.confirmed;
-         this.picks.dropWaiting() && UU === zU || this.picks.push(UU)
+         const LH = null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta;
+         return void 0 !== LH && this.rootIds.has(LH.rootId)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L782-L783` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L345-L346) · [Before (L782-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L782-L783)

```diff
-       takeAnswer() {
-         this.picks.takeAnswer()
+       affects(HH) {
+         return this.handles(HH)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L785-L786` → after: `L348-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L348-L349) · [Before (L785-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L785-L786)

```diff
-       clear() {
-         this.picks.clear()
+       placedBy(HH) {
+         return AH.g[HH].meta.rootName === rH.o ? null : rH.o
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L788-L795` → after: `L351-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L351-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L351-L363) · [Before (L788-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L788-L795)

```diff
-     }
-     class JU {
-       constructor(UU, XU, zU) {
-         this.closed = UU, this.UY = XU, this.menu = zU, this.view = void 0, this.dismiss = () => {
-           this.closePanel() && this.menu.dismiss()
-         }, this.onMenuClosed = () => {
-           this.closePanel()
-         }, this.view = UU
+       shape(HH, BH, LH, SH, hH) {
+         const {
+           rootId: tH,
+           rootName: zH,
+           rot: CH
+         } = AH.g[hH].meta;
+         let EH = 0;
+         return rH.s[CH].forEach(((rH, hH) => {
+           var zH;
+           let [XH, GH, YH] = rH;
+           const uH = null === (zH = AH.g[HH(BH + XH, LH + GH, SH + YH)]) || void 0 === zH ? void 0 : zH.meta;
+           (null === uH || void 0 === uH ? void 0 : uH.rootId) === tH && uH.rot === CH && (EH |= 1 << hH)
+         })), (0, AH.h)((0, rH.g)(zH, CH, EH))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L797-L798` → after: `L365-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L365-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L365-L367) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L797-L798)

```diff
-       getView() {
-         return this.view
+     }, ...hH.e.map((HH => new tH.b(HH))), new class {
+       constructor() {
+         this.reshapeOffsets = TH
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L800-L801` → after: `L369-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L369-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L369-L371) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L800-L801)

```diff
-       show(UU) {
-         this.set(UU), this.menu.open(this)
+       handles(HH) {
+         const BH = UH(HH);
+         return xH.has(BH) || BH === uH.k
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L803-L804` → after: `L373-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L373-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L373-L375) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L803-L804)

```diff
-       close() {
-         this.closePanel() && this.menu.close()
+       affects(HH) {
+         const BH = UH(HH);
+         return vH.has(BH) || PH.has(BH) || BH === WH || BH === uH.k || void 0 !== uH.e[BH]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L806-L807` → after: `L377-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L377-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L377-L419) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L806-L807)

```diff
-       set(UU) {
-         this.view = UU, this.UY(UU)
+       shape(HH, BH, LH, rH, SH, hH) {
+         const {
+           rootName: tH,
+           rot: zH
+         } = AH.g[SH].meta;
+         return tH === uH.k ? hH ? SH : function(HH, BH, LH, rH, SH) {
+           const [hH, tH] = uH.h[SH - 1];
+           for (let zH = 1; zH <= uH.K; zH++) {
+             const [CH, EH] = [BH - hH * zH, rH - tH * zH], XH = HH(CH, LH, EH);
+             if (UH(XH) === uH.k && AH.g[XH].meta.rot === SH && QH(BH, LH, rH, CH, EH)) return (0, AH.h)((0, uH.fb)(SH, !VH(XH)))
+           }
+           return (0, AH.h)((0, uH.fb)(SH, !1))
+         }(HH, BH, LH, rH, zH) : (0, AH.h)((0, uH.R)(tH, zH, function(HH, BH, LH, rH, SH) {
+           const [hH, tH] = uH.h[SH - 1], zH = (SH, hH) => function(HH, BH, LH) {
+             var rH;
+             const SH = null === (rH = AH.g[HH]) || void 0 === rH ? void 0 : rH.meta;
+ ... (27 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L809-L810` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L421-L422) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L809-L810)

```diff
-       closePanel() {
-         return !!this.view.open && (this.dropPresses(), this.set(this.closed), !0)
+       affects(HH) {
+         return this.handles(HH)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L812-L842` → after: `L424-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L424-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L424-L427) · [Before (L812-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L812-L842)

```diff
-     }
-     const jU = "greenvilleDepotView",
-       KU = {
-         open: !1,
-         explosives: [],
-         picked: 0,
-         selected: 0,
-         level: 1,
-         line: "demolitionDepotIntro"
-       };
-     class bU extends JU {
-       constructor(UU, XU, zU, cU) {
-         super(KU, UU, XU), this.picks = void 0, this.select = UU => {
-           this.set({
-             ...this.getView(),
-             selected: UU
- ... (15 more removed lines; see GitHub link above)
+       shape(HH, BH, LH, rH, SH, hH) {
+         const tH = mH(SH);
+         return (0, AH.h)((zH = tH.rot, null !== (CH = hH ? this.reshapedHalf(HH, BH, LH, rH, tH) : this.placedHalf(HH, BH, LH, rH, tH.rot)) ? (0, bH.e)(bH.s, zH, CH) : 1 === zH ? bH.s : `${bH.s}|meta|rot${zH}`));
+         var zH, CH
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L844-L861` → after: `L429-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L429-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L429-L440) · [Before (L844-L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L844-L861)

```diff
-       PY(UU) {
-         if ("openDepot" === UU[0]) {
-           const XU = UU[4];
-           XU && this.picks.takeAnswer();
-           const zU = this.getView();
-           if (XU && !zU.open) return;
-           this.picks.confirm(UU[2]);
-           const cU = this.picks.getLatest(),
-             yU = !zU.open;
-           this.show({
-             open: !0,
-             explosives: UU[1],
-             picked: cU,
-             selected: yU ? cU : zU.selected,
-             level: UU[3],
-             line: yU ? "demolitionDepotIntro" : zU.line
- ... (2 more removed lines; see GitHub link above)
+       placedHalf(HH, BH, LH, AH, rH) {
+         const [SH, hH] = OH.c[rH];
+         for (const [tH, zH] of [
+             ["right", 1],
+             ["left", -1]
+           ]) {
+           const CH = BH + zH * SH,
+             EH = AH + zH * hH,
+             XH = oH(HH, CH, LH, EH);
+           if (null !== XH && XH.rot === rH && (null === XH.half || !IH(HH, CH, LH, EH, XH))) return tH
+         }
+         return null
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L863-L864` → after: `L442-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L442-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L442-L448) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L863-L864)

```diff
-       dropPresses() {
-         this.picks.clear()
+       reshapedHalf(HH, BH, LH, AH, rH) {
+         if (null !== rH.half && IH(HH, BH, LH, AH, rH)) return rH.half;
+         for (const SH of ["right", "left"]) {
+           const [hH, tH] = (0, bH.o)(rH.rot, SH), zH = oH(HH, BH + hH, LH, AH + tH);
+           if (null !== zH && zH.rot === rH.rot && zH.half === bH.t[SH]) return SH
+         }
+         return null
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L866-L872` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L450) · [Before (L866-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L866-L872)

```diff
-     }
-     var TU = zU(1390),
-       hU = zU(1494),
-       UX = zU(34884),
-       XX = zU(3660),
-       zX = zU(1978),
-       cX = zU(4968);
+     }, new fH.b];
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L874-L883` → after: `L452-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L452-L456) · [Before (L874-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L874-L883)

```diff
-     function yX(UU) {
-       var XU;
-       let {
-         item: zU,
-         className: cU
-       } = UU;
-       return (0, RU.jsx)(zX.d, {
-         className: cU,
-         text: null !== (XU = (0, UX.displayNameOf)((0, XX.c)(zU))) && void 0 !== XU ? XU : zU
-       })
+     function KH(HH, BH, LH, AH, rH) {
+       let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const hH of lH)
+         if (hH.handles(rH)) return hH.shape(HH, BH, LH, AH, rH, SH);
+       return rH
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L887-L893` → after: `L460-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L460-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L460-L464) · [Before (L887-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L887-L893)

```diff
-       let {
-         item: XU
-       } = UU;
-       return (0, RU.jsx)(gU.c, {
-         itemName: XU,
-         amount: 0
-       })
+       for (const AH of lH) {
+         var BH, LH;
+         if (AH.handles(HH)) return null !== (BH = null === (LH = AH.placedBy) || void 0 === LH ? void 0 : LH.call(AH, HH)) && void 0 !== BH ? BH : null
+       }
+       return null
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L896-L939` → after: `L483-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L483-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L483-L488) · [Before (L896-L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L896-L939)

```diff
-     function AX(UU) {
-       let {
-         open: XU,
-         onDismiss: zU,
-         title: cU,
-         className: yU,
-         headerExtra: QU,
-         tabs: AU,
-         status: FU,
-         children: oU
-       } = UU;
-       const DU = `${yU}Title`;
-       return (0, RU.jsx)(cX.c, {
-         show: XU,
-         close: zU,
-         togglePointerLock: !1,
- ... (28 more removed lines; see GitHub link above)
+     function GH(HH, BH, LH) {
+       const AH = new Set([SH.c, SH.b, XH, ...BH, ...LH, ...HH ? [hH.m] : []]);
+       return {
+         makers: new Set(BH),
+         roots: AH
+       }
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L941-L965` → after: `L490-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L490-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L490-L508) · [Before (L941-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L941-L965)

```diff
- 
-     function FX(UU) {
-       let {
-         tabs: XU,
-         selected: zU,
-         onSelect: cU
-       } = UU;
-       return (0, RU.jsx)("nav", {
-         className: "GreenvilleBoardTabs",
-         "data-pad-tabs": "1",
-         children: XU.map((UU => {
-           const XU = UU.id === zU;
-           return (0, RU.jsxs)("button", {
-             type: "button",
-             className: pU()("GreenvilleBoardTab", {
-               Selected: XU
- ... (9 more removed lines; see GitHub link above)
+     const YH = {
+         water: GH(!0, ["Condenser"], ["Centrifuge", "Synthesizer", hH.d]),
+         cryo: GH(!1, [hH.d], [])
+       },
+       uH = new Set([...YH.water.roots, ...YH.cryo.roots]),
+       QH = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+         py: [0, 1, 0],
+         pz: [0, 0, 1]
+       },
+       WH = rH.d.map((HH => QH[HH])),
+       MH = WH.map((HH => {
+         let [BH, LH, AH] = HH;
+ ... (3 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L967-L1046` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L510) · [Before (L967-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L967-L1046)

```diff
-       })
-     }
- 
-     function oX(UU) {
-       let {
-         className: XU,
-         roomy: zU = !1,
-         children: cU
-       } = UU;
-       return (0, RU.jsx)("div", {
-         className: pU()("GreenvilleBoardTiles", XU, {
-           Roomy: zU
-         }),
-         style: zU ? {
-           "--tile-columns": (yU = FU.Children.count(cU), yU <= 3 ? yU : Math.min(4, Math.ceil(yU / 2)))
-         } : void 0,
- ... (64 more removed lines; see GitHub link above)
+       }));
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1049-L1062` → after: `L513-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L513-L522) · [Before (L1049-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1049-L1062)

```diff
-       let {
-         level: XU
-       } = UU;
-       const {
-         t: zU
-       } = (0, BU.I)();
-       return (0, RU.jsxs)("span", {
-         className: "GreenvilleBoardBadge Muted",
-         children: [(0, RU.jsx)(TU.d, {
-           name: "lock"
-         }), zU("greenvilleGame:boardLevelBadge", {
-           level: XU
-         })]
-       })
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const LH = AH.g[HH],
+         rH = null === LH || void 0 === LH ? void 0 : LH.meta.rootName,
+         GH = YH[BH];
+       if (!rH || !GH.roots.has(rH)) return null;
+       if ((0, SH.i)(rH)) return (0, hH.K)(LH.name) === BH ? zH : null;
+       if (rH === hH.m) return CH;
+       if (rH === XH) return LH.name.endsWith("|Water") ? EH : null;
+       const [uH, QH] = tH.h[(LH.meta.rot || 1) - 1];
+       return (0, hH.L)(GH.makers.has(rH) ? "maker" : "user", [-uH, 0, -QH])
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1065` → after: `L525-L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L525-L526) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1065)

```diff
-     function NX() {
+     function vH(HH, BH, LH, rH) {
+       let SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1067-L1072` → after: `L528-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L528-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L528-L536) · [Before (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1067-L1072)

```diff
-         t: UU
-       } = (0, BU.I)();
-       return (0, RU.jsx)("span", {
-         className: "GreenvilleBoardBadge",
-         children: UU("greenvilleGame:demolitionDepotPicked")
-       })
+         makers: tH
+       } = YH[SH];
+       return WH.some(((CH, EH) => {
+         var XH, GH;
+         let [YH, uH, QH] = CH;
+         const WH = HH(BH + YH, LH + uH, rH + QH),
+           vH = xH(WH, SH);
+         return null !== vH && tH.has(null !== (XH = null === (GH = AH.g[WH]) || void 0 === GH ? void 0 : GH.meta.rootName) && void 0 !== XH ? XH : "") && !(0, hH.P)(zH, vH, MH[EH])
+       }))
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1076-L1086` → after: `L540-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L540-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L540-L541) · [Before (L1076-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1076-L1086)

```diff
-       let {
-         line: XU,
-         picked: zU,
-         level: cU
-       } = UU;
-       const yU = XU[3];
-       return (0, RU.jsxs)(RU.Fragment, {
-         children: [zU && (0, RU.jsx)(NX, {}), yU > cU && (0, RU.jsx)(YX, {
-           level: yU
-         })]
-       })
+       const BH = AH.g[HH];
+       return BH ? (0, hH.K)(BH.name) : null
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1090-L1127` → after: `L546-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L546-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L546-L553) · [Before (L1090-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1090-L1127)

```diff
-       let {
-         view: XU,
-         controller: zU
-       } = UU;
-       const {
-         t: cU
-       } = (0, BU.I)(), yU = XU.selected, QU = XU.explosives[yU], [AU, FU, oU, DU, EU] = QU, YU = yU === XU.picked, NU = DU > XU.level;
-       return (0, RU.jsxs)(EX, {
-         icon: (0, RU.jsx)(QX, {
-           item: AU
-         }),
-         name: cU(`greenvilleGame:${FU}`),
-         badges: NU && (0, RU.jsx)(YX, {
-           level: DU
-         }),
-         children: [(0, RU.jsx)("p", {
- ... (22 more removed lines; see GitHub link above)
+       if (!TH) {
+         TH = new Map;
+         for (const HH of ["water", "cryo"])
+           for (let BH = 0; BH < 64; BH++)
+             for (const LH of [!1, !0]) TH.set((0, SH.l)(HH, BH, LH), {
+               UY: HH,
+               mask: BH,
+               full: LH
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1129-L1131` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L555-L556) · [Before (L1129-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1129-L1131)

```diff
-           })]
-         })]
-       })
+       }
+       return TH.get(HH)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1134-L1193` → after: `L562-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L562-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L562-L573) · [Before (L1134-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1134-L1193)

```diff
-     function aX(UU) {
-       let {
-         controller: XU
-       } = UU;
-       const zU = (0, kU.j)(jU, XU.getView()),
-         {
-           t: cU
-         } = (0, BU.I)();
-       return 0 === zU.explosives.length ? null : (0, RU.jsxs)(AX, {
-         open: zU.open,
-         onDismiss: XU.dismiss,
-         title: cU("greenvilleGame:demolitionDepotTitle"),
-         className: "GreenvilleDepotBoard",
-         headerExtra: (0, RU.jsx)("span", {
-           className: "GreenvilleBoardLevel",
-           children: cU("greenvilleGame:demolitionDepotLevel", {
- ... (44 more removed lines; see GitHub link above)
+     function OH(HH, BH, LH, rH, SH, hH) {
+       return WH.some(((tH, zH) => {
+         var CH, EH, XH;
+         let [GH, YH, uH] = tH;
+         if (0 === (hH >> zH & 1)) return !1;
+         const QH = null !== (CH = null === (EH = AH.g[HH(BH + GH, LH + YH, rH + uH)]) || void 0 === EH ? void 0 : EH.name) && void 0 !== CH ? CH : "",
+           WH = UH(QH);
+         return WH ? WH.UY === SH && WH.full : (null !== (XH = function(HH) {
+           var BH;
+           return null !== (BH = VH.get(HH)) && void 0 !== BH ? BH : null
+         }(QH)) && void 0 !== XH ? XH : 0) > 0
+       }))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1195-L1225` → after: `L575-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L575-L577) · [Before (L1195-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1195-L1225)

```diff
-     const tX = "greenvilleGarageView",
-       gX = {
-         open: !1,
-         cars: [],
-         out: null,
-         awaiting: !1,
-         selected: null,
-         line: "dealershipGarageIntro"
-       };
-     class kX extends JU {
-       constructor(UU, XU, zU, cU) {
-         super(gX, UU, XU), this.picks = void 0, this.select = UU => {
-           this.set({
-             ...this.getView(),
-             selected: UU
-           })
- ... (15 more removed lines; see GitHub link above)
+     class bH {
+       constructor() {
+         this.reshapeOffsets = WH
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1227-L1246` → after: `L579-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L579-L580) · [Before (L1227-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1227-L1246)

```diff
-       PY(UU) {
-         if ("open" === UU[0]) {
-           var XU;
-           const zU = UU[3];
-           zU && this.picks.takeAnswer();
-           const cU = this.getView();
-           if (zU && !cU.open) return;
-           this.picks.confirm(UU[2]);
-           const yU = UU[1],
-             QU = this.picks.getLatest(),
-             AU = !cU.open;
-           this.show({
-             open: !0,
-             cars: yU,
-             out: QU,
-             awaiting: !this.picks.kY(),
- ... (4 more removed lines; see GitHub link above)
+       handles(HH) {
+         return null !== PH(HH)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1248-L1249` → after: `L582-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L582-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L582-L613) · [Before (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1248-L1249)

```diff
-       dropPresses() {
-         this.picks.clear()
+       affects(HH) {
+         var BH, LH;
+         return uH.has(null !== (BH = null === (LH = AH.g[HH]) || void 0 === LH ? void 0 : LH.meta.rootName) && void 0 !== BH ? BH : "")
+       }
+       placedBy(HH) {
+         var BH;
+         return (null === (BH = AH.g[HH]) || void 0 === BH ? void 0 : BH.meta.rootName) === SH.b ? SH.c : null
+       }
+       shape(HH, BH, LH, rH, tH, CH) {
+         var EH, XH, GH;
+         const YH = null !== (EH = null === (XH = AH.g[tH]) || void 0 === XH ? void 0 : XH.name) && void 0 !== EH ? EH : "",
+           uH = CH || YH !== SH.c ? null !== (GH = (0, hH.K)(YH)) && void 0 !== GH ? GH : "water" : function(HH, BH, LH, AH) {
+             return WH.some(((rH, SH) => {
+               let [tH, CH, EH] = rH;
+               const XH = xH(HH(BH + tH, LH + CH, AH + EH), "cryo");
+               return null !== XH && "port" !== XH.kind && (0, hH.P)(zH, XH, MH[SH])
+ ... (16 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1252-L1294` → after: `L616-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L616-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L616-L641) · [Before (L1252-L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1252-L1294)

```diff
- 
-     function GX() {
-       const {
-         t: UU
-       } = (0, BU.I)();
-       return (0, RU.jsx)("span", {
-         className: "GreenvilleBoardBadge",
-         children: UU("greenvilleGame:dealershipGarageOut")
-       })
-     }
- 
-     function BX(UU) {
-       let {
-         car: XU,
-         out: zU,
-         awaiting: cU,
- ... (27 more removed lines; see GitHub link above)
+   },
+   39058: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => AH,
+       h: () => SH
+     });
+     const AH = ["Chest", "Loot Chest", "Moonstone Chest"],
+       rH = [{
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

#### 64. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L1297-L5651` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/269.js#L644) · [Before (L1297-L5651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/269.js#L1297-L5651)

```diff
-       let {
-         controller: XU
-       } = UU;
-       const zU = (0, kU.j)(tX, XU.getView()),
-         {
-           t: cU
-         } = (0, BU.I)(),
-         yU = 0 === zU.cars.length;
-       return (0, RU.jsxs)(AX, {
-         open: zU.open,
-         onDismiss: XU.dismiss,
-         title: cU("greenvilleGame:dealershipGarageTitle"),
-         className: "GreenvilleGarageBoard",
-         status: {
-           speaker: cU("greenvilleGame:dealershipDelName"),
-           line: cU(yU ? "greenvilleGame:dealershipGarageEmpty" : `greenvilleGame:${zU.line}`)
- ... (4339 more removed lines; see GitHub link above)
+       return rH.find((BH => BH.exactMatch ? HH === BH.name : HH.includes(BH.name)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L4)

```diff
-   40644: (UU, XU, zU) => {
+   39383: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L6` → after: `L6-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L6-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L6-L120) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L6)

```diff
-       b: () => DU
+       d: () => hH
+     });
+     var AH = LH(39385);
+     const rH = [0, 0, 0];
+     class SH {
+       constructor(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH;
+         this.pool = HH, this.origin = BH, this.count = 0, this.free = []
+       }
+       take() {
+         var HH;
+         const BH = null !== (HH = this.free.pop()) && void 0 !== HH ? HH : this.count++;
+         return BH >= this.pool.aX && this.pool.grow(Math.max(2 * this.pool.aX, BH + 1)), this.hide(BH), BH
+       }
+       release(HH) {
+         this.hide(HH), this.free.push(HH)
+ ... (99 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L8-L9` → after: `L122-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L122-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L122-L1449) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L8-L9)

```diff
-     var cU = zU(5139);
-     const yU = ["recordings", "videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"];
+     var AH = LH(45);
+     const rH = [{
+         nameKey: "tierBurner",
+         cost: [],
+         islandRadius: 11.5,
+         machineAllowance: 16,
+         beltAllowance: 64,
+         newDeposits: [],
+         unlocks: [],
+         reward: null
+       }, {
+         nameKey: "tierCurrent",
+         cost: [{
+           item: "Iron Bar",
+           amount: 40
+         }, {
+ ... (1312 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L12-L16` → after: `L1452-L15615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1452-L15615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L1452-L15615) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L12-L16)

```diff
-       return new Promise(((XU, zU) => {
-         UU.onsuccess = () => {
-           XU(UU.result)
-         }, UU.onerror = () => {
-           zU(UU.error)
+       return UL[HH]
+     }
+ 
+     function jL(HH) {
+       var BH;
+       return null !== (BH = TL[HH]) && void 0 !== BH ? BH : TL[1]
+     }
+ 
+     function nL(HH) {
+       const [BH, , LH] = jL(HH);
+       return [LH, 0, -BH]
+     }
+ 
+     function FL(HH, BH, LH, AH, rH, SH) {
+       return {
+         ctrl: [HH[0], HH[1], HH[2]],
+ ... (14148 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L18` → after: `L15617-L15704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15617-L15704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15617-L15704) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L18)

```diff
-       }))
+         this.green.setSources(BH), this.pink.setSources(LH)
+       }
+       onAfterRender(HH) {
+         const BH = performance.now(),
+           LH = 0 === this.lastMs ? 0 : Math.min(BH - this.lastMs, 250) / 1e3;
+         if (this.lastMs = BH, 0 === this.colliders.length || !HH.particlesEnabled()) return;
+         const AH = HH.getCameraPosition();
+         this.green.IX(HH, LH, AH), this.pink.IX(HH, LH, AH)
+       }
+       dispose() {
+         this.green.dispose(), this.pink.dispose(), this.colliders = []
+       }
+     }
+     const cW = 1.04,
+       eW = IW([1, 120 / 255, 220 / 255]),
+       qW = IW([1, .25, .25], .35);
+ ... (72 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L22-L31` → after: `L15708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15708) · [Before (L22-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L22-L31)

```diff
-       return new Promise(((XU, zU) => {
-         UU.oncomplete = () => {
-           XU()
-         }, UU.onerror = () => {
-           zU(UU.error)
-         }, UU.onabort = () => {
-           var XU;
-           zU(null !== (XU = UU.error) && void 0 !== XU ? XU : new Error("IndexedDB transaction aborted"))
-         }
-       }))
+       return BH => HH.isBlockInLoadedChunk(BH[0], BH[1], BH[2]) && 0 === HH.getBlockId(BH[0], BH[1], BH[2])
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L35` → after: `L15712-L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15712-L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15712-L15720) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L35)

```diff
-       return IDBKeyRange.bound([UU], [UU, []])
+       return HH.map((HH => {
+         let {
+           free: BH,
+           blocked: LH,
+           gaps: AH,
+           supports: rH
+         } = HH;
+         return `${BH.join(";")}|${LH.join(";")}|${AH.join(";")}|${rH.join(";")}`
+       })).join("/")
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L38-L39` → after: `L15723-L15732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15723-L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15723-L15732) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L38-L39)

```diff
-     function oU(UU, XU) {
-       return IDBKeyRange.bound([UU, XU], [UU, XU, []])
+     function dW(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .9,
+         rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .05;
+       const SH = BH[0],
+         hH = {
+           positions: [],
+           indices: []
+         };
+       for (const [tH, zH, CH] of BH) DW(hH, tH - SH[0] + .5, zH - SH[1] + .5, CH - SH[2] + .5, AH, rH);
+       return HH.createGameMesh(hH, LH, SH)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L42-L46` → after: `L15735-L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15735-L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15735-L15736) · [Before (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L42-L46)

```diff
-       constructor() {
-         this.db = null, this.opening = null, this.failed = !1, this.tailRecordings = new Set
-       }
-       get working() {
-         return !this.failed
+       constructor(HH) {
+         this.store = HH, this.meshes = [], this.pulses = [], this.shownKey = "", this.lastCheckMs = -1 / 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L48-L52` → after: `L15738-L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15738-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15738-L15748) · [Before (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L48-L52)

```diff
-       static get supported() {
-         try {
-           return "undefined" !== typeof indexedDB
-         } catch {
-           return !1
+       onAfterRender(HH, BH, LH) {
+         var AH;
+         const rH = null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name;
+         if (rH !== zA && rH !== tA) return void("" !== this.shownKey && this.show(HH, "", []));
+         const SH = performance.now();
+         if (SH - this.lastCheckMs >= 200 && (this.lastCheckMs = SH, rH === zA ? this.check(HH, LH) : this.preview(HH, LH)), this.pulses.length > 0) {
+           const BH = 1 + .12 * Math.sin(SH / 1e3 * 1.25 * Math.PI * 2),
+             LH = [BH, BH, BH];
+           for (const AH of this.pulses) HH.setGameMesh(AH, {
+             scale: LH
+           })
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L55-L58` → after: `L15751-L15752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15751-L15752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15751-L15752) · [Before (L55-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L55-L58)

```diff
-       putRecording(UU) {
-         this.write(["recordings"], (XU => {
-           XU.objectStore("recordings").put(UU)
-         }))
+       dispose(HH) {
+         this.clear(HH), this.shownKey = ""
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L60-L67` → after: `L15754-L15764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15754-L15764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15754-L15764) · [Before (L60-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L60-L67)

```diff
-       putVideoSequence(UU, XU, zU) {
-         this.write(["recordings", "videoSequences"], (cU => {
-           cU.objectStore("recordings").put(UU), cU.objectStore("videoSequences").put({
-             recordingId: UU.recordingId,
-             segmentId: XU,
-             sequence: zU
-           })
-         }))
+       check(HH, BH) {
+         const LH = wW(HH),
+           AH = [];
+         for (const {
+             entry: SH
+           }
+           of this.store.colliders()) {
+           SH.focus.every(((HH, LH) => Math.abs(HH + .5 - BH[LH]) <= hA.GHOST_REACH)) && AH.push(wz(SH, LH))
+         }
+         const rH = ZW(AH);
+         rH !== this.shownKey && this.show(HH, rH, AH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L69-L74` → after: `L15766-L15792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15766-L15792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15766-L15792) · [Before (L69-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L69-L74)

```diff
-       appendVideo(UU, XU) {
-         this.write(["videoHeaders", "videoChunks"], (zU => {
-           zU.objectStore("videoHeaders").put(UU);
-           const cU = zU.objectStore("videoChunks");
-           for (const UU of XU) cU.put(UU)
-         }))
+       preview(HH, BH) {
+         const LH = HH.getTargetedBlock(),
+           AH = LH ? [LH.AW[0], LH.AW[1], LH.AW[2]] : null,
+           rH = null !== AH && AH.every(((HH, LH) => Math.abs(HH + .5 - BH[LH]) <= 8)),
+           SH = this.store.site(),
+           hH = rH && SH ? function(HH, BH, LH) {
+             const AH = uA(HH);
+             if (!AH.every(BH)) return null;
+             const rH = vA(HH, LH);
+             return {
+               column: AH,
+               spots: wz({
+                 focus: AH[1],
+                 lasers: [!1, !1, !1, !1],
+                 open: rH,
+                 live: [!1, !1, !1, !1],
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L76-L83` → after: `L15794-L15802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15794-L15802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15794-L15802) · [Before (L76-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L76-L83)

```diff
-       putVideoProgress(UU, XU) {
-         this.write(["videoProgress", "videoChunks"], (zU => {
-           if (zU.objectStore("videoProgress").put(UU), XU > 0) {
-             const {
-               recordingId: cU,
-               segmentId: yU
-             } = UU;
-             zU.objectStore("videoChunks").delete(IDBKeyRange.bound([cU, yU, 0], [cU, yU, XU], !1, !0))
+       show(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
+           rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+         this.clear(HH), this.shownKey = BH, AH.length > 0 && this.meshes.push(dW(HH, AH, IW(rH ? nW : jW)));
+         for (const {
+             free: SH,
+             blocked: hH,
+             gaps: tH,
+             supports: zH
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L85` → after: `L15804-L15815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15804-L15815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15804-L15815) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L85)

```diff
-         }))
+           of LH) {
+           for (const [BH, LH, AH] of SH) {
+             const rH = {
+               positions: [],
+               indices: []
+             };
+             DW(rH, 0, 0, 0);
+             const SH = HH.createGameMesh(rH, IW(NW), [BH + .5, LH + .5, AH + .5]);
+             this.meshes.push(SH), this.pulses.push(SH)
+           }
+           hH.length > 0 && this.meshes.push(dW(HH, hH, IW(RW))), tH.length > 0 && this.meshes.push(dW(HH, tH, IW(jW), 1.06, .07)), zH.length > 0 && this.meshes.push(dW(HH, zH, IW(FW)))
+         }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L87-L90` → after: `L15817-L15819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15817-L15819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15817-L15819) · [Before (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L87-L90)

```diff
-       removeVideoChunks(UU, XU) {
-         this.write(["videoChunks"], (zU => {
-           zU.objectStore("videoChunks").delete(oU(UU, XU))
-         }))
+       clear(HH) {
+         for (const BH of this.meshes) HH.disposeGameMesh(BH);
+         this.meshes = [], this.pulses = []
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L92-L95` → after: `L15821-L15824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15821-L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15821-L15824) · [Before (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L92-L95)

```diff
-       removeVideo(UU, XU) {
-         this.write(["videoHeaders", "videoChunks", "videoSequences", "videoProgress"], (zU => {
-           zU.objectStore("videoHeaders").delete([UU, XU]), zU.objectStore("videoChunks").delete(oU(UU, XU)), zU.objectStore("videoSequences").delete([UU, XU]), zU.objectStore("videoProgress").delete([UU, XU])
-         }))
+     }
+     class sW {
+       constructor() {
+         this.stored = new Map, this.LX = new Map, this.pending = [], this.order = [], this.recents = [], this.seq = 0, this.silos = 0, this.readOnly = !0, this.pocket = !1, this.listeners = new Set, this.version = 0
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L97-L100` → after: `L15826-L15835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15826-L15835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15826-L15835) · [Before (L97-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L97-L100)

```diff
-       putTelemetry(UU) {
-         this.write(["telemetry"], (XU => {
-           XU.objectStore("telemetry").put(UU)
-         }))
+       apply(HH) {
+         if (!HH.baf2TermOpen) return !1;
+         HH.baf2TermReset && (this.stored.clear(), this.pending = []);
+         for (const [BH, LH] of HH.baf2TermItems) LH > 0 ? this.stored.set(BH, LH) : this.stored.delete(BH);
+         if (HH.baf2TermHeld && (this.LX = new Map(HH.baf2TermHeld)), this.pending = this.pending.filter((BH => BH.seq > HH.baf2TermAcked)), this.silos = HH.baf2TermSilos, this.readOnly = HH.baf2TermReadOnly, this.pocket = !0 === HH.baf2TermPocket, HH.baf2TermReset) this.resort();
+         else {
+           const HH = new Set(this.order);
+           for (const BH of this.stored.keys()) HH.has(BH) || this.order.push(BH)
+         }
+         return this.changed(), !0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L102-L105` → after: `L15837-L15838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15837-L15838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15837-L15838) · [Before (L102-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L102-L105)

```diff
-       removeTelemetry(UU, XU) {
-         this.write(["telemetry"], (zU => {
-           zU.objectStore("telemetry").delete([UU, XU])
-         }))
+       resort() {
+         this.order = [...this.stored.keys()].sort(((HH, BH) => this.amount(BH) - this.amount(HH) || HH.localeCompare(BH))), this.changed()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L107-L110` → after: `L15840-L15847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15840-L15847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15840-L15847) · [Before (L107-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L107-L110)

```diff
-       putDom(UU) {
-         this.write(["dom"], (XU => {
-           XU.objectStore("dom").put(UU)
-         }))
+       take(HH, BH) {
+         const LH = tB(HH, this.amount(BH));
+         return this.seq++, this.pending.push({
+           seq: this.seq,
+           item: BH,
+           amount: LH,
+           put: !1
+         }), this.recents = [BH, ...this.recents.filter((HH => HH !== BH))].slice(0, 6), this.changed(), LB(this.seq, HH, BH)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L112-L119` → after: `L15849-L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15849-L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15849-L15855) · [Before (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L112-L119)

```diff
-       queueDom(UU, XU, zU) {
-         this.write(["recordings", "dom", "domTail"], (cU => {
-           cU.objectStore("recordings").put(UU), cU.objectStore("dom").put(XU), cU.objectStore("domTail").delete(oU(XU.recordingId, zU))
-         }), (cU => {
-           console.warn(`Session replay couldn't journal page recording chunk ${XU.sequence}; a closing tab may lose it.`, cU), this.write(["recordings", "domTail"], (cU => {
-             cU.objectStore("recordings").put(UU), cU.objectStore("domTail").delete(oU(XU.recordingId, zU))
-           }))
-         }))
+       put(HH, BH) {
+         return this.seq++, this.pending.push({
+           seq: this.seq,
+           item: BH,
+           amount: tB(HH, this.heldAmount(BH)),
+           put: !0
+         }), this.changed(), AB(this.seq, HH, BH)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L121-L124` → after: `L15857-L15865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15857-L15865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15857-L15865) · [Before (L121-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L121-L124)

```diff
-       putDomTail(UU) {
-         this.tailRecordings.add(UU.recordingId), this.write(["domTail"], (XU => {
-           XU.objectStore("domTail").put(UU)
-         }))
+       putAll() {
+         this.seq++;
+         for (const HH of this.heldItems()) this.pending.push({
+           seq: this.seq,
+           item: HH,
+           amount: this.heldAmount(HH),
+           put: !0
+         });
+         return this.changed(), rB(this.seq)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L126-L129` → after: `L15867-L15871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15867-L15871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15867-L15871) · [Before (L126-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L126-L129)

```diff
-       removeDomTail(UU, XU) {
-         this.write(["domTail"], (zU => {
-           zU.objectStore("domTail").delete(oU(UU, XU))
-         }))
+       amount(HH) {
+         var BH;
+         let LH = null !== (BH = this.stored.get(HH)) && void 0 !== BH ? BH : 0;
+         for (const AH of this.pending) AH.item === HH && (LH += AH.put ? AH.amount : -AH.amount);
+         return Math.max(0, LH)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L131-L134` → after: `L15873-L15877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15873-L15877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15873-L15877) · [Before (L131-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L131-L134)

```diff
-       removeDom(UU, XU) {
-         this.write(["dom"], (zU => {
-           zU.objectStore("dom").delete([UU, XU])
-         }))
+       heldAmount(HH) {
+         var BH;
+         let LH = null !== (BH = this.LX.get(HH)) && void 0 !== BH ? BH : 0;
+         for (const AH of this.pending) AH.put && AH.item === HH && (LH -= AH.amount);
+         return Math.max(0, LH)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L136-L138` → after: `L15879-L15881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15879-L15881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15879-L15881) · [Before (L136-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L136-L138)

```diff
-       async listRecordings() {
-         const UU = await this.open();
-         return await QU(UU.transaction("recordings", "readonly").objectStore("recordings").getAll())
+       heldItems() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         return this.order.filter((BH => BH === HH || this.heldAmount(BH) > 0))
```
