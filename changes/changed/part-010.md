# Changed — Bundle Modifications Report (Part 010 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `10 / 86` (**288** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 009](part-009.md) · [Part 011 →](part-011.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/155.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/155.js` (40 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4)

#### 25. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L492-L502` → after: `L223-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L223-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L223-L239) · [Before (L492-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L492-L502)

```diff
- 
-     function JO(BB) {
-       return null !== BB && "missing" in BB
-     }
- 
-     function MO(BB) {
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !lO(),
-         GB = arguments.length > 2 ? arguments[2] : void 0;
-       return OB ? function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oB.c,
-           GB = arguments.length > 2 ? arguments[2] : void 0;
+   },
+   7648: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => cW,
+       g: () => LW
+     });
+     var mW = OW(7656),
+       EW = OW(7637),
+       NW = OW(119);
+     const PW = 100;
+     async function LW(WW, iW) {
+       var OW;
+       let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
+       const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
+       if (PW.errors.length > 0) return wW(WW, PW.errors, PW.offInStrict);
+       const LW = await async function(WW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L504-L512` → after: `L241-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L241-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L241-L244) · [Before (L504-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L504-L512)

```diff
-           const YB = "start_failed" === BB || "pipeline_failed" === BB,
-             DB = (0, KB.h)(BB, GB),
-             QB = OB.turnOffWebGpuAfterDeviceLoss(YB ? "visible" : (0, ZB.p)((0, pB.f)()), YB, DB);
-           return xB && (0, yB.u)("webgpuLoss"), OB.isWebGpuOffAfterLoss() && "webgpu" === TB(qB.g.getItem(MB.f)) && qB.g.removeItem(MB.f), (0, jB.s)("webgpuloss") && (0, JB.d)((OB => {
-             var GB;
-             OB.noteWebGpuLoss("wasm", QB ? BB : `${BB}, which storage didn't keep`, null !== (GB = DB.message) && void 0 !== GB ? GB : null)
-           })), QB
-         } catch {
-           return !1
+           const iW = await (0, NW.r)(WW);
+           return iW ? await iW.requestDevice() : null
+         } catch (iW) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", iW), null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L514-L524` → after: `L246-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L246-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L246-L251) · [Before (L514-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L514-L524)

