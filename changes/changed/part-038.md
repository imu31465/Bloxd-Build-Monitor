# Changed — Bundle Modifications Report (Part 038 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `38 / 116` (**266** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 037](part-037.md) · [Part 039 →](part-039.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (268 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 262. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3711-L3719` → after: `L11019-L11070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11019-L11070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11019-L11070) · [Before (L3711-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3711-L3719)

```diff
-             return this.bypassAuthState || kY.set(this.auth._key(), (() => Promise.resolve(null))), VV()
-           }
-           async onAuthEvent(VV) {
-             if ("signInViaRedirect" === VV.type) return super.onAuthEvent(VV);
-             if ("unknown" !== VV.type) {
-               if (VV.eventId) {
-                 const eV = await this.auth._redirectUserForId(VV.eventId);
-                 if (eV) return this.user = eV, super.onAuthEvent(VV);
-                 this.resolve(null)
+         }))
+       }
+       applyScroll(HH, BH) {
+         var LH, AH;
+         const rH = this.mirror.yAH(HH.id);
+         if (!rH) return this.debugNodeNotFound(HH, HH.id);
+         const SH = this.mirror.getMeta(rH);
+         if (rH === this.iframe.contentDocument) null == (LH = this.iframe.contentWindow) || LH.scrollTo({
+           top: HH.y,
+           left: HH.x,
+           behavior: BH ? "auto" : "smooth"
+         });
+         else if ((null == SH ? void 0 : SH.type) === eh.Document) null == (AH = rH.defaultView) || AH.scrollTo({
+           top: HH.y,
+           left: HH.x,
+           behavior: BH ? "auto" : "smooth"
+ ... (36 more added lines; see GitHub link above)
```

#### 263. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3721-L3815` → after: `L11072-L11073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11072-L11073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11072-L11073) · [Before (L3721-L3815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3721-L3815)

```diff
-             } else this.resolve(null)
-           }
-           async onExecution() {}
-           cleanUp() {}
-         }
-         async function EY(VV, eV) {
-           return jY(VV)._set(qY(eV), "true")
-         }
- 
-         function BY(VV, eV) {
-           kY.set(VV._key(), eV)
-         }
- 
-         function jY(VV) {
-           return Ue(VV._redirectPersistence)
-         }
- ... (79 more removed lines; see GitHub link above)
+             }));
+           BH.forEach((HH => HH.removeAllRanges())), LH.forEach((HH => {
```

#### 264. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3817-L3883` → after: `L11075-L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11075-L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11075-L11080) · [Before (L3817-L3883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3817-L3883)

```diff
-             if (VV.error && !zY(VV)) {
-               const JV = (null === (xV = VV.error.code) || void 0 === xV ? void 0 : xV.split("auth/")[1]) || "internal-error";
-               eV.onError(FV(this.auth, JV))
-             } else eV.onAuthEvent(VV)
-           }
-           isEventForConsumer(VV, eV) {
-             const xV = null === eV.eventId || !!VV.eventId && VV.eventId === eV.eventId;
-             return eV.filter.includes(VV.type) && xV
-           }
-           hasEventBeenHandled(VV) {
-             return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(MY(VV))
-           }
-           saveEventToCache(VV) {
-             this.cachedEventUids.add(MY(VV)), this.lastProcessedEventTime = Date.now()
-           }
-         }
- ... (51 more removed lines; see GitHub link above)
+             return HH && (null == (BH = HH.selection) ? void 0 : BH.addRange(HH.range))
+           }))
+         } catch (BH) {}
+       }
+       applyStyleSheetMutation(HH) {
+         var BH;
```

#### 265. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3885-L3910` → after: `L11082-L11100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11082-L11100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11082-L11100) · [Before (L3885-L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3885-L3910)

```diff
- 
-         function aY(VV) {
-           return CY = CY || function(VV) {
-             return new Promise(((eV, xV) => {
-               var JV, YV, UV;
- 
-               function yV() {
-                 iY(), gapi.load("gapi.iframes", {
-                   callback: () => {
-                     eV(gapi.iframes.getContext())
-                   },
-                   ontimeout: () => {
-                     iY(), xV(FV(VV, "network-request-failed"))
-                   },
-                   timeout: DY.get()
-                 })
- ... (10 more removed lines; see GitHub link above)
+         HH.styleId ? LH = this.styleMirror.getStyle(HH.styleId) : HH.id && (LH = (null == (BH = this.mirror.yAH(HH.id)) ? void 0 : BH.sheet) || null), LH && (HH.source === oh.StyleSheetRule ? this.applyStyleSheetRule(HH, LH) : HH.source === oh.StyleDeclaration && this.applyStyleD … [truncated]
+       }
+       applyStyleSheetRule(HH, BH) {
+         var LH, AH, rH, SH;
+         if (null == (LH = HH.adds) || LH.forEach((HH => {
+             let {
+               rule: LH,
+               index: AH
+             } = HH;
+             try {
+               if (Array.isArray(AH)) {
+                 const {
+                   positions: HH,
+                   index: rH
+                 } = Ph(AH), SH = vh(BH.cssRules, HH);
+                 null == SH || SH.insertRule(LH, rH)
+ ... (3 more added lines; see GitHub link above)
```

#### 266. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3962-L3995` → after: `L11103-L11145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11103-L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11103-L11145) · [Before (L3962-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3962-L3995)

```diff
-           }
-         }
- 
-         function mY(VV, eV, xV) {
-           let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const yV = Math.max((window.screen.availHeight - UV) / 2, 0).toString(),
-             pV = Math.max((window.screen.availWidth - YV) / 2, 0).toString();
-           let QV = "";
-           const nV = Object.assign(Object.assign({}, LY), {
-               width: YV.toString(),
-               height: UV.toString(),
-               top: yV,
-               left: pV
-             }),
-             wV = (0, JV.P)().toLowerCase();
- ... (18 more removed lines; see GitHub link above)
+           })), null == (AH = HH.removes) || AH.forEach((HH => {
+             let {
+               index: LH
+             } = HH;
+             try {
+               if (Array.isArray(LH)) {
+                 const {
+                   positions: HH,
+                   index: AH
+                 } = Ph(LH), rH = vh(BH.cssRules, HH);
+                 null == rH || rH.deleteRule(AH || 0)
+               } else null == BH || BH.deleteRule(LH)
+             } catch (AH) {}
+           })), "string" === typeof HH.replace) try {
+           null == (rH = BH.replace) || rH.call(BH, HH.replace)
+         } catch (hH) {}
+ ... (27 more added lines; see GitHub link above)
```

#### 267. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3997` → after: `L11147-L11165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11147-L11165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11147-L11165) · [Before (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3997)

```diff
-           return new fY(vV)
+         }));
+         let AH = 0;
+         const rH = (HH, BH) => {
+           const LH = BH.map((HH => this.styleMirror.getStyle(HH))).filter((HH => null !== HH));
+           xh(HH) ? HH.shadowRoot.adoptedStyleSheets = LH : "#document" === HH.nodeName && (HH.adoptedStyleSheets = LH), LH.length !== BH.length && AH < 10 && (setTimeout((() => rH(HH, BH)), 0 + 100 * AH), AH++)
+         };
+         rH(LH, HH.styleIds)
+       }
+       legacy_resolveMissingNode(HH, BH, LH, AH) {
+         const {
+           previousId: rH,
+           nextId: SH
+         } = AH, hH = rH && HH[rH], tH = SH && HH[SH];
+         if (hH) {
+           const {
+             node: AH,
+ ... (3 more added lines; see GitHub link above)
```

#### 268. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L3999-L4026` → after: `L11167-L11252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L11167-L11252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/295.js#L11167-L11252) · [Before (L3999-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/295.js#L3999-L4026)

```diff
-         const KY = "__/auth/handler",
-           HY = "emulator/auth/handler",
-           uY = encodeURIComponent("fac");
-         async function sY(VV, eV, xV, UV, yV, pV) {
-             NV(VV.config.authDomain, VV, "auth-domain-config-required"), NV(VV.config.apiKey, VV, "invalid-api-key");
-             const QV = {
-               apiKey: VV.config.apiKey,
-               appName: VV.name,
-               authType: xV,
-               redirectUrl: UV,
-               v: YV.e,
-               eventId: yV
-             };
-             if (eV instanceof Vx) {
-               eV.setDefaultLanguage(VV.languageCode), QV.providerId = eV.providerId || "", (0, JV.S)(eV.getCustomParameters()) || (QV.customParameters = JSON.stringify(eV.getCustomParameters()));
-               for (const [VV, eV] of Object.entries(pV || {})) QV[VV] = eV
- ... (12 more removed lines; see GitHub link above)
+         if (tH) {
+           const {
+             node: AH,
+             mutation: rH
+           } = tH;
+           BH.insertBefore(AH, LH.nextSibling), delete HH[rH.node.id], delete this.legacy_missingNodeRetryMap[rH.node.id], (rH.previousId || rH.nextId) && this.legacy_resolveMissingNode(HH, BH, AH, rH)
+         }
+       }
+       moveAndHover(HH, BH, LH, AH, rH) {
+         const SH = this.mirror.yAH(LH);
+         if (!SH) return this.debugNodeNotFound(rH, LH);
+         const hH = Mh(SH, this.iframe),
+           tH = HH * hH.absoluteScale + hH.x,
+           zH = BH * hH.absoluteScale + hH.y;
+         this.mouse.style.left = `${tH}px`, this.mouse.style.top = `${zH}px`, AH || this.drawMouseTail({
+           x: tH,
+ ... (70 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L142` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/296.js#L5-L24) · [Before (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/296.js#L4-L142)

```diff
-   41852: (VV, eV, xV) => {
-     xV.d(eV, {
-       $: () => de,
-       $c: () => ye,
-       Ab: () => pe,
-       Ac: () => Je,
-       Ae: () => fx,
-       Bc: () => Ze,
-       Be: () => rx,
-       Bf: () => eJ,
-       C: () => Ye,
-       Cf: () => dx,
-       D: () => MV,
-       Db: () => YV,
-       Dc: () => XV,
-       Dd: () => iV,
- ... (123 more removed lines; see GitHub link above)
+   41814: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       FirebaseError: () => AH.d,
+       SDK_VERSION: () => AH.f,
+       _DEFAULT_ENTRY_NAME: () => AH.g,
+       SrH: () => AH.k,
+       _addOrOverwriteComponent: () => AH.n,
+       _apps: () => AH.o,
+       _clearComponents: () => AH.p,
+       _components: () => AH.q,
+       _getProvider: () => AH.r,
+       _registerComponent: () => AH.u,
+       _removeServiceInstance: () => AH.x,
+       deleteApp: () => AH.B,
+       getApp: () => AH.H,
+       getApps: () => AH.F,
+ ... (4 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L144-L1384` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/296.js#L26-L27) · [Before (L144-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/296.js#L144-L1384)

```diff
-     const JV = -2147483648,
-       YV = 12,
-       UV = 12,
-       yV = 4095,
-       pV = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       QV = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1225 more removed lines; see GitHub link above)
+     var AH = LH(41817);
+     (0, AH.L)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (104 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L5) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L4)

```diff
-   44494: (VV, eV, xV) => {
+   41831: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L7-L9` → after: `L20-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L20-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L20-L30) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L7-L9)

