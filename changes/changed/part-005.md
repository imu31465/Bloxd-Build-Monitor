# Changed — Bundle Modifications Report (Part 005 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `5 / 56` (**259** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/147.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/147.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39)

#### 5. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L11` → after: `L1644-L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L1644-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/147.js#L1644-L1654) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/147.js#L11)

```diff
-       return wQ.j.toBuffer(QQ)
+       return "object" === typeof MM ? MM.option : MM
+     }
+ 
+     function jM(MM, rM) {
+       var iM;
+       if ("dropdown" === (null === (iM = MM.userInput) || void 0 === iM ? void 0 : iM.type) && "object" === typeof MM.userInput.dropdownOptions[0]) {
+         for (const iM of MM.userInput.dropdownOptions)
+           if (SM(iM) === rM) return "object" === typeof iM ? iM.cost : MM.cost;
+         console.error("Didn't find matching option for dropdown item. Item:", MM, "input:", rM)
+       }
+       return MM.cost
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/148.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/148.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L2)

```diff
- export const ids = [148];
+ export const ids = [148, 151, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L4-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L4-L263) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L4)

```diff
-   8453: (QQ, WQ, XQ) => {
+   7102: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM
+     });
+     var OM = iM(5430),
+       SM = iM(1303);
+     const jM = {
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
+ 
+     function aM(MM) {
+       let {
+ ... (244 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L6-L8` → after: `L265-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L265-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L265-L278) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L6-L8)

```diff
-       BloxdDiscordSDK: () => BQ,
-       DiscordLoginCancelledError: () => jQ,
-       discordPopupTimeoutMs: () => IQ
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L10-L78` → after: `L280-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L280-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L280-L295) · [Before (L10-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L10-L78)

```diff
-     var wQ = XQ(193),
-       qQ = XQ(1263),
-       TQ = XQ(1165),
-       zQ = XQ(1186),
-       sQ = XQ.n(zQ),
-       FQ = XQ(1238),
-       PQ = XQ(43),
-       gQ = XQ(663),
-       JQ = XQ(1404),
-       rQ = XQ(1118);
-     const IQ = 6e5;
-     class jQ extends Error {
-       constructor() {
-         super(...arguments), this.name = TQ.discordLoginCancelledErrorName
-       }
-     }
- ... (53 more removed lines; see GitHub link above)
+     var OM = iM(5442),
+       SM = iM(5435),
+       jM = iM(30),
+       aM = iM(3855),
+       PM = iM(7148),
+       nM = iM(7120);
+     const QM = "shaderPackChangePending";
+     let zM = null;
+ 
+     function LM(MM, rM, iM) {
+       return {
+         manifest: MM.manifest,
+         files: (0, OM.w)(MM.files),
+         validation: rM,
+         ...iM && {
+           listing: iM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L80-L109` → after: `L297-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L297-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L297-L437) · [Before (L80-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L80-L109)

```diff
-         if (console.log("Discord OAuth window opened:", WQ), !WQ) throw new Error("Failed to open Discord authentication popup - popup may have been blocked");
-         this.popupWindow = WQ;
-         const XQ = window.setInterval((() => {
-           WQ.closed && this.popupWindowPromise === QQ && (window.clearInterval(XQ), this.popupWindowCheckInterval = null, window.setTimeout((() => {
-             this.popupWindowPromise === QQ && this.failPopup(new jQ("Discord authentication was cancelled - popup window was closed"))
-           }), 1e3))
-         }), 200);
-         this.popupWindowCheckInterval = XQ
-       }
-       async exchangeAuthorizationCodeForAccessToken(QQ, WQ) {
-         const {
-           accessToken: XQ,
-           refreshToken: wQ
-         } = await sQ()((async () => await (0, TQ.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
-           authorizationCode: QQ,
-           bloxdClientEnvironment: rQ.d.clientEnvironment,
- ... (14 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function mM(MM) {
+       return Object.keys(MM.files).map((rM => ({
+         path: rM,
+         source: MM.files[rM]
+       })))
+     }
+     let HM = Promise.resolve();
+ 
+     function hM(MM) {
+       const rM = HM.then(MM);
+       return HM = rM.catch((() => {})), rM
+     }
+ 
+ ... (125 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L113-L125` → after: `L440-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L440-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L440-L467) · [Before (L113-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L113-L125)

```diff
-           const wQ = await sQ()((async () => {
-             try {
-               return await (0, TQ.postJsonWithMetricsCookiesAndJsonResponse)(`${FQ.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
-                 refreshToken: WQ
-               }, {
-                 retries: 0
-               }, QQ.getMetricsCookies())
-             } catch (XQ) {
-               if (yQ(XQ)) throw new(sQ().AbortError)(XQ);
-               throw XQ
-             }
-           }), {
-             retries: 3
+           const rM = await (0, jM.z)(MM);
+           return rM ? await rM.requestDevice() : null
+         } catch (rM) {
+           return console.error("Couldn't get a WebGPU device to validate the shader pack.", rM), null
+         }
+       }(OM);
+       if (!PM) return null;
+       let nM = !1;
+       PM.lost.then((() => {
+         nM = !0
+       }));
+       try {
+         const rM = await Promise.all(aM.validationModules.map((rM => async function(MM, rM, iM) {
+           rM.pushErrorScope("validation");
+           const OM = rM.createShaderModule({
+               code: iM.code
+ ... (12 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L127-L141` → after: `L469-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L469-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/148.js#L469-L501) · [Before (L127-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/148.js#L127-L141)

```diff
-           XQ = wQ.accessToken, PQ.b.setItem(this.bloxdDiscordRefreshTokenKey, wQ.refreshToken)
-         } catch (wQ) {
-           return yQ(wQ) ? (PQ.b.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", wQ), null)
-         }
-         return {
-           accessToken: XQ
-         }
-       }
-       signOut() {
-         this.failPopup(new jQ("Signed out of Discord during login")), PQ.b.removeItem(this.bloxdDiscordRefreshTokenKey)
-       }
-     }
- 
-     function yQ(QQ) {
-       return QQ instanceof wQ.b && 435 === QQ.httpCode
+           return aM
+         }(MM, PM, rM))));
+         return nM ? null : QM(MM, MM.ciM(rM.flat()), aM.offInStrict)
+       } catch (zM) {
+         return console.error("Couldn't validate the shader pack on WebGPU.", zM), null
+       } finally {
+         PM.destroy()
+       }
+     }
+     async function nM(MM, rM) {
+       var iM;
+       if (!(0, OM.shaderPackNeedsCheck)(MM, rM) || (0, OM.isOtherApiVersion)(MM)) return MM;
+       const SM = await PM(rM, (0, OM.storedShaderPackFiles)(MM));
+       if (!SM) return MM;
+       const jM = !1 === (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.ok) && !MM.validation.fromRecheck,
+         aM = {
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/149.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/149.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/149.js#L4)

```diff
-   8455: (QQ, WQ, XQ) => {
+   7111: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/149.js#L6)

```diff
-       BloxdFirebaseSdk: () => rQ
+       loadPageShaderPackCompiler: () => mr
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L8-L13` → after: `L8-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L8-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/149.js#L8-L603) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/149.js#L8-L13)

```diff
-     var wQ = XQ(1898),
-       qQ = XQ(3158),
-       TQ = XQ(121),
-       zQ = XQ(105),
-       sQ = XQ(1747),
-       FQ = XQ(2115);
+     var OM = {};
+     iM.r(OM), iM.d(OM, {
+       mSM: () => SM,
+       zMM: () => jM,
+       default: () => FM,
+       HSM: () => aM,
+       hSM: () => PM,
+       initSync: () => vM,
+       HQ: () => nM,
+       ciM: () => QM,
+       JSM: () => zM,
+       dSM: () => LM,
+       qD: () => mM,
+       ySM: () => HM,
+       KD: () => hM,
+       lSM: () => JM
+ ... (580 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L15-L20` → after: `L605-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L605-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/149.js#L605-L616) · [Before (L15-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/149.js#L15-L20)

```diff
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
+       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
+       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
+       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
+       bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
+       bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
+       bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
+       bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
+       bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
+       bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
+       bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
+       bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
+       bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L22-L50` → after: `L618-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L618-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/149.js#L618-L738) · [Before (L22-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/149.js#L22-L50)

```diff
-     var gQ = XQ(3176),
-       JQ = XQ(1776);
-     class rQ {
-       constructor() {}
-       static async setup() {
-         try {
-           return await rQ.setupInternal()
-         } catch (QQ) {
-           return console.error("Failed to setup Firebase SDK:", QQ), null
-         }
-       }
-       static async setupInternal() {
-         const QQ = await Promise.all([XQ.e(274), XQ.e(273)]).then((() => XQ(40746))),
-           WQ = await Promise.all([XQ.e(274), XQ.e(275)]).then((() => XQ(40773))),
-           IQ = await Promise.all([XQ.e(274), XQ.e(276)]).then((() => XQ(40779))),
-           jQ = QQ.initializeApp({
- ... (13 more removed lines; see GitHub link above)
+     var jM = iM(5069);
+ 
+     function aM(MM) {
+       const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
+       if (void 0 !== rM) return {
+         sha256: rM,
+         onMismatch: jM.B
+       };
+       throw new OM.f(`${MM} has no release digest, so this build refuses it`)
+     }
+   },
+   7124: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => UM,
+       c: () => GM,
+       f: () => lM,
+ ... (105 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L52-L161` → after: `L740-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L740-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/149.js#L740-L752) · [Before (L52-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/149.js#L52-L161)

```diff
-         IQ.useDeviceLanguage(VQ);
-         const DQ = new IQ.GoogleAuthProvider;
-         DQ.setCustomParameters({
-           prompt: "select_account"
-         });
-         const pQ = new IQ.OAuthProvider(wQ.i[wQ.d.APPLE]),
-           GQ = new IQ.OAuthProvider(wQ.i[wQ.d.MICROSOFT]);
-         GQ.setCustomParameters({
-           prompt: "select_account",
-           tenant: "consumers"
-         });
-         const UQ = {
-           [wQ.d.GOOGLE]: DQ,
-           [wQ.d.APPLE]: pQ,
-           [wQ.d.MICROSOFT]: GQ
-         };
- ... (94 more removed lines; see GitHub link above)
+       return MM
+     }
+ 
+     function jM(MM) {
+       return `${MM.strict?"strict":"allow"}.${MM.program}`
+     }
+ 
+     function aM(MM) {
+       return !MM.hooks.vertex && !MM.hooks.surface && !MM.hooks.light
+     }
+ 
+     function PM(MM, rM) {
+       return "off" !== rM && (null === MM || MM.some((MM => MM.key.strict === ("strict" === rM) && !aM(MM))))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/150.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/150.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L6)

```diff
-   8463: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       BloxdDiscordActivitySdk: () => pQ
+   37257: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => KM,
+       h: () => cM,
+       j: () => TM,
+       k: () => IM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L8-L27` → after: `L11-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L11-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/150.js#L11-L514) · [Before (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/150.js#L8-L27)

```diff
-     var wQ = XQ(8470),
-       qQ = XQ(1263),
-       TQ = XQ(1226),
-       zQ = XQ(663),
-       sQ = XQ(1285),
-       FQ = XQ(1802),
-       PQ = XQ(1376),
-       gQ = XQ(814),
-       JQ = XQ(26),
-       rQ = XQ(1118),
-       IQ = XQ(2447),
-       jQ = function(QQ) {
-         return QQ.APPLICATION_COMMANDS = "applications.commands", QQ.IDENTIFY = "identify", QQ.EMAIL = "email", QQ.GUILDS = "guilds", QQ.READ_DM_CHANNELS = "dm_channels.read", QQ.WRITE_ACTIVITIES = "rpc.activities.write", QQ
-       }(jQ || {}),
-       BQ = function(QQ) {
-         return QQ[QQ.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", QQ[QQ.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", QQ[QQ.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", QQ[QQ.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", QQ[QQ.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", QQ[QQ.RATELIMITE … [truncated]
- ... (4 more removed lines; see GitHub link above)
+     var OM = iM(3185),
+       SM = iM(3205),
+       jM = iM(7116),
+       aM = iM(5069),
+       PM = iM(3196),
+       nM = iM(3188);
+     const QM = "bloxd-wasmDownloaded",
+       zM = 12;
+ 
+     function LM(MM) {
+       return MM.pathname.slice(MM.pathname.lastIndexOf("/") + 1)
+     }
+ 
+     function mM() {
+       try {
+         if ("undefined" === typeof localStorage) return null;
+ ... (488 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L29-L63` → after: `L516-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L516-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/150.js#L516-L535) · [Before (L29-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/150.js#L29-L63)

```diff
-         Minigames: "Playing",
-         Puzzle: "Solving",
-         Escape: "Escaping",
-         Parkour: "Parkouring",
-         "Cool Parkour": "Parkouring",
-         "Two Player Parkour": "Parkouring",
-         "Clutch Parkour": "Parkouring",
-         "Challenging Parkour": "Parkouring",
-         "Progressive Parkour": "Parkouring",
-         "Themed Parkour": "Parkouring",
-         Obby: "Parkouring",
-         Tower: "Climbing",
-         Roleplay: "Roleplaying",
-         Arena: "Battling",
-         Duels: "Duelling",
-         Shooting: "Shooting",
- ... (19 more removed lines; see GitHub link above)
+       bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
+       bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
+       bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
+       bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
+       bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
+       bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
+       bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
+       bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
+       bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
+       bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
+       bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
+       bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
+     };
+     var jM = iM(5069);
+ 
+     function aM(MM) {
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L65-L271` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/150.js#L537) · [Before (L65-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/150.js#L65-L271)

```diff
-     class pQ {
-       constructor(QQ) {
-         this.discordSdk = QQ, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null, this.activityUpdateId = 0
-       }
-       static async setup() {
-         console.log("Setting up Discord SDK with client id", rQ.d.discordClientID);
-         const QQ = new wQ.b(rQ.d.discordClientID);
-         let WQ = !1;
-         setTimeout((() => {
-           WQ || (console.warn("Discord SDK took too long to initialize"), (0, FQ.reloadBloxd)())
-         }), 15e3), await QQ.ready(), WQ = !0;
-         try {
-           const {
-             enabled: WQ
-           } = await QQ.commands.encourageHardwareAcceleration();
-           WQ || console.warn("Hardware acceleration not enabled in the Discord client")
- ... (191 more removed lines; see GitHub link above)
+       throw new OM.f(`${MM} has no release digest, so this build refuses it`)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/151.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/151.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L4-L9` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L4) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L4-L9)

```diff
-   8470: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => TT,
-       e: () => CX
-     });
-     var wQ = {};
+   7120: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L11-L28` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L6-L7) · [Before (L11-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L11-L28)

```diff
-       c: () => ww,
-       k: () => zw,
-       g: () => Tw,
-       l: () => ZX,
-       p: () => NX,
-       t: () => hw,
-       x: () => mX,
-       A: () => Rw,
-       E: () => bw,
-       G: () => Aw,
-       I: () => OX,
-       K: () => dw,
-       M: () => lw,
-       O: () => iw,
-       T: () => KX,
-       R: () => Ww,
- ... (2 more removed lines; see GitHub link above)
+       loadShaderPackTextures: () => aM,
+       shaderPackTextures: () => PM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L30-L324` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L9-L11) · [Before (L30-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L30-L324)

```diff
-     var qQ = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
- 
-     function TQ(QQ) {
-       return QQ && QQ.__esModule && Object.prototype.hasOwnProperty.call(QQ, "default") ? QQ.default : QQ
-     }
-     var zQ = {
-       exports: {}
-     };
-     ! function(QQ) {
-       var WQ = Object.prototype.hasOwnProperty,
-         XQ = "~";
- 
-       function wQ() {}
- 
-       function qQ(QQ, WQ, XQ) {
-         this.NI = QQ, this.context = WQ, this.once = XQ || !1
- ... (279 more removed lines; see GitHub link above)
+     var OM = iM(5442);
+     let SM = null,
+       jM = null;
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L327-L3873` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L14) · [Before (L327-L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L327-L3873)

```diff
-       return BQ
-     }
-     const VQ = QQ => {
-       const {
-         data: WQ,
-         path: XQ,
-         errorMaps: wQ,
-         issueData: qQ
-       } = QQ, TQ = [...XQ, ...qQ.path || []], zQ = {
-         ...qQ,
-         path: TQ
-       };
-       let sQ = "";
-       const FQ = wQ.filter((QQ => !!QQ)).slice().reverse();
-       for (const PQ of FQ) sQ = PQ(zQ, {
-         data: WQ,
- ... (3531 more removed lines; see GitHub link above)
+       return jM ??= Promise.all([iM.e(84), iM.e(204)]).then((() => iM(41585))).then((MM => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L3875` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L16-L18) · [Before (L3875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L3875)

```diff
-           parts: WQ
+           FORMER_BLOCK_IMAGE_NAMES: rM,
+           textureNameToIndex: iM,
+           textureAnimationData: jM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L3877-L4964` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L20-L21) · [Before (L3877-L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L3877-L4964)

```diff
-         return new bX(this.parts.map(((QQ, XQ) => QQ ^ WQ[XQ])))
-       }
-       not() {
-         return new bX(this.parts.map((QQ => ~QQ)))
-       }
-       equals(QQ) {
-         let {
-           parts: WQ
-         } = QQ;
-         return this.parts.every(((QQ, XQ) => QQ === WQ[XQ]))
-       }
-       toString() {
-         if (null != this.str) return this.str;
-         const QQ = new Array(16);
-         return this.parts.forEach(((WQ, XQ) => {
-           const wQ = UX(WQ.toString());
- ... (1072 more removed lines; see GitHub link above)
+         return SM ??= (0, OM.j)(iM, jM, rM), SM
+       })), jM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L5028-L5531` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/151.js#L25) · [Before (L5028-L5531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/151.js#L5028-L5531)

```diff
-       if (!Sq && !(Sq = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRand … [truncated]
-       return Sq(Oq)
-     }
- 
-     function mq(QQ, WQ, XQ) {
-       var wQ = (QQ = QQ || {}).random || (QQ.rng || Kq)();
-       if (wQ[6] = 15 & wQ[6] | 64, wQ[8] = 63 & wQ[8] | 128, WQ) {
-         XQ = XQ || 0;
-         for (var qQ = 0; qQ < 16; ++qQ) WQ[XQ + qQ] = wQ[qQ];
-         return WQ
-       }
-       return fq(wQ)
-     }
- 
-     function Mq(QQ, WQ, XQ, wQ) {
-       switch (QQ) {
- ... (488 more removed lines; see GitHub link above)
+       if (null === SM) throw new Error("Shader pack textures read before loadShaderPackTextures");
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/152.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/152.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L2)

```diff
- export const ids = [152];
+ export const ids = [151, 152];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L4)

```diff
-   8477: (QQ, WQ, XQ) => {
+   7142: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L6-L7` → after: `L6-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L6-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L6-L19) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L6-L7)

```diff
-       BloxdMsnAccountSdk: () => JQ,
-       MsnSdkAdaptor: () => BQ
+       forgetShaderPackActiveHint: () => uM,
+       isOtherApiVersion: () => bM,
+       isShaderPackActive: () => UM,
+       isShaderPackChangePending: () => eM,
+       markShaderPackChangePending: () => CM,
+       pageShaderPackValidationVersion: () => wM,
+       reconcileStoredShaderPackHint: () => gM,
+       removeShaderPack: () => EM,
+       replaceShaderPack: () => dM,
+       saveShaderPack: () => JM,
+       shaderPackNeedsCheck: () => tM,
+       storedPackOutcome: () => GM,
+       storedShaderPackFiles: () => mM,
+       toStoredShaderPack: () => LM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L9-L14` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L21-L27) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L9-L14)

```diff
-     var wQ = XQ(1368),
-       qQ = XQ(1216),
-       TQ = XQ(3727),
-       zQ = XQ(663),
-       sQ = XQ(1786);
-     const FQ = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
+     var OM = iM(5442),
+       SM = iM(5435),
+       jM = iM(30),
+       aM = iM(3855),
+       PM = iM(7148),
+       nM = iM(7120);
+     const QM = "shaderPackChangePending";
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L17-L32` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L30-L36) · [Before (L17-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L17-L32)

```diff
-     function gQ() {
-       return PQ ??= async function() {
-         await (0, qQ.d)(FQ, {}, !1);
-         for (let QQ = 0; QQ < 50 && !window.$msstart; QQ++) await (0, zQ.L)(100)
-       }(), PQ
-     }
-     class JQ {
-       constructor() {}
-       static async setup() {
-         if (null !== (0, sQ.b)()) return new JQ;
-         try {
-           await Promise.race([gQ(), (0, zQ.L)(1e4).then((() => {
-             throw new Error("Not loaded after 10000ms")
-           }))])
-         } catch (QQ) {
-           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", QQ), null
+     function LM(MM, rM, iM) {
+       return {
+         manifest: MM.manifest,
+         files: (0, OM.w)(MM.files),
+         validation: rM,
+         ...iM && {
+           listing: iM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L187-L202` → after: `L42-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L42-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L42-L98) · [Before (L187-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L187-L202)

```diff
-       let WQ, XQ;
-       switch (QQ.placement) {
-         case "top":
-           WQ = (window.innerWidth - QQ.width) / 2, XQ = rQ;
-           break;
-         case "right":
-           WQ = window.innerWidth - QQ.width - rQ, XQ = window.innerHeight / 2 - QQ.height / 2 - 10;
-           break;
-         case "left":
-           WQ = rQ, XQ = window.innerHeight / 2 - QQ.height / 2 - 10
-       }
-       return {
-         x1: WQ,
-         y1: XQ,
-         x2: WQ + QQ.width,
-         y2: XQ + QQ.height
+       return Object.keys(MM.files).map((rM => ({
+         path: rM,
+         source: MM.files[rM]
+       })))
+     }
+     let HM = Promise.resolve();
+ 
+     function hM(MM) {
+       const rM = HM.then(MM);
+       return HM = rM.catch((() => {})), rM
+     }
+ 
+     function JM(MM, rM) {
+       return hM((() => yM(MM, rM)))
+     }
+ 
+ ... (41 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/152.js` (Changed code · before: `L207-L209` → after: `L119-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3280b3b35f9e8443ad10bb17f521724731f11f7b9027ac98e382509f74d5be27) · [After (L119-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/152.js#L119-L161) · [Before (L207-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/152.js#L207-L209)

```diff
-       const XQ = yQ(QQ),
-         wQ = yQ(WQ);
-       return !(XQ.x2 <= wQ.x1 || wQ.x2 <= XQ.x1 || XQ.y2 <= wQ.y1 || wQ.y2 <= XQ.y1)
+       var iM;
+       return (null === (iM = MM.validation) || void 0 === iM ? void 0 : iM.headerVersion) !== wM(rM)
+     }
+ 
+     function gM(MM) {
+       return hM((async () => {
+         RM(await (0, PM.d)(!0), MM)
+       }))
+     }
+ 
+     function uM() {
+       return hM((async () => {
+         jM.g.removeItem(aM.c)
+       }))
+     }
+ 
+ ... (27 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/153.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/153.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L4` → after: `L4-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L4-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L4-L749) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L4)

```diff
-   8482: (QQ, WQ, XQ) => {
+   34880: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => PM,
+       e: () => aM
+     });
+     var OM = iM(243),
+       SM = iM(114),
+       jM = iM(34885);
+ 
+     function aM() {
+       var MM, rM, iM;
+       return null !== (MM = (0, OM.p)(null !== (rM = null === (iM = (0, SM.o)()) || void 0 === iM ? void 0 : iM.renderer) && void 0 !== rM ? rM : null, (0, SM.k)())) && void 0 !== MM ? MM : "unknown"
+     }
+ 
+     function PM(MM, rM, iM, OM, SM) {
+       const aM = null === rM ? "untimed" : `${Math.round(rM)} ms`;
+ ... (730 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L6` → after: `L751-L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L751-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L751-L824) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => TQ
+       BUILT_IN_ANIMATIONS_SITE: () => TM,
+       CORE_ERRORS_SITE: () => NM,
+       EVENT_OVERFLOW_SITE: () => qM,
+       FIRST_VIEW_SITE: () => Mr,
+       JOIN_SITE: () => xM,
+       LEAVE_SITE: () => vM,
+       MAIN_THREAD_SITE: () => rr,
+       MODEL_FEED_SITE: () => FM,
+       MODEL_POOL_SITE: () => BM,
+       NON_FATAL_LOKI_REPORTS_PER_PAGE: () => jr,
+       NON_FATAL_REPORTS_PER_SESSION: () => er,
+       PREVIEW_ANIMATIONS_SITE: () => KM,
+       RENDER_RELOAD_SITE: () => IM,
+       REQUEST_DEVICE_SITE: () => ir,
+       TEXTURE_NAMES_SITE: () => XM,
+       TEXTURE_PACK_FEED_SITE: () => VM,
+ ... (58 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L8-L10` → after: `L826-L2067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L826-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L826-L2067) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L8-L10)

```diff
-     var wQ = XQ(1368),
-       qQ = XQ(1216);
-     class TQ extends wQ.c {
+     var OM = iM(1073),
+       SM = iM(1382),
+       jM = iM(1373),
+       aM = iM(1329),
+       PM = iM(243),
+       nM = iM(3270),
+       QM = iM(4654),
+       zM = iM(41840),
+       LM = iM(5198),
+       mM = iM(41846),
+       HM = iM(34885),
+       hM = iM(3324),
+       JM = iM(34880),
+       dM = iM(39814),
+       yM = iM(119),
+       lM = iM(114),
+ ... (1226 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L12` → after: `L2069-L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L2069-L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L2069-L2071) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L12)

```diff
-         super(), this.setOnEndCb = QQ, this.name = "gamedistribution"
+         super(`the join's code did not load: ${MM instanceof Error?MM.message:String(MM)}`, {
+           cause: MM
+         }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === MM || void 0 === MM ? void 0 : MM.request
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L14` → after: `L2073-L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L2073-L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L2073-L2383) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L14)

```diff
-       static async setup() {
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
+       } catch (iM) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", iM)
+       }
+     }
+ 
+     function zM() {
+ ... (295 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L17-L46` → after: `L2491-L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L2491-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L2491-L2521) · [Before (L17-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L17-L46)

```diff
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: XQ => {
-             const wQ = () => {
-               WQ && (window.adCompleteSoResume(), WQ = !1), QQ && (QQ(), QQ = null)
-             };
-             switch (XQ.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), WQ = !1, QQ ? (QQ(), QQ = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), WQ = !0;
-                 break;
-               case "SDK_ERROR":
- ... (14 more removed lines; see GitHub link above)
+         try {
+           iM = await this.wanted(MM)
+         } catch {
+           return
+         }(null !== (rM = iM.url) && void 0 !== rM ? rM : void 0) === this.drawn.get(MM) || this.pending.has(MM) || this.written.has(MM) || this.fetch(MM, this.JL(MM, !1), iM.url, iM.inPlaceOf)
+       }
+       drain(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+         if (null === MM) return;
+         let iM = 0,
+           OM = 0;
+         for (; OM < this.ready.length && iM < 262144;) {
+           const PM = this.ready[OM];
+           if (this.written.has(PM.file)) {
+             OM++;
+             continue
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L49-L52` → after: `L2529-L3845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L2529-L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L2529-L3845) · [Before (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L49-L52)

```diff
-         }, await (0, qQ.d)("https://html5.api.gamedistribution.com/main.min.js", {
-           id: "gamedistribution-jssdk"
-         }), new TQ((WQ => {
-           QQ = WQ
+         }
+       }
+     }
+ 
+     function hM(MM) {
+       return new mM(`presentation refused ${JM(MM)}`)
+     }
+ 
+     function JM(MM) {
+       return MM.startsWith("data:") ? `${MM.slice(0,Math.min(Math.max(MM.indexOf(","),5),64))},...` : MM
+     }
+   },
+   41884: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM,
+       f: () => jM,
+ ... (1301 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L55-L56` → after: `L3848-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L3848-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L3848-L3868) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L55-L56)

```diff
-       playVideoAd(QQ, WQ) {
-         this.setOnEndCb(QQ), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
+     }
+   },
+   41812: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => PM,
+       g: () => nM
+     });
+     var OM = iM(114);
+     let SM = !1;
+ 
+     function jM() {
+       let MM = null;
+       try {
+         return MM = document.createElement("canvas").getContext("webgl2"), null !== MM
+       } catch {
+         return !1
+ ... (5 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/153.js` (Changed code · before: `L58-L61` → after: `L3870-L3946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6R3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f78d3b4852b344fb370f3cbb1f267ea53df8d91a1e399f4e19fa4f28001fa3a6) · [After (L3870-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/153.js#L3870-L3946) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/153.js#L58-L61)

```diff
-       renderBanner(QQ) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(QQ.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, QQ.divId), window.gdsdk.showAd … [truncated]
-           containerId: QQ.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((QQ => console.info(QQ)))) : console.error("window.gdsdk.AdType.Display is undefined")
+     }
+ 
+     function aM() {
+       "hidden" === document.visibilityState && (SM = !1, document.removeEventListener("visibilitychange", aM))
+     }
+ 
+     function PM() {
+       SM || "visible" !== document.visibilityState || !(0, OM.q)() && !jM() || (SM = !0, document.addEventListener("visibilitychange", aM))
+     }
+ 
+     function nM() {
+       return SM || jM()
+     }
+   },
+   41971: (MM, rM, iM) => {
+     MM.exports = iM.p + "static/media/bloxd_wasm_models_bg.20cde5d06eea3961364a.wasm"
+ ... (61 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/154.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/154.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L4` → after: `L4-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L4-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/154.js#L4-L222) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/154.js#L4)

```diff
-   8486: (QQ, WQ, XQ) => {
+   7124: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => UM,
+       c: () => GM,
+       f: () => lM,
+       g: () => yM
+     });
+     var OM = iM(7131);
+     const SM = 6,
+       jM = 3,
+       aM = 1,
+       PM = 2,
+       nM = 4,
+       QM = 8,
+       zM = 16,
+       LM = 32,
+ ... (203 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/154.js` (Changed code · before: `L6-L54` → after: `L224-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1046c65a615e3aa10d1c8558616eca6d4fb274ec524214f2cebcc939898843a4) · [After (L224-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/154.js#L224-L245) · [Before (L6-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/154.js#L6-L54)

```diff
-       CoolMathGamesSdkAdaptor: () => TQ
-     });
-     var wQ = XQ(1368),
-       qQ = XQ(1216);
-     class TQ extends wQ.c {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const QQ = document.getElementsByClassName("ads-popup");
-         for (const WQ of QQ) WQ instanceof HTMLElement && (WQ.style.position = "fixed")
- ... (33 more removed lines; see GitHub link above)
+       SHADER_PACK_INPUTS_BINDING: () => jM.b,
+       SHADER_PACK_INPUTS_GROUP: () => jM.f,
+       SHADER_PACK_INPUTS_SIZE: () => jM.h,
+       SHADER_PACK_INPUTS_VAR: () => jM.i,
+       SHADER_PACK_MODES: () => jM.l,
+       SHADER_PACK_PROGRAMS: () => OM.e,
+       SHADER_PACK_SCENE_DEPTH_BINDING: () => jM.n,
+       SHADER_PACK_SUN_SHADOW_BINDINGS: () => jM.p,
+       SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => jM.q,
+       SHADER_PACK_TEXTURES_BINDING: () => jM.r,
+       encodeTextureLayers: () => jM.s,
+       flattenVariants: () => SM.b,
+       isVariantOff: () => OM.h,
+       packRunsIn: () => OM.l,
+       shaderPackInputsWgsl: () => jM.w,
+       shaderPackVariantKeys: () => OM.m,
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/155.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/155.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/155.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/155.js#L4)

```diff
-   8493: (QQ, WQ, XQ) => {
+   44389: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/155.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/155.js#L6)

```diff
-       AdMobSdkAdaptor: () => gQ
+       compilePagePack: () => QM,
+       prefetchCompiler: () => PM,
+       reconcileHint: () => nM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L8-L102` → after: `L10-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L10-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/155.js#L10-L256) · [Before (L8-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/155.js#L8-L102)

```diff
-     var wQ = XQ(1368),
-       qQ = XQ(26),
-       TQ = XQ(1747),
-       zQ = XQ(158),
-       sQ = XQ(3727),
-       FQ = XQ(402);
-     const PQ = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (79 more removed lines; see GitHub link above)
+     var OM = iM(7111),
+       SM = iM(7142),
+       jM = iM(7120),
+       aM = iM(7134);
+ 
+     function PM() {
+       (0, OM.loadPageShaderPackCompiler)()
+     }
+     async function nM() {
+       const MM = await (0, OM.loadPageShaderPackCompiler)();
+       await (MM ? (0, SM.reconcileStoredShaderPackHint)(MM) : (0, SM.forgetShaderPackActiveHint)())
+     }
+     async function QM(MM) {
+       const rM = await (0, OM.loadPageShaderPackCompiler)();
+       if (!rM) return {
+         status: "none"
+ ... (231 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/155.js` (Changed code · before: `L104-L117` → after: `L258-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e1b235b0ffbb9706a5141c311e9f29cce3be814197bcd768d18b4ddb706811b4) · [After (L258-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/155.js#L258-L267) · [Before (L104-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/155.js#L104-L117)

```diff
-         this.bannerPlacementByBloxdId.set(WQ, XQ), console.log(`AD ${WQ}: AdMob renderBanner placementId=${XQ} box=`, gQ), TQ.e.emit("ads.showBanner", {
-           placementId: XQ,
-           ...gQ
-         })
-       }
-       clearBanner(QQ) {
-         const WQ = (0, sQ.b)(QQ),
-           XQ = this.bannerPlacementByBloxdId.get(WQ);
-         void 0 !== XQ && (this.bannerPlacementByBloxdId.delete(WQ), this.bannerFirstResponseSeen.delete(XQ), console.log(`AD ${WQ}: AdMob clearBanner placementId=${XQ}`), TQ.e.emit("ads.hideBanner", {
-           placementId: XQ
-         }))
-       }
-       canShowBloxdAd(QQ) {
-         return !1
+       return await (0, OM.replaceShaderPack)(MM, aM, rM) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), aM
+     }
+ 
+     function QM(MM, rM, iM) {
+       return {
+         headerVersion: (0, OM.pageShaderPackValidationVersion)(MM),
+         ok: 0 === rM.length,
+         errors: rM.slice(0, aM),
+         moreErrors: Math.max(0, rM.length - aM),
+         offInStrict: iM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/156.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/156.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/156.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/156.js#L4)

```diff
-   8504: (QQ, WQ, XQ) => {
+   7154: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/156.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/156.js#L6)

```diff
-       e: () => PQ
+       encodeBinaryMessageWithMetricsCookies: () => SM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L8-L32` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/156.js#L8) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/156.js#L8-L32)

```diff
-     var wQ = XQ(3158);
-     const qQ = [1, 8, 9],
-       TQ = 5,
-       zQ = 200,
-       sQ = 150;
- 
-     function FQ(QQ, WQ) {
-       let XQ = 0;
-       QQ("addEventListener", 2, ((QQ, zQ) => {
-         if (!zQ) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const sQ = function(QQ) {
-           const WQ = "useractioncomplete" === QQ.eventStatus || "tcloaded" === QQ.eventStatus && !!QQ.tcString;
-           return QQ.gdprApplies && WQ ? qQ.every((WQ => !0 === QQ.purpose.consents[WQ])) : null
-         }(QQ);
-         if (null === sQ) return;
-         const FQ = ++XQ;
- ... (9 more removed lines; see GitHub link above)
+     var OM = iM(4129);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/156.js` (Changed code · before: `L35-L110` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfbR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb36297a0276f77fd71b4d140c79e309981e5fef5b07e691d600b8b709757cfb) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/156.js#L11) · [Before (L35-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/156.js#L35-L110)

```diff
-       if (window.__tcfapi) return void FQ(window.__tcfapi, QQ);
-       let WQ = 0;
-       const XQ = window.setInterval((() => {
-         WQ++;
-         const wQ = window.__tcfapi;
-         wQ ? (window.clearInterval(XQ), FQ(wQ, QQ)) : WQ >= sQ && window.clearInterval(XQ)
-       }), zQ)
-     }
-   },
-   8498: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       AdinPlaySdkAdaptor: () => PQ
-     });
-     var wQ = XQ(1368),
-       qQ = XQ(1216),
-       TQ = XQ(260),
- ... (60 more removed lines; see GitHub link above)
+       return OM.i.toBuffer(MM)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/157.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/157.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/157.js#L4-L6)

```diff
-   8504: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => PQ
+   7167: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       BloxdDiscordSDK: () => JM,
+       DiscordLoginCancelledError: () => hM,
+       discordPopupTimeoutMs: () => HM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L8-L27` → after: `L10-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L10-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/157.js#L10-L30) · [Before (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/157.js#L8-L27)

```diff
-     var wQ = XQ(3158);
-     const qQ = [1, 8, 9],
-       TQ = 5,
-       zQ = 200,
-       sQ = 150;
- 
-     function FQ(QQ, WQ) {
-       let XQ = 0;
-       QQ("addEventListener", 2, ((QQ, zQ) => {
-         if (!zQ) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
-         const sQ = function(QQ) {
-           const WQ = "useractioncomplete" === QQ.eventStatus || "tcloaded" === QQ.eventStatus && !!QQ.tcString;
-           return QQ.gdprApplies && WQ ? qQ.every((WQ => !0 === QQ.purpose.consents[WQ])) : null
-         }(QQ);
-         if (null === sQ) return;
-         const FQ = ++XQ;
- ... (4 more removed lines; see GitHub link above)
+     var OM = iM(143),
+       SM = iM(1232),
+       jM = iM(1144),
+       aM = iM(1154),
+       PM = iM.n(aM),
+       nM = iM(1202),
+       QM = iM(30),
+       zM = iM(625),
+       LM = iM(1429),
+       mM = iM(1211);
+     const HM = 6e5;
+     class hM extends Error {
+       constructor() {
+         super(...arguments), this.name = jM.discordLoginCancelledErrorName
+       }
+     }
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L29-L31` → after: `L32-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L32-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/157.js#L32-L137) · [Before (L29-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/157.js#L29-L31)

```diff
-           FQ === XQ && (0, wQ.updateAnalyticsConsent)(WQ && !0 === (null === (qQ = QQ.nonIabVendorConsents) || void 0 === qQ ? void 0 : qQ[TQ]))
-         })) : console.warn("TCF CMP reported a choice but its __tcfapi is gone, so our consent defaults stand")
-       }))
+           if (rM.origin !== MM || "oauth_authentication_discord" !== (null === (iM = rM.data) || void 0 === iM ? void 0 : iM.type)) return;
+           if ("string" !== typeof rM.data.code || !rM.data.code) return void this.failPopup(new hM("Discord authentication was cancelled on Discord"));
+           const OM = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === OM || void 0 === OM || OM(rM.data.code)
+         }))
+       }
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+       }
+       failPopup(MM) {
+         var rM;
+         const iM = this.popupWindowPromiseReject;
+         null === (rM = this.popupWindow) || void 0 === rM || rM.close(), this.resetPopupState(), null === iM || void 0 === iM || iM(MM)
+       }
+       openDiscordOAuthWindow() {
+         const MM = mM.e.discordClientID;
+ ... (90 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/157.js` (Changed code · before: `L35-L183` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-65e5e026d631198eb69b45f00299a73ff32888a2cf1dee108a0033dce41d5e94) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/157.js#L141) · [Before (L35-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/157.js#L35-L183)

```diff
-       if (window.__tcfapi) return void FQ(window.__tcfapi, QQ);
-       let WQ = 0;
-       const XQ = window.setInterval((() => {
-         WQ++;
-         const wQ = window.__tcfapi;
-         wQ ? (window.clearInterval(XQ), FQ(wQ, QQ)) : WQ >= sQ && window.clearInterval(XQ)
-       }), zQ)
-     }
-   },
-   8524: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       NitroSdkAdaptor: () => FQ
-     });
-     var wQ = XQ(1368),
-       qQ = XQ(1216),
-       TQ = XQ(8504),
- ... (133 more removed lines; see GitHub link above)
+       return MM instanceof OM.e && 435 === MM.httpCode
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/158.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/158.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961)

#### 1. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/158.js#L4)

```diff
-   8513: (QQ, WQ, XQ) => {
+   7173: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/158.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/158.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => TQ
+       BloxdFirebaseSdk: () => mM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L8-L12` → after: `L8-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L8-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/158.js#L8-L31) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/158.js#L8-L12)

```diff
-     var wQ = XQ(1368),
-       qQ = XQ(1216);
-     class TQ extends wQ.c {
-       constructor() {
-         super(), this.name = "adsense"
+     var OM = iM(1940),
+       SM = iM(3241),
+       jM = iM(94),
+       aM = iM(83),
+       PM = iM(1771),
+       nM = iM(2157);
+     const QM = {
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
+     };
+     var zM = iM(3258),
+       LM = iM(1810);
+ ... (8 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L14-L21` → after: `L33-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L33-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/158.js#L33-L77) · [Before (L14-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/158.js#L14-L21)

```diff
-       static async setup() {
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(QQ) {
-           window.adsbygoogle.push(QQ)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
+       static async setupInternal() {
+         const MM = await Promise.all([iM.e(293), iM.e(292)]).then((() => iM(41593))),
+           rM = await Promise.all([iM.e(293), iM.e(294)]).then((() => iM(41619))),
+           HM = await Promise.all([iM.e(293), iM.e(295)]).then((() => iM(41628))),
+           hM = MM.initializeApp({
+             ...QM,
+             measurementId: SM.bloxdGa4MeasurementId
+           });
+         (0, SM.setUpGtag)(), window.gtag("config", SM.bloxdGa4MeasurementId), (0, SM.markBloxdGa4Configured)(), window.gtag("config", "AW-16469618203");
+         const JM = rM.getAnalytics(hM),
+           dM = {
+             portal: jM.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         rM.setUserProperties(JM, dM);
+         const yM = HM.initializeAuth(hM, {
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L23-L47` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/158.js#L79-L80) · [Before (L23-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/158.js#L23-L47)

```diff
-         }), await (0, qQ.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new TQ
-       }
-       playVideoAd(QQ, WQ) {
-         console.log("playPreroll requested");
-         let XQ = !1;
-         const wQ = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), XQ = !0, QQ()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === WQ ? "start" : "next",
-           name: WQ,
-           beforeAd: () => {
- ... (9 more removed lines; see GitHub link above)
+           onIdTokenChanged(MM) {
+             HM.onIdTokenChanged(yM, MM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/158.js` (Changed code · before: `L49` → after: `L82-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b1e7e80c608af0d992c972b7e52427e70d0cd1ef0506287f3d00db804f654961) · [After (L82-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/158.js#L82-L160) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/158.js#L49)

```diff
-         })
+           canSignIn() {
+             return !0
+           }
+           async signInWithPopup(MM) {
+             var rM;
+             const iM = await HM.signInWithPopup(yM, GM[MM]);
+             return null !== (rM = null === iM || void 0 === iM ? void 0 : iM.user) && void 0 !== rM ? rM : null
+           }
+           async getCurrentUser(MM) {
+             const rM = yM.currentUser;
+             if (!rM) return null;
+             const {
+               signInProvider: iM
+             } = await rM.getIdTokenResult(!1);
+             return iM === OM.j[MM] ? rM : null
+           }
+ ... (63 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/159.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/159.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131)

#### 1. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L4)

```diff
-   8517: (QQ, WQ, XQ) => {
+   7180: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L6)

```diff
-       AditudeSdkAdaptor: () => zQ
+       BloxdDiscordActivitySdk: () => EM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L8-L9` → after: `L8-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L8-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L8-L27) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L8-L9)

```diff
-     var wQ = XQ(1368),
-       qQ = XQ(1216);
+     var OM = iM(7185),
+       SM = iM(1232),
+       jM = iM(1188),
+       aM = iM(625),
+       PM = iM(1258),
+       nM = iM(1830),
+       QM = iM(1373),
+       zM = iM(821),
+       LM = iM(19),
+       mM = iM(1211),
+       HM = iM(2482),
+       hM = function(MM) {
+         return MM.APPLICATION_COMMANDS = "applications.commands", MM.IDENTIFY = "identify", MM.EMAIL = "email", MM.GUILDS = "guilds", MM.READ_DM_CHANNELS = "dm_channels.read", MM.WRITE_ACTIVITIES = "rpc.activities.write", MM
+       }(hM || {}),
+       JM = function(MM) {
+         return MM[MM.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", MM[MM.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", MM[MM.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", MM[MM.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", MM[MM.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", MM[MM.RATELIMITE … [truncated]
+ ... (4 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L11-L16` → after: `L29-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L29-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L29-L67) · [Before (L11-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L11-L16)

```diff
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class zQ extends wQ.c {
-       constructor() {
-         super(), this.name = "aditude"
+         Minigames: "Playing",
+         Puzzle: "Solving",
+         Escape: "Escaping",
+         Parkour: "Parkouring",
+         "Cool Parkour": "Parkouring",
+         "Two Player Parkour": "Parkouring",
+         "Clutch Parkour": "Parkouring",
+         "Challenging Parkour": "Parkouring",
+         "Progressive Parkour": "Parkouring",
+         "Themed Parkour": "Parkouring",
+         Obby: "Parkouring",
+         Tower: "Climbing",
+         Roleplay: "Roleplaying",
+         Arena: "Battling",
+         Duels: "Duelling",
+         Shooting: "Shooting",
+ ... (23 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L19-L35` → after: `L70-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L70-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L70-L116) · [Before (L19-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L19-L35)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, qQ.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new zQ
-       }
-       playVideoAd(QQ, WQ) {
-         this.playVideoOrRewarded("video", QQ, QQ)
-       }
-       playRewarded(QQ, WQ) {
-         this.playVideoOrRewarded("rewarded", QQ, WQ)
-       }
-       renderBanner(QQ) {
-         const WQ = this.getBaseDivId(QQ.adId, QQ.width, QQ.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: QQ.divId,
-             baseDivId: WQ
- ... (1 more removed lines; see GitHub link above)
+         console.log("Setting up Discord SDK with client id", mM.e.discordClientID);
+         const MM = new OM.b(mM.e.discordClientID);
+         let rM = !1;
+         setTimeout((() => {
+           rM || (console.warn("Discord SDK took too long to initialize"), (0, nM.reloadBloxd)())
+         }), 15e3), await MM.ready(), rM = !0;
+         try {
+           const {
+             enabled: rM
+           } = await MM.commands.encourageHardwareAcceleration();
+           rM || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (SM) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", SM)
+         }
+         const iM = new EM(MM);
+         return iM.isMobilePlatform() && (iM.applyDiscordSafeAreaNotch(), window.addEventListener("resize", (() => {
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L38-L41` → after: `L119-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L119-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L119-L136) · [Before (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L38-L41)

```diff
-       getBaseDivId(QQ, WQ, XQ) {
-         return `pb-slot-bloxdio-${WQ}-${XQ}${QQ>1?`-${QQ}`:""}`
-       }
-       playVideoOrRewarded(QQ, WQ, XQ) {
+       async getInGameDescriptions() {
+         const MM = (0, QM.e)(),
+           {
+             verb: rM,
+             title: iM
+           } = await this.getGameVerbAndTitle(MM.requestedGameNameWithVariation);
+         if ((0, QM.k)(MM)) return {
+           primary: `${rM} in a Discord World`
+         };
+         const OM = `${rM} in ${iM}`;
+         return (0, aM.J)(MM.lobbyName) ? {
+           primary: OM
+         } : {
+           primary: OM,
+           secondary: `Lobby ${MM.lobbyName}`
+         }
+ ... (2 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L43-L46` → after: `L138-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L138-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L138-L258) · [Before (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L43-L46)

```diff
-         let qQ = !1;
-         const zQ = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", qQ = !0
-           },
+         const iM = "Playing";
+         if ((0, aM.J)(MM)) return {
+           verb: iM,
+           title: "Bloxd"
+         };
+         const OM = (0, zM.m)(MM);
+         var SM;
+         if (null !== OM) return {
+           verb: null !== (SM = lM[MM]) && void 0 !== SM ? SM : yM[OM.type],
+           title: await (0, jM.y)(PM.c.ENGLISH, OM.title)
+         };
+         const nM = await (0, HM.d)(MM);
+         return {
+           verb: null !== (rM = nM && yM[nM.gameCategory]) && void 0 !== rM ? rM : iM,
+           title: (null === nM || void 0 === nM ? void 0 : nM.name) || "a Custom World"
+         }
+ ... (105 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L48` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L260-L261) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L48)

```diff
-             console.error(`AD: Error while playing Aditude video ad: ${QQ}:`, WQ), zQ(), XQ()
+             const OM = parseFloat(MM.getPropertyValue(`--discord-safe-area-inset-${rM}`));
+             return isNaN(OM) || 0 === iM ? 0 : OM / iM * 100
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L50-L76` → after: `L263-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L263-L268) · [Before (L50-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L50-L76)

```diff
-         if (console.log(`AD: Requesting Aditude ${QQ} ad`), void 0 === (null === (wQ = window.tude) || void 0 === wQ ? void 0 : wQ.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${QQ} ad playing`), void sQ("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: TQ[QQ],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((XQ => {
-               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), XQ.on("playerClose", ((XQ, wQ) => {
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${QQ} ad`), zQ(), WQ()
-               })).on("adPrefetchError", ((QQ, WQ) => {
-                 console.log("AD: Inside Aditude player.on adPrefetchError"), sQ("Prefetch error", WQ)
-               })).on("adError", ((QQ, WQ) => {
-                 console.log("AD: Inside Aditude player.on adError"), sQ("Generic error", WQ)
-               }));
- ... (11 more removed lines; see GitHub link above)
+         LM.d.set({
+           notchSize: {
+             top: rM("top", window.innerHeight),
+             right: Math.max(rM("right", window.innerWidth), 7),
+             bottom: 0,
+             left: rM("left", window.innerWidth)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/159.js` (Changed code · before: `L78` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b0d93ee40d54a6456db96caa75e4eb81844fc94d67f2ca6312acf531d7bb6131) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/159.js#L270) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/159.js#L78)

```diff
-         }))
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/160.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/160.js` (87 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L4)

```diff
-   9244: (QQ, WQ, XQ) => {
+   7185: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L6` → after: `L6-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6-L28) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L6)

```diff
-       d: () => sQ
+       b: () => aj,
+       e: () => oi
+     });
+     var OM = {};
+     iM.r(OM), iM.d(OM, {
+       c: () => jO,
+       g: () => nO,
+       f: () => PO,
+       h: () => Ti,
+       l: () => qi,
+       m: () => pO,
+       n: () => MO,
+       q: () => DO,
+       u: () => bO,
+       x: () => sO,
+       y: () => Vi,
+ ... (7 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L8-L11` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L30) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L8-L11)

```diff
-     var wQ = XQ(26),
-       qQ = XQ(1226),
-       TQ = XQ(5349),
-       zQ = XQ(1145);
+     var SM = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L14-L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L33) · [Before (L14-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L14-L32)

```diff
-       let {
-         note: WQ
-       } = QQ;
-       const {
-         t: XQ
-       } = (0, qQ.C)(), {
-         clientEscMenuOptions: sQ
-       } = (0, wQ.n)(["clientEscMenuOptions"]);
-       return (0, zQ.jsx)(TQ.e, {
-         label: XQ("touchSettings:actionButtons"),
-         checked: sQ.touchActionButtons,
-         onClick: QQ => {
-           wQ.b.setClientEscMenuOptions({
-             touchActionButtons: QQ
-           })
-         },
- ... (3 more removed lines; see GitHub link above)
+       return MM && MM.__esModule && Object.prototype.hasOwnProperty.call(MM, "default") ? MM.default : MM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L34-L62` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L35-L36) · [Before (L34-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L34-L62)

```diff
-   },
-   9228: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => nX,
-       f: () => eX
-     });
-     var wQ = XQ(1226),
-       qQ = XQ(61),
-       TQ = XQ(2061),
-       zQ = XQ(2067),
-       sQ = XQ(1081),
-       FQ = XQ.n(sQ),
-       PQ = XQ(1507),
-       gQ = XQ(26),
-       JQ = XQ(105),
-       rQ = XQ(129),
- ... (13 more removed lines; see GitHub link above)
+     var aM = {
+       exports: {}
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L64-L110` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L38-L40) · [Before (L64-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L64-L110)

```diff
-     var vQ = XQ(9246);
-     var dQ = XQ(1532),
-       HQ = XQ(1404),
-       aQ = XQ(9255),
-       lQ = XQ(1468),
-       hQ = XQ(1094),
-       iQ = XQ(9257),
-       cQ = XQ(2563);
-     const AQ = {
-         sprint: "joystick",
-         jump: "cluster",
-         crouch: "cluster",
-         attack: "cluster",
-         use: "cluster",
-         extra: "cluster",
-         game: "cluster",
- ... (31 more removed lines; see GitHub link above)
+     ! function(MM) {
+       var rM = Object.prototype.hasOwnProperty,
+         iM = "~";
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L112-L121` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L42) · [Before (L112-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L112-L121)

```diff
-     function NQ(QQ, WQ, XQ, wQ) {
-       const qQ = XQ(function(QQ, WQ) {
-           return "attack" !== QQ || WQ ? xQ[QQ].label : "hudLayout:attackContext"
-         }(QQ, WQ)),
-         TQ = wQ[QQ];
-       return TQ ? XQ("hudLayout:slotWithKey", {
-         slot: qQ,
-         key: TQ
-       }) : qQ
-     }
+       function OM() {}
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L123-L125` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L44-L46) · [Before (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L123-L125)

```diff
-     function ZQ(QQ, WQ, XQ, wQ) {
-       return QQ.map((QQ => NQ(QQ, WQ, XQ, wQ))).join(", ")
-     }
+       function SM(MM, rM, iM) {
+         this.jL = MM, this.context = rM, this.once = iM || !1
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L127-L135` → after: `L48-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L48-L53) · [Before (L127-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L127-L135)

```diff
-     function OQ(QQ) {
-       let {
-         className: WQ,
-         keepPlace: XQ
-       } = QQ;
-       return XQ ? (0, UQ.jsx)("div", {
-         className: FQ()(WQ, "Placeholder")
-       }) : null
-     }
+       function jM(MM, rM, OM, jM, aM) {
+         if ("function" !== typeof OM) throw new TypeError("The listener must be a function");
+         var PM = new SM(OM, jM || MM, aM),
+           nM = iM ? iM + rM : rM;
+         return MM._events[nM] ? MM._events[nM].jL ? MM._events[nM] = [MM._events[nM], PM] : MM._events[nM].push(PM) : (MM._events[nM] = PM, MM._eventsCount++), MM
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L137-L168` → after: `L55-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L55-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L55-L57) · [Before (L137-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L137-L168)

```diff
-     function KQ(QQ) {
-       let {
-         id: WQ,
-         elements: XQ,
-         actionButtons: qQ,
-         keyNames: TQ,
-         className: zQ,
-         keepPlace: sQ,
-         onHidden: FQ
-       } = QQ;
-       const {
-         t: gQ
-       } = (0, wQ.C)();
-       if (!xQ[WQ].hide) return (0, UQ.jsx)(OQ, {
-         className: zQ,
-         keepPlace: sQ
- ... (16 more removed lines; see GitHub link above)
+       function aM(MM, rM) {
+         0 === --MM._eventsCount ? MM._events = new OM : delete MM._events[rM]
+       }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L170-L203` → after: `L59-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L59-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L59-L172) · [Before (L170-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L170-L203)

```diff
-     function mQ(QQ) {
-       let {
-         id: WQ,
-         elements: XQ,
-         actionButtons: qQ,
-         keyNames: TQ,
-         className: zQ,
-         keepPlace: sQ,
-         onlyWhenMoved: FQ,
-         locked: gQ,
-         onReset: JQ
-       } = QQ;
-       const {
-         t: rQ
-       } = (0, wQ.C)(), IQ = xQ[WQ], jQ = (0, cQ.J)(XQ[WQ]);
-       return !IQ.move && !IQ.scale || FQ && jQ ? (0, UQ.jsx)(OQ, {
- ... (18 more removed lines; see GitHub link above)
+       function PM() {
+         this._events = new OM, this._eventsCount = 0
+       }
+       Object.create && (OM.prototype = Object.create(null), (new OM).__proto__ || (iM = !1)), PM.prototype.eventNames = function() {
+         var MM, OM, SM = [];
+         if (0 === this._eventsCount) return SM;
+         for (OM in MM = this._events) rM.call(MM, OM) && SM.push(iM ? OM.slice(1) : OM);
+         return Object.getOwnPropertySymbols ? SM.concat(Object.getOwnPropertySymbols(MM)) : SM
+       }, PM.prototype.listeners = function(MM) {
+         var rM = iM ? iM + MM : MM,
+           OM = this._events[rM];
+         if (!OM) return [];
+         if (OM.jL) return [OM.jL];
+         for (var SM = 0, jM = OM.length, aM = new Array(jM); SM < jM; SM++) aM[SM] = OM[SM].jL;
+         return aM
+       }, PM.prototype.listenerCount = function(MM) {
+ ... (98 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L207-L241` → after: `L326-L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L326-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L326-L327) · [Before (L207-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L207-L241)

```diff
-     function MQ(QQ) {
-       let {
-         id: WQ,
-         actionButtons: XQ,
-         keyNames: qQ,
-         className: TQ,
-         keepPlace: zQ,
-         locked: sQ,
-         lockable: FQ,
-         onLocked: gQ
-       } = QQ;
-       const {
-         t: JQ
-       } = (0, wQ.C)();
-       return FQ || sQ ? (0, UQ.jsx)(PQ.T, {
-         className: TQ,
- ... (19 more removed lines; see GitHub link above)
+     function dM() {
+       return JM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L243-L250` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L329) · [Before (L243-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L243-L250)

```diff
- 
-     function QW(QQ) {
-       let {
-         className: WQ,
-         open: XQ,
-         name: qQ,
-         onToggle: TQ
-       } = QQ;
+     const yM = MM => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L252-L271` → after: `L331-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L331-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L331-L350) · [Before (L252-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L252-L271)

```diff
-         t: zQ
-       } = (0, wQ.C)();
-       return (0, UQ.jsx)(PQ.T, {
-         className: WQ,
-         ariaLabel: zQ(XQ ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
-           name: qQ
-         }),
-         pressed: XQ,
-         analyticsClick: {
-           id: "hud_layout.children",
-           value: XQ ? "close" : "open"
-         },
-         onClick: () => {
-           TQ(!XQ)
-         },
-         children: (0, UQ.jsx)(hQ.d, {
- ... (4 more removed lines; see GitHub link above)
+         data: rM,
+         path: iM,
+         errorMaps: OM,
+         issueData: SM
+       } = MM, jM = [...iM, ...SM.path || []], aM = {
+         ...SM,
+         path: jM
+       };
+       let PM = "";
+       const nM = OM.filter((MM => !!MM)).slice().reverse();
+       for (const QM of nM) PM = QM(aM, {
+         data: rM,
+         defaultError: PM
+       }).message;
+       return {
+         ...SM,
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L274-L283` → after: `L353-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L353-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L353-L359) · [Before (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L274-L283)

```diff
-       var XQ;
-       QQ.contains(document.activeElement) && WQ.focus({
-         preventScroll: !0
-       }), null === (XQ = (0, lQ.f)()) || void 0 === XQ || XQ.handOverPadFocus(QQ, WQ)
-     }
- 
-     function XW(QQ) {
-       const WQ = QQ.closest("[data-hud-row]"),
-         XQ = null === WQ || void 0 === WQ ? void 0 : WQ.querySelector(".HudElementRowName");
-       return !(!WQ || !XQ) && (WW(WQ, XQ), !0)
+       const iM = yM({
+         issueData: rM,
+         data: MM.data,
+         path: MM.path,
+         errorMaps: [MM.common.contextualErrorMap, MM.schemaErrorMap, dM(), hM].filter((MM => !!MM))
+       });
+       MM.common.issues.push(iM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L285-L288` → after: `L361-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L361-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L361-L405) · [Before (L285-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L285-L288)

```diff
-     const wW = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
- 
-     function qW(QQ, WQ) {
-       return "joystick" === QQ && !WQ
+     class EM {
+       constructor() {
+         this.value = "valid"
+       }
+       fh() {
+         "valid" === this.value && (this.value = "fh")
+       }
+       abort() {
+         "aborted" !== this.value && (this.value = "aborted")
+       }
+       static mergeArray(MM, rM) {
+         const iM = [];
+         for (const OM of rM) {
+           if ("aborted" === OM.status) return UM;
+           "fh" === OM.status && MM.fh(), iM.push(OM.value)
+         }
+ ... (29 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L290-L315` → after: `L407-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L407-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L407-L434) · [Before (L290-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L290-L315)

```diff
- 
-     function TW() {
-       const {
-         t: QQ
-       } = (0, wQ.C)();
-       return (0, UQ.jsx)(PQ.T, {
-         className: "HudFixJoystickButton",
-         analyticsClick: {
-           id: "hud_layout.fix_joystick"
-         },
-         onClick: QQ => {
-           const WQ = QQ.currentTarget;
-           if (!XW(WQ)) {
-             const QQ = function(QQ) {
-               var WQ, XQ;
-               const wQ = [QQ.previousElementSibling, QQ.nextElementSibling].find((QQ => QQ instanceof HTMLElement && QQ.matches(wW)));
- ... (10 more removed lines; see GitHub link above)
+     const UM = Object.freeze({
+         status: "aborted"
+       }),
+       GM = MM => ({
+         status: "fh",
+         value: MM
+       }),
+       CM = MM => ({
+         status: "valid",
+         value: MM
+       }),
+       eM = MM => "aborted" === MM.status,
+       bM = MM => "fh" === MM.status,
+       wM = MM => "valid" === MM.status,
+       tM = MM => "undefined" !== typeof Promise && MM instanceof Promise;
+     var gM;
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L317-L329` → after: `L436-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L436-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L436-L449) · [Before (L317-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L317-L329)

```diff
-     var zW = XQ(78),
-       sW = XQ(1318),
-       FW = XQ(3379),
-       PW = XQ(2978),
-       gW = XQ(2565);
-     const JW = (QQ, WQ, XQ) => {
-       const wQ = LQ(WQ).includes(QQ) ? QQ : LQ(QQ).includes(WQ) ? WQ : null;
-       if (null === wQ || "joystick" === wQ) return !1;
-       const qQ = wQ === QQ ? WQ : QQ;
-       if ("menu" === wQ) return (0, gW.v)(qQ, XQ.hudElements[qQ]);
-       if ("hotbar" !== wQ || !uQ(qQ)) return !0;
-       if ((0, cQ.N)(XQ.hudElements[qQ]) || (0, cQ.N)(XQ.hudElements.inventory)) return !1;
-       return !(XQ.hudLocked.includes(qQ) || XQ.hudLocked.includes("inventory")) || (0, cQ.J)(XQ.hudElements.hotbar)
+     const RM = (MM, rM) => {
+       if (wM(rM)) return {
+         success: !0,
+         data: rM.value
+       };
+       if (!MM.common.issues.length) throw new Error("Validation failed but no issues detected.");
+       return {
+         success: !1,
+         get error() {
+           if (this._error) return this._error;
+           const rM = new HM(MM.common.issues);
+           return this._error = rM, this._error
+         }
+       }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L376-L378` → after: `L453-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L453-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L453-L458) · [Before (L376-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L376-L378)

```diff
-       let {
-         item: WQ,
-         selected: XQ
+       if (!MM) return {};
+       const {
+         errorMap: rM,
+         invalid_type_error: iM,
+         required_error: OM,
+         description: SM
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L380-L402` → after: `L460-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L460-L463) · [Before (L380-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L380-L402)

```diff
-       const wQ = (0, qQ.useRef)(null);
-       return (0, qQ.useLayoutEffect)((() => {
-         wQ.current && (0, jW.o)(wQ.current, WQ)
-       }), [WQ]), (0, UQ.jsx)("div", {
-         ref: wQ,
-         className: FQ()("InvenItem", {
-           Selected: XQ
-         })
-       })
-     }
-     const DW = {
-         emotes: "face-smile",
-         perspective: "video",
-         scoreboard: "list",
-         tasks: "bars",
-         cosmetics: "shirt",
- ... (7 more removed lines; see GitHub link above)
+       if (rM && (iM || OM)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
+       if (rM) return {
+         errorMap: rM,
+         description: SM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L404-L448` → after: `L465-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L465-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L465-L471) · [Before (L404-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L404-L448)

```diff
- 
-     function GW(QQ) {
-       let {
-         id: WQ,
-         hidden: XQ,
-         parked: wQ,
-         unslotted: qQ = !1
-       } = QQ;
-       return (0, UQ.jsx)("div", {
-         className: FQ()("TopRightIcon", rW.n[WQ], {
-           HudPreviewGhost: XQ.has(WQ),
-           [gW.b]: void 0 !== wQ,
-           [gW.e]: qQ
-         }),
-         ...pW(wQ),
-         children: (0, UQ.jsx)("div", {
- ... (29 more removed lines; see GitHub link above)
+       return {
+         errorMap: (MM, rM) => "invalid_type" !== MM.code ? {
+           message: rM.defaultError
+         } : "undefined" === typeof rM.data ? {
+           message: null !== OM && void 0 !== OM ? OM : rM.defaultError
+         } : {
+           message: null !== iM && void 0 !== iM ? iM : rM.defaultError
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L450-L486` → after: `L473-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L473-L474) · [Before (L450-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L450-L486)

```diff
-         BQ = (QQ, WQ) => (0, UQ.jsx)(GW, {
-           id: QQ,
-           hidden: TQ,
-           parked: WQ ? jQ(QQ) : void 0,
-           unslotted: WQ && TQ.has(QQ) && zQ.has(QQ)
-         }, QQ);
-       return (0, UQ.jsxs)("div", {
-         className: FQ()("TopRightIcons TouchInGame", {
-           Column: WQ
-         }),
-         children: [gQ.map((QQ => BQ(QQ, !0))), PQ.length > 0 && (0, UQ.jsxs)("div", {
-           className: FQ()("TopRightIcon TopRightTrayToggle Open", {
-             [gW.b]: rQ
-           }),
-           ...pW(jQ("tray")),
-           children: [(0, UQ.jsx)("div", {
- ... (21 more removed lines; see GitHub link above)
+         description: SM
+       }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L488-L502` → after: `L476-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L476-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L476-L593) · [Before (L488-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L488-L502)

```diff
- 
-     function bW(QQ) {
-       let {
-         icon: WQ
-       } = QQ;
-       return (0, UQ.jsx)("div", {
-         className: "TopRightIcon",
-         children: (0, UQ.jsx)("div", {
-           className: "UiItemIcon SmallTextBold",
-           children: (0, UQ.jsx)("div", {
-             className: "ScaleOnHover",
-             children: (0, UQ.jsx)(hQ.d, {
-               name: WQ
-             })
-           })
+     class WM {
+       constructor(MM) {
+         this.spa = this.safeParseAsync, this._def = MM, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
+       }
+       get description() {
+         return this._def.description
+       }
+       _getType(MM) {
+         return LM(MM.data)
+       }
+       _getOrReturnCtx(MM, rM) {
+         return rM || {
+           common: MM.parent.common,
+           data: MM.data,
+           parsedType: LM(MM.data),
+           schemaErrorMap: this._def.errorMap,
+ ... (102 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L504-L524` → after: `L595-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L595-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L595-L628) · [Before (L504-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L504-L524)

```diff
-       })
-     }
- 
-     function vW(QQ) {
-       let {
-         next: WQ,
-         hidden: XQ
-       } = QQ;
-       return (0, UQ.jsx)("div", {
-         className: FQ()("HotBarArrow", WQ ? "Next" : "Previous", {
-           HudPreviewGhost: XQ
-         }),
-         ...BW("arrows"),
-         children: (0, UQ.jsx)("div", {
-           className: "UiItemIcon SmallTextBold",
-           children: (0, UQ.jsx)("div", {
- ... (5 more removed lines; see GitHub link above)
+       }
+       superRefine(MM) {
+         return this._refinement(MM)
+       }
+       optional() {
+         return Gr.create(this, this._def)
+       }
+       nullable() {
+         return Cr.create(this, this._def)
+       }
+       nullish() {
+         return this.nullable().optional()
+       }
+       array() {
+         return rr.create(this, this._def)
+       }
+ ... (18 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L526-L573` → after: `L630-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L630-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L630-L637) · [Before (L526-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L526-L573)

```diff
-       })
-     }
- 
-     function dW() {
-       return (0, UQ.jsx)("div", {
-         className: "SocialBarContainer",
-         children: (0, UQ.jsx)("div", {
-           className: "SocialBarOuter",
-           children: (0, UQ.jsx)("div", {
-             className: "SocialBar",
-             children: (0, UQ.jsx)("div", {
-               className: "CondensedSocialBarInner",
-               children: (0, UQ.jsx)("div", {
-                 className: "CondensedSectionsContainer",
-                 children: (0, UQ.jsxs)("div", {
-                   className: "CondensedSections",
- ... (32 more removed lines; see GitHub link above)
+       }
+       default (MM) {
+         const rM = "function" === typeof MM ? MM : () => MM;
+         return new er({
+           ...pM(this._def),
+           innerType: this,
+           defaultValue: rM,
+           typeName: sr.ZodDefault
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L575` → after: `L639-L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L639-L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L639-L2748) · [Before (L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L575)

```diff
-       })
+       }
+       brand() {
+         return new gr({
+           typeName: sr.ZodBranded,
+           type: this,
+           ...pM(this._def)
+         })
+       } catch (MM) {
+         const rM = "function" === typeof MM ? MM : () => MM;
+         return new br({
+           ...pM(this._def),
+           innerType: this,
+           catchValue: rM,
+           typeName: sr.ZodCatch
+         })
+       }
+ ... (2094 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L577-L579` → after: `L2750-L3959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L2750-L3959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L2750-L3959) · [Before (L577-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L577-L579)

```diff
-     const HW = {
-         J: "JumpKey",
-         C: "CrouchKey"
+     br.create = (MM, rM) => new br({
+       innerType: MM,
+       typeName: sr.ZodCatch,
+       catchValue: "function" === typeof rM.catch ? rM.catch : () => rM.catch,
+       ...pM(rM)
+     });
+     class wr extends WM {
+       _parse(MM) {
+         if (this._getType(MM) !== zM.nan) {
+           const rM = this._getOrReturnCtx(MM);
+           return lM(rM, {
+             code: mM.invalid_type,
+             expected: zM.nan,
+             received: rM.parsedType
+           }), UM
+         }
+ ... (1194 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L582-L584` → after: `L4058-L4060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4058-L4060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4058-L4060) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L582-L584)

```diff
-         P: {
-           icon: "crosshairs",
-           labelKey: "touchKeys:scope"
+         [Bi.INITIATE_IMAGE_UPLOAD]: {
+           request: Ii,
+           response: Ni
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L586-L588` → after: `L4062-L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4062-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4062-L4072) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L586-L588)

```diff
-         X: {
-           icon: "feather-pointed",
-           labelKey: "touchKeys:fly"
+         [Bi.OPEN_SHARE_MOMENT_DIALOG]: {
+           request: Ai,
+           response: Xi
+         },
+         [Bi.AUTHENTICATE]: {
+           request: xi,
+           response: vi
+         },
+         [Bi.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
+           request: Ii,
+           response: Fi
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L591` → after: `L4075-L4180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4075-L4180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4075-L4180) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L591)

```diff
-       lW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
+       qi = "DISPATCH";
+     var Ti;
+     ! function(MM) {
+       MM.AUTHORIZE = "AUTHORIZE", MM.AUTHENTICATE = "AUTHENTICATE", MM.GET_GUILDS = "GET_GUILDS", MM.GET_GUILD = "GET_GUILD", MM.GET_CHANNEL = "GET_CHANNEL", MM.GET_CHANNELS = "GET_CHANNELS", MM.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", MM.SELECT_TEXT_CHANNEL = "SELECT_TEXT_ … [truncated]
+     }(Ti || (Ti = {}));
+     const Vi = Kr({
+         cmd: Dr(),
+         data: Fr(),
+         evt: xr(),
+         nonce: Dr()
+       }).passthrough(),
+       ci = (Yi(Object.assign(Object.assign({}, vi.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
+         UNHANDLED: -1
+       })), Kr({
+         id: Dr(),
+         username: Dr(),
+ ... (90 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L593-L634` → after: `L4182-L4551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4182-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4182-L4551) · [Before (L593-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L593-L634)

```diff
-         0: "swords",
-         1: "hammer",
-         2: "cube",
-         3: "cubes",
-         5: "cookie"
-       };
- 
-     function iW(QQ) {
-       let {
-         presence: WQ,
-         portraitPhone: XQ,
-         hidden: qQ,
-         actionButtons: TQ,
-         joystickFixed: zQ,
-         keysAbove: sQ,
-         auraBar: PQ,
- ... (26 more removed lines; see GitHub link above)
+         UNHANDLED: -1,
+         DM: 1,
+         GROUP_DM: 3,
+         GUILD_TEXT: 0,
+         GUILD_VOICE: 2,
+         GUILD_CATEGORY: 4,
+         GUILD_ANNOUNCEMENT: 5,
+         GUILD_STORE: 6,
+         ANNOUNCEMENT_THREAD: 10,
+         PUBLIC_THREAD: 11,
+         PRIVATE_THREAD: 12,
+         GUILD_STAGE_VOICE: 13,
+         GUILD_DIRECTORY: 14,
+         GUILD_FORUM: 15
+       },
+       nO = Kr({
+ ... (354 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L636-L668` → after: `L4553-L4570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4553-L4570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4553-L4570) · [Before (L636-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L636-L668)

```diff
-         }), (0, UQ.jsx)("div", {
-           className: "TopLeftElements",
-           children: (0, UQ.jsx)("div", {
-             className: "InGameHeaderAndChat",
-             children: (0, UQ.jsxs)("div", {
-               className: "Chat",
-               children: [(0, UQ.jsx)("div", {
-                 className: "ChatMessages HideScrollbar",
-                 children: [IQ("hudLayout:previewChatLine"), IQ("hudLayout:previewChatJoined", {
-                   name: "Steve"
-                 }), IQ("hudLayout:previewChatJoined", {
-                   name: "Alex"
-                 })].map((QQ => (0, UQ.jsx)("div", {
-                   className: "MessageWrapper",
-                   children: (0, UQ.jsx)("div", {
-                     className: "TextFromServer",
- ... (17 more removed lines; see GitHub link above)
+         })
+       },
+       [ZO.VOICE_STATE_UPDATE]: {
+         payload: oO.extend({
+           evt: ai(ZO.VOICE_STATE_UPDATE),
+           data: OO
+         }),
+         subscribeArgs: Kr({
+           channel_id: Dr()
+         })
+       },
+       [ZO.SPEAKING_START]: {
+         payload: oO.extend({
+           evt: ai(ZO.SPEAKING_START),
+           data: Kr({
+             lobby_id: Dr().optional(),
+ ... (2 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L670-L691` → after: `L4572-L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4572-L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4572-L4584) · [Before (L670-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L670-L691)

```diff
-         }), (0, UQ.jsx)("div", {
-           className: "RightElements RightElementsTouchscreen",
-           children: (0, UQ.jsxs)("div", {
-             className: "TopRightElements",
-             children: [(0, UQ.jsx)("div", {
-               className: "TopRightElementsLeft",
-               children: (0, UQ.jsx)("div", {
-                 className: "TopRightIconsContainer",
-                 ...BW("menu"),
-                 children: (0, UQ.jsx)(UW, {
-                   portraitPhone: XQ,
-                   icons: WQ.rowIcons,
-                   pinnedIcons: WQ.pinnedIcons,
-                   hidden: qQ,
-                   trayState: gQ,
-                   moved: rQ
- ... (6 more removed lines; see GitHub link above)
+         }),
+         subscribeArgs: Kr({
+           lobby_id: Dr().nullable().optional(),
+           channel_id: Dr().nullable().optional()
+         })
+       },
+       [ZO.SPEAKING_STOP]: {
+         payload: oO.extend({
+           evt: ai(ZO.SPEAKING_STOP),
+           data: Kr({
+             lobby_id: Dr().optional(),
+             channel_id: Dr().optional(),
+             user_id: Dr()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L693-L707` → after: `L4586-L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4586-L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4586-L4596) · [Before (L693-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L693-L707)

```diff
-         }), (0, UQ.jsx)("div", {
-           className: "HudPreviewCrosshair"
-         }), (0, UQ.jsx)("div", {
-           className: "TouchInteractHit HudPreviewInteract",
-           children: (0, UQ.jsxs)("div", {
-             className: "TouchInteractKey",
-             ...BW("interact"),
-             children: [(0, UQ.jsx)("div", {
-               className: "TouchInteractIcon",
-               children: (0, UQ.jsx)(hQ.d, {
-                 name: "hand-back-point-up"
-               })
-             }), (0, UQ.jsx)("div", {
-               children: IQ("hudLayout:previewInteract")
-             })]
+         }),
+         subscribeArgs: Kr({
+           lobby_id: Dr().nullable().optional(),
+           channel_id: Dr().nullable().optional()
+         })
+       },
+       [ZO.ACTIVITY_LAYOUT_MODE_UPDATE]: {
+         payload: oO.extend({
+           evt: ai(ZO.ACTIVITY_LAYOUT_MODE_UPDATE),
+           data: Kr({
+             layout_mode: Yi(DO)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L709-L889` → after: `L4598-L4605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4598-L4605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4598-L4605) · [Before (L709-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L709-L889)

```diff
-         }), (0, UQ.jsx)("div", {
-           className: "BottomCentre",
-           children: (0, UQ.jsxs)("div", {
-             className: "BottomElements",
-             children: [(0, UQ.jsx)("div", {
-               className: "BottomLeftElements Touch"
-             }), (0, UQ.jsxs)("div", {
-               className: "BottomMiddleElements",
-               children: [(0, UQ.jsx)("div", {
-                 className: "BottomScreenStatBarList",
-                 ...BW("hotbar"),
-                 children: (0, UQ.jsx)("div", {
-                   className: "BottomScreenStatBarWrapper",
-                   children: (0, UQ.jsxs)("div", {
-                     className: "BottomScreenStatBarBackground",
-                     children: [(0, UQ.jsx)("div", {
- ... (165 more removed lines; see GitHub link above)
+         })
+       },
+       [ZO.ORIENTATION_UPDATE]: {
+         payload: oO.extend({
+           evt: ai(ZO.ORIENTATION_UPDATE),
+           data: Kr({
+             screen_orientation: Yi(sO),
+             orientation: ni(Zi)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L891-L1025` → after: `L4607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4607) · [Before (L891-L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L891-L1025)

```diff
-         }), (0, UQ.jsxs)("div", {
-           className: "TouchMovementWrapper",
-           children: [(0, UQ.jsx)("div", {
-             className: "JoystickZone HudPreviewJoystickZone",
-             children: (0, UQ.jsxs)("div", {
-               className: FQ()("Joystick Resting HudPreviewJoystick", {
-                 Floating: !zQ
-               }),
-               ...BW("joystick"),
-               children: [(0, UQ.jsx)("div", {
-                 className: "JoystickBase"
-               }), (0, UQ.jsx)("div", {
-                 className: "JoystickKnob"
-               })]
-             })
-           }), WQ.sprint && (0, UQ.jsx)("div", {
- ... (119 more removed lines; see GitHub link above)
+         })
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1027-L1086` → after: `L4609-L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4609-L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4609-L4637) · [Before (L1027-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1027-L1086)

```diff
-       kW = new Set([uW, ...Object.values(LW)]),
-       fW = new Set(cQ.z.map(rW.y)),
-       SW = new Set(rW.k),
-       tW = 'style, link[rel="stylesheet"]';
- 
-     function oW(QQ, WQ, XQ, wQ) {
-       const qQ = new Map,
-         TQ = new Set,
-         zQ = new URL(QQ.baseURI).origin,
-         sQ = WQ => {
-           var XQ;
-           if ("LINK" !== WQ.nodeName) return !0;
-           const wQ = null === (XQ = WQ.getAttribute("href")) || void 0 === XQ ? void 0 : XQ.trim();
-           if (!wQ) return !1;
-           try {
-             return new URL(wQ, QQ.baseURI).origin === zQ
- ... (44 more removed lines; see GitHub link above)
+       [ZO.CURRENT_USER_UPDATE]: {
+         payload: oO.extend({
+           evt: ai(ZO.CURRENT_USER_UPDATE),
+           data: ci
+         })
+       },
+       [ZO.ENTITLEMENT_CREATE]: {
+         payload: oO.extend({
+           evt: ai(ZO.ENTITLEMENT_CREATE),
+           data: Kr({
+             entitlement: pO
+           })
+         })
+       },
+       [ZO.THERMAL_STATE_UPDATE]: {
+         payload: oO.extend({
+ ... (13 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1088` → after: `L4639-L4716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4639-L4716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4639-L4716) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1088)

```diff
-     }
+     };
+     const xO = Kr({}).nullable(),
+       vO = Kr({
+         code: Dr()
+       }),
+       FO = Kr({
+         guilds: Ir(Kr({
+           id: Dr(),
+           name: Dr()
+         }))
+       }),
+       BO = Kr({
+         id: Dr(),
+         name: Dr(),
+         icon_url: Dr().optional(),
+         members: Ir(MO)
+ ... (62 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1090` → after: `L4718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4718) · [Before (L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1090)

```diff
-     function eW(QQ, WQ, XQ) {
+     function QS(MM) {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1092` → after: `L4720-L4721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4720-L4721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4720-L4721) · [Before (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1092)

```diff
-         keysAbove: wQ
+         cmd: rM,
+         data: iM
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1094-L1120` → after: `L4723-L4784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4723-L4784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4723-L4784) · [Before (L1094-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1094-L1120)

```diff
-       const qQ = [...QQ.documentElement.classList].filter((QQ => !kW.has(QQ) && !SW.has(QQ))),
-         TQ = [...WQ.documentElement.classList].filter((QQ => SW.has(QQ))),
-         zQ = [uW, LW.hotbar, LW.hasShop, LW.hasBag];
-       wQ && zQ.push(LW.keysAbove), WQ.documentElement.className = [...qQ, ...zQ, ...TQ].join(" ")
-     }
-     const nW = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];
- 
-     function xW(QQ, WQ, XQ, wQ, qQ) {
-       const TQ = (0, cQ.A)(XQ, wQ, "joystick"),
-         zQ = (0, rW.z)((0, rW.K)(XQ, wQ, qQ), wQ),
-         sQ = zQ.classes.filter((QQ => !fW.has(QQ))),
-         FQ = WQ.documentElement,
-         PQ = XQ.hudLayouts[wQ].hudSafe,
-         gQ = (0, rW.E)(PQ, window.innerWidth, window.innerHeight, YW(), PQ ? (0, rW.M)(WQ) : 0);
-       (0, rW.N)({
-         ...zQ,
- ... (11 more removed lines; see GitHub link above)
+       switch (rM) {
+         case Ti.AUTHORIZE:
+           return vO.parse(iM);
+         case Ti.CAPTURE_SHORTCUT:
+           return VO.parse(iM);
+         case Ti.ENCOURAGE_HW_ACCELERATION:
+           return jS.parse(iM);
+         case Ti.GET_CHANNEL:
+           return XO.parse(iM);
+         case Ti.GET_CHANNELS:
+           return IO.parse(iM);
+         case Ti.GET_CHANNEL_PERMISSIONS:
+           return aS.parse(iM);
+         case Ti.GET_GUILD:
+           return BO.parse(iM);
+         case Ti.GET_GUILDS:
+ ... (46 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1124` → after: `L4807-L4816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4807-L4816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4807-L4816) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1124)

```diff
-       return (0, rW.t)(YW(), (0, rW.M)(QQ))
+       const rM = LS.parse(MM);
+       return null != rM.evt ? rM.evt === kO ? fO.parse(rM) : function(MM) {
+         const rM = MM.evt;
+         if (!(rM in ZO)) throw new Error(`Unrecognized event type ${MM.evt}`);
+         return AO[rM].payload.parse(MM)
+       }(NO.parse(rM)) : function(MM) {
+         return Object.assign(Object.assign({}, MM), {
+           data: QS(MM)
+         })
+       }(nS.passthrough().parse(rM))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1128-L1136` → after: `L4820-L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4820-L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4820-L4831) · [Before (L1128-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1128-L1136)

```diff
-       const wQ = QQ.documentElement.style,
-         qQ = (0, rW.F)(WQ),
-         TQ = wQ.getPropertyValue(qQ);
-       try {
-         return XQ((QQ => {
-           wQ.setProperty(qQ, String(QQ))
-         }))
-       } finally {
-         "" === TQ ? wQ.removeProperty(qQ) : wQ.setProperty(qQ, TQ)
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
+       const SM = Vi.extend({
+         cmd: ai(rM),
+         data: iM
+       });
+       return async iM => {
+         const jM = await MM({
+           cmd: rM,
+           args: iM,
+           transfer: OM(iM)
+         });
+         return SM.parse(jM).data
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1140-L1216` → after: `L4835-L4848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4835-L4848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4835-L4848) · [Before (L1140-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1140-L1216)

```diff
-     function OW(QQ, WQ) {
-       const [XQ, wQ] = ZW(QQ, "hotbar", (WQ => {
-         const XQ = XQ => {
-           var wQ, qQ;
-           return WQ(XQ), null !== (wQ = null === (qQ = QQ.querySelector(".HotBarGameItemsContainer")) || void 0 === qQ ? void 0 : qQ.getBoundingClientRect().width) && void 0 !== wQ ? wQ : 0
-         };
-         return [XQ(1), XQ(cQ.h)]
-       }));
-       return XQ <= 0 ? cQ.h : Math.min(cQ.h, Math.max(1, Math.floor(wQ / XQ / WQ + 1e-6) * WQ))
-     }
-     const KW = 3,
-       mW = .5,
-       MW = QQ => QQ.right - QQ.left;
-     const QX = (QQ, WQ) => Math.abs((0, iQ.b)(QQ).x - (0, iQ.b)(WQ).x) + Math.abs((0, iQ.b)(QQ).y - (0, iQ.b)(WQ).y) + Math.abs(MW(QQ) - MW(WQ));
- 
-     function WX(QQ, WQ, XQ, wQ, qQ) {
- ... (61 more removed lines; see GitHub link above)
+     function hS(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
+       const iM = Ki[MM].response,
+         OM = Vi.extend({
+           cmd: ai(MM),
+           data: iM
+         });
+       return iM => async SM => {
+         const jM = await iM({
+           cmd: MM,
+           args: SM,
+           transfer: rM(SM)
+         });
+         return OM.parse(jM).data
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1221-L1228` → after: `L4929-L4930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4929-L4930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4929-L4930) · [Before (L1221-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1221-L1228)

```diff
-     function XX(QQ, WQ, XQ, wQ, qQ) {
-       let [TQ, zQ, sQ] = WQ;
-       const FQ = cQ.v[QQ],
-         PQ = {};
-       FQ.scale && MW(wQ) > 0 && Math.abs(MW(XQ) - MW(wQ)) > mW && (PQ.scale = Math.max(cQ.i, Math.min(cQ.h, sQ * MW(XQ) / MW(wQ))));
-       const gQ = (0, iQ.b)(XQ).x - (0, iQ.b)(wQ).x,
-         JQ = (0, iQ.b)(XQ).y - (0, iQ.b)(wQ).y;
-       return FQ.move && (Math.abs(gQ) > mW || Math.abs(JQ) > mW) && (PQ.dx = TQ + gQ / qQ.width, PQ.dy = zQ + JQ / qQ.height), void 0 === PQ.scale && void 0 === PQ.dx ? null : PQ
+     function oS(MM) {
+       return "string" === typeof MM && ZS.test(MM)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1230` → after: `L4932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4932) · [Before (L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1230)

```diff
-     let wX = 0;
+     for (var fS = [], YS = 0; YS < 256; ++YS) fS.push((YS + 256).toString(16).substr(1));
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1232-L1233` → after: `L4934-L4938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4934-L4938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4934-L4938) · [Before (L1232-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1232-L1233)

```diff
-     function qX() {
-       return wX > 0
+     function NS(MM) {
+       var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         iM = (fS[MM[rM + 0]] + fS[MM[rM + 1]] + fS[MM[rM + 2]] + fS[MM[rM + 3]] + "-" + fS[MM[rM + 4]] + fS[MM[rM + 5]] + "-" + fS[MM[rM + 6]] + fS[MM[rM + 7]] + "-" + fS[MM[rM + 8]] + fS[MM[rM + 9]] + "-" + fS[MM[rM + 10]] + fS[MM[rM + 11]] + fS[MM[rM + 12]] + fS[MM[rM + 13]] +  … [truncated]
+       if (!oS(iM)) throw TypeError("Stringified UUID is invalid");
+       return iM
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1235-L1240` → after: `L4940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4940) · [Before (L1235-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1235-L1240)

```diff
-     const TX = QQ => 0 === QQ.dx && 0 === QQ.dy,
-       zX = .001,
-       sX = QQ => Math.abs(QQ.dx) >= 5e-4 || Math.abs(QQ.dy) >= 5e-4 ? QQ : {
-         dx: QQ.dx,
-         dy: QQ.dy < 0 ? -.001 : zX
-       };
+     var AS;
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1242-L1442` → after: `L4942-L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4942-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4942-L4957) · [Before (L1242-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1242-L1442)

```diff
-     function FX(QQ) {
-       let {
-         preview: WQ,
-         stageRef: XQ,
-         ringRef: wQ,
-         centreLineRef: TQ,
-         snapCentre: zQ,
-         ready: sQ,
-         measure: FQ,
-         k: PQ,
-         viewport: gQ,
-         boxes: JQ,
-         pieces: rQ,
-         selected: IQ,
-         insets: jQ,
-         layout: BQ,
- ... (185 more removed lines; see GitHub link above)
+     function xS(MM, rM, iM) {
+       function OM(MM, OM, SM, jM) {
+         if ("string" === typeof MM && (MM = function(MM) {
+             MM = unescape(encodeURIComponent(MM));
+             for (var rM = [], iM = 0; iM < MM.length; ++iM) rM.push(MM.charCodeAt(iM));
+             return rM
+           }(MM)), "string" === typeof OM && (OM = function(MM) {
+             if (!oS(MM)) throw TypeError("Invalid UUID");
+             var rM, iM = new Uint8Array(16);
+             return iM[0] = (rM = parseInt(MM.slice(0, 8), 16)) >>> 24, iM[1] = rM >>> 16 & 255, iM[2] = rM >>> 8 & 255, iM[3] = 255 & rM, iM[4] = (rM = parseInt(MM.slice(9, 13), 16)) >>> 8, iM[5] = 255 & rM, iM[6] = (rM = parseInt(MM.slice(14, 18), 16)) >>> 8, iM[7] = 255 & rM, i … [truncated]
+           }(OM)), 16 !== OM.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
+         var aM = new Uint8Array(16 + MM.length);
+         if (aM.set(OM), aM.set(MM, OM.length), (aM = iM(aM))[6] = 15 & aM[6] | rM, aM[8] = 63 & aM[8] | 128, SM) {
+           jM = jM || 0;
+           for (var PM = 0; PM < 16; ++PM) SM[jM + PM] = aM[PM];
+           return SM
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1449` → after: `L4972-L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4972-L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4972-L4973) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1449)

```diff
-       return Object.keys(QQ).filter((QQ => QQ !== WQ)).map((WQ => QQ[WQ]))
+       var iM = (65535 & MM) + (65535 & rM);
+       return (MM >> 16) + (rM >> 16) + (iM >> 16) << 16 | 65535 & iM
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1452-L1459` → after: `L4976-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4976-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4976-L4978) · [Before (L1452-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1452-L1459)

```diff
-     function JX(QQ) {
-       return QQ.map((QQ => {
-         let {
-           id: WQ,
-           box: XQ
-         } = QQ;
-         return `${WQ}:${XQ.left},${XQ.top},${XQ.right},${XQ.bottom}`
-       })).join(";")
+     function BS(MM, rM, iM, OM, SM, jM) {
+       return FS((aM = FS(FS(rM, MM), FS(OM, jM))) << (PM = SM) | aM >>> 32 - PM, iM);
+       var aM, PM
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1462-L1496` → after: `L4981-L4986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4981-L4986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4981-L4986) · [Before (L1462-L1496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1462-L1496)

```diff
-     function rX(QQ) {
-       const WQ = [],
-         XQ = WQ => (0, cQ.Q)(WQ) && !QQ.documentElement.classList.contains((0, rW.A)(WQ));
-       for (const sQ of QQ.querySelectorAll(`[${YQ}]`)) {
-         const QQ = XQ(sQ.getAttribute(YQ)) ? sQ.querySelector(".ScaleOnHover") : null,
-           wQ = (null !== QQ && void 0 !== QQ ? QQ : sQ).getBoundingClientRect();
-         (wQ.width > 0 || wQ.height > 0) && WQ.push({
-           id: sQ.getAttribute(YQ),
-           box: (0, iQ.f)(wQ)
-         })
-       }
-       const wQ = QQ => (0, iQ.v)(WQ.filter((WQ => {
-           let {
-             id: XQ
-           } = WQ;
-           return QQ(XQ)
- ... (19 more removed lines; see GitHub link above)
+     function XS(MM, rM, iM, OM, SM, jM, aM) {
+       return BS(rM & iM | ~rM & OM, MM, rM, SM, jM, aM)
+     }
+ 
+     function IS(MM, rM, iM, OM, SM, jM, aM) {
+       return BS(rM & OM | iM & ~OM, MM, rM, SM, jM, aM)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1499-L1520` → after: `L4989-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4989-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4989-L4990) · [Before (L1499-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1499-L1520)

```diff
-     function IX(QQ, WQ, XQ) {
-       const wQ = WQ.right - WQ.left,
-         qQ = WQ.bottom - WQ.top;
-       return ZW(QQ, "cluster", (WQ => {
-         const TQ = XQ => {
-             WQ(XQ);
-             const wQ = [...QQ.querySelectorAll(`[${YQ}]:not(.HudPreviewGhost)`)].filter((QQ => EQ.has(QQ.getAttribute(YQ)))).map((QQ => (0, iQ.f)(QQ.getBoundingClientRect()))),
-               qQ = (0, iQ.v)(wQ);
-             return qQ ? {
-               w: qQ.right - qQ.left,
-               h: qQ.bottom - qQ.top
-             } : null
-           },
-           zQ = QQ => !QQ || QQ.w <= wQ && QQ.h <= qQ,
-           sQ = TQ(1),
-           FQ = TQ(cQ.h);
- ... (6 more removed lines; see GitHub link above)
+     function KS(MM, rM, iM, OM, SM, jM, aM) {
+       return BS(rM ^ iM ^ OM, MM, rM, SM, jM, aM)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1523-L1531` → after: `L4993-L4994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L4993-L4994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L4993-L4994) · [Before (L1523-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1523-L1531)

```diff
-     function jX(QQ) {
-       eW(document, QQ, {
-         keysAbove: !1
-       });
-       const WQ = parseFloat(getComputedStyle(QQ.documentElement).getPropertyValue("--touch-hotbar-ends-spare")),
-         XQ = Number.isFinite(WQ) && WQ < 0;
-       return eW(document, QQ, {
-         keysAbove: XQ
-       }), (0, PX.b)(QQ), XQ
+     function qS(MM, rM, iM, OM, SM, jM, aM) {
+       return BS(iM ^ (rM | ~OM), MM, rM, SM, jM, aM)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1534-L1536` → after: `L5027-L5029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5027-L5029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5027-L5029) · [Before (L1534-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1534-L1536)

```diff
-     function BX(QQ) {
-       const WQ = QQ.querySelector(".TouchInventoryKey.ShopKey");
-       return null !== WQ && "1" === getComputedStyle(WQ).getPropertyValue("--touch-shop-above").trim()
+     function VS() {
+       if (!AS && !(AS = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRand … [truncated]
+       return AS(TS)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1539-L1652` → after: `L5032-L5039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5032-L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5032-L5039) · [Before (L1539-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1539-L1652)

```diff
-     function yX(QQ, WQ) {
-       let {
-         layout: XQ,
-         orientation: wQ,
-         viewport: TQ,
-         replicaKey: zQ,
-         joystickFixed: sQ,
-         busy: FQ
-       } = WQ;
-       const [PQ, gQ] = (0, qQ.useState)(null), [JQ, rQ] = (0, qQ.useState)({
-         boxes: {},
-         pieces: []
-       }), [IQ, jQ] = (0, qQ.useState)({
-         top: 0,
-         right: 0,
-         bottom: 0,
- ... (98 more removed lines; see GitHub link above)
+     function cS(MM, rM, iM) {
+       var OM = (MM = MM || {}).random || (MM.rng || VS)();
+       if (OM[6] = 15 & OM[6] | 64, OM[8] = 63 & OM[8] | 128, rM) {
+         iM = iM || 0;
+         for (var SM = 0; SM < 16; ++SM) rM[iM + SM] = OM[SM];
+         return rM
+       }
+       return NS(OM)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1655-L1660` → after: `L5042-L5051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5042-L5051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5042-L5051) · [Before (L1655-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1655-L1660)

```diff
-     function pX() {
-       const [QQ, WQ] = (0, FW.d)();
-       return (0, qQ.useMemo)((() => ({
-         width: QQ,
-         height: WQ
-       })), [QQ, WQ])
+     function Mj(MM, rM, iM, OM) {
+       switch (MM) {
+         case 0:
+           return rM & iM ^ ~rM & OM;
+         case 1:
+         case 3:
+           return rM ^ iM ^ OM;
+         case 2:
+           return rM & iM ^ rM & OM ^ iM & OM
+       }
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1663-L1827` → after: `L5054-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5054-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5054-L5077) · [Before (L1663-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1663-L1827)

```diff
-     function GX(QQ) {
-       var WQ;
-       const {
-         layout: XQ,
-         orientation: TQ,
-         selected: zQ,
-         onSelect: sQ,
-         onMove: PQ,
-         canMove: gQ,
-         actionButtons: JQ,
-         joystickFixed: rQ,
-         presence: IQ,
-         keyNames: BQ,
-         maxHeight: yQ,
-         fill: VQ = !1,
-         apiRef: DQ
- ... (149 more removed lines; see GitHub link above)
+     function rj(MM, rM) {
+       return MM << rM | MM >>> 32 - rM
+     }
+     xS("v5", 80, (function(MM) {
+       var rM = [1518500249, 1859775393, 2400959708, 3395469782],
+         iM = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
+       if ("string" === typeof MM) {
+         var OM = unescape(encodeURIComponent(MM));
+         MM = [];
+         for (var SM = 0; SM < OM.length; ++SM) MM.push(OM.charCodeAt(SM))
+       } else Array.isArray(MM) || (MM = Array.prototype.slice.call(MM));
+       MM.push(128);
+       for (var jM = MM.length / 4 + 2, aM = Math.ceil(jM / 16), PM = new Array(aM), nM = 0; nM < aM; ++nM) {
+         for (var QM = new Uint32Array(16), zM = 0; zM < 16; ++zM) QM[zM] = MM[64 * nM + 4 * zM] << 24 | MM[64 * nM + 4 * zM + 1] << 16 | MM[64 * nM + 4 * zM + 2] << 8 | MM[64 * nM + 4 * zM + 3];
+         PM[nM] = QM
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1829-L1881` → after: `L5079-L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5079-L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5079-L5096) · [Before (L1829-L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1829-L1881)

```diff
-       }), [nQ, OQ]), (0, qQ.useImperativeHandle)(DQ, (() => ({
-         setScale: (QQ, WQ) => {
-           sW((0, cQ.gb)(XQ, TQ, QQ, {
-             scale: WQ
-           }))
-         },
-         setOpacity: QQ => {
-           mQ({
-             ...XQ,
-             hudKeyOpacity: QQ
-           })
-         },
-         keepLocks: (QQ, WQ) => (wW(), WX(QQ, WQ, TQ, GQ, MQ, {
-           canKeep: TW
-         })),
-         setSafe: QQ => {
- ... (37 more removed lines; see GitHub link above)
+         iM[0] = iM[0] + JM >>> 0, iM[1] = iM[1] + dM >>> 0, iM[2] = iM[2] + yM >>> 0, iM[3] = iM[3] + lM >>> 0, iM[4] = iM[4] + EM >>> 0
+       }
+       return [iM[0] >> 24 & 255, iM[0] >> 16 & 255, iM[0] >> 8 & 255, 255 & iM[0], iM[1] >> 24 & 255, iM[1] >> 16 & 255, iM[1] >> 8 & 255, 255 & iM[1], iM[2] >> 24 & 255, iM[2] >> 16 & 255, iM[2] >> 8 & 255, 255 & iM[2], iM[3] >> 24 & 255, iM[3] >> 16 & 255, iM[3] >> 8 & 255, 255 … [truncated]
+     }));
+     class ij extends Error {
+       constructor(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+         super(rM), this.code = MM, this.message = rM, this.name = "Discord SDK Error"
+       }
+     }
+     const Oj = ["log", "warn", "debug", "info", "error"];
+     var Sj;
+     ! function(MM) {
+       MM[MM.HANDSHAKE = 0] = "HANDSHAKE", MM[MM.FRAME = 1] = "FRAME", MM[MM.CLOSE = 2] = "CLOSE", MM[MM.HELLO = 3] = "HELLO"
+     }(Sj || (Sj = {}));
+     const jj = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.c … [truncated]
+ ... (2 more added lines; see GitHub link above)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1883-L1897` → after: `L5098-L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5098-L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5098-L5108) · [Before (L1883-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1883-L1897)

```diff
-         null === (QQ = vW.current) || void 0 === QQ || QQ.call(vW, KQ)
-       }), [KQ]);
-       const dW = (0, qQ.useRef)(QQ.onMeasured);
-       (0, qQ.useLayoutEffect)((() => {
-         dW.current = QQ.onMeasured
-       }));
-       const HW = (0, qQ.useRef)({
-           layout: null,
-           input: "",
-           caps: {}
-         }),
-         aW = [JX(xQ), GQ.width, GQ.height, YQ.top, YQ.right, YQ.bottom, YQ.left, OQ, oQ].join("|");
-       (0, qQ.useEffect)((() => {
-         const QQ = bW ? bW.split(",") : [],
-           WQ = () => {
+         switch (MM.cmd) {
+           case Ti.SUBSCRIBE:
+           case Ti.UNSUBSCRIBE:
+             return;
+           default:
+             return null !== (rM = MM.transfer) && void 0 !== rM ? rM : void 0
+         }
+       }
+       constructor(MM, rM) {
+         var iM;
+         if (this.eventBus = new QM, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = MM => {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1899-L1913` → after: `L5110-L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5110-L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5110-L5156) · [Before (L1899-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1899-L1913)

```diff
-             null === (WQ = dW.current) || void 0 === WQ || WQ.call(dW, nQ, QQ, HW.current.caps)
-           };
-         let XQ;
-         const wQ = () => {
-           const QQ = XW.current;
-           if (!eQ || QQ === HW.current.layout && aW === HW.current.input) return !1;
-           const qQ = qW.current + 250 - performance.now();
-           return QQ === HW.current.layout && (qQ > 0 || tQ()) ? (XQ = setTimeout((() => {
-             wQ() && WQ()
-           }), Math.max(qQ, 62.5)), !1) : (HW.current = {
-             layout: QQ,
-             input: aW,
-             caps: {
-               hotbar: OW(eQ, AW),
-               cluster: IX(eQ, (0, iQ.t)(GQ.width, GQ.height, YQ), AW)
+             if (null == this.source) throw new Error("Attempting to send message before initialization");
+             const iM = cS();
+             null === (rM = this.source) || void 0 === rM || rM.postMessage([Sj.FRAME, Object.assign(Object.assign({}, MM), {
+               nonce: iM
+             })], this.sourceOrigin, this.getTransfer(MM));
+             return new Promise(((MM, rM) => {
+               this.pendingCommands.set(iM, {
+                 resolve: MM,
+                 reject: rM
+               })
+             }))
+           }, this.commands = (iM = this.sendCommand, {
+             authenticate: JS(iM),
+             authorize: dS(iM),
+             captureLog: yS(iM),
+             encourageHardwareAcceleration: lS(iM),
+ ... (31 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1915` → after: `L5158-L5229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5158-L5229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5158-L5229) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1915)

```diff
-           }, !0)
+           }, this.isReady = !1, this.clientId = MM, this.configuration = null !== rM && void 0 !== rM ? rM : {
+             disableConsoleLogOverride: !1
+           }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = oi.DESKTOP, this.guildId = null, void(this.channelId = null);
+         const OM = new URLSearchParams(this._getSearch()),
+           SM = OM.get("frame_id");
+         if (!SM) throw new Error("frame_id query param is not defined");
+         this.frameId = SM;
+         const jM = OM.get("instance_id");
+         if (!jM) throw new Error("instance_id query param is not defined");
+         this.instanceId = jM;
+         const aM = OM.get("platform");
+         if (!aM) throw new Error("platform query param is not defined");
+         if (aM !== oi.DESKTOP && aM !== oi.MOBILE) throw new Error(`Invalid query param "platform" of "${aM}". Valid values are "${oi.DESKTOP}" or "${oi.MOBILE}"`);
+         this.platform = aM, this.guildId = OM.get("guild_id"), this.channelId = OM.get("channel_id"), [this.source, this.sourceOrigin] = function() {
+           var MM;
+           return [null !== (MM = window.parent.opener) && void 0 !== MM ? MM : window.parent, document.referrer ? document.referrer : "*"]
+ ... (56 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L1917-L2016` → after: `L5231-L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5231-L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5231-L5267) · [Before (L1917-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L1917-L2016)

```diff
-         return wQ(), WQ(), () => {
-           clearTimeout(XQ)
-         }
-       }), [nQ, bW, eQ, GQ, YQ, aW, tQ]);
-       const lW = QQ => ({
-         left: QQ.left * uQ,
-         top: QQ.top * uQ,
-         width: (QQ.right - QQ.left) * uQ,
-         height: (QQ.bottom - QQ.top) * uQ
-       });
-       return (0, UQ.jsx)("div", {
-         ref: dQ,
-         className: FQ()("HudPreviewBox", {
-           Fill: VQ
-         }),
-         style: {
- ... (84 more removed lines; see GitHub link above)
+         Oj.forEach((rM => {
+           ! function(MM, rM, iM) {
+             const OM = MM[rM],
+               SM = MM;
+             OM && (MM[rM] = function() {
+               const MM = [].slice.call(arguments),
+                 jM = "" + MM.join(" ");
+               iM(rM, jM), OM.apply(SM, MM)
+             })
+           }(console, rM, MM)
+         }))
+       }
+       handleClose(MM) {
+         zS.parse(MM)
+       }
+       handleHandshake() {}
+ ... (21 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2020-L2023` → after: `L5283-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5283-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5283-L5292) · [Before (L2020-L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2020-L2023)

```diff
-       (0, qQ.useEffect)((() => {
-         var XQ;
-         null === (XQ = QQ.current) || void 0 === XQ || XQ.toggleAttribute("inert", WQ)
-       }), [QQ, WQ])
+       var iM, OM, SM, jM, aM, PM, nM, QM, zM = MM.constructor,
+         LM = zM.precision;
+       if (!MM.s || !rM.s) return rM.s || (rM = new zM(MM)), Qj ? pj(rM, LM) : rM;
+       if (nM = MM.d, QM = rM.d, aM = MM.e, SM = rM.e, nM = nM.slice(), jM = aM - SM) {
+         for (jM < 0 ? (OM = nM, jM = -jM, PM = QM.length) : (OM = QM, SM = aM, PM = nM.length), jM > (PM = (aM = Math.ceil(LM / 7)) > PM ? aM + 1 : PM + 1) && (jM = PM, OM.length = 1), OM.reverse(); jM--;) OM.push(0);
+         OM.reverse()
+       }
+       for ((PM = nM.length) - (jM = QM.length) < 0 && (jM = PM, OM = QM, QM = nM, nM = OM), iM = 0; jM;) iM = (nM[--jM] = nM[jM] + QM[jM] + iM) / dj | 0, nM[jM] %= dj;
+       for (iM && (nM.unshift(iM), ++SM), PM = nM.length; 0 == nM[--PM];) nM.pop();
+       return rM.d = nM, rM.e = SM, Qj ? pj(rM, LM) : rM
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2027-L2144` → after: `L5295-L5296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5295-L5296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5295-L5296) · [Before (L2027-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2027-L2144)

```diff
-     function vX(QQ) {
-       let {
-         onScale: WQ,
-         onHidden: XQ,
-         onReset: TQ,
-         locked: zQ,
-         lockable: sQ,
-         onLocked: FQ,
-         onClose: gQ,
-         ...JQ
-       } = QQ;
-       const {
-         t: rQ
-       } = (0, wQ.C)(), IQ = (0, qQ.useRef)(null);
-       (0, sW.k)("popup", IQ, gQ),
-       function(QQ) {
- ... (102 more removed lines; see GitHub link above)
+     function Gj(MM, rM, iM) {
+       if (MM !== ~~MM || MM < rM || MM > iM) throw Error(Lj + MM)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2149-L2173` → after: `L5300-L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5300-L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5300-L5308) · [Before (L2149-L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2149-L2173)

```diff
-       let {
-         info: WQ,
-         tuple: XQ,
-         props: qQ
-       } = QQ;
-       const {
-         t: TQ
-       } = (0, wQ.C)();
-       return (0, UQ.jsx)(IQ.h, {
-         name: TQ("hudLayout:size"),
-         min: cQ.i,
-         max: cQ.h,
-         step: AW,
-         initValue: XQ[2],
-         disabled: qQ.locked.has(WQ.id),
-         selectableMax: qQ.scaleCaps[WQ.id],
- ... (9 more removed lines; see GitHub link above)
+       var rM, iM, OM, SM = MM.length - 1,
+         jM = "",
+         aM = MM[0];
+       if (SM > 0) {
+         for (jM += aM, rM = 1; rM < SM; rM++)(iM = 7 - (OM = MM[rM] + "").length) && (jM += gj(iM)), jM += OM;
+         (iM = 7 - (OM = (aM = MM[rM]) + "").length) && (jM += gj(iM))
+       } else if (0 === aM) return "0";
+       for (; aM % 10 === 0;) aM /= 10;
+       return jM + aM
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2176-L2318` → after: `L5475-L5527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5475-L5527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5475-L5527) · [Before (L2176-L2318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2176-L2318)

```diff
-     function aX(QQ) {
-       const {
-         t: WQ
-       } = (0, wQ.C)(), {
-         present: XQ,
-         elements: TQ,
-         selected: zQ,
-         onSelect: sQ,
-         onHidden: PQ,
-         onReset: gQ,
-         note: JQ,
-         actionButtons: rQ,
-         keyNames: IQ,
-         sizeBesidePreview: jQ,
-         locked: BQ,
-         lockable: yQ,
- ... (127 more removed lines; see GitHub link above)
+       function rM(MM, rM, iM, OM) {
+         var SM, jM;
+         if (iM != OM) jM = iM > OM ? 1 : -1;
+         else
+           for (SM = jM = 0; SM < iM; SM++)
+             if (MM[SM] != rM[SM]) {
+               jM = MM[SM] > rM[SM] ? 1 : -1;
+               break
+             } return jM
+       }
+ 
+       function iM(MM, rM, iM) {
+         for (var OM = 0; iM--;) MM[iM] -= OM, OM = MM[iM] < rM[iM] ? 1 : 0, MM[iM] = OM * dj + MM[iM] - rM[iM];
+         for (; !MM[0] && MM.length > 1;) MM.shift()
+       }
+       return function(OM, SM, jM, aM) {
+ ... (37 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2322-L2384` → after: `L5531-L5532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5531-L5532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5531-L5532) · [Before (L2322-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2322-L2384)

```diff
-       let {
-         preview: WQ,
-         quick: XQ,
-         onFullScreen: TQ,
-         resting: zQ,
-         onSidePanel: sQ
-       } = QQ;
-       const {
-         t: FQ
-       } = (0, wQ.C)(), gQ = pX(), JQ = (0, qQ.useRef)(null), {
-         width: rQ
-       } = (0, PW.d)(JQ), IQ = Math.floor(gQ.width * Math.min(1, WQ.maxHeight / gQ.height)), jQ = rQ - IQ - 12, BQ = jQ >= 130, yQ = rQ > 0;
-       (0, qQ.useEffect)((() => {
-         yQ && sQ(BQ)
-       }), [yQ, BQ, sQ]);
-       const VQ = (0, iQ.s)(BQ ? IQ : rQ, gQ.width, gQ.height, WQ.maxHeight),
- ... (47 more removed lines; see GitHub link above)
+       for (var rM = 7 * MM.e, iM = MM.d[0]; iM >= 10; iM /= 10) rM++;
+       return rM
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2396-L2397` → after: `L5536-L5537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5536-L5537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5536-L5537) · [Before (L2396-L2397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2396-L2397)

```diff
-       const [wQ, qQ, TQ, zQ] = QQ;
-       return "sides" === WQ ? [wQ, XQ, TQ, XQ] : [XQ, qQ, XQ, zQ]
+       if (rM > MM.LN10.sd()) throw Qj = !0, iM && (MM.precision = iM), Error(zj + "LN10 precision limit exceeded");
+       return pj(new MM(MM.LN10), rM)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2403-L2449` → after: `L5541-L5542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5541-L5542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5541-L5542) · [Before (L2403-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2403-L2449)

```diff
-       let {
-         safe: WQ,
-         onPreview: XQ,
-         onCommit: TQ
-       } = QQ;
-       const {
-         t: zQ
-       } = (0, wQ.C)(), sQ = (0, rW.w)(null !== WQ && void 0 !== WQ ? WQ : CX, window.innerWidth, window.innerHeight, NW(document).map(Math.round)), FQ = (0, qQ.useRef)(null !== WQ && void 0 !== WQ ? WQ : CX);
-       FQ.current = null !== WQ && void 0 !== WQ ? WQ : CX;
-       const gQ = QQ => {
-         const WQ = Math.min(RX(QQ), "sides" === QQ ? Math.max(sQ[1], sQ[3]) : Math.max(sQ[0], sQ[2]));
-         return (0, UQ.jsx)(IQ.h, {
-           name: zQ("sides" === QQ ? "hudLayout:safeSides" : "hudLayout:safeEnds"),
-           min: 0,
-           max: RX(QQ),
-           step: 2,
- ... (31 more removed lines; see GitHub link above)
+       for (var rM = ""; MM--;) rM += "0";
+       return rM
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2452-L2729` → after: `L5545-L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5545-L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5545-L5598) · [Before (L2452-L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2452-L2729)

```diff
-     function kX() {
-       const {
-         t: QQ
-       } = (0, wQ.C)(), WQ = (0, cQ.db)(), {
-         clientEscMenuOptions: XQ
-       } = (0, gQ.n)(["clientEscMenuOptions"]), TQ = (0, hX.f)(), zQ = WQ.hudLayouts[TQ], [sQ, FQ] = (0, qQ.useState)(null), {
-         rowIconsOpen: JQ,
-         onRowIconsOpen: rQ,
-         select: jQ
-       } = function(QQ, WQ) {
-         const [XQ, wQ] = (0, qQ.useState)((() => cQ.E.some((WQ => void 0 !== QQ.hudElements[WQ] || QQ.hudLocked.includes(WQ))))), TQ = (0, qQ.useCallback)((QQ => {
-           WQ(QQ), (0, cQ.Q)(QQ) && wQ(!0)
-         }), [WQ]);
-         return {
-           rowIconsOpen: XQ,
-           onRowIconsOpen: wQ,
- ... (262 more removed lines; see GitHub link above)
+     function uj(MM, rM) {
+       var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM = 1,
+         mM = MM,
+         HM = mM.d,
+         hM = mM.constructor,
+         JM = hM.precision;
+       if (mM.s < 1) throw Error(zj + (mM.s ? "NaN" : "-Infinity"));
+       if (mM.eq(Pj)) return new hM(0);
+       if (null == rM ? (Qj = !1, QM = JM) : QM = rM, mM.eq(10)) return null == rM && (Qj = !0), tj(hM, QM);
+       if (QM += 10, hM.precision = QM, OM = (iM = Cj(HM)).charAt(0), jM = wj(mM), !(Math.abs(jM) < 15e14)) return nM = tj(hM, QM + 2, JM).times(jM + ""), mM = uj(new hM(OM + "." + iM.slice(1)), QM - 10).plus(nM), hM.precision = JM, null == rM ? (Qj = !0, pj(mM, JM)) : mM;
+       for (; OM < 7 && 1 != OM || 1 == OM && iM.charAt(1) > 3;) OM = (iM = Cj((mM = mM.times(MM)).d)).charAt(0), LM++;
+       for (jM = wj(mM), OM > 1 ? (mM = new hM("0." + iM), jM++) : mM = new hM(OM + "." + iM.slice(1)), PM = aM = mM = ej(mM.minus(Pj), mM.plus(Pj), QM), zM = pj(mM.times(mM), QM), SM = 3;;) {
+         if (aM = pj(aM.times(zM), QM), Cj((nM = PM.plus(ej(aM, new hM(SM), QM))).d).slice(0, QM) === Cj(PM.d).slice(0, QM)) return PM = PM.times(2), 0 !== jM && (PM = PM.plus(tj(hM, QM + 2, JM).times(jM + ""))), PM = ej(PM, new hM(LM), QM), hM.precision = JM, null == rM ? (Qj = ! … [truncated]
+         PM = nM, SM += 2
+       }
+     }
+ ... (38 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2837-L2840` → after: `L5601-L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5601-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5601-L5625) · [Before (L2837-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2837-L2840)

```diff
-     function tX() {
-       return (0, UQ.jsx)(UQ.Fragment, {
-         children: SX.map(((QQ, WQ) => (0, UQ.jsx)(QQ, {}, WQ)))
-       })
+     function Wj(MM, rM) {
+       var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM = MM.constructor,
+         HM = mM.precision;
+       if (!MM.s || !rM.s) return rM.s ? rM.s = -rM.s : rM = new mM(MM), Qj ? pj(rM, HM) : rM;
+       if (nM = MM.d, LM = rM.d, OM = rM.e, QM = MM.e, nM = nM.slice(), aM = QM - OM) {
+         for ((zM = aM < 0) ? (iM = nM, aM = -aM, PM = LM.length) : (iM = LM, OM = QM, PM = nM.length), aM > (SM = Math.max(Math.ceil(HM / 7), PM) + 2) && (aM = SM, iM.length = 1), iM.reverse(), SM = aM; SM--;) iM.push(0);
+         iM.reverse()
+       } else {
+         for ((zM = (SM = nM.length) < (PM = LM.length)) && (PM = SM), SM = 0; SM < PM; SM++)
+           if (nM[SM] != LM[SM]) {
+             zM = nM[SM] < LM[SM];
+             break
+           } aM = 0
+       }
+       for (zM && (iM = nM, nM = LM, LM = iM, rM.s = -rM.s), PM = nM.length, SM = LM.length - PM; SM > 0; --SM) nM[PM++] = 0;
+       for (SM = LM.length; SM > aM;) {
+ ... (9 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2844-L2954` → after: `L5628-L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5628-L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5628-L5632) · [Before (L2844-L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2844-L2954)

```diff
-     function eX() {
-       const {
-         t: QQ
-       } = (0, wQ.C)(), {
-         isTouchScreen: WQ,
-         clientEscMenuOptions: XQ,
-         gameState: zQ
-       } = (0, gQ.n)(["isTouchScreen", "clientEscMenuOptions", "gameState"]), sQ = (0, jQ.g)("ezBridging"), FQ = (0, jQ.g)("ezTowering"), yQ = "inGame" !== zQ || !0 === sQ, VQ = (0, BQ.f)(), pQ = null !== VQ && ("inGame" !== zQ || !0 === FQ), [, GQ] = (0, qQ.useReducer)((QQ => QQ  … [truncated]
-       return (0, UQ.jsxs)("div", {
-         className: "SettingsMenuRightInner",
-         children: [bQ && (0, UQ.jsxs)("div", {
-           className: "SettingBox SettingBoxWithButton",
-           children: [(0, UQ.jsx)("div", {
-             children: QQ("controller:settingsControlsNote")
-           }), (0, UQ.jsx)(PQ.T, {
-             onClick: () => {
- ... (95 more removed lines; see GitHub link above)
+     function sj(MM, rM, iM) {
+       var OM, SM = wj(MM),
+         jM = Cj(MM.d),
+         aM = jM.length;
+       return rM ? (iM && (OM = iM - aM) > 0 ? jM = jM.charAt(0) + "." + jM.slice(1) + gj(OM) : aM > 1 && (jM = jM.charAt(0) + "." + jM.slice(1)), jM = jM + (SM < 0 ? "e" : "e+") + SM) : SM < 0 ? (jM = "0." + gj(-SM - 1) + jM, iM && (OM = iM - aM) > 0 && (jM += gj(OM))) : SM >= aM … [truncated]
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2957-L2985` → after: `L5635-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5635-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5635-L5636) · [Before (L2957-L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2957-L2985)

```diff
-     function nX(QQ) {
-       let {
-         title: WQ,
-         defaultOpen: XQ,
-         children: wQ
-       } = QQ;
-       const [TQ, zQ] = (0, qQ.useState)(XQ);
-       return (0, UQ.jsxs)("div", {
-         className: FQ()("ControlsSection", {
-           Collapsed: !TQ
-         }),
-         children: [(0, UQ.jsxs)("div", {
-           className: "ControlsSectionHeader",
-           "data-pad-focusable": !0,
-           onClick: () => {
-             zQ(!TQ)
- ... (13 more removed lines; see GitHub link above)
+     function Dj(MM, rM) {
+       if (MM.length > rM) return MM.length = rM, !0
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L2989-L3111` → after: `L5640-L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5640-L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5640-L5650) · [Before (L2989-L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L2989-L3111)

```diff
-       let {
-         noaAction: WQ,
-         forceUpdate: XQ,
-         clashesWith: sQ,
-         showPadGlyph: gQ
-       } = QQ;
-       const {
-         t: JQ
-       } = (0, wQ.C)(), rQ = (0, VQ.e)(WQ), [IQ, jQ] = (0, qQ.useState)(!1), [BQ, DQ] = (0, qQ.useState)("controls:clickToEnterNewBinding"), [pQ, GQ] = (0, qQ.useState)(null), [bQ, vQ] = (0, qQ.useState)(null), dQ = (0, qQ.useRef)(null);
-       (0, qQ.useEffect)((() => {
-         IQ && dQ.current && dQ.current.focus()
-       }), [IQ]);
-       const HQ = TQ.s[WQ].filter((QQ => zQ.f[QQ]));
-       let aQ = null;
-       const lQ = [],
-         hQ = sQ.flatMap((QQ => {
- ... (107 more removed lines; see GitHub link above)
+       if (!MM || "object" !== typeof MM) throw Error(zj + "Object expected");
+       var rM, iM, OM, SM = ["precision", 1, nj, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
+       for (rM = 0; rM < SM.length; rM += 3)
+         if (void 0 !== (OM = MM[iM = SM[rM]])) {
+           if (!(Hj(OM) === OM && OM >= SM[rM + 1] && OM <= SM[rM + 2])) throw Error(Lj + iM + ": " + OM);
+           this[iM] = OM
+         } if (void 0 !== (OM = MM[iM = "LN10"])) {
+         if (OM != Math.LN10) throw Error(Lj + iM + ": " + OM);
+         this[iM] = new this(OM)
+       }
+       return this
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3113-L3161` → after: `L5652-L5680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5652-L5680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5652-L5680) · [Before (L3113-L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3113-L3161)

```diff
-   },
-   9255: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => zQ
-     });
-     var wQ = XQ(61),
-       qQ = XQ(1094),
-       TQ = XQ(1145);
-     const zQ = (0, wQ.forwardRef)((function(QQ, WQ) {
-       let {
-         icon: XQ,
-         title: wQ,
-         sub: zQ,
-         expanded: sQ,
-         onClick: FQ
-       } = QQ;
- ... (33 more removed lines; see GitHub link above)
+     var Zj = function MM(rM) {
+       var iM, OM, SM;
+ 
+       function jM(MM) {
+         var rM = this;
+         if (!(rM instanceof jM)) return new jM(MM);
+         if (rM.constructor = jM, MM instanceof jM) return rM.s = MM.s, rM.e = MM.e, void(rM.d = (MM = MM.d) ? MM.slice() : MM);
+         if ("number" === typeof MM) {
+           if (0 * MM !== 0) throw Error(Lj + MM);
+           if (MM > 0) rM.s = 1;
+           else {
+             if (!(MM < 0)) return rM.s = 0, rM.e = 0, void(rM.d = [0]);
+             MM = -MM, rM.s = -1
+           }
+           return MM === ~~MM && MM < 1e7 ? (rM.e = 0, void(rM.d = [MM])) : Rj(rM, MM.toString())
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3163-L3174` → after: `L5682-L5762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5682-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5682-L5762) · [Before (L3163-L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3163-L3174)

```diff
-     var wQ = XQ(1728),
-       qQ = XQ(1806);
-     const TQ = QQ => QQ >= 56320 && QQ <= 57343,
-       zQ = QQ => QQ >= 55296 && QQ <= 56319,
-       sQ = (QQ, WQ) => WQ >= 2 && TQ(QQ.charCodeAt(WQ - 1)) && zQ(QQ.charCodeAt(WQ - 2)) ? WQ - 2 : Math.max(0, WQ - 1),
-       FQ = (QQ, WQ) => {
-         let XQ;
-         var wQ, qQ;
-         return XQ = QQ.start !== QQ.end ? WQ < 0 ? QQ.start : QQ.end : WQ < 0 ? sQ(QQ.value, QQ.start) : (wQ = QQ.value, (qQ = QQ.start) + 1 < wQ.length && zQ(wQ.charCodeAt(qQ)) && TQ(wQ.charCodeAt(qQ + 1)) ? qQ + 2 : Math.min(wQ.length, qQ + 1)), {
-           value: QQ.value,
-           start: XQ,
-           end: XQ
+     Pj = new Zj(1);
+     var oj;
+     ! function(MM) {
+       MM.AED = "aed", MM.AFN = "afn", MM.ALL = "all", MM.AMD = "amd", MM.ANG = "ang", MM.AOA = "aoa", MM.ARS = "ars", MM.AUD = "aud", MM.AWG = "awg", MM.AZN = "azn", MM.BAM = "bam", MM.BBD = "bbd", MM.BDT = "bdt", MM.BGN = "bgn", MM.BHD = "bhd", MM.BIF = "bif", MM.BMD = "bmd", MM … [truncated]
+     }(oj || (oj = {}));
+     oj.AED, oj.AFN, oj.ALL, oj.AMD, oj.ANG, oj.AOA, oj.ARS, oj.AUD, oj.AWG, oj.AZN, oj.BAM, oj.BBD, oj.BDT, oj.BGN, oj.BHD, oj.BIF, oj.BMD, oj.BND, oj.BOB, oj.BOV, oj.BRL, oj.BSD, oj.BTN, oj.BWP, oj.BYR, oj.BYN, oj.BZD, oj.CAD, oj.CDF, oj.CHE, oj.CHF, oj.CHW, oj.CLF, oj.CLP, oj.C … [truncated]
+     var fj = {
+       exports: {}
+     };
+     ! function(MM, rM) {
+       var iM = "__lodash_hash_undefined__",
+         OM = 9007199254740991,
+         jM = "[object Arguments]",
+         aM = "[object Array]",
+         PM = "[object Boolean]",
+         nM = "[object Date]",
+ ... (65 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3176-L3188` → after: `L5764-L5812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5764-L5812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5764-L5812) · [Before (L3176-L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3176-L3188)

```diff
-       },
-       PQ = ["text", "search", "url", "email", "tel", "password", "number"],
-       gQ = QQ => !(!(0, qQ.b)(QQ) || QQ.isContentEditable || QQ.hasAttribute("data-pad-no-osk")) && (QQ instanceof HTMLTextAreaElement || QQ instanceof HTMLInputElement && PQ.includes(QQ.type)),
-       JQ = QQ => null !== QQ.selectionStart,
-       rQ = QQ => {
-         var WQ, XQ;
-         const {
-           value: wQ
-         } = QQ;
-         return {
-           value: wQ,
-           start: null !== (WQ = QQ.selectionStart) && void 0 !== WQ ? WQ : wQ.length,
-           end: null !== (XQ = QQ.selectionEnd) && void 0 !== XQ ? XQ : wQ.length
+       }
+ 
+       function FM(MM) {
+         var rM = -1,
+           iM = Array(MM.size);
+         return MM.forEach((function(MM) {
+           iM[++rM] = MM
+         })), iM
+       }
+       var BM = Array.prototype,
+         XM = Function.prototype,
+         IM = Object.prototype,
+         KM = sM["__core-js_shared__"],
+         qM = function() {
+           var MM = /[^.]+$/.exec(KM && KM.keys && KM.keys.IE_PROTO || "");
+           return MM ? "Symbol(src)_1." + MM : ""
+ ... (33 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3190-L3197` → after: `L5814-L5925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5814-L5925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5814-L5925) · [Before (L3190-L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3190-L3197)

```diff
-       },
-       IQ = (QQ, WQ, XQ) => {
-         if (QQ.readOnly) return;
-         const qQ = QQ instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
-         Object.getOwnPropertyDescriptor(qQ, "value").set.call(QQ, WQ.value), JQ(QQ) && QQ.setSelectionRange(WQ.start, WQ.end), (0, wQ.g)(QQ, new InputEvent("input", {
-           bubbles: !0,
-           inputType: XQ
-         }))
+       }
+ 
+       function er(MM) {
+         var rM = -1,
+           iM = MM ? MM.length : 0;
+         for (this.clear(); ++rM < iM;) {
+           var OM = MM[rM];
+           this.set(OM[0], OM[1])
+         }
+       }
+ 
+       function br(MM) {
+         var rM = -1,
+           iM = MM ? MM.length : 0;
+         for (this.clear(); ++rM < iM;) {
+           var OM = MM[rM];
+ ... (96 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3199-L3213` → after: `L5927-L5997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5927-L5997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5927-L5997) · [Before (L3199-L3213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3199-L3213)

```diff
-     let jQ = !1;
-     const BQ = (QQ, WQ) => !!document.execCommand(QQ, !1, WQ) || (jQ || (jQ = !0, console.warn(`execCommand("${QQ}") failed; the on-screen keyboard is setting the value directly`)), !1),
-       yQ = (QQ, WQ) => {
-         BQ("insertText", WQ) || IQ(QQ, function(QQ, WQ) {
-           let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-           const wQ = QQ.value.slice(0, QQ.start),
-             qQ = QQ.value.slice(QQ.end);
-           let TQ = XQ < 0 ? WQ.length : Math.max(0, XQ - wQ.length - qQ.length);
-           TQ > 0 && TQ < WQ.length && zQ(WQ.charCodeAt(TQ - 1)) && TQ--;
-           const sQ = WQ.slice(0, TQ),
-             FQ = wQ.length + sQ.length;
-           return {
-             value: wQ + sQ + qQ,
-             start: FQ,
-             end: FQ
+       var Rr, pr = function(MM, rM, iM) {
+         for (var OM = -1, SM = Object(MM), jM = iM(MM), aM = jM.length; aM--;) {
+           var PM = jM[Rr ? aM : ++OM];
+           if (!1 === rM(SM[PM], PM, SM)) break
+         }
+         return MM
+       };
+ 
+       function Wr(MM, rM) {
+         return MM && pr(MM, rM, zi)
+       }
+ 
+       function sr(MM, rM) {
+         for (var iM = 0, OM = (rM = Br(rM, MM) ? [rM] : Yr(rM)).length; null != MM && iM < OM;) MM = MM[qr(rM[iM++])];
+         return iM && iM == OM ? MM : void 0
+       }
+ ... (55 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3215-L3223` → after: `L5999-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L5999-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L5999-L6065) · [Before (L3215-L3223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3215-L3223)

```diff
-         }(rQ(QQ), WQ, QQ.maxLength), "insertText")
-       },
-       VQ = QQ => {
-         BQ("delete") || IQ(QQ, (QQ => {
-           const WQ = QQ.start === QQ.end ? sQ(QQ.value, QQ.start) : QQ.start;
-           return {
-             value: QQ.value.slice(0, WQ) + QQ.value.slice(QQ.end),
-             start: WQ,
-             end: WQ
+           if (!tM) return !1;
+           return zM || (zM = new tr),
+             function(MM, rM, iM, OM, SM, jM) {
+               var aM = 2 & SM,
+                 PM = zi(MM),
+                 nM = PM.length,
+                 QM = zi(rM),
+                 zM = QM.length;
+               if (nM != zM && !aM) return !1;
+               var LM = nM;
+               for (; LM--;) {
+                 var mM = PM[LM];
+                 if (!(aM ? mM in rM : VM.call(rM, mM))) return !1
+               }
+               var HM = jM.get(MM);
+               if (HM && jM.get(rM)) return HM == rM;
+ ... (51 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3225-L3233` → after: `L6067-L6113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6067-L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6067-L6113) · [Before (L3225-L3233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3225-L3233)

```diff
-         })(rQ(QQ)), "deleteContentBackward")
-       },
-       DQ = (QQ, WQ) => {
-         if (!JQ(QQ)) return;
-         const XQ = FQ(rQ(QQ), WQ);
-         QQ.setSelectionRange(XQ.start, XQ.end)
-       },
-       pQ = QQ => {
-         JQ(QQ) && 0 === QQ.selectionStart && 0 === QQ.selectionEnd && QQ.setSelectionRange(QQ.value.length, QQ.value.length)
+         }(MM[0], MM[1]) : function(MM) {
+           var rM = function(MM) {
+             var rM = zi(MM),
+               iM = rM.length;
+             for (; iM--;) {
+               var OM = rM[iM],
+                 SM = MM[OM];
+               rM[iM] = [OM, SM, Xr(SM)]
+             }
+             return rM
+           }(MM);
+           if (1 == rM.length && rM[0][2]) return Ir(rM[0][0], rM[0][1]);
+           return function(iM) {
+             return iM === MM || function(MM, rM, iM, OM) {
+               var SM = iM.length,
+                 jM = SM,
+ ... (31 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3235-L3302` → after: `L6115-L6124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6115-L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6115-L6124) · [Before (L3235-L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3235-L3302)

```diff
-   },
-   9202: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => sQ
-     });
-     var wQ = XQ(26),
-       qQ = XQ(2203),
-       TQ = XQ(1404),
-       zQ = XQ(1454);
-     const sQ = async () => {
-       if ((0, zQ.l)()) {
-         if (!0 !== await TQ.NotificationProvider.showPromptPopup({
-             title: "controller:menusLeaveGameTitle",
-             confirmText: "controller:menusLeaveGameLeave",
-             cancelText: "controller:menusLeaveGameStay",
-             destructive: !0
- ... (52 more removed lines; see GitHub link above)
+ 
+       function fr(MM) {
+         if (! function(MM) {
+             var rM = MM && MM.constructor,
+               iM = "function" == typeof rM && rM.prototype || IM;
+             return MM === iM
+           }(MM)) return Pr(MM);
+         var rM = [];
+         for (var iM in Object(MM)) VM.call(MM, iM) && "constructor" != iM && rM.push(iM);
+         return rM
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3304-L3387` → after: `L6126-L6148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6126-L6148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6126-L6148) · [Before (L3304-L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3304-L3387)

```diff
-   },
-   9048: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       B: () => aQ,
-       F: () => bQ,
-       G: () => vQ,
-       J: () => yQ,
-       M: () => FQ,
-       P: () => gQ,
-       c: () => VQ,
-       e: () => HQ,
-       h: () => UQ,
-       k: () => GQ,
-       n: () => jQ,
-       r: () => BQ,
-       s: () => rQ,
- ... (68 more removed lines; see GitHub link above)
+ 
+       function Yr(MM) {
+         return ri(MM) ? MM : Kr(MM)
+       }
+ 
+       function Nr(MM, rM, iM, OM, SM, jM) {
+         var aM = 2 & SM,
+           PM = MM.length,
+           nM = rM.length;
+         if (PM != nM && !(aM && nM > PM)) return !1;
+         var QM = jM.get(MM);
+         if (QM && jM.get(rM)) return QM == rM;
+         var zM = -1,
+           LM = !0,
+           mM = 1 & SM ? new wr : void 0;
+         for (jM.set(MM, rM), jM.set(rM, MM); ++zM < PM;) {
+ ... (7 more added lines; see GitHub link above)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3390-L3405` → after: `L6151-L6159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6151-L6159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6151-L6159) · [Before (L3390-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3390-L3405)

```diff
-             const wQ = {
-               ...gQ(XQ, 0, 0),
-               relatedTarget: QQ
-             };
-             JQ(WQ, new PointerEvent("pointerover", wQ)), JQ(WQ, new MouseEvent("mouseover", wQ));
-             const TQ = [],
-               zQ = WQ => !(null === QQ || void 0 === QQ || !QQ.isConnected) && WQ.contains(QQ) || !!qQ && WQ.contains(qQ);
-             for (let QQ = WQ; QQ && !zQ(QQ); QQ = QQ.parentElement) TQ.push(QQ);
-             for (const QQ of TQ.reverse()) JQ(QQ, new PointerEvent("pointerenter", {
-               ...wQ,
-               bubbles: !1
-             })), JQ(QQ, new MouseEvent("mouseenter", {
-               ...wQ,
-               bubbles: !1
-             }));
-             JQ(WQ, new PointerEvent("pointermove", gQ(XQ, 0, 0))), JQ(WQ, new MouseEvent("mousemove", gQ(XQ, 0, 0)))
+             if (!NM(rM, (function(MM, rM) {
+                 if (!mM.has(rM) && (HM === MM || iM(HM, MM, OM, SM, jM))) return mM.add(rM)
+               }))) {
+               LM = !1;
+               break
+             }
+           } else if (HM !== hM && !iM(HM, hM, OM, SM, jM)) {
+             LM = !1;
+             break
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3407-L3436` → after: `L6161-L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6161-L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6161-L6219) · [Before (L3407-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3407-L3436)

```diff
-         } else WQ && (JQ(WQ, new PointerEvent("pointermove", gQ(XQ, 0, 0))), JQ(WQ, new MouseEvent("mousemove", gQ(XQ, 0, 0))))
-       },
-       yQ = QQ => {
-         wQ.k.mB(TQ.f, QQ)
-       },
-       VQ = QQ => {
-         if (FQ(QQ)) return void yQ(QQ);
-         const WQ = QQ.hasAttribute("data-pad-focusable") ? QQ.querySelector("a[href]") : null,
-           XQ = null !== WQ && void 0 !== WQ ? WQ : QQ;
-         jQ(XQ, PQ(XQ))
-       },
-       DQ = ".Dropdown-root.is-open",
-       pQ = QQ => {
-         const WQ = QQ.querySelector(".Dropdown-control");
-         return VQ(WQ), WQ
-       },
- ... (14 more removed lines; see GitHub link above)
+         }
+         return jM.delete(MM), jM.delete(rM), LM
+       }
+ 
+       function Ar(MM, rM) {
+         var iM = MM.__data__;
+         return function(MM) {
+           var rM = typeof MM;
+           return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
+         }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
+       }
+ 
+       function xr(MM, rM) {
+         var iM = function(MM, rM) {
+           return null == MM ? void 0 : MM[rM]
+         }(MM, rM);
+ ... (43 more added lines; see GitHub link above)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/160.js` (Changed code · before: `L3438-L3446` → after: `L6221-L6323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9R6221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a5378b084f40cd6d232727be9185d5869901bf48beab4fde4769d4acd435a8a9) · [After (L6221-L6323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/160.js#L6221-L6323) · [Before (L3438-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/160.js#L3438-L3446)

```diff
-         return null !== (WQ = [...QQ.querySelectorAll("[data-pad-back]")].find(sQ.u)) && void 0 !== WQ ? WQ : null
-       },
-       HQ = QQ => {
-         const WQ = dQ(QQ);
-         return !!WQ && (VQ(WQ), !0)
-       },
-       aQ = QQ => {
-         var WQ, XQ, wQ, qQ;
-         return null !== (WQ = null !== (XQ = null !== (wQ = QQ.getAttribute("data-pad-key")) && void 0 !== wQ ? wQ : QQ.getAttribute("href")) && void 0 !== XQ ? XQ : null === (qQ = QQ.querySelector("a[href]")) || void 0 === qQ ? void 0 : qQ.getAttribute("href")) && void 0 !== WQ  … [truncated]
+         MM = null == (rM = MM) ? "" : function(MM) {
+           if ("string" == typeof MM) return MM;
+           if (Pi(MM)) return Gr ? Gr.call(MM) : "";
+           var rM = MM + "";
+           return "0" == rM && 1 / MM == -1 / 0 ? "-0" : rM
+         }(rM);
+         var iM = [];
+         return bM.test(MM) && iM.push(""), MM.replace(wM, (function(MM, rM, OM, SM) {
+           iM.push(OM ? SM.replace(tM, "$1") : rM || MM)
+         })), iM
+       }));
+ 
+       function qr(MM) {
+         if ("string" == typeof MM || Pi(MM)) return MM;
+         var rM = MM + "";
+         return "0" == rM && 1 / MM == -1 / 0 ? "-0" : rM
+ ... (87 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/161.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/161.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L4-L15` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/161.js#L4-L7) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/161.js#L4-L15)

```diff
-   36906: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       B: () => DQ,
-       b: () => TQ,
-       f: () => BQ,
-       h: () => yQ,
-       j: () => sQ,
-       n: () => rQ,
-       r: () => VQ,
-       t: () => JQ,
-       u: () => pQ,
-       y: () => jQ
+   7190: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       BloxdMsnAccountSdk: () => LM,
+       MsnSdkAdaptor: () => JM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L17-L98` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/161.js#L9-L14) · [Before (L17-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/161.js#L17-L98)

```diff
-     var wQ = XQ(26),
-       qQ = XQ(31);
-     const TQ = "clientGameInventoryButtonsChanged",
-       zQ = new Map;
- 
-     function sQ() {
-       return [...zQ.values()].sort(((QQ, WQ) => {
-         var XQ, wQ;
-         return (null !== (XQ = QQ.order) && void 0 !== XQ ? XQ : 0) - (null !== (wQ = WQ.order) && void 0 !== wQ ? wQ : 0)
-       }))
-     }
-     let FQ = null;
- 
-     function PQ(QQ) {
-       FQ = QQ
-     }
- ... (66 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177),
+       jM = iM(3868),
+       aM = iM(625),
+       PM = iM(1821);
+     const nM = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js";
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L102` → after: `L18-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L18-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/161.js#L18-L203) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/161.js#L102)

```diff
-       return FQ
+       return QM ??= async function() {
+         await (0, SM.d)(nM, {}, !1);
+         for (let MM = 0; MM < 50 && !window.$msstart; MM++) await (0, aM.Q)(100)
+       }(), QM
+     }
+     class LM {
+       constructor() {}
+       static async setup() {
+         if (null !== (0, PM.b)()) return new LM;
+         try {
+           await Promise.race([zM(), (0, aM.Q)(1e4).then((() => {
+             throw new Error("Not loaded after 10000ms")
+           }))])
+         } catch (MM) {
+           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", MM), null
+         }
+ ... (170 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/161.js` (Changed code · before: `L106-L211` → after: `L207-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-210777e24baad692c2d170634e8810ef75f2b273824542ca1f1fd0f09bc374a4) · [After (L207-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/161.js#L207-L210) · [Before (L106-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/161.js#L106-L211)

```diff
-       const XQ = {
-         content: QQ,
-         menu: WQ
-       };
-       return FQ = XQ, qQ.k.mB(sQ, FQ, !0), () => {
-         FQ === XQ && (FQ = null, jQ = !1, yQ(), qQ.k.mB(sQ, null))
-       }
-     }
-     let JQ = null;
- 
-     function rQ() {
-       return JQ
-     }
- 
-     function IQ(QQ) {
-       return JQ = QQ, () => {
- ... (90 more removed lines; see GitHub link above)
+       const iM = dM(MM),
+         OM = dM(rM);
+       return !(iM.x2 <= OM.x1 || OM.x2 <= iM.x1 || iM.y2 <= OM.y1 || OM.y2 <= iM.y1)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/162.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/162.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567)

#### 1. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/162.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/162.js#L4-L7)

```diff
-   39354: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => TQ,
-       g: () => zQ
+   7195: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       GameDistributionSdkAdaptor: () => jM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L9-L33` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/162.js#L8-L12) · [Before (L9-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/162.js#L9-L33)

```diff
-     var wQ = XQ(31);
-     let qQ = !1;
- 
-     function TQ() {
-       return qQ
-     }
- 
-     function zQ(QQ) {
-       qQ !== QQ && (qQ = QQ, wQ.k.mB("replayViewer|videoExportChanged"))
-     }
-   },
-   36674: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => gQ,
-       g: () => sQ,
-       j: () => PQ,
- ... (9 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177);
+     class jM extends OM.d {
+       constructor(MM) {
+         super(), this.setOnEndCb = MM, this.name = "gamedistribution"
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L35-L40` → after: `L14-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L14-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/162.js#L14-L53) · [Before (L35-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/162.js#L35-L40)

```diff
-       push(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const XQ = this.data,
-           wQ = this.next * this.width;
-         for (let qQ = 0; qQ < this.width; qQ++) XQ[wQ + qQ] = QQ[WQ + qQ];
-         this.next = (this.next + 1) % this.yJ, this.size = Math.min(this.size + 1, this.yJ)
+       static async setup() {
+         let MM;
+         let rM;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: iM => {
+             const OM = () => {
+               rM && (window.adCompleteSoResume(), rM = !1), MM && (MM(), MM = null)
+             };
+             switch (iM.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), rM = !1, MM ? (MM(), MM = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L42-L51` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/162.js#L55-L56) · [Before (L42-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/162.js#L42-L51)

```diff
-       rows() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1 / 0;
-         const XQ = [],
-           wQ = (this.next - this.size + this.yJ) % this.yJ;
-         for (let qQ = 0; qQ < this.size; qQ++) {
-           const TQ = (wQ + qQ) % this.yJ * this.width;
-           this.data[TQ + QQ] >= WQ && XQ.push(Array.from(this.data.subarray(TQ, TQ + this.width)))
-         }
-         return XQ
+       playVideoAd(MM, rM) {
+         this.setOnEndCb(MM), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/162.js` (Changed code · before: `L53-L844` → after: `L58-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7938cc1232aa4179c95352e6a0b3feea885f190681e3ccc78360404ecd30d567) · [After (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/162.js#L58-L61) · [Before (L53-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/162.js#L53-L844)

```diff
-       lines() {
-         return this.rows().map((QQ => QQ.join(",")))
-       }
-     }
-     const sQ = 10,
-       FQ = {
-         idle: 0,
-         HI: 1,
-         oR: 2,
-         xR: 3,
-         Py: 4
-       },
-       PQ = {
-         none: 0,
-         skipped: 1,
-         paced: 2,
- ... (776 more removed lines; see GitHub link above)
+       renderBanner(MM) {
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(MM.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, MM.divId), window.gdsdk.showAd … [truncated]
+           containerId: MM.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((MM => console.info(MM)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/163.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/163.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/163.js#L4)

```diff
-   9314: (QQ, WQ, XQ) => {
+   7204: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/163.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/163.js#L6)

```diff
-       pageBody: () => wQ
+       CoolMathGamesSdkAdaptor: () => jM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/163.js` (Changed code · before: `L8-L41` → after: `L8-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc12f82c0607e663a7837b47dc78348986ace22c10dbc24af56bcc91d4a1aec3) · [After (L8-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/163.js#L8-L53) · [Before (L8-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/163.js#L8-L41)

```diff
-     const wQ = {
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
- ... (18 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177);
+     class jM extends OM.d {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
+       }
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const MM = document.getElementsByClassName("ads-popup");
+         for (const rM of MM) rM instanceof HTMLElement && (rM.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+ ... (30 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/164.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/164.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/164.js#L4)

```diff
-   9316: (QQ, WQ, XQ) => {
+   7206: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/164.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/164.js#L6)

```diff
-       pageBody: () => wQ
+       AdMobSdkAdaptor: () => zM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/164.js` (Changed code · before: `L9-L32` → after: `L15-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f022c5047455f55b9c58ed71ab576e65277d380a906689fbf6fe05e817f53bfd) · [After (L15-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/164.js#L15-L118) · [Before (L9-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/164.js#L9-L32)

```diff
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
-         question: "What are Clovers in Lucky Bedwars?",
- ... (8 more removed lines; see GitHub link above)
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+         rewarded: "ca-app-pub-5991928098122027/5726886857",
+         interstitial: "ca-app-pub-5991928098122027/1979213537"
+       },
+       mobileIos: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/4652945503",
+           leaderboard_4: "ca-app-pub-5991928098122027/2921518285",
+ ... (88 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/165.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/165.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/165.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/165.js#L4)

```diff
-   9320: (QQ, WQ, XQ) => {
+   7221: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => QM
+     });
+     var OM = iM(3241);
+     const SM = [1, 8, 9],
+       jM = 5,
+       aM = 200,
+       PM = 150;
+ 
+     function nM(MM, rM) {
+       let iM = 0;
+       MM("addEventListener", 2, ((MM, aM) => {
+         if (!aM) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const PM = function(MM) {
+           const rM = "useractioncomplete" === MM.eventStatus || "tcloaded" === MM.eventStatus && !!MM.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/165.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/165.js#L6)

```diff
-       pageBody: () => wQ
+       AdinPlaySdkAdaptor: () => QM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/165.js` (Changed code · before: `L8-L38` → after: `L48-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fdR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-836a0f711f20b171f093e37ba4c9f8c0cd7ebb93591f218b94ee30d1e6b302fd) · [After (L48-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/165.js#L48-L110) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/165.js#L8-L38)

```diff
-     const wQ = {
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
- ... (15 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177),
+       jM = iM(212),
+       aM = iM(7221),
+       PM = iM(3241);
+     const nM = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class QM extends OM.d {
+       constructor() {
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = nM
+       }
+       static async setup() {
+         return (0, jM.canonicaliseZonesWhenIdle)(nM), (0, PM.setUpGtag)(), await (0, SM.d)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), (0, aM.e)("inMobi"), new QM
+       }
+       playRewarded(MM, rM) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+ ... (47 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/166.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/166.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172)

#### 1. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L4-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/166.js#L4-L44) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/166.js#L4)

```diff
-   9323: (QQ, WQ, XQ) => {
+   7221: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => QM
+     });
+     var OM = iM(3241);
+     const SM = [1, 8, 9],
+       jM = 5,
+       aM = 200,
+       PM = 150;
+ 
+     function nM(MM, rM) {
+       let iM = 0;
+       MM("addEventListener", 2, ((MM, aM) => {
+         if (!aM) return void console.warn("TCF CMP couldn't report a consent event, so our consent defaults stand");
+         const PM = function(MM) {
+           const rM = "useractioncomplete" === MM.eventStatus || "tcloaded" === MM.eventStatus && !!MM.tcString;
+ ... (25 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L6` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/166.js#L46) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/166.js#L6)

```diff
-       pageBody: () => wQ
+       NitroSdkAdaptor: () => nM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/166.js` (Changed code · before: `L8-L35` → after: `L48-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-dc730a876dc5ee200a84327df38d80d76d357c5418098e68894da4485e3c1172) · [After (L48-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/166.js#L48-L183) · [Before (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/166.js#L8-L35)

```diff
-     const wQ = {
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
- ... (12 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177),
+       jM = iM(7221),
+       aM = iM(3241);
+     const PM = "NitroOutstreamVideo";
+     class nM extends OM.d {
+       constructor() {
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+       }
+       static async setup() {
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
+             return new Promise((MM => {
+               window.nitroAds.queue.push(["createAd", rM, MM])
+             }))
+ ... (120 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/167.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/167.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73)

#### 1. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/167.js#L4)

```diff
-   9329: (QQ, WQ, XQ) => {
+   7228: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/167.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/167.js#L6)

```diff
-       pageBody: () => wQ
+       AdsenseForGamesSdkAdaptor: () => jM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/167.js` (Changed code · before: `L8-L35` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-1073b11dec7bedbb9dea86e6c35023a0c4fbb5ccf3b8c5a817d90ab127f5cf73) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/167.js#L8-L50) · [Before (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/167.js#L8-L35)

```diff
-     const wQ = {
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
- ... (12 more removed lines; see GitHub link above)
+     var OM = iM(1367),
+       SM = iM(1177);
+     class jM extends OM.d {
+       constructor() {
+         super(), this.name = "adsense"
+       }
+       static async setup() {
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(MM) {
+           window.adsbygoogle.push(MM)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, SM.d)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+ ... (27 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/168.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/168.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/168.js#L4)

```diff
-   9333: (QQ, WQ, XQ) => {
+   7230: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/168.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/168.js#L6)

```diff
-       pageBody: () => wQ
+       AditudeSdkAdaptor: () => aM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/168.js` (Changed code · before: `L9-L38` → after: `L11-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4b661af9a55da8c3a106f1674fb13be15a84deb885aed18264aa63dc799fbac8) · [After (L11-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/168.js#L11-L79) · [Before (L9-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/168.js#L9-L38)

```diff
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
-         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
-       }, {
-         question: "Is stealing and griefing allowed in Bloxd Survival?",
- ... (14 more removed lines; see GitHub link above)
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class aM extends OM.d {
+       constructor() {
+         super(), this.name = "aditude"
+       }
+       static async setup() {
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, SM.d)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new aM
+       }
+       playVideoAd(MM, rM) {
+         this.playVideoOrRewarded("video", MM, MM)
+       }
+       playRewarded(MM, rM) {
+ ... (53 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/169.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/169.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/169.js` (Changed code · before: `L4-L42` → after: `L5-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cd60e0812e51002368e70d1e334a3c6d3bc3aa1759d3610f9d7eb7fbf590c1b6) · [After (L5-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/169.js#L5-L2614) · [Before (L4-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/169.js#L4-L42)

```diff
-   9338: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       pageBody: () => wQ
-     });
-     const wQ = {
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
- ... (23 more removed lines; see GitHub link above)
+   7259: (MM, rM, iM) => {
+     var OM = iM(7263);
+     rM.e = {
+       prefix: OM.prefix,
+       iconName: OM.iconName,
+       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
+     }, rM.i = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+   },
+   7265: (MM, rM, iM) => {
+     var OM = iM(7273);
+     rM.d = {
+       prefix: OM.prefix,
+       iconName: OM.iconName,
+       icon: [OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData]
+     }, rM.f = rM.d, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+   },
+ ... (2594 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/170.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/170.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L4-L6` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/170.js#L4-L17) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/170.js#L4-L6)

```diff
-   9343: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       pageBody: () => wQ
+   8703: (MM, rM) => {
+     var iM = "youtube",
+       OM = [61802],
+       SM = "f167",
+       jM = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     rM.b = {
+       prefix: "fab",
+       iconName: iM,
+       icon: [576, 512, OM, SM, jM]
+     }, rM.c = rM.b
+   },
+   7398: (MM, rM) => {
+     Object.defineProperty(rM, "__esModule", {
+       value: !0
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L9-L16` → after: `L169-L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L169-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/170.js#L169-L703) · [Before (L9-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/170.js#L9-L16)

```diff
-       whatIs: ["When the sun goes down, the monsters come out. Bloxd Day & Night Survival is a survival mode built around the clock. You mine, craft and build while it's light, then protect your base once it gets dark. Light up your world with torches and see if you can make it t … [truncated]
-       howToPlay: ["Use the daylight to gather resources, craft tools and build somewhere safe. Time goes from dawn to day, then dusk to night. The game announces the time, and there's a progress bar showing how far through the cycle you are. Once dusk hits, get ready. At night it … [truncated]
-       features: ["Dawn, Day, Dusk and Night Cycle with Time Announcements", "Hostile Mobs That Spawn on the Surface at Night", "Torches to Keep Monsters Away from Your Base", "Free Torches When You First Join", "Sleep in a Bed to Skip the Night", "Days Survived and Days Played Le … [truncated]
-       tips: ["Get torches up around your base before dusk", "Use the free torches you start with straight away", "Keep an eye on the progress bar so the night doesn't sneak up on you", "Not ready to fight? Stay inside at night", "Wait for sunrise, because monsters left out in the … [truncated]
-       similarGames: ["classic_survival", "classic", "classic_survivalGuns", "skyblock"],
-       faq: [{
-         question: "What is Bloxd Day and Night Survival?",
-         answer: "A survival mode on Bloxd.io with a day-night cycle. You build and explore during the day, then use torches to protect your base from the monsters that come out at night."
+       youtube: hM.c,
+       "person-military-pointing": JM.f,
+       sparkle: dM.e,
+       user: yM.f,
+       wrench: lM.f,
+       zap: EM.f
+     };
+ 
+     function GM(MM) {
+       const [rM, iM, , , OM] = MM.icon;
+       return {
+         width: rM,
+         height: iM,
+         path: "string" === typeof OM ? OM : OM.join(" ")
+       }
+     }
+ ... (519 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L18-L19` → after: `L705-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/170.js#L705-L706) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/170.js#L18-L19)

```diff
-         question: "How do I stop monsters spawning near my base in Bloxd?",
-         answer: "Torches. Hostile mobs won't spawn near light, so light up your base and the area around it before night falls."
+         healthFraction: .5,
+         colour: "#ffaa00"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/170.js` (Changed code · before: `L21-L32` → after: `L708-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1dR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a08e0fdb4e40d8bae94a71e379de4c3302860e7a9e001f7401126215146b0b1d) · [After (L708-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/170.js#L708-L1106) · [Before (L21-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/170.js#L21-L32)

```diff
-         question: "How do I skip the night in Day & Night Survival?",
-         answer: "Sleep in a bed. By default the night gets skipped once more than half the players are asleep. Private-server owners can change that or turn sleeping off."
-       }, {
-         question: "What happens to monsters when the sun comes up?",
-         answer: "Hostile mobs standing in direct sunlight start to burn. Mobs in caves or under cover are safe, so stay alert if you're underground."
-       }, {
-         question: "How are Days Survived counted?",
-         answer: "One day is a full cycle of day, dusk, night and dawn. Days Survived is how many days in a row you've stayed alive, and it resets when you die. Days Played keeps going no matter what. You'll see both on the lobby leaderboard."
-       }, {
-         question: "Can I change the day and night settings on my own server?",
-         answer: "Yes. On your free private server you can pause the cycle, set the time, pick how many players need to sleep and turn the leaderboard on or off, plus a few other options."
-       }]
+         healthFraction: 1,
+         colour: "#00ff00"
+       }],
+       kM = 64,
+       ZM = 69,
+       oM = {
+         icon: RM.e,
+         mainRGB: "transparent",
+         chatTag: [],
+         nameTag: {
+           iconRGB: "#f38ab6",
+           iconShadowRGB: "black"
+         },
+         visible: !0
+       };
+ 
+ ... (383 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/171.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/171.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/171.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/171.js#L4-L6)

```diff
-   9346: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       pageBody: () => wQ
+   9463: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => PM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L9-L31` → after: `L60-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L60-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/171.js#L60-L1049) · [Before (L9-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/171.js#L9-L31)

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
- ... (7 more removed lines; see GitHub link above)
+       floating: "settingsMenu:joystickFloating",
+       fixed_shown: "settingsMenu:joystickFixed",
+       fixed_hidden: "settingsMenu:joystickHidden"
+     };
+     var eM = iM(9467);
+     var bM = iM(1548),
+       wM = iM(1429),
+       tM = iM(9472),
+       gM = iM(1474),
+       uM = iM(1398),
+       RM = iM(9479),
+       pM = iM(2666);
+ 
+     function WM(MM) {
+       let {
+         className: rM,
+ ... (974 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/171.js` (Changed code · before: `L33-L35` → after: `L1051-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651dR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-279652f531c0ebaacecfa614bec53045bffda549be58fab17aa4d84b5ac4651d) · [After (L1051-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/171.js#L1051-L1076) · [Before (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/171.js#L33-L35)

```diff
-         question: "How is Survival with Guns different from regular Survival?",
-         answer: "The world, mining and building all work the same. On top of that you can craft 17 guns and vehicles, mobs carry guns, and tamed pets fight alongside you with guns of their own."
-       }]
+         vars: nM,
+         safe: nM,
+         classes: nM
+       }), nM.style.setProperty("--preview-joystick-shift-left", `${zM[3]}px`), nM.style.setProperty("--preview-joystick-shift-bottom", `${zM[2]}px`), nM.style.setProperty("--preview-joystick-scale", String(jM[2])), (0, lr.c)(nM, rM, iM, OM);
+       for (const LM of gr) nM.style.setProperty(LM, MM.documentElement.style.getPropertyValue(LM) || "0px")
+     }
+ 
+     function Rr() {
+       return (0, qM.O)(zM.d.get("notchSize"), window.innerWidth, window.innerHeight)
+     }
+ 
+     function pr(MM) {
+       return (0, qM.v)(Rr(), (0, qM.T)(MM))
+     }
+ 
+     function Wr(MM, rM, iM) {
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/172.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/172.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049)

#### 1. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/172.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/172.js#L4-L6)

```diff
-   9352: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       pageBody: () => wQ
+   37538: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => HM,
+       i: () => hM,
+       m: () => mM,
+       p: () => LM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/172.js` (Changed code · before: `L9-L36` → after: `L376-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cab169614f12dbf316686a893d4d5fc28169fca73bfab5b0f126b303767e8049) · [After (L376-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/172.js#L376-L758) · [Before (L9-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/172.js#L9-L36)

```diff
-       whatIs: ["Infinite blocks, custom tools and no limits on what you build. Bloxd Creative is the free building mode where you can get creating straight away. Build in a shared world with players from all over, or set up your own free build server and create with your friends  … [truncated]
-       howToPlay: ["Open the creative menu and grab any block or item you want. It's all sorted into categories like Building Blocks, Coloured Blocks, Nature, Decoration, Utility, Tools and Vehicles, and World Tools. Place as many as you like, fly around your build and make anythi … [truncated]
-       features: ["Infinite Blocks and Items from the Creative Menu", "Fly Freely Around Your Builds", "Superflat Worlds for Big Builds", "Teleport To Fresh Land for Uninterrupted Building", "Free Private Build Servers to Create with Friends", "Extra Tools for Server Owners, Inclu … [truncated]
-       tips: ["Teleport To Fresh Land is the quickest way to find some empty space", "In public lobbies, build away from spawn, because blocks near spawn reset every few hours", "Put down a Protector so other players can't change your build or open your chests", "Use /tp to get ar … [truncated]
-       similarGames: ["classic", "classic_survival", "plots", "skyblock", "oneBlock"],
-       faq: [{
-         question: "What is Bloxd Creative?",
-         answer: "Bloxd Creative is the creative building mode in Bloxd.io. You get infinite blocks and custom tools to build whatever you like, on your own or with friends."
-       }, {
-         question: "Can you fly in Bloxd Creative?",
-         answer: "Yes, you can fly in Creative, so you can reach every bit of your build."
-       }, {
-         question: "What is Superflat in Bloxd?",
-         answer: "A Creative world made of endless flat grass. It gives you a clean canvas for your biggest projects."
-       }, {
-         question: "How do I make a free build server in Bloxd?",
- ... (12 more removed lines; see GitHub link above)
+       ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
+       auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
+       bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
+       carrot: JM,
+       castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
+       cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
+       combat_1: dM,
+       cow: PM,
+       craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
+       dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
+       emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
+       enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
+       farm: iM(26682),
+       farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
+       fishing: OM,
+       fishing_1: OM,
+ ... (367 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/173.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/173.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L4` → after: `L4-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L4-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/173.js#L4-L174) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/173.js#L4)

```diff
-   9360: (QQ, WQ, XQ) => {
+   37544: (MM, rM, iM) => {
+     iM.d(rM, {
+       B: () => lM,
+       b: () => jM,
+       f: () => JM,
+       i: () => dM,
+       j: () => PM,
+       m: () => mM,
+       q: () => yM,
+       u: () => LM,
+       x: () => EM,
+       y: () => hM
+     });
+     var OM = iM(19),
+       SM = iM(22);
+     const jM = "clientGameInventoryButtonsChanged",
+ ... (155 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/173.js` (Changed code · before: `L6-L33` → after: `L176-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fdR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-ed81d72c21428901ad62e20a981ce6ee72fd8729c2c3638c2f0ddace003b62fd) · [After (L176-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/173.js#L176-L211) · [Before (L6-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/173.js#L6-L33)

```diff
-       pageBody: () => wQ
-     });
-     const wQ = {
-       whatIs: ["Your own little slice of the world to shape, share and show off. Bloxd Plots gives every player their own plot in a shared creative world. Each plot starts out completely blank, so you can build whatever you like with whoever you like. It's different from the open … [truncated]
-       howToPlay: ["Join Plots and claim a plot. Each one is a 91\xd791 block build area, with 5-block-wide roads between the plots. There's no height limit, so build as tall as you dare. You're in creative mode, which means no health to worry about and nothing stopping you from b … [truncated]
-       features: ["Your Own 91\xd791 Plot to Build On", "Own Up to 5 Plots", "No Height Limit", "Add Friends to Build Together", "Teleport to Any Plot with Coordinates", "Plots Saved Forever Once You've Built Enough", "Spawn Mobs on Your Own Plot"],
-       tips: ["Get to 500 changed blocks quickly, because unsaved plots can be reset", "Add Player to Plot lets a friend build with you", "If you don't want someone editing anymore, use Remove Player from Plot", "Starting something new? Get New Plot gives you a fresh one without l … [truncated]
-       similarGames: ["classic_creative", "greenville", "classic", "parkourPlace"],
-       faq: [{
-         question: "What is Bloxd Plots?",
-         answer: "A building mode where you get your own 91\xd791 plot and can build anything you like in creative mode."
-       }, {
-         question: "How do I save my plot in Bloxd Plots?",
-         answer: "Change at least 500 blocks on it. From then on your plot is saved permanently. Plots that haven't been saved yet can be reset."
-       }, {
-         question: "How do I build with friends in Bloxd Plots?",
- ... (12 more removed lines; see GitHub link above)
+       getClientGameMapKey: () => OM.p,
+       shopIsEmpty: () => SM.d
+     });
+     var OM = iM(37542),
+       SM = iM(9366)
+   },
+   9374: (MM, rM, iM) => {
+     function OM(MM, rM) {
+       return !MM.hidden && (rM || !MM.isRewardedAd)
+     }
+ 
+     function SM(MM) {
+       return "object" === typeof MM ? MM.option : MM
+     }
+ 
+     function jM(MM, rM) {
+ ... (20 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/174.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/174.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390)

#### 1. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L4` → after: `L4-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L4-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/174.js#L4-L199) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/174.js#L4)

```diff
-   9369: (QQ, WQ, XQ) => {
+   40118: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM,
+       h: () => aM
+     });
+     var OM = iM(22);
+     let SM = !1;
+ 
+     function jM() {
+       return SM
+     }
+ 
+     function aM(MM) {
+       SM !== MM && (SM = MM, OM.i.Tz("replayViewer|videoExportChanged"))
+     }
+   },
+ ... (180 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L6-L7` → after: `L201-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L201-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/174.js#L201-L556) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/174.js#L6-L7)

```diff
-       pageBody: () => wQ
-     });
+       LOOK_DEBUG_HEADER: () => zM,
+       endLookDebugTake: () => yM,
+       noteLookDroppedCopy: () => lM,
+       saveLookCapture: () => EM,
+       startLookDebug: () => dM
+     });
+     var OM = iM(5200),
+       SM = iM(3122),
+       jM = iM(2e3);
+     const aM = new Map(Object.entries(OM.l).map((MM => {
+       let [rM, iM] = MM;
+       return [iM, rM]
+     })));
+ 
+     function PM(MM) {
+       return (0, jM.J)(MM).toFixed(1)
+ ... (340 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/174.js` (Changed code · before: `L9-L38` → after: `L558-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6689781670312cc3a5d8a20fb102e3d1a2816ab4feb39103bf26487839077390) · [After (L558-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/174.js#L558-L845) · [Before (L9-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/174.js#L9-L38)

```diff
-       whatIs: ["It all starts on one tiny island floating high in the sky. In Bloxd Skyblock, that little island becomes a full RPG. You'll level up skills, take on quests, beat dungeon bosses and trade at the auction house, and bit by bit your island turns into something special … [truncated]
-       howToPlay: ["Your first quest is an easy one. Gather logs on your island, craft a bridge and cross to the portal to get to the Hub. That's where everyone hangs out. Up Dog the auctioneer runs the Open Market, so you can buy and sell items with other players there. The Banke … [truncated]
-       features: ["Your Own Private Sky Island to Grow and Decorate", "5 Skills to Level Up: Foraging, Combat, Mining, Farming and Fishing", "Quests That Give You an Axe, Sword, Pickaxe, Hoe and Fishing Rod", "Explore the Hub, Manor Farm, Cragrock Mines and the Dungeons", "Timed D … [truncated]
-       tips: ["Do the skill starter quests early. The tools they give you make everything faster", "Level up Combat before you go into the Dungeons, since every level adds extra damage", "Start each dungeon on Easy and work your way up to Insane", "You can only trade in the Hub, s … [truncated]
-       similarGames: ["classic_survival", "oneBlock", "skyIslands", "survivalFactory"],
-       faq: [{
-         question: "What is Bloxd Skyblock?",
-         answer: "It's a Skyblock RPG. You grow your own private sky island, level up skills, do quests, trade at the auction house and fight dungeon bosses."
-       }, {
-         question: "How do you play Bloxd Skyblock?",
-         answer: "Gather some logs, craft a bridge and cross to the portal to reach the Hub. After that, follow the quests, level your skills and go exploring in Manor Farm, Cragrock Mines and the Dungeons."
-       }, {
-         question: "What skills are in Bloxd Skyblock?",
-         answer: "Five of them: Foraging, Combat, Mining, Farming and Fishing. You level each one just by doing it, so breaking ores levels Mining and catching fish levels Fishing."
-       }, {
-         question: "What are the Dungeons in Bloxd Skyblock?",
- ... (14 more removed lines; see GitHub link above)
+         seat: "seat_timeout",
+         socket_unopened: "socket_timeout_unopened",
+         socket: "socket_timeout"
+       },
+       PM = {
+         seat: "seat_lost",
+         socket_unopened: "socket_unopened",
+         socket: "socket_closed"
+       };
+ 
+     function nM(MM, rM) {
+       if (MM instanceof SM.i) return {
+         at: aM[rM],
+         code: 0
+       };
+       const iM = (0, OM.f)(MM),
+ ... (272 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/175.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/175.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L4)

```diff
-   9378: (QQ, WQ, XQ) => {
+   9533: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L9-L13)

```diff
-       whatIs: ["One block, floating in the sky, with a nametag that says \"I'm your One Block, break me!\" That's how every Bloxd One Block island starts. Break it and it comes straight back as something new, so you keep getting blocks, items and chests. Survive up there, unlock  … [truncated]
-       howToPlay: ["Break your One Block. Then break it again. And again. The more blocks you mine, the more phases you unlock, from the Forest and Plains right up to the Volcano and the Moon. Each phase changes what your block turns into, so there's always something new popping u … [truncated]
-       features: ["17 Phases to Unlock, from Forest to the Moon", "Super Mining, Super Digging and Mega Chop Skills", "One Village Hub with Shops, a Bank and Treasure Chests", "Daily and Weekly Quests", "Painter's, Monster Hunter's and Farmer's Guilds", "Chat Events like Trivia, U … [truncated]
-       tips: ["Open every chest you find. That's where your Gold Coins come from.", "Put your coins in the bank, where your balance stays safe forever.", "Save 1,000, 50,000 or 1,000,000 coins in the bank to unlock gold portal skins.", "Level up your skills, then right click to us … [truncated]
-       similarGames: ["skyblock", "skyIslands", "classic_survival"],
+       whatIs: ["Protect your bed, destroy theirs. That's the whole idea of Bedwars, the team PvP strategy mode that's free to play online. Every team starts on its own floating island with a bed to protect. Collect resources, buy gear and team upgrades, then bridge across to the  … [truncated]
+       howToPlay: ["Play Bedwars Solos, Duos, Trios, 4v4, 4v4v4v4 or 1v1. Generators on your island drop Coal, Iron Bars and Diamond. Spend them at the Item Shop on blocks, weapons, armour and tools, or at the Upgrades shopkeeper on team upgrades like Protection, Damage, Feather F … [truncated]
+       features: ["Solos, Duos, Trios, 4v4v4v4 and 4v4", "Ranked Bedwars Lobby", "Team Upgrades: Protection, Damage, Feather Falling, Health Regeneration and Alarm", "Match Modifiers like Lucky Chaos, Weapon Roulette, Treasure Guardians and Specialists", "Dozens of Maps", "Leaderb … [truncated]
+       tips: ["Rush other teams' beds before they can upgrade their defences", "Split up attack and defence with your team", "Upgrade your gear in the shop before leaving your island", "Bridging backwards is faster than ez bridging", "Fight for the centre generators, because Diamo … [truncated]
+       similarGames: ["luckyBedwars", "skywars", "luckyTowers"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L15-L16)

```diff
-         question: "What is Bloxd One Block?",
-         answer: "A sky challenge where you start on a single floating block. Break it to get new blocks, items and chests, unlock phases and grow your island into an empire."
+         question: "What is Bedwars?",
+         answer: "Bedwars is a team PvP strategy game where you protect your bed and destroy everyone else's. Bloxd's version adds team upgrades, match modifiers and a Ranked lobby."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L18-L19)

```diff
-         question: "Is Bloxd One Block a skyblock game?",
-         answer: "Sort of. You start with one block in the sky and build everything from there. Bloxd Skyblock is a different mode, though: that one's an RPG with skills, quests and dungeons, while One Block is all about breaking your block to unlock 17 phases."
+         question: "How do you win Bedwars?",
+         answer: "Be the last team standing. Destroy the other teams' beds so they can't respawn, then eliminate them before the arena shrinks."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L21-L22)

```diff
-         question: "How many phases are in Bloxd One Block?",
-         answer: "17, from Forest and Plains through Ocean, Desert and Dungeon to the Volcano and the Moon. Mine enough blocks to unlock each one. When you've got them all, you can change phase."
+         question: "What happens after your bed is destroyed?",
+         answer: "You can't respawn. If you die after your bed is gone, you become a spectator."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L24-L25)

```diff
-         question: "How do I get to the Hub in One Block?",
-         answer: "Grab 3 Gold Coins from chests, bridge over to the portal island nearby and walk into your portal. Type /home to come back."
+         question: "What do the Bedwars generators do?",
+         answer: "Your island's generators drop Coal, Iron Bars and Diamond for items and upgrades. The generators in the centre drop Diamond and Moonstone for the most powerful items."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L27-L28)

```diff
-         question: "Where do One Block coins come from?",
-         answer: "Chests from your One Block and the Hub treasure chests, daily and weekly quests, or watching an ad for coins."
+         question: "What modes can I play in Bloxd Bedwars?",
+         answer: "Solos, Duos, Trios, 4v4, 4v4v4v4 and 1v1. There's also a Ranked Bedwars lobby if you want to climb the leaderboards."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L30-L31)

```diff
-         question: "How do I open my portal in One Block?",
-         answer: "Type /open in chat. You can also add visitors in your island access settings, even if your portal is closed."
+         question: "What are match modifiers?",
+         answer: "Some matches add a twist. In Supercharged, every generator starts at Level 2. In Boom, explosives are half price. Weapon Roulette gives you a new random weapon every respawn, and in Specialists you pick a role with special perks."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/175.js` (Changed code · before: `L33-L34` → after: `L33-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ffR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-8ac8c31fe9258b26b3ff4cf1a2aea2b8125a5b865e03ab55177f8be13842f6ff) · [After (L33-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/175.js#L33-L40) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/175.js#L33-L34)

```diff
-         question: "Can I have more than one island?",
-         answer: "Yes. The Island Manager lets you create new islands, rename them, load another save or delete one, up to a maximum number of islands."
+         question: "Can I attack my teammates?",
+         answer: "No, you can't attack players on your own team."
+       }, {
+         question: "How many Bedwars maps are there?",
+         answer: "Dozens, including Scary Hollow, Wood Factory, Ahoy!, Colosseum and Rooftops."
+       }, {
+         question: "What's the difference between Bedwars and Lucky Bedwars?",
+         answer: "In Bedwars you collect Coal, Iron Bars, Diamond and Moonstone from generators and choose what to buy. Lucky Bedwars hands out gear through Lucky Blocks instead, so no two matches play out the same."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/176.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/176.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L4)

```diff
-   9381: (QQ, WQ, XQ) => {
+   9540: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L9-L13)

```diff
-       whatIs: ["Claim an island, grab the loot and fight for every diamond you can get. Bloxd Sky Islands is a scored PvP match across floating islands, where you explore, mine resources and battle for diamonds and glory. Each phase brings better loot, and whoever has the highest … [truncated]
-       howToPlay: ["Place your Protector on an island to claim it. Other players can't change blocks or open chests there, and you'll always respawn on it. You only get one island at a time, but you can release it and claim another later. Then off you go to explore, mine and grab  … [truncated]
-       features: ["Solo, Teams, Blitz and PvE Modes", "Claim Your Own Island with a Protector", "4 Phases: Gather, Arms Race, Escalation and Chaos", "Bows, Explosives, Guns, Rockets and Diamond Gear", "Loot Drops, Diamond Surges and Diamond Bounties", "Quests, Perks and Buried Tre … [truncated]
-       tips: ["Claim an island early so you've got a safe base to respawn on", "Grab tools and resources during Gather, before the big fights kick off", "Hang on to your diamonds. They count towards your score", "Watch the loot timer and get to new drops first", "Don't camp on the … [truncated]
-       similarGames: ["skywars", "bedwars", "skyblock", "oneBlock"],
+       whatIs: ["What if every sword, block and piece of armour came from a Lucky Block? Lucky Bedwars is the Bedwars mode where they do. Four teams of up to four players each get their own base and a bed to protect. Open Lucky Blocks for random weapons, armour, blocks and wild su … [truncated]
+       howToPlay: ["Before the match, your lobby votes on a map. You start with four Lucky Blocks. The first Basic Building and Basic Weapon blocks you open give you team wool and a weapon, so you're ready to go. Generators at your base and in the centre of the map keep the loot c … [truncated]
+       features: ["4 Teams of up to 4 Players", "Building, Weapon, Armour and Food Lucky Blocks in Basic, Rare and Super Rarities", "Evil Lucky Blocks with Nasty Surprises", "Wild Items: Lucky Bombs, Swap Orbs, Fireballs, Iceballs, Toxin Balls and Void Nets", "Random Events: Blood … [truncated]
+       tips: ["Open your four starting Lucky Blocks straight away to get wool and a weapon", "Chip in for the Bed Trap early. Evil Lucky Blocks around your bed can seal raiders in obsidian, poison them or send them home", "Save any Obsidian from Super Building blocks for your bed, … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skywars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L15-L16)

```diff
-         question: "What is Bloxd Sky Islands?",
-         answer: "A round-based PvP mode. You claim a floating island, gear up through four phases and battle other players for the top score."
+         question: "What is Bloxd Lucky Bedwars?",
+         answer: "It's Bedwars with a twist: all your gear comes from Lucky Blocks. Four teams of up to four players defend their beds and try to be the last team standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L18-L19)

```diff
-         question: "How is the winner decided in Bloxd Sky Islands?",
-         answer: "Whoever has the highest score when time runs out. Score is your kills plus the diamonds you're holding, and in Teams the highest-scoring team takes it."
+         question: "How do you play Lucky Bedwars?",
+         answer: "Open Lucky Blocks for weapons, armour and blocks, protect your bed and break the other teams' beds. You respawn while your bed stands. Without it, one death makes you a spectator."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L21-L22)

```diff
-         question: "How do I claim an island in Sky Islands?",
-         answer: "Put your Protector down on an island. Nobody else can change its blocks or open its chests, and you'll always respawn there."
+         question: "How is Lucky Bedwars different from normal Bedwars?",
+         answer: "Your loot comes from Lucky Blocks, so every match is random. You earn Clovers to buy more Lucky Blocks and team upgrades, and random events change up each game."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L24-L25)

```diff
-         question: "Which modes does Sky Islands have?",
-         answer: "Solo, Teams, Blitz (a faster match) and PvE. In PvE your score comes from mob kills instead of player kills, so you claim an island and go after mobs."
+         question: "What are Clovers in Lucky Bedwars?",
+         answer: "Clovers are the in-game currency. Earn them by opening Lucky Blocks, getting kills, breaking beds, recycling loot and surviving events. Spend them at the Lucky Trader or on team upgrades."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L27-L28)

```diff
-         question: "Where do you find diamonds in Sky Islands?",
-         answer: "Mine them, grab them from loot drops and Diamond Surges, or win fights for them. Players drop some of their diamonds when they're knocked out."
+         question: "What's inside Evil Lucky Blocks?",
+         answer: "Bad luck! The Bed Trap upgrade puts Evil Lucky Blocks around your bed. Anyone who opens one could get trapped in obsidian, dropped in lava, webbed, poisoned, blinded, chased by guard dogs or sent home."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/176.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-eb3e558f2e45a42746cf459c6b72c288884cf719bc13499a0d8c2679d5cd3a0b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/176.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/176.js#L30-L31)

```diff
-         question: "What is a diamond bounty?",
-         answer: "If you're one of the top three scorers and you stay on the diamond island too long, you get a bounty and hunters can see you. Move to another island to get rid of it."
+         question: "What are the Lucky Bedwars events?",
+         answer: "Twice a match a random event starts: Blood Moon, Lucky Crown, Masquerade, Simon Says, Lucky Storm or Tiny Titans. You get a 30-second warning, and beds can't be broken while an event runs."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/177.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/177.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L4)

```diff
-   9388: (QQ, WQ, XQ) => {
+   9548: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L9-L13)

```diff
-       whatIs: ["The world is ending, and the only way out is up. Bloxd Build a Factory is the original factory mode on Bloxd. You automate a factory, build a rocket and launch it to escape before time runs out. It's a race against everyone else in your world, the fastest launches … [truncated]
-       howToPlay: ["Place your first Chest (or bed) and you'll get an Auto Miner and, in public lobbies, a Protector. Craft some Pipes and hook the Auto Miner up to the Chest. Open the Auto Miner, put some Coal in to fuel it, and now it mines for you.", "Next up, craft an Extracto … [truncated]
-       features: ["Factory Automation with a Rocket Race at the End", "Auto Miners, Auto Crafters and Auto Harvesters", "Pipes, Extractor, Splitter, Filter and Merger Pipes", "Solar Panels and Wire for Power", "Leaderboard for Best Launch Time and Rocket Stage", "Fresh World Every … [truncated]
-       tips: ["Follow the tutorial and you'll have your first Auto Miner running in no time", "Keep your Auto Miners topped up with Coal so they never stop", "Use Extractor Pipes to feed Chests into your Auto Crafters", "Filter and Splitter Pipes sort items into the right machines … [truncated]
-       similarGames: ["buildAFactory2", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["In Bloxd Skywars, everyone starts on their own island in the sky. Only one player is still there at the end. Loot your chests for weapons, armour and blocks, bridge over to your rivals and knock them into the void. It's free-for-all PvP for up to 12 players, and t … [truncated]
+       howToPlay: ["Each match starts with you in a glass cage on your own island. The cage opens after about 3 seconds, and you can't use items while you're stuck inside. Once you're out, loot your island's chests quickly, because your gear is split between them. Then build a bri … [truncated]
+       features: ["Free-for-All Matches for Up to 12 Players", "Around 30 Kits, from Archer and Builder to Ghost, Sniper, Catapult and Salmon", "Killstreak Perks You Can Buy and Upgrade, like Bridger, Leech and Inferno", "Chests That Refill Every 2.5 Minutes", "A Compass That Trac … [truncated]
+       tips: ["Open every chest on your island before you leave, since your gear is spread across them", "Take your time bridging. One wrong step and you're in the void", "When the chests refill, try to get back to them before your rivals do", "Fight near the edges and use knockba … [truncated]
+       similarGames: ["bedwars", "luckyTowers", "skyIslands"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L15-L16)

```diff
-         question: "What is Bloxd Build a Factory?",
-         answer: "A factory automation race. You automate your factory, build a rocket and try to escape the dying world as fast as you can."
+         question: "What is Bloxd Skywars?",
+         answer: "It's a PvP mode on Bloxd.io where every player starts on a floating island. You loot chests, bridge across to your rivals and try to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L18-L19)

```diff
-         question: "How do you build a rocket in Bloxd Build a Factory?",
-         answer: "Place your Rocket Ship from your inventory, then feed it resources from your factory to upgrade it stage by stage. Once it's finished, launch it to beat the game."
+         question: "How do you win in Skywars?",
+         answer: "Be the last player alive. Knock everyone else out, or push them off their islands into the void. Winning gets you 20 Gold."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L21-L22)

```diff
-         question: "What's the goal in Build a Factory?",
-         answer: "Launch a rocket and escape the dying world. Your final time gets saved, and the quickest launches end up on the leaderboard."
+         question: "Can I play Skywars in my browser?",
+         answer: "Yep. Bloxd.io Skywars runs right in your browser, so you can jump into a match without installing anything."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L24-L25)

```diff
-         question: "How often does the Build a Factory world reset?",
-         answer: "Every 6 hours. After you launch, you can jump into another lobby and play again, or hang around until your world resets."
+         question: "What are the best Skywars kits?",
+         answer: "Honestly, it depends how you like to play. Sniper has a one-shot crossbow and Catapult can knock enemies off the map. Ghost can turn invisible, and Builder starts with extra blocks for bridging. You unlock more kits with Gold and Gems."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L27-L28)

```diff
-         question: "What is the Persistent world in Build a Factory?",
-         answer: "It's a Build a Factory world that never resets. You can build up to 5 Auto Miners, 5 Auto Crafters and 5 Auto Harvesters per chunk, and you launch rockets to climb the leaderboard and reach the Moon."
+         question: "What do perks do in Bloxd Skywars?",
+         answer: "Perks give you bonuses while you play. Maniac gives you more damage after kills, Bridger gives you a chance to get placed blocks back and Leech heals you after kills. You can upgrade them to make them stronger."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L30-L31)

```diff
-         question: "How do you get to the Moon in Build a Factory?",
-         answer: "In the Persistent world, launch a rocket. You'll land on the Moon, where you can mine Lunite. No rocket to get back? Open the shop to return home."
+         question: "How do I get Gold in Skywars?",
+         answer: "Every kill earns Gold, and you get an extra 20 Gold for winning a match."
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L33-L34` → after: `L33-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L33-L34) · [Before (L33-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L33-L34)

```diff
-         question: "What does Lunite do?",
-         answer: "You use it to craft Lunite Auto Miners, Auto Crafters and Auto Harvesters. They run 1.5\xd7 faster, and the Lunite Auto Crafter and Auto Harvester can sometimes give you extra items."
+         question: "How many players fit in one Skywars match?",
+         answer: "Up to 12 players fight it out in each free-for-all match."
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/177.js` (Changed code · before: `L36-L37` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-906249fc997780c68a4afce2e08b6c0f133e24bf01e86c1ecf7e45711ab5d703) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/177.js#L36-L37) · [Before (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/177.js#L36-L37)

```diff
-         question: "What's the difference between Build a Factory and Build a Factory 2?",
-         answer: "Build a Factory is a race to launch a rocket in a shared world that resets. In Build a Factory 2 you get your own floating factory island that you grow at your own pace."
+         question: "What does the compass do in Skywars?",
+         answer: "After 7 minutes, or once only two players are left, everyone still alive gets a compass that points to the nearest player."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/178.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/178.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L4)

```diff
-   9392: (QQ, WQ, XQ) => {
+   9554: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L9-L13)

```diff
-       whatIs: ["Build machines on your own floating island and watch them work! That's Bloxd Build a Factory 2 in one line. You mine ore, link your machines up with conveyor belts and turn a couple of drills into a massive, fully automated factory. Never played a factory game bef … [truncated]
-       howToPlay: ["Use your Workbench to make a Machine Bench. Build a Burner Drill, stick it on an ore Deposit and give it fuel, and it starts mining by itself. Belt the ore into a Crusher to turn it into Grit (that's crushed ore), then into a Smelter to make bars. From there yo … [truncated]
-       features: ["Your Own Floating Factory Island", "Conveyor Belts, Fast Belts, Splitters, Sorting Gates, Belt Lifts and Tunnels", "Drills, Crushers, Smelters, Presses, Wire Mills, Assemblers and More", "Tier Up Your Core to Unlock New Machines, Then Build the Star Spire", "Pow … [truncated]
-       tips: ["Use Deposit Seeds to grow Deposits that never run out", "Crush ore into Grit before you smelt it and you'll get twice the bars", "Teach a Sorting Gate an item and it'll send that item down its own belt", "A Power Coupler makes Crushers, Smelters and Alloy Kilns twic … [truncated]
-       similarGames: ["survivalFactory", "skyblock", "oneBlock", "classic_survival"],
+       whatIs: ["Your gear is completely random, and only one player makes it out of the madness. Bloxd Lucky Towers is a last-player-standing PvP mode where everyone spawns on their own pillar. Rounds are quick, chaotic and pretty unpredictable. There are no Lucky Blocks to open  … [truncated]
+       howToPlay: ["Up to 15 players spawn on pillars spaced out across the map. You start in a glass cage for 3 seconds. After that, everyone gets a random item every 3 seconds. It could be blocks, food, a weapon, armour, a potion or something that explodes. Build bridges over to … [truncated]
+       features: ["Up to 15 Players per Match", "A Random Item Every 3 Seconds", "Weapons, Armour, Potions, Arrows and Explosives", "Special Items Like Updraft, SnowDash, Steal Ball, Bouncy Bomb and Chaos Potion", "Respawn Totems for an Extra Life", "Five Random Events, From Chest … [truncated]
+       tips: ["Use your first few blocks to wall up your pillar", "Hang on to explosives for breaking your rivals' bridges", "If a chest drops, race for it. There's a guaranteed weapon and two pieces of armour inside", "When the ground starts rising, build upwards", "Get under cov … [truncated]
+       similarGames: ["skywars", "luckyBedwars", "luckyBattlegrounds", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L15-L16)

```diff
-         question: "What is Build a Factory 2 on Bloxd?",
-         answer: "An idle factory builder. You build machines on your own floating island, connect them with conveyor belts and let them make everything for you."
+         question: "What is Lucky Towers?",
+         answer: "A fast PvP mode for up to 15 players. Everyone starts on their own pillar, gets a random item every 3 seconds and fights to be the last one standing."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L18-L19)

```diff
-         question: "Is Build a Factory 2 an idle factory game?",
-         answer: "Partly. Once it's set up, your factory runs by itself while you explore the Wilds or plan your next build. It pauses while you're offline and carries on where it stopped when you come back."
+         question: "How do you win in Bloxd Lucky Towers?",
+         answer: "Be the last player alive. Use whatever random items you get to knock rivals off their pillars or take them out. If you're eliminated, you can spectate untill the match ends."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L21-L22)

```diff
-         question: "How do I unlock new machines in Build a Factory 2?",
-         answer: "Tier up your Core by giving it the parts it asks for, like Motors and, later on, Logic Boards. Every new tier unlocks more machines and items."
+         question: "How often do you get items in Lucky Towers?",
+         answer: "Every 3 seconds. During the Double Speed event they spawn twice as fast for a short while."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L24-L25)

```diff
-         question: "What's the best way to power my factory?",
-         answer: "You've got a few options. Burn Coal or Charcoal in a Generator, build Solar Panels (they keep running at night at half power), or run Volt Engines on Voltite Cells for loads of power. Add Charge Vaults to store more."
+         question: "What items can you get in Lucky Towers?",
+         answer: "Blocks, seedlings, beds, food, potions, weapons, arrows, armour and explosives. There are special items too, like the Bouncy Bomb, Respawn Totem, Floor Creator, SnowDash, Updraft, Steal Ball, Chaos Potion and Moonstone Remote Explosive."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L27-L28)

```diff
-         question: "What are the Wilds?",
-         answer: "The land below your island. Drop down to mine rare ore, loot ruin chests for Salvage, explore the Old Works and break fallen comets for Comet Cores."
+         question: "Which random events can happen in Lucky Towers?",
+         answer: "Chest Drop, Jump Boost, Double Speed, Lava Rise and Bombardment. You'll get an announcement when each one starts."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/178.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b778fd8d9e0b9a4aa187d1116833e1ec4888a4b1b7b467d8ee637169d8d46d8c) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/178.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/178.js#L30-L31)

```diff
-         question: "Can friends help build my factory?",
-         answer: "Definitely. Invite friends to a shared co-op island, or use /visit to have a look around other players' islands."
+         question: "Which maps are in Lucky Towers?",
+         answer: "The OG, Desert, Icy, Space and Forest. There's also a Spooky map in October and a Holiday map in December and January."
+       }, {
+         question: "How is Lucky Towers different from Lucky Blocks Battlegrounds?",
+         answer: "Lucky Towers is last player standing. Items arrive on their own, and once you're knocked out you spectate. Lucky Blocks Battlegrounds is a kills race in a shared arena where you open Lucky Blocks, and the top player wins when it resets."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/179.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/179.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L4)

```diff
-   9399: (QQ, WQ, XQ) => {
+   9562: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L9-L13)

```diff
-       whatIs: ["Build a home, earn some gold and take life at your own pace. Bloxd Greenville is a chill social sandbox and life sim set in a laid-back town. You work jobs, play mini-games and hang out with other players, and there's no rush to do any of it."],
-       howToPlay: ["Press B to pick your starting house, then take the portal to the Town Square and start earning gold. Choose a job. You could help customers at the Market, smash blocks and buildings in Demolition, dig for minerals in Mining, or try Woodcutting and Farming. Jobs … [truncated]
-       features: ["Unlock and Switch Between Houses and Plots", "Build Your Own House on an Empty Plot", "5 Jobs to Level Up: Market, Demolition, Mining, Woodcutting and Farming", "PvP Arena and Spleef Mini-Games", "Unlock Fast Travel to Get Around Quickly", "Host Parties and Choo … [truncated]
-       tips: ["Rest in your bed when your mood drops. Low mood means lower earnings.", "A better bed means bigger earnings, so upgrade it when you can", "Sell the items you collect in the shop for extra gold", "In Mining, head back up to sell when your backpack's full", "Some mine … [truncated]
-       similarGames: ["plots", "classic_creative", "fishing", "classic"],
+       whatIs: ["Smash Lucky Blocks for random loot, funny surprises and some genuinely wild outcomes, then take on everyone else in a chaotic multiplayer PvP arena. In Bloxd Lucky Blocks Battlegrounds, whoever has the most kills when the arena resets wins the round. Lucky Bedwars … [truncated]
+       howToPlay: ["You start in your own safe base, and nobody else can get in. Step out into the arena and a free Lucky Block lands with you every 15 seconds. Crack them open for weapons, armour, pets and surprises, then go and fight.", "Lucky Blocks, Weapon Lucky Blocks and Pet … [truncated]
+       features: ["Multiplayer Lucky Block PvP Arena", "A Free Lucky Block Every 15 Seconds", "Weapon and Pet Lucky Blocks on Pads Around the Map", "Ultra Lucky Block in the Centre Every 90 Seconds", "Your Own Ultra Lucky Block Every 5 Minutes", "Safe Personal Base Nobody Else Can … [truncated]
+       tips: ["Stay out in the arena. You don't get free Lucky Blocks while you're in your base", "The second the Ultra Lucky Block appears, head for the centre", "Open Pet Lucky Blocks for a pet that'll defend you from anyone who attacks you", "Need a breather? Go back to your ba … [truncated]
+       similarGames: ["luckyBedwars", "luckyTowers", "skywars", "bedwars"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L15-L16)

```diff
-         question: "What is Bloxd Greenville?",
-         answer: "A town life sim where you build a home, earn gold from jobs and play mini-games with other players."
+         question: "What is Lucky Blocks Battlegrounds?",
+         answer: "A multiplayer lucky block PvP arena. You open Lucky Blocks for random loot, fight other players and try to end each 15-minute round with the most kills."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L18-L19)

```diff
-         question: "How do I earn gold in Greenville?",
-         answer: "Work jobs like Market, Demolition, Mining, Woodcutting and Farming, eliminate players in the Arena and Spleef, and sell what you collect. Keep your mood up as well, because low mood cuts your earnings."
+         question: "How do you win Lucky Blocks Battlegrounds?",
+         answer: "Get the most kills before the arena resets. That happens every 15 minutes, and the top player wins the round."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L21-L22)

```diff
-         question: "Can I build my own house in Greenville?",
-         answer: "Yes! Pick one of the ready-made houses in the shop, or unlock an Empty Plot and build from scratch."
+         question: "How do I get Lucky Blocks?",
+         answer: "You get a free one every 15 seconds while you're out in the arena. More spawn on pads around the map, and there's an Ultra Lucky Block in the centre every 90 seconds."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L24-L25)

```diff
-         question: "How do I change my house in Bloxd Greenville?",
-         answer: "Unlock new houses in the Houses section of the shop, then switch to whichever one you like."
+         question: "What is the Ultra Lucky Block?",
+         answer: "An extra-special Lucky Block. One shows up in the middle of the arena every 90 seconds for everyone to race for, and you get your own in your base every 5 minutes as well."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L27-L28)

```diff
-         question: "Can my friends visit my house?",
-         answer: "Sure. Turn on Allow Entry, add friends to your whitelist, or host a party to invite everyone over. You also get to choose who's allowed to edit your home."
+         question: "What's inside Bloxd lucky blocks?",
+         answer: "Pretty much anything, from weapons and armour to pets and funny surprises. Weapon Lucky Blocks and Pet Lucky Blocks give you a better chance of a weapon or a pet."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/179.js` (Changed code · before: `L30-L31` → after: `L30-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-da068d1cdffba75f8c6ce28e021f3b5a01f16df1249155c860a87ce09d68ff3a) · [After (L30-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/179.js#L30-L34) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/179.js#L30-L31)

```diff
-         question: "Which mini-games are in Greenville?",
-         answer: "Spleef, where you try to make every other player fall, and the Arena, where you battle other players in PvP. Both pay out gold."
+         question: "Can other players attack me in my base?",
+         answer: "Nope. Other players can't get into your base, break its blocks or open its chests."
+       }, {
+         question: "Do I lose my items when the Lucky Block Battlegrounds arena resets?",
+         answer: "No, your inventory stays with you. Everyone's kills go back to zero for the new round, though."
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/180.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/180.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L4)

```diff
-   9408: (QQ, WQ, XQ) => {
+   9565: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L9-L13)

```diff
-       whatIs: ["A string of unique islands, a mysterious land and 114 fish just waiting to be caught. Bloxd Fishing is a relaxing fishing simulator where you explore, catch fish and slowly uncover the secrets of the islands. Take it at your own pace. It's free, there's nothing to … [truncated]
-       howToPlay: ["Cast your line and wait for a bite. When something bites, a catch minigame kicks in. Some fish need a well-timed click, while others use a progress bar or a gravity bar. Win the minigame and the fish is yours. Every fish has its own weight and rarity, going fro … [truncated]
-       features: ["5 Islands and Lots of Fishing Spots to Explore", "114 Fish Species to Catch", "7 Rarities, from Common to Mythic", "3 Different Catch Minigames", "16 Fishing Rods, from the Rusty Rod to the Mythic Rod", "Boats, plus Luck Potions in Four Strengths", "A Bestiary t … [truncated]
-       tips: ["Sell your early catches and save up for a better rod", "Check the rod shops on each island for new rods", "Some spots don't allow every rod, so check before you cast", "Drink a Luck Potion before you fish if you're after rare catches", "Wait untill a luck event to g … [truncated]
-       similarGames: ["greenville", "skyblock", "oneBlock", "classic"],
+       whatIs: ["Mine, craft and survive in a huge block world that keeps running even when you log off. Bloxd Survival is an online multiplayer SMP. You explore, dig for ores, craft tools and armour, and build a base alongside everyone else on the server. It's free and runs strai … [truncated]
+       howToPlay: ["Gather some resources and craft your first tools. Then dig deeper for iron, gold, diamonds and moonstone to make better gear. Keep an eye out for mobs. Draugr Zombies, Skeletons and Knights, Frost Zombies and Skeletons, Cave Golems and Frost Golems all roam the … [truncated]
+       features: ["Persistent SMP Worlds That Save Your Progress", "Mining, Crafting and Base Building", "PvP, Looting and Raiding", "Land Protection with Protectors and Tribe Protectors", "Draugr, Golems, Frost Mobs and Wild Animals to Battle", "Free Private Servers with Owner Co … [truncated]
+       tips: ["Build away from spawn, or your base will get reset", "Get a Protector crafted from diamonds as soon as you can, to keep griefers out", "Don't log out mid-fight. If you're under 80 health and a player hit you in the last 8 seconds, you'll lose your items", "Log in to … [truncated]
+       similarGames: ["classic_smp2", "classic_survivalDayNight", "classic_survivalGuns", "survivalFactory", "skyblock", "classic"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L15-L16)

```diff
-         question: "What is Bloxd Fishing?",
-         answer: "A relaxing fishing game. You explore 5 islands, win catch minigames to reel in fish and fill your Bestiary with rare species."
+         question: "What is Bloxd Survival?",
+         answer: "A multiplayer survival game on Bloxd.io. You mine, craft, build and fight to survive in a shared block world that carries on while you're away."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L18-L19)

```diff
-         question: "How many fish are in Bloxd Fishing?",
-         answer: "114 fish species, spread across 5 islands, in 7 rarities from Common to Mythic."
+         question: "How do I protect my base in Bloxd Survival?",
+         answer: "Craft a Protector from diamonds and place it in your base. Other players then can't change blocks or open chests in that chunk. Tribes can use Tribe Protectors instead. Protectors disappear if you're away for more than 30 days."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L21-L22)

```diff
-         question: "How do I catch Mythic fish in Bloxd Fishing?",
-         answer: "Use a better rod, drink a Luck Potion and fish during luck events. Then cross your fingers!"
+         question: "Why did my build disappear?",
+         answer: "Blocks near spawn reset every few hours, so build outside that area. Private lobbies reset only if their owner turns on Enable Spawn Reset."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L24-L25)

```diff
-         question: "Where can I get better rods?",
-         answer: "Sell your fish for coins, then buy new rods from the rod shops on the islands."
+         question: "Is stealing and griefing allowed in Bloxd Survival?",
+         answer: "It is. Raiding, stealing and griefing are all part of the game, so protect your chests and only share your base with people you trust."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L27-L28)

```diff
-         question: "How do I travel between islands?",
-         answer: "You start on Sunhaven. Spend coins to unlock Gloomtide, Eldermire, Embertide and Frostfell, and once an island's unlocked, use the shop to travel there."
+         question: "Can I make a private server in Bloxd Survival?",
+         answer: "Yes. You can make a private server for free, invite your friends and use owner commands to run it however you like."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/180.js` (Changed code · before: `L30-L31` → after: `L30-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4caR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-32d9202d2ee67caa15d94c494de166ad1f5625f52caa0f4ac48df1b81e58d4ca) · [After (L30-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/180.js#L30-L37) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/180.js#L30-L31)

```diff
-         question: "What are the catch minigames?",
-         answer: "There are three: a timed click, a progress bar and a gravity bar. Each fish uses one of them."
+         question: "What happens if I log out during a fight?",
+         answer: "Log out with less than 80 health within 8 seconds of being hit by a player and you'll lose your items. Get somewhere safe and heal up before you leave."
+       }, {
+         question: "Will my world still be there tomorrow?",
+         answer: "Yes. Survival worlds are persistent and keep running while you're gone. Signing in to an account keeps your progress safe even if your browser data gets cleared."
+       }, {
+         question: "Which Bloxd survival mode should I play?",
+         answer: "Survival is the classic one, with mobs, PvP and raiding. Peaceful is much calmer: no hostile mobs, no PvP and no health bar. Day & Night Survival is all about the day-night cycle and a Days Survived leaderboard. Survival with Guns adds craftable guns and armed mo … [truncated]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/181.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/181.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L4)

```diff
-   9416: (QQ, WQ, XQ) => {
+   9573: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L9-L13)

```diff
-       whatIs: ["Sharp aim and quick feet are what separate top frag from instant respawn. Bloxd Cube Warfare is a fast, free block FPS where the firefights don't stop. You can play Free-For-All, Team Deathmatch or Gun Game, and you'll unlock over 15 guns along the way. If you'd r … [truncated]
-       howToPlay: ["Join a match and vote on the map. In Free-For-All it's every player for themselves. Team Deathmatch puts you on a side, and your team has to outscore the other one. Rounds last 10 minutes. Get taken down and you'll respawn with 8 seconds of invincibility, thoug … [truncated]
-       features: ["Free-For-All, Team Deathmatch and Gun Game", "Over 15 Guns, Including the AK-47, AWP, Deagle, Striker-12 and GPMG", "Killstreak Rewards Across 3 Tiers", "Place Blocks for Cover with Killstreak Rewards", "Match Modifiers: Collect Diamonds and Explosives", "Maps I … [truncated]
-       tips: ["Keep moving. Standing still makes you an easy target", "Go for headshots, especially once you've got the Goodaimer killstreak", "Use those 8 seconds of respawn invincibility to get back into position", "Stay alive to keep your killstreak going, because it resets whe … [truncated]
-       similarGames: ["frontline", "classic_survivalGuns", "infection", "skywars"],
+       whatIs: ["All the fun of survival with none of the stress. Bloxd Peaceful Survival is a calm sandbox where you explore a shared block world with other players. You mine, gather, craft and build, and there are no hostile mobs, no PvP and no health bar. Basically it's Surviva … [truncated]
+       howToPlay: ["Spawn into the shared world and start collecting resources. Chop some trees, mine for ores, craft better tools and get building on your dream base. Only passive animals spawn, and they've got so little health you can beat them with your fist. Health is switched … [truncated]
+       features: ["No Hostile Mobs, No PvP and No Health Bar", "Shared Multiplayer World to Explore with Friends", "Mining, Crafting and Base Building", "Protect Your Land and Chests with Protectors", "Relaxing and Great for New Players and Builders"],
+       tips: ["Pick a spot to build 200+ blocks out, where blocks don't reset every few hours", "Craft a Protector from diamonds to keep your builds and chests safe", "Don't bother with a sword. Passive animals are weak enough to beat with your fist", "Just starting out? Practise  … [truncated]
+       similarGames: ["classic_survival", "classic_survivalDayNight", "classic_creative", "skyblock", "oneBlock"],
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L15-L16` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L15-L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L15-L16)

```diff
-         question: "What is Cube Warfare?",
-         answer: "A fast block shooter with 10-minute rounds, killstreak rewards and over 15 guns to unlock."
+         question: "What is Bloxd Peaceful?",
+         answer: "It's Bloxd's no-danger survival mode. You explore, build and gather in a shared block world, with no hostile mobs and no health bar."
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L18-L19` → after: `L18-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L18-L19) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L18-L19)

```diff
-         question: "What modes are in Cube Warfare?",
-         answer: "Free-For-All, Team Deathmatch and Gun Game. You'll be in Free-For-All by default."
+         question: "Can you die in Bloxd Peaceful?",
+         answer: "No. There's no health bar, so mobs and other players can't hurt you."
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L21-L22` → after: `L21-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L21-L22) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L21-L22)

```diff
-         question: "How does team deathmatch work in Cube Warfare?",
-         answer: "Pick Team Deathmatch and work with your team to outscore the other side before the 10-minute round is up."
+         question: "Is there PvP in Bloxd Peaceful?",
+         answer: "There isn't. Players can't attack each other in Peaceful."
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L24-L25` → after: `L24-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L24-L25) · [Before (L24-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L24-L25)

```diff
-         question: "What is Gun Game in Bloxd Cube Warfare?",
-         answer: "It's a mode with its own queue. Each elimination upgrades your weapon, and a final takedown with the sword wins it."
+         question: "Are there mobs in Bloxd Peaceful?",
+         answer: "Only passive animals. None of them can attack you, and you can beat them with your fist."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L27-L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L27-L28) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L27-L28)

```diff
-         question: "How do I unlock new guns in Cube Warfare?",
-         answer: "Through the shop. Once they're unlocked you can take them into Free-For-All or Team Deathmatch, and Gun Game lets you try the lot."
+         question: "What's the difference between Peaceful and Survival in Bloxd?",
+         answer: "The world works the same way, with the same mining, crafting and building. Survival has hostile mobs, PvP and a health bar. Peaceful takes all of that away so you can explore and build without worrying."
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/181.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-a24e276282600ded4dbdd2ef5bd8c5e683eebf4dba3494557c368667a1be2bb8) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/181.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/181.js#L30-L31)

```diff
-         question: "How many guns are in Cube Warfare?",
-         answer: "Over 15. That includes the AK-47, AWP, M16, MP40, SKAR, Deagle and Striker-12."
+         question: "Is Bloxd Peaceful good for beginners?",
+         answer: "Definitely. It's a safe place to learn the basics. If you die early on in Survival, the game will even offer to move you over to Peaceful."
```
