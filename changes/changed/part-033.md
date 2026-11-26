# Changed — Bundle Modifications Report (Part 033 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `33 / 115` (**269** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 26. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L140-L158` → after: `L15883-L15900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15883-L15900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15883-L15900) · [Before (L140-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L140-L158)

```diff
-       async read(UU) {
-         const XU = (await this.open()).transaction(["videoHeaders", "videoChunks", "videoSequences", "videoProgress", "telemetry", "dom", "domTail"], "readonly"),
-           zU = FU(UU.recordingId),
-           cU = UU => QU(XU.objectStore(UU).getAll(zU)),
-           [yU, AU, oU, DU, EU, YU, NU] = await Promise.all([cU("videoHeaders"), cU("videoChunks"), cU("videoSequences"), cU("videoProgress"), cU("telemetry"), cU("dom"), cU("domTail")]);
-         return {
-           recording: UU,
-           telemetry: EU,
-           dom: YU,
-           domTails: NU,
-           video: yU.map((UU => {
-             var XU, zU, cU;
-             return {
-               header: UU,
-               sequence: null !== (XU = null === (zU = oU.find((XU => XU.segmentId === UU.segmentId))) || void 0 === zU ? void 0 : zU.sequence) && void 0 !== XU ? XU : null,
-               progress: null !== (cU = DU.find((XU => XU.segmentId === UU.segmentId))) && void 0 !== cU ? cU : null,
- ... (3 more removed lines; see GitHub link above)
+       items() {
+         return this.order.filter((HH => this.amount(HH) > 0))
+       }
+       recent() {
+         return this.recents.filter((HH => this.amount(HH) > 0))
+       }
+       siloCount() {
+         return this.silos
+       }
+       isReadOnly() {
+         return this.readOnly
+       }
+       isPocket() {
+         return this.pocket
+       }
+       subscribe(HH) {
+ ... (2 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L161-L165` → after: `L15903-L15905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15903-L15905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15903-L15905) · [Before (L161-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L161-L165)

```diff
-       async deleteRecording(UU) {
-         const XU = (await this.open()).transaction([...yU], "readwrite");
-         XU.objectStore("recordings").delete(UU);
-         for (const zU of yU.slice(1)) XU.objectStore(zU).delete(FU(UU));
-         await AU(XU)
+       changed() {
+         this.version++;
+         for (const HH of this.listeners) HH()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L167-L190` → after: `L15907-L15964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15907-L15964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15907-L15964) · [Before (L167-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L167-L190)

```diff
-       async forgetSent(UU, XU) {
-         const zU = (await this.open()).transaction([...yU], "readwrite"),
-           {
-             recordingId: cU
-           } = UU;
-         zU.objectStore("recordings").put(UU);
-         for (const yU of XU.videoSegmentIds) zU.objectStore("videoHeaders").delete([cU, yU]), zU.objectStore("videoChunks").delete(oU(cU, yU)), zU.objectStore("videoSequences").delete([cU, yU]), zU.objectStore("videoProgress").delete([cU, yU]);
-         for (const yU of XU.telemetrySequences) zU.objectStore("telemetry").delete([cU, yU]);
-         for (const yU of XU.domSequences) zU.objectStore("dom").delete([cU, yU]);
-         for (const yU of XU.domTailChunks) zU.objectStore("domTail").delete(oU(cU, yU));
-         await AU(zU)
-       }
-       write(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU => {
-           this.fail(UU)
-         };
- ... (8 more removed lines; see GitHub link above)
+     }
+     var JW = LH(39288);
+     const iW = {
+       isBlock: HH => void 0 !== fH.g[HH],
+       harvestType: HH => {
+         var BH;
+         return null === (BH = fH.g[HH]) || void 0 === BH ? void 0 : BH.harvestType
+       },
+       harvestLevel: HH => {
+         var BH;
+         return null === (BH = fH.g[HH]) || void 0 === BH ? void 0 : BH.harvestLevel
+       },
+       dropsNothing: HH => {
+         var BH;
+         return null === (null === (BH = fH.g[HH]) || void 0 === BH ? void 0 : BH.drops)
+       },
+ ... (42 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L192-L195` → after: `L15966-L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R15966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L15966-L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L15966-L16124) · [Before (L192-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L192-L195)

```diff
-         };
-         null === this.db ? this.open().then(cU, (UU => {
-           this.fail(UU)
-         })) : cU(this.db)
+         }, cH.K.whiteUiText), (0, cH.fe)({
+           translationKey: `item:${(0,cH.Fe)(BH)}`
+         }, cH.K.yellowUiText)]
+       }(iW, HH, BH)
+     }
+     const HM = "buildAFactory2Game:";
+     const BM = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 1, 0],
+       [0, -1, 0],
+       [0, 0, 1],
+       [0, 0, -1]
+     ];
+ 
+     function LM(HH) {
+ ... (143 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L197-L198` → after: `L16126-L16127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16126-L16127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16126-L16127) · [Before (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L197-L198)

```diff
-       fail(UU) {
-         this.failed || (this.failed = !0, console.warn("Session replay can't keep its upload journal; what a closing tab leaves unsent will be lost.", UU), this.dropTails())
+       get() {
+         return this.snapshot
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L200-L210` → after: `L16129-L16131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16129-L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16129-L16131) · [Before (L200-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L200-L210)

```diff
-       dropTails() {
-         if (null === this.db || 0 === this.tailRecordings.size) return;
-         const UU = UU => {
-           console.warn("Session replay couldn't drop its page recording tails from its upload journal.", UU)
-         };
-         try {
-           const XU = this.db.transaction(["domTail"], "readwrite");
-           for (const UU of this.tailRecordings) XU.objectStore("domTail").delete(FU(UU));
-           AU(XU).catch(UU)
-         } catch (XU) {
-           UU(XU)
+       subscribe(HH) {
+         return this.listeners.add(HH), () => {
+           this.listeners.delete(HH)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L213-L245` → after: `L16134-L16144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16134-L16144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16134-L16144) · [Before (L213-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L213-L245)

```diff
-       open() {
-         return this.opening ??= new Promise(((UU, XU) => {
-           const zU = indexedDB.open(cU.i, 4);
-           zU.onupgradeneeded = UU => {
-             const XU = zU.result;
-             UU.oldVersion < 1 && (XU.createObjectStore("recordings", {
-               keyPath: "recordingId"
-             }), XU.createObjectStore("videoHeaders", {
-               keyPath: ["recordingId", "segmentId"]
-             }), XU.createObjectStore("videoChunks", {
-               keyPath: ["recordingId", "segmentId", "index"]
-             }), XU.createObjectStore("videoSequences", {
-               keyPath: ["recordingId", "segmentId"]
-             }), XU.createObjectStore("telemetry", {
-               keyPath: ["recordingId", "sequence"]
-             })), UU.oldVersion < 2 && XU.createObjectStore("videoProgress", {
- ... (17 more removed lines; see GitHub link above)
+       dispose() {
+         this.listeners.clear(), this.byRootId.clear(), this.besideMakerById.clear(), this.missesMaker = !1, this.afloatByRoot.clear(), this.afloat = !1, this.afloatKey = "", this.afloatAt = -1 / 0, this.rowsByKey.clear(), this.snapshot = SM, this.ph = 0, this.LX = null, this.expr … [truncated]
+       }
+       readAfloat(HH, BH, LH) {
+         if (null === LH || 0 === BH || !tH() || !LM(this.resolve(HH, BH).rootName)) return !1;
+         const AH = `${LH[0]},${LH[1]},${LH[2]},${BH}`,
+           rH = performance.now();
+         return AH === this.afloatKey && rH - this.afloatAt < EM ? this.afloat : (this.afloatKey = AH, this.afloatAt = rH, function(HH, BH) {
+           for (const [LH, AH, rH] of BM) {
+             const SH = BH(HH[0] + LH, HH[1] + AH, HH[2] + rH);
+             if (void 0 === SH || null !== SH && !LM(SH)) return !1
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L247` → after: `L16146-L16247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16146-L16247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16146-L16247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L247)

```diff
-         })), this.opening
+           return !0
+         }(LH, ((BH, LH, AH) => function(HH, BH, LH, AH) {
+           if (!HH.isBlockInLoadedChunk(BH, LH, AH)) return;
+           const rH = HH.getBlockId(BH, LH, AH);
+           return 0 === rH ? null : HH.getMetaInfo(rH).rootName
+         }(HH, BH, LH, AH))))
+       }
+       liveMoved(HH) {
+         var BH;
+         const {
+           livePos: LH
+         } = this;
+         return null === HH || HH[0] !== LH[0] || HH[1] !== LH[1] || HH[2] !== LH[2] || (null === (BH = this.live) || void 0 === BH ? void 0 : BH.version()) !== this.liveVersion
+       }
+       updatePlan(HH) {
+         const BH = null === HH ? "" : HH.join(","),
+ ... (86 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L250-L258` → after: `L16250-L16343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16250-L16343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16250-L16343) · [Before (L250-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L250-L258)

```diff
-   },
-   40586: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => oU,
-       d: () => QU,
-       h: () => FU
-     });
-     var cU = zU(40578);
-     const yU = new TextEncoder;
+     const EM = 500;
+     const XM = (0, AH.memo)((function(HH) {
+       var BH, LH;
+       let {
+         store: rH
+       } = HH;
+       const {
+         t: SH
+       } = (0, Or.B)(), [hH, tH] = (0, AH.useState)((() => rH.get()));
+       (0, AH.useEffect)((() => (tH(rH.get()), rH.subscribe((() => {
+         tH(rH.get())
+       })))), [rH]);
+       const {
+         openInGameMenuName: zH,
+         openEverythingMenuName: CH,
+         isTouchScreen: EH
+ ... (78 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L261-L263` → after: `L16346-L16368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16346-L16368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16346-L16368) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L261-L263)

```diff
-       return new Blob([yU.encode(`${JSON.stringify(UU)}\n`), XU], {
-         type: "text/plain"
-       })
+       return [Math.floor(HH[0] / BH), Math.floor(HH[1] / BH), Math.floor(HH[2] / BH)]
+     }
+ 
+     function MM(HH, BH, LH) {
+       return `${HH},${BH},${LH}`
+     }
+ 
+     function xM(HH) {
+       const BH = HH.split("|")[0];
+       if (!CL(BH)) return YM;
+       const LH = cB[BH];
+       if (BL(LH)) return uM;
+       const AH = WW(HH);
+       return LL(LH) ? [
+         [-AH[0], -AH[1], -AH[2]]
+       ] : Tr(LH) ? function(HH, BH) {
+ ... (7 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L266-L292` → after: `L16374-L16559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16374-L16559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16374-L16559) · [Before (L266-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L266-L292)

```diff
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
-         this.token = UU, this.relay = XU, this.nowMs = zU, this.refused = !1, this.skipUntilMs = 0
-       }
-       async send(UU, XU, zU, yU, AU) {
-         if (this.goesDirect(XU, zU)) return null;
-         const FU = QU({
-             token: this.token,
-             contentType: zU,
-             target: UU
-           }, XU),
-           oU = {
-             method: "POST",
-             headers: {
-               "Content-Type": "text/plain"
-             },
- ... (11 more removed lines; see GitHub link above)
+       constructor() {
+         this.offsetsIndexById = new Uint8Array(65536), this.indexed = !1, this.offsetsList = [], this.hits = [], this.chunks = new Map, this.cellChunks = new Map, this.lastCheckMs = -1 / 0, this.checks = 0, this.scanFrom = 0, this.shownKey = "", this.meshes = []
+       }
+       index(HH) {
+         this.indexed = !0;
+         for (const BH of mB)
+           for (const LH of QM(BH)) {
+             const BH = HH.blockNameToBlockId(LH, !0),
+               AH = xM(LH);
+             null !== BH && AH.length > 0 && (this.offsetsList.push(AH), this.offsetsIndexById[BH] = this.offsetsList.length)
+           }
+       }
+       onAfterRender(HH, BH) {
+         this.indexed || this.index(HH);
+         const LH = performance.now();
+         if (LH - this.lastCheckMs < 100) return;
+ ... (170 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L294` → after: `L16561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16561) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L294)

```diff
-         return "refused" === DU.outcome ? (console.info(`Session replay's part joiner refused to relay (${DU.reason}); uploading straight to storage.`), this.refused = !0, null) : DU.status
+         this.draw(HH, EH, BH.bladeStruck)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L296-L303` → after: `L16563-L16565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16563-L16565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16563-L16565) · [Before (L296-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L296-L303)

```diff
-       beacon(UU, XU, zU, cU) {
-         if (this.goesDirect(XU, zU)) return null;
-         const yU = QU({
-           token: this.token,
-           contentType: zU,
-           target: UU
-         }, XU);
-         return cU.sendUploadBeacon(this.relay.url, yU, yU.size)
+       dispose() {
+         var HH;
+         null === (HH = this.particles) || void 0 === HH || HH.stop(), this.particles = null
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L305-L306` → after: `L16567-L16630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16567-L16630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16567-L16630) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L305-L306)

```diff
-       goesDirect(UU, XU) {
-         return this.refused || this.nowMs() < this.skipUntilMs || UU.byteLength > this.relay.maxBytes || "video/mp4" === XU
+       draw(HH, BH, LH) {
+         if (!HH.particlesEnabled() || BH.length < 2) return;
+         const AH = performance.now();
+         this.budget = Math.min(OM, this.budget + (AH - this.lastMs) / 1e3 * OM), this.lastMs = AH;
+         const rH = [];
+         let SH = 0,
+           hH = BH[0];
+         for (const MH of BH.slice(1)) {
+           const HH = Math.min(48, Math.round(Math.hypot(MH[0] - hH[0], MH[1] - hH[1], MH[2] - hH[2]) * this.style.perBlock));
+           rH.push([hH, MH, HH]), SH += HH, hH = MH
+         }
+         const tH = LH.length;
+         SH += 10 * tH;
+         const zH = SH > this.budget ? this.budget / SH : 1;
+         if (0 === SH || zH * SH < 1) return;
+         const CH = BH[0],
+ ... (48 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L310-L311` → after: `L16635-L16673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16635-L16673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16635-L16673) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L310-L311)

```diff
-     function FU(UU) {
-       return void 0 === (null === UU || void 0 === UU ? void 0 : UU.relay) ? null : new AU(UU.token, UU.relay)
+     function fM(HH, BH, LH) {
+       const AH = HH.split("|")[0];
+       return "Air" !== BH || LH || ! function(HH) {
+         const BH = HH.split("|")[0];
+         return void 0 !== hL[BH] || IM.has(BH)
+       }(AH) ? null : HH
+     }
+     class lM {
+       constructor() {
+         this.lastTapAt = -1 / 0
+       }
+       isNewPress(HH) {
+         const BH = HH - this.lastTapAt >= 300;
+         return this.lastTapAt = HH, BH
+       }
+     }
+ ... (23 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L315` → after: `L16702-L16705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16702-L16705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16702-L16705) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L315)

```diff
-         this.relays = new Map
+         this.flames = new Map, this.lit = new Set, this.hold = new cM, this.pos = [0, 0, 0], this.camera = [0, 0, 0], this.at = [0, 0, 0]
+       }
+       lT(HH, BH) {
+         for (const [LH, AH] of BH.baf2JetFlames) HH.isLocalPlayer(LH) || (AH ? this.lit.add(LH) : this.lit.delete(LH))
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L317-L319` → after: `L16707-L16755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16707-L16755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16707-L16755) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L317-L319)

```diff
-       for (UU) {
-         let XU = this.relays.get(UU.recordingId);
-         return void 0 === XU && (XU = FU(UU.partJoiner), this.relays.set(UU.recordingId, XU)), XU
+       onAfterRender(HH, BH) {
+         const LH = performance.now(),
+           AH = this.hold.lit(this.selfThrusting(HH, BH), LH);
+         for (const [rH, SH] of this.flames)(rH === BH ? AH : this.lit.has(rH)) || this.setEmitting(SH, !1), rH === BH || HH.getPositionView(rH) ? !SH.emitting && LH - SH.offAt >= 1300 && (SH.particles.stop(), this.flames.delete(rH)) : (SH.particles.dispose(), this.flames.delete(r … [truncated]
+         AH && this.draw(HH, BH, BH);
+         for (const rH of this.lit) this.draw(HH, BH, rH)
+       }
+       dispose() {
+         for (const HH of this.flames.values()) HH.particles.dispose();
+         this.flames.clear(), this.lit.clear()
+       }
+       selfThrusting(HH, BH) {
+         var LH;
+         const AH = HH.getLocalPlayerMovement();
+         return !!AH && (null !== (rH = {
+           option: null !== (LH = HH.getClientOption(BH, "jumpHoldThrust")) && void 0 !== LH ? LH : null,
+ ... (33 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L335-L351` → after: `L16760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16760) · [Before (L335-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L335-L351)

```diff
-       return 6e4 + Math.ceil(UU / 16384 * 1e3)
-     }
- 
-     function oU(UU, XU, zU) {
-       const yU = new FormData;
-       let QU = XU.byteLength + AU;
-       for (const [AU, FU] of Object.entries(UU.fields)) yU.append(AU, FU), QU += (0, cU.e)(AU) + (0, cU.e)(FU);
-       return yU.append("file", new Blob([XU], {
-         type: zU
-       })), {
-         form: yU,
-         byteLength: QU
-       }
-     }
- 
-     function DU(UU, XU, zU) {
- ... (1 more removed lines; see GitHub link above)
+       return "Reactor Frame" === AA("reactor", HH)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L355` → after: `L16764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16764) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L355)

```diff
-       if (UU < 200 || UU > 299) throw DU("POST", UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
+       return NL("reactor", HH) && !NM(HH) && (HH.startsWith("Reactor Glass") || HH.startsWith("Reactor Port"))
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L357-L368` → after: `L16766-L16807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16766-L16807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16766-L16807) · [Before (L357-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L357-L368)

```diff
- 
-     function YU(UU, XU) {
-       if ((UU < 200 || UU > 299) && (!XU || 412 !== UU)) throw DU("PUT", UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
-     }
-     async function NU(UU) {
-       var XU, zU;
-       if (UU.ok) return null;
-       let cU;
-       try {
-         cU = await UU.text()
-       } catch (yU) {
-         return console.warn("Session replay couldn't read storage's error answer", yU), null
+     const jM = "baf2Goal";
+     class nM {
+       constructor() {
+         this.goal = null, this.open = null, this.checkedAt = -1 / 0, this.subs = [fr.k.subscribe("setDirectionArrow", (HH => {
+           let {
+             id: BH,
+             position: LH
+           } = HH;
+           BH === jM && (this.goal = LH, this.checkedAt = -1 / 0)
+         })), fr.k.subscribe("clearDirectionArrow", (HH => {
+           let {
+             id: BH
+           } = HH;
+           null !== BH && BH !== jM || (this.goal = null, this.open = null)
+         }))]
+       }
+ ... (26 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L373` → after: `L16811-L16822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16811-L16822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16811-L16822) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L373)

```diff
-       constructor(UU) {
+       constructor() {
+         this.arrows = document.getElementsByClassName("DirectionArrow"), this.trackers = document.getElementsByClassName("Baf2QuestTracker"), this.statBars = document.getElementsByClassName("BottomScreenStatBarList"), this.toasts = document.getElementsByClassName("Baf2Toast"), th … [truncated]
+           this.boxStale = !0
+         }, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, this.Av = () => {
+           this.boxStale = !0, this.barsStale = !0, this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight
+         }, this.sizes = new ResizeObserver((HH => {
+           for (const BH of HH) BH.target === this.tracker ? this.boxStale = !0 : this.halfWidths.set(BH.target, BH.borderBoxSize[0].inlineSize / 2)
+         })), this.hudStyle = new MutationObserver(this.onChange), this.run = () => {
+           this.queued = !1, this.Mu || this.clear()
+         }, window.addEventListener("resize", this.Av)
+       }
+       onAfterRender(HH, BH) {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L375-L376` → after: `L16824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16824) · [Before (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L375-L376)

```diff
-         let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         this.segmentUploadUrl = UU, this.deadline = void 0, this.relay = void 0, this.deadline = zU.deadline, this.relay = null !== (XU = zU.relay) && void 0 !== XU ? XU : null
+         this.api = HH, this.project = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.projectWorldPosToScreenPos) && void 0 !== LH ? LH : null, this.queued || this.Mu || (this.queued = !0, queueMicrotask(this.run))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L378-L379` → after: `L16826-L16831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16826-L16831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16826-L16831) · [Before (L378-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L378-L379)

```diff
-       requestPutUrl(UU) {
-         return this.presign(UU)
+       dispose() {
+         this.Mu = !0;
+         for (const HH of this.moved.keys()) HH.style.transform = "";
+         this.moved.clear();
+         for (const HH of this.sideLabels.keys()) HH.style.transform = "";
+         this.sideLabels.clear(), this.side.dispose(), this.watch(null), this.sizes.disconnect(), window.removeEventListener("resize", this.Av)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L381-L382` → after: `L16833-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16833-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16833-L16854) · [Before (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L381-L382)

```diff
-       requestPostTargets(UU) {
-         return this.presign(UU)
+       clear() {
+         for (const SH of this.moved.keys()) SH.isConnected || this.moved.delete(SH);
+         for (const SH of this.sideLabels.keys()) SH.isConnected || this.sideLabels.delete(SH);
+         if (0 === this.arrows.length) return;
+         const HH = performance.now(),
+           BH = HH - this.refreshedAt > 1e3;
+         BH && (this.refreshedAt = HH, this.boxStale = !0, this.barsStale = !0, this.forgetGoneLabels());
+         const LH = this.trackerBox(),
+           AH = this.barsBox(),
+           rH = this.toastBox(BH);
+         (LH || AH || rH) && BH && (this.em = parseFloat(getComputedStyle(this.arrows[0]).fontSize) || this.em);
+         for (let SH = 0; SH < this.arrows.length; SH++) {
+           const BH = this.arrows[SH];
+           this.labelOffsets.set(BH, this.runLabelAside(BH, HH));
+           const hH = (LH ? this.shiftLeftOf(BH, LH) : 0) || this.shiftOnScreen(BH),
+             tH = Math.min(AH ? this.liftAbove(BH, AH, hH) : 0, rH ? this.liftAbove(BH, rH, hH) : 0),
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L384-L423` → after: `L16856-L16928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16856-L16928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16856-L16928) · [Before (L384-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L384-L423)

```diff
-       async presign(UU) {
-         const XU = await fetch(this.segmentUploadUrl, {
-           method: "POST",
-           headers: {
-             "Content-Type": "application/json"
-           },
-           body: JSON.stringify(UU),
-           signal: this.signal(6e4)
-         });
-         if (!XU.ok) throw new QU.b(`Segment presign failed with ${XU.status}`, XU.status);
-         return await XU.json()
-       }
-       async put(UU, XU, zU, yU) {
-         const QU = await this.sendThroughRelay({
-           method: "PUT",
-           url: UU,
- ... (24 more removed lines; see GitHub link above)
+       trackerBox() {
+         var HH, BH;
+         const LH = null !== (HH = this.tracker) && void 0 !== HH && HH.isConnected ? this.tracker : null !== (BH = this.trackers[0]) && void 0 !== BH ? BH : null;
+         if (LH !== this.tracker && this.watch(LH), this.boxStale && LH) {
+           var AH, rH, SH;
+           this.boxStale = !1;
+           const HH = LH.closest(".NoRoom") ? null : LH.getBoundingClientRect(),
+             BH = HH && HH.width > 0 ? null === (AH = this.hud) || void 0 === AH ? void 0 : AH.getBoundingClientRect() : void 0,
+             hH = HH && BH ? Math.max(HH.top, BH.top) : null !== (rH = null === HH || void 0 === HH ? void 0 : HH.top) && void 0 !== rH ? rH : 0,
+             tH = HH && BH ? Math.min(HH.bottom, BH.bottom) : null !== (SH = null === HH || void 0 === HH ? void 0 : HH.bottom) && void 0 !== SH ? SH : 0;
+           this.box = HH && HH.width > 0 && tH > hH ? {
+             left: HH.left,
+             top: hH,
+             right: HH.right,
+             bottom: tH
+           } : null
+ ... (57 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L425-L432` → after: `L16930-L16935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16930-L16935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16930-L16935) · [Before (L425-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L425-L432)

```diff
-           form: QU,
-           byteLength: AU
-         } = oU(UU, XU, zU), DU = {
-           method: "POST",
-           body: QU,
-           signal: this.signal(FU(AU))
-         }, YU = AU <= cU.c ? await cU.d.fetch(UU.url, DU, AU, zU) : await fetch(UU.url, DU);
-         EU(YU.status, await NU(YU))
+           y: rH
+         } = AH, SH = AH.x + (null !== (LH = this.labelOffsets.get(HH)) && void 0 !== LH ? LH : 0), hH = this.em, {
+           halfWidth: tH,
+           labelled: zH
+         } = this.extentOf(HH), CH = rH - hH, EH = SH + tH;
+         return rH + hH * (zH ? 6.2 : 3) < BH.top || CH > BH.bottom || EH < BH.left - 6 || SH - tH > BH.right ? 0 : Math.max(BH.left - 6 - EH, 6 - (SH - tH))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L434-L435` → after: `L16937-L16944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16937-L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16937-L16944) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L434-L435)

```diff
-       async sendThroughRelay(UU, XU, zU) {
-         return null === this.relay ? null : await this.relay.send(UU, XU, zU, this.signal(FU(XU.byteLength)), this.deadline)
+       shiftOnScreen(HH) {
+         var BH;
+         const LH = this.anchorOf(HH);
+         if (!LH) return 0;
+         const {
+           halfWidth: AH
+         } = this.extentOf(HH), rH = LH.x + (null !== (BH = this.labelOffsets.get(HH)) && void 0 !== BH ? BH : 0), SH = rH + AH - (this.innerWidth - 6);
+         return SH > 0 ? -SH : Math.max(0, 6 - (rH - AH))
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L437-L439` → after: `L16946-L16956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16946-L16956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16946-L16956) · [Before (L437-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L437-L439)

```diff
-       signal(UU) {
-         const XU = (0, yU.n)(UU);
-         return void 0 === this.deadline ? XU : (0, yU.i)([this.deadline, XU])
+       runLabelAside(HH, BH) {
+         var LH;
+         let AH = null;
+         for (let hH = 0; hH < HH.children.length; hH++) HH.children[hH].classList.contains("DirectionArrowLabel") && (AH = HH.children[hH]);
+         if (!AH) return 0;
+         const rH = HH.classList.contains("DirectionArrowOnScreen") && this.project ? this.anchorOf(HH) : null,
+           SH = (rH && this.api ? this.side.sideOf(this.api, {
+             x: rH.x / this.innerWidth * 100,
+             y: rH.y / this.innerHeight * 100
+           }, BH, this.project) : 0) * this.halfWidthOf(AH);
+         return SH !== (null !== (LH = this.sideLabels.get(AH)) && void 0 !== LH ? LH : 0) && (AH.style.transform = 0 === SH ? "" : `translateX(-50%) translateX(${SH}px)`, 0 === SH ? this.sideLabels.delete(AH) : this.sideLabels.set(AH, SH)), SH
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L441-L446` → after: `L16958-L16964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16958-L16964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16958-L16964) · [Before (L441-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L441-L446)

```diff
-     }
-     class pU {
-       async requestPutUrl(UU) {
-         return {
-           uploadUrl: "",
-           ifNoneMatch: !1
+       extentOf(HH) {
+         let BH = this.em,
+           LH = !1;
+         for (let AH = 0; AH < HH.children.length; AH++) {
+           const rH = HH.children[AH],
+             SH = rH.classList.contains("DirectionArrowLabel");
+           LH ||= SH, (SH || rH.classList.contains("DirectionArrowDistance")) && (BH = Math.max(BH, this.halfWidthOf(rH)))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L451-L457` → after: `L16967-L16968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16967-L16968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16967-L16968) · [Before (L451-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L451-L457)

```diff
-           targets: Array.from({
-             length: UU.parts.count
-           }, (() => ({
-             url: "",
-             fields: {}
-           }))),
-           expiresInSecs: 900
+           halfWidth: BH,
+           labelled: LH
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L460-L461` → after: `L16971-L16976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16971-L16976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16971-L16976) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L460-L461)

```diff
-       put() {
-         return Promise.resolve()
+       halfWidthOf(HH) {
+         let BH = this.halfWidths.get(HH);
+         return void 0 === BH && (BH = HH.offsetWidth / 2, this.halfWidths.set(HH, BH), this.sizes.observe(HH), this.labels.add(HH)), BH
+       }
+       forgetGoneLabels() {
+         for (const HH of this.labels) HH.isConnected || (this.sizes.unobserve(HH), this.halfWidths.delete(HH), this.labels.delete(HH))
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L463-L464` → after: `L16978-L16991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16978-L16991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16978-L16991) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L463-L464)

```diff
-       post() {
-         return Promise.resolve()
+       anchorOf(HH) {
+         const BH = HH.style.translate,
+           LH = this.anchors.get(HH);
+         if (LH && LH.translate === BH && LH.innerWidth === this.innerWidth && LH.innerHeight === this.innerHeight) return LH;
+         const AH = /^(-?[\d.]+)vw (-?[\d.]+)vh$/.exec(BH);
+         if (!AH) return null;
+         const rH = {
+           translate: BH,
+           x: parseFloat(AH[1]) / 100 * this.innerWidth,
+           y: parseFloat(AH[2]) / 100 * this.innerHeight,
+           innerWidth: this.innerWidth,
+           innerHeight: this.innerHeight
+         };
+         return this.anchors.set(HH, rH), rH
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L467-L473` → after: `L16994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16994) · [Before (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L467-L473)

```diff
-   },
-   40569: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => AU
-     });
-     var cU = zU(36961),
-       yU = zU.n(cU);
+     const DM = "Baf2ArrowText";
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L475-L476` → after: `L16996-L16998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R16996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L16996-L16998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L16996-L16998) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L475-L476)

```diff
-     function QU() {
-       return yU()('(()=>{var UU={10:(UU,XU,zU)=>{function cU(){return"object"===typeof process&&"object"===typeof process.versions&&"undefined"!==typeof process.versions.node}function yU(UU){return UU instanceof Uint8Array&&(!cU()||!Buffer.isBuffer(UU))}function QU(UU){return UU  … [truncated]
+     function wM(HH, BH) {
+       const LH = HH.rows.find((HH => HH.current));
+       return KH(HH.tutorial) && null !== LH && void 0 !== LH && LH.item && nr(LH) && oH(LH.item).includes(BH) ? LH.item : null
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L478-L501` → after: `L17000-L17002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17000-L17002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17000-L17002) · [Before (L478-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L478-L501)

```diff
-     class AU {
-       constructor() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
-         this.quietMs = UU, this.worker = null, this.failure = null, this.nextId = 0, this.waiting = new Map, this.watchdog = null, this.rearmed = !1
-       }
-       pack(UU) {
-         return new Promise(((XU, zU) => {
-           var cU;
-           const yU = null !== (cU = this.worker) && void 0 !== cU ? cU : this.start();
-           if (null === yU) return void zU(this.failure);
-           const QU = this.nextId++;
-           this.waiting.set(QU, {
-             resolve: XU,
-             reject: zU
-           });
-           const AU = {
- ... (8 more removed lines; see GitHub link above)
+     const ZM = new class {
+       constructor(HH) {
+         this.select = HH, this.picks = new Map
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L503-L504` → after: `L17004-L17006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17004-L17006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17004-L17006) · [Before (L503-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L503-L504)

```diff
-       close() {
-         this.fail(new Error("page recording packer closed"))
+       open(HH, BH, LH) {
+         const AH = wM(BH, HH);
+         null !== AH && this.XY(HH, AH, LH)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L506-L534` → after: `L17008-L17016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17008-L17016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17008-L17016) · [Before (L506-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L506-L534)

```diff
-       start() {
-         if (null !== this.failure) return null;
-         try {
-           this.worker = new QU
-         } catch (UU) {
-           return this.broke(`didn't start: ${String(UU)}`), null
-         }
-         return this.worker.onmessage = UU => {
-           const {
-             id: XU,
-             bytes: zU,
-             inflatedBytes: cU
-           } = UU.data, yU = this.waiting.get(XU);
-           this.waiting.delete(XU), this.stopWatchdog(), this.waiting.size > 0 && (this.watchdog = this.startWatchdog()), null === yU || void 0 === yU || yU.resolve({
-             bytes: zU,
-             inflatedBytes: cU
- ... (13 more removed lines; see GitHub link above)
+       follow(HH, BH) {
+         if (tH())
+           for (const [LH, {
+               item: AH,
+               had: rH
+             }] of this.picks) {
+             const SH = wM(HH, LH);
+             SH !== AH && (null !== SH && BH(AH) > rH ? this.XY(LH, SH, BH) : this.picks.delete(LH))
+           } else this.picks.clear()
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L536-L537` → after: `L17018-L17019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17018-L17019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17018-L17019) · [Before (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L536-L537)

```diff
-       stopWatchdog() {
-         this.rearmed = !1, null !== this.watchdog && (clearTimeout(this.watchdog), this.watchdog = null)
+       clear() {
+         this.picks.clear()
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L539-L540` → after: `L17021-L17025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17021-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17021-L17025) · [Before (L539-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L539-L540)

```diff
-       broke(UU) {
-         console.warn(`Session replay: page recording worker failed, packing on the main thread: ${UU}`), this.fail(new Error(`page recording worker failed: ${UU}`))
+       XY(HH, BH, LH) {
+         this.picks.set(HH, {
+           item: BH,
+           had: LH(BH)
+         }), this.select(HH, BH)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L542-L549` → after: `L17027-L17033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17027-L17033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17027-L17033) · [Before (L542-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L542-L549)

```diff
-       fail(UU) {
-         var XU;
-         this.failure ??= UU, this.stopWatchdog(), null === (XU = this.worker) || void 0 === XU || XU.terminate(), this.worker = null;
-         for (const {
-             reject: zU
-           }
-           of this.waiting.values()) zU(UU);
-         this.waiting.clear()
+     }(lr.m);
+ 
+     function dM(HH) {
+       return BH => {
+         let LH = 0;
+         for (const AH of HH.getInventoryItems())(null === AH || void 0 === AH ? void 0 : AH.name) === BH && (LH += null === AH.amount ? 1 : Math.max(AH.amount, 0));
+         return LH
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L552-L557` → after: `L17036-L17041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17036-L17041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17036-L17041) · [Before (L552-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L552-L557)

```diff
-   },
-   40543: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => yU
-     });
-     var cU = zU(40549);
+ 
+     function aM(HH, BH, LH, AH) {
+       HH.getClientOption(BH, "canCraft") && "inventory" !== Mr.c.get("openInGameMenuName") && (ZM.open(LH, AH.get(), dM(HH)), fr.k.AX("toggleMenu", `inventory|${LH}`))
+     }
+     let sM = null,
+       JM = !1;
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L560-L564` → after: `L17044-L17056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17044-L17056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17044-L17056) · [Before (L560-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L560-L564)

```diff
-       const XU = (new TextEncoder).encode(UU);
-       return {
-         bytes: (0, cU.e)(XU),
-         inflatedBytes: XU.byteLength
-       }
+       const BH = xS();
+       HH === sM && BH === JM || (sM = HH, JM = BH, (0, lr.n)(function(HH, BH) {
+         const LH = new Map;
+         for (let AH = HH + 1; AH <= rH.length; AH++) {
+           const rH = RS(AH, HH, BH);
+           if (rH)
+             for (const BH of MH(AH).unlocks) LH.set(BH, {
+               ...rH,
+               stepsAway: AH - HH
+             })
+         }
+         return LH
+       }(HH, BH)))
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L575-L577` → after: `L17060-L17063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17060-L17063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17060-L17063) · [Before (L575-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L575-L577)

```diff
-       const UU = performance.now(),
-         XU = Date.now();
-       return Math.abs(XU - (UU + yU)) > cU && (yU = XU - UU), UU + yU
+       return HH = () => {
+         null !== sM && iM(sM)
+       }, (0, WS.e)(MS, HH);
+       var HH
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L588-L590` → after: `L17067-L17068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17067-L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17067-L17068) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L588-L590)

```diff
-       return {
-         segmentUploadUrl: `${yU.clientSideServerUrls.indexUrl}${cU.m}`,
-         manifestUrl: `${yU.clientSideServerUrls.indexUrl}${cU.i}`
+       return (0, lr.r)(NS(Object.keys(mH), KS)), () => {
+         (0, lr.r)([])
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L602-L603` → after: `L17072-L17083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17072-L17083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17072-L17083) · [Before (L602-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L602-L603)

```diff
-     function yU(UU) {
-       return (new TextEncoder).encode(UU).byteLength
+     function Hx(HH, BH, LH) {
+       var AH, rH;
+       const SH = HH.getTargetedBlock();
+       if (!SH || ! function(HH, BH, LH) {
+           if ("Chest" !== BH) return !1;
+           const AH = HH.split("|")[0];
+           if (!CL(AH) || 0 === cB[AH].outputSlots.length) return !1;
+           const rH = WW(HH);
+           return LH[0] === rH[0] && LH[1] === rH[1] && LH[2] === rH[2]
+         }(LH, null === (AH = HH.yLH(BH)) || void 0 === AH ? void 0 : AH.name, SH.normal)) return !1;
+       const [hH, tH, zH] = SH.AW, CH = HH.getBlockId(hH, tH, zH);
+       return 0 === CH || !0 === (null === (rH = fH.g[CH]) || void 0 === rH ? void 0 : rH.canBePlacedOver)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L605-L630` → after: `L17085-L17089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17085-L17089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17085-L17089) · [Before (L605-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L605-L630)

```diff
-     const QU = new class {
-       constructor() {
-         this.inFlightBytes = 0, this.inFlightLabels = new Map
-       }
-       async fetch(UU, XU, zU, cU) {
-         if (this.inFlightBytes + zU > 49152) return await fetch(UU, XU);
-         this.inFlightBytes += zU, this.countLabel(cU, 1);
-         const yU = () => {
-           this.inFlightBytes -= zU, this.countLabel(cU, -1)
-         };
-         let QU;
-         try {
-           QU = await fetch(UU, {
-             ...XU,
-             keepalive: !0
-           })
- ... (10 more removed lines; see GitHub link above)
+     var Bx = LH(37617);
+     const Lx = new Set(QL.c);
+     class Ax {
+       constructor(HH) {
+         this.toasts = HH, this.lastAt = -1 / 0
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L632-L636` → after: `L17091-L17109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17091-L17109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17091-L17109) · [Before (L632-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L632-L636)

```diff
-       sendBeacon(UU, XU) {
-         const zU = yU(XU);
-         return !(this.inFlightBytes + zU > 57344) && this.beaconSent(navigator.sendBeacon(UU, new Blob([XU], {
-           type: "text/plain"
-         })), zU)
+       onAltAction(HH, BH, LH) {
+         const AH = HH.getTargetedBlock();
+         if (!AH || function(HH) {
+             const BH = HH.split("|")[0];
+             return CL(BH) || null !== VA(BH) || bH(BH) || QL.c.includes(BH)
+           }(LH) && !Lx.has(LH.split("|")[0])) return;
+         const rH = HH.yLH(BH);
+         if (!rH || !Lx.has(rH.name.split("|")[0]) || Date.now() - this.lastAt < 4e3) return;
+         const SH = rH.typeObj.id,
+           [hH, tH, zH] = AH.AW,
+           CH = HH.getBlockId(hH, tH, zH),
+           EH = fH.g[CH];
+         (0 === CH || null !== EH && void 0 !== EH && EH.UY || null !== EH && void 0 !== EH && EH.canBePlacedOver) && HH.isSolidToPlayerBlockId(SH) && HH.canModifyBlockAt(hH, tH, zH) && HH.PLH(hH, tH, zH, SH) && !HH.PLH(hH, tH, zH, SH, BH) && (this.lastAt = Date.now(), this.toasts … [truncated]
+           baf2ToastText: [(0, cH.fe)({
+             translationKey: "buildAFactory2Game:beltStepBack"
+           }, cH.K.whiteUiText)],
+ ... (3 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L638-L639` → after: `L17111-L17114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17111-L17114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17111-L17114) · [Before (L638-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L638-L639)

```diff
-       sendUploadBeacon(UU, XU, zU) {
-         return !(this.inFlightBytes + zU > 40960) && this.beaconSent(navigator.sendBeacon(UU, XU), zU)
+     }
+     class rx {
+       constructor(HH) {
+         this.show = HH, this.started = null, this.gatedThisHold = new Set, this.hintedAt = new Map
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L641` → after: `L17116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17116) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L641)

```diff
-       countLabel(UU, XU) {
+       onMining(HH, BH, LH) {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L643` → after: `L17118-L17153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17118-L17153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17118-L17153) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L643)

```diff
-         void 0 !== UU && this.inFlightLabels.set(UU, (null !== (zU = this.inFlightLabels.get(UU)) && void 0 !== zU ? zU : 0) + XU)
+         if (!BH) return this.started = null, void this.gatedThisHold.clear();
+         if (!HH) return void(this.started = null);
+         const rH = `${HH.x},${HH.y},${HH.z},${HH.LX}`;
+         if (rH === this.started) return;
+         this.started = rH;
+         const SH = eA(HH.y) ? pW(HH.block, HH.LX, HH.level) : null;
+         if (null === SH || this.gatedThisHold.has(rH)) return;
+         this.gatedThisHold.add(rH);
+         const hH = HH.block.split("|")[0];
+         LH - (null !== (AH = this.hintedAt.get(hH)) && void 0 !== AH ? AH : -1 / 0) < 5e3 || (this.hintedAt.set(hH, LH), this.show({
+           baf2ToastText: yW(SH, HH.block),
+           baf2ToastMs: 2500,
+           baf2ToastStyle: "baf2ToastWarn"
+         }))
+       }
+     }
+ ... (20 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L645-L648` → after: `L17155-L17157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17155-L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17155-L17157) · [Before (L645-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L645-L648)

```diff
-       beaconSent(UU, XU) {
-         return UU && (this.inFlightBytes += XU, setTimeout((() => {
-           this.inFlightBytes -= XU
-         }), 1e4)), UU
+       return {
+         message: HH,
+         itemNames: BH([...new Set(LH)])
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L651-L676` → after: `L17160-L17298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17160-L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17160-L17298) · [Before (L651-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L651-L676)

```diff
-   },
-   40607: (UU, XU, zU) => {
-     zU.d(XU, {
-       b: () => AU
-     });
-     var cU = zU(40578),
-       yU = zU(1220);
-     const QU = 6e4;
-     async function AU(UU, XU) {
-       const zU = JSON.stringify(XU);
-       try {
-         const XU = await cU.d.fetch(UU, {
-           method: "POST",
-           headers: {
-             "Content-Type": "application/json"
-           },
- ... (10 more removed lines; see GitHub link above)
+     const tx = "baf2MultiblockGuide";
+     const zx = new Map;
+     const Cx = function(HH, BH, LH, rH) {
+       let {
+         localPlayerId: SH
+       } = rH;
+       const hH = new Et,
+         tH = new yG,
+         CH = new hY,
+         EH = new rY(CH),
+         XH = (HH, BH) => {
+           BH ? EH.observe(HH) : EH.unobserve(HH)
+         },
+         GH = new AY,
+         YH = new zY(XH),
+         uH = HH => YH.covers(HH),
+ ... (123 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L680` → after: `L17724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17724) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L680)

```diff
-   40613: (UU, XU, zU) => {
+   39361: (HH, BH, LH) => {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L683` → after: `L17727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17727) · [Before (L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L683)

```diff
-       e: () => oU
+       h: () => tH
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L685-L688` → after: `L17729-L17736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17729-L17736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17729-L17736) · [Before (L685-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L685-L688)

```diff
-     var cU = zU(40578);
-     const yU = 16384,
-       QU = 100,
-       AU = (0, cU.e)(',"domSegments":[]');
+     var AH = LH(317),
+       rH = LH(35006),
+       SH = LH(3639);
+ 
+     function hH(HH) {
+       const BH = (0, SH.e)(HH);
+       return (0, AH.Yb)(HH, void 0 === BH ? void 0 : (0, rH.displayNameOf)(BH))
+     }
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L691-L712` → after: `L17739-L17754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17739-L17754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17739-L17754) · [Before (L691-L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L691-L712)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU;
-       const {
-         domSegments: FU,
-         ...oU
-       } = UU.manifest, DU = () => ({
-         ...UU,
-         manifest: {
-           ...oU,
-           videoSegments: [],
-           telemetrySegments: [],
-           games: []
-         },
-         creatorGrants: []
-       }), EU = (0, cU.e)(JSON.stringify(DU())), YU = [];
-       let NU = {
-           request: DU(),
- ... (6 more removed lines; see GitHub link above)
+       return HH(hH(BH))
+     }
+   },
+   39388: (HH, BH, LH) => {
+     function AH(HH, BH, LH) {
+       const AH = new Set,
+         rH = new ResizeObserver(LH),
+         SH = () => {
+           const BH = new Set(document.querySelectorAll(HH));
+           let SH = !1;
+           for (const HH of AH) BH.has(HH) || (rH.unobserve(HH), AH.delete(HH), SH = !0);
+           for (const HH of BH) AH.has(HH) || (rH.observe(HH), hH.observe(HH, {
+             attributes: !0,
+             attributeFilter: ["class", "style"]
+           }), AH.add(HH));
+           SH && LH()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L714-L721` → after: `L17756-L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17756-L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17756-L17774) · [Before (L714-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L714-L721)

```diff
-         aU = (UU, XU, zU) => zU + (UU.length > 0 ? 1 : "domSegments" === XU.list ? AU : 0);
-       for (const yU of XU) {
-         const UU = (0, cU.e)(JSON.stringify(yU.value));
-         let XU = pU(NU.request, yU.list);
-         NU.items.length > 0 && (IU + aU(XU, yU, UU) > zU || XU.length >= QU) && (YU.push(NU), NU = {
-           request: DU(),
-           items: []
-         }, IU = EU, XU = pU(NU.request, yU.list)), IU += aU(XU, yU, UU), "domSegments" === yU.list && (NU.request.manifest.domSegments = XU), XU.push(yU.value), NU.items.push(yU)
+         hH = new MutationObserver((BH => {
+           BH.some((HH => "attributes" === HH.type)) && LH(), BH.some((BH => function(HH, BH, LH) {
+             if ("childList" !== HH.type) return !1;
+             for (const AH of HH.addedNodes)
+               if (AH instanceof Element && (AH.matches(BH) || AH.querySelector(BH))) return !0;
+             for (const AH of HH.removedNodes)
+               if (AH instanceof Element)
+                 for (const HH of LH)
+                   if (AH.contains(HH)) return !0;
+             return !1
+           }(BH, HH, AH))) && SH()
+         }));
+       hH.observe(document.body, {
+         childList: !0,
+         subtree: !0
+       });
+ ... (3 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L754` → after: `L17781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17781) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L754)

```diff
-   40594: (UU, XU, zU) => {
+   39374: (HH, BH, LH) => {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L756` → after: `L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17783) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L756)

```diff
-       b: () => cU
+       e: () => tH
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L758-L762` → after: `L17785-L17800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17785-L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17785-L17800) · [Before (L758-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L758-L762)

```diff
-     class cU extends Error {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         super(UU), this.status = XU, this.storageCode = zU
-       }
+     var AH = LH(39370);
+     const rH = 5,
+       SH = [0, 0, 0],
+       hH = {
+         x: 0,
+         y: 0,
+         distSq: 0
+       };
+ 
+     function tH(HH, BH, LH, tH, zH, CH) {
+       let [EH, XH, GH] = tH;
+       const YH = (EH + .5 - LH[0]) ** 2 + (XH - LH[1]) ** 2 + (GH + .5 - LH[2]) ** 2;
+       let uH = null;
+       YH <= CH ** 2 && (SH[0] = EH + .5, SH[1] = XH + zH, SH[2] = GH + .5, uH = BH.projectWorldPosToViewport(SH));
+       const QH = null !== uH && uH.x > -rH && uH.x < 100 + rH && uH.y > -rH && uH.y < 100 + rH;
+       return (0, AH.e)(HH, !QH), QH ? (hH.x = uH.x, hH.y = uH.y, hH.distSq = YH, hH) : null
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L765` → after: `L17803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17803) · [Before (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L765)

```diff
-   40576: (UU, XU, zU) => {
+   39370: (HH, BH, LH) => {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L767-L771` → after: `L17805-L17806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17805-L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17805-L17806) · [Before (L767-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L767-L771)

```diff
-       e: () => FU,
-       i: () => yU,
-       j: () => QU,
-       m: () => cU,
-       n: () => AU
+       d: () => hH,
+       e: () => SH
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L773-L775` → after: `L17808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17808) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L773-L775)

```diff
-     const cU = "/index/replay/segment-upload-url",
-       yU = "/index/replay/manifest";
-     const QU = 65536;
+     const AH = new WeakMap;
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L778-L781` → after: `L17811-L17826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R17811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L17811-L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/270.js#L17811-L17826) · [Before (L778-L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/270.js#L778-L781)

```diff
-       return {
-         count: Math.ceil(UU.segmentDurationMs / UU.partDurationMs) + 1,
-         maxBytes: Math.ceil(1.5 * UU.bitrate / 8 * (UU.partDurationMs / 1e3)) + 32768
-       }
+       let BH = AH.get(HH);
+       return BH || (BH = {
+         hidden: HH.hidden,
+         x: NaN,
+         y: NaN
+       }, AH.set(HH, BH)), BH
+     }
+ 
+     function SH(HH, BH) {
+       const LH = rH(HH);
+       LH.hidden !== BH && (LH.hidden = BH, HH.hidden = BH)
+     }
+ 
+     function hH(HH, BH, LH) {
+       const AH = rH(HH);
+       AH.x === BH && AH.y === LH || (AH.x = BH, AH.y = LH, HH.style.translate = `${BH}vw ${LH}vh`)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (281 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4)

```diff
-   40667: (UU, XU, zU) => {
+   45083: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L6-L7)

```diff
-       b: () => gD,
-       e: () => nI
+       d: () => SH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L9-L159` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L8-L20) · [Before (L9-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L9-L159)

```diff
-     const cU = "0.9.4",
-       yU = {
-         DEBUG: !1,
-         LIB_VERSION: "1.438.7",
-         LIB_NAME: "web",
-         JS_SDK_VERSION: cU
-       };
-     var QU = yU;
-     const AU = "$early_access_features",
-       FU = "$active_feature_flags",
-       oU = "$feature_flag_details",
-       DU = "$feature_flag_errors",
-       EU = "$feature_flag_evaluated_at",
-       YU = "$feature_flag_request_id",
-       NU = "$minimal_flag_called_events",
-       IU = "$enabled_feature_flags",
- ... (135 more removed lines; see GitHub link above)
+     var AH = LH(41398),
+       rH = LH(45086);
+     class SH {
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
+         this.maxDepth = LH, this.lrH = [], this._maxBlockCapacity = BH || 64, this._selectionContent = new AH.e(1024), this._creationFunc = HH
+       }
+       update(HH, BH, LH) {
+         rH.d._CreateBlocks(HH, BH, LH, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
+       }
+       QrH(HH) {
+         for (let BH = 0; BH < this.blocks.length; BH++) {
+           this.blocks[BH].addEntry(HH)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L161-L175` → after: `L22-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L22-L25) · [Before (L161-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L161-L175)

```diff
-       }))) && void 0 !== XU ? XU : "null"
-     }
-     const tz = Object.prototype,
-       gz = tz.hasOwnProperty,
-       kz = tz.toString,
-       Gz = Array.isArray || function(UU) {
-         return "[object Array]" === kz.call(UU)
-       },
-       Bz = UU => "function" == typeof UU,
-       Zz = UU => UU === Object(UU) && !Gz(UU),
-       Rz = UU => {
-         if (Zz(UU)) {
-           for (const XU in UU)
-             if (gz.call(UU, XU)) return !1;
-           return !0
+       }
+       gR(HH) {
+         for (let BH = 0; BH < this.blocks.length; BH++) {
+           this.blocks[BH].removeEntry(HH)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L177-L207` → after: `L27-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L27-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L27-L47) · [Before (L177-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L177-L207)

```diff
-         return !1
-       },
-       Pz = UU => void 0 === UU,
-       Wz = UU => "[object String]" == kz.call(UU),
-       dz = UU => Wz(UU) && 0 === UU.trim().length,
-       Lz = UU => null === UU,
-       ez = UU => Pz(UU) || Lz(UU),
-       Cz = UU => "[object Number]" == kz.call(UU) && UU == UU,
-       wz = UU => Cz(UU) && UU > 0,
-       qz = UU => "[object Boolean]" === kz.call(UU),
-       Oz = UU => Nz(Ez, UU),
-       Sz = UU => Nz(Yz, UU);
- 
-     function rz(UU) {
-       return null === UU || "object" != typeof UU
-     }
- ... (15 more removed lines; see GitHub link above)
+       }
+       select(HH, BH) {
+         this._selectionContent.reset();
+         for (let LH = 0; LH < this.blocks.length; LH++) {
+           this.blocks[LH].select(HH, this._selectionContent, BH)
+         }
+         return BH ? this._selectionContent.concat(this.lrH) : this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
+       }
+       intersects(HH, BH, LH) {
+         this._selectionContent.reset();
+         for (let AH = 0; AH < this.blocks.length; AH++) {
+           this.blocks[AH].intersects(HH, BH, this._selectionContent, LH)
+         }
+         return LH ? this._selectionContent.concat(this.lrH) : this._selectionContent.concatWithNoDuplicate(this.lrH), this._selectionContent
+       }
+       intersectsRay(HH) {
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L210-L212` → after: `L50-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L50-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L50-L54) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L210-L212)

```diff
- 
-     function iz(UU) {
-       return "u" > typeof Event && Hz(UU, Event)
+     SH.CreationFuncForMeshes = (HH, BH) => {
+       const LH = HH.jF();
+       !HH.isBlocked && LH.boundingBox.intersectsMinMax(BH.OrH, BH.VrH) && BH.entries.push(HH)
+     }, SH.CreationFuncForSubMeshes = (HH, BH) => {
+       HH.jF().boundingBox.intersectsMinMax(BH.OrH, BH.VrH) && BH.entries.push(HH)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L214-L219` → after: `L56-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L56-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L56-L65) · [Before (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L214-L219)

```diff
- 
-     function Hz(UU, XU) {
-       try {
-         return UU instanceof XU
-       } catch (UU) {
-         return !1
+   },
+   45086: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH
+     });
+     var AH = LH(37963),
+       rH = LH(41595);
+     class SH {
+       constructor(HH, BH, LH, AH, rH, SH) {
+         this.entries = [], this.KrH = new Array, this._capacity = LH, this._depth = AH, this._maxDepth = rH, this._creationFunc = SH, this._minPoint = HH, this._maxPoint = BH, this.KrH.push(HH.clone()), this.KrH.push(BH.clone()), this.KrH.push(HH.clone()), this.KrH[2].x = BH.x, t … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L221-L231` → after: `L67-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L67-L68) · [Before (L221-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L221-L231)

```diff
-     }
-     const Mz = [!0, "true", 1, "1", "yes"],
-       vz = UU => Nz(Mz, UU),
-       Vz = [!1, "false", 0, "0", "no"];
- 
-     function sz(UU, XU, zU, cU, yU, QU, AU) {
-       try {
-         var FU = UU[QU](AU),
-           oU = FU.value
-       } catch (UU) {
-         return void zU(UU)
+       get aX() {
+         return this._capacity
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L233-L244` → after: `L70-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L70-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L70-L85) · [Before (L233-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L233-L244)

```diff
-       FU.done ? XU(oU) : Promise.resolve(oU).then(cU, yU)
-     }
- 
-     function nz(UU) {
-       return function() {
-         var XU = this,
-           zU = arguments;
-         return new Promise((function(cU, yU) {
-           var QU = UU.apply(XU, zU);
- 
-           function AU(UU) {
-             sz(QU, cU, yU, AU, FU, "next", UU)
+       get OrH() {
+         return this._minPoint
+       }
+       get VrH() {
+         return this._maxPoint
+       }
+       addEntry(HH) {
+         if (this.blocks)
+           for (let BH = 0; BH < this.blocks.length; BH++) {
+             this.blocks[BH].addEntry(HH)
+           } else this._creationFunc(HH, this), this.entries.length > this.aX && this._depth < this._maxDepth && this.createInnerBlocks()
+       }
+       removeEntry(HH) {
+         if (this.blocks) {
+           for (let BH = 0; BH < this.blocks.length; BH++) {
+             this.blocks[BH].removeEntry(HH)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L246-L248` → after: `L87-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L87-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L87-L104) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L246-L248)

```diff
- 
-           function FU(UU) {
-             sz(QU, cU, yU, AU, FU, "throw", UU)
+           return
+         }
+         const BH = this.entries.indexOf(HH);
+         BH > -1 && this.entries.splice(BH, 1)
+       }
+       addEntries(HH) {
+         for (let BH = 0; BH < HH.length; BH++) {
+           const LH = HH[BH];
+           this.addEntry(LH)
+         }
+       }
+       select(HH, BH, LH) {
+         if (rH.b.IsInFrustum(this.KrH, HH)) {
+           if (this.blocks) {
+             for (let AH = 0; AH < this.blocks.length; AH++) {
+               this.blocks[AH].select(HH, BH, LH)
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L250-L251` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L106-L107) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L250-L251)

```diff
-           AU(void 0)
-         }))
+           LH ? BH.concat(this.entries) : BH.concatWithNoDuplicate(this.entries)
+         }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L253-L263` → after: `L109-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L109-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L109-L113) · [Before (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L253-L263)

```diff
-     }
-     const mz = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatal … [truncated]
-       lz = new Map,
-       xz = function(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         if (!UU) return !1;
-         const zU = function(UU, XU) {
-             let zU = "";
-             for (let cU = 0; XU.length > cU; cU++) {
-               const UU = XU[cU];
-               zU += UU.length + ":" + UU
+       intersects(HH, BH, LH, AH) {
+         if (rH.b.IntersectsSphere(this._minPoint, this._maxPoint, HH, BH)) {
+           if (this.blocks) {
+             for (let rH = 0; rH < this.blocks.length; rH++) {
+               this.blocks[rH].intersects(HH, BH, LH, AH)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L265-L279` → after: `L115-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L115-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L115-L129) · [Before (L265-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L265-L279)

```diff
-             return UU.length + ":" + UU + "|" + XU.length + ":" + zU
-           }(UU, XU),
-           cU = lz.get(zU);
-         if (void 0 !== cU) return cU;
-         const yU = UU.toLowerCase(),
-           QU = mz.concat(XU).some((UU => -1 !== yU.indexOf(UU.toLowerCase())));
-         return 256 > lz.size || lz.clear(), lz.set(zU, QU), QU
-       };
- 
-     function Jz(UU, XU, zU, cU, yU) {
-       return XU > zU && (cU.warn("min cannot be greater than max."), XU = zU), Cz(UU) ? UU > zU ? (cU.warn(" cannot be  greater than max: " + zU + ". Using max value instead."), zU) : XU > UU ? (cU.warn(" cannot be less than min: " + XU + ". Using min value instead."), XU) : UU : … [truncated]
-     }
-     var jz = class {
-       constructor(UU) {
-         this._buckets = {}, this._onBucketRateLimited = UU._onBucketRateLimited, this._bucketSize = Jz(UU.bucketSize, 0, 100, UU._logger), this._refillRate = Jz(UU.refillRate, 0, this._bucketSize, UU._logger), this._refillInterval = Jz(UU.refillInterval, 0, 864e5, UU._logger)
+             return
+           }
+           AH ? LH.concat(this.entries) : LH.concatWithNoDuplicate(this.entries)
+         }
+       }
+       intersectsRay(HH, BH) {
+         if (HH.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
+           if (this.blocks) {
+             for (let LH = 0; LH < this.blocks.length; LH++) {
+               this.blocks[LH].intersectsRay(HH, BH)
+             }
+             return
+           }
+           BH.concatWithNoDuplicate(this.entries)
+         }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L281-L283` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L131-L132) · [Before (L281-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L281-L283)

```diff
-       _applyRefill(UU, XU) {
-         const zU = Math.floor((XU - UU.lastAccess) / this._refillInterval);
-         zU > 0 && (UU.tokens = Math.min(UU.tokens + zU * this._refillRate, this._bucketSize), UU.lastAccess = UU.lastAccess + zU * this._refillInterval)
+       createInnerBlocks() {
+         SH._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L285-L293` → after: `L134-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L134-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L134-L144) · [Before (L285-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L285-L293)

```diff
-       consumeRateLimit(UU) {
-         var XU;
-         const zU = Date.now(),
-           cU = String(UU);
-         let yU = this._buckets[cU];
-         return yU ? this._applyRefill(yU, zU) : (yU = {
-           tokens: this._bucketSize,
-           lastAccess: zU
-         }, this._buckets[cU] = yU), 0 === yU.tokens || (yU.tokens--, 0 === yU.tokens && (null === (XU = this._onBucketRateLimited) || void 0 === XU || XU.call(this, UU)), 0 === yU.tokens)
+       static _CreateBlocks(HH, BH, LH, rH, hH, tH, zH, CH) {
+         zH.blocks = new Array;
+         const EH = new AH.o((BH.x - HH.x) / 2, (BH.y - HH.y) / 2, (BH.z - HH.z) / 2);
+         for (let AH = 0; AH < 2; AH++)
+           for (let BH = 0; BH < 2; BH++)
+             for (let XH = 0; XH < 2; XH++) {
+               const GH = HH.add(EH.multiplyByFloats(AH, BH, XH)),
+                 YH = HH.add(EH.multiplyByFloats(AH + 1, BH + 1, XH + 1)),
+                 uH = new SH(GH, YH, rH, hH + 1, tH, CH);
+               uH.addEntries(LH), zH.blocks.push(uH)
+             }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L295-L296` → after: `L146-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L146-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L146-L161) · [Before (L295-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L295-L296)

```diff
-       stop() {
-         this._buckets = {}
+     }
+   },
+   45095: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => EH
+     });
+     var AH = LH(41383),
+       rH = LH(37963),
+       SH = LH(41730),
+       hH = LH(45036),
+       tH = LH(41456),
+       zH = LH(37989),
+       CH = LH(45083);
+     class EH {
+       constructor(HH) {
+         this.name = tH.b.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new hH.E(rH.o.Zero(), new rH.o(1, 1, 1)), (HH = HH || zH.d.LastCreatedScene) && (this.NQ = HH, this.NQ.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.NQ.getActiveSubMeshCandidat … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L298-L419` → after: `L163-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L163-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L163-L167) · [Before (L298-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L298-L419)

```diff
-     };
-     const Kz = "Mobile",
-       bz = "Android",
-       Tz = "Tablet",
-       hz = "Android Tablet",
-       Uc = "iPad",
-       Xc = "Apple Watch",
-       zc = "Safari",
-       cc = "BlackBerry",
-       yc = "Samsung Internet",
-       Qc = "Chrome",
-       Ac = "Chrome iOS",
-       Fc = "Internet Explorer",
-       oc = "Internet Explorer Mobile",
-       Dc = "Opera",
-       Ec = "Microsoft Edge",
- ... (106 more removed lines; see GitHub link above)
+       register() {
+         this.NQ.onMeshRemovedObservable.add((HH => {
+           const BH = this.NQ.selectionOctree;
+           if (void 0 !== BH && null !== BH) {
+             const LH = BH.lrH.indexOf(HH); - 1 !== LH && BH.lrH.splice(LH, 1)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L421-L440` → after: `L169-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L169-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L169-L179) · [Before (L421-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L421-L440)

```diff
-           return [kc, ""]
-         }],
-         [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, UU => UU && UU[3] ? ["iOS", [UU[3], UU[4], UU[5] || "0"].join(".")] : ["iOS", ""]],
-         [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, UU => {
-           let XU = "";
-           return UU && UU.length >= 3 && (XU = Pz(UU[2]) ? UU[3] : UU[2]), ["watchOS", XU]
-         }],
-         [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), UU => UU && UU[2] ? [bz, [UU[2], UU[3], UU[4] || "0"].join(".")] : [bz, ""]],
-         [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, UU => {
-           const XU = ["Mac OS X", ""];
-           return UU && UU[1] && (XU[1] = [UU[1], UU[2], UU[3] || "0"].join(".")), XU
-         }],
-         [/Mac/i, ["Mac OS X", ""]],
-         [/CrOS/, ["Chrome OS", ""]],
-         [/Linux|debian/i, ["Linux", ""]]
-       ],
- ... (4 more removed lines; see GitHub link above)
+         })), this.NQ.onMeshImportedObservable.add((HH => {
+           const BH = this.NQ.selectionOctree;
+           void 0 !== BH && null !== BH && BH.QrH(HH)
+         }))
+       }
+       getActiveMeshCandidates() {
+         return this.NQ.RrH?.select(this.NQ.frustumPlanes) || this.NQ._getDefaultMeshCandidates()
+       }
+       getActiveSubMeshCandidates(HH) {
+         if (HH._submeshesOctree && HH.useOctreeForRenderingSelection) {
+           return HH._submeshesOctree.select(this.NQ.frustumPlanes)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L442-L483` → after: `L181-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L181-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L181-L186) · [Before (L442-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L442-L483)

```diff
-         return ["", ""]
-       },
-       bc = function(UU) {
-         return sc.test(UU) ? Ic : Vc.test(UU) ? pc : vc.test(UU) ? ac : new RegExp(Zc, "i").test(UU) ? Zc : new RegExp("(Windows Phone|WPDesktop)", "i").test(UU) ? Gc : /iPad/.test(UU) ? Uc : /iPod/.test(UU) ? "iPod Touch" : /iPhone/.test(UU) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\ … [truncated]
-       },
-       Tc = function(UU, XU) {
-         var zU;
-         const cU = bc(UU);
-         return cU === Uc || cU === hz || "Kobo" === cU || "Kindle Fire" === cU || cU === Pc ? Tz : cU === Ic || cU === ac || cU === pc || cU === Zc ? "Console" : cU === Xc ? "Wearable" : cU ? Kz : "Android" === (null == XU ? void 0 : XU.userAgentDataPlatform) && (null !== (zU = n … [truncated]
-         var yU, QU, AU
-       },
-       hc = /\bFBAV\/(\d+(?:\.\d+)*)/i,
-       Uy = [
-         [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
-         [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
-         [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", hc],
- ... (26 more removed lines; see GitHub link above)
+         return this.NQ._getDefaultSubMeshCandidates(HH)
+       }
+       getIntersectingSubMeshCandidates(HH, BH) {
+         if (HH._submeshesOctree && HH.useOctreeForPicking) {
+           hH.E.TransformToRef(BH, HH.getWorldMatrix(), this._tempRay);
+           return HH._submeshesOctree.intersectsRay(this._tempRay)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L486-L502` → after: `L190-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L190-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L190-L193) · [Before (L486-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L486-L502)

```diff
-       return XU
-     }
- 
-     function yy(UU, XU) {
-       if (!XU) return UU;
-       let zU = [];
-       try {
-         zU = Object.keys(XU)
-       } catch (UU) {
-         zU = []
-       }
-       for (const cU of zU) {
-         let zU;
-         try {
-           zU = XU[cU]
-         } catch (UU) {
- ... (1 more removed lines; see GitHub link above)
+       getCollidingSubMeshCandidates(HH, BH) {
+         if (HH._submeshesOctree && HH.useOctreeForCollisions) {
+           const LH = BH._velocityWorldLength + Math.max(BH._radius.x, BH._radius.y, BH._radius.z);
+           return HH._submeshesOctree.intersects(BH._basePointWorld, LH)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L504-L509` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L195) · [Before (L504-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L504-L509)

```diff
-         Object.defineProperty(UU, cU, {
-           value: zU,
-           enumerable: !0,
-           writable: !0,
-           configurable: !0
-         })
+         return this.NQ._getDefaultSubMeshCandidates(HH)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L511` → after: `L197-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L197-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L197-L198) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L511)

```diff
-       return UU
+       rebuild() {}
+       dispose() {}
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L513-L533` → after: `L200-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L200-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L200-L271) · [Before (L513-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L513-L533)

```diff
-     Date, Date;
-     const Qy = 3e5;
-     var Ay = class {
-       record(UU) {
-         if ("too-large" === UU.kind) return;
-         if ("retry-later" !== UU.kind) return void this.reset();
-         if (!UU.retryAfterMs) return;
-         const XU = this.isOpen(),
-           zU = Date.now(),
-           cU = Math.min(UU.retryAfterMs, Qy);
-         if (!XU) return this._installedAt = zU, void(this._until = zU + cU);
-         this._until = Math.max(this._until, Math.min(zU + cU, this._installedAt + Qy))
-       }
-       remainingMs() {
-         const UU = Date.now();
-         if (this._installedAt - 5e3 > UU) return this.reset(), 0;
- ... (5 more removed lines; see GitHub link above)
+     let XH = !1;
+     XH || (XH = !0, AH.d.prototype.createOrUpdateSelectionOctree = function() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+         BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
+         LH = this._getComponent(tH.b.NAME_OCTREE);
+       LH || (LH = new EH(this), this.SrH(LH)), this.RrH || (this.RrH = new CH.d(CH.d.CreationFuncForMeshes, HH, BH));
+       const AH = this.getWorldExtends();
+       return this.RrH.update(AH.min, AH.max, this.meshes), this.RrH
+     }, Object.defineProperty(AH.d.prototype, "selectionOctree", {
+       get: function() {
+         return this.RrH
+       },
+       enumerable: !0,
+       configurable: !0
+     }), SH.c.prototype.createOrUpdateSubmeshesOctree = function() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
+ ... (56 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L535-L536` → after: `L273-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L273-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L273-L316) · [Before (L535-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L535-L536)

```diff
-       reset() {
-         this._until = 0, this._installedAt = 0
+       intersectsBox(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         return this.intersectsBoxMinMax(HH.minimum, HH.maximum, BH)
+       }
+       intersectsSphere(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const LH = HH.center.x - this.origin.x,
+           AH = HH.center.y - this.origin.y,
+           rH = HH.center.z - this.origin.z,
+           SH = LH * LH + AH * AH + rH * rH,
+           hH = HH.radius + BH,
+           tH = hH * hH;
+         if (SH <= tH) return !0;
+         const zH = LH * this.direction.x + AH * this.direction.y + rH * this.direction.z;
+         if (zH < 0) return !1;
+         return SH - zH * zH <= tH
+ ... (28 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L538-L539` → after: `L318-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L318-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L318-L419) · [Before (L538-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L538-L539)

```diff
-       constructor() {
-         this._until = 0, this._installedAt = 0
+       intersectsAxis(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         switch (HH) {
+           case "y": {
+             const HH = (this.origin.y - BH) / this.direction.y;
+             return HH > 0 ? null : new rH.o(this.origin.x + this.direction.x * -HH, BH, this.origin.z + this.direction.z * -HH)
+           }
+           case "x": {
+             const HH = (this.origin.x - BH) / this.direction.x;
+             return HH > 0 ? null : new rH.o(BH, this.origin.y + this.direction.y * -HH, this.origin.z + this.direction.z * -HH)
+           }
+           case "z": {
+             const HH = (this.origin.z - BH) / this.direction.z;
+             return HH > 0 ? null : new rH.o(this.origin.x + this.direction.x * -HH, this.origin.y + this.direction.y * -HH, BH)
+           }
+           default:
+ ... (86 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L541-L570` → after: `L421-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L421-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L421-L430) · [Before (L541-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L541-L570)

```diff
-     };
-     const Fy = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
- 
-     function oy(UU, XU) {
-       return "string" == typeof(zU = UU) && Fy.test(zU) ? UU : XU();
-       var zU
-     }
- 
-     function Dy(UU, XU) {
-       const zU = new Error(XU);
-       try {
-         Object.defineProperty(zU, "name", {
-           value: UU,
-           writable: !0,
-           enumerable: !0,
-           configurable: !0
- ... (14 more removed lines; see GitHub link above)
+       unprojectRayToRef(HH, BH, LH, AH, SH, hH, tH) {
+         const CH = rH.l.Matrix[0];
+         SH.multiplyToRef(hH, CH), CH.multiplyToRef(tH, CH), CH.invert();
+         const EH = zH.d.LastCreatedEngine,
+           XH = rH.l.lu[0];
+         XH.x = HH / LH * 2 - 1, XH.y = -(BH / AH * 2 - 1), XH.z = EH?.WrH ? 1 : EH?.isNDCHalfZRange ? 0 : -1;
+         const GH = rH.l.lu[1].SBH(XH.x, XH.y, 1 - 1e-8),
+           YH = rH.l.lu[2],
+           uH = rH.l.lu[3];
+         rH.o.TransformCoordinatesToRef(XH, CH, YH), rH.o.TransformCoordinatesToRef(GH, CH, uH), this.origin.Tm(YH), uH.subtractToRef(YH, this.direction), this.direction.normalize()
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L574-L576` → after: `L434-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L434-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L434-L454) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L574-L576)

```diff
-     function Ny(UU, XU) {
-       const zU = setTimeout(UU, XU);
-       return null != zU && zU.unref && (null == zU || zU.unref()), zU
+     function GH(HH, BH, LH, AH, rH) {
+       let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       const hH = XH.Zero();
+       return YH(HH, BH, LH, AH, hH, rH, SH), hH
+     }
+ 
+     function YH(HH, BH, LH, AH, SH, hH) {
+       let tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         zH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const CH = HH.Iu();
+       if (!hH && !(hH = HH.activeCamera) && !(hH = HH.cameraToUseForPointers)) return HH;
+       const EH = hH.viewport,
+         XH = CH.getRenderHeight(),
+         {
+           x: GH,
+           y: YH,
+ ... (5 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L579-L580` → after: `L457-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L457-L459) · [Before (L579-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L579-L580)

```diff
-     function Iy(UU, XU, zU) {
-       return py.apply(this, arguments)
+     function uH(HH, BH, LH, AH) {
+       const rH = XH.Zero();
+       return QH(HH, BH, LH, rH, AH), rH
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L583-L599` → after: `L462-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L462-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L462-L476) · [Before (L583-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L583-L599)

```diff
-     function py() {
-       return (py = nz((function*(UU, XU, zU) {
-         let cU;
-         try {
-           return yield Promise.race([UU, new Promise(((UU, yU) => {
-             cU = Ny((() => {
-               try {
-                 null == zU || zU(), UU()
-               } catch (UU) {
-                 yU(UU)
-               }
-             }), XU)
-           }))])
-         } finally {
-           clearTimeout(cU)
-         }
- ... (1 more removed lines; see GitHub link above)
+     function QH(HH, BH, LH, AH, SH) {
+       if (!tH.b) return HH;
+       const hH = HH.Iu();
+       if (!SH && !(SH = HH.activeCamera) && !(SH = HH.cameraToUseForPointers)) throw new Error("Active camera not set");
+       const zH = SH.viewport,
+         CH = hH.getRenderHeight(),
+         {
+           x: EH,
+           y: XH,
+           width: GH,
+           height: YH
+         } = zH.toGlobal(hH.getRenderWidth(), CH),
+         uH = rH.e.Identity(),
+         QH = 1 / hH.getHardwareScalingLevel();
+       return BH = BH * QH - EH, LH = LH * QH - (CH - XH - YH), AH.update(BH, LH, GH, YH, uH, uH, SH.getProjectionMatrix()), HH
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L602-L607` → after: `L479-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L479-L480) · [Before (L602-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L602-L607)

```diff
-     function ay(UU) {
-       return ay = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
-         return typeof UU
-       } : function(UU) {
-         return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
-       }, ay(UU)
+     function WH(HH, BH, LH, AH, rH, SH, hH, tH) {
+       return MH(HH, LH, AH, BH(AH, LH.enableDistantPicking), rH, SH, hH, tH)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L610-L628` → after: `L483-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L483-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L483-L485) · [Before (L610-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L610-L628)

```diff
-     function ty(UU, XU, zU) {
-       return (XU = function(UU) {
-         var XU = function(UU) {
-           if ("object" != ay(UU) || !UU) return UU;
-           var XU = UU[Symbol.toPrimitive];
-           if (void 0 !== XU) {
-             var zU = XU.call(UU, "string");
-             if ("object" != ay(zU)) return zU;
-             throw new TypeError("@@toPrimitive must return a primitive value.")
-           }
-           return String(UU)
-         }(UU);
-         return "symbol" == ay(XU) ? XU : XU + ""
-       }(XU)) in UU ? Object.defineProperty(UU, XU, {
-         value: zU,
-         enumerable: !0,
- ... (3 more removed lines; see GitHub link above)
+     function MH(HH, BH, LH, AH, rH, SH, hH, tH) {
+       const zH = BH.intersects(AH, rH, hH, SH, LH, tH);
+       return zH && zH.hit ? !rH && null != HH && zH.distance >= HH.distance ? null : zH : null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L632-L639` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L489) · [Before (L632-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L632-L639)

```diff
-       var zU = Object.keys(UU);
-       if (Object.getOwnPropertySymbols) {
-         var cU = Object.getOwnPropertySymbols(UU);
-         XU && (cU = cU.filter((function(XU) {
-           return Object.getOwnPropertyDescriptor(UU, XU).enumerable
-         }))), zU.push.apply(zU, cU)
-       }
-       return zU
+       return "InstancedLinesMesh" === HH || "LinesMesh" === HH ? BH.intersectionThreshold : 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L643-L649` → after: `L493-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L493-L501) · [Before (L643-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L643-L649)

```diff
-       for (var XU = 1; arguments.length > XU; XU++) {
-         var zU = null != arguments[XU] ? arguments[XU] : {};
-         XU % 2 ? gy(Object(zU), !0).forEach((function(XU) {
-           ty(UU, XU, zU[XU])
-         })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(zU)) : gy(Object(zU)).forEach((function(XU) {
-           Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(zU, XU))
-         }))
+       const BH = HH.getClassName();
+       if ("GreasedLineMesh" === BH) return {
+         rawBoundingInfo: null,
+         intersectionThreshold: 0
+       };
+       const LH = HH.rawBoundingInfo;
+       return {
+         rawBoundingInfo: LH,
+         intersectionThreshold: LH ? xH(BH, HH) : 0
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L655-L668` → after: `L505-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L505-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L505-L524) · [Before (L655-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L655-L668)

```diff
-     function Py(UU) {
-       var XU;
-       const zU = globalThis._posthogChunkIds,
-         cU = globalThis._debugIds;
-       if (!zU && !cU) return;
-       const yU = zU ? Object.keys(zU) : [],
-         QU = cU ? Object.keys(cU) : [];
-       if (Ry && Wy(zU, yU, By) && Wy(cU, QU, Zy)) return Ry;
-       By = zU ? ky({}, zU) : void 0, Zy = cU ? ky({}, cU) : void 0, Ry = {}, null !== (XU = Gy) && void 0 !== XU || (Gy = {});
-       const AU = (XU, zU) => {
-         for (const yU of XU) {
-           const XU = zU[yU];
-           if (!XU) continue;
-           const QU = null == Gy ? void 0 : Gy[yU];
+     function PH(HH, BH, LH, AH, rH) {
+       const SH = HH(LH, BH.enableDistantPicking);
+       return SH.intersectsSphere(AH.nrH, rH) && SH.intersectsBox(AH.boundingBox, rH) ? SH : null
+     }
+ 
+     function TH(HH, BH, LH, AH, SH, hH) {
+       let zH = null;
+       const CH = !!(HH.activeCameras && HH.activeCameras.length > 1 && HH.cameraToUseForPointers !== HH.activeCamera),
+         XH = HH.cameraToUseForPointers || HH.activeCamera,
+         GH = EH.internalPickerForMesh || WH,
+         YH = GH === WH;
+       for (let tH = 0; tH < HH.meshes.length; tH++) {
+         const EH = HH.meshes[tH];
+         if (LH) {
+           if (!LH(EH, -1)) continue
+         } else if (!EH.isEnabled() || !EH.isVisible || !EH.jQ) continue;
+ ... (4 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L670-L676` → after: `L526-L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L526-L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L526-L530) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L670-L676)

```diff
-             Ry[QU] = XU;
-             continue
-           }
-           const AU = UU(yU);
-           for (let UU = AU.length - 1; UU >= 0; UU--) {
-             var cU;
-             const zU = null === (cU = AU[UU]) || void 0 === cU ? void 0 : cU.filename;
+             if (SH) return HH;
+             const {
+               rawBoundingInfo: tH,
+               intersectionThreshold: CH
+             } = vH(EH), XH = EH._thinInstanceDataStorage.matrixData;
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L678-L679` → after: `L532-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L532-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L532-L542) · [Before (L678-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L678-L679)

```diff
-               Ry[zU] = XU, Gy[yU] = zU;
-               break
+               const HH = rH.l.Matrix[0],
+                 uH = rH.l.Matrix[1],
+                 WH = Math.min(EH.gHH, XH.length >> 4);
+               for (let xH = 0; xH < WH; xH++) {
+                 if (LH && !LH(EH, xH)) continue;
+                 rH.e.FromArrayToRef(XH, xH << 4, HH), HH.multiplyToRef(QH, uH);
+                 const WH = YH && tH ? PH(BH, EH, uH, tH, CH) : null;
+                 if (YH && tH && !WH) continue;
+                 const vH = YH && WH ? MH(zH, EH, uH, WH, AH, SH, hH, !0) : GH(zH, BH, EH, uH, AH, SH, hH, !0);
+                 if (vH && (zH = vH, zH.thinInstanceIndex = xH, AH)) return zH
+               }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L683-L684` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L549-L550) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L683-L684)

```diff
-       };
-       return cU && AU(QU, cU), zU && AU(yU, zU), Ry
+       }
+       return zH || new tH.b
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L687-L858` → after: `L553-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L553-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L553-L583) · [Before (L687-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L687-L858)

```diff
-     function Wy(UU, XU, zU) {
-       return UU && zU ? XU.length === Object.keys(zU).length && XU.every((XU => UU[XU] === zU[XU])) : UU === zU
-     }
-     var dy = class {
-       constructor(UU, XU) {
-         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-         this.coercers = UU, this.stackParser = XU, this.modifiers = zU
-       }
-       buildFromUnknown(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const zU = XU && XU.mechanism || {
-             handled: !0,
-             type: "generic"
-           },
-           cU = this.buildCoercingContext(zU, XU, 0).apply(UU),
-           yU = this.buildParsingContext(XU),
- ... (156 more removed lines; see GitHub link above)
+     function UH(HH, BH, LH, AH) {
+       if (!tH.b) return null;
+       const SH = [],
+         hH = !!(HH.activeCameras && HH.activeCameras.length > 1 && HH.cameraToUseForPointers !== HH.activeCamera),
+         zH = HH.cameraToUseForPointers || HH.activeCamera,
+         CH = EH.internalPickerForMesh || WH,
+         XH = CH === WH;
+       for (let tH = 0; tH < HH.meshes.length; tH++) {
+         const EH = HH.meshes[tH];
+         if (LH) {
+           if (!LH(EH, -1)) continue
+         } else if (!EH.isEnabled() || !EH.isVisible || !EH.jQ) continue;
+         const GH = hH && EH.isWorldMatrixCameraDependent(),
+           YH = EH.computeWorldMatrix(GH, zH);
+         if (EH.hasThinInstances && EH.gLH) {
+           if (CH(null, BH, EH, YH, !0, !0, AH)) {
+ ... (15 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L885` → after: `L587-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L587-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L587-L590) · [Before (L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L885)

```diff
-         })
+         } else {
+           const HH = CH(null, BH, EH, YH, !1, !1, AH);
+           HH && SH.push(HH)
+         }
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L887-L889` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L592-L593) · [Before (L887-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L887-L889)

```diff
-     };
-     const Ly = /^([a-z][a-z0-9.+-]+):/i,
-       ey = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];
+       return SH
+     }
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L891-L894` → after: `L595-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L595-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L595-L598) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L891-L894)

```diff
-     function Cy(UU) {
-       if (!UU || "<anonymous>" === UU) return !1;
-       const XU = Ly.exec(UU);
-       return !XU || ey.includes(XU[1].toLowerCase())
+     function VH(HH, BH, LH, AH, SH, hH) {
+       if (!tH.b) return null;
+       const zH = TH(HH, (AH => (HH._tempPickingRay || (HH._tempPickingRay = XH.Zero()), YH(HH, BH, LH, AH, HH._tempPickingRay, hH || null), HH._tempPickingRay)), AH, SH, !0);
+       return zH && (zH.ray = GH(HH, BH, LH, rH.e.Identity(), hH || null)), zH
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L897-L904` → after: `L601-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L601-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L601-L603) · [Before (L897-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L897-L904)

```diff
-     function wy(UU, XU, zU, cU, yU) {
-       const QU = {
-         platform: UU,
-         filename: XU,
-         function: "<anonymous>" === zU ? "?" : zU,
-         in_app: Cy(XU)
-       };
-       return Pz(cU) || (QU.lineno = cU), Pz(yU) || (QU.colno = yU), QU
+     function OH(HH, BH, LH, AH, SH, hH, tH) {
+       const zH = TH(HH, ((AH, rH) => (HH._tempPickingRay || (HH._tempPickingRay = XH.Zero()), YH(HH, BH, LH, AH, HH._tempPickingRay, hH || null, !1, rH), HH._tempPickingRay)), AH, SH, !1, tH);
+       return zH && (zH.ray = GH(HH, BH, LH, rH.e.Identity(), hH || null)), zH
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L946-L947` → after: `L606-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L606-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L606-L608) · [Before (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L946-L947)

```diff
-     function vy(UU, XU) {
-       return UU.filename === XU.filename && UU.function === XU.function && UU.module === XU.module && UU.lineno === XU.lineno && UU.colno === XU.colno
+     function bH(HH, BH, LH, AH, SH) {
+       const hH = TH(HH, (LH => (HH._pickWithRayInverseMatrix || (HH._pickWithRayInverseMatrix = rH.e.Identity()), LH.invertToRef(HH._pickWithRayInverseMatrix), HH._cachedRayForTransform || (HH._cachedRayForTransform = XH.Zero()), XH.TransformToRef(BH, HH._pickWithRayInverseMatrix … [truncated]
+       return hH && (hH.ray = BH), hH
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L950-L966` → after: `L611-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L611-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L611-L612) · [Before (L950-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L950-L966)

```diff
-     function Vy(UU) {
-       for (let XU = 1; 10 >= XU; XU++) {
-         const zU = UU.length - 2 * XU;
-         if (0 > zU) break;
-         let cU = !0;
-         for (let yU = 0; XU > yU; yU++)
-           if (!vy(UU[zU + yU], UU[zU + XU + yU])) {
-             cU = !1;
-             break
-           } if (cU) {
-           for (let cU = 0; XU > cU; cU++) UU[zU + cU] = UU[zU + XU + cU];
-           return UU.length = zU + XU, {
-             start: zU,
-             length: XU
-           }
-         }
- ... (1 more removed lines; see GitHub link above)
+     function kH(HH, BH, LH, AH, rH, SH) {
+       return UH(HH, (AH => GH(HH, BH, LH, AH, rH || null)), AH, SH)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L969-L978` → after: `L615-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L615-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L615-L616) · [Before (L969-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L969-L978)

```diff
-     function sy(UU, XU) {
-       const zU = XU.start + XU.length,
-         cU = my(UU, XU);
-       cU && UU.splice(zU + cU === UU.length ? zU : XU.start, cU)
-     }
- 
-     function ny(UU, XU) {
-       let zU = XU.start;
-       for (; zU > 0 && vy(UU[zU - 1], UU[zU - 1 + XU.length]);) zU--;
-       return XU.start - zU
+     function mH(HH, BH, LH, AH) {
+       return UH(HH, (LH => (HH._pickWithRayInverseMatrix || (HH._pickWithRayInverseMatrix = rH.e.Identity()), LH.invertToRef(HH._pickWithRayInverseMatrix), HH._cachedRayForTransform || (HH._cachedRayForTransform = XH.Zero()), XH.TransformToRef(BH, HH._pickWithRayInverseMatrix, HH … [truncated]
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L982-L985` → after: `L620-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L620-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L620-L627) · [Before (L982-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L982-L985)

```diff
-       const zU = XU.start + XU.length;
-       let cU = zU;
-       for (; UU.length > cU && vy(UU[cU], UU[cU - XU.length]);) cU++;
-       return cU - zU
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
+         AH = arguments.length > 3 ? arguments[3] : void 0,
+         SH = arguments.length > 4 ? arguments[4] : void 0;
+       AH || (AH = HH.getWorldMatrix()), BH.length = LH, SH ? BH.origin.Tm(SH) : BH.origin.Tm(HH.position);
+       const hH = rH.l.lu[2];
+       hH.set(0, 0, HH._scene.useRightHandedSystem ? -1 : 1);
+       const tH = rH.l.lu[3];
+       return rH.o.TransformNormalToRef(hH, AH, tH), rH.o.NormalizeToRef(tH, BH.direction), BH
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L989-L1001` → after: `L631-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L631-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L631-L640) · [Before (L989-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L989-L1001)

```diff
-       const zU = XU[0];
-       let cU = UU.length - (zU ? ny(UU, zU) : 0);
-       for (const yU of XU) cU -= my(UU, yU);
-       return cU
-     }
- 
-     function xy(UU, XU, zU) {
-       for (let cU = 0; UU.length > cU; cU++) {
-         const yU = UU[(XU + cU) % UU.length],
-           QU = UU[(zU + cU) % UU.length];
-         if (yU !== QU) return QU > yU
-       }
-       return !1
+       BH && (BH.prototype.getForwardRay = function() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
+           BH = arguments.length > 1 ? arguments[1] : void 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         return oH(this, new XH(rH.o.Zero(), rH.o.Zero(), HH), HH, BH, LH)
+       }, BH.prototype.getForwardRayToRef = function(HH) {
+         return oH(this, HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
+       }), HH && (CH.e._IsPickingAvailable = !0, HH.prototype.createPickingRay = function(HH, BH, LH, AH) {
+         return GH(this, HH, BH, LH, AH, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
+       })
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1003-L1014` → after: `L642-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L642-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L642-L702) · [Before (L1003-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1003-L1014)

```diff
-     var Jy = class {
-         match(UU) {
-           return this.isDOMException(UU) || this.isDOMError(UU)
-         }
-         coerce(UU, XU) {
-           const zU = Wz(UU.stack);
-           return {
-             type: this.getType(UU),
-             value: this.getValue(UU),
-             stack: zU ? UU.stack : void 0,
-             cause: UU.cause ? XU.next(UU.cause) : void 0,
-             synthetic: !1
+     XH._TmpVector3 = (0, SH.d)(6, rH.o.Zero), XH._RayDistant = XH.Zero(), XH._Smallnum = 1e-8, XH._Rayl = 1e9
+   },
+   45032: (HH, BH, LH) => {
+     LH.d(BH, {
+       e: () => SH.E
+     });
+     var AH = LH(41383),
+       rH = LH(41489),
+       SH = LH(45036);
+     let hH = !1;
+     hH || (hH = !0, (0, SH.c)(AH.d, rH.d), AH.d.prototype.createPickingRayToRef = function(HH, BH, LH, AH, rH) {
+       let hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         tH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return (0, SH.k)(this, HH, BH, LH, AH, rH, hH, tH)
+     }, AH.d.prototype.createPickingRayInCameraSpace = function(HH, BH, LH) {
+       return (0, SH.i)(this, HH, BH, LH)
+ ... (45 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1016-L1045` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L704-L705) · [Before (L1016-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1016-L1045)

```diff
-         }
-         getType(UU) {
-           return this.isDOMError(UU) ? "DOMError" : "DOMException"
-         }
-         getValue(UU) {
-           const XU = UU.name || (this.isDOMError(UU) ? "DOMError" : "DOMException");
-           return UU.message ? `${XU}: ${UU.message}` : XU
-         }
-         isDOMException(UU) {
-           return uz(UU, "DOMException")
-         }
-         isDOMError(UU) {
-           return uz(UU, "DOMError")
-         }
-       },
-       jy = class {
- ... (14 more removed lines; see GitHub link above)
+           set shadowFrustumSize(HH) {
+             this._shadowFrustumSize = HH, this.forceProjectionMatrixCompute()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1047-L1062` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L707-L708) · [Before (L1047-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1047-L1062)

```diff
-         }
-         getType(UU) {
-           return UU.name || UU.constructor.name
-         }
-         getMessage(UU, XU) {
-           const zU = UU.message;
-           return String(zU.error && "string" == typeof zU.error.message ? zU.error.message : zU)
-         }
-         getStack(UU) {
-           try {
-             const XU = UU.stacktrace;
-             if ("string" == typeof XU && XU.length > 0) return XU;
-             const zU = UU.stack;
-             return "string" == typeof zU && zU.length > 0 ? zU : void 0
-           } catch (UU) {
-             return
+           get shadowOrthoScale() {
+             return this._shadowOrthoScale
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1064-L1136` → after: `L710-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L710-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L710-L711) · [Before (L1064-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1064-L1136)

```diff
-         }
-       },
-       Ky = class {
-         match(UU) {
-           return !!uz(UU, "ErrorEvent") && (null != UU.error || this._hasUsableMessage(UU))
-         }
-         coerce(UU, XU) {
-           var zU;
-           if (null != UU.error) return XU.apply(UU.error);
-           const cU = XU.apply(UU.message);
-           return ky(ky({}, cU), {}, {
-             stack: null !== (zU = this._buildLocationStack(UU)) && void 0 !== zU ? zU : cU.stack,
-             synthetic: !0
-           })
-         }
-         _hasUsableMessage(UU) {
- ... (57 more removed lines; see GitHub link above)
+           set shadowOrthoScale(HH) {
+             this._shadowOrthoScale = HH, this.forceProjectionMatrixCompute()
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1138-L1147` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L713-L714) · [Before (L1138-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1138-L1147)

```diff
-         }
-         getType(UU) {
-           if (iz(UU)) return UU.constructor.name;
-           const XU = "name" in UU ? UU.name : void 0;
-           return Wz(XU) && !dz(XU) ? XU : "Error"
-         }
-         getValue(UU) {
-           if ("name" in UU && "string" == typeof UU.name) {
-             let XU = `'${UU.name}' captured as exception`;
-             return "message" in UU && "string" == typeof UU.message && (XU += ` with message: '${UU.message}'`), XU
+           get orthoLeft() {
+             return this._orthoLeft
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1149-L1160` → after: `L716-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L716-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L716-L717) · [Before (L1149-L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1149-L1160)

```diff
-           if ("message" in UU && "string" == typeof UU.message) return UU.message;
-           const XU = this.getObjectClassName(UU);
-           return `${XU&&"Object"!==XU?`'${XU}'`:"Object"} captured as exception with keys: ${UQ(UU)}`
-         }
-         isSeverityLevel(UU) {
-           return Wz(UU) && !dz(UU) && hy.indexOf(UU) >= 0
-         }
-         getStack(UU) {
-           try {
-             return Wz(UU.stacktrace) && UU.stacktrace.length > 0 ? UU.stacktrace : Wz(UU.stack) && UU.stack.length > 0 ? UU.stack : void 0
-           } catch (UU) {
-             return
+           set orthoLeft(HH) {
+             this._orthoLeft = HH
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1162-L1175` → after: `L719-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L719-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L719-L720) · [Before (L1162-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1162-L1175)

```diff
-         }
-         getErrorPropertyFromObject(UU) {
-           for (const XU in UU)
-             if ({}.hasOwnProperty.call(UU, XU)) {
-               const zU = UU[XU];
-               if (fz(zU)) return zU
-             }
-         }
-         getObjectClassName(UU) {
-           try {
-             const XU = Object.getPrototypeOf(UU);
-             return XU ? XU.constructor.name : void 0
-           } catch (UU) {
-             return
+           get orthoRight() {
+             return this._orthoRight
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1177-L1190` → after: `L722-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L722-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L722-L723) · [Before (L1177-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1177-L1190)

```diff
-         }
-       },
-       zQ = class {
-         match(UU) {
-           return iz(UU)
-         }
-         coerce(UU, XU) {
-           var zU;
-           const cU = UU.constructor.name;
-           return {
-             type: cU,
-             value: `${cU} captured as exception with keys: ${UQ(UU)}`,
-             stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
-             synthetic: !0
+           set orthoRight(HH) {
+             this._orthoRight = HH
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1192-L1204` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L725-L726) · [Before (L1192-L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1192-L1204)

```diff
-         }
-       },
-       cQ = class {
-         match(UU) {
-           return rz(UU)
-         }
-         coerce(UU, XU) {
-           var zU;
-           return {
-             type: "Error",
-             value: `Primitive value captured as exception: ${String(UU)}`,
-             stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
-             synthetic: !0
+           get orthoTop() {
+             return this._orthoTop
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1206-L1218` → after: `L728-L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L728-L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L728-L729) · [Before (L1206-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1206-L1218)

```diff
-         }
-       },
-       yQ = class {
-         match(UU) {
-           return uz(UU, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(UU)
-         }
-         isCustomEventWrappingRejection(UU) {
-           if (!iz(UU)) return !1;
-           try {
-             const XU = UU.detail;
-             return null != XU && "object" == typeof XU && "reason" in XU
-           } catch (UU) {
-             return !1
+           set orthoTop(HH) {
+             this._orthoTop = HH
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1220-L1267` → after: `L731-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L731-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L731-L732) · [Before (L1220-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1220-L1267)

```diff
-         }
-         coerce(UU, XU) {
-           var zU;
-           const cU = this.getUnhandledRejectionReason(UU);
-           return rz(cU) ? {
-             type: "UnhandledRejection",
-             value: `Non-Error promise rejection captured with value: ${String(cU)}`,
-             stack: null === (zU = XU.syntheticException) || void 0 === zU ? void 0 : zU.stack,
-             synthetic: !0
-           } : XU.apply(cU)
-         }
-         getUnhandledRejectionReason(UU) {
-           try {
-             if ("reason" in UU) return UU.reason;
-             if ("detail" in UU && null != UU.detail && "object" == typeof UU.detail && "reason" in UU.detail) return UU.detail.reason
-           } catch (UU) {}
- ... (32 more removed lines; see GitHub link above)
+           get orthoBottom() {
+             return this._orthoBottom
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1269-L1282` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L734-L735) · [Before (L1269-L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1269-L1282)

```diff
-           try {
-             const UU = JSON.parse(XU);
-             if (!Zz(UU)) return;
-             const zU = UU,
-               cU = zU[QQ],
-               yU = zU[AQ];
-             if (!Wz(cU) || 0 === cU.trim().length) return;
-             if (!Wz(yU) && !Cz(yU)) return;
-             return {
-               step: zU,
-               json: XU
-             }
-           } catch (UU) {
-             return
+           set orthoBottom(HH) {
+             this._orthoBottom = HH
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1284-L1311` → after: `L737-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L737-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L737-L919) · [Before (L1284-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1284-L1311)

```diff
-         }(UU);
-         if (!XU) return;
-         const zU = function(UU) {
-           if ("u" > typeof TextEncoder) return (new TextEncoder).encode(UU).length;
-           const XU = encodeURIComponent(UU);
-           let zU = 0;
-           for (let cU = 0; XU.length > cU; cU++) "%" === XU[cU] ? (zU += 1, cU += 2) : zU += 1;
-           return zU
-         }(XU.json);
-         zU > this._config.max_bytes || (this._entries.push({
-           step: XU.step,
-           bytes: zU
-         }), this._totalBytes += zU, this._trimToMaxBytes())
-       }
-       getAttachable() {
-         return this._entries.map((UU => UU.step))
- ... (12 more removed lines; see GitHub link above)
+           constructor(HH, BH, LH, rH) {
+             super(HH, LH, rH), this._shadowFrustumSize = ((0, AH.k)(this, QH), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, AH.k)(this, WH, !0), this.autoCalcShadowZBounds = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, !1)), this._orthoLeft = ((0, AH.k)(this, vH), ( … [truncated]
+           }
+           getClassName() {
+             return "DirectionalLight"
+           }
+           getTypeID() {
+             return hH.b.LIGHTTYPEID_DIRECTIONALLIGHT
+           }
+           _setDefaultShadowProjectionMatrix(HH, BH, LH) {
+             this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(HH) : this._setDefaultAutoExtendShadowProjectionMatrix(HH, BH, LH)
+           }
+           _setDefaultFixedFrustumShadowProjectionMatrix(HH) {
+             const BH = this.yN().activeCamera;
+             SH.e.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : BH ? BH.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : BH ? BH.maxZ : 1e4, HH, this.yN().Iu().isNDCHalfZRange)
+           }
+ ... (167 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1320-L1325` → after: `L922-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L922-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L922-L924) · [Before (L1320-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1320-L1325)

```diff
-     const NQ = UU => {
-       if ("string" != typeof UU) return UU;
-       try {
-         return JSON.parse(UU)
-       } catch (yU) {
-         return UU
+     class SH {
+       constructor(HH, BH) {
+         this.gradient = HH, this.color = BH
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1332-L1334` → after: `L927-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L927-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L927-L933) · [Before (L1332-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1332-L1334)

```diff
- 
-     function pQ(UU) {
-       return "string" == typeof UU ? UU : void 0
+     class hH {
+       constructor(HH, BH, LH) {
+         this.gradient = HH, this.factor1 = BH, this.factor2 = LH
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1336-L1393` → after: `L935-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L935-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L935-L943) · [Before (L1336-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1336-L1393)

```diff
-     const aQ = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$proce … [truncated]
-       tQ = "NativeGzipValidationError",
-       gQ = UU => UU.length >= 2 && 31 === UU[0] && 139 === UU[1],
-       kQ = (UU, XU) => UU === Dz.GZipJS || XU === Dz.GZipJS || "gzip" === XU,
-       GQ = UU => !(!UU || "object" != typeof UU) && "NotReadableError" === ("name" in UU ? String(UU.name) : "");
-     let BQ;
-     const ZQ = UU => {
-         throw Dy(tQ, `Native gzip produced invalid output: ${UU}`)
-       },
-       RQ = (PQ = nz((function*(UU, XU) {
-         18 > UU.size && ZQ("too-short");
-         const zU = new Uint8Array(yield UU.slice(0, 10).arrayBuffer());
-         gQ(zU) && 8 === zU[2] || ZQ("invalid-header");
-         const cU = new DataView(yield UU.slice(UU.size - 8).arrayBuffer());
-         cU.getUint32(0, !0) !== (UU => {
-           const XU = (() => {
- ... (42 more removed lines; see GitHub link above)
+     class tH {
+       static GetCurrentGradient(HH, BH, LH) {
+         if (BH[0].gradient > HH) return void LH(BH[0], BH[0], 1);
+         for (let rH = 0; rH < BH.length - 1; rH++) {
+           const AH = BH[rH],
+             SH = BH[rH + 1];
+           if (HH >= AH.gradient && HH <= SH.gradient) {
+             return void LH(AH, SH, (HH - AH.gradient) / (SH.gradient - AH.gradient))
+           }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1395-L1396` → after: `L945-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L945-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L945-L947) · [Before (L1395-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1395-L1396)

```diff
-         var cU
-       })), WQ.apply(this, arguments)
+         const AH = BH.length - 1;
+         LH(BH[AH], BH[AH], 1)
+       }
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1398-L1412` → after: `L949-L996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L949-L996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L949-L996) · [Before (L1398-L1412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1398-L1412)

```diff
- 
-     function dQ(UU, XU) {
-       if (null == UU) return {};
-       var zU, cU, yU = function(UU, XU) {
-         if (null == UU) return {};
-         var zU = {};
-         for (var cU in UU)
-           if ({}.hasOwnProperty.call(UU, cU)) {
-             if (XU.includes(cU)) continue;
-             zU[cU] = UU[cU]
-           } return zU
-       }(UU, XU);
-       if (Object.getOwnPropertySymbols) {
-         var QU = Object.getOwnPropertySymbols(UU);
-         for (cU = 0; QU.length > cU; cU++) XU.includes(zU = QU[cU]) || {}.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
+   },
+   39633: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => hH
+     });
+     var AH = LH(37963),
+       rH = LH(38002),
+       SH = LH(39588);
+     class hH {
+       constructor() {
+         this.direction1 = new AH.o(0, 1, 0), this.direction2 = new AH.o(0, 1, 0), this.minEmitBox = new AH.o(-.5, -.5, -.5), this.maxEmitBox = new AH.o(.5, .5, .5)
+       }
+       startDirectionFunction(HH, BH, LH, SH) {
+         const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
+           tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
+           zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
+ ... (32 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1416-L1445` → after: `L999-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L999-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L999-L1053) · [Before (L1416-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1416-L1445)

```diff
-     const LQ = "[redacted]",
-       eQ = /^[A-Za-z0-9+/\n\r]+=*$/,
-       CQ = /^[A-Za-z0-9_-]+={0,2}$/,
-       wQ = /[-_]/,
-       qQ = /^data:[^,\s]*;base64,/i,
-       OQ = /^[A-Za-z0-9+/_-]+={0,2}$/,
-       SQ = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
-       rQ = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
-       uQ = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
-       fQ = /[\s<>"]/,
-       iQ = new RegExp(uQ.source, "i"),
-       HQ = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
-       MQ = new RegExp(`^${HQ.source}`, "i"),
-       vQ = new RegExp(HQ.source, "gi"),
-       VQ = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
-       sQ = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
- ... (14 more removed lines; see GitHub link above)
+   },
+   39580: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => tH,
+       g: () => hH
+     });
+     var AH = LH(37963),
+       rH = LH(38002),
+       SH = LH(39588);
+     class hH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = HH, this.height = BH, this.radiusRange = LH, this.directionRandomizer = rH, this._tempVector = AH.o.Zero()
+ ... (39 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1447-L1449` → after: `L1055-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1055-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1055-L1092) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1447-L1449)

```diff
- 
-     function UA(UU) {
-       return UU.split("&", 129).length > 128
+     class tH extends hH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AH.o(0, 1, 0),
+           SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new AH.o(0, 1, 0);
+         super(HH, BH, LH), this.direction1 = rH, this.direction2 = SH
+       }
+       startDirectionFunction(HH, BH, LH, SH) {
+         const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
+           tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
+           zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
+         SH ? BH.SBH(hH, tH, zH) : AH.o.TransformNormalFromFloatsToRef(hH, tH, zH, HH, BH)
+       }
+       clone() {
+ ... (22 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1451-L1458` → after: `L1094-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1094-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1094-L1145) · [Before (L1451-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1451-L1458)

```diff
- 
-     function XA(UU, XU, zU) {
-       return hQ(UU) || XU.includes(";") && function(UU) {
-         return UU.split(";").some((UU => hQ(UU.split("=", 1)[0])))
-       }(XU) ? LQ : iQ.test(XU) ? zU ? FA(XU, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : LQ : XU
+   },
+   45060: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => ZB
+     });
+     var AH = LH(39627),
+       rH = LH(37997),
+       SH = LH(37963),
+       hH = LH(41427),
+       tH = LH(45062),
+       zH = LH(37989),
+       CH = LH(41561),
+       EH = LH(38074),
+       XH = LH(39633),
+       GH = LH(39588),
+       YH = LH(38002);
+ ... (36 more added lines; see GitHub link above)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1460-L1470` → after: `L1147-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1147-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1147-L1189) · [Before (L1460-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1460-L1470)

```diff
- 
-     function zA(UU, XU) {
-       const zU = new URLSearchParams;
-       let cU = !1,
-         yU = !1;
-       for (const [QU, AU] of new URLSearchParams(UU)) {
-         const UU = oA(QU),
-           FU = oA(AU);
-         cU || (cU = UU !== QU || FU !== AU);
-         const oU = XA(UU, FU, XU);
-         cU || (cU = oU !== FU), yU = hQ(UU) || oU !== FU, zU.append(UU, oU)
+     class QH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = HH, this.radiusRange = BH, this.directionRandomizer = LH
+       }
+       startDirectionFunction(HH, BH, LH, AH) {
+         const rH = LH.position.subtract(HH.getTranslation()).normalize(),
+           hH = (0, YH.RandomRange)(0, this.directionRandomizer),
+           tH = (0, YH.RandomRange)(0, this.directionRandomizer),
+           zH = (0, YH.RandomRange)(0, this.directionRandomizer);
+         rH.x += hH, rH.y += tH, rH.z += zH, rH.normalize(), AH ? BH.Tm(rH) : SH.o.TransformNormalFromFloatsToRef(rH.x, rH.y, rH.z, HH, BH)
+       }
+       startPositionFunction(HH, BH, LH, AH) {
+         const rH = this.radius - (0, YH.RandomRange)(0, this.radius * this.radiusRange),
+ ... (27 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1472-L1475` → after: `L1191-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1191-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1191-L1192) · [Before (L1472-L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1472-L1475)

```diff
-       return {
-         changed: cU,
-         lastFieldSensitive: yU,
-         serialized: zU.toString()
+       parse(HH) {
+         this.radius = HH.radius, this.radiusRange = HH.radiusRange, this.directionRandomizer = HH.directionRandomizer
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1478-L1487` → after: `L1195-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1195-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1195-L1240) · [Before (L1478-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1478-L1487)

```diff
- 
-     function cA(UU, XU) {
-       if (!UU.includes("=")) return {
-         value: yA(UU, XU),
-         lastFieldSensitive: !1
-       };
-       const zU = zA(UU, XU);
-       return {
-         value: zU.changed ? zU.serialized : UU,
-         lastFieldSensitive: zU.lastFieldSensitive
+     class WH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         this.radius = HH, this.radiusRange = BH, this.directionRandomizer = LH
+       }
+       startDirectionFunction(HH, BH, LH, AH) {
+         const rH = LH.position.subtract(HH.getTranslation()).normalize(),
+           hH = (0, YH.RandomRange)(0, this.directionRandomizer),
+           tH = (0, YH.RandomRange)(0, this.directionRandomizer),
+           zH = (0, YH.RandomRange)(0, this.directionRandomizer);
+         rH.x += hH, rH.y += tH, rH.z += zH, rH.normalize(), AH ? BH.Tm(rH) : SH.o.TransformNormalFromFloatsToRef(rH.x, rH.y, rH.z, HH, BH)
+       }
+       startPositionFunction(HH, BH, LH, AH) {
+         const rH = this.radius - (0, YH.RandomRange)(0, this.radius * this.radiusRange),
+ ... (30 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1490-L1495` → after: `L1243-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1243-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1243-L1278) · [Before (L1490-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1490-L1495)

```diff
- 
-     function yA(UU, XU) {
-       return XU ? FA(UU, {
-         allowNestedUrls: !1,
-         stripPunctuation: !0
-       }) : iQ.test(UU) ? LQ : UU
+     class MH extends WH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new SH.o(0, 1, 0),
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0);
+         super(HH), this.direction1 = BH, this.direction2 = LH
+       }
+       startDirectionFunction(HH, BH, LH, AH) {
+         const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
+           hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
+           tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
+         AH ? BH.SBH(rH, hH, tH) : SH.o.TransformNormalFromFloatsToRef(rH, hH, tH, HH, BH)
+       }
+       clone() {
+         const HH = new MH(this.radius, this.direction1, this.direction2);
+         return GH.d.DeepCopy(this, HH), HH
+ ... (20 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1497-L1499` → after: `L1280-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1280-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1280-L1345) · [Before (L1497-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1497-L1499)

```diff
- 
-     function QA(UU, XU, zU) {
-       return "#" === UU ? !XU.fragment && (XU.fragment = !0) : "?" === UU && (XU.fragment ? "=" !== zU && !XU.fragmentQuery && (XU.fragmentQuery = !0) : !XU.query && (XU.query = !0))
+     var xH = LH(39580);
+     class vH {
+       get radius() {
+         return this._radius
+       }
+       set radius(HH) {
+         this._radius = HH, this._buildHeight()
+       }
+       get angle() {
+         return this._angle
+       }
+       set angle(HH) {
+         this._angle = HH, this._buildHeight()
+       }
+       _buildHeight() {
+         0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
+ ... (50 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1501-L1619` → after: `L1347-L1383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1347-L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1347-L1383) · [Before (L1501-L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1501-L1619)

```diff
- 
-     function AA(UU, XU) {
-       var zU;
-       if (UU.length > 8192 && MQ.test(UU)) return LQ;
-       const {
-         address: cU,
-         suffix: yU
-       } = XU.stripPunctuation ? function(UU) {
-         let XU = UU.length;
-         for (; XU > 0 && ".,;:!?)]}'".includes(UU[XU - 1]);) XU--;
-         return {
-           address: UU.slice(0, XU),
-           suffix: UU.slice(XU)
-         }
-       }(UU) : {
-         address: UU,
- ... (103 more removed lines; see GitHub link above)
+     class PH extends vH {
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0),
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0);
+         super(HH, BH), this.direction1 = LH, this.direction2 = AH
+       }
+       startDirectionFunction(HH, BH, LH, AH) {
+         const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
+           hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
+           tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
+         AH ? BH.SBH(rH, hH, tH) : SH.o.TransformNormalFromFloatsToRef(rH, hH, tH, HH, BH)
+       }
+       clone() {
+         const HH = new PH(this.radius, this.angle, this.direction1, this.direction2);
+ ... (21 more added lines; see GitHub link above)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1621-L1630` → after: `L1385-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1385-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1385-L1439) · [Before (L1621-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1621-L1630)

```diff
-     const YA = {}.propertyIsEnumerable;
- 
-     function NA(UU, XU) {
-       try {
-         return aA(UU, XU, {
-           ancestors: new WeakSet,
-           remainingNodes: 1e4
-         }, 0)
-       } catch (UU) {
-         return []
+     class TH {
+       get mesh() {
+         return this._mesh
+       }
+       set mesh(HH) {
+         this._mesh !== HH && (this._mesh = HH, HH ? (this._indices = HH.vrH(), this._positions = HH.getVerticesData(hH.i.PositionKind), this._normals = HH.getVerticesData(hH.i.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
+       }
+       constructor() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         this._indices = null, this._positions = null, this._normals = null, this._storedNormal = SH.o.Zero(), this._mesh = null, this.direction1 = new SH.o(0, 1, 0), this.direction2 = new SH.o(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = HH
+       }
+       startDirectionFunction(HH, BH, LH, AH) {
+         if (this.useMeshNormalsForDirection && this._normals) return void SH.o.TransformNormalToRef(this._storedNormal, HH, BH);
+         const rH = (0, YH.RandomRange)(this.direction1.x, this.direction2.x),
+           hH = (0, YH.RandomRange)(this.direction1.y, this.direction2.y),
+           tH = (0, YH.RandomRange)(this.direction1.z, this.direction2.z);
+ ... (39 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1633-L1670` → after: `L1442-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1442-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1442-L1444) · [Before (L1633-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1633-L1670)

```diff
- 
-     function IA(UU, XU, zU, cU) {
-       if (0 >= zU.remainingNodes) return {
-         stringValue: Xy
-       };
-       if (zU.remainingNodes--, qz(UU)) return {
-         boolValue: UU
-       };
-       if ("bigint" == typeof UU) return function(UU, XU) {
-         const zU = UU.toString(),
-           cU = BigInt("9223372036854775808");
-         return UU >= cU || -cU > UU ? (null == XU || XU.debug(`Attribute ${zU} is outside the int64 range; encoding it as a string`), {
-           stringValue: zU
-         }) : {
-           intValue: zU
-         }
- ... (22 more removed lines; see GitHub link above)
+     class UH {
+       get targetStopDuration() {
+         return this._targetStopDuration
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1672-L1711` → after: `L1446-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1446-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1446-L1508) · [Before (L1672-L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1672-L1711)

```diff
-       if ("string" == typeof UU) return {
-         stringValue: cy(UU)
-       };
-       if ("function" == typeof UU) return {
-         stringValue: "[Function]"
-       };
-       if ("symbol" == typeof UU) return {
-         stringValue: String(UU)
-       };
-       if ("object" == typeof UU && null !== UU) {
-         if (zU.ancestors.has(UU)) return {
-           stringValue: "[Circular]"
-         };
-         if (cU >= 20) return {
-           stringValue: Xy
-         };
- ... (24 more removed lines; see GitHub link above)
+       set targetStopDuration(HH) {
+         this._targetStopDuration !== HH && (this._targetStopDuration = HH)
+       }
+       get isNodeGenerated() {
+         return !1
+       }
+       get noiseTexture() {
+         return this._noiseTexture
+       }
+       set noiseTexture(HH) {
+         this._noiseTexture !== HH && (this._noiseTexture = HH, this._reset())
+       }
+       get attractors() {
+         return this._attractors.slice(0)
+       }
+       addAttractor(HH) {
+ ... (47 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1714-L1715` → after: `L1512-L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1512-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1512-L1513) · [Before (L1714-L1715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1714-L1715)

```diff
-       return {
-         stringValue: cy(String(UU))
+       getDragGradients() {
+         return this._dragGradients
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1717-L1730` → after: `L1515-L1516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1515-L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1515-L1516) · [Before (L1717-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1717-L1730)

```diff
-     }
- 
-     function pA(UU, XU, zU, cU) {
-       const yU = [],
-         QU = Math.min(UU.length, 1e3);
-       let AU = 0;
-       for (; QU > AU && zU.remainingNodes > 0; AU++) try {
-         const QU = AU in UU ? UU[AU] : void 0;
-         if (ez(QU)) continue;
-         yU.push(IA(QU, XU, zU, cU))
-       } catch (UU) {
-         yU.push({
-           stringValue: zy
-         })
+       getLimitVelocityGradients() {
+         return this._limitVelocityGradients
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1732-L1746` → after: `L1518-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1518-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1518-L1606) · [Before (L1732-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1732-L1746)

```diff
-       return UU.length > AU && yU.push({
-         stringValue: Xy
-       }), yU
-     }
- 
-     function aA(UU, XU, zU, cU) {
-       const yU = [];
-       for (const QU in UU)
-         if (YA.call(UU, QU)) {
-           if (!QU) {
-             null == XU || XU.debug("Dropping an attribute with an empty key");
-             continue
-           }
-           if (yU.length >= 1e3 || 0 >= zU.remainingNodes) {
-             null == XU || XU.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
+       getColorGradients() {
+         return this._colorGradients
+       }
+       getSizeGradients() {
+         return this._sizeGradients
+       }
+       getColorRemapGradients() {
+         return this._colorRemapGradients
+       }
+       getAlphaRemapGradients() {
+         return this._alphaRemapGradients
+       }
+       getLifeTimeGradients() {
+         return this._lifeTimeGradients
+       }
+       getAngularSpeedGradients() {
+ ... (73 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1749-L1824` → after: `L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1609) · [Before (L1749-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1749-L1824)

```diff
-           try {
-             const AU = UU[QU];
-             if (Lz(AU) || Pz(AU)) continue;
-             yU.push({
-               key: cy(QU),
-               value: IA(AU, XU, zU, cU)
-             })
-           } catch (UU) {
-             yU.push({
-               key: cy(QU),
-               value: {
-                 stringValue: zy
-               }
-             })
-           }
-         } return yU
- ... (60 more removed lines; see GitHub link above)
+           LH++
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1835-L1857` → after: `L1612-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1612-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1612-L1614) · [Before (L1835-L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1835-L1857)

```diff
-     }
- 
-     function PA(UU, XU, zU, cU) {
-       const yU = UU.level || "info",
-         {
-           text: QU,
-           number: AU
-         } = BA[yU] || ZA,
-         FU = function() {
-           let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
-           return String(UU) + "000000"
-         }(Cz(cU) ? cU : void 0),
-         oU = {};
-       XU.distinctId && (oU.posthogDistinctId = XU.distinctId), XU.sessionId && (oU.sessionId = XU.sessionId), XU.windowId && (oU["window.id"] = XU.windowId), ez(XU.sessionStartTimestamp) || (oU.sessionStartTimestamp = String(XU.sessionStartTimestamp)), ez(XU.lastActivityTimestamp … [truncated]
-       const DU = ky({}, oU),
-         EU = UU.attributes;
- ... (7 more removed lines; see GitHub link above)
+       _removeGradientAndTexture(HH, BH, LH) {
+         if (!BH) return this;
+         let AH = 0;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1859-L1863` → after: `L1616-L1618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1616-L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1616-L1618) · [Before (L1859-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1859-L1863)

```diff
-           let UU;
-           try {
-             UU = EU[zU]
-           } catch (XU) {
-             UU = zy
+           if (rH.gradient === HH) {
+             BH.splice(AH, 1);
+             break
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1865-L1870` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1620) · [Before (L1865-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1865-L1870)

```diff
-           Object.defineProperty(DU, zU, {
-             value: UU,
-             enumerable: !0,
-             writable: !0,
-             configurable: !0
-           })
+           AH++
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1908` → after: `L1625-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1625-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1625-L1632) · [Before (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1908)

```diff
-         this._onFire = UU, this._firesAt = 0
+         this.animations = [], this.renderingGroupId = 0, this.emitter = SH.o.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, t … [truncated]
+       }
+       createPointEmitter(HH, BH) {
+         const LH = function(HH, BH) {
+           const LH = new uH;
+           return LH.direction1 = HH, LH.direction2 = BH, LH
+         }(HH, BH);
+         return this.particleEmitterType = LH, LH
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1910-L1911` → after: `L1634-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1634-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1634-L1638) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1910-L1911)

```diff
-       get pending() {
-         return !!this._timer
+       createHemisphericEmitter() {
+         const HH = function() {
+           return new QH(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
+         return this.particleEmitterType = HH, HH
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1913-L1916` → after: `L1640-L1644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1640-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1640-L1644) · [Before (L1913-L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1913-L1916)

```diff
-       arm(UU) {
-         this.clear(), this._firesAt = Date.now() + UU, this._timer = Ny((() => {
-           this._timer = void 0, this._onFire()
-         }), UU)
+       createSphereEmitter() {
+         const HH = function() {
+           return new WH(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
+         return this.particleEmitterType = HH, HH
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1918-L1919` → after: `L1646-L1682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1646-L1682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1646-L1682) · [Before (L1918-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1918-L1919)

```diff
-       armNoEarlierThan(UU) {
-         this._timer && Date.now() + UU <= this._firesAt || this.arm(UU)
+       createDirectedSphereEmitter() {
+         const HH = function() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+             BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new SH.o(0, 1, 0),
+             LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0);
+           return new MH(HH, BH, LH)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new SH.o(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0));
+         return this.particleEmitterType = HH, HH
+       }
+       createCylinderEmitter() {
+         const HH = function() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+             BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+             LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+             AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+           return new xH.g(HH, BH, LH, AH)
+ ... (21 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1921-L1922` → after: `L1684-L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1684-L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1684-L1702) · [Before (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1921-L1922)

```diff
-       clear() {
-         this._timer && (clearTimeout(this._timer), this._timer = void 0)
+       createDirectedConeEmitter() {
+         const HH = function() {
+           let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+             BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
+             LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0),
+             AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new SH.o(0, 1, 0);
+           return new PH(HH, BH, LH, AH)
+         }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SH.o(0, 1, 0), arguments.length > 3 && void 0 !== argum … [truncated]
+         return this.particleEmitterType = HH, HH
+       }
+       createBoxEmitter(HH, BH, LH, AH) {
+         const rH = new XH.b;
+         return this.particleEmitterType = rH, this.direction1 = HH, this.direction2 = BH, this.minEmitBox = LH, this.maxEmitBox = AH, rH
+       }
+       createMeshEmitter() {
+         const HH = function() {
+ ... (3 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1935-L1943` → after: `L1705-L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1705-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1705-L1708) · [Before (L1935-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1935-L1943)

```diff
-     var wA = class {
-       constructor(UU, XU, zU, cU, yU) {
-         let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
-           AU = arguments.length > 6 ? arguments[6] : void 0;
-         var FU;
-         this._instance = UU, this._config = XU, this._logger = zU, this._getContext = cU, this._onReady = yU, this._waitForStoragePersist = QU, this._scopeName = AU, this._flushTimer = new LA((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance … [truncated]
-       }
-       clearQueue() {
-         this._queueGeneration++, this._instance.setPersistedProperty(oz.LogsQueue, [])
+     UH.BLENDMODE_ONEONE = 0, UH.BLENDMODE_STANDARD = 1, UH.BLENDMODE_ADD = 2, UH.BLENDMODE_MULTIPLY = 3, UH.BLENDMODE_MULTIPLYADD = 4, UH.BLENDMODE_SUBTRACT = -1;
+     class VH {
+       constructor() {
+         this.attachedSubEmitters = null, this.currentColor1 = new EH.g(0, 0, 0, 0), this.currentColor2 = new EH.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVeloci … [truncated]
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1946` → after: `L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1711) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1946)

```diff
-         this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
+         this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoor … [truncated]
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1948-L1949` → after: `L1713-L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1713-L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1713-L1716) · [Before (L1948-L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1948-L1949)

```diff
-       onReconnect() {
-         this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
+     }
+     class OH {
+       constructor(HH) {
+         this.particleSystem = HH, this.position = SH.o.Zero(), this.direction = SH.o.Zero(), this.color = new EH.g(0, 0, 0, 0), this.colorStep = new EH.g(0, 0, 0, 0), this.initialColor = new EH.g(0, 0, 0, 0), this.colorDead = new EH.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, … [truncated]
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1951-L1977` → after: `L1718-L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1718-L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1718-L1719) · [Before (L1951-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1951-L1977)

```diff
-       captureLog(UU, XU) {
-         var zU;
-         if (this._instance.isDisabled) return;
-         if (this._instance.optedOut) return;
-         if (!(null == UU ? void 0 : UU.body)) return;
-         const cU = this._runBeforeSend(UU);
-         if (null === cU) return;
-         if (!cU.body) return void this._logger.info("Log was rejected in beforeSend function");
-         if (!this._checkRateLimit()) return;
-         const yU = {
-           record: PA(cU, null !== (zU = null == XU ? void 0 : XU.context) && void 0 !== zU ? zU : this._getContext(), this._logger, null == XU ? void 0 : XU.occurredAtMs)
-         };
-         this._onReady((() => this._enqueue(yU)))
-       }
-       _runBeforeSend(UU) {
-         const XU = this._config.beforeSend;
- ... (11 more removed lines; see GitHub link above)
+       _updateCellInfoFromSystem() {
+         this.cellIndex = this.particleSystem.startSpriteCellID
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L1979-L2015` → after: `L1721-L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1721-L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1721-L1734) · [Before (L1979-L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L1979-L2015)

```diff
-       _checkRateLimit() {
-         if (void 0 === this._maxLogsPerInterval) return !0;
-         const UU = Date.now(),
-           XU = UU - this._intervalWindowStart;
-         return this._rateCapWindowMs > XU && XU >= 0 || (this._intervalWindowStart = UU, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`capture … [truncated]
-       }
-       flush() {
-         var UU = this;
-         return nz((function*() {
-           if (!UU._instance.isDisabled) return UU._flushPromise || (UU._flushPromise = UU._flushInner().finally((() => {
-             UU._flushPromise = null
-           }))), UU._flushPromise
-         }))()
-       }
-       _flushInner() {
-         var UU = this;
- ... (21 more removed lines; see GitHub link above)
+       updateCellIndex() {
+         let HH = this.age,
+           BH = this.particleSystem.spriteCellChangeSpeed;
+         this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === BH ? (BH = 1, HH = this._properties.randomCellOffset) : HH += this._properties.randomCellOffset);
+         const LH = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
+         let AH;
+         AH = this._properties.initialSpriteCellLoop ? (0, YH.Clamp)(HH * BH % this.lifeTime / this.lifeTime) : (0, YH.Clamp)(HH * BH / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + AH * LH | 0
+       }
+       _inheritParticleInfoToSubEmitter(HH) {
+         if (HH.particleSystem.emitter.position) {
+           const BH = HH.particleSystem.emitter;
+           if (BH.position.Tm(this.position), HH.inheritDirection) {
+             const HH = SH.l.lu[0];
+             this.direction.normalizeToRef(HH), BH.setDirection(HH, 0, Math.PI / 2)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2017` → after: `L1736-L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1736-L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1736-L1739) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2017)

```diff
-         }))()
+         } else {
+           HH.particleSystem.emitter.Tm(this.position)
+         }
+         this.direction.scaleToRef(HH.inheritedVelocityAmount / 2, SH.l.lu[0]), HH.particleSystem._inheritedVelocityOffset.Tm(SH.l.lu[0])
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2019-L2026` → after: `L1741-L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1741-L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1741-L1743) · [Before (L2019-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2019-L2026)

```diff
-       _persistQueueAdvance(UU) {
-         var XU = this;
-         return nz((function*() {
-           var zU;
-           const cU = Math.max(0, UU - XU._evictedSinceAdvance),
-             yU = null !== (zU = XU._instance.getPersistedProperty(oz.LogsQueue)) && void 0 !== zU ? zU : [];
-           XU._instance.setPersistedProperty(oz.LogsQueue, yU.slice(cU)), yield XU._waitForStoragePersist()
-         }))()
+       _inheritParticleInfoToSubEmitters() {
+         if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
+           for (const HH of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(HH)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2028-L2029` → after: `L1745-L1746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1745-L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1745-L1746) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2028-L2029)

```diff
-       _buildResourceAttributes() {
-         return WA(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
+       _reset() {
+         this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = OH._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2031-L2071` → after: `L1748-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1748-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1748-L1749) · [Before (L2031-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2031-L2071)

```diff
-       _enqueue(UU) {
-         var XU;
-         if (this._instance.optedOut) return;
-         const zU = null !== (XU = this._instance.getPersistedProperty(oz.LogsQueue)) && void 0 !== XU ? XU : [];
-         this._maxQueueSize > zU.length || (zU.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), zU.push(UU), this._instance.setPersistedProperty(oz.LogsQueue, zU), this._maxBufferSize > zU.length || this._retryAfter.isOpen()  … [truncated]
-       }
-       _armFlushTimer() {
-         this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
-       }
-       _nextFlushDelay() {
-         return Math.max(CA(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
-       }
-       _hasQueuedRecords() {
-         const UU = this._instance.getPersistedProperty(oz.LogsQueue);
-         return !!UU && UU.length > 0
-       }
- ... (25 more removed lines; see GitHub link above)
+       copyTo(HH) {
+         HH.position.Tm(this.position), this._properties.initialDirection ? HH._properties.initialDirection ? HH._properties.initialDirection.Tm(this._properties.initialDirection) : HH._properties.initialDirection = this._properties.initialDirection.clone() : HH._properties.initia … [truncated]
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2079-L2088` → after: `L1752-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1752-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1752-L1756) · [Before (L2079-L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2079-L2088)

```diff
- 
-     function SA(UU, XU, zU, cU) {
-       let yU = "";
-       return cU && (yU = Object.keys(cU).sort().map((UU => `${JSON.stringify(UU)}:${JSON.stringify(cU[UU])}`)).join(",")), `${UU}\0${XU}\0${null!=zU?zU:""}\0${yU}`
-     }
-     var rA = class {
-       constructor(UU, XU, zU) {
-         this._instance = UU, this._config = XU, this._logger = zU, this._series = new Map, this._flushTimer = new LA((() => this.flush().catch((UU => {
-           this._logger.error("Metrics flush failed:", UU)
-         })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new Ay, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
+     OH._Count = 0;
+     var bH = LH(42398);
+     class kH {
+       get currentFrame() {
+         return this._currentFrame
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2090-L2099` → after: `L1758-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1758-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1758-L1759) · [Before (L2090-L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2090-L2099)

```diff
-       count(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           zU = arguments.length > 2 ? arguments[2] : void 0;
-         this._capture({
-           name: UU,
-           type: "count",
-           value: XU,
-           unit: null == zU ? void 0 : zU.unit,
-           attributes: null == zU ? void 0 : zU.attributes
-         })
+       get _evaluatedFrom() {
+         return this._playbackFrom
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2101-L2108` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1761-L1762) · [Before (L2101-L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2101-L2108)

```diff
-       gauge(UU, XU, zU) {
-         this._capture({
-           name: UU,
-           type: "gauge",
-           value: XU,
-           unit: null == zU ? void 0 : zU.unit,
-           attributes: null == zU ? void 0 : zU.attributes
-         })
+       get _evaluatedTo() {
+         return this._playbackTo
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2110-L2117` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1764-L1765) · [Before (L2110-L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2110-L2117)

```diff
-       histogram(UU, XU, zU) {
-         this._capture({
-           name: UU,
-           type: "histogram",
-           value: XU,
-           unit: null == zU ? void 0 : zU.unit,
-           attributes: null == zU ? void 0 : zU.attributes
-         })
+       get _evaluatedProgress() {
+         return this._playbackProgress
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2119-L2132` → after: `L1767-L1768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1767-L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1767-L1768) · [Before (L2119-L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2119-L2132)

```diff
-       flush() {
-         var UU = this;
-         const XU = this._flushPromise,
-           zU = function() {
-             var zU = nz((function*() {
-               XU && (yield XU.catch((() => {}))), yield UU._doFlush()
-             }));
-             return function() {
-               return zU.apply(this, arguments)
-             }
-           }()().finally((() => {
-             this._flushPromise === zU && (this._flushPromise = null)
-           }));
-         return this._flushPromise = zU, zU
+       get _evaluatedSyncRoot() {
+         return this._playbackSyncRoot
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2134-L2137` → after: `L1770-L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1770-L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1770-L1771) · [Before (L2134-L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2134-L2137)

```diff
-       drainWindow() {
-         if (0 === this._series.size) return null;
-         const UU = this._series;
-         return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(UU)
+       get _evaluatedJump() {
+         return this._playbackJumped
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2139-L2167` → after: `L1773-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1773-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1773-L1774) · [Before (L2139-L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2139-L2167)

```diff
-       reset() {
-         this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Se … [truncated]
-       }
-       _capture(UU) {
-         if (this._instance.isDisabled || this._instance.optedOut) return;
-         const XU = this._runBeforeSend(UU);
-         if (null === XU) return;
-         if (!XU.name || "string" != typeof XU.name) return void this._logger.warn("Dropping metric with empty name");
-         if ("number" != typeof XU.value || !Number.isFinite(XU.value)) return void this._logger.warn(`Dropping metric '${XU.name}': value must be a finite number`);
-         if ("count" === XU.type && 0 > XU.value) return void this._logger.warn(`Dropping count '${XU.name}': counters are monotonic, value must be >= 0`);
-         let zU, cU;
-         try {
-           zU = XU.attributes ? ky({}, XU.attributes) : void 0, cU = SA(XU.type, XU.name, XU.unit, zU)
-         } catch (UU) {
-           return void this._logger.warn(`Dropping metric '${XU.name}': attributes could not be serialized`, UU)
-         }
- ... (13 more removed lines; see GitHub link above)
+       get weight() {
+         return this._weight
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2169-L2170` → after: `L1776-L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1776-L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1776-L1777) · [Before (L2169-L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2169-L2170)

```diff
-       _admitNewSeries() {
-         return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribut … [truncated]
+       get currentValue() {
+         return this._currentValue
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2172-L2197` → after: `L1779-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1779-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1779-L1780) · [Before (L2172-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2172-L2197)

```diff
-       _fold(UU, XU) {
-         switch (UU.type) {
-           case "count":
-             var zU;
-             UU.total = (null !== (zU = UU.total) && void 0 !== zU ? zU : 0) + XU;
-             break;
-           case "gauge":
-             UU.last = XU;
-             break;
-           case "histogram": {
-             UU.hist || (UU.hist = {
-               count: 0,
-               sum: 0,
-               min: XU,
-               max: XU,
-               bucketCounts: new Array(qA.length + 1).fill(0)
- ... (10 more removed lines; see GitHub link above)
+       get targetPath() {
+         return this._targetPath
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2199-L2209` → after: `L1782-L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1782-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1782-L1798) · [Before (L2199-L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2199-L2209)

```diff
-       _runBeforeSend(UU) {
-         const XU = this._config.beforeSend;
-         if (!XU) return UU;
-         const zU = Gz(XU) ? XU : [XU];
-         let cU = UU;
-         for (const yU of zU) try {
-           const UU = yU(cU);
-           if (!UU) return this._logger.info("Metric was rejected in beforeSend function"), null;
-           cU = UU
-         } catch (UU) {
-           return this._logger.error("Error in beforeSend function for metric:", UU), null
+       get target() {
+         return this._currentActiveTarget
+       }
+       get isAdditive() {
+         return this._host && this._host.isAdditive
+       }
+       constructor(HH, BH, LH, AH) {
+         if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget  … [truncated]
+             key: 0,
+             repeatCount: 0,
+             mB: this._getCorrectLoopMode()
+           }, this._animation.dataType === bH.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = SH.e.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
+           const HH = {
+             frame: 0,
+             value: this._keys[0].value
+           };
+ ... (1 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2211` → after: `L1800-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1800-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1800-L1833) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2211)

```diff
-         return cU
+         if (this.fX instanceof Array) {
+           let HH = 0;
+           for (const BH of this.fX) this._preparePath(BH, HH), this._getOriginalValues(HH), HH++;
+           this._targetIsArray = !0
+         } else this._preparePath(this.fX), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
+         const rH = BH.getEvents();
+         if (rH && rH.length > 0)
+           for (const SH of rH) this._events.push(SH._clone());
+         this._enableBlending = HH && HH.animationPropertiesOverride ? HH.animationPropertiesOverride.enableBlending : this._animation.enableBlending
+       }
+       _preparePath(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const LH = this._animation.targetPropertyPath;
+         if (LH.length > 1) {
+           let AH = HH;
+           for (let HH = 0; HH < LH.length - 1; HH++) {
+ ... (18 more added lines; see GitHub link above)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2213-L2235` → after: `L1835-L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1835-L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1835-L1861) · [Before (L2213-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2213-L2235)

```diff
-       _armFlushTimer() {
-         this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
-       }
-       _nextFlushDelay() {
-         return Math.max(CA(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
-       }
-       _doFlush() {
-         var UU = this;
-         return nz((function*() {
-           if (UU._flushTimer.clear(), 0 === UU._series.size) return;
-           const XU = UU._series;
-           UU._series = new Map, UU._seriesCapWarned = !1, UU._typeByName = new Map, UU._typeCollisionWarned = new Set;
-           const zU = UU._generation,
-             cU = yield UU._instance._sendMetricsBatch(UU._buildPayload(XU));
-           if (zU === UU._generation) switch (UU._retryAfter.record(cU), "retry-later" === cU.kind ? (UU._consecutiveFlushFailures++, UU._flushJitter = eA()) : (UU._consecutiveFlushFailures = 0, UU._flushJitter = 1), UU._flushTimer.pending && UU._flushTimer.arm(UU._nextFlushDelay( … [truncated]
-             case "ok":
- ... (7 more removed lines; see GitHub link above)
+       isStopped() {
+         return this._stopped
+       }
+       dispose() {
+         const HH = this._animation.runtimeAnimations.indexOf(this);
+         HH > -1 && this._animation.runtimeAnimations.splice(HH, 1)
+       }
+       setValue(HH, BH) {
+         if (this._targetIsArray)
+           for (let LH = 0; LH < this.fX.length; LH++) {
+             const AH = this.fX[LH];
+             this._setValue(AH, this._activeTargets[LH], HH, BH, LH)
+           } else this._setValue(this.fX, this._directTarget, HH, BH, 0)
+       }
+       _getOriginalValues() {
+         let HH, BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+ ... (11 more added lines; see GitHub link above)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2310-L2318` → after: `L1864-L1967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1864-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1864-L1967) · [Before (L2310-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2310-L2318)

```diff
-         return Array.from(zU.values())
-       }
-       _mergeWindowBack(UU) {
-         for (const [cU, yU] of UU) {
-           const UU = this._series.get(cU);
-           if (UU) switch (UU.windowStartMs = Math.min(UU.windowStartMs, yU.windowStartMs), UU.type) {
-             case "count":
-               var XU, zU;
-               UU.total = (null !== (XU = UU.total) && void 0 !== XU ? XU : 0) + (null !== (zU = yU.total) && void 0 !== zU ? zU : 0);
+         HH = LH.getLocalMatrix && "_matrix" === this._targetPath ? LH.getLocalMatrix() : LH[this._targetPath], HH && HH.clone ? this._originalValue[BH] = HH.clone() : this._originalValue[BH] = HH
+       }
+       _registerTargetForLateAnimationBinding(HH, BH) {
+         const LH = HH.target;
+         this._scene._registeredForLateAnimationBindings.pushNoDuplicate(LH), LH._lateAnimationHolders || (LH._lateAnimationHolders = {}), LH._lateAnimationHolders[HH.targetPath] || (LH._lateAnimationHolders[HH.targetPath] = {
+           totalWeight: 0,
+           totalAdditiveWeight: 0,
+           animations: [],
+           additiveAnimations: [],
+           originalValue: BH
+         }), HH.isAdditive ? (LH._lateAnimationHolders[HH.targetPath].additiveAnimations.push(HH), LH._lateAnimationHolders[HH.targetPath].totalAdditiveWeight += HH.weight) : (LH._lateAnimationHolders[HH.targetPath].animations.push(HH), LH._lateAnimationHolders[HH.targetPath].tota … [truncated]
+       }
+       _setValue(HH, BH, LH, AH, rH) {
+         const hH = this._scene._animationWrites,
+           tH = this._scene._animationWriteCount++;
+         let zH = hH[tH];
+ ... (88 more added lines; see GitHub link above)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2320` → after: `L1969-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1969-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1969-L1970) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2320)

```diff
-             case "gauge":
+             case bH.b.ANIMATIONTYPE_QUATERNION:
+               SH = bH.m;
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2322-L2408` → after: `L1972-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L1972-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L1972-L2014) · [Before (L2322-L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2322-L2408)

```diff
-             case "histogram":
-               if (yU.hist)
-                 if (UU.hist) {
-                   UU.hist.count += yU.hist.count, UU.hist.sum += yU.hist.sum, UU.hist.min = Math.min(UU.hist.min, yU.hist.min), UU.hist.max = Math.max(UU.hist.max, yU.hist.max);
-                   for (let XU = 0; UU.hist.bucketCounts.length > XU; XU++) UU.hist.bucketCounts[XU] += yU.hist.bucketCounts[XU]
-                 } else UU.hist = yU.hist
-           } else this._admitNewSeries() && this._series.set(cU, yU)
-         }
-       }
-     };
-     const uA = function(UU) {
-         let {
-           debugEnabled: XU
-         } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-         const zU = {
-           _log(zU) {
- ... (71 more removed lines; see GitHub link above)
+             case bH.b.ANIMATIONTYPE_VECTOR3:
+               SH = bH.w;
+               break;
+             case bH.b.ANIMATIONTYPE_VECTOR2:
+               SH = bH.t;
+               break;
+             case bH.b.ANIMATIONTYPE_SIZE:
+               SH = bH.p;
+               break;
+             case bH.b.ANIMATIONTYPE_COLOR3:
+               SH = bH.g;
+               break;
+             case bH.b.ANIMATIONTYPE_COLOR4:
+               SH = bH.k
+           }
+           const QH = this._host ? this._host.syncRoot : null;
+ ... (27 more added lines; see GitHub link above)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2411-L2449` → after: `L2018-L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2018-L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2018-L2025) · [Before (L2411-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2411-L2449)

```diff
-       },
-       nA = function(UU) {
-         const XU = {};
-         return MA(UU, (function(UU, zU) {
-           (Wz(UU) && UU.length > 0 || Cz(UU)) && (XU[zU] = UU)
-         })), XU
-       };
- 
-     function mA(UU) {
-       const XU = ky({}, UU);
-       for (const zU of ["name", "message", "stack", "cause", "errors"]) try {
-         zU in UU && (XU[zU] = UU[zU])
-       } catch (UU) {}
-       return XU
-     }
-     const lA = ["herokuapp.com", "vercel.app", "netlify.app"];
- ... (23 more removed lines; see GitHub link above)
+         const GH = hH._interpolate(zH, this._animationState);
+         if (this.setValue(GH, SH), EH.length)
+           for (let YH = 0; YH < EH.length; YH++)
+             if (XH >= 0 && zH >= EH[YH].frame && EH[YH].frame >= BH || XH < 0 && zH <= EH[YH].frame && EH[YH].frame <= BH) {
+               const HH = EH[YH];
+               HH.isDone || (HH.onlyOnce && (EH.splice(YH, 1), YH--), HH.isDone = !0, HH.action(zH))
+             } return CH || (this._stopped = !0), CH
+       }
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2451-L2463` → after: `L2027-L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2027-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2027-L2030) · [Before (L2451-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2451-L2463)

```diff
-     const KA = UU => {
-       if (hX) {
-         try {
-           const XU = UU + "=",
-             zU = hX.cookie.split(";").filter((UU => UU.length));
-           for (let UU = 0; zU.length > UU; UU++) {
-             let cU = zU[UU];
-             for (;
-               " " == cU.charAt(0);) cU = cU.substring(1, cU.length);
-             if (0 === cU.indexOf(XU)) return decodeURIComponent(cU.substring(XU.length, cU.length))
-           }
-         } catch (UU) {}
-         return null
+     var mH = LH(41190);
+     class oH {
+       get syncRoot() {
+         return this._syncRoot
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2465-L2490` → after: `L2032-L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2032-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2032-L2046) · [Before (L2465-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2465-L2490)

```diff
-     };
-     Math.trunc || (Math.trunc = function(UU) {
-       return 0 > UU ? Math.ceil(UU) : Math.floor(UU)
-     }), Number.isInteger || (Number.isInteger = function(UU) {
-       return Cz(UU) && isFinite(UU) && Math.floor(UU) === UU
-     });
-     var bA = class UU {
-         constructor(UU) {
-           if (this.bytes = UU, 16 !== UU.length) throw new TypeError("not 128-bit length")
-         }
-         static fromFieldsV7(XU, zU, cU, yU) {
-           if (!Number.isInteger(XU) || !Number.isInteger(zU) || !Number.isInteger(cU) || !Number.isInteger(yU) || 0 > XU || 0 > zU || 0 > cU || 0 > yU || XU > 0xffffffffffff || zU > 4095 || cU > 1073741823 || yU > 4294967295) throw new RangeError("invalid field value");
-           const QU = new Uint8Array(16);
-           return QU[0] = XU / Math.pow(2, 40), QU[1] = XU / Math.pow(2, 32), QU[2] = XU / Math.pow(2, 24), QU[3] = XU / Math.pow(2, 16), QU[4] = XU / 256, QU[5] = XU, QU[6] = 112 | zU >>> 8, QU[7] = zU, QU[8] = 128 | cU >>> 24, QU[9] = cU >>> 16, QU[10] = cU >>> 8, QU[11] = cU, Q … [truncated]
-         }
-         toString() {
- ... (10 more removed lines; see GitHub link above)
+       get masterFrame() {
+         return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
+       }
+       get weight() {
+         return this._weight
+       }
+       set weight(HH) {
+         this._weight = -1 !== HH ? Math.min(Math.max(HH, 0), 1) : -1
+       }
+       get speedRatio() {
+         return this._speedRatio
+       }
+       set speedRatio(HH) {
+         for (let BH = 0; BH < this._runtimeAnimations.length; BH++) {
+           this._runtimeAnimations[BH]._prepareForSpeedRatioChange(HH)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2492-L2497` → after: `L2048-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2048-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2048-L2081) · [Before (L2492-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2492-L2497)

```diff
-         compareTo(UU) {
-           for (let XU = 0; 16 > XU; XU++) {
-             const zU = this.bytes[XU] - UU.bytes[XU];
-             if (0 !== zU) return Math.sign(zU)
-           }
-           return 0
+         this._speedRatio = HH, null !== this._goToFrame && this.goToFrame(this._goToFrame)
+       }
+       get elapsedTime() {
+         return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
+       }
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
+           SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+           tH = arguments.length > 6 ? arguments[6] : void 0,
+           zH = arguments.length > 7 ? arguments[7] : void 0,
+           CH = arguments.length > 8 ? arguments[8] : void 0,
+           EH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+           XH = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
+         this.target = BH, this.fromFrame = LH, this.toFrame = AH, this.loopAnimation = SH, this.onAnimationEnd = tH, this.onAnimationLoop = CH, this.isAdditive = EH, this.playOrder = XH, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._ … [truncated]
+ ... (18 more added lines; see GitHub link above)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2499-L2508` → after: `L2083-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2083-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2083-L2144) · [Before (L2499-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2499-L2508)

```diff
-       },
-       TA = class {
-         generate() {
-           const UU = this.generateOrAbort();
-           if (!Pz(UU)) return UU;
-           {
-             this._timestamp = 0;
-             const UU = this.generateOrAbort();
-             if (Pz(UU)) throw new Error("Could not generate UUID after timestamp reset");
-             return UU
+       }
+       getAnimationByTargetProperty(HH) {
+         const BH = this._runtimeAnimations;
+         for (let LH = 0; LH < BH.length; LH++)
+           if (BH[LH].animation.targetProperty === HH) return BH[LH].animation;
+         return null
+       }
+       getRuntimeAnimationByTargetProperty(HH) {
+         const BH = this._runtimeAnimations;
+         for (let LH = 0; LH < BH.length; LH++)
+           if (BH[LH].animation.targetProperty === HH) return BH[LH];
+         return null
+       }
+       reset() {
+         const HH = this._runtimeAnimations;
+         for (let BH = 0; BH < HH.length; BH++) HH[BH].reset(!0);
+ ... (46 more added lines; see GitHub link above)
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2510-L2519` → after: `L2146-L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2146-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2146-L2152) · [Before (L2510-L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2510-L2519)

```diff
-         }
-         generateOrAbort() {
-           const UU = (() => {
-             const UU = Date.now();
-             return Cz(UU) && isFinite(UU) ? Math.min(Math.max(Math.floor(UU), 0), 0xffffffffffff) : 0
-           })();
-           if (UU > this._timestamp) this._timestamp = UU, this._resetCounter();
-           else {
-             if (this._timestamp >= UU + 1e4) return;
-             this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
+         } else {
+           const HH = this._scene._activeAnimatables.indexOf(this);
+           if (HH > -1) {
+             LH || this._scene._activeAnimatables.splice(HH, 1);
+             const BH = this._runtimeAnimations;
+             for (let HH = 0; HH < BH.length; HH++) BH[HH].dispose();
+             this._runtimeAnimations.length = 0, AH || this._raiseOnAnimationEnd()
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2540-L2541` → after: `L2156-L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2156-L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2156-L2161) · [Before (L2540-L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2540-L2541)

```diff
-       constructor() {
-         this._buffer = new Uint32Array(8), this._cursor = 1 / 0
+       async waitAsync() {
+         return await new Promise((HH => {
+           this.onAnimationEndObservable.add((() => {
+             HH(this)
+           }), void 0, void 0, this, !0)
+         }))
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2543-L2565` → after: `L2163-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2163-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2163-L2168) · [Before (L2543-L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2543-L2565)

```diff
-     };
-     let XF;
-     const zF = () => cF().toString(),
-       cF = () => (XF || (XF = new TA)).generate();
-     let yF = "";
-     const QF = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
-     let AF = null;
-     const FF = {
-       _is_supported() {
-         if (!Lz(AF)) return AF;
-         if (AF = !1, hX) try {
-           const UU = `__ph_cookie_support_${zF()}`;
-           FF._set(UU, "xyz"), AF = '"xyz"' === KA(UU), FF._remove(UU)
-         } catch (cU) {
-           AF = !1
-         }
- ... (7 more removed lines; see GitHub link above)
+       _animate(HH) {
+         if (this.oX) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = HH), !0;
+         if (null === this._localDelayOffset ? (this._localDelayOffset = HH, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += HH - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.sp … [truncated]
+         this._previousWeight = this._weight;
+         let BH = !1;
+         const LH = this._runtimeAnimations;
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2567-L2613` → after: `L2170-L2172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2170-L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2170-L2172) · [Before (L2567-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2567-L2613)

```diff
-         try {
-           XU = JSON.parse(FF._get(UU)) || {}
-         } catch (UU) {}
-         return XU
-       },
-       _set(UU, XU, zU, cU, yU) {
-         if (!hX) return !1;
-         try {
-           let QU = "",
-             AU = "";
-           const FU = function(UU, XU) {
-             if (XU) {
-               let XU = function(UU) {
-                 let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hX;
-                 if (yF) return yF;
-                 if (!XU) return "";
- ... (31 more removed lines; see GitHub link above)
+         for (AH = 0; AH < LH.length; AH++) {
+           const rH = LH[AH].animate(HH - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
+           BH = BH || rH
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2615-L2620` → after: `L2174-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2174-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2174-L2177) · [Before (L2615-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2615-L2620)

```diff
-       },
-       _remove(UU, XU) {
-         if ((null == hX ? void 0 : hX.cookie) && (!XU || !Lz(KA(UU)))) try {
-           FF._set(UU, "", -1, XU)
-         } catch (UU) {
-           return
+         if (this.animationStarted = BH, !BH) {
+           if (this.disposeOnEnd)
+             for (AH = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(AH, 1), AH = 0; AH < LH.length; AH++) LH[AH].dispose();
+           this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2623-L2668` → after: `L2181-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2181-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2181-L2241) · [Before (L2623-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2623-L2668)

```diff
-     };
-     let oF = null;
-     const DF = {
-         _is_supported() {
-           if (!Lz(oF)) return oF;
-           let UU = !0;
-           if (Pz(KX)) UU = !1;
-           else try {
-             const XU = "__mplssupport__";
-             DF._set(XU, "xyz"), '"xyz"' !== DF._get(XU) && (UU = !1), DF._remove(XU)
-           } catch (yU) {
-             UU = !1
-           }
-           return UU || fA.error("localStorage unsupported; falling back to cookie store"), oF = UU, UU
-         },
-         _error(UU) {
- ... (30 more removed lines; see GitHub link above)
+     }
+ 
+     function IH(HH) {
+       if (0 === HH.totalWeight && 0 === HH.totalAdditiveWeight) return HH.originalValue;
+       let BH = 1;
+       const LH = SH.l.lu[0],
+         AH = SH.l.lu[1],
+         rH = SH.l.Quaternion[0];
+       let hH = 0;
+       const tH = HH.animations[0],
+         zH = HH.originalValue;
+       let CH, EH = !1;
+       if (HH.totalWeight < 1) CH = 1 - HH.totalWeight, zH.decompose(AH, rH, LH);
+       else {
+         if (hH = 1, BH = HH.totalWeight, CH = tH.weight / BH, 1 == CH) {
+           if (!HH.totalAdditiveWeight) return tH.currentValue;
+ ... (45 more added lines; see GitHub link above)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2670-L2695` → after: `L2243-L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2243-L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2243-L2245) · [Before (L2670-L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2670-L2695)

```diff
-       },
-       EF = [aU, FU, IU, oU, kU, YU, EU, DU, tU],
-       YF = [WU, PU, TU, hU, WX, PX, wU, kX],
-       NF = UU => UU + "_cpm",
-       IF = ["__proto__", "constructor", "prototype"],
-       pF = UU => {
-         if (!Zz(UU)) return {};
-         const XU = {};
-         return Object.keys(UU).forEach((zU => {
-           -1 === IF.indexOf(zU) && (XU[zU] = UU[zU])
-         })), XU
-       },
-       aF = function(UU) {
-         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
-         const zU = {};
-         return [...YF, ...XU].forEach((XU => {
- ... (10 more removed lines; see GitHub link above)
+         for (let BH = 0; BH < HH.animations.length; BH++) {
+           const AH = HH.animations[BH];
+           LH.push(AH.currentValue), hH.push(AH.weight / tH)
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2697-L2719` → after: `L2247-L2286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2247-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2247-L2286) · [Before (L2697-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2697-L2719)

```diff
-         return UU.length.toString(36) + "." + (XU >>> 0).toString(36) + "." + (zU >>> 0).toString(36)
-       },
-       gF = (UU, XU) => ({
-         p: XU,
-         f: tF(JSON.stringify(UU))
-       }),
-       kF = (UU, XU) => {
-         if (!XU) return {
-           properties: [],
-           isValid: !1
-         };
-         try {
-           const zU = FF._parse(NF(UU)),
-             cU = (null == zU ? void 0 : zU.f) === tF(XU) && Gz(zU.p);
-           return {
-             properties: cU ? zU.p : [],
- ... (7 more removed lines; see GitHub link above)
+         let zH = 0;
+         for (let HH = 0; HH < LH.length;) HH ? (zH += hH[HH], SH.f.SlerpToRef(rH, LH[HH], hH[HH] / zH, rH), HH++) : (SH.f.SlerpToRef(LH[HH], LH[HH + 1], hH[HH + 1] / (hH[HH] + hH[HH + 1]), BH), rH = BH, zH = hH[HH] + hH[HH + 1], HH += 2)
+       }
+       for (let hH = 0; hH < HH.additiveAnimations.length; hH++) {
+         const BH = HH.additiveAnimations[hH];
+         0 !== BH.weight && (rH.multiplyToRef(BH.currentValue, SH.l.Quaternion[0]), SH.f.SlerpToRef(rH, SH.l.Quaternion[0], BH.weight, rH))
+       }
+       return rH
+     }
+ 
+     function lH(HH, BH) {
+       BH && (BH.prototype.copyAnimationRange = function(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+         0 === this.animations.length && (this.animations.push(new bH.b(this.name, "_matrix", HH.animations[0].framePerSecond, bH.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
+         const SH = HH.animations[0].getRange(BH);
+ ... (24 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2721-L2733` → after: `L2288-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2288-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2288-L2290) · [Before (L2721-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2721-L2733)

```diff
-       },
-       GF = (UU, XU) => XU + "|" + (FF._get(NF(UU)) || ""),
-       BF = {},
-       ZF = {
-         _is_supported: () => !0,
-         _error(UU) {
-           fA.error("memoryStorage error: " + UU)
-         },
-         _get: UU => UU in BF ? BF[UU] : null,
-         _parse: UU => UU in BF ? BF[UU] : null,
-         _set: (UU, XU) => (BF[UU] = XU, !0),
-         _remove(UU) {
-           delete BF[UU]
+         for (let SH = AH; SH < LH; SH++) {
+           const HH = BH[SH];
+           HH.runtimeAnimation = null, HH.target = null
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2735-L2745` → after: `L2292-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2292-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2292-L2296) · [Before (L2735-L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2735-L2745)

```diff
-       };
-     let RF = null;
-     const PF = {
-       _is_supported() {
-         if (!Lz(RF)) return RF;
-         if (RF = !0, Pz(KX)) RF = !1;
-         else try {
-           const UU = "__support__";
-           PF._set(UU, "xyz"), '"xyz"' !== PF._get(UU) && (RF = !1), PF._remove(UU)
-         } catch (cU) {
-           RF = !1
+         if (this._animationWriteCount = AH, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
+         const rH = mH.e.Now;
+         if (!this._animationTimeLast) {
+           if (this._pendingData.length > 0) return;
+           this._animationTimeLast = rH
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2748-L2756` → after: `L2392-L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2392-L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2392-L2396) · [Before (L2748-L2756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2748-L2756)

```diff
-       },
-       _error(UU) {
-         fA.error("sessionStorage error: ", UU)
-       },
-       _get(UU) {
-         try {
-           return null == KX ? void 0 : KX.sessionStorage.getItem(UU)
-         } catch (UU) {
-           PF._error(UU)
+       }, HH.prototype.beginDirectAnimation = function(HH, BH, LH, AH, rH) {
+         let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
+         if (SH < 0) {
+           const HH = LH;
+           LH = AH, AH = HH, SH = -SH
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2759-L2779` → after: `L2411-L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2411-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2411-L2432) · [Before (L2759-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2759-L2779)

```diff
-       },
-       _parse(UU) {
-         try {
-           return JSON.parse(PF._get(UU)) || null
-         } catch (UU) {}
-         return null
-       },
-       _set(UU, XU) {
-         try {
-           return null == KX || KX.sessionStorage.setItem(UU, JSON.stringify(XU)), !0
-         } catch (UU) {
-           PF._error(UU)
-         }
-         return !1
-       },
-       _remove(UU) {
- ... (5 more removed lines; see GitHub link above)
+       }, HH.prototype.getAllAnimatablesByTarget = function(HH) {
+         const BH = [];
+         for (let LH = 0; LH < this._activeAnimatables.length; LH++) this._activeAnimatables[LH].target === HH && BH.push(this._activeAnimatables[LH]);
+         return BH
+       }, HH.prototype.stopAnimation = function(HH, BH, LH) {
+         const AH = this.getAllAnimatablesByTarget(HH);
+         for (const rH of AH) rH.stop(BH, LH)
+       }, HH.prototype.stopAllAnimations = function() {
+         if (this._activeAnimatables) {
+           for (let HH = 0; HH < this._activeAnimatables.length; HH++) this._activeAnimatables[HH].stop(void 0, void 0, !0);
+           this._activeAnimatables.length = 0
+         }
+         for (const HH of this.animationGroups) HH.stop()
+       })
+     }
+     oH.ProcessPausedAnimatables = !1;
+ ... (6 more added lines; see GitHub link above)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2781-L2784` → after: `L2434-L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2434-L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2434-L2435) · [Before (L2781-L2784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2781-L2784)

```diff
-     };
-     var WF = class {
-       constructor(UU) {
-         this._instance = UU
+       set _matrix(HH) {
+         (HH.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.Tm(HH), this._markAsDirtyAndDecompose())
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2786-L2787` → after: `L2437-L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2437-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2437-L2443) · [Before (L2786-L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2786-L2787)

```diff
-       get _config() {
-         return this._instance.config
+       constructor(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+           hH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+           tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
+         super(HH, BH.yN(), !1), this.name = HH, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTr … [truncated]
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2789-L2790` → after: `L2445-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2445-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2445-L2446) · [Before (L2789-L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2789-L2790)

```diff
-       get consent() {
-         return this._getDnt() ? 0 : this._storedConsent
+       getClassName() {
+         return "Bone"
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2792-L2793` → after: `L2448-L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2448-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2448-L2449) · [Before (L2792-L2793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2792-L2793)

```diff
-       isOptedOut() {
-         return "always" === this._config.cookieless_mode || this.isRejected() || -1 === this.consent && "on_reject" === this._config.cookieless_mode
+       getSkeleton() {
+         return this._skeleton
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2795-L2796` → after: `L2451-L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2451-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2451-L2452) · [Before (L2795-L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2795-L2796)

```diff
-       isOptedIn() {
-         return !this.isOptedOut()
+       get parent() {
+         return this._parentNode
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2798-L2799` → after: `L2454-L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2454-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2454-L2455) · [Before (L2798-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2798-L2799)

```diff
-       isExplicitlyOptedOut() {
-         return 0 === this.consent
+       getParent() {
+         return this.parent
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2801-L2802` → after: `L2457-L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2457-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2457-L2458) · [Before (L2801-L2802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2801-L2802)

```diff
-       isRejected() {
-         return 0 === this.consent || -1 === this.consent && this._config.opt_out_capturing_by_default
+       getChildren() {
+         return this.children
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2804-L2805` → after: `L2460-L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2460-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2460-L2461) · [Before (L2804-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2804-L2805)

```diff
-       optInOut(UU) {
-         this.Ga._set(this._storageKey, UU ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
+       getIndex() {
+         return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2807-L2808` → after: `L2463-L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2463-L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2463-L2464) · [Before (L2807-L2808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2807-L2808)

```diff
-       reset() {
-         this.Ga._remove(this._storageKey, this._config.cross_subdomain_cookie)
+       set parent(HH) {
+         this.setParent(HH)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2810-L2816` → after: `L2466-L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2466-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2466-L2473) · [Before (L2810-L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2810-L2816)

```diff
-       get _storageKey() {
-         const {
-           token: UU,
-           opt_out_capturing_cookie_prefix: XU,
-           consent_persistence_name: zU
-         } = this._instance.config;
-         return zU || (XU ? XU + UU : "__ph_opt_in_out_" + UU)
+       setParent(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (this.parent !== HH) {
+           if (this.parent) {
+             const HH = this.parent.children.indexOf(this); - 1 !== HH && this.parent.children.splice(HH, 1)
+           }
+           this._parentNode = HH, this.parent && this.parent.children.push(this), BH && this._updateAbsoluteBindMatrices(), this.dLH()
+         }
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2818-L2820` → after: `L2475-L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2475-L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2475-L2476) · [Before (L2818-L2820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2818-L2820)

```diff
-       get _storedConsent() {
-         const UU = this.Ga._get(this._storageKey);
-         return vz(UU) ? 1 : Nz(Vz, UU) ? 0 : -1
+       getLocalMatrix() {
+         return this._compose(), this._localMatrix
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2822-L2831` → after: `L2478-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2478-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2478-L2479) · [Before (L2822-L2831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2822-L2831)

```diff
-       get Ga() {
-         const UU = this._config.opt_out_capturing_persistence_type,
-           XU = "localStorage" === UU ? DF : FF,
-           zU = XU._is_supported() ? XU : ZF;
-         if (!this._persistentStore || this._persistentStore !== zU) {
-           this._persistentStore = zU;
-           const XU = "localStorage" === UU ? FF : DF;
-           XU._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(vz(XU._get(this._storageKey))), XU._remove(this._storageKey, this._config.cross_subdomain_cookie))
-         }
-         return this._persistentStore
+       getBindMatrix() {
+         return this._bindMatrix
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2833-L2834` → after: `L2481-L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2481-L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2481-L2482) · [Before (L2833-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2833-L2834)

```diff
-       _getDnt() {
-         return !!this._config.respect_dnt && [null == TX ? void 0 : TX.doNotTrack, null == TX ? void 0 : TX.msDoNotTrack, Fz.doNotTrack, null == TX ? void 0 : TX.globalPrivacyControl].some((UU => vz(UU)))
+       getBaseMatrix() {
+         return this.getBindMatrix()
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2836-L2846` → after: `L2484-L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2484-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2484-L2485) · [Before (L2836-L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2836-L2846)

```diff
-     };
- 
-     function dF(UU, XU) {
-       var zU;
-       const cU = null == UU || null === (zU = UU.config) || void 0 === zU ? void 0 : zU.get_current_url;
-       if (!Bz(cU)) return XU;
-       try {
-         const UU = cU(XU);
-         return Wz(UU) && UU ? UU : XU
-       } catch (UU) {
-         return fA.error("Error in get_current_url, falling back to window.location.href", UU), XU
+       getRestMatrix() {
+         return this._restMatrix
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2848-L2894` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2487-L2488) · [Before (L2848-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2848-L2894)

```diff
-     }
- 
-     function LF(UU) {
-       var XU;
-       return UU instanceof Element && ("__POSTHOG_TOOLBAR__" === UU.id || !!(null === (XU = UU.closest) || void 0 === XU ? void 0 : XU.call(UU, ".toolbar-global-fade-container")))
-     }
- 
-     function eF(UU) {
-       return !!UU && 1 === UU.nodeType
-     }
- 
-     function CF(UU, XU) {
-       return !!UU && !!UU.tagName && UU.tagName.toLowerCase() === XU.toLowerCase()
-     }
- 
-     function wF(UU) {
- ... (31 more removed lines; see GitHub link above)
+       getRestPose() {
+         return this.getRestMatrix()
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2896-L2922` → after: `L2490-L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2490-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2490-L2491) · [Before (L2896-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2896-L2922)

```diff
-       return OF(XU)
-     }
- 
-     function uF(UU) {
-       return ez(UU) ? null : Iz(UU).split(/(\s+)/).filter((UU => No(UU))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
-     }
- 
-     function fF(UU) {
-       let XU = "";
-       return co(UU) && !yo(UU) && UU.childNodes && UU.childNodes.length && MA(UU.childNodes, (function(UU) {
-         var zU;
-         wF(UU) && UU.textContent && (XU += null !== (zU = uF(UU.textContent)) && void 0 !== zU ? zU : "")
-       })), Iz(XU)
-     }
- 
-     function iF(UU) {
- ... (11 more removed lines; see GitHub link above)
+       setRestMatrix(HH) {
+         this._restMatrix.Tm(HH)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2924-L2957` → after: `L2493-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2493-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2493-L2494) · [Before (L2924-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2924-L2957)

```diff
-     }
- 
-     function vF(UU, XU) {
-       if (Pz(XU)) return !0;
-       for (const zU of UU)
-         if (XU.some((UU => MF(zU, UU)))) return !0;
-       return !1
-     }
- 
-     function VF(UU) {
-       const XU = UU.parentNode;
-       return !(!XU || !eF(XU)) && XU
-     }
-     const sF = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
-       nF = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
-       mF = [...nF, "+", "-", "\u2212", "\u2013"],
- ... (18 more removed lines; see GitHub link above)
+       setRestPose(HH) {
+         this.setRestMatrix(HH)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2959-L2984` → after: `L2496-L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2496-L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2496-L2595) · [Before (L2959-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2959-L2984)

```diff
-     }
-     const TF = [".ph-no-rageclick", ".ph-no-capture"],
-       hF = ["", "text", "search", "email", "password", "url", "tel", "number"];
- 
-     function Uo(UU, XU) {
-       if (!KX || Xo(UU)) return !1;
-       let zU, cU, yU;
-       var QU, AU;
-       if (qz(XU) ? (zU = !!XU && TF, cU = void 0, yU = !1) : (zU = null !== (QU = null == XU ? void 0 : XU.css_selector_ignorelist) && void 0 !== QU ? QU : TF, cU = null == XU ? void 0 : XU.content_ignorelist, yU = null !== (AU = null == XU ? void 0 : XU.ignore_text_selection) && … [truncated]
-       if (yU && function(UU) {
-           return !(!UU || !eF(UU)) && (!!CF(UU, "textarea") || (CF(UU, "input") ? Nz(hF, (UU.getAttribute("type") || "").toLowerCase()) : function(UU) {
-             var XU;
-             if (UU.isContentEditable) return !0;
-             const zU = null === (XU = UU.getAttribute) || void 0 === XU ? void 0 : XU.call(UU, "contenteditable");
-             return "true" === zU || "" === zU
-           }(UU)))
- ... (10 more removed lines; see GitHub link above)
+       getBindPose() {
+         return this.getBindMatrix()
+       }
+       setBindMatrix(HH) {
+         this.wHH(HH)
+       }
+       setBindPose(HH) {
+         this.setBindMatrix(HH)
+       }
+       getFinalMatrix() {
+         return this._finalMatrix
+       }
+       getWorldMatrix() {
+         return this.getFinalMatrix()
+       }
+       returnToRest() {
+ ... (84 more added lines; see GitHub link above)
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2986-L2988` → after: `L2597-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2597-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2597-L2599) · [Before (L2986-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2986-L2988)

```diff
-           if (!Gz(UU)) return !1;
-           if (UU.length > lF) return fA.error(`[PostHog] content_ignorelist array cannot exceed ${lF} items. Use css_selector_ignorelist for more complex matching.`), !1;
-           zU = UU.map((UU => UU.toLowerCase()))
+           const BH = gH._TmpMats[0],
+             hH = gH._TmpVecs[0];
+           this.parent ? (BH.Tm(this.parent.getAbsoluteMatrix()), LH && BH.multiplyToRef(LH.getWorldMatrix(), BH)) : SH.e.IdentityToRef(BH), AH && BH.setTranslationFromFloats(0, 0, 0), BH.invert(), SH.o.TransformCoordinatesToRef(HH, BH, hH), AH ? (rH.addAtIndex(12, hH.x), rH.addAt … [truncated]
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L2990-L3001` → after: `L2601-L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2601-L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2601-L2623) · [Before (L2990-L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L2990-L3001)

```diff
-         return zU.some((UU => jF(cU, UU) || jF(yU, UU)))
-       }(cU, function(UU, XU) {
-         for (const zU of XU)
-           if (KF(zU)) return bF(zU);
-         for (const zU of XU) {
-           try {
-             if ("pointer" !== (null == KX ? void 0 : KX.getComputedStyle(zU).getPropertyValue("cursor"))) break
-           } catch (UU) {
-             break
-           }
-           const XU = bF(zU);
-           if (XU.safeText || XU.ariaLabel) return XU
+         this._markAsDirtyAndDecompose()
+       }
+       translate(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         this._updatePosition(HH, BH, LH, !0)
+       }
+       setPosition(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         this._updatePosition(HH, BH, LH, !1)
+       }
+       setAbsolutePosition(HH, BH) {
+         this.setPosition(HH, 1, BH)
+       }
+       scale(HH, BH, LH) {
+ ... (7 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3003-L3027` → after: `L2625-L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2625-L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2625-L2642) · [Before (L3003-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3003-L3027)

```diff
-         return bF(UU)
-       }(UU, FU)) || vF(FU, zU))
-     }
-     const Xo = UU => !UU || CF(UU, "html") || !eF(UU),
-       zo = (UU, XU) => {
-         if (!KX || Xo(UU)) return {
-           parentIsUsefulElement: !1,
-           targetElementList: []
-         };
-         let zU = !1;
-         const cU = [UU];
-         let yU = UU;
-         for (; yU.parentNode && !CF(yU, "body");) {
-           if (qF(yU.parentNode)) {
-             cU.push(yU.parentNode.host), yU = yU.parentNode.host;
-             continue
- ... (9 more removed lines; see GitHub link above)
+         if (this._markAsDirtyAndDecompose(), AH)
+           for (const SH of this.children) SH.scale(HH, BH, LH, AH)
+       }
+       setScale(HH) {
+         this._decompose(), this._localScaling.Tm(HH), this._markAsDirtyAndCompose()
+       }
+       getScale() {
+         return this._decompose(), this._localScaling
+       }
+       getScaleToRef(HH) {
+         this._decompose(), HH.Tm(this._localScaling)
+       }
+       setYawPitchRoll(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           rH = arguments.length > 4 ? arguments[4] : void 0;
+         if (0 === AH) {
+ ... (2 more added lines; see GitHub link above)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3029-L3031` → after: `L2644-L2660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2644-L2660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2644-L2660) · [Before (L3029-L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3029-L3031)

```diff
-         return {
-           parentIsUsefulElement: zU,
-           targetElementList: cU
+         const hH = gH._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(hH, rH)) return;
+         const tH = gH._TmpMats[1];
+         SH.e.RotationYawPitchRollToRef(HH, BH, LH, tH), hH.multiplyToRef(tH, tH), this._rotateWithMatrix(tH, AH, rH)
+       }
+       rotate(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         const rH = gH._TmpMats[0];
+         rH.setTranslationFromFloats(0, 0, 0), SH.e.RotationAxisToRef(HH, BH, rH), this._rotateWithMatrix(rH, LH, AH)
+       }
+       setAxisAngle(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         if (0 === LH) {
+           const rH = gH._TmpQuat;
+ ... (1 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3033-L3049` → after: `L2662-L2836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2662-L2836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2662-L2836) · [Before (L3033-L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3033-L3049)

```diff
-       };
- 
-     function co(UU) {
-       const XU = new Set;
-       let zU = 0;
-       for (let QU = UU; QU.parentNode && !CF(QU, "body"); QU = QU.parentNode) {
-         if (zU++ >= 1e3 || XU.has(QU)) return !1;
-         XU.add(QU);
-         const UU = rF(QU);
-         if (Nz(UU, "ph-sensitive") || Nz(UU, "ph-no-capture")) return !1
-       }
-       if (Nz(rF(UU), "ph-include")) return !0;
-       const cU = UU.type || "";
-       if (Wz(cU)) switch (cU.toLowerCase()) {
-         case "hidden":
-         case "password":
- ... (1 more removed lines; see GitHub link above)
+         const rH = gH._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(rH, AH)) return;
+         const hH = gH._TmpMats[1];
+         SH.e.RotationAxisToRef(HH, BH, hH), rH.multiplyToRef(hH, hH), this._rotateWithMatrix(hH, LH, AH)
+       }
+       setRotation(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         this.setYawPitchRoll(HH.y, HH.x, HH.z, BH, LH)
+       }
+       setRotationQuaternion(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+           LH = arguments.length > 2 ? arguments[2] : void 0;
+         if (0 === BH) return this._decompose(), this._localRotation.Tm(HH), void this._markAsDirtyAndCompose();
+         const AH = gH._TmpMats[0];
+         if (!this._getAbsoluteInverseMatrixUnscaledToRef(AH, LH)) return;
+ ... (159 more added lines; see GitHub link above)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3055-L3056` → after: `L2848-L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2848-L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2848-L2850) · [Before (L3055-L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3055-L3056)

```diff
-     function yo(UU) {
-       return !!(CF(UU, "input") && !["button", "checkbox", "submit", "reset"].includes(UU.type) || CF(UU, "select") || CF(UU, "textarea") || "true" === UU.getAttribute("contenteditable"))
+     function ZH(HH, BH) {
+       const LH = (0, YH.RandomRange)(0, 1);
+       EH.g.LerpToRef(BH.color1, BH.color2, LH, HH.color)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3065-L3072` → after: `L2853-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2853-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2853-L2854) · [Before (L3065-L3072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3065-L3072)

```diff
-     function Yo(UU) {
-       let XU = 0,
-         zU = !1;
-       for (let cU = UU.length - 1; cU >= 0; cU--) {
-         let yU = UU.charCodeAt(cU) - 48;
-         zU && (yU *= 2, yU > 9 && (yU -= 9)), XU += yU, zU = !zU
-       }
-       return XU % 10 == 0
+     function dH(HH, BH) {
+       BH.colorDead.subtractToRef(HH.color, BH._colorDiff), BH._colorDiff.scaleToRef(1 / HH.lifeTime, HH.colorStep)
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3075-L3106` → after: `L2857-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2857-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2857-L2858) · [Before (L3075-L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3075-L3106)

```diff
-     function No(UU) {
-       let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       if (ez(UU)) return !1;
-       if (Wz(UU)) {
-         if (UU = Iz(UU), XU ? Qo.test((UU || "").replace(/[- ]/g, "")) : function(UU) {
-             let XU;
-             for (Ao.lastIndex = 0; XU = Ao.exec(UU);) {
-               const UU = XU[2];
-               if (!UU) continue;
-               const zU = UU.replace(/[- ]/g, "");
-               for (let XU = 0; zU.length > XU; XU++)
-                 for (const UU of Fo) {
-                   const cU = XU + UU;
-                   if (zU.length >= cU) {
-                     const UU = zU.slice(XU, cU);
-                     if (Qo.test(UU) && Yo(UU)) return !0
- ... (16 more removed lines; see GitHub link above)
+     function aH(HH, BH) {
+       HH._properties.currentColorGradient = BH._colorGradients[0], HH._properties.currentColorGradient.getColorToRef(HH.color), HH._properties.currentColor1.Tm(HH.color), BH._colorGradients.length > 1 ? BH._colorGradients[1].getColorToRef(HH._properties.currentColor2) : HH._prope … [truncated]
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3109-L3111` → after: `L2861-L2865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2861-L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2861-L2865) · [Before (L3109-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3109-L3111)

```diff
-     function Io(UU) {
-       let XU = fF(UU);
-       return XU = `${XU} ${po(UU)}`.trim(), No(XU) ? XU : ""
+     function sH(HH, BH) {
+       const LH = BH._colorGradients;
+       AH.o.GetCurrentGradient(BH._ratio, LH, ((BH, LH, AH) => {
+         BH !== HH._properties.currentColorGradient && (HH._properties.currentColor1.Tm(HH._properties.currentColor2), LH.getColorToRef(HH._properties.currentColor2), HH._properties.currentColorGradient = BH), EH.g.LerpToRef(HH._properties.currentColor1, HH._properties.currentColo … [truncated]
+       }))
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3114-L3124` → after: `L2868-L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2868-L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2868-L2869) · [Before (L3114-L3124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3114-L3124)

```diff
-     function po(UU) {
-       let XU = "";
-       return UU && UU.childNodes && UU.childNodes.length && MA(UU.childNodes, (function(UU) {
-         var zU;
-         if (UU && "span" === (null === (zU = UU.tagName) || void 0 === zU ? void 0 : zU.toLowerCase())) try {
-           const zU = fF(UU);
-           XU = `${XU} ${zU}`.trim(), UU.childNodes && UU.childNodes.length && (XU = `${XU} ${po(UU)}`.trim())
-         } catch (UU) {
-           fA.error("[AutoCapture]", UU)
-         }
-       })), XU
+     function JH(HH, BH) {
+       HH.colorStep.scaleToRef(BH._scaledUpdateSpeed, BH._scaledColorStep), HH.color.addInPlace(BH._scaledColorStep), HH.color.a < 0 && (HH.color.a = 0)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3127-L3128` → after: `L2872-L2875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2872-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2872-L2875) · [Before (L3127-L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3127-L3128)

```diff
-     function ao(UU) {
-       return UU.replace(/"|\\"/g, '\\"')
+     function iH(HH, BH) {
+       AH.o.GetCurrentGradient(BH._ratio, BH._angularSpeedGradients, ((BH, LH, AH) => {
+         BH !== HH._properties.currentAngularSpeedGradient && (HH._properties.currentAngularSpeed1 = HH._properties.currentAngularSpeed2, HH._properties.currentAngularSpeed2 = LH.getFactor(), HH._properties.currentAngularSpeedGradient = BH), HH.angularSpeed = (0, YH.Lerp)(HH._prop … [truncated]
+       }))
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3131-L3133` → after: `L2878-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2878-L2879) · [Before (L3131-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3131-L3133)

```diff
-     function to(UU) {
-       const XU = UU.attr__class;
-       if (XU) return Gz(XU) ? XU : OF(XU)
+     function pH(HH, BH) {
+       HH.angle += HH.angularSpeed * BH._scaledUpdateSpeed
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3184-L3252` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2883) · [Before (L3184-L3252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3184-L3252)

```diff
-       let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-       const cU = UU.config.segment;
-       if (!cU) return XU();
-       const {
-         analytics: yU,
-         filterProperties: QU
-       } = (UU => Bz(UU.register))(AU = cU) ? {
-         analytics: AU
-       } : AU;
-       var AU;
-       ! function(UU, XU, zU, cU) {
-         const yU = XU => {
-             const yU = () => XU.anonymousId() || zF();
-             UU.config.get_device_id = yU, cU && XU.id() && (UU.register({
-               distinct_id: XU.id(),
-               $device_id: yU()
- ... (53 more removed lines; see GitHub link above)
+       BH.particleEmitterType.startDirectionFunction(BH._emitterWorldMatrix, HH.direction, HH, BH.isLocal, BH._emitterInverseWorldMatrix)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3256-L3294` → after: `L2886-L2887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2886-L2887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2886-L2887) · [Before (L3256-L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3256-L3294)

```diff
-     function Wo(UU) {
-       let {
-         organization: XU,
-         projectId: zU,
-         prefix: cU,
-         severityAllowList: yU = ["error"],
-         sendExceptionsToPostHog: QU = !0
-       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-       return AU => {
-         var FU, oU, DU, EU, YU;
-         if ("*" !== yU && !yU.includes(AU.level) || !UU.__loaded) return AU;
-         AU.tags || (AU.tags = {});
-         const NU = UU.requestRouter.endpointFor("ui", `/project/${UU.config.token}/person/${UU.get_distinct_id()}`);
-         AU.tags["PostHog Person URL"] = NU, UU.sessionRecordingStarted() && (AU.tags["PostHog Recording URL"] = UU.get_session_replay_url({
-           withTimestamp: !0
-         }));
- ... (23 more removed lines; see GitHub link above)
+     function HB(HH, BH) {
+       BH.startDirectionFunction(BH._emitterWorldMatrix, HH.direction, HH, BH.isLocal)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3650-L3655` → after: `L2890-L2895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2890-L2895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2890-L2895) · [Before (L3650-L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3650-L3655)

```diff
-     function So() {
-       try {
-         return Intl.DateTimeFormat().resolvedOptions().timeZone
-       } catch (cU) {
-         return
-       }
+     function BB(HH, BH) {
+       HH._properties.currentVelocityGradient = BH._velocityGradients[0], HH._properties.currentVelocity1 = HH._properties.currentVelocityGradient.getFactor(), BH._velocityGradients.length > 1 ? HH._properties.currentVelocity2 = BH._velocityGradients[1].getFactor() : HH._propertie … [truncated]
+     }
+ 
+     function LB(HH, BH) {
+       HH._properties.currentLimitVelocityGradient = BH._limitVelocityGradients[0], HH._properties.currentLimitVelocity1 = HH._properties.currentLimitVelocityGradient.getFactor(), BH._limitVelocityGradients.length > 1 ? HH._properties.currentLimitVelocity2 = BH._limitVelocityGradi … [truncated]
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3736-L3747` → after: `L2898-L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2898-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2898-L2901) · [Before (L3736-L3747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3736-L3747)

```diff
-     function Jo(UU, XU, zU) {
-       if (!hX) return {};
-       const cU = XU ? [...so, ...zU || []] : [],
-         yU = jo(vo(hX.URL, cU, mo), UU),
-         QU = function() {
-           const UU = {};
-           return MA(xo, (function(XU) {
-             const zU = KA(XU);
-             UU[XU] = zU || null
-           })), UU
-         }();
-       return vA(QU, yU)
+     function AB(HH, BH) {
+       AH.o.GetCurrentGradient(BH._ratio, BH._velocityGradients, ((BH, LH, AH) => {
+         BH !== HH._properties.currentVelocityGradient && (HH._properties.currentVelocity1 = HH._properties.currentVelocity2, HH._properties.currentVelocity2 = LH.getFactor(), HH._properties.currentVelocityGradient = BH), HH._properties.directionScale *= (0, YH.Lerp)(HH._propertie … [truncated]
+       }))
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3751-L3756` → after: `L2905-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2905-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2905-L2909) · [Before (L3751-L3756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3751-L3756)

```diff
-       const zU = no.concat(XU || []),
-         cU = {};
-       return MA(zU, (function(XU) {
-         const zU = Mo(UU, XU);
-         cU[XU] = zU || null
-       })), cU
+       AH.o.GetCurrentGradient(BH._ratio, BH._limitVelocityGradients, ((LH, AH, rH) => {
+         LH !== HH._properties.currentLimitVelocityGradient && (HH._properties.currentLimitVelocity1 = HH._properties.currentLimitVelocity2, HH._properties.currentLimitVelocity2 = AH.getFactor(), HH._properties.currentLimitVelocityGradient = LH);
+         const SH = (0, YH.Lerp)(HH._properties.currentLimitVelocity1, HH._properties.currentLimitVelocity2, rH);
+         HH.direction.length() > SH && HH.direction.scaleInPlace(BH.limitVelocityDamping)
+       }))
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3760-L3770` → after: `L2913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2913) · [Before (L3760-L3770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3760-L3770)

```diff
-       const XU = function(UU) {
-           return UU ? 0 === UU.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === UU.search("https?://(.*)bing.com") ? "bing" : 0 === UU.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === UU.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
-         }(UU),
-         zU = "yahoo" != XU ? "q" : "p",
-         cU = {};
-       if (!Lz(XU)) {
-         cU.$search_engine = XU;
-         const UU = hX ? Mo(hX.referrer, zU) : "";
-         UU.length && (cU.ph_keyword = UU)
-       }
-       return cU
+       HH.direction.scaleToRef(HH._properties.directionScale, HH._properties.scaledDirection)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3773-L3774` → after: `L2916-L2917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2916-L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2916-L2917) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3773-L3774)

```diff
-     function bo() {
-       return navigator.language || navigator.userLanguage
+     function hB(HH, BH) {
+       BH.particleEmitterType.startPositionFunction(BH._emitterWorldMatrix, HH.position, HH, BH.isLocal)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3777-L3779` → after: `L2920-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2920-L2921) · [Before (L3777-L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3777-L3779)

```diff
-     function To() {
-       const UU = bo();
-       return "string" == typeof UU ? UU.split("-")[0] : void 0
+     function tB(HH, BH) {
+       BH.startPositionFunction(BH._emitterWorldMatrix, HH.position, HH, BH.isLocal)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3783-L3784` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2924-L2925) · [Before (L3783-L3784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3783-L3784)

```diff
-     function UD() {
-       return (null == hX ? void 0 : hX.referrer) || ho
+     function zB(HH, BH) {
+       HH._properties.localPosition ? HH._properties.localPosition.Tm(HH.position) : HH._properties.localPosition = HH.position.clone(), SH.o.TransformCoordinatesToRef(HH._properties.localPosition, BH._emitterWorldMatrix, HH.position)
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3788-L3795` → after: `L2929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2929) · [Before (L3788-L3795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3788-L3795)

```diff
-       let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const cU = UU ? [...so, ...XU || []] : [],
-         yU = zU ? Ey(null == Uz ? void 0 : Uz.href) : null == Uz ? void 0 : Uz.href,
-         QU = null == yU ? void 0 : yU.substring(0, 1e3);
-       return {
-         r: UD().substring(0, 1e3),
-         u: QU ? vo(QU, cU, mo) : void 0
-       }
+       BH.isLocal && HH._properties.localPosition ? (HH._properties.localPosition.addInPlace(HH._properties.scaledDirection), SH.o.TransformCoordinatesToRef(HH._properties.localPosition, BH._emitterWorldMatrix, HH.position)) : HH.position.addInPlace(HH._properties.scaledDirection)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3798-L3819` → after: `L2932-L2933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2932-L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2932-L2933) · [Before (L3798-L3819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3798-L3819)

```diff
-     function zD(UU) {
-       let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       var zU;
-       const {
-         r: cU,
-         u: yU
-       } = UU, QU = XU ? Ey(yU) : yU, AU = {
-         $referrer: cU,
-         $referring_domain: null == cU ? void 0 : cU == ho ? ho : null === (zU = Ho(cU)) || void 0 === zU ? void 0 : zU.host
-       };
-       if (QU) {
-         AU.$current_url = QU;
-         const UU = Ho(QU);
-         AU.$host = null == UU ? void 0 : UU.host, AU.$pathname = null == UU ? void 0 : UU.pathname;
-         const XU = jo(QU);
-         vA(AU, XU)
- ... (6 more removed lines; see GitHub link above)
+     function EB(HH, BH) {
+       HH._properties.currentDragGradient = BH._dragGradients[0], HH._properties.currentDrag1 = HH._properties.currentDragGradient.getFactor(), BH._dragGradients.length > 1 ? HH._properties.currentDrag2 = BH._dragGradients[1].getFactor() : HH._properties.currentDrag2 = HH._propert … [truncated]
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3822-L3827` → after: `L2936-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2936-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2936-L2941) · [Before (L3822-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3822-L3827)

```diff
-     function cD() {
-       try {
-         return (new Date).getTimezoneOffset()
-       } catch (cU) {
-         return
-       }
+     function XB(HH, BH) {
+       AH.o.GetCurrentGradient(BH._ratio, BH._dragGradients, ((BH, LH, AH) => {
+         BH !== HH._properties.currentDragGradient && (HH._properties.currentDrag1 = HH._properties.currentDrag2, HH._properties.currentDrag2 = LH.getFactor(), HH._properties.currentDragGradient = BH);
+         const rH = (0, YH.Lerp)(HH._properties.currentDrag1, HH._properties.currentDrag2, AH);
+         HH._properties.scaledDirection.scaleInPlace(1 - rH)
+       }))
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3829-L3937` → after: `L2943-L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2943-L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2943-L2957) · [Before (L3829-L3937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3829-L3937)

```diff
-     const yD = {
-         flags: EU,
-         surveys: FX
-       },
-       QD = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
-       AD = UU => `${UU}_cookie_identity_change_pending`,
-       FD = UU => {
-         let XU = "",
-           zU = 0;
-         for (const cU of UU) {
-           const UU = encodeURIComponent(JSON.stringify(cU).slice(1, -1)).length;
-           if (zU + UU > 1e3) break;
-           XU += cU, zU += UU
-         }
-         return XU
-       },
- ... (93 more removed lines; see GitHub link above)
+ 
+     function GB(HH, BH) {
+       HH._properties.randomNoiseCoordinates1 && HH._properties.randomNoiseCoordinates2 ? (HH._properties.randomNoiseCoordinates1.SBH(Math.random(), Math.random(), Math.random()), HH._properties.randomNoiseCoordinates2.SBH(Math.random(), Math.random(), Math.random())) : (HH._prope … [truncated]
+     }
+ 
+     function YB(HH, BH) {
+       const LH = BH._noiseTextureData,
+         AH = BH._noiseTextureSize;
+       if (LH && AH && HH._properties.randomNoiseCoordinates1 && HH._properties.randomNoiseCoordinates2) {
+         const rH = BH._fetchR(HH._properties.randomNoiseCoordinates1.x, HH._properties.randomNoiseCoordinates1.y, AH.width, AH.height, LH),
+           hH = BH._fetchR(HH._properties.randomNoiseCoordinates1.z, HH._properties.randomNoiseCoordinates2.x, AH.width, AH.height, LH),
+           tH = BH._fetchR(HH._properties.randomNoiseCoordinates2.y, HH._properties.randomNoiseCoordinates2.z, AH.width, AH.height, LH),
+           zH = SH.l.lu[0],
+           CH = SH.l.lu[1];
+         zH.SBH((2 * rH - 1) * BH.noiseStrength.x, (2 * hH - 1) * BH.noiseStrength.y, (2 * tH - 1) * BH.noiseStrength.z), zH.scaleToRef(BH._tempScaledUpdateSpeed, CH), HH.direction.addInPlace(CH)
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3939-L3978` → after: `L2959-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R2959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L2959-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L2959-L3154) · [Before (L3939-L3978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3939-L3978)

```diff
-       _mergeCrossTabFeatureFlagProperties(UU, XU, zU) {
-         let cU = !1;
-         return DD.forEach((zU => {
-           var yU;
-           const QU = null === (yU = Oo(zU)) || void 0 === yU ? void 0 : yU.storageGroup;
-           if (XU === oD && this._splitStorage && QU || XU !== oD && QU !== XU) return;
-           const AU = zU in UU,
-             FU = this._mergePendingCrossTabFeatureFlagChanges(zU, AU ? UU[zU] : void 0),
-             oU = this._pendingCrossTabFeatureFlagChanges.has(zU) ? zU in this.props : AU;
-           oU === zU in this.props && ID(FU, this.props[zU]) || (oU ? this._setProp(zU, FU, !1) : this._deleteProp(zU, !1), cU = !0)
-         })), cU && zU && this._crossTabFeatureFlagHandlers.forEach((UU => UU())), cU
-       }
-       _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
-         if (!this._splitStorageEligible) return !1;
-         try {
-           this._crossTabFeatureFlagIdentityMismatch = !1;
- ... (24 more removed lines; see GitHub link above)
+     }
+ 
+     function uB(HH, BH) {
+       BH.gravity.scaleToRef(BH._tempScaledUpdateSpeed, BH._scaledGravity), HH.direction.addInPlace(BH._scaledGravity)
+     }
+ 
+     function QB(HH, BH) {
+       HH.size = (0, YH.RandomRange)(BH.minSize, BH.maxSize), HH.scale.SBH((0, YH.RandomRange)(BH.minScaleX, BH.maxScaleX), (0, YH.RandomRange)(BH.minScaleY, BH.maxScaleY))
+     }
+ 
+     function WB(HH, BH) {
+       HH._properties.currentSizeGradient = BH._sizeGradients[0], HH._properties.currentSize1 = HH._properties.currentSizeGradient.getFactor(), HH.size = HH._properties.currentSize1, BH._sizeGradients.length > 1 ? HH._properties.currentSize2 = BH._sizeGradients[1].getFactor() : HH … [truncated]
+     }
+ 
+     function MB(HH, BH) {
+       const LH = BH._actualFrame / BH.targetStopDuration;
+ ... (180 more added lines; see GitHub link above)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L3981-L3999` → after: `L3157-L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3157-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3157-L3234) · [Before (L3981-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L3981-L3999)

```diff
-       _setCrossTabFeatureFlagChangesPending(UU, XU) {
-         this._pendingCrossTabFeatureFlagChanges.set(UU, XU);
-         const zU = Oo(UU);
-         (null == zU ? void 0 : zU.volatile) || (this._slotWriteState((this._splitStorage ? null == zU ? void 0 : zU.storageGroup : void 0) || oD).fingerprint = void 0, this._markGroupDirty(UU))
-       }
-       _markAllCrossTabFeatureFlagChangesPending() {
-         DD.forEach((UU => this._pendingCrossTabFeatureFlagChanges.set(UU, !0)))
-       }
-       _markLoadedCrossTabFeatureFlagChangesPending() {
-         if (this._splitStorageEligible) try {
-           const UU = DF._get(this._name),
-             XU = pD(UU);
-           this._slotWriteState(oD).storageValue = UU, DD.forEach((UU => {
-             var zU;
-             const cU = this._splitStorage ? null === (zU = Oo(UU)) || void 0 === zU ? void 0 : zU.storageGroup : void 0,
-               yU = cU ? DF._get(this._groupEntryName(cU)) : null;
- ... (3 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           tH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
+           CH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+         RH || (RH = !0, lH(NH.d, gH)), (0, jH.c)(), super(HH), this._emitterInverseWorldMatrix = SH.e.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new SH.o, this.uR = new rH.d, this.onStoppedObservable = new  … [truncated]
+           const BH = this._particles.pop();
+           BH !== HH && BH.copyTo(HH), BH.metadata = null, this._stockParticles.push(BH)
+         }, this._createParticle = () => {
+           let HH;
+           return 0 !== this._stockParticles.length ? (HH = this._stockParticles.pop(), HH._reset()) : HH = new OH(this), this._prepareParticle(HH), HH
+         }, this.paused = !1, this._shadersLoaded = !1, this._capacity = BH, this._epsilon = tH, LH && "Scene" !== LH.getClassName() ? (this._engine = LH, this.defaultProjectionMatrix = SH.e.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = LH || zH. … [truncated]
+           process: UB,
+           previousItem: null,
+           nextItem: null
+         }, this._positionCreation = {
+ ... (62 more added lines; see GitHub link above)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4001-L4041` → after: `L3236-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3236-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3236-L3364) · [Before (L4001-L4041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4001-L4041)

```diff
-             const QU = cU && !Lz(yU) ? pD(yU) : XU;
-             UU in this.props ? this._markPendingCrossTabFeatureFlagChanges(UU, QU[UU], this.props[UU]) : UU in QU && this._setCrossTabFeatureFlagChangesPending(UU, !0)
-           }))
-         } catch (cU) {}
-       }
-       _mergePendingCrossTabFeatureFlagChanges(UU, XU) {
-         const zU = this._pendingCrossTabFeatureFlagChanges.get(UU);
-         if (!zU) return XU;
-         if (!0 === zU) return this.props[UU];
-         if ("$active_feature_flags" === UU) {
-           const cU = new Set(Gz(XU) ? XU : []),
-             yU = new Set(Gz(this.props[UU]) ? this.props[UU] : []);
-           return zU.forEach((UU => yU.has(UU) ? cU.add(UU) : cU.delete(UU))), Array.from(cU)
-         }
-         const cU = Zz(XU) ? ky({}, XU) : {},
-           yU = Zz(this.props[UU]) ? this.props[UU] : {};
- ... (25 more removed lines; see GitHub link above)
+             this._ratio = AH.age / AH.lifeTime, AH._properties.directionScale = this._tempScaledUpdateSpeed;
+             let SH = this._updateQueueStart;
+             for (; SH;) SH.process(AH, this), SH = SH.nextItem;
+             if (this._isAnimationSheetEnabled && !CH && AH.updateCellIndex(), AH._inheritParticleInfoToSubEmitters(), AH.age >= AH.lifeTime) {
+               if (this._emitFromParticle(AH), AH._properties.attachedSubEmitters) {
+                 for (const HH of AH._properties.attachedSubEmitters) HH.particleSystem.disposeOnStop = !0, HH.particleSystem.stop();
+                 AH._properties.attachedSubEmitters = null
+               }
+               this.recycleParticle(AH), BH && LH--
+             } else;
+           }
+         }
+       }
+       serialize(HH) {
+         throw new Error("Method not implemented.")
+       }
+ ... (113 more added lines; see GitHub link above)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4093-L4127` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3367) · [Before (L4093-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4093-L4127)

```diff
-         if ((FF._get(this._name) || void 0) !== XU) return !1;
-         this._lastSeenCookiePropertiesFingerprint = cU, this._lastSeenMainCookieValue = XU;
-         const QU = kF(this._name, XU),
-           AU = [...YF, ...QU.properties],
-           NU = {};
-         if (Object.keys(yU).forEach((UU => {
-             const XU = yU[UU];
-             (Pz(XU) || Lz(XU) || "" === XU || "$user_state" === UU && "anonymous" !== XU && "identified" !== XU) && (NU[UU] = !0, delete yU[UU])
-           })), Rz(yU)) return !1;
-         const gU = "distinct_id" in yU || "anonymous" === yU.$user_state || "identified" === yU.$user_state,
-           GU = this.props,
-           BU = GU[PU],
-           ZU = GU[kX],
-           RU = vA({}, GU);
-         [...YF, ...UU.cookie_persisted_properties || []].forEach((UU => {
-           if (-1 !== AU.indexOf(UU) && !(UU in yU) && !NU[UU] && (gU || "distinct_id" !== UU && "$user_state" !== UU)) {
- ... (19 more removed lines; see GitHub link above)
+         this._rampGradientsTexture = tH.b.CreateRGBATexture(HH, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4129-L4138` → after: `L3369-L3370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3369-L3370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3369-L3370) · [Before (L4129-L4138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4129-L4138)

```diff
-       _publishSuppressedCookieSnapshot() {
-         this._cookieSyncSuppressed && (Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[oD], this._writeNow(!0))
-       }
-       _endCookieSyncSuppression() {
-         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         if (this._cookieSyncSuppressed) try {
-           UU ? this._publishSuppressedCookieSnapshot() : Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
-         } finally {
-           this._cookieSyncSuppressed = !1
-         }
+       getRampGradients() {
+         return this._rampGradients
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4140-L4141` → after: `L3372-L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3372-L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3372-L3373) · [Before (L4140-L4141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4140-L4141)

```diff
-       isDisabled() {
-         return !!this._disabled
+       forceRefreshGradients() {
+         this._syncRampGradientTexture()
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4143-L4218` → after: `L3375-L3376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3375-L3376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3375-L3376) · [Before (L4143-L4218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4143-L4218)

```diff
-       _buildStorage(UU) {
-         -1 === QD.indexOf(UU.persistence.toLowerCase()) && (fA.critical("Unknown persistence type " + UU.persistence + "; falling back to localStorage+cookie"), UU.persistence = "localStorage+cookie");
-         const XU = function() {
-           let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
-             XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
-           const cU = [...YF, ...UU];
-           return ky(ky({}, DF), {}, {
-             _parse(UU) {
-               try {
-                 let QU, AU = {};
-                 try {
-                   QU = FF._get(UU) || void 0, AU = QU ? pF(JSON.parse(QU)) : {}
-                 } catch (UU) {}
-                 const FU = JSON.parse(DF._get(UU) || "{}");
-                 let oU;
- ... (60 more removed lines; see GitHub link above)
+       _syncRampGradientTexture() {
+         this._rampGradients && (this._rampGradients.sort(((HH, BH) => HH.gradient < BH.gradient ? -1 : HH.gradient > BH.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4220-L4221` → after: `L3378-L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3378-L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3378-L3381) · [Before (L4220-L4221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4220-L4221)

```diff
-       _groupEntryName(UU) {
-         return `${this._name}__${UU}`
+       addRampGradient(HH, BH) {
+         this._rampGradients || (this._rampGradients = []);
+         const LH = new AH.i(HH, BH);
+         return this._rampGradients.push(LH), this._syncRampGradientTexture(), this
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4223-L4224` → after: `L3383-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3383-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3383-L3384) · [Before (L4223-L4224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4223-L4224)

```diff
-       _resolveSplitStorage(UU) {
-         return this._splitStorageEligible && !!UU.split_storage
+       removeRampGradient(HH) {
+         return this._removeGradientAndTexture(HH, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4226-L4235` → after: `L3386-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3386-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3386-L3389) · [Before (L4226-L4235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4226-L4235)

```diff
-       properties() {
-         const UU = {};
-         return MA(this.props, ((XU, zU) => {
-           const cU = Oo(zU);
-           if (!cU || "event" === cU.exposure) {
-             var yU;
-             if (null == cU || null === (yU = cU.shouldSkipFromEventProperties) || void 0 === yU ? void 0 : yU.call(cU, XU)) return;
-             UU[zU] = XU
-           }
-         })), UU
+       addColorGradient(HH, BH, LH) {
+         this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = aH, this._colorProcessing.process = sH);
+         const rH = new AH.e(HH, BH, LH);
+         return this._colorGradients.push(rH), this._colorGradients.sort(((HH, BH) => HH.gradient < BH.gradient ? -1 : HH.gradient > BH.gradient ? 1 : 0)), this
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4237-L4274` → after: `L3391-L3397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3391-L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3391-L3397) · [Before (L4237-L4274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4237-L4274)

```diff
-       load() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._disabled && !UU) return;
-         const XU = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
-           zU = XU ? DF._parse(this._name) : null;
-         let cU = {};
-         if (XU) try {
-           cU = pF(FF._parse(this._name)), MA(cU, ((UU, XU) => {
-             (Pz(UU) || Lz(UU) || "" === UU) && delete cU[XU]
-           }))
-         } catch (UU) {}
-         const yU = this.Ga._parse(this._name);
-         if (yU && (this.props = vA({}, yU)), this._splitStorage && this._loadGroupEntries(), XU && yU) {
-           var QU, AU;
-           const UU = null == zU ? void 0 : zU[PU],
-             XU = null !== (QU = null == zU ? void 0 : zU.$user_state) && void 0 !== QU ? QU : VX,
- ... (22 more removed lines; see GitHub link above)
+       removeColorGradient(HH) {
+         if (!this._colorGradients) return this;
+         let BH = 0;
+         for (const LH of this._colorGradients) {
+           if (LH.gradient === HH) {
+             this._colorGradients.splice(BH, 1);
+             break
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4277` → after: `L3401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3401) · [Before (L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4277)

```diff
-         PF._get(AD(this._name)) && (this._cookieIdentityChangePending = !0)
+         return 0 === this._colorGradients.length && (this._colorCreation.process = ZH, this._colorProcessing.process = JH), this
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4279-L4285` → after: `L3403-L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3403-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3403-L3408) · [Before (L4279-L4285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4279-L4285)

```diff
-       _loadGroupEntries() {
-         for (const UU of Co) {
-           const XU = DF._parse(this._groupEntryName(UU));
-           if (XU && !Rz(XU)) {
-             const zU = this._slotWriteState(UU);
-             zU.persisted = !0, this._mainCarriesGroupKey(UU) || (zU.fingerprint = this._entryFingerprint(XU, UU)), this._groupEntryIsStale(UU, XU) || vA(this.props, XU)
-           }
+       resetDrawCache() {
+         if (this._drawWrappers) {
+           for (const HH of this._drawWrappers)
+             if (HH)
+               for (const BH of HH) BH?.dispose();
+           this._drawWrappers = []
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4288-L4314` → after: `L3411-L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3411-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3411-L3412) · [Before (L4288-L4314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4288-L4314)

```diff
-       _mainCarriesGroupKey(UU) {
-         return Object.keys(this.props).some((XU => {
-           var zU;
-           return (null === (zU = Oo(XU)) || void 0 === zU ? void 0 : zU.storageGroup) === UU
-         }))
-       }
-       _groupEntryIsStale(UU, XU) {
-         const zU = yD[UU];
-         if (!zU) return !1;
-         const cU = XU[zU],
-           yU = this.props[zU];
-         return Cz(cU) && Cz(yU) && yU > cU
-       }
-       refreshKey(UU) {
-         var XU;
-         if (this._disabled) return;
- ... (11 more removed lines; see GitHub link above)
+       _fetchR(HH, BH, LH, AH, rH) {
+         return rH[4 * (((HH = .5 * Math.abs(HH) + .5) * LH % LH | 0) + ((BH = .5 * Math.abs(BH) + .5) * AH % AH | 0) * LH)] / 255
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4316-L4321` → after: `L3414-L3415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3414-L3415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3414-L3415) · [Before (L4316-L4321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4316-L4321)

```diff
-       save() {
-         if (this._disabled) return;
-         const UU = this._saveDebounceMs();
-         UU > 0 ? Pz(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
-           this._pendingSaveTimer = void 0, this._writeNow()
-         }), UU)) : this._writeNow()
+       _reset() {
+         this._resetEffect()
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4323-L4324` → after: `L3417-L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3417-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3417-L3418) · [Before (L4323-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4323-L4324)

```diff
-       flush() {
-         Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
+       _resetEffect() {
+         this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayO … [truncated]
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4326-L4361` → after: `L3420-L3485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3420-L3485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3420-L3485) · [Before (L4326-L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4326-L4361)

```diff
-       _writeNow() {
-         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (this._disabled || this._cookieSyncSuppressed && !UU) return;
-         UU || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || YD.forEach((UU => this.refreshKey(UU))));
-         const XU = !UU && !this._storageMigrationInProgress;
-         XU || (this._crossTabFeatureFlagIdentityMismatch = !1);
-         const zU = !!XU && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
-         if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && fA.warn("skipping persistence write because storage belongs to a different distinct ID"));
-         if (this._splitStorage) return this._writeNowSplit(), void(zU && this._crossTabFeatureFlagHandlers.forEach((UU => UU())));
-         const cU = this._writeEntry(this.Ga, this._name, this.props, oD);
-         "written" === cU && this._rememberCurrentCookieProperties(this.props), "failed" !== cU && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), zU && this._crossTabFeatureFlagHandlers.forEach(( … [truncated]
-       }
-       _writeNowSplit() {
-         const {
-           main: UU,
-           groups: XU
- ... (20 more removed lines; see GitHub link above)
+       _createVertexBuffers() {
+         this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertex … [truncated]
+         const HH = this._engine,
+           BH = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
+         this._vertexData = new Float32Array(this._capacity * BH), this._vertexBuffer = new hH.b(HH, this._vertexData, !0, BH);
+         let LH = 0;
+         const AH = this._vertexBuffer.createVertexBuffer(hH.i.PositionKind, LH, 3, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[hH.i.PositionKind] = AH, LH += 3;
+         const rH = this._vertexBuffer.createVertexBuffer(hH.i.ColorKind, LH, 4, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers[hH.i.ColorKind] = rH, LH += 4;
+         const SH = this._vertexBuffer.createVertexBuffer("angle", LH, 1, this._vertexBufferSize, this._useInstancing);
+         this._vertexBuffers.angle = SH, LH += 1;
+         const tH = this._vertexBuffer.createVertexBuffer("size", LH, 2, this._vertexBufferSize, this._useInstancing);
+         if (this._vertexBuffers.size = tH, LH += 2, this._isAnimationSheetEnabled) {
+           const HH = this._vertexBuffer.createVertexBuffer("cellIndex", LH, 1, this._vertexBufferSize, this._useInstancing);
+           this._vertexBuffers.cellIndex = HH, LH += 1
+ ... (50 more added lines; see GitHub link above)
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4364-L4376` → after: `L3489-L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3489-L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3489-L3506) · [Before (L4364-L4376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4364-L4376)

```diff
-       _partitionProps() {
-         const UU = {},
-           XU = {
-             flags: {},
-             surveys: {}
-           };
-         return MA(this.props, ((zU, cU) => {
-           var yU;
-           const QU = null === (yU = Oo(cU)) || void 0 === yU ? void 0 : yU.storageGroup;
-           QU ? XU[QU][cU] = zU : UU[cU] = zU
-         })), {
-           main: UU,
-           groups: XU
+       stop() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(HH))
+       }
+       _postStop(HH) {}
+       reset() {
+         this._stockParticles.length = 0, this._particles.length = 0
+       }
+       _appendParticleVertex(HH, BH, LH, AH) {
+         let rH = HH * this._vertexBufferSize;
+         const hH = SH.l.lu[0].Tm(this._scene?.floatingOriginOffset || SH.o.ZeroReadOnly);
+         if (this._vertexData[rH++] = BH.position.x + this.worldOffset.x - hH.x, this._vertexData[rH++] = BH.position.y + this.worldOffset.y - hH.y, this._vertexData[rH++] = BH.position.z + this.worldOffset.z - hH.z, this._vertexData[rH++] = BH.color.r, this._vertexData[rH++] = BH … [truncated]
+         else if (BH._properties.initialDirection) {
+           let HH = BH._properties.initialDirection;
+           this.isLocal && (SH.o.TransformNormalToRef(HH, this._emitterWorldMatrix, SH.l.lu[0]), HH = SH.l.lu[0]), 0 === HH.x && 0 === HH.z && (HH.x = .001), this._vertexData[rH++] = HH.x, this._vertexData[rH++] = HH.y, this._vertexData[rH++] = HH.z
+         } else {
+ ... (2 more added lines; see GitHub link above)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4379-L4389` → after: `L3510-L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3510-L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3510-L3511) · [Before (L4379-L4389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4379-L4389)

```diff
-       _entryFingerprint(UU, XU) {
-         if (XU === oD) return JSON.stringify(UU) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
-         const zU = {};
-         return MA(UU, ((UU, XU) => {
-           var cU;
-           zU[XU] = (null === (cU = Oo(XU)) || void 0 === cU ? void 0 : cU.volatile) ? "__volatile__" : UU
-         })), JSON.stringify(zU)
-       }
-       _writeEntry(UU, XU, zU, cU) {
-         const yU = this._slotWriteState(cU);
-         if (cU !== oD && !yU.vp && !Pz(yU.fingerprint)) return "skipped";
+       _prepareParticle(HH) {}
+       _createNewOnes(HH) {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4391-L4394` → after: `L3513-L3517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3513-L3517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3513-L3517) · [Before (L4391-L4394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4391-L4394)

```diff
-         try {
-           if (QU = this._entryFingerprint(zU, cU), QU === yU.fingerprint) return yU.vp = !1, "skipped"
-         } catch (UU) {
-           QU = void 0
+         for (let LH = 0; LH < HH && this._particles.length !== this._capacity; LH++) {
+           BH = this._createParticle(), this._particles.push(BH);
+           let HH = this._createQueueStart;
+           for (; HH;) HH.process(BH, this), HH = HH.nextItem;
+           BH._inheritParticleInfoToSubEmitters()
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4396-L4415` → after: `L3519-L3526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3519-L3526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3519-L3526) · [Before (L4396-L4415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4396-L4415)

```diff
-         return UU._set(XU, zU, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (yU.vp = !1, cU !== oD && (yU.persisted = !0), Pz(QU) || (yU.fingerprint = QU), this._splitStorageEligible && (yU.storageValue = DF._get(XU)), "written") : (this._config.d … [truncated]
-       }
-       remove() {
-         let {
-           keepGroupEntries: UU = !1
-         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         if (this._markAllCrossTabFeatureFlagChangesPending(), Pz(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Ga._remove(this._name, !1), this.Ga._remove(this._name, !0), !UU && this._ownsSplitStorage)
-           for (const XU of Co) DF._remove(this._groupEntryName(XU));
-         UU ? delete this._slotState[oD] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
-       }
-       clear() {
-         this.remove(), this.props = {}
-       }
-       register_once(UU, XU, zU) {
-         if (Zz(UU)) {
-           this.syncCookieProperties(), Pz(XU) && (XU = "None"), this._expire_days = Pz(zU) ? this._default_expiry : zU;
- ... (4 more removed lines; see GitHub link above)
+       }
+       _update(HH) {
+         if (this._alive = this._particles.length > 0, this.emitter.position) {
+           const HH = this.emitter;
+           this._emitterWorldMatrix = HH.getWorldMatrix()
+         } else {
+           const HH = this.emitter;
+           this._emitterWorldMatrix = SH.e.Translation(HH.x, HH.y, HH.z)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4417` → after: `L3528-L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3528-L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3528-L3535) · [Before (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4417)

```diff
-         return !1
+         this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(HH)
+       }
+       static _GetAttributeNamesOrOptions() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const AH = [hH.i.PositionKind, hH.i.ColorKind, "angle", "offset", "size"];
+         return HH && AH.push("cellIndex"), BH || AH.push("direction"), LH && AH.push("remapData"), AH
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4419-L4425` → after: `L3537-L3555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3537-L3555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3537-L3555) · [Before (L4419-L4425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4419-L4425)

```diff
-       register(UU, XU) {
-         if (Zz(UU)) {
-           this.syncCookieProperties(), this._expire_days = Pz(XU) ? this._default_expiry : XU;
-           let zU = !1;
-           if (MA(UU, ((XU, cU) => {
-               UU.hasOwnProperty(cU) && (this.props[cU] !== XU || Zz(XU) || Gz(XU)) && (this._setProp(cU, XU), zU = !0)
-             })), zU) return this.save(), !0
+       static _GetEffectCreationOptions() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         const AH = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
+         return (0, FH.b)(AH), HH && AH.push("particlesInfos"), BH && AH.push("logarithmicDepthConstant"), LH && (AH.push("vFogInfos"), AH.push("vFogColor")), AH
+       }
+       fillDefines(HH, BH) {
+         let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         if (this._scene && ((0, FH.i)(this, this._scene, HH), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && HH.push("#define FOG")), this._isAnimationSheetEnabled && HH.push("#define ANIMATESHEET"), this.useLogarithmicDepth && HH.push("#define LOGARITHMI … [truncated]
+           case 2:
+             HH.push("#define BILLBOARDY");
+             break;
+           case 8:
+           case 9:
+             HH.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && HH.push("#define BILLBOARDSTRETCHED_LOCAL");
+ ... (3 more added lines; see GitHub link above)
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4427` → after: `L3557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3557) · [Before (L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4427)

```diff
-         return !1
+         LH && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), HH.push(this._imageProcessingConfigurationDefines.toString()))
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4429-L4449` → after: `L3559-L3562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3559-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3559-L3562) · [Before (L4429-L4449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4429-L4449)

```diff
-       unregister(UU) {
-         this.syncCookieProperties();
-         const XU = "string" == typeof UU ? [UU] : UU;
-         let zU = !1;
-         for (const cU of XU) cU in this.props && (this._deleteProp(cU), zU = !0);
-         zU && this.save()
-       }
-       update_campaign_params() {
-         const UU = null == hX ? void 0 : hX.URL;
-         if (UU === this._campaign_params_url) return;
-         const XU = Jo(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
-           zU = !Rz(nA(XU));
-         return zU && this.register(XU), this._campaign_params_url = UU, zU ? XU : void 0
-       }
-       update_search_keyword() {
-         this.register(function() {
- ... (5 more removed lines; see GitHub link above)
+       fillUniformsAttributesAndSamplerNames(HH, BH, LH) {
+         BH.push(...lB._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), HH.push(...lB._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDep … [truncated]
+       }
+       _getWrapper(HH) {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4451-L4471` → after: `L3564-L3654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3564-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3564-L3654) · [Before (L4451-L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4451-L4471)

```diff
-         this.register_once({
-           $referrer: UD(),
-           $referring_domain: (null == hX ? void 0 : hX.referrer) && (null === (UU = Ho(hX.referrer)) || void 0 === UU ? void 0 : UU.host) || ho
-         }, void 0)
-       }
-       set_initial_person_info() {
-         if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
-         const UU = XD(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
-         this.register_once({
-           [PX]: this._storesIdentityInCookie ? {
-             r: FD(UU.r),
-             u: UU.u ? FD(UU.u) : void 0
-           } : UU
-         }, void 0)
-       }
-       get_initial_props() {
- ... (5 more removed lines; see GitHub link above)
+         const LH = this._getCustomDrawWrapper(HH);
+         if (LH?.effect) return LH;
+         const AH = [];
+         this.fillDefines(AH, HH);
+         const SH = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
+           hH = fB.e._PrepareStringDefines(SH, AH),
+           tH = hH ? fB.e.GetConfiguration(SH) : void 0;
+         let zH = this._drawWrappers[SH];
+         zH || (zH = this._drawWrappers[SH] = [], 0 === SH || this._renderPassObserver || (this._renderPassObserver = ((BH = this._engine)._onReleaseRenderPassObservable ?? (BH._onReleaseRenderPassObservable = new rH.d)).add((HH => {
+           const BH = this._drawWrappers[HH];
+           if (BH) {
+             for (const HH of BH) HH?.dispose();
+             delete this._drawWrappers[HH]
+           }
+         }))));
+         let CH = zH[HH];
+ ... (75 more added lines; see GitHub link above)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4487-L4512` → after: `L3659-L3698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3659-L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3659-L3698) · [Before (L4487-L4512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4487-L4512)

```diff
-       safe_merge(UU) {
-         return MA(this.props, (function(XU, zU) {
-           zU in UU || (UU[zU] = XU)
-         })), UU
-       }
-       update_config(UU, XU, zU) {
-         const cU = UU.persistence !== XU.persistence,
-           yU = !((UU, XU) => {
-             if (UU.length !== XU.length) return !1;
-             const zU = [...UU].sort(),
-               cU = [...XU].sort();
-             return zU.every(((UU, XU) => UU === cU[XU]))
-           })(UU.cookie_persisted_properties || [], XU.cookie_persisted_properties || []),
-           QU = cU || yU,
-           AU = UU.cookieWinsOnConflict !== XU.cookieWinsOnConflict,
-           FU = UU.disable_persistence || !!zU,
- ... (10 more removed lines; see GitHub link above)
+       _appendParticleVertices(HH, BH) {
+         this._appendParticleVertex(HH++, BH, 0, 0), this._useInstancing || (this._appendParticleVertex(HH++, BH, 1, 0), this._appendParticleVertex(HH++, BH, 1, 1), this._appendParticleVertex(HH, BH, 0, 1))
+       }
+       rebuild() {
+         this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
+       }
+       async _initShaderSourceAsync() {
+         this._engine.isWebGPU && !lB.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([LH.e(655).then((() => LH(64133))), LH.e(649).then((() => LH(64138)))])) : await Promise.all([LH.e(638).then((() => LH(64146))), Promise.all([LH.e(631), LH.e(664)]).then((() => LH(64151) … [truncated]
+       }
+       isReady() {
+         if (!this._shadersLoaded) return !1;
+         if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
+         if (this.blendMode !== UH.BLENDMODE_MULTIPLYADD) {
+           if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
+         } else {
+           if (!this._getWrapper(UH.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
+ ... (24 more added lines; see GitHub link above)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4514-L4517` → after: `L3700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3700) · [Before (L4514-L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4514-L4517)

```diff
-           if (this._default_expiry = this._expire_days = UU.cookie_expiration, this.set_disabled(FU), this.set_cross_subdomain(UU.cross_subdomain_cookie), this.set_secure(UU.secure_cookie), YU) {
-             const UU = this.props;
-             this.clear(), this.Ga = DU, this._splitStorage = EU, this.props = UU, this.save()
-           } else AU && (this.Ga = DU, FU || (delete this._slotState[oD], this._writeNow()))
+           fB.e._BindAttachmentsForEffect(AH, LH) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(LH), this._useInstancing ? this._scene?.forceWireframe ? AH.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._cap … [truncated]
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4519` → after: `L3702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3702) · [Before (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4519)

```diff
-           this._storageMigrationInProgress = !1, NU && this._endCookieSyncSuppression()
+           fB.e._RestoreAttachments(AH)
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4522-L4530` → after: `L3706-L3710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3706-L3710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3706-L3710) · [Before (L4522-L4530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4522-L4530)

```diff
-       _truncateExistingPersonInfoForCookie() {
-         const UU = this.props[PX];
-         if (!this._storesIdentityInCookie || !Zz(UU) || "string" != typeof UU.r) return;
-         const XU = FD(UU.r),
-           zU = "string" == typeof UU.u ? FD(UU.u) : UU.u;
-         XU === UU.r && zU === UU.u || this._setProp(PX, ky(ky({}, UU), {}, {
-           r: XU,
-           u: zU
-         }))
+       render() {
+         if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
+         const HH = this._engine;
+         let BH;
+         return HH.setState && (HH.setState(!1), this.forceDepthWrite && HH.setDepthWrite(!0)), BH = this.blendMode === UH.BLENDMODE_MULTIPLYADD ? this._render(UH.BLENDMODE_MULTIPLY) + this._render(UH.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttrib … [truncated]
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4532-L4533` → after: `L3712-L3721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3712-L3721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3712-L3721) · [Before (L4532-L4533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4532-L4533)

```diff
-       set_disabled(UU) {
-         this._disabled = UU, this._disabled ? this.remove() : this.save()
+       _onDispose() {}
+       dispose() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), … [truncated]
+           const HH = this._scene.dU.indexOf(this);
+           HH > -1 && this._scene.dU.splice(HH, 1), this._scene._activeParticleSystems.dispose()
+         }
+         this.uR.notifyObservers(this), this.uR.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4535-L4538` → after: `L3723-L3734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R3723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L3723-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/271.js#L3723-L3734) · [Before (L4535-L4538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/271.js#L4535-L4538)

```diff
-       set_cross_subdomain(UU) {
-         UU !== this._cross_subdomain && (this._cross_subdomain = UU, this.remove({
-           keepGroupEntries: !0
-         }), this.save())
+     }
+     lB.ForceGLSL = !1;
+     var KB, cB = LH(38012);
+     ! function(HH) {
+       HH[HH.ATTACHED = 0] = "ATTACHED", HH[HH.END = 1] = "END"
+     }(KB || (KB = {}));
+     class eB {
+       constructor(HH) {
+         if (this.particleSystem = HH, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !HH.emitter || !HH.emitter.dispose) {
+           const BH = (0, cB.b)("BABYLON.AbstractMesh");
+           HH.emitter = new BH("SubemitterSystemEmitter", HH.yN()), HH._disposeEmitterOnDispose = !0
+         }
```