```diff
-       f: () => pV,
-       g: () => yV,
-       k: () => nV
+       fb: () => QH,
+       h: () => VH,
+       hb: () => MH,
+       j: () => UH,
+       kb: () => IH,
+       n: () => TH,
+       ob: () => oH,
+       p: () => tH,
+       qb: () => PH,
+       s: () => hH,
+       w: () => RH
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L11-L21` → after: `L32-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L32-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L32-L177) · [Before (L11-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L11-L21)

```diff
-     var JV = xV(38387),
-       YV = xV(39899),
-       UV = xV(39892);
- 
-     function yV(VV, eV, xV, JV) {
-       const YV = UV.r;
-       eV.fill(0), VV.gravity.toArray(eV, YV.gravity), VV.colorDead.toArray(eV, YV.colorDead), xV[YV.ramp] = VV.useRampGradients ? 1 : 0;
-       const yV = VV.getColorGradients(),
-         pV = vV(VV, yV, "colour", JV);
-       xV[YV.colorCount] = pV;
-       for (let UV = 0; UV < pV; UV++) {
+     const AH = function(HH) {
+         const BH = [];
+         let LH = 0;
+         for (let AH = 0; AH < HH.length; AH++) {
+           let rH = HH.charCodeAt(AH);
+           rH < 128 ? BH[LH++] = rH : rH < 2048 ? (BH[LH++] = rH >> 6 | 192, BH[LH++] = 63 & rH | 128) : 55296 === (64512 & rH) && AH + 1 < HH.length && 56320 === (64512 & HH.charCodeAt(AH + 1)) ? (rH = 65536 + ((1023 & rH) << 10) + (1023 & HH.charCodeAt(++AH)), BH[LH++] = rH >> 1 … [truncated]
+         }
+         return BH
+       },
+       rH = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (130 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L23-L24` → after: `L179-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L179-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L179-L194) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L23-L24)

```diff
-         const VV = yV[rV(yV, UV)];
-         eV[YV.colorPositions + UV] = VV.gradient, VV.color1.toArray(eV, YV.color1 + 4 * UV), (null !== (QV = VV.color2) && void 0 !== QV ? QV : VV.color1).toArray(eV, YV.color2 + 4 * UV)
+         return null === (HH = CH()) || void 0 === HH ? void 0 : HH.config
+       },
+       GH = HH => {
+         var BH;
+         return null === (BH = CH()) || void 0 === BH ? void 0 : BH[`_${HH}`]
+       };
+     class YH {
+       constructor() {
+         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((HH, BH) => {
+           this.resolve = HH, this.reject = BH
+         }))
+       }
+       wrapCallback(HH) {
+         return (BH, LH) => {
+           BH ? this.reject(BH) : this.resolve(LH), "function" === typeof HH && (this.promise.catch((() => {})), 1 === HH.length ? HH(BH) : HH(BH, LH))
+         }
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L37-L40` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L199) · [Before (L37-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L37-L40)

```diff
-       return {
-         key: [],
-         texels: new Uint8Array(4 * UV.j)
-       }
+       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L44-L49` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L202-L203) · [Before (L44-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L44-L49)

```diff
-     function nV(VV, eV) {
-       return wV(VV, QV), !BV(QV, eV.key) && (eV.key.length = 0, eV.key.push(...QV), eV.key.length > 0 && function(VV, eV) {
-         for (let xV = 0; xV < UV.j; xV++) YV.i.GetCurrentGradient(xV / UV.j, VV, ((VV, eV, xV) => {
-           JV.Color3.LerpToRef(VV.color, eV.color, xV, ZV)
-         })), eV[4 * xV] = 255 * ZV.r, eV[4 * xV + 1] = 255 * ZV.g, eV[4 * xV + 2] = 255 * ZV.b, eV[4 * xV + 3] = 255
-       }(VV.getRampGradients(), eV.texels), !0)
+     function QH() {
+       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(uH())
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L52-L58` → after: `L206-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L206-L208) · [Before (L52-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L52-L58)

```diff
-     function wV(VV, eV) {
-       eV.length = 0;
-       const xV = VV.useRampGradients ? VV.getRampGradients() : null;
-       if (null !== xV && void 0 !== xV && xV.length) {
-         eV.push(xV.length);
-         for (const VV of xV) eV.push(VV.gradient, VV.color.r, VV.color.g, VV.color.b)
-       }
+     function WH() {
+       const HH = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
+       return "object" === typeof HH && void 0 !== HH.id
```

#### 8. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L62-L63` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L211-L212) · [Before (L62-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L62-L63)

```diff
-     function vV(VV, eV, xV, JV) {
-       return eV ? eV.length > UV.e ? (JV(`particleStops:${xV}`, `GPU particles use the first 2 and last ${UV.e-2} of more than ${UV.e} ${xV} gradient stops (${VV.name})`), UV.e) : eV.length : 0
+     function MH() {
+       return "object" === typeof navigator && "ReactNative" === navigator.product
```

#### 9. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L66-L67` → after: `L215-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L215-L217) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L66-L67)

```diff
-     function rV(VV, eV) {
-       return eV < 2 || VV.length <= UV.e ? eV : VV.length - UV.e + eV
+     function xH() {
+       const HH = uH();
+       return HH.indexOf("MSIE ") >= 0 || HH.indexOf("Trident/") >= 0
```

#### 10. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L72-L73` → after: `L220-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L220-L225) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L72-L73)

```diff
-     function EV(VV, eV, xV) {
-       return yV(VV, kV, bV, xV), eV && BV(bV, eV) ? null : bV.slice()
+     function vH() {
+       try {
+         return "object" === typeof indexedDB
+       } catch (HH) {
+         return !1
+       }
```

#### 11. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L76-L80` → after: `L228-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L228-L245) · [Before (L76-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L76-L80)

```diff
-     function BV(VV, eV) {
-       if (VV.length !== eV.length) return !1;
-       for (let xV = 0; xV < VV.length; xV++)
-         if (VV[xV] !== eV[xV]) return !1;
-       return !0
+     function PH() {
+       return new Promise(((HH, BH) => {
+         try {
+           let LH = !0;
+           const AH = "validate-browser-context-for-indexeddb-analytics-module",
+             rH = self.indexedDB.open(AH);
+           rH.onsuccess = () => {
+             rH.result.close(), LH || self.indexedDB.deleteDatabase(AH), HH(!0)
+           }, rH.onupgradeneeded = () => {
+             LH = !1
+           }, rH.onerror = () => {
+             var HH;
+             BH((null === (HH = rH.error) || void 0 === HH ? void 0 : HH.message) || "")
+           }
+         } catch (LH) {
+           BH(LH)
+ ... (2 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L83-L85` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L248-L249) · [Before (L83-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L83-L85)

```diff
-     function jV(VV, eV, xV) {
-       var JV;
-       VV[eV] = xV.gradient, VV[eV + 1] = xV.factor1, VV[eV + 2] = null !== (JV = xV.factor2) && void 0 !== JV ? JV : xV.factor1
+     function TH() {
+       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
```

#### 13. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L87-L109` → after: `L251-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L251-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L251-L253) · [Before (L87-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L87-L109)

```diff
-   },
-   42490: (VV, eV, xV) => {
-     function JV(VV, eV, xV) {
-       const JV = eV * eV * 4,
-         YV = VV[0].layers,
-         UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
-         yV = new Uint8Array(UV * JV);
-       VV.forEach(((eV, xV) => {
-         const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
-         yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
-       }));
-       const pV = Math.max(1, Math.min(UV, xV || UV));
-       if (pV === UV) return [{
-         pixels: yV,
-         layers: UV
-       }];
- ... (7 more removed lines; see GitHub link above)
+     class UH extends Error {
+       constructor(HH, BH, LH) {
+         super(BH), this.code = HH, this.customData = LH, this.name = "FirebaseError", Object.setPrototypeOf(this, UH.prototype), Error.captureStackTrace && Error.captureStackTrace(this, VH.prototype.create)
```

#### 14. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L113-L117` → after: `L256-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L256-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L256-L274) · [Before (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L113-L117)

```diff
-     xV.d(eV, {
-       e: () => JV,
-       g: () => UV
-     });
-     const YV = new WeakMap;
+     class VH {
+       constructor(HH, BH, LH) {
+         this.service = HH, this.serviceName = BH, this.errors = LH
+       }
+       create(HH) {
+         const BH = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
+           LH = `${this.service}/${HH}`,
+           AH = this.errors[HH],
+           rH = AH ? function(HH, BH) {
+             return HH.replace(OH, ((HH, LH) => {
+               const AH = BH[LH];
+               return null != AH ? String(AH) : `<${LH}?>`
+             }))
+           }(AH, BH) : "Error",
+           SH = `${this.serviceName}: ${rH} (${LH}).`;
+         return new UH(LH, SH, BH)
+ ... (3 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L119-L133` → after: `L276-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L276-L279) · [Before (L119-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L119-L133)

```diff
-     function UV(VV, eV, xV) {
-       var JV, UV;
-       const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
-       YV.set(VV, yV);
-       const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
-       yV.set(eV[0], pV);
-       const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
-       if (QV) return QV.built;
-       const nV = {
-         urls: [...eV],
-         built: xV()
-       };
-       return pV.push(nV), nV.built.catch((() => {
-         pV.splice(pV.indexOf(nV), 1)
-       })), nV.built
+     function bH(HH) {
+       for (const BH in HH)
+         if (Object.prototype.hasOwnProperty.call(HH, BH)) return !1;
+       return !0
```

#### 16. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L135-L141` → after: `L281-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L281-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L281-L292) · [Before (L135-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L135-L141)

```diff
-   },
-   44490: (VV, eV, xV) => {
-     function JV() {
-       let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
-       const eV = new Set;
-       return (xV, JV) => {
-         eV.has(xV) || (eV.add(xV), console.warn(VV + JV))
+ 
+     function kH(HH, BH) {
+       if (HH === BH) return !0;
+       const LH = Object.keys(HH),
+         AH = Object.keys(BH);
+       for (const rH of LH) {
+         if (!AH.includes(rH)) return !1;
+         const LH = HH[rH],
+           SH = BH[rH];
+         if (mH(LH) && mH(SH)) {
+           if (!kH(LH, SH)) return !1
+         } else if (LH !== SH) return !1
```

#### 17. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L144-L180` → after: `L298-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L298-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L298-L316) · [Before (L144-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L144-L180)

```diff
-     xV.d(eV, {
-       b: () => JV
-     })
-   },
-   44547: (VV, eV, xV) => {
-     xV.d(eV, {
-       createLiteRendererAsync: () => CQ,
-       liteBabylonBackend: () => cV,
-       setPipelineFailureHook: () => pe
-     });
-     var JV = xV(38387),
-       YV = xV(38688),
-       UV = xV(39055),
-       yV = xV(38433),
-       pV = xV(39066);
-     class QV extends pV.e {
- ... (21 more removed lines; see GitHub link above)
+ 
+     function mH(HH) {
+       return null !== HH && "object" === typeof HH
+     }
+ 
+     function oH(HH) {
+       const BH = [];
+       for (const [LH, AH] of Object.entries(HH)) Array.isArray(AH) ? AH.forEach((HH => {
+         BH.push(encodeURIComponent(LH) + "=" + encodeURIComponent(HH))
+       })) : BH.push(encodeURIComponent(LH) + "=" + encodeURIComponent(AH));
+       return BH.length ? "&" + BH.join("&") : ""
+     }
+ 
+     function IH(HH) {
+       const BH = {};
+       return HH.replace(/^\?/, "").split("&").forEach((HH => {
+ ... (3 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L182-L185` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L318) · [Before (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L182-L185)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
+       })), BH
```

#### 19. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L196-L198` → after: `L321-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L321-L325) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L196-L198)

```diff
-     function BV(VV, eV, xV, JV) {
-       let YV = 0;
-       return VV.isVerticesDataPresent("color") && (YV |= ZV), "none" !== eV && (YV |= vV), "thin" === eV && (YV |= rV, VV.isVerticesDataPresent("instanceColor") && (YV |= kV)), JV.fogEnabled && VV.applyFog && 0 !== JV.fogMode && (YV |= bV), xV >= 1 && (YV |= EV), YV
+     function fH(HH) {
+       const BH = HH.indexOf("?");
+       if (!BH) return "";
+       const LH = HH.indexOf("#", BH);
+       return HH.substring(BH, LH > 0 ? LH : void 0)
```

#### 20. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L202` → after: `L329-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L329-L330) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L202)

```diff
-       VV.updateColor4("color", eV.color, eV.alpha)
+       const LH = new KH(HH, BH);
+       return LH.subscribe.bind(LH)
```

#### 21. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L216-L226` → after: `L334-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L334-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L334-L338) · [Before (L216-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L216-L226)

```diff
-         this.name = VV, this.yE = eV, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.eC = {
-           addOnce: VV => {
-             this.disposers.push(VV)
-           }
-         }, this.uniqueId = eV.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       dD() {
-         return this.yE
+         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = BH, this.task.then((() => {
+           HH(this)
+         })).catch((HH => {
+           this.error(HH)
+         }))
```

#### 22. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L228-L229` → after: `L340-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L340-L343) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L228-L229)

```diff
-       getClassName() {
-         return "LiteMaterial"
+       next(HH) {
+         this.forEachObserver((BH => {
+           BH.next(HH)
+         }))
```

#### 23. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L231-L232` → after: `L345-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L345-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L345-L348) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L231-L232)

```diff
-       freeze() {
-         this.checkReadyOnlyOnce = !0
+       error(HH) {
+         this.forEachObserver((BH => {
+           BH.error(HH)
+         })), this.close(HH)
```

#### 24. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L234-L235` → after: `L350-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L350-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L350-L353) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L234-L235)

```diff
-       unfreeze() {
-         this.checkReadyOnlyOnce = !1
+       complete() {
+         this.forEachObserver((HH => {
+           HH.complete()
+         })), this.close()
```

#### 25. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L237-L239` → after: `L355-L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L355-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L355-L373) · [Before (L237-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L237-L239)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       subscribe(HH, BH, LH) {
+         let AH;
+         if (void 0 === HH && void 0 === BH && void 0 === LH) throw new Error("Missing Observer.");
+         AH = function(HH, BH) {
+           if ("object" !== typeof HH || null === HH) return !1;
+           for (const LH of BH)
+             if (LH in HH && "function" === typeof HH[LH]) return !0;
+           return !1
+         }(HH, ["next", "error", "complete"]) ? HH : {
+           next: HH,
+           error: BH,
+           complete: LH
+         }, void 0 === AH.next && (AH.next = cH), void 0 === AH.error && (AH.error = cH), void 0 === AH.complete && (AH.complete = cH);
+         const rH = this.unsubscribeOne.bind(this, this.observers.length);
+         return this.finalized && this.task.then((() => {
+           try {
+ ... (3 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L241-L242` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L375-L376) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L241-L242)

```diff
-       needAlphaBlendingForMesh(VV) {
-         return (0, NV.T)(this.model, VV.visibility, VV.hasVertexAlpha)
+       unsubscribeOne(HH) {
+         void 0 !== this.observers && void 0 !== this.observers[HH] && (delete this.observers[HH], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
```

#### 27. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L244-L245` → after: `L378-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L378-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L378-L380) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L244-L245)

```diff
-       needAlphaTestingForMesh(VV) {
-         return (0, NV.V)(this.model, VV.visibility, VV.hasVertexAlpha)
+       forEachObserver(HH) {
+         if (!this.finalized)
+           for (let BH = 0; BH < this.observers.length; BH++) this.sendOne(BH, HH)
```

#### 28. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L247-L249` → after: `L382-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L382-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L382-L389) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L247-L249)

```diff
-       dispose() {
-         (0, tV.h)(this);
-         for (const VV of this.disposers.splice(0)) VV()
+       sendOne(HH, BH) {
+         this.task.then((() => {
+           if (void 0 !== this.observers && void 0 !== this.observers[HH]) try {
+             BH(this.observers[HH])
+           } catch (LH) {
+             "undefined" !== typeof console && console.error && console.error(LH)
+           }
+         }))
```

#### 29. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L251-L252` → after: `L391-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L391-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L391-L394) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L251-L252)

```diff
-       get model() {
-         return (0, NV.eb)(this)
+       close(HH) {
+         this.finalized || (this.finalized = !0, void 0 !== HH && (this.finalError = HH), this.task.then((() => {
+           this.observers = void 0, this.onNoObservers = void 0
+         })))
```

#### 30. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L255` → after: `L397-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L397-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L397-L402) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L255)

```diff
-     const WV = new WeakSet;
+ 
+     function cH() {}
+     const eH = 1e3,
+       qH = 2,
+       gH = 144e5,
+       NH = .5;
```

#### 31. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L258` → after: `L405-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L405-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L405-L408) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L258)

```diff
-       return WV.has(VV)
+       let BH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qH;
+       const LH = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH) * Math.pow(BH, HH),
+         AH = Math.round(NH * LH * (Math.random() - .5) * 2);
+       return Math.min(gH, LH + AH)
```

#### 32. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L262` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L412) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L262)

```diff
-       WV.add(VV)
+       return HH && HH._delegate ? HH._delegate : HH
```

#### 33. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L264-L289` → after: `L414-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L414-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L414-L452) · [Before (L264-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L264-L289)

```diff
-     const DV = {
-       create: (VV, eV) => ((0, FV.m)(VV, new GV(VV.name, eV)), XV.e.defines()),
-       write: () => {},
-       addFeature: (VV, eV) => {
-         const xV = VV.mirror;
-         eV.feature === AV.j && eV.state.dirLightCount > 0 && (VV.disableLighting = !0, (0, NV.bb)(VV)), "BLOXD_LIGHTING" in eV.defines && (0, tV.g)(xV), eV.feature === PV.h && ((0, qV.f)(eV.state, zV), function(VV, eV) {
-           const xV = VV.dD().sk();
-           setTimeout((() => {
-             xV.atlasArrays(eV.sources).then((xV => {
-               (0, qV.b)(VV, eV, xV.map((VV => ({
-                 atlas: VV,
-                 layers: VV.layers
-               }))), xV[0].layerWidth, zV)
-             })).catch((VV => {
-               console.error("Failed to build the atlas's texture arrays", VV)
-             }))
- ... (10 more removed lines; see GitHub link above)
+   },
+   41817: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => SH.j,
+       f: () => XB,
+       g: () => pH,
+       k: () => LB,
+       n: () => AB,
+       o: () => HB,
+       p: () => tB,
+       q: () => BB,
+       r: () => SB,
+       u: () => rB,
+       x: () => hB,
+       B: () => QB,
+       H: () => YB,
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L291-L315` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L454-L455) · [Before (L291-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L291-L315)

```diff
-       cube: gV,
-       canvas: (VV, eV, xV) => {
-         let {
-           width: JV,
-           height: YV,
-           mipmaps: UV,
-           samplingMode: yV = MV.h.trilinear,
-           hasAlpha: pV = !1,
-           wrap: QV = MV.d.clamp
-         } = xV;
-         const nV = VV.sk().createCanvas(JV, YV),
-           wV = new MV.l("2d", {
-             kind: "canvas",
-             width: JV,
-             height: YV,
-             canvas: nV
- ... (9 more removed lines; see GitHub link above)
+       set: (HH, BH, LH) => (HH[BH] = LH, !0),
+       has: (HH, BH) => HH instanceof IDBTransaction && ("done" === BH || "store" === BH) || BH in HH
```

#### 35. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L355-L405` → after: `L458-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L458-L468) · [Before (L355-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L355-L405)

```diff
-     function oV() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
-     }
-     const cV = {
-       uJV: oV,
-       kUV: (VV, eV) => {
-         const xV = new aV(VV.engine, JV.c.FromArray(eV.clearColor), JV.Color3.FromArray(eV.ambientColor));
-         (0, yV.e)(DV, xV), VV.yE = xV,
-           function(VV, eV) {
-             const xV = Object.assign((0, iV.j)(VV, "camera"), {
-               layerMask: 268435455
-             });
-             VV.model.nodes.setWorldSource(xV.row, VV.model.view.worldMatrix), VV.camera = eV.activeCamera = xV
-           }(VV, xV), (0, YV.j)(VV, ((VV, eV, xV) => (0, UV.k)(VV, eV, xV, pV.e)))
-       },
-       nUV: () => {},
- ... (35 more removed lines; see GitHub link above)
+     function uH(HH) {
+       return HH !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (tH || (tH = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(HH) ? function() {
+         for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
+         return HH.apply(MH(this), LH), WH(zH.get(this))
+       } : function() {
+         for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
+         return WH(HH.apply(MH(this), LH))
+       } : function(BH) {
+         for (var LH = arguments.length, AH = new Array(LH > 1 ? LH - 1 : 0), rH = 1; rH < LH; rH++) AH[rH - 1] = arguments[rH];
+         const SH = HH.call(MH(this), BH, ...AH);
+         return EH.set(SH, BH.sort ? BH.sort() : [BH]), WH(SH)
```

#### 36. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L412` → after: `L473-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L473-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L473-L489) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L412)

```diff
-       return Math.max(4, 4 * Math.ceil(VV / 4))
+       return "function" === typeof HH ? uH(HH) : (HH instanceof IDBTransaction && function(HH) {
+         if (CH.has(HH)) return;
+         const BH = new Promise(((BH, LH) => {
+           const AH = () => {
+               HH.removeEventListener("complete", rH), HH.removeEventListener("error", SH), HH.removeEventListener("abort", SH)
+             },
+             rH = () => {
+               BH(), AH()
+             },
+             SH = () => {
+               LH(HH.error || new DOMException("AbortError", "AbortError")), AH()
+             };
+           HH.addEventListener("complete", rH), HH.addEventListener("error", SH), HH.addEventListener("abort", SH)
+         }));
+         CH.set(HH, BH)
+       }(HH), BH = HH, (hH || (hH = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((HH => BH instanceof HH)) ? new Proxy(HH, YH) : HH);
+ ... (1 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L415-L422` → after: `L492-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L492-L512) · [Before (L415-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L415-L422)

```diff
-     function uV(VV, eV, xV, JV) {
-       const YV = VV.createBuffer({
-         label: JV,
-         size: HV(eV.byteLength),
-         usage: xV,
-         mappedAtCreation: !0
-       });
-       return new Uint8Array(YV.getMappedRange(), 0, eV.byteLength).set(new Uint8Array(eV.buffer, eV.byteOffset, eV.byteLength)), YV.unmap(), YV
+     function WH(HH) {
+       if (HH instanceof IDBRequest) return function(HH) {
+         const BH = new Promise(((BH, LH) => {
+           const AH = () => {
+               HH.removeEventListener("success", rH), HH.removeEventListener("error", SH)
+             },
+             rH = () => {
+               BH(WH(HH.result)), AH()
+             },
+             SH = () => {
+               LH(HH.error), AH()
+             };
+           HH.addEventListener("success", rH), HH.addEventListener("error", SH)
+         }));
+         return BH.then((BH => {
+           BH instanceof IDBCursor && zH.set(BH, HH)
+ ... (5 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L426` → after: `L520-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L520-L532) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L426)

```diff
-       return Math.floor(Math.log2(Math.max(VV, eV))) + 1
+       if (!(HH instanceof IDBDatabase) || BH in HH || "string" !== typeof BH) return;
+       if (PH.get(BH)) return PH.get(BH);
+       const LH = BH.replace(/FromIndex$/, ""),
+         AH = BH !== LH,
+         rH = vH.includes(LH);
+       if (!(LH in (AH ? IDBIndex : IDBObjectStore).prototype) || !rH && !xH.includes(LH)) return;
+       const SH = async function(HH) {
+         const BH = this.transaction(HH, rH ? "readwrite" : "readonly");
+         let SH = BH.store;
+         for (var hH = arguments.length, tH = new Array(hH > 1 ? hH - 1 : 0), zH = 1; zH < hH; zH++) tH[zH - 1] = arguments[zH];
+         return AH && (SH = SH.index(tH.shift())), (await Promise.all([SH[LH](...tH), rH && BH.done]))[0]
+       };
+       return PH.set(BH, SH), SH
```

#### 39. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L428-L482` → after: `L534-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L534-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L534-L550) · [Before (L428-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L428-L482)

```diff
- 
-     function SV(VV, eV, xV, JV, YV, UV) {
-       const yV = VV.createTexture({
-           label: UV,
-           size: {
-             width: xV,
-             height: JV,
-             depthOrArrayLayers: YV
-           },
-           format: "rgba8unorm",
-           mipLevelCount: sV(xV, JV),
-           usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
-         }),
-         pV = (eV, xV, JV, UV) => {
-           VV.queue.writeTexture({
-             texture: yV,
- ... (39 more removed lines; see GitHub link above)
+     YH = (HH => ({
+       ...HH,
+       get: (BH, LH, AH) => TH(BH, LH) || HH.get(BH, LH, AH),
+       has: (BH, LH) => !!TH(BH, LH) || HH.has(BH, LH)
+     }))(YH);
+     class UH {
+       constructor(HH) {
+         this.container = HH
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((HH => {
+           if (function(HH) {
+               const BH = HH.getComponent();
+               return "VERSION" === (null === BH || void 0 === BH ? void 0 : BH.type)
+             }(HH)) {
+             const BH = HH.getImmediate();
+ ... (1 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L484-L490` → after: `L552-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L552-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L552-L613) · [Before (L484-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L484-L490)

```diff
-         }(eV, xV, JV, YV)) pV(nV.data, QV++, nV.width, nV.height);
-       return yV
-     }
-     const IV = {
-       premultiplyAlpha: "none",
-       colorSpaceConversion: "none"
-     };
+           return null
+         })).filter((HH => HH)).join(" ")
+       }
+     }
+     const VH = "@firebase/app",
+       OH = "0.9.13",
+       bH = new rH.g("@firebase/app"),
+       kH = "@firebase/app-compat",
+       mH = "@firebase/analytics-compat",
+       oH = "@firebase/analytics",
+       IH = "@firebase/app-check-compat",
+       fH = "@firebase/app-check",
+       lH = "@firebase/auth",
+       KH = "@firebase/auth-compat",
+       cH = "@firebase/database",
+       eH = "@firebase/database-compat",
+ ... (46 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L492-L518` → after: `L615-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L615-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L615-L619) · [Before (L492-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L492-L518)

```diff
-     function dV(VV) {
-       if (VV.startsWith("data:")) {
-         const eV = VV.search(/[;,]/);
-         return `data:${eV>5?VV.slice(5,eV):""} URL of ${VV.length} characters`
-       }
-       return VV.length > 80 ? `${VV.slice(0,80)}...` : VV
-     }
-     async function OV(VV) {
-       const eV = await fetch(VV);
-       if (!eV.ok) throw new Error(`${dV(VV)}: ${eV.status} ${eV.statusText}`);
-       return createImageBitmap(await eV.blob(), IV)
-     }
-     async function Ve(VV) {
-       const eV = await OV(VV),
-         xV = new OffscreenCanvas(eV.width, eV.height),
-         JV = xV.getContext("2d", {
- ... (11 more removed lines; see GitHub link above)
+     function LB(HH, BH) {
+       try {
+         HH.container.yR(BH)
+       } catch (LH) {
+         bH.debug(`Component ${BH.name} failed to register with FirebaseApp ${HH.name}`, LH)
```

#### 42. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L523-L554` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L624) · [Before (L523-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L523-L554)

```diff
-       return (0, mV.g)(VV, eV.urls, (async () => {
-         const xV = await Promise.all(eV.urls.map((async (VV, xV) => {
-             var JV, YV, UV, yV, pV;
-             return null !== (yV = null !== (YV = null === (UV = eV.pixels) || void 0 === UV ? void 0 : UV[xV]) && void 0 !== YV ? YV : null, pV = eV.layerWidth, JV = null !== yV && void 0 !== yV && yV.byteLength && pV && yV.byteLength % (pV * pV * 4) === 0 ? {
-               pixels: yV,
-               layerWidth: pV,
-               layers: yV.byteLength / (pV * pV * 4)
-             } : null) && void 0 !== JV ? JV : await async function(VV) {
-               const {
-                 pixels: eV,
-                 width: xV
-               } = await Ve(VV);
-               return {
-                 pixels: eV,
-                 layerWidth: xV,
-                 layers: eV.byteLength / (xV * xV * 4)
- ... (16 more removed lines; see GitHub link above)
+       HH.container.addOrOverwriteComponent(BH)
```

#### 43. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L588-L589` → after: `L628-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L628-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L628-L631) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L588-L589)

```diff
-       for (const eV of (0, KV.l)(VV))
-         if (!Je.has((0, KV.i)(eV))) return !1;
+       const BH = HH.name;
+       if (BB.has(BH)) return bH.debug(`There were multiple attempts to register component ${BH}.`), !1;
+       BB.set(BH, HH);
+       for (const LH of HB.values()) LB(LH, HH);
```

#### 44. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L593-L601` → after: `L635-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L635-L639) · [Before (L593-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L593-L601)

```diff
-     function Ue(VV) {
-       const eV = Je.get(VV);
-       if (!eV) return null;
-       const [xV, JV, YV] = eV;
-       return {
-         srcFactor: xe.get(xV),
-         dstFactor: xe.get(JV),
-         operation: YV
-       }
+     function SB(HH, BH) {
+       const LH = HH.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+       });
+       return LH && LH.triggerHeartbeat(), HH.container.getProvider(BH)
```

#### 45. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L605-L606` → after: `L642-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L642-L644) · [Before (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L605-L606)

```diff
-     function pe(VV) {
-       ye = VV
+     function hB(HH, BH) {
+       let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pH;
+       SB(HH, BH).clearInstance(LH)
```

#### 46. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L610-L8007` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L647-L648) · [Before (L610-L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L610-L8007)

```diff
-     function ne(VV) {
-       return Qe.has(VV)
-     }
- 
-     function we(VV, eV, xV, JV) {
-       let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       var UV;
-       ne(VV) || (null === (UV = ye) || void 0 === UV || UV(eV, xV, JV, YV))
-     }
-     class Ze {
-       constructor(VV) {
-         this.resources = VV, this.matrixKey = {
-           Jv: 0
-         }, this.attributesKey = {
-           Jv: 0
-         }, this.inputs = Object.create(null);
- ... (7382 more removed lines; see GitHub link above)
+     function tB() {
+       BB.clear()
```

#### 47. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8010-L8109` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L665-L666) · [Before (L8010-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8010-L8109)

```diff
-       constructor(VV, eV) {
-         this.device = VV, this.resources = eV, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
-           order: 251,
-           isTransparent: !0,
-           _worldCenter: [0, 0, 0],
-           bind: (VV, eV) => (this.bindTarget(eV), {
-             renderable: this.renderable,
-             pipeline: ze(this.device, eV),
-             draw: VV => eV === this.preparedTarget ? this.draw(VV) : 0
-           })
-         }
-       }
-       rebind(VV) {
-         this.device = VV, this.build(), this.pipelines.clear(), this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.draws.length = 0;
-         for (const [eV, xV] of this.systems) {
-           const JV = new zQ(VV, eV, xV.frameIndex, this.bindings),
- ... (84 more removed lines; see GitHub link above)
+       constructor(HH, BH, LH) {
+         this._isDeleted = !1, this._options = Object.assign({}, HH), this._config = Object.assign({}, BH), this._name = BH.name, this._automaticDataCollectionEnabled = BH.automaticDataCollectionEnabled, this._container = LH, this.container.yR(new AH.f("app", (() => this), "PUBLIC … [truncated]
```

#### 48. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8111-L8112` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L668-L669) · [Before (L8111-L8112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8111-L8112)

```diff
-       get zUV() {
-         return this.systems.size
+       get automaticDataCollectionEnabled() {
+         return this.checkDestroyed(), this._automaticDataCollectionEnabled
```

#### 49. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8114-L8115` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L671-L672) · [Before (L8114-L8115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8114-L8115)

```diff
-       reset() {
-         for (const VV of this.systems.keys()) VV.reset()
+       set automaticDataCollectionEnabled(HH) {
+         this.checkDestroyed(), this._automaticDataCollectionEnabled = HH
```

#### 50. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8117-L8118` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L674-L675) · [Before (L8117-L8118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8117-L8118)

```diff
-       describePendingWork() {
-         return (0, qQ.g)(this.systems.keys(), "Lite")
+       get name() {
+         return this.checkDestroyed(), this._name
```

#### 51. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8120-L8122` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L677-L678) · [Before (L8120-L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8120-L8122)

```diff
-       fC(VV, eV) {
-         const xV = new qQ.d(VV, eV, this);
-         return this.systems.set(xV, new zQ(this.device, xV, this.allocateFrameIndex(), this.bindings)), xV
+       get options() {
+         return this.checkDestroyed(), this._options
```

#### 52. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8124-L8125` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L680-L681) · [Before (L8124-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8124-L8125)

```diff
-       teV(VV, eV) {
-         for (const xV of this.systems.keys()) xV.teV(VV, eV)
+       get config() {
+         return this.checkDestroyed(), this._config
```

#### 53. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8127-L8138` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L683-L684) · [Before (L8127-L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8127-L8138)

```diff
-       canDraw(VV) {
-         const eV = this.systems.get(VV),
-           xV = VV.texture ? this.resources.boundTexture(VV.texture) : null;
-         if (!eV || !xV || !this.targetPipelines) return !1;
-         if (eV.texture = xV, eV.pipelines.length = 0, !Ye(VV.blendMode)) return this.warnOnce(`blend:${VV.blendMode}`, `particle blend mode ${VV.blendMode} is not drawn (${VV.name})`), !0;
-         const JV = (0, KV.l)(VV.blendMode);
-         for (const YV of JV) {
-           const VV = this.pipelineFor(YV);
-           if (!1 === VV) return eV.pipelines.length = 0, !0;
-           VV && eV.pipelines.push(VV)
-         }
-         return eV.pipelines.length === JV.length
+       get container() {
+         return this._container
```

#### 54. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8140-L8141` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L686-L687) · [Before (L8140-L8141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8140-L8141)

```diff
-       disposeStopped(VV) {
-         VV.dispose()
+       get isDeleted() {
+         return this._isDeleted
```

#### 55. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8143-L8145` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L689-L690) · [Before (L8143-L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8143-L8145)

```diff
-       remove(VV) {
-         const eV = this.systems.get(VV);
-         eV && (this.systems.delete(VV), eV.destroy(), this.freeFrameIndices.push(eV.frameIndex))
+       set isDeleted(HH) {
+         this._isDeleted = HH
```

#### 56. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8147-L8159` → after: `L692-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L692-L695) · [Before (L8147-L8159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8147-L8159)

```diff
-       prepare(VV) {
-         const eV = VV.animationRatio || 1;
-         Ge(this.renderable._worldCenter, VV, Ne), this.preparedTarget = this.target, this.draws.length = 0;
-         let xV = 0;
-         for (const JV of this.systems.values()) {
-           const VV = JV.system;
-           if (!VV.animateIfActive(eV)) continue;
-           if (VV.ring.takeUploads(JV.upload), !VV.hasLiveParticles() || 0 === JV.pipelines.length) continue;
-           JV.writeUniforms(this.warnOnce), JV.bind();
-           const YV = 64 * JV.frameIndex;
-           JV.count = VV.ring.drawCount(), NQ(VV, this.frameData, this.frameBits, YV), xV = Math.max(xV, YV + 64), this.draws.push(JV)
-         }
-         xV > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, xV)
+       checkDestroyed() {
+         if (this.isDeleted) throw CB.create("app-deleted", {
+           appName: this._name
+         })
```

#### 57. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8161-L8166` → after: `L697-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L697-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L697-L705) · [Before (L8161-L8166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8161-L8166)

```diff
-       draw(VV) {
-         let eV = 0,
-           xV = null;
-         for (const JV of this.draws) {
-           VV.setBindGroup(1, JV.bindGroup), VV.setBindGroup(2, this.frameBindGroup, [256 * JV.frameIndex]);
-           for (const YV of JV.pipelines) YV !== xV && (VV.setPipeline(YV), xV = YV), VV.draw(4, JV.count), eV++
+     }
+     const XB = "9.23.0";
+ 
+     function GB(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         LH = HH;
+       if ("object" !== typeof BH) {
+         BH = {
+           name: BH
```

#### 58. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8170-L8174` → after: `L708-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L708-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L708-L722) · [Before (L8170-L8174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8170-L8174)

```diff
-       bindTarget(VV) {
-         this.target = VV;
-         const eV = `${VV._colorFormat}|${VV._depthStencilFormat}|${VV._depthCompare}|${VV._sampleCount}`;
-         let xV = this.pipelines.get(eV);
-         xV || (xV = new Map, this.pipelines.set(eV, xV)), this.targetPipelines = xV
+       const rH = Object.assign({
+           name: pH,
+           automaticDataCollectionEnabled: !1
+         }, BH),
+         hH = rH.name;
+       if ("string" !== typeof hH || !hH) throw CB.create("bad-app-name", {
+         appName: String(hH)
+       });
+       if (LH || (LH = (0, SH.J)()), !LH) throw CB.create("no-options");
+       const tH = HB.get(hH);
+       if (tH) {
+         if ((0, SH.D)(LH, tH.options) && (0, SH.D)(rH, tH.config)) return tH;
+         throw CB.create("duplicate-app", {
+           appName: hH
+         })
```

#### 59. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8176-L8218` → after: `L724-L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L724-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L724-L756) · [Before (L8176-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8176-L8218)

```diff
-       pipelineFor(VV) {
-         var eV;
-         const xV = this.targetPipelines,
-           JV = xV.get(VV);
-         if (void 0 !== JV) return JV;
-         xV.set(VV, null);
-         const YV = this.target,
-           UV = VV === KV.e,
-           yV = null !== (eV = YV._depthCompare) && void 0 !== eV ? eV : Ae,
-           {
-             device: pV
-           } = this;
-         return pV.createRenderPipelineAsync({
-           label: `particles-${VV}`,
-           layout: this.pipelineLayout,
-           vertex: {
- ... (27 more removed lines; see GitHub link above)
+       const zH = new AH.c(hH);
+       for (const AH of BB.values()) zH.yR(AH);
+       const CH = new EB(LH, rH, zH);
+       return HB.set(hH, CH), CH
+     }
+ 
+     function YB() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pH;
+       const BH = HB.get(HH);
+       if (!BH && HH === pH && (0, SH.J)()) return GB();
+       if (!BH) throw CB.create("no-app", {
+         appName: HH
+       });
+       return BH
+     }
+ 
+ ... (17 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8220-L8226` → after: `L758-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L758-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L758-L811) · [Before (L8220-L8226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8220-L8226)

```diff
-       allocateFrameIndex() {
-         const VV = this.freeFrameIndices.pop();
-         if (void 0 !== VV) return VV;
-         const eV = this.nextFrameIndex++;
-         if (64 * (eV + 1) > this.frameData.length) {
-           const VV = new Float32Array(2 * this.frameData.length);
-           VV.set(this.frameData), this.frameData = VV, this.frameBits = new Uint32Array(VV.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
+       rB(new AH.f(`${SH}-version`, (() => ({
+         library: SH,
+         version: BH
+       })), "VERSION"))
+     }
+ 
+     function MB(HH, BH) {
+       if (null !== HH && "function" !== typeof HH) throw CB.create("invalid-log-argument");
+       (0, rH.k)(HH, BH)
+     }
+ 
+     function xB(HH) {
+       (0, rH.j)(HH)
+     }
+     const vB = "firebase-heartbeat-store";
+     let PB = null;
+ ... (38 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8230-L8235` → after: `L814-L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L814-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L814-L823) · [Before (L8230-L8235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8230-L8235)

```diff
-       createFrameBuffer() {
-         return this.device.createBuffer({
-           label: "particles-frames",
-           size: this.frameData.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
+     }
+ 
+     function VB(HH) {
+       return `${HH.name}!${HH.options.appId}`
+     }
+     class OB {
+       constructor(HH) {
+         this.container = HH, this._heartbeatsCache = null;
+         const BH = this.container.getProvider("app").getImmediate();
+         this.WQ = new kB(BH), this._heartbeatsCachePromise = this.WQ.read().then((HH => (this._heartbeatsCache = HH, HH)))
```

#### 62. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8237-L8245` → after: `L825-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L825-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L825-L860) · [Before (L8237-L8245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8237-L8245)

```diff
-       createFrameBindGroup() {
-         return this.device.createBindGroup({
-           label: "particles-frames",
-           layout: this.frameLayout,
-           entries: [{
-             binding: 0,
-             resource: {
-               buffer: this.frameBuffer,
-               size: 32
+       async triggerHeartbeat() {
+         const HH = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           BH = bB();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== BH && !this._heartbeatsCache.heartbeats.some((HH => HH.date === BH))) return this._heartbeatsCache.heartbeats.push({
+           date: BH,
+           agent: HH
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((HH => {
+           const BH = new Date(HH.date).valueOf();
+           return Date.now() - BH <= 2592e6
+         })), this.WQ.overwrite(this._heartbeatsCache)
+       }
+       async getHeartbeatsHeader() {
+         if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null === this._heartbeatsCache || 0 === this._heartbeatsCache.heartbeats.length) return "";
+         const HH = bB(),
+           {
+             heartbeatsToSend: BH,
+ ... (20 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8247-L8248` → after: `L862-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L862-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L862-L871) · [Before (L8247-L8248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8247-L8248)

```diff
-           }]
-         })
+             return {
+               heartbeatsToSend: LH,
+               unsentEntries: AH
+             }
+           }(this._heartbeatsCache.heartbeats),
+           AH = (0, SH.s)(JSON.stringify({
+             version: 2,
+             heartbeats: BH
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = HH, LH.length > 0 ? (this._heartbeatsCache.heartbeats = LH, await this.WQ.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.WQ.overwrite(this._heartbeatsCache)), AH
```

#### 64. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8252-L8275` → after: `L879-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L879-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L879-L880) · [Before (L8252-L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8252-L8275)

```diff
-       constructor(VV, eV, xV, JV, YV) {
-         this.lite = VV, this.canvas = eV, this.info = xV, this.resources = YV, this.zYV = !1, this.needPOTTextures = !1, this.AVV = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
-           reset: () => {
-             this.lastFrameTime = null
-           }
-         }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = eV.width, this.renderHeight = eV.height, this.caps = {
-           maxTextureSize: JV.maxTextureDimension2D,
-           texture2DArrayMaxLayerCount: JV.maxTextureArrayLayers
-         }
-       }
-       getCaps() {
-         return this.caps
-       }
-       detach() {
-         this.lite = null
-       }
- ... (8 more removed lines; see GitHub link above)
+       constructor(HH) {
+         this.app = HH, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 65. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8277-L8278` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L882-L883) · [Before (L8277-L8278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8277-L8278)

```diff
-       getHardwareScalingLevel() {
-         return 1
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, SH.db)() && (0, SH.qb)().then((() => !0)).catch((() => !1))
```

#### 66. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8280-L8291` → after: `L885-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L885-L887) · [Before (L8280-L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8280-L8291)

```diff
-       setSize(VV, eV) {
-         if (this.renderWidth === VV && this.renderHeight === eV) return !1;
-         const xV = this.renderWidth,
-           JV = this.renderHeight;
-         this.renderWidth = VV, this.renderHeight = eV;
-         const YV = this.lite;
-         if (null === YV) return !0;
-         try {
-           (0, hV.m)(YV, VV, eV)
-         } catch (UV) {
-           if (UV instanceof DOMException && "InvalidStateError" === UV.name) {
-             this.renderWidth = xV, this.renderHeight = JV;
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(HH) {
```

#### 67. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8293-L8295` → after: `L889-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L889-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L889-L898) · [Before (L8293-L8295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8293-L8295)

```diff
-               (0, hV.m)(YV, xV, JV)
-             } catch {
-               this.canvas.width = xV, this.canvas.height = JV
+               const BH = await TB();
+               return await BH.transaction(vB).objectStore(vB).get(VB(HH))
+             } catch (BH) {
+               if (BH instanceof SH.j) bH.warn(BH.message);
+               else {
+                 const HH = CB.create("idb-get", {
+                   originalErrorMessage: null === BH || void 0 === BH ? void 0 : BH.message
+                 });
+                 bH.warn(HH.message)
+               }
```

#### 68. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8297` → after: `L900-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L900-L901) · [Before (L8297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8297)

```diff
-             return console.warn("WebGPU could not allocate render targets for resize", VV, eV, UV.message), !1
+           }(this.app) || {
+             heartbeats: []
```

#### 69. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8301-L8319` → after: `L904-L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L904-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L904-L906) · [Before (L8301-L8319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8301-L8319)

```diff
-         return !0
-       }
-       resize() {}
-       getRenderingCanvas() {
-         return this.canvas
-       }
-       getInfo() {
-         return this.info
-       }
-       pT() {
-         const VV = performance.now();
-         this.deltaTime = null === this.lastFrameTime ? 0 : VV - this.lastFrameTime, this.lastFrameTime = VV
-       }
-       getDeltaTime() {
-         return this.deltaTime
-       }
- ... (3 more removed lines; see GitHub link above)
+         return {
+           heartbeats: []
+         }
```

#### 70. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8321` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L908) · [Before (L8321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8321)

```diff
-       MVV(VV, eV) {
+       async overwrite(HH) {
```

#### 71. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8323` → after: `L910-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L910-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L910-L916) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8323)

```diff
-         return null !== (xV = this.resources.MVV.get(VV)) && void 0 !== xV ? xV : new ve(this.resources, VV, eV)
+         if (await this._canUseIndexedDBPromise) {
+           const LH = await this.read();
+           return UB(this.app, {
+             lastSentHeartbeatDate: null !== (BH = HH.lastSentHeartbeatDate) && void 0 !== BH ? BH : LH.lastSentHeartbeatDate,
+             heartbeats: HH.heartbeats
+           })
+         }
```

#### 72. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8325-L8326` → after: `L918-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L918-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L918-L926) · [Before (L8325-L8326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8325-L8326)

```diff
-       atlasArrays(VV) {
-         return this.resources.atlasArrays(VV)
+       async add(HH) {
+         var BH;
+         if (await this._canUseIndexedDBPromise) {
+           const LH = await this.read();
+           return UB(this.app, {
+             lastSentHeartbeatDate: null !== (BH = HH.lastSentHeartbeatDate) && void 0 !== BH ? BH : LH.lastSentHeartbeatDate,
+             heartbeats: [...LH.heartbeats, ...HH.heartbeats]
+           })
+         }
```

#### 73. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8329-L8338` → after: `L929-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L929-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L929-L934) · [Before (L8329-L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8329-L8338)

```diff
-     class RQ {
-       constructor() {
-         this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
-       }
-       copyFromView(VV) {
-         this.fov = VV.fov, this.nearPlane = VV.near, this.farPlane = VV.far;
-         const eV = VV.worldMatrix;
-         for (let xV = 0; xV < 16; xV++)
-           if (this.worldMatrix[xV] !== eV[xV]) return this.worldMatrix.set(eV), void this.worldMatrixVersion++
-       }
+ 
+     function mB(HH) {
+       return (0, SH.s)(JSON.stringify({
+         version: 2,
+         heartbeats: HH
+       })).length
```

#### 74. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8341-L8355` → after: `L946-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L946-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L946-L947) · [Before (L8341-L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8341-L8355)

```diff
-       constructor(VV, eV, xV, JV) {
-         this.canvas = eV, this.options = xV, this.ZJV = void 0, this.backendName = "WebGPU (Lite)", this.uVV = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new RQ, this.lastFrameTime = 0, this.engine = void 0, this.yE = void 0 … [truncated]
-         const {
-           resources: YV,
-           meshes: UV
-         } = VV;
-         this.resources = YV, this.particles = VV.particles, this.ZJV = new WQ(VV.engine, eV, JV, VV.device.limits, YV), (0, MV.E)({
-           hn: VV => {
-             RV(VV) && YV.textureSlot(VV)
-           },
-           loaded: VV => RV(VV) ? YV.textureLoaded(VV) : null,
-           canvasUpdated: (VV, eV, xV) => {
-             RV(VV) && YV.canvasUpdated(VV, eV, xV)
-           }
-         }), this.uVV = UV.uVV, this.modelMeshes = UV.modelMeshes
+       constructor(HH, BH, LH) {
+         this.name = HH, this.instanceFactory = BH, this.type = LH, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 75. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8357-L8358` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L949-L950) · [Before (L8357-L8358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8357-L8358)

```diff
-       get gpuDevice() {
-         return this.device
+       setInstantiationMode(HH) {
+         return this.instantiationMode = HH, this
```

#### 76. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8360-L8361` → after: `L952-L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L952-L953) · [Before (L8360-L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8360-L8361)

```diff
-       get deviceLost() {
-         return this.refusals.deviceLost
+       setMultipleInstances(HH) {
+         return this.multipleInstances = HH, this
```

#### 77. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8363-L8364` → after: `L955-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L955-L956) · [Before (L8363-L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8363-L8364)

```diff
-       get terrain() {
-         return this.liteTerrain
+       setServiceProps(HH) {
+         return this.serviceProps = HH, this
```

#### 78. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8366-L8372` → after: `L958-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L958-L959) · [Before (L8366-L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8366-L8372)

```diff
-       install(VV) {
-         this.engine = VV.engine, this.yE = VV.yE, this.sceneTask = VV.sceneTask, this.device = VV.device, this.liteTerrain = VV.terrain, this.meshes = VV.meshes, this.sunShadow = VV.sunShadow;
-         const eV = new fV(VV.device.lost);
-         this.refusals = eV, eV.deviceLost.then((() => {
-           var eV;
-           eV = VV.device, Qe.add(eV)
-         })), VV.yE.camera = this.camera
+       setInstanceCreatedCallback(HH) {
+         return this.onInstanceCreated = HH, this
```

#### 79. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8374-L8381` → after: `L961-L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L961-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L961-L986) · [Before (L8374-L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8374-L8381)

```diff
-       async rebuild() {
-         var VV, eV, xV, JV, YV;
-         const UV = await aQ();
-         this.halted = !0, this.liteTerrain.retire(), null === (VV = this.sunShadow) || void 0 === VV || VV.dispose(), this.ZJV.detach();
-         try {
-           (0, lV.d)(this.engine)
-         } catch (wV) {
-           console.warn("Lite: disposing the lost device's engine threw", wV)
+     }
+     const SH = "[DEFAULT]";
+     class hH {
+       constructor(HH, BH) {
+         this.name = HH, this.container = BH, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
+       }
+       get(HH) {
+         const BH = this.normalizeInstanceIdentifier(HH);
+         if (!this.instancesDeferred.has(BH)) {
+           const HH = new AH.e;
+           if (this.instancesDeferred.set(BH, HH), this.isInitialized(BH) || this.shouldAutoInitialize()) try {
+             const LH = this.getOrInitializeService({
+               instanceIdentifier: BH
+             });
+             LH && HH.resolve(LH)
+           } catch (LH) {}
+ ... (10 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8391-L8406` → after: `L989-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L989-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L989-L991) · [Before (L8391-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8391-L8406)

```diff
-           this.resources.rebind(pV, QV), this.particles.rebind(QV), this.uVV.dropSteady();
-           const VV = {
-               resources: this.resources,
-               particles: this.particles,
-               uVV: this.uVV,
-               modelMeshes: this.modelMeshes
-             },
-             eV = await hQ(pV, QV, this.options, VV),
-             xV = nV();
-           if (null !== xV) throw new Error(`WebGPU device lost while Lite was rebuilding (${xV.reason}): ${xV.message}`);
-           const {
-             r: JV,
-             g: YV,
-             b: UV
-           } = this.yE.clearColor;
-           this.install(eV), this.setClearColour(JV, YV, UV), this.ZJV.rebind(pV)
+           return this.getOrInitializeService({
+             instanceIdentifier: LH
+           })
```

#### 81. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8408-L8411` → after: `L993-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L993-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L993-L994) · [Before (L8408-L8411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8408-L8411)

```diff
-           throw QV.destroy(), wV
-         }
-         return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (eV = this.gZ) || void 0 === eV || eV.resize(), null === (xV = this.gZ) || void 0 === xV || null === (JV = xV.iv) || void 0 === JV || null === (YV = JV.wT) || void 0 === YV || YV.remeshForRen … [truncated]
-           terrainDrawn: this.whenTerrainDrawn()
+           if (AH) return null;
+           throw rH
```

#### 82. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8414-L8418` → after: `L997-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L997-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L997-L1018) · [Before (L8414-L8418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8414-L8418)

```diff
-       whenTerrainDrawn() {
-         return new Promise(((VV, eV) => {
-           this.firstTerrain = {
-             drawn: VV,
-             failed: eV
+       getComponent() {
+         return this.component
+       }
+       setComponent(HH) {
+         if (HH.name !== this.name) throw Error(`Mismatching Component ${HH.name} for Provider ${this.name}.`);
+         if (this.component) throw Error(`Component for ${this.name} has already been provided`);
+         if (this.component = HH, this.shouldAutoInitialize()) {
+           if (function(HH) {
+               return "EAGER" === HH.instantiationMode
+             }(HH)) try {
+             this.getOrInitializeService({
+               instanceIdentifier: SH
+             })
+           } catch (BH) {}
+           for (const [HH, LH] of this.instancesDeferred.entries()) {
+             const AH = this.normalizeInstanceIdentifier(HH);
+ ... (6 more added lines; see GitHub link above)
```

#### 83. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8420` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1020) · [Before (L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8420)

```diff
-         }))
+         }
```

#### 84. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8422-L8424` → after: `L1022-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1022-L1024) · [Before (L8422-L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8422-L8424)

```diff
-       get castsEntitySunShadows() {
-         var VV, eV;
-         return null !== (VV = null === (eV = this.sunShadow) || void 0 === eV ? void 0 : eV.tracesEntities) && void 0 !== VV && VV
+       clearInstance() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SH;
+         this.instancesDeferred.delete(HH), this.instancesOptions.delete(HH), this.instances.delete(HH)
```

#### 85. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8426-L8427` → after: `L1026-L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1026-L1028) · [Before (L8426-L8427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8426-L8427)

```diff
-       get sampleCount() {
-         return this.engine.msaaSamples
+       async delete() {
+         const HH = Array.from(this.instances.values());
+         await Promise.all([...HH.filter((HH => "INTERNAL" in HH)).map((HH => HH.INTERNAL.delete())), ...HH.filter((HH => "_delete" in HH)).map((HH => HH._delete()))])
```

#### 86. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8429-L8434` → after: `L1030-L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1030-L1031) · [Before (L8429-L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8429-L8434)

```diff
-       attach(VV) {
-         this.gZ = VV, this.modelMeshes.attach(VV.model, VV.sceneMirror);
-         const eV = VV.yE;
-         this.setClearColour(eV.clearColor.r, eV.clearColor.g, eV.clearColor.b), eV.draw = () => {
-           this.drawFrame(VV, eV)
-         }
+       isComponentSet() {
+         return null != this.component
```

#### 87. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8436-L8437` → after: `L1033-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1033-L1035) · [Before (L8436-L8437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8436-L8437)

```diff
-       get zZ() {
-         return !this.refusals.lost && !this.halted
+       isInitialized() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SH;
+         return this.instances.has(HH)
```

#### 88. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8439-L8446` → after: `L1037-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1037-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1037-L1053) · [Before (L8439-L8446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8439-L8446)

```diff
-       render(VV) {
-         if (this.zZ) {
-           try {
-             this.ZJV.pT(), VV.yE.render()
-           } catch (eV) {
-             throw this.refusals.frameFailed(eV), this.firstTerrain && this.trialFrames > 0 && (this.halted = !0, this.firstTerrain.failed(eV), this.firstTerrain = null), eV
-           }
-           this.refusals.frameDrawn(), this.trialFrames > 0 && this.trialFrames--
+       getOptions() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SH;
+         return this.instancesOptions.get(HH) || {}
+       }
+       initialize() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         const {
+           options: BH = {}
+         } = HH, LH = this.normalizeInstanceIdentifier(HH.instanceIdentifier);
+         if (this.isInitialized(LH)) throw Error(`${this.name}(${LH}) has already been initialized`);
+         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
+         const AH = this.getOrInitializeService({
+           instanceIdentifier: LH,
+           options: BH
+         });
+         for (const [rH, SH] of this.instancesDeferred.entries()) {
+ ... (1 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8449-L8450` → after: `L1057-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1057-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1057-L1065) · [Before (L8449-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8449-L8450)

```diff
-       lastFrameDrawCalls() {
-         return this.engine.drawCallCount
+       KX(HH, BH) {
+         var LH;
+         const AH = this.normalizeInstanceIdentifier(BH),
+           rH = null !== (LH = this.onInitCallbacks.get(AH)) && void 0 !== LH ? LH : new Set;
+         rH.add(HH), this.onInitCallbacks.set(AH, rH);
+         const SH = this.instances.get(AH);
+         return SH && HH(SH, AH), () => {
+           rH.delete(HH)
+         }
```

#### 90. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8452-L8460` → after: `L1067-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1067-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1067-L1072) · [Before (L8452-L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8452-L8460)

```diff
-       describePendingWork() {
-         var VV, eV, xV, JV;
-         const YV = [...this.particles.describePendingWork(), ...null !== (VV = null === (eV = this.sunShadow) || void 0 === eV ? void 0 : eV.describePendingWork()) && void 0 !== VV ? VV : []],
-           UV = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (xV = this.terrain.sceneDepth) && void 0 !== xV && xV.compiling ? 1 : 0) + (null !== (JV = this.terrain.shadowMask) && void 0 !== JV && JV.compiling ? 1 : 0);
-         UV > 0 && YV.push(`${UV} Lite pipelines compiling`);
-         const yV = this.terrain.buffersAwaitingVerdict;
-         yV > 0 && YV.push(`${yV} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const pV = this.resources.texturesLoading;
-         return pV > 0 && YV.push(`${pV} Lite textures loading`), YV
+       invokeOnInitCallbacks(HH, BH) {
+         const LH = this.onInitCallbacks.get(BH);
+         if (LH)
+           for (const rH of LH) try {
+             rH(HH, BH)
+           } catch (AH) {}
```

#### 91. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8462-L8463` → after: `L1074-L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1074-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1074-L1086) · [Before (L8462-L8463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8462-L8463)

```diff
-       prepareTexture(VV) {
-         return null !== this.resources.boundTexture(VV) || this.resources.textureFailed(VV)
+       getOrInitializeService(HH) {
+         let {
+           instanceIdentifier: BH,
+           options: LH = {}
+         } = HH, AH = this.instances.get(BH);
+         if (!AH && this.component && (AH = this.component.instanceFactory(this.container, {
+             instanceIdentifier: (rH = BH, rH === SH ? void 0 : rH),
+             options: LH
+           }), this.instances.set(BH, AH), this.instancesOptions.set(BH, LH), this.invokeOnInitCallbacks(AH, BH), this.component.onInstanceCreated)) try {
+           this.component.onInstanceCreated(this.container, BH, AH)
+         } catch (hH) {}
+         var rH;
+         return AH || null
```

#### 92. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8465-L8476` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1088-L1090) · [Before (L8465-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8465-L8476)

```diff
-       drawFrame(VV, eV) {
-         var xV, JV, YV, UV, yV, pV;
-         const QV = Ep(VV);
-         this.camera.copyFromView(QV), this.setClearColour(QV.clearColour[0], QV.clearColour[1], QV.clearColour[2]), null === (xV = this.sunShadow) || void 0 === xV || xV.prepare(VV.iv, QV.eye, null !== (JV = VV.iv.Xk) && void 0 !== JV ? JV : null), this.terrain.prepare(VV, QV), n … [truncated]
-         const nV = performance.now();
-         this.resources.flushUploads(), null === (pV = this.sunShadow) || void 0 === pV || pV.traceEntities(this.meshes);
-         try {
-           (0, hV.l)(this.engine, this.lastFrameTime > 0 ? nV - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = nV, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(nV), this.firstTerrain = null)
+       normalizeInstanceIdentifier() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SH;
+         return this.component ? this.component.multipleInstances ? HH : SH : HH
```

#### 93. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8478-L8480` → after: `L1092-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1092-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1092-L1093) · [Before (L8478-L8480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8478-L8480)

```diff
-       setClearColour(VV, eV, xV) {
-         const JV = this.yE.clearColor;
-         JV.r = VV, JV.g = eV, JV.b = xV, JV.a = 1
+       shouldAutoInitialize() {
+         return !!this.component && "EXPLICIT" !== this.component.instantiationMode
```

#### 94. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8483-L8488` → after: `L1096-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1096-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1096-L1098) · [Before (L8483-L8488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8483-L8488)

```diff
- 
-     function DQ(VV) {
-       const eV = {};
-       for (const xV in VV.limits) {
-         const JV = VV.limits[xV];
-         "number" === typeof JV && (eV[xV] = JV)
+     class tH {
+       constructor(HH) {
+         this.name = HH, this.providers = new Map
```

#### 95. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8490-L8519` → after: `L1100-L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1100-L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1100-L1103) · [Before (L8490-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8490-L8519)

```diff
-       return eV
-     }
-     const iQ = "WebGPU device lost while Lite was starting";
-     async function CQ(VV, eV) {
-       const xV = await aQ(),
-         JV = xV.info,
-         YV = {
-           vendor: (null === JV || void 0 === JV ? void 0 : JV.vendor) || "unknown vendor",
-           renderer: (null === JV || void 0 === JV ? void 0 : JV.architecture) || "unknown renderer",
-           version: (null === JV || void 0 === JV ? void 0 : JV.description) || "unknown version"
-         };
-       VV.style.background = "black";
-       const UV = await oQ(VV, eV, eV.bufferSize, xV),
-         yV = te(UV),
-         pV = cQ(yV);
-       try {
- ... (14 more removed lines; see GitHub link above)
+       yR(HH) {
+         const BH = this.getProvider(HH.name);
+         if (BH.isComponentSet()) throw new Error(`Component ${HH.name} has already been registered with ${this.name}`);
+         BH.setComponent(HH)
```

#### 96. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8521-L8538` → after: `L1105-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1105-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1105-L1106) · [Before (L8521-L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8521-L8538)

```diff
-     }
-     async function aQ() {
-       const VV = await navigator.gpu.requestAdapter({
-         powerPreference: "high-performance"
-       });
-       if (!VV) throw (0, Vp.d)(new Error("No WebGPU adapter"), "no_adapter");
-       return VV
-     }
-     async function oQ(VV, eV, xV, JV) {
-       let YV;
-       try {
-         YV = await (0, hV.e)(VV, {
-           msaaSamples: eV.fJV ? 4 : 1,
-           requiredLimits: DQ(JV),
-           alphaMode: "premultiplied"
-         })
- ... (2 more removed lines; see GitHub link above)
+       addOrOverwriteComponent(HH) {
+         this.getProvider(HH.name).isComponentSet() && this.providers.delete(HH.name), this.yR(HH)
```

#### 97. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8540-L8586` → after: `L1108-L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1108-L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1108-L1114) · [Before (L8540-L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8540-L8586)

```diff
-       var UV;
-       return null !== xV && (0, hV.m)(YV, xV.width, xV.height), YV
-     }
- 
-     function cQ(VV) {
-       let eV = null;
-       return VV.lost.then((VV => {
-         eV = VV, console.error(`WebGPU device lost (${VV.reason}): ${VV.message}`)
-       })), () => eV
-     }
-     async function hQ(VV, eV, xV, JV) {
-       var YV, UV;
-       let {
-         sceneDepth: yV,
-         sunShadow: pV
-       } = xV;
- ... (31 more removed lines; see GitHub link above)
+       getProvider(HH) {
+         if (this.providers.has(HH)) return this.providers.get(HH);
+         const BH = new hH(HH, this);
+         return this.providers.set(HH, BH), BH
+       }
+       getProviders() {
+         return Array.from(this.providers.values())
```

#### 98. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8590` → after: `L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1118) · [Before (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8590)

```diff
-   41983: (VV, eV, xV) => {
+   41836: (HH, BH, LH) => {
```

#### 99. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8598-L8603` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1123) · [Before (L8598-L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8598-L8603)

```diff
-       n: () => EV,
-       o: () => UV,
-       r: () => pV,
-       u: () => QV,
-       y: () => yV,
-       z: () => bV
+       k: () => XH
```

#### 100. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8605-L8608` → after: `L1125-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1125-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1125-L1138) · [Before (L8605-L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8605-L8608)

```diff
-     const JV = 3,
-       YV = 0,
-       UV = 1,
-       yV = 2,
+     const AH = [];
+     var rH;
+     ! function(HH) {
+       HH[HH.DEBUG = 0] = "DEBUG", HH[HH.VERBOSE = 1] = "VERBOSE", HH[HH.INFO = 2] = "INFO", HH[HH.WARN = 3] = "WARN", HH[HH.ERROR = 4] = "ERROR", HH[HH.SILENT = 5] = "SILENT"
+     }(rH || (rH = {}));
+     const SH = {
+         debug: rH.DEBUG,
+         verbose: rH.VERBOSE,
+         info: rH.INFO,
+         warn: rH.WARN,
+         error: rH.ERROR,
+         silent: rH.SILENT
+       },
+       hH = rH.INFO,
```

#### 101. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8610-L8616` → after: `L1140-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1140-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1140-L1144) · [Before (L8610-L8616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8610-L8616)

```diff
-         uniform: 3,
-         Ur: 4,
-         special: 5,
-         volume: 6,
-         sampler: 7,
-         entities: 8,
-         entityGrids: 9
+         [rH.DEBUG]: "log",
+         [rH.VERBOSE]: "log",
+         [rH.INFO]: "info",
+         [rH.WARN]: "warn",
+         [rH.ERROR]: "error"
```

#### 102. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8618-L8663` → after: `L1146-L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1146-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1146-L1200) · [Before (L8618-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8618-L8663)

```diff
-       QV = 10,
-       nV = "BloxdPackInputs",
-       wV = "bloxdPackInputs",
-       ZV = [{
-         name: "seconds",
-         type: "f32",
-         offset: 0
-       }, {
-         name: "lit",
-         type: "u32",
-         offset: 4
-       }, {
-         name: "renderOffset",
-         type: "vec3i",
-         offset: 16
-       }, {
- ... (30 more removed lines; see GitHub link above)
+       zH = function(HH, BH) {
+         if (BH < HH.logLevel) return;
+         const LH = (new Date).toISOString(),
+           AH = tH[BH];
+         if (!AH) throw new Error(`Attempted to log a message with an invalid logType (value: ${BH})`);
+         for (var rH = arguments.length, SH = new Array(rH > 2 ? rH - 2 : 0), hH = 2; hH < rH; hH++) SH[hH - 2] = arguments[hH];
+         console[AH](`[${LH}]  ${HH.name}:`, ...SH)
+       };
+     class CH {
+       constructor(HH) {
+         this.name = HH, this._logLevel = hH, this._logHandler = zH, this._userLogHandler = null, AH.push(this)
+       }
+       get logLevel() {
+         return this._logLevel
+       }
+       set logLevel(HH) {
+ ... (39 more added lines; see GitHub link above)
```

#### 103. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8667-L8674` → after: `L1204-L1206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1204-L1206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1204-L1206) · [Before (L8667-L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8667-L8674)

```diff
-       const eV = new Uint32Array(Math.max(1, VV.length));
-       return VV.forEach(((VV, xV) => {
-         let {
-           id: JV,
-           rotation: YV
-         } = VV;
-         eV[xV] = 65535 & JV | (3 & YV) << 16
-       })), eV
+       AH.forEach((BH => {
+         BH.setLogLevel(HH)
+       }))
```

#### 104. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8676-L8679` → after: `L1208-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L1208-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/297.js#L1208-L1232) · [Before (L8676-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/297.js#L8676-L8679)

```diff
-     const EV = {
-       off: 0,
-       strict: 1,
-       allow: 2
+ 
+     function XH(HH, BH) {
+       for (const LH of AH) {
+         let AH = null;
+         BH && BH.level && (AH = SH[BH.level]), LH.userLogHandler = null === HH ? null : function(BH, LH) {
+           for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
+           const zH = hH.map((HH => {
+             if (null == HH) return null;
+             if ("string" === typeof HH) return HH;
+             if ("number" === typeof HH || "boolean" === typeof HH) return HH.toString();
+             if (HH instanceof Error) return HH.message;
+             try {
+               return JSON.stringify(HH)
+             } catch (BH) {
+               return null
+             }
+ ... (9 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 1. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L8` → after: `L5-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L5-L18) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L4-L8)

```diff
-   42203: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => yV,
-       e: () => UV,
-       h: () => pV
+   41842: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       getAnalytics: () => dB,
+       getGoogleAnalyticsClientId: () => iB,
+       initializeAnalytics: () => aB,
+       isSupported: () => sB,
+       logEvent: () => LL,
+       setAnalyticsCollectionEnabled: () => HL,
+       setConsent: () => AL,
+       setCurrentScreen: () => JB,
+       setDefaultEventParameters: () => BL,
+       setUserId: () => pB,
+       setUserProperties: () => yB,
+       settings: () => wB
```

#### 2. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L10-L11` → after: `L20-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L20-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L20-L102) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L10-L11)

```diff
-     let JV = null,
-       YV = null;
+     var AH = LH(41817),
+       rH = LH(41836),
+       SH = LH(41831),
+       hH = LH(41822);
+     let tH, zH;
+     const CH = new WeakMap,
+       EH = new WeakMap,
+       XH = new WeakMap,
+       GH = new WeakMap,
+       YH = new WeakMap;
+     let uH = {
+       get(HH, BH, LH) {
+         if (HH instanceof IDBTransaction) {
+           if ("done" === BH) return EH.get(HH);
+           if ("objectStoreNames" === BH) return HH.objectStoreNames || XH.get(HH);
+           if ("store" === BH) return LH.objectStoreNames[1] ? void 0 : LH.objectStore(LH.objectStoreNames[0])
+ ... (67 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L14-L17` → after: `L105-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L105-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L105-L200) · [Before (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L14-L17)

```diff
-       return JV = VV, YV = null, pV(eV), () => {
-         JV === VV && (JV = null, YV = null)
-       }
-     }
+       if (!(HH instanceof IDBDatabase) || BH in HH || "string" !== typeof BH) return;
+       if (TH.get(BH)) return TH.get(BH);
+       const LH = BH.replace(/FromIndex$/, ""),
+         AH = BH !== LH,
+         rH = PH.includes(LH);
+       if (!(LH in (AH ? IDBIndex : IDBObjectStore).prototype) || !rH && !vH.includes(LH)) return;
+       const SH = async function(HH) {
+         const BH = this.transaction(HH, rH ? "readwrite" : "readonly");
+         let SH = BH.store;
+         for (var hH = arguments.length, tH = new Array(hH > 1 ? hH - 1 : 0), zH = 1; zH < hH; zH++) tH[zH - 1] = arguments[zH];
+         return AH && (SH = SH.index(tH.shift())), (await Promise.all([SH[LH](...tH), rH && BH.done]))[0]
+       };
+       return TH.set(BH, SH), SH
+     }
+     uH = (HH => ({
+       ...HH,
+ ... (80 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L20-L25` → after: `L203-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L203-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L203-L734) · [Before (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L20-L25)

```diff
-       return null === YV ? null : {
-         ...YV
-       }
-     }
- 
-     function pV(VV) {
+       try {
+         const HH = new Uint8Array(17);
+         (self.crypto || self.msCrypto).getRandomValues(HH), HH[0] = 112 + HH[0] % 16;
+         const BH = function(HH) {
+           const BH = (LH = HH, btoa(String.fromCharCode(...LH)).replace(/\+/g, "-").replace(/\//g, "_"));
+           var LH;
+           return BH.substr(0, 22)
+         }(HH);
+         return jH.test(BH) ? BH : ""
+       } catch (HH) {
+         return ""
+       }
+     }
+ 
+     function FH(HH) {
+       return `${HH.appName}!${HH.appId}`
+ ... (516 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L27-L28` → after: `L736-L933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L736-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L736-L933) · [Before (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L27-L28)

```diff
-       null !== (eV = JV) && void 0 !== eV && eV(VV) && (YV = {
-         ...VV
+       const {
+         appId: zH,
+         measurementId: CH
+       } = HH;
+       try {
+         await
+         function(HH, BH) {
+           return new Promise(((LH, AH) => {
+             const rH = Math.max(BH - Date.now(), 0),
+               SH = setTimeout(LH, rH);
+             HH.addEventListener((() => {
+               clearTimeout(SH), AH(vB.create("fetch-throttle", {
+                 throttleEndTimeMillis: BH
+               }))
+             }))
+           }))
+ ... (182 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L31-L37` → after: `L936-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L936-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L936-L993) · [Before (L31-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L31-L37)

```diff
-   },
-   42217: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => YV,
-       f: () => UV
-     });
-     let JV = null;
+     async function sB() {
+       if ((0, SH.V)()) return !1;
+       if (!(0, SH.n)()) return !1;
+       if (!(0, SH.db)()) return !1;
+       try {
+         return await (0, SH.qb)()
+       } catch (HH) {
+         return !1
+       }
+     }
+ 
+     function JB(HH, BH, LH) {
+       HH = (0, SH.P)(HH), async function(HH, BH, LH, AH) {
+         if (AH && AH.global) return HH("set", {
+           screen_name: LH
+         }), Promise.resolve();
+ ... (42 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L40-L68` → after: `L996-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L996-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/298.js#L996-L1039) · [Before (L40-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/298.js#L40-L68)

```diff
-       JV = {
-         conn: VV,
-         reason: eV
-       }
-     }
- 
-     function UV(VV) {
-       var eV;
-       const xV = (null === (eV = JV) || void 0 === eV ? void 0 : eV.conn) === VV ? JV.reason : null;
-       return JV = null, xV
-     }
-   },
-   42297: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => UV,
-       d: () => YV
- ... (13 more removed lines; see GitHub link above)
+       HH = (0, SH.P)(HH), async function(HH, BH) {
+         const LH = await HH;
+         window[`ga-disable-${LH}`] = !BH
+       }(qB[HH.app.options.appId], BH).catch((HH => MB.error(HH)))
+     }
+ 
+     function BL(HH) {
+       jB ? jB("set", HH) : KB(HH)
+     }
+ 
+     function LL(HH, BH, LH, AH) {
+       HH = (0, SH.P)(HH), async function(HH, BH, LH, AH, rH) {
+         if (rH && rH.global) HH("event", LH, AH);
+         else {
+           const rH = await BH;
+           HH("event", LH, Object.assign(Object.assign({}, AH), {
+ ... (28 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4-L20` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/299.js#L5-L4026) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/299.js#L4-L20)

```diff
-   42371: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       gamePackSource: () => UV
-     });
-     var JV = xV(5486),
-       YV = xV(1603);
- 
-     function UV(VV) {
-       return {
-         packKey: async eV => (await YV.b.getGame(VV, eV, !0)).customTexturePackKey,
-         fetchPack: JV.d
-       }
-     }
-   }
- };
- Object.freeze(modules);
- ... (1 more removed lines; see GitHub link above)
+     41847: (HH, BH, LH) => {
+         LH.r(BH), LH.d(BH, {
+           ActionCodeOperation: () => GH,
+           ActionCodeURL: () => iB,
+           AuthCredential: () => NB,
+           AuthErrorCodes: () => MH,
+           EmailAuthCredential: () => ZB,
+           EmailAuthProvider: () => yB,
+           FacebookAuthProvider: () => AL,
+           FactorId: () => zH,
+           GithubAuthProvider: () => SL,
+           GoogleAuthProvider: () => rL,
+           OAuthCredential: () => aB,
+           OAuthProvider: () => LL,
+           OperationType: () => XH,
+           PhoneAuthCredential: () => JB,
+ ... (4006 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/300.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/300.js#L2)

```diff
- export const ids = [299, 300];
+ export const ids = [300];
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L6` → after: `L4-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/300.js#L4-L142) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/300.js#L4-L6)

```diff
-   42371: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       gamePackSource: () => UV
+   41898: (HH, BH, LH) => {
+     LH.d(BH, {
+       $b: () => HL,
+       $c: () => PH,
+       $e: () => lL,
+       Ac: () => CH,
+       Ad: () => KH,
+       Be: () => ML,
+       Bg: () => wL,
+       C: () => DB,
+       Cb: () => LL,
+       Cf: () => mL,
+       Cg: () => GL,
+       Df: () => kL,
+       Dg: () => uL,
+       Ec: () => wB,
+ ... (123 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L8-L9` → after: `L144-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L144-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/300.js#L144-L896) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/300.js#L8-L9)

```diff
-     var JV = xV(5486),
-       YV = xV(1603);
+     const AH = -2147483648,
+       rH = 12,
+       SH = 12,
+       hH = 4095,
+       tH = {
+         Lifeform: 1,
+         Throwable: 2,
+         Mesh: 3,
+         Audio: 4,
+         Item: 5
+       },
+       zH = {
+         Alive: 1,
+         Crouching: 2,
+         OnGround: 4,
+         InFluid: 8,
+ ... (737 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L12-L91` → after: `L899-L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L899-L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/300.js#L899-L1382) · [Before (L12-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/300.js#L12-L91)

```diff
-       return {
-         packKey: async eV => (await YV.b.getGame(VV, eV, !0)).customTexturePackKey,
-         fetchPack: JV.d
-       }
-     }
-   },
-   53954: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       fetchGuestContext: () => vV,
-       guestJoinTarget: () => qV,
-       guestJoinWithPack: () => kV,
-       guestPackForGame: () => rV,
-       invalidateGuestTrafficCode: () => jV
-     });
-     var JV = xV(1230),
-       YV = xV(1603),
- ... (64 more removed lines; see GitHub link above)
+       return EL.buffer !== HH.buffer && (EL = new Uint8Array(HH.buffer)), EL
+     }
+ 
+     function GL(HH, BH, LH) {
+       const AH = HH.PX(66, BH, 4);
+       if (AH < 0) return !1;
+       return HH.view.setUint8(AH + 0, LH), !0
+     }
+ 
+     function YL(HH, BH, LH) {
+       const AH = HH.PX(67, BH, 4);
+       if (AH < 0) return !1;
+       return HH.view.setUint32(AH + 0, LH, !0), !0
+     }
+ 
+     function uL(HH, BH, LH) {
+ ... (468 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L4-L6)

```diff
-   42380: (VV, eV, xV) => {
-     xV.r(eV), xV.d(eV, {
-       BloxdInformation: () => rV
+   45075: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => WH,
+       c: () => tH,
+       d: () => hH,
+       f: () => CH
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L16` → after: `L11-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L11-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L11-L34) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L8-L16)

```diff
-     var JV = xV(1220),
-       YV = xV(62),
-       UV = xV(99),
-       yV = xV(1551),
-       pV = xV(138),
-       QV = xV(1414),
-       nV = xV(1321);
-     const wV = (0, YV.lazy)((() => Promise.all([xV.e(137), xV.e(702)]).then((() => xV(7089))))),
-       ZV = (0, YV.lazy)((() => xV.e(139).then((() => xV(7109)))));
+     var AH = LH(38071),
+       rH = LH(39627),
+       SH = LH(39624);
+ 
+     function hH(HH, BH, LH, AH) {
+       const rH = SH.x;
+       BH.fill(0), HH.gravity.toArray(BH, rH.gravity), HH.colorDead.toArray(BH, rH.colorDead), LH[rH.ramp] = HH.useRampGradients ? 1 : 0;
+       const hH = HH.getColorGradients(),
+         tH = GH(HH, hH, "colour", AH);
+       LH[rH.colorCount] = tH;
+       for (let SH = 0; SH < tH; SH++) {
+         var zH;
+         const HH = hH[YH(hH, SH)];
+         BH[rH.colorPositions + SH] = HH.gradient, HH.color1.toArray(BH, rH.color1 + 4 * SH), (null !== (zH = HH.color2) && void 0 !== zH ? zH : HH.color1).toArray(BH, rH.color2 + 4 * SH)
+       }
+       const CH = HH.getVelocityGradients(),
+ ... (8 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L19-L75` → after: `L37-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L37-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L37-L451) · [Before (L19-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L19-L75)

```diff
-       return (0, nV.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, nV.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, nV.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, nV.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, nV.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, nV.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
-           }), " ", "to report the exploit."]
- ... (41 more removed lines; see GitHub link above)
+       return {
+         key: [],
+         texels: new Uint8Array(4 * SH.k)
+       }
+     }
+     const zH = [];
+ 
+     function CH(HH, BH) {
+       return EH(HH, zH), !MH(zH, BH.key) && (BH.key.length = 0, BH.key.push(...zH), BH.key.length > 0 && function(HH, BH) {
+         for (let LH = 0; LH < SH.k; LH++) rH.o.GetCurrentGradient(LH / SH.k, HH, ((HH, BH, LH) => {
+           AH.Color3.LerpToRef(HH.color, BH.color, LH, XH)
+         })), BH[4 * LH] = 255 * XH.r, BH[4 * LH + 1] = 255 * XH.g, BH[4 * LH + 2] = 255 * XH.b, BH[4 * LH + 3] = 255
+       }(HH.getRampGradients(), BH.texels), !0)
+     }
+ 
+     function EH(HH, BH) {
+ ... (399 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L77-L79` → after: `L453-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L453-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L453-L818) · [Before (L77-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L77-L79)

```diff
-         }), (0, nV.jsx)("p", {
-           children: "A: Yes, as long as you follow the rules laid out with respect to the exploit you are reporting. I.e. don't abuse or share the exploit, etc."
-         })]
+         };
+       tH(BH, 0, LH, AH);
+       let zH = 1;
+       for (const CH of function*(HH, BH, LH, AH) {
+           let rH = HH,
+             SH = BH,
+             hH = LH;
+           for (; SH > 1 || hH > 1;) {
+             const HH = Math.max(1, SH >> 1),
+               BH = Math.max(1, hH >> 1),
+               LH = new Uint8Array(HH * BH * AH * 4),
+               tH = 4 * SH;
+             let zH = 0;
+             for (let CH = 0; CH < AH; CH++) {
+               const AH = CH * tH * hH;
+               for (let CH = 0; CH < BH; CH++) {
+ ... (350 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L83` → after: `L826-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L826-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L826-L920) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L83)

```diff
-     function rV() {
+     function oB(HH, BH) {
+       let LH = mB.get(HH);
+       if (!LH) {
+         LH = {
+           module: HH.createShaderModule({
+             label: "placeholder",
+             code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
+           }),
+           pipelines: new Map
+         }, mB.set(HH, LH)
+       }
+       const AH = `${BH._colorFormat}|${BH._depthStencilFormat}|${BH._sampleCount}`;
+       let rH = LH.pipelines.get(AH);
+       if (!rH) {
+         var SH;
+         const {
+ ... (79 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L85-L93` → after: `L922-L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L922-L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L922-L969) · [Before (L85-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L85-L93)

```diff
-         t: VV
-       } = (0, JV.A)(), [eV, xV] = (0, YV.useState)("partnersAndCredits"), rV = {
-         partnersAndCredits: {
-           title: UV.featureFlags.usePartnerLinks ? VV("homePage:partnersAndCredits") : VV("homePage:credits"),
-           content: (0, nV.jsxs)(nV.Fragment, {
-             children: [(0, nV.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: UV.featureFlags.usePartnerLinks ? VV("homePage:partnersAndCredits") : VV("homePage:credits")
-             }), UV.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+         A: BH,
+         B: LH,
+         C: AH,
+         D: rH,
+         E: SH,
+         F: hH
+       } = RB;
+       return (HH * (BH * HH + AH * LH) + rH * SH) / (HH * (BH * HH + LH) + rH * hH) - SH / hH
+     }(1e3);
+ 
+     function nB(HH, BH, LH) {
+       return Math.min(Math.max(HH, BH), LH)
+     }
+     const FB = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;
+ 
+     function DB(HH, BH) {
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L96-L103` → after: `L1004-L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1004-L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L1004-L1038) · [Before (L96-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L96-L103)

```diff
-         bloxdIngameRules: {
-           title: VV("homePage:bloxdIngameRules"),
-           content: (0, nV.jsxs)(nV.Fragment, {
-             children: [(0, nV.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: VV("homePage:bloxdIngameRules")
-             }), "\n\t\t\t\t\t1. Be respectful of others.\n\n\t\t\t\t\t2. Don't harass or bully other players.\n\n\t\t\t\t\t3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation,  … [truncated]
-           })
+         zH = () => {
+           const HH = hH();
+           if ("!" === HH) return !zH();
+           if ("(" === HH) {
+             const HH = EH();
+             return hH(), HH
+           }
+           if ("defined" === HH) {
+             const HH = "(" === SH();
+             HH && hH();
+             const LH = hH();
+             return HH && hH(), BH.has(LH)
+           }
+           const LH = SH();
+           if ("==" === LH || "!=" === LH || ">" === LH || "<" === LH || ">=" === LH || "<=" === LH) {
+             hH();
+ ... (19 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L105-L110` → after: `L1040-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1040-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L1040-L1048) · [Before (L105-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L105-L110)

```diff
-         privacyPolicy: {
-           title: VV("homePage:privacyPolicy"),
-           content: (0, nV.jsx)(YV.Suspense, {
-             fallback: null,
-             children: (0, nV.jsx)(wV, {})
-           })
+         CH = () => {
+           let HH = zH();
+           for (;
+             "&&" === SH();) {
+             hH();
+             const BH = zH();
+             HH = HH && BH
+           }
+           return HH
```

#### 9. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L112-L117` → after: `L1050-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1050-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L1050-L1058) · [Before (L112-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L112-L117)

```diff
-         termsOfService: {
-           title: VV("homePage:termsOfService"),
-           content: (0, nV.jsx)(YV.Suspense, {
-             fallback: null,
-             children: (0, nV.jsx)(ZV, {})
-           })
+         EH = () => {
+           let HH = CH();
+           for (;
+             "||" === SH();) {
+             hH();
+             const BH = CH();
+             HH = HH || BH
+           }
+           return HH
```

#### 10. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L119-L150` → after: `L1060-L1941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1060-L1941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/301.js#L1060-L1941) · [Before (L119-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/301.js#L119-L150)

```diff
-         securityExploitBounties: {
-           title: VV("homePage:securityExploitBounties"),
-           content: (0, nV.jsx)(vV, {})
-         }
-       };
-       return (0, nV.jsxs)("div", {
-         className: "BloxdInformation",
-         children: [(0, nV.jsxs)("div", {
-           className: "BloxdInformationSectionList",
-           children: [Object.keys(rV).map((JV => (0, nV.jsx)(yV.M, {
-             active: eV === JV,
-             onClick: () => {
-               xV(JV)
-             },
-             children: VV(rV[JV].title)
-           }, JV))), UV.featureFlags.usePartnerLinks && (0, nV.jsx)(nV.Fragment, {
- ... (16 more removed lines; see GitHub link above)
+         XH = EH();
+       if (rH !== AH.length) throw new Error(`Cannot evaluate #if ${HH}`);
+       return XH
+     }
+     var dB = LH(38183),
+       aB = LH(38283),
+       sB = LH(38286),
+       JB = LH(42020),
+       iB = LH(39682);
+     const pB = 32,
+       yB = [10, 3, 10],
+       HL = [21, 7, 21],
+       BL = HL[0] * HL[1] * HL[2],
+       LL = 0,
+       AL = 1,
+       rL = 2,
+ ... (866 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L4-L13` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/302.js#L4-L6) · [Before (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/302.js#L4-L13)

```diff
-   42433: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => qV,
-       g: () => gV,
-       h: () => EV,
-       l: () => BV,
-       m: () => vV,
-       n: () => bV,
-       q: () => kV,
-       u: () => rV
+   42364: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       BloxdInformation: () => YH
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L15-L359` → after: `L8-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L8-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/302.js#L8-L80) · [Before (L15-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/302.js#L15-L359)

```diff
-     var JV = xV(38269),
-       YV = xV(38389),
-       UV = xV(38303),
-       yV = xV(42435),
-       pV = xV(41486),
-       QV = xV(41272),
-       nV = xV(41309),
-       wV = xV(41279),
-       ZV = xV(38318);
-     const vV = Object.freeze(new JV.h(0, 0, 0, 0)),
-       rV = Object.freeze(JV.o.Zero()),
-       kV = Object.freeze(JV.n.Zero()),
-       bV = Object.freeze(QV.b.Zero()),
-       EV = Object.freeze(YV.d.Black()),
-       BV = Object.freeze(new YV.h(0, 0, 0, 0)),
-       jV = {
- ... (329 more removed lines; see GitHub link above)
+     var AH = LH(1123),
+       rH = LH(45),
+       SH = LH(81),
+       hH = LH(1455),
+       tH = LH(120),
+       zH = LH(1315),
+       CH = LH(1225);
+     const EH = (0, rH.lazy)((() => Promise.all([LH.e(137), LH.e(702)]).then((() => LH(7077))))),
+       XH = (0, rH.lazy)((() => LH.e(139).then((() => LH(7093)))));
+ 
+     function GH() {
+       return (0, CH.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, CH.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: "Security Exploit Bounty Program"
+ ... (57 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L362-L368` → after: `L83-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L83-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/302.js#L83-L122) · [Before (L362-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/302.js#L362-L368)

```diff
-     function tV(VV, eV, xV) {
-       let YV;
-       YV = "object" === typeof eV ? eV : {
-         referenceFrame: eV ?? 0,
-         range: xV,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
+     function YH() {
+       const {
+         t: HH
+       } = (0, AH.B)(), [BH, LH] = (0, rH.useState)("partnersAndCredits"), YH = {
+         partnersAndCredits: {
+           title: SH.featureFlags.usePartnerLinks ? HH("homePage:partnersAndCredits") : HH("homePage:credits"),
+           content: (0, CH.jsxs)(CH.Fragment, {
+             children: [(0, CH.jsx)("div", {
+               className: "BloxdInformationHeader FullyFancyText",
+               children: SH.featureFlags.usePartnerLinks ? HH("homePage:partnersAndCredits") : HH("homePage:credits")
+             }), SH.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
+           })
+         },
+         bloxdIngameRules: {
+           title: HH("homePage:bloxdIngameRules"),
+           content: (0, CH.jsxs)(CH.Fragment, {
+ ... (24 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L370-L443` → after: `L124-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L124-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/302.js#L124-L151) · [Before (L370-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/302.js#L370-L443)

```diff
-       let UV = VV;
-       YV.cloneOriginalAnimation && (UV = VV.clone(), UV.name = YV.clonedAnimationName || UV.name);
-       const yV = UV.getKeys();
-       if (!yV.length) return UV;
-       const pV = YV.referenceFrame && YV.referenceFrame >= 0 ? YV.referenceFrame : 0;
-       let QV = 0;
-       const nV = yV[0];
-       let wV = yV.length - 1;
-       const ZV = yV[wV],
-         vV = {
-           referenceValue: nV.value,
-           referencePosition: JV.l.Ik[0],
-           referenceQuaternion: JV.l.Quaternion[0],
-           referenceScaling: JV.l.Ik[1],
-           keyPosition: JV.l.Ik[2],
-           keyQuaternion: JV.l.Quaternion[1],
- ... (58 more removed lines; see GitHub link above)
+       return (0, CH.jsxs)("div", {
+         className: "BloxdInformation",
+         children: [(0, CH.jsxs)("div", {
+           className: "BloxdInformationSectionList",
+           children: [Object.keys(YH).map((AH => (0, CH.jsx)(hH.W, {
+             active: BH === AH,
+             onClick: () => {
+               LH(AH)
+             },
+             children: HH(YH[AH].title)
+           }, AH))), SH.featureFlags.usePartnerLinks && (0, CH.jsx)(CH.Fragment, {
+             children: (0, CH.jsxs)(hH.W, {
+               onClick: () => {
+                 window.open("https://www.crazygames.com/c/io")
+               },
+               children: [(0, CH.jsx)(zH.c, {
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L4-L5` → after: `L4-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L4-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/303.js#L4-L628) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/303.js#L4-L5)

```diff
-   42531: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
+   42398: (HH, BH, LH) => {
+     LH.d(BH, {
+       b: () => vH,
+       e: () => KH,
+       g: () => WH,
+       k: () => MH,
+       m: () => GH,
+       p: () => QH,
+       t: () => uH,
+       w: () => YH
+     });
+     var AH = LH(37963),
+       rH = LH(38074),
+       SH = LH(38002),
+       hH = LH(42405),
+       tH = LH(41498),
+ ... (609 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/304.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/304.js#L4-L5)

```diff
-   42535: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
+   43104: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABbCAYAAACI0FBrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANGSURBVHic7ZwxixNBFMdnJQRCmkCCjYVXHFoIciJoYWWX0m8hYpfCD2FhJ+K3ECu/gIWCRIQUkS1OxEbuYJvj4JqzMCEhmZ15M29297/Z/6+ay+7O7O1/33v7HjOTGQ8P3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/305.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/305.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e)

#### 1. `bundles/bloxd.io/chunks/js/305.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0c92a1ed43226d93a2f2962a4f8f260848e4a18dd5e07203e4c77bf53c81f8e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/305.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/305.js#L4-L5)

```diff
-   42543: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   43113: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALqSURBVFiF3Ze/T1NRFMc/73lb01IKija1TUv5MTgYojEsCungREiYnBxYHHUwLpLwBxhno4thYXDRyWCYHAiwSAyJMUQSWh4lLaQCJrVpoS3U4fU929De+2JNIH6X+3LuP … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/306.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/306.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2)

#### 1. `bundles/bloxd.io/chunks/js/306.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-71736d497ce32d7bb3a2705e47e9ddbffc5e462ab5d31b17ade2e653233d75f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/306.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/306.js#L4-L5)

```diff
-   42549: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
+   43118: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/307.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/307.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a)

#### 1. `bundles/bloxd.io/chunks/js/307.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7d6e3e96530f95fdcb30182787c29818cb83dfd4bd8f1ca1c470d6468ac8a07a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/307.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/307.js#L4-L5)

```diff
-   42555: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   43120: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAdSURBVAiZYzi+peH/rLqY/z+/3v/PAGMc39LwHwDpAxJzISLv6wAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765,0.33843, … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/308.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/308.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e)

#### 1. `bundles/bloxd.io/chunks/js/308.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ce6cf20fc656a75e966af9d19386b0c80cd0ea2233800e4a660e75703d5ce37e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/308.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/308.js#L4-L5)

```diff
-   42557: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
+   43129: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/309.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/309.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868)

#### 1. `bundles/bloxd.io/chunks/js/309.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-09bdf769a507feb3e5f148f970d708a4e6215e82ff66aaea6a87e8958dbb2868) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/309.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/309.js#L4-L5)

```diff
-   42566: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   43137: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZYzy+peH/80evGQAbSQWwz2X/bgAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.7723,1,0.0765,0.7723,1,0.0765,0.7723,1,0.0765 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/310.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/310.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d)

#### 1. `bundles/bloxd.io/chunks/js/310.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-16c66b4a91e3d568e5e641877a33f0e5880292a78aac56d253681627ac607b7d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/310.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/310.js#L4-L5)

```diff
-   42572: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
+   43146: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZYzi+peH/rLqY/z+/3v8PADf5CTq4b563AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/311.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/311.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab)

#### 1. `bundles/bloxd.io/chunks/js/311.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c2be26a6a556fdc94ad595edbbceed8b7940321b2fac1266a0ecff1b898a30ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/311.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/311.js#L4-L5)

```diff
-   42577: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
+   43155: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAD6CAYAAAD3EYqJAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAgJSURBVHic7Z0xjFVFFIbnkWlkI5FFQaKVmphgtLHaxM5ELbSQECmko0GzlYkNRguMNCRWRGjslkJDsMACrE22spFopVYmBBQwmMXyWeA859135s2ZO2fn/ve88zXsfe/e2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/312.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/312.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986)

#### 1. `bundles/bloxd.io/chunks/js/312.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-02914bf11852274d6b7aafa091c958702f93825ad3263f014f00f1d37f884986) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/312.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/312.js#L4-L5)

```diff
-   42584: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
+   43162: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABYCAYAAABrqdC6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAWNSURBVHic7Z29axxHGMbflfd0WCccnMQyLpIU0fVpgsAEGUNMIBi5UboETCBN/gA3KUKKNCZ1mkCiwqUL48LY4BAwcSEMxr3sInFhkHDkKHcS573TpLDmtDs378w7H7s7c … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/313.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/313.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333)

#### 1. `bundles/bloxd.io/chunks/js/313.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2d99f5414501df27de7eec916f7e94cb9caf16d9859fc495791a873294e11333) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/313.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/313.js#L4-L5)

```diff
-   42589: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
+   43166: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAqCAYAAADMKGkhAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVFiF7ZixTsMwEIb/IAsV1AWJB+ncmWfohjqyVB06MHZgZGCoWBgRW5+hM3OfA5C6VKVCldKhXHQCx47PlmNTvqm1c4r963z3x8XD82sJAZNhv7h/WpQAoDrnxmd32 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/314.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/314.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65)

#### 1. `bundles/bloxd.io/chunks/js/314.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-be57f9ce485cdb591d2d0f0fc89db66bdafe6707ce9a736db48670781427cf65) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/314.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/314.js#L4-L5)

```diff
-   42594: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
+   43173: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7Zi9SsRAFIVPTNgF/wrFP0RtbAVhG30CC99kwcbaMm8g+CYp8gY2gmBroxa6xW7hH+ziEpsMZMYwE5OBGYbzdUnuzc6dM5ebPRE6srG5WwDAfP4DAJiMR5Euf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/315.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/315.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b)

#### 1. `bundles/bloxd.io/chunks/js/315.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a4f83b9555f4a6e1e55364eadbc6ac56f699df64354f22006b43d3c7329d6f3b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/315.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/315.js#L4-L5)

```diff
-   42598: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
+   43176: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA2NjdAOfn5ABBQT8A33Ua4vPiZVMAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/316.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/316.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064)

#### 1. `bundles/bloxd.io/chunks/js/316.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1bbf036b701029e1855aa8951d5d6a6704d8f2c8b12eb5502e724f0228ee8064) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/316.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/316.js#L4-L5)

```diff
-   42607: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43185: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZYxQSFv/PzcPLIC5exgAADicCBfqQrQEAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.46559 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/317.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/317.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9)

#### 1. `bundles/bloxd.io/chunks/js/317.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0a5be9683ac3d3ceab0ebc4ee00ce029c36d541aff1dbf7aaaf04ac5b804be9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/317.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/317.js#L4-L5)

```diff
-   42610: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
+   43187: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5SVV/nPwMDA8PjhHUYJSbn/DAwMDEwMWAAAq/oFUma3L30AAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/318.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/318.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c)

#### 1. `bundles/bloxd.io/chunks/js/318.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ec9f53d3da4f98d7c67816b1fb568b0c3063ad8d9b16b789c3c850e897f6dd1c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/318.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/318.js#L4-L5)

```diff
-   42614: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
+   43193: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAACCAYAAABxAQMMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVCiR7dLPS1MBAMDx79xmrb23ue1t0+XItTWcK3JF9ENpVgSV6aG6WIegCKyMRpFJy0N2sJnNojqsslZpiESypQghUYcuwkBKokKyeE3JyG0VCelc147d6/svfD+Kq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/319.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/319.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9)

#### 1. `bundles/bloxd.io/chunks/js/319.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8218fcdf614cdae745f1c6b1153f28873bbdc508e48b78439c6e22e65b21cec9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/319.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/319.js#L4-L5)

```diff
-   42622: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
+   43195: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoilb9zwAFdUtvM6Lz1bUM4XwGBgaGm9fOMwoJi6OIvXv7kpGJgYqAhYGBgUFZFNVMdP7PH9+JMoz6LiMEHty7wYgu9u7tSwwxogzDFgHY1FHfm1++f … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/320.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/320.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d)

#### 1. `bundles/bloxd.io/chunks/js/320.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-85aece65af355d05d7e3b7074b9563dd066b09afef03c82bf70e475d3244363d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/320.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/320.js#L4-L5)

```diff
-   42631: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
+   43202: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGJSURBVGiB7ZixTsNADIZ/R6YLdGmHToiFpwCeoRJPWinPADwFCzBAhmRpu7TDMdBUJ4FQ7vxfsVA+qUpPah3bv89nnSyX9wEG6nols/nCZKNrG4oNfXh8stig0bWNWG3o+ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/321.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/321.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49)

#### 1. `bundles/bloxd.io/chunks/js/321.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3a9d8e44a3f49e3e32e85a29ce6756a795948416e5b72ddff15519aafc8a4a49) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/321.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/321.js#L4-L5)

```diff
-   42638: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
+   43211: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGRSURBVGiB7Zg/S8QwGMbfXMsVDunm5seQEw5uExRcBNHByek+gpOjn0IQnFzEP4vogZsgePSbuBUR7vCsgyk0sZe0TSAhPL8t6Zumb56+JHkYGTIcXRZERD/fSyIiymYTp … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/322.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/322.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c)

#### 1. `bundles/bloxd.io/chunks/js/322.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e4f17b7badd776000c6bb4aa88abfa37513a6b23f792cf0db9e37d4744df239c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/322.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/322.js#L4-L5)

```diff
-   42643: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43213: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVAiZY1jfH/rfymnFf9eoff//////nwEHYEEX2NwT+P/lm58MYoqsDIuXnmGo6FjNIK+mxgAAtuUU1Ys7U8AAAAAASUVORK5CYII=","alphaCutoff":0,"vertic … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/323.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/323.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3)

#### 1. `bundles/bloxd.io/chunks/js/323.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-dc0c13ed72ed7128d86f6785943c7ad7c18d908dc765370cd764dcf9951e23c3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/323.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/323.js#L4-L5)

```diff
-   42645: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43218: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY5SVV/kvLl7GwMbHw8D8bwEDAB57A8ZQ9iKrAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/324.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/324.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2)

#### 1. `bundles/bloxd.io/chunks/js/324.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1339c2ba5696d55bfc330bb693f43fe327bb9cb7a71b7e0479a9b35f967966f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/324.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/324.js#L4-L5)

```diff
-   42653: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
+   43227: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7RyWfafgYGB4dieKEYTs1n/GRgYGJgYsAAAxYYGBwfNrmYAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/325.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/325.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5)

#### 1. `bundles/bloxd.io/chunks/js/325.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3ad1b719eed290ebaa08d7dde9ff55dcc8b03c0a8709fc0532aad1b3b172feb5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/325.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/325.js#L4-L5)

```diff
-   42656: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
+   43233: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVAiZY5w8f8F/STExBi0NTYZNB84yEAOWTHzM8P3DFoY/8VUMmQrvGdbMfMdw5lQaI7IaxsfPnv/n5uRk4OHmYpBRVmGobWpioIZFAFNaJQbN7skBAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/326.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/326.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a)

#### 1. `bundles/bloxd.io/chunks/js/326.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f0abd810d6f9a6f3023e02288c497c1e1609fac18387e44c67847ee3a26b075a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/326.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/326.js#L4-L5)

```diff
-   42664: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
+   43236: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVDiNY2RgYGDoSnH7zwAFZXN2MaLznXx3wvkMDAwM+za7M5qYzUIRO3MqjZGJgYqAhYGBgUGa5yGKIDr/948vRBlGfZcRAod3BzOii505lYYhRpRh2CIAmzrqe/PL1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/327.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/327.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042)

#### 1. `bundles/bloxd.io/chunks/js/327.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6b7d07240334a7cbca7e2e34fc99b19754cb8cb33243a54bebcf8e992db46042) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/327.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/327.js#L4-L5)

```diff
-   42671: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
+   43242: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZhBSsNQEIb/iUPdiAfwGi1duHbZE7hyFfFEYg/gCVy6EwRDeg0PULoxIM9NIw/tIsn/pw6SD8rrg3Yy8/6ZyfDs9u4pgeDhfmWL5ZqyUVelxIZvNu+MDRl1V … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/328.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/328.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81)

#### 1. `bundles/bloxd.io/chunks/js/328.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c86b71f4680b934fc9f1c986e9bea6377db94d5166c32d6e6df8f5e29184fe81) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/328.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/328.js#L4-L5)

```diff
-   42679: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
+   43249: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY5xT4fVfWJybAQAPmAKUQohcYQAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.10007,0.03268,-0.0935,0.10007,0.03268,-0.0935 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/329.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/329.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab)

#### 1. `bundles/bloxd.io/chunks/js/329.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d6edeacb7e6ab4aa27b279913602c4d078507bbd3f7d578f5144ffa164b452ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/329.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/329.js#L4-L5)

```diff
-   42685: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
+   43251: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABICAYAAABRGGN6AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANRSURBVHic7Zo9iNRAFMcTGXKXs7ERK4u9K5btLIQFQRFEOFAOtLq1sLGyu8pGUA47Kzt7G63shAUbPeFk4Qq75YrTWmwOzr11pzkLmZhMJjMvM5PsS/J+VT5eZib/vLz3Z … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/330.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/330.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2)

#### 1. `bundles/bloxd.io/chunks/js/330.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-264c044cdbb36fbe4b454ffbce72e05a4f267ce6cee6d89177cdfe10598ed0e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/330.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/330.js#L4-L5)

```diff
-   42693: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
+   43258: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA0CAYAAAD19ArKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJsSURBVGiB7Zi/a9tAHMWfjDg3jimtIWRwF8eDcdpuBUOgWUIgkD3UwXTv1j/A2AQ8hw7ZOrWUOv9Ag5csDQQCgQxJMBkSL81gupiYtI1ocYdaqnSS7nS+6MeBPyDQyae7x … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/331.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/331.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430)

#### 1. `bundles/bloxd.io/chunks/js/331.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1efd48ecff22baae80c09acf11e04e22425b4909c43d7968e470212d1c205430) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/331.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/331.js#L4-L5)

```diff
-   42702: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
+   43261: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADRSURBVFiF7ZU/CwIxDMVT6aJ+S3Fz80AQTg7xQBDOzU38gCI4qaM3tdwfqOZJazjymzrkweMlTUy5P72JQb5eGESTZQVLU1VbM+IIUmPvtysREY0n02Dh6/nwb0SDIDo5N … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/332.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/332.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1)

#### 1. `bundles/bloxd.io/chunks/js/332.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b95c6434c3d32a8115f68dfde08c1c6653c1ca04c32fd5ae249d4ed24d548cb1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/332.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/332.js#L4-L5)

```diff
-   42705: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
+   43267: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAWSURBVAiZY3x268h/QVFZhonrTjMAACyMBdKWCLAlAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[1,0.53165,0.3176,1,0.53165,0.3176,1,0.53165 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/333.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/333.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613)

#### 1. `bundles/bloxd.io/chunks/js/333.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-aa837cd37897b653939530987eb56c521595c2fcea457d1819dfbcc2c4d34613) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/333.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/333.js#L4-L5)

```diff
-   42712: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
+   43273: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zg/TsMwFMafm5BKiPQCLCwIUXENBFInTsKA1AkmmNh6ETp1qHqNCili4QwNQmraEIY6Upykzh9bsmV9v83xe0mevzzZ+Rgp8nR/nRER7dM/IiKarSImi3+8v … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/334.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/334.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069)

#### 1. `bundles/bloxd.io/chunks/js/334.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d07272e6a7dccafd3174ac56c9e6c785ff713b6d16ec8b8844abd0f140722069) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/334.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/334.js#L4-L5)

```diff
-   42719: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43277: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYARBDqAO3u+ADPAh4A0oEZ4lM0BcsAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/335.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/335.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6)

#### 1. `bundles/bloxd.io/chunks/js/335.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1fc111d39c2966543ad4b25abf5338e6e8602b045fd44a750c06c4490d3e7dc6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/335.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/335.js#L4-L5)

```diff
-   42724: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43279: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY/zTqvi/+AAbAx8PKwOfdQQDADbJBJwakkKMAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/336.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/336.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028)

#### 1. `bundles/bloxd.io/chunks/js/336.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-53597d18b27904ff0832b929ba44e8fd5a93e0b658dd4fe96d73316477dc7028) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/336.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/336.js#L4-L5)

```diff
-   42733: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
+   43286: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY6wN1PnPwMDA0Lz+CmO+q/p/BgYGBiYGLAAAwGgF3kpJcUoAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/337.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/337.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557)

#### 1. `bundles/bloxd.io/chunks/js/337.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-04bbaa8729ec150b341b1704e960b628ad4ef194a268bda69f43568ba9955557) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/337.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/337.js#L4-L5)

```diff
-   42737: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
+   43291: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAACCAYAAABWr4LkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGvSURBVCiR7dHPS1MBAMDx73ObNffe5nNvG1uONMdwrsiKkJg0M4R+qIc6rQ5BEFQYCdEPWl70YJNcRXmYJK1SEZHGliKIiF6FgdgQi0hhTClR3yoK0rWuHbsGff6Fj/Dke … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/338.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/338.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07)

#### 1. `bundles/bloxd.io/chunks/js/338.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-33d04d0c4d36864a6695de022976523a2c88756d9c9acf81691a7338e7ec7a07) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/338.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/338.js#L4-L5)

```diff
-   42744: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
+   43298: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAChSURBVDiNY2RgYGCYla7xnwEK0mbeYETnd0UawPkMDAwMZcsvMOa7qqOITdx9k5GJgYqAhYGBgYGbE8USDP63n3+JMoz6LiMEGtZdZkQXm7j7JoYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/339.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/339.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2)

#### 1. `bundles/bloxd.io/chunks/js/339.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-53fabf09f45be8af27d3bef676e2273fd8f9a2075a87fed53f28757a028b7ca2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/339.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/339.js#L4-L5)

```diff
-   42748: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
+   43307: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGISURBVGiB7ZgxSgNREIb/WUZtgqcQ0gh23iAH8AAeQdLYWtmJzeIRPICV1d7ALiDCQk4R0mjAZ5OVh6bY3f/fOMh+EF4eJLMz75+ZHZ49XF8mEFzdP9p8NqVslFUtseHLx … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/340.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/340.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f)

#### 1. `bundles/bloxd.io/chunks/js/340.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8c06987749ef597acc7cb5efb25f5d67941e8368771c78e9c166ea294269df4f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/340.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/340.js#L4-L5)

```diff
-   42757: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
+   43311: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACcCAYAAAAXtcvFAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAr4SURBVHic7Z1NaBxHFsffSKPRSLbQYGGjEKS9yCxe2EOCIbAisN6czB7MkiwsOfpkCKwWLyw55JiDCayIA2ZzynEJ+0HIYfEp60BwIBDwwQctSJeVCQjbWSZMLM306GMPU … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/341.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/341.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450)

#### 1. `bundles/bloxd.io/chunks/js/341.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f10a2f4ac01118a83fbf065ad53a12c5985814f0ef8d9f37a0d803152605b450) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/341.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/341.js#L4-L5)

```diff
-   42763: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
+   43317: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAGACAYAAADLU767AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABD7SURBVHic7Z1BiFzHEUBrnBaJRA5aKexFyATpYF2CDgoiNj44hOxNl70IiVyC8CEYg8GwwaBDEJiBBYPBCJ1ELlZgCOSimxfhnBITrFMSmD1ICOlmJI2Iwm7CbqQcdmvo6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/342.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/342.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2)

#### 1. `bundles/bloxd.io/chunks/js/342.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9edd671b9fe3e82f112e7aa7887933c7e8f6c59ce8b78bf94b656e175cedb9e2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/342.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/342.js#L4-L5)

```diff
-   42770: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
+   43323: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAARFSURBVHic7Z3PT9RAFMdfYV1+JIsQEjTiDyKERFGJIdEYYvwHxCM3PZmoiQeNf4DGGzHePBjjiZtc9eLBgxpiOBBClBhXIEhcoyawwIrAqqmH7iztbNtpt9Ppa/s+l5122 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/343.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/343.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2)

#### 1. `bundles/bloxd.io/chunks/js/343.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b82f3220aa393b3de3fe74fb1ec4c1b036578a6f94298b66a738e00b137607f2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/343.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/343.js#L4-L5)

```diff
-   42776: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
+   43332: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABQCAYAAAD4K0AmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVHic7du9btswFAXg64IGnHZIhgJpmq0emvRnaTe/R5+hz5S5Y9Y8gzu1HfoTZXA2xynQoSmQxIANqIPB2lYliyJpiUc83xLHIS0GJ1ciKaUjll6+ep3a9BuenoiIi … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/344.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/344.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5)

#### 1. `bundles/bloxd.io/chunks/js/344.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0eb14d8d2bb6d31e41aa37e9ddceaeb697447c4475cf408a83e26f02b8c8caa5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/344.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/344.js#L4-L5)

```diff
-   42778: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   43338: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAzSURBVAiZY7BVFfpvb2//X1OU53+gieR/BgYGBiYmKV0Goa+3GE5NlWB48/Eng6Yoz38ADtwN2A2YEbIAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/345.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/345.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89)

#### 1. `bundles/bloxd.io/chunks/js/345.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-80fb29adb62fd573169bb0b4981e4223d59afc3f2c76f171b684003c8d192d89) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/345.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/345.js#L4-L5)

```diff
-   42784: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
+   43346: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/346.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/346.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a)

#### 1. `bundles/bloxd.io/chunks/js/346.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4ff74bb6b314301b2e43d205ed4fa9ab3a4344d7c9869fda1d4f7b00d5f8eb7a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/346.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/346.js#L4-L5)

```diff
-   42790: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   43354: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfovws/OUJ36jAEAFFIDZYkSkDYAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1171,0.50665,-0.3483,0.1171,0.50665,-0.34 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/347.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/347.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373)

#### 1. `bundles/bloxd.io/chunks/js/347.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26788d97da8265a9255c26a1a9ba15d715f270f88e9e471beca4095ea1de4373) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/347.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/347.js#L4-L5)

```diff
-   42795: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
+   43363: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY7RVFfr/5sMvBg15XgYAIxsEnz/wS4IAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/348.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/348.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25)

#### 1. `bundles/bloxd.io/chunks/js/348.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d90229b4a893f9ab14108ea52b14ae2763dc7197cc4b3f8110b144e302e2d25) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/348.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/348.js#L4-L5)

```diff
-   42801: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   43366: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAvSURBVAiZY3h5YPf/C3Pn/v/w+PF/Bihg/PD48X8BWVmGW6tWMfCLCTI8v/uIAQDQfhMsC1+8ywAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.61541 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/349.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/349.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1)

#### 1. `bundles/bloxd.io/chunks/js/349.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-88fc4929e42a362f5f3fb9288f4d60c1b80133377ee1a275763dd1b8c5020bd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/349.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/349.js#L4-L5)

```diff
-   42806: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
+   43373: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/350.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/350.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea)

#### 1. `bundles/bloxd.io/chunks/js/350.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2ceaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-e911e7391a468a17978444522eedf470b66ad5dbeba40cabf6495832ff9e2cea) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/350.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/350.js#L4-L5)

```diff
-   42811: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
+   43380: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY7w8f/5/MUUZBgAUqwNl1ncXcwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.70912,1,0,0.70912,1,0,0.70912,1,0,0.79277,0.9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/351.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/351.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df)

#### 1. `bundles/bloxd.io/chunks/js/351.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9dfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9c8226963cc1b0d06d8e6622777327de1b4c6431d3ffdb436a6bb8835b01e9df) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/351.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/351.js#L4-L5)

```diff
-   42819: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
+   43384: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY7i1atX/5xcv/mdgYPj/8sDu/wBgKgsY6yMuIAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.9375,0.50631,0.361,0.9375,0.50631 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/352.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/352.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130)

#### 1. `bundles/bloxd.io/chunks/js/352.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d622d5c67ed08bd57074314df3929901246e6910d7117853cd173ef2b019e130) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/352.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/352.js#L4-L5)

```diff
-   42827: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
+   43391: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/353.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/353.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3)

#### 1. `bundles/bloxd.io/chunks/js/353.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7ccfa497a5bb35ef4a9ace6a3ed290678a9ecdec379f22bd3d67f01b055699b3) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/353.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/353.js#L4-L5)

```diff
-   42832: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
+   43397: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVCiRY2CgK2BE5hjVmvz/9/UfAxM3E8O55jOMGIpgCmAAXSEKMCgy+o8uxkSMm4hSRD0wZIOAKEUAGl0ftSoKsxQAAAAASUVORK5CYII=","alphaCutoff":0.050 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/354.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/354.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248)

#### 1. `bundles/bloxd.io/chunks/js/354.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bc1fd0d5ef007a2bffe7b32f9b843a654acae90d3a534011ad224ec0f7d6f248) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/354.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/354.js#L4-L5)

```diff
-   42839: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
+   43406: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB2SURBVCiRtZAxDsAgDANNVj6DEC9jZ+rel1Won2FNOoEghYqlt0RKbNkKAMCnID4FQcdr56KXr2m0mwuDLCEf13Brgt6t4weqqIeW6l9EwO6fKvo/0ziyBBe9kB1bmOokS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/355.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/355.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de)

#### 1. `bundles/bloxd.io/chunks/js/355.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7deR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-97ac08713e9261320bf387a248318f868aa240f91217a04db6166c1172a8e7de) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/355.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/355.js#L4-L5)

```diff
-   42844: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
+   43411: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/356.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/356.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9)

#### 1. `bundles/bloxd.io/chunks/js/356.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-92ae296b758cd4bc3d179ae9950eeafae6b12dfb5b788d5f1162f954c6e711a9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/356.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/356.js#L4-L5)

```diff
-   42849: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
+   43420: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC1SURBVDiNzZOxCoMwEIZ/D8GCg4uLbyHBJ3N36t4nC5K36NLFIVCXuw5tQmLFJqVDvyUQuO/yHxcgATUNoqZBPt0d0o9Kjs4i2fTqzpZBNWE+66xaLwi7Z0XZ4iQh9LXtL … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/357.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/357.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b)

#### 1. `bundles/bloxd.io/chunks/js/357.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8cdfacddc12a3d9040a508fa38cb0adc8137d04a0ea8db163630f893ebcdd68b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/357.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/357.js#L4-L5)

```diff
-   42856: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
+   43422: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACeSURBVCiRxZIxDsIwDEV/LaQgZeAqUdSTde/EzslQVY7SIUMXm4EmSmjcAAtviRT5+3/LBhT82Isfe2n97XCDl6O3O1RvLhwYZAnT9d6sT6LcpRlTi51DX3X4q1Dl5z1G3 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/358.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/358.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786)

#### 1. `bundles/bloxd.io/chunks/js/358.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bdf18fd19003f332987a9064b6fee9e9141d63d249e34d75dfe7d0b4ce8e0786) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/358.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/358.js#L4-L5)

```diff
-   42865: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
+   43429: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABrCAYAAAD+ZTVwAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAT+SURBVHic7Zw/iBVHHMd/m6ze5faKiF0gBznUJojYSERISJAcoga1D6lsU4igTVKYJo2NqeRKwTJIjMiFEDhFBJsgQqqgIIeFIF5xu3on3rPYN8/d2T8zszszv9+8/X3g8 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/359.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/359.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa)

#### 1. `bundles/bloxd.io/chunks/js/359.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faaR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1571109ec45ce5313aa9710c6069f8bc81dca714136c59293dbecb7c5a894faa) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/359.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/359.js#L4-L5)

```diff
-   42874: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
+   43432: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEjSURBVFiFY9w0Iek/AwnAr2Ae49lLt3DqMdZTYyTHTCZSNCCDm3cekKsVK2CBMb58/YFXIQ83BwpfXUUBp1q/gnmMZDuEFKChitsRDAwMDLCoM9ZTY9w/N+M/AwMDw+fPv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/360.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/360.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99)

#### 1. `bundles/bloxd.io/chunks/js/360.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a7cbf5979cae469891a91f23f808b95976c10759265bc0f65b8816ca02b0bc99) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/360.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/360.js#L4-L5)

```diff
-   42883: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
+   43434: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG3SURBVGiB7dixTsJAGAfw+0jjZCQNEVYjL4Abq2Fy8A1kcyMObjpoJF3YXOgTsDmy8Ai4yeDiUBYnNQZ9gnOitsfZa88vgr3/b6N3/eBPr98VSGhc3L/K5OvLUT81Xg1D0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/361.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/361.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4)

#### 1. `bundles/bloxd.io/chunks/js/361.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3de820344228ce13463853b668d0999b60a8a51ea5bb748c89b83f9e1874a3d4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/361.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/361.js#L4-L5)

```diff
-   42885: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
+   43438: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/362.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/362.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46)

#### 1. `bundles/bloxd.io/chunks/js/362.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-95470b4a0c2e632e06ad83e8da88a3dc7493bcad4d81ce89300cebe09ceeae46) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/362.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/362.js#L4-L5)

```diff
-   42894: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
+   43447: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAqCAYAAABGB/BgAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD4SURBVFiF7ZYxDoJAEEXfqpUFBQfgBsbCg1h4GwsLC09CZ4zxGBYWhhtwAAsTqTRY4CBunMJARjH8hsxfwuezf5ZxKNjcdjnAIT8CMHFjALaXGIDzKQUgCCMA4mDttGf1t … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/363.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/363.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a)

#### 1. `bundles/bloxd.io/chunks/js/363.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a740d664e00972c8ff948fac282936402ca649f89f738d2dcc9d96cbf65ce69a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/363.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/363.js#L4-L5)

```diff
-   42900: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
+   43449: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGNSURBVGiB7Zi9SgQxFIVv1lFRwUJQ8V3sV/E93MLGKRQWLAdshBXBYn0IrRadVux8EJEFC0HF37HJwN7sbDIzCSSE83XJ3JvMzZmQzBFkycbZRUFEVHz/EhHRuJ8KXfz66 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/364.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/364.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e)

#### 1. `bundles/bloxd.io/chunks/js/364.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b99e60cfd5849ba173d2c684725c9b734da6095568e352dc2691a2884a0d1c3e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/364.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/364.js#L4-L5)

```diff
-   42902: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43454: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAx1NSAPri6wA/y8MA1sEa4oTj3EEAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/365.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/365.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999)

#### 1. `bundles/bloxd.io/chunks/js/365.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-fb3ba625e90f52a8f8b078f687a1fba5414c2e77238f694e283f302af3f86999) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/365.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/365.js#L4-L5)

```diff
-   42906: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43460: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY4wvV/i/TSCfgUWImyFEto4BACzPBDzVKZ6iAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/366.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/366.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c)

#### 1. `bundles/bloxd.io/chunks/js/366.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-6ca078081a9281bc05844609209aedcd97dc97c9773be6cd731f941cea16558c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/366.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/366.js#L4-L5)

```diff
-   42914: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
+   43462: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY5ScOes/AwMDw/P0NEbR9v7/DAwMDEwMWAAAyvYGLkl26sMAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/367.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/367.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4)

#### 1. `bundles/bloxd.io/chunks/js/367.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d684c8c00a310adcc8e8056226608e7fc88c1f62ba5ef5830659fcfbeb9707a4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/367.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/367.js#L4-L5)

```diff
-   42923: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
+   43467: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAACCAYAAADyxTo3AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVCiR7dBNK8MBAIDx579mzMbe/pumLdOWvB3cJ0Y5eD24jYNSCq24oNQuLkzZiMvKMqG0ZG2tVtrBWa0WUiQOa4QwL6UYc3VRPoDnGzw/YXktmDcaDNRW1xDdT/KXN … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/368.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/368.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64)

#### 1. `bundles/bloxd.io/chunks/js/368.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ba02bb412f36205b2b7debb23a1215228868262cb2b8d05ac7ea56f146fce64) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/368.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/368.js#L4-L5)

```diff
-   42929: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
+   43470: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVDiNY2RgYGBoqnD+zwAFdR17GdH50suWw/kMDAwMT6MiGUXb+1HEXlcWMjIxUBGwMDAwMCj/eIIiiM7/9/U7UYZR32WEwPPUJEZ0sdeVhRhiRBmGLQKwqaO+N798/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/369.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/369.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c)

#### 1. `bundles/bloxd.io/chunks/js/369.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26e88cbad815a57c272a2108899e812b4f2f9b5b6016cfc0a39edafc6fbcb10c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/369.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/369.js#L4-L5)

```diff
-   42938: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
+   43473: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZixSgNBEIb/OcZC7IQUgvgivoSNlb0WNl55T5AytfZWNnkJX0QEkYN0wcLgWpiTRVPk7v83DnIfhM1CMjez/8zcsHZ2/5BAML84t8l0Rtlom1piwx+fnhkbM … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/370.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/370.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4)

#### 1. `bundles/bloxd.io/chunks/js/370.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-095ae5a3794818e74a3cb0d7490cb515c2059385e1c54a193e3af5979e5654b4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/370.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/370.js#L4-L5)

```diff
-   42941: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
+   43480: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAJCAYAAAD+WDajAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABMSURBVBiVY3QIZf/f6pvDgA6s43oZmTBEkQDLgdU/GT/YffqPLOidO5uRgYGBgYWBgYFBgJ8Pq068xuK3k4GBgeHDx0+4JXHZiRcAADlyDh3q8hR1AAAAAElFTkSuQmCC" … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/371.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/371.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2)

#### 1. `bundles/bloxd.io/chunks/js/371.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a6f0878ae4c0d9f8528feaf7ca60eee7bbff129e5bc0e755715acf25224022a2) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/371.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/371.js#L4-L5)

```diff
-   42945: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
+   43489: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABfSURBVBiVYwzKkvnPgAbevX7NwMDAwNDqm8PAwsvLgiL5+fMfFD4LugBM94HVPxk/2H36z4RuPDIQ4OdjwKuAgYEB0w3vXqMpQHfDgdU/GWHsDx8/4bdCgJ+PkAsYGAA3k … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/372.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/372.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f)

#### 1. `bundles/bloxd.io/chunks/js/372.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-56cdf3d531824df65385ae4f4def9a563a46552ef2c8d3ffa5d8f99ff579191f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/372.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/372.js#L4-L5)

```diff
-   42949: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
+   43498: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH0SURBVEiJzVQxiNRAFH0jKbYRDQjCapmBRVmLS5FKBiFXWITbZkGwTSPYbW21rXZXpt0qzcqVN3AM2qTwilvuWIilLiwIWdlmu2/hTpxNsu54pPA1yc//w38v//1hPFXUD … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/373.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/373.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef)

#### 1. `bundles/bloxd.io/chunks/js/373.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-558b23ce086e750d9cc3f8e32f70235132491186a8ae70820e2f5eb0e14f16ef) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/373.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/373.js#L4-L5)

```diff
-   42951: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
+   43507: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAwSURBVAiZASUA2v8A/wCZ/x+Rpf//ADP//wAA/8z////l/fP/P+/J/yWrwf/M/zP/t8EZO2UdOzkAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/374.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/374.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f)

#### 1. `bundles/bloxd.io/chunks/js/374.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ce59516a78b82d02749d4c56da8682862a7f40a4db77bdb73e9e6f22be99b82f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/374.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/374.js#L4-L5)

```diff
-   42953: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
+   43511: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAElSURBVFiFY2SgEOisP/wfn/yVQFtGepjJRKolgxWMemSwAZaBdgADAwOD0tTtKHni27MvJKm/l+3JOBoj1ARcUjwUmzFsYoTR++PZ/wwMDAyz+dRRJFI/3UTh00p+K78xy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/375.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/375.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7)

#### 1. `bundles/bloxd.io/chunks/js/375.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2de12fdebca24f9f649596019db3565b28a087ad683e760af74d1702ec852bb7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/375.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/375.js#L4-L5)

```diff
-   42958: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
+   43517: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIQSURBVGiB7ZgxS8NAFMffSZKCgp/CwcHJwUUHJyMoitWhKIibg5uDk2NnJx3ERQSlg61YWjWC0sXVydFPUVBoUoiDPchdc3dJ7mhDeL/tkutd3/vf5d79CWhSWV8Oo+1aq … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/376.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/376.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514)

#### 1. `bundles/bloxd.io/chunks/js/376.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3602ff944dcbe37ef33dc2748241a5f124f89c4b34aa2f7d619ae47e87806514) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/376.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/376.js#L4-L5)

```diff
-   42965: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
+   43526: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPWSURBVFiF3ZdbaBxlFIC/TWazk73imDQslazUEmgDqVECsSEPgkEQKfrQIl5AWSo2pn2xt9gmkiamaWy9NAEjkjSUIDFRlAh98TG0DyoI4oulxiRGI9ZOdrM7k393NqwP6 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/377.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/377.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4)

#### 1. `bundles/bloxd.io/chunks/js/377.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2f2a459e39dfb9432ab3601d2a767162b7be87e54a8db1f3865a753a5d9cdca4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/377.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/377.js#L4-L5)

```diff
-   42972: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
+   43532: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA4CAYAAABQZsDpAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANySURBVGiB3Vm/ixNREJ7Vl8idtlaKhYU2AbFI5X9wcCBYCWdznCJaWAQhYHGkOBBF8BoRUZsE0gpC/gOrCBKwkCvsrGz1DpM9ziKZ9e28eTsvu7NJ3K/Jj/dr9n3fzHszG … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/378.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/378.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace)

#### 1. `bundles/bloxd.io/chunks/js/378.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98aceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d3c0bd8223be09a003a3f76c7219e93772392b073359c6a84f5fa68b78c98ace) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/378.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/378.js#L4-L5)

```diff
-   42980: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
+   43536: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB4SURBVCiRY2AYfoARXcAixuo/AwMDw9fXHxjYuDkYGBgYGH59/cHALSrAwMDAwHBiyTFGFlymXd55DcVAmGFYga67Fk5JmBwTugTMSdgATA5DEzEAQ9Ovrz9wKobJYWjiF … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/379.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/379.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72)

#### 1. `bundles/bloxd.io/chunks/js/379.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2398c129baefde5a4eb7d8e839fe4f7d79108a225d38cfdb7dc10cb356d9c72) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/379.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/379.js#L4-L5)

```diff
-   42987: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
+   43545: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAABCAYAAACbkyOnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEXSURBVBiVdcE9LwNhAMDxv/Z6KvdSvZ6USNOIRGKxiEnEYkMHpn4BC0obiUlj8tZSX0BCTJKGIDZWwiYMEglhs5RGe889pz0+gd+vZWOv/DuSVDAtm8rtOTfqEPePOaT0M … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/380.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/380.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355)

#### 1. `bundles/bloxd.io/chunks/js/380.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1f85e9856f8fe2604e04db2e28401d6f679fd341e068a74ce45622577c923355) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/380.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/380.js#L4-L5)

```diff
-   42989: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
+   43552: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAABCAYAAADq6085AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA8SURBVAiZATEAzv8B9Ke5//lBEQD1VWYA0wwrADMxNQDo4N4AC/P/ACOSdACgm5kANVRKAPLu7AAGX5UAEdoULN8RPVsAAAAASUVORK5CYII=","alphaCutoff":0,"ve … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/381.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/381.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543)

#### 1. `bundles/bloxd.io/chunks/js/381.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bfcf7f1967d4686f9930c04a2f90e2553e95717c0aee9fac8e43a91a86271543) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/381.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/381.js#L4-L5)

```diff
-   42993: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
+   43556: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAANCAYAAACjDOAMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJjSURBVFiF7ZbNS1RhFIefiaCU/IohSxsiBElosBknN8L4BS10lYES2N6dK/FvCFftZm8gBuZqWgh9KLRJU0MhGQiRsdFksJpkRlenhZ7hXufet7mzqrjP8j7vub/FgcMPf … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/382.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/382.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1)

#### 1. `bundles/bloxd.io/chunks/js/382.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-26862d50d85129c241fe35b7af700a186b7401633cb506a43bf7b88cc5e58fd1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/382.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/382.js#L4-L5)

```diff
-   43e3: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
+   43558: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABPSURBVCiRYwgKiv7PAAXIbBoBqlnHGB2T+Z+BgYHh+7dPKBKcXHwMDAwMDEuXTGdkIsYkFpgJ69YtZcTlVqJMop4iFpgv0MMIJk60SUQBAGjCGCvRlcOvAAAAAElFTkSuQ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/383.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/383.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8)

#### 1. `bundles/bloxd.io/chunks/js/383.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-75e63f634b798a31e9f458cf894c02b1e4c27d55e609d80618a431e1bf441de8) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/383.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/383.js#L4-L5)

```diff
-   43008: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
+   43564: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABCSURBVBiVY1RSVv7PAAWXr1yHMRl0dTTh7Ht37zIyMRAJiFbI+PX7L7jVyNYhO4Obk40GVrPgsg5ZnCQTiVZINAAAQoERlZZrqhQAAAAASUVORK5CYII=","alphaCutof … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/384.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/384.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd)

#### 1. `bundles/bloxd.io/chunks/js/384.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f9bc6d75c3f5de3edc765c40dc136df4e9ee75c35fdb707772873c28a521abbd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/384.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/384.js#L4-L5)

```diff
-   43015: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   43573: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAC+SURBVEiJY2xpn/qfgQhQU5nNSIra/XMz/jMwMDA4Js9gZCJGE6WABcaYN6cPq4KklCI4+/2bV0Qb7Jg8gxHDEmJAb28jIxHKMABJlpASJ8h8+sYJMYCUOCHbEorjBDkV4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/385.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/385.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4)

#### 1. `bundles/bloxd.io/chunks/js/385.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d3fab561a295df5110a9258862189fd598d99f3746c4388da573367abad31af4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/385.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/385.js#L4-L5)

```diff
-   43023: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
+   43576: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/386.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/386.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff)

#### 1. `bundles/bloxd.io/chunks/js/386.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-60ea2e124153d73779fe337a7733cafe52f026c0aef2d5d68994ccdf8b697cff) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/386.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/386.js#L4-L5)

```diff
-   43031: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
+   43578: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA5CAYAAACCsf3qAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFpSURBVGiB7drPbcIwFAbw98DqhVM40xWyAwsUiRVYoWOwAitEogt0h64A5xYhIapKNBx4QeAq9R/sxIm+380ScYL5/CJjM3maf5TlbTsbX5pfn+zb5b+KnON0LBQR0frn/ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/387.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/387.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be)

#### 1. `bundles/bloxd.io/chunks/js/387.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100beR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-466ec9dd30affa852e3572b52fd199a96ddff9a63822409c8f7e176bc8c100be) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/387.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/387.js#L4-L5)

```diff
-   43036: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
+   43581: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY5ieLf7/8yqV/79fGfzvmLvmPwBVswq9s1wBAAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[1,0.52644,0.3074,1,0.52644,0.3074,1 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/388.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/388.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a)

#### 1. `bundles/bloxd.io/chunks/js/388.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a33194d5dba4d79fb1ab13f41b817a2ebcbe3026a33fd067ea5b5e377ad7424a) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/388.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/388.js#L4-L5)

```diff
-   43038: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
+   43586: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHfSURBVEiJ7VS/S0JRGD03nsMbtAYhSMc3RKTDa4xQJApaAgWXVgfbbG9sbHARHPwLHhi0BElIEo41aIiDYwbCG8w3OPjgNlyvXt+75e3H0NBZLt/9vne/891z3iWOZVA9F … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/389.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/389.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4)

#### 1. `bundles/bloxd.io/chunks/js/389.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-8a5d2fb446e1251d6ec533bee6a49be1bc8d024feaf53df359185fd143c9cff4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/389.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/389.js#L4-L5)

```diff
-   43044: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
+   43594: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAqSURBVAiZY7wxWe6/+oJqBgaGswwMDGcZrkz8xiAuxsLAeeE7A09YKQMAwl8KmURuPDUAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.85713,0.70382 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/390.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/390.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061)

#### 1. `bundles/bloxd.io/chunks/js/390.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d819d87df71b9b8501e4cff8d13c2d1ead0b75e34a765c27549ce4b4589b7061) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/390.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/390.js#L4-L5)

```diff
-   43053: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
+   43603: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEbSURBVFiF7ZgxCsJAEEVnJAomNoKFWIjnEESs9BKezktoJSJYeQE7sQgWgk2SwhRrIQlOUNewWV2Ged3mh00m/082GwRDbpuB+qQ3xkf8xZy1shdxFSnENbx/3wAAwHXRI … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/391.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/391.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982)

#### 1. `bundles/bloxd.io/chunks/js/391.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-714ba6a9495081202611c791206c3f6ff898cacac4ee3d7b9ecaca7486b3d982) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/391.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/391.js#L4-L5)

```diff
-   43055: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
+   43606: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAABACAYAAAATffeWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANISURBVFiF5ZdLaFNZHMZ/uT1tzA2tqKtKQi1DFoUxLoTioiFZdOGgdlYKAelipCMM1BcUfNWFRSyKD9DFuIizcgozqxGDWCjMYBdVEUYRgq3QJykucmnU3NR7c42LJtfXv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/392.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/392.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d)

#### 1. `bundles/bloxd.io/chunks/js/392.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-3e5c341659ac0c77a55083c0f5ab80951160319507b2d2a2be5db2c8df4e270d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/392.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/392.js#L4-L5)

```diff
-   43060: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
+   43608: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAF9SURBVGiB7ZjfSsMwFMZPTbCo2/CFxH8wmTK88F288tLXmSIiw4ET6Rttw1HZrDcpNLFL2iaQEL7fXdqcNidfTpN+CVlyNrwuiIi2mw0REWXzWaLrf3IxLIiIGOdUjSs5P … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/393.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/393.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234)

#### 1. `bundles/bloxd.io/chunks/js/393.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-20308f96532870f3a051a9138f9b7a1e4e2a11e7b9633b8731fa631449caf234) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/393.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/393.js#L4-L5)

```diff
-   43069: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43614: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFyYoAOvp6gD+8e4AzmUa4gxrmFAAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/394.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/394.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239)

#### 1. `bundles/bloxd.io/chunks/js/394.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-597404c30f9730379880935b3eaa855def22325a0daac664ae2b9f2dc19ab239) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/394.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/394.js#L4-L5)

```diff
-   43078: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
+   43616: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZY7RyWfaf+d8CBh5eXoZ38S0MADX5Bb3RlRVIAAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/395.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/395.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec)

#### 1. `bundles/bloxd.io/chunks/js/395.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceecR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-22d9fe7d368f667c90947d6b270ff468357439949ae7209c4b6ca108927cceec) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/395.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/395.js#L4-L5)

```diff
-   43086: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
+   43623: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAACCAYAAAA3t6CmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFoSURBVCiR7dDLK+QBAMDx70/jOfPzmt+MRmRkkvcjW5tGxq4cLOawTsNBKYUUF4/IZRwYMbub04iMsG0SGTalSVzVlJYUicM0K4SfR5QxxtVxL3vz+RM+wtiUM6jTasnKy … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/396.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/396.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7)

#### 1. `bundles/bloxd.io/chunks/js/396.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ab362876e52db5d309239495380271a7df7b312697b4671e347f0f7d4073fc7) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/396.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/396.js#L4-L5)

```diff
-   43094: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
+   43630: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVDiNY2RgYGDoTTf8zwAFxTPPM6LzQ6IT4HwGBgaGNUsXMNo6uaGIHd63i5GJgYqAhYGBgUGC8xuKIDr/x/fvRBlGfZcRAlvWrWREFzu8bxeGGFGGYYsAbOqo780vX … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/397.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/397.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f)

#### 1. `bundles/bloxd.io/chunks/js/397.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-f7f7c7c89c5eed442844b0be110897a8ec194635b63fe394f73e7579d9be711f) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/397.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/397.js#L4-L5)

```diff
-   43096: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
+   43635: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGQSURBVGiB7ZivT8QwFMffuCVLSI6/gF8GwykECf8BAocgQeERJBgwJzEo3HkUrigEfwXqMBggE2guIVmyMMR1yb2ya7e1SZvm+3Hd3tv23ndN229ClpxcbFRERGVZERGRm … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/398.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/398.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168)

#### 1. `bundles/bloxd.io/chunks/js/398.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-261b6d2bb8a4e56f3bfb2f690ec2b6333bb864a52ff9fec254b0b0351ca61168) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/398.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/398.js#L4-L5)

```diff
-   43103: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
+   43639: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYAFTbLAOjp+AAD4T0A0BkZ4rm59cYAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/399.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/399.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77d)

#### 1. `bundles/bloxd.io/chunks/js/399.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-90895c6f863987ed6541fc28f5f164165e18e815d727a14f3f531f501491c77d) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/399.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/399.js#L4-L5)

```diff
-   43105: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43646: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAZSURBVAiZYzzttfd/u0I8Ay8vC8M2gXwGADicBSzq4ZO6AAAAAElFTkSuQmCC","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/400.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/400.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35b)

#### 1. `bundles/bloxd.io/chunks/js/400.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-824826e19e46e611ae81cc96b6c394d7ca4ff430c1c2a991ca181214de33a35b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/400.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/400.js#L4-L5)

```diff
-   43108: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
+   43651: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY4wvV/jPwMDAsLDzAWNQlsx/BgYGBiYGLAAAv+IF21V42BkAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/401.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/401.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4)

#### 1. `bundles/bloxd.io/chunks/js/401.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-ff6c22d0403b441ebb5a9ccc02bf9736c66a8f3a0fa50819f478fe5f26a5fdb4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/401.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/401.js#L4-L5)

```diff
-   43117: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
+   43658: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAACCAYAAAAti0AoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFQSURBVCiR7dDLK8MBAMDx70/z3H5e+22aCFnyDOfJPHLwPHAaB6UUWnHxiFx2mSlDThOZPJJkGVKSuKqVkCKh1ghhHlE25uro4OjzJ3yEsSl7QKNWk5megXPHxW/Mjrp59 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/402.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/402.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5af)

#### 1. `bundles/bloxd.io/chunks/js/402.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-4c405d18837fbe8cbe9aaf07c37ae5f8054c7082f76e96345e41a0a23ed2f5af) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/402.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/402.js#L4-L5)

```diff
-   43122: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZgxTsNAEEX/WKN0uUEKKiouwDUiUdOnoqNLQUcFlXsqiki+BhegokKRb+Auitg0MVpBitj/24yQnxRtVkrGM/tnxqO19fNNAsHD3caWqwVloypriQ1//3hjb … [truncated]
+   43665: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVDiNY2RgYGCYVKj6nwEK8vpvM6LzM1uU4XwGBgaG6TV3GYOyZFDE1k17wsjEQEXAwsDAwCD8H9VMdP6P7/+IMoz6LiME5rfeZ0QXWzftCYYYUYZhiwBs6qjvzS9fv … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/403.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/403.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8af)

#### 1. `bundles/bloxd.io/chunks/js/403.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9853737249d1438d2da96d9fed2f1c94b1626bfdf695a77949456f214735c8af) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/403.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/403.js#L4-L5)

```diff
-   43124: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY/T0D/7PwMDAsH3jWkZbJ7f/DAwMDEwMWAAAvTcFyNvAMsUAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43667: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGDSURBVGiB7ZgxTsNAEEX/WKN0uUEKKiouwDUiUdOnoqNLQUcFlXsqiki+BhegokKRb+Auitg0MVpBitj/24yQnxRtVkrGM/tnxqO19fNNAsHD3caWqwVloypriQ1//3hjb … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/404.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/404.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960)

#### 1. `bundles/bloxd.io/chunks/js/404.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-b15e8cfde8c11c3e67c4aba91fde1e87abda30c4b62f6c1ca93c0f6053dcd960) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/404.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/404.js#L4-L5)

```diff
-   43130: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZgxTsNAEEX/WCNX5CzAAdKkiERFwT0okDgFEgX3oEAUkSzhxgcAzuJUbpYmRitIYft/hxHyk6LNSsl4Zv/MeLR2e3efQPD0+GDrzZay0dSVxIa/f3wyNmQ0d … [truncated]
+   43676: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY/T0D/7PwMDAsH3jWkZbJ7f/DAwMDEwMWAAAvTcFyNvAMsUAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/405.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/405.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9)

#### 1. `bundles/bloxd.io/chunks/js/405.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0cd31764e445499dae9e1623119a3f0c21e50369d49556ef56fa1bef3b8e44b9) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/405.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/405.js#L4-L5)

```diff
-   43136: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH4SURBVGiB7Zg/S8NAGMafSAYtiJRrqkJWJ510ci3oVB0K7VLpVugo/QT9BMVRcBAEFwUHcXJwdXPSQQQnh9o2FBG61kEupPmf3OV6B/lN13C9vHn63HtPqj0+f8zAwOH+l … [truncated]
+   43684: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAqCAYAAAAeeGN5AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGBSURBVGiB7ZgxTsNAEEX/WCNX5CzAAdKkiERFwT0okDgFEgX3oEAUkSzhxgcAzuJUbpYmRitIYft/hxHyk6LNSsl4Zv/MeLR2e3efQPD0+GDrzZay0dSVxIa/f3wyNmQ0d … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/406.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/406.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473e)

#### 1. `bundles/bloxd.io/chunks/js/406.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-36943ddaa695d97d1a935eb3c96a7529383a055fd819678a8d80b38f6e74473e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/406.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/406.js#L4-L5)

```diff
-   43140: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH7SURBVGiB7Zg/SMNAGMVfJIMWREqaqpBJcNJJJweXgk4VpNAuhU4WOndy7OjUWXATXBTEwcnB1UFw0kGETh1q21BE6FoHuZDmf3J36R3kN13D9fLl9d13L1WeXr5moOD4Y … [truncated]
+   43687: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH4SURBVGiB7Zg/S8NAGMafSAYtiJRrqkJWJ510ci3oVB0K7VLpVugo/QT9BMVRcBAEFwUHcXJwdXPSQQQnh9o2FBG61kEupPmf3OV6B/lN13C9vHn63HtPqj0+f8zAwOH+l … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/407.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/407.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06)

#### 1. `bundles/bloxd.io/chunks/js/407.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-bcb3b8b0a954112d90233f067e1f31a0df7e4d9a61bbfac3b983d6b8eac1ae06) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/407.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/407.js#L4-L5)

```diff
-   43142: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABBCAYAAADc1PQOAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKdSURBVFiF7ZfNaxNBHIafXVarqVGIFmy0VpAghVD8aPAQip7sTUH8gBZtoLFCFdQ/QPTqqZfgoagoFUEsPfTcS7FKJf0iFCzkYKJtKiXm0JCVJko8xNnuppvsblRIoe9pd … [truncated]
+   43691: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAxCAYAAAChzEtEAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH7SURBVGiB7Zg/SMNAGMVfJIMWREqaqpBJcNJJJweXgk4VpNAuhU4WOndy7OjUWXATXBTEwcnB1UFw0kGETh1q21BE6FoHuZDmf3J36R3kN13D9fLl9d13L1WeXr5moOD4Y … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/408.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/408.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679)

#### 1. `bundles/bloxd.io/chunks/js/408.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-da3a24135e2a2243f6ad42ddb8a76b524921076704e7aea59f7381db1df76679) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/408.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/408.js#L4-L5)

```diff
-   43148: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABYCAYAAAAdk2IxAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQ8SURBVHic7Zw9TBRBFMffmIPjw4QYG0tsrGgorNBaYwU2BmKjhhApT41REhNN0FiIncZCTYwRrY5GAzVQX4MNDZY0BDXycVCsxd0cu7O7t18zu/M2/191NzM7+/H2P/Pm7 … [truncated]
+   43696: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABBCAYAAADc1PQOAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKdSURBVFiF7ZfNaxNBHIafXVarqVGIFmy0VpAghVD8aPAQip7sTUH8gBZtoLFCFdQ/QPTqqZfgoagoFUEsPfTcS7FKJf0iFCzkYKJtKiXm0JCVJko8xNnuppvsblRIoe9pd … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/409.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/409.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50)

#### 1. `bundles/bloxd.io/chunks/js/409.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1ec4c60be473800338bf6f83e23db29f333d5d3fba029bba4252d9fc64c24f50) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/409.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/409.js#L4-L5)

```diff
-   43150: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHlSURBVEiJxVU9SwNBEH0nZ9AgaCEIakgjosEzhZAgKieIhZVtwPYK/QsSUohY+QMs8gNsrSxUMKhIrrtE1pAu+AEBi4gSJQbXQmfdxI23QdEHV8zu3L6Zee/2wDyX12tVX … [truncated]
+   43698: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABYCAYAAAAdk2IxAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAQ8SURBVHic7Zw9TBRBFMffmIPjw4QYG0tsrGgorNBaYwU2BmKjhhApT41REhNN0FiIncZCTYwRrY5GAzVQX4MNDZY0BDXycVCsxd0cu7O7t18zu/M2/191NzM7+/H2P/Pm7 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/410.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/410.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5)

#### 1. `bundles/bloxd.io/chunks/js/410.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1eab6a178dcbc4b81acc6a562e03b8503415994912e42b89b643b672889642f5) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/410.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/410.js#L4-L5)

```diff
-   43156: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY2zvnfBfTV2NAQAR2QMYLvTBQAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.78216,0.4149,0.514,0.78216,0.4149,0.514,0.782 … [truncated]
+   43702: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHlSURBVEiJxVU9SwNBEH0nZ9AgaCEIakgjosEzhZAgKieIhZVtwPYK/QsSUohY+QMs8gNsrSxUMKhIrrtE1pAu+AEBi4gSJQbXQmfdxI23QdEHV8zu3L6Zee/2wDyX12tVX … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/411.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/411.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1)

#### 1. `bundles/bloxd.io/chunks/js/411.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7c6533e4f1ab7ae7c2e6e0684120636dbc41504a563c6deb8305568b84760ee1) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/411.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/411.js#L4-L5)

```diff
-   43159: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAsSURBVAiZASEA3v8Aipaa//9m////Zsz//2aZ//9mZv/Q3N7/o7G2//8z//+SuBjWIEp09QAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.14287,0.4 … [truncated]
+   43711: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAARSURBVAiZY2zvnfBfTV2NAQAR2QMYLvTBQAAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.78216,0.4149,0.514,0.78216,0.4149,0.514,0.782 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/412.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/412.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefcc)

#### 1. `bundles/bloxd.io/chunks/js/412.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefccR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-063fe3d5f83c171a032fdf9ed2c4d9d4ae0cf930cb77eb1af9f8f500727cefcc) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/412.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/412.js#L4-L5)

```diff
-   43162: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEgSURBVFiF7Ze9CsIwFIVvpJP1rw4iguDmOwgdxKmbkw/p5NZJHATfwUERhCIO/tW66iARb1FjSavhcr8tPSXN7Tm3aQRoMh3710+62/PEL+bMJX2IqXAhpmH9ewEAAP5oi … [truncated]
+   43715: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAsSURBVAiZASEA3v8Aipaa//9m////Zsz//2aZ//9mZv/Q3N7/o7G2//8z//+SuBjWIEp09QAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.14287,0.4 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/413.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/413.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7d6f145e4e34160970e9c67c77dbba76310453445075b2f640527463ba83411b)

#### 1. `bundles/bloxd.io/chunks/js/413.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7d6f145e4e34160970e9c67c77dbba76310453445075b2f640527463ba83411bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7d6f145e4e34160970e9c67c77dbba76310453445075b2f640527463ba83411b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/413.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/413.js#L4-L5)

```diff
-   43170: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABZCAYAAADWz7GUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASXSURBVHic7Z3NTtwwEMedqoBWC9w4cEJiT0hQQVv1Qh+Ah+ABeKQ+QB+iL7AXBBISSNADlXiFqlXVcqCH1ivv7NieiZ3Yk8xPQiSOHWc9G//t8cc2P3/9eTEjZjpZb0qXw … [truncated]
+   43722: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEgSURBVFiF7Ze9CsIwFIVvpJP1rw4iguDmOwgdxKmbkw/p5NZJHATfwUERhCIO/tW66iARb1FjSavhcr8tPSXN7Tm3aQRoMh3710+62/PEL+bMJX2IqXAhpmH9ewEAAP5oi … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/414.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/414.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2c9245090789d6cb2e7f7867c88160391fd7dc6a7866461b05286d573710d5cd)

#### 1. `bundles/bloxd.io/chunks/js/414.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2c9245090789d6cb2e7f7867c88160391fd7dc6a7866461b05286d573710d5cdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-2c9245090789d6cb2e7f7867c88160391fd7dc6a7866461b05286d573710d5cd) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/414.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/414.js#L4-L5)

```diff
-   43173: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAA+CAYAAAAGTBTnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALrSURBVHic7Zu/b9NAFMefkZ0qDSgzKx2omEBIwEZXFkQXpnblP6j6N/Q/qDIzdQFlKCN0g0pVO6F0KEMk/gALaFUymIWzEsfune13P9z3/SxpUvvdRV9/3929u0T0n+zX9 … [truncated]
+   43730: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABZCAYAAADWz7GUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASXSURBVHic7Z3NTtwwEMedqoBWC9w4cEJiT0hQQVv1Qh+Ah+ABeKQ+QB+iL7AXBBISSNADlXiFqlXVcqCH1ivv7NieiZ3Yk8xPQiSOHWc9G//t8cc2P3/9eTEjZjpZb0qXw … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/415.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/415.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c3e4da548292bb76cfcf797c51c9de6a2d6b6a516646957ac2bd5768b69ace21)

#### 1. `bundles/bloxd.io/chunks/js/415.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c3e4da548292bb76cfcf797c51c9de6a2d6b6a516646957ac2bd5768b69ace21R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c3e4da548292bb76cfcf797c51c9de6a2d6b6a516646957ac2bd5768b69ace21) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/415.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/415.js#L4-L5)

```diff
-   43176: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVFiFY2SgEOw6cOo/utibdx+wqhUREiDKTFL0uzmYMRJlKA7ARInm4QBYqGVQo3wAgiNPWH39ww0o/Ft37xPU8+79ezhbTVmRRBdiB6MpgNoGSongl3/2Br+8kKAgX … [truncated]
+   43736: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAA+CAYAAAAGTBTnAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALrSURBVHic7Zu/b9NAFMefkZ0qDSgzKx2omEBIwEZXFkQXpnblP6j6N/Q/qDIzdQFlKCN0g0pVO6F0KEMk/gALaFUymIWzEsfune13P9z3/SxpUvvdRV9/3929u0T0n+zX9 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/416.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/416.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d993c07099533fc219a593dc3e961f8a7a39492b720410eb88c44832a197c01b)

#### 1. `bundles/bloxd.io/chunks/js/416.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d993c07099533fc219a593dc3e961f8a7a39492b720410eb88c44832a197c01bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-d993c07099533fc219a593dc3e961f8a7a39492b720410eb88c44832a197c01b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/416.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/416.js#L4-L5)

```diff
-   43182: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAjSURBVAiZY1xaE/b/1fOPDBvu/GBgfsso0mCnLcwgy/aXAQCvUwrfF7ZSFwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765, … [truncated]
+   43740: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVFiFY2SgEOw6cOo/utibdx+wqhUREiDKTFL0uzmYMRJlKA7ARInm4QBYqGVQo3wAgiNPWH39ww0o/Ft37xPU8+79ezhbTVmRRBdiB6MpgNoGSongl3/2Br+8kKAgX … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/417.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/417.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-307baad8b22de920ce7194a33d5a74e248264c78b3b49c53f36bbf9e4a17eb88)

#### 1. `bundles/bloxd.io/chunks/js/417.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-307baad8b22de920ce7194a33d5a74e248264c78b3b49c53f36bbf9e4a17eb88R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-307baad8b22de920ce7194a33d5a74e248264c78b3b49c53f36bbf9e4a17eb88) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/417.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/417.js#L4-L5)

```diff
-   43188: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   43748: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAjSURBVAiZY1xaE/b/1fOPDBvu/GBgfsso0mCnLcwgy/aXAQCvUwrfF7ZSFwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0.33843,0.44812,0.5765, … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/418.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/418.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-126c8bc3fdff3e96626732c62bb7abfbe13a974a96d8a9be10701c17b62c20c4)

#### 1. `bundles/bloxd.io/chunks/js/418.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-126c8bc3fdff3e96626732c62bb7abfbe13a974a96d8a9be10701c17b62c20c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-126c8bc3fdff3e96626732c62bb7abfbe13a974a96d8a9be10701c17b62c20c4) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/418.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/418.js#L4-L5)

```diff
-   43197: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY1haE/afgYHhf3+y+38AI10Frpw87BMAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1499,0.03497,-0.0358,0.1499,0.03497,-0.03 … [truncated]
+   43757: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/419.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/419.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-42ba2e4ef34576dbe90cd51da8fe4868272a3246f853777785b3def617a45b0e)

#### 1. `bundles/bloxd.io/chunks/js/419.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-42ba2e4ef34576dbe90cd51da8fe4868272a3246f853777785b3def617a45b0eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-42ba2e4ef34576dbe90cd51da8fe4868272a3246f853777785b3def617a45b0e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/419.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/419.js#L4-L5)

```diff
-   43202: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY6zxs/p/+CMrQ5qtOAMAI8kEeJBQSNgAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
+   43760: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY1haE/afgYHhf3+y+38AI10Frpw87BMAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.1499,0.03497,-0.0358,0.1499,0.03497,-0.03 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/420.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/420.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d9f07324118a892965f5f89246845afab8b0c9db9376d6a72e9509ecf0ecd35)

#### 1. `bundles/bloxd.io/chunks/js/420.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d9f07324118a892965f5f89246845afab8b0c9db9376d6a72e9509ecf0ecd35R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-5d9f07324118a892965f5f89246845afab8b0c9db9376d6a72e9509ecf0ecd35) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/420.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/420.js#L4-L5)

```diff
-   43206: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAnSURBVAiZYzzz3/j/bcazDKpn/jMwMJyFY5Hmlww/Tp5k+NL4nAEAIoUPZQQlTuoAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287,0.46787,0.2 … [truncated]
+   43767: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAABCAYAAAAb4BS0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAVSURBVAiZY6zxs/p/+CMrQ5qtOAMAI8kEeJBQSNgAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0,0.53441,0.4375,0,0.53441,0.4375,0,0.53441 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/421.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/421.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-08a0c9f902f529ae2eb2491dd574e9c5a2899d39cda96226741a0c2a2fc1ca76)

#### 1. `bundles/bloxd.io/chunks/js/421.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-08a0c9f902f529ae2eb2491dd574e9c5a2899d39cda96226741a0c2a2fc1ca76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-08a0c9f902f529ae2eb2491dd574e9c5a2899d39cda96226741a0c2a2fc1ca76) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/421.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/421.js#L4-L5)

```diff
-   43215: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAxCAYAAABZLLCzAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFrSURBVFiFY9x1/PZ/BgqAm6UqIzXMmDF7FYoZGalhjEyUGEprwAJj/PzyiYGBgYHhx+ePeDVw8PIzMDAwMLDz8MHFXty7ycDAwMDw7ds3kizn4uLCKz80Qo5QiKGrQw45Q … [truncated]
+   43774: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAABCAYAAAAMwoR9AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAnSURBVAiZYzzz3/j/bcazDKpn/jMwMJyFY5Hmlww/Tp5k+NL4nAEAIoUPZQQlTuoAAAAASUVORK5CYII=","alphaCutoff":0,"vertices":[0.14287,0.46787,0.2 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/422.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/422.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c990b02a4168e2c40623844c7ab3287a186c46973c94e2f4f27ce8c00bee65c6)

#### 1. `bundles/bloxd.io/chunks/js/422.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c990b02a4168e2c40623844c7ab3287a186c46973c94e2f4f27ce8c00bee65c6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-c990b02a4168e2c40623844c7ab3287a186c46973c94e2f4f27ce8c00bee65c6) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/422.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/422.js#L4-L5)

```diff
-   43223: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEVSURBVFiFY2SgEOw6cOo/utibdx+wqhUREiDKTFL0uzmYMRJlKA7ARInm4QBYqGXQsQPbCKq5hcS2cvBClbt7n6D+d+/fw9lqyookuhA7GE0B1DaQh4cHr/yXL1/wygsJC … [truncated]
+   43776: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAxCAYAAABZLLCzAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFrSURBVFiFY9x1/PZ/BgqAm6UqIzXMmDF7FYoZGalhjEyUGEprwAJj/PzyiYGBgYHhx+ePeDVw8PIzMDAwMLDz8MHFXty7ycDAwMDw7ds3kizn4uLCKz80Qo5QiKGrQw45Q … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/423.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/423.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-27904961a64f1b606c95ea8e0d7f4c5e9edb8bf41601eb5dfcfe3f6d25288a01)

#### 1. `bundles/bloxd.io/chunks/js/423.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-27904961a64f1b606c95ea8e0d7f4c5e9edb8bf41601eb5dfcfe3f6d25288a01R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-27904961a64f1b606c95ea8e0d7f4c5e9edb8bf41601eb5dfcfe3f6d25288a01) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/423.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/423.js#L4-L5)