```diff
-       }(BB, oB.c, GB) ? null : "storage won't keep WebGPU off" : "the URL asks for WebGPU"
-     }
-     const PO = "framePacing";
- 
-     function zO(BB, OB) {
-       const GB = jO("webgpu" === (null === OB || void 0 === OB ? void 0 : OB.backend) ? OB : null, BB, PO, (BB => /^\d{1,9}$/.test(BB)));
-       return null === GB ? void 0 : Number(GB)
-     }
- 
-     function lO() {
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
+       }(mW);
+       if (!LW) return null;
+       let cW = !1;
+       LW.lost.then((() => {
+         cW = !0
+       }));
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L526-L528` → after: `L253-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L253-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L253-L276) · [Before (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L526-L528)

```diff
-         return "webgpu" === TB(new URLSearchParams(BB).get(MB.d))
-       } catch {
-         return !1
+         const iW = await Promise.all(PW.validationModules.map((iW => async function(WW, iW, OW) {
+           iW.pushErrorScope("validation");
+           const mW = iW.createShaderModule({
+               code: OW.code
+             }),
+             EW = iW.popErrorScope(),
+             {
+               messages: NW
+             } = await mW.getCompilationInfo(),
+             PW = NW.filter((WW => "error" === WW.type)).map((iW => WW.mapValidationMessage(OW, iW))),
+             LW = await EW;
+           LW && 0 === PW.length && PW.push({
+             file: null,
+             line: 0,
+             message: LW.message,
+             variants: [OW.key]
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L531-L550` → after: `L279-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L279-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L279-L292) · [Before (L531-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L531-L550)

```diff
- 
-     function pO(BB) {
-       return !!qO(BB) || BB instanceof Error && !(BB instanceof WebAssembly.RuntimeError) && BB.message.startsWith(`${VB.p.RenderSurfaceUnusable}:`)
-     }
- 
-     function qO(BB) {
-       const {
-         name: OB,
-         message: GB
-       } = null !== BB && void 0 !== BB ? BB : {};
-       return "InvalidStateError" === OB && "string" === typeof GB && GB.startsWith("GPUDevice.")
-     }
- 
-     function ZO(BB) {
-       const OB = BB;
-       return "function" === typeof OB.ZDB && "function" === typeof OB.NDB ? OB : null
- ... (4 more removed lines; see GitHub link above)
+     async function cW(WW, iW) {
+       var OW;
+       if (!(0, mW.shaderPackNeedsCheck)(WW, iW) || (0, mW.isOtherApiVersion)(WW)) return WW;
+       const EW = await LW(iW, (0, mW.storedShaderPackFiles)(WW));
+       if (!EW) return WW;
+       const NW = !1 === (null === (OW = WW.validation) || void 0 === OW ? void 0 : OW.ok) && !WW.validation.fromRecheck,
+         PW = {
+           ...WW,
+           validation: NW ? EW : {
+             ...EW,
+             fromRecheck: !0
+           }
+         };
+       return await (0, mW.replaceShaderPack)(WW, PW, iW) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), PW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L556-L571` → after: `L295-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L295-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L295-L301) · [Before (L556-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L556-L571)

```diff
-     function VO(BB, OB, GB, YB, DB, QB) {
-       return (0, nB.h)(function(BB, OB, GB, YB, DB, QB) {
-         const oB = (0, UB.i)(BB, OB, (() => BB.vZ(GB, YB, DB, QB.indirectHangs, QB.storagePullBreaks, QB.splitPassBreaks, QB.earlySky, QB.instancedTerrain, QB.cellLight, QB.framesAhead, QB.webGpuRestores, QB.bufferCopiesCrash))),
-           {
-             firstVertex: jB
-           } = QB;
-         return void 0 === jB ? oB : oB.then((BB => ((0, fB.e)(GB, jB), BB)))
-       }(BB, OB, GB, YB, DB, QB), AO, `${VB.p.RenderSurfaceUnusable}: the renderer didn't open in ${AO/1e3} s`, nO)
-     }
-     async function SO(BB, OB, GB, YB, DB, QB) {
-       if ("function" !== typeof BB.UjB) throw new Error("this core has no set_renderer");
-       const oB = await VO(OB, RO, GB, DB, YB, QB);
-       try {
-         BB.UjB(oB)
-       } catch (jB) {
-         throw nO(oB), jB
+     function wW(WW, iW, OW) {
+       return {
+         headerVersion: (0, mW.pageShaderPackValidationVersion)(WW),
+         ok: 0 === iW.length,
+         errors: iW.slice(0, PW),
+         moreErrors: Math.max(0, iW.length - PW),
+         offInStrict: OW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L581-L598` → after: `L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L305) · [Before (L581-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L581-L598)

```diff
-   41858: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     const YB = {
-       destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
-       destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
-       destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
-       destroy_stage_3: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAASUlEQVQYlW2PwQ3AMAjEfFXXYv+x3A+pSNqT+IBPMlEDkEQ6awdwMaJGzYTfVJUL4GydUFW5AbM5j2o+DrMEcE+g5dKzf/FrDjw47TfQdOS/BAAAAABJRU5ErkJggg==",
-       destroy_stage_4: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATklEQVQYlYWPsRHDQAzDQF/W4u8/lZEmn5PtwuwkETwqagCSyE97B3AwpEbNNH8A1lpn2wvwN824tqpp6yN2G+dRzaPDhLgPm56peXvzC7EqSTSAXQcxAAAAAElFTkSuQmCC",
-       destroy_stage_5: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQYlW2PwREAMQgCIX1p/1Xd3idmNBN/iotowJJkG+2q2WkARwRD2LUkKTO/m44I7mWVyxDrxIsEvCqg7ZOhAyNx0d3Vrzc7+AM+lEvjLYgPSwAAAABJRU5ErkJggg==",
-       destroy_stage_6: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAT0lEQVQYlW2PyQ2AQAwDx9tXtv+qGD4ERQt+RY7lI2oAksiD5gBWH1WlGjUtTuIC2HtfHHi5qvJ0mRxt27nzqWZ1VhJnuU/Js8u77m/mFNyVEDqzHRw/iwAAAABJRU5ErkJggg==",
-       destroy_stage_7: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVQYlWNgQAK2trb/GXABXJIsuCThYsiSMDZBq7AqoEw3Pp0AAAYX+aJ4oVQAAAAASUVORK5CYII=",
-       destroy_stage_8: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUUlEQVQYlV2PwQ3AMAwCoepazvDJXr1+apWEl40BYQHWh6pCAcACDLiq6DlFtySNMZ4kt6RcOiW5LdI2eZxzXmpBurPLVqjda60/Ob84uwB+AVXlTrnZ3+XVAAAAAElFTkSuQmCC",
-       destroy_stage_9: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAUElEQVQYlW2OyQ3AMAgEhyhtQfF2X9m8IKvIvBDMHkgKSQGQmcJGUtBAZsr3hm6Aqnr4zUBOt4vfJh8gIuTPtdZFK1ztXUbtcXvvz/nU3F1eyBpW2eqlL9QAAAAASUVORK5CYII="
-     }
- ... (2 more removed lines; see GitHub link above)
+   7570: (WW, iW, OW) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L603` → after: `L318-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L318-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L318-L324) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L603)

```diff
-       i: () => PB
+       g: () => sW,
+       i: () => SW,
+       j: () => cW,
+       n: () => EW,
+       q: () => KW,
+       u: () => NW,
+       x: () => LW
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L605-L610` → after: `L326-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L326-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L326-L344) · [Before (L605-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L605-L610)

```diff
-     const YB = 2e3,
-       DB = "unavailable";
-     let QB = () => Promise.resolve().then((() => GB(1859))),
-       oB = null,
-       jB = null,
-       yB = JB();
+     const mW = ["forest", "desert", "water", "night", "cave"];
+     const EW = {
+         full: {
+           width: 3840,
+           height: 2160
+         },
+         large: {
+           width: 1920,
+           height: 1080
+         },
+         thumb: {
+           width: 640,
+           height: 360
+         }
+       },
+       NW = ["popular", "updated", "newest"],
+ ... (3 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L612-L621` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L346-L347) · [Before (L612-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L612-L621)

```diff
-     function JB() {
-       let BB = () => {};
-       return {
-         promise: new Promise((OB => {
-           BB = () => {
-             OB(null)
-           }
-         })),
-         resolve: BB
-       }
+     function wW(WW, iW) {
+       return WW.slice(0, iW).replace(/[\uD800-\uDBFF]$/, "")
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L624-L633` → after: `L353-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L353-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L353-L356) · [Before (L624-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L624-L633)

```diff
-     function MB() {
-       if (null === oB) {
-         const BB = QB();
-         oB = BB, BB.then((OB => {
-           oB === BB && (jB = OB)
-         }), (() => {
-           oB === BB && (oB = null)
-         }))
-       }
-       return oB
+     function lW(WW) {
+       const iW = WW,
+         OW = null === iW || void 0 === iW ? void 0 : iW.files;
+       return "number" === typeof(null === iW || void 0 === iW ? void 0 : iW.apiVersion) && "string" === typeof iW.name && (null === iW.author || "string" === typeof iW.author) && (void 0 === iW.keepCircleShadows || "boolean" === typeof iW.keepCircleShadows) && "object" === typeof … [truncated]
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L636-L637` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L361-L362) · [Before (L636-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L636-L637)

```diff
-     function PB() {
-       MB().catch((() => {}))
+     function jW(WW) {
+       return `https://bloxdhub.com/workshop/${encodeURIComponent(WW)}`
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L640-L641` → after: `L367-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L367-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L367-L369) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L640-L641)

```diff
-     function zB() {
-       yB.resolve()
+     function sW(WW) {
+       var iW;
+       return WW === UW || null !== (iW = null === WW || void 0 === WW ? void 0 : WW.startsWith(kW)) && void 0 !== iW && iW
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L644-L657` → after: `L372-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L372-L373) · [Before (L644-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L644-L657)

```diff
-     function lB(BB, OB, GB, YB) {
-       if (null === BB) return {
-         errorKind: OB,
-         fingerprint: DB,
-         dedupe: `${OB}|${YB}`
-       };
-       const {
-         fingerprint: QB
-       } = BB.clientErrorKey(OB, GB, YB);
-       return {
-         errorKind: OB,
-         fingerprint: QB,
-         dedupe: QB
-       }
+     function MW(WW, iW) {
+       return `shaderPacks/${WW}/${iW}.json`
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L661-L676` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L377) · [Before (L661-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L661-L676)

```diff
-       return null === jB ? YB ? (PB(), lB(null, BB, OB, GB)) : null : lB(jB, BB, OB, GB)
-     }
-     async function qB(BB, OB, GB) {
-       let DB;
-       const QB = new Promise((BB => {
-         DB = setTimeout((() => {
-           BB(null)
-         }), YB)
-       }));
-       try {
-         return lB(await Promise.race([MB(), QB, yB.promise]), BB, OB, GB)
-       } catch {
-         return lB(null, BB, OB, GB)
-       } finally {
-         clearTimeout(DB)
-       }
+       return null === iW.renderId ? SW(WW, iW.baselineVersion, OW, mW) : `${WW}/${function(WW,iW,OW,mW){return`shaderPacks/${WW}/${iW}/${OW}-${mW}.webp`}(iW.packId,iW.renderId,OW,mW)}`
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L837-L4105` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/155.js#L381) · [Before (L837-L4105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/155.js#L837-L4105)

```diff
-       let {
-         backend: DB,
-         adPreload: QB
-       } = GB;
-       const {
-         kind: oB,
-         code: yB,
-         site: MB,
-         fatal: PB,
-         details: zB
-       } = BB;
-       if (!PB)
-         if (null === YB || (0, JB.c)(YB.errorKind) || PO.has(YB.dedupe)) {
-           if (MO >= JO) return;
-           MO++
-         } else PO.add(YB.dedupe);
- ... (3253 more removed lines; see GitHub link above)
+       return `${WW}/${function(WW,iW,OW){return`shaderPacks/baseline/${WW}/${iW}-${OW}.webp`}(iW,OW,mW)}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/156.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/156.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L2)

```diff
- export const ids = [156];
+ export const ids = [156, 159, 160];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L4-L8)

```diff
-   44873: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       compilePagePack: () => JB,
-       prefetchCompiler: () => jB,
-       reconcileHint: () => yB
+   7609: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L10-L21` → after: `L8-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L8-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L8-L69) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L10-L21)

```diff
-     var YB = GB(7159),
-       DB = GB(7193),
-       QB = GB(7174),
-       oB = GB(7186);
- 
-     function jB() {
-       (0, YB.loadPageShaderPackCompiler)()
-     }
-     async function yB() {
-       const BB = await (0, YB.loadPageShaderPackCompiler)();
-       await (BB ? (0, DB.reconcileStoredShaderPackHint)(BB) : (0, DB.forgetShaderPackActiveHint)())
-     }
+     var mW = OW(5952),
+       EW = OW(1283);
+     const NW = {
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
+ 
+     function PW(WW) {
+       let {
+         diagnostics: iW,
+         more: OW = 0,
+         t: PW
+       } = WW;
+ ... (46 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L23-L40` → after: `L71-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L71-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L71-L196) · [Before (L23-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L23-L40)

```diff
-       const OB = await (0, YB.loadPageShaderPackCompiler)();
-       if (!OB) return {
-         status: "none"
-       };
-       const GB = await (0, oB.d)(BB, OB),
-         jB = (0, DB.storedPackOutcome)(GB, OB);
-       if ("none" === jB.kind) return {
-         status: "none"
-       };
-       const yB = OB.VOB((0, DB.storedShaderPackFiles)(GB), (0, QB.shaderPackTextures)());
-       if ("blocked" === jB.kind) return {
-         status: "blocked",
-         messageKey: jB.messageKey,
-         variants: 0 === yB.errors.length ? yB.variants : null
-       };
-       if (yB.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", yB.errors), {
- ... (2 more removed lines; see GitHub link above)
+       const iW = (0, xW.t)(WW);
+       if (iW) {
+         if (iW.size > lW) throw new xW.e("shaderPack:loadZipTooBig", {
+           megabytes: String(lW / 1048576)
+         });
+         return async function(WW) {
+           return UW((0, xW.j)(WW, AW).map((iW => ({
+             path: iW.path,
+             read: OW => (0, xW.p)(WW, iW, OW)
+           }))))
+         }(new Uint8Array(await iW.arrayBuffer()))
+       }
+       return UW(WW.map((WW => ({
+         path: (0, xW.n)(WW),
+         read: iW => async function(WW, iW) {
+           return WW.size > iW ? null : new Uint8Array(await WW.arrayBuffer())
+ ... (110 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L42-L44` → after: `L198-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L198-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L198-L243) · [Before (L42-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L42-L44)

```diff
-         name: JB,
-         keepCircleShadows: MB
-       } = GB.manifest;
+         t: EW
+       } = (0, wW.B)(), {
+         getRootProps: tW,
+         getInputProps: ZW,
+         isDragActive: xW,
+         open: lW
+       } = (0, PW.e)({
+         onDrop: mW,
+         noClick: !0,
+         noKeyboard: !0,
+         useFsAccessApi: !1,
+         disabled: OW
+       });
+       return (0, KW.jsxs)("div", {
+         ...tW({
+           className: NW()("ShaderPackDropZone", {
+ ... (30 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L46-L50` → after: `L245-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L245-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L245-L258) · [Before (L46-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L46-L50)

```diff
-         status: "active",
-         pack: {
-           name: JB,
-           variants: yB.variants,
-           keepCircleShadows: !0 === MB
+         loading: OW,
+         error: NW,
+         setError: PW,
+         onFiles: async function(OW) {
+           if (!LW.current) {
+             LW.current = !0, EW(!0), PW(null);
+             try {
+               await WW(await jW(OW))
+             } catch (mW) {
+               mW instanceof xW.e ? PW((0, sW.h)(iW, mW.translationKey, mW.params)) : (console.error("Failed to load the shader pack", mW), PW(iW("shaderPack:unexpectedError")))
+             } finally {
+               LW.current = !1, EW(!1)
+             }
+           }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L55` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L263) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L55)

```diff
-   7193: (BB, OB, GB) => {
+   7656: (WW, iW, OW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L72-L77` → after: `L280-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L280-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L280-L285) · [Before (L72-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L72-L77)

```diff
-     var YB = GB(5546),
-       DB = GB(5538),
-       QB = GB(31),
-       oB = GB(3885),
-       jB = GB(7198),
-       yB = GB(7174);
+     var mW = OW(5970),
+       EW = OW(5961),
+       NW = OW(39),
+       PW = OW(4666),
+       LW = OW(7659),
+       cW = OW(7637);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L84` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L292) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L84)

```diff
-         files: (0, YB.y)(BB.files),
+         files: (0, mW.A)(WW.files),
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L110` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L318) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L110)

```diff
-       return pB((async () => JSON.stringify(await (0, jB.e)()) === JSON.stringify(BB) && (null === OB ? (await RB(), !0) : NB(OB, GB))))
+       return AW((async () => JSON.stringify(await (0, LW.g)()) === JSON.stringify(WW) && (null === iW ? (await kW(), !0) : UW(iW, OW))))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L113` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L321) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L113)

```diff
-       const GB = await QB.d.setItem(jB.c, BB);
+       const OW = await NW.f.setItem(LW.c, WW);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L117` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L325) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L117)

```diff
-       await QB.d.removeItem(jB.c), QB.g.removeItem(oB.d)
+       await NW.f.removeItem(LW.c), NW.i.removeItem(PW.b)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L154` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L362) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L154)

```diff
-       QB.i.setItem(JB, performance.timeOrigin)
+       NW.j.setItem(wW, performance.timeOrigin)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L158` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L366) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L158)

```diff
-       return QB.i.getItem(JB) === performance.timeOrigin
+       return NW.j.getItem(wW) === performance.timeOrigin
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L166` → after: `L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L374) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L166)

```diff
-       return MB ??= BB.yI((0, yB.shaderPackTextures)()), MB
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L176` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L384) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L176)

```diff
-         uB(await (0, jB.e)(!0), BB)
+         nW(await (0, LW.g)(!0), WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L182` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L390) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L182)

```diff
-         QB.g.removeItem(oB.d)
+         NW.i.removeItem(PW.b)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L187` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L395) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L187)

```diff
-       AB(BB, OB) ? QB.g.setItem(oB.d, !0) : QB.g.removeItem(oB.d)
+       MW(WW, iW) ? NW.i.setItem(PW.b, !0) : NW.i.removeItem(PW.b)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L190` → after: `L398-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L398-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L398-L423) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L190)

```diff
-   7186: (BB, OB, GB) => {
+   7637: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
+     });
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+ ... (10 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L192-L193` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L425-L426) · [Before (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L192-L193)

```diff
-       d: () => yB,
-       f: () => jB
+       c: () => cW,
+       g: () => LW
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L195-L197` → after: `L428-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L428-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L428-L430) · [Before (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L195-L197)

```diff
-     var YB = GB(7193),
-       DB = GB(7174),
-       QB = GB(113);
+     var mW = OW(7656),
+       EW = OW(7637),
+       NW = OW(119);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L201-L202` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L434-L435) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L201-L202)

```diff
-       let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (GB = navigator.gpu) && void 0 !== GB ? GB : null;
-       const oB = BB.VOB(OB, (0, DB.shaderPackTextures)());
+       let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = navigator.gpu) && void 0 !== OW ? OW : null;
+       const PW = WW.dWW(iW, (0, EW.shaderPackTextures)());
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L207` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L440) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L207)

```diff
-           const OB = await (0, QB.w)(BB);
+           const iW = await (0, NW.r)(WW);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L238` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L471) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L238)

```diff
-         return yB ? null : JB(BB, BB.lDB(OB.flat()), oB.offInStrict)
+         return cW ? null : wW(WW, WW.smW(iW.flat()), PW.offInStrict)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L253` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/156.js#L486) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/156.js#L253)

```diff
-           validation: QB ? DB : {
+           validation: NW ? EW : {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/157.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/157.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L4` → after: `L4-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L4-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L601) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/157.js#L4)

```diff
-   7218: (BB, OB, GB) => {
+   7621: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       loadPageShaderPackCompiler: () => li
+     });
+     var mW = {};
+     OW.r(mW), OW.d(mW, {
+       mNW: () => EW,
+       dWW: () => NW,
+       default: () => qW,
+       ENW: () => PW,
+       NNW: () => LW,
+       initSync: () => BW,
+       qt: () => cW,
+       smW: () => wW,
+       PNW: () => tW,
+       LNW: () => ZW,
+ ... (582 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L6` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/157.js#L603) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/157.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => DB
+       c: () => PW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L8-L11` → after: `L605-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L605-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/157.js#L605-L754) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/157.js#L8-L11)

```diff
-     var YB = GB(4166);
- 
-     function DB(BB) {
-       return YB.k.toBuffer(BB)
+     var mW = OW(2388);
+     const EW = {
+       bloxd_wasm: () => "102e63c69ba1846a7ef3e4f3119d9407d849792a77d386b77d132cbd19000baf",
+       bloxd_wasm_client: () => "828553d657b63b8b78489e1c312c1521bbff4059679c6442f668bd5b77b44d26",
+       bloxd_wasm_workers: () => "c3e0f9c9d3450b1b58eeeabddc49241fbc8ffeffe05a0e2cd8e7c4d8847442a4",
+       bloxd_wasm_models: () => "77704cdcef014d8f1aa72c519a652297b25e80d6cafc34478014bd291b97f37e",
+       bloxd_wasm_webgpu: () => "603e3bc645f5c3d0c95d7f24327b193ab3d090814bbdb68c6ad2438495025f9d",
+       bloxd_wasm_webgl: () => "8157beb90345cb7dcaa6d28e4816f7951234731f38d297579b1de22172034862",
+       bloxd_wasm_webgl1: () => "ac00e7c2f783046413779c397bcab25db7aaf3ceb5743e39ab05f2fc699b197b",
+       bloxd_wasm_replay: () => "a585d75239773f442a258771a295653a54d6e99e4b872f0a2a4512a7fceaca4a",
+       bloxd_wasm_recorder: () => "1c3da6ac9b656d482455def4919768325136d09e94b6b18afdb7ecc55287a265",
+       bloxd_wasm_anim: () => "95aba8d7de72cdcce081f679def0f8248e845944fba77b065315103503401e53",
+       bloxd_wasm_textures: () => "378f24688349d1dc6f860f72e8fafaf79ead5d9fccc14eb96ca959801b415d82",
+       bloxd_wasm_shader_pack: () => "fa64ff9ddba4399ee91af4ff8bb1c0cc63df7e9ee2ebb4a275be7918ce6cdefd"
+     };
+     var NW = OW(5427);
+ ... (134 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/158.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/158.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961)

#### 1. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L4-L8` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L4-L9) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L4-L8)

```diff
-   7234: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       BloxdDiscordSDK: () => qB,
-       DiscordLoginCancelledError: () => pB,
-       discordPopupTimeoutMs: () => lB
+   37265: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => LW,
+       e: () => wW,
+       i: () => PW,
+       m: () => ZW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L10-L21` → after: `L11-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L11-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L11-L111) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L10-L21)

```diff
-     var YB = GB(162),
-       DB = GB(1225),
-       QB = GB(1121),
-       oB = GB(1134),
-       jB = GB.n(oB),
-       yB = GB(1186),
-       JB = GB(31),
-       MB = GB(641),
-       PB = GB(1400),
-       zB = GB(1195);
-     const lB = 6e5;
-     class pB extends Error {
+     var mW = OW(37257),
+       EW = OW(13);
+     const NW = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+ 
+     function PW(WW) {
+       if (WW instanceof WebAssembly.RuntimeError) return !0;
+       const iW = WW instanceof Error ? WW.stack : void 0;
+       return "string" === typeof iW && NW.test(iW)
+     }
+ 
+     function LW(WW, iW, OW) {
+       var EW;
+       const PW = WW instanceof Error ? WW.name : "thrown",
+         LW = (WW instanceof Error && null !== (EW = WW.stack) && void 0 !== EW ? EW : "").split("\n").filter((WW => NW.test(WW))).slice(0, 8).map((WW => WW.trim())),
+         cW = null === iW ? "wasm memory unknown" : `wasm memory ${Math.round(iW/2**20)} MB`,
+         wW = null === OW.panic ? "" : `, panic: ${(0,mW.h)(OW.panic)}`,
+ ... (85 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L23` → after: `L113-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L113-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L113-L128) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L23)

```diff
-         super(...arguments), this.name = QB.discordLoginCancelledErrorName
+         if (SW()) try {
+           this.worker = TW(), lW(UW, this.worker, ["error", () => {
+             this.failed = !0
+           }])
+         } catch {
+           this.stop()
+         }
+       }
+       take() {
+         const WW = this.worker;
+         if (this.worker = null, null !== WW && this.failed) throw lW(jW, WW, []), new Error("it did not run");
+         return WW
+       }
+       stop() {
+         const WW = this.worker;
+         this.worker = null, null !== WW && lW(jW, WW, [])
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L27-L96` → after: `L132-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L132-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L132-L211) · [Before (L27-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L27-L96)

```diff
-       constructor() {
-         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
-         const BB = new URL(this.discordRedirectUrl).origin;
-         window.addEventListener("message", (OB => {
-           var GB;
-           if (OB.origin !== BB || "oauth_authentication_discord" !== (null === (GB = OB.data) || void 0 === GB ? void 0 : GB.type)) return;
-           if ("string" !== typeof OB.data.code || !OB.data.code) return void this.failPopup(new pB("Discord authentication was cancelled on Discord"));
-           const YB = this.popupWindowPromiseResolve;
-           this.resetPopupState(), null === YB || void 0 === YB || YB(OB.data.code)
-         }))
-       }
-       resetPopupState() {
-         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
-       }
-       failPopup(BB) {
-         var OB;
- ... (54 more removed lines; see GitHub link above)
+       decoded;
+       worker;
+       reject;
+       constructor(WW, iW, OW, mW, NW) {
+         try {
+           this.worker = NW?.take() ?? TW()
+         } catch (wW) {
+           throw KW = !0, new Error(`The zstd decoder's worker did not start: ${(0,LW.h)(wW)}`)
+         }
+         const PW = this.worker;
+         this.decoded = (0, EW.l)(((iW, EW) => {
+           this.reject = EW;
+           const NW = (WW, iW) => {
+             lW(UW, PW, [WW, iW])
+           };
+           NW("message", (WW => {
+ ... (64 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L98-L100` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L213) · [Before (L98-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L98-L100)

```diff
-           retries: 0
-         }, OB.getMetricsCookies())), {
-           retries: 3
+           __proto__: null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L102-L110` → after: `L215-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L215-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L215-L289) · [Before (L102-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L102-L110)

```diff
-         return JB.c.setItem(this.bloxdDiscordRefreshTokenKey, YB), GB
-       }
-       hasCurrentUser() {
-         const BB = JB.c.getItem(this.bloxdDiscordRefreshTokenKey);
-         return !(0, MB.Q)(BB)
-       }
-       async getCurrentUser(BB) {
-         const OB = JB.c.getItem(this.bloxdDiscordRefreshTokenKey);
-         if (!OB) return null;
+         return WW
+       }(),
+       oW = function() {
+         try {
+           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== uW && (0, PW.j)(HW, "Response", !0) && (0, PW.j)(nW, "ReadableStream", !0) && (0, PW.j)(uW.enqueue, "enqueue") && (0, PW.j)(uW.close, "close") && (0, PW.j)(uW.e … [truncated]
+         } catch {
+           return !1
+         }
+       }();
+     async function dW(WW, iW, OW, mW, NW, PW, wW) {
+       const tW = new hW(iW),
+         {
+           controller: ZW,
+           compiled: xW
+         } = function(WW) {
+           try {
+ ... (59 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L113` → after: `L292-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L292-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L292-L383) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L113)

```diff
-           const YB = await jB()((async () => {
+           PW = await fetch(WW, {
+             signal: OW
+           })
+         } catch (TW) {
+           throw new Error(`Fetching ${WW} failed: ${(0,LW.h)(TW)}`)
+         }
+         const {
+           ok: wW,
+           status: tW,
+           body: ZW
+         } = function(WW, iW) {
+           try {
+             const {
+               ok: WW,
+               status: OW
+             } = iW;
+ ... (76 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L115-L119` → after: `L385-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L385-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L385-L441) · [Before (L115-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L115-L119)

```diff
-               return await (0, QB.postJsonWithMetricsCookiesAndJsonResponse)(`${yB.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: OB
-               }, {
-                 retries: 0
-               }, BB.getMetricsCookies())
+               const OW = fetch(WW.href, {
+                   cache: "only-if-cached",
+                   mode: "same-origin",
+                   signal: iW.signal
+                 }),
+                 NW = await (0, EW.t)([OW, mW]);
+               return !!NW?.ok && ((0, cW.P)(NW.body.cancel()), !0)
+             } catch {
+               return !1
+             } finally {
+               clearTimeout(OW)
+             }
+           }(WW.url())) return NW?.stop(), await async function(WW, iW, OW, mW) {
+           let EW = !1;
+           const NW = OW && {
+             sha256: OW.sha256,
+ ... (41 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L121-L122` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L443) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L121-L122)

```diff
-               if (ZB(GB)) throw new(jB().AbortError)(GB);
-               throw GB
+               console.warn(`Bloxd wasm: ${OW} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, EW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L124-L141` → after: `L445-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L445-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/158.js#L445-L654) · [Before (L124-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/158.js#L124-L141)

```diff
-           }), {
-             retries: 3
-           });
-           GB = YB.accessToken, JB.c.setItem(this.bloxdDiscordRefreshTokenKey, YB.refreshToken)
-         } catch (YB) {
-           return ZB(YB) ? (JB.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", YB), null)
-         }
-         return {
-           accessToken: GB
-         }
-       }
-       signOut() {
-         this.failPopup(new pB("Signed out of Discord during login")), JB.c.removeItem(this.bloxdDiscordRefreshTokenKey)
-       }
-     }
- 
- ... (2 more removed lines; see GitHub link above)
+           }(WW.url()), OW.onDownloaded?.()
+         }
+       })
+     }
+     async function XW(WW, iW, OW, mW) {
+       if (!oW || !SW()) return null;
+       const EW = WW.url(),
+         NW = `${EW.href}${vW}`;
+       try {
+         return await (0, cW.Z)(NW, ((WW, EW, PW) => dW(NW, iW, WW, EW, PW, OW, mW)))
+       } catch (PW) {
+         return console.warn(`${(0,LW.h)(PW)}: loading ${EW.href} instead`), null
+       }
+     }
+     let BW = null,
+       qW = !1;
+ ... (194 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/159.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/159.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131)

#### 1. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/159.js#L4)

```diff
-   7243: (BB, OB, GB) => {
+   7637: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/159.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/159.js#L6)

```diff
-       BloxdFirebaseSdk: () => zB
+       loadShaderPackTextures: () => PW,
+       shaderPackTextures: () => LW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L8-L161` → after: `L9-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L9-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/159.js#L9-L26) · [Before (L8-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/159.js#L8-L161)

```diff
-     var YB = GB(1938),
-       DB = GB(3262),
-       QB = GB(98),
-       oB = GB(92),
-       jB = GB(1748),
-       yB = GB(2149);
-     const JB = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
-     };
-     var MB = GB(1856),
-       PB = GB(1784);
- ... (138 more removed lines; see GitHub link above)
+     var mW = OW(5970);
+     let EW = null,
+       NW = null;
+ 
+     function PW() {
+       return NW ??= Promise.all([OW.e(85), OW.e(126)]).then((() => OW(42015))).then((WW => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: iW,
+           textureNameToIndex: OW,
+           textureAnimationData: NW
+         } = WW;
+         return EW ??= (0, mW.o)(OW, NW, iW), EW
+       })), NW
+     }
+ 
+     function LW() {
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/160.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/160.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/160.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/160.js#L2)

```diff
- export const ids = [160];
+ export const ids = [159, 160];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/160.js#L4)

```diff
-   7250: (BB, OB, GB) => {
+   7656: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L6` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/160.js#L6-L19) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/160.js#L6)

```diff
-       BloxdDiscordActivitySdk: () => WB
+       forgetShaderPackActiveHint: () => HW,
+       isOtherApiVersion: () => yW,
+       isShaderPackActive: () => MW,
+       isShaderPackChangePending: () => YW,
+       markShaderPackChangePending: () => SW,
+       pageShaderPackValidationVersion: () => TW,
+       reconcileStoredShaderPackHint: () => hW,
+       removeShaderPack: () => sW,
+       replaceShaderPack: () => jW,
+       saveShaderPack: () => bW,
+       shaderPackNeedsCheck: () => JW,
+       storedPackOutcome: () => KW,
+       storedShaderPackFiles: () => xW,
+       toStoredShaderPack: () => ZW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L8-L133` → after: `L21-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L21-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/160.js#L21-L36) · [Before (L8-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/160.js#L8-L133)

```diff
-     var YB = GB(7258),
-       DB = GB(1225),
-       QB = GB(1175),
-       oB = GB(641),
-       jB = GB(1253),
-       yB = GB(1822),
-       JB = GB(1350),
-       MB = GB(791),
-       PB = GB(16),
-       zB = GB(1195),
-       lB = GB(2549),
-       pB = function(BB) {
-         return BB.APPLICATION_COMMANDS = "applications.commands", BB.IDENTIFY = "identify", BB.EMAIL = "email", BB.GUILDS = "guilds", BB.READ_DM_CHANNELS = "dm_channels.read", BB.WRITE_ACTIVITIES = "rpc.activities.write", BB
-       }(pB || {}),
-       qB = function(BB) {
-         return BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITE … [truncated]
- ... (110 more removed lines; see GitHub link above)
+     var mW = OW(5970),
+       EW = OW(5961),
+       NW = OW(39),
+       PW = OW(4666),
+       LW = OW(7659),
+       cW = OW(7637);
+     const wW = "shaderPackChangePending";
+     let tW = null;
+ 
+     function ZW(WW, iW, OW) {
+       return {
+         manifest: WW.manifest,
+         files: (0, mW.A)(WW.files),
+         validation: iW,
+         ...OW && {
+           listing: OW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L136-L153` → after: `L39-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L39-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/160.js#L39-L98) · [Before (L136-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/160.js#L136-L153)

```diff
-       async getGameVerbAndTitle(BB) {
-         var OB;
-         const GB = "Playing";
-         if ((0, oB.Q)(BB)) return {
-           verb: GB,
-           title: "Bloxd"
-         };
-         const YB = (0, MB.j)(BB);
-         var DB;
-         if (null !== YB) return {
-           verb: null !== (DB = RB[BB]) && void 0 !== DB ? DB : NB[YB.type],
-           title: await (0, QB.G)(jB.c.ENGLISH, YB.title)
-         };
-         const yB = await (0, lB.b)(BB);
-         return {
-           verb: null !== (OB = yB && NB[yB.gameCategory]) && void 0 !== OB ? OB : GB,
- ... (2 more removed lines; see GitHub link above)
+     }
+ 
+     function xW(WW) {
+       return Object.keys(WW.files).map((iW => ({
+         path: iW,
+         source: WW.files[iW]
+       })))
+     }
+     let lW = Promise.resolve();
+ 
+     function AW(WW) {
+       const iW = lW.then(WW);
+       return lW = iW.catch((() => {})), iW
+     }
+ 
+     function bW(WW, iW) {
+ ... (44 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L155-L271` → after: `L100-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L100-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/160.js#L100-L161) · [Before (L155-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/160.js#L155-L271)

```diff
-       getCurrentChannelType() {
-         const {
-           channelId: BB,
-           guildId: OB
-         } = this.getCurrentChannelAndGuild();
-         return null !== OB ? DB.b.GUILD : null !== BB ? DB.b.DM : null
-       }
-       getRequiredScopeForCurrentChannel() {
-         const BB = this.getCurrentChannelType(),
-           OB = [pB.APPLICATION_COMMANDS, pB.IDENTIFY, pB.EMAIL, pB.GUILDS, pB.WRITE_ACTIVITIES];
-         switch (BB) {
-           case DB.b.DM:
-           case DB.b.GUILD:
-             return [...OB];
-           default:
-             throw new Error(`Unknown Discord channel type: ${BB}`)
- ... (101 more removed lines; see GitHub link above)
+     }
+ 
+     function SW() {
+       NW.j.setItem(wW, performance.timeOrigin)
+     }
+ 
+     function YW() {
+       return NW.j.getItem(wW) === performance.timeOrigin
+     }
+ 
+     function yW(WW) {
+       return !(0, EW.g)(WW.manifest.apiVersion)
+     }
+ 
+     function TW(WW) {
+       return tW ??= WW.IH((0, cW.shaderPackTextures)()), tW
+ ... (46 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/161.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/161.js` (212 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4-L99) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4)

```diff
-   7258: (BB, OB, GB) => {
+   35086: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => LW,
+       c: () => PW
+     });
+     var mW = OW(248),
+       EW = OW(131),
+       NW = OW(35089);
+ 
+     function PW() {
+       var WW, iW, OW;
+       return null !== (WW = (0, mW.m)(null !== (iW = null === (OW = (0, EW.j)()) || void 0 === OW ? void 0 : OW.renderer) && void 0 !== iW ? iW : null, (0, EW.f)())) && void 0 !== WW ? WW : "unknown"
+     }
+ 
+     function LW(WW, iW, OW, mW, EW) {
+       const PW = null === iW ? "untimed" : `${Math.round(iW)} ms`;
+ ... (80 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L7` → after: `L102-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L102-L104) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L7)

```diff
-       h: () => LG
+       i: () => cW,
+       k: () => PW,
+       n: () => EW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L10` → after: `L106-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L106-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L106-L150) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L9-L10)

```diff
-     var YB = {};
-     GB.r(YB), GB.d(YB, {
+     var mW = OW(182);
+ 
+     function EW(WW) {
+       const iW = WW.endsWith(mW.j);
+       return {
+         text: (iW ? WW.slice(0, -mW.j.length) : WW) || null,
+         dropsCache: iW
+       }
+     }
+     const NW = "Either your internet isn't working or this is a bug.";
+ 
+     function PW(WW, iW) {
+       const OW = cW(WW);
+       return null !== OW.name && "" === mW.e[OW.name].text && null !== iW ? iW : OW.reason
+     }
+     const LW = "You were removed from the game.";
+ ... (29 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L17-L28` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L156) · [Before (L17-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L17-L28)

```diff
-       p: () => xG,
-       q: () => IY,
-       r: () => SY,
-       u: () => mY,
-       w: () => vG,
-       A: () => UY,
-       D: () => dY,
-       F: () => uY,
-       H: () => sG,
-       G: () => OY,
-       J: () => kY,
-       M: () => fY
+       p: () => wW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L30` → after: `L158-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L158-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L158-L162) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L30)

```diff
-     var DB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
+     class mW extends Error {
+       constructor() {
+         super(...arguments), this.name = "CoreCorruption"
+       }
+     }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L33` → after: `L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L165) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L33)

```diff
-       return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
+       return WW instanceof RangeError && /call stack/i.test(WW.message) || WW instanceof Error && "InternalError" === WW.name && /recursion/i.test(WW.message)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L35-L40` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L167) · [Before (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L35-L40)

```diff
-     var oB = {
-       exports: {}
-     };
-     ! function(BB) {
-       var OB = Object.prototype.hasOwnProperty,
-         GB = "~";
+     const NW = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L42` → after: `L169-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L169-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L169-L172) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L42)

```diff
-       function YB() {}
+     function PW(WW) {
+       var iW;
+       return WW instanceof WebAssembly.RuntimeError || WW instanceof mW || EW(WW) && NW.test(null !== (iW = WW.stack) && void 0 !== iW ? iW : "")
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L44-L46` → after: `L174-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L174-L177) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L44-L46)

```diff
-       function DB(BB, OB, GB) {
-         this.oP = BB, this.context = OB, this.once = GB || !1
-       }
+     function LW(WW, iW) {
+       if (PW(WW)) throw WW;
+       console.error(iW, WW)
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L48-L53` → after: `L179-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L179-L181) · [Before (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L48-L53)

```diff
-       function QB(BB, OB, YB, QB, oB) {
-         if ("function" !== typeof YB) throw new TypeError("The listener must be a function");
-         var jB = new DB(YB, QB || BB, oB),
-           yB = GB ? GB + OB : OB;
-         return BB._events[yB] ? BB._events[yB].oP ? BB._events[yB] = [BB._events[yB], jB] : BB._events[yB].push(jB) : (BB._events[yB] = jB, BB._eventsCount++), BB
-       }
+     function cW(WW, iW, OW, EW, NW) {
+       if (iW % EW !== 0 || iW + OW > WW.byteLength) throw new mW(`${NW}: ${OW} bytes at ${iW}, ${EW}-aligned, outside ${WW.byteLength} bytes of memory`)
+     }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L55-L57` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L183-L185) · [Before (L55-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L55-L57)

```diff
-       function oB(BB, OB) {
-         0 === --BB._eventsCount ? BB._events = new YB : delete BB._events[OB]
-       }
+     function wW(WW, iW, OW, mW, EW) {
+       return 0 === OW ? null : (cW(iW, OW, mW * WW.BYTES_PER_ELEMENT, WW.BYTES_PER_ELEMENT, EW), new WW(iW, OW, mW))
+     }
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L59-L262` → after: `L187-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L187-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L187-L264) · [Before (L59-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L59-L262)

```diff
-       function jB() {
-         this._events = new YB, this._eventsCount = 0
-       }
-       Object.create && (YB.prototype = Object.create(null), (new YB).__proto__ || (GB = !1)), jB.prototype.eventNames = function() {
-         var BB, YB, DB = [];
-         if (0 === this._eventsCount) return DB;
-         for (YB in BB = this._events) OB.call(BB, YB) && DB.push(GB ? YB.slice(1) : YB);
-         return Object.getOwnPropertySymbols ? DB.concat(Object.getOwnPropertySymbols(BB)) : DB
-       }, jB.prototype.listeners = function(BB) {
-         var OB = GB ? GB + BB : BB,
-           YB = this._events[OB];
-         if (!YB) return [];
-         if (YB.oP) return [YB.oP];
-         for (var DB = 0, QB = YB.length, oB = new Array(QB); DB < QB; DB++) oB[DB] = YB[DB].oP;
-         return oB
-       }, jB.prototype.listenerCount = function(BB) {
- ... (188 more removed lines; see GitHub link above)
+     function tW(WW, iW, OW, mW, EW) {
+       return 0 === iW ? null : (cW(WW, iW, OW, mW, EW), new DataView(WW, iW, OW))
+     }
+   },
+   42216: (WW, iW, OW) => {
+     OW.d(iW, {
+       $: () => vW,
+       B: () => Oi,
+       C: () => rW,
+       E: () => Pi,
+       G: () => Ni,
+       J: () => mi,
+       K: () => ci,
+       M: () => Mi,
+       P: () => Li,
+       Q: () => Ei,
+ ... (62 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L265-L266` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L268-L269) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L265-L266)

```diff
-     lB.create = BB => new lB(BB);
-     const pB = (BB, OB) => {
+ 
+     function gW(WW) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L268-L318` → after: `L271-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L271-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L271-L276) · [Before (L268-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L268-L318)

```diff
-       switch (BB.code) {
-         case zB.invalid_type:
-           GB = BB.received === MB.undefined ? "Required" : `Expected ${BB.expected}, received ${BB.received}`;
-           break;
-         case zB.invalid_literal:
-           GB = `Invalid literal value, expected ${JSON.stringify(BB.expected,jB.jsonStringifyReplacer)}`;
-           break;
-         case zB.unrecognized_keys:
-           GB = `Unrecognized key(s) in object: ${jB.joinValues(BB.keys,", ")}`;
-           break;
-         case zB.invalid_union:
-           GB = "Invalid input";
-           break;
-         case zB.invalid_union_discriminator:
-           GB = `Invalid discriminator value. Expected ${jB.joinValues(BB.options)}`;
-           break;
- ... (35 more removed lines; see GitHub link above)
+       try {
+         iW = WW.getContext("webgl", {
+           powerPreference: MW.b
+         })
+       } catch {
+         iW = null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L320-L321` → after: `L278-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L278-L284) · [Before (L320-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L320-L321)

```diff
-       return {
-         message: GB
+       if (null === iW) return null;
+       let OW = null;
+       try {
+         const WW = iW.getParameter(iW.MAX_TEXTURE_SIZE);
+         OW = "number" === typeof WW && WW > 0 ? WW : null
+       } catch {
+         OW = null
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L323-L324` → after: `L286-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L286-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L286-L292) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L323-L324)

```diff
-     };
-     let qB = pB;
+       try {
+         var mW;
+         null === (mW = iW.getExtension("WEBGL_lose_context")) || void 0 === mW || mW.loseContext()
+       } catch {}
+       return OW
+     }
+     const DW = new Set(["android_arm", "chromeos_other", "chromeos_intel", "windows_intel_low", "ios"]);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L327` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L295) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L327)

```diff
-       return qB
+       return "ios" === (0, xW.getOperatingSystem)() ? "ios" : "other"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L329-L350` → after: `L297-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L297-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L297-L300) · [Before (L329-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L329-L350)

```diff
-     const NB = BB => {
-       const {
-         data: OB,
-         path: GB,
-         errorMaps: YB,
-         issueData: DB
-       } = BB, QB = [...GB, ...DB.path || []], oB = {
-         ...DB,
-         path: QB
-       };
-       let jB = "";
-       const yB = YB.filter((BB => !!BB)).slice().reverse();
-       for (const JB of yB) jB = JB(oB, {
-         data: OB,
-         defaultError: jB
-       }).message;
- ... (6 more removed lines; see GitHub link above)
+     const pW = "mali_valhall",
+       fW = new Set(["nvidia_pre_turing"]),
+       CW = new Set(["intel_gen7_8"]),
+       XW = new Set(["powervr_rogue"]);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L352-L359` → after: `L302-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L302-L303) · [Before (L352-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L352-L359)

```diff
-     function RB(BB, OB) {
-       const GB = NB({
-         issueData: OB,
-         data: BB.data,
-         path: BB.path,
-         errorMaps: [BB.common.contextualErrorMap, BB.schemaErrorMap, ZB(), pB].filter((BB => !!BB))
-       });
-       BB.common.issues.push(GB)
+     function BW(WW, iW, OW) {
+       return DW.has(WW) ? "android_arm" === WW && iW === pW && "mobileAndroid" !== OW ? "webgpu_default" : "webgl_default" : null
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L361-L403` → after: `L305-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L305-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L305-L311) · [Before (L361-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L361-L403)

```diff
-     class WB {
-       constructor() {
-         this.value = "valid"
-       }
-       ap() {
-         "valid" === this.value && (this.value = "ap")
-       }
-       abort() {
-         "aborted" !== this.value && (this.value = "aborted")
-       }
-       static mergeArray(BB, OB) {
-         const GB = [];
-         for (const YB of OB) {
-           if ("aborted" === YB.status) return AB;
-           "ap" === YB.status && BB.ap(), GB.push(YB.value)
-         }
- ... (27 more removed lines; see GitHub link above)
+ 
+     function qW(WW) {
+       return function(WW) {
+         try {
+           return WW()
+         } catch {
+           return null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L405` → after: `L313-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L313-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L313-L317) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L405)

```diff
-       }
+       }((() => {
+         var iW, OW, mW, PW;
+         const LW = null !== (iW = null === (OW = WW.info) || void 0 === OW ? void 0 : OW.vendor) && void 0 !== iW ? iW : "";
+         return "windows" === (0, xW.getOperatingSystem)() && "" !== LW && "intel" !== (0, xW.normaliseGpuVendor)(LW) ? null : ((0, xW.seedGpuVendor)(LW), BW((0, EW.i)(), (0, NW.f)(LW, null !== (mW = null === (PW = WW.info) || void 0 === PW ? void 0 : PW.architecture) && void 0 != … [truncated]
+       }))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L407-L433` → after: `L319-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L319-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L319-L386) · [Before (L407-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L407-L433)

```diff
-     const AB = Object.freeze({
-         status: "aborted"
-       }),
-       VB = BB => ({
-         status: "ap",
-         value: BB
-       }),
-       SB = BB => ({
-         status: "valid",
-         value: BB
-       }),
-       nB = BB => "aborted" === BB.status,
-       UB = BB => "ap" === BB.status,
-       fB = BB => "valid" === BB.status,
-       kB = BB => "undefined" !== typeof Promise && BB instanceof Promise;
-     var dB;
- ... (11 more removed lines; see GitHub link above)
+ 
+     function RW() {
+       var WW;
+       return {
+         gpu: null !== (WW = navigator.gpu) && void 0 !== WW ? WW : null,
+         webgl2: HW.f,
+         webgl1: () => function(WW) {
+           let iW, OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YW.d;
+           try {
+             iW = WW.getContext("webgl")
+           } catch {
+             iW = null
+           }
+           if (null === iW) return [oW];
+           const mW = [];
+           try {
+ ... (52 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L436-L448` → after: `L389-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L389-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L389-L402) · [Before (L436-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L436-L448)

```diff
-     const uB = (BB, OB) => {
-       if (fB(OB)) return {
-         success: !0,
-         data: OB.value
-       };
-       if (!BB.common.issues.length) throw new Error("Validation failed but no issues detected.");
-       return {
-         success: !1,
-         get error() {
-           if (this._error) return this._error;
-           const OB = new lB(BB.common.issues);
-           return this._error = OB, this._error
-         }
+ 
+     function GW() {
+       let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+       if ((0, LW.t)("render") && "webgl1" === (0, LW.p)("renderer")) return "webgl1";
+       const iW = [() => new URLSearchParams(window.location.search).get(tW.e), () => bW.i.getItem(tW.h), () => {
+         const iW = localStorage.getItem(uW);
+         return null !== iW && WW && localStorage.removeItem(uW), "1" === iW ? "webgl2" : null
+       }];
+       for (const OW of iW) {
+         let WW = null;
+         try {
+           WW = aW(OW())
+         } catch {}
+         if (null !== WW) return WW
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L450` → after: `L404-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L404-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L404-L405) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L450)

```diff
-     };
+       return null
+     }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L453-L473` → after: `L408-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L408-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L408-L411) · [Before (L453-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L453-L473)

```diff
-       if (!BB) return {};
-       const {
-         errorMap: OB,
-         invalid_type_error: GB,
-         required_error: YB,
-         description: DB
-       } = BB;
-       if (OB && (GB || YB)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
-       if (OB) return {
-         errorMap: OB,
-         description: DB
-       };
-       return {
-         errorMap: (BB, OB) => "invalid_type" !== BB.code ? {
-           message: OB.defaultError
-         } : "undefined" === typeof OB.data ? {
- ... (5 more removed lines; see GitHub link above)
+       try {
+         return WW()
+       } catch {
+         return !1
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L476-L493` → after: `L414-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L414-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L414-L450) · [Before (L476-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L476-L493)

```diff
-     class IB {
-       constructor(BB) {
-         this.spa = this.safeParseAsync, this._def = BB, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
-       }
-       get description() {
-         return this._def.description
-       }
-       _getType(BB) {
-         return PB(BB.data)
-       }
-       _getOrReturnCtx(BB, OB) {
-         return OB || {
-           common: BB.parent.common,
-           data: BB.data,
-           parsedType: PB(BB.data),
-           schemaErrorMap: this._def.errorMap,
- ... (2 more removed lines; see GitHub link above)
+ 
+     function aW(WW) {
+       return "lite" === WW ? "webgpu" : "webgl2" === WW || "babylon" === WW ? "webgl" : null
+     }
+ 
+     function rW(WW) {
+       return "none" === WW || "compatibility_mode" === WW
+     }
+     async function zW() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW();
+       const iW = await async function(WW) {
+         const iW = QW(WW),
+           {
+             source: OW
+           } = iW,
+           mW = !iW.asked,
+ ... (21 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L496-L512` → after: `L494-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L494-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L494-L538) · [Before (L496-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L496-L512)

```diff
-       _processInputParams(BB) {
-         return {
-           status: new WB,
-           ctx: {
-             common: BB.parent.common,
-             data: BB.data,
-             parsedType: PB(BB.data),
-             schemaErrorMap: this._def.errorMap,
-             path: BB.path,
-             parent: BB.parent
-           }
-         }
-       }
-       _parseSync(BB) {
-         const OB = this._parse(BB);
-         if (kB(OB)) throw new Error("Synchronous parse encountered promise.");
- ... (1 more removed lines; see GitHub link above)
+     }
+ 
+     function FW(WW, iW) {
+       let {
+         source: OW,
+         asked: mW
+       } = iW;
+       return mW || "default" === OW ? (0, hW.k)(mW, WW.defaultCompatibility) : void 0
+     }
+ 
+     function QW(WW) {
+       const iW = WW.override(),
+         OW = WW.webGpuSetting(),
+         mW = null === iW && !0 !== OW && WW.kA(),
+         EW = null !== iW || null !== OW || mW ? null : WW.claimed(),
+         NW = null !== iW ? "override" : !0 === OW ? "setting" : mW ? "pack" : !1 === OW ? "setting" : null !== EW ? "claim" : "default",
+ ... (29 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L514-L516` → after: `L540-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L540-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L540-L556) · [Before (L514-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L514-L516)

```diff
-       _parseAsync(BB) {
-         const OB = this._parse(BB);
-         return Promise.resolve(OB)
+     }
+ 
+     function Wi() {
+       let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
+           ...RW(),
+           override: () => GW(!1)
+         },
+         iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xW.isWebKit,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VW;
+       try {
+         if (!iW()) return !1;
+         const mW = QW(WW);
+         if (!("gpu" in mW) || mW.heldBack) return !1;
+         const EW = "default" === mW.source ? BW(OW(), "apple", lW.siteUsed) : null;
+         return null === EW || !WW.gpuClassOnWebGl(EW)
+       } catch (mW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L518-L521` → after: `L558-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L558-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L558-L566) · [Before (L518-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L518-L521)

```diff
-       parse(BB, OB) {
-         const GB = this.safeParse(BB, OB);
-         if (GB.success) return GB.data;
-         throw GB.error
+     }
+     let ii = !1;
+     async function Oi(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW();
+       if (null === WW) return null;
+       const OW = await zW(iW);
+       return ii = !("missing" in OW) && "webgpu" === OW.backend && "claim" === OW.source, "missing" in OW ? OW : {
+         ...OW,
+         load: WW[OW.backend]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L523` → after: `L568-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L568-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L568-L577) · [Before (L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L523)

```diff
-       safeParse(BB, OB) {
+     }
+     async function mi(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RW().gpu,
+         mW = arguments.length > 3 ? arguments[3] : void 0;
+       if ("webgpu" !== WW.backend) return !1;
+       const EW = Zi(WW, iW, "indirectDraws", "off", "on");
+       if (null !== EW) return EW;
+       if (null !== WW.adapter && (0, UW.n)(WW.adapter, mW)) return !0;
+       if (null === OW) return !1;
+       try {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L525-L645` → after: `L579-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L579-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L579-L582) · [Before (L525-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L525-L645)

```diff
-         const YB = {
-             common: {
-               issues: [],
-               async: null !== (GB = null === OB || void 0 === OB ? void 0 : OB.async) && void 0 !== GB && GB,
-               contextualErrorMap: null === OB || void 0 === OB ? void 0 : OB.errorMap
-             },
-             path: (null === OB || void 0 === OB ? void 0 : OB.path) || [],
-             schemaErrorMap: this._def.errorMap,
-             parent: null,
-             data: BB,
-             parsedType: PB(BB)
-           },
-           DB = this._parseSync({
-             data: BB,
-             path: YB.path,
-             parent: YB
- ... (105 more removed lines; see GitHub link above)
+         const WW = await (0, yW.o)(OW.requestAdapter({
+           powerPreference: "low-power"
+         }).then((async WW => (null !== WW && await (0, KW.c)(WW), WW))), Si, `the low-power requestAdapter didn't settle in ${Si/1e3} s`);
+         return (0, UW.n)(null !== (NW = null === WW || void 0 === WW ? void 0 : WW.info) && void 0 !== NW ? NW : {}, mW)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L647-L671` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L584) · [Before (L647-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L647-L671)

```diff
-         const OB = "function" === typeof BB ? BB : () => BB;
-         return new UO({
-           ...mB(this._def),
-           innerType: this,
-           catchValue: OB,
-           typeName: FO.ZodCatch
-         })
-       }
-       describe(BB) {
-         return new(0, this.constructor)({
-           ...this._def,
-           description: BB
-         })
-       }
-       pipe(BB) {
-         return KO.create(this, BB)
- ... (9 more removed lines; see GitHub link above)
+         return PW instanceof yW.g
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L674-L814` → after: `L587-L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L587-L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L587-L651) · [Before (L674-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L674-L814)

```diff
-     const FB = /^c[^\s-]{8,}$/i,
-       iB = /^[a-z][a-z0-9]*$/,
-       LB = /^[0-9A-HJKMNP-TV-Z]{26}$/,
-       gB = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
-       rB = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
-     let XB;
-     const wB = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
-       EB = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1, … [truncated]
-     class cB extends IB {
-       _parse(BB) {
-         this._def.coerce && (BB.data = String(BB.data));
-         if (this._getType(BB) !== MB.string) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.string,
- ... (125 more removed lines; see GitHub link above)
+ 
+     function Ei(WW, iW, OW) {
+       let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0, xW.pageOperatingSystem)();
+       if ("webgpu" !== WW.backend) return !1;
+       const EW = Zi(WW, iW, "terrainFetch", "texture", "storage");
+       return null !== EW ? EW : null !== WW.adapter && ((0, UW.i)(WW.adapter, OW) || (0, UW.f)(WW.adapter, mW))
+     }
+ 
+     function Ni(WW, iW) {
+       if ("webgpu" !== WW.backend) return !1;
+       const OW = Zi(WW, iW, "skyOrder", "early", "last");
+       return null !== OW ? OW : null !== WW.adapter && (0, NW.f)(WW.adapter.vendor, WW.adapter.architecture) === pW
+     }
+ 
+     function Pi(WW, iW) {
+       if ("webgpu" !== WW.backend) return !1;
+ ... (49 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L817-L852` → after: `L669-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L669-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L669-L710) · [Before (L817-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L817-L852)

```diff
-       _regex(BB, OB, GB) {
-         return this.refinement((OB => BB.test(OB)), {
-           validation: OB,
-           code: zB.invalid_string,
-           ...dB.errToObj(GB)
-         })
-       }
-       _addCheck(BB) {
-         return new cB({
-           ...this._def,
-           checks: [...this._def.checks, BB]
-         })
-       }
-       email(BB) {
-         return this._addCheck({
-           kind: "email",
- ... (20 more removed lines; see GitHub link above)
+     }
+ 
+     function Ui(WW) {
+       return !!ki(WW) || WW instanceof Error && !(WW instanceof WebAssembly.RuntimeError) && WW.message.startsWith(`${SW.o.RenderSurfaceUnusable}:`)
+     }
+ 
+     function ki(WW) {
+       const {
+         name: iW,
+         message: OW
+       } = null !== WW && void 0 !== WW ? WW : {};
+       return "InvalidStateError" === iW && "string" === typeof OW && OW.startsWith("GPUDevice.")
+     }
+ 
+     function si(WW) {
+       const iW = WW;
+ ... (26 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L854-L858` → after: `L712-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L712-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L712-L759) · [Before (L854-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L854-L858)

```diff
-       cuid(BB) {
-         return this._addCheck({
-           kind: "cuid",
-           ...dB.errToObj(BB)
-         })
+     }
+ 
+     function Ji(WW) {
+       try {
+         WW.free()
+       } catch {}
+     }
+   },
+   42356: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => mW
+     });
+     const mW = {
+       destroy_stage_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAK0lEQVQYlWP8//8/IwMewIRPknQFjIyM/wmaYGdn9w9FE7IjYSagiFHsCwCM7A/Ccc+NjAAAAABJRU5ErkJggg==",
+       destroy_stage_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYlYWPMQ4AIAgDOeO7+v9XWScMOGinpjmgYJt4aKQB/ASqKtwASeuGZxrbAEhyRJxe1JJ1debtRIZt6PfmBqYNG36KBWHbAAAAAElFTkSuQmCC",
+       destroy_stage_2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAARUlEQVQYlYWPwQnAMAwDdaVr2ftPVfWVIBJC9DI6LMvYRpIAjzn1rMaq9wQAbwnd/SWUJNkmb1eVkx07zPK5PaLTu37xA3+wH3UI6vmHAAAAAElFTkSuQmCC",
+ ... (32 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L860-L864` → after: `L761-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L761-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L761-L770) · [Before (L860-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L860-L864)

```diff
-       cuid2(BB) {
-         return this._addCheck({
-           kind: "cuid2",
-           ...dB.errToObj(BB)
-         })
+     }
+ 
+     function tW() {
+       if (null === PW) {
+         const WW = NW();
+         PW = WW, WW.then((iW => {
+           PW === WW && (LW = iW)
+         }), (() => {
+           PW === WW && (PW = null)
+         }))
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L866-L870` → after: `L772-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L772-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L772-L795) · [Before (L866-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L866-L870)

```diff
-       ulid(BB) {
-         return this._addCheck({
-           kind: "ulid",
-           ...dB.errToObj(BB)
-         })
+       return PW
+     }
+ 
+     function ZW() {
+       tW().catch((() => {}))
+     }
+ 
+     function xW() {
+       cW.resolve()
+     }
+ 
+     function lW(WW, iW, OW, mW) {
+       if (null === WW) return {
+         errorKind: iW,
+         fingerprint: EW,
+         dedupe: `${iW}|${mW}`
+ ... (8 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L872-L876` → after: `L797-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L797-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L797-L814) · [Before (L872-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L872-L876)

```diff
-       ip(BB) {
-         return this._addCheck({
-           kind: "ip",
-           ...dB.errToObj(BB)
-         })
+     }
+ 
+     function AW(WW, iW, OW, mW) {
+       return null === LW ? mW ? (ZW(), lW(null, WW, iW, OW)) : null : lW(LW, WW, iW, OW)
+     }
+     async function bW(WW, iW, OW) {
+       let EW;
+       const NW = new Promise((WW => {
+         EW = setTimeout((() => {
+           WW(null)
+         }), mW)
+       }));
+       try {
+         return lW(await Promise.race([tW(), NW, cW.promise]), WW, iW, OW)
+       } catch {
+         return lW(null, WW, iW, OW)
+ ... (2 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L878` → after: `L816-L1137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L816-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L816-L1137) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L878)

```diff
-       datetime(BB) {
+     }
+   },
+   42266: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       BUILT_IN_ANIMATIONS_SITE: () => Wi,
+       CAMERA_DIRECTOR_SITE: () => Pi,
+       CORE_ERRORS_SITE: () => BW,
+       EVENT_OVERFLOW_SITE: () => QW,
+       FIRST_VIEW_SITE: () => mi,
+       GraphicsLostError: () => NO,
+       JOIN_SITE: () => RW,
+       LEAVE_SITE: () => GW,
+       MAIN_THREAD_SITE: () => Ei,
+       MODEL_FEED_SITE: () => IW,
+       MODEL_POOL_SITE: () => aW,
+       NON_FATAL_LOKI_REPORTS_PER_PAGE: () => wi,
+ ... (306 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L880-L940` → after: `L1139-L1146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1139-L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1139-L1146) · [Before (L880-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L880-L940)

```diff
-         return "string" === typeof BB ? this._addCheck({
-           kind: "datetime",
-           precision: null,
-           offset: !1,
-           message: BB
-         }) : this._addCheck({
-           kind: "datetime",
-           precision: "undefined" === typeof(null === BB || void 0 === BB ? void 0 : BB.precision) ? null : null === BB || void 0 === BB ? void 0 : BB.precision,
-           offset: null !== (OB = null === BB || void 0 === BB ? void 0 : BB.offset) && void 0 !== OB && OB,
-           ...dB.errToObj(null === BB || void 0 === BB ? void 0 : BB.message)
-         })
-       }
-       regex(BB, OB) {
-         return this._addCheck({
-           kind: "regex",
-           regex: BB,
- ... (45 more removed lines; see GitHub link above)
+         const iW = null !== (bW = WW.screen) && void 0 !== bW ? bW : {
+           text: (0, vW.e)(xW, !0),
+           reload: !0,
+           stillBlocked: null
+         };
+         Xi((() => {
+           ji(iW)
+         }))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L942-L943` → after: `L1148-L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1148-L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1148-L1192) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L942-L943)

```diff
-       nonempty(BB) {
-         return this.min(1, dB.errToObj(BB))
+       return xW
+     }
+ 
+     function Di(WW) {
+       Bi("counts", (async () => {
+         const {
+           peekVisitSessionId: iW
+         } = await Promise.resolve().then((() => OW(683)));
+         null !== iW() && (await WW(), Ji = !0)
+       }))
+     }
+ 
+     function Vi() {
+       Promise.all([Promise.resolve().then((() => OW(683))), OW.e(218).then((() => OW(35078)))]).catch((WW => {
+         console.warn(`${XW} the counts' modules didn't load ahead`, WW)
+       }))
+ ... (29 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L945-L951` → after: `L1194-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1194-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1194-L1205) · [Before (L945-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L945-L951)

```diff
-       trim() {
-         return new cB({
-           ...this._def,
-           checks: [...this._def.checks, {
-             kind: "trim"
-           }]
-         })
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

#### 43. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L953-L959` → after: `L1207-L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1207-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1207-L1223) · [Before (L953-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L953-L959)

```diff
-       toLowerCase() {
-         return new cB({
-           ...this._def,
-           checks: [...this._def.checks, {
-             kind: "toLowerCase"
-           }]
-         })
+     }
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
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L961-L966` → after: `L1225-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1225-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1225-L1277) · [Before (L961-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L961-L966)

```diff
-       toUpperCase() {
-         return new cB({
-           ...this._def,
-           checks: [...this._def.checks, {
-             kind: "toUpperCase"
-           }]
+     }
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
+ ... (37 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L969-L999` → after: `L1280-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1280-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1280-L1297) · [Before (L969-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L969-L999)

```diff
-       get isDatetime() {
-         return !!this._def.checks.find((BB => "datetime" === BB.kind))
-       }
-       get isEmail() {
-         return !!this._def.checks.find((BB => "email" === BB.kind))
-       }
-       get isURL() {
-         return !!this._def.checks.find((BB => "url" === BB.kind))
-       }
-       get isEmoji() {
-         return !!this._def.checks.find((BB => "emoji" === BB.kind))
-       }
-       get isUUID() {
-         return !!this._def.checks.find((BB => "uuid" === BB.kind))
-       }
-       get isCUID() {
- ... (15 more removed lines; see GitHub link above)
+     }
+ 
+     function zi(WW) {
+       if (WW !== xW.D.AudioUnknownSound && WW !== xW.D.PresentationClipUnplayable) return !1;
+       const {
+         gameNameWithVariation: iW,
+         lobbyName: OW
+       } = (0, PW.d)();
+       return null !== iW && (!!(0, mW.i)(iW) || WW === xW.D.AudioUnknownSound && (0, EW.g)(iW, OW))
+     }
+ 
+     function Fi(WW, iW) {
+       if (WW !== xW.D.RenderDeviceLost) return;
+       const OW = iW >>> xW.K.LINKS_IN_FLIGHT_SHIFT & xW.K.LINKS_IN_FLIGHT_MAX,
+         mW = iW >>> xW.K.OLDEST_LINK_SHIFT & xW.K.OLDEST_LINK_MAX;
+       return {
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1001-L1004` → after: `L1299-L1376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1299-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1299-L1376) · [Before (L1001-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1001-L1004)

```diff
-       get maxLength() {
-         let BB = null;
-         for (const OB of this._def.checks) "max" === OB.kind && (null === BB || OB.value < BB) && (BB = OB.value);
-         return BB
+     }
+ 
+     function Qi(WW, iW) {
+       return WW === xW.D.RenderDeviceLost && 0 !== (iW & xW.K.RESTORE_UNHELD) ? "restoreUnheld" : void 0
+     }
+ 
+     function WO(WW, iW) {
+       return WW === xW.D.JobsHeapGaveUp ? "meshHeap" : (0, lW.l)(WW, iW) ? "linksReadAfterView" : (0, lW.e)(WW, iW) ? "linkCensus" : "coreError"
+     }
+ 
+     function iO(WW) {
+       return (0, VW.l)(WW instanceof pW.e ? WW.trap : WW, nW.H, nW.eb)
+     }
+ 
+     function OO(WW, iW, OW) {
+       return EO(WW, iW, OW, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, !0)
+ ... (62 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1008-L1012` → after: `L1380-L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1380-L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1380-L1399) · [Before (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1008-L1012)

```diff
-     function hB(BB, OB) {
-       const GB = (BB.toString().split(".")[1] || "").length,
-         YB = (OB.toString().split(".")[1] || "").length,
-         DB = GB > YB ? GB : YB;
-       return parseInt(BB.toFixed(DB).replace(".", "")) % parseInt(OB.toFixed(DB).replace(".", "")) / Math.pow(10, DB)
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
+         }
+       })
+     }
+     const wO = 9;
+ 
+ ... (4 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1014-L1035` → after: `L1401-L1426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1401-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1401-L1426) · [Before (L1014-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1014-L1035)

```diff
-     cB.create = BB => {
-       var OB;
-       return new cB({
-         checks: [],
-         typeName: FO.ZodString,
-         coerce: null !== (OB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== OB && OB,
-         ...mB(BB)
-       })
-     };
-     class aB extends IB {
-       constructor() {
-         super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
-       }
-       _parse(BB) {
-         this._def.coerce && (BB.data = Number(BB.data));
-         if (this._getType(BB) !== MB.number) {
- ... (6 more removed lines; see GitHub link above)
+ 
+     function ZO(WW) {
+       const {
+         step: iW,
+         outcome: OW,
+         tries: mW,
+         detail: EW,
+         details: NW = {}
+       } = WW, PW = "load" === WW.step ? {
+         stage: WW.stage,
+         ...WW.oom ? {
+           oom: "true"
+         } : {}
+       } : {};
+       return gi({
+         kind: "recovered",
+ ... (10 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1037-L1074` → after: `L1428-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1428-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1428-L1439) · [Before (L1037-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1037-L1074)

```diff
-         let OB;
-         const GB = new WB;
-         for (const YB of this._def.checks)
-           if ("int" === YB.kind) jB.isInteger(BB.data) || (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
-             code: zB.invalid_type,
-             expected: "integer",
-             received: "float",
-             message: YB.message
-           }), GB.ap());
-           else if ("min" === YB.kind) {
-           (YB.inclusive ? BB.data < YB.value : BB.data <= YB.value) && (OB = this._getOrReturnCtx(BB, OB), RB(OB, {
-             code: zB.too_small,
-             minimum: YB.value,
-             type: "number",
-             inclusive: YB.inclusive,
-             exact: !1,
- ... (22 more removed lines; see GitHub link above)
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

#### 50. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1076-L1188` → after: `L1441-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1441-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1441-L1455) · [Before (L1076-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1076-L1188)

```diff
-       }
-       gte(BB, OB) {
-         return this.setLimit("min", BB, !0, dB.toString(OB))
-       }
-       gt(BB, OB) {
-         return this.setLimit("min", BB, !1, dB.toString(OB))
-       }
-       lte(BB, OB) {
-         return this.setLimit("max", BB, !0, dB.toString(OB))
-       }
-       lt(BB, OB) {
-         return this.setLimit("max", BB, !1, dB.toString(OB))
-       }
-       setLimit(BB, OB, GB, YB) {
-         return new aB({
-           ...this._def,
- ... (97 more removed lines; see GitHub link above)
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

#### 51. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1190-L1191` → after: `L1457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1457) · [Before (L1190-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1190-L1191)

```diff
-         return Number.isFinite(OB) && Number.isFinite(BB)
-       }
+       })
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1193-L1199` → after: `L1459-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1459-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1459-L1473) · [Before (L1193-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1193-L1199)

```diff
-     aB.create = BB => new aB({
-       checks: [],
-       typeName: FO.ZodNumber,
-       coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
-       ...mB(BB)
-     });
-     class eB extends IB {
+ 
+     function bO() {
+       const {
+         code: WW,
+         message: iW
+       } = DW.e;
+       return gi({
+         kind: "unstreamedLoad",
+         code: WW,
+         site: qW,
+         fatal: !1,
+         message: iW
+       })
+     }
+     class jO extends Error {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1201-L1318` → after: `L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1475) · [Before (L1201-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1201-L1318)

```diff
-         super(...arguments), this.min = this.gte, this.max = this.lte
-       }
-       _parse(BB) {
-         this._def.coerce && (BB.data = BigInt(BB.data));
-         if (this._getType(BB) !== MB.bigint) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.bigint,
-             received: OB.parsedType
-           }), AB
-         }
-         let OB;
-         const GB = new WB;
-         for (const YB of this._def.checks)
-           if ("min" === YB.kind) {
- ... (102 more removed lines; see GitHub link above)
+         super("the shell's page can't run the Turnstile check: join from /play"), this.name = "TurnstilePageError"
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1321` → after: `L1478-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1478-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1478-L1510) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1321)

```diff
-     eB.create = BB => {
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
+         } : void 0,
+ ... (17 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1323-L1327` → after: `L1512-L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1512-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1512-L1530) · [Before (L1323-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1323-L1327)

```diff
-       return new eB({
-         checks: [],
-         typeName: FO.ZodBigInt,
-         coerce: null !== (OB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== OB && OB,
-         ...mB(BB)
+       const EW = (0, hW.e)(WW),
+         NW = {
+           cause: (WW instanceof JW.c || WW instanceof JW.n) && null !== (mW = WW.serverText) && void 0 !== mW ? mW : "",
+           sinceJoinStart: (0, MW.e)(OW.sinceJoinStartMs),
+           game: OW.game,
+           ...(0, MW.j)(),
+           wasmBuild: iW.wasm,
+           clientVersion: iW.client
+         };
+       return gi({
+         kind: "pageJoin",
+         code: UO(WW),
+         site: RW,
+         fatal: !1,
+         message: (0, fW.m)(WW),
+         details: NW,
+ ... (3 more added lines; see GitHub link above)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1329-L1341` → after: `L1532-L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1532-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1532-L1548) · [Before (L1329-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1329-L1341)

```diff
-     };
-     class TB extends IB {
-       _parse(BB) {
-         this._def.coerce && (BB.data = Boolean(BB.data));
-         if (this._getType(BB) !== MB.boolean) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.boolean,
-             received: OB.parsedType
-           }), AB
-         }
-         return SB(BB.data)
+     }
+     const MO = {
+       renewed: {
+         code: "CORE-seatRenewed",
+         message: "the early seat outlasted the room's hold, so the join reserved another"
+       },
+       lost: {
+         code: "CORE-seatAbandoned",
+         message: "the early seat's request failed before the join, so the join reserved another"
+       },
+       rematched: {
+         code: "CORE-seatAbandoned",
+         message: "the early seat was for a place matchmaking replaced"
+       },
+       abandoned: {
+         code: "CORE-seatAbandoned",
+ ... (1 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1344-L1384` → after: `L1577-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1577-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1577-L1759) · [Before (L1344-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1344-L1384)

```diff
-     TB.create = BB => new TB({
-       typeName: FO.ZodBoolean,
-       coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
-       ...mB(BB)
-     });
-     class bB extends IB {
-       _parse(BB) {
-         this._def.coerce && (BB.data = new Date(BB.data));
-         if (this._getType(BB) !== MB.date) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.date,
-             received: OB.parsedType
-           }), AB
-         }
- ... (25 more removed lines; see GitHub link above)
+ 
+     function SO(WW, iW, OW) {
+       var mW;
+       let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null !== (mW = WW.name) && void 0 !== mW ? mW : String(WW.code);
+       const NW = {
+           closeCode: String(WW.code),
+           recognised: String(null !== WW.name),
+           closeReason: OW.closeReason,
+           sinceJoined: (0, MW.e)(OW.sinceJoinedMs),
+           game: OW.game,
+           ...(0, MW.j)(),
+           wasmBuild: iW.wasm,
+           clientVersion: iW.client
+         },
+         PW = null === WW.name && !(0, MW.f)(WW.code);
+       return gi({
+ ... (167 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1386-L1416` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1761) · [Before (L1386-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1386-L1416)

```diff
-       }
-       _addCheck(BB) {
-         return new bB({
-           ...this._def,
-           checks: [...this._def.checks, BB]
-         })
-       }
-       min(BB, OB) {
-         return this._addCheck({
-           kind: "min",
-           value: BB.getTime(),
-           message: dB.toString(OB)
-         })
-       }
-       max(BB, OB) {
-         return this._addCheck({
- ... (15 more removed lines; see GitHub link above)
+       })
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1418-L1432` → after: `L1763-L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1763-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1763-L1825) · [Before (L1418-L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1418-L1432)

```diff
-     bB.create = BB => new bB({
-       checks: [],
-       coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
-       typeName: FO.ZodDate,
-       ...mB(BB)
-     });
-     class CB extends IB {
-       _parse(BB) {
-         if (this._getType(BB) !== MB.symbol) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.symbol,
-             received: OB.parsedType
-           }), AB
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
+         fatal: !1,
+         message: NW,
+ ... (47 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1434` → after: `L1827-L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1827-L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1827-L1839) · [Before (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1434)

```diff
-         return SB(BB.data)
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

#### 61. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1437-L1449` → after: `L1842-L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1842-L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1842-L1909) · [Before (L1437-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1437-L1449)

```diff
-     CB.create = BB => new CB({
-       typeName: FO.ZodSymbol,
-       ...mB(BB)
-     });
-     class HB extends IB {
-       _parse(BB) {
-         if (this._getType(BB) !== MB.undefined) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.undefined,
-             received: OB.parsedType
-           }), AB
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
+ ... (52 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1451-L1452` → after: `L1911-L1956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1911-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1911-L1956) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1451-L1452)

```diff
-         return SB(BB.data)
-       }
+       })
+     }
+ 
+     function BO(WW, iW, OW) {
+       return gi({
+         kind: "recovered",
+         code: "CORE-replayFault",
+         site: WW,
+         fatal: !1,
+         message: `the replay's ${WW} failed`,
+         details: {
+           wasmBuild: OW.wasm,
+           clientVersion: OW.client
+         },
+         error: iW
+       })
+ ... (30 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1454-L1469` → after: `L1958-L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1958-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1958-L1960) · [Before (L1454-L1469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1454-L1469)

```diff
-     HB.create = BB => new HB({
-       typeName: FO.ZodUndefined,
-       ...mB(BB)
-     });
-     class vB extends IB {
-       _parse(BB) {
-         if (this._getType(BB) !== MB.null) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.null,
-             received: OB.parsedType
-           }), AB
-         }
-         return SB(BB.data)
-       }
+ 
+     function IO(WW, iW) {
+       return null === WW ? "unbound" : (0, UW.h)(iW - WW)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1471-L1481` → after: `L1962-L1965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1962-L1965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1962-L1965) · [Before (L1471-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1471-L1481)

```diff
-     vB.create = BB => new vB({
-       typeName: FO.ZodNull,
-       ...mB(BB)
-     });
-     class sB extends IB {
-       constructor() {
-         super(...arguments), this._any = !0
-       }
-       _parse(BB) {
-         return SB(BB.data)
-       }
+ 
+     function aO(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
+       return [0 !== (WW & xW.K.RESTORE_UNHELD) ? "restore unheld" : "", 0 !== (WW & xW.K.LINKS_RUNNING) ? "links running" : "", `frames ${(0,AW.d)(GO(WW&xW.K.FRAMES))}`, `up ${(0,AW.d)(IO(iW,OW))}`].filter(Boolean).join(", ")
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1483-L1493` → after: `L1967-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1967-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1967-L1970) · [Before (L1483-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1483-L1493)

```diff
-     sB.create = BB => new sB({
-       typeName: FO.ZodAny,
-       ...mB(BB)
-     });
-     class xB extends IB {
-       constructor() {
-         super(...arguments), this._unknown = !0
-       }
-       _parse(BB) {
-         return SB(BB.data)
-       }
+ 
+     function rO(WW, iW, OW) {
+       const mW = "lost" === iW && void 0 !== OW ? ` (${OW})` : "";
+       return `the ${WW} ${RO[iW]}${mW}`
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1495-L1521` → after: `L1972-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L1972-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L1972-L2003) · [Before (L1495-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1495-L1521)

```diff
-     xB.create = BB => new xB({
-       typeName: FO.ZodUnknown,
-       ...mB(BB)
-     });
-     class tB extends IB {
-       _parse(BB) {
-         const OB = this._getOrReturnCtx(BB);
-         return RB(OB, {
-           code: zB.invalid_type,
-           expected: MB.never,
-           received: OB.parsedType
-         }), AB
-       }
-     }
-     tB.create = BB => new tB({
-       typeName: FO.ZodNever,
- ... (11 more removed lines; see GitHub link above)
+     const zO = {
+       adapter: null,
+       boundAtMs: null,
+       indirectHangs: null,
+       restoresSkipped: null
+     };
+ 
+     function FO(WW, iW, OW, mW) {
+       var EW;
+       let {
+         restoreLost: NW = !1,
+         adapterRemembered: PW = !1
+       } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, LW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : performance.now();
+       const cW = null === OW || void 0 === OW ? void 0 : OW.message,
+         wW = "pipeline_failed" === iW ? iW : OW instanceof SW.g ? "timeout" : (0, UW.p)("frames_refused" === iW, "string" === typeof cW ? cW : ""),
+         tW = null === mW.boundAtMs ? "unbound" : `up${(0,UW.e)(LW-mW.boundAtMs)}`,
+ ... (16 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1526-L1604` → after: `L2007-L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2007-L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2007-L2012) · [Before (L1526-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1526-L1604)

```diff
-     BO.create = BB => new BO({
-       typeName: FO.ZodVoid,
-       ...mB(BB)
-     });
-     class OO extends IB {
-       _parse(BB) {
-         const {
-           ctx: OB,
-           status: GB
-         } = this._processInputParams(BB), YB = this._def;
-         if (OB.parsedType !== MB.array) return RB(OB, {
-           code: zB.invalid_type,
-           expected: MB.array,
-           received: OB.parsedType
-         }), AB;
-         if (null !== YB.exactLength) {
- ... (63 more removed lines; see GitHub link above)
+ 
+     function QO(WW, iW, OW) {
+       const {
+         count: mW
+       } = FO("webgpu", WW, iW, OW);
+       void 0 !== mW && fi(mW)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1608-L1918` → after: `L2021-L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2021-L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2021-L2022) · [Before (L1608-L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1608-L1918)

```diff
-       if (BB instanceof YO) {
-         const OB = {};
-         for (const GB in BB.shape) {
-           const YB = BB.shape[GB];
-           OB[GB] = VO.create(GO(YB))
-         }
-         return new YO({
-           ...BB._def,
-           shape: () => OB
-         })
-       }
-       return BB instanceof OO ? new OO({
-         ...BB._def,
-         type: GO(BB.element)
-       }) : BB instanceof VO ? VO.create(GO(BB.unwrap())) : BB instanceof SO ? SO.create(GO(BB.unwrap())) : BB instanceof JO ? JO.create(BB.items.map((BB => GO(BB)))) : BB
-     }
- ... (295 more removed lines; see GitHub link above)
+       var iW;
+       return null !== (iW = WW instanceof Error ? WW.reason : void 0) && void 0 !== iW ? iW : ""
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1920-L1927` → after: `L2024-L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2024-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2024-L2074) · [Before (L1920-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1920-L1927)

```diff
-     DO.create = (BB, OB) => new DO({
-       options: BB,
-       typeName: FO.ZodUnion,
-       ...mB(OB)
-     });
-     const QO = BB => BB instanceof pO ? QO(BB.schema) : BB instanceof AO ? QO(BB.innerType()) : BB instanceof qO ? [BB.value] : BB instanceof NO ? BB.options : BB instanceof RO ? Object.keys(BB.enum) : BB instanceof nO ? QO(BB._def.innerType) : BB instanceof HB ? [void 0] : BB in … [truncated]
-     class oO extends IB {
-       _parse(BB) {
+ 
+     function Om(WW, iW, mW) {
+       var EW, NW, PW, LW, wW;
+       let {
+         from: tW,
+         cause: ZW = "lost",
+         restoreLost: xW = !1,
+         adapterRemembered: bW = !1,
+         error: jW,
+         context: sW = zO,
+         session: MW = Wm
+       } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, KW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : performance.now();
+       const {
+         detail: SW,
+         count: YW
+       } = FO(WW, ZW, jW, sW, {
+ ... (35 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1929-L1979` → after: `L2076-L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2076-L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2076-L2079) · [Before (L1929-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1929-L1979)

```diff
-           ctx: OB
-         } = this._processInputParams(BB);
-         if (OB.parsedType !== MB.object) return RB(OB, {
-           code: zB.invalid_type,
-           expected: MB.object,
-           received: OB.parsedType
-         }), AB;
-         const GB = this.discriminator,
-           YB = OB.data[GB],
-           DB = this.optionsMap.get(YB);
-         return DB ? OB.common.async ? DB._parseAsync({
-           data: OB.data,
-           path: OB.path,
-           parent: OB
-         }) : DB._parseSync({
-           data: OB.data,
- ... (35 more removed lines; see GitHub link above)
+           logError: iW
+         } = await Promise.resolve().then((() => OW(3960))), mW = `${UW.c["webgpu"===WW?"WebGPU":"WebGL2"]}\n Error: ${SW}`;
+         iW("warning", mW), iW("error", mW)
+       })), hW
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L1983-L2010` → after: `L2083-L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2083-L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2083-L2090) · [Before (L1983-L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L1983-L2010)

```diff
-       const GB = PB(BB),
-         YB = PB(OB);
-       if (BB === OB) return {
-         valid: !0,
-         data: BB
-       };
-       if (GB === MB.object && YB === MB.object) {
-         const GB = jB.objectKeys(OB),
-           YB = jB.objectKeys(BB).filter((BB => -1 !== GB.indexOf(BB))),
-           DB = {
-             ...BB,
-             ...OB
-           };
-         for (const QB of YB) {
-           const GB = jO(BB[QB], OB[QB]);
-           if (!GB.valid) return {
- ... (12 more removed lines; see GitHub link above)
+       var OW, mW;
+       const EW = null === WW.name ? "TEXTURE-sources" : null === WW.url ? "TEXTURE-nourl" : WW.error instanceof eW.b ? `TEXTURE-${WW.error.status}` : "TEXTURE-network",
+         NW = null === WW.name ? "terrain textures could not load" : `terrain texture ${WW.name} could not load`,
+         PW = {
+           texture: null !== (OW = WW.name) && void 0 !== OW ? OW : "",
+           url: null !== (mW = WW.url) && void 0 !== mW ? mW : "",
+           wasmBuild: iW.wasm,
+           clientVersion: iW.client
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2012-L2030` → after: `L2092-L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2092-L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2092-L2100) · [Before (L2012-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2012-L2030)

```diff
-         const GB = [];
-         for (let YB = 0; YB < BB.length; YB++) {
-           const DB = jO(BB[YB], OB[YB]);
-           if (!DB.valid) return {
-             valid: !1
-           };
-           GB.push(DB.data)
-         }
-         return {
-           valid: !0,
-           data: GB
-         }
-       }
-       return GB === MB.date && YB === MB.date && +BB === +OB ? {
-         valid: !0,
-         data: BB
- ... (3 more removed lines; see GitHub link above)
+       return gi({
+         kind: "terrainTexture",
+         code: EW,
+         site: YW.C,
+         fatal: !1,
+         message: NW,
+         details: PW,
+         error: WW.error
+       })
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2032-L2066` → after: `L2102-L2111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2102-L2111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2102-L2111) · [Before (L2032-L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2032-L2066)

```diff
-     class yO extends IB {
-       _parse(BB) {
-         const {
-           status: OB,
-           ctx: GB
-         } = this._processInputParams(BB), YB = (BB, YB) => {
-           if (nB(BB) || nB(YB)) return AB;
-           const DB = jO(BB.value, YB.value);
-           return DB.valid ? ((UB(BB) || UB(YB)) && OB.ap(), {
-             status: OB.value,
-             value: DB.data
-           }) : (RB(GB, {
-             code: zB.invalid_intersection_types
-           }), AB)
-         };
-         return GB.common.async ? Promise.all([this._def.left._parseAsync({
- ... (19 more removed lines; see GitHub link above)
+     const Em = {
+       previewAnimations: {
+         site: FW,
+         prefix: "ANIMS",
+         name: "the previews' animations"
+       },
+       builtInAnimations: {
+         site: Wi,
+         prefix: "BUILTIN",
+         name: "the built-in animations"
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2069-L2073` → after: `L2160-L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2160-L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2160-L2166) · [Before (L2069-L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2069-L2073)

```diff
-     yO.create = (BB, OB, GB) => new yO({
-       left: BB,
-       right: OB,
-       typeName: FO.ZodIntersection,
-       ...mB(GB)
+   },
+   42301: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => LW,
+       f: () => EW,
+       j: () => PW,
+       m: () => cW
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2075-L2114` → after: `L2168-L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2168-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2168-L2174) · [Before (L2075-L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2075-L2114)

```diff
-     class JO extends IB {
-       _parse(BB) {
-         const {
-           status: OB,
-           ctx: GB
-         } = this._processInputParams(BB);
-         if (GB.parsedType !== MB.array) return RB(GB, {
-           code: zB.invalid_type,
-           expected: MB.array,
-           received: GB.parsedType
-         }), AB;
-         if (GB.data.length < this._def.items.length) return RB(GB, {
-           code: zB.too_small,
-           minimum: this._def.items.length,
-           inclusive: !0,
-           exact: !1,
- ... (24 more removed lines; see GitHub link above)
+     var mW = OW(5551);
+     const EW = 3e4,
+       NW = 900;
+ 
+     function PW(WW, iW) {
+       const OW = null === WW ? 0 : iW - WW;
+       return OW <= NW ? OW : 0
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2116-L2152` → after: `L2176-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2176-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2176-L2178) · [Before (L2116-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2116-L2152)

```diff
-     JO.create = (BB, OB) => {
-       if (!Array.isArray(BB)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
-       return new JO({
-         items: BB,
-         typeName: FO.ZodTuple,
-         rest: null,
-         ...mB(OB)
-       })
-     };
-     class MO extends IB {
-       get keySchema() {
-         return this._def.keyType
-       }
-       get valueSchema() {
-         return this._def.valueType
-       }
- ... (21 more removed lines; see GitHub link above)
+     class LW {
+       constructor(WW) {
+         this.wZ = WW, this.waitedMs = 0, this.lastMs = null
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2154-L2165` → after: `L2180-L2181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2180-L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2180-L2181) · [Before (L2154-L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2154-L2165)

```diff
-       static create(BB, OB, GB) {
-         return new MO(OB instanceof IB ? {
-           keyType: BB,
-           valueType: OB,
-           typeName: FO.ZodRecord,
-           ...mB(GB)
-         } : {
-           keyType: cB.create(),
-           valueType: BB,
-           typeName: FO.ZodRecord,
-           ...mB(OB)
-         })
+       frame(WW, iW) {
+         return !!iW || (this.waitedMs += PW(this.lastMs, WW), this.lastMs = WW, !(this.waitedMs < EW) && (this.wZ(), !0))
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2168-L2221` → after: `L2184-L2186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2184-L2186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2184-L2186) · [Before (L2168-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2168-L2221)

```diff
-     class PO extends IB {
-       get keySchema() {
-         return this._def.keyType
-       }
-       get valueSchema() {
-         return this._def.valueType
-       }
-       _parse(BB) {
-         const {
-           status: OB,
-           ctx: GB
-         } = this._processInputParams(BB);
-         if (GB.parsedType !== MB.map) return RB(GB, {
-           code: zB.invalid_type,
-           expected: MB.map,
-           received: GB.parsedType
- ... (38 more removed lines; see GitHub link above)
+ 
+     function cW(WW, iW) {
+       return 0 === (WW & mW.Y.ChunkRequested) ? "no_chunk_request" : 0 === (WW & mW.Y.ChunkStored) ? "chunk_not_stored" : 0 === (WW & mW.Y.MeshLanded) ? "not_meshed" : null === iW ? "no_frame_drawn" : 0 === iW.terrainParts ? "no_terrain_parts" : iW.terrainCompiling > 0 ? "terrain … [truncated]
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2223-L2227` → after: `L2188-L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2188-L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2188-L2193) · [Before (L2223-L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2223-L2227)

```diff
-     PO.create = (BB, OB, GB) => new PO({
-       valueType: OB,
-       keyType: BB,
-       typeName: FO.ZodMap,
-       ...mB(GB)
+   },
+   42292: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => cW,
+       f: () => PW,
+       g: () => tW
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2229-L2295` → after: `L2195-L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2195-L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2195-L2200) · [Before (L2229-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2229-L2295)

```diff
-     class zO extends IB {
-       _parse(BB) {
-         const {
-           status: OB,
-           ctx: GB
-         } = this._processInputParams(BB);
-         if (GB.parsedType !== MB.set) return RB(GB, {
-           code: zB.invalid_type,
-           expected: MB.set,
-           received: GB.parsedType
-         }), AB;
-         const YB = this._def;
-         null !== YB.minSize && GB.data.size < YB.minSize.value && (RB(GB, {
-           code: zB.too_small,
-           minimum: YB.minSize.value,
-           type: "set",
- ... (51 more removed lines; see GitHub link above)
+     var mW = OW(172),
+       EW = OW(42301);
+     const NW = ["view", "startup", "skipped"];
+ 
+     function PW(WW) {
+       return 0 === WW.clientWidth || 0 === WW.clientHeight || 0 === WW.width || 0 === WW.height
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2330-L2342` → after: `L2203-L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2203-L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2203-L2253) · [Before (L2330-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2330-L2342)

```diff
-         function YB(BB, GB) {
-           return NB({
-             data: BB,
-             path: OB.path,
-             errorMaps: [OB.common.contextualErrorMap, OB.schemaErrorMap, ZB(), pB].filter((BB => !!BB)),
-             issueData: {
-               code: zB.invalid_return_type,
-               returnTypeError: GB
-             }
-           })
-         }
-         const DB = {
-             errorMap: OB.common.contextualErrorMap
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
+     }
+     class cW {
+       constructor(WW) {
+         this.gap = WW, this.chunkAtMs = null, this.lastFrameMs = null, this.drawnMs = 0, this.frames = 0, this.visibleFromMs = null, this.undrawn = {
+ ... (35 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2344-L2368` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2255) · [Before (L2344-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2344-L2368)

```diff
-           QB = OB.data;
-         if (this._def.returns instanceof WO) {
-           const BB = this;
-           return SB((async function() {
-             for (var OB = arguments.length, oB = new Array(OB), jB = 0; jB < OB; jB++) oB[jB] = arguments[jB];
-             const yB = new lB([]),
-               JB = await BB._def.args.parseAsync(oB, DB).catch((BB => {
-                 throw yB.addIssue(GB(oB, BB)), yB
-               })),
-               MB = await Reflect.apply(QB, this, JB);
-             return await BB._def.returns._def.type.parseAsync(MB, DB).catch((BB => {
-               throw yB.addIssue(YB(MB, BB)), yB
-             }))
-           }))
-         } {
-           const BB = this;
- ... (9 more removed lines; see GitHub link above)
+           page: OW
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2420-L2442` → after: `L2259-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2259-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2259-L2261) · [Before (L2420-L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2420-L2442)

```diff
-     pO.create = (BB, OB) => new pO({
-       getter: BB,
-       typeName: FO.ZodLazy,
-       ...mB(OB)
-     });
-     class qO extends IB {
-       _parse(BB) {
-         if (BB.data !== this._def.value) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             received: OB.data,
-             code: zB.invalid_literal,
-             expected: this._def.value
-           }), AB
-         }
-         return {
- ... (7 more removed lines; see GitHub link above)
+ 
+     function wW(WW) {
+       return WW < 5e3 ? "brief" : WW < 15e3 ? "short" : WW < 6e4 ? "long" : "very_long"
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2446-L2450` → after: `L2265-L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2265-L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2265-L2284) · [Before (L2446-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2446-L2450)

```diff
-       return new NO({
-         values: BB,
-         typeName: FO.ZodEnum,
-         ...mB(OB)
-       })
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
+       for (const [NW, LW] of cW) {
+         const WW = tW + NW + LW;
+ ... (4 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2452-L2455` → after: `L2286-L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2286-L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2286-L2297) · [Before (L2452-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2452-L2455)

```diff
-     qO.create = (BB, OB) => new qO({
-       value: BB,
-       typeName: FO.ZodLiteral,
-       ...mB(OB)
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
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2457-L2485` → after: `L2299-L2303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2299-L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2299-L2303) · [Before (L2457-L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2457-L2485)

```diff
-     class NO extends IB {
-       _parse(BB) {
-         if ("string" !== typeof BB.data) {
-           const OB = this._getOrReturnCtx(BB),
-             GB = this._def.values;
-           return RB(OB, {
-             expected: jB.joinValues(GB),
-             received: OB.parsedType,
-             code: zB.invalid_type
-           }), AB
-         }
-         if (-1 === this._def.values.indexOf(BB.data)) {
-           const OB = this._getOrReturnCtx(BB),
-             GB = this._def.values;
-           return RB(OB, {
-             received: OB.data,
- ... (13 more removed lines; see GitHub link above)
+     class mW extends Error {
+       constructor(WW) {
+         super(`the join's code did not load: ${WW instanceof Error?WW.message:String(WW)}`, {
+           cause: WW
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === WW || void 0 === WW ? void 0 : WW.request
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2487-L2490` → after: `L2305-L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2305-L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2305-L2316) · [Before (L2487-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2487-L2490)

```diff
-       get Values() {
-         const BB = {};
-         for (const OB of this._def.values) BB[OB] = OB;
-         return BB
+     }
+     let EW = null,
+       NW = null,
+       PW = null;
+     const LW = [];
+     let cW = null;
+ 
+     function wW(WW, iW) {
+       try {
+         WW(iW)
+       } catch (OW) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", OW)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2492-L2494` → after: `L2318-L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2318-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2318-L2331) · [Before (L2492-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2492-L2494)

```diff
-       get Enum() {
-         const BB = {};
-         for (const OB of this._def.values) BB[OB] = OB;
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

#### 89. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2497-L2528` → after: `L2344-L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2344-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2344-L2349) · [Before (L2497-L2528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2497-L2528)

```diff
-       extract(BB) {
-         return NO.create(BB)
-       }
-       exclude(BB) {
-         return NO.create(this.options.filter((OB => !BB.includes(OB))))
-       }
-     }
-     NO.create = ZO;
-     class RO extends IB {
-       _parse(BB) {
-         const OB = jB.getValidEnumValues(this._def.values),
-           GB = this._getOrReturnCtx(BB);
-         if (GB.parsedType !== MB.string && GB.parsedType !== MB.number) {
-           const BB = jB.objectValues(OB);
-           return RB(GB, {
-             expected: jB.joinValues(BB),
- ... (16 more removed lines; see GitHub link above)
+     }
+ 
+     function AW(WW, iW) {
+       NW = {
+         running: WW,
+         shell: iW
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2531-L2534` → after: `L2352-L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2352-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2352-L2374) · [Before (L2531-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2531-L2534)

```diff
-     RO.create = (BB, OB) => new RO({
-       values: BB,
-       typeName: FO.ZodNativeEnum,
-       ...mB(OB)
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

#### 91. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2536-L2559` → after: `L2376-L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2376-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2376-L2400) · [Before (L2536-L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2536-L2559)

```diff
-     class WO extends IB {
-       unwrap() {
-         return this._def.type
-       }
-       _parse(BB) {
-         const {
-           ctx: OB
-         } = this._processInputParams(BB);
-         if (OB.parsedType !== MB.promise && !1 === OB.common.async) return RB(OB, {
-           code: zB.invalid_type,
-           expected: MB.promise,
-           received: OB.parsedType
-         }), AB;
-         const GB = OB.parsedType === MB.promise ? OB.data : Promise.resolve(OB.data);
-         return SB(GB.then((BB => this._def.type.parseAsync(BB, {
-           path: OB.path,
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

#### 92. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2561-L2563` → after: `L2402-L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2402-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2402-L2413) · [Before (L2561-L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2561-L2563)

```diff
-     class AO extends IB {
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

#### 93. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2565-L2566` → after: `L2415-L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2415-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2415-L2421) · [Before (L2565-L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2565-L2566)

```diff
-       sourceType() {
-         return this._def.schema._def.typeName === FO.ZodEffects ? this._def.schema.sourceType() : this._def.schema
+     }
+     class wW extends Error {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+           mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         super(WW), this.stage = iW, this.code = OW, this.serverText = mW, this.socketOpened = EW, this.name = "JoinError"
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2568-L2665` → after: `L2423-L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2423-L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2423-L2426) · [Before (L2568-L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2568-L2665)

```diff
-       _parse(BB) {
-         const {
-           status: OB,
-           ctx: GB
-         } = this._processInputParams(BB), YB = this._def.effect || null, DB = {
-           addIssue: BB => {
-             RB(GB, BB), BB.fatal ? OB.abort() : OB.ap()
-           },
-           get path() {
-             return GB.path
-           }
-         };
-         if (DB.addIssue = DB.addIssue.bind(DB), "preprocess" === YB.type) {
-           const BB = YB.transform(GB.data, DB);
-           return GB.common.issues.length ? {
-             status: "ap",
- ... (82 more removed lines; see GitHub link above)
+     }
+     class tW extends Error {
+       constructor(WW) {
+         super(WW), this.final = !0, this.name = "ResumeRefusedError"
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2667-L2668` → after: `L2428-L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2428-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2428-L2433) · [Before (L2667-L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2667-L2668)

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

#### 96. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2671-L2678` → after: `L2436-L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2436-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2436-L2441) · [Before (L2671-L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2671-L2678)

```diff
-     VO.create = (BB, OB) => new VO({
-       innerType: BB,
-       typeName: FO.ZodOptional,
-       ...mB(OB)
-     });
-     class SO extends IB {
-       _parse(BB) {
-         return this._getType(BB) === MB.null ? SB(null) : this._def.innerType._parse(BB)
+     class xW extends Error {
+       constructor(WW, iW, OW) {
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         super(WW, {
+           cause: OW
+         }), this.networkLost = iW, this.httpStatus = mW, this.name = "SeatRequestError"
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2680-L2681` → after: `L2443-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2443-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2443-L2447) · [Before (L2680-L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2680-L2681)

```diff
-       unwrap() {
-         return this._def.innerType
+     }
+     class lW extends Error {
+       constructor(WW, iW) {
+         let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         super(WW), this.code = iW, this.serverText = OW, this.name = "MatchmakeError"
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2684-L2687` → after: `L2450-L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2450-L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2450-L2455) · [Before (L2684-L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2684-L2687)

```diff
-     SO.create = (BB, OB) => new SO({
-       innerType: BB,
-       typeName: FO.ZodNullable,
-       ...mB(OB)
+   },
+   42309: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => lW,
+       e: () => xW,
+       f: () => AW
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2689-L2702` → after: `L2457-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2457-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2457-L2472) · [Before (L2689-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2689-L2702)

```diff
-     class nO extends IB {
-       _parse(BB) {
-         const {
-           ctx: OB
-         } = this._processInputParams(BB);
-         let GB = OB.data;
-         return OB.parsedType === MB.undefined && (GB = this._def.defaultValue()), this._def.innerType._parse({
-           data: GB,
-           path: OB.path,
-           parent: OB
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

#### 100. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2705-L2709` → after: `L2487-L2493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2487-L2493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2487-L2493) · [Before (L2705-L2709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2705-L2709)

```diff
-     nO.create = (BB, OB) => new nO({
-       innerType: BB,
-       typeName: FO.ZodDefault,
-       defaultValue: "function" === typeof OB.default ? OB.default : () => OB.default,
-       ...mB(OB)
+   },
+   42330: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW,
+       c: () => wW,
+       f: () => lW,
+       h: () => ZW
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2711-L2744` → after: `L2495-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2495-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2495-L2505) · [Before (L2711-L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2711-L2744)

```diff
-     class UO extends IB {
-       _parse(BB) {
-         const {
-           ctx: OB
-         } = this._processInputParams(BB), GB = {
-           ...OB,
-           common: {
-             ...OB.common,
-             issues: []
-           }
-         }, YB = this._def.innerType._parse({
-           data: GB.data,
-           path: GB.path,
-           parent: {
-             ...GB
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

#### 102. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2746-L2747` → after: `L2507-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2507-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2507-L2510) · [Before (L2746-L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2746-L2747)

```diff
-       removeCatch() {
-         return this._def.innerType
+     }
+     class xW extends Error {
+       constructor() {
+         super(...arguments), this.name = "ModelPackRefusedError"
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2750-L2768` → after: `L2513-L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2513-L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2513-L2560) · [Before (L2750-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2750-L2768)

```diff
-     UO.create = (BB, OB) => new UO({
-       innerType: BB,
-       typeName: FO.ZodCatch,
-       catchValue: "function" === typeof OB.catch ? OB.catch : () => OB.catch,
-       ...mB(OB)
-     });
-     class fO extends IB {
-       _parse(BB) {
-         if (this._getType(BB) !== MB.nan) {
-           const OB = this._getOrReturnCtx(BB);
-           return RB(OB, {
-             code: zB.invalid_type,
-             expected: MB.nan,
-             received: OB.parsedType
-           }), AB
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

#### 104. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2771-L2778` → after: `L2584-L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2584-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2584-L2590) · [Before (L2771-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2771-L2778)

```diff
-     }
-     fO.create = BB => new fO({
-       typeName: FO.ZodNaN,
-       ...mB(BB)
-     });
-     const kO = Symbol("zod_brand");
-     class dO extends IB {
-       _parse(BB) {
+       taken(WW, iW) {
+         const OW = new Set,
+           mW = new Set;
+         for (const EW of Array.from(iW)) 0 === (EW & wW) ? OW.add(EW) : mW.add((EW & ~wW) >>> 0);
+         for (const [EW, NW] of this.written) NW.seq > WW || (this.written.delete(EW), OW.has(NW.seq) ? this.refusedFile(EW, NW) : this.takenFile(EW, NW, !NW.empty && !mW.has(NW.seq)))
+       }
+       takenFile(WW, iW, OW) {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2780-L2786` → after: `L2592-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2592-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2592-L2606) · [Before (L2780-L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2780-L2786)

```diff
-           ctx: OB
-         } = this._processInputParams(BB), GB = OB.data;
-         return this._def.type._parse({
-           data: GB,
-           path: OB.path,
-           parent: OB
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

#### 106. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2788-L2789` → after: `L2608-L2612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2608-L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2608-L2612) · [Before (L2788-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2788-L2789)

```diff
-       unwrap() {
-         return this._def.type
+       refusedFile(WW, iW) {
+         var OW, mW;
+         if (null === (OW = this.onTaken) || void 0 === OW || OW.call(this, WW, !1), this.refusedPack.set(WW, iW.url), this.pending.has(WW)) return void(null === (mW = this.onPackFileFailed) || void 0 === mW || mW.call(this, WW, AW(iW.url)));
+         const EW = this.kZ(WW, iW.attempt.ask);
+         EW.recheck = iW.attempt.recheck, this.afterRefusal(WW, EW, iW.url)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2791-L2824` → after: `L2614-L2620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2614-L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2614-L2620) · [Before (L2791-L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2791-L2824)

```diff
-     }
-     class KO extends IB {
-       _parse(BB) {
-         const {
-           status: OB,
-           ctx: GB
-         } = this._processInputParams(BB);
-         if (GB.common.async) {
-           return (async () => {
-             const BB = await this._def.in._parseAsync({
-               data: GB.data,
-               path: GB.path,
-               parent: GB
-             });
-             return "aborted" === BB.status ? AB : "ap" === BB.status ? (OB.ap(), VB(BB.value)) : this._def.out._parseAsync({
-               data: BB.value,
- ... (18 more removed lines; see GitHub link above)
+       async afterRefusal(WW, iW, OW) {
+         var mW;
+         let EW;
+         try {
+           EW = await this.wanted(WW)
+         } catch (NW) {
+           return void(this.pending.get(WW) === iW && this.giveUp(WW, iW, OW, NW))
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2827-L2832` → after: `L2624-L2634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2624-L2634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2624-L2634) · [Before (L2827-L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2827-L2832)

```diff
-       static create(BB, OB) {
-         return new KO({
-           in: BB,
-           out: OB,
-           typeName: FO.ZodPipeline
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

#### 109. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2834-L2838` → after: `L2636-L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2636-L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2636-L2644) · [Before (L2834-L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2834-L2838)

```diff
-     }
-     class uO extends IB {
-       _parse(BB) {
-         const OB = this._def.innerType._parse(BB);
-         return fB(OB) && (OB.value = Object.freeze(OB.value)), OB
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

#### 110. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2840-L2849` → after: `L2646-L2666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2646-L2666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2646-L2666) · [Before (L2840-L2849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2840-L2849)

```diff
-     }
-     uO.create = (BB, OB) => new uO({
-       innerType: BB,
-       typeName: FO.ZodReadonly,
-       ...mB(OB)
-     });
-     const mO = function(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-           GB = arguments.length > 2 ? arguments[2] : void 0;
-         return BB ? sB.create().superRefine(((YB, DB) => {
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

#### 111. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L2851-L3015` → after: `L2668-L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2668-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2668-L2690) · [Before (L2851-L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L2851-L3015)

```diff
-           if (!BB(YB)) {
-             const BB = "function" === typeof OB ? OB(YB) : "string" === typeof OB ? {
-                 message: OB
-               } : OB,
-               jB = null === (oB = null !== (QB = BB.fatal) && void 0 !== QB ? QB : GB) || void 0 === oB || oB,
-               yB = "string" === typeof BB ? {
-                 message: BB
-               } : BB;
-             DB.addIssue({
-               code: "custom",
-               ...yB,
-               fatal: jB
-             })
-           }
-         })) : sB.create()
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

#### 112. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3017-L3085` → after: `L2692-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2692-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2692-L2702) · [Before (L3017-L3085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3017-L3085)

```diff
-           return mO((OB => OB instanceof BB), OB)
-         },
-         intersection: tO,
-         lazy: QG,
-         literal: oG,
-         map: GG,
-         nan: gO,
-         nativeEnum: yG,
-         never: TO,
-         null: hO,
-         nullable: zG,
-         number: LO,
-         object: HO,
-         oboolean: () => XO().optional(),
-         onumber: () => LO().optional(),
-         optional: PG,
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

#### 113. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3087-L3099` → after: `L2704-L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2704-L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2704-L2759) · [Before (L3087-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3087-L3099)

```diff
- 
-         function lB(BB) {
-           pB(BB);
-           var OB = BB.length;
-           if (OB < 4 && mB(BB, DB) < 0) switch (OB) {
-             case 0:
-               return 0;
-             case 1:
-               return BB[0];
-             case 2:
-               return BB[0] + BB[1] * GB;
-             default:
-               return BB[0] + (BB[1] + BB[2] * GB) * GB
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

#### 114. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3104-L3107` → after: `L2765-L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2765-L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2765-L2767) · [Before (L3104-L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3104-L3107)

```diff
-         function pB(BB) {
-           for (var OB = BB.length; 0 === BB[--OB];);
-           BB.length = OB + 1
-         }
+     function AW(WW) {
+       return new xW(`presentation refused ${bW(WW)}`)
+     }
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3109-L3112` → after: `L2769-L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2769-L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2769-L2785) · [Before (L3109-L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3109-L3112)

```diff
-         function qB(BB) {
-           for (var OB = new Array(BB), GB = -1; ++GB < BB;) OB[GB] = 0;
-           return OB
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

#### 116. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3114-L3116` → after: `L2787-L2789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2787-L2789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2787-L2789) · [Before (L3114-L3116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3114-L3116)

```diff
-         function ZB(BB) {
-           return BB > 0 ? Math.floor(BB) : Math.ceil(BB)
-         }
+     function LW(WW) {
+       return WW.startsWith("data:")
+     }
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3118-L3127` → after: `L2791-L2814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2791-L2814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2791-L2814) · [Before (L3118-L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3118-L3127)

```diff
-         function NB(BB, OB) {
-           var YB, DB, QB = BB.length,
-             oB = OB.length,
-             jB = new Array(QB),
-             yB = 0,
-             JB = GB;
-           for (DB = 0; DB < oB; DB++) yB = (YB = BB[DB] + OB[DB] + yB) >= JB ? 1 : 0, jB[DB] = YB - yB * JB;
-           for (; DB < QB;) yB = (YB = BB[DB] + yB) === JB ? 1 : 0, jB[DB++] = YB - yB * JB;
-           return yB > 0 && jB.push(yB), jB
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

#### 118. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3129-L3131` → after: `L2816-L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2816-L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2816-L2841) · [Before (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3129-L3131)

```diff
-         function RB(BB, OB) {
-           return BB.length >= OB.length ? NB(BB, OB) : NB(OB, BB)
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

#### 119. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3133-L3140` → after: `L2843-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2843-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2843-L2851) · [Before (L3133-L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3133-L3140)

```diff
-         function WB(BB, OB) {
-           var YB, DB, QB = BB.length,
-             oB = new Array(QB),
-             jB = GB;
-           for (DB = 0; DB < QB; DB++) YB = BB[DB] - jB + OB, OB = Math.floor(YB / jB), oB[DB] = YB - OB * jB, OB += 1;
-           for (; OB > 0;) oB[DB++] = OB % jB, OB = Math.floor(OB / jB);
-           return oB
-         }
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

#### 120. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3142-L3158` → after: `L2853-L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2853-L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2853-L2855) · [Before (L3142-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3142-L3158)

```diff
-         function AB(BB, OB) {
-           var YB, DB, QB = BB.length,
-             oB = OB.length,
-             jB = new Array(QB),
-             yB = 0,
-             JB = GB;
-           for (YB = 0; YB < oB; YB++)(DB = BB[YB] - yB - OB[YB]) < 0 ? (DB += JB, yB = 1) : yB = 0, jB[YB] = DB;
-           for (YB = oB; YB < QB; YB++) {
-             if (!((DB = BB[YB] - yB) < 0)) {
-               jB[YB++] = DB;
-               break
-             }
-             DB += JB, jB[YB] = DB
-           }
-           for (; YB < QB; YB++) jB[YB] = BB[YB];
-           return pB(jB), jB
- ... (1 more removed lines; see GitHub link above)
+     function ZW(WW, iW) {
+       return tW(WW, [NW], iW)
+     }
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3160-L3167` → after: `L2857-L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2857-L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2857-L2859) · [Before (L3160-L3167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3160-L3167)

```diff
-         function VB(BB, OB, YB) {
-           var DB, QB, oB = BB.length,
-             jB = new Array(oB),
-             MB = -OB,
-             PB = GB;
-           for (DB = 0; DB < oB; DB++) QB = BB[DB] + MB, MB = Math.floor(QB / PB), QB %= PB, jB[DB] = QB < 0 ? QB + PB : QB;
-           return "number" === typeof(jB = lB(jB)) ? (YB && (jB = -jB), new JB(jB)) : new yB(jB, YB)
-         }
+     function xW(WW, iW) {
+       return tW(WW, [EW, LW], iW)
+     }
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3169-L3179` → after: `L2861-L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2861-L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2861-L2863) · [Before (L3169-L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3169-L3179)

```diff
-         function SB(BB, OB) {
-           var YB, DB, QB, oB, jB = BB.length,
-             yB = OB.length,
-             JB = qB(jB + yB),
-             MB = GB;
-           for (QB = 0; QB < jB; ++QB) {
-             oB = BB[QB];
-             for (var PB = 0; PB < yB; ++PB) YB = oB * OB[PB] + JB[QB + PB], DB = Math.floor(YB / MB), JB[QB + PB] = YB - DB * MB, JB[QB + PB + 1] += DB
-           }
-           return pB(JB), JB
-         }
+     function lW(WW, iW) {
+       return tW(WW, [EW, PW], iW)
+     }
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3181-L3189` → after: `L2865-L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2865-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2865-L2888) · [Before (L3181-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3181-L3189)

```diff
-         function nB(BB, OB) {
-           var YB, DB, QB = BB.length,
-             oB = new Array(QB),
-             jB = GB,
-             yB = 0;
-           for (DB = 0; DB < QB; DB++) YB = BB[DB] * OB + yB, yB = Math.floor(YB / jB), oB[DB] = YB - yB * jB;
-           for (; yB > 0;) oB[DB++] = yB % jB, yB = Math.floor(yB / jB);
-           return oB
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

#### 124. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3191-L3194` → after: `L2890-L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2890-L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2890-L2892) · [Before (L3191-L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3191-L3194)

```diff
-         function UB(BB, OB) {
-           for (var GB = []; OB-- > 0;) GB.push(0);
-           return GB.concat(BB)
-         }
+     function PW(WW) {
+       return NW.has(WW)
+     }
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3196-L3209` → after: `L2894-L2896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2894-L2896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2894-L2896) · [Before (L3196-L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3196-L3209)

```diff
-         function fB(BB, OB) {
-           var GB = Math.max(BB.length, OB.length);
-           if (GB <= 30) return SB(BB, OB);
-           GB = Math.ceil(GB / 2);
-           var YB = BB.slice(GB),
-             DB = BB.slice(0, GB),
-             QB = OB.slice(GB),
-             oB = OB.slice(0, GB),
-             jB = fB(DB, oB),
-             yB = fB(YB, QB),
-             JB = fB(RB(DB, YB), RB(oB, QB)),
-             MB = RB(RB(jB, UB(AB(AB(JB, jB), yB), GB)), UB(yB, 2 * GB));
-           return pB(MB), MB
-         }
+     function LW(WW, iW) {
+       NW.has(WW) || NW.set(WW, iW)
+     }
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3211-L3213` → after: `L2898-L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2898-L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2898-L2904) · [Before (L3211-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3211-L3213)

```diff
-         function kB(BB, OB, YB) {
-           return new yB(BB < GB ? nB(OB, BB) : SB(OB, zB(BB)), YB)
-         }
+     function cW(WW, iW) {
+       return !!(0, mW.i)(iW) && (LW(WW, iW), !0)
+     }
+     const wW = [
+       ["error", WW => WW.error],
+       ["unhandledrejection", WW => WW.reason]
+     ];
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3215-L3224` → after: `L2906-L2930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2906-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2906-L2930) · [Before (L3215-L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3215-L3224)

```diff
-         function dB(BB) {
-           var OB, YB, DB, QB, oB = BB.length,
-             jB = qB(oB + oB),
-             yB = GB;
-           for (DB = 0; DB < oB; DB++) {
-             YB = 0 - (QB = BB[DB]) * QB;
-             for (var JB = DB; JB < oB; JB++) OB = QB * BB[JB] * 2 + jB[DB + JB] + YB, YB = Math.floor(OB / yB), jB[DB + JB] = OB - YB * yB;
-             jB[DB + oB] = YB
-           }
-           return pB(jB), jB
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

#### 128. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3227-L3233` → after: `L2980-L2983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2980-L2983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2980-L2983) · [Before (L3227-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3227-L3233)

```diff
-         function KB(BB, OB) {
-           var YB, DB, QB, oB, jB = BB.length,
-             yB = qB(jB),
-             JB = GB;
-           for (QB = 0, YB = jB - 1; YB >= 0; --YB) QB = (oB = QB * JB + BB[YB]) - (DB = ZB(oB / OB)) * OB, yB[YB] = 0 | DB;
-           return [yB, 0 | QB]
-         }
+     function KW(WW) {
+       MW = WW
+     }
+     let SW = !1;
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3235-L3290` → after: `L2985-L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2985-L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2985-L2987) · [Before (L3235-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3235-L3290)

```diff
-         function uB(BB, OB) {
-           var YB, DB = sB(OB);
-           if (oB) return [new MB(BB.value / DB.value), new MB(BB.value % DB.value)];
-           var QB, PB = BB.value,
-             NB = DB.value;
-           if (0 === NB) throw new Error("Cannot divide by zero");
-           if (BB.isSmall) return DB.isSmall ? [new JB(ZB(PB / NB)), new JB(PB % NB)] : [jB[0], BB];
-           if (DB.isSmall) {
-             if (1 === NB) return [BB, jB[0]];
-             if (-1 == NB) return [BB.ep(), jB[0]];
-             var RB = Math.abs(NB);
-             if (RB < GB) {
-               QB = lB((YB = KB(PB, RB))[0]);
-               var WB = YB[1];
-               return BB.sign && (WB = -WB), "number" === typeof QB ? (BB.sign !== DB.sign && (QB = -QB), [new JB(QB), new JB(WB)]) : [new yB(QB, BB.sign !== DB.sign), new JB(WB)]
-             }
- ... (40 more removed lines; see GitHub link above)
+     function YW() {
+       SW = !0
+     }
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3292-L3297` → after: `L2989-L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2989-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2989-L2992) · [Before (L3292-L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3292-L3297)

```diff
-         function mB(BB, OB) {
-           if (BB.length !== OB.length) return BB.length > OB.length ? 1 : -1;
-           for (var GB = BB.length - 1; GB >= 0; GB--)
-             if (BB[GB] !== OB[GB]) return BB[GB] > OB[GB] ? 1 : -1;
-           return 0
-         }
+     function yW() {
+       return SW
+     }
+     let TW = !1;
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3299-L3302` → after: `L2994-L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2994-L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2994-L2996) · [Before (L3299-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3299-L3302)

```diff
-         function IB(BB) {
-           var OB = BB.abs();
-           return !OB.isUnit() && (!!(OB.equals(2) || OB.equals(3) || OB.equals(5)) || !(OB.isEven() || OB.isDivisibleBy(3) || OB.isDivisibleBy(5)) && (!!OB.lesser(49) || void 0))
-         }
+     function JW() {
+       TW = !0
+     }
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3304-L3561` → after: `L2998-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L2998-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L2998-L3000) · [Before (L3304-L3561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3304-L3561)

```diff
-         function FB(BB, GB) {
-           for (var YB, DB, QB, oB = BB.prev(), jB = oB, yB = 0; jB.isEven();) jB = jB.divide(2), yB++;
-           BB: for (DB = 0; DB < GB.length; DB++)
-             if (!BB.lesser(GB[DB]) && !(QB = OB(GB[DB]).modPow(jB, BB)).isUnit() && !QB.equals(oB)) {
-               for (YB = yB - 1; 0 != YB; YB--) {
-                 if ((QB = QB.square().mod(BB)).isUnit()) return !1;
-                 if (QB.equals(oB)) continue BB
-               }
-               return !1
-             }
-           return !0
-         }
-         yB.prototype = Object.create(jB.prototype), JB.prototype = Object.create(jB.prototype), MB.prototype = Object.create(jB.prototype), yB.prototype.add = function(BB) {
-           var OB = sB(BB);
-           if (this.sign !== OB.sign) return this.subtract(OB.ep());
-           var GB = this.value,
- ... (242 more removed lines; see GitHub link above)
+     function hW() {
+       return TW
+     }
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3563-L3565` → after: `L3002-L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3002-L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3002-L3005) · [Before (L3563-L3565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3563-L3565)

```diff
-         function rB(BB) {
-           return Math.abs(BB) <= GB
-         }
+     function HW() {
+       return MW
+     }
+     let nW = null;
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3567-L3605` → after: `L3007-L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3007-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3007-L3010) · [Before (L3567-L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3567-L3605)

```diff
-         function XB(BB, GB, YB) {
-           GB = sB(GB);
-           for (var DB = BB.isNegative(), QB = GB.isNegative(), oB = DB ? BB.not() : BB, jB = QB ? GB.not() : GB, yB = 0, JB = 0, MB = null, PB = null, zB = []; !oB.isZero() || !jB.isZero();) yB = (MB = uB(oB, gB))[1].toJSNumber(), DB && (yB = gB - 1 - yB), JB = (PB = uB(jB, gB))[ … [truncated]
-           for (var lB = 0 !== YB(DB ? 1 : 0, QB ? 1 : 0) ? OB(-1) : OB(0), pB = zB.length - 1; pB >= 0; pB -= 1) lB = lB.multiply(gB).add(OB(zB[pB]));
-           return lB
-         }
-         yB.prototype.shiftLeft = function(BB) {
-           var OB = sB(BB).toJSNumber();
-           if (!rB(OB)) throw new Error(String(OB) + " is too large for shifting.");
-           if (OB < 0) return this.shiftRight(-OB);
-           var GB = this;
-           if (GB.isZero()) return GB;
-           for (; OB >= LB;) GB = GB.multiply(gB), OB -= LB - 1;
-           return GB.multiply(iB[OB])
-         }, MB.prototype.shiftLeft = JB.prototype.shiftLeft = yB.prototype.shiftLeft, yB.prototype.shiftRight = function(BB) {
-           var OB, GB = sB(BB).toJSNumber();
- ... (23 more removed lines; see GitHub link above)
+     function uW(WW) {
+       nW = WW, (0, LW.c)(WW)
+     }
+     const oW = "wasmClientRenderLost";
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3607-L3611` → after: `L3012-L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3012-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3012-L3014) · [Before (L3607-L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3607-L3611)

```diff
-         function EB(BB) {
-           var OB = BB.value,
-             YB = "number" === typeof OB ? OB | wB : "bigint" === typeof OB ? OB | BigInt(wB) : OB[0] + OB[1] * GB | 1073758208;
-           return YB & -YB
-         }
+     function dW() {
+       cW.j.setItem(oW, !0)
+     }
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3613-L3631` → after: `L3016-L3018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3016-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3016-L3018) · [Before (L3613-L3631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3613-L3631)

```diff
-         function cB(BB, GB) {
-           if (GB.compareTo(BB) <= 0) {
-             var YB = cB(BB, GB.square(GB)),
-               DB = YB.p,
-               QB = YB.e,
-               oB = DB.multiply(GB);
-             return oB.compareTo(BB) <= 0 ? {
-               p: oB,
-               e: 2 * QB + 1
-             } : {
-               p: DB,
-               e: 2 * QB
-             }
-           }
-           return {
-             p: OB(1),
- ... (3 more removed lines; see GitHub link above)
+     function eW() {
+       return !0 === cW.j.getItem(oW)
+     }
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3633-L3635` → after: `L3020-L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3020-L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3020-L3022) · [Before (L3633-L3635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3633-L3635)

```diff
-         function hB(BB, OB) {
-           return BB = sB(BB), OB = sB(OB), BB.greater(OB) ? BB : OB
-         }
+     function vW() {
+       return nW
+     }
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3637-L3639` → after: `L3024-L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3024-L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3024-L3032) · [Before (L3637-L3639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3637-L3639)

```diff
-         function aB(BB, OB) {
-           return BB = sB(BB), OB = sB(OB), BB.lesser(OB) ? BB : OB
-         }
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

#### 139. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3641-L3685` → after: `L3034-L3036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3034-L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3034-L3036) · [Before (L3641-L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3641-L3685)

```diff
-         function eB(BB, OB) {
-           if (BB = sB(BB).abs(), OB = sB(OB).abs(), BB.equals(OB)) return BB;
-           if (BB.isZero()) return OB;
-           if (OB.isZero()) return BB;
-           for (var GB, YB, DB = jB[1]; BB.isEven() && OB.isEven();) GB = aB(EB(BB), EB(OB)), BB = BB.divide(GB), OB = OB.divide(GB), DB = DB.multiply(GB);
-           for (; BB.isEven();) BB = BB.divide(EB(BB));
-           do {
-             for (; OB.isEven();) OB = OB.divide(EB(OB));
-             BB.greater(OB) && (YB = OB, OB = BB, BB = YB), OB = OB.subtract(BB)
-           } while (!OB.isZero());
-           return DB.isUnit() ? BB : BB.multiply(DB)
-         }
-         yB.prototype.bitLength = function() {
-           var BB = this;
-           return BB.compareTo(OB(0)) < 0 && (BB = BB.ep().subtract(OB(1))), 0 === BB.compareTo(OB(0)) ? OB(0) : OB(cB(BB, OB(2)).e).add(OB(1))
-         }, MB.prototype.bitLength = JB.prototype.bitLength = yB.prototype.bitLength;
- ... (29 more removed lines; see GitHub link above)
+     function DW() {
+       return sW
+     }
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3687-L3692` → after: `L3038-L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3038-L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3038-L3043) · [Before (L3687-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3687-L3692)

```diff
-         function bB(BB, OB, GB) {
-           var YB, DB = jB[0],
-             QB = jB[1];
-           for (YB = BB.length - 1; YB >= 0; YB--) DB = DB.add(BB[YB].times(QB)), QB = QB.times(OB);
-           return GB ? DB.ep() : DB
-         }
+     function VW(WW) {
+       return WW ? WW.load() : Promise.resolve().then((function() {
+         var WW = new Error("Cannot find module '@bloxd/wasm/client'");
+         throw WW.code = "MODULE_NOT_FOUND", WW
+       })).then((WW => WW.bloxdWasmClient))
+     }
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3694-L3734` → after: `L3045-L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3045-L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3045-L3047) · [Before (L3694-L3734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3694-L3734)

```diff
-         function CB(BB, GB) {
-           if ((GB = OB(GB)).isZero()) {
-             if (BB.isZero()) return {
-               value: [0],
-               isNegative: !1
-             };
-             throw new Error("Cannot convert nonzero numbers to base 0.")
-           }
-           if (GB.equals(-1)) {
-             if (BB.isZero()) return {
-               value: [0],
-               isNegative: !1
-             };
-             if (BB.isNegative()) return {
-               value: [].concat.apply([], Array.apply(null, Array(-BB.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
-               isNegative: !1
- ... (25 more removed lines; see GitHub link above)
+     function pW(WW) {
+       cW.i.setItem(UW, WW)
+     }
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3736-L3743` → after: `L3049-L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3049-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3049-L3060) · [Before (L3736-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3736-L3743)

```diff
-         function HB(BB, OB, GB) {
-           var YB = CB(BB, OB);
-           return (YB.isNegative ? "-" : "") + YB.value.map((function(BB) {
-             return function(BB, OB) {
-               return BB < (OB = OB || QB).length ? OB[BB] : "<" + BB + ">"
-             }(BB, GB)
-           })).join("")
-         }
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

#### 143. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3745-L3767` → after: `L3062-L3067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3062-L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3062-L3067) · [Before (L3745-L3767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3745-L3767)

```diff
-         function vB(BB) {
-           if (PB(+BB)) {
-             var OB = +BB;
-             if (OB === ZB(OB)) return oB ? new MB(BigInt(OB)) : new JB(OB);
-             throw new Error("Invalid integer: " + BB)
-           }
-           var GB = "-" === BB[0];
-           GB && (BB = BB.slice(1));
-           var YB = BB.split(/e/i);
-           if (YB.length > 2) throw new Error("Invalid integer: " + YB.join("e"));
-           if (2 === YB.length) {
-             var DB = YB[1];
-             if ("+" === DB[0] && (DB = DB.slice(1)), (DB = +DB) !== ZB(DB) || !PB(DB)) throw new Error("Invalid integer: " + DB + " is not a valid exponent.");
-             var QB = YB[0],
-               jB = QB.indexOf(".");
-             if (jB >= 0 && (DB -= QB.length - jB - 1, QB = QB.slice(0, jB) + QB.slice(jB + 1)), DB < 0) throw new Error("Cannot include negative exponent part for integers");
- ... (7 more removed lines; see GitHub link above)
+     function XW() {
+       null === kW && null !== lW.g && "webgl" === fW(lW.g, !1) && (0, jW.b)()
+     }
+     let BW = null,
+       qW = null,
+       RW = null;
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3769-L3823` → after: `L3069-L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3069-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3069-L3086) · [Before (L3769-L3823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3769-L3823)

```diff
-         function sB(BB) {
-           return "number" === typeof BB ? function(BB) {
-             if (oB) return new MB(BigInt(BB));
-             if (PB(BB)) {
-               if (BB !== ZB(BB)) throw new Error(BB + " is not an integer.");
-               return new JB(BB)
-             }
-             return vB(BB.toString())
-           }(BB) : "string" === typeof BB ? vB(BB) : "bigint" === typeof BB ? new MB(BB) : BB
-         }
-         yB.prototype.toArray = function(BB) {
-           return CB(this, BB)
-         }, JB.prototype.toArray = function(BB) {
-           return CB(this, BB)
-         }, MB.prototype.toArray = function(BB) {
-           return CB(this, BB)
- ... (39 more removed lines; see GitHub link above)
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
+ ... (2 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3825-L3831` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3088) · [Before (L3825-L3831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3825-L3831)

```diff
-     function AG(BB, OB, GB) {
-       let YB = 0;
-       for (let DB = 0; DB < GB; DB++) {
-         const GB = BB[OB + DB];
-         if (void 0 === GB) break;
-         YB += GB * 16 ** DB
-       }
+     function IW() {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3835-L3840` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3092) · [Before (L3835-L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3835-L3840)

```diff
-     function VG(BB) {
-       const OB = [];
-       for (let GB = 0; GB < BB.length; GB++) {
-         let YB = Number(BB[GB]);
-         for (let BB = 0; YB || BB < OB.length; BB++) YB += 10 * (OB[BB] || 0), OB[BB] = YB % 16, YB = (YB - OB[BB]) / 16
-       }
+     function aW() {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3843-L3898` → after: `L3095-L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3095-L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3095-L3097) · [Before (L3843-L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3843-L3898)

```diff
-     class SG {
-       static fromString(BB) {
-         return new SG(function(BB) {
-           const OB = VG(BB),
-             GB = Array(4);
-           for (let YB = 0; YB < 4; YB++) GB[3 - YB] = AG(OB, 4 * YB, 4);
-           return GB
-         }(BB), BB)
-       }
-       static fromBit(BB) {
-         const OB = Array(4),
-           GB = Math.floor(BB / 16);
-         for (let YB = 0; YB < 4; YB++) OB[3 - YB] = YB === GB ? 1 << BB - 16 * GB : 0;
-         return new SG(OB)
-       }
-       constructor(BB, OB) {
- ... (40 more removed lines; see GitHub link above)
+     async function rW() {
+       const WW = null === kW ? null : await kW;
+       return null !== WW && (0, tW.r)(WW) && (kW = null, BW = null, qW = null, RW = null), gW()
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3900-L3908` → after: `L3099-L3103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3099-L3103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3099-L3103) · [Before (L3900-L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3900-L3908)

```diff
-     const nG = function() {
-       try {
-         return BigInt, !0
-       } catch (BB) {
-         return !1
-       }
-     }();
-     nG && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
-       return this.toString()
+   },
+   42362: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => cW,
+       g: () => wW
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3910-L3986` → after: `L3105-L3123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3105-L3123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3105-L3123) · [Before (L3910-L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3910-L3986)

```diff
-     const UG = {},
-       fG = nG ? function(BB) {
-         return BigInt(BB)
-       } : function(BB) {
-         return BB instanceof SG ? BB : ("number" === typeof BB && (BB = BB.toString()), null != UG[BB] || (UG[BB] = SG.fromString(BB)), UG[BB])
-       },
-       kG = fG(0),
-       dG = nG ? function() {
-         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG)
-       } : function() {
-         let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG;
-         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG).and(BB)
-       },
-       KG = nG ? function() {
-         return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kG) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kG)
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

#### 150. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L3989-L4793` → after: `L3128-L3164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3128-L3164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3128-L3164) · [Before (L3989-L4793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L3989-L4793)

```diff
-     function rG(BB) {
-       return lG((OB => {
-         var GB;
-         const [YB] = null !== (GB = Object.entries(BB).find((BB => {
-           let [, GB] = BB;
-           return GB === OB
-         }))) && void 0 !== GB ? GB : [];
-         return null != OB && void 0 === YB ? BB.UNHANDLED : OB
-       }), iO().or(LO()))
-     }
-     const XG = NG.object({
-         image_url: NG.string()
-       }),
-       wG = NG.object({
-         mediaUrl: NG.string().max(1024)
-       }),
- ... (789 more removed lines; see GitHub link above)
+     function NW(WW, iW) {
+       if ("webgl" !== WW) return;
+       const OW = new URLSearchParams(iW).get(EW);
+       return "first" === OW || "last" !== OW && null
+     }
+     const PW = new WeakSet;
+ 
+     function LW(WW, iW) {
+       var OW, EW;
+       let NW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (OW = null === (EW = globalThis.navigator) || void 0 === EW ? void 0 : EW.userAgent) && void 0 !== OW ? OW : "";
+       try {
+         !1 === iW || PW.has(WW) || (PW.add(WW), WW.addEventListener("webglcontextrestored", (() => {
+           LW(WW, iW, NW)
+         })));
+         const OW = WW.getContext("webgl2");
+         if (null === OW || OW.isContextLost()) return !1;
+ ... (21 more added lines; see GitHub link above)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4795-L4804` → after: `L3166-L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3166-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3166-L3168) · [Before (L4795-L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4795-L4804)

```diff
-     const yD = HO({
-         code: LO(),
-         message: iO().optional()
-       }),
-       JD = HO({
-         evt: iO().nullable(),
-         nonce: iO().nullable(),
-         data: eO().nullable(),
-         cmd: iO()
-       }).passthrough();
+     var mW = OW(339),
+       EW = OW(662);
+     let NW;
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4807-L4816` → after: `L3171-L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3171-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3171-L3173) · [Before (L4807-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4807-L4816)

```diff
-       const OB = JD.parse(BB);
-       return null != OB.evt ? OB.evt === FY ? gY.parse(OB) : function(BB) {
-         const OB = BB.evt;
-         if (!(OB in iY)) throw new Error(`Unrecognized event type ${BB.evt}`);
-         return wY[OB].payload.parse(BB)
-       }(XY.parse(OB)) : function(BB) {
-         return Object.assign(Object.assign({}, BB), {
-           data: jD(BB)
-         })
-       }(oD.passthrough().parse(OB))
+       var iW;
+       const OW = NW;
+       return NW = void 0, null !== (iW = cW(WW)) && void 0 !== iW ? iW : OW
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4819-L4831` → after: `L3176-L3181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3176-L3181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3176-L3181) · [Before (L4819-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4819-L4831)

```diff
-     function PD(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
-       const DB = vG.extend({
-         cmd: oG(OB),
-         data: GB
-       });
-       return async GB => {
-         const QB = await BB({
-           cmd: OB,
-           args: GB,
-           transfer: YB(GB)
-         });
-         return DB.parse(QB).data
+     function LW(WW) {
+       try {
+         const iW = cW(WW);
+         void 0 !== iW && (NW = iW, (0, EW.g)((0, mW.l)(iW.reason, iW.message)))
+       } catch (iW) {
+         console.warn("Couldn't keep the WebGPU loss's cause", iW)
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4836-L4927` → after: `L3186-L3192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3186-L3192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3186-L3192) · [Before (L4836-L4927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4836-L4927)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
-       const GB = bG[BB].response,
-         YB = vG.extend({
-           cmd: oG(BB),
-           data: GB
-         });
-       return GB => async DB => {
-         const QB = await GB({
-           cmd: BB,
-           args: DB,
-           transfer: OB(DB)
-         });
-         return YB.parse(QB).data
-       }
-     }
-     const lD = zD(aG.AUTHENTICATE),
- ... (76 more removed lines; see GitHub link above)
+       var iW;
+       const OW = null === WW || void 0 === WW || null === (iW = WW.ZPW) || void 0 === iW ? void 0 : iW.call(WW),
+         mW = null === WW || void 0 === WW ? void 0 : WW.tPW();
+       if (void 0 === mW) return;
+       const EW = new Error(mW);
+       return void 0 !== OW && (EW.reason = OW), EW
+     }
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4930` → after: `L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3195) · [Before (L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4930)

```diff
-       return "string" === typeof BB && iD.test(BB)
+       return WW instanceof Error ? WW : void 0
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4934-L4938` → after: `L3198-L3199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3198-L3199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3198-L3199) · [Before (L4934-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4934-L4938)

```diff
-     function XD(BB) {
-       var OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         GB = (gD[BB[OB + 0]] + gD[BB[OB + 1]] + gD[BB[OB + 2]] + gD[BB[OB + 3]] + "-" + gD[BB[OB + 4]] + gD[BB[OB + 5]] + "-" + gD[BB[OB + 6]] + gD[BB[OB + 7]] + "-" + gD[BB[OB + 8]] + gD[BB[OB + 9]] + "-" + gD[BB[OB + 10]] + gD[BB[OB + 11]] + gD[BB[OB + 12]] + gD[BB[OB + 13]] +  … [truncated]
-       if (!LD(GB)) throw TypeError("Stringified UUID is invalid");
-       return GB
+     function tW(WW, iW) {
+       return "lost" !== WW && "frames_refused" !== WW ? {} : (0, mW.l)("frames_refused" === WW ? WW : null === iW || void 0 === iW ? void 0 : iW.reason, null === iW || void 0 === iW ? void 0 : iW.message)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4940` → after: `L3201-L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3201-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3201-L3246) · [Before (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4940)

```diff
-     var wD;
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

#### 158. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4943-L4964` → after: `L3249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3249) · [Before (L4943-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4943-L4964)

```diff
-       function YB(BB, YB, DB, QB) {
-         if ("string" === typeof BB && (BB = function(BB) {
-             BB = unescape(encodeURIComponent(BB));
-             for (var OB = [], GB = 0; GB < BB.length; ++GB) OB.push(BB.charCodeAt(GB));
-             return OB
-           }(BB)), "string" === typeof YB && (YB = function(BB) {
-             if (!LD(BB)) throw TypeError("Invalid UUID");
-             var OB, GB = new Uint8Array(16);
-             return GB[0] = (OB = parseInt(BB.slice(0, 8), 16)) >>> 24, GB[1] = OB >>> 16 & 255, GB[2] = OB >>> 8 & 255, GB[3] = 255 & OB, GB[4] = (OB = parseInt(BB.slice(9, 13), 16)) >>> 8, GB[5] = 255 & OB, GB[6] = (OB = parseInt(BB.slice(14, 18), 16)) >>> 8, GB[7] = 255 & OB, G … [truncated]
-           }(YB)), 16 !== YB.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
-         var oB = new Uint8Array(16 + BB.length);
-         if (oB.set(YB), oB.set(BB, YB.length), (oB = GB(oB))[6] = 15 & oB[6] | OB, oB[8] = 63 & oB[8] | 128, DB) {
-           QB = QB || 0;
-           for (var jB = 0; jB < 16; ++jB) DB[QB + jB] = oB[jB];
-           return DB
-         }
- ... (6 more removed lines; see GitHub link above)
+       return WW === LW ? "program retry" : WW === PW ? "program link" : WW === tW ? "program link stall" : WW === ZW ? "program link pending" : WW === cW || WW === wW || WW === xW ? `program ${iW} ${OW}` : "program"
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4967-L4968` → after: `L3298-L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3298-L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3298-L3299) · [Before (L4967-L4968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4967-L4968)

```diff
-     function cD(BB) {
-       return 14 + (BB + 64 >>> 9 << 4) + 1
+     function KW(WW, iW) {
+       return WW === mW.o.RenderSerialLinks && void 0 !== kW[iW]
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4972-L4973` → after: `L3303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3303) · [Before (L4972-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4972-L4973)

```diff
-       var GB = (65535 & BB) + (65535 & OB);
-       return (BB >> 16) + (OB >> 16) + (GB >> 16) << 16 | 65535 & GB
+       return WW === mW.o.RenderInternal && (iW >>> 8 & 255) === ZW
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4976-L4978` → after: `L3306-L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3306-L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3306-L3307) · [Before (L4976-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4976-L4978)

```diff
-     function aD(BB, OB, GB, YB, DB, QB) {
-       return hD((oB = hD(hD(OB, BB), hD(YB, QB))) << (jB = DB) | oB >>> 32 - jB, GB);
-       var oB, jB
+     function YW(WW, iW) {
+       return WW === mW.o.RenderSerialLinks && void 0 !== MW[15 & iW]
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4981-L4982` → after: `L3318-L3320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3318-L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3318-L3320) · [Before (L4981-L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4981-L4982)

```diff
-     function eD(BB, OB, GB, YB, DB, QB, oB) {
-       return aD(OB & GB | ~OB & YB, BB, OB, DB, QB, oB)
+     function TW(WW, iW) {
+       var OW;
+       return null !== (OW = WW[iW]) && void 0 !== OW ? OW : (0, NW.d)(iW)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4985-L4986` → after: `L3323-L3324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3323-L3324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3323-L3324) · [Before (L4985-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4985-L4986)

```diff
-     function TD(BB, OB, GB, YB, DB, QB, oB) {
-       return aD(OB & YB | GB & ~YB, BB, OB, DB, QB, oB)
+     function JW() {
+       return (0, NW.d)((0, EW.c)())
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4989-L4990` → after: `L3327-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3327-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3327-L3406) · [Before (L4989-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4989-L4990)

```diff
-     function bD(BB, OB, GB, YB, DB, QB, oB) {
-       return aD(OB ^ GB ^ YB, BB, OB, DB, QB, oB)
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

#### 165. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4993-L4994` → after: `L3411-L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3411-L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3411-L3416) · [Before (L4993-L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L4993-L4994)

```diff
-     function CD(BB, OB, GB, YB, DB, QB, oB) {
-       return aD(GB ^ (OB | ~YB), BB, OB, DB, QB, oB)
+     function uW(WW) {
+       let {
+         group: iW,
+         instance: OW
+       } = WW, mW = nW.get(iW);
+       return void 0 === mW && (mW = [], nW.set(iW, mW)), !mW.includes(OW) && (mW.length >= HW || (mW.push(OW), !1))
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5028-L5029` → after: `L3420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3420) · [Before (L5028-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5028-L5029)

```diff
-       if (!wD && !(wD = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRand … [truncated]
-       return wD(HD)
+       return nW.size > 0
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5032-L5039` → after: `L3423-L3424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3423-L3424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3423-L3424) · [Before (L5032-L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5032-L5039)

```diff
-     function sD(BB, OB, GB) {
-       var YB = (BB = BB || {}).random || (BB.rng || vD)();
-       if (YB[6] = 15 & YB[6] | 64, YB[8] = 63 & YB[8] | 128, OB) {
-         GB = GB || 0;
-         for (var DB = 0; DB < 16; ++DB) OB[GB + DB] = YB[DB];
-         return OB
-       }
-       return XD(YB)
+     function dW() {
+       nW.clear()
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5042-L5051` → after: `L3473-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3473-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3473-L3475) · [Before (L5042-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5042-L5051)

```diff
-     function xD(BB, OB, GB, YB) {
-       switch (BB) {
-         case 0:
-           return OB & GB ^ ~OB & YB;
-         case 1:
-         case 3:
-           return OB ^ GB ^ YB;
-         case 2:
-           return OB & GB ^ OB & YB ^ GB & YB
-       }
+     function wW(WW, iW) {
+       const OW = (0, LW.e)(iW.variants);
+       return WW.setShaderPack(OW.variantFlags, OW.hooks, OW.moduleCodes, (0, cW.x)(iW.layers), cW.l[iW.policy], iW.keepCircleShadows)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5054-L5079` → after: `L3484-L3495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3484-L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3484-L3495) · [Before (L5054-L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5054-L5079)

```diff
-     function tD(BB, OB) {
-       return BB << OB | BB >>> 32 - OB
-     }
-     ED("v5", 80, (function(BB) {
-       var OB = [1518500249, 1859775393, 2400959708, 3395469782],
-         GB = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
-       if ("string" === typeof BB) {
-         var YB = unescape(encodeURIComponent(BB));
-         BB = [];
-         for (var DB = 0; DB < YB.length; ++DB) BB.push(YB.charCodeAt(DB))
-       } else Array.isArray(BB) || (BB = Array.prototype.slice.call(BB));
-       BB.push(128);
-       for (var QB = BB.length / 4 + 2, oB = Math.ceil(QB / 16), jB = new Array(oB), yB = 0; yB < oB; ++yB) {
-         for (var JB = new Uint32Array(16), MB = 0; MB < 16; ++MB) JB[MB] = BB[64 * yB + 4 * MB] << 24 | BB[64 * yB + 4 * MB + 1] << 16 | BB[64 * yB + 4 * MB + 2] << 8 | BB[64 * yB + 4 * MB + 3];
-         jB[yB] = JB
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

#### 170. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5081-L5082` → after: `L3497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3497) · [Before (L5081-L5082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5081-L5082)

```diff
-       return [GB[0] >> 24 & 255, GB[0] >> 16 & 255, GB[0] >> 8 & 255, 255 & GB[0], GB[1] >> 24 & 255, GB[1] >> 16 & 255, GB[1] >> 8 & 255, 255 & GB[1], GB[2] >> 24 & 255, GB[2] >> 16 & 255, GB[2] >> 8 & 255, 255 & GB[2], GB[3] >> 24 & 255, GB[3] >> 16 & 255, GB[3] >> 8 & 255, 255 … [truncated]
-     }));
+     }
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5085-L5086` → after: `L3500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3500) · [Before (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5085-L5086)

```diff
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
-         super(OB), this.code = BB, this.message = OB, this.name = "Discord SDK Error"
+         super(`the shader pack can't run in this game: ${WW}`), this.messageKey = WW, this.name = "ShaderPackJoinError"
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5089-L5094` → after: `L3503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3503) · [Before (L5089-L5094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5089-L5094)

```diff
-     const OQ = ["log", "warn", "debug", "info", "error"];
-     var GQ;
-     ! function(BB) {
-       BB[BB.HANDSHAKE = 0] = "HANDSHAKE", BB[BB.FRAME = 1] = "FRAME", BB[BB.CLOSE = 2] = "CLOSE", BB[BB.HELLO = 3] = "HELLO"
-     }(GQ || (GQ = {}));
-     const YQ = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.c … [truncated]
+     const kW = "strict";
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5096-L5103` → after: `L3505-L3534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3505-L3534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3505-L3534) · [Before (L5096-L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5096-L5103)

```diff
-       getTransfer(BB) {
-         var OB;
-         switch (BB.cmd) {
-           case HG.SUBSCRIBE:
-           case HG.UNSUBSCRIBE:
-             return;
-           default:
-             return null !== (OB = BB.transfer) && void 0 !== OB ? OB : void 0
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

#### 174. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5106-L5174` → after: `L3538-L3539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3538-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3538-L3539) · [Before (L5106-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5106-L5174)

```diff
-       constructor(BB, OB) {
-         var GB;
-         if (this.eventBus = new JB, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = BB => {
-             var OB;
-             if (null == this.source) throw new Error("Attempting to send message before initialization");
-             const GB = sD();
-             null === (OB = this.source) || void 0 === OB || OB.postMessage([GQ.FRAME, Object.assign(Object.assign({}, BB), {
-               nonce: GB
-             })], this.sourceOrigin, this.getTransfer(BB));
-             return new Promise(((BB, OB) => {
-               this.pendingCommands.set(GB, {
-                 resolve: BB,
-                 reject: OB
-               })
-             }))
-           }, this.commands = (GB = this.sendCommand, {
- ... (53 more removed lines; see GitHub link above)
+       runsInJoinedGame() {
+         return this.joined && !this.offInThisGame
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5176` → after: `L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3541) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5176)

```diff
-       close(BB, OB) {
+       reachInJoinedGame() {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5178-L5207` → after: `L3543-L3577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3543-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3543-L3577) · [Before (L5178-L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5178-L5207)

```diff
-         window.removeEventListener("message", this.handleMessage);
-         const YB = sD();
-         null === (GB = this.source) || void 0 === GB || GB.postMessage([GQ.CLOSE, {
-           code: BB,
-           message: OB,
-           nonce: YB
-         }], this.sourceOrigin)
-       }
-       async subscribe(BB, OB) {
-         for (var GB = arguments.length, YB = new Array(GB > 2 ? GB - 2 : 0), DB = 2; DB < GB; DB++) YB[DB - 2] = arguments[DB];
-         const [QB] = YB, oB = this.eventBus.listenerCount(BB), jB = this.eventBus.on(BB, OB);
-         return Object.values(iY).includes(BB) && BB !== iY.READY && 0 === oB && await this.sendCommand({
-           cmd: HG.SUBSCRIBE,
-           args: QB,
-           evt: BB
-         }), jB
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
+ ... (19 more added lines; see GitHub link above)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5209` → after: `L3579-L3592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3579-L3592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3579-L3592) · [Before (L5209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5209)

```diff
-       handshake() {
+       failed() {
+         this.joined && !this.offInThisGame && (this.playing ? this.fail(lW) : this.failedWhileJoining = !0)
+       }
+       fail(WW) {
+         this.leave(), this.deps.failInGame(WW)
+       }
+       notifyModelFallback() {
+         this.modelsNotified || (this.modelsNotified = !0, this.notify("shaderPack:modelsWithoutPack"))
+       }
+       notify(WW, iW) {
+         const OW = this.game;
+         this.deps.notify(WW, (() => OW === this.game && this.joined), iW)
+       }
+       handOver() {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5211-L5221` → after: `L3594-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3594-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3594-L3613) · [Before (L5211-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5211-L5221)

```diff
-         null === (BB = this.source) || void 0 === BB || BB.postMessage([GQ.HANDSHAKE, {
-           v: 1,
-           encoding: "json",
-           client_id: this.clientId,
-           frame_id: this.frameId
-         }], this.sourceOrigin)
-       }
-       addOnReadyListener() {
-         this.eventBus.once(iY.READY, (() => {
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

#### 179. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5223-L5229` → after: `L3615-L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3615-L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3615-L3861) · [Before (L5223-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5223-L5229)

```diff
-       overrideConsoleLogging() {
-         if (this.configuration.disableConsoleLogOverride) return;
-         const BB = (BB, OB) => {
-           this.commands.captureLog({
-             level: BB,
-             message: OB
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

#### 180. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5231-L5241` → after: `L3863-L3882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3863-L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3863-L3882) · [Before (L5231-L5241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5231-L5241)

```diff
-         OQ.forEach((OB => {
-           ! function(BB, OB, GB) {
-             const YB = BB[OB],
-               DB = BB;
-             YB && (BB[OB] = function() {
-               const BB = [].slice.call(arguments),
-                 QB = "" + BB.join(" ");
-               GB(OB, QB), YB.apply(DB, BB)
-             })
-           }(console, OB, BB)
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

#### 181. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5243-L5244` → after: `L3884-L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3884-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3884-L3885) · [Before (L5243-L5244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5243-L5244)

```diff
-       handleClose(BB) {
-         yD.parse(BB)
+       stopped() {
+         return !0 === this.core.isStopped
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5246-L5249` → after: `L3887-L3893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3887-L3893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3887-L3893) · [Before (L5246-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5246-L5249)

```diff
-       handleHandshake() {}
-       handleFrame(BB) {
-         var OB, GB;
-         let YB;
+       async loadAndHandOver(WW, iW, OW, mW) {
+         let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
+         if (this.stopped()) return null;
+         const NW = this.core.terrainTextureNames();
+         var PW;
+         if (0 === NW.length) return null === (PW = EW.onTaken) || void 0 === PW || PW.call(EW, null, new Set), !0;
+         let LW, wW;
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5251` → after: `L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3895) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5251)

```diff
-           YB = MD(BB)
+           LW = await WW(), wW = await lW(NW, LW, iW.decode)
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5253` → after: `L3897-L3901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3897-L3901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3897-L3901) · [Before (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5253)

```diff
-           return console.error("Failed to parse", BB), void console.error(DB)
+           return mW() ? null : (OW({
+             name: null,
+             url: null,
+             error: jW
+           }), !1)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5255-L5262` → after: `L3903-L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3903-L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3903-L3942) · [Before (L5255-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5255-L5262)

```diff
-         if ("DISPATCH" === YB.cmd) this.eventBus.emit(YB.evt, YB.data);
-         else {
-           if (YB.evt === FY) {
-             if (null != YB.nonce) return null === (OB = this.pendingCommands.get(YB.nonce)) || void 0 === OB || OB.reject(YB.data), void this.pendingCommands.delete(YB.nonce);
-             this.eventBus.emit("error", new BQ(YB.data.code, YB.data.message))
-           }
-           if (null == YB.nonce) return void console.error("Missing nonce", BB);
-           null === (GB = this.pendingCommands.get(YB.nonce)) || void 0 === GB || GB.resolve(YB), this.pendingCommands.delete(YB.nonce)
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

#### 186. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5269-L5280` → after: `L3947-L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3947-L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3947-L3969) · [Before (L5269-L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5269-L5280)

```diff
-     var QQ, oQ = 1e9,
-       jQ = !0,
-       yQ = "[DecimalError] ",
-       JQ = yQ + "Invalid argument: ",
-       MQ = yQ + "Exponent out of range: ",
-       PQ = Math.floor,
-       zQ = Math.pow,
-       lQ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
-       pQ = 1e7,
-       qQ = 9007199254740991,
-       ZQ = PQ(1286742750677284.5),
-       NQ = {};
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

#### 187. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5283-L5288` → after: `L3972-L3985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3972-L3985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3972-L3985) · [Before (L5283-L5288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5283-L5288)

```diff
-       var GB, YB, DB, QB, oB, jB, yB, JB, MB = BB.constructor,
-         PB = MB.precision;
-       if (!BB.s || !OB.s) return OB.s || (OB = new MB(BB)), jQ ? KQ(OB, PB) : OB;
-       if (yB = BB.d, JB = OB.d, oB = BB.e, DB = OB.e, yB = yB.slice(), QB = oB - DB) {
-         for (QB < 0 ? (YB = yB, QB = -QB, jB = JB.length) : (YB = JB, DB = oB, jB = yB.length), QB > (jB = (oB = Math.ceil(PB / 7)) > jB ? oB + 1 : jB + 1) && (QB = jB, YB.length = 1), YB.reverse(); QB--;) YB.push(0);
-         YB.reverse()
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

#### 188. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5295-L5296` → after: `L3998-L3999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R3998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L3998-L3999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L3998-L3999) · [Before (L5295-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5295-L5296)

```diff
-     function WQ(BB, OB, GB) {
-       if (BB !== ~~BB || BB < OB || BB > GB) throw Error(JQ + BB)
+     function PW(WW) {
+       return WW.split(".").slice(0, 2).join("_").replace(/[^0-9_]/g, "")
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5299-L5472` → after: `L4003-L4007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4003-L4007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4003-L4007) · [Before (L5299-L5472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5299-L5472)

```diff
-     function AQ(BB) {
-       var OB, GB, YB, DB = BB.length - 1,
-         QB = "",
-         oB = BB[0];
-       if (DB > 0) {
-         for (QB += oB, OB = 1; OB < DB; OB++)(GB = 7 - (YB = BB[OB] + "").length) && (QB += fQ(GB)), QB += YB;
-         (GB = 7 - (YB = (oB = BB[OB]) + "").length) && (QB += fQ(GB))
-       } else if (0 === oB) return "0";
-       for (; oB % 10 === 0;) oB /= 10;
-       return QB + oB
-     }
-     NQ.absoluteValue = NQ.abs = function() {
-       var BB = new this.constructor(this);
-       return BB.s && (BB.s = 1), BB
-     }, NQ.comparedTo = NQ.cmp = function(BB) {
-       var OB, GB, YB, DB, QB = this;
- ... (158 more removed lines; see GitHub link above)
+     function cW() {
+       if (null === LW) try {
+         WW = (0, mW.getBrowserName)(), iW = (0, mW.getBrowserVersion)(), OW = (0, mW.getOperatingSystem)(), EW = (0, mW.getOperatingSystemVersion)(), LW = `${WW.toLowerCase().replace(/[^a-z0-9]/g,"")}_${void 0===iW?"unknown":PW(iW)}-${OW}${void 0===EW?"":`_${PW(EW)}`}`
+       } catch (NW) {
+         console.warn("The user agent couldn't be read for its browser code", NW), LW = "unknown"
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5475-L5509` → after: `L4013-L4054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4013-L4054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4013-L4054) · [Before (L5475-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5475-L5509)

```diff
-       function OB(BB, OB, GB, YB) {
-         var DB, QB;
-         if (GB != YB) QB = GB > YB ? 1 : -1;
-         else
-           for (DB = QB = 0; DB < GB; DB++)
-             if (BB[DB] != OB[DB]) {
-               QB = BB[DB] > OB[DB] ? 1 : -1;
-               break
-             } return QB
-       }
- 
-       function GB(BB, OB, GB) {
-         for (var YB = 0; GB--;) BB[GB] -= YB, YB = BB[GB] < OB[GB] ? 1 : 0, BB[GB] = YB * pQ + BB[GB] - OB[GB];
-         for (; !BB[0] && BB.length > 1;) BB.shift()
-       }
-       return function(YB, DB, QB, oB) {
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

#### 191. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5511` → after: `L4056-L4064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4056-L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4056-L4064) · [Before (L5511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5511)

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

#### 192. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5513-L5526` → after: `L4066-L4076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4066-L4076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4066-L4076) · [Before (L5513-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5513-L5526)

```diff
-     function SQ(BB, OB) {
-       var GB, YB, DB, QB, oB, jB = 0,
-         yB = 0,
-         JB = BB.constructor,
-         MB = JB.precision;
-       if (nQ(BB) > 16) throw Error(MQ + nQ(BB));
-       if (!BB.s) return new JB(QQ);
-       for (null == OB ? (jQ = !1, oB = MB) : oB = OB, QB = new JB(.03125); BB.abs().gte(.1);) BB = BB.times(QB), yB += 5;
-       for (oB += Math.log(zQ(2, yB)) / Math.LN10 * 2 + 5 | 0, GB = YB = DB = new JB(QQ), JB.precision = oB;;) {
-         if (YB = KQ(YB.times(BB), oB), GB = GB.times(++jB), AQ((QB = DB.plus(VQ(YB, GB, oB))).d).slice(0, oB) === AQ(DB.d).slice(0, oB)) {
-           for (; yB--;) DB = KQ(DB.times(DB), oB);
-           return JB.precision = MB, null == OB ? (jQ = !0, KQ(DB, MB)) : DB
-         }
-         DB = QB
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

#### 193. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5530-L5532` → after: `L4080-L4081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4080-L4081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4080-L4081) · [Before (L5530-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5530-L5532)

```diff
-     function nQ(BB) {
-       for (var OB = 7 * BB.e, GB = BB.d[0]; GB >= 10; GB /= 10) OB++;
-       return OB
+     function PW() {
+       "hidden" === document.visibilityState && (EW = !1, document.removeEventListener("visibilitychange", PW))
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5535-L5537` → after: `L4084-L4085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4084-L4085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4084-L4085) · [Before (L5535-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5535-L5537)

```diff
-     function UQ(BB, OB, GB) {
-       if (OB > BB.LN10.sd()) throw jQ = !0, GB && (BB.precision = GB), Error(yQ + "LN10 precision limit exceeded");
-       return KQ(new BB(BB.LN10), OB)
+     function LW() {
+       EW || "visible" !== document.visibilityState || !(0, mW.m)() && !NW() || (EW = !0, document.addEventListener("visibilitychange", PW))
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5540-L5542` → after: `L4088-L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4088-L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4088-L4089) · [Before (L5540-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5540-L5542)

```diff
-     function fQ(BB) {
-       for (var OB = ""; BB--;) OB += "0";
-       return OB
+     function cW() {
+       return EW || NW()
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5544-L5558` → after: `L4091-L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4091-L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4091-L4112) · [Before (L5544-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5544-L5558)

```diff
- 
-     function kQ(BB, OB) {
-       var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB = 1,
-         zB = BB,
-         lB = zB.d,
-         pB = zB.constructor,
-         qB = pB.precision;
-       if (zB.s < 1) throw Error(yQ + (zB.s ? "NaN" : "-Infinity"));
-       if (zB.eq(QQ)) return new pB(0);
-       if (null == OB ? (jQ = !1, JB = qB) : JB = OB, zB.eq(10)) return null == OB && (jQ = !0), UQ(pB, JB);
-       if (JB += 10, pB.precision = JB, YB = (GB = AQ(lB)).charAt(0), QB = nQ(zB), !(Math.abs(QB) < 15e14)) return yB = UQ(pB, JB + 2, qB).times(QB + ""), zB = kQ(new pB(YB + "." + GB.slice(1)), JB - 10).plus(yB), pB.precision = qB, null == OB ? (jQ = !0, KQ(zB, qB)) : zB;
-       for (; YB < 7 && 1 != YB || 1 == YB && GB.charAt(1) > 3;) YB = (GB = AQ((zB = zB.times(BB)).d)).charAt(0), PB++;
-       for (QB = nQ(zB), YB > 1 ? (zB = new pB("0." + GB), QB++) : zB = new pB(YB + "." + GB.slice(1)), jB = oB = zB = VQ(zB.minus(QQ), zB.plus(QQ), JB), MB = KQ(zB.times(zB), JB), DB = 3;;) {
-         if (oB = KQ(oB.times(MB), JB), AQ((yB = jB.plus(VQ(oB, new pB(DB), JB))).d).slice(0, JB) === AQ(jB.d).slice(0, JB)) return jB = jB.times(2), 0 !== QB && (jB = jB.plus(UQ(pB, JB + 2, qB).times(QB + ""))), jB = VQ(jB, new pB(PB), JB), pB.precision = qB, null == OB ? (jQ = ! … [truncated]
-         jB = yB, DB += 2
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

#### 197. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5562-L5573` → after: `L4136-L4139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4136-L4139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4136-L4139) · [Before (L5562-L5573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5562-L5573)

```diff
-     function dQ(BB, OB) {
-       var GB, YB, DB;
-       for ((GB = OB.indexOf(".")) > -1 && (OB = OB.replace(".", "")), (YB = OB.search(/e/i)) > 0 ? (GB < 0 && (GB = YB), GB += +OB.slice(YB + 1), OB = OB.substring(0, YB)) : GB < 0 && (GB = OB.length), YB = 0; 48 === OB.charCodeAt(YB);) ++YB;
-       for (DB = OB.length; 48 === OB.charCodeAt(DB - 1);) --DB;
-       if (OB = OB.slice(YB, DB)) {
-         if (DB -= YB, GB = GB - YB - 1, BB.e = PQ(GB / 7), BB.d = [], YB = (GB + 1) % 7, GB < 0 && (YB += 7), YB < DB) {
-           for (YB && BB.d.push(+OB.slice(0, YB)), DB -= 7; YB < DB;) BB.d.push(+OB.slice(YB, YB += 7));
-           YB = 7 - (OB = OB.slice(YB)).length
-         } else YB -= DB;
-         for (; YB--;) OB += "0";
-         if (BB.d.push(+OB), jQ && (BB.e > ZQ || BB.e < -ZQ)) throw Error(MQ + GB)
-       } else BB.s = 0, BB.e = 0, BB.d = [0];
+     function bW(WW) {
+       if (!WW) return 0;
+       const iW = AW.indexOf(WW);
+       if (iW <= 0) throw new Error(`"${WW}" is not a shader pack hook function`);
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5577-L5597` → after: `L4143-L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4143-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4143-L4146) · [Before (L5577-L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5577-L5597)

```diff
-     function KQ(BB, OB, GB) {
-       var YB, DB, QB, oB, jB, yB, JB, MB, PB = BB.d;
-       for (oB = 1, QB = PB[0]; QB >= 10; QB /= 10) oB++;
-       if ((YB = OB - oB) < 0) YB += 7, DB = OB, JB = PB[MB = 0];
-       else {
-         if ((MB = Math.ceil((YB + 1) / 7)) >= (QB = PB.length)) return BB;
-         for (JB = QB = PB[MB], oB = 1; QB >= 10; QB /= 10) oB++;
-         DB = (YB %= 7) - 7 + oB
-       }
-       if (void 0 !== GB && (jB = JB / (QB = zQ(10, oB - DB - 1)) % 10 | 0, yB = OB < 0 || void 0 !== PB[MB + 1] || JB % QB, yB = GB < 4 ? (jB || yB) && (0 == GB || GB == (BB.s < 0 ? 3 : 2)) : jB > 5 || 5 == jB && (4 == GB || yB || 6 == GB && (YB > 0 ? DB > 0 ? JB / zQ(10, oB - DB … [truncated]
-       if (0 == YB ? (PB.length = MB, QB = 1, MB--) : (PB.length = MB + 1, QB = zQ(10, 7 - YB), PB[MB] = DB > 0 ? (JB / zQ(10, oB - DB) % zQ(10, DB) | 0) * QB : 0), yB)
-         for (;;) {
-           if (0 == MB) {
-             (PB[0] += QB) == pQ && (PB[0] = 1, ++BB.e);
-             break
-           }
- ... (5 more removed lines; see GitHub link above)
+     function jW(WW) {
+       if (0 === WW) return null;
+       const iW = AW[WW];
+       if (void 0 === iW) throw new Error(`${WW} is not a shader pack hook function id`);
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5601-L5621` → after: `L4150-L4154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4150-L4154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4150-L4154) · [Before (L5601-L5621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5601-L5621)

```diff
-     function uQ(BB, OB) {
-       var GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB = BB.constructor,
-         lB = zB.precision;
-       if (!BB.s || !OB.s) return OB.s ? OB.s = -OB.s : OB = new zB(BB), jQ ? KQ(OB, lB) : OB;
-       if (yB = BB.d, PB = OB.d, YB = OB.e, JB = BB.e, yB = yB.slice(), oB = JB - YB) {
-         for ((MB = oB < 0) ? (GB = yB, oB = -oB, jB = PB.length) : (GB = PB, YB = JB, jB = yB.length), oB > (DB = Math.max(Math.ceil(lB / 7), jB) + 2) && (oB = DB, GB.length = 1), GB.reverse(), DB = oB; DB--;) GB.push(0);
-         GB.reverse()
-       } else {
-         for ((MB = (DB = yB.length) < (jB = PB.length)) && (jB = DB), DB = 0; DB < jB; DB++)
-           if (yB[DB] != PB[DB]) {
-             MB = yB[DB] < PB[DB];
-             break
-           } oB = 0
-       }
-       for (MB && (GB = yB, yB = PB, PB = GB, OB.s = -OB.s), jB = yB.length, DB = PB.length - jB; DB > 0; --DB) yB[jB++] = 0;
-       for (DB = PB.length; DB > oB;) {
- ... (5 more removed lines; see GitHub link above)
+     function UW(WW) {
+       const iW = mW.e.length;
+       return {
+         strict: WW >= iW,
+         program: mW.e[WW % iW]
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5628-L5632` → after: `L4158-L4159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4158-L4159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4158-L4159) · [Before (L5628-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5628-L5632)

```diff
-     function mQ(BB, OB, GB) {
-       var YB, DB = nQ(BB),
-         QB = AQ(BB.d),
-         oB = QB.length;
-       return OB ? (GB && (YB = GB - oB) > 0 ? QB = QB.charAt(0) + "." + QB.slice(1) + fQ(YB) : oB > 1 && (QB = QB.charAt(0) + "." + QB.slice(1)), QB = QB + (DB < 0 ? "e" : "e+") + DB) : DB < 0 ? (QB = "0." + fQ(-DB - 1) + QB, GB && (YB = GB - oB) > 0 && (QB += fQ(YB))) : DB >= oB … [truncated]
+     function kW(WW) {
+       return Number(WW.strict) * mW.e.length + mW.e.indexOf(WW.program)
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5635-L5636` → after: `L4162-L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4162-L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4162-L4163) · [Before (L5635-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5635-L5636)

```diff
-     function IQ(BB, OB) {
-       if (BB.length > OB) return BB.length = OB, !0
+     function sW(WW) {
+       return "" === WW ? [] : WW.split(" ")
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5640-L5932` → after: `L4167-L4171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4167-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4167-L4171) · [Before (L5640-L5932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5640-L5932)

```diff
-       if (!BB || "object" !== typeof BB) throw Error(yQ + "Object expected");
-       var OB, GB, YB, DB = ["precision", 1, oQ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
-       for (OB = 0; OB < DB.length; OB += 3)
-         if (void 0 !== (YB = BB[GB = DB[OB]])) {
-           if (!(PQ(YB) === YB && YB >= DB[OB + 1] && YB <= DB[OB + 2])) throw Error(JQ + GB + ": " + YB);
-           this[GB] = YB
-         } if (void 0 !== (YB = BB[GB = "LN10"])) {
-         if (YB != Math.LN10) throw Error(JQ + GB + ": " + YB);
-         this[GB] = new this(YB)
-       }
-       return this
-     }
-     var iQ = function BB(OB) {
-       var GB, YB, DB;
- 
-       function QB(BB) {
- ... (277 more removed lines; see GitHub link above)
+       const iW = {
+         variantFlags: new Uint8Array(EW),
+         hooks: new Uint8Array(EW * NW),
+         moduleCodes: Array(EW).fill(""),
+         reads: Array(2 * EW).fill("")
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L5934-L6124` → after: `L4173-L4176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4173-L4176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4173-L4176) · [Before (L5934-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L5934-L6124)

```diff
- 
-       function IO(BB, OB) {
-         return BB && mO(BB, OB, MG)
-       }
- 
-       function FO(BB, OB) {
-         for (var GB = 0, YB = (OB = TO(OB, BB) ? [OB] : wO(OB)).length; null != BB && GB < YB;) BB = BB[vO(OB[GB++])];
-         return GB && GB == YB ? BB : void 0
-       }
- 
-       function iO(BB, OB) {
-         return null != BB && OB in Object(BB)
-       }
- 
-       function LO(BB, OB, GB, YB, DB) {
-         return BB === OB || (null == BB || null == OB || !QG(BB) && !oG(OB) ? BB !== BB && OB !== OB : function(BB, OB, GB, YB, DB, MB) {
- ... (175 more removed lines; see GitHub link above)
+       for (const OW of WW) {
+         const WW = kW(OW.key),
+           mW = (WW, iW) => null === OW.hooks.surface || OW.reads.fragment.includes(WW) ? 0 : iW;
+         iW.variantFlags[WW] = (OW.sceneDepth ? PW : 0) | (OW.movesVertices ? LW : 0) | (OW.sunShadow ? cW : 0) | (OW.airShadow ? wW : 0) | (OW.discards ? tW : 0) | mW("localPosition", ZW) | mW("enchantSpeed", xW) | mW("enchantTier", lW), iW.hooks[WW * NW] = bW(OW.hooks.vertex), i … [truncated]
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6127-L6159` → after: `L4181-L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4181-L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4181-L4204) · [Before (L6127-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6127-L6159)

```diff
-       function wO(BB) {
-         return OG(BB) ? BB : HO(BB)
-       }
- 
-       function EO(BB, OB, GB, YB, DB, QB) {
-         var oB = 2 & DB,
-           jB = BB.length,
-           yB = OB.length;
-         if (jB != yB && !(oB && yB > jB)) return !1;
-         var JB = QB.get(BB);
-         if (JB && QB.get(OB)) return JB == OB;
-         var MB = -1,
-           PB = !0,
-           zB = 1 & DB ? new fO : void 0;
-         for (QB.set(BB, OB), QB.set(OB, BB); ++MB < jB;) {
-           var lB = BB[MB],
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

#### 205. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6162-L6278` → after: `L4207-L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4207-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4207-L4266) · [Before (L6162-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6162-L6278)

```diff
-         return QB.delete(BB), QB.delete(OB), PB
-       }
- 
-       function cO(BB, OB) {
-         var GB = BB.__data__;
-         return function(BB) {
-           var OB = typeof BB;
-           return "string" == OB || "number" == OB || "symbol" == OB || "boolean" == OB ? "__proto__" !== BB : null === BB
-         }(OB) ? GB["string" == typeof OB ? "string" : "hash"] : GB.map
-       }
- 
-       function hO(BB, OB) {
-         var GB = function(BB, OB) {
-           return null == BB ? void 0 : BB[OB]
-         }(BB, OB);
-         return gO(GB) ? GB : void 0
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

#### 206. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6280-L6283` → after: `L4268-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4268-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4268-L4277) · [Before (L6280-L6283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6280-L6283)

```diff
-       function YG(BB) {
-         var OB = QG(BB) ? tB.call(BB) : "";
-         return OB == MB || "[object GeneratorFunction]" == OB
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

#### 207. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6285-L6287` → after: `L4279-L4284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4279-L4284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4279-L4284) · [Before (L6285-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6285-L6287)

```diff
-       function DG(BB) {
-         return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= YB
-       }
+     function AW(WW, iW) {
+       const OW = new DataView(WW, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xW),
+         [mW, EW, NW, PW, LW, cW] = ZW;
+       OW.setFloat32(mW.offset, iW.seconds, !0), OW.setUint32(EW.offset, iW.lit ? 1 : 0, !0);
+       for (let wW = 0; wW < 3; wW++) OW.setInt32(NW.offset + 4 * wW, iW.renderOffset[wW], !0), OW.setFloat32(PW.offset + 4 * wW, iW.vWW[wW], !0), OW.setFloat32(LW.offset + 4 * wW, iW.eyePosition[wW], !0), OW.setFloat32(cW.offset + 4 * wW, iW.shadowDirection[wW], !0)
+     }
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6289-L6292` → after: `L4286-L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4286-L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4286-L4310) · [Before (L6289-L6292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6289-L6292)

```diff
-       function QG(BB) {
-         var OB = typeof BB;
-         return !!BB && ("object" == OB || "function" == OB)
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

#### 209. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6294-L6296` → after: `L4312-L4320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4312-L4320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4312-L4320) · [Before (L6294-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6294-L6296)

```diff
-       function oG(BB) {
-         return !!BB && "object" == typeof BB
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

#### 210. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6298-L6305` → after: `L4322-L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4322-L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4322-L4324) · [Before (L6298-L6305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6298-L6305)

```diff
-       function jG(BB) {
-         return "symbol" == typeof BB || oG(BB) && tB.call(BB) == RB
-       }
-       var yG, JG = XB ? (yG = XB, function(BB) {
-         return yG(BB)
-       }) : function(BB) {
-         return oG(BB) && DG(BB.length) && !!uB[tB.call(BB)]
-       };
+     function NW(WW) {
+       return `${WW.strict?"strict":"allow"}.${WW.program}`
+     }
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6307-L6309` → after: `L4326-L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4326-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4326-L4328) · [Before (L6307-L6309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6307-L6309)

```diff
-       function MG(BB) {
-         return GG(BB) ? dO(BB) : XO(BB)
-       }
+     function PW(WW) {
+       return !WW.hooks.vertex && !WW.hooks.surface && !WW.hooks.light
+     }
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L6311-L6329` → after: `L4330-L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4330-L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/161.js#L4330-L4332) · [Before (L6311-L6329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/161.js#L6311-L6329)

```diff
-       function PG(BB) {
-         return BB
-       }
-       BB.exports = function(BB, OB, GB) {
-         var YB, DB = OG(BB) || JG(BB);
-         if (OB = rO(OB), null == GB)
-           if (DB || QG(BB)) {
-             var QB = BB.constructor;
-             GB = DB ? OG(BB) ? new QB : [] : YG(QB) ? QG(YB = YO(BB)) ? DO(YB) : {} : {}
-           } else GB = {};
-         return (DB ? wB : IO)(BB, (function(BB, YB, DB) {
-           return OB(GB, BB, YB, DB)
-         })), GB
-       }
-     }(gQ, gQ.exports);
-     "function" === typeof SuppressedError && SuppressedError;
- ... (3 more removed lines; see GitHub link above)
+     function LW(WW, iW) {
+       return "off" !== iW && (null === WW || WW.some((WW => WW.key.strict === ("strict" === iW) && !PW(WW))))
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/162.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/162.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567)

#### 1. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L4-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/162.js#L4-L222) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/162.js#L4)

```diff
-   7264: (BB, OB, GB) => {
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

#### 2. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L6-L210` → after: `L224-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L224-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/162.js#L224-L245) · [Before (L6-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/162.js#L6-L210)

```diff
-       BloxdMsnAccountSdk: () => PB,
-       MsnSdkAdaptor: () => qB
-     });
-     var YB = GB(1341),
-       DB = GB(1168),
-       QB = GB(3922),
-       oB = GB(641),
-       jB = GB(1796);
-     const yB = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
-     let JB = null;
- 
-     function MB() {
-       return JB ??= async function() {
-         await (0, DB.b)(yB, {}, !1);
-         for (let BB = 0; BB < 50 && !window.$msstart; BB++) await (0, oB.U)(100)
-       }(), JB
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/163.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/163.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/163.js#L4)

```diff
-   7266: (BB, OB, GB) => {
+   53916: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/163.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/163.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => QB
+       compilePagePack: () => wW,
+       prefetchCompiler: () => LW,
+       reconcileHint: () => cW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L8-L47` → after: `L10-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L10-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/163.js#L10-L255) · [Before (L8-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/163.js#L8-L47)

```diff
-     var YB = GB(1341),
-       DB = GB(1168);
-     class QB extends YB.c {
-       constructor(BB) {
-         super(), this.setOnEndCb = BB, this.name = "gamedistribution"
-       }
-       static async setup() {
-         let BB;
-         let OB;
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: GB => {
-             const YB = () => {
-               OB && (window.adCompleteSoResume(), OB = !1), BB && (BB(), BB = null)
-             };
-             switch (GB.name) {
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L49-L64` → after: `L257-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L257-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/163.js#L257-L267) · [Before (L49-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/163.js#L49-L64)

```diff
-         }, await (0, DB.b)("https://html5.api.gamedistribution.com/main.min.js", {
-           id: "gamedistribution-jssdk"
-         }), new QB((OB => {
-           BB = OB
-         }))
-       }
-       playVideoAd(BB, OB) {
-         this.setOnEndCb(BB), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
-       }
-       willRequestBanner() {
-         return void 0 !== window.gdsdk.AdType.Display
-       }
-       renderBanner(BB) {
-         console.log("Getting new gamedis banners"), this.willRequestBanner() ? (console.log("requesting gamedis banner into", document.getElementById(BB.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, BB.divId), window.gdsdk.showAd(window.gdsdk. … [truncated]
-           containerId: BB.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((BB => console.info(BB)))) : console.error("window.gdsdk.AdType.Display is undefined")
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

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/164.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/164.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/164.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/164.js#L4-L6)

```diff
-   7272: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       CoolMathGamesSdkAdaptor: () => QB
+   7676: (WW, iW, OW) => {
+     OW.d(iW, {
+       encodeBinaryMessageWithMetricsCookies: () => EW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L8-L53` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/164.js#L8-L11) · [Before (L8-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/164.js#L8-L53)

```diff
-     var YB = GB(1341),
-       DB = GB(1168);
-     class QB extends YB.c {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const BB = document.getElementsByClassName("ads-popup");
-         for (const OB of BB) OB instanceof HTMLElement && (OB.style.position = "fixed")
-       }
-       doAdBreakComplete() {
- ... (30 more removed lines; see GitHub link above)
+     var mW = OW(2478);
+ 
+     function EW(WW) {
+       return mW.l.toBuffer(WW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/165.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/165.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L4)

```diff
-   7276: (BB, OB, GB) => {
+   7699: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L6)

```diff
-       AdMobSdkAdaptor: () => PB
+       BloxdDiscordSDK: () => bW,
+       DiscordLoginCancelledError: () => AW,
+       discordPopupTimeoutMs: () => lW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L8-L38` → after: `L10-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L10-L23) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L8-L38)

```diff
-     var YB = GB(1341),
-       DB = GB(16),
-       QB = GB(1748),
-       oB = GB(120),
-       jB = GB(3922),
-       yB = GB(353),
-       JB = GB(1800);
-     const MB = {
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

#### 4. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L40-L50` → after: `L25-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L25-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L25-L35) · [Before (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L40-L50)

```diff
-     };
-     class PB extends YB.c {
-       constructor(BB) {
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = MB[BB], QB.e.on("ads.bannerStatus", (BB => {
-           let {
-             placementId: OB,
-             shown: GB,
-             error: YB
-           } = BB;
-           const DB = !this.bannerFirstResponseSeen.has(OB);
-           this.bannerFirstResponseSeen.add(OB), DB ? ((0, JB.g)(GB), GB ? console.log(`AD ${OB}: AdMob banner loaded`) : console.warn(`AD ${OB}: AdMob banner failed to load: ${YB}`)) : GB || console.warn(`AD ${OB}: AdMob banner refresh failed: ${YB}`)
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

#### 5. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L53-L55` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/165.js#L38-L39) · [Before (L53-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/165.js#L53-L55)

```diff
-       static async setup() {
-         const BB = "mobileIos" === oB.siteUsed ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${BB}`), new PB(BB)
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
```
