# Changed — Bundle Modifications Report (Part 010 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `10 / 82` (**269** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (211 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 46. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1315-L1318` → after: `L1194-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1194-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1194-L1205) · [Before (L1315-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1315-L1318)

```diff
-       get maxValue() {
-         let ee = null;
-         for (const ie of this._def.checks) "max" === ie.kind && (null === ee || ie.value < ee) && (ee = ie.value);
-         return ee
+     }
+ 
+     function Bi(WW, iW) {
+       try {
+         const OW = iW().catch((iW => {
+           console.warn(`${XW} could not send the report to ${WW}`, iW)
+         })).finally((() => {
+           ei.delete(OW)
+         }));
+         ei.add(OW)
+       } catch (OW) {
+         console.warn(`${XW} could not send the report to ${WW}`, OW)
```

#### 47. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1321-L1341` → after: `L1208-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1208-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1208-L1223) · [Before (L1321-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1321-L1341)

```diff
-     ne.create = ee => {
-       var ie;
-       return new ne({
-         checks: [],
-         typeName: ai.ZodBigInt,
-         coerce: null !== (ie = null === ee || void 0 === ee ? void 0 : ee.coerce) && void 0 !== ie && ie,
-         ...Ae(ee)
-       })
-     };
-     class je extends Ye {
-       _parse(ee) {
-         this._def.coerce && (ee.data = Boolean(ee.data));
-         if (this._getType(ee) !== oe.boolean) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
- ... (5 more removed lines; see GitHub link above)
+     async function qi(WW) {
+       let iW;
+       (0, ZW.e)();
+       const OW = new Promise((OW => {
+         iW = setTimeout(OW, WW)
+       }));
+       await Promise.race([Ri(), OW]), clearTimeout(iW)
+     }
+     async function Ri() {
+       if (await Promise.allSettled([...ei]), Ji) try {
+         const {
+           flushClientAnalyticsEvents: WW
+         } = await Promise.resolve().then((() => OW(1576)));
+         await WW()
+       } catch (WW) {
+         console.warn(`${XW} could not send the counts`, WW)
```

#### 48. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1344-L1384` → after: `L1226-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1226-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1226-L1243) · [Before (L1344-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1344-L1384)