```diff
-   43232: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFlSURBVGiBY2QgEbS0T/1Pino7w1skmW/nMZGRVDcxkaphMAIWcjW+f/MKr7ygiBi5RpMMhkVMjHpisIBRTwwWMOqJwQLIrifoWQ8QAsMiJhhJbQsNNlBTmc04LGKChVAba … [truncated]
+   43782: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEVSURBVFiFY2SgEOw6cOo/utibdx+wqhUREiDKTFL0uzmYMRJlKA7ARInm4QBYqGXQsQPbCKq5hcS2cvBClbt7n6D+d+/fw9lqyookuhA7GE0B1DaQh4cHr/yXL1/wygsJC … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/424.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/424.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-077d97298865aaf16386316a9c266a3e9fa1211272574dec6fd5ffbfd7e21f44)

#### 1. `bundles/bloxd.io/chunks/js/424.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-077d97298865aaf16386316a9c266a3e9fa1211272574dec6fd5ffbfd7e21f44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-077d97298865aaf16386316a9c266a3e9fa1211272574dec6fd5ffbfd7e21f44) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/424.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/424.js#L4-L5)

```diff
-   43238: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAABCAYAAABDn4etAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACUSURBVAiZLcwhEkFRFIDh/71z7r3HuxcvGpI1oFiCJFkGoxhJN0MRGDOiqNmCJbACC0DTCMSvfNlhPvh4U9TliOS05ElwQvCCSsbu/KZelsSU8N5zvV1IyWPmcJrTeLyoF … [truncated]
+   43791: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFlSURBVGiBY2QgEbS0T/1Pino7w1skmW/nMZGRVDcxkaphMAIWcjW+f/MKr7ygiBi5RpMMhkVMjHpisIBRTwwWMOqJwQLIrifoWQ8QAsMiJhhJbQsNNlBTmc04LGKChVAba … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/425.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/425.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0190e01c374541ebab8a6781c9c803bdfc7167d6d7a07d86082e800f9bdc549c)

#### 1. `bundles/bloxd.io/chunks/js/425.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0190e01c374541ebab8a6781c9c803bdfc7167d6d7a07d86082e800f9bdc549cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-0190e01c374541ebab8a6781c9c803bdfc7167d6d7a07d86082e800f9bdc549c) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/425.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/425.js#L4-L5)

```diff
-   43240: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7ZgxSwMxFMdfyonSQRcnN8f7BCqCmyg4CPUjOLp0cpCOfoAujt06V0QKipsgcp/AwcHNyUWHolg8lxw06TW5uwTyCP/fltx7yb38LyT3F+TI9u1rTkSU/06Ji … [truncated]
+   43799: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAABCAYAAABDn4etAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACUSURBVAiZLcwhEkFRFIDh/71z7r3HuxcvGpI1oFiCJFkGoxhJN0MRGDOiqNmCJbACC0DTCMSvfNlhPvh4U9TliOS05ElwQvCCSsbu/KZelsSU8N5zvV1IyWPmcJrTeLyoF … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/426.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/426.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-23133cd8d43b26d8e2e3d77bbc2c493949b871617a46bf6af250054bdb3cc59b)

#### 1. `bundles/bloxd.io/chunks/js/426.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-23133cd8d43b26d8e2e3d77bbc2c493949b871617a46bf6af250054bdb3cc59bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-23133cd8d43b26d8e2e3d77bbc2c493949b871617a46bf6af250054bdb3cc59b) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/426.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/426.js#L4-L5)

```diff
-   43246: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA3laKAPnj7AApx4oA2VUa4riPd4wAAAAAS … [truncated]
+   43803: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABCCAYAAAD+Kj5zAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVGiB7ZgxSwMxFMdfyonSQRcnN8f7BCqCmyg4CPUjOLp0cpCOfoAujt06V0QKipsgcp/AwcHNyUWHolg8lxw06TW5uwTyCP/fltx7yb38LyT3F+TI9u1rTkSU/06Ji … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/427.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/427.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a9d8c4ecf77412c9b6cae0ce4717ab43fba9182788c63d98f6bca336aecee8eb)

#### 1. `bundles/bloxd.io/chunks/js/427.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a9d8c4ecf77412c9b6cae0ce4717ab43fba9182788c63d98f6bca336aecee8ebR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a9d8c4ecf77412c9b6cae0ce4717ab43fba9182788c63d98f6bca336aecee8eb) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/427.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/427.js#L4-L5)