```diff
-     je.create = ee => new je({
-       typeName: ai.ZodBoolean,
-       coerce: (null === ee || void 0 === ee ? void 0 : ee.coerce) || !1,
-       ...Ae(ee)
-     });
-     class se extends Ye {
-       _parse(ee) {
-         this._def.coerce && (ee.data = new Date(ee.data));
-         if (this._getType(ee) !== oe.date) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.date,
-             received: ie.parsedType
-           }), Ee
-         }
- ... (25 more removed lines; see GitHub link above)
+     async function Gi() {
+       for (; ei.size > 0;) await Promise.allSettled([...ei])
+     }
+ 
+     function Ii() {
+       ni.clear(), ui = 0, Ji = !1, ti = 0, Zi.clear(), oi = 0, di.clear(), (0, lW.u)()
+     }
+ 
+     function ai(WW) {
+       const iW = "object" === typeof WW && null !== WW ? WW.type : WW;
+       return "string" !== typeof iW ? "sky not named" : `sky ${JSON.stringify(Array.from(iW).slice(0,ci).join(""))}`
+     }
+ 
+     function ri(WW, iW, OW, mW) {
+       oi += iW;
+       for (const {
+ ... (2 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1386-L1404` → after: `L1245-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1245-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1245-L1277) · [Before (L1386-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1386-L1404)

```diff
-       }
-       _addCheck(ee) {
-         return new se({
-           ...this._def,
-           checks: [...this._def.checks, ee]
-         })
-       }
-       min(ee, ie) {
-         return this._addCheck({
-           kind: "min",
-           value: ee.getTime(),
-           message: we.toString(ie)
-         })
-       }
-       max(ee, ie) {
-         return this._addCheck({
- ... (3 more removed lines; see GitHub link above)
+         of WW) {
+         var EW, NW, PW;
+         const WW = (0, xW.de)(LW),
+           iW = (0, lW.i)(LW, cW),
+           wW = iW ? "CORE-RenderLinkPending" : `CORE-${WW}`,
+           tW = (0, lW.b)(LW, cW),
+           ZW = null === mW || void 0 === mW ? void 0 : mW(LW, cW),
+           bW = void 0 !== (null === tW || void 0 === tW ? void 0 : tW.gpuDetails),
+           jW = bW ? null === (EW = (0, sW.t)()) || void 0 === EW ? void 0 : EW.renderer : void 0,
+           UW = bW ? ` ${(0,lW.o)()}` : "",
+           kW = Array.from([jW && `gpu ${(0,AW.d)(jW)}`, ZW].filter(Boolean).join("; ")).slice(0, Li).join(""),
+           MW = `core error ${WW}${null!==(NW=null===tW||void 0===tW?void 0:tW.words)&&void 0!==NW?NW:""}${UW}${kW?`: ${kW}`:""}`,
+           KW = {
+             errorCode: String(LW),
+             detail: String(cW),
+             droppedBefore: String(oi),
+ ... (17 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1418-L1435` → after: `L1281-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1281-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1281-L1288) · [Before (L1418-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1418-L1435)

```diff
-     se.create = ee => new se({
-       checks: [],
-       coerce: (null === ee || void 0 === ee ? void 0 : ee.coerce) || !1,
-       typeName: ai.ZodDate,
-       ...Ae(ee)
-     });
-     class Ie extends Ye {
-       _parse(ee) {
-         if (this._getType(ee) !== oe.symbol) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.symbol,
-             received: ie.parsedType
-           }), Ee
-         }
- ... (2 more removed lines; see GitHub link above)
+ 
+     function zi(WW) {
+       if (WW !== xW.D.AudioUnknownSound && WW !== xW.D.PresentationClipUnplayable) return !1;
+       const {
+         gameNameWithVariation: iW,
+         lobbyName: OW
+       } = (0, PW.d)();
+       return null !== iW && (!!(0, mW.i)(iW) || WW === xW.D.AudioUnknownSound && (0, EW.g)(iW, OW))
```

#### 51. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1437-L1451` → after: `L1290-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1290-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1290-L1297) · [Before (L1437-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1437-L1451)

```diff
-     Ie.create = ee => new Ie({
-       typeName: ai.ZodSymbol,
-       ...Ae(ee)
-     });
-     class he extends Ye {
-       _parse(ee) {
-         if (this._getType(ee) !== oe.undefined) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.undefined,
-             received: ie.parsedType
-           }), Ee
-         }
-         return Oe(ee.data)
+ 
+     function Fi(WW, iW) {
+       if (WW !== xW.D.RenderDeviceLost) return;
+       const OW = iW >>> xW.K.LINKS_IN_FLIGHT_SHIFT & xW.K.LINKS_IN_FLIGHT_MAX,
+         mW = iW >>> xW.K.OLDEST_LINK_SHIFT & xW.K.OLDEST_LINK_MAX;
+       return {
+         linksInFlight: String(OW),
+         oldestLinkMs: String(mW * xW.K.OLDEST_LINK_UNIT_MS)
```

#### 52. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1454-L1469` → after: `L1300-L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1300-L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1300-L1302) · [Before (L1454-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1454-L1469)

```diff
-     he.create = ee => new he({
-       typeName: ai.ZodUndefined,
-       ...Ae(ee)
-     });
-     class Ne extends Ye {
-       _parse(ee) {
-         if (this._getType(ee) !== oe.null) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.null,
-             received: ie.parsedType
-           }), Ee
-         }
-         return Oe(ee.data)
-       }
+ 
+     function Qi(WW, iW) {
+       return WW === xW.D.RenderDeviceLost && 0 !== (iW & xW.K.RESTORE_UNHELD) ? "restoreUnheld" : void 0
```

#### 53. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1471-L1481` → after: `L1304-L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1304-L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1304-L1306) · [Before (L1471-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1471-L1481)

```diff
-     Ne.create = ee => new Ne({
-       typeName: ai.ZodNull,
-       ...Ae(ee)
-     });
-     class Ge extends Ye {
-       constructor() {
-         super(...arguments), this._any = !0
-       }
-       _parse(ee) {
-         return Oe(ee.data)
-       }
+ 
+     function WO(WW, iW) {
+       return WW === xW.D.JobsHeapGaveUp ? "meshHeap" : (0, lW.l)(WW, iW) ? "linksReadAfterView" : (0, lW.e)(WW, iW) ? "linkCensus" : "coreError"
```

#### 54. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1483-L1493` → after: `L1308-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1308-L1310) · [Before (L1483-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1483-L1493)

```diff
-     Ge.create = ee => new Ge({
-       typeName: ai.ZodAny,
-       ...Ae(ee)
-     });
-     class re extends Ye {
-       constructor() {
-         super(...arguments), this._unknown = !0
-       }
-       _parse(ee) {
-         return Oe(ee.data)
-       }
+ 
+     function iO(WW) {
+       return (0, VW.l)(WW instanceof pW.e ? WW.trap : WW, nW.H, nW.eb)
```

#### 55. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1495-L1524` → after: `L1312-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1312-L1314) · [Before (L1495-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1495-L1524)

```diff
-     re.create = ee => new re({
-       typeName: ai.ZodUnknown,
-       ...Ae(ee)
-     });
-     class Qe extends Ye {
-       _parse(ee) {
-         const ie = this._getOrReturnCtx(ee);
-         return ze(ie, {
-           code: ke.invalid_type,
-           expected: oe.never,
-           received: ie.parsedType
-         }), Ee
-       }
-     }
-     Qe.create = ee => new Qe({
-       typeName: ai.ZodNever,
- ... (14 more removed lines; see GitHub link above)
+ 
+     function OO(WW, iW, OW) {
+       return EO(WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
```

#### 56. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1526-L1598` → after: `L1316-L1343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1316-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1316-L1343) · [Before (L1526-L1598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1526-L1598)

```diff
-     ei.create = ee => new ei({
-       typeName: ai.ZodVoid,
-       ...Ae(ee)
-     });
-     class ii extends Ye {
-       _parse(ee) {
-         const {
-           ctx: ie,
-           status: He
-         } = this._processInputParams(ee), ye = this._def;
-         if (ie.parsedType !== oe.array) return ze(ie, {
-           code: ke.invalid_type,
-           expected: oe.array,
-           received: ie.parsedType
-         }), Ee;
-         if (null !== ye.exactLength) {
- ... (57 more removed lines; see GitHub link above)
+ 
+     function mO(WW, iW, OW) {
+       return EO(WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !1)
+     }
+ 
+     function EO(WW, iW, OW, mW, EW) {
+       let {
+         memoryDetails: NW = {},
+         memoryStep: PW
+       } = mW;
+       const {
+         code: LW,
+         details: cW,
+         message: wW
+       } = (0, YW.J)(WW, iW), tW = [];
+       Object.assign(cW, (0, fW.e)(WW.error)), null !== OW && (cW.trapKind = OW.kind, null !== OW.panic && (cW.panic = (0, VW.h)(OW.panic)), OW.refusedBytes > 0 && (cW.refusedAllocation = String(OW.refusedBytes)), tW.push((0, VW.o)(OW.kind, OW.refusedBytes))), void 0 !== PW && tW. … [truncated]
+ ... (12 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1600-L1604` → after: `L1345-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1345-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1345-L1366) · [Before (L1600-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1600-L1604)

```diff
-         })
-       }
-       nonempty(ee) {
-         return this.min(1, ee)
-       }
+         },
+         error: WW.error,
+         screen: ZW ? LO("graphicsLost") : void 0
+       })
+     }
+     class NO extends Error {}
+ 
+     function PO(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       return "download" !== WW && (0, gW.H)(), gi({
+         kind: "unsupported",
+         code: iW,
+         site: qW,
+         fatal: !0,
+         message: OW,
+         details: {
+ ... (6 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1608-L1643` → after: `L1370-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1370-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1370-L1376) · [Before (L1608-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1608-L1643)

```diff
-       if (ee instanceof yi) {
-         const ie = {};
-         for (const He in ee.shape) {
-           const ye = ee.shape[He];
-           ie[He] = Oi.create(Hi(ye))
-         }
-         return new yi({
-           ...ee._def,
-           shape: () => ie
-         })
-       }
-       return ee instanceof ii ? new ii({
-         ...ee._def,
-         type: Hi(ee.element)
-       }) : ee instanceof Oi ? Oi.create(Hi(ee.unwrap())) : ee instanceof di ? di.create(Hi(ee.unwrap())) : ee instanceof Ji ? Ji.create(ee.items.map((ee => Hi(ee)))) : ee
-     }
- ... (20 more removed lines; see GitHub link above)
+       const iW = (0, NW.t)(kW.siteUsed),
+         OW = (0, vW.m)(WW, iW),
+         mW = "noContext" === WW || "graphicsLost" === WW ? (0, vW.h)(WW, iW) : null;
+       return {
+         text: OW,
+         reload: "general:tryAgain" === OW.confirm,
+         stillBlocked: mW
```

#### 59. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1645-L1652` → after: `L1378-L1390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1378-L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1378-L1390) · [Before (L1645-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1645-L1652)

```diff
-       _parse(ee) {
-         if (this._getType(ee) !== oe.object) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.object,
-             received: ie.parsedType
-           }), Ee
+     }
+ 
+     function cO(WW, iW, OW) {
+       return gi({
+         kind: "recovered",
+         code: "reprobed" === WW ? "no_backend_reprobed" : "no_backend_wasm_reload",
+         site: qW,
+         fatal: !1,
+         message: OW,
+         details: {
+           ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
+           decline: iW,
+           step: WW
```

#### 60. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1654-L1674` → after: `L1392-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1392-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1392-L1426) · [Before (L1654-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1654-L1674)

```diff
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee), {
-           shape: ye,
-           keys: be
-         } = this._getCached(), Me = [];
-         if (!(this._def.catchall instanceof Qe && "strip" === this._def.unknownKeys))
-           for (const Ue in He.data) be.includes(Ue) || Me.push(Ue);
-         const Ke = [];
-         for (const Ue of be) {
-           const ee = ye[Ue],
-             ie = He.data[Ue];
-           Ke.push({
-             key: {
-               status: "valid",
- ... (5 more removed lines; see GitHub link above)
+       })
+     }
+     const wO = 9;
+ 
+     function tO(WW) {
+       const iW = "recovered" === WW.outcome ? "recovered" : "gave_up",
+         OW = "load" === WW.step ? `wasm_load_${iW}${WW.oom?"_oom":""}` : `no_context_${iW}`;
+       return "recovered" === WW.outcome ? `${OW}_t${Math.min(WW.tries,wO)}` : "load" === WW.step ? `${OW}_${WW.stage}` : OW
+     }
+ 
+     function ZO(WW) {
+       const {
+         step: iW,
+         outcome: OW,
+         tries: mW,
+         detail: EW,
+ ... (19 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1676-L1706` → after: `L1428-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1428-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1428-L1439) · [Before (L1676-L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1676-L1706)

```diff
-         if (this._def.catchall instanceof Qe) {
-           const ee = this._def.unknownKeys;
-           if ("passthrough" === ee)
-             for (const ie of Me) Ke.push({
-               key: {
-                 status: "valid",
-                 value: ie
-               },
-               value: {
-                 status: "valid",
-                 value: He.data[ie]
-               }
-             });
-           else if ("strict" === ee) Me.length > 0 && (ze(He, {
-             code: ke.unrecognized_keys,
-             keys: Me
- ... (15 more removed lines; see GitHub link above)
+       })
+     }
+ 
+     function xO(WW) {
+       return gi({
+         kind: "recovered",
+         code: "WEBGPU-unknownLimits",
+         site: Ni,
+         fatal: !1,
+         message: "WebGPU dropped required limits the browser doesn't name",
+         details: {
+           limits: WW.join(",")
```

#### 62. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1708-L1913` → after: `L1441-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1441-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1441-L1455) · [Before (L1708-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1708-L1913)

```diff
-         return He.common.async ? Promise.resolve().then((async () => {
-           const ee = [];
-           for (const ie of Ke) {
-             const He = await ie.key;
-             ee.push({
-               key: He,
-               value: await ie.value,
-               alwaysSet: ie.alwaysSet
-             })
-           }
-           return ee
-         })).then((ee => Be.mergeObjectSync(ie, ee))) : Be.mergeObjectSync(ie, Ke)
-       }
-       get shape() {
-         return this._def.shape()
-       }
- ... (190 more removed lines; see GitHub link above)
+       })
+     }
+     const lO = "reload=wasm";
+ 
+     function AO(WW, iW, OW) {
+       return gi({
+         kind: "unsupported",
+         code: iW,
+         site: qW,
+         fatal: !1,
+         message: [lO, OW].join("; "),
+         details: {
+           cause: WW,
+           status: iW,
+           fallback: "wasmReload"
```

#### 63. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1916-L1917` → after: `L1477-L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1477-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1477-L1548) · [Before (L1916-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1916-L1917)

```diff
-       get options() {
-         return this._def.options
+     }
+ 
+     function UO(WW) {
+       return WW instanceof JW.n ? 0 === WW.code ? "JOIN-matchmake" : `JOIN-${WW.code}` : WW instanceof JW.c ? 0 === WW.code ? `JOIN-${WW.stage}` : `JOIN-${WW.stage}-${WW.code}` : WW instanceof TW.b ? "JOIN-gameCode" : WW instanceof jO ? "JOIN-turnstilePage" : WW instanceof JW.z ? … [truncated]
+     }
+ 
+     function kO(WW, iW) {
+       const OW = (0, fW.m)(WW),
+         mW = {
+           wasmBuild: iW.wasm,
+           clientVersion: iW.client
+         },
+         EW = WW instanceof jO ? {
+           text: (0, vW.i)(),
+           reload: !1,
+           stillBlocked: null
+ ... (56 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1920-L1979` → after: `L1676-L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1676-L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1676-L1690) · [Before (L1920-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1920-L1979)

```diff
-     bi.create = (ee, ie) => new bi({
-       options: ee,
-       typeName: ai.ZodUnion,
-       ...Ae(ie)
-     });
-     const Mi = ee => ee instanceof fi ? Mi(ee.schema) : ee instanceof gi ? Mi(ee.innerType()) : ee instanceof Ti ? [ee.value] : ee instanceof zi ? ee.options : ee instanceof Bi ? Object.keys(ee.enum) : ee instanceof Wi ? Mi(ee._def.innerType) : ee instanceof he ? [void 0] : ee in … [truncated]
-     class Ki extends Ye {
-       _parse(ee) {
-         const {
-           ctx: ie
-         } = this._processInputParams(ee);
-         if (ie.parsedType !== oe.object) return ze(ie, {
-           code: ke.invalid_type,
-           expected: oe.object,
-           received: ie.parsedType
-         }), Ee;
- ... (44 more removed lines; see GitHub link above)
+ 
+     function HO(WW, iW) {
+       const OW = {
+         wasmBuild: iW.wasm,
+         clientVersion: iW.client
+       };
+       return gi({
+         kind: "worldgenLoad",
+         code: "CORE-worldgenLoad",
+         site: YW.F,
+         fatal: !1,
+         message: "world-gen worker code could not load",
+         details: OW,
+         error: WW
+       })
```

#### 65. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1983-L1987` → after: `L1694-L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1694-L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1694-L1696) · [Before (L1983-L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1983-L1987)

```diff
-       const He = Re(ee),
-         ye = Re(ie);
-       if (ee === ie) return {
-         valid: !0,
-         data: ee
+       const OW = {
+         wasmBuild: iW.wasm,
+         clientVersion: iW.client
```

#### 66. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L1989-L2018` → after: `L1698-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1698-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1698-L1759) · [Before (L1989-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L1989-L2018)

```diff
-       if (He === oe.object && ye === oe.object) {
-         const He = Ue.objectKeys(ie),
-           ye = Ue.objectKeys(ee).filter((ee => -1 !== He.indexOf(ee))),
-           be = {
-             ...ee,
-             ...ie
-           };
-         for (const Me of ye) {
-           const He = Ui(ee[Me], ie[Me]);
-           if (!He.valid) return {
-             valid: !1
-           };
-           be[Me] = He.data
-         }
-         return {
-           valid: !0,
- ... (14 more removed lines; see GitHub link above)
+       return gi({
+         kind: "texturePackLoad",
+         code: "CORE-texturePackLoad",
+         site: ii,
+         fatal: !1,
+         message: "texture pack feed code could not load",
+         details: OW,
+         error: WW
+       })
+     }
+ 
+     function uO(WW, iW, OW, mW) {
+       const EW = {
+         wasmBuild: mW.wasm,
+         clientVersion: mW.client
+       };
+ ... (46 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2020-L2022` → after: `L1761-L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1761-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1761-L1825) · [Before (L2020-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2020-L2022)

```diff
-         return {
-           valid: !0,
-           data: He
+       })
+     }
+ 
+     function eO(WW, iW, OW, mW) {
+       const EW = {
+           reason: WW,
+           pageBuild: mW.build,
+           pageAgeMin: String(Math.floor(mW.ageMs / 6e4)),
+           wasmBuild: OW.wasm,
+           clientVersion: OW.client
+         },
+         NW = iW ? "a world-gen worker's code did not load" : "a world-gen worker was lost";
+       return gi({
+         kind: "recovered",
+         code: "CORE-worldgenWorkerLost",
+         site: YW.F,
+ ... (49 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2024-L2029` → after: `L1827-L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1827-L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1827-L1839) · [Before (L2024-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2024-L2029)

```diff
-       }
-       return He === oe.date && ye === oe.date && +ee === +ie ? {
-         valid: !0,
-         data: ee
-       } : {
-         valid: !1
+       })
+     }
+ 
+     function VO(WW, iW, OW, mW) {
+       var EW, NW;
+       return {
+         game: WW,
+         cause: iW,
+         census: null === OW ? "none" : JSON.stringify(OW),
+         gpu: null !== (EW = null === (NW = (0, sW.t)()) || void 0 === NW ? void 0 : NW.renderer) && void 0 !== EW ? EW : "",
+         browser: (0, lW.o)(),
+         wasmBuild: mW.wasm,
+         clientVersion: mW.client
```

#### 69. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2032-L2045` → after: `L1842-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1842-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1842-L1887) · [Before (L2032-L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2032-L2045)

```diff
-     class Fi extends Ye {
-       _parse(ee) {
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee), ye = (ee, ye) => {
-           if (de(ee) || de(ye)) return Ee;
-           const be = Ui(ee.value, ye.value);
-           return be.valid ? ((We(ee) || We(ye)) && ie.yT(), {
-             status: ie.value,
-             value: be.data
-           }) : (ze(He, {
-             code: ke.invalid_intersection_types
-           }), Ee)
+ 
+     function pO(WW, iW, OW, mW) {
+       const EW = (0, lW.r)(),
+         NW = {
+           ...VO(WW, iW, OW, mW),
+           renderWarned: String(EW)
+         },
+         PW = `first view drew no whole terrain in ${dW.f/1e3} s, ${iW}${EW?", render warned":""}`;
+       return gi({
+         kind: "noTerrain",
+         code: "CORE-firstViewNoTerrain",
+         site: mi,
+         fatal: !1,
+         message: PW,
+         details: NW
+       })
+ ... (30 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2047-L2067` → after: `L1889-L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1889-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1889-L1896) · [Before (L2047-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2047-L2067)

```diff
-         return He.common.async ? Promise.all([this._def.left._parseAsync({
-           data: He.data,
-           path: He.path,
-           parent: He
-         }), this._def.right._parseAsync({
-           data: He.data,
-           path: He.path,
-           parent: He
-         })]).then((ee => {
-           let [ie, He] = ee;
-           return ye(ie, He)
-         })) : ye(this._def.left._parseSync({
-           data: He.data,
-           path: He.path,
-           parent: He
-         }), this._def.right._parseSync({
- ... (5 more removed lines; see GitHub link above)
+       return gi({
+         kind: "mainStall",
+         code: "CORE-mainStall",
+         site: Ei,
+         fatal: !1,
+         message: PW,
+         details: LW
+       })
```

#### 71. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2069-L2114` → after: `L1898-L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1898-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1898-L1926) · [Before (L2069-L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2069-L2114)

```diff
-     Fi.create = (ee, ie, He) => new Fi({
-       left: ee,
-       right: ie,
-       typeName: ai.ZodIntersection,
-       ...Ae(He)
-     });
-     class Ji extends Ye {
-       _parse(ee) {
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee);
-         if (He.parsedType !== oe.array) return ze(He, {
-           code: ke.invalid_type,
-           expected: oe.array,
-           received: He.parsedType
- ... (30 more removed lines; see GitHub link above)
+ 
+     function XO(WW, iW, OW) {
+       return gi({
+         kind: "recovered",
+         code: "CORE-workerStartTimeout",
+         site: WW,
+         fatal: !1,
+         message: `a ${WW} worker did not start`,
+         details: {
+           waitedMs: String(Math.round(iW)),
+           wasmBuild: OW.wasm,
+           clientVersion: OW.client
+         }
+       })
+     }
+ 
+ ... (13 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2116-L2122` → after: `L1928-L1943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1928-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1928-L1943) · [Before (L2116-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2116-L2122)

```diff
-     Ji.create = (ee, ie) => {
-       if (!Array.isArray(ee)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
-       return new Ji({
-         items: ee,
-         typeName: ai.ZodTuple,
-         rest: null,
-         ...Ae(ie)
+ 
+     function qO(WW, iW) {
+       const OW = {
+           wasmBuild: iW.wasm,
+           clientVersion: iW.client
+         },
+         mW = WW instanceof Error ? WW.message : String(WW);
+       return gi({
+         kind: "recovered",
+         code: "CORE-cameraDirector",
+         site: Pi,
+         fatal: !1,
+         message: "the scripted camera's director threw",
+         details: OW,
+         instance: mW,
+         error: WW
```

#### 73. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2125-L2166` → after: `L1952-L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1952-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1952-L1956) · [Before (L2125-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2125-L2166)

```diff
-     class oi extends Ye {
-       get keySchema() {
-         return this._def.keyType
-       }
-       get valueSchema() {
-         return this._def.valueType
-       }
-       _parse(ee) {
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee);
-         if (He.parsedType !== oe.object) return ze(He, {
-           code: ke.invalid_type,
-           expected: oe.object,
-           received: He.parsedType
- ... (26 more removed lines; see GitHub link above)
+ 
+     function GO(WW) {
+       if (0 === WW) return "none";
+       const iW = [60, 600, 3600].find((iW => WW < iW));
+       return void 0 === iW ? "ge3600" : `lt${iW}`
```

#### 74. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2168-L2218` → after: `L1958-L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L1958-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L1958-L2002) · [Before (L2168-L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2168-L2218)

```diff
-     class Ri extends Ye {
-       get keySchema() {
-         return this._def.keyType
-       }
-       get valueSchema() {
-         return this._def.valueType
-       }
-       _parse(ee) {
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee);
-         if (He.parsedType !== oe.map) return ze(He, {
-           code: ke.invalid_type,
-           expected: oe.map,
-           received: He.parsedType
- ... (35 more removed lines; see GitHub link above)
+ 
+     function IO(WW, iW) {
+       return null === WW ? "unbound" : (0, UW.h)(iW - WW)
+     }
+ 
+     function aO(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
+       return [0 !== (WW & xW.K.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (WW & xW.K.LINKS_RUNNING) ? "links running" : "", `frames ${(0,AW.d)(GO(WW&xW.K.FRAMES))}`, `up ${(0,AW.d)(IO(iW,OW))}`].filter(Boolean).join(", ")
+     }
+ 
+     function rO(WW, iW, OW) {
+       const mW = "lost" === iW && void 0 !== OW ? ` (${OW})` : "";
+       return `the ${WW} ${RO[iW]}${mW}`
+     }
+     const zO = {
+       adapter: null,
+ ... (29 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2223-L2230` → after: `L2007-L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2007-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2007-L2074) · [Before (L2223-L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2223-L2230)

```diff
-     Ri.create = (ee, ie, He) => new Ri({
-       valueType: ie,
-       keyType: ee,
-       typeName: ai.ZodMap,
-       ...Ae(He)
-     });
-     class ki extends Ye {
-       _parse(ee) {
+ 
+     function QO(WW, iW, OW) {
+       const {
+         count: mW
+       } = FO("webgpu", WW, iW, OW);
+       void 0 !== mW && fi(mW)
+     }
+     const Wm = {
+       samples: null,
+       sunShadows: null,
+       renderDistance: null
+     };
+ 
+     function im(WW) {
+       var iW;
+       return null !== (iW = WW instanceof Error ? WW.reason : void 0) && void 0 !== iW ? iW : ""
+ ... (52 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2232-L2288` → after: `L2076-L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2076-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2076-L2111) · [Before (L2232-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2232-L2288)

```diff
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee);
-         if (He.parsedType !== oe.set) return ze(He, {
-           code: ke.invalid_type,
-           expected: oe.set,
-           received: He.parsedType
-         }), Ee;
-         const ye = this._def;
-         null !== ye.minSize && He.data.size < ye.minSize.value && (ze(He, {
-           code: ke.too_small,
-           minimum: ye.minSize.value,
-           type: "set",
-           inclusive: !0,
-           exact: !1,
-           message: ye.minSize.message
- ... (41 more removed lines; see GitHub link above)
+           logError: iW
+         } = await Promise.resolve().then((() => OW(3960))), mW = `${UW.c["webgpu"===WW?"WebGPU":"WebGL2"]}\n Error: ${SW}`;
+         iW("warning", mW), iW("error", mW)
+       })), hW
+     }
+ 
+     function mm(WW, iW) {
+       var OW, mW;
+       const EW = null === WW.name ? "TEXTURE-sources" : null === WW.url ? "TEXTURE-nourl" : WW.error instanceof eW.b ? `TEXTURE-${WW.error.status}` : "TEXTURE-network",
+         NW = null === WW.name ? "terrain textures could not load" : `terrain texture ${WW.name} could not load`,
+         PW = {
+           texture: null !== (OW = WW.name) && void 0 !== OW ? OW : "",
+           url: null !== (mW = WW.url) && void 0 !== mW ? mW : "",
+           wasmBuild: iW.wasm,
+           clientVersion: iW.client
+         };
+ ... (20 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2290-L2291` → after: `L2113-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2113-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2113-L2178) · [Before (L2290-L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2290-L2291)

```diff
-       size(ee, ie) {
-         return this.min(ee, ie).max(ee, ie)
+     };
+ 
+     function Nm(WW, iW, OW, mW) {
+       const {
+         site: EW,
+         prefix: NW,
+         name: PW
+       } = Em[WW], {
+         stage: LW,
+         error: cW
+       } = OW;
+       return gi({
+         kind: WW,
+         code: "decode" === LW ? null === cW ? `${NW}-decode` : `${NW}-trap` : cW instanceof uW.h ? `${NW}-${cW.status}` : `${NW}-network`,
+         site: EW,
+         fatal: !1,
+ ... (50 more added lines; see GitHub link above)
```

#### 78. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2293-L2294` → after: `L2180-L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2180-L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2180-L2181) · [Before (L2293-L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2293-L2294)

```diff
-       nonempty(ee) {
-         return this.min(1, ee)
+       frame(WW, iW) {
+         return !!iW || (this.waitedMs += PW(this.lastMs, WW), this.lastMs = WW, !(this.waitedMs < EW) && (this.wZ(), !0))
```

#### 79. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2297-L2302` → after: `L2184-L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2184-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2184-L2193) · [Before (L2297-L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2297-L2302)

```diff
-     ki.create = (ee, ie) => new ki({
-       valueType: ee,
-       minSize: null,
-       maxSize: null,
-       typeName: ai.ZodSet,
-       ...Ae(ie)
+ 
+     function cW(WW, iW) {
+       return 0 === (WW & mW.Y.ChunkRequested) ? "no_chunk_request" : 0 === (WW & mW.Y.ChunkStored) ? "chunk_not_stored" : 0 === (WW & mW.Y.MeshLanded) ? "not_meshed" : null === iW ? "no_frame_drawn" : 0 === iW.terrainParts ? "no_terrain_parts" : iW.terrainCompiling > 0 ? "terrain … [truncated]
+     }
+   },
+   42292: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => cW,
+       f: () => PW,
+       g: () => tW
```

#### 80. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2304-L2328` → after: `L2195-L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2195-L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2195-L2197) · [Before (L2304-L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2304-L2328)

```diff
-     class qi extends Ye {
-       constructor() {
-         super(...arguments), this.validate = this.implement
-       }
-       _parse(ee) {
-         const {
-           ctx: ie
-         } = this._processInputParams(ee);
-         if (ie.parsedType !== oe.function) return ze(ie, {
-           code: ke.invalid_type,
-           expected: oe.function,
-           received: ie.parsedType
-         }), Ee;
- 
-         function He(ee, He) {
-           return Xe({
- ... (9 more removed lines; see GitHub link above)
+     var mW = OW(172),
+       EW = OW(42301);
+     const NW = ["view", "startup", "skipped"];
```

#### 81. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2330-L2342` → after: `L2199-L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2199-L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2199-L2253) · [Before (L2330-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2330-L2342)

```diff
-         function ye(ee, He) {
-           return Xe({
-             data: ee,
-             path: ie.path,
-             errorMaps: [ie.common.contextualErrorMap, ie.schemaErrorMap, pe(), fe].filter((ee => !!ee)),
-             issueData: {
-               code: ke.invalid_return_type,
-               returnTypeError: He
-             }
-           })
-         }
-         const be = {
-             errorMap: ie.common.contextualErrorMap
+     function PW(WW) {
+       return 0 === WW.clientWidth || 0 === WW.clientHeight || 0 === WW.width || 0 === WW.height
+     }
+ 
+     function LW(WW) {
+       if (null === WW) return "none";
+       const [iW, OW, mW, EW] = WW, NW = [
+         ["link", iW],
+         ["terrain", OW],
+         ["BL", mW],
+         ["other", EW]
+       ];
+       let PW = "none",
+         LW = 0;
+       for (const [cW, wW] of NW) wW > LW && (PW = cW, LW = wW);
+       return PW
+ ... (39 more added lines; see GitHub link above)
```

#### 82. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2344-L2368` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2255) · [Before (L2344-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2344-L2368)

```diff
-           Me = ie.data;
-         if (this._def.returns instanceof Ei) {
-           const ee = this;
-           return Oe((async function() {
-             for (var ie = arguments.length, Ke = new Array(ie), Ue = 0; Ue < ie; Ue++) Ke[Ue] = arguments[Ue];
-             const Fe = new qe([]),
-               Je = await ee._def.args.parseAsync(Ke, be).catch((ee => {
-                 throw Fe.addIssue(He(Ke, ee)), Fe
-               })),
-               oe = await Reflect.apply(Me, this, Je);
-             return await ee._def.returns._def.type.parseAsync(oe, be).catch((ee => {
-               throw Fe.addIssue(ye(oe, ee)), Fe
-             }))
-           }))
-         } {
-           const ee = this;
- ... (9 more removed lines; see GitHub link above)
+           page: OW
```

#### 83. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2405-L2418` → after: `L2259-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2259-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2259-L2261) · [Before (L2405-L2418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2405-L2418)

```diff
-     class fi extends Ye {
-       get schema() {
-         return this._def.getter()
-       }
-       _parse(ee) {
-         const {
-           ctx: ie
-         } = this._processInputParams(ee);
-         return this._def.getter()._parse({
-           data: ie.data,
-           path: ie.path,
-           parent: ie
-         })
-       }
+ 
+     function wW(WW) {
+       return WW < 5e3 ? "brief" : WW < 15e3 ? "short" : WW < 6e4 ? "long" : "very_long"
```

#### 84. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2420-L2438` → after: `L2263-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2263-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2263-L2282) · [Before (L2420-L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2420-L2438)

```diff
-     fi.create = (ee, ie) => new fi({
-       getter: ee,
-       typeName: ai.ZodLazy,
-       ...Ae(ie)
-     });
-     class Ti extends Ye {
-       _parse(ee) {
-         if (ee.data !== this._def.value) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             received: ie.data,
-             code: ke.invalid_literal,
-             expected: this._def.value
-           }), Ee
-         }
-         return {
- ... (3 more removed lines; see GitHub link above)
+ 
+     function tW(WW, iW) {
+       var OW, EW;
+       const PW = [...null === WW.page ? [] : WW.page.split(" "), ...NW.filter((iW => WW.undrawn[iW] > 0)).map((WW => `undrawn:${WW}`)), ...iW.canvasEmpty ? ["canvas:empty"] : []],
+         cW = [
+           ["", `first view unshown, ${iW.cause}, ended ${WW.end}`],
+           [", ", 0 === WW.visibleMs ? "visible none" : `visible ${wW(WW.visibleMs)}`],
+           [", ", 0 === WW.frames ? "no frames" : `drew ${wW(WW.drawnMs)}`], ...PW.map(((WW, iW) => [0 === iW ? ", " : " ", WW])), [", ", `waited ${wW(WW.waitedMs)}`],
+           [", ", iW.bound ? "bound" : "unbound"], ...iW.preload ? [
+             [", ", "preload"]
+           ] : [],
+           [", ", iW.startupLoaded ? "startup in" : "startup out"],
+           [", ", iW.renderPending > 0 ? "render pending" : "render resolved"],
+           [", ", `lacked ${LW(iW.wait)}${(null!==(OW=null===(EW=iW.wait)||void 0===EW?void 0:EW[4])&&void 0!==OW?OW:0)>0?" gapped":""}`]
+         ];
+       let tW = "";
+ ... (4 more added lines; see GitHub link above)
```

#### 85. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2440-L2441` → after: `L2284-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2284-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2284-L2303) · [Before (L2440-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2440-L2441)

```diff
-       get value() {
-         return this._def.value
+       return tW
+     }
+   },
+   42109: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW,
+       e: () => UW,
+       f: () => bW,
+       h: () => jW,
+       l: () => xW,
+       o: () => lW,
+       p: () => tW,
+       t: () => ZW,
+       x: () => AW
+     });
+     class mW extends Error {
+ ... (4 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2446-L2490` → after: `L2313-L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2313-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2313-L2316) · [Before (L2446-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2446-L2490)

```diff
-       return new zi({
-         values: ee,
-         typeName: ai.ZodEnum,
-         ...Ae(ie)
-       })
-     }
-     Ti.create = (ee, ie) => new Ti({
-       value: ee,
-       typeName: ai.ZodLiteral,
-       ...Ae(ie)
-     });
-     class zi extends Ye {
-       _parse(ee) {
-         if ("string" !== typeof ee.data) {
-           const ie = this._getOrReturnCtx(ee),
-             He = this._def.values;
- ... (29 more removed lines; see GitHub link above)
+       try {
+         WW(iW)
+       } catch (OW) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", OW)
```

#### 87. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2492-L2494` → after: `L2318-L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2318-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2318-L2331) · [Before (L2492-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2492-L2494)

```diff
-       get Enum() {
-         const ee = {};
-         for (const ie of this._def.values) ee[ie] = ie;
+     }
+ 
+     function tW() {
+       return cW
+     }
+ 
+     function ZW(WW) {
+       LW.push(WW), null !== cW && wW(WW, cW)
+     }
+ 
+     function xW(WW) {
+       return EW ??= Promise.all([OW.e(85), OW.e(113), OW.e(88), OW.e(177), OW.e(91), OW.e(224), OW.e(252), OW.e(112), OW.e(142), OW.e(245), OW.e(244), OW.e(306), OW.e(243), OW.e(222), OW.e(50), OW.e(223), OW.e(127), OW.e(214), OW.e(280), OW.e(143), OW.e(103), OW.e(69)]).then((()  … [truncated]
+         iW.loadAudio(WW), cW = iW;
+         for (const WW of LW) wW(WW, iW);
```

#### 88. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2497-L2528` → after: `L2344-L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2344-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2344-L2349) · [Before (L2497-L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2497-L2528)

```diff
-       extract(ee) {
-         return zi.create(ee)
-       }
-       exclude(ee) {
-         return zi.create(this.options.filter((ie => !ee.includes(ie))))
-       }
-     }
-     zi.create = Xi;
-     class Bi extends Ye {
-       _parse(ee) {
-         const ie = Ue.getValidEnumValues(this._def.values),
-           He = this._getOrReturnCtx(ee);
-         if (He.parsedType !== oe.string && He.parsedType !== oe.number) {
-           const ee = Ue.objectValues(ie);
-           return ze(He, {
-             expected: Ue.joinValues(ee),
- ... (16 more removed lines; see GitHub link above)
+     }
+ 
+     function AW(WW, iW) {
+       NW = {
+         running: WW,
+         shell: iW
```

#### 89. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2531-L2534` → after: `L2352-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2352-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2352-L2374) · [Before (L2531-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2531-L2534)

```diff
-     Bi.create = (ee, ie) => new Bi({
-       values: ee,
-       typeName: ai.ZodNativeEnum,
-       ...Ae(ie)
+ 
+     function bW() {
+       return PW
+     }
+     async function jW(WW) {
+       const iW = NW;
+       if ((null === iW || void 0 === iW ? void 0 : iW.running) !== WW) throw new Error("the core's session has ended");
+       const OW = await xW(iW.shell.audio).catch((WW => {
+         throw new mW(WW)
+       }));
+       if (null !== PW) return PW;
+       if (NW !== iW || WW.isStopped) throw new Error("the core stopped while the game code loaded");
+       if (PW = OW.startGameHost(WW, iW.shell), null === PW) throw new Error("the core's shared tables didn't read, so the game can't start");
+       return PW
+     }
+ 
+ ... (7 more added lines; see GitHub link above)
```

#### 90. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2536-L2559` → after: `L2376-L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2376-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2376-L2400) · [Before (L2536-L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2536-L2559)

```diff
-     class Ei extends Ye {
-       unwrap() {
-         return this._def.type
-       }
-       _parse(ee) {
-         const {
-           ctx: ie
-         } = this._processInputParams(ee);
-         if (ie.parsedType !== oe.promise && !1 === ie.common.async) return ze(ie, {
-           code: ke.invalid_type,
-           expected: oe.promise,
-           received: ie.parsedType
-         }), Ee;
-         const He = ie.parsedType === oe.promise ? ie.data : Promise.resolve(ie.data);
-         return Oe(He.then((ee => this._def.type.parseAsync(ee, {
-           path: ie.path,
- ... (8 more removed lines; see GitHub link above)
+     const mW = {
+       extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object", "OES_element_index_uint", "OES_standard_derivatives"],
+       limits: {
+         MAX_VERTEX_ATTRIBS: 16,
+         MAX_TEXTURE_SIZE: 2048,
+         MAX_TEXTURE_IMAGE_UNITS: 8,
+         MAX_VARYING_VECTORS: 8,
+         MAX_VERTEX_UNIFORM_VECTORS: 128,
+         MAX_FRAGMENT_UNIFORM_VECTORS: 34
+       },
+       vertexHighFloatBits: 23
+     }
+   },
+   42307: (WW, iW, OW) => {
+     OW.d(iW, {
+       B: () => LW,
+ ... (9 more added lines; see GitHub link above)
```

#### 91. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2561-L2563` → after: `L2402-L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2402-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2402-L2413) · [Before (L2561-L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2561-L2563)

```diff
-     class gi extends Ye {
-       innerType() {
-         return this._def.schema
+     var mW = OW(1930);
+     const EW = new Uint8Array([12]),
+       NW = 2e3,
+       PW = 257;
+ 
+     function LW(WW) {
+       const iW = new Uint8Array(4);
+       return new DataView(iW.buffer).setUint32(0, WW, !0), iW
+     }
+     class cW extends Error {
+       constructor() {
+         super("the game was left while it reconnected"), this.name = "AbortError"
```

#### 92. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2565-L2566` → after: `L2415-L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2415-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2415-L2421) · [Before (L2565-L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2565-L2566)

```diff
-       sourceType() {
-         return this._def.schema._def.typeName === ai.ZodEffects ? this._def.schema.sourceType() : this._def.schema
+     }
+     class wW extends Error {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         super(WW), this.stage = iW, this.code = OW, this.serverText = mW, this.socketOpened = EW, this.name = "JoinError"
```

#### 93. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2568-L2665` → after: `L2423-L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2423-L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2423-L2426) · [Before (L2568-L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2568-L2665)

```diff
-       _parse(ee) {
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee), ye = this._def.effect || null, be = {
-           addIssue: ee => {
-             ze(He, ee), ee.fatal ? ie.abort() : ie.yT()
-           },
-           get path() {
-             return He.path
-           }
-         };
-         if (be.addIssue = be.addIssue.bind(be), "preprocess" === ye.type) {
-           const ee = ye.transform(He.data, be);
-           return He.common.issues.length ? {
-             status: "yT",
- ... (82 more removed lines; see GitHub link above)
+     }
+     class tW extends Error {
+       constructor(WW) {
+         super(WW), this.final = !0, this.name = "ResumeRefusedError"
```

#### 94. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2667-L2668` → after: `L2428-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2428-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2428-L2433) · [Before (L2667-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2667-L2668)

```diff
-       unwrap() {
-         return this._def.innerType
+     }
+     class ZW extends Error {
+       constructor(WW) {
+         super((0, mW.f)(WW), {
+           cause: WW
+         }), this.name = "TrafficCheckError"
```

#### 95. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2671-L2678` → after: `L2436-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2436-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2436-L2441) · [Before (L2671-L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2671-L2678)

```diff
-     Oi.create = (ee, ie) => new Oi({
-       innerType: ee,
-       typeName: ai.ZodOptional,
-       ...Ae(ie)
-     });
-     class di extends Ye {
-       _parse(ee) {
-         return this._getType(ee) === oe.null ? Oe(null) : this._def.innerType._parse(ee)
+     class xW extends Error {
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         super(WW, {
+           cause: OW
+         }), this.networkLost = iW, this.httpStatus = mW, this.name = "SeatRequestError"
```

#### 96. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2680-L2681` → after: `L2443-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2443-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2443-L2447) · [Before (L2680-L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2680-L2681)

```diff
-       unwrap() {
-         return this._def.innerType
+     }
+     class lW extends Error {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         super(WW), this.code = iW, this.serverText = OW, this.name = "MatchmakeError"
```

#### 97. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2684-L2687` → after: `L2450-L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2450-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2450-L2455) · [Before (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2684-L2687)

```diff
-     di.create = (ee, ie) => new di({
-       innerType: ee,
-       typeName: ai.ZodNullable,
-       ...Ae(ie)
+   },
+   42309: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => lW,
+       e: () => xW,
+       f: () => AW
```

#### 98. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2689-L2702` → after: `L2457-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2457-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2457-L2472) · [Before (L2689-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2689-L2702)

```diff
-     class Wi extends Ye {
-       _parse(ee) {
-         const {
-           ctx: ie
-         } = this._processInputParams(ee);
-         let He = ie.data;
-         return ie.parsedType === oe.undefined && (He = this._def.defaultValue()), this._def.innerType._parse({
-           data: He,
-           path: ie.path,
-           parent: ie
-         })
-       }
-       removeDefault() {
-         return this._def.innerType
+     var mW = OW(3637),
+       EW = OW(2464),
+       NW = OW(40267),
+       PW = OW(37727),
+       LW = OW(40269),
+       cW = OW(42307),
+       wW = OW(42316);
+     const tW = "seat reservation expired.",
+       ZW = "early_leave";
+ 
+     function xW(WW) {
+       if (WW instanceof PW.c) return "expected";
+       if (WW instanceof cW.v) return WW.networkLost ? "expected" : "unrecognised";
+       if (WW instanceof cW.c) {
+         if ("closed" === WW.stage && (0 === WW.code || (0, EW.f)(WW.code))) return "expected";
+         if ("roomError" === WW.stage && (WW.serverText === tW || WW.serverText === ZW)) return "expected"
```

#### 99. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2705-L2709` → after: `L2487-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2487-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2487-L2493) · [Before (L2705-L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2705-L2709)

```diff
-     Wi.create = (ee, ie) => new Wi({
-       innerType: ee,
-       typeName: ai.ZodDefault,
-       defaultValue: "function" === typeof ie.default ? ie.default : () => ie.default,
-       ...Ae(ie)
+   },
+   42330: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW,
+       c: () => wW,
+       f: () => lW,
+       h: () => ZW
```

#### 100. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2711-L2744` → after: `L2495-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2495-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2495-L2505) · [Before (L2711-L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2711-L2744)

```diff
-     class ti extends Ye {
-       _parse(ee) {
-         const {
-           ctx: ie
-         } = this._processInputParams(ee), He = {
-           ...ie,
-           common: {
-             ...ie.common,
-             issues: []
-           }
-         }, ye = this._def.innerType._parse({
-           data: He.data,
-           path: He.path,
-           parent: {
-             ...He
-           }
- ... (18 more removed lines; see GitHub link above)
+     var mW = OW(2388),
+       EW = OW(5546),
+       NW = OW(42339),
+       PW = OW(42344),
+       LW = OW(37265);
+     const cW = 395,
+       wW = 2147483648,
+       tW = new Uint8Array(0);
+     class ZW extends Error {
+       constructor() {
+         super(...arguments), this.name = "ModelRingError"
```

#### 101. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2746-L2747` → after: `L2507-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2507-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2507-L2510) · [Before (L2746-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2746-L2747)

```diff
-       removeCatch() {
-         return this._def.innerType
+     }
+     class xW extends Error {
+       constructor() {
+         super(...arguments), this.name = "ModelPackRefusedError"
```

#### 102. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2750-L2768` → after: `L2513-L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2513-L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2513-L2560) · [Before (L2750-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2750-L2768)

```diff
-     ti.create = (ee, ie) => new ti({
-       innerType: ee,
-       typeName: ai.ZodCatch,
-       catchValue: "function" === typeof ie.catch ? ie.catch : () => ie.catch,
-       ...Ae(ie)
-     });
-     class Zi extends Ye {
-       _parse(ee) {
-         if (this._getType(ee) !== oe.nan) {
-           const ie = this._getOrReturnCtx(ee);
-           return ze(ie, {
-             code: ke.invalid_type,
-             expected: oe.nan,
-             received: ie.parsedType
-           }), Ee
-         }
- ... (3 more removed lines; see GitHub link above)
+     class lW {
+       constructor(WW, iW, OW) {
+         var mW, EW, PW, LW;
+         let cW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+         this.files = WW, this.build = iW, this.onFailure = OW, this.ready = [], this.pending = new Map, this.written = new Map, this.drawn = new Map, this.undrawn = new Set, this.EZ = new Map, this.keptTotal = 0, this.refusedPack = new Map, this.startupLeft = void 0, this.fetchFi … [truncated]
+         for (const NW of WW.startup) this.request(NW)
+       }
+       get startupDone() {
+         return 0 === this.startupLeft.size
+       }
+       get waiting() {
+         return this.ready.length
+       }
+       get asking() {
+         return this.pending.size
+       }
+ ... (32 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2771-L2778` → after: `L2584-L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2584-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2584-L2590) · [Before (L2771-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2771-L2778)

```diff
-     }
-     Zi.create = ee => new Zi({
-       typeName: ai.ZodNaN,
-       ...Ae(ee)
-     });
-     const wi = Symbol("zod_brand");
-     class Di extends Ye {
-       _parse(ee) {
+       taken(WW, iW) {
+         const OW = new Set,
+           mW = new Set;
+         for (const EW of Array.from(iW)) 0 === (EW & wW) ? OW.add(EW) : mW.add((EW & ~wW) >>> 0);
+         for (const [EW, NW] of this.written) NW.seq > WW || (this.written.delete(EW), OW.has(NW.seq) ? this.refusedFile(EW, NW) : this.takenFile(EW, NW, !NW.empty && !mW.has(NW.seq)))
+       }
+       takenFile(WW, iW, OW) {
```

#### 104. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2780-L2786` → after: `L2592-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2592-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2592-L2606) · [Before (L2780-L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2780-L2786)

```diff
-           ctx: ie
-         } = this._processInputParams(ee), He = ie.data;
-         return this._def.type._parse({
-           data: He,
-           path: ie.path,
-           parent: ie
-         })
+           attempt: mW
+         } = iW;
+         if (OW) {
+           var EW;
+           this.drawn.set(WW, iW.url), this.undrawn.delete(WW), void 0 !== mW.inPlaceOf ? this.refusedPack.set(WW, mW.inPlaceOf) : mW.BL || this.refusedPack.delete(WW), null === (EW = this.onTaken) || void 0 === EW || EW.call(this, WW, !0);
+           const OW = this.pending.get(WW);
+           if (!0 === (null === OW || void 0 === OW ? void 0 : OW.BL) && OW.url !== iW.url) {
+             const OW = this.kZ(WW, !0);
+             OW.BL = !0, OW.recheck = !0, this.fetch(WW, OW, iW.url)
+           }
+         } else {
+           var NW;
+           this.drawn.has(WW) || this.undrawn.add(WW), null === (NW = this.onTaken) || void 0 === NW || NW.call(this, WW, !1)
+         }
+         mW.recheck && this.resendIfChanged(WW)
```

#### 105. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2788-L2789` → after: `L2608-L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2608-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2608-L2612) · [Before (L2788-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2788-L2789)

```diff
-       unwrap() {
-         return this._def.type
+       refusedFile(WW, iW) {
+         var OW, mW;
+         if (null === (OW = this.onTaken) || void 0 === OW || OW.call(this, WW, !1), this.refusedPack.set(WW, iW.url), this.pending.has(WW)) return void(null === (mW = this.onPackFileFailed) || void 0 === mW || mW.call(this, WW, AW(iW.url)));
+         const EW = this.kZ(WW, iW.attempt.ask);
+         EW.recheck = iW.attempt.recheck, this.afterRefusal(WW, EW, iW.url)
```

#### 106. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2791-L2824` → after: `L2614-L2620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2614-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2614-L2620) · [Before (L2791-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2791-L2824)

```diff
-     }
-     class Pi extends Ye {
-       _parse(ee) {
-         const {
-           status: ie,
-           ctx: He
-         } = this._processInputParams(ee);
-         if (He.common.async) {
-           return (async () => {
-             const ee = await this._def.in._parseAsync({
-               data: He.data,
-               path: He.path,
-               parent: He
-             });
-             return "aborted" === ee.status ? Ee : "yT" === ee.status ? (ie.yT(), ge(ee.value)) : this._def.out._parseAsync({
-               data: ee.value,
- ... (18 more removed lines; see GitHub link above)
+       async afterRefusal(WW, iW, OW) {
+         var mW;
+         let EW;
+         try {
+           EW = await this.wanted(WW)
+         } catch (NW) {
+           return void(this.pending.get(WW) === iW && this.giveUp(WW, iW, OW, NW))
```

#### 107. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2827-L2832` → after: `L2624-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2624-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2624-L2634) · [Before (L2827-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2827-L2832)

```diff
-       static create(ee, ie) {
-         return new Pi({
-           in: ee,
-           out: ie,
-           typeName: ai.ZodPipeline
-         })
+       kZ(WW, iW) {
+         const OW = {
+           url: void 0,
+           ask: iW,
+           BL: !1,
+           recheck: !1,
+           inPlaceOf: void 0
+         };
+         this.pending.set(WW, OW);
+         for (let mW = this.ready.length - 1; mW >= 0; mW--) this.ready[mW].file === WW && this.ready.splice(mW, 1);
+         return OW
```

#### 108. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2834-L2838` → after: `L2636-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2636-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2636-L2644) · [Before (L2834-L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2834-L2838)

```diff
-     }
-     class Ai extends Ye {
-       _parse(ee) {
-         const ie = this._def.innerType._parse(ee);
-         return te(ie) && (ie.value = Object.freeze(ie.value)), ie
+       async wanted(WW) {
+         const iW = await this.files.url(WW);
+         return null !== iW && this.refusedPack.get(WW) === iW ? {
+           url: await this.files.shippedUrl(WW),
+           inPlaceOf: iW
+         } : {
+           url: iW,
+           inPlaceOf: void 0
+         }
```

#### 109. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2840-L2849` → after: `L2646-L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2646-L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2646-L2666) · [Before (L2840-L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2840-L2849)

```diff
-     }
-     Ai.create = (ee, ie) => new Ai({
-       innerType: ee,
-       typeName: ai.ZodReadonly,
-       ...Ae(ie)
-     });
-     const Yi = function(ee) {
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           He = arguments.length > 2 ? arguments[2] : void 0;
-         return ee ? Ge.create().superRefine(((ye, be) => {
+       fetchWanted(WW, iW) {
+         const OW = this.files.url(WW);
+         OW instanceof Promise ? OW.then((OW => {
+           this.fetchFound(WW, iW, OW)
+         }), (OW => {
+           this.pending.get(WW) === iW && this.giveUp(WW, iW, "", OW)
+         })) : this.fetchFound(WW, iW, OW)
+       }
+       fetchFound(WW, iW, OW) {
+         null !== OW && this.refusedPack.get(WW) === OW ? Promise.resolve(this.files.shippedUrl(WW)).then((mW => {
+           this.fetch(WW, iW, mW, OW)
+         }), (mW => {
+           this.pending.get(WW) === iW && this.giveUp(WW, iW, OW, mW)
+         })) : this.fetch(WW, iW, OW)
+       }
+       fetch(WW, iW, OW, mW) {
+ ... (5 more added lines; see GitHub link above)
```

#### 110. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L2851-L3015` → after: `L2668-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2668-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2668-L2690) · [Before (L2851-L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L2851-L3015)

```diff
-           if (!ee(ye)) {
-             const ee = "function" === typeof ie ? ie(ye) : "string" === typeof ie ? {
-                 message: ie
-               } : ie,
-               Ue = null === (Ke = null !== (Me = ee.fatal) && void 0 !== Me ? Me : He) || void 0 === Ke || Ke,
-               Fe = "string" === typeof ee ? {
-                 message: ee
-               } : ee;
-             be.addIssue({
-               code: "custom",
-               ...Fe,
-               fatal: Ue
-             })
-           }
-         })) : Ge.create()
-       },
- ... (149 more removed lines; see GitHub link above)
+           this.pending.get(WW) === iW && (this.keptTotal += mW.byteLength - (null !== (EW = null === (NW = this.EZ.get(WW)) || void 0 === NW ? void 0 : NW.glb.byteLength) && void 0 !== EW ? EW : 0), this.EZ.set(WW, {
+             url: OW,
+             glb: mW
+           }), this.buildFile(WW, iW, OW, mW))
+         }), (mW => {
+           this.pending.get(WW) === iW && this.fallBack(WW, iW, OW, mW)
+         })) : this.buildFile(WW, iW, OW, mW.glb)
+       }
+       buildFile(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PW = mW.byteLength > 0 && (0, NW.i)(OW) ? (WW | NW.c) >>> 0 : WW;
+         this.queueRecord(WW, iW, OW, mW, this.build(PW, mW), EW)
+       }
+       queueRecord(WW, iW, OW, mW, NW, LW) {
+         NW.then((NW => {
+           if (this.pending.get(WW) !== iW) return;
+ ... (7 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3017-L3085` → after: `L2692-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2692-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2692-L2702) · [Before (L3017-L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3017-L3085)

```diff
-           return Yi((ie => ie instanceof ee), ie)
-         },
-         intersection: iH,
-         lazy: UH,
-         literal: FH,
-         map: bH,
-         nan: Li,
-         nativeEnum: oH,
-         never: si,
-         null: Si,
-         nullable: fH,
-         number: xi,
-         object: Gi,
-         oboolean: () => vi().optional(),
-         onumber: () => xi().optional(),
-         optional: qH,
- ... (53 more removed lines; see GitHub link above)
+           LW ? this.ready.unshift(cW) : this.ready.push(cW)
+         }))
+       }
+       async fallBack(WW, iW, OW, mW) {
+         var EW;
+         let NW = null,
+           PW = mW;
+         try {
+           NW = await this.files.shippedUrl(WW)
+         } catch (LW) {
+           PW = LW
```

#### 112. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3087-L3099` → after: `L2704-L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2704-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2704-L2759) · [Before (L3087-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3087-L3099)

```diff
- 
-         function qe(ee) {
-           fe(ee);
-           var ie = ee.length;
-           if (ie < 4 && Ae(ee, be) < 0) switch (ie) {
-             case 0:
-               return 0;
-             case 1:
-               return ee[0];
-             case 2:
-               return ee[0] + ee[1] * He;
-             default:
-               return ee[0] + (ee[1] + ee[2] * He) * He
+         this.pending.get(WW) === iW && (null !== NW && NW !== OW ? (null === (EW = this.onPackFileFailed) || void 0 === EW || EW.call(this, WW, mW), iW.ask || this.drawn.get(WW) !== NW ? (iW.url = NW, iW.inPlaceOf = OW, this.load(WW, iW, NW)) : this.pending.delete(WW)) : this.giv … [truncated]
+       }
+       ringRefused(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         (0, NW.i)(OW) ? this.fallBack(WW, iW, OW, mW): this.giveUp(WW, iW, OW, mW, EW)
+       }
+       giveUp(WW, iW, OW, EW) {
+         let NW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         this.onFailure({
+           file: WW,
+           url: bW(OW),
+           error: EW,
+           startup: this.startupLeft.has(WW)
+         }), iW.ask || !this.drawn.has(WW) ? (0, mW.N)(EW) ? this.queueRecord(WW, iW, OW, tW, Promise.resolve((0, PW.i)(WW, (0, LW.m)(EW))), NW) : this.buildFile(WW, iW, OW, tW, NW) : this.pending.delete(WW)
+       }
+       async resendIfChanged(WW) {
+ ... (40 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3109-L3112` → after: `L2765-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2765-L2767) · [Before (L3109-L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3109-L3112)

```diff
-         function Te(ee) {
-           for (var ie = new Array(ee), He = -1; ++He < ee;) ie[He] = 0;
-           return ie
-         }
+     function AW(WW) {
+       return new xW(`presentation refused ${bW(WW)}`)
+     }
```

#### 114. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3114-L3116` → after: `L2769-L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2769-L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2769-L2785) · [Before (L3114-L3116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3114-L3116)

```diff
-         function pe(ee) {
-           return ee > 0 ? Math.floor(ee) : Math.ceil(ee)
-         }
+     function bW(WW) {
+       return WW.startsWith("data:") ? `${WW.slice(0,Math.min(Math.max(WW.indexOf(","),5),64))},...` : WW
+     }
+   },
+   42339: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => PW,
+       d: () => NW,
+       h: () => tW,
+       i: () => LW,
+       l: () => wW,
+       p: () => cW
+     });
+     var mW = OW(2388),
+       EW = OW(4390);
+     const NW = 2147483648,
+ ... (1 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3118-L3127` → after: `L2787-L2789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2787-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2787-L2789) · [Before (L3118-L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3118-L3127)

```diff
-         function Xe(ee, ie) {
-           var ye, be, Me = ee.length,
-             Ke = ie.length,
-             Ue = new Array(Me),
-             Fe = 0,
-             Je = He;
-           for (be = 0; be < Ke; be++) Fe = (ye = ee[be] + ie[be] + Fe) >= Je ? 1 : 0, Ue[be] = ye - Fe * Je;
-           for (; be < Me;) Fe = (ye = ee[be] + Fe) === Je ? 1 : 0, Ue[be++] = ye - Fe * Je;
-           return Fe > 0 && Ue.push(Fe), Ue
-         }
+     function LW(WW) {
+       return WW.startsWith("data:")
+     }
```

#### 116. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3129-L3131` → after: `L2791-L2814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2791-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2791-L2814) · [Before (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3129-L3131)

```diff
-         function ze(ee, ie) {
-           return ee.length >= ie.length ? Xe(ee, ie) : Xe(ie, ee)
-         }
+     function cW(WW) {
+       let {
+         onTableFailed: iW,
+         packUrl: OW
+       } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+       const mW = wW();
+       mW.catch((WW => {
+         null === iW || void 0 === iW || iW(WW)
+       }));
+       const EW = async iW => (await mW).fileUrl((iW & ~NW) >>> 0, WW);
+       return {
+         startup: [],
+         url: async WW => {
+           if (OW && 0 === (WW & NW)) {
+             const iW = await mW,
+               EW = iW.filePackName(WW),
+ ... (8 more added lines; see GitHub link above)
```

#### 117. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3133-L3140` → after: `L2816-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2816-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2816-L2841) · [Before (L3133-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3133-L3140)

```diff
-         function Be(ee, ie) {
-           var ye, be, Me = ee.length,
-             Ke = new Array(Me),
-             Ue = He;
-           for (be = 0; be < Me; be++) ye = ee[be] - Ue + ie, ie = Math.floor(ye / Ue), Ke[be] = ye - ie * Ue, ie += 1;
-           for (; ie > 0;) Ke[be++] = ie % Ue, ie = Math.floor(ie / Ue);
-           return Ke
-         }
+     function wW() {
+       return OW.e(50).then((() => OW(44924)))
+     }
+     async function tW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+       return WW.startsWith("data:") ? (0, EW.c)(WW.slice(WW.indexOf(",") + 1), iW) : (0, mW.C)(WW, {
+         spare: iW
+       })
+     }
+   },
+   42344: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW,
+       d: () => wW,
+       e: () => AW,
+       i: () => xW,
+ ... (10 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3142-L3158` → after: `L2843-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2843-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2843-L2851) · [Before (L3142-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3142-L3158)

```diff
-         function Ee(ee, ie) {
-           var ye, be, Me = ee.length,
-             Ke = ie.length,
-             Ue = new Array(Me),
-             Fe = 0,
-             Je = He;
-           for (ye = 0; ye < Ke; ye++)(be = ee[ye] - Fe - ie[ye]) < 0 ? (be += Je, Fe = 1) : Fe = 0, Ue[ye] = be;
-           for (ye = Ke; ye < Me; ye++) {
-             if (!((be = ee[ye] - Fe) < 0)) {
-               Ue[ye++] = be;
-               break
-             }
-             be += Je, Ue[ye] = be
-           }
-           for (; ye < Me; ye++) Ue[ye] = ee[ye];
-           return fe(Ue), Ue
- ... (1 more removed lines; see GitHub link above)
+     function tW(WW, iW, OW) {
+       const EW = (new TextEncoder).encode(OW),
+         NW = cW + 4 * (iW.length + 2),
+         PW = new Uint8Array(NW + (EW.byteLength + 3 & -4)),
+         LW = new DataView(PW.buffer);
+       return LW.setUint32(0, WW, !0), LW.setUint32(cW, mW, !0), iW.forEach(((WW, iW) => {
+         LW.setUint32(cW + 4 * (iW + 1), WW, !0)
+       })), LW.setUint32(NW - 4, EW.byteLength, !0), PW.set(EW, NW), PW
+     }
```

#### 119. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3160-L3167` → after: `L2853-L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2853-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2853-L2855) · [Before (L3160-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3160-L3167)

```diff
-         function ge(ee, ie, ye) {
-           var be, Me, Ke = ee.length,
-             Ue = new Array(Ke),
-             oe = -ie,
-             Re = He;
-           for (be = 0; be < Ke; be++) Me = ee[be] + oe, oe = Math.floor(Me / Re), Me %= Re, Ue[be] = Me < 0 ? Me + Re : Me;
-           return "number" === typeof(Ue = qe(Ue)) ? (ye && (Ue = -Ue), new Je(Ue)) : new Fe(Ue, ye)
-         }
+     function ZW(WW, iW) {
+       return tW(WW, [NW], iW)
+     }
```

#### 120. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3169-L3179` → after: `L2857-L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2857-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2857-L2859) · [Before (L3169-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3169-L3179)

```diff
-         function Oe(ee, ie) {
-           var ye, be, Me, Ke, Ue = ee.length,
-             Fe = ie.length,
-             Je = Te(Ue + Fe),
-             oe = He;
-           for (Me = 0; Me < Ue; ++Me) {
-             Ke = ee[Me];
-             for (var Re = 0; Re < Fe; ++Re) ye = Ke * ie[Re] + Je[Me + Re], be = Math.floor(ye / oe), Je[Me + Re] = ye - be * oe, Je[Me + Re + 1] += be
-           }
-           return fe(Je), Je
-         }
+     function xW(WW, iW) {
+       return tW(WW, [EW, LW], iW)
+     }
```

#### 121. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3181-L3189` → after: `L2861-L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2861-L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2861-L2863) · [Before (L3181-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3181-L3189)

```diff
-         function de(ee, ie) {
-           var ye, be, Me = ee.length,
-             Ke = new Array(Me),
-             Ue = He,
-             Fe = 0;
-           for (be = 0; be < Me; be++) ye = ee[be] * ie + Fe, Fe = Math.floor(ye / Ue), Ke[be] = ye - Fe * Ue;
-           for (; Fe > 0;) Ke[be++] = Fe % Ue, Fe = Math.floor(Fe / Ue);
-           return Ke
-         }
+     function lW(WW, iW) {
+       return tW(WW, [EW, PW], iW)
+     }
```

#### 122. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3191-L3194` → after: `L2865-L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2865-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2865-L2888) · [Before (L3191-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3191-L3194)

```diff
-         function We(ee, ie) {
-           for (var He = []; ie-- > 0;) He.push(0);
-           return He.concat(ee)
-         }
+     function AW(WW) {
+       const iW = cW;
+       if (WW.byteLength < iW + 12) return !1;
+       const OW = new DataView(WW.buffer, WW.byteOffset, WW.byteLength);
+       return OW.getUint32(iW, !0) === mW && OW.getUint32(iW + 4, !0) === EW && OW.getUint32(iW + 8, !0) === PW
+     }
+   },
+   42225: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       f: () => tW,
+       i: () => PW,
+       k: () => cW
+     });
+     var mW = OW(37265);
+     class EW extends Error {
+ ... (8 more added lines; see GitHub link above)
```

#### 123. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3196-L3209` → after: `L2890-L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2890-L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2890-L2892) · [Before (L3196-L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3196-L3209)

```diff
-         function te(ee, ie) {
-           var He = Math.max(ee.length, ie.length);
-           if (He <= 30) return Oe(ee, ie);
-           He = Math.ceil(He / 2);
-           var ye = ee.slice(He),
-             be = ee.slice(0, He),
-             Me = ie.slice(He),
-             Ke = ie.slice(0, He),
-             Ue = te(be, Ke),
-             Fe = te(ye, Me),
-             Je = te(ze(be, ye), ze(Ke, Me)),
-             oe = ze(ze(Ue, We(Ee(Ee(Je, Ue), Fe), He)), We(Fe, 2 * He));
-           return fe(oe), oe
-         }
+     function PW(WW) {
+       return NW.has(WW)
+     }
```

#### 124. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3211-L3213` → after: `L2894-L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2894-L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2894-L2896) · [Before (L3211-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3211-L3213)

```diff
-         function Ze(ee, ie, ye) {
-           return new Fe(ee < He ? de(ie, ee) : Oe(ie, ke(ee)), ye)
-         }
+     function LW(WW, iW) {
+       NW.has(WW) || NW.set(WW, iW)
+     }
```

#### 125. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3215-L3225` → after: `L2898-L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2898-L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2898-L2904) · [Before (L3215-L3225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3215-L3225)

```diff
-         function we(ee) {
-           var ie, ye, be, Me, Ke = ee.length,
-             Ue = Te(Ke + Ke),
-             Fe = He;
-           for (be = 0; be < Ke; be++) {
-             ye = 0 - (Me = ee[be]) * Me;
-             for (var Je = be; Je < Ke; Je++) ie = Me * ee[Je] * 2 + Ue[be + Je] + ye, ye = Math.floor(ie / Fe), Ue[be + Je] = ie - ye * Fe;
-             Ue[be + Ke] = ye
-           }
-           return fe(Ue), Ue
-         }
+     function cW(WW, iW) {
+       return !!(0, mW.i)(iW) && (LW(WW, iW), !0)
+     }
+     const wW = [
+       ["error", WW => WW.error],
+       ["unhandledrejection", WW => WW.reason]
+     ];
```

#### 126. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3227-L3232` → after: `L2906-L2930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2906-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2906-L2930) · [Before (L3227-L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3227-L3232)

```diff
-         function De(ee, ie) {
-           var ye, be, Me, Ke, Ue = ee.length,
-             Fe = Te(Ue),
-             Je = He;
-           for (Me = 0, ye = Ue - 1; ye >= 0; --ye) Me = (Ke = Me * Je + ee[ye]) - (be = pe(Ke / ie)) * ie, Fe[ye] = 0 | be;
-           return [Fe, 0 | Me]
+     function tW(WW, iW, OW) {
+       let PW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "function" === typeof globalThis.addEventListener ? globalThis : null;
+       return NW.has(WW) ? Promise.reject(new EW(iW, NW.get(WW), !0)) : new Promise(((NW, cW) => {
+         const tW = OW => {
+             LW(WW, OW), lW(), cW(new EW(iW, OW))
+           },
+           ZW = WW => {
+             WW instanceof WebAssembly.RuntimeError ? tW(WW) : (lW(), cW(WW))
+           },
+           xW = wW.map((WW => {
+             let [iW, OW] = WW;
+             return [iW, WW => {
+               const iW = OW(WW);
+               (0, mW.i)(iW) && tW(iW)
+             }]
+           })),
+ ... (9 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3235-L3290` → after: `L2980-L2983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2980-L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2980-L2983) · [Before (L3235-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3235-L3290)

```diff
-         function Pe(ee, ie) {
-           var ye, be = Ge(ie);
-           if (Ke) return [new oe(ee.value / be.value), new oe(ee.value % be.value)];
-           var Me, Re = ee.value,
-             Xe = be.value;
-           if (0 === Xe) throw new Error("Cannot divide by zero");
-           if (ee.isSmall) return be.isSmall ? [new Je(pe(Re / Xe)), new Je(Re % Xe)] : [Ue[0], ee];
-           if (be.isSmall) {
-             if (1 === Xe) return [ee, Ue[0]];
-             if (-1 == Xe) return [ee.ck(), Ue[0]];
-             var ze = Math.abs(Xe);
-             if (ze < He) {
-               Me = qe((ye = De(Re, ze))[0]);
-               var Be = ye[1];
-               return ee.sign && (Be = -Be), "number" === typeof Me ? (ee.sign !== be.sign && (Me = -Me), [new Je(Me), new Je(Be)]) : [new Fe(Me, ee.sign !== be.sign), new Je(Be)]
-             }
- ... (40 more removed lines; see GitHub link above)
+     function KW(WW) {
+       MW = WW
+     }
+     let SW = !1;
```

#### 128. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3292-L3297` → after: `L2985-L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2985-L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2985-L2987) · [Before (L3292-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3292-L3297)

```diff
-         function Ae(ee, ie) {
-           if (ee.length !== ie.length) return ee.length > ie.length ? 1 : -1;
-           for (var He = ee.length - 1; He >= 0; He--)
-             if (ee[He] !== ie[He]) return ee[He] > ie[He] ? 1 : -1;
-           return 0
-         }
+     function YW() {
+       SW = !0
+     }
```

#### 129. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3299-L3302` → after: `L2989-L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2989-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2989-L2992) · [Before (L3299-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3299-L3302)

```diff
-         function Ye(ee) {
-           var ie = ee.abs();
-           return !ie.isUnit() && (!!(ie.equals(2) || ie.equals(3) || ie.equals(5)) || !(ie.isEven() || ie.isDivisibleBy(3) || ie.isDivisibleBy(5)) && (!!ie.lesser(49) || void 0))
-         }
+     function yW() {
+       return SW
+     }
+     let TW = !1;
```

#### 130. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3304-L3561` → after: `L2994-L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2994-L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2994-L2996) · [Before (L3304-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3304-L3561)

```diff
-         function Ve(ee, He) {
-           for (var ye, be, Me, Ke = ee.prev(), Ue = Ke, Fe = 0; Ue.isEven();) Ue = Ue.divide(2), Fe++;
-           ee: for (be = 0; be < He.length; be++)
-             if (!ee.lesser(He[be]) && !(Me = ie(He[be]).modPow(Ue, ee)).isUnit() && !Me.equals(Ke)) {
-               for (ye = Fe - 1; 0 != ye; ye--) {
-                 if ((Me = Me.square().mod(ee)).isUnit()) return !1;
-                 if (Me.equals(Ke)) continue ee
-               }
-               return !1
-             }
-           return !0
-         }
-         Fe.prototype = Object.create(Ue.prototype), Je.prototype = Object.create(Ue.prototype), oe.prototype = Object.create(Ue.prototype), Fe.prototype.add = function(ee) {
-           var ie = Ge(ee);
-           if (this.sign !== ie.sign) return this.subtract(ie.ck());
-           var He = this.value,
- ... (242 more removed lines; see GitHub link above)
+     function JW() {
+       TW = !0
+     }
```

#### 131. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3563-L3565` → after: `L2998-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L2998-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L2998-L3000) · [Before (L3563-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3563-L3565)

```diff
-         function Le(ee) {
-           return Math.abs(ee) <= He
-         }
+     function hW() {
+       return TW
+     }
```

#### 132. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3567-L3605` → after: `L3002-L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3002-L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3002-L3005) · [Before (L3567-L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3567-L3605)

```diff
-         function Ce(ee, He, ye) {
-           He = Ge(He);
-           for (var be = ee.isNegative(), Me = He.isNegative(), Ke = be ? ee.not() : ee, Ue = Me ? He.not() : He, Fe = 0, Je = 0, oe = null, Re = null, ke = []; !Ke.isZero() || !Ue.isZero();) Fe = (oe = Pe(Ke, xe))[1].toJSNumber(), be && (Fe = xe - 1 - Fe), Je = (Re = Pe(Ue, xe))[ … [truncated]
-           for (var qe = 0 !== ye(be ? 1 : 0, Me ? 1 : 0) ? ie(-1) : ie(0), fe = ke.length - 1; fe >= 0; fe -= 1) qe = qe.multiply(xe).add(ie(ke[fe]));
-           return qe
-         }
-         Fe.prototype.shiftLeft = function(ee) {
-           var ie = Ge(ee).toJSNumber();
-           if (!Le(ie)) throw new Error(String(ie) + " is too large for shifting.");
-           if (ie < 0) return this.shiftRight(-ie);
-           var He = this;
-           if (He.isZero()) return He;
-           for (; ie >= ce;) He = He.multiply(xe), ie -= ce - 1;
-           return He.multiply(ae[ie])
-         }, oe.prototype.shiftLeft = Je.prototype.shiftLeft = Fe.prototype.shiftLeft, Fe.prototype.shiftRight = function(ee) {
-           var ie, He = Ge(ee).toJSNumber();
- ... (23 more removed lines; see GitHub link above)
+     function HW() {
+       return MW
+     }
+     let nW = null;
```

#### 133. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3607-L3611` → after: `L3007-L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3007-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3007-L3010) · [Before (L3607-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3607-L3611)

```diff
-         function ue(ee) {
-           var ie = ee.value,
-             ye = "number" === typeof ie ? ie | ve : "bigint" === typeof ie ? ie | BigInt(ve) : ie[0] + ie[1] * He | 1073758208;
-           return ye & -ye
-         }
+     function uW(WW) {
+       nW = WW, (0, LW.c)(WW)
+     }
+     const oW = "wasmClientRenderLost";
```

#### 134. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3613-L3631` → after: `L3012-L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3012-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3012-L3014) · [Before (L3613-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3613-L3631)

```diff
-         function me(ee, He) {
-           if (He.compareTo(ee) <= 0) {
-             var ye = me(ee, He.square(He)),
-               be = ye.p,
-               Me = ye.e,
-               Ke = be.multiply(He);
-             return Ke.compareTo(ee) <= 0 ? {
-               p: Ke,
-               e: 2 * Me + 1
-             } : {
-               p: be,
-               e: 2 * Me
-             }
-           }
-           return {
-             p: ie(1),
- ... (3 more removed lines; see GitHub link above)
+     function dW() {
+       cW.j.setItem(oW, !0)
+     }
```

#### 135. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3633-L3635` → after: `L3016-L3018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3016-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3016-L3018) · [Before (L3633-L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3633-L3635)

```diff
-         function le(ee, ie) {
-           return ee = Ge(ee), ie = Ge(ie), ee.greater(ie) ? ee : ie
-         }
+     function eW() {
+       return !0 === cW.j.getItem(oW)
+     }
```

#### 136. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3637-L3639` → after: `L3020-L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3020-L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3020-L3022) · [Before (L3637-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3637-L3639)

```diff
-         function Se(ee, ie) {
-           return ee = Ge(ee), ie = Ge(ie), ee.lesser(ie) ? ee : ie
-         }
+     function vW() {
+       return nW
+     }
```

#### 137. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3641-L3685` → after: `L3024-L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3024-L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3024-L3032) · [Before (L3641-L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3641-L3685)

```diff
-         function ne(ee, ie) {
-           if (ee = Ge(ee).abs(), ie = Ge(ie).abs(), ee.equals(ie)) return ee;
-           if (ee.isZero()) return ie;
-           if (ie.isZero()) return ee;
-           for (var He, ye, be = Ue[1]; ee.isEven() && ie.isEven();) He = Se(ue(ee), ue(ie)), ee = ee.divide(He), ie = ie.divide(He), be = be.multiply(He);
-           for (; ee.isEven();) ee = ee.divide(ue(ee));
-           do {
-             for (; ie.isEven();) ie = ie.divide(ue(ie));
-             ee.greater(ie) && (ye = ie, ie = ee, ee = ye), ie = ie.subtract(ee)
-           } while (!ie.isZero());
-           return be.isUnit() ? ee : ee.multiply(be)
-         }
-         Fe.prototype.bitLength = function() {
-           var ee = this;
-           return ee.compareTo(ie(0)) < 0 && (ee = ee.ck().subtract(ie(1))), 0 === ee.compareTo(ie(0)) ? ie(0) : ie(me(ee, ie(2)).e).add(ie(1))
-         }, oe.prototype.bitLength = Je.prototype.bitLength = Fe.prototype.bitLength;
- ... (29 more removed lines; see GitHub link above)
+     function gW() {
+       if (null === kW) {
+         cW.i.removeItem("wasmLastPick"), cW.i.removeItem("wasmGuessVerdict");
+         try {
+           localStorage.removeItem("wasmClientMisdrawnGpu"), localStorage.removeItem("wasmClientGameGpu")
+         } catch {}(0, LW.j)(), kW = (0, wW.p)().then((() => (0, tW.B)(lW.g))).then((WW => (null === WW || (0, tW.r)(WW) || (sW = AW.e[WW.backend], EW.d.followGameGpu("webgpu" === WW.backend ? WW.adapter : null), "webgpu" === WW.backend && (0, bW.d)()), WW)))
+       }
+       return kW
+     }
```

#### 138. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3687-L3692` → after: `L3034-L3036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3034-L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3034-L3036) · [Before (L3687-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3687-L3692)

```diff
-         function se(ee, ie, He) {
-           var ye, be = Ue[0],
-             Me = Ue[1];
-           for (ye = ee.length - 1; ye >= 0; ye--) be = be.add(ee[ye].times(Me)), Me = Me.times(ie);
-           return He ? be.ck() : be
-         }
+     function DW() {
+       return sW
+     }
```

#### 139. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3694-L3734` → after: `L3038-L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3038-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3038-L3043) · [Before (L3694-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3694-L3734)

```diff
-         function Ie(ee, He) {
-           if ((He = ie(He)).isZero()) {
-             if (ee.isZero()) return {
-               value: [0],
-               isNegative: !1
-             };
-             throw new Error("Cannot convert nonzero numbers to base 0.")
-           }
-           if (He.equals(-1)) {
-             if (ee.isZero()) return {
-               value: [0],
-               isNegative: !1
-             };
-             if (ee.isNegative()) return {
-               value: [].concat.apply([], Array.apply(null, Array(-ee.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
-               isNegative: !1
- ... (25 more removed lines; see GitHub link above)
+     function VW(WW) {
+       return WW ? WW.load() : Promise.resolve().then((function() {
+         var WW = new Error("Cannot find module '@bloxd/wasm/client'");
+         throw WW.code = "MODULE_NOT_FOUND", WW
+       })).then((WW => WW.bloxdWasmClient))
+     }
```

#### 140. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3736-L3743` → after: `L3045-L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3045-L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3045-L3047) · [Before (L3736-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3736-L3743)

```diff
-         function he(ee, ie, He) {
-           var ye = Ie(ee, ie);
-           return (ye.isNegative ? "-" : "") + ye.value.map((function(ee) {
-             return function(ee, ie) {
-               return ee < (ie = ie || Me).length ? ie[ee] : "<" + ee + ">"
-             }(ee, He)
-           })).join("")
-         }
+     function pW(WW) {
+       cW.i.setItem(UW, WW)
+     }
```

#### 141. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3745-L3767` → after: `L3049-L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3049-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3049-L3060) · [Before (L3745-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3745-L3767)

```diff
-         function Ne(ee) {
-           if (Re(+ee)) {
-             var ie = +ee;
-             if (ie === pe(ie)) return Ke ? new oe(BigInt(ie)) : new Je(ie);
-             throw new Error("Invalid integer: " + ee)
-           }
-           var He = "-" === ee[0];
-           He && (ee = ee.slice(1));
-           var ye = ee.split(/e/i);
-           if (ye.length > 2) throw new Error("Invalid integer: " + ye.join("e"));
-           if (2 === ye.length) {
-             var be = ye[1];
-             if ("+" === be[0] && (be = be.slice(1)), (be = +be) !== pe(be) || !Re(be)) throw new Error("Invalid integer: " + be + " is not a valid exponent.");
-             var Me = ye[0],
-               Ue = Me.indexOf(".");
-             if (Ue >= 0 && (be -= Me.length - Ue - 1, Me = Me.slice(0, Ue) + Me.slice(Ue + 1)), be < 0) throw new Error("Cannot include negative exponent part for integers");
- ... (7 more removed lines; see GitHub link above)
+     function fW(WW, iW) {
+       const OW = cW.i.getItem(UW);
+       return null === OW ? function(WW) {
+         if (void 0 !== (0, mW.c)(WW, "webgpu") && (0, tW.z)()) return "webgpu";
+         return !1 === (0, PW.p)() ? "webgl1" : "webgl"
+       }(WW) : "none" === OW ? null : "string" === typeof OW && void 0 !== (0, mW.c)(WW, OW) ? OW : (iW && console.warn(`[bloxd-wasm-client] the last join's build, ${JSON.stringify(OW)}, is none of this client's: guessing WebGL2's`), "webgl")
+     }
+     async function CW() {
+       if (null === lW.g) return VW(null);
+       const WW = fW(lW.g, !0);
+       return null === WW ? null : lW.g[WW]()
+     }
```

#### 142. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3769-L3823` → after: `L3062-L3067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3062-L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3062-L3067) · [Before (L3769-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3769-L3823)

```diff
-         function Ge(ee) {
-           return "number" === typeof ee ? function(ee) {
-             if (Ke) return new oe(BigInt(ee));
-             if (Re(ee)) {
-               if (ee !== pe(ee)) throw new Error(ee + " is not an integer.");
-               return new Je(ee)
-             }
-             return Ne(ee.toString())
-           }(ee) : "string" === typeof ee ? Ne(ee) : "bigint" === typeof ee ? new oe(ee) : ee
-         }
-         Fe.prototype.toArray = function(ee) {
-           return Ie(this, ee)
-         }, Je.prototype.toArray = function(ee) {
-           return Ie(this, ee)
-         }, oe.prototype.toArray = function(ee) {
-           return Ie(this, ee)
- ... (39 more removed lines; see GitHub link above)
+     function XW() {
+       null === kW && null !== lW.g && "webgl" === fW(lW.g, !1) && (0, jW.b)()
+     }
+     let BW = null,
+       qW = null,
+       RW = null;
```

#### 143. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3825-L3831` → after: `L3069-L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3069-L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3069-L3088) · [Before (L3825-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3825-L3831)

```diff
-     function OH(ee, ie, He) {
-       let ye = 0;
-       for (let be = 0; be < He; be++) {
-         const He = ee[ie + be];
-         if (void 0 === He) break;
-         ye += He * 16 ** be
-       }
+     function GW() {
+       return BW ??= gW().then((async WW => {
+         const iW = null !== WW && !(0, tW.r)(WW),
+           OW = {
+             indirectHangs: iW && await (0, tW.J)(WW, window.location.search),
+             storagePullBreaks: iW && (0, tW.Q)(WW, window.location.search),
+             splitPassBreaks: iW && (0, tW.P)(WW, window.location.search),
+             earlySky: iW && (0, tW.G)(WW, window.location.search),
+             instancedTerrain: iW ? (0, tW.K)(WW, window.location.search) : null,
+             cellLight: iW && await (0, NW.h)("cellLight"),
+             framesAhead: (0, tW.j)(window.location.search, iW ? WW : null),
+             webGpuRestores: !iW || (0, tW.U)(WW, (0, xW.c)()),
+             bufferCopiesCrash: iW && (0, tW.E)(WW, window.location.search),
+             firstVertex: iW ? (0, ZW.c)(WW.backend, window.location.search) : void 0
+           };
+         return qW = OW.indirectHangs, RW = !OW.webGpuRestores, OW
+ ... (4 more added lines; see GitHub link above)
```

#### 144. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3835-L3840` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3092) · [Before (L3835-L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3835-L3840)

```diff
-     function dH(ee) {
-       const ie = [];
-       for (let He = 0; He < ee.length; He++) {
-         let ye = Number(ee[He]);
-         for (let ee = 0; ye || ee < ie.length; ee++) ye += 10 * (ie[ee] || 0), ie[ee] = ye % 16, ye = (ye - ie[ee]) / 16
-       }
+     function aW() {
```

#### 145. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3843-L3898` → after: `L3095-L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3095-L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3095-L3097) · [Before (L3843-L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3843-L3898)

```diff
-     class WH {
-       static fromString(ee) {
-         return new WH(function(ee) {
-           const ie = dH(ee),
-             He = Array(4);
-           for (let ye = 0; ye < 4; ye++) He[3 - ye] = OH(ie, 4 * ye, 4);
-           return He
-         }(ee), ee)
-       }
-       static fromBit(ee) {
-         const ie = Array(4),
-           He = Math.floor(ee / 16);
-         for (let ye = 0; ye < 4; ye++) ie[3 - ye] = ye === He ? 1 << ee - 16 * He : 0;
-         return new WH(ie)
-       }
-       constructor(ee, ie) {
- ... (40 more removed lines; see GitHub link above)
+     async function rW() {
+       const WW = null === kW ? null : await kW;
+       return null !== WW && (0, tW.r)(WW) && (kW = null, BW = null, qW = null, RW = null), gW()
```

#### 146. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3900-L3908` → after: `L3099-L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3099-L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3099-L3103) · [Before (L3900-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3900-L3908)

```diff
-     const tH = function() {
-       try {
-         return BigInt, !0
-       } catch (ee) {
-         return !1
-       }
-     }();
-     tH && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
-       return this.toString()
+   },
+   42362: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => cW,
+       g: () => wW
```

#### 147. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3910-L3986` → after: `L3105-L3123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3105-L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3105-L3123) · [Before (L3910-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3910-L3986)

```diff
-     const ZH = {},
-       wH = tH ? function(ee) {
-         return BigInt(ee)
-       } : function(ee) {
-         return ee instanceof WH ? ee : ("number" === typeof ee && (ee = ee.toString()), null != ZH[ee] || (ZH[ee] = WH.fromString(ee)), ZH[ee])
-       },
-       DH = wH(0),
-       PH = tH ? function() {
-         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DH) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DH)
-       } : function() {
-         let ee = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DH;
-         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DH).and(ee)
-       },
-       AH = tH ? function() {
-         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DH) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DH)
-       } : function() {
- ... (61 more removed lines; see GitHub link above)
+     var mW = OW(37297),
+       EW = OW(42202),
+       NW = OW(5089),
+       PW = OW(299),
+       LW = OW(37711);
+     async function cW(WW, iW) {
+       return await Promise.all([(0, NW.h)(void 0, !0), (0, PW.p)()]), (0, mW.o)(WW, EW.d, {
+         ...iW,
+         memoryMaximumBytes: (0, LW.m)()
+       })
+     }
+     async function wW() {
+       return await (0, NW.h)(void 0, !0), (0, mW.s)((0, LW.m)())
+     }
+   },
+   42228: (WW, iW, OW) => {
+ ... (3 more added lines; see GitHub link above)
```

#### 148. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L3989-L4716` → after: `L3128-L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3128-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3128-L3133) · [Before (L3989-L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L3989-L4716)

```diff
-     function vH(ee) {
-       return TH((ie => {
-         var He;
-         const [ye] = null !== (He = Object.entries(ee).find((ee => {
-           let [, He] = ee;
-           return He === ie
-         }))) && void 0 !== He ? He : [];
-         return null != ie && void 0 === ye ? ee.UNHANDLED : ie
-       }), ci().or(xi()))
-     }
-     const uH = BH.object({
-         image_url: BH.string()
-       }),
-       mH = BH.object({
-         mediaUrl: BH.string().max(1024)
-       }),
- ... (712 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       if ("webgl" !== WW) return;
+       const OW = new URLSearchParams(iW).get(EW);
+       return "first" === OW || "last" !== OW && null
+     }
+     const PW = new WeakSet;
```

#### 149. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4718-L4793` → after: `L3135-L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3135-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3135-L3164) · [Before (L4718-L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4718-L4793)

```diff
-     function Jb(ee) {
-       let {
-         cmd: ie,
-         data: He
-       } = ee;
-       switch (ie) {
-         case GH.AUTHORIZE:
-           return Sy.parse(He);
-         case GH.CAPTURE_SHORTCUT:
-           return ry.parse(He);
-         case GH.ENCOURAGE_HW_ACCELERATION:
-           return Mb.parse(He);
-         case GH.GET_CHANNEL:
-           return sy.parse(He);
-         case GH.GET_CHANNELS:
-           return Iy.parse(He);
- ... (60 more removed lines; see GitHub link above)
+     function LW(WW, iW) {
+       var OW, EW;
+       let NW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = null === (EW = globalThis.navigator) || void 0 === EW ? void 0 : EW.userAgent) && void 0 !== OW ? OW : "";
+       try {
+         !1 === iW || PW.has(WW) || (PW.add(WW), WW.addEventListener("webglcontextrestored", (() => {
+           LW(WW, iW, NW)
+         })));
+         const OW = WW.getContext("webgl2");
+         if (null === OW || OW.isContextLost()) return !1;
+         if (!(null !== iW && void 0 !== iW ? iW : function(WW, iW) {
+             var OW, EW;
+             const NW = WW.getExtension("WEBGL_debug_renderer_info");
+             if (null === NW) return !1;
+             return function(WW, iW, OW) {
+               return OW.includes("Windows") && "adreno_6" === (0, mW.i)(WW, iW)
+             }(String(null !== (OW = WW.getParameter(NW.UNMASKED_VENDOR_WEBGL)) && void 0 !== OW ? OW : ""), String(null !== (EW = WW.getParameter(NW.UNMASKED_RENDERER_WEBGL)) && void 0 !== EW ? EW : ""), iW)
+ ... (14 more added lines; see GitHub link above)
```

#### 150. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4795-L4804` → after: `L3166-L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3166-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3166-L3168) · [Before (L4795-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4795-L4804)

```diff
-     const ob = Gi({
-         code: xi(),
-         message: ci().optional()
-       }),
-       Rb = Gi({
-         evt: ci().nullable(),
-         nonce: ci().nullable(),
-         data: ji().nullable(),
-         cmd: ci()
-       }).passthrough();
+     var mW = OW(339),
+       EW = OW(662);
+     let NW;
```

#### 151. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4807-L4816` → after: `L3171-L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3171-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3171-L3173) · [Before (L4807-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4807-L4816)

```diff
-       const ie = Rb.parse(ee);
-       return null != ie.evt ? ie.evt === cy ? Cy.parse(ie) : function(ee) {
-         const ie = ee.evt;
-         if (!(ie in xy)) throw new Error(`Unrecognized event type ${ee.evt}`);
-         return my[ie].payload.parse(ee)
-       }(uy.parse(ie)) : function(ee) {
-         return Object.assign(Object.assign({}, ee), {
-           data: Jb(ee)
-         })
-       }(Fb.passthrough().parse(ie))
+       var iW;
+       const OW = NW;
+       return NW = void 0, null !== (iW = cW(WW)) && void 0 !== iW ? iW : OW
```

#### 152. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4819-L4831` → after: `L3176-L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3176-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3176-L3181) · [Before (L4819-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4819-L4831)

```diff
-     function qb(ee, ie, He) {
-       let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
-       const be = rH.extend({
-         cmd: FH(ie),
-         data: He
-       });
-       return async He => {
-         const Me = await ee({
-           cmd: ie,
-           args: He,
-           transfer: ye(He)
-         });
-         return be.parse(Me).data
+     function LW(WW) {
+       try {
+         const iW = cW(WW);
+         void 0 !== iW && (NW = iW, (0, EW.g)((0, mW.l)(iW.reason, iW.message)))
+       } catch (iW) {
+         console.warn("Couldn't keep the WebGPU loss's cause", iW)
```

#### 153. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4836-L4927` → after: `L3186-L3192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3186-L3192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3186-L3192) · [Before (L4836-L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4836-L4927)

```diff
-       let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
-       const He = hH[ee].response,
-         ye = rH.extend({
-           cmd: FH(ee),
-           data: He
-         });
-       return He => async be => {
-         const Me = await He({
-           cmd: ee,
-           args: be,
-           transfer: ie(be)
-         });
-         return ye.parse(Me).data
-       }
-     }
-     const Tb = fb(jH.AUTHENTICATE),
- ... (76 more removed lines; see GitHub link above)
+       var iW;
+       const OW = null === WW || void 0 === WW || null === (iW = WW.ZPW) || void 0 === iW ? void 0 : iW.call(WW),
+         mW = null === WW || void 0 === WW ? void 0 : WW.tPW();
+       if (void 0 === mW) return;
+       const EW = new Error(mW);
+       return void 0 !== OW && (EW.reason = OW), EW
+     }
```

#### 154. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4930` → after: `L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3195) · [Before (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4930)

```diff
-       return "string" === typeof ee && xb.test(ee)
+       return WW instanceof Error ? WW : void 0
```

#### 155. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4934-L4938` → after: `L3198-L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3198-L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3198-L3199) · [Before (L4934-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4934-L4938)

```diff
-     function ub(ee) {
-       var ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         He = (Cb[ee[ie + 0]] + Cb[ee[ie + 1]] + Cb[ee[ie + 2]] + Cb[ee[ie + 3]] + "-" + Cb[ee[ie + 4]] + Cb[ee[ie + 5]] + "-" + Cb[ee[ie + 6]] + Cb[ee[ie + 7]] + "-" + Cb[ee[ie + 8]] + Cb[ee[ie + 9]] + "-" + Cb[ee[ie + 10]] + Cb[ee[ie + 11]] + Cb[ee[ie + 12]] + Cb[ee[ie + 13]] +  … [truncated]
-       if (!Lb(He)) throw TypeError("Stringified UUID is invalid");
-       return He
+     function tW(WW, iW) {
+       return "lost" !== WW && "frames_refused" !== WW ? {} : (0, mW.l)("frames_refused" === WW ? WW : null === iW || void 0 === iW ? void 0 : iW.reason, null === iW || void 0 === iW ? void 0 : iW.message)
```

#### 156. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4940` → after: `L3201-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3201-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3201-L3246) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4940)

```diff
-     var mb;
+   },
+   42272: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => hW,
+       e: () => YW,
+       i: () => SW,
+       l: () => KW,
+       o: () => JW,
+       r: () => oW,
+       s: () => uW,
+       u: () => dW
+     });
+     var mW = OW(5551),
+       EW = OW(42275),
+       NW = OW(35089);
+     const PW = 1,
+ ... (30 more added lines; see GitHub link above)
```

#### 157. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4943-L4964` → after: `L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3249) · [Before (L4943-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4943-L4964)

```diff
-       function ye(ee, ye, be, Me) {
-         if ("string" === typeof ee && (ee = function(ee) {
-             ee = unescape(encodeURIComponent(ee));
-             for (var ie = [], He = 0; He < ee.length; ++He) ie.push(ee.charCodeAt(He));
-             return ie
-           }(ee)), "string" === typeof ye && (ye = function(ee) {
-             if (!Lb(ee)) throw TypeError("Invalid UUID");
-             var ie, He = new Uint8Array(16);
-             return He[0] = (ie = parseInt(ee.slice(0, 8), 16)) >>> 24, He[1] = ie >>> 16 & 255, He[2] = ie >>> 8 & 255, He[3] = 255 & ie, He[4] = (ie = parseInt(ee.slice(9, 13), 16)) >>> 8, He[5] = 255 & ie, He[6] = (ie = parseInt(ee.slice(14, 18), 16)) >>> 8, He[7] = 255 & ie, H … [truncated]
-           }(ye)), 16 !== ye.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
-         var Ke = new Uint8Array(16 + ee.length);
-         if (Ke.set(ye), Ke.set(ee, ye.length), (Ke = He(Ke))[6] = 15 & Ke[6] | ie, Ke[8] = 63 & Ke[8] | 128, be) {
-           Me = Me || 0;
-           for (var Ue = 0; Ue < 16; ++Ue) be[Me + Ue] = Ke[Ue];
-           return be
-         }
- ... (6 more removed lines; see GitHub link above)
+       return WW === LW ? "program retry" : WW === PW ? "program link" : WW === tW ? "program link stall" : WW === ZW ? "program link pending" : WW === cW || WW === wW || WW === xW ? `program ${iW} ${OW}` : "program"
```

#### 158. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4967-L4968` → after: `L3298-L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3298-L3299) · [Before (L4967-L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4967-L4968)

```diff
-     function Sb(ee) {
-       return 14 + (ee + 64 >>> 9 << 4) + 1
+     function KW(WW, iW) {
+       return WW === mW.o.RenderSerialLinks && void 0 !== kW[iW]
```

#### 159. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4972-L4973` → after: `L3303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3303) · [Before (L4972-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4972-L4973)

```diff
-       var He = (65535 & ee) + (65535 & ie);
-       return (ee >> 16) + (ie >> 16) + (He >> 16) << 16 | 65535 & He
+       return WW === mW.o.RenderInternal && (iW >>> 8 & 255) === ZW
```

#### 160. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4976-L4978` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3306-L3307) · [Before (L4976-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4976-L4978)

```diff
-     function jb(ee, ie, He, ye, be, Me) {
-       return nb((Ke = nb(nb(ie, ee), nb(ye, Me))) << (Ue = be) | Ke >>> 32 - Ue, He);
-       var Ke, Ue
+     function YW(WW, iW) {
+       return WW === mW.o.RenderSerialLinks && void 0 !== MW[15 & iW]
```

#### 161. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4981-L4982` → after: `L3318-L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3318-L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3318-L3320) · [Before (L4981-L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4981-L4982)

```diff
-     function sb(ee, ie, He, ye, be, Me, Ke) {
-       return jb(ie & He | ~ie & ye, ee, ie, be, Me, Ke)
+     function TW(WW, iW) {
+       var OW;
+       return null !== (OW = WW[iW]) && void 0 !== OW ? OW : (0, NW.d)(iW)
```

#### 162. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4985-L4986` → after: `L3323-L3324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3323-L3324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3323-L3324) · [Before (L4985-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4985-L4986)

```diff
-     function Ib(ee, ie, He, ye, be, Me, Ke) {
-       return jb(ie & ye | He & ~ye, ee, ie, be, Me, Ke)
+     function JW() {
+       return (0, NW.d)((0, EW.c)())
```

#### 163. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4989-L4990` → after: `L3327-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3327-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3327-L3406) · [Before (L4989-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4989-L4990)

```diff
-     function hb(ee, ie, He, ye, be, Me, Ke) {
-       return jb(ie ^ He ^ ye, ee, ie, be, Me, Ke)
+     function hW(WW, iW) {
+       switch (WW) {
+         case mW.o.RenderSceneRowNotDrawn:
+           return {
+             words: ` ${TW(jW,iW)}`, instance: String(iW), group: String(WW)
+           };
+         case mW.o.RenderChunkMeshNotDrawn: {
+           const OW = 0 === (128 & iW) ? "" : " shortage",
+             mW = iW >>> 8;
+           return {
+             words: ` ${TW(UW,127&iW)}${OW}${0===mW?"":` kind ${(0,NW.d)(mW)}`}`,
+             instance: String(iW),
+             group: String(WW)
+           }
+         }
+         case mW.o.RenderInternal: {
+ ... (64 more added lines; see GitHub link above)
```

#### 164. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4993-L4994` → after: `L3411-L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3411-L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3411-L3416) · [Before (L4993-L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L4993-L4994)

```diff
-     function Nb(ee, ie, He, ye, be, Me, Ke) {
-       return jb(He ^ (ie | ~ye), ee, ie, be, Me, Ke)
+     function uW(WW) {
+       let {
+         group: iW,
+         instance: OW
+       } = WW, mW = nW.get(iW);
+       return void 0 === mW && (mW = [], nW.set(iW, mW)), !mW.includes(OW) && (mW.length >= HW || (mW.push(OW), !1))
```

#### 165. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5028-L5029` → after: `L3420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3420) · [Before (L5028-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5028-L5029)

```diff
-       if (!mb && !(mb = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRand … [truncated]
-       return mb(Gb)
+       return nW.size > 0
```

#### 166. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5032-L5039` → after: `L3423-L3424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3423-L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3423-L3424) · [Before (L5032-L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5032-L5039)

```diff
-     function Qb(ee, ie, He) {
-       var ye = (ee = ee || {}).random || (ee.rng || rb)();
-       if (ye[6] = 15 & ye[6] | 64, ye[8] = 63 & ye[8] | 128, ie) {
-         He = He || 0;
-         for (var be = 0; be < 16; ++be) ie[He + be] = ye[be];
-         return ie
-       }
-       return ub(ye)
+     function dW() {
+       nW.clear()
```

#### 167. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5042-L5051` → after: `L3473-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3473-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3473-L3475) · [Before (L5042-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5042-L5051)

```diff
-     function eM(ee, ie, He, ye) {
-       switch (ee) {
-         case 0:
-           return ie & He ^ ~ie & ye;
-         case 1:
-         case 3:
-           return ie ^ He ^ ye;
-         case 2:
-           return ie & He ^ ie & ye ^ He & ye
-       }
+     function wW(WW, iW) {
+       const OW = (0, LW.e)(iW.variants);
+       return WW.setShaderPack(OW.variantFlags, OW.hooks, OW.moduleCodes, (0, cW.x)(iW.layers), cW.l[iW.policy], iW.keepCircleShadows)
```

#### 168. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5054-L5079` → after: `L3484-L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3484-L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3484-L3495) · [Before (L5054-L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5054-L5079)

```diff
-     function iM(ee, ie) {
-       return ee << ie | ee >>> 32 - ie
-     }
-     lb("v5", 80, (function(ee) {
-       var ie = [1518500249, 1859775393, 2400959708, 3395469782],
-         He = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
-       if ("string" === typeof ee) {
-         var ye = unescape(encodeURIComponent(ee));
-         ee = [];
-         for (var be = 0; be < ye.length; ++be) ee.push(ye.charCodeAt(be))
-       } else Array.isArray(ee) || (ee = Array.prototype.slice.call(ee));
-       ee.push(128);
-       for (var Me = ee.length / 4 + 2, Ke = Math.ceil(Me / 16), Ue = new Array(Ke), Fe = 0; Fe < Ke; ++Fe) {
-         for (var Je = new Uint32Array(16), oe = 0; oe < 16; ++oe) Je[oe] = ee[64 * Fe + 4 * oe] << 24 | ee[64 * Fe + 4 * oe + 1] << 16 | ee[64 * Fe + 4 * oe + 2] << 8 | ee[64 * Fe + 4 * oe + 3];
-         Ue[Fe] = Je
-       }
- ... (10 more removed lines; see GitHub link above)
+     function jW(WW, iW, OW) {
+       var mW;
+       const EW = null !== (mW = null === WW || void 0 === WW ? void 0 : WW.reason) && void 0 !== mW ? mW : "none";
+       return AW.has(EW) ? {
+         messageKey: iW ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu",
+         noAdapter: !0
+       } : "not_requested" === EW && "override" === (null === WW || void 0 === WW ? void 0 : WW.source) ? {
+         messageKey: "shaderPack:failedRendererOverride",
+         noAdapter: !1
+       } : {
+         messageKey: bW.has(EW) && !OW ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu",
+         noAdapter: !1
```

#### 169. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5081-L5082` → after: `L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3497) · [Before (L5081-L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5081-L5082)

```diff
-       return [He[0] >> 24 & 255, He[0] >> 16 & 255, He[0] >> 8 & 255, 255 & He[0], He[1] >> 24 & 255, He[1] >> 16 & 255, He[1] >> 8 & 255, 255 & He[1], He[2] >> 24 & 255, He[2] >> 16 & 255, He[2] >> 8 & 255, 255 & He[2], He[3] >> 24 & 255, He[3] >> 16 & 255, He[3] >> 8 & 255, 255 … [truncated]
-     }));
+     }
```

#### 170. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5085-L5086` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3500) · [Before (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5085-L5086)

```diff
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-         super(ie), this.code = ee, this.message = ie, this.name = "Discord SDK Error"
+         super(`the shader pack can't run in this game: ${WW}`), this.messageKey = WW, this.name = "ShaderPackJoinError"
```

#### 171. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5089-L5094` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3503) · [Before (L5089-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5089-L5094)

```diff
-     const yM = ["log", "warn", "debug", "info", "error"];
-     var bM;
-     ! function(ee) {
-       ee[ee.HANDSHAKE = 0] = "HANDSHAKE", ee[ee.FRAME = 1] = "FRAME", ee[ee.CLOSE = 2] = "CLOSE", ee[ee.HELLO = 3] = "HELLO"
-     }(bM || (bM = {}));
-     const MM = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.c … [truncated]
+     const kW = "strict";
```

#### 172. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5096-L5103` → after: `L3505-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3505-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3505-L3534) · [Before (L5096-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5096-L5103)

```diff
-       getTransfer(ee) {
-         var ie;
-         switch (ee.cmd) {
-           case GH.SUBSCRIBE:
-           case GH.UNSUBSCRIBE:
-             return;
-           default:
-             return null !== (ie = ee.transfer) && void 0 !== ie ? ie : void 0
+       constructor(WW) {
+         this.deps = WW, this.pagePack = void 0, this.loaded = null, this.policy = kW, this.failedPolicies = new Set, this.failedModelPolicies = new Set, this.refused = !1, this.joined = !1, this.playing = !1, this.game = 0, this.failedWhileJoining = !1, this.offInThisGame = !1, t … [truncated]
+           status: "none"
+         }))).then((WW => (this.loaded = WW, "active" === WW.status && (this.handOverToPreviews(WW), null !== WW.harnessPolicy && (this.policy = WW.harnessPolicy, this.handOver())), WW)))
+       }
+       async join(WW) {
+         this.leave();
+         const iW = this.game,
+           [OW, EW] = await Promise.all([this.pagePack, this.policyOf(WW)]);
+         if (iW !== this.game || "none" === OW.status) return null;
+         const NW = "active" === OW.status ? OW.pack.variants : OW.variants,
+           PW = (0, mW.j)(NW, EW);
+         if (PW && "active" === OW.status && null === this.deps.core) return this.joined = !0, this.offInThisGame = !0, this.couldntRun = this.deps.noWebGpu.messageKey, null;
+         if (PW) {
+           const WW = this.cantRun(OW, EW);
+           if (null !== WW) return WW
+ ... (14 more added lines; see GitHub link above)
```

#### 173. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5106-L5174` → after: `L3538-L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3538-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3538-L3539) · [Before (L5106-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5106-L5174)

```diff
-       constructor(ee, ie) {
-         var He;
-         if (this.eventBus = new Je, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = ee => {
-             var ie;
-             if (null == this.source) throw new Error("Attempting to send message before initialization");
-             const He = Qb();
-             null === (ie = this.source) || void 0 === ie || ie.postMessage([bM.FRAME, Object.assign(Object.assign({}, ee), {
-               nonce: He
-             })], this.sourceOrigin, this.getTransfer(ee));
-             return new Promise(((ee, ie) => {
-               this.pendingCommands.set(He, {
-                 resolve: ee,
-                 reject: ie
-               })
-             }))
-           }, this.commands = (He = this.sendCommand, {
- ... (53 more removed lines; see GitHub link above)
+       runsInJoinedGame() {
+         return this.joined && !this.offInThisGame
```

#### 174. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5176` → after: `L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3541) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5176)

```diff
-       close(ee, ie) {
+       reachInJoinedGame() {
```

#### 175. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5178-L5207` → after: `L3543-L3583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3543-L3583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3543-L3583) · [Before (L5178-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5178-L5207)

```diff
-         window.removeEventListener("message", this.handleMessage);
-         const ye = Qb();
-         null === (He = this.source) || void 0 === He || He.postMessage([bM.CLOSE, {
-           code: ee,
-           message: ie,
-           nonce: ye
-         }], this.sourceOrigin)
-       }
-       async subscribe(ee, ie) {
-         for (var He = arguments.length, ye = new Array(He > 2 ? He - 2 : 0), be = 2; be < He; be++) ye[be - 2] = arguments[be];
-         const [Me] = ye, Ke = this.eventBus.listenerCount(ee), Ue = this.eventBus.on(ee, ie);
-         return Object.values(xy).includes(ee) && ee !== xy.READY && 0 === Ke && await this.sendCommand({
-           cmd: GH.SUBSCRIBE,
-           args: Me,
-           evt: ee
-         }), Ue
- ... (14 more removed lines; see GitHub link above)
+         return this.runsInJoinedGame() && "active" === (null === (WW = this.loaded) || void 0 === WW ? void 0 : WW.status) ? function(WW, iW) {
+           const OW = WW.filter((WW => (0, mW.j)([WW], iW))),
+             EW = WW => OW.some((iW => iW[WW]));
+           return {
+             sceneDepth: EW("sceneDepth"),
+             sunShadow: EW("sunShadow"),
+             airShadow: EW("airShadow")
+           }
+         }(this.loaded.pack.variants, this.policy) : null
+       }
+       couldntRunInJoinedGame() {
+         return this.couldntRun
+       }
+       playable() {
+         this.joined && !this.playing && (this.playing = !0, this.failedWhileJoining ? this.fail(lW) : (null !== this.couldntRun ? this.notify(NW.e, this.couldntRun) : this.offInThisGame && this.notify("shaderPack:offInThisGame"), this.failedModelPolicies.has(this.policy) && this. … [truncated]
+       }
+ ... (25 more added lines; see GitHub link above)
```

#### 176. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5209` → after: `L3585-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3585-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3585-L3592) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5209)

```diff
-       handshake() {
+       notifyModelFallback() {
+         this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
+       }
+       notify(WW, iW) {
+         const OW = this.game;
+         this.deps.notify(WW, (() => OW === this.game && this.joined), iW)
+       }
+       handOver() {
```

#### 177. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5211-L5221` → after: `L3594-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3594-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3594-L3613) · [Before (L5211-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5211-L5221)

```diff
-         null === (ee = this.source) || void 0 === ee || ee.postMessage([bM.HANDSHAKE, {
-           v: 1,
-           encoding: "json",
-           client_id: this.clientId,
-           frame_id: this.frameId
-         }], this.sourceOrigin)
-       }
-       addOnReadyListener() {
-         this.eventBus.once(xy.READY, (() => {
-           this.overrideConsoleLogging(), this.isReady = !0
-         }))
+         const {
+           core: iW
+         } = this.deps;
+         null !== iW && "active" === (null === (WW = this.loaded) || void 0 === WW ? void 0 : WW.status) && (wW(iW, {
+           ...this.loaded.pack,
+           policy: this.policy
+         }) || (this.refused = !0, this.deps.warn("the core refused the shader pack: the games it runs in fail", null)))
+       }
+       handOverToPreviews(WW) {
+         let {
+           pack: iW,
+           harnessPolicy: OW
+         } = WW;
+         const {
+           previews: mW
+         } = this.deps;
+ ... (4 more added lines; see GitHub link above)
```

#### 178. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5223-L5229` → after: `L3615-L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3615-L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3615-L3861) · [Before (L5223-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5223-L5229)

```diff
-       overrideConsoleLogging() {
-         if (this.configuration.disableConsoleLogOverride) return;
-         const ee = (ee, ie) => {
-           this.commands.captureLog({
-             level: ee,
-             message: ie
-           })
+       policyOf(WW) {
+         return this.deps.policyOf(WW).catch((WW => (this.deps.warn("the game's shader pack policy could not load: the policy of a game without one", WW), kW)))
+       }
+     }
+     const MW = "wasmShaderPackNotice";
+ 
+     function KW(WW, iW, OW, mW) {
+       return EW.l.subscribe(MW, (WW => {
+         let {
+           translationKey: iW,
+           stillCurrent: OW,
+           reasonKey: mW
+         } = WW;
+         OW() && EW.l.iZ("chat", (0, NW.j)(iW, mW))
+       })), new sW({
+         load: SW,
+ ... (231 more added lines; see GitHub link above)
```

#### 179. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5231-L5241` → after: `L3863-L3882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3863-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3863-L3882) · [Before (L5231-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5231-L5241)

```diff
-         yM.forEach((ie => {
-           ! function(ee, ie, He) {
-             const ye = ee[ie],
-               be = ee;
-             ye && (ee[ie] = function() {
-               const ee = [].slice.call(arguments),
-                 Me = "" + ee.join(" ");
-               He(ie, Me), ye.apply(be, ee)
-             })
-           }(console, ie, ee)
-         }))
+         return this.restoring = mW, mW.done
+       }
+       async restoreLanded(WW, iW) {
+         const OW = () => this.landed !== WW.mine,
+           {
+             EZ: mW
+           } = WW;
+         if (null !== mW) return this.stopped() ? null : this.core.setTerrainTextures(mW.names, mW.textures, mW.sizes);
+         let EW = iW;
+         for (let NW = 0;; NW++) {
+           const iW = this.retryMs.at(NW),
+             mW = {
+               allOrNothingExcept: void 0 === iW ? void 0 : WW.failed
+             },
+             PW = await this.loadAndHandOver(WW.sources, WW.load, EW, OW, mW);
+           if (!1 !== PW || void 0 === iW || this.stopped()) return PW;
+ ... (4 more added lines; see GitHub link above)
```

#### 180. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5243-L5244` → after: `L3884-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3884-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3884-L3885) · [Before (L5243-L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5243-L5244)

```diff
-       handleClose(ee) {
-         ob.parse(ee)
+       stopped() {
+         return !0 === this.core.isStopped
```

#### 181. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5246-L5249` → after: `L3887-L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3887-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3887-L3893) · [Before (L5246-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5246-L5249)

```diff
-       handleHandshake() {}
-       handleFrame(ee) {
-         var ie, He;
-         let ye;
+       async loadAndHandOver(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
+         if (this.stopped()) return null;
+         const NW = this.core.terrainTextureNames();
+         var PW;
+         if (0 === NW.length) return null === (PW = EW.onTaken) || void 0 === PW || PW.call(EW, null, new Set), !0;
+         let LW, wW;
```

#### 182. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5251` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3895) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5251)

```diff
-           ye = kb(ee)
+           LW = await WW(), wW = await lW(NW, LW, iW.decode)
```

#### 183. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5253` → after: `L3897-L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3897-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3897-L3901) · [Before (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5253)

```diff
-           return console.error("Failed to parse", ee), void console.error(be)
+           return mW() ? null : (OW({
+             name: null,
+             url: null,
+             error: jW
+           }), !1)
```

#### 184. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5255-L5262` → after: `L3903-L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3903-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3903-L3942) · [Before (L5255-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5255-L5262)

```diff
-         if ("DISPATCH" === ye.cmd) this.eventBus.emit(ye.evt, ye.data);
-         else {
-           if (ye.evt === cy) {
-             if (null != ye.nonce) return null === (ie = this.pendingCommands.get(ye.nonce)) || void 0 === ie || ie.reject(ye.data), void this.pendingCommands.delete(ye.nonce);
-             this.eventBus.emit("error", new HM(ye.data.code, ye.data.message))
-           }
-           if (null == ye.nonce) return void console.error("Missing nonce", ee);
-           null === (He = this.pendingCommands.get(ye.nonce)) || void 0 === He || He.resolve(ye), this.pendingCommands.delete(ye.nonce)
+         if (mW() || this.stopped()) return null;
+         for (const cW of wW.failures) OW(cW);
+         const tW = EW.allOrNothingExcept;
+         if (void 0 !== tW && wW.failures.some((WW => {
+             let {
+               name: iW
+             } = WW;
+             return null === iW || !tW.has(iW)
+           })) || !0 === iW.wholeAtlas && wW.failures.some((WW => {
+             let {
+               name: iW
+             } = WW;
+             return null === iW || null !== cW(iW)
+           }))) return !1;
+         const {
+           handOver: ZW
+ ... (24 more added lines; see GitHub link above)
```

#### 185. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5269-L5280` → after: `L3947-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3947-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3947-L3969) · [Before (L5269-L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5269-L5280)

```diff
-     var UM, FM = 1e9,
-       JM = !0,
-       oM = "[DecimalError] ",
-       RM = oM + "Invalid argument: ",
-       kM = oM + "Exponent out of range: ",
-       qM = Math.floor,
-       fM = Math.pow,
-       TM = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
-       pM = 1e7,
-       XM = 9007199254740991,
-       zM = qM(1286742750677284.5),
-       BM = {};
+   },
+   35175: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => wW,
+       g: () => ZW,
+       k: () => tW
+     });
+     var mW = OW(248),
+       EW = OW(100),
+       NW = OW(131),
+       PW = OW(128),
+       LW = OW(669);
+     const cW = new Set(["mali_bifrost"]);
+ 
+     function wW() {
+       if (LW.g) return;
+ ... (7 more added lines; see GitHub link above)
```

#### 186. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5283-L5288` → after: `L3972-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3972-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3972-L3985) · [Before (L5283-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5283-L5288)

```diff
-       var He, ye, be, Me, Ke, Ue, Fe, Je, oe = ee.constructor,
-         Re = oe.precision;
-       if (!ee.s || !ie.s) return ie.s || (ie = new oe(ee)), JM ? AM(ie, Re) : ie;
-       if (Fe = ee.d, Je = ie.d, Ke = ee.e, be = ie.e, Fe = Fe.slice(), Me = Ke - be) {
-         for (Me < 0 ? (ye = Fe, Me = -Me, Ue = Je.length) : (ye = Je, be = Ke, Ue = Fe.length), Me > (Ue = (Ke = Math.ceil(Re / 7)) > Ue ? Ke + 1 : Ue + 1) && (Me = Ue, ye.length = 1), ye.reverse(); Me--;) ye.push(0);
-         ye.reverse()
+       return WW ? () => !0 : iW()
+     }
+     async function ZW(WW) {
+       try {
+         const iW = tW(WW, wW),
+           OW = navigator.gpu;
+         if (void 0 === iW || void 0 === OW) return !1;
+         const mW = await (0, PW.i)(OW, {
+           seed: !1,
+           compatibility: iW
+         });
+         return "string" !== typeof mW && mW.compatibility && !(0, PW.e)(mW.adapter)
+       } catch (iW) {
+         return console.error("WebGPU compatibility-mode adapter request failed.", iW), !1
```

#### 187. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5295-L5296` → after: `L3998-L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L3998-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L3998-L3999) · [Before (L5295-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5295-L5296)

```diff
-     function gM(ee, ie, He) {
-       if (ee !== ~~ee || ee < ie || ee > He) throw Error(RM + ee)
+     function PW(WW) {
+       return WW.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
```

#### 188. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5299-L5472` → after: `L4003-L4007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4003-L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4003-L4007) · [Before (L5299-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5299-L5472)

```diff
-     function OM(ee) {
-       var ie, He, ye, be = ee.length - 1,
-         Me = "",
-         Ke = ee[0];
-       if (be > 0) {
-         for (Me += Ke, ie = 1; ie < be; ie++)(He = 7 - (ye = ee[ie] + "").length) && (Me += wM(He)), Me += ye;
-         (He = 7 - (ye = (Ke = ee[ie]) + "").length) && (Me += wM(He))
-       } else if (0 === Ke) return "0";
-       for (; Ke % 10 === 0;) Ke /= 10;
-       return Me + Ke
-     }
-     BM.absoluteValue = BM.abs = function() {
-       var ee = new this.constructor(this);
-       return ee.s && (ee.s = 1), ee
-     }, BM.comparedTo = BM.cmp = function(ee) {
-       var ie, He, ye, be, Me = this;
- ... (158 more removed lines; see GitHub link above)
+     function cW() {
+       if (null === LW) try {
+         WW = (0, mW.getBrowserName)(), iW = (0, mW.getBrowserVersion)(), OW = (0, mW.getOperatingSystem)(), EW = (0, mW.getOperatingSystemVersion)(), LW = `${WW.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===iW?"unknown":PW(iW)}-${OW}${void 0===EW?"":`_${PW(EW)}`}`
+       } catch (NW) {
+         console.warn("The user agent couldn't be read for its browser code", NW), LW = "unknown"
```

#### 189. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5475-L5509` → after: `L4013-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4013-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4013-L4054) · [Before (L5475-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5475-L5509)

```diff
-       function ie(ee, ie, He, ye) {
-         var be, Me;
-         if (He != ye) Me = He > ye ? 1 : -1;
-         else
-           for (be = Me = 0; be < He; be++)
-             if (ee[be] != ie[be]) {
-               Me = ee[be] > ie[be] ? 1 : -1;
-               break
-             } return Me
-       }
- 
-       function He(ee, ie, He) {
-         for (var ye = 0; He--;) ee[He] -= ye, ye = ee[He] < ie[He] ? 1 : 0, ee[He] = ye * pM + ee[He] - ie[He];
-         for (; !ee[0] && ee.length > 1;) ee.shift()
-       }
-       return function(ye, be, Me, Ke) {
- ... (19 more removed lines; see GitHub link above)
+     function wW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GPUDevice.prototype;
+       const iW = `WGPU-${cW()}`,
+         mW = (WW, mW) => {
+           const {
+             reason: PW,
+             message: LW
+           } = mW, cW = String(LW);
+           if ((0, EW.u)(PW, cW)) return;
+           const wW = {
+             pipeline: null !== WW && void 0 !== WW ? WW : "",
+             reason: String(PW),
+             browserMessage: cW
+           };
+           Promise.resolve().then((() => OW(42266))).then((WW => {
+             let {
+ ... (26 more added lines; see GitHub link above)
```

#### 190. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5511` → after: `L4056-L4064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4056-L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4056-L4064) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5511)

```diff
-     }();
+     }
+   },
+   42235: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => LW,
+       f: () => cW
+     });
+     var mW = OW(131);
+     let EW = !1;
```

#### 191. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5513-L5526` → after: `L4066-L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4066-L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4066-L4076) · [Before (L5513-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5513-L5526)

```diff
-     function WM(ee, ie) {
-       var He, ye, be, Me, Ke, Ue = 0,
-         Fe = 0,
-         Je = ee.constructor,
-         oe = Je.precision;
-       if (tM(ee) > 16) throw Error(kM + tM(ee));
-       if (!ee.s) return new Je(UM);
-       for (null == ie ? (JM = !1, Ke = oe) : Ke = ie, Me = new Je(.03125); ee.abs().gte(.1);) ee = ee.times(Me), Fe += 5;
-       for (Ke += Math.log(fM(2, Fe)) / Math.LN10 * 2 + 5 | 0, He = ye = be = new Je(UM), Je.precision = Ke;;) {
-         if (ye = AM(ye.times(ee), Ke), He = He.times(++Ue), OM((Me = be.plus(dM(ye, He, Ke))).d).slice(0, Ke) === OM(be.d).slice(0, Ke)) {
-           for (; Fe--;) be = AM(be.times(be), Ke);
-           return Je.precision = oe, null == ie ? (JM = !0, AM(be, oe)) : be
-         }
-         be = Me
+     function NW() {
+       let WW = null;
+       try {
+         return WW = document.createElement("canvas").getContext("webgl2"), null !== WW
+       } catch {
+         return !1
+       } finally {
+         try {
+           var iW, OW;
+           null === (iW = WW) || void 0 === iW || null === (OW = iW.getExtension("WEBGL_lose_context")) || void 0 === OW || OW.loseContext()
+         } catch {}
```

#### 192. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5530-L5532` → after: `L4080-L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4080-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4080-L4081) · [Before (L5530-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5530-L5532)

```diff
-     function tM(ee) {
-       for (var ie = 7 * ee.e, He = ee.d[0]; He >= 10; He /= 10) ie++;
-       return ie
+     function PW() {
+       "hidden" === document.visibilityState && (EW = !1, document.removeEventListener("visibilitychange", PW))
```

#### 193. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5535-L5537` → after: `L4084-L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4084-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4084-L4085) · [Before (L5535-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5535-L5537)

```diff
-     function ZM(ee, ie, He) {
-       if (ie > ee.LN10.sd()) throw JM = !0, He && (ee.precision = He), Error(oM + "LN10 precision limit exceeded");
-       return AM(new ee(ee.LN10), ie)
+     function LW() {
+       EW || "visible" !== document.visibilityState || !(0, mW.m)() && !NW() || (EW = !0, document.addEventListener("visibilitychange", PW))
```

#### 194. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5540-L5542` → after: `L4088-L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4088-L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4088-L4089) · [Before (L5540-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5540-L5542)

```diff
-     function wM(ee) {
-       for (var ie = ""; ee--;) ie += "0";
-       return ie
+     function cW() {
+       return EW || NW()
```

#### 195. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5544-L5558` → after: `L4091-L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4091-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4091-L4112) · [Before (L5544-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5544-L5558)

```diff
- 
-     function DM(ee, ie) {
-       var He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re = 1,
-         ke = ee,
-         qe = ke.d,
-         fe = ke.constructor,
-         Te = fe.precision;
-       if (ke.s < 1) throw Error(oM + (ke.s ? "NaN" : "-Infinity"));
-       if (ke.eq(UM)) return new fe(0);
-       if (null == ie ? (JM = !1, Je = Te) : Je = ie, ke.eq(10)) return null == ie && (JM = !0), ZM(fe, Je);
-       if (Je += 10, fe.precision = Je, ye = (He = OM(qe)).charAt(0), Me = tM(ke), !(Math.abs(Me) < 15e14)) return Fe = ZM(fe, Je + 2, Te).times(Me + ""), ke = DM(new fe(ye + "." + He.slice(1)), Je - 10).plus(Fe), fe.precision = Te, null == ie ? (JM = !0, AM(ke, Te)) : ke;
-       for (; ye < 7 && 1 != ye || 1 == ye && He.charAt(1) > 3;) ye = (He = OM((ke = ke.times(ee)).d)).charAt(0), Re++;
-       for (Me = tM(ke), ye > 1 ? (ke = new fe("0." + He), Me++) : ke = new fe(ye + "." + He.slice(1)), Ue = Ke = ke = dM(ke.minus(UM), ke.plus(UM), Je), oe = AM(ke.times(ke), Je), be = 3;;) {
-         if (Ke = AM(Ke.times(oe), Je), OM((Fe = Ue.plus(dM(Ke, new fe(be), Je))).d).slice(0, Je) === OM(Ue.d).slice(0, Je)) return Ue = Ue.times(2), 0 !== Me && (Ue = Ue.plus(ZM(fe, Je + 2, Te).times(Me + ""))), Ue = dM(Ue, new fe(Re), Je), fe.precision = Te, null == ie ? (JM = ! … [truncated]
-         Ue = Fe, be += 2
+   },
+   42210: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/bloxd_wasm_models_bg.78d91793af0644e887d8.wasm"
+   },
+   42205: (WW, iW, OW) => {
+     WW.exports = OW.p + "static/media/bloxd_wasm_workers_bg.f45dc0780f611f9752e4.wasm"
+   },
+   42202: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW,
+       d: () => mW
+     });
+     const mW = {
+       name: "bloxd_wasm_workers",
+       url: function() {
+         return new OW.U(OW(42205))
+ ... (6 more added lines; see GitHub link above)
```

#### 196. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5562-L5573` → after: `L4136-L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4136-L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4136-L4139) · [Before (L5562-L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5562-L5573)

```diff
-     function PM(ee, ie) {
-       var He, ye, be;
-       for ((He = ie.indexOf(".")) > -1 && (ie = ie.replace(".", "")), (ye = ie.search(/e/i)) > 0 ? (He < 0 && (He = ye), He += +ie.slice(ye + 1), ie = ie.substring(0, ye)) : He < 0 && (He = ie.length), ye = 0; 48 === ie.charCodeAt(ye);) ++ye;
-       for (be = ie.length; 48 === ie.charCodeAt(be - 1);) --be;
-       if (ie = ie.slice(ye, be)) {
-         if (be -= ye, He = He - ye - 1, ee.e = qM(He / 7), ee.d = [], ye = (He + 1) % 7, He < 0 && (ye += 7), ye < be) {
-           for (ye && ee.d.push(+ie.slice(0, ye)), be -= 7; ye < be;) ee.d.push(+ie.slice(ye, ye += 7));
-           ye = 7 - (ie = ie.slice(ye)).length
-         } else ye -= be;
-         for (; ye--;) ie += "0";
-         if (ee.d.push(+ie), JM && (ee.e > zM || ee.e < -zM)) throw Error(kM + He)
-       } else ee.s = 0, ee.e = 0, ee.d = [0];
+     function bW(WW) {
+       if (!WW) return 0;
+       const iW = AW.indexOf(WW);
+       if (iW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
```

#### 197. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5577-L5597` → after: `L4143-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4143-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4143-L4146) · [Before (L5577-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5577-L5597)

```diff
-     function AM(ee, ie, He) {
-       var ye, be, Me, Ke, Ue, Fe, Je, oe, Re = ee.d;
-       for (Ke = 1, Me = Re[0]; Me >= 10; Me /= 10) Ke++;
-       if ((ye = ie - Ke) < 0) ye += 7, be = ie, Je = Re[oe = 0];
-       else {
-         if ((oe = Math.ceil((ye + 1) / 7)) >= (Me = Re.length)) return ee;
-         for (Je = Me = Re[oe], Ke = 1; Me >= 10; Me /= 10) Ke++;
-         be = (ye %= 7) - 7 + Ke
-       }
-       if (void 0 !== He && (Ue = Je / (Me = fM(10, Ke - be - 1)) % 10 | 0, Fe = ie < 0 || void 0 !== Re[oe + 1] || Je % Me, Fe = He < 4 ? (Ue || Fe) && (0 == He || He == (ee.s < 0 ? 3 : 2)) : Ue > 5 || 5 == Ue && (4 == He || Fe || 6 == He && (ye > 0 ? be > 0 ? Je / fM(10, Ke - be … [truncated]
-       if (0 == ye ? (Re.length = oe, Me = 1, oe--) : (Re.length = oe + 1, Me = fM(10, 7 - ye), Re[oe] = be > 0 ? (Je / fM(10, Ke - be) % fM(10, be) | 0) * Me : 0), Fe)
-         for (;;) {
-           if (0 == oe) {
-             (Re[0] += Me) == pM && (Re[0] = 1, ++ee.e);
-             break
-           }
- ... (5 more removed lines; see GitHub link above)
+     function jW(WW) {
+       if (0 === WW) return null;
+       const iW = AW[WW];
+       if (void 0 === iW) throw new Error(`${WW} is not a shader pack hook function id`);
```

#### 198. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5601-L5621` → after: `L4150-L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4150-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4150-L4154) · [Before (L5601-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5601-L5621)

```diff
-     function YM(ee, ie) {
-       var He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke = ee.constructor,
-         qe = ke.precision;
-       if (!ee.s || !ie.s) return ie.s ? ie.s = -ie.s : ie = new ke(ee), JM ? AM(ie, qe) : ie;
-       if (Fe = ee.d, Re = ie.d, ye = ie.e, Je = ee.e, Fe = Fe.slice(), Ke = Je - ye) {
-         for ((oe = Ke < 0) ? (He = Fe, Ke = -Ke, Ue = Re.length) : (He = Re, ye = Je, Ue = Fe.length), Ke > (be = Math.max(Math.ceil(qe / 7), Ue) + 2) && (Ke = be, He.length = 1), He.reverse(), be = Ke; be--;) He.push(0);
-         He.reverse()
-       } else {
-         for ((oe = (be = Fe.length) < (Ue = Re.length)) && (Ue = be), be = 0; be < Ue; be++)
-           if (Fe[be] != Re[be]) {
-             oe = Fe[be] < Re[be];
-             break
-           } Ke = 0
-       }
-       for (oe && (He = Fe, Fe = Re, Re = He, ie.s = -ie.s), Ue = Fe.length, be = Re.length - Ue; be > 0; --be) Fe[Ue++] = 0;
-       for (be = Re.length; be > Ke;) {
- ... (5 more removed lines; see GitHub link above)
+     function UW(WW) {
+       const iW = mW.e.length;
+       return {
+         strict: WW >= iW,
+         program: mW.e[WW % iW]
```

#### 199. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5628-L5632` → after: `L4158-L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4158-L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4158-L4159) · [Before (L5628-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5628-L5632)

```diff
-     function VM(ee, ie, He) {
-       var ye, be = tM(ee),
-         Me = OM(ee.d),
-         Ke = Me.length;
-       return ie ? (He && (ye = He - Ke) > 0 ? Me = Me.charAt(0) + "." + Me.slice(1) + wM(ye) : Ke > 1 && (Me = Me.charAt(0) + "." + Me.slice(1)), Me = Me + (be < 0 ? "e" : "e+") + be) : be < 0 ? (Me = "0." + wM(-be - 1) + Me, He && (ye = He - Ke) > 0 && (Me += wM(ye))) : be >= Ke … [truncated]
+     function kW(WW) {
+       return Number(WW.strict) * mW.e.length + mW.e.indexOf(WW.program)
```

#### 200. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5635-L5636` → after: `L4162-L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4162-L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4162-L4163) · [Before (L5635-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5635-L5636)

```diff
-     function aM(ee, ie) {
-       if (ee.length > ie) return ee.length = ie, !0
+     function sW(WW) {
+       return "" === WW ? [] : WW.split(" ")
```

#### 201. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5640-L5932` → after: `L4167-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4167-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4167-L4171) · [Before (L5640-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5640-L5932)

```diff
-       if (!ee || "object" !== typeof ee) throw Error(oM + "Object expected");
-       var ie, He, ye, be = ["precision", 1, FM, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
-       for (ie = 0; ie < be.length; ie += 3)
-         if (void 0 !== (ye = ee[He = be[ie]])) {
-           if (!(qM(ye) === ye && ye >= be[ie + 1] && ye <= be[ie + 2])) throw Error(RM + He + ": " + ye);
-           this[He] = ye
-         } if (void 0 !== (ye = ee[He = "LN10"])) {
-         if (ye != Math.LN10) throw Error(RM + He + ": " + ye);
-         this[He] = new this(ye)
-       }
-       return this
-     }
-     var xM = function ee(ie) {
-       var He, ye, be;
- 
-       function Me(ee) {
- ... (277 more removed lines; see GitHub link above)
+       const iW = {
+         variantFlags: new Uint8Array(EW),
+         hooks: new Uint8Array(EW * NW),
+         moduleCodes: Array(EW).fill(""),
+         reads: Array(2 * EW).fill("")
```

#### 202. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L5934-L6124` → after: `L4173-L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4173-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4173-L4176) · [Before (L5934-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L5934-L6124)

```diff
- 
-       function Vi(ee, ie) {
-         return ee && Yi(ee, ie, kH)
-       }
- 
-       function ai(ee, ie) {
-         for (var He = 0, ye = (ie = si(ie, ee) ? [ie] : ui(ie)).length; null != ee && He < ye;) ee = ee[ri(ie[He++])];
-         return He && He == ye ? ee : void 0
-       }
- 
-       function ci(ee, ie) {
-         return null != ee && ie in Object(ee)
-       }
- 
-       function xi(ee, ie, He, ye, be) {
-         return ee === ie || (null == ee || null == ie || !UH(ee) && !FH(ie) ? ee !== ee && ie !== ie : function(ee, ie, He, ye, be, oe) {
- ... (175 more removed lines; see GitHub link above)
+       for (const OW of WW) {
+         const WW = kW(OW.key),
+           mW = (WW, iW) => null === OW.hooks.surface || OW.reads.fragment.includes(WW) ? 0 : iW;
+         iW.variantFlags[WW] = (OW.sceneDepth ? PW : 0) | (OW.movesVertices ? LW : 0) | (OW.sunShadow ? cW : 0) | (OW.airShadow ? wW : 0) | (OW.discards ? tW : 0) | mW("localPosition", ZW) | mW("enchantSpeed", xW) | mW("enchantTier", lW), iW.hooks[WW * NW] = bW(OW.hooks.vertex), i … [truncated]
```

#### 203. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6127-L6159` → after: `L4181-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4181-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4181-L4204) · [Before (L6127-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6127-L6159)

```diff
-       function ui(ee) {
-         return yH(ee) ? ee : Gi(ee)
-       }
- 
-       function mi(ee, ie, He, ye, be, Me) {
-         var Ke = 2 & be,
-           Ue = ee.length,
-           Fe = ie.length;
-         if (Ue != Fe && !(Ke && Fe > Ue)) return !1;
-         var Je = Me.get(ee);
-         if (Je && Me.get(ie)) return Je == ie;
-         var oe = -1,
-           Re = !0,
-           ke = 1 & be ? new Zi : void 0;
-         for (Me.set(ee, ie), Me.set(ie, ee); ++oe < Ue;) {
-           var qe = ee[oe],
- ... (17 more removed lines; see GitHub link above)
+     function KW(WW) {
+       const {
+         hooks: iW,
+         moduleCodes: OW,
+         reads: mW
+       } = WW;
+       return Array.from(WW.variantFlags, ((WW, EW) => {
+         const ZW = EW * NW;
+         return {
+           key: UW(EW),
+           hooks: {
+             vertex: jW(iW[ZW]),
+             surface: jW(iW[ZW + 1]),
+             light: jW(iW[ZW + 2])
+           },
+           moduleCode: OW[EW],
+ ... (8 more added lines; see GitHub link above)
```

#### 204. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6162-L6278` → after: `L4207-L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4207-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4207-L4266) · [Before (L6162-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6162-L6278)

```diff
-         return Me.delete(ee), Me.delete(ie), Re
-       }
- 
-       function li(ee, ie) {
-         var He = ee.__data__;
-         return function(ee) {
-           var ie = typeof ee;
-           return "string" == ie || "number" == ie || "symbol" == ie || "boolean" == ie ? "__proto__" !== ee : null === ee
-         }(ie) ? He["string" == typeof ie ? "string" : "hash"] : He.map
-       }
- 
-       function Si(ee, ie) {
-         var He = function(ee, ie) {
-           return null == ee ? void 0 : ee[ie]
-         }(ee, ie);
-         return Li(He) ? He : void 0
- ... (101 more removed lines; see GitHub link above)
+       }))
+     }
+   },
+   42321: (WW, iW, OW) => {
+     OW.d(iW, {
+       D: () => AW,
+       e: () => EW,
+       f: () => mW,
+       g: () => xW,
+       j: () => tW,
+       l: () => jW,
+       m: () => NW,
+       o: () => LW,
+       q: () => cW,
+       t: () => PW,
+       x: () => bW,
+ ... (44 more added lines; see GitHub link above)
```

#### 205. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6280-L6283` → after: `L4268-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4268-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4268-L4277) · [Before (L6280-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6280-L6283)

```diff
-       function MH(ee) {
-         var ie = UH(ee) ? Qe.call(ee) : "";
-         return ie == oe || "[object GeneratorFunction]" == ie
-       }
+     function lW() {
+       const WW = ZW.map((WW => {
+         let {
+           name: iW,
+           type: OW
+         } = WW;
+         return `    ${iW}: ${OW},\n`
+       })).join("");
+       return `struct ${wW} {\n${WW}}\n@group(${mW}) @binding(${EW}) var<uniform> ${tW}: ${wW};\n`
+     }
```

#### 206. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6285-L6287` → after: `L4279-L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4279-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4279-L4284) · [Before (L6285-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6285-L6287)

```diff
-       function KH(ee) {
-         return "number" == typeof ee && ee > -1 && ee % 1 == 0 && ee <= ye
-       }
+     function AW(WW, iW) {
+       const OW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xW),
+         [mW, EW, NW, PW, LW, cW] = ZW;
+       OW.setFloat32(mW.offset, iW.seconds, !0), OW.setUint32(EW.offset, iW.lit ? 1 : 0, !0);
+       for (let wW = 0; wW < 3; wW++) OW.setInt32(NW.offset + 4 * wW, iW.renderOffset[wW], !0), OW.setFloat32(PW.offset + 4 * wW, iW.vWW[wW], !0), OW.setFloat32(LW.offset + 4 * wW, iW.eyePosition[wW], !0), OW.setFloat32(cW.offset + 4 * wW, iW.shadowDirection[wW], !0)
+     }
```

#### 207. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6289-L6292` → after: `L4286-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4286-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4286-L4310) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6289-L6292)

```diff
-       function UH(ee) {
-         var ie = typeof ee;
-         return !!ee && ("object" == ie || "function" == ie)
-       }
+     function bW(WW) {
+       const iW = new Uint32Array(Math.max(1, WW.length));
+       return WW.forEach(((WW, OW) => {
+         let {
+           id: mW,
+           rotation: EW
+         } = WW;
+         iW[OW] = 65535 & mW | (3 & EW) << 16
+       })), iW
+     }
+     const jW = {
+       off: 0,
+       strict: 1,
+       allow: 2
+     }
+   },
+ ... (9 more added lines; see GitHub link above)
```

#### 208. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6294-L6296` → after: `L4312-L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4312-L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4312-L4320) · [Before (L6294-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6294-L6296)

```diff
-       function FH(ee) {
-         return !!ee && "object" == typeof ee
-       }
+     function EW() {
+       const WW = [];
+       for (const iW of [!1, !0])
+         for (const OW of mW) WW.push({
+           strict: iW,
+           program: OW
+         });
+       return WW
+     }
```

#### 209. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6298-L6305` → after: `L4322-L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4322-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4322-L4324) · [Before (L6298-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6298-L6305)

```diff
-       function JH(ee) {
-         return "symbol" == typeof ee || FH(ee) && Qe.call(ee) == ze
-       }
-       var oH, RH = Ce ? (oH = Ce, function(ee) {
-         return oH(ee)
-       }) : function(ee) {
-         return FH(ee) && KH(ee.length) && !!Pe[Qe.call(ee)]
-       };
+     function NW(WW) {
+       return `${WW.strict?"strict":"allow"}.${WW.program}`
+     }
```

#### 210. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6307-L6309` → after: `L4326-L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4326-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4326-L4328) · [Before (L6307-L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6307-L6309)

```diff
-       function kH(ee) {
-         return bH(ee) ? Di(ee) : vi(ee)
-       }
+     function PW(WW) {
+       return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
+     }
```

#### 211. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L6311-L6329` → after: `L4330-L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4330-L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/161.js#L4330-L4332) · [Before (L6311-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/161.js#L6311-L6329)

```diff
-       function qH(ee) {
-         return ee
-       }
-       ee.exports = function(ee, ie, He) {
-         var ye, be = yH(ee) || RH(ee);
-         if (ie = Ci(ie), null == He)
-           if (be || UH(ee)) {
-             var Me = ee.constructor;
-             He = be ? yH(ee) ? new Me : [] : MH(Me) ? UH(ye = yi(ee)) ? bi(ye) : {} : {}
-           } else He = {};
-         return (be ? ve : Vi)(ee, (function(ee, ye, be) {
-           return ie(He, ee, ye, be)
-         })), He
-       }
-     }(CM, CM.exports);
-     "function" === typeof SuppressedError && SuppressedError;
- ... (3 more removed lines; see GitHub link above)
+     function LW(WW, iW) {
+       return "off" !== iW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === iW) && !PW(WW))))
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/162.js#L4-L222) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   7349: (ee, ie, He) => {
+   7639: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => MW,
+       i: () => KW,
+       l: () => kW,
+       m: () => UW
+     });
+     var mW = OW(7646);
+     const EW = 6,
+       NW = 3,
+       PW = 1,
+       LW = 2,
+       cW = 4,
+       wW = 8,
+       tW = 16,
+       ZW = 32,
+ ... (203 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L6-L210` → after: `L224-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L224-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/162.js#L224-L245) · [Before (L6-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/162.js#L6-L210)

```diff
-       BloxdMsnAccountSdk: () => Re,
-       MsnSdkAdaptor: () => Te
-     });
-     var ye = He(1300),
-       be = He(1119),
-       Me = He(3856),
-       Ke = He(610),
-       Ue = He(1737);
-     const Fe = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
-     let Je = null;
- 
-     function oe() {
-       return Je ??= async function() {
-         await (0, be.b)(Fe, {}, !1);
-         for (let ee = 0; ee < 50 && !window.$msstart; ee++) await (0, Ke.U)(100)
-       }(), Je
- ... (189 more removed lines; see GitHub link above)
+       SHADER_PACK_INPUTS_BINDING: () => NW.e,
+       SHADER_PACK_INPUTS_GROUP: () => NW.f,
+       SHADER_PACK_INPUTS_SIZE: () => NW.g,
+       SHADER_PACK_INPUTS_VAR: () => NW.j,
+       SHADER_PACK_MODES: () => NW.l,
+       SHADER_PACK_PROGRAMS: () => mW.e,
+       SHADER_PACK_SCENE_DEPTH_BINDING: () => NW.m,
+       SHADER_PACK_SUN_SHADOW_BINDINGS: () => NW.o,
+       SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => NW.q,
+       SHADER_PACK_TEXTURES_BINDING: () => NW.t,
+       encodeTextureLayers: () => NW.x,
+       flattenVariants: () => EW.e,
+       isVariantOff: () => mW.g,
+       packRunsIn: () => mW.j,
+       shaderPackInputsWgsl: () => NW.z,
+       shaderPackVariantKeys: () => mW.n,
+ ... (6 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   7355: (ee, ie, He) => {
+   53916: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/163.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/163.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => Me
+       compilePagePack: () => wW,
+       prefetchCompiler: () => LW,
+       reconcileHint: () => cW
```

#### 3. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L8-L47` → after: `L10-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L10-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/163.js#L10-L255) · [Before (L8-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/163.js#L8-L47)

```diff
-     var ye = He(1300),
-       be = He(1119);
-     class Me extends ye.d {
-       constructor(ee) {
-         super(), this.setOnEndCb = ee, this.name = "gamedistribution"
-       }
-       static async setup() {
-         let ee;
-         let ie;
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: He => {
-             const ye = () => {
-               ie && (window.adCompleteSoResume(), ie = !1), ee && (ee(), ee = null)
-             };
-             switch (He.name) {
- ... (24 more removed lines; see GitHub link above)
+     var mW = OW(7621),
+       EW = OW(7656),
+       NW = OW(7637),
+       PW = OW(7648);
+ 
+     function LW() {
+       (0, mW.loadPageShaderPackCompiler)()
+     }
+     async function cW() {
+       const WW = await (0, mW.loadPageShaderPackCompiler)();
+       await (WW ? (0, EW.reconcileStoredShaderPackHint)(WW) : (0, EW.forgetShaderPackActiveHint)())
+     }
+     async function wW(WW) {
+       const iW = await (0, mW.loadPageShaderPackCompiler)();
+       if (!iW) return {
+         status: "none"
+ ... (230 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L49-L64` → after: `L257-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L257-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/163.js#L257-L267) · [Before (L49-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/163.js#L49-L64)

```diff
-         }, await (0, be.b)("https://html5.api.gamedistribution.com/main.min.js", {
-           id: "gamedistribution-jssdk"
-         }), new Me((ie => {
-           ee = ie
-         }))
-       }
-       playVideoAd(ee, ie) {
-         this.setOnEndCb(ee), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
-       }
-       willRequestBanner() {
-         return void 0 !== window.gdsdk.AdType.Display
-       }
-       renderBanner(ee) {
-         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(ee.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, ee.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
-           containerId: ee.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((ee => console.info(ee)))) : console.error("window.gdsdk.AdType.Display is undefined")
+         };
+       return await (0, mW.replaceShaderPack)(WW, PW, iW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PW
+     }
+ 
+     function wW(WW, iW, OW) {
+       return {
+         headerVersion: (0, mW.pageShaderPackValidationVersion)(WW),
+         ok: 0 === iW.length,
+         errors: iW.slice(0, PW),
+         moreErrors: Math.max(0, iW.length - PW),
+         offInStrict: OW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/164.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/164.js#L4-L6)

```diff
-   7359: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       CoolMathGamesSdkAdaptor: () => Me
+   7676: (WW, iW, OW) => {
+     OW.d(iW, {
+       encodeBinaryMessageWithMetricsCookies: () => EW
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L8-L53` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/164.js#L8-L11) · [Before (L8-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/164.js#L8-L53)

```diff
-     var ye = He(1300),
-       be = He(1119);
-     class Me extends ye.d {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const ee = document.getElementsByClassName("ads-popup");
-         for (const ie of ee) ie instanceof HTMLElement && (ie.style.position = "fixed")
-       }
-       doAdBreakComplete() {
- ... (30 more removed lines; see GitHub link above)
+     var mW = OW(2478);
+ 
+     function EW(WW) {
+       return mW.l.toBuffer(WW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   7365: (ee, ie, He) => {
+   7699: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L6)

```diff
-       AdMobSdkAdaptor: () => Re
+       BloxdDiscordSDK: () => bW,
+       DiscordLoginCancelledError: () => AW,
+       discordPopupTimeoutMs: () => lW
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L8-L38` → after: `L10-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L10-L23) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L8-L38)

```diff
-     var ye = He(1300),
-       be = He(18),
-       Me = He(1682),
-       Ke = He(125),
-       Ue = He(3856),
-       Fe = He(347),
-       Je = He(1746);
-     const oe = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
- ... (15 more removed lines; see GitHub link above)
+     var mW = OW(154),
+       EW = OW(1220),
+       NW = OW(1111),
+       PW = OW(1126),
+       LW = OW.n(PW),
+       cW = OW(1185),
+       wW = OW(39),
+       tW = OW(643),
+       ZW = OW(1422),
+       xW = OW(1189);
+     const lW = 6e5;
+     class AW extends Error {
+       constructor() {
+         super(...arguments), this.name = NW.discordLoginCancelledErrorName
```

#### 4. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L40-L50` → after: `L25-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L25-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L25-L35) · [Before (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L40-L50)

```diff
-     };
-     class Re extends ye.d {
-       constructor(ee) {
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = oe[ee], Me.c.on("ads.bannerStatus", (ee => {
-           let {
-             placementId: ie,
-             shown: He,
-             error: ye
-           } = ee;
-           const be = !this.bannerFirstResponseSeen.has(ie);
-           this.bannerFirstResponseSeen.add(ie), be ? ((0, Je.j)(He), He ? console.log(`AD ${ie}: AdMob banner loaded`) : console.warn(`AD ${ie}: AdMob banner failed to load: ${ye}`)) : He || console.warn(`AD ${ie}: AdMob banner refresh failed: ${ye}`)
+     }
+     class bW {
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const WW = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (iW => {
+           var OW;
+           if (iW.origin !== WW || "oauth_authentication_discord" !== (null === (OW = iW.data) || void 0 === OW ? void 0 : OW.type)) return;
+           if ("string" !== typeof iW.data.code || !iW.data.code) return void this.failPopup(new AW("Discord authentication was cancelled on Discord"));
+           const mW = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === mW || void 0 === mW || mW(iW.data.code)
```

#### 5. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L53-L55` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L38-L39) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L53-L55)

```diff
-       static async setup() {
-         const ee = "mobileIos" === Ke.siteUsed ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${ee}`), new Re(ee)
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L57-L63` → after: `L41-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L41-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L41-L60) · [Before (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L57-L63)

```diff
-       muteGameDuring(ee) {
-         return this.fullScreenAdsInFlight++, be.e.set({
-           soundOnFromAd: !1
-         }), ee.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && be.e.set({
-             soundOnFromAd: !0
-           })
+       failPopup(WW) {
+         var iW;
+         const OW = this.popupWindowPromiseReject;
+         null === (iW = this.popupWindow) || void 0 === iW || iW.close(), this.resetPopupState(), null === OW || void 0 === OW || OW(WW)
+       }
+       openDiscordOAuthWindow() {
+         const WW = xW.d.discordClientID;
+         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${WW}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
+       }
+       async showDiscordAuthPrompt() {
+         return new Promise(((WW, iW) => {
+           ZW.NotificationProvider.showPromptPopup({
+             title: "Discord Login Required",
+             confirmText: "Continue",
+             confirmTooltip: "Open Discord login window",
+             cancelText: "Cancel",
+ ... (4 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L66-L77` → after: `L63-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L63-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L63-L72) · [Before (L66-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L66-L77)

```diff
-       playRewarded(ee, ie) {
-         const He = this.adUnitIds.rewarded;
-         this.muteGameDuring(Me.c.request("ads.showRewarded", {
-           placementId: He
-         })).then((He => {
-           let {
-             rewarded: ye
-           } = He;
-           ye ? ee() : ie()
-         }), (ee => {
-           console.warn(`AD ${He}: AdMob rewarded failed:`, ee), ie()
-         }))
+       signInWithPopup() {
+         if (null !== this.popupWindowPromise) return this.popupWindowPromise;
+         const WW = new Promise(((WW, iW) => {
+           this.popupWindowPromiseResolve = WW, this.popupWindowPromiseReject = iW
+         }));
+         return this.popupWindowPromise = WW, wW.e.removeItem(this.bloxdDiscordRefreshTokenKey), this.popupWindowTimeout = window.setTimeout((() => {
+           this.failPopup(new Error("Discord authentication timed out"))
+         }), lW), this.openPopup(WW).catch((iW => {
+           this.popupWindowPromise === WW && this.failPopup(iW instanceof Error ? iW : new Error(String(iW)))
+         })), WW
```

#### 8. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L79-L87` → after: `L74-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L74-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L74-L87) · [Before (L79-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L79-L87)

```diff
-       playVideoAd(ee, ie) {
-         const He = this.adUnitIds.interstitial;
-         this.muteGameDuring(Me.c.request("ads.showInterstitial", {
-           placementId: He
-         })).then((() => {
-           ee()
-         }), (ie => {
-           console.warn(`AD ${He}: AdMob interstitial failed:`, ie), ee()
-         }))
+       async openPopup(WW) {
+         let iW = this.openDiscordOAuthWindow();
+         if (!iW) {
+           if (await this.showDiscordAuthPrompt(), this.popupWindowPromise !== WW) return;
+           iW = this.openDiscordOAuthWindow()
+         }
+         if (console.log("Discord OAuth window opened:", iW), !iW) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
+         this.popupWindow = iW;
+         const OW = window.setInterval((() => {
+           iW.closed && this.popupWindowPromise === WW && (window.clearInterval(OW), this.popupWindowCheckInterval = null, window.setTimeout((() => {
+             this.popupWindowPromise === WW && this.failPopup(new AW("Discord authentication was cancelled - popup window was closed"))
+           }), 1e3))
+         }), 200);
+         this.popupWindowCheckInterval = OW
```

#### 9. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L89-L108` → after: `L89-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L89-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L89-L102) · [Before (L89-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L89-L108)

```diff
-       renderBanner(ee) {
-         const ie = (0, Ue.c)(ee),
-           He = this.adUnitIds.banners[ie];
-         if (void 0 === He) return;
-         const ye = document.getElementById(ee.divId);
-         if (!ye) return void console.warn(`AD ${ie}: AdMob renderBanner called but div ${ee.divId} is not in DOM`);
-         const be = ye.getBoundingClientRect(),
-           Ke = window.innerWidth,
-           oe = window.innerHeight;
-         if (0 === Ke || 0 === oe) return void console.warn(`AD ${ie}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const Re = {
-           x1: Fe.c.clamp(be.left / Ke * 100, 0, 100),
-           y1: Fe.c.clamp(be.top / oe * 100, 0, 100),
-           x2: Fe.c.clamp(be.right / Ke * 100, 0, 100),
-           y2: Fe.c.clamp(be.bottom / oe * 100, 0, 100)
-         };
- ... (4 more removed lines; see GitHub link above)
+       async exchangeAuthorizationCodeForAccessToken(WW, iW) {
+         const {
+           accessToken: OW,
+           refreshToken: mW
+         } = await LW()((async () => await (0, NW.postJsonWithMetricsCookiesAndJsonResponse)(`${cW.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+           authorizationCode: WW,
+           bloxdClientEnvironment: xW.d.clientEnvironment,
+           instanceId: null
+         }, {
+           retries: 0
+         }, iW.getMetricsCookies())), {
+           retries: 3
+         });
+         return wW.e.setItem(this.bloxdDiscordRefreshTokenKey, mW), OW
```

#### 10. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L110-L115` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L104-L106) · [Before (L110-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L110-L115)

```diff
-       clearBanner(ee) {
-         const ie = (0, Ue.c)(ee),
-           He = this.bannerPlacementByBloxdId.get(ie);
-         void 0 !== He && (this.bannerPlacementByBloxdId.delete(ie), this.bannerFirstResponseSeen.delete(He), console.log(`AD ${ie}: AdMob clearBanner placementId=${He}`), Me.c.emit("ads.hideBanner", {
-           placementId: He
-         }))
+       hasCurrentUser() {
+         const WW = wW.e.getItem(this.bloxdDiscordRefreshTokenKey);
+         return !(0, tW.K)(WW)
```

#### 11. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L117-L118` → after: `L108-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L108-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/165.js#L108-L133) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/165.js#L117-L118)

```diff
-       canShowBloxdAd(ee) {
-         return !1
+       async getCurrentUser(WW) {
+         const iW = wW.e.getItem(this.bloxdDiscordRefreshTokenKey);
+         if (!iW) return null;
+         let OW;
+         try {
+           const mW = await LW()((async () => {
+             try {
+               return await (0, NW.postJsonWithMetricsCookiesAndJsonResponse)(`${cW.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
+                 refreshToken: iW
+               }, {
+                 retries: 0
+               }, WW.getMetricsCookies())
+             } catch (OW) {
+               if (jW(OW)) throw new(LW().AbortError)(OW);
+               throw OW
+             }
+ ... (10 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   7369: (ee, ie, He) => {
+   7708: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/166.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/166.js#L6)

```diff
-       AdinPlaySdkAdaptor: () => oe
+       BloxdFirebaseSdk: () => xW
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L8-L36` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/166.js#L8-L31) · [Before (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/166.js#L8-L36)

```diff
-     var ye = He(1300),
-       be = He(1119),
-       Me = He(225),
-       Ke = He(3142),
-       Ue = He(3148);
- 
-     function Fe(ee) {
-       let ie = 0;
-       ee("addEventListener", 2, ((ee, He) => {
-         if (!He) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         !1 === ee.gdprApplies && (0, Ke.noteNoGdprChoiceComing)();
-         const ye = function(ee) {
-           const ie = "useractioncomplete" === ee.eventStatus || "tcloaded" === ee.eventStatus && !!ee.tcString;
-           return ee.gdprApplies && ie ? Ue.c.every((ie => !0 === ee.purpose.consents[ie])) : null
-         }(ee);
-         if (null === ye) return;
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(1964),
+       EW = OW(3960),
+       NW = OW(109),
+       PW = OW(100),
+       LW = OW(1787),
+       cW = OW(2152);
+     const wW = {
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
+     };
+     var tW = OW(1888),
+       ZW = OW(1813);
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L38-L101` → after: `L33-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L33-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/166.js#L33-L72) · [Before (L38-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/166.js#L38-L101)

```diff
-       static async setup() {
-         return (0, Me.canonicaliseZonesWhenIdle)(Je), (0, Ke.setUpGtag)({
-             tcfCmp: !0
-           }), await (0, be.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
-           function() {
-             if (window.__tcfapi) return void Fe(window.__tcfapi);
-             let ee = 0;
-             const ie = window.setInterval((() => {
-               ee++;
-               const He = window.__tcfapi;
-               He ? (window.clearInterval(ie), Fe(He)) : ee >= 150 && window.clearInterval(ie)
-             }), 200)
-           }(), new oe
-       }
-       playRewarded(ee, ie) {
-         if ("undefined" !== typeof window.aiptag.adplayer) {
- ... (48 more removed lines; see GitHub link above)
+       static async setupInternal() {
+         const WW = await Promise.all([OW.e(303), OW.e(302)]).then((() => OW(42026))),
+           iW = await Promise.all([OW.e(303), OW.e(304)]).then((() => OW(42045))),
+           lW = await Promise.all([OW.e(303), OW.e(305)]).then((() => OW(42048))),
+           AW = WW.initializeApp({
+             ...wW,
+             measurementId: EW.bloxdGa4MeasurementId
+           });
+         (0, EW.setUpGtag)(), window.gtag("config", EW.bloxdGa4MeasurementId), (0, EW.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const bW = iW.getAnalytics(AW),
+           jW = {
+             portal: NW.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         iW.setUserProperties(bW, jW);
+         const UW = lW.initializeAuth(AW, {
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L103` → after: `L74-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L74-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/166.js#L74-L160) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/166.js#L103)

```diff
-         }))
+         }));
+         class SW extends xW {
+           setUserProperties(WW) {
+             iW.setUserProperties(bW, WW)
+           }
+           onIdTokenChanged(WW) {
+             lW.onIdTokenChanged(UW, WW)
+           }
+           canSignIn() {
+             return !0
+           }
+           async signInWithPopup(WW) {
+             var iW;
+             const OW = await lW.signInWithPopup(UW, KW[WW]);
+             return null !== (iW = null === OW || void 0 === OW ? void 0 : OW.user) && void 0 !== iW ? iW : null
+           }
+ ... (71 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   7378: (ee, ie, He) => {
+   7717: (WW, iW, OW) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/167.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/167.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => Me
+       BloxdDiscordActivitySdk: () => sW
```

#### 3. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L8-L12` → after: `L8-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L8-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/167.js#L8-L67) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/167.js#L8-L12)

```diff
-     var ye = He(1300),
-       be = He(1119);
-     class Me extends ye.d {
-       constructor() {
-         super(), this.name = "adsense"
+     var mW = OW(7720),
+       EW = OW(1220),
+       NW = OW(1172),
+       PW = OW(643),
+       LW = OW(1244),
+       cW = OW(1856),
+       wW = OW(1351),
+       tW = OW(805),
+       ZW = OW(25),
+       xW = OW(1189),
+       lW = OW(3245),
+       AW = function(WW) {
+         return WW.APPLICATION_COMMANDS = "applications.commands", WW.IDENTIFY = "identify", WW.EMAIL = "email", WW.GUILDS = "guilds", WW.READ_DM_CHANNELS = "dm_channels.read", WW.WRITE_ACTIVITIES = "rpc.activities.write", WW
+       }(AW || {}),
+       bW = function(WW) {
+         return WW[WW.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", WW[WW.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", WW[WW.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", WW[WW.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", WW[WW.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", WW[WW.RATELIMITE … [truncated]
+ ... (44 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L15-L21` → after: `L70-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L70-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/167.js#L70-L99) · [Before (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/167.js#L15-L21)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(ee) {
-           window.adsbygoogle.push(ee)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
+         console.log("Setting up Discord SDK with client id", xW.d.discordClientID);
+         const WW = new mW.e(xW.d.discordClientID);
+         let iW = !1;
+         setTimeout((() => {
+           iW || (console.warn("Discord SDK took too long to initialize"), (0, cW.reloadBloxd)())
+         }), 15e3), await WW.ready(), iW = !0;
+         try {
+           const {
+             enabled: iW
+           } = await WW.commands.encourageHardwareAcceleration();
+           iW || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (EW) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", EW)
+         }
+         const OW = new sW(WW);
+         return OW.isMobilePlatform() && (OW.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+ ... (14 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L23-L47` → after: `L101-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L101-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/167.js#L101-L268) · [Before (L23-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/167.js#L23-L47)

```diff
-         }), await (0, be.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new Me
-       }
-       playVideoAd(ee, ie) {
-         console.log("playPreroll requested");
-         let He = !1;
-         const ye = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), He = !0, ee()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === ie ? "start" : "next",
-           name: ie,
-           beforeAd: () => {
- ... (9 more removed lines; see GitHub link above)
+         }
+         iW === this.activityUpdateId && await this.discordSdk.commands.setActivity({
+           activity: {
+             type: jW.PLAYING,
+             details: OW,
+             state: mW,
+             assets: {
+               large_image: "icon",
+               large_text: OW
+             },
+             timestamps: {
+               start: this.startTime
+             }
+           }
+         }).catch((WW => {
+           console.error(`Failed to update Discord activity rich presence with description="${OW}":`, WW)
+ ... (152 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   7386: (ee, ie, He) => {
+   7720: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => LN,
+       i: () => DO
+     });
+     var mW = {};
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L6` → after: `L11-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L11-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L6)

```diff
-       AditudeSdkAdaptor: () => Ke
+       c: () => Nm,
+       h: () => cm,
+       g: () => Lm,
+       l: () => zO,
+       n: () => rO,
+       o: () => um,
+       p: () => Wm,
+       r: () => em,
+       u: () => ym,
+       v: () => dm,
+       y: () => FO,
+       z: () => Jm,
+       D: () => nm,
+       E: () => om,
+       K: () => QO,
+       I: () => mm,
+ ... (2 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L8-L12` → after: `L30-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L30-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L30-L349) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L8-L12)

```diff
-     var ye = He(1300),
-       be = He(1119);
-     const Me = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
+     var EW = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+ 
+     function NW(WW) {
+       return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
+     }
+     var PW = {
+       exports: {}
+     };
+     ! function(WW) {
+       var iW = Object.prototype.hasOwnProperty,
+         OW = "~";
+ 
+       function mW() {}
+ 
+       function EW(WW, iW, OW) {
+         this.cZ = WW, this.context = iW, this.once = OW || !1
+ ... (304 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L14` → after: `L351-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L351-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L351-L361) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L14)

```diff
-     class Ke extends ye.d {
+ 
+     function kW(WW, iW) {
+       const OW = UW({
+         issueData: iW,
+         data: WW.data,
+         path: WW.path,
+         errorMaps: [WW.common.contextualErrorMap, WW.schemaErrorMap, jW(), AW].filter((WW => !!WW))
+       });
+       WW.common.issues.push(OW)
+     }
+     class sW {
```

#### 5. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L16-L36` → after: `L363-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L363-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L363-L366) · [Before (L16-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L16-L36)

```diff
-         super(), this.name = "aditude"
-       }
-       static async setup() {
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, be.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new Ke
-       }
-       playVideoAd(ee, ie) {
-         this.playVideoOrRewarded("video", ee, ee)
-       }
-       playRewarded(ee, ie) {
-         this.playVideoOrRewarded("rewarded", ee, ie)
-       }
-       renderBanner(ee) {
-         const ie = this.getBaseDivId(ee.adId, ee.width, ee.height);
-         window.tude.cmd.push((function() {
- ... (5 more removed lines; see GitHub link above)
+         this.value = "valid"
+       }
+       RA() {
+         "valid" === this.value && (this.value = "RA")
```

#### 6. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L38-L39` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L368-L369) · [Before (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L38-L39)

```diff
-       getBaseDivId(ee, ie, He) {
-         return `pb-slot-bloxdio-${ie}-${He}${ee>1?`-${ee}`:""}`
+       abort() {
+         "aborted" !== this.value && (this.value = "aborted")
```

#### 7. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L41` → after: `L371-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L371-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L371-L523) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L41)

```diff
-       playVideoOrRewarded(ee, ie, He) {
+       static mergeArray(WW, iW) {
+         const OW = [];
+         for (const mW of iW) {
+           if ("aborted" === mW.status) return MW;
+           "RA" === mW.status && WW.RA(), OW.push(mW.value)
+         }
+         return {
+           status: WW.value,
+           value: OW
+         }
+       }
+       static async mergeObjectAsync(WW, iW) {
+         const OW = [];
+         for (const mW of iW) OW.push({
+           key: await mW.key,
+           value: await mW.value
+ ... (137 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L43-L45` → after: `L525-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L525-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L525-L780) · [Before (L43-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L43-L45)

```diff
-         let be = !1;
-         const Ke = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", be = !0
+         const mW = {
+             common: {
+               issues: [],
+               async: null !== (OW = null === iW || void 0 === iW ? void 0 : iW.async) && void 0 !== OW && OW,
+               contextualErrorMap: null === iW || void 0 === iW ? void 0 : iW.errorMap
+             },
+             path: (null === iW || void 0 === iW ? void 0 : iW.path) || [],
+             schemaErrorMap: this._def.errorMap,
+             parent: null,
+             data: WW,
+             parsedType: ZW(WW)
+           },
+           EW = this._parseSync({
+             data: WW,
+             path: mW.path,
+             parent: mW
+ ... (240 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L47-L48` → after: `L782-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L782-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L782-L1864) · [Before (L47-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L47-L48)

```diff
-           Ue = (ee, ie) => {
-             console.error(`AD: Error while playing Aditude video ad: ${ee}:`, ie), Ke(), He()
+           message: cW.message
+         }), iW.RA());
+         else if ("toLowerCase" === cW.kind) WW.data = WW.data.toLowerCase();
+         else if ("toUpperCase" === cW.kind) WW.data = WW.data.toUpperCase();
+         else if ("startsWith" === cW.kind) WW.data.startsWith(cW.value) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
+           code: xW.invalid_string,
+           validation: {
+             startsWith: cW.value
+           },
+           message: cW.message
+         }), iW.RA());
+         else if ("endsWith" === cW.kind) WW.data.endsWith(cW.value) || (OW = this._getOrReturnCtx(WW, OW), kW(OW, {
+           code: xW.invalid_string,
+           validation: {
+             endsWith: cW.value
+           },
+ ... (1067 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L50-L76` → after: `L1866-L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L1866-L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/168.js#L1866-L1969) · [Before (L50-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/168.js#L50-L76)

```diff
-         if (console.log(`AD: Requesting Aditude ${ee} ad`), void 0 === (null === (ye = window.tude) || void 0 === ye ? void 0 : ye.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${ee} ad playing`), void Ue("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: Me[ee],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((He => {
-               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), He.on("playerClose", ((He, ye) => {
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${ee} ad`), Ke(), ie()
-               })).on("adPrefetchError", ((ee, ie) => {
-                 console.log("AD: Inside Aditude player.on adPrefetchError"), Ue("Prefetch error", ie)
-               })).on("adError", ((ee, ie) => {
-                 console.log("AD: Inside Aditude player.on adError"), Ue("Generic error", ie)
-               }));
- ... (11 more removed lines; see GitHub link above)
+           return {
+             result: await WW._parseAsync({
+               data: iW.data,
+               path: iW.path,
+               parent: OW
+             }),
+             ctx: OW
+           }
+         }))).then((function(WW) {
+           for (const iW of WW)
+             if ("valid" === iW.result.status) return iW.result;
+           for (const mW of WW)
+             if ("RA" === mW.result.status) return iW.common.issues.push(...mW.ctx.common.issues), mW.result;
+           const OW = WW.map((WW => new lW(WW.ctx.common.issues)));
+           return kW(iW, {
+             code: xW.invalid_union,
+ ... (88 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L5-L2809` → after: `L4-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L4-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/169.js#L4-L89) · [Before (L5-L2809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/169.js#L5-L2809)

```diff
-   7408: (ee, ie, He) => {
-     var ye = He(7416);
-     ie.e = {
-       prefix: ye.prefix,
-       iconName: ye.iconName,
-       icon: [ye.width, ye.height, ye.aliases, ye.unicode, ye.svgPathData]
-     }, ie.f = ie.e, ye.prefix, ye.iconName, ye.width, ye.height, ye.aliases, ye.unicode, ye.svgPathData, ye.aliases
-   },
-   7422: (ee, ie) => {
-     var He = "alarm-clock",
-       ye = [9200],
-       be = "f34e",
-       Me = "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 … [truncated]
-     ie.d = {
-       prefix: "fas",
-       iconName: He,
- ... (2789 more removed lines; see GitHub link above)
+   7726: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       BloxdMsnAccountSdk: () => ZW,
+       MsnSdkAdaptor: () => bW
+     });
+     var mW = OW(1343),
+       EW = OW(1162),
+       NW = OW(4712),
+       PW = OW(643),
+       LW = OW(1830);
+     const cW = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     let wW = null;
+ 
+     function tW() {
+       return wW ??= async function() {
+         await (0, EW.d)(cW, {}, !1);
+ ... (70 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L2811-L2812` → after: `L91-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L91-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/169.js#L91-L210) · [Before (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/169.js#L2811-L2812)

```diff
-       be = ye,
-       Me = ye
+       AW = {
+         leaderboard: {
+           1: ["right", "left"],
+           5: ["top", "left"]
+         },
+         square: {
+           1: []
+         },
+         skyscraper: {
+           2: []
+         }
+       };
+     class bW extends mW.c {
+       constructor() {
+         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+       }
+ ... (104 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/170.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/170.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251)

#### 1. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L4-L17` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/170.js#L4-L6) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/170.js#L4-L17)

```diff
-   8891: (ee, ie) => {
-     var He = "youtube",
-       ye = [61802],
-       be = "f167",
-       Me = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
-     ie.b = {
-       prefix: "fab",
-       iconName: He,
-       icon: [576, 512, ye, be, Me]
-     }, ie.c = ie.b
-   },
-   7561: (ee, ie) => {
-     Object.defineProperty(ie, "__esModule", {
-       value: !0
+   7730: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       GameDistributionSdkAdaptor: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L19-L225` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/170.js#L8-L12) · [Before (L19-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/170.js#L19-L225)

```diff
-     var He = "bolt",
-       ye = [9889, "zap"],
-       be = "f0e7",
-       Me = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
-     ie.definition = {
-       prefix: "fas",
-       iconName: He,
-       icon: [448, 512, ye, be, Me]
-     }, ie.faBolt = ie.definition, ie.prefix = "fas", ie.iconName = He, ie.width = 448, ie.height = 512, ie.ligatures = ye, ie.unicode = be, ie.svgPathData = Me, ie.aliases = ye
-   },
-   8339: (ee, ie) => {
-     var He = "person-military-pointing",
-       ye = [],
-       be = "e54a",
-       Me = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
-     ie.c = {
- ... (191 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     class NW extends mW.c {
+       constructor(WW) {
+         super(), this.setOnEndCb = WW, this.name = "gamedistribution"
```

#### 3. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L227-L289` → after: `L14-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L14-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/170.js#L14-L46) · [Before (L227-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/170.js#L227-L289)

```diff
-       Pe.push(...De);
-       ("boolean" === typeof ee.player ? ee.player : Array.isArray(ee.ranks)) && "" !== Oe && He.isFriend(Oe) && Pe.push({
-         kind: "rank",
-         rank: fe
-       }), "number" === typeof ee.Po && Pe.push({
-         kind: "text",
-         text: ` ${ee.Po}m`,
-         size: Ue.d.DEFAULT_FONT_SIZE,
-         colour: "#cef3ff"
-       });
-       const Ae = de ? (0, Ue.k)(de, Ue.d.DEFAULT_SUBTITLE_FONT_SIZE, He) : null,
-         Ye = "string" === typeof ge.backgroundColor ? ge.backgroundColor : "#22283b",
-         Ve = "string" === typeof ge.subtitleBackgroundColor ? ge.subtitleBackgroundColor : "#1a1e2d",
-         ae = Te(ge.healthbar),
-         ce = Te(ge.border),
-         xe = Array.isArray(ee.effects) ? ee.effects.filter((ee => "string" === typeof ee && pe.has(ee))) : [],
- ... (47 more removed lines; see GitHub link above)
+       static async setup() {
+         let WW;
+         let iW;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: OW => {
+             const mW = () => {
+               iW && (window.adCompleteSoResume(), iW = !1), WW && (WW(), WW = null)
+             };
+             switch (OW.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), iW = !1, WW ? (WW(), WW = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L292-L696` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/170.js#L49-L52) · [Before (L292-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/170.js#L292-L696)

```diff
-           if (ce) {
-             const ie = [];
-             Be(ce, "nametag") && ie.push({
-               x: Qe,
-               y: ei,
-               width: re,
-               height: Ce.height + (Ae ? ve.height : 0)
-             }), ye && Be(ce, "healthbar") && ie.push(ye), ie.length > 0 && function(ee, ie, He) {
-               const ye = ze(ie),
-                 be = ye / 2,
-                 Me = ee => ee.width > 0 && ee.height > 0,
-                 Ke = He.map((ee => ({
-                   x: ee.x + be,
-                   y: ee.y + be,
-                   width: ee.width - ye,
-                   height: ee.height - ye
- ... (389 more removed lines; see GitHub link above)
+         }, await (0, EW.d)("https://html5.api.gamedistribution.com/main.min.js", {
+           id: "gamedistribution-jssdk"
+         }), new NW((iW => {
+           WW = iW
```

#### 5. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L699-L700` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/170.js#L55-L56) · [Before (L699-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/170.js#L699-L700)

```diff
-       loadFor(ee) {
-         !this.restWanted && Ye.test(ee) && this.loadRest()
+       playVideoAd(WW, iW) {
+         this.setOnEndCb(WW), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 6. `bundles/bloxd.io/chunks/js/170.js` (Changed code · before: `L702-L820` → after: `L58-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-09ec103691a7c0e933730767badf65dc7b03ab927f5eddbb7929ff7b72a12251) · [After (L58-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/170.js#L58-L64) · [Before (L702-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/170.js#L702-L820)

```diff
-     }(Se);
- 
-     function je(ee) {
-       Object.assign(xe, ee), xe.loadsFontRest && ne.loadRest(), Se(!1)
-     }
- 
-     function se(ee) {
-       ee !== Le && (Le = ee, Se())
-     }
- 
-     function Ie(ee) {
-       if ("none" === ve || null === ee) return;
-       ee(ae, "all" === ve ? 0 : ce, new Uint8Array(0)) && (ve = "none")
-     }
-     const he = new Map,
-       Ne = new Map;
- ... (103 more removed lines; see GitHub link above)
+       willRequestBanner() {
+         return void 0 !== window.gdsdk.AdType.Display
+       }
+       renderBanner(WW) {
+         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(WW.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, WW.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
+           containerId: WW.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((WW => console.info(WW)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/171.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/171.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d)

#### 1. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L4-L6)

```diff
-   9607: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue
+   7737: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CoolMathGamesSdkAdaptor: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L8-L1025` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L8-L16) · [Before (L8-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L8-L1025)

```diff
-     var ye = He(18),
-       be = He(1127),
-       Me = He(5501),
-       Ke = He(1228);
- 
-     function Ue(ee) {
-       let {
-         note: ie
-       } = ee;
-       const {
-         t: He
-       } = (0, be.v)(), {
-         clientEscMenuOptions: Ue
-       } = (0, ye.m)(["clientEscMenuOptions"]);
-       return (0, Ke.jsx)(Me.c, {
-         label: He("touchSettings:actionButtons"),
- ... (1002 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     class NW extends mW.c {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
```

#### 3. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L1027-L1075` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L18-L21) · [Before (L1027-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L1027-L1075)

```diff
-     }
- 
-     function wi(ee, ie, He) {
-       let {
-         keysAbove: ye
-       } = He;
-       const be = [...ee.documentElement.classList].filter((ee => !Oi.has(ee) && !Wi.has(ee))),
-         Me = [...ie.documentElement.classList].filter((ee => Wi.has(ee))),
-         Ke = [Ei, gi.hotbar, gi.hasShop, gi.hasBag];
-       ye && Ke.push(gi.keysAbove), ie.documentElement.className = [...be, ...Ke, ...Me].join(" ")
-     }
-     const Di = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
- 
-     function Pi(ee, ie, He, ye, be) {
-       const Me = (0, Ae.x)(He, ye, "joystick"),
-         Ke = (0, Ne.I)((0, Ne.Y)(He, ye, be), ye),
- ... (33 more removed lines; see GitHub link above)
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const WW = document.getElementsByClassName("ads-popup");
+         for (const iW of WW) iW instanceof HTMLElement && (iW.style.position = "fixed")
```

#### 4. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L1077-L1155` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L23-L24) · [Before (L1077-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L1077-L1155)

```diff
-     }
- 
-     function ai(ee, ie) {
-       const [He, ye] = Vi(ee, "hotbar", (ie => {
-         const He = He => {
-           var ye, be;
-           return ie(He), null !== (ye = null === (be = ee.querySelector(".HotBarGameItemsContainer")) || void 0 === be ? void 0 : be.getBoundingClientRect().width) && void 0 !== ye ? ye : 0
-         };
-         return [He(1), He(Ae.h)]
-       }));
-       return He <= 0 ? Ae.h : Math.min(Ae.h, Math.max(1, Math.floor(ye / He / ie + 1e-6) * ie))
-     }
-     const ci = 3,
-       xi = .5,
-       Li = ee => ee.right - ee.left;
-     const Ci = (ee, ie) => Math.abs((0, se.d)(ee).x - (0, se.d)(ie).x) + Math.abs((0, se.d)(ee).y - (0, se.d)(ie).y) + Math.abs(Li(ee) - Li(ie));
- ... (63 more removed lines; see GitHub link above)
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L1157-L1382` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L26-L27) · [Before (L1157-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L1157-L1382)

```diff
-       return Re !== Ee && be(Ee), Ee
-     }
- 
-     function ui(ee, ie, He, ye, be) {
-       let [Me, Ke, Ue] = ie;
-       const Fe = Ae.q[ee],
-         Je = {};
-       Fe.scale && Li(ye) > 0 && Math.abs(Li(He) - Li(ye)) > xi && (Je.scale = Math.max(Ae.j, Math.min(Ae.h, Ue * Li(He) / Li(ye))));
-       const oe = (0, se.d)(He).x - (0, se.d)(ye).x,
-         Re = (0, se.d)(He).y - (0, se.d)(ye).y;
-       return Fe.move && (Math.abs(oe) > xi || Math.abs(Re) > xi) && (Je.dx = Me + oe / be.width, Je.dy = Ke + Re / be.height), void 0 === Je.scale && void 0 === Je.dx ? null : Je
-     }
-     let mi = 0;
- 
-     function li() {
-       return mi > 0
- ... (210 more removed lines; see GitHub link above)
+       static async setup() {
+         return await (0, EW.d)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, EW.d)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new NW
```

#### 6. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L1384-L2452` → after: `L29-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L29-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L29-L32) · [Before (L1384-L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L1384-L2452)

```diff
-     }
-     var Ii = He(9654);
- 
-     function Ni(ee, ie) {
-       return Object.keys(ee).filter((ee => ee !== ie)).map((ie => ee[ie]))
-     }
- 
-     function Gi(ee) {
-       return ee.map((ee => {
-         let {
-           id: ie,
-           box: He
-         } = ee;
-         return `${ie}:${He.left},${He.top},${He.right},${He.bottom}`
-       })).join(";")
-     }
- ... (1053 more removed lines; see GitHub link above)
+       playVideoAd(WW, iW) {
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
```

#### 7. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L2454-L2904` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L34-L36) · [Before (L2454-L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L2454-L2904)

```diff
-         },
-         onReset: ee => {
-           ei(ee, Ae.b)
-         },
-         locked: Ge,
-         lockable: yi,
-         onLocked: Hi,
-         note: (ie, He) => {
-           const ye = He && Te.length > 0 ? ee("hudLayout:overlapsNote", {
-             names: (0, Pe.y)(Te, xe, ee, Le)
-           }) : null;
-           if (He && ue(ie, ce)) return (0, ge.jsxs)(ge.Fragment, {
-             children: [ye && (0, ge.jsx)("span", {
-               children: ye
-             }), (0, ge.jsx)("span", {
-               children: ee("hudLayout:floatingJoystickNote")
- ... (435 more removed lines; see GitHub link above)
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), WW()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 8. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L2906-L3081` → after: `L38-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L38-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L38-L42) · [Before (L2906-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L2906-L3081)

```diff
-       we.length > 0 && (Ze = Re("controls:sharedBindingsWarning") + " ", Ze += we.join(", "));
-       const Pe = () => {
-           fe(!1), Ee(null), ze("controls:clickToEnterNewBinding"), de(null)
-         },
-         Ae = () => "BindingInput_" + ie;
-       return (0, ge.jsxs)("div", {
-         className: Fe()("ControlRow", {
-           WarningBorder: null !== Ze
-         }),
-         children: [(0, ge.jsxs)("div", {
-           className: "ControlRowInner",
-           children: [(0, ge.jsxs)("div", {
-             className: "ControlName",
-             children: [Re(Me.u[ie].translationKey, Me.u[ie].params), oe && ke && (0, ge.jsx)(pe.b, {
-               glyph: ke,
-               className: "ControlPadGlyph"
- ... (160 more removed lines; see GitHub link above)
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
```

#### 9. `bundles/bloxd.io/chunks/js/171.js` (Changed code · before: `L3197-L3227` → after: `L45-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029dR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b3005d5ca932c01313de5e6fac035aa6a83c10558d082733c202108217f9029d) · [After (L45-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/171.js#L45-L50) · [Before (L3197-L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/171.js#L3197-L3227)

```diff
-   },
-   9408: (ee, ie, He) => {
-     He.d(ie, {
-       B: () => We,
-       E: () => Je,
-       G: () => Ze,
-       J: () => Oe,
-       K: () => de,
-       L: () => pe,
-       N: () => Fe,
-       Q: () => oe,
-       d: () => Xe,
-       h: () => te,
-       l: () => ge,
-       p: () => Ee,
-       s: () => fe,
- ... (15 more removed lines; see GitHub link above)
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/172.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/172.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413)

#### 1. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L4-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/172.js#L4-L6) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/172.js#L4-L9)

```diff
-   37420: (ee, ie, He) => {
-     He.d(ie, {
-       b: () => pe,
-       d: () => Xe,
-       h: () => ke,
-       j: () => Re
+   7742: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AdMobSdkAdaptor: () => ZW
```

#### 2. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L11-L82` → after: `L8-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L8-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/172.js#L8-L103) · [Before (L11-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/172.js#L11-L82)

```diff
-     var ye = He(34867),
-       be = He(37424),
-       Me = He(37427),
-       Ke = He(9446),
-       Ue = He(1432),
-       Fe = He(59),
-       Je = He(77),
-       oe = He(1228);
- 
-     function Re() {
-       var ee;
-       return (0, Ue.j)(be.b, (0, be.p)()), (0, oe.jsx)(oe.Fragment, {
-         children: null === (ee = (0, be.p)()) || void 0 === ee ? void 0 : ee.content
-       })
-     }
- 
- ... (56 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(25),
+       NW = OW(1787),
+       PW = OW(136),
+       LW = OW(4712),
+       cW = OW(344),
+       wW = OW(1836);
+     const tW = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+ ... (80 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L84-L107` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/172.js#L105-L108) · [Before (L84-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/172.js#L84-L107)

```diff
-         return fe.add(ee), ee(), () => {
-           fe.delete(ee)
-         }
-       }), [He]), ye ? (0, Je.createPortal)(ie, ye) : null
-     }
-   },
-   9446: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Me,
-       g: () => be
-     });
-     let ye = null;
-     const be = function(ee) {
-         const ie = {
-           cycle: ee,
-           canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
- ... (8 more removed lines; see GitHub link above)
+         this.bannerPlacementByBloxdId.set(iW, OW), console.log(`AD ${iW}: AdMob renderBanner placementId=${OW} box=`, ZW), (0, wW.i)("site_sdk"), NW.d.emit("ads.showBanner", {
+           placementId: OW,
+           ...ZW
+         })
```

#### 4. `bundles/bloxd.io/chunks/js/172.js` (Changed code · before: `L109-L127` → after: `L110-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-36df7c4e627761732ed8aa013e529446018ca6f1188d8d9b5c2143fcdd504413) · [After (L110-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/172.js#L110-L118) · [Before (L109-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/172.js#L109-L127)

```diff
-   },
-   39331: (ee, ie, He) => {
-     function ye(ee, ie, He) {
-       var ye;
-       const {
-         width: be,
-         height: Me
-       } = He, Ke = null !== (ye = ee.text) && void 0 !== ye ? ye : ee, Ue = (Ke.x / 100 - .5) * be, Fe = (Ke.y / 100 - .5) * Me, Je = be / 2 - ie.x;
-       if (null !== ee.text && Math.abs(Ue) <= Je && Fe >= ie.top - Me / 2 && Fe <= Me / 2 - ie.bottom) return {
-         x: Ke.x,
-         y: Ke.y
-       };
-       const oe = Math.min(0 === Ue ? 1 / 0 : Je / Math.abs(Ue), Fe > 0 ? (Me / 2 - ie.bottom) / Fe : Fe < 0 ? (ie.top - Me / 2) / Fe : 1 / 0);
-       return !Number.isFinite(oe) || oe < 0 ? {
-         x: 50,
-         y: 50
- ... (3 more removed lines; see GitHub link above)
+       clearBanner(WW) {
+         const iW = (0, LW.c)(WW),
+           OW = this.bannerPlacementByBloxdId.get(iW);
+         void 0 !== OW && (this.bannerPlacementByBloxdId.delete(iW), this.bannerFirstResponseSeen.delete(OW), console.log(`AD ${iW}: AdMob clearBanner placementId=${OW}`), NW.d.emit("ads.hideBanner", {
+           placementId: OW
+         }))
+       }
+       canShowBloxdAd(WW) {
+         return !1
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/173.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/173.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e)

#### 1. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/173.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/173.js#L4-L15)

```diff
-   37427: (ee, ie, He) => {
-     He.d(ie, {
-       c: () => Me,
-       e: () => Te,
-       f: () => pe,
-       h: () => Ue,
-       j: () => ke,
-       l: () => Xe,
-       n: () => Re,
-       p: () => Be,
-       r: () => fe,
-       u: () => ze
+   7751: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AdinPlaySdkAdaptor: () => tW
```

#### 2. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L17-L20` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/173.js#L8-L12) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/173.js#L17-L20)

```diff
-     var ye = He(18),
-       be = He(27);
-     const Me = "clientGameInventoryButtonsChanged",
-       Ke = new Map;
+     var mW = OW(1343),
+       EW = OW(1162),
+       NW = OW(212),
+       PW = OW(3960),
+       LW = OW(3966);
```

#### 3. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L22-L25` → after: `L14-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L14-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/173.js#L14-L30) · [Before (L22-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/173.js#L22-L25)

```diff
-     function Ue() {
-       return [...Ke.values()].sort(((ee, ie) => {
-         var He, ye;
-         return (null !== (He = ee.order) && void 0 !== He ? He : 0) - (null !== (ye = ie.order) && void 0 !== ye ? ye : 0)
+     function cW(WW) {
+       let iW = 0;
+       WW("addEventListener", 2, ((WW, OW) => {
+         if (!OW) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         !1 === WW.gdprApplies && (0, PW.noteNoGdprChoiceComing)();
+         const mW = function(WW) {
+           const iW = "useractioncomplete" === WW.eventStatus || "tcloaded" === WW.eventStatus && !!WW.tcString;
+           return WW.gdprApplies && iW ? LW.b.every((iW => !0 === WW.purpose.consents[iW])) : null
+         }(WW);
+         if (null === mW) return;
+         const EW = ++iW;
+         if (!mW) return void(0, PW.updateAnalyticsConsent)(!1);
+         const NW = window.__tcfapi;
+         NW ? NW("getNonIABVendorConsents", 2, ((WW, OW) => {
+           var mW;
+           EW === iW && (0, PW.updateAnalyticsConsent)(OW && !0 === (null === (mW = WW.nonIabVendorConsents) || void 0 === mW ? void 0 : mW[5]))
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L28-L40` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/173.js#L33-L36) · [Before (L28-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/173.js#L28-L40)

```diff
-     let Fe = null;
- 
-     function Je(ee) {
-       Fe = ee
-     }
-     let oe = !1;
- 
-     function Re(ee) {
-       oe = !0;
-       try {
-         ee.onClick()
-       } finally {
-         oe = !1
+     const wW = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class tW extends mW.c {
+       constructor() {
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = wW
```

#### 5. `bundles/bloxd.io/chunks/js/173.js` (Changed code · before: `L42-L78` → after: `L38-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72eR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-622ce619832d82e681b3c664ebebea3b5035d593cfd10caf82418822ee06b72e) · [After (L38-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/173.js#L38-L103) · [Before (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/173.js#L42-L78)

```diff
-       ee.panel && "clientGame" === ye.e.get("openInGameMenuName") && Je(ee.id)
-     }
- 
-     function ke() {
-       return oe
-     }
- 
-     function qe() {
-       return Ue().filter((ee => ee.panel && !ee.disabled))
-     }
- 
-     function fe(ee) {
-       const ie = qe(),
-         He = ie.findIndex((ee => ee.id === Fe));
-       return !(He < 0 || ie.length < 2) && (Re(ie[(He + ee + ie.length) % ie.length]), !0)
-     }
- ... (21 more removed lines; see GitHub link above)
+       static async setup() {
+         return (0, NW.canonicaliseZonesWhenIdle)(wW), (0, PW.setUpGtag)({
+             tcfCmp: !0
+           }), await (0, EW.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"),
+           function() {
+             if (window.__tcfapi) return void cW(window.__tcfapi);
+             let WW = 0;
+             const iW = window.setInterval((() => {
+               WW++;
+               const OW = window.__tcfapi;
+               OW ? (window.clearInterval(iW), cW(OW)) : WW >= 150 && window.clearInterval(iW)
+             }), 200)
+           }(), new tW
+       }
+       playRewarded(WW, iW) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+ ... (50 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/174.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/174.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045)

#### 1. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L4-L1575` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/174.js#L4-L6) · [Before (L4-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/174.js#L4-L1575)

```diff
-   39896: (ee, ie, He) => {
-     function ye(ee) {
-       return !(!ee.lobbyLeaderboardInfo && !ee.lobbyManage)
-     }
-     He.d(ie, {
-       e: () => ye
-     })
-   },
-   39867: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Me,
-       f: () => Ke
-     });
-     var ye = He(27);
-     let be = !1;
- 
- ... (1556 more removed lines; see GitHub link above)
+   7753: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AdsenseForGamesSdkAdaptor: () => NW
```

#### 2. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L1577-L1859` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/174.js#L8-L10) · [Before (L1577-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/174.js#L1577-L1859)

```diff
-     var ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe, Xe, ze, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je, se, Ie, he, Ne, Ge, re, Qe, ei, ii, Hi, yi, bi, Mi, Ki, Ui, Fi, Ji, oi, Ri, ki, qi, fi, Ti, Xi, zi, Bi,  … [truncated]
-       iH = He(37965),
-       HH = He(39775),
-       yH = He(39778),
-       bH = He(9870),
-       MH = He(608),
-       KH = He(604),
-       UH = He(37620);
-     let FH = (ye = (0, bH.type)("number"), be = (0, bH.type)("number"), Me = (0, bH.type)("number"), Ke = (0, bH.type)("number"), Ue = (0, bH.type)("number"), Fe = (0, bH.type)("number"), Je = (0, bH.type)("string"), oe = class extends bH.Schema {
-         constructor() {
-           super(...arguments), (0, HH.e)(this, "id", Re, this), (0, HH.e)(this, "amount", ke, this), (0, HH.e)(this, "x", qe, this), (0, HH.e)(this, "y", fe, this), (0, HH.e)(this, "z", Te, this), (0, HH.e)(this, "size", pe, this), (0, HH.e)(this, "attributes", Xe, this)
-         }
-       }, Re = (0, yH.e)(oe.prototype, "id", [ye], {
-         configurable: !0,
-         enumerable: !0,
-         writable: !0,
- ... (267 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     class NW extends mW.c {
```

#### 3. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L1861-L2332` → after: `L12-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L12-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/174.js#L12-L40) · [Before (L1861-L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/174.js#L1861-L2332)

```diff
-         super(...arguments), (0, HH.e)(this, "meshKind", Li, this), (0, HH.e)(this, "meshOpts", Ci, this), (0, HH.e)(this, "pose", vi, this), (0, HH.e)(this, "leaderboardTop", ui, this)
-       }
-     }, Li = (0, yH.e)(xi.prototype, "meshKind", [Yi], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
-       initializer: null
-     }), Ci = (0, yH.e)(xi.prototype, "meshOpts", [Vi], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
-       initializer: null
-     }), vi = (0, yH.e)(xi.prototype, "pose", [ai], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
- ... (456 more removed lines; see GitHub link above)
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(WW) {
+           window.adsbygoogle.push(WW)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, EW.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+           "data-ad-client": "ca-pub-5991928098122027",
+           "data-ad-frequency-hint": "120s",
+           type: "text/javascript"
+         }), console.log("Loaded adsense for games"), new NW
+ ... (13 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L3907-L3908` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/174.js#L43-L44) · [Before (L3907-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/174.js#L3907-L3908)

```diff
-           onReconnected: ie => {
-             ee.onReconnected(ie)
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
```

#### 5. `bundles/bloxd.io/chunks/js/174.js` (Changed code · before: `L3910-L3911` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-4c12ecf992196efdcbe099d6d335b39aed39cf31d042be3663744bf8db380045) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/174.js#L46-L47) · [Before (L3910-L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/174.js#L3910-L3911)

```diff
-           onGaveUp: ie => {
-             !this.ended && ee.isLive() && ee.onGaveUp(this.sessionBased, ie)
+           adBreakDone: iW => {
+             console.log("adBreakDone called", iW), clearTimeout(mW), OW || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), WW())
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/175.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/175.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9)

#### 1. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/175.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/175.js#L4-L7)

```diff
-   39900: (ee, ie, He) => {
-     He.d(ie, {
-       d: () => Ue,
-       f: () => Me
+   7756: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       AditudeSdkAdaptor: () => PW
```

#### 2. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L37` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/175.js#L8-L16) · [Before (L9-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/175.js#L9-L37)

```diff
-     var ye = He(4461);
-     let be = null;
- 
-     function Me(ee) {
-       return null !== be && ee === be
-     }
- 
-     function Ke() {
-       this.mG = !1, this.stopPropagation = !1, this.lG = !1, this.disabled = !1
-     }
-     class Ue {
-       constructor(ee, ie) {
-         this.version = "0.7.0";
-         var He = Object.assign({}, new Ke, ie || {});
-         this.element = ee || document, this.mG = !!He.mG, this.stopPropagation = !!He.stopPropagation, this.lG = !!He.lG, this.disabled = !!He.disabled, this.filterEvents = (ee, ie) => !0, this.ignoreEvent = ee => !1, this.down = new ye.EventEmitter, this.up = new ye.EventEmitter … [truncated]
-           dx: 0,
- ... (13 more removed lines; see GitHub link above)
+     var mW = OW(1343),
+       EW = OW(1162);
+     const NW = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class PW extends mW.c {
+       constructor() {
+         super(), this.name = "aditude"
```

#### 3. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L39-L44` → after: `L18-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L18-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/175.js#L18-L21) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/175.js#L39-L44)

```diff
-       bind(ee) {
-         for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
-         He.forEach((ie => {
-           var He = this._keyBindmap[ie] || [];
-           He.includes(ee) || (He.push(ee), this._keyBindmap[ie] = He)
-         })), this.state[ee] = !!this.state[ee], this.pressCount[ee] = this.pressCount[ee] || 0, this.releaseCount[ee] = this.releaseCount[ee] || 0
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, EW.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new PW
```

#### 4. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L46-L51` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/175.js#L23-L24) · [Before (L46-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/175.js#L46-L51)

```diff
-       unbind(ee) {
-         for (var ie in this._keyBindmap) {
-           var He = this._keyBindmap[ie],
-             ye = He.indexOf(ee);
-           ye > -1 && He.splice(ye, 1)
-         }
+       playVideoAd(WW, iW) {
+         this.playVideoOrRewarded("video", WW, WW)
```

#### 5. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L53-L60` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/175.js#L26-L27) · [Before (L53-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/175.js#L53-L60)

```diff
-       getBindings() {
-         var ee = {};
-         for (var ie in this._keyBindmap) {
-           this._keyBindmap[ie].forEach((He => {
-             ee[He] = ee[He] || [], ee[He].push(ie)
-           }))
-         }
-         return ee
+       playRewarded(WW, iW) {
+         this.playVideoOrRewarded("rewarded", WW, iW)
```

#### 6. `bundles/bloxd.io/chunks/js/175.js` (Changed code · before: `L62-L63` → after: `L29-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-adef86f9a6c464bd5fed4ef050cfbf53ce99ac797392be16bf7ef131b776a8a9) · [After (L29-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/175.js#L29-L78) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/175.js#L62-L63)

```diff
-       YR() {
-         Fe(this.nG), Fe(this.pressCount), Fe(this.releaseCount)
+       renderBanner(WW) {
+         const iW = this.getBaseDivId(WW.adId, WW.width, WW.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: WW.divId,
+             baseDivId: iW
+           }])
+         }))
+       }
+       getBaseDivId(WW, iW, OW) {
+         return `pb-slot-bloxdio-${iW}-${OW}${WW>1?`-${WW}`:""}`
+       }
+       playVideoOrRewarded(WW, iW, OW) {
+         var mW;
+         let EW = !1;
+         const PW = () => {
+ ... (34 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/176.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/176.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c)

#### 1. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L5-L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L5-L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/176.js#L5-L2834) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/176.js#L4)

```diff
-   9683: (ee, ie, He) => {
+   7784: (WW, iW, OW) => {
+     var mW = OW(7787);
+     iW.e = {
+       prefix: mW.prefix,
+       iconName: mW.iconName,
+       icon: [mW.width, mW.height, mW.aliases, mW.unicode, mW.svgPathData]
+     }, iW.g = iW.e, mW.prefix, mW.iconName, mW.width, mW.height, mW.aliases, mW.unicode, mW.svgPathData, mW.aliases
+   },
+   7791: (WW, iW) => {
+     var OW = "alarm-clock",
+       mW = [9200],
+       EW = "f34e",
+       NW = "M504.4 132.5c-4.5 10.5-18.4 9.8-24.9 .4-27.8-40-66.1-72.2-111-92.6-10.4-4.7-13.7-18.3-4.1-24.6 15-9.9 33-15.7 52.3-15.7 52.6 0 95.2 42.6 95.2 95.2 0 13.2-2.7 25.8-7.6 37.3zm-471.9 .4c-6.5 9.4-20.5 10.1-24.9-.4-4.9-11.5-7.6-24.1-7.6-37.3 0-52.6 42.6-95.2 95.2-95.2 19.3 … [truncated]
+     iW.c = {
+       prefix: "fas",
+       iconName: OW,
+ ... (2814 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/176.js` (Changed code · before: `L6-L62` → after: `L2836-L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5cR2836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8c148b4df888762ad7d07d78e8f871ae294f09ab4a9b0fc0c56cbac8ee6a4c5c) · [After (L2836-L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/176.js#L2836-L2845) · [Before (L6-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/176.js#L6-L62)

```diff
-       d: () => Me,
-       g: () => be
-     });
-     let ye = !1;
- 
-     function be() {
-       ye = !0
-     }
- 
-     function Me() {
-       return ye
-     }
-   },
-   9674: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       loadWasmPlay: () => ke,
- ... (41 more removed lines; see GitHub link above)
+       b: () => EW,
+       c: () => NW
+     });
+     var mW = {
+         prefix: "fas",
+         iconName: "shirt",
+         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
+       },
+       EW = mW,
+       NW = mW
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/177.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/177.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046)

#### 1. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L4-L6` → after: `L4-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/177.js#L4-L28) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/177.js#L4-L6)

```diff
-   9699: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       pageBody: () => ye
+   9346: (WW, iW) => {
+     var OW = "youtube",
+       mW = [61802],
+       EW = "f167",
+       NW = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     iW.d = {
+       prefix: "fab",
+       iconName: OW,
+       icon: [576, 512, mW, EW, NW]
+     }, iW.h = iW.d
+   },
+   37371: (WW, iW) => {
+     var OW = "anchor",
+       mW = [9875],
+       EW = "f13d",
+       NW = "M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 96c0-53 43-96 96-96s96 43 96 96c0 41.8-26.7 77.4-64 90.5l0 257.9c62.9-14.3 110.2-69.7 111.9-136.5l-16.1 14.1c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11- … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/177.js` (Changed code · before: `L8-L42` → after: `L30-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-b271fbc9f6b1513a283e375cb16f622d1bdf5779aea066241f83b117cf0fa046) · [After (L30-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/177.js#L30-L256) · [Before (L8-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/177.js#L8-L42)

```diff
-     const ye = {
-       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
-       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
-       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
-       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
-       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
-       faq: [{
-         question: "What is Bedwars?",
-         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
-       }, {
-         question: "How do you win Bedwars?",
-         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
-       }, {
-         question: "What happens after your bed is destroyed?",
-         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
-       }, {
- ... (19 more removed lines; see GitHub link above)
+     var OW = "bolt",
+       mW = [9889, "zap"],
+       EW = "f0e7",
+       NW = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     iW.definition = {
+       prefix: "fas",
+       iconName: OW,
+       icon: [448, 512, mW, EW, NW]
+     }, iW.faBolt = iW.definition, iW.prefix = "fas", iW.iconName = OW, iW.width = 448, iW.height = 512, iW.ligatures = mW, iW.unicode = EW, iW.svgPathData = NW, iW.aliases = mW
+   },
+   7998: (WW, iW) => {
+     var OW = "circle",
+       mW = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915],
+       EW = "f111",
+       NW = "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z";
+     iW.c = {
+ ... (211 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/178.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/178.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2)

#### 1. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L4-L6` → after: `L5-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/178.js#L5-L18) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/178.js#L4-L6)

```diff
-   9703: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       pageBody: () => ye
+   37371: (WW, iW) => {
+     var OW = "anchor",
+       mW = [9875],
+       EW = "f13d",
+       NW = "M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 96c0-53 43-96 96-96s96 43 96 96c0 41.8-26.7 77.4-64 90.5l0 257.9c62.9-14.3 110.2-69.7 111.9-136.5l-16.1 14.1c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11- … [truncated]
+     iW.e = {
+       prefix: "fas",
+       iconName: OW,
+       icon: [576, 512, mW, EW, NW]
+     }, iW.i = iW.e
+   },
+   7912: (WW, iW) => {
+     Object.defineProperty(iW, "__esModule", {
+       value: !0
```

#### 2. `bundles/bloxd.io/chunks/js/178.js` (Changed code · before: `L8-L32` → after: `L20-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-6bc1aa205d3d3dd6a9e024347e87a87d4a25fd54c829d61c91aa2424714adca2) · [After (L20-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/178.js#L20-L204) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/178.js#L8-L32)

```diff
-     const ye = {
-       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
-       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
-       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
-       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skywars"],
-       faq: [{
-         question: "What is Bloxd Lucky Bedwars?",
-         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
-       }, {
-         question: "How do you play Lucky Bedwars?",
-         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
-       }, {
-         question: "How is Lucky Bedwars different from normal Bedwars?",
-         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
-       }, {
- ... (9 more removed lines; see GitHub link above)
+     var OW = "bolt",
+       mW = [9889, "zap"],
+       EW = "f0e7",
+       NW = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     iW.definition = {
+       prefix: "fas",
+       iconName: OW,
+       icon: [448, 512, mW, EW, NW]
+     }, iW.faBolt = iW.definition, iW.prefix = "fas", iW.iconName = OW, iW.width = 448, iW.height = 512, iW.ligatures = mW, iW.unicode = EW, iW.svgPathData = NW, iW.aliases = mW
+   },
+   7998: (WW, iW) => {
+     var OW = "circle",
+       mW = [128308, 128309, 128992, 128993, 128994, 128995, 128996, 9679, 9898, 9899, 11044, 61708, 61915],
+       EW = "f111",
+       NW = "M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z";
+     iW.c = {
+ ... (169 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/179.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/179.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14)

#### 1. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/179.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/179.js#L4-L6)

```diff
-   9705: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       pageBody: () => ye
+   10104: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW
```

#### 2. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L34` → after: `L60-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L60-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/179.js#L60-L1145) · [Before (L9-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/179.js#L9-L34)

```diff
-       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
-       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
-       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
-       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
-       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
-       faq: [{
-         question: "What is Bloxd Skywars?",
-         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
-       }, {
-         question: "How do you win in Skywars?",
-         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
-       }, {
-         question: "Can I play Skywars in my browser?",
-         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
-       }, {
-         question: "What are the best Skywars kits?",
- ... (10 more removed lines; see GitHub link above)
+       floating: "settingsMenu:joystickFloating",
+       fixed_shown: "settingsMenu:joystickFixed",
+       fixed_hidden: "settingsMenu:joystickHidden"
+     };
+     var YW = OW(1556),
+       yW = OW(10106),
+       TW = OW(3383),
+       JW = OW(3448);
+     var hW = OW(10114);
+     var HW = OW(1422),
+       nW = OW(10122),
+       uW = OW(1479),
+       oW = OW(1391),
+       dW = OW(10125);
+ 
+     function eW(WW) {
+ ... (1070 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/179.js` (Changed code · before: `L36-L38` → after: `L1147-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-55f4afcf67b65d3b1ac820de967ccc00c1d05782f3c6726efe4b88007bd9af14) · [After (L1147-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/179.js#L1147-L1253) · [Before (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/179.js#L36-L38)

```diff
-         question: "What does the compass do in Skywars?",
-         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
-       }]
+         vars: cW,
+         safe: cW,
+         classes: cW
+       }), cW.style.setProperty("--preview-joystick-shift-left", `${tW[3]}px`), cW.style.setProperty("--preview-joystick-shift-bottom", `${tW[2]}px`), cW.style.setProperty("--preview-joystick-scale", String(NW[2])), (0, Yi.e)(cW, iW, OW, mW);
+       for (const ZW of ei) cW.style.setProperty(ZW, WW.documentElement.style.getPropertyValue(ZW) || "0px")
+     }
+ 
+     function gi() {
+       return (0, FW.G)(tW.d.get("notchSize"), window.innerWidth, window.innerHeight)
+     }
+ 
+     function Di(WW) {
+       return (0, FW.s)(gi(), (0, FW.N)(WW))
+     }
+ 
+     function Vi(WW, iW, OW) {
+ ... (91 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/180.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/180.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19)

#### 1. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L4-L7` → after: `L4-L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L4-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/180.js#L4-L536) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/180.js#L4-L7)

```diff
-   9710: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       pageBody: () => ye
-     });
+   10146: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => uW,
+       f: () => eW
+     });
+     var mW = OW(62),
+       EW = OW(27),
+       NW = OW(3457),
+       PW = OW(4613),
+       LW = OW(10154);
+     const cW = 6,
+       wW = 4,
+       tW = ["HudMove-inventory", "HudLocked-inventory"];
+ 
+     function ZW(WW) {
+       let {
+ ... (517 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L36` → after: `L538-L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fb7eea56a73180ce206bfc3d3a5cd93b8ddc523ef12613bfa792ee8b6cd65b19) · [After (L538-L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/180.js#L538-L1022) · [Before (L9-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/180.js#L9-L36)

```diff
-       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
-       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
-       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
-       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
-       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
-       faq: [{
-         question: "What is Lucky Towers?",
-         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
-       }, {
-         question: "How do you win in Bloxd Lucky Towers?",
-         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
-       }, {
-         question: "How often do you get items in Lucky Towers?",
-         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
-       }, {
-         question: "What items can you get in Lucky Towers?",
- ... (12 more removed lines; see GitHub link above)
+         sprint: "joystick",
+         quickChat: "chat",
+         jump: "cluster",
+         crouch: "cluster",
+         attack: "cluster",
+         use: "cluster",
+         extra: "cluster",
+         game: "cluster",
+         zoom: "cluster",
+         drop: "cluster",
+         arrows: "hotbar",
+         inventory: "hotbar",
+         shop: "inventory",
+         bag: "inventory",
+         ...Object.fromEntries(EW.L.map((WW => [WW, "menu"])))
+       },
+ ... (469 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/181.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/181.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8)

#### 1. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L4-L6` → after: `L4-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L4-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/181.js#L4-L267) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/181.js#L4-L6)

```diff
-   9715: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       pageBody: () => ye
+   37868: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => jW,
+       h: () => UW,
+       l: () => xW,
+       o: () => ZW
+     });
+     var mW = OW(35220),
+       EW = OW(3361),
+       NW = OW(3368),
+       PW = OW(9954),
+       LW = OW(1526),
+       cW = OW(62),
+       wW = OW(80),
+       tW = OW(1283);
+ 
+ ... (248 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L35` → after: `L270-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-9be19687e43bb3312c90ac8329f5355ee1692afa2d47ac4ae9893b7e604f9bd8) · [After (L270-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/181.js#L270-L1020) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/181.js#L9-L35)

```diff
-       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
-       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
-       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
-       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
-       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
-       faq: [{
-         question: "What is Lucky Blocks Battlegrounds?",
-         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
-       }, {
-         question: "How do you win Lucky Blocks Battlegrounds?",
-         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
-       }, {
-         question: "How do I get Lucky Blocks?",
-         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
-       }, {
-         question: "What is the Ultra Lucky Block?",
- ... (11 more removed lines; see GitHub link above)
+         zoom: 1,
+         x: 0,
+         y: 0
+       },
+       EW = 12,
+       NW = {
+         x0: 0,
+         y0: 0,
+         x1: 1,
+         y1: 1
+       },
+       PW = .45;
+ 
+     function LW(WW, iW, OW) {
+       return Math.min(OW, Math.max(iW, WW))
+     }
+ ... (735 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/182.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/182.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa)

#### 1. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L4` → after: `L4-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L4-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/182.js#L4-L129) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/182.js#L4)

```diff
-   9718: (ee, ie, He) => {
+   37868: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => jW,
+       h: () => UW,
+       l: () => xW,
+       o: () => ZW
+     });
+     var mW = OW(35220),
+       EW = OW(3361),
+       NW = OW(3368),
+       PW = OW(9954),
+       LW = OW(1526),
+       cW = OW(62),
+       wW = OW(80),
+       tW = OW(1283);
+ 
+ ... (110 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/182.js` (Changed code · before: `L6-L38` → after: `L131-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3faR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-8fb422f90e3b05bc580d919d0382f20ff925140e0bc74002c045f3431b9ac3fa) · [After (L131-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/182.js#L131-L242) · [Before (L6-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/182.js#L6-L38)

```diff
-       pageBody: () => ye
-     });
-     const ye = {
-       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
-       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
-       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
-       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
-       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
-       faq: [{
-         question: "What is Bloxd Survival?",
-         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
-       }, {
-         question: "How do I protect my base in Bloxd Survival?",
-         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
-       }, {
-         question: "Why did my build disappear?",
- ... (17 more removed lines; see GitHub link above)
+       Smp2OnboardingUi: () => bW
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(40542),
+       LW = OW(27),
+       cW = OW(37868),
+       wW = OW(2983),
+       tW = OW(2032),
+       ZW = OW(3599),
+       xW = OW(25),
+       lW = OW(40534),
+       AW = OW(1283);
+ 
+     function bW(WW) {
+ ... (96 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/183.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/183.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad)

#### 1. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L4` → after: `L4-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L4-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/183.js#L4-L25) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/183.js#L4)

```diff
-   9721: (ee, ie, He) => {
+   9997: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
+     });
+     var mW = OW(10006),
+       EW = OW(643),
+       NW = OW(136);
+ 
+     function PW(WW) {
+       var iW, OW;
+       if ((0, EW.K)(WW)) return !0;
+       const PW = null !== (iW = null === (OW = NW.siteUsedData[NW.siteUsed]) || void 0 === OW ? void 0 : OW.adConfig.showRewardedAds) && void 0 !== iW && iW;
+       for (const EW in WW) {
+         const iW = WW[EW];
+         if (null !== iW && void 0 !== iW && iW.items)
+           for (const WW in iW.items)
+ ... (6 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L6` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/183.js#L27-L29) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/183.js#L6)

```diff
-       pageBody: () => ye
+       getClientGameLeaderboardKey: () => mW.u,
+       getClientGameMapKey: () => mW.x,
+       shopIsEmpty: () => EW.b
```

#### 3. `bundles/bloxd.io/chunks/js/183.js` (Changed code · before: `L8-L41` → after: `L31-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72adR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ee45e65b24136e2a06e068d13c80fb4d1dc36dd1bee98914b33e21055d3a72ad) · [After (L31-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/183.js#L31-L36) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/183.js#L8-L41)

```diff
-     const ye = {
-       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
-       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
-       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
-       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
-       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Peaceful?",
-         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
-       }, {
-         question: "Can you die in Bloxd Peaceful?",
-         answer: "No. There's no health bar, so mobs and other players can't hurt you."
-       }, {
-         question: "Is there PvP in Bloxd Peaceful?",
-         answer: "There isn't. Players can't attack each other in Peaceful."
-       }, {
- ... (18 more removed lines; see GitHub link above)
+     var mW = OW(3361),
+       EW = OW(9997)
+   },
+   10006: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return !WW.hidden && (iW || !WW.isRewardedAd)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/184.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/184.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e)

#### 1. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L4` → after: `L4-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L4-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/184.js#L4-L39) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/184.js#L4)

```diff
-   9726: (ee, ie, He) => {
+   10049: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => LW,
+       e: () => wW,
+       i: () => ZW,
+       l: () => tW,
+       p: () => cW,
+       q: () => lW
+     });
+     var mW = OW(27),
+       EW = OW(2111),
+       NW = OW(1479),
+       PW = OW(1459);
+     const LW = WW => {
+         var iW, OW;
+         return (0, PW.k)() && null !== (iW = null === (OW = (0, NW.h)()) || void 0 === OW ? void 0 : OW.getGlyphForNoaAction(WW)) && void 0 !== iW ? iW : null
+ ... (20 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L6` → after: `L41-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L41-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/184.js#L41-L587) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/184.js#L6)

```diff
-       pageBody: () => ye
+       openCharacterPreview: () => si
+     });
+     var mW = OW(39274),
+       EW = OW(2365),
+       NW = OW(625),
+       PW = OW(38320),
+       LW = OW(3090),
+       cW = OW(38307),
+       wW = OW(41359),
+       tW = OW(41604),
+       ZW = OW(42569),
+       xW = OW(38235),
+       lW = OW(41760),
+       AW = OW(38369),
+       bW = OW(41782),
+       jW = OW(42616),
+ ... (531 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L9-L25` → after: `L608-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L608-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/184.js#L608-L735) · [Before (L9-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/184.js#L9-L25)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
-       faq: [{
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
-       }, {
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
-       }, {
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
-       }, {
-         question: "What happens to monsters when the sun comes up?",
- ... (1 more removed lines; see GitHub link above)
+         redTeam: NW.d,
+         blueTeam: jW.f,
+         greenTeam: sW.g,
+         yellowTeam: UW.f,
+         cyanTeam: cW.e,
+         whiteTeam: lW.faPlus,
+         pinkTeam: tW.h,
+         grayTeam: ZW.f,
+         blackTeam: bW.g,
+         orangeTeam: kW.g,
+         lilacTeam: PW.f,
+         purpleTeam: xW.f,
+         magentaTeam: LW.g,
+         brownTeam: mW.i,
+         limeTeam: EW.faBolt,
+         lightGrayTeam: wW.d,
+ ... (112 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L27-L28` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/184.js#L737-L738) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/184.js#L27-L28)

```diff
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
+         healthFraction: .5,
+         colour: "#ffaa00"
```

#### 5. `bundles/bloxd.io/chunks/js/184.js` (Changed code · before: `L30-L32` → after: `L740-L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35eR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-734e819634925cd5047d8afb0e0504123dcf1bf450badfc794572c81b154e35e) · [After (L740-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/184.js#L740-L1421) · [Before (L30-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/184.js#L30-L32)

```diff
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
-       }]
+         healthFraction: 1,
+         colour: "#00ff00"
+       }],
+       lW = 64,
+       AW = 69,
+       bW = {
+         icon: PW.e,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "#f38ab6",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+       };
+ 
+ ... (666 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/185.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/185.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072)

#### 1. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L4-L6` → after: `L4-L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4-L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/185.js#L4-L3960) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/185.js#L4-L6)

```diff
-   9734: (ee, ie, He) => {
-     He.r(ie), He.d(ie, {
-       pageBody: () => ye
+   40305: (WW, iW, OW) => {
+     function mW(WW) {
+       return !(!WW.lobbyLeaderboardInfo && !WW.lobbyManage)
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+   40287: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => NW,
+       d: () => PW
+     });
+     var mW = OW(27);
+     let EW = !1;
+ 
+ ... (3941 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/185.js` (Changed code · before: `L9-L35` → after: `L4225-L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072R4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-473ed846ce39d9fbdcaa8d5153ba63437cc301253b83861ece08a7f15597d072) · [After (L4225-L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/185.js#L4225-L4571) · [Before (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/185.js#L9-L35)

```diff
-       whatIs: ["What if the mobs had guns, and so did you? Bloxd Survival with Guns takes the classic Bloxd Survival world and adds craftable guns and armed mobs. You still mine, craft and build in a shared multiplayer world. The difference is you can also craft guns and vehicles … [truncated]
-       howToPlay: ["Start off by gathering wood. Your first gun, the M1911, only takes 10 Maple Wood Planks. Mine Messy Stone, iron, gold, diamonds and moonstone to craft stronger Bloxd guns, like the AK-47, the Striker-12, the AWP and even the Minigun.", "Be careful, because the  … [truncated]
-       features: ["17 Craftable Guns, from the M1911 to the Minigun", "Armed Mobs That Fight Back", "Tame Pets That Fight with Guns", "Craftable Vehicles: Cars, Karts, Speedboats and Hovercraft", "Salvage Guns Back into Materials", "Gunfights on Top of Mining, Crafting and Base Bu … [truncated]
-       tips: ["Make an M1911 from 10 Maple Wood Planks as soon as you spawn", "Mine iron and gold early on to unlock better guns", "Feed a Sheep an Apple to tame it and get your first armed pet", "Save up Diamonds and Gold Bars for a Deagle", "Got guns you don't use anymore? Salva … [truncated]
-       similarGames: ["classic_survival", "shooting", "classic_survivalDayNight", "classic"],
-       faq: [{
-         question: "What is Bloxd Survival with Guns?",
-         answer: "It's Bloxd Survival, but with craftable guns and armed mobs. You mine, craft, build and team up or battle in a shared multiplayer world."
-       }, {
-         question: "How do you make a gun in Bloxd Survival with Guns?",
-         answer: "Craft an M1911 from 10 Maple Wood Planks. Stronger guns need materials like Iron Bars, Gold Bars, Diamonds and Moonstone."
-       }, {
-         question: "How many guns are there in Survival with Guns?",
-         answer: "17 craftable guns, ranging from the M1911 and MP40 up to the AWP and the Minigun."
-       }, {
-         question: "Do mobs carry guns in Bloxd?",
- ... (11 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       LW = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function cW(WW, iW) {
+       if (WW instanceof EW.c) return {
+         at: PW[iW],
+         code: 0
+       };
+       const OW = (0, mW.f)(WW),
+ ... (331 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/186.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/186.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f)

#### 1. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L4` → after: `L4-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L4-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/186.js#L4-L34) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/186.js#L4)

```diff
-   9737: (ee, ie, He) => {
+   10198: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       f: () => PW
+     });
+     var mW = OW(172);
+     class EW {
+       constructor() {
+         this.marks = new Map, this.fromTap = !1
+       }
+       mark(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
+         this.marks.has(WW) || this.marks.set(WW, iW)
+       }
+       marked() {
+         return mW.U.flatMap((WW => {
+ ... (15 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/186.js` (Changed code · before: `L6` → after: `L36-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1fR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-e2a168e7c587bf5e3593bbecd60f15a6ef281bb450dfbacb4a16cdbbc743ce1f) · [After (L36-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/186.js#L36-L39) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/186.js#L6)

```diff
-       pageBody: () => ye
+       importClientLoad: () => ZW,
+       loadWasmPlay: () => AW,
+       loadWasmPlayAhead: () => bW,
+       loadWasmPreviews: () => jW
```