```diff
-   43248: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY/D0D/5vvu76f+tDz/7PVlH8DwBLyAlnC715WwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0 … [truncated]
+   43812: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAABCAYAAADTjP5iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABUSURBVAiZAUkAtv8Br49V/4uzUwALGBYAuqVBALSNUgDp7PkAFiEFAKOlzAB4iKsAHyYmAG1QKwA7MSEAxtLjADMpGgC+4xYA3laKAPnj7AApx4oA2VUa4riPd4wAAAAAS … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/428.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/428.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7677930567c2d1eb7ec7744f52626f0542e9848374798a15bd0918a2180a6c2e)

#### 1. `bundles/bloxd.io/chunks/js/428.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7677930567c2d1eb7ec7744f52626f0542e9848374798a15bd0918a2180a6c2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-7677930567c2d1eb7ec7744f52626f0542e9848374798a15bd0918a2180a6c2e) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/428.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/428.js#L4-L5)

```diff
-   43255: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7Q+9Ow/AwMDw1E7KUbzddf/MzAwMDAxYAEA32QGvyuloaEAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
+   43819: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAaSURBVAiZY/D0D/5vvu76f+tDz/7PVlH8DwBLyAlnC715WwAAAABJRU5ErkJggg==","alphaCutoff":0,"vertices":[0,0.46559,0.0625,0,0.46559,0.0625,0 … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/429.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/429.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-27bbe56a1f8ee34e481b50b35f950c95f10ba1452645eb5c1acd4dd47be982ab)

#### 1. `bundles/bloxd.io/chunks/js/429.js` (Changed code · before: `L4-L5` → after: `L4-L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-27bbe56a1f8ee34e481b50b35f950c95f10ba1452645eb5c1acd4dd47be982abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-27bbe56a1f8ee34e481b50b35f950c95f10ba1452645eb5c1acd4dd47be982ab) · [After (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/429.js#L4-L5) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/429.js#L4-L5)

```diff
-   43261: VV => {
-     VV.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAACCAYAAABhTY+VAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIXSURBVDiN7dJNS5MBAMDx/3Rb2Z5n85mPU6eSpg11Rdp7TZwVQWV6KC+rQ1AUlkajyMylkB3UZbOoDsssTQ2RSDRFEJE6eBFGkhIW4YL5Qla6ZSX4tq4d/QD+PsNP8fB5Q … [truncated]
+   43828: HH => {
+     HH.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAACCAYAAACQahZdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAAhSURBVAiZY7Q+9Ow/AwMDw1E7KUbzddf/MzAwMDAxYAEA32QGvyuloaEAAAAASUVORK5CYII=","alphaCutoff":0.05,"vertices":[0,0.28828,-0.2437,0,0.28 … [truncated]
```
