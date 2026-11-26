# Changed — Bundle Modifications Report (Part 033 / 116)

- **Updated at**: `2026-11-27T00:59 JST`
- **Part**: `33 / 116` (**270** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 032](part-032.md) · [Part 034 →](part-034.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (481 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 434. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7118-L7216` → after: `L10888-L10912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10888-L10912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10888-L10912) · [Before (L7118-L7216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7118-L7216)

```diff
-             this._onInputChanged(AV.Keyboard, 0, xV)
-           }
-         }, this._keyboardBlurEvent = () => {
-           if (this._keyboardActive) {
-             const VV = this._inputs[AV.Keyboard][0];
-             for (let eV = 0; eV < VV.length; eV++)
-               if (0 !== VV[eV]) {
-                 VV[eV] = 0;
-                 const xV = DV.CreateDeviceEvent(AV.Keyboard, 0, eV, 0, this, this._elementToAttachTo);
-                 this._onInputChanged(AV.Keyboard, 0, xV)
-               } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
-           }
-         }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
-       }
-       _handlePointerActions() {
-         this._maxTouchPoints = (0, qV.j)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
- ... (83 more removed lines; see GitHub link above)
+           }
+           onRemoteConfig(HH) {
+             const BH = HH.ok ? HH.config : void 0;
+             return BH && "sessionRecording" in BH ? !1 === BH.sessionRecording ? (this._persistRemoteConfig(BH), void this._discardRecording()) : (this._persistRemoteConfig(BH), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingSt … [truncated]
+               [fB]: !0
+             }), XG.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
+           }
+           log(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
+             var LH;
+             (null === (LH = this._lazyLoadedSessionRecording) || void 0 === LH ? void 0 : LH.log) ? this._lazyLoadedSessionRecording.log(HH, BH): XG.warn("log called before recorder was ready")
+           }
+           get _scriptName() {
+             var HH, BH;
+             const LH = null === (HH = this._instance) || void 0 === HH || null === (HH = HH.persistence) || void 0 === HH ? void 0 : HH.get_property(wH);
+             return (null == LH || null === (BH = LH.scriptConfig) || void 0 === BH ? void 0 : BH.script) || "lazy-recorder"
+ ... (9 more added lines; see GitHub link above)
```

#### 435. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7218-L7229` → after: `L10914-L10925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10914-L10925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10914-L10925) · [Before (L7218-L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7218-L7229)

```diff
-           });
-           this._elementToAttachTo.addEventListener("test", eV, xV), this._elementToAttachTo.removeEventListener("test", eV, xV)
-         } catch (xV) {}
-         this._pointerBlurEvent = () => {
-           if (this.isDeviceAvailable(AV.Mouse)) {
-             const VV = this._inputs[AV.Mouse][0];
-             this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
-             for (let eV = NV.LeftClick; eV <= NV.BrowserForward; eV++)
-               if (1 === VV[eV]) {
-                 VV[eV] = 0;
-                 const xV = DV.CreateDeviceEvent(AV.Mouse, 0, eV, 0, this, this._elementToAttachTo);
-                 this._onInputChanged(AV.Mouse, 0, xV)
+             return !mL(BH.cache_timestamp) && 36e5 >= Date.now() - BH.cache_timestamp
+           }
+           _onScriptLoaded(HH) {
+             var BH, LH, AH;
+             if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
+               if (!(null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.initSessionRecording)) return XG.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
+                 [IB]: !0
+               });
+               var rH;
+               if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (rH = tL.__PosthogExtensions__) || void 0 === rH ? void 0 : rH.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalh … [truncated]
+                 if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
+                 return this._recordingStatus = "awaiting_config", XG.info("persisted remote config is stale, requesting fresh config before starting"), void new NC(this._instance).load()
```

#### 436. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7232-L7240` → after: `L10964-L11017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R10964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L10964-L11017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L10964-L11017) · [Before (L7232-L7240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7232-L7240)

```diff
-           if (this.isDeviceAvailable(AV.Touch)) {
-             const VV = this._inputs[AV.Touch];
-             for (let eV = 0; eV < this._activeTouchIds.length; eV++) {
-               const xV = this._activeTouchIds[eV];
-               if (this._elementToAttachTo.hasPointerCapture?.(xV) && this._elementToAttachTo.releasePointerCapture(xV), -1 !== xV && 1 === VV[eV]?.[NV.LeftClick]) {
-                 VV[eV][NV.LeftClick] = 0;
-                 const JV = DV.CreateDeviceEvent(AV.Touch, eV, NV.LeftClick, 0, this, this._elementToAttachTo, xV);
-                 this._onInputChanged(AV.Touch, eV, JV), this._activeTouchIds[eV] = -1, this._onDeviceDisconnected(AV.Touch, eV)
-               }
+           tryAddCustomEvent(HH, BH) {
+             var LH;
+             return !!(null === (LH = this._lazyLoadedSessionRecording) || void 0 === LH ? void 0 : LH.tryAddCustomEvent(HH, BH))
+           }
+           flushBeforeIdentityReset() {
+             var HH, BH;
+             null === (HH = this._lazyLoadedSessionRecording) || void 0 === HH || null === (BH = HH.flushBeforeIdentityReset) || void 0 === BH || BH.call(HH)
+           }
+         }
+       },
+       IY = {
+         autocapture: class extends iX {
+           constructor(HH) {
+             super(new pX(HH)), this.instance = HH
+           }
+         },
+ ... (38 more added lines; see GitHub link above)
```

#### 437. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7243-L7250` → after: `L11020-L11024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11020-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11020-L11024) · [Before (L7243-L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7243-L7250)

```diff
-         }, this._pointerWheelEvent = VV => {
-           const eV = AV.Mouse;
-           this._inputs[eV] || (this._inputs[eV] = []), this._inputs[eV][0] || (this._pointerActive = !0, this._registerDevice(eV, 0, CV));
-           const xV = this._inputs[eV][0];
-           if (xV) {
-             xV[NV.MouseWheelX] = VV.deltaX || 0, xV[NV.MouseWheelY] = VV.deltaY || VV.wheelDelta || 0, xV[NV.MouseWheelZ] = VV.deltaZ || 0;
-             const JV = VV;
-             void 0 === VV.pointerId && (VV.pointerId = this._mouseId), 0 !== xV[NV.MouseWheelX] && (JV.inputIndex = NV.MouseWheelX, this._onInputChanged(eV, 0, JV)), 0 !== xV[NV.MouseWheelY] && (JV.inputIndex = NV.MouseWheelY, this._onInputChanged(eV, 0, JV)), 0 !== xV[NV.MouseWh … [truncated]
+           _getCaptureOptions() {
+             const HH = this._instance.config.capture_pageview;
+             return "history_change" === HH ? {
+               path: !0
+             } : TL(HH) ? HH : {}
```

#### 438. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7252-L7259` → after: `L11026-L11027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11026-L11027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11026-L11027) · [Before (L7252-L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7252-L7259)

```diff
-         }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = VV => {
-           VV.buttons > 1 && this._pointerCancelEvent(VV)
-         }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._p … [truncated]
-           passive: !1
-         }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
-           if (this.isDeviceAvailable(AV.Mouse)) {
-             const VV = this._inputs[AV.Mouse][0];
-             VV[NV.MouseWheelX] = 0, VV[NV.MouseWheelY] = 0, VV[NV.MouseWheelZ] = 0
+           _shouldCaptureHashChanges() {
+             return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
```

#### 439. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7261-L7270` → after: `L11029-L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11029-L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11029-L11032) · [Before (L7261-L7270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7261-L7270)

```diff
-         }))
-       }
-       _handleGamepadActions() {
-         this._gamepadConnectedEvent = VV => {
-           this._addGamePad(VV.gamepad)
-         }, this._gamepadDisconnectedEvent = VV => {
-           if (this._gamepads) {
-             const eV = this._getGamepadDeviceType(VV.gamepad.id),
-               xV = VV.gamepad.index;
-             this._unregisterDevice(eV, xV), delete this._gamepads[xV]
+           _hasLocationChanged(HH) {
+             const BH = this._getCaptureOptions(),
+               LH = this._lastLocation;
+             return !(!LH || !(BH.path && HH.pathname !== LH.pathname || BH.search && HH.search !== LH.search || this._shouldCaptureHashChanges(BH) && HH.hash !== LH.hash))
```

#### 440. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7272-L7305` → after: `L11034-L11048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11034-L11048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11034-L11048) · [Before (L7272-L7305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7272-L7305)

```diff
-         }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
-       }
-       _updateDevice(VV, eV, xV) {
-         const JV = navigator.getGamepads()[eV];
-         if (JV && VV === this._gamepads[eV]) {
-           const YV = this._inputs[VV][eV];
-           xV >= JV.buttons.length ? YV[xV] = JV.axes[xV - JV.buttons.length].valueOf() : YV[xV] = JV.buttons[xV].value
-         }
-       }
-       _getGamepadDeviceType(VV) {
-         return -1 !== VV.indexOf("054c") ? -1 !== VV.indexOf("0ce6") ? AV.DualSense : AV.DualShock : -1 !== VV.indexOf("Xbox One") || -1 !== VV.search("Xbox 360") || -1 !== VV.search("xinput") || -1 !== VV.indexOf("045e") && -1 === VV.indexOf("Surface Dock") ? AV.Xbox : -1 !== VV … [truncated]
-       }
-       _getPointerType(VV) {
-         let eV = AV.Mouse;
-         return ("touch" === VV.pointerType || "pen" === VV.pointerType || VV.touches) && (eV = AV.Touch), eV
-       }
- ... (18 more removed lines; see GitHub link above)
+           _capturePageview(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             try {
+               BH || this._flushPendingPageview();
+               const LH = this._getCurrentLocation();
+               if (!LH) return;
+               if (this._hasLocationChanged(LH)) {
+                 const LH = () => this._instance.capture(ZB, {
+                   navigation_type: HH
+                 });
+                 BH ? (this._pendingPageview = LH, Promise.resolve().then((() => this._flushPendingPageview()))) : LH()
+               }
+               this._lastLocation = LH
+             } catch (BH) {
+               qh.error(`Error capturing ${HH} pageview`, BH)
```

#### 441. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7308-L7319` → after: `L11051-L11066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11051-L11066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11051-L11066) · [Before (L7308-L7319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7308-L7319)

```diff
-           this._registeredManagers.push(VV)
-         }, this.unregisterManager = VV => {
-           const eV = this._registeredManagers.indexOf(VV);
-           eV > -1 && this._registeredManagers.splice(eV, 1)
-         };
-         const eV = Object.keys(AV).length / 2;
-         this._devices = new Array(eV);
-         const xV = (VV, eV) => {
-             this._devices[VV] || (this._devices[VV] = new Array), this._devices[VV][eV] || (this._devices[VV][eV] = eV);
-             for (const xV of this._registeredManagers) {
-               const JV = new oV(this._deviceInputSystem, VV, eV);
-               xV._addDevice(JV)
+           _isUrlChanging(HH) {
+             var BH, LH;
+             return !(mL(HH) || !JB) && (null === (BH = Nz(String(HH))) || void 0 === BH ? void 0 : BH.href) !== (null === (LH = JB.location) || void 0 === LH ? void 0 : LH.href)
+           }
+           _flushPendingPageview() {
+             const HH = this._pendingPageview;
+             if (HH) {
+               this._pendingPageview = void 0, this._isFlushingPageview = !0;
+               try {
+                 HH()
+               } catch (HH) {
+                 qh.error("Error capturing deferred pageview", HH)
+               } finally {
+                 this._isFlushingPageview = !1
+               }
+               this._lastLocation = this._getCurrentLocation()
```

#### 442. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7391-L7536` → after: `L11069-L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11069-L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11069-L11075) · [Before (L7391-L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7391-L7536)

```diff
-         }
-       }
-     }
-     var lV = xV(41450);
-     class LV {
-       constructor() {
-         this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
-       }
-       get singleClick() {
-         return this._singleClick
-       }
-       get zy() {
-         return this._doubleClick
-       }
-       get hasSwiped() {
-         return this._hasSwiped
- ... (130 more removed lines; see GitHub link above)
+           _setupPopstateListener() {
+             if (this._popstateListener) return;
+             const HH = () => {
+               this._capturePageview("popstate")
+             };
+             ah(JB, "popstate", HH), this._popstateListener = () => {
+               JB && JB.removeEventListener("popstate", HH)
```

#### 443. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7543-L7584` → after: `L11078-L11084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11078-L11084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11078-L11084) · [Before (L7543-L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7543-L7584)

```diff
-         } else
-           for (const UV of xV._pointerDownStage) VV = UV.action(this._unTranslatedPointerX, this._unTranslatedPointerY, VV, eV, !1);
-         let JV;
-         const YV = TV.b.POINTERDOWN;
-         VV ? (xV.onPointerDown && xV.onPointerDown(eV, VV, YV), JV = new TV.i(YV, eV, VV), this._setRayOnPointerInfo(VV, eV)) : JV = new TV.i(YV, eV, null, this), xV.onPointerObservable.hasObservers() && xV.onPointerObservable.notifyObservers(JV, YV)
-       }
-       _isPointerSwiping() {
-         return this._isSwiping
-       }
-       simulatePointerUp(VV, eV, xV) {
-         const JV = new PointerEvent("pointerup", eV);
-         JV.inputIndex = NV.Move;
-         const YV = new LV;
-         xV ? YV.zy = !0 : YV.singleClick = !0, this._checkPrePointerObservable(VV, JV, TV.b.POINTERUP) || this._processPointerUp(VV, JV, YV)
-       }
-       _processPointerUp(VV, eV, xV) {
- ... (26 more removed lines; see GitHub link above)
+           _setupHashchangeListener() {
+             if (this._hashchangeListener) return;
+             const HH = () => {
+               this._capturePageview("hashchange")
+             };
+             ah(JB, "hashchange", HH), this._hashchangeListener = () => {
+               JB && JB.removeEventListener("hashchange", HH)
```

#### 444. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7587-L7603` → after: `L11087-L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11087-L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11087-L11090) · [Before (L7587-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7587-L7603)

```diff
-         }
-       }
-       isPointerCaptured() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
-         return this._pointerCaptures[VV]
-       }
-       attachControl() {
-         let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
-           xV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-           JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const YV = this._scene,
-           UV = YV.sk();
-         JV || (JV = UV.getInputElement()), this._alreadyAttached && this.detachControl(), JV && (this._alreadyAttachedTo = JV), this._deviceSourceManager = new hV(UV), this._initActionManager = VV => {
-           if (!this._meshPickProceed) {
-             const eV = YV.skipPointerUpPicking || 0 === YV._registeredActions && !this._checkForPicking() && !YV.onPointerUp ? null : YV.Pr(this._unTranslatedPointerX, this._unTranslatedPointerY, YV.pointerUpPredicate, YV.pointerUpFastCheck, YV.cameraToUseForPointers, YV.pointerU … [truncated]
- ... (1 more removed lines; see GitHub link above)
+         },
+         heatmaps: class {
+           get _config() {
+             return this.instance.config
```

#### 445. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7605-L7634` → after: `L11092-L11112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11092-L11112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11092-L11112) · [Before (L7605-L7634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7605-L7634)

```diff
-           return VV
-         }, this._delayedSimpleClick = (VV, eV, xV) => {
-           if ((Date.now() - this._previousStartingPointerTime > fV.DoubleClickDelay && !this._doubleClickOccured || VV !== this._previousButtonPressed) && (this._doubleClickOccured = !1, eV.singleClick = !0, eV.ignore = !1, this._delayedClicks[VV])) {
-             const eV = this._delayedClicks[VV].evt,
-               xV = TV.b.POINTERTAP,
-               JV = new TV.i(xV, eV, this._currentPickResult);
-             YV.onPointerObservable.hasObservers() && YV.onPointerObservable.hasSpecificMask(xV) && YV.onPointerObservable.notifyObservers(JV, xV), this._delayedClicks[VV] = null
-           }
-         }, this._initClickEvent = (VV, eV, xV, JV) => {
-           const YV = new LV;
-           this._currentPickResult = null;
-           let UV = null,
-             yV = VV.hasSpecificMask(TV.b.POINTERPICK) || eV.hasSpecificMask(TV.b.POINTERPICK) || VV.hasSpecificMask(TV.b.POINTERTAP) || eV.hasSpecificMask(TV.b.POINTERTAP) || VV.hasSpecificMask(TV.b.POINTERDOUBLETAP) || eV.hasSpecificMask(TV.b.POINTERDOUBLETAP);
-           !yV && PV && (UV = this._initActionManager(UV, YV), UV && (yV = UV.hasPickTriggers));
-           let pV = !1;
-           if (yV = yV && !this._isMultiTouchGesture, yV) {
- ... (14 more removed lines; see GitHub link above)
+           constructor(HH) {
+             var BH;
+             this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = HH, this._enabledServerSide = !!(null === (BH = this.instance.persistence) || void 0 === BH ? void 0 : BH.props[eH]), this.rageclicks = new ZX(HH.config.rageclick)
+           }
+           initialize() {
+             this.startIfEnabled()
+           }
+           get flushIntervalMilliseconds() {
+             let HH = 5e3;
+             return TL(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (HH = this._config.capture_heatmaps.flush_interval_milliseconds), HH
+           }
+           get isEnabled() {
+             return mL(this._config.capture_heatmaps) ? mL(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
+           }
+           startIfEnabled() {
+             if (this.isEnabled) {
+ ... (5 more added lines; see GitHub link above)
```

#### 446. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7637-L7672` → after: `L11115-L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11115-L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11115-L11173) · [Before (L7637-L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7637-L7672)

```diff
-           pV || JV(YV, this._currentPickResult)
-         }, this._onPointerMove = VV => {
-           if (this._updatePointerPosition(VV), this._latestPointerMoveEvents.set(VV.pointerId, {
-               event: VV,
-               pointerX: this._pointerX,
-               pointerY: this._pointerY,
-               unTranslatedPointerX: this._unTranslatedPointerX,
-               unTranslatedPointerY: this._unTranslatedPointerY
-             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > fV.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > fV.DragMovementThreshold), UV.isPointerLo … [truncated]
-           if (!YV.cameraToUseForPointers && !YV.activeCamera) return;
-           if (YV.skipPointerMovePicking) return void this._processPointerMove(new rV.c, VV);
-           this._ensurePointerMovePredicate();
-           const eV = YV._registeredActions > 0 || YV.constantlyUpdateMeshUnderPointer ? this._pickMove(VV) : null;
-           this._processPointerMove(eV, VV)
-         }, this._onPointerDown = VV => {
-           const eV = this._activePointerIds.indexOf(-1);
- ... (20 more removed lines; see GitHub link above)
+           onRemoteConfig(HH) {
+             if (!HH.ok) return;
+             const BH = HH.config;
+             if (!("heatmaps" in BH)) return;
+             const LH = !!BH.heatmaps;
+             this.instance.persistence && this.instance.persistence.register({
+               [eH]: LH
+             }), this._enabledServerSide = LH, this.startIfEnabled()
+           }
+           getAndClearBuffer() {
+             const HH = this._buffer;
+             return this._buffer = void 0, HH
+           }
+           _onDeadClick(HH) {
+             uG(HH.originalEvent) && this._onClick(HH.originalEvent, "deadclick")
+           }
+ ... (43 more added lines; see GitHub link above)
```

#### 447. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L7794-L8198` → after: `L11176-L11201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11176-L11201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11176-L11201) · [Before (L7794-L8198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L7794-L8198)

```diff
-           this.onScenePerformancePriorityChangedObservable.notifyObservers(VV)
-         }
-       }
-       set forceWireframe(VV) {
-         this._forceWireframe !== VV && (this._forceWireframe = VV, this.markAllMaterialsAsDirty(16))
-       }
-       get forceWireframe() {
-         return this._forceWireframe
-       }
-       set skipFrustumClipping(VV) {
-         this._skipFrustumClipping !== VV && (this._skipFrustumClipping = VV)
-       }
-       get skipFrustumClipping() {
-         return this._skipFrustumClipping
-       }
-       set forcePointsCloud(VV) {
- ... (389 more removed lines; see GitHub link above)
+           _onClick(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
+             var LH;
+             if (kt(HH.target) || !uG(HH)) return;
+             const AH = this._getProperties(HH, BH);
+             (null === (LH = this.rageclicks) || void 0 === LH ? void 0 : LH.isRageClick(HH.clientX, HH.clientY, (new Date).getTime())) && Bz(gt(HH), this.instance.config.rageclick) && this._capture(xr(xr({}, AH), {}, {
+               type: "rageclick"
+             })), this._capture(AH)
+           }
+           _onMouseMove(HH) {
+             !kt(HH.target) && uG(HH) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
+               this._capture(this._getProperties(HH, "mousemove"))
+             }), 500))
+           }
+           _capture(HH) {
+             if (!JB) return;
+ ... (10 more added lines; see GitHub link above)
```

#### 448. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8200-L8202` → after: `L11203-L11300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11203-L11300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11203-L11300) · [Before (L8200-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8200-L8202)

```diff
-           const UV = JV.hasThinInstances || "InstancedMesh" === JV.getClassName() || "InstancedLinesMesh" === JV.getClassName() || xV.getCaps().instancedArrays && JV.instances.length > 0;
-           for (let VV = 0, eV = this._isReadyForMeshStage; VV < eV.length; VV++) {
-             eV[VV].action(JV, UV) || (YV = !1)
+         },
+         deadClicksAutocapture: Tz,
+         webVitalsAutocapture: class {
+           constructor(HH) {
+             var BH;
+             this._instance = HH, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
+               navigationKey: void 0,
+               url: void 0,
+               metrics: [],
+               firstMetricTimestamp: void 0
+             }, this._flushToCapture = () => {
+               clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", xr({
+                 $current_url: this._buffer.url
+               }, this._buffer.metrics.reduce(((HH, BH) => xr(xr({}, HH), {}, {
+                 [`$web_vitals_${BH.name}_event`]: xr({}, BH),
+                 [`$web_vitals_${BH.name}_value`]: BH.value
+ ... (82 more added lines; see GitHub link above)
```

#### 449. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8204-L8215` → after: `L11302-L11333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11302-L11333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11302-L11333) · [Before (L8204-L8215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8204-L8215)

```diff
-           if (!eV) continue;
-           const yV = JV.material || this.defaultMaterial;
-           if (yV)
-             if (yV._storeEffectOnSubMeshes)
-               for (const VV of JV.hT) {
-                 const eV = VV.eb();
-                 eV && eV.hasRenderTargetTextures && null != eV.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(eV) && (this._processedMaterials.push(eV), this._materialsRenderTargets.concatWithNoDuplicate(eV.getRenderTargetTextures()))
-               } else yV.hasRenderTargetTextures && null != yV.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(yV) && (this._processedMaterials.push(yV), this._materialsRenderTargets.concatWithNoDuplicate(yV.getRenderTargetTextures()))
-         }
-         if (eV) {
-           for (VV = 0; VV < this._materialsRenderTargets.length; ++VV) {
-             this._materialsRenderTargets.data[VV].isReadyForRendering() || (YV = !1)
+           get isEnabled() {
+             const HH = null == HL ? void 0 : HL.protocol;
+             if ("http:" !== HH && "https:" !== HH) return rG.info("Web Vitals are disabled on non-http/https protocols"), !1;
+             const BH = TL(this._perfConfig) ? this._perfConfig.web_vitals : fL(this._perfConfig) ? this._perfConfig : void 0;
+             return fL(BH) ? BH : this._enabledServerSide
+           }
+           startIfEnabled() {
+             this.isEnabled && !this._initialized && (rG.info("enabled, starting..."), this._loadScript(this._startCapturing))
+           }
+           onRemoteConfig(HH) {
+             if (!HH.ok) return;
+             const BH = HH.config;
+             if (!("capturePerformance" in BH)) return;
+             const LH = TL(BH.capturePerformance) && !!BH.capturePerformance.web_vitals,
+               AH = TL(BH.capturePerformance) ? BH.capturePerformance.web_vitals_allowed_metrics : void 0;
+             this._instance.persistence && (this._instance.persistence.register({
+ ... (16 more added lines; see GitHub link above)
```

#### 450. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8217-L8218` → after: `L11335-L11341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11335-L11341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11335-L11341) · [Before (L8217-L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8217-L8218)

```diff
-           for (VV = 0; VV < this.customRenderTargets.length; ++VV) {
-             this.customRenderTargets[VV].isReadyForRendering() || (YV = !1)
+           _maskedURL(HH) {
+             const BH = HH || (null == JB ? void 0 : JB.location.href);
+             if (!BH) return void rG.error("Could not determine current URL");
+             const LH = this._instance.config.disable_capture_url_hashes ? Er(BH) : BH,
+               AH = this._instance.config.custom_personal_data_properties,
+               rH = this._instance.config.mask_personal_data_properties ? [...Fz, ...AH || []] : [];
+             return jz(LH, rH, wz)
```

#### 451. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8221-L8375` → after: `L11344-L11382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11344-L11382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11344-L11382) · [Before (L8221-L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8221-L8375)

```diff
-         for (VV = 0; VV < this.geometries.length; VV++) {
-           2 === this.geometries[VV].delayLoadState && (YV = !1)
-         }
-         if (this.activeCameras && this.activeCameras.length > 0)
-           for (const UV of this.activeCameras) UV.isReady(!0) || (YV = !1);
-         else this.activeCamera && (this.activeCamera.isReady(!0) || (YV = !1));
-         for (const UV of this.lT) UV.isReady() || (YV = !1);
-         if (this.proceduralTexturesEnabled)
-           for (const UV of this.proceduralTextures) UV.isReady() || (YV = !1);
-         if (this.layers)
-           for (const UV of this.layers) UV.isReady() || (YV = !1);
-         if (this.effectLayers)
-           for (const UV of this.effectLayers) UV.isLayerReady() || (YV = !1);
-         for (const UV of this._isReadyChecks) UV.isReady() || (YV = !1);
-         return xV.areAllEffectsReady() || (YV = !1), xV.currentRenderPassId = JV, YV
-       }
- ... (139 more removed lines; see GitHub link above)
+       },
+       fY = {
+         exceptionObserver: class {
+           constructor(HH) {
+             var BH;
+             this._startCapturing = () => {
+               var HH;
+               if (!JB || !this.isEnabled || !(null === (HH = tL.__PosthogExtensions__) || void 0 === HH ? void 0 : HH.errorWrappingFunctions)) return;
+               const BH = tL.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
+                 LH = tL.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
+                 AH = tL.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
+               try {
+                 !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = BH(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = LH(this.captureExceptio … [truncated]
+               } catch (HH) {
+                 yX.error("failed to start", HH), this._stopCapturing()
+               }
+ ... (23 more added lines; see GitHub link above)
```

#### 452. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8377-L8426` → after: `L11384-L11385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11384-L11385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11384-L11385) · [Before (L8377-L8426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8377-L8426)

```diff
-           VV._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), VV.parent || VV._removeFromSceneRootNodes()
-         }
-         return this.onTransformNodeRemovedObservable.notifyObservers(VV), eV
-       }
-       removeSkeleton(VV) {
-         const eV = this.skeletons.indexOf(VV);
-         return -1 !== eV && (this.skeletons.splice(eV, 1), this.onSkeletonRemovedObservable.notifyObservers(VV), this._executeActiveContainerCleanup(this._activeSkeletons)), eV
-       }
-       removeMorphTargetManager(VV) {
-         const eV = this.morphTargetManagers.indexOf(VV);
-         return -1 !== eV && this.morphTargetManagers.splice(eV, 1), eV
-       }
-       removeLight(VV) {
-         const eV = this.lights.indexOf(VV);
-         if (-1 !== eV) {
-           for (const eV of this.meshes) eV._removeLightSource(VV, !1);
- ... (34 more removed lines; see GitHub link above)
+           get isEnabled() {
+             return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
```

#### 453. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8428-L8558` → after: `L11387-L11388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11387-L11388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11387-L11388) · [Before (L8428-L8558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8428-L8558)

```diff
-           VV._indexInSceneMaterialArray = -1, this.materials.pop()
-         }
-         return this.onMaterialRemovedObservable.notifyObservers(VV), eV
-       }
-       removeActionManager(VV) {
-         const eV = this.actionManagers.indexOf(VV);
-         return -1 !== eV && this.actionManagers.splice(eV, 1), eV
-       }
-       removeTexture(VV) {
-         const eV = this.textures.indexOf(VV);
-         return -1 !== eV && this.textures.splice(eV, 1), this.onTextureRemovedObservable.notifyObservers(VV), eV
-       }
-       removeFrameGraph(VV) {
-         const eV = this.frameGraphs.indexOf(VV);
-         return -1 !== eV && this.frameGraphs.splice(eV, 1), this.onFrameGraphRemovedObservable.notifyObservers(VV), eV
-       }
- ... (115 more removed lines; see GitHub link above)
+           startIfEnabledOrStop() {
+             this.isEnabled ? (yX.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
```

#### 454. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8560-L8807` → after: `L11390-L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11390-L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11390-L11395) · [Before (L8560-L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8560-L8807)

```diff
-         return null
-       }
-       getMaterialByUniqueID(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this.getMaterialByUniqueId(VV, eV)
-       }
-       getMaterialByUniqueId(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this._getMaterial(eV, (eV => eV.uniqueId === VV))
-       }
-       getMaterialById(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         return this._getMaterial(eV, (eV => eV.id === VV))
-       }
-       getMaterialByName(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
- ... (232 more removed lines; see GitHub link above)
+           _loadScript(HH) {
+             var BH, LH, AH;
+             (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.errorWrappingFunctions) ? HH(): null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "exception-a … [truncated]
+               if (BH) return yX.error("failed to load script", BH);
+               HH()
+             }))
```

#### 455. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8809-L8817` → after: `L11397-L11687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11397-L11687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11397-L11687) · [Before (L8809-L8817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8809-L8817)

```diff
-         }
-         return null
-       }
-       getMorphTargetByName(VV) {
-         for (let eV = 0; eV < this.morphTargetManagers.length; ++eV) {
-           const xV = this.morphTargetManagers[eV];
-           for (let eV = 0; eV < xV.numTargets; ++eV) {
-             const JV = xV.getTarget(eV);
-             if (JV.name === VV) return JV
+           _stopCapturing() {
+             var HH, BH, LH;
+             null === (HH = this._unwrapOnError) || void 0 === HH || HH.call(this), this._unwrapOnError = void 0, null === (BH = this._unwrapUnhandledRejection) || void 0 === BH || BH.call(this), this._unwrapUnhandledRejection = void 0, null === (LH = this._unwrapConsoleError) ||  … [truncated]
+           }
+           onRemoteConfig(HH) {
+             if (!HH.ok) return;
+             const BH = HH.config;
+             "autocaptureExceptions" in BH && (this._remoteEnabled = !!BH.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
+               [qH]: this._remoteEnabled
+             }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
+           }
+           onConfigChange() {
+             this._config = this._requiredConfig()
+           }
+           captureException(HH) {
+             try {
+ ... (275 more added lines; see GitHub link above)
```

#### 456. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8820-L8850` → after: `L11690-L11805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11690-L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11690-L11805) · [Before (L8820-L8850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8820-L8850)

```diff
-         return null
-       }
-       getPostProcessByName(VV) {
-         for (let eV = 0; eV < this.postProcesses.length; ++eV) {
-           const xV = this.postProcesses[eV];
-           if (xV.name === VV) return xV
-         }
-         return null
-       }
-       isActiveMesh(VV) {
-         return -1 !== this._activeMeshes.indexOf(VV)
-       }
-       get uid() {
-         return this._uid || (this._uid = JV.j.RandomId()), this._uid
-       }
-       addExternalData(VV, eV) {
- ... (15 more removed lines; see GitHub link above)
+       },
+       lY = xr({
+         productTours: class {
+           get _persistence() {
+             return this._instance.persistence
+           }
+           constructor(HH) {
+             this._productTourManager = null, this._cachedTours = null, this._instance = HH
+           }
+           initialize() {
+             this.loadIfEnabled()
+           }
+           onRemoteConfig(HH) {
+             if (!HH.ok) return;
+             const BH = HH.config;
+             if ("productTours" in BH) {
+ ... (100 more added lines; see GitHub link above)
```

#### 457. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8855-L8869` → after: `L11808-L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11808-L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11808-L11812) · [Before (L8855-L8869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8855-L8869)

```diff
-       }
-       freeProcessedMaterials() {
-         this._processedMaterials.dispose()
-       }
-       get blockfreeActiveMeshesAndRenderingGroups() {
-         return this._preventFreeActiveMeshesAndRenderingGroups
-       }
-       set blockfreeActiveMeshesAndRenderingGroups(VV) {
-         this._preventFreeActiveMeshesAndRenderingGroups !== VV && (VV && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = VV)
-       }
-       freeActiveMeshes() {
-         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
-           for (let VV = 0; VV < this.activeCameras.length; VV++) {
-             const eV = this.activeCameras[VV];
-             eV && eV._activeMeshes && eV._activeMeshes.dispose()
+       }, mY),
+       KY = {
+         siteApps: class {
+           constructor(HH) {
+             this._instance = HH, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
```

#### 458. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8871-L8876` → after: `L11814-L11832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11814-L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11814-L11832) · [Before (L8871-L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8871-L8876)

```diff
-       }
-       freeRenderingGroups() {
-         if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
-           for (let VV = 0; VV < this.textures.length; VV++) {
-             const eV = this.textures[VV];
-             eV && eV.renderList && eV.freeRenderingGroups()
+           get isEnabled() {
+             return !!this._instance.config.opt_in_site_apps
+           }
+           _eventCollector(HH, BH) {
+             if (!BH) return;
+             const LH = this.globalsForEvent(BH);
+             this._bufferedInvocations.push(LH), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
+           }
+           get siteAppLoaders() {
+             var HH;
+             return null === (HH = tL._POSTHOG_REMOTE_CONFIG) || void 0 === HH || null === (HH = HH[this._instance.config.token]) || void 0 === HH ? void 0 : HH.siteApps
+           }
+           initialize() {
+             if (this.isEnabled) {
+               const HH = this._instance._addCaptureHook(this._eventCollector.bind(this));
+               this._stopBuffering = () => {
+ ... (3 more added lines; see GitHub link above)
```

#### 459. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8878-L8910` → after: `L11834-L11862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11834-L11862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11834-L11862) · [Before (L8878-L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8878-L8910)

```diff
-       }
-       _isInIntermediateRendering() {
-         return this._intermediateRendering
-       }
-       _isInRenderingMeshEvaluation() {
-         return this._renderingMeshEvaluationDepth > 0
-       }
-       freezeActiveMeshes() {
-         let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
-           eV = arguments.length > 1 ? arguments[1] : void 0,
-           xV = arguments.length > 2 ? arguments[2] : void 0,
-           JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
-           UV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (this.frameGraph) {
-           this._renderWithFrameGraph(!0, !1, !0);
-           const yV = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
- ... (17 more removed lines; see GitHub link above)
+           globalsForEvent(HH) {
+             var BH, LH, AH, rH, SH, hH, tH;
+             if (!HH) throw new Error("Event payload is required");
+             const zH = {},
+               CH = this._instance.get_property("$groups") || [],
+               EH = this._instance.get_property("$stored_group_properties") || {};
+             for (const [YH, uH] of Object.entries(EH)) zH[YH] = {
+               id: CH[YH],
+               type: YH,
+               properties: uH
+             };
+             const {
+               $set_once: XH,
+               $set: GH
+             } = HH;
+             return {
+ ... (13 more added lines; see GitHub link above)
```

#### 460. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8912` → after: `L11864-L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R11864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L11864-L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L11864-L12017) · [Before (L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8912)

```diff
-           })), this
+           }
+           _prepareElementForSiteApp(HH) {
+             var BH;
+             const LH = null === (BH = HH.tagName) || void 0 === BH ? void 0 : BH.toLowerCase();
+             return "style" === LH && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(HH) || (xG.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === LH && this._instance.con … [truncated]
+           }
+           _patchSiteAppElementInsertionMethods() {
+             var HH, BH, LH, AH, rH, SH, hH, tH;
+             if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
+             const zH = null == yB ? void 0 : yB.defaultView,
+               CH = null == zH || null === (HH = zH.Node) || void 0 === HH ? void 0 : HH.prototype;
+             if (!zH || !CH) return () => {};
+             if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
+             const EH = [],
+               XH = this,
+               GH = new WeakSet,
+ ... (138 more added lines; see GitHub link above)
```

#### 461. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8914-L8925` → after: `L12019-L12084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12019-L12084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12019-L12084) · [Before (L8914-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8914-L8925)

```diff
-         return this.executeWhenReady((() => {
-           if (this.activeCamera) {
-             if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = UV, this._skipEvaluateActiveMeshesCompletely = VV, JV)
-               for (let VV = 0; VV < this._activeMeshes.length; VV++) this._activeMeshes.data[VV]._freeze();
-             eV && eV()
-           } else xV && xV("No active camera found")
-         })), this
-       }
-       unfreezeActiveMeshes() {
-         for (let VV = 0; VV < this.meshes.length; VV++) {
-           const eV = this.meshes[VV];
-           eV._internalAbstractMeshDataInfo && (eV._internalAbstractMeshDataInfo._isActive = !1)
+       },
+       cY = {
+         tracingHeaders: class {
+           constructor(HH) {
+             this._instance = HH, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
+               const HH = this._syncHostnamesForPatch();
+               var BH, LH;
+               HH ? (VL(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (BH = tL.__PosthogExtensions__) || void 0 === BH || null === (BH = BH.tracingHeadersPatchFns) || void 0 === BH ? void 0 : BH._patchXHR(HH, (() => this._instance.get_distinct_id()), this._instance.s … [truncated]
+             }
+           }
+           initialize() {
+             this.startIfEnabledOrStop()
+           }
+           _loadScript(HH) {
+             var BH, LH, AH;
+             (null === (BH = tL.__PosthogExtensions__) || void 0 === BH ? void 0 : BH.tracingHeadersPatchFns) ? HH(): null === (LH = tL.__PosthogExtensions__) || void 0 === LH || null === (AH = LH.loadExternalDependency) || void 0 === AH || AH.call(LH, this._instance, "tracing-hea … [truncated]
+ ... (50 more added lines; see GitHub link above)
```

#### 462. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8927-L8943` → after: `L12086-L12124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12086-L12124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12086-L12124) · [Before (L8927-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8927-L8943)

```diff
-         if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
-           const VV = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
-           for (const eV of VV) eV.objectRenderer._unfreezeActiveMeshes()
-         } else
-           for (let VV = 0; VV < this._activeMeshes.length; VV++) this._activeMeshes.data[VV]._unFreeze();
-         return this._activeMeshesFrozen = !1, this
-       }
-       _executeActiveContainerCleanup(VV) {
-         (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => VV.dispose()))
-       }
-       _evaluateActiveMeshes() {
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._acti … [truncated]
-         if (this._activeMeshesFrozen && this._activeMeshes.length) {
-           if (!this._skipEvaluateActiveMeshesCompletely) {
-             const VV = this._activeMeshes.length;
-             for (let eV = 0; eV < VV; eV++) {
- ... (1 more removed lines; see GitHub link above)
+       }, mY),
+       qY = {
+         toolbar: class {
+           constructor(HH) {
+             this.instance = HH
+           }
+           _setToolbarState(HH) {
+             tL.ph_toolbar_state = HH
+           }
+           _getToolbarState() {
+             var HH;
+             return null !== (HH = tL.ph_toolbar_state) && void 0 !== HH ? HH : 0
+           }
+           initialize() {
+             return this.maybeLoadToolbar()
+           }
+ ... (23 more added lines; see GitHub link above)
```

#### 463. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8946-L8973` → after: `L12127-L12152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12127-L12152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12127-L12152) · [Before (L8946-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8946-L8973)

```diff
-           if (this._activeParticleSystems) {
-             const VV = this._activeParticleSystems.length;
-             for (let eV = 0; eV < VV; eV++) this._activeParticleSystems.data[eV].animate()
-           }
-           return void this._renderingManager.resetSprites()
-         }
-         if (!this.activeCamera) return;
-         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
-         for (let YV = 0, UV = this._beforeEvaluateActiveMeshStage; YV < UV.length; YV++) {
-           UV[YV].action()
-         }
-         const VV = this.getActiveMeshCandidates(),
-           eV = VV.length,
-           xV = mV.c.Enabled,
-           JV = this.customLODSelector;
-         for (let YV = 0; YV < eV; YV++) {
- ... (12 more removed lines; see GitHub link above)
+           _callLoadToolbar(HH) {
+             const BH = tL.ph_load_toolbar || tL.ph_load_editor;
+             !mL(BH) && PL(BH) ? BH(HH, this.instance) : KG.warn("No toolbar load function found")
+           }
+           loadToolbar(HH) {
+             const BH = !!(null == yB ? void 0 : yB.getElementById("__POSTHOG_TOOLBAR__"));
+             if (!JB || BH) return !1;
+             const LH = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
+               AH = xr(xr({
+                 token: this.instance.config.token
+               }, HH), {}, {
+                 apiURL: this.instance.requestRouter.endpointFor("ui")
+               }, LH ? {
+                 instrument: !1
+               } : {});
+             if (JB.localStorage.setItem(lG, JSON.stringify(xr(xr({}, AH), {}, {
+ ... (10 more added lines; see GitHub link above)
```

#### 464. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8976-L8983` → after: `L12194-L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12194-L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12194-L12208) · [Before (L8976-L8983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8976-L8983)

```diff
-         }
-         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
-           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
-           for (let VV = 0; VV < this.lT.length; VV++) {
-             const eV = this.lT[VV];
-             if (!eV.isStarted() || !eV.emitter) continue;
-             const xV = eV.emitter;
-             xV.position && !xV.isEnabled() || (this._activeParticleSystems.push(eV), eV.animate(), this._renderingManager.dispatchParticles(eV))
+           initialize() {}
+           onFeatureFlags(BH) {
+             if (this._is_bot()) HH._logInfo(pG);
+             else if (!this._config.disable_web_experiments) {
+               if (mL(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
+               HH._logInfo("applying feature flags", BH), BH.forEach((HH => {
+                 var BH;
+                 if (this._flagToExperiments && (null === (BH = this._flagToExperiments) || void 0 === BH ? void 0 : BH.has(HH))) {
+                   var LH;
+                   const BH = this._instance.getFeatureFlag(HH),
+                     AH = null === (LH = this._flagToExperiments) || void 0 === LH ? void 0 : LH.get(HH);
+                   BH && (null == AH ? void 0 : AH.variants[BH]) && this._applyTransforms(AH.name, BH, AH.variants[BH].transforms)
+                 }
+               }))
+             }
```

#### 465. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8985-L9000` → after: `L12210-L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12210-L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12210-L12218) · [Before (L8985-L9000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L8985-L9000)

```diff
-           this.onAfterParticlesRenderingObservable.notifyObservers(this)
-         }
-       }
-       _prepareSkeleton(VV) {
-         this._skeletonsEnabled && VV.skeleton && (this._activeSkeletons.pushNoDuplicate(VV.skeleton) && (VV.skeleton.prepare(), this._activeBones.addCount(VV.skeleton.bones.length, !1)), VV.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(VV) && this.frameG … [truncated]
-       }
-       _activeMesh(VV, eV) {
-         this._prepareSkeleton(eV);
-         let xV = VV.NUV || VV.JC || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || eV.Sk;
-         if (eV && eV.hT && eV.hT.length > 0) {
-           const JV = this.getActiveSubMeshCandidates(eV),
-             YV = JV.length;
-           xV = xV || 1 === YV;
-           for (let UV = 0; UV < YV; UV++) {
-             const YV = JV.data[UV];
-             this._evaluateSubMesh(YV, eV, VV, xV)
+           previewWebExperiment() {
+             const BH = HH.getWindowLocation();
+             if (null == BH ? void 0 : BH.search) {
+               const LH = Rz(null == BH ? void 0 : BH.search, "__experiment_id"),
+                 AH = Rz(null == BH ? void 0 : BH.search, "__experiment_variant");
+               LH && AH && (HH._logInfo(`previewing web experiments ${LH} && ${AH}`), this.getWebExperiments((HH => {
+                 this._showPreviewWebExperiment(parseInt(LH), AH, HH)
+               }), !1, !0))
+             }
```

#### 466. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9002-L9054` → after: `L12220-L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12220-L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12220-L12248) · [Before (L9002-L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9002-L9054)

```diff
-         }
-       }
-       updateTransformMatrix(VV) {
-         const eV = this.activeCamera;
-         if (eV)
-           if (eV._renderingMultiview) {
-             const xV = eV._rigCameras[0],
-               JV = eV._rigCameras[1];
-             this.setTransformMatrix(xV.getViewMatrix(), xV.getProjectionMatrix(VV), JV.getViewMatrix(), JV.getProjectionMatrix(VV))
-           } else this.setTransformMatrix(eV.getViewMatrix(), eV.getProjectionMatrix(VV))
-       }
-       _bindFrameBuffer(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         this._useCurrentFrameBuffer || (VV && VV._multiviewTexture ? VV._multiviewTexture._bindFrameBuffer() : VV && VV.outputRenderTarget ? VV.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer … [truncated]
-       }
-       _clearFrameBuffer(VV) {
- ... (37 more removed lines; see GitHub link above)
+           loadIfEnabled() {
+             this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
+           }
+           getWebExperiments(HH, BH, LH) {
+             if (this._config.disable_web_experiments && !LH) return HH([]);
+             const AH = this._instance.get_property("$web_experiments");
+             if (AH && !BH) return HH(AH);
+             this._instance._send_request({
+               url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
+               method: "GET",
+               timestampMode: "query",
+               callback: BH => HH(200 === BH.statusCode && BH.json && BH.json.experiments || [])
+             })
+           }
+           _showPreviewWebExperiment(BH, LH, AH) {
+             const rH = AH.filter((HH => HH.id === BH));
+ ... (13 more added lines; see GitHub link above)
```

#### 467. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9056` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12250) · [Before (L9056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9056)

```diff
-             eV && VV && (eV.renderList.data = VV, eV.renderList.length = VV.length), JV.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+             return !1
```

#### 468. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9058-L9062` → after: `L12252-L12265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12252-L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12252-L12265) · [Before (L9058-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9058-L9062)

```diff
-           if (this._cameraDrawRenderTargetStage.length > 0) {
-             const eV = this.getBoundingBoxRenderer?.();
-             eV && !VV && (VV = eV.renderList.length > 0 ? eV.renderList.data.slice() : [], VV.length = eV.renderList.length);
-             for (let VV = 0, xV = this._cameraDrawRenderTargetStage; VV < xV.length; VV++) {
-               UV = xV[VV].action(this.activeCamera) || UV
+           static getWindowLocation() {
+             return null == JB ? void 0 : JB.location
+           }
+           static _matchUTMConditions(HH) {
+             var BH;
+             if (mL(HH.conditions) || mL(null === (BH = HH.conditions) || void 0 === BH ? void 0 : BH.utm)) return !0;
+             const LH = dz();
+             if (LH.utm_source) {
+               var AH, rH, SH, hH, tH, zH, CH, EH;
+               const BH = !(null === (AH = HH.conditions) || void 0 === AH || null === (AH = AH.utm) || void 0 === AH ? void 0 : AH.utm_campaign) || (null === (rH = HH.conditions) || void 0 === rH || null === (rH = rH.utm) || void 0 === rH ? void 0 : rH.utm_campaign) == LH.utm_cam … [truncated]
+                 XH = !(null === (SH = HH.conditions) || void 0 === SH || null === (SH = SH.utm) || void 0 === SH ? void 0 : SH.utm_source) || (null === (hH = HH.conditions) || void 0 === hH || null === (hH = hH.utm) || void 0 === hH ? void 0 : hH.utm_source) == LH.utm_source,
+                 GH = !(null === (tH = HH.conditions) || void 0 === tH || null === (tH = tH.utm) || void 0 === tH ? void 0 : tH.utm_medium) || (null === (zH = HH.conditions) || void 0 === zH || null === (zH = zH.utm) || void 0 === zH ? void 0 : zH.utm_medium) == LH.utm_medium,
+                 YH = !(null === (CH = HH.conditions) || void 0 === CH || null === (CH = CH.utm) || void 0 === CH ? void 0 : CH.utm_term) || (null === (EH = HH.conditions) || void 0 === EH || null === (EH = EH.utm) || void 0 === EH ? void 0 : EH.utm_term) == LH.utm_term;
+               return BH && GH && YH && XH
```

#### 469. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9064` → after: `L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12267) · [Before (L9064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9064)

```diff
-             eV && VV && (eV.renderList.data = VV, eV.renderList.length = VV.length)
+             return !1
```

#### 470. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9066-L9111` → after: `L12269-L12282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12269-L12282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12269-L12282) · [Before (L9066-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9066-L9111)

```diff
-           this._intermediateRendering = !1
-         }
-         UV && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || VV._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
-         for (let JV = 0, pV = this._beforeCameraDrawStage; JV < pV.length; JV++) {
-           pV[JV].action(this.activeCamera)
-         }
-         this.onBeforeDrawPhaseObservable.notifyObservers(this);
-         const yV = YV.snapshotRendering && 1 === YV.snapshotRenderingMode;
-         yV && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !yV), this.onAfterDrawPhaseObservable.notifyObservers(this);
-         for (let JV = 0, pV = this._afterCameraDrawStage; JV < pV.length; JV++) {
-           pV[JV].action(this.activeCamera)
-         }
-         if (this.postProcessManager && !VV._multiviewTexture) {
-           const eV = VV.outputRenderTarget ? VV.outputRenderTarget.renderTarget : void 0;
-           this.postProcessManager._finalizeFrame(VV.isIntermediate, eV)
-         }
- ... (30 more removed lines; see GitHub link above)
+           static _logInfo(HH) {
+             for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
+             qh.info(`[WebExperiments] ${HH}`, LH)
+           }
+           _applyTransforms(BH, LH, AH) {
+             this._is_bot() ? HH._logInfo(pG) : "control" !== LH ? AH.forEach((AH => {
+               if (AH.selector) {
+                 var rH;
+                 HH._logInfo(`applying transform of variant ${LH} for experiment ${BH} `, AH);
+                 const SH = null === (rH = document) || void 0 === rH ? void 0 : rH.querySelectorAll(AH.selector);
+                 null == SH || SH.forEach((HH => {
+                   const BH = HH;
+                   AH.html && (BH.innerHTML = AH.html), AH.css && BH.setAttribute("style", AH.css)
+                 }))
```

#### 471. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9113-L9140` → after: `L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12284) · [Before (L9113-L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9113-L9140)

```diff
-             }
-         }
-       }
-       _advancePhysicsEngineStep(VV) {}
-       _animate(VV) {}
-       animate() {
-         if (this._engine.isDeterministicLockStep()) {
-           let VV = Math.max(Ux.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Ux.MaxDeltaTime)) + this._timeAccumulator;
-           const eV = this._engine.getTimeStep(),
-             xV = 1e3 / eV / 1e3;
-           let JV = 0;
-           const YV = this._engine.getLockstepMaxSteps();
-           let UV = Math.floor(VV / eV);
-           for (UV = Math.min(UV, YV); VV > 0 && JV < UV;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = eV * xV, this._animate(eV), this.onAfterAnimationsObservable.notifyObservers(this), this.sK && this._advancePhysicsEngineStep(eV), this.onAfterStepO … [truncated]
-           this._timeAccumulator = VV < 0 ? 0 : VV
-         } else {
- ... (12 more removed lines; see GitHub link above)
+             })) : HH._logInfo("Control variants leave the page unmodified.")
```

#### 472. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9142-L9169` → after: `L12286-L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12286-L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12286-L12287) · [Before (L9142-L9169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9142-L9169)

```diff
-       }
-       resetDrawCache(VV) {
-         if (this.meshes)
-           for (const eV of this.meshes) eV.resetDrawCache(VV)
-       }
-       _renderWithFrameGraph() {
-         let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           eV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (this.activeCamera = null, this.activeCameras = null, VV)
-           for (const xV of this.cameras)
-             if (xV.update(), 0 !== xV.cameraRigMode)
-               for (let VV = 0; VV < xV._rigCameras.length; VV++) xV._rigCameras[VV].update();
-         this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
-         try {
-           this._renderWithFrameGraphAfterBeforeRender(eV)
-         } finally {
- ... (12 more removed lines; see GitHub link above)
+           _is_bot() {
+             return pB && this._instance ? JE(pB, this._config.custom_blocked_useragents) : void 0
```

#### 473. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9173-L9185` → after: `L12290-L12429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12290-L12429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12290-L12429) · [Before (L9173-L9185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9173-L9185)

```diff
-         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
-         for (let xV = 0, JV = this._beforeClearStage; xV < JV.length; xV++) {
-           JV[xV].action()
-         }
-         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
-         else {
-           const eV = this.getActiveMeshCandidates(),
-             xV = eV.length;
-           if (this._activeMeshesFrozen) {
-             if (!this._skipEvaluateActiveMeshesCompletely)
-               for (let VV = 0; VV < xV; VV++) {
-                 const xV = eV.data[VV];
-                 xV._internalAbstractMeshDataInfo._wasActiveLastFrame && xV.computeWorldMatrix()
+       }, mY),
+       NY = {
+         conversations: class {
+           constructor(HH) {
+             this._instance = HH, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
+           }
+           initialize() {
+             this.loadIfEnabled()
+           }
+           onRemoteConfig(HH) {
+             if (this._instance.config.disable_conversations) return;
+             if (this._remoteConfigSuccessful = HH.ok, !HH.ok) return;
+             const BH = HH.config.conversations;
+             mL(BH) || (fL(BH) ? this._isConversationsEnabled = BH : (this._isConversationsEnabled = BH.enabled, this._remoteConfig = BH), this.loadIfEnabled())
+           }
+           reset() {
+ ... (124 more added lines; see GitHub link above)
```

#### 474. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9187-L9202` → after: `L12431-L12445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12431-L12445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12431-L12445) · [Before (L9187-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9187-L9202)

```diff
-             if (this.particlesEnabled) {
-               const VV = this._activeParticleSystems.length;
-               for (let eV = 0; eV < VV; eV++) this._activeParticleSystems.data[eV].animate()
-             }
-           } else {
-             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
-             for (let JV = 0; JV < xV; JV++) {
-               const xV = eV.data[JV];
-               xV._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, xV.isBlocked || (this._totalVertices.addCount(xV.getTotalVertices(), !1), xV.isReady() && xV.isEnabled() && !xV.WZ.hasAZeroComponent && (xV.computeWorldMatrix(VV), xV.actionManager && xV.actionManager.hasSpe … [truncated]
-             }
-             if (this.particlesEnabled)
-               for (let VV = 0; VV < this.lT.length; VV++) {
-                 const eV = this.lT[VV];
-                 if (!eV.isStarted() || !eV.emitter) continue;
-                 const xV = eV.emitter;
-                 xV.position && !xV.isEnabled() || (this._activeParticleSystems.push(eV), eV.animate())
+             }, (() => function(HH) {
+               var BH;
+               const LH = {};
+               if (LH.distinctId = HH.get_distinct_id(), HH.sessionManager) {
+                 const {
+                   sessionId: BH,
+                   windowId: AH,
+                   sessionStartTimestamp: rH,
+                   lastActivityTimestamp: SH
+                 } = HH.sessionManager.checkAndGetSessionAndWindowId(!0);
+                 LH.sessionId = BH, LH.windowId = AH, mL(rH) || (LH.sessionStartTimestamp = rH), mL(SH) || (LH.lastActivityTimestamp = SH)
+               }
+               if ((null == tL || null === (BH = tL.location) || void 0 === BH ? void 0 : BH.href) && (LH.currentUrl = HH.config.disable_capture_url_hashes ? Er(tL.location.href) : tL.location.href), HH.featureFlags) {
+                 const BH = HH.featureFlags.getFlags();
+                 BH && BH.length > 0 && (LH.activeFeatureFlags = BH)
```

#### 475. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9206-L9254` → after: `L12473-L12516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12473-L12516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12473-L12516) · [Before (L9206-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9206-L9254)

```diff
-         this.frameGraph?.execute()
-       }
-       _renderRenderTarget(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (this._intermediateRendering = !0, VV._shouldRender()) {
-           if (this._renderId++, this.activeCamera = eV, !this.activeCamera) throw new Error("Active camera not set");
-           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), VV.render(xV, JV)
-         }
-         this._intermediateRendering = !1
-       }
-       render() {
-         let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.iN) return;
-         const xV = this._renderingMeshEvaluationDepth;
- ... (33 more removed lines; see GitHub link above)
+       },
+       jY = {
+         metrics: class {
+           constructor(HH) {
+             this._instance = HH, this._logger = gh("[metrics]"), this._disposed = !1
+           }
+           initialize() {
+             this.onConfigChange()
+           }
+           onConfigChange() {
+             var HH;
+             if (this._disposed) return;
+             const BH = !!(null === (HH = this._instance.config.metrics) || void 0 === HH ? void 0 : HH.network);
+             BH && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (HH => {
+               let BH = !0;
+               const LH = () => BH ? (HH => {
+ ... (28 more added lines; see GitHub link above)
```

#### 476. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9256-L9258` → after: `L12518-L12521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12518-L12521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12518-L12521) · [Before (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9256-L9258)

```diff
-           this._engine.currentRenderPassId = VV?.renderPassId ?? 0, this.activeCamera = VV, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
-           for (let eV = 0, xV = this._beforeClearStage; eV < xV.length; eV++) {
-             xV[eV].action()
+           count(HH) {
+             let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+               LH = arguments.length > 2 ? arguments[2] : void 0;
+             this._getCore().count(HH, BH, LH)
```

#### 477. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9260-L9262` → after: `L12523-L12524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12523-L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12523-L12524) · [Before (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9260-L9262)

```diff
-           this._clearFrameBuffer(this.activeCamera);
-           for (let eV = 0, xV = this._gatherRenderTargetsStage; eV < xV.length; eV++) {
-             xV[eV].action(this._renderTargets)
+           gauge(HH, BH, LH) {
+             this._getCore().gauge(HH, BH, LH)
```

#### 478. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9264-L9268` → after: `L12526-L12527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12526-L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12526-L12527) · [Before (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9264-L9268)

```diff
-           if (this.activeCameras && this.activeCameras.length > 0)
-             for (let eV = 0; eV < this.activeCameras.length; eV++) this._processSubCameras(this.activeCameras[eV], eV > 0);
-           else {
-             if (!this.activeCamera) throw new Error("No camera defined");
-             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
+           histogram(HH, BH, LH) {
+             this._getCore().histogram(HH, BH, LH)
```

#### 479. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9270-L9278` → after: `L12529-L12604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12529-L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12529-L12604) · [Before (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9270-L9278)

```diff
-         }
-         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
-         for (let xV = 0, JV = this._afterRenderStage; xV < JV.length; xV++) {
-           JV[xV].action()
-         }
-         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
-           for (let VV = 0; VV < this._toBeDisposed.length; VV++) {
-             const eV = this._toBeDisposed[VV];
-             eV && eV.dispose()
+           flush(HH) {
+             if (!this._core) return Promise.resolve();
+             if (HH) {
+               const BH = this._core.drainWindow();
+               return BH && this._sendMetricsBatch(BH, HH), Promise.resolve()
+             }
+             return this._core.flush().catch((HH => this._logger.error("PostHog metrics flush failed:", HH)))
+           }
+           reset() {
+             var HH;
+             null === (HH = this._core) || void 0 === HH || HH.reset()
+           }
+           dispose() {
+             var HH, BH;
+             this._disposed = !0, null === (HH = this._stopNetworkMetrics) || void 0 === HH || HH.call(this), this._stopNetworkMetrics = void 0, null === (BH = this._core) || void 0 === BH || BH.reset()
+           }
+ ... (60 more added lines; see GitHub link above)
```

#### 480. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9305-L9320` → after: `L12607-L12765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12607-L12765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12607-L12765) · [Before (L9305-L9320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9305-L9320)

```diff
-         this.detachControl();
-         const eV = this._engine.getInputElement?.();
-         if (eV)
-           for (let UV = 0; UV < this.cameras.length; UV++) this.cameras[UV].detachControl();
-         this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (VV => VV.dispose(!0))), this._disp … [truncated]
-         const xV = this.cameras;
-         this._disposeList(xV), this._disposeList(this.lT), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multivi … [truncated]
-         let JV = this._engine.scenes.indexOf(this);
-         if (JV > -1 && this._engine.scenes.splice(JV, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, EV.j)(), tV.d._LastCreatedScene === this) {
-           tV.d._LastCreatedScene = null;
-           let VV = tV.d.Instances.length - 1;
-           for (; VV >= 0;) {
-             const eV = tV.d.Instances[VV];
-             if (eV.scenes.length > 0) {
-               tV.d._LastCreatedScene = eV.scenes[this._engine.scenes.length - 1];
-               break
+       },
+       nY = {
+         webMCP: class {
+           constructor(HH) {
+             this._instance = HH, this._isPatched = !1
+           }
+           initialize() {
+             this.startIfEnabled()
+           }
+           startIfEnabled() {
+             if (!this._instance.config.capture_webmcp || this._isPatched) return;
+             const HH = null == yB ? void 0 : yB.modelContext;
+             if (!HH || !PL(HH.registerTool)) return;
+             const BH = vY.get(HH);
+             if (BH) return BH.instances.add(this._instance), void(this._isPatched = !0);
+             const LH = {
+ ... (143 more added lines; see GitHub link above)
```

#### 481. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L9325-L9692` → after: `L12769-L12783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R12769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L12769-L12783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/277.js#L12769-L12783) · [Before (L9325-L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/277.js#L9325-L9692)

```diff
-         JV = this._engine._virtualScenes.indexOf(this), JV > -1 && this._engine._virtualScenes.splice(JV, 1), this._engine.wipeCaches(!0), this.eC.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clea … [truncated]
-       }
-       _disposeList(VV, eV) {
-         const xV = VV.slice(0);
-         eV = eV ?? (VV => VV.dispose());
-         for (const JV of xV) eV(JV);
-         VV.length = 0
-       }
-       get iN() {
-         return this._isDisposed
-       }
-       clearCachedVertexData() {
-         for (let VV = 0; VV < this.meshes.length; VV++) {
-           const eV = this.meshes[VV].geometry;
-           eV && eV.clearCachedData()
-         }
- ... (352 more removed lines; see GitHub link above)
+       };
+     wX.__defaultExtensionClasses = xr({}, xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr(xr({}, mY), oY), IY), fY), lY), KY), eY), cY), qY), gY), NY), RY), jY), nY));
+     const FY = function() {
+       SH.SDK_DIST_CHANNEL = "npm";
+       const HH = VX[NX] = new wX;
+       return function() {
+         function HH() {
+           HH.done || (HH.done = !0, gE = !1, Rh(VX, (function(HH) {
+             HH._dom_loaded()
+           })))
+         }(null == yB ? void 0 : yB.addEventListener) ? "complete" === yB.readyState ? HH() : ah(yB, "DOMContentLoaded", HH, {
+           capture: !1
+         }): JB && qh.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
+       }(), HH
+     }()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/278.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/278.js#L2)

```diff
- export const ids = [278, 662];
+ export const ids = [278];
```

#### 2. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/278.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/278.js#L4-L6)

```diff
-   41108: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => JV
+   41086: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       playDocsSound: () => zH
```

#### 3. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L10` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/278.js#L8-L26) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/278.js#L8-L10)

```diff
-     class JV {
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersRepository : JV.ShadersRepositoryWGSL
+     var AH = LH(5335),
+       rH = LH(37617),
+       SH = LH(1131),
+       hH = LH(37626);
+     const tH = new Map;
+ 
+     function zH(HH, BH, LH, zH, CH) {
+       let EH, XH = 0;
+       if (BH) EH = new AH.Howl({
+         src: [`${SH.clientSideServerUrls.staticUrl}/sounds/music/${HH}.mp3`],
+         html5: !0,
+         volume: LH
+       });
+       else {
+         const BH = (0, rH.v)(HH);
+         XH = BH.ms / 1e3, EH = tH.get(HH), EH || (EH = new AH.Howl({
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L12-L13` → after: `L28-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L28-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/278.js#L28-L72) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/278.js#L12-L13)

```diff
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? JV.ShadersStore : JV.ShadersStoreWGSL
+       const GH = BH ? EH.play() : EH.play(hH.b);
+       EH.volume(LH, GH), zH > 0 && EH.seek(zH, GH);
+       const YH = () => {
+         const HH = EH.duration();
+         return BH || HH > 0 ? HH : XH
+       };
+       let uH = !1;
+       const QH = HH => {
+           uH || (uH = !0, EH.off("play", WH, GH), EH.off("end", MH, GH), EH.off("loaderror", vH), EH.off("playerror", xH, GH), BH && EH.unload(), CH.onEnd(HH))
+         },
+         WH = () => {
+           CH.onPlay(YH())
+         },
+         MH = () => {
+           QH(!1)
+         },
+ ... (29 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4-L12` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L4-L6) · [Before (L4-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L4-L12)

```diff
-   41318: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => vV,
-       f: () => ZV,
-       h: () => QV,
-       i: () => rV,
-       l: () => nV,
-       m: () => pV,
-       q: () => wV
+   41097: (HH, BH, LH) => {
+     LH.r(BH), LH.d(BH, {
+       default: () => aH
```

#### 2. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L14-L228` → after: `L8-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L8-L66) · [Before (L14-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L14-L228)

```diff
-     var JV = xV(39870),
-       YV = xV(41323);
- 
-     function UV(VV, eV, xV, JV) {
-       switch (eV) {
-         case 5120: {
-           let eV = VV.getInt8(xV);
-           return JV && (eV = Math.max(eV / 127, -1)), eV
-         }
-         case 5121: {
-           let eV = VV.getUint8(xV);
-           return JV && (eV /= 255), eV
-         }
-         case 5122: {
-           let eV = VV.getInt16(xV, !0);
-           return JV && (eV = Math.max(eV / 32767, -1)), eV
- ... (199 more removed lines; see GitHub link above)
+     LH(7e3);
+     var AH = LH(45),
+       rH = LH(41106),
+       SH = LH(41374),
+       hH = LH(41478),
+       tH = LH(41525),
+       zH = LH(41538),
+       CH = LH(38071),
+       EH = LH(37961),
+       XH = LH(41685),
+       GH = LH(41749),
+       YH = (LH(41784), LH(1168)),
+       uH = LH(176),
+       QH = LH(1123),
+       WH = LH(15),
+       MH = LH(3018),
+ ... (43 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L231-L267` → after: `L69-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L69-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L69-L101) · [Before (L231-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L231-L267)

```diff
-       const eV = VV.buffer;
-       if (eV instanceof ArrayBuffer) return VV;
-       const xV = new ArrayBuffer(VV.byteLength);
-       return new Uint8Array(xV).set(new Uint8Array(eV, VV.byteOffset, VV.byteLength)), xV
-     }
-   },
-   41143: (VV, eV, xV) => {
-     xV.d(eV, {
-       b: () => AV,
-       f: () => TV,
-       l: () => PV,
-       j: () => RV,
-       p: () => gV
-     });
-     class JV {
-       constructor() {
- ... (21 more removed lines; see GitHub link above)
+       let {
+         heatmap: BH,
+         scale: LH,
+         fullyOpaqueFrom: KH,
+         bounds: NH,
+         fitBounds: RH,
+         schematic: jH,
+         controls: nH,
+         onStepTime: FH,
+         onShowAllTime: DH,
+         onTogglePlaying: wH,
+         getReadout: dH = null
+       } = HH;
+       const {
+         t: aH
+       } = (0, QH.B)(), {
+ ... (17 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L271-L293` → after: `L104-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L104-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L104-L107) · [Before (L271-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L271-L293)

```diff
-           JV += xV + "\n"
-         }
-         for (const YV of this.children) JV += YV.process(VV, eV, xV);
-         return this.additionalDefineKey && (VV[this.additionalDefineKey] = this.additionalDefineValue || "true", xV[this.additionalDefineKey] = VV[this.additionalDefineKey]), JV
-       }
-     }
-     class YV {
-       constructor() {
-         this._lines = []
-       }
-       get currentLine() {
-         return this._lines[this.lineIndex]
-       }
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
-       }
- ... (7 more removed lines; see GitHub link above)
+           return {
+             positions: Int32Array.from(LH),
+             values: Float64Array.from(AH),
+             count: AH.length
```

#### 5. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L295-L299` → after: `L109-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L109-L115) · [Before (L295-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L295-L299)

```diff
-           const VV = eV.trim();
-           if (!VV) continue;
-           if (VV.startsWith("//")) {
-             this._lines.push(eV);
-             continue
+         }(BH, oB)), [BH, oB]),
+         cB = OH * SB.cameraFOV / 100,
+         eB = XB.height > 0 ? XB.width / XB.height : 1,
+         qB = (0, AH.useMemo)((() => function(HH, BH) {
+           return {
+             min: [HH.min[0] - BH[0], HH.min[1] - BH[1], HH.min[2] - BH[2]],
+             max: [HH.max[0] - BH[0] + 1, HH.max[1] - BH[1] + 1, HH.max[2] - BH[2] + 1]
```

#### 6. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L301-L309` → after: `L117-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L117-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L117-L172) · [Before (L301-L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L301-L309)

```diff
-           const xV = VV.indexOf(";");
-           if (-1 === xV) this._lines.push(VV);
-           else if (xV === VV.length - 1) VV.length > 1 && this._lines.push(VV);
-           else {
-             const VV = eV.split(";");
-             for (let eV = 0; eV < VV.length; eV++) {
-               let xV = VV[eV];
-               xV && (xV = xV.trim(), xV && this._lines.push(xV + (eV !== VV.length - 1 ? ";" : "")))
-             }
+         }(RH, oB)), [RH, oB]),
+         gB = LB(qB, eB, cB),
+         NB = null !== kB && void 0 !== kB ? kB : gB,
+         RB = (0, AH.useRef)({
+           fittedView: gB,
+           fieldOfView: cB,
+           mouseSensitivity: SB.mouseSensitivity,
+           canLock: WB
+         });
+       RB.current = {
+         fittedView: gB,
+         fieldOfView: cB,
+         mouseSensitivity: SB.mouseSensitivity,
+         canLock: WB
+       };
+       const jB = (0, AH.useMemo)((() => {
+ ... (40 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L311-L347` → after: `L174-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L174-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L174-L259) · [Before (L311-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L311-L347)

```diff
-         }
-       }
-     }
-     class UV extends JV {
-       process(VV, eV, xV) {
-         for (let JV = 0; JV < this.children.length; JV++) {
-           const YV = this.children[JV];
-           if (YV.isValid(VV)) return YV.process(VV, eV, xV)
-         }
-         return ""
-       }
-     }
-     class yV extends JV {
-       isValid(VV) {
-         return this.testExpression.isTrue(VV)
-       }
- ... (21 more removed lines; see GitHub link above)
+         }), [TB, BH, oB, NB, lB, LH, KH]),
+         {
+           keyHandlers: nB
+         } = (0, TH.g)({
+           isEnabled: TB,
+           claimedKeyCodes: fH,
+           KG: HH => {
+             mB((BH => function(HH, BH) {
+               const LH = [Math.sin(HH.heading), 0, Math.cos(HH.heading)],
+                 AH = hB(hB(tB(LH, BH.forward), tB(BB(HH.heading), BH.right)), [0, BH.up, 0]);
+               return {
+                 ...HH,
+                 position: hB(HH.position, AH)
+               }
+             }(null !== BH && void 0 !== BH ? BH : RB.current.fittedView, HH)))
+           },
+ ... (70 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L349` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L261) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L349)

```diff
-             wV = wV.trim(), "" !== wV && (xV.push(wV), wV = "")
+             xB.current = !1, QB(document.pointerLockElement === HH)
```

#### 9. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L351-L352` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L263-L264) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L351-L352)

```diff
-           UV = VV => {
-             JV < pV._Stack.length - 1 && (pV._Stack[++JV] = VV)
+           LH = () => {
+             xB.current && (xB.current = !1, MB(!1))
```

#### 10. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L354-L572` → after: `L266-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L266-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L266-L275) · [Before (L354-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L354-L572)

```diff
-           yV = () => pV._Stack[JV],
-           QV = () => -1 === JV ? "!!INVALID EXPRESSION!!" : pV._Stack[JV--];
-         let nV = 0,
-           wV = "";
-         for (; nV < VV.length;) {
-           const eV = VV.charAt(nV),
-             ZV = nV < VV.length - 1 ? VV.substring(nV, 2 + nV) : "";
-           if ("(" === eV) wV = "", UV(eV);
-           else if (")" === eV) {
-             for (YV(); - 1 !== JV && "(" !== yV();) xV.push(QV());
-             QV()
-           } else if (pV._OperatorPriority[ZV] > 1) {
-             for (YV(); - 1 !== JV && pV._OperatorPriority[yV()] >= pV._OperatorPriority[ZV];) xV.push(QV());
-             UV(ZV), nV++
-           } else wV += eV;
-           nV++
- ... (203 more removed lines; see GitHub link above)
+           AH = BH => {
+             const LH = !RB.current.canLock && document.activeElement === HH && 0 !== (1 & BH.buttons);
+             if (document.pointerLockElement !== HH && !LH) return;
+             const AH = RB.current.mouseSensitivity * kH;
+             mB((HH => function(HH, BH, LH) {
+               const AH = 2 * Math.PI;
+               return {
+                 ...HH,
+                 heading: ((HH.heading + BH) % AH + AH) % AH,
+                 pitch: Math.max(-gH, Math.min(gH, HH.pitch + LH))
```

#### 11. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L574-L575` → after: `L277-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L277-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L277-L300) · [Before (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L574-L575)

```diff
-             }
-             continue
+             }(null !== HH && void 0 !== HH ? HH : RB.current.fittedView, BH.movementX * AH, BH.movementY * AH)))
+           };
+         return document.addEventListener("pointerlockchange", BH), document.addEventListener("pointerlockerror", LH), document.addEventListener("pointermove", AH), () => {
+           document.removeEventListener("pointerlockchange", BH), document.removeEventListener("pointerlockerror", LH), document.removeEventListener("pointermove", AH), document.pointerLockElement === HH && (0, UH.e)()
+         }
+       }), []), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && 0 !== XB.width && 0 !== XB.height && (HH.engine.resize(), HH.needsRender = !0)
+       }), [XB.width, XB.height]), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && (HH.targetFieldOfView = cB * (UB ? bH : 1))
+       }), [cB, UB]), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && function(HH, BH, LH, AH) {
+           const rH = [],
+             SH = [],
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L577-L622` → after: `L302-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L302-L326) · [Before (L577-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L577-L622)

```diff
-         }
-         const yV = new JV;
-         if (yV.line = YV, eV.children.push(yV), "#" === YV[0] && "d" === YV[1]) {
-           const VV = YV.replace(";", "").split(" ");
-           yV.additionalDefineKey = VV[1], 3 === VV.length && (yV.additionalDefineValue = VV[2])
-         }
-       }
-       return !1
-     }
- 
-     function GV(VV, eV, xV, UV) {
-       const yV = new JV,
-         pV = new YV;
-       return pV.lineIndex = -1, pV.lines = VV.split("\n"), zV(pV, yV, UV), yV.process(eV, xV, UV)
-     }
- 
- ... (30 more removed lines; see GitHub link above)
+           iH(HH.cells, Float32Array.from(rH), Float32Array.from(SH), SH.length / 4), HH.translucent = {
+             yQ: Float32Array.from(hH),
+             colours: Float32Array.from(tH),
+             count: tH.length / 4
+           }, HH.translucentSortedFrom = null, pH(HH), HH.needsRender = !0
+         }(HH, KB, LH, KH)
+       }), [KB, LH, KH]), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && function(HH, BH) {
+           HH.chunkGridOrigin = BH, HH.chunkGridCentre = null, JH(HH)
+         }(HH, NH.min)
+       }), [NH]), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && function(HH, BH, LH) {
+           const AH = [],
+             rH = [];
+ ... (9 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L625-L634` → after: `L329-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L329-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L329-L387) · [Before (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L625-L634)

```diff
-           if (pV[4]) {
-             const VV = pV[5];
-             if (-1 !== VV.indexOf("..")) {
-               const JV = VV.split(".."),
-                 YV = parseInt(JV[0]);
-               let UV = parseInt(JV[1]),
-                 yV = xV.slice(0);
-               xV = "", isNaN(UV) && (UV = eV.indexParameters[JV[1]]);
-               for (let VV = YV; VV < UV; VV++) eV.supportsUniformBuffers || (yV = yV.replace(jV, ((VV, eV) => eV + "{X}"))), xV += yV.replace(qV, VV.toString()) + "\n"
-             } else eV.supportsUniformBuffers || (xV = xV.replace(jV, ((VV, eV) => eV + "{X}"))), xV = xV.replace(qV, VV)
+           iH(HH.schematicBlocks, Float32Array.from(AH), Float32Array.from(rH), rH.length / 4), HH.needsRender = !0
+         }(HH, jH, NH)
+       }), [jH, NH]), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && null !== HH.chunkGrid && (HH.chunkGrid.isVisible = OB, HH.needsRender = !0)
+       }), [OB, NH]), (0, AH.useEffect)((() => {
+         const HH = EB.current;
+         null !== HH && function(HH, BH, LH) {
+           const {
+             camera: AH
+           } = HH;
+           AH.position.set(BH.position[0], BH.position[1], BH.position[2]), AH.rotation.set(BH.pitch, BH.heading, 0);
+           const rH = (cH + 1) * uH.g.xX * Math.sqrt(3);
+           AH.maxZ = Math.max(rH, Math.hypot(...hB(BH.position, tB(rB({
+             min: [0, 0, 0],
+             max: LH
+ ... (43 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L636-L640` → after: `L389-L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L389-L425) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L636-L640)

```diff
-           const JV = [];
-           for (const VV of YV) {
-             const eV = VV.split(pV[0]);
-             for (let VV = 0; VV < eV.length - 1; VV++) JV.push(eV[VV]), JV.push(xV);
-             JV.push(eV[eV.length - 1])
+         }), GB && (0, VH.jsx)("div", {
+           className: "StudioHeatmap3DUnavailable SmallTextLight",
+           children: aH("3D view isn't available in this browser.")
+         }), TB && (0, VH.jsx)("div", {
+           className: "StudioHeatmap3DCrosshair"
+         }), (0, VH.jsx)("div", {
+           className: "StudioHeatmap3DCoordinates SmallTextLight",
+           children: NB.position.map(((HH, BH) => (HH + oB[BH]).toFixed(2))).join(" ")
+         }), OB && (0, VH.jsx)(sH, {
+           heading: NB.heading,
+           pitch: NB.pitch,
+           onViewFrom: HH => {
+             const BH = tB(HH, -1),
+               LH = 0 === BH[1] ? {
+                 heading: Math.atan2(BH[0], BH[2]),
+                 pitch: 0
+ ... (21 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L642-L652` → after: `L427-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L427-L447) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L642-L652)

```diff
-           YV = JV, UV = UV || xV.indexOf("#include<") >= 0 || xV.indexOf("#include <") >= 0
-         }
-       }
-       tV.length = 0;
-       const yV = YV.join("");
-       UV ? RV(yV.toString(), eV, xV) : xV(yV)
-     }
-     const gV = {
-       loadFile: (VV, eV, xV, JV, YV, UV) => {
-         throw (0, vV.n)("FileTools")
-       }
+         }), null !== jB && (0, VH.jsx)("div", {
+           className: "StudioHeatmapMapReadout SmallTextLight",
+           children: null === dH ? aH("studio:heatmapBlockReadout", {
+             x: jB.x,
+             y: jB.y,
+             z: jB.z,
+             count: (0, YH.T)(jB.value)
+           }) : dH(jB.x, jB.y, jB.z, jB.value)
+         }), (0, VH.jsxs)("div", {
+           className: "StudioHeatmapMapControls",
+           children: [nH, (0, VH.jsx)(xH.W, {
+             active: null === kB,
+             onClick: () => {
+               mB(null)
+             },
+             children: (0, VH.jsx)(vH.c, {
+ ... (5 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L666-L667` → after: `L450-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L450-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L450-L556) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L666-L667)

```diff
-     function UV(VV, eV) {
-       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (eV ? eV + "\n" : "") + VV
+     function sH(HH) {
+       let {
+         heading: BH,
+         pitch: LH,
+         onViewFrom: rH,
+         onTurn: SH,
+         onFlip: hH
+       } = HH;
+       const {
+         t: tH
+       } = (0, QH.B)(), zH = (0, AH.useRef)(null), CH = HB({
+         heading: BH,
+         pitch: LH
+       }), EH = BB(BH), XH = CB(CH, EH), GH = FH + DH + 2, YH = nH.flatMap((HH => [1, -1].map((BH => {
+         const LH = tB(HH.direction, BH);
+         return {
+ ... (91 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L670-L673` → after: `L559-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L559-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L559-L582) · [Before (L670-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L670-L673)

```diff
-     function yV(VV, eV, xV, UV, yV, pV, QV) {
-       const nV = QV || YV.loadFile;
-       if (!nV) throw (0, JV.n)("FileTools");
-       return nV(VV, eV, xV, UV, yV, pV)
+     function JH(HH) {
+       var BH, LH, AH;
+       const {
+         chunkGridOrigin: rH,
+         camera: SH
+       } = HH;
+       if (null === rH) return;
+       const hH = [SH.position.x, SH.position.y, SH.position.z],
+         tH = [0, 2].map((HH => Math.floor((hH[HH] + rH[HH]) / uH.g.xX))),
+         zH = HH.chunkGridCentre;
+       if (null !== zH && zH.every(((HH, BH) => HH === tH[BH]))) return;
+       const XH = null === (BH = null === (LH = HH.chunkGrid) || void 0 === LH ? void 0 : LH.isVisible) || void 0 === BH || BH;
+       null === (AH = HH.chunkGrid) || void 0 === AH || AH.dispose();
+       const [YH, QH] = [0, 2].map(((HH, BH) => {
+         const LH = [];
+         for (let AH = tH[BH] - cH; AH <= tH[BH] + cH + 1; AH++) LH.push(AH * uH.g.xX - rH[HH]);
+ ... (8 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L677-L698` → after: `L586-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L586-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L586-L590) · [Before (L677-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L677-L698)

```diff
-       if (VV) return eV ? VV.IS_NDC_HALF_ZRANGE = "" : delete VV.IS_NDC_HALF_ZRANGE, xV ? VV.USE_REVERSE_DEPTHBUFFER = "" : delete VV.USE_REVERSE_DEPTHBUFFER, void(JV ? VV.USE_EXACT_SRGB_CONVERSIONS = "" : delete VV.USE_EXACT_SRGB_CONVERSIONS);
-       {
-         let VV = "";
-         return eV && (VV += "#define IS_NDC_HALF_ZRANGE"), xV && (VV && (VV += "\n"), VV += "#define USE_REVERSE_DEPTHBUFFER"), JV && (VV && (VV += "\n"), VV += "#define USE_EXACT_SRGB_CONVERSIONS"), VV
-       }
-     }
- 
-     function QV(VV, eV) {
-       let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         JV = arguments.length > 3 ? arguments[3] : void 0;
-       switch (VV) {
-         case 3: {
-           const VV = new Int8Array(eV);
-           return JV && VV.set(new Int8Array(JV)), VV
-         }
-         case 0: {
- ... (6 more removed lines; see GitHub link above)
+       HH.yHH("matrix", function(HH, BH) {
+         const LH = new Float32Array(16 * BH);
+         for (let AH = 0; AH < BH; AH++) {
+           const BH = 16 * AH;
+           LH[BH] = 1, LH[BH + 5] = 1, LH[BH + 10] = 1, LH[BH + 12] = HH[3 * AH], LH[BH + 13] = HH[3 * AH + 1], LH[BH + 14] = HH[3 * AH + 2], LH[BH + 15] = 1
```

#### 19. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L700-L727` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L592-L593) · [Before (L700-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L700-L727)

```diff
-         case 5:
-         case 8:
-         case 9:
-         case 10:
-         case 2: {
-           const VV = "number" !== typeof eV ? new Uint16Array(eV) : new Uint16Array(xV ? eV / 2 : eV);
-           return JV && VV.set(new Uint16Array(JV)), VV
-         }
-         case 6: {
-           const VV = "number" !== typeof eV ? new Int32Array(eV) : new Int32Array(xV ? eV / 4 : eV);
-           return JV && VV.set(new Int32Array(JV)), VV
-         }
-         case 7:
-         case 11:
-         case 12:
-         case 13:
- ... (12 more removed lines; see GitHub link above)
+         return LH
+       }(BH, AH), 16, !0), HH.yHH("color", LH, 4, !0), HH.isVisible = AH > 0
```

#### 20. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L740` → after: `L597-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L597-L616) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L740)

```diff
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !JV[VV]) return JV[VV] = !0, `${VV} needs to be imported before as it contains a side-effect required by your code.`
+       const {
+         camera: BH,
+         translucent: LH
+       } = HH, AH = [BH.position.x, BH.position.y, BH.position.z], rH = HH.translucentSortedFrom;
+       if (null !== rH && Math.hypot(AH[0] - rH[0], AH[1] - rH[1], AH[2] - rH[2]) < KH) return;
+       HH.translucentSortedFrom = AH;
+       const SH = new Float64Array(LH.count),
+         hH = new Uint32Array(LH.count);
+       for (let CH = 0; CH < LH.count; CH++) {
+         const HH = LH.yQ[3 * CH] - AH[0],
+           BH = LH.yQ[3 * CH + 1] - AH[1],
+           rH = LH.yQ[3 * CH + 2] - AH[2];
+         SH[CH] = HH * HH + BH * BH + rH * rH, hH[CH] = CH
+       }
+       hH.sort(((HH, BH) => SH[BH] - SH[HH]));
+       const tH = new Float32Array(3 * LH.count),
+ ... (4 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L747-L754` → after: `L620-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L620-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L620-L624) · [Before (L747-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L747-L754)

```diff
-       let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-       const JV = function() {
-         if ((xV || yV) && 0 === pV) {
-           const xV = `${VV}.${eV}`;
-           UV[xV] || (UV[xV] = !0, console.warn(`[Babylon.js] ${xV}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
-         }
-       };
-       return JV.__isSideEffectStub = !0, JV
+       const LH = (LH, AH, rH) => new EH.lu(0 === LH ? HH[0] : BH[0], 0 === AH ? HH[1] : BH[1], 0 === rH ? HH[2] : BH[2]),
+         AH = [];
+       for (const rH of [0, 1])
+         for (const HH of [0, 1]) AH.push([LH(0, rH, HH), LH(1, rH, HH)], [LH(rH, 0, HH), LH(rH, 1, HH)], [LH(rH, HH, 0), LH(rH, HH, 1)]);
+       return AH
```

#### 22. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L758-L787` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L628) · [Before (L758-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L758-L787)

```diff
-       return !!VV && !VV.__isSideEffectStub
-     }
- 
-     function wV(VV, eV) {
-       return {
-         get() {},
-         set(VV) {
-           Object.defineProperty(this, eV, {
-             value: VV,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
- ... (14 more removed lines; see GitHub link above)
+       return [Math.sin(HH.heading) * Math.cos(HH.pitch), -Math.sin(HH.pitch), Math.cos(HH.heading) * Math.cos(HH.pitch)]
```

#### 23. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L791-L823` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L632) · [Before (L791-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L791-L823)

```diff
-       let eV = "",
-         xV = VV.firstChild;
-       for (; xV;) 3 === xV.nodeType && (eV += xV.textContent), xV = xV.nextSibling;
-       return eV
-     }
-     xV.d(eV, {
-       b: () => yV,
-       f: () => UV,
-       j: () => YV,
-       n: () => JV
-     })
-   },
-   41313: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => JV,
-       g: () => YV,
- ... (17 more removed lines; see GitHub link above)
+       return [Math.cos(HH), 0, -Math.sin(HH)]
```

#### 24. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L825-L860` → after: `L634-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L634-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L634-L657) · [Before (L825-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L825-L860)

```diff
-   },
-   41300: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => WV,
-       g: () => qV,
-       h: () => XV,
-       k: () => zV,
-       o: () => AV,
-       r: () => TV,
-       v: () => PV,
-       x: () => CV,
-       z: () => NV,
-       B: () => tV
-     });
-     var JV = xV(41309),
-       YV = xV(41122),
- ... (20 more removed lines; see GitHub link above)
+ 
+     function LB(HH, BH, LH) {
+       let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: NH,
+         pitch: RH
+       };
+       const rH = [HH.max[0] - HH.min[0], HH.max[1] - HH.min[1], HH.max[2] - HH.min[2]],
+         SH = HB(AH),
+         hH = BB(AH.heading),
+         tH = CB(SH, hH),
+         zH = Math.tan(LH / 2),
+         CH = zH * BH;
+       let EH = 1;
+       for (const XH of [-rH[0] / 2, rH[0] / 2])
+         for (const HH of [-rH[1] / 2, rH[1] / 2])
+           for (const BH of [-rH[2] / 2, rH[2] / 2]) {
+ ... (8 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L863-L865` → after: `L660-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L660-L669) · [Before (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L863-L865)

```diff
-     class jV extends pV.j {
-       constructor(VV, eV) {
-         super(VV, pV.g.ReadFileError), this.file = eV, this.name = "ReadFileError", pV.d._setPrototypeOf(this, jV.prototype)
+ 
+     function AB(HH, BH, LH) {
+       const AH = SB(HH),
+         rH = SB(LH),
+         SH = hB(HH.position, tB(BH, -1)),
+         hH = [0, 1, 2].reduce(((HH, BH) => hB(HH, tB(rH[BH], zB(SH, AH[BH])))), [0, 0, 0]);
+       return {
+         position: hB(BH, hH),
+         heading: LH.heading,
+         pitch: LH.pitch
```

#### 26. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L1186` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L674) · [Before (L1186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L1186)

```diff
-       return (0, QV.d)(VV.split(",")[1])
+       return tB(hB(HH.min, HH.max), .5)
```

#### 27. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L1237-L1238` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L677-L680) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L1237-L1238)

```diff
-     function CV() {
-       iV || (iV = !0, DV(WV, RV, qV, zV, MV, AV, TV, PV, NV, tV), wV.b.loadFile = AV, wV.b.loadImage = TV, ZV.p.loadFile = AV)
+     function SB(HH) {
+       const BH = HB(HH),
+         LH = BB(HH.heading);
+       return [BH, LH, CB(BH, LH)]
```

#### 28. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L1249-L1283` → after: `L683-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L683-L684) · [Before (L1249-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L1249-L1283)

```diff
-     function YV() {
-       if (JV) return JV;
-       const VV = new ArrayBuffer(4),
-         eV = new Float32Array(VV),
-         xV = new Uint32Array(VV),
-         YV = new Uint32Array(512),
-         UV = new Uint32Array(512);
-       for (let JV = 0; JV < 256; ++JV) {
-         const VV = JV - 127;
-         VV < -24 ? (YV[JV] = 0, YV[256 | JV] = 32768, UV[JV] = 24, UV[256 | JV] = 24) : VV < -14 ? (YV[JV] = 1024 >> -VV - 14, YV[256 | JV] = 1024 >> -VV - 14 | 32768, UV[JV] = -VV - 1, UV[256 | JV] = -VV - 1) : VV <= 15 ? (YV[JV] = VV + 15 << 10, YV[256 | JV] = VV + 15 << 10 | 3 … [truncated]
-       }
-       const yV = new Uint32Array(2048),
-         pV = new Uint32Array(64),
-         QV = new Uint32Array(64);
-       for (let JV = 1; JV < 1024; ++JV) {
-         let VV = JV << 13,
- ... (19 more removed lines; see GitHub link above)
+     function hB(HH, BH) {
+       return [HH[0] + BH[0], HH[1] + BH[1], HH[2] + BH[2]]
```

#### 29. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L1287-L1292` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L687-L688) · [Before (L1287-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L1287-L1292)

```diff
-     function yV(VV) {
-       const eV = YV();
-       eV.floatView[0] = VV;
-       const xV = eV.uint32View[0],
-         JV = xV >> 23 & 511;
-       return eV.baseTable[JV] + ((8388607 & xV) >> eV.shiftTable[JV])
+     function tB(HH, BH) {
+       return [HH[0] * BH, HH[1] * BH, HH[2] * BH]
```

#### 30. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L1295-L1338` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L691-L692) · [Before (L1295-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L1295-L1338)

```diff
-     function pV(VV) {
-       const eV = YV();
-       return eV.uint32View[0] = eV.mantissaTable[eV.offsetTable[VV >> 10] + (1023 & VV)] + eV.exponentTable[VV >> 10], eV.floatView[0]
-     }
-   },
-   41315: (VV, eV, xV) => {
-     xV.d(eV, {
-       d: () => UV,
-       g: () => YV,
-       h: () => JV
-     });
-     const JV = VV => {
-         const eV = ArrayBuffer.isView(VV) ? new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength) : new Uint8Array(VV);
-         return "function" === typeof eV.toBase64 ? eV.toBase64() : function(VV) {
-           const eV = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
-           let xV, JV, YV, UV, yV, pV, QV, nV = "",
- ... (28 more removed lines; see GitHub link above)
+     function zB(HH, BH) {
+       return HH[0] * BH[0] + HH[1] * BH[1] + HH[2] * BH[2]
```

#### 31. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L1341-L1506` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/279.js#L695-L696) · [Before (L1341-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/279.js#L1341-L1506)

```diff
-     function UV(VV, eV, xV) {
-       try {
-         if (VV()) return eV(), !0
-       } catch (JV) {
-         return xV?.(JV), !0
-       }
-       return !1
-     }
-     const yV = function(VV, eV, xV) {
-       let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
-         YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
-         yV = arguments.length > 6 ? arguments[6] : void 0;
-       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && UV(VV, eV, xV)) return null;
-       const pV = setInterval((() => {
-         UV(VV, eV, xV) ? clearInterval(pV) : (YV -= JV, YV < 0 && (clearInterval(pV), xV?.(new Error("Operation timed out after maximum retries. " + (yV || "")), !0)))
-       }), JV);
- ... (150 more removed lines; see GitHub link above)
+     function CB(HH, BH) {
+       return [HH[1] * BH[2] - HH[2] * BH[1], HH[2] * BH[0] - HH[0] * BH[2], HH[0] * BH[1] - HH[1] * BH[0]]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (109 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4` → after: `L4-L1074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4-L1074) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L4)

```diff
-   41344: (VV, eV, xV) => {
+   41489: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => WH,
+       g: () => vH
+     });
+     var AH = LH(41290),
+       rH = LH(41297),
+       SH = LH(41398),
+       hH = LH(37997),
+       tH = LH(37963),
+       zH = LH(41498),
+       CH = LH(39595),
+       EH = LH(38012),
+       XH = LH(41169),
+       GH = LH(38966),
+       YH = LH(38610),
+ ... (1055 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L8-L9` → after: `L1078-L3733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR1078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L1078-L3733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L1078-L3733) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L8-L9)

```diff
-     var JV = xV(39870),
-       YV = xV(38318);
+     var AH = LH(41184);
+     let rH = !1;
+ 
+     function SH() {
+       rH || (rH = !0, AH.c.prototype.getInputElement = function() {
+         return this._renderingCanvas
+       }, AH.c.prototype.getRenderingCanvasClientRect = function() {
+         return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
+       }, AH.c.prototype.getInputElementClientRect = function() {
+         return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
+       }, AH.c.prototype.getAspectRatio = function(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const LH = HH.viewport;
+         return this.getRenderWidth(BH) * LH.width / (this.getRenderHeight(BH) * LH.height)
+       }, AH.c.prototype.getScreenAspectRatio = function() {
+         return this.getRenderWidth(!0) / this.getRenderHeight(!0)
+ ... (2640 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L11-L22` → after: `L3735-L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L3735-L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L3735-L4265) · [Before (L11-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L11-L22)

```diff
-       static Instantiate(VV) {
-         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[VV]) return this.RegisteredExternalClasses[VV];
-         const eV = (0, YV.c)(VV);
-         if (eV) return eV;
-         JV.b.Warn(VV + " not found, you may have missed an import.");
-         const xV = VV.split(".");
-         let UV = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
-         for (let JV = 0, YV = xV.length; JV < YV; JV++) UV = UV[xV[JV]];
-         return "function" !== typeof UV ? null : UV
-       }
-     }
-     UV.RegisteredExternalClasses = {}
+       get boundingBias() {
+         return this._boundingBias
+       }
+       set boundingBias(HH) {
+         this._boundingBias ? this._boundingBias.Tm(HH) : this._boundingBias = HH.clone(), this._updateBoundingInfo(!0, null)
+       }
+       static CreateGeometryForMesh(HH) {
+         const BH = new MH(MH.RandomId(), HH.yN());
+         return BH.applyToMesh(HH), BH
+       }
+       get meshes() {
+         return this._meshes
+       }
+       constructor(HH, BH, LH) {
+         let rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+ ... (515 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L24` → after: `L4267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4267) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L24)

```diff
-   41154: (VV, eV, xV) => {
+   41762: (HH, BH, LH) => {
```

#### 5. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L26` → after: `L4269-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4269-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4269-L4566) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L26)

```diff
-       b: () => YV
+       c: () => XH,
+       e: () => uH
+     });
+     var AH = LH(37963),
+       rH = LH(39595),
+       SH = LH(41730),
+       hH = LH(41693),
+       tH = LH(39588),
+       zH = LH(41738),
+       CH = LH(41427),
+       EH = LH(38012);
+     class XH extends SH.c {
+       constructor(HH, BH) {
+         super(HH, BH.yN()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, BH.nHH(this), this._sourceMesh = BH, this._unIndexed = BH._unIndexed, this.position.Tm(BH.position), this.rotation.Tm(BH.rotation), this.bX.Tm(BH.bX), BH.rotationQuaternion && (this … [truncated]
+         for (const LH of BH.getAnimationRanges()) null != LH && this.createAnimationRange(LH.name, LH.from, LH.to);
+         if (this.infiniteDistance = BH.infiniteDistance, this.setPivotMatrix(BH.getPivotMatrix()), BH.skeleton || BH.morphTargetManager || !BH.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
+ ... (282 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L28` → after: `L4568-L4591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4568-L4591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4568-L4591) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L28)

```diff
-     var JV = xV(41122);
+     var AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH = LH(37997),
+       xH = LH(41387),
+       vH = LH(41336),
+       PH = LH(39588),
+       TH = LH(41326),
+       UH = LH(41697),
+       VH = LH(41489),
+       OH = LH(37963),
+       bH = LH(38074),
+       kH = LH(41498),
+       mH = LH(41427),
+       oH = LH(41703),
+       IH = LH(41706),
+       fH = LH(41730),
+       lH = LH(41578),
+       KH = LH(41573),
+ ... (8 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L30-L31` → after: `L4593-L4727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4593-L4727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4593-L4727) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L30-L31)

```diff
-       static get Now() {
-         return (0, JV.n)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       constructor(HH, BH) {
+         this.distanceOrScreenCoverage = HH, this.mesh = BH
+       }
+     }
+     class DH {}
+     class wH {
+       constructor() {
+         this.batchCache = new dH(this), this.batchCacheReplacementModeInFrozenMode = new dH(this), this.instancesBufferSize = 2048
+       }
+     }
+     class ZH {
+       constructor() {
+         this.renderPasses = {}
+       }
+     }
+     class dH {
+ ... (119 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L33-L106` → after: `L4729-L4736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4729-L4736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4729-L4736) · [Before (L33-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L33-L106)

```diff
-     }
-   },
-   41190: (VV, eV, xV) => {
-     function JV(VV) {
-       let eV = 1;
-       do {
-         eV *= 2
-       } while (eV < VV);
-       return eV === VV
-     }
- 
-     function YV(VV, eV, xV) {
-       return VV * (1 - xV) + eV * xV
-     }
- 
-     function UV(VV) {
- ... (58 more removed lines; see GitHub link above)
+       get manualUpdateOfPreviousWorldMatrixInstancedBuffer() {
+         return this._instanceDataStorage.previousManualUpdate
+       }
+       set manualUpdateOfPreviousWorldMatrixInstancedBuffer(HH) {
+         this._instanceDataStorage.previousManualUpdate = HH
+       }
+       get forceWorldMatrixInstancedBufferUpdate() {
+         return this._instanceDataStorage.forceMatrixUpdates
```

#### 9. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L108-L109` → after: `L4738-L4739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4738-L4739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4738-L4739) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L108-L109)

```diff
-       static set BaseUrl(VV) {
-         vV.g.BaseUrl = VV
+       set forceWorldMatrixInstancedBufferUpdate(HH) {
+         this._instanceDataStorage.forceMatrixUpdates = HH
```

#### 10. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L111-L112` → after: `L4741-L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4741-L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4741-L4807) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L111-L112)

```diff
-       static get CleanUrl() {
-         return vV.g.CleanUrl
+       _copySource(HH, BH) {
+         let LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         const rH = this.yN();
+         if (HH._geometry && HH._geometry.applyToMesh(this), PH.d.DeepCopy(HH, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "ESH", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLe … [truncated]
+           const BH = HH._ranges;
+           for (const HH in BH) Object.prototype.hasOwnProperty.call(BH, HH) && BH[HH] && this.createAnimationRange(HH, BH[HH].from, BH[HH].to)
+         }
+         if (HH.metadata && HH.metadata.clone ? this.metadata = HH.metadata.clone() : this.metadata = HH.metadata, this._internalMetadata = HH._internalMetadata, this.meshBlendingTag = HH.meshBlendingTag, TH.b && TH.b.HasTags(HH) && TH.b.AddTagsTo(this, TH.b.GetTags(HH, !0)), this … [truncated]
+           const rH = HH.getDescendants(!0);
+           for (let HH = 0; HH < rH.length; HH++) {
+             const SH = rH[HH];
+             SH._isMesh ? (JH.parent = this, JH.doNotCloneChildren = BH, JH.clonePhysicsImpostor = LH, JH.cloneThinInstances = AH, SH.clone(this.name + "." + SH.name, JH)) : SH.clone && SH.clone(this.name + "." + SH.name, this)
+           }
+         }
+         if (HH.morphTargetManager && (this.morphTargetManager = HH.morphTargetManager), (0, jH.c)(rH.getPhysicsEngine)) {
+ ... (51 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L114-L115` → after: `L4809-L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4809-L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4809-L4810) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L114-L115)

```diff
-       static set CleanUrl(VV) {
-         vV.g.CleanUrl = VV
+       get _isMesh() {
+         return !0
```

#### 12. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L117-L118` → after: `L4812-L4822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4812-L4822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4812-L4822) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L117-L118)

```diff
-       static IsAbsoluteUrl(VV) {
-         return 0 === VV.indexOf("//") || -1 !== VV.indexOf("://") && (-1 !== VV.indexOf(".") && (-1 !== VV.indexOf("/") && (!(VV.indexOf(":") > VV.indexOf("/")) && (VV.indexOf("://") < VV.indexOf(".") || (0 === VV.indexOf("data:") || 0 === VV.indexOf("blob:"))))))
+       toString(HH) {
+         let BH = super.toString(HH);
+         if (BH += ", n vertices: " + this.getTotalVertices(), BH += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
+           for (let LH = 0; LH < this.animations.length; LH++) BH += ", animation[0]: " + this.animations[LH].toString(HH);
+         if (HH)
+           if (this._geometry) {
+             const HH = this.vrH(),
+               LH = this.getVerticesData(mH.i.PositionKind);
+             LH && HH && (BH += ", flat shading: " + (LH.length / 3 === HH.length ? "YES" : "NO"))
+           } else BH += ", flat shading: UNKNOWN";
+         return BH
```

#### 13. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L120-L121` → after: `L4824-L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4824-L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4824-L4826) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L120-L121)

```diff
-       static set ScriptBaseUrl(VV) {
-         vV.g.ScriptBaseUrl = VV
+       _unBindEffect() {
+         super._unBindEffect();
+         for (const HH of this.instances) HH._unBindEffect()
```

#### 14. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L123-L124` → after: `L4828-L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4828-L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4828-L4829) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L123-L124)

```diff
-       static get ScriptBaseUrl() {
-         return vV.g.ScriptBaseUrl
+       get hasLODLevels() {
+         return this._internalMeshDataInfo._LODLevels.length > 0
```

#### 15. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L126-L127` → after: `L4831-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4831-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4831-L4832) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L126-L127)

```diff
-       static set CDNBaseUrl(VV) {
-         JV.ScriptBaseUrl = VV, JV.AssetBaseUrl = VV
+       getLODLevels() {
+         return this._internalMeshDataInfo._LODLevels
```

#### 16. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L129-L130` → after: `L4834-L4836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4834-L4836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4834-L4836) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L129-L130)

```diff
-       static set ScriptPreprocessUrl(VV) {
-         vV.g.ScriptPreprocessUrl = VV
+       _sortLODLevels() {
+         const HH = this._internalMeshDataInfo._useLODScreenCoverage ? -1 : 1;
+         this._internalMeshDataInfo._LODLevels.sort(((BH, LH) => BH.distanceOrScreenCoverage < LH.distanceOrScreenCoverage ? HH : BH.distanceOrScreenCoverage > LH.distanceOrScreenCoverage ? -HH : 0))
```

#### 17. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L132-L133` → after: `L4838-L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4838-L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4838-L4841) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L132-L133)

```diff
-       static get ScriptPreprocessUrl() {
-         return vV.g.ScriptPreprocessUrl
+       addLODLevel(HH, BH) {
+         if (BH && BH._masterMesh) return NH.e.Warn("You cannot use a mesh as LOD level twice"), this;
+         const LH = new FH(HH, BH);
+         return this._internalMeshDataInfo._LODLevels.push(LH), BH && (BH._masterMesh = this), this._sortLODLevels(), this
```

#### 18. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L135-L136` → after: `L4843-L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4843-L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4843-L4849) · [Before (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L135-L136)

```diff
-       static get DefaultRetryStrategy() {
-         return vV.g.DefaultRetryStrategy
+       getLODLevelAtDistance(HH) {
+         const BH = this._internalMeshDataInfo;
+         for (let LH = 0; LH < BH._LODLevels.length; LH++) {
+           const AH = BH._LODLevels[LH];
+           if (AH.distanceOrScreenCoverage === HH) return AH.mesh
+         }
+         return null
```

#### 19. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L138-L139` → after: `L4851-L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4851-L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4851-L4854) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L138-L139)

```diff
-       static set DefaultRetryStrategy(VV) {
-         vV.g.DefaultRetryStrategy = VV
+       removeLODLevel(HH) {
+         const BH = this._internalMeshDataInfo;
+         for (let LH = 0; LH < BH._LODLevels.length; LH++) BH._LODLevels[LH].mesh === HH && (BH._LODLevels.splice(LH, 1), HH && (HH._masterMesh = null));
+         return this._sortLODLevels(), this
```

#### 20. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L141-L142` → after: `L4856-L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4856-L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4856-L4880) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L141-L142)

```diff
-       static get CorsBehavior() {
-         return vV.g.CorsBehavior
+       getLOD(HH, BH) {
+         const LH = this._internalMeshDataInfo;
+         if (!LH._LODLevels || 0 === LH._LODLevels.length) return this;
+         const AH = BH || this.jF().nrH,
+           rH = HH.mode === VH.d.ORTHOGRAPHIC_CAMERA ? HH.minZ : AH.centerWorld.subtract(HH.globalPosition).length();
+         let SH = rH,
+           hH = 1;
+         if (LH._useLODScreenCoverage) {
+           const BH = HH.screenArea;
+           let LH = AH.radiusWorld * HH.minZ / rH;
+           LH = LH * LH * Math.PI, SH = LH / BH, hH = -1
+         }
+         if (hH * LH._LODLevels[LH._LODLevels.length - 1].distanceOrScreenCoverage > hH * SH) return this.onLODLevelSelection && this.onLODLevelSelection(SH, this, this), this;
+         for (let tH = 0; tH < LH._LODLevels.length; tH++) {
+           const HH = LH._LODLevels[tH];
+           if (hH * HH.distanceOrScreenCoverage < hH * SH) {
+ ... (9 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L144-L145` → after: `L4882-L4883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4882-L4883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4882-L4883) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L144-L145)

```diff
-       static set CorsBehavior(VV) {
-         vV.g.CorsBehavior = VV
+       get geometry() {
+         return this._geometry
```

#### 22. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L147-L148` → after: `L4885-L4886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4885-L4886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4885-L4886) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L147-L148)

```diff
-       static get UseFallbackTexture() {
-         return ZV.d.UseFallbackTexture
+       getTotalVertices() {
+         return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
```

#### 23. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L150-L151` → after: `L4888-L4891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4888-L4891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4888-L4891) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L150-L151)

```diff
-       static set UseFallbackTexture(VV) {
-         ZV.d.UseFallbackTexture = VV
+       getVerticesData(HH, BH, LH, AH) {
+         if (!this._geometry) return null;
+         let rH = AH ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[HH]?.getFloatData(this.instances.length + 1, LH || BH && 1 !== this._geometry.meshes.length);
+         return rH || (rH = this._geometry.getVerticesData(HH, BH, LH)), rH
```

#### 24. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L153-L154` → after: `L4893-L4894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4893-L4894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4893-L4894) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L153-L154)

```diff
-       static get RegisteredExternalClasses() {
-         return kV.e.RegisteredExternalClasses
+       copyVerticesData(HH, BH) {
+         this._geometry && this._geometry.copyVerticesData(HH, BH)
```

#### 25. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L156-L157` → after: `L4896-L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4896-L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4896-L4897) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(VV) {
-         kV.e.RegisteredExternalClasses = VV
+       getVertexBuffer(HH, BH) {
+         return this._geometry ? (BH ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[HH]) ?? this._geometry.getVertexBuffer(HH) : null
```

#### 26. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L159-L160` → after: `L4899-L4900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4899-L4900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4899-L4900) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L159-L160)

```diff
-       static get fallbackTexture() {
-         return ZV.d.FallbackTexture
+       isVerticesDataPresent(HH, BH) {
+         return this._geometry ? !BH && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[HH] || this._geometry.isVerticesDataPresent(HH) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH)
```

#### 27. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L162-L163` → after: `L4902-L4908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4902-L4908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4902-L4908) · [Before (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L162-L163)

```diff
-       static set fallbackTexture(VV) {
-         ZV.d.FallbackTexture = VV
+       isVertexBufferUpdatable(HH, BH) {
+         if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(HH);
+         if (!BH) {
+           const BH = this._userInstancedBuffersStorage?.vertexBuffers[HH];
+           if (BH) return BH.isUpdatable()
+         }
+         return this._geometry.isVertexBufferUpdatable(HH)
```

#### 28. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L165-L167` → after: `L4910-L4920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4910-L4920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4910-L4920) · [Before (L165-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L165-L167)

```diff
-       static FetchToRef(VV, eV, xV, JV, YV, UV) {
-         const yV = 4 * ((Math.abs(VV) * xV % xV | 0) + (Math.abs(eV) * JV % JV | 0) * xV);
-         UV.r = YV[yV] / 255, UV.g = YV[yV + 1] / 255, UV.b = YV[yV + 2] / 255, UV.a = YV[yV + 3] / 255
+       getVerticesDataKinds(HH) {
+         if (!this._geometry) {
+           const HH = [];
+           if (this._delayInfo)
+             for (const BH of this._delayInfo) HH.push(BH);
+           return HH
+         }
+         const BH = this._geometry.getVerticesDataKinds();
+         if (!HH && this._userInstancedBuffersStorage)
+           for (const LH in this._userInstancedBuffersStorage.vertexBuffers) - 1 === BH.indexOf(LH) && BH.push(LH);
+         return BH
```

#### 29. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L169-L170` → after: `L4922-L4923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4922-L4923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4922-L4923) · [Before (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L169-L170)

```diff
-       static Mix(VV, eV, xV) {
-         return 0
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
```

#### 30. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L172-L173` → after: `L4925-L4926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4925-L4926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4925-L4926) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L172-L173)

```diff
-       static Instantiate(VV) {
-         return kV.e.Instantiate(VV)
+       vrH(HH, BH) {
+         return this._geometry ? this._geometry.vrH(HH, BH) : []
```

#### 31. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L175-L176` → after: `L4928-L4929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4928-L4929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4928-L4929) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L175-L176)

```diff
-       static SetImmediate(VV) {
-         rV.b.SetImmediate(VV)
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
```

#### 32. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L178` → after: `L4931-L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4931-L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4931-L4971) · [Before (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L178)

```diff
-       static IsExponentOfTwo(VV) {
+       isReady() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (2 === this.delayLoadState) return !1;
+         if (!super.isReady(HH)) return !1;
+         if (!this.jU || 0 === this.jU.length) return !0;
+         if (!HH) return !0;
+         const LH = this.Iu(),
+           AH = this.yN(),
+           rH = BH || LH.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
+         this.computeWorldMatrix();
+         const SH = this.material || AH.defaultMaterial;
+         if (SH)
+           if (SH._storeEffectOnSubMeshes)
+             for (const tH of this.jU) {
+               const HH = tH.eu();
+ ... (25 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L181-L182` → after: `L4974-L4975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4974-L4975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4974-L4975) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L181-L182)

```diff
-       static FloatRound(VV) {
-         return Math.fround(VV)
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
```

#### 34. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L184-L186` → after: `L4977-L4978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4977-L4978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4977-L4978) · [Before (L184-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L184-L186)

```diff
-       static GetFilename(VV) {
-         const eV = VV.lastIndexOf("/");
-         return eV < 0 ? VV : VV.substring(eV + 1)
+       qu() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
```

#### 35. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L188-L191` → after: `L4980-L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4980-L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4980-L4990) · [Before (L188-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L188-L191)

```diff
-       static GetFolderPath(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         const xV = VV.lastIndexOf("/");
-         return xV < 0 ? eV ? VV : "" : VV.substring(0, xV + 1)
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
+       }
+       set overridenInstanceCount(HH) {
+         this._instanceDataStorage.overridenInstanceCount = HH
+       }
+       _getInstanceDataStorage() {
+         if (this._instanceDataStorage.useMonoDataStorageRenderPass) return this._instanceDataStorage.dataStorageRenderPass;
+         const HH = this._instanceDataStorage.engine.currentRenderPassId;
+         let BH = this._instanceDataStorage.renderPasses[HH];
+         return BH || (BH = new wH, this._instanceDataStorage.renderPasses[HH] = BH), BH
```

#### 36. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L193-L194` → after: `L4992-L4995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4992-L4995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4992-L4995) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L193-L194)

```diff
-       static ToDegrees(VV) {
-         return 180 * VV / Math.PI
+       _preActivate() {
+         const HH = this._internalMeshDataInfo,
+           BH = this.yN().getRenderId();
+         return HH._preActivateId === BH || (HH._preActivateId = BH, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
```

#### 37. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L196-L197` → after: `L4997-L4999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4997-L4999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L4997-L4999) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L196-L197)

```diff
-       static ToRadians(VV) {
-         return VV * Math.PI / 180
+       _preActivateForIntermediateRendering(HH) {
+         const BH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return BH.visibleInstances && (BH.visibleInstances.intermediateDefaultRenderId = HH), this
```

#### 38. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L199-L203` → after: `L5001-L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5001-L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5001-L5007) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L199-L203)

```diff
-       static SmoothAngleChange(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
-         const JV = this.ToRadians(VV),
-           YV = this.ToRadians(eV);
-         return this.ToDegrees(Math.atan2((1 - xV) * Math.sin(YV) + xV * Math.sin(JV), (1 - xV) * Math.cos(YV) + xV * Math.cos(JV)))
+       _registerInstanceForRenderId(HH, BH) {
+         const LH = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
+         return LH.visibleInstances || (LH.visibleInstances = {
+           defaultRenderId: BH,
+           selfDefaultRenderId: this._renderId,
+           intermediateDefaultRenderId: -1
+         }), LH.visibleInstances[BH] || (void 0 === LH.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete LH.visibleInstances[LH.previousRenderId], LH.previousRenderId = BH, LH.visibleInstances[BH] = new Arra … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L205-L206` → after: `L5009-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5009-L5010) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L205-L206)

```diff
-       static MakeArray(VV, eV) {
-         return !0 === eV || void 0 !== VV && null != VV ? Array.isArray(VV) ? VV : [VV] : null
+       _afterComputeWorldMatrix() {
+         super._afterComputeWorldMatrix(), this.hasThinInstances && (this.cu || this.thinInstanceRefreshBoundingInfo(!1))
```

#### 40. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L208-L209` → after: `L5012-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5012-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5012-L5048) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L208-L209)

```diff
-       static GetPointerPrefix(VV) {
-         return (0, UV.n)() && !window.PointerEvent ? "mouse" : "pointer"
+       _postActivate() {
+         this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
+       }
+       refreshBoundingInfo() {
+         let HH, BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           LH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         if (this.hasBoundingInfo && this.jF().isLocked) return this;
+         HH = "object" === typeof BH ? BH : {
+           applySkeleton: BH,
+           applyMorph: LH
+         };
+         const AH = this.geometry ? this.geometry.boundingBias : null;
+         return this._refreshBoundingInfo(this._getData(HH, null, mH.i.PositionKind), AH), this
+       }
+       _createGlobalSubMesh(HH) {
+         const BH = this.getTotalVertices();
+ ... (21 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L211-L212` → after: `L5050-L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5050-L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5050-L5058) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L211-L212)

```diff
-       static SetCorsBehavior(VV, eV) {
-         (0, vV.B)(VV, eV)
+       subdivide(HH) {
+         if (HH < 1) return;
+         const BH = this.getTotalIndices();
+         let LH = BH / HH | 0,
+           AH = 0;
+         for (; LH % 3 !== 0;) LH++;
+         this.releaseSubMeshes();
+         for (let rH = 0; rH < HH && !(AH >= BH); rH++) lH.d.CreateFromIndices(0, AH, AH + LH >= BH ? BH - AH : LH, this, void 0, !1), AH += LH;
+         this.refreshBoundingInfo(), this.synchronizeInstances()
```

#### 42. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L214-L215` → after: `L5060-L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5060-L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5060-L5070) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L214-L215)

```diff
-       static SetReferrerPolicyBehavior(VV, eV) {
-         eV.referrerPolicy = VV
+       setVerticesData(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           AH = arguments.length > 3 ? arguments[3] : void 0;
+         if (this._geometry) this._geometry.setVerticesData(HH, BH, LH, AH);
+         else {
+           const AH = new oH.b;
+           AH.set(BH, HH);
+           const rH = this.yN();
+           new IH.d(IH.d.RandomId(), rH, AH, LH, this)
+         }
+         return this
```

#### 43. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L217-L218` → after: `L5072-L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5072-L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5072-L5073) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return vV.g.PreprocessUrl
+       removeVerticesData(HH) {
+         this._geometry && this._geometry.removeVerticesData(HH)
```

#### 44. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L220-L221` → after: `L5075-L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5075-L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5075-L5078) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L220-L221)

```diff
-       static set PreprocessUrl(VV) {
-         vV.g.PreprocessUrl = VV
+       markVerticesDataAsUpdatable(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const LH = this.getVertexBuffer(HH);
+         LH && LH.isUpdatable() !== BH && this.setVerticesData(HH, this.getVerticesData(HH), BH)
```

#### 45. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L223-L224` → after: `L5080-L5083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5080-L5083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5080-L5083) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L223-L224)

```diff
-       static LoadImage(VV, eV, xV, JV, YV, UV) {
-         return (0, vV.r)(VV, eV, xV, JV, YV, UV)
+       setVerticesBuffer(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
+           LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         return this._geometry || (this._geometry = IH.d.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(HH, LH, BH), this
```

#### 46. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L226-L227` → after: `L5085-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5085-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5085-L5086) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L226-L227)

```diff
-       static LoadFile(VV, eV, xV, JV, YV, UV) {
-         return (0, vV.o)(VV, eV, xV, JV, YV, UV)
+       updateVerticesData(HH, BH, LH, AH) {
+         return this._geometry ? (AH ? (this.makeGeometryUnique(), this.updateVerticesData(HH, BH, LH, !1)) : this._geometry.updateVerticesData(HH, BH, LH), this) : this
```

#### 47. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L229` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5088) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L229)

```diff
-       static async LoadFileAsync(VV) {
+       updateMeshPositions(HH) {
```

#### 48. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L231-L237` → after: `L5090-L5098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5090-L5098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5090-L5098) · [Before (L231-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L231-L237)

```diff
-         return await new Promise(((xV, JV) => {
-           (0, vV.o)(VV, (VV => {
-             xV(VV)
-           }), void 0, void 0, eV, ((VV, eV) => {
-             JV(eV)
-           }))
-         }))
+         const LH = this.getVerticesData(mH.i.PositionKind);
+         if (!LH) return this;
+         if (HH(LH), this.updateVerticesData(mH.i.PositionKind, LH, !1, !1), BH) {
+           const HH = this.vrH(),
+             BH = this.getVerticesData(mH.i.NormalKind);
+           if (!BH) return this;
+           oH.b.ComputeNormals(LH, HH, BH), this.updateVerticesData(mH.i.NormalKind, BH, !1, !1)
+         }
+         return this
```

#### 49. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L239-L243` → after: `L5100-L5121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5100-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5100-L5121) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L239-L243)

```diff
-       static GetAssetUrl(VV) {
-         if (!VV) return "";
-         if (JV.AssetBaseUrl && VV.startsWith(JV._DefaultAssetsUrl)) {
-           const eV = JV.AssetBaseUrl.endsWith("/") ? JV.AssetBaseUrl.slice(0, -1) : JV.AssetBaseUrl;
-           return VV.replace(JV._DefaultAssetsUrl, eV)
+       makeGeometryUnique() {
+         if (!this._geometry) return this;
+         if (1 === this._geometry.meshes.length) return this;
+         const HH = this._geometry,
+           BH = this._geometry.copy(IH.d.RandomId());
+         return HH.releaseForMesh(this, !0), BH.applyToMesh(this), this
+       }
+       setIndexBuffer(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+           rH = this._geometry;
+         rH || (rH = new IH.d(IH.d.RandomId(), this.yN(), void 0, void 0, this)), rH.setIndexBuffer(HH, BH, LH, AH)
+       }
+       setIndices(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+ ... (6 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L245` → after: `L5123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5123) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L245)

```diff
-         return VV
+         return this
```

#### 51. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L247-L279` → after: `L5125-L5538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5125-L5538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5125-L5538) · [Before (L247-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L247-L279)

```diff
-       static GetBabylonScriptURL(VV, eV) {
-         if (!VV) return "";
-         if (VV.startsWith(JV._DefaultCdnUrl))
-           if (JV.ScriptBaseUrl) {
-             const eV = JV.ScriptBaseUrl.endsWith("/") ? JV.ScriptBaseUrl.slice(0, -1) : JV.ScriptBaseUrl;
-             VV = VV.replace(JV._DefaultCdnUrl, eV)
-           } else if (JV._CdnVersion) {
-           const eV = `${JV._DefaultCdnUrl}/v${JV._CdnVersion}`;
-           VV.startsWith(eV) || (VV = VV.replace(JV._DefaultCdnUrl, eV))
-         }
-         return VV = JV.ScriptPreprocessUrl(VV), eV && !JV.IsAbsoluteUrl(VV) && (VV = JV.GetAbsoluteUrl(VV)), VV
-       }
-       static LoadBabylonScript(VV, eV, xV, YV) {
-         VV = JV.GetBabylonScriptURL(VV), JV.LoadScript(VV, eV, xV)
-       }
-       static async LoadBabylonScriptAsync(VV) {
- ... (17 more removed lines; see GitHub link above)
+       updateIndices(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         return this._geometry ? (this._geometry.updateIndices(HH, BH, LH), this) : this
+       }
+       toLeftHanded() {
+         return this._geometry ? (this._geometry.toLeftHanded(), this) : this
+       }
+       _bind(HH, BH, LH) {
+         let AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (!this._geometry) return this;
+         const rH = this.yN().Iu();
+         let SH;
+         if (this._unIndexed)
+           if (this._getRenderingFillMode(LH) === KH.c.WireFrameFillMode) SH = HH._getLinesIndexBuffer(this.vrH(), rH);
+           else SH = null;
+         else switch (this._getRenderingFillMode(LH)) {
+ ... (398 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L282-L284` → after: `L5541-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5541-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5541-L5548) · [Before (L282-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L282-L284)

```diff
-       static _LoadScriptWeb(VV, eV, xV, JV) {
-         let YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if ("function" === typeof importScripts) {
+       _checkDelayState() {
+         const HH = this.yN();
+         return this._geometry ? this._geometry.load(HH) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(HH)), this
+       }
+       _queueLoad(HH) {
+         HH.addPendingData(this);
+         const BH = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
+         return (async () => {
```

#### 53. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L286` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5550-L5553) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L286)

```diff
-             importScripts(VV), eV && eV()
+             const LH = await HH._loadDelayedFileAsync(this.delayLoadingFile, BH, !0);
+             LH instanceof ArrayBuffer ? this._delayLoadingFunction(LH, this) : this._delayLoadingFunction(JSON.parse(LH), this);
+             for (const HH of this.instances) HH.refreshBoundingInfo(), HH._syncSubMeshes();
+             this.delayLoadState = 1, HH.removePendingData(this)
```

#### 54. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L288` → after: `L5555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5555) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L288)

```diff
-             xV?.(`Unable to load script '${VV}' in worker`, QV)
+             HH.removePendingData(this), HH.mV || NH.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${LH}`)
```

#### 55. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L290` → after: `L5557-L5590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5557-L5590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5557-L5590) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L290)

```diff
-           return
+         })(), this
+       }
+       isInFrustum(HH) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(HH) && (this._checkDelayState(), !0))
+       }
+       setMaterialById(HH) {
+         const BH = this.yN().materials;
+         let LH;
+         for (LH = BH.length - 1; LH > -1; LH--)
+           if (BH[LH].id === HH) return this.material = BH[LH], this;
+         const AH = this.yN().multiMaterials;
+         for (LH = AH.length - 1; LH > -1; LH--)
+           if (AH[LH].id === HH) return this.material = AH[LH], this;
+         return this
+       }
+       getAnimatables() {
+ ... (18 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L292-L299` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5592) · [Before (L292-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L292-L299)

```diff
-         if (!(0, UV.n)()) return void xV?.(`Cannot load script '${VV}' outside of a window or a worker`);
-         const yV = document.getElementsByTagName("head")[0],
-           pV = document.createElement("script");
-         YV ? (pV.setAttribute("type", "module"), pV.innerText = VV) : (pV.setAttribute("type", "text/javascript"), pV.setAttribute("src", VV)), JV && (pV.id = JV), pV.onload = () => {
-           eV && eV()
-         }, pV.onerror = eV => {
-           xV && xV(`Unable to load script '${VV}'`, eV)
-         }, yV.appendChild(pV)
+         return HH.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.jU = BH, this
```

#### 57. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L301-L308` → after: `L5594-L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5594-L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5594-L5596) · [Before (L301-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L301-L308)

```diff
-       static async LoadScriptAsync(VV, eV) {
-         return await new Promise(((xV, JV) => {
-           this.LoadScript(VV, (() => {
-             xV()
-           }), ((VV, eV) => {
-             JV(eV || new Error(VV))
-           }), eV)
-         }))
+       bakeCurrentTransformIntoVertices() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.makeGeometryUnique(), this.bakeTransformIntoVertices(this.computeWorldMatrix(!0)), this.resetLocalMatrix(HH), this
```

#### 58. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L310-L320` → after: `L5598-L5599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5598-L5599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5598-L5599) · [Before (L310-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L310-L320)

```diff
-       static ReadFileAsDataURL(VV, eV, xV) {
-         const JV = new FileReader,
-           UV = {
-             onCompleteObservable: new YV.c,
-             abort: () => JV.abort()
-           };
-         return JV.onloadend = () => {
-           UV.onCompleteObservable.notifyObservers(UV)
-         }, JV.onload = VV => {
-           eV(VV.target.result)
-         }, JV.onprogress = xV, JV.readAsDataURL(VV), UV
+       get _positions() {
+         return this._internalAbstractMeshDataInfo._positions || this._geometry && this._geometry._positions || null
```

#### 59. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L322-L323` → after: `L5601-L5602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5601-L5602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5601-L5602) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L322-L323)

```diff
-       static ReadFile(VV, eV, xV, JV, YV) {
-         return (0, vV.v)(VV, eV, xV, JV, YV)
+       _resetPointsArrayCache() {
+         return this._geometry && this._geometry._resetPointsArrayCache(), this
```

#### 60. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L325-L327` → after: `L5604-L5605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5604-L5605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5604-L5605) · [Before (L325-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L325-L327)

```diff
-       static FileAsURL(VV) {
-         const eV = new Blob([VV]);
-         return window.URL.createObjectURL(eV)
+       _generatePointsArray() {
+         return !!this._geometry && this._geometry._generatePointsArray()
```

#### 61. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L329-L331` → after: `L5607-L5616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5607-L5616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5607-L5616) · [Before (L329-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L329-L331)

```diff
-       static Format(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
-         return VV.toFixed(eV)
+       clone() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
+           BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           LH = arguments.length > 2 ? arguments[2] : void 0,
+           AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         if (BH && void 0 === BH._addToSceneRootNodes) {
+           const LH = BH;
+           return JH.source = this, JH.doNotCloneChildren = LH.doNotCloneChildren, JH.clonePhysicsImpostor = LH.clonePhysicsImpostor, JH.cloneThinInstances = LH.cloneThinInstances, new iH(HH, this.yN(), JH)
+         }
+         return new iH(HH, this.yN(), BH, this, LH, AH)
```

#### 62. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L333-L334` → after: `L5618-L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5618-L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5618-L5636) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L333-L334)

```diff
-       static DeepCopy(VV, eV, xV, JV) {
-         pV.d.DeepCopy(VV, eV, xV, JV)
+       dispose(HH) {
+         let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
+         const LH = this._internalMeshDataInfo;
+         if (LH._onBeforeDrawObservable && LH._onBeforeDrawObservable.clear(), LH._onBeforeBindObservable && LH._onBeforeBindObservable.clear(), LH._onBeforeRenderObservable && LH._onBeforeRenderObservable.clear(), LH._onAfterRenderObservable && LH._onAfterRenderObservable.clear() … [truncated]
+           if (LH.meshMap)
+             for (const HH in LH.meshMap) {
+               const BH = LH.meshMap[HH];
+               BH && (BH._internalMeshDataInfo._source = null, LH.meshMap[HH] = void 0)
+             }
+           LH._source && LH._source._internalMeshDataInfo.meshMap && (LH._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
+         } else {
+           const HH = this.yN().meshes;
+           for (const BH of HH) {
+             const HH = BH;
+             HH._internalMeshDataInfo && HH._internalMeshDataInfo._source && HH._internalMeshDataInfo._source === this && (HH._internalMeshDataInfo._source = null)
+ ... (3 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L336-L339` → after: `L5638-L5652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5638-L5652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5638-L5652) · [Before (L336-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L336-L339)

```diff
-       static IsEmpty(VV) {
-         for (const eV in VV)
-           if (Object.prototype.hasOwnProperty.call(VV, eV)) return !1;
-         return !0
+       _disposeInstanceSpecificData() {}
+       _disposeThinInstanceSpecificData() {}
+       _invalidateInstanceVertexArrayObject() {}
+       applyDisplacementMap(HH, BH, LH, AH, rH, SH) {
+         let hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           tH = arguments.length > 7 ? arguments[7] : void 0;
+         const zH = this.yN();
+         return (0, vH.m)(HH, (HH => {
+           const tH = HH.width,
+             zH = HH.height,
+             CH = this.Iu().createCanvas(tH, zH).getContext("2d");
+           CH.drawImage(HH, 0, 0);
+           const EH = CH.getImageData(0, 0, tH, zH).data;
+           this.applyDisplacementMapFromBuffer(EH, tH, zH, BH, LH, rH, SH, hH), AH && AH(this)
+         }), tH || (() => {}), zH.offlineProvider), this
```

#### 64. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L341-L347` → after: `L5654-L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5654-L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5654-L5668) · [Before (L341-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L341-L347)

```diff
-       static RegisterTopRootEvents(VV, eV) {
-         for (let JV = 0; JV < eV.length; JV++) {
-           const YV = eV[JV];
-           VV.addEventListener(YV.name, YV.handler, !1);
-           try {
-             window.parent && window.parent.addEventListener(YV.name, YV.handler, !1)
-           } catch (xV) {}
+       applyDisplacementMapFromBuffer(HH, BH, LH, AH, rH, SH, hH) {
+         let tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+         if (!this.isVerticesDataPresent(mH.i.PositionKind) || !this.isVerticesDataPresent(mH.i.NormalKind) || !this.isVerticesDataPresent(mH.i.UVKind)) return NH.e.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
+         const zH = this.getVerticesData(mH.i.PositionKind, !0, !0),
+           CH = this.getVerticesData(mH.i.NormalKind),
+           EH = this.getVerticesData(mH.i.UVKind);
+         let XH = OH.o.Zero();
+         const GH = OH.o.Zero(),
+           YH = OH.n.Zero();
+         SH = SH || OH.n.Zero(), hH = hH || new OH.n(1, 1);
+         for (let uH = 0; uH < zH.length; uH += 3) {
+           OH.o.FromArrayToRef(zH, uH, XH), OH.o.FromArrayToRef(CH, uH, GH), OH.n.FromArrayToRef(EH, uH / 3 * 2, YH);
+           const tH = 4 * ((Math.abs(YH.x * hH.x + SH.x % 1) * (BH - 1) % BH | 0) + (Math.abs(YH.y * hH.y + SH.y % 1) * (LH - 1) % LH | 0) * BH),
+             QH = .3 * (HH[tH] / 255) + .59 * (HH[tH + 1] / 255) + .11 * (HH[tH + 2] / 255);
+           GH.normalize(), GH.scaleInPlace(AH + (rH - AH) * QH), XH = XH.add(GH), XH.toArray(zH, uH)
```

#### 65. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L350-L356` → after: `L5672-L5684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5672-L5684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5672-L5684) · [Before (L350-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L350-L356)

```diff
-       static UnregisterTopRootEvents(VV, eV) {
-         for (let JV = 0; JV < eV.length; JV++) {
-           const YV = eV[JV];
-           VV.removeEventListener(YV.name, YV.handler);
-           try {
-             VV.parent && VV.parent.removeEventListener(YV.name, YV.handler)
-           } catch (xV) {}
+       _getFlattenedNormals(HH, BH) {
+         const LH = new Float32Array(3 * HH.length);
+         let AH = 0;
+         const rH = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
+         for (let SH = 0; SH < HH.length; SH += 3) {
+           const hH = OH.o.FromArray(BH, 3 * HH[SH]),
+             tH = OH.o.FromArray(BH, 3 * HH[SH + 1]),
+             zH = OH.o.FromArray(BH, 3 * HH[SH + 2]),
+             CH = hH.subtract(tH),
+             EH = zH.subtract(tH),
+             XH = OH.o.Normalize(OH.o.Cross(CH, EH));
+           rH && XH.scaleInPlace(-1);
+           for (let HH = 0; HH < 3; HH++) LH[AH++] = XH.x, LH[AH++] = XH.y, LH[AH++] = XH.z
```

#### 66. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L359-L360` → after: `L5688-L5733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5688-L5733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5688-L5733) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L359-L360)

```diff
-       static async DumpFramebuffer(VV, eV, xV, JV) {
-         throw (0, nV.n)("DumpTools")
+       _convertToUnIndexedMesh() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const BH = this.getVerticesDataKinds().filter((HH => !this.getVertexBuffer(HH)?.getIsInstanced())),
+           LH = this.vrH(!1, !0),
+           AH = {},
+           rH = (HH, BH) => {
+             const AH = new Float32Array(LH.length * BH);
+             let rH = 0;
+             for (let SH = 0; SH < LH.length; SH++)
+               for (let hH = 0; hH < BH; hH++) AH[rH++] = HH[LH[SH] * BH + hH];
+             return AH
+           },
+           SH = this.jF(),
+           hH = this.geometry ? this.jU.slice(0) : [];
+         for (const tH of BH) AH[tH] = this.getVerticesData(tH);
+         for (const tH of BH) {
+ ... (30 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L362-L363` → after: `L5735-L5736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5735-L5736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5735-L5736) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L362-L363)

```diff
-       static DumpData(VV, eV, xV, JV) {
-         throw (0, nV.n)("DumpTools")
+       convertToFlatShadedMesh() {
+         return this._convertToUnIndexedMesh(!0)
```

#### 68. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L365-L366` → after: `L5738-L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5738-L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5738-L5739) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L365-L366)

```diff
-       static async DumpDataAsync(VV, eV, xV) {
-         throw (0, nV.n)("DumpTools")
+       convertToUnIndexedMesh() {
+         return this._convertToUnIndexedMesh()
```

#### 69. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L368-L369` → after: `L5741-L5754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5741-L5754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5741-L5754) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L368-L369)

```diff
-       static _IsOffScreenCanvas(VV) {
-         return void 0 !== VV.convertToBlob
+       flipFaces() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         const BH = oH.b.ExtractFromMesh(this);
+         let LH;
+         if (HH && this.isVerticesDataPresent(mH.i.NormalKind) && BH.normals) {
+           for (LH = 0; LH < BH.normals.length; LH++) BH.normals[LH] *= -1;
+           this.setVerticesData(mH.i.NormalKind, BH.normals, this.isVertexBufferUpdatable(mH.i.NormalKind))
+         }
+         if (BH.indices) {
+           let HH;
+           for (LH = 0; LH < BH.indices.length; LH += 3) HH = BH.indices[LH + 1], BH.indices[LH + 1] = BH.indices[LH + 2], BH.indices[LH + 2] = HH;
+           this.setIndices(BH.indices, null, this.isVertexBufferUpdatable(mH.i.PositionKind), !0)
+         }
+         return this
```

#### 70. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L371-L387` → after: `L5756-L6204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR5756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L5756-L6204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L5756-L6204) · [Before (L371-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L371-L387)

```diff
-       static ToBlob(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           YV = arguments.length > 3 ? arguments[3] : void 0;
-         JV._IsOffScreenCanvas(VV) || VV.toBlob || (VV.toBlob = function(VV, eV, xV) {
-           setTimeout((() => {
-             const JV = atob(this.toDataURL(eV, xV).split(",")[1]),
-               YV = JV.length,
-               UV = new Uint8Array(YV);
-             for (let VV = 0; VV < YV; VV++) UV[VV] = JV.charCodeAt(VV);
-             VV(new Blob([UV]))
-           }))
-         }), JV._IsOffScreenCanvas(VV) ? VV.convertToBlob({
-           type: xV,
-           quality: YV
-         }).then((VV => eV(VV))) : VV.toBlob((function(VV) {
-           eV(VV)
- ... (1 more removed lines; see GitHub link above)
+       increaseVertices() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         const BH = oH.b.ExtractFromMesh(this),
+           LH = BH.indices && !Array.isArray(BH.indices) && Array.from ? Array.from(BH.indices) : BH.indices,
+           AH = BH.positions && !Array.isArray(BH.positions) && Array.from ? Array.from(BH.positions) : BH.positions,
+           rH = BH.uvs && !Array.isArray(BH.uvs) && Array.from ? Array.from(BH.uvs) : BH.uvs,
+           SH = BH.normals && !Array.isArray(BH.normals) && Array.from ? Array.from(BH.normals) : BH.normals;
+         if (LH && AH) {
+           BH.indices = LH, BH.positions = AH, rH && (BH.uvs = rH), SH && (BH.normals = SH);
+           const hH = HH + 1,
+             tH = [];
+           for (let HH = 0; HH < hH + 1; HH++) tH[HH] = [];
+           let zH, CH;
+           const EH = new OH.o(0, 0, 0),
+             XH = new OH.o(0, 0, 0),
+             GH = new OH.n(0, 0),
+ ... (433 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L389-L393` → after: `L6206-L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6206-L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6206-L6214) · [Before (L389-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L389-L393)

```diff
-       static DownloadBlob(VV, eV) {
-         if ("download" in document.createElement("a")) {
-           if (!eV) {
-             const VV = new Date;
-             eV = "screenshot_" + ((VV.getFullYear() + "-" + (VV.getMonth() + 1)).slice(2) + "-" + VV.getDate() + "_" + VV.getHours() + "-" + ("0" + VV.getMinutes()).slice(-2)) + ".png"
+       nHH(HH) {
+         HH._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(HH)
+       }
+       DHH(HH) {
+         const BH = HH._indexInSourceMeshInstanceArray;
+         if (-1 != BH) {
+           if (BH !== this.instances.length - 1) {
+             const HH = this.instances[this.instances.length - 1];
+             this.instances[BH] = HH, HH._indexInSourceMeshInstanceArray = BH
```

#### 72. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L395-L403` → after: `L6216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6216) · [Before (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L395-L403)

```diff
-           JV.Download(VV, eV)
-         } else if (VV && "undefined" !== typeof URL) {
-           const eV = URL.createObjectURL(VV),
-             xV = window.open("");
-           if (!xV) return;
-           const JV = xV.document.createElement("img");
-           JV.onload = function() {
-             URL.revokeObjectURL(eV)
-           }, JV.src = eV, xV.document.body.appendChild(JV)
+           HH._indexInSourceMeshInstanceArray = -1, this.instances.pop()
```

#### 73. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L406-L427` → after: `L6219-L6220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6219-L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6219-L6220) · [Before (L406-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L406-L427)

```diff
-       static EncodeScreenshotCanvasData(VV, eV) {
-         let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           YV = arguments.length > 3 ? arguments[3] : void 0,
-           UV = arguments.length > 4 ? arguments[4] : void 0;
-         if ("string" !== typeof YV && eV) {
-           if (eV) {
-             if (JV._IsOffScreenCanvas(VV)) return void VV.convertToBlob({
-               type: xV,
-               quality: UV
-             }).then((VV => {
-               const xV = new FileReader;
-               xV.readAsDataURL(VV), xV.onloadend = () => {
-                 const VV = xV.result;
-                 eV(VV)
-               }
-             }));
- ... (6 more removed lines; see GitHub link above)
+       _shouldConvertRHS() {
+         return this._scene.useRightHandedSystem && this.sideOrientation === KH.c.CounterClockWiseSideOrientation
```

#### 74. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L429-L435` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6222-L6224) · [Before (L429-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L429-L435)

```diff
-       static Download(VV, eV) {
-         if ("undefined" === typeof URL) return;
-         const xV = window.URL.createObjectURL(VV),
-           JV = document.createElement("a");
-         document.body.appendChild(JV), JV.style.display = "none", JV.href = xV, JV.download = eV, JV.addEventListener("click", (() => {
-           JV.parentElement && JV.parentElement.removeChild(JV)
-         })), JV.click(), window.URL.revokeObjectURL(xV)
+       _getRenderingFillMode(HH) {
+         const BH = this.yN();
+         return BH.forcePointsCloud ? KH.c.PointFillMode : BH.forceWireframe ? KH.c.WireFrameFillMode : this.overrideRenderingFillMode ?? HH
```

#### 75. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L437-L438` → after: `L6226-L6227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6226-L6227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6226-L6227) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L437-L438)

```diff
-       static BackCompatCameraNoPreventDefault(VV) {
-         return "boolean" === typeof VV[0] ? VV[0] : "boolean" === typeof VV[1] && VV[1]
+       setMaterialByID(HH) {
+         return this.setMaterialById(HH)
```

#### 76. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L440-L441` → after: `L6229-L6230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6229-L6230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6229-L6230) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L440-L441)

```diff
-       static CreateScreenshot(VV, eV, xV, JV) {
-         throw (0, nV.n)("ScreenshotTools")
+       static CreateRibbon(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 77. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L443-L444` → after: `L6232-L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6232-L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6232-L6233) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L443-L444)

```diff
-       static async CreateScreenshotAsync(VV, eV, xV) {
-         throw (0, nV.n)("ScreenshotTools")
+       static CreateDisc(HH, BH, LH, AH, rH, SH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 78. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L446-L447` → after: `L6235-L6236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6235-L6236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6235-L6236) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L446-L447)

```diff
-       static CreateScreenshotUsingRenderTarget(VV, eV, xV, JV) {
-         throw (0, nV.n)("ScreenshotTools")
+       static CreateBox(HH, BH, LH, AH, rH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 79. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L449-L450` → after: `L6238-L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6238-L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6238-L6239) · [Before (L449-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L449-L450)

```diff
-       static async CreateScreenshotUsingRenderTargetAsync(VV, eV, xV) {
-         throw (0, nV.n)("ScreenshotTools")
+       static CreateSphere(HH, BH, LH, AH, rH, SH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 80. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L452-L453` → after: `L6241-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6241-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6241-L6242) · [Before (L452-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L452-L453)

```diff
-       static RandomId() {
-         return (0, bV.d)()
+       static CreateHemisphere(HH, BH, LH, AH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 81. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L455-L456` → after: `L6244-L6245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6244-L6245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6244-L6245) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L455-L456)

```diff
-       static IsBase64(VV) {
-         return (0, vV.k)(VV)
+       static CreateCylinder(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 82. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L458-L459` → after: `L6247-L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6247-L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6247-L6248) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L458-L459)

```diff
-       static DecodeBase64(VV) {
-         return (0, vV.d)(VV)
+       static CreateTorus(HH, BH, LH, AH, rH, SH, hH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 83. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L461-L462` → after: `L6250-L6251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6250-L6251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6250-L6251) · [Before (L461-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L461-L462)

```diff
-       static get errorsCount() {
-         return yV.b.errorsCount
+       static CreateTorusKnot(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 84. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L464-L465` → after: `L6253-L6254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6253-L6254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6253-L6254) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L464-L465)

```diff
-       static Log(VV) {
-         yV.b.Log(VV)
+       static CreateLines(HH, BH, LH, AH, rH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 85. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L467-L468` → after: `L6256-L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6256-L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6256-L6257) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L467-L468)

```diff
-       static Warn(VV) {
-         yV.b.Warn(VV)
+       static CreateDashedLines(HH, BH, LH, AH, rH, SH, hH, tH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 86. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L470-L471` → after: `L6259-L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6259-L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6259-L6260) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L470-L471)

```diff
-       static Error(VV) {
-         yV.b.Error(VV)
+       static CreatePolygon(HH, BH, LH, AH, rH, SH, hH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 87. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L473-L474` → after: `L6262-L6263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6262-L6263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6262-L6263) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L473-L474)

```diff
-       static get LogCache() {
-         return yV.b.LogCache
+       static ExtrudePolygon(HH, BH, LH, AH, rH, SH, hH, tH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 88. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L476-L477` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6265-L6266) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L476-L477)

```diff
-       static ClearLogCache() {
-         yV.b.ClearLogCache()
+       static ExtrudeShape(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 89. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L479-L480` → after: `L6268-L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6268-L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6268-L6269) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L479-L480)

```diff
-       static set LogLevels(VV) {
-         yV.b.LogLevels = VV
+       static ExtrudeShapeCustom(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 90. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L482-L483` → after: `L6271-L6272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6271-L6272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6271-L6272) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L482-L483)

```diff
-       static set PerformanceLogLevel(VV) {
-         (VV & JV.PerformanceUserMarkLogLevel) !== JV.PerformanceUserMarkLogLevel ? (VV & JV.PerformanceConsoleLogLevel) !== JV.PerformanceConsoleLogLevel ? (JV.StartPerformanceCounter = JV._StartPerformanceCounterDisabled, JV.EndPerformanceCounter = JV._EndPerformanceCounterDisab … [truncated]
+       static CreateLathe(HH, BH, LH, AH, rH, SH, hH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 91. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L485-L493` → after: `L6274-L6275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6274-L6275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6274-L6275) · [Before (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L485-L493)

```diff
-       static _StartPerformanceCounterDisabled(VV, eV) {}
-       static _EndPerformanceCounterDisabled(VV, eV) {}
-       static _StartUserMark(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!JV._Performance) {
-           if (!(0, UV.n)()) return;
-           JV._Performance = window.performance
-         }
-         eV && JV._Performance.mark && JV._Performance.mark(VV + "-Begin")
+       static CreatePlane(HH, BH, LH, AH, rH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 92. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L495-L496` → after: `L6277-L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6277-L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6277-L6278) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L495-L496)

```diff
-       static _EndUserMark(VV) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && JV._Performance.mark && (JV._Performance.mark(VV + "-End"), JV._Performance.measure(VV, VV + "-Begin", VV + "-End"))
+       static CreateGround(HH, BH, LH, AH, rH, SH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 93. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L498-L500` → after: `L6280-L6281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6280-L6281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6280-L6281) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L498-L500)

```diff
-       static _StartPerformanceConsole(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         eV && (JV._StartUserMark(VV, eV), console.time && console.time(VV))
+       static CreateTiledGround(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 94. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L502-L504` → after: `L6283-L6284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6283-L6284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6283-L6284) · [Before (L502-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L502-L504)

```diff
-       static _EndPerformanceConsole(VV) {
-         let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         eV && (JV._EndUserMark(VV, eV), console.timeEnd(VV))
+       static CreateGroundFromHeightMap(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 95. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L506-L512` → after: `L6286-L6287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6286-L6287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6286-L6287) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L506-L512)

```diff
-       static _StartMarkNative(VV) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (JV._NativePerformanceCounterHandles.has(VV)) JV.Warn(`Performance counter with name ${VV} is already started.`);
-           else {
-             const eV = _native.startPerformanceCounter(VV);
-             JV._NativePerformanceCounterHandles.set(VV, eV)
-           }
+       static CreateTube(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 96. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L514-L518` → after: `L6289-L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6289-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6289-L6290) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L514-L518)

```diff
-       static _EndMarkNative(VV) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
-           const eV = JV._NativePerformanceCounterHandles.get(VV);
-           eV ? (_native.endPerformanceCounter(eV), JV._NativePerformanceCounterHandles.delete(VV)) : JV.Warn(`Performance counter with name ${VV} was not started.`)
-         }
+       static CreatePolyhedron(HH, BH, LH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 97. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L520-L521` → after: `L6292-L6293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6292-L6293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6292-L6293) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L520-L521)

```diff
-       static get Now() {
-         return QV.b.Now
+       static CreateIcoSphere(HH, BH, LH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 98. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L523-L533` → after: `L6295-L6296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6295-L6296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6295-L6296) · [Before (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L523-L533)

```diff
-       static GetClassName(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = null;
-         if (!eV && VV.getClassName) xV = VV.getClassName();
-         else {
-           if (VV instanceof Object) {
-             xV = (eV ? VV : Object.getPrototypeOf(VV)).constructor.__bjsclassName__
-           }
-           xV || (xV = typeof VV)
-         }
-         return xV
+       static CreateDecal(HH, BH, LH, AH, rH, SH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 99. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L535-L538` → after: `L6298-L6299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6298-L6299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6298-L6299) · [Before (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L535-L538)

```diff
-       static First(VV, eV) {
-         for (const xV of VV)
-           if (eV(xV)) return xV;
-         return null
+       static CreateCapsule(HH, BH, LH) {
+         throw new Error("Import MeshBuilder to populate this function")
```

#### 100. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L540-L548` → after: `L6301-L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6301-L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6301-L6394) · [Before (L540-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L540-L548)

```diff
-       static getFullClassName(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           xV = null,
-           JV = null;
-         if (!eV && VV.getClassName) xV = VV.getClassName();
-         else {
-           if (VV instanceof Object) {
-             const YV = eV ? VV : Object.getPrototypeOf(VV);
-             xV = YV.constructor.__bjsclassName__, JV = YV.constructor.__bjsmoduleName__
+       static ExtendToGoldberg(HH) {
+         throw new Error("Import MeshBuilder to populate this function")
+       }
+     }
+     iH.FRONTSIDE = oH.b.FRONTSIDE, iH.BACKSIDE = oH.b.BACKSIDE, iH.DOUBLESIDE = oH.b.DOUBLESIDE, iH.DEFAULTSIDE = oH.b.DEFAULTSIDE, iH.NO_CAP = 0, iH.CAP_START = 1, iH.CAP_END = 2, iH.CAP_ALL = 3, iH.NO_FLIP = 0, iH.FLIP_TILE = 1, iH.ROTATE_TILE = 2, iH.FLIP_ROW = 3, iH.ROTATE_RO … [truncated]
+       throw (0, jH.i)("GroundMesh")
+     }, iH._GoldbergMeshParser = (HH, BH) => {
+       throw (0, jH.i)("GoldbergMesh")
+     }, iH._LinesMeshParser = (HH, BH) => {
+       throw (0, jH.i)("LinesMesh")
+     }, iH._GreasedLineMeshParser = (HH, BH) => {
+       throw (0, jH.i)("GreasedLineMesh")
+     }, iH._GreasedLineRibbonMeshParser = (HH, BH) => {
+       throw (0, jH.i)("GreasedLineRibbonMesh")
+     }, iH._TrailMeshParser = (HH, BH) => {
+       throw (0, jH.i)("TrailMesh")
+ ... (78 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L552-L563` → after: `L6397-L6878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6397-L6878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6397-L6878) · [Before (L552-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L552-L563)

```diff
-         return xV ? (null != JV ? JV + "." : "") + xV : null
-       }
-       static async DelayAsync(VV) {
-         await new Promise((eV => {
-           setTimeout((() => {
-             eV()
-           }), VV)
-         }))
-       }
-       static IsSafari() {
-         return !!(0, UV.j)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
-       }
+         applyToMesh(HH, BH) {
+           return this._applyTo(HH, BH, !1), this
+         }
+         applyToGeometry(HH, BH) {
+           return this._applyTo(HH, BH, !1), this
+         }
+         updateMesh(HH) {
+           return this._update(HH), this
+         }
+         updateGeometry(HH) {
+           return this._update(HH), this
+         }* _applyToCoroutine(HH) {
+           let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             LH = arguments.length > 2 ? arguments[2] : void 0;
+           if (this.positions && (HH.setVerticesData(SH.i.PositionKind, this.positions, BH), LH && (yield)), this.normals && (HH.setVerticesData(SH.i.NormalKind, this.normals, BH), LH && (yield)), this.tangents && (HH.setVerticesData(SH.i.TangentKind, this.tangents, BH), LH && (yi … [truncated]
+             const AH = this.positions && this.colors.length === this.positions.length ? 3 : 4;
+ ... (466 more added lines; see GitHub link above)
```

#### 102. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L566-L568` → after: `L6881-L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6881-L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6881-L6887) · [Before (L566-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L566-L568)

```diff
-     function jV(VV, eV) {
-       return xV => {
-         xV.__bjsclassName__ = VV, xV.__bjsmoduleName__ = null != eV ? eV : null
+     function EH(HH, BH, LH, AH) {
+       LH.IHH(Number.POSITIVE_INFINITY), AH.IHH(Number.NEGATIVE_INFINITY);
+       for (let rH = 0; rH < 3 * BH; rH += 3) {
+         const BH = HH[rH],
+           SH = HH[rH + 1],
+           hH = HH[rH + 2];
+         BH < LH.x && (LH.x = BH), SH < LH.y && (LH.y = SH), hH < LH.z && (LH.z = hH), BH > AH.x && (AH.x = BH), SH > AH.y && (AH.y = SH), hH > AH.z && (AH.z = hH)
```

#### 103. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L571-L580` → after: `L6890-L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6890-L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6890-L6972) · [Before (L571-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L571-L580)

```diff
-     JV = BV, BV.AssetBaseUrl = "", BV.UseCustomRequestHeaders = !1, BV.CustomRequestHeaders = wV.d.CustomRequestHeaders, BV.GetDOMTextContent = UV.b, BV._DefaultCdnUrl = "https://cdn.babylonjs.com", BV._CdnVersion = "9.28.0", BV._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
-       const eV = document.createElement("a");
-       return eV.href = VV, eV.href
-     } : "function" === typeof URL && "object" === typeof location ? VV => new URL(VV, location.origin).href : () => {
-       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
-     }, BV.NoneLogLevel = yV.b.NoneLogLevel, BV.MessageLogLevel = yV.b.MessageLogLevel, BV.WarningLogLevel = yV.b.WarningLogLevel, BV.ErrorLogLevel = yV.b.ErrorLogLevel, BV.AllLogLevel = yV.b.AllLogLevel, BV.IsWindowObjectExist = UV.n, BV.PerformanceNoneLogLevel = 0, BV.Performanc … [truncated]
-     class qV {
-       constructor(VV, eV, xV) {
-         let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.iterations = VV, this.index = JV - 1, this._done = !1, this._fn = eV, this._successCallback = xV
+ 
+     function XH(HH, BH, LH) {
+       LH && (HH.x -= HH.x * LH.x + LH.y, HH.y -= HH.y * LH.x + LH.y, HH.z -= HH.z * LH.x + LH.y, BH.x += BH.x * LH.x + LH.y, BH.y += BH.y * LH.x + LH.y, BH.z += BH.z * LH.x + LH.y)
+     }
+ 
+     function GH(HH, BH, LH, rH, SH) {
+       const hH = AH.l.lu[7],
+         tH = AH.l.lu[8];
+       for (let zH = 0; zH < 2; ++zH)
+         for (let CH = 0; CH < 2; ++CH)
+           for (let EH = 0; EH < 2; ++EH) hH.set(zH ? BH.x : HH.x, CH ? BH.y : HH.y, EH ? BH.z : HH.z), AH.o.TransformCoordinatesToRef(hH, LH, tH), rH.minimizeInPlace(tH), SH.maximizeInPlace(tH)
+     }
+ 
+     function YH(HH, BH, LH, rH, SH) {
+       const hH = AH.l.lu[7];
+       for (let tH = 0; tH < 3 * BH; tH += 3) AH.o.TransformCoordinatesFromFloatsToRef(HH[tH], HH[tH + 1], HH[tH + 2], LH, hH), rH.minimizeInPlace(hH), SH.maximizeInPlace(hH)
+ ... (67 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L582-L583` → after: `L6974-L7027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L6974-L7027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L6974-L7027) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L582-L583)

```diff
-       executeNext() {
-         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
+       return this._thinInstanceDataStorage.worldMatrices
+     }, hH.c.prototype.thinInstanceRefreshBoundingInfo = function() {
+       let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+         BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
+       const hH = this._thinInstanceDataStorage.boundingVectors;
+       if (HH || !this.rawBoundingInfo) {
+         if (hH.length = 0, rH && function(HH, BH, LH) {
+             const rH = HH._userThinInstanceBuffersStorage,
+               hH = rH?.data[zH],
+               uH = rH?.strides[zH];
+             if (!hH || !uH || uH < 4 || !CH(HH)) return !1;
+             const QH = HH._thinInstanceDataStorage.matrixData;
+             if (!QH) return !1;
+ ... (38 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L585-L586` → after: `L7029-L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7029-L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L7029-L7036) · [Before (L585-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L585-L586)

```diff
-       breakLoop() {
-         this._done = !0, this._successCallback()
+       const uH = this.jF(),
+         QH = this._thinInstanceDataStorage.matrixData;
+       if (0 === hH.length)
+         for (let AH = 0; AH < uH.boundingBox.vectors.length; ++AH) hH.push(uH.boundingBox.vectors[AH].clone());
+       AH.l.lu[0].IHH(Number.POSITIVE_INFINITY), AH.l.lu[1].IHH(Number.NEGATIVE_INFINITY);
+       for (let SH = 0; SH < this._thinInstanceDataStorage.instancesCount; ++SH) {
+         AH.e.FromArrayToRef(QH, 16 * SH, AH.l.Matrix[0]);
+         for (let HH = 0; HH < hH.length; ++HH) AH.o.TransformCoordinatesToRef(hH[HH], AH.l.Matrix[0], AH.l.lu[2]), AH.l.lu[0].minimizeInPlace(AH.l.lu[2]), AH.l.lu[1].maximizeInPlace(AH.l.lu[2])
```

#### 106. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L588-L590` → after: `L7038-L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7038-L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L7038-L7058) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L588-L590)

```diff
-       static Run(VV, eV, xV) {
-         const JV = new qV(VV, eV, xV, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
-         return JV.executeNext(), JV
+       uH.reConstruct(AH.l.lu[0], AH.l.lu[1]), this._updateBoundingInfo()
+     }, hH.c.prototype._thinInstanceRecreateBuffer = function(HH) {
+       let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       "matrix" === HH ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, BH)) : "previousMatrix" === HH ? this._scene.needsPreviousWorldMatr … [truncated]
+     }, hH.c.prototype._thinInstanceUpdateBufferSize = function(HH) {
+       let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       HH === tH.i.ColorKind && (HH = tH.i.ColorInstanceKind);
+       const LH = "matrix" === HH;
+       if (!LH && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[HH])) return;
+       const AH = LH ? 16 : this._userThinInstanceBuffersStorage.strides[HH],
+         rH = LH ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[HH];
+       let SH = LH ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[HH];
+       const hH = (this._thinInstanceDataStorage.instancesCount + BH) * AH;
+       let zH = rH;
+       for (; zH < hH;) zH *= 2;
+       if (!SH || rH != zH) {
+ ... (5 more added lines; see GitHub link above)
```

#### 107. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L592-L601` → after: `L7060-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7060-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L7060-L7461) · [Before (L592-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L592-L601)

```diff
-       static SyncAsyncForLoop(VV, eV, xV, JV, YV) {
-         let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         return qV.Run(Math.ceil(VV / eV), (JV => {
-           YV && YV() ? JV.breakLoop() : setTimeout((() => {
-             for (let UV = 0; UV < eV; ++UV) {
-               const yV = JV.index * eV + UV;
-               if (yV >= VV) break;
-               if (xV(yV), YV && YV()) {
-                 JV.breakLoop();
-                 break
+     }, hH.c.prototype._thinInstanceInitializeUserStorage = function() {
+       this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
+         data: {},
+         sizes: {},
+         vertexBuffers: {},
+         strides: {}
+       })
+     }, hH.c.prototype._disposeThinInstanceSpecificData = function() {
+       this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), th … [truncated]
+     })
+   },
+   41738: (HH, BH, LH) => {
+     LH.d(BH, {
+       d: () => xH,
+       e: () => QH
+     });
+ ... (386 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L604-L606` → after: `L7572-L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7572-L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L7572-L7682) · [Before (L604-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L604-L606)

```diff
-             JV.executeNext()
-           }), UV)
-         }), JV)
+           },
+           metadata: CH
+         }, vH, PH), (0, tH.g)(null, null, AH, {
+           kind: "field",
+           name: "_rotationQuaternion",
+           static: !1,
+           private: !1,
+           access: {
+             has: HH => "_rotationQuaternion" in HH,
+             get: HH => HH._rotationQuaternion,
+             set: (HH, BH) => {
+               HH._rotationQuaternion = BH
+             }
+           },
+           metadata: CH
+         }, TH, UH), (0, tH.g)(null, null, rH, {
+ ... (95 more added lines; see GitHub link above)
```

#### 109. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L612` → after: `L7689-L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L7689-L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/280.js#L7689-L7736) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/280.js#L612)

```diff
-       tV || (tV = !0, BV.Mix = EV.l, BV.IsExponentOfTwo = EV.k, ZV.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+       MH || (MH = !0, QH.Parse = WH)
+     }(AH = QH.prototype).xJ ?? (AH.xJ = (0, uH.f)("TransformNode", "xJ")), (rH = QH.prototype).applyImpulse ?? (rH.applyImpulse = (0, uH.f)("TransformNode", "applyImpulse")), (SH = QH.prototype).applyAngularImpulse ?? (SH.applyAngularImpulse = (0, uH.f)("TransformNode", "applyAng … [truncated]
+   },
+   41697: (HH, BH, LH) => {
+     function AH(HH, BH, LH) {
+       try {
+         const AH = HH.next();
+         AH.done ? BH(AH) : AH.value ? AH.value.then((() => {
+           AH.value = void 0, BH(AH)
+         }), LH) : BH(AH)
+       } catch (AH) {
+         LH(AH)
+       }
+     }
+ 
+     function rH() {
+ ... (32 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (pxmq3aq.c63b303d → cwj32u.ae3e40c2)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (96 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L4)

```diff
-   41688: (VV, eV, xV) => {
+   41427: (HH, BH, LH) => {
```

#### 2. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L6-L12` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L6-L9) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L6-L12)

```diff
-       d: () => JV
-     });
-     let JV = !1
-   },
-   41252: (VV, eV, xV) => {
-     xV.d(eV, {
-       c: () => kV
+       b: () => tH,
+       d: () => QH,
+       f: () => CH,
+       i: () => zH
```

#### 3. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L14-L20` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L11-L14) · [Before (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L14-L20)

```diff
-     var JV = xV(41257),
-       YV = xV(41263),
-       UV = xV(38296),
-       yV = xV(38269),
-       pV = xV(38287),
-       QV = xV(39058),
-       nV = xV(41272);
+     var AH = LH(41218),
+       rH = LH(39595),
+       SH = LH(41356),
+       hH = LH(41260);
```

#### 4. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L22-L23` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L16-L17) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L22-L23)

```diff
-       get wrapU() {
-         return this._wrapU
+       get mV() {
+         return this._isDisposed
```

#### 5. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L25-L26` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L19-L26) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L25-L26)

```diff
-       set wrapU(VV) {
-         this._wrapU = VV
+       constructor(HH, BH, LH) {
+         let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           SH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           tH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           zH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           CH = arguments.length > 7 ? arguments[7] : void 0,
+           EH = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, hH.c)(), HH && HH.yN ? this._engine = HH.yN().Iu() : this._engine = HH, this._updatable = LH, this._instanced = tH, this._divisor = CH || 1, this._label = EH, BH instanceof AH.e ? (this._data = null, this._buffer = BH) … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L28-L29` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L28-L33) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L28-L29)

```diff
-       get wrapV() {
-         return this._wrapV
+       createVertexBuffer(HH, BH, LH, AH, rH) {
+         let SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           hH = arguments.length > 6 ? arguments[6] : void 0;
+         const tH = SH ? BH : BH * Float32Array.BYTES_PER_ELEMENT,
+           CH = AH ? SH ? AH : AH * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new zH(this._engine, this, HH, this._updatable, !0, CH, void 0 === rH ? this._instanced : rH, tH, LH, void 0, void 0, !0, this._divisor || hH)
```

#### 7. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L31-L32` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L35-L36) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L31-L32)

```diff
-       set wrapV(VV) {
-         this._wrapV = VV
+       isUpdatable() {
+         return this._updatable
```

#### 8. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L34-L35` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L38-L39) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L34-L35)

```diff
-       get coordinatesMode() {
-         return 0
+       getData() {
+         return this._data
```

#### 9. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L37-L38` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L41-L42) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L37-L38)

```diff
-       get isCube() {
-         return !!this._texture && this._texture.isCube
+       getBuffer() {
+         return this._buffer
```

#### 10. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L40-L41` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L44-L45) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L40-L41)

```diff
-       set isCube(VV) {
-         this._texture && (this._texture.isCube = VV)
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
```

#### 11. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L43-L44` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L47-L49) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L43-L44)

```diff
-       get is3D() {
-         return !!this._texture && this._texture.is3D
+       create() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !HH && this._buffer || (HH = HH || this._data, HH && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, HH), this._data = HH) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(HH, this._label), this._data = HH … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L46-L47` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L51-L57) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L46-L47)

```diff
-       set is3D(VV) {
-         this._texture && (this._texture.is3D = VV)
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.aX > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.aX, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.aX, void 0, this._label));
+           rH.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+         }
```

#### 13. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L49-L50` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L59-L60) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L49-L50)

```diff
-       get is2DArray() {
-         return !!this._texture && this._texture.is2DArray
+       update(HH) {
+         this.create(HH)
```

#### 14. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L52-L53` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L62-L64) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L52-L53)

```diff
-       set is2DArray(VV) {
-         this._texture && (this._texture.is2DArray = VV)
+       updateDirectly(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, HH, AH ? BH : BH * Float32Array.BYTES_PER_ELEMENT, LH ? LH * this.byteStride : void 0), this._data = 0 === BH && void 0 === LH ? HH : null)
```

#### 15. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L55-L56` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L66-L67) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L55-L56)

```diff
-       getClassName() {
-         return "ThinTexture"
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
```

#### 16. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L58-L59` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L69-L70) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L58-L59)

```diff
-       static _IsRenderTargetWrapper(VV) {
-         return void 0 !== VV?.shareDepth
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 17. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L61-L62` → after: `L72-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L72-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L72-L75) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L61-L62)

```diff
-       constructor(VV) {
-         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = nV.b.Zero(), this._cachedBaseSize = nV.b.Zero(), this._initialSamplingMode = 2, this._texture = wV. … [truncated]
+     }
+     class zH {
+       get mV() {
+         return this._isDisposed
```

#### 18. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L64-L65` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L77-L78) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L64-L65)

```diff
-       isReady() {
-         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
+       get instanceDivisor() {
+         return this._instanceDivisor
```

#### 19. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L67-L69` → after: `L80-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L80-L82) · [Before (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L67-L69)

```diff
-       delayLoad() {}
-       getInternalTexture() {
-         return this._texture
+       set instanceDivisor(HH) {
+         const BH = 0 != HH;
+         this._instanceDivisor = HH, BH !== this._instanced && (this._instanced = BH, this._computeHashCode())
```

#### 20. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L71-L74` → after: `L84-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L84-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L84-L119) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L71-L74)

```diff
-       getSize() {
-         if (this._texture) {
-           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
-           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+       get _maxVerticesCount() {
+         const HH = this.getData();
+         return HH ? Array.isArray(HH) ? HH.length / (this.byteStride / 4) - this.byteOffset / 4 : (HH.byteLength - this.byteOffset) / this.byteStride : 0
+       }
+       constructor(HH, BH, LH, AH, rH, hH, XH, GH, YH, uH) {
+         let QH, WH = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           MH = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           xH = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           vH = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = HH, "object" === typeof AH && null !== AH ? (QH = AH.updatable ?? !1, rH = AH.postponeInternalCreation, hH = AH.stride, XH = AH.instanced, GH = AH.offset, YH = AH.size, uH = AH.type, WH = AH.normalized ?? !1, MH = AH.useBytes ?? !1 … [truncated]
+           const HH = this.getData();
+           this.type = HH ? EH(HH) : zH.FLOAT
+         } else this.type = uH;
+         const PH = (0, SH.q)(this.type);
+         MH ? (this._size = YH || (hH ? hH / PH : CH(LH)), this.byteStride = hH || this._buffer.byteStride || this._size * PH, this.byteOffset = GH || 0) : (this._size = YH || hH || CH(LH), this.byteStride = hH ? hH * PH : this._buffer.byteStride || this._size * PH, this.byteOffse … [truncated]
+       }
+ ... (20 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L78-L79` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L122-L123) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L78-L79)

```diff
-       getBaseSize() {
-         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
+       _computeHashCode() {
+         this.hashCode = (zH._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 22. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L81-L82` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L125-L126) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L81-L82)

```diff
-       get samplingMode() {
-         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 23. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L84-L86` → after: `L128-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L128-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L128-L160) · [Before (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L84-L86)

```diff
-       updateSamplingMode(VV) {
-         let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this._texture && this._engine && this._engine.updateTextureSamplingMode(VV, this._texture, this._texture.generateMipMaps && eV)
+       getKind() {
+         return this._kind
+       }
+       isUpdatable() {
+         return this._buffer.isUpdatable()
+       }
+       getData() {
+         return this._buffer.getData()
+       }
+       getFloatData(HH, BH) {
+         const LH = this.getData();
+         return LH ? (0, SH.p)(LH, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, HH, BH) : null
+       }
+       getBuffer() {
+         return this._buffer.getBuffer()
+       }
+ ... (17 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L88-L89` → after: `L162-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L162-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L162-L170) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L88-L89)

```diff
-       releaseInternalTexture() {
-         this._texture && (this._texture.dispose(), this._texture = null)
+       create(HH) {
+         this._buffer.create(HH), this._alignBuffer()
+       }
+       update(HH) {
+         this._buffer.update(HH), this._alignBuffer()
+       }
+       updateDirectly(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._buffer.updateDirectly(HH, BH, void 0, LH), this._alignBuffer()
```

#### 25. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L92` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L173) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L92)

```diff
-         this._texture && (this.releaseInternalTexture(), this._engine = null)
+         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
```

#### 26. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L95-L136` → after: `L182-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L182-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L182-L278) · [Before (L95-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L95-L136)

```diff
-     var ZV, vV = xV(41279),
-       rV = xV(41138);
-     let kV = (() => {
-       var VV;
-       let eV, xV, nV, ZV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV = wV,
-         CV = [],
-         aV = [],
-         oV = [],
-         cV = [],
-         hV = [],
-         lV = [],
-         LV = [],
-         fV = [],
-         mV = [],
-         KV = [],
-         HV = [],
- ... (26 more removed lines; see GitHub link above)
+ 
+     function CH(HH) {
+       switch (HH) {
+         case zH.UVKind:
+         case zH.UV2Kind:
+         case zH.UV3Kind:
+         case zH.UV4Kind:
+         case zH.UV5Kind:
+         case zH.UV6Kind:
+           return 2;
+         case zH.NormalKind:
+         case zH.PositionKind:
+           return 3;
+         case zH.ColorKind:
+         case zH.ColorInstanceKind:
+         case zH.MatricesIndicesKind:
+ ... (81 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L138-L139` → after: `L280-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L280-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L280-L294) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L138-L139)

```diff
-         set getAlphaFromRGB(VV) {
-           this._getAlphaFromRGB !== VV && (this._getAlphaFromRGB = VV, this._scene && this._scene.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
+         const CH = (HH, BH) => {
+           if (-1 !== this.thinInstanceIndex) {
+             const LH = HH._thinInstanceDataStorage.matrixData,
+               rH = this.thinInstanceIndex << 4;
+             if (LH && LH.length > rH) {
+               const HH = AH.l.Matrix[0];
+               AH.e.FromArrayToRef(LH, rH, HH), AH.o.TransformNormalToRef(BH, HH, BH)
+             }
+           }
+           let LH = HH.getWorldMatrix();
+           HH.nonUniformScaling && (AH.l.Matrix[0].Tm(LH), LH = AH.l.Matrix[0], LH.setTranslationFromFloats(0, 0, 0), LH.invert(), LH.transposeToRef(AH.l.Matrix[1]), LH = AH.l.Matrix[1]), AH.o.TransformNormalToRef(BH, LH, BH)
+         };
+         if (HH && CH(this.pickedMesh, LH), this.ray) {
+           const BH = AH.l.lu[0].Tm(LH);
+           HH || CH(this.pickedMesh, BH), AH.o.Dot(BH, this.ray.direction) > 0 && LH.negateInPlace()
```

#### 28. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L141-L142` → after: `L296-L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L296-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L296-L357) · [Before (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L141-L142)

```diff
-         get getAlphaFromRGB() {
-           return this._getAlphaFromRGB
+         return LH.normalize(), LH
+       }
+       getTextureCoordinates() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH.i.UVKind;
+         if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(HH)) return null;
+         const BH = this.pickedMesh.vrH();
+         if (!BH) return null;
+         const LH = this.pickedMesh.getVerticesData(HH);
+         if (!LH) return null;
+         let SH = AH.n.FromArray(LH, 2 * BH[3 * this.faceId]),
+           hH = AH.n.FromArray(LH, 2 * BH[3 * this.faceId + 1]),
+           tH = AH.n.FromArray(LH, 2 * BH[3 * this.faceId + 2]);
+         return SH = SH.scale(this.bu), hH = hH.scale(this.bv), tH = tH.scale(1 - this.bu - this.bv), new AH.n(SH.x + hH.x + tH.x, SH.y + hH.y + tH.y)
+       }
+     }
+   },
+ ... (46 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L144-L145` → after: `L359-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L359-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L359-L680) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L144-L145)

```diff
-         set coordinatesIndex(VV) {
-           this._coordinatesIndex !== VV && (this._coordinatesIndex = VV, this._scene && this._scene.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
+       }
+       getMSAARenderBuffer() {
+         let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
+         return this._MSAARenderBuffers?.[HH] ?? null
+       }
+       release() {
+         this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
+       }
+     }
+   },
+   41184: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => xH
+     });
+     var AH = LH(37997),
+       rH = LH(41134),
+ ... (306 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L147-L148` → after: `L682-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L682-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L682-L694) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L147-L148)

```diff
-         get coordinatesIndex() {
-           return this._coordinatesIndex
+       }
+       _rebuildInternalTextures() {
+         const HH = this._internalTexturesCache.slice();
+         for (const BH of HH) BH._rebuild()
+       }
+       _rebuildRenderTargetWrappers() {
+         const HH = this._renderTargetWrapperCache.slice();
+         for (const BH of HH) BH.textures?.some((HH => 15 === HH.source)) || BH._rebuild()
+       }
+       _rebuildEffects() {
+         for (const HH in this._compiledEffects) {
+           const BH = this._compiledEffects[HH];
+           BH._pipelineContext = null, BH._prepareEffect()
```

#### 31. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L150-L151` → after: `L696-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L696-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L696-L741) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L150-L151)

```diff
-         set coordinatesMode(VV) {
-           this._coordinatesMode !== VV && (this._coordinatesMode = VV, this._scene && this._scene.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
+         rH.c.ResetCache()
+       }
+       _rebuildGraphicsResources() {
+         this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
+       }
+       _flagContextRestored() {
+         hH.e.Warn(this.name + " context successfully restored."), this.ou.notifyObservers(this), this._contextWasLost = !1
+       }
+       _restoreEngineAfterContextLost(HH) {
+         setTimeout((() => {
+           this._clearEmptyResources();
+           const BH = this._depthCullingState.depthTest,
+             LH = this._depthCullingState.depthFunc,
+             AH = this._depthCullingState.depthMask,
+             rH = this._stencilState.stencilTest;
+           HH(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = BH, this._depthCullingState.depthFunc = LH, this._depthCullingState.depthMask = AH, this._stencilState.stencilTest = rH, this._flagContextRestored()
+ ... (30 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L153-L154` → after: `L743-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L743-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L743-L773) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L153-L154)

```diff
-         get coordinatesMode() {
-           return this._coordinatesMode
+         return this._emptyCubeTexture
+       }
+       set framebufferDimensionsObject(HH) {
+         this._framebufferDimensionsObject = HH
+       }
+       get activeRenderLoops() {
+         return this._activeRenderLoops
+       }
+       stopRenderLoop(HH) {
+         if (!HH) return this._activeRenderLoops.length = 0, void this._cancelFrame();
+         const BH = this._activeRenderLoops.indexOf(HH);
+         BH >= 0 && (this._activeRenderLoops.splice(BH, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
+       }
+       _cancelFrame() {
+         if (this.customAnimationFrameRequester) {
+           if (0 !== this._frameHandler) {
+ ... (15 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L156-L157` → after: `L775-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L775-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L775-L796) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L156-L157)

```diff
-         get wrapU() {
-           return this._wrapU
+       }
+       WU() {
+         this.onBeginFrameObservable.notifyObservers(this)
+       }
+       OX() {
+         this._frameId++, this.onEndFrameObservable.notifyObservers(this)
+       }
+       get maxFPS() {
+         return this._maxFPS
+       }
+       set maxFPS(HH) {
+         this._maxFPS = HH, void 0 !== HH && (this._minFrameTime = HH <= 0 ? Number.MAX_VALUE : 1e3 / HH)
+       }
+       _isOverFrameTime(HH) {
+         if (!HH || void 0 === this._maxFPS) return !1;
+         const BH = HH - this._lastFrameTime;
+ ... (6 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L159-L160` → after: `L798-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L798-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L798-L804) · [Before (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L159-L160)

```diff
-         set wrapU(VV) {
-           this._wrapU = VV
+       }
+       _renderLoop(HH) {
+         this._processFrame(HH), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
+       }
+       _renderFrame() {
+         for (let HH = 0; HH < this._activeRenderLoops.length; HH++) {
+           (0, this._activeRenderLoops[HH])()
```

#### 35. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L162-L184` → after: `L806-L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L806-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L806-L943) · [Before (L162-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L162-L184)

```diff
-         get wrapV() {
-           return this._wrapV
-         }
-         set wrapV(VV) {
-           this._wrapV = VV
-         }
-         get isCube() {
-           return this._texture ? this._texture.isCube : this._isCube
-         }
-         set isCube(VV) {
-           this._texture ? this._texture.isCube = VV : this._isCube = VV
-         }
-         get is3D() {
-           return !!this._texture && this._texture.is3D
-         }
-         set is3D(VV) {
- ... (7 more removed lines; see GitHub link above)
+       }
+       _renderViews() {
+         return !1
+       }
+       _queueNewFrame(HH, BH) {
+         return MH(HH, BH)
+       }
+       _queueNewFrameForRenderLoop() {
+         this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Ku = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.K … [truncated]
+       }
+       runRenderLoop(HH) {
+         -1 === this._activeRenderLoops.indexOf(HH) && (this._activeRenderLoops.push(HH), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
+       }
+       getDepthBuffer() {
+         return this._depthCullingState.depthTest
+       }
+ ... (122 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L186-L187` → after: `L945-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L945-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L945-L1026) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         return VH
+       }
+       _rebuildBuffers() {
+         for (const HH of this._uniformBuffers) HH._rebuildAfterContextLost()
+       }
+       get _shouldUseHighPrecisionShader() {
+         return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
+       }
+       getHostDocument() {
+         return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, QH.d)() ? document : null
+       }
+       getLoadedTexturesCache() {
+         return this._internalTexturesCache
+       }
+       clearInternalTexturesCache() {
+         this._internalTexturesCache.length = 0
+ ... (66 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L189-L195` → after: `L1028-L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1028-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1028-L1045) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L189-L195)

```diff
-         set gammaSpace(VV) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === VV) return;
-             this._texture._gammaSpace = VV
-           } else {
-             if (this._gammaSpace === VV) return;
-             this._gammaSpace = VV
+         if ((0, QH.k)() && (0, QH.d)())
+           if (this._renderingCanvas) {
+             const LH = this._renderingCanvas.getBoundingClientRect?.();
+             HH = this._renderingCanvas.clientWidth || LH?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, BH = this._renderingCanvas.clientHeight || LH?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
+           } else HH = window.innerWidth, BH = window.innerHeight;
+         else HH = this._renderingCanvas ? this._renderingCanvas.width : 100, BH = this._renderingCanvas ? this._renderingCanvas.height : 100;
+         this.setSize(HH / this._hardwareScalingLevel, BH / this._hardwareScalingLevel, LH)
+       }
+       setSize(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         if (!this._renderingCanvas) return !1;
+         if (HH |= 0, BH |= 0, !LH && this._renderingCanvas.width === HH && this._renderingCanvas.height === BH) return !1;
+         if (this._renderingCanvas.width = HH, this._renderingCanvas.height = BH, this.scenes) {
+           for (let HH = 0; HH < this.scenes.length; HH++) {
+             const BH = this.scenes[HH];
+             for (let HH = 0; HH < BH.cameras.length; HH++) {
+ ... (2 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L197-L212` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1047) · [Before (L197-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L197-L212)

```diff
-           this.dD()?.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this)))
-         }
-         get isRGBD() {
-           return null != this._texture && this._texture._isRGBD
-         }
-         set isRGBD(VV) {
-           VV !== this.isRGBD && (this._texture && (this._texture._isRGBD = VV), this.dD()?.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))))
-         }
-         get noMipmap() {
-           return !1
-         }
-         get lodGenerationOffset() {
-           return this._texture ? this._texture._lodGenerationOffset : 0
-         }
-         set lodGenerationOffset(VV) {
-           this._texture && (this._texture._lodGenerationOffset = VV)
+           this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
```

#### 39. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L214-L230` → after: `L1049-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1049-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1049-L1144) · [Before (L214-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L214-L230)

```diff
-         get lodGenerationScale() {
-           return this._texture ? this._texture._lodGenerationScale : 0
-         }
-         set lodGenerationScale(VV) {
-           this._texture && (this._texture._lodGenerationScale = VV)
-         }
-         get linearSpecularLOD() {
-           return !!this._texture && this._texture._linearSpecularLOD
-         }
-         set linearSpecularLOD(VV) {
-           this._texture && (this._texture._linearSpecularLOD = VV)
-         }
-         get irradianceTexture() {
-           return this._texture ? this._texture._irradianceTexture : null
-         }
-         set irradianceTexture(VV) {
- ... (1 more removed lines; see GitHub link above)
+         return !0
+       }
+       createRawTexture(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
+         throw (0, YH.i)("engine.rawTexture")
+       }
+       createRawCubeTexture(HH, BH, LH, AH, rH, SH, hH, tH) {
+         throw (0, YH.i)("engine.rawTexture")
+       }
+       createRawTexture3D(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
+         throw (0, YH.i)("engine.rawTexture")
+       }
+       createRawTexture2DArray(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
+         throw (0, YH.i)("engine.rawTexture")
+       }
+       _sharedInit(HH) {
+         this._renderingCanvas = HH
+ ... (80 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L232-L233` → after: `L1146-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1146-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1146-L1208) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L232-L233)

```diff
-         get uid() {
-           return this._uid || (this._uid = (0, QV.d)()), this._uid
+       }
+       static GetCompatibleTextureLoader(HH, BH) {
+         return null
+       }
+     }
+     xH._RenderPassIdCounter = 0, xH._RescalePostProcessFactory = null, xH.CollisionsEpsilon = .001, xH.QueueNewFrame = MH
+   },
+   41138: (HH, BH, LH) => {
+     LH.d(BH, {
+       c: () => AH
+     });
+     class AH {
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? AH.ShadersRepository : AH.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+ ... (47 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L235-L236` → after: `L1210-L1230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1210-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1210-L1230) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L235-L236)

```diff
-         toString() {
-           return this.name
+         rH.forEach(((HH, BH) => {
+           SH[HH] = BH
+         }));
+         for (const EH of zH.getAttributes(this, hH)) tH.push(EH)
+       }
+       dispose() {
+         this._uniforms = {}, this._isDisposed = !0
+       }
+       _cacheMatrix(HH, BH) {
+         const LH = this._valueCache[HH],
+           AH = BH.updateFlag;
+         if (void 0 !== LH && LH === AH) return !1;
+         const rH = BH.xrH();
+         let SH = this._matrixValueCache[HH];
+         if (void 0 !== LH && null !== LH && void 0 !== SH) {
+           let BH = !0;
+ ... (5 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L238-L239` → after: `L1232-L1435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1232-L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1232-L1435) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L238-L239)

```diff
-         getClassName() {
-           return "BaseTexture"
+         return void 0 === SH && (SH = this._matrixValueCache[HH] = new Float32Array(16)), SH.set(rH), this._valueCache[HH] = AH, !0
+       }
+       _cacheFloat2(HH, BH, LH) {
+         let AH = this._valueCache[HH];
+         if (!AH || 2 !== AH.length) return AH = [BH, LH], this._valueCache[HH] = AH, !0;
+         let rH = !1;
+         return AH[0] !== BH && (AH[0] = BH, rH = !0), AH[1] !== LH && (AH[1] = LH, rH = !0), rH
+       }
+       _cacheFloat3(HH, BH, LH, AH) {
+         let rH = this._valueCache[HH];
+         if (!rH || 3 !== rH.length) return rH = [BH, LH, AH], this._valueCache[HH] = rH, !0;
+         let SH = !1;
+         return rH[0] !== BH && (rH[0] = BH, SH = !0), rH[1] !== LH && (rH[1] = LH, SH = !0), rH[2] !== AH && (rH[2] = AH, SH = !0), SH
+       }
+       _cacheFloat4(HH, BH, LH, AH, rH) {
+         let SH = this._valueCache[HH];
+ ... (188 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L241-L242` → after: `L1437-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1437-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1437-L1439) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L241-L242)

```diff
-         set onDispose(VV) {
-           this._onDisposeObserver && this.eC.remove(this._onDisposeObserver), this._onDisposeObserver = this.eC.add(VV)
+         if (!BH.getShaderParameter(SH, BH.COMPILE_STATUS)) {
+           const LH = BH.getShaderInfoLog(SH);
+           if (LH) throw HH.fragmentCompilationError = LH, new Error("FRAGMENT SHADER " + LH)
```

#### 44. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L244-L245` → after: `L1441-L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1441-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1441-L1448) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L244-L245)

```diff
-         get isBlocking() {
-           return !0
+         const LH = AH.getProgramInfoLog(hH);
+         if (LH) throw HH.programLinkError = LH, new Error(LH)
+       }
+       if (LH) {
+         AH.validateProgram(hH);
+         if (!AH.getProgramParameter(hH, AH.VALIDATE_STATUS)) {
+           const BH = AH.getProgramInfoLog(hH);
+           if (BH) throw HH.programValidationError = BH, new Error(BH)
```

#### 45. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L247-L248` → after: `L1450-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1450-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1450-L1509) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L247-L248)

```diff
-         get loadingError() {
-           return this._loadingError
+       }
+       AH.deleteShader(rH), AH.deleteShader(SH), HH.vertexShader = void 0, HH.fragmentShader = void 0, HH.onCompiled && (HH.onCompiled(), HH.onCompiled = void 0)
+     }
+ 
+     function QH(HH, BH, LH, AH, rH, SH, hH, zH, XH) {
+       let GH = arguments.length > 10 ? arguments[10] : void 0,
+         YH = arguments.length > 11 ? arguments[11] : void 0,
+         uH = arguments.length > 12 ? arguments[12] : void 0;
+       const QH = tH(HH.context);
+       YH || (YH = QH.createRawShaderProgramInjection ?? CH), uH || (uH = QH.createShaderProgramInjection ?? EH);
+       const WH = HH;
+       WH.program = AH ? YH(WH, BH, LH, WH.context, XH) : uH(WH, BH, LH, zH, WH.context, XH), WH.program.__SPECTOR_rebuildProgram = hH, GH()
+     }
+ 
+     function WH(HH, BH, LH, AH, SH, hH) {
+       return MH((0, rH.c)(HH, LH, AH), BH, SH, hH)
+ ... (44 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L250-L251` → after: `L1511-L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1511-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1511-L1537) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L250-L251)

```diff
-         get errorObject() {
-           return this._errorObject
+         return HH
+       }
+     }
+     const EH = /(flat\s)?\s*varying\s*.*/;
+     class XH {
+       constructor() {
+         this.shaderLanguage = 0
+       }
+       attributeProcessor(HH) {
+         return HH.replace("attribute", "in")
+       }
+       varyingCheck(HH, BH) {
+         return EH.test(HH)
+       }
+       varyingProcessor(HH, BH) {
+         return HH.replace("varying", BH ? "in" : "out")
+ ... (11 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L253-L255` → after: `L1539-L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1539-L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1539-L1637) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L253-L255)

```diff
-         constructor(eV) {
-           let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           super(null), this.uniqueId = ((0, JV.l)(this, CV), (0, JV.l)(this, aV, void 0)), this.name = ((0, JV.l)(this, oV), (0, JV.l)(this, cV, void 0)), this.displayName = ((0, JV.l)(this, hV), (0, JV.l)(this, lV, void 0)), this.metadata = ((0, JV.l)(this, LV), (0, JV.l)(this,  … [truncated]
+         return HH
+       }
+     }
+     var GH = LH(41210),
+       YH = LH(41222),
+       uH = LH(41225),
+       QH = LH(41122),
+       WH = LH(41164),
+       MH = LH(41147),
+       xH = LH(41229),
+       vH = LH(41197);
+     class PH {}
+     class TH extends SH.c {
+       get name() {
+         return this._name
+       }
+ ... (83 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L257-L258` → after: `L1639-L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1639-L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1639-L1655) · [Before (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L257-L258)

```diff
-         dD() {
-           return this._scene
+         this._sharedInit(SH), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== LH.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = LH.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
+         for (let rH = 0; rH < this._caps.maxVertexAttribs; rH++) this._currentBufferPointers[rH] = new PH;
+         this._shaderProcessor = this.hQ > 1 ? new XH : new CH;
+         const hH = `Babylon.js v${TH.Version}`;
+         tH.e.Log(hH + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", hH);
+         const zH = (0, rH.B)(this._gl);
+         zH.validateShaderPrograms = this.validateShaderPrograms, zH.parallelShaderCompile = this._caps.parallelShaderCompile
+       }
+       _clearEmptyResources() {
+         this._dummyFramebuffer = null, super._clearEmptyResources()
+       }
+       _getShaderProcessingContext(HH) {
+         return null
+       }
+       areAllEffectsReady() {
+         for (const HH in this._compiledEffects) {
+ ... (1 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L260-L261` → after: `L1657-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1657-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1657-L1733) · [Before (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L260-L261)

```diff
-         _getEngine() {
-           return this._engine
+         return !0
+       }
+       _initGLContext() {
+         this._caps = {
+           maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
+           maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
+           maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
+           maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
+           maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
+           maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
+           maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
+           maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
+           maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
+           maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
+           maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
+           shaderFloatPrecision: 0,
+ ... (61 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L263-L264` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1735-L1738) · [Before (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L263-L264)

```diff
-         getTextureMatrix() {
-           return yV.d.IdentityReadOnly
+         if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
+         else {
+           const HH = this._gl.getExtension("WEBGL_depth_texture");
+           null != HH && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = HH.UNSIGNED_INT_24_8_WEBGL)
```

#### 51. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L266-L267` → after: `L1740-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1740-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1740-L1744) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return yV.d.IdentityReadOnly
+         if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
+         else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
+         else {
+           const HH = this._gl.getExtension("OES_vertex_array_object");
+           null != HH && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = HH.createVertexArrayOES.bind(HH), this._gl.bindVertexArray = HH.bindVertexArrayOES.bind(HH), this._gl.deleteVertexArray = HH.deleteVertexArrayOES.bind(HH))
```

#### 52. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L269-L270` → after: `L1746-L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1746-L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1746-L1749) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+         if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
+         else {
+           const HH = this._gl.getExtension("ANGLE_instanced_arrays");
+           null != HH ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = HH.drawArraysInstancedANGLE.bind(HH), this._gl.drawElementsInstanced = HH.drawElementsInstancedANGLE.bind(HH), this._gl.vertexAttribDivisor = HH.vertexAttribDivisorANGLE.bind(HH)) : this._caps … [truncated]
```

#### 53. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L272-L273` → after: `L1751-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1751-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1751-L1759) · [Before (L272-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L272-L273)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
+         if (this._gl.getShaderPrecisionFormat) {
+           const HH = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
+             BH = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
+           if (HH && BH && (this._caps.highPrecisionShaderSupported = 0 !== HH.precision && 0 !== BH.precision, this._caps.shaderFloatPrecision = Math.min(HH.precision, BH.precision)), !this._shouldUseHighPrecisionShader) {
+             const HH = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
+               BH = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
+             HH && BH && (this._caps.shaderFloatPrecision = Math.min(HH.precision, BH.precision))
+           }
+           this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
```

#### 54. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L275-L277` → after: `L1761-L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1761-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1761-L1764) · [Before (L275-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L275-L277)

```diff
-         scale(VV) {}
-         get canRescale() {
-           return !1
+         if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
+         else {
+           const HH = this._gl.getExtension("EXT_blend_minmax");
+           null != HH && (this._caps.blendMinMax = !0, this._gl.MAX = HH.MAX_EXT, this._gl.MIN = HH.MIN_EXT)
```

#### 55. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L279-L286` → after: `L1766-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1766-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1766-L1778) · [Before (L279-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L279-L286)

```diff
-         _getFromCache(VV, eV, xV, JV, YV, UV) {
-           const yV = this._getEngine();
-           if (!yV) return null;
-           const pV = yV._getUseSRGBBuffer(!!YV, eV),
-             QV = yV.getLoadedTexturesCache();
-           for (let nV = 0; nV < QV.length; nV++) {
-             const yV = QV[nV];
-             if ((void 0 === YV || pV === yV._useSRGBBuffer) && (void 0 === JV || JV === yV.invertY) && yV.url === VV && yV.generateMipMaps === !eV && (!xV || xV === yV.samplingMode) && (void 0 === UV || UV === yV.isCube)) return yV.incrementReferences(), yV
+         if (!this._caps.supportSRGBBuffers) {
+           if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+             SRGB: WebGL2RenderingContext.SRGB,
+             SRGB8: WebGL2RenderingContext.SRGB8,
+             SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
+           };
+           else {
+             const HH = this._gl.getExtension("EXT_sRGB");
+             null != HH && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
+               SRGB: HH.SRGB_EXT,
+               SRGB8: HH.SRGB_ALPHA_EXT,
+               SRGB8_ALPHA8: HH.SRGB_ALPHA_EXT
+             })
```

#### 56. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L288-L343` → after: `L1780-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1780-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1780-L1782) · [Before (L288-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L288-L343)

```diff
-           return null
-         }
-         _rebuild() {}
-         clone() {
-           return null
-         }
-         get textureType() {
-           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
-         }
-         get textureFormat() {
-           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
-         }
-         _markAllSubMeshesAsTexturesDirty() {
-           const VV = this.dD();
-           VV && VV.markAllMaterialsAsDirty(1)
-         }
- ... (40 more removed lines; see GitHub link above)
+           if (this._creationOptions) {
+             const HH = this._creationOptions.forceSRGBBufferSupportState;
+             void 0 !== HH && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && HH)
```

#### 57. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L346-L350` → after: `L1785-L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1785-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1785-L1816) · [Before (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L346-L350)

```diff
-         get _lodTextureHigh() {
-           return this._texture ? this._texture._lodTextureHigh : null
-         }
-         get _lodTextureMid() {
-           return this._texture ? this._texture._lodTextureMid : null
+         this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
+         for (let LH = 0; LH < this._maxSimultaneousTextures; LH++) this._nextFreeTextureSlots.push(LH);
+         "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
+       }
+       _initFeatures() {
+         this._features = {
+           forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
+           supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
+           supportDepthStencilTexture: 1 !== this._webGLVersion,
+           supportShadowSamplers: 1 !== this._webGLVersion,
+           uniformBufferHardCheckMatrix: !1,
+           allowTexturePrefiltering: 1 !== this._webGLVersion,
+           trackUbosInFrame: !1,
+           checkUbosContentBeforeUpload: !1,
+           supportCSM: 1 !== this._webGLVersion,
+           basisNeedsPOT: 1 === this._webGLVersion,
+ ... (16 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L352-L353` → after: `L1818-L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1818-L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1818-L1838) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L352-L353)

```diff
-         get _lodTextureLow() {
-           return this._texture ? this._texture._lodTextureLow : null
+       }
+       get hQ() {
+         return this._webGLVersion
+       }
+       getClassName() {
+         return "ThinEngine"
+       }
+       _prepareWorkingCanvas() {
+         if (this._workingCanvas) return;
+         this._workingCanvas = this.createCanvas(1, 1);
+         const HH = this._workingCanvas.getContext("2d");
+         HH && (this._workingContext = HH)
+       }
+       getInfo() {
+         return this.getGlInfo()
+       }
+ ... (5 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L355-L361` → after: `L1840-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1840-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1840-L1863) · [Before (L355-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L355-L361)

```diff
-         dispose() {
-           if (this._scene) {
-             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
-             const VV = this._scene.textures.indexOf(this);
-             if (VV >= 0 && this._scene.textures.splice(VV, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
-               const VV = this._parentContainer.textures.indexOf(this);
-               VV > -1 && this._parentContainer.textures.splice(VV, 1), this._parentContainer = null
+       }
+       extractDriverInfo() {
+         const HH = this.getGlInfo();
+         return HH && HH.renderer ? HH.renderer : ""
+       }
+       getRenderWidth() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
+       }
+       getRenderHeight() {
+         return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
+       }
+       clear(HH, BH, LH) {
+         let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const SH = this.stencilStateComposer.useStencilGlobalOnly;
+         this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = SH;
+ ... (8 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L364` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1866) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L364)

```diff
-           this.eC.notifyObservers(this), this.eC.clear(), this.metadata = null, super.dispose()
+           BH && (this._gl.clearColor(HH.r, HH.g, HH.b, void 0 !== HH.a ? HH.a : 1), hH |= this._gl.COLOR_BUFFER_BIT)
```

#### 61. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L366-L377` → after: `L1868-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L1868-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L1868-L7624) · [Before (L366-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L366-L377)

```diff
-         serialize() {
-           let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           if (!this.name && !VV) return null;
-           const eV = vV.b.Serialize(this);
-           return vV.b.AppendSerializedAnimations(this, eV), eV
-         }
-         static WhenAllReady(VV, eV) {
-           let xV = VV.length;
-           if (0 !== xV)
-             for (let JV = 0; JV < VV.length; JV++) {
-               const YV = VV[JV];
-               if (YV.isReady()) 0 === --xV && eV();
+         LH && (this.WrH ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), hH |= this._gl.DEPTH_BUFFER_BIT), AH && (this._gl.clearStencil(rH), hH |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(hH)
+       }
+       _clearColorAttachment(HH, BH, LH, AH) {
+         if ((0, xH.f)(LH)) {
+           const LH = (0, xH.i)(AH),
+             rH = LH ? TH._TempClearColorUint32 : TH._TempClearColorInt32;
+           return rH[0] = BH.r, rH[1] = BH.g, rH[2] = BH.b, rH[3] = BH.a, void(LH ? this._gl.clearBufferuiv(this._gl.COLOR, HH, rH) : this._gl.clearBufferiv(this._gl.COLOR, HH, rH))
+         }
+         TH._TempClearColorFloat32[0] = BH.r, TH._TempClearColorFloat32[1] = BH.g, TH._TempClearColorFloat32[2] = BH.b, TH._TempClearColorFloat32[3] = BH.a, this._gl.clearBufferfv(this._gl.COLOR, HH, TH._TempClearColorFloat32)
+       }
+       _viewport(HH, BH, LH, AH) {
+         HH === this._viewportCached.x && BH === this._viewportCached.y && LH === this._viewportCached.z && AH === this._viewportCached.w || (this._viewportCached.x = HH, this._viewportCached.y = BH, this._viewportCached.z = LH, this._viewportCached.w = AH, this._gl.viewport(HH, B … [truncated]
+       }
+       OX() {
+         super.OX(), this._badOS && this.flushFramebuffer()
+       }
+ ... (5741 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L379-L382` → after: `L7626-L7631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R7626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L7626-L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L7626-L7631) · [Before (L379-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L379-L382)

```diff
-                 const VV = YV.onLoadObservable;
-                 VV ? VV.addOnce((() => {
-                   0 === --xV && eV()
-                 })) : 0 === --xV && eV()
+                 const HH = {
+                   evt: LH,
+                   clickInfo: rH,
+                   timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, hH, rH, AH), DH.DoubleClickDelay)
+                 };
+                 this._delayedClicks[hH] = HH
```

#### 63. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L384` → after: `L7633-L8912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L7633-L8912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L7633-L8912) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L384)

```diff
-             } else eV()
+               let CH = HH.hasSpecificMask(UH.d.POINTERDOUBLETAP) || BH.hasSpecificMask(UH.d.POINTERDOUBLETAP);
+               !CH && VH.HasSpecificTrigger(6) && (SH = this._initActionManager(SH, rH), SH && (CH = SH.hasSpecificTrigger(6))), CH && (hH === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < DH.DoubleClickDelay && !this._doubleClickOccured ? (rH.has … [truncated]
+             }
+           }
+           tH || AH(rH, this._currentPickResult)
+         }, this._onPointerMove = HH => {
+           if (this._updatePointerPosition(HH), this._latestPointerMoveEvents.set(HH.pointerId, {
+               event: HH,
+               pointerX: this._pointerX,
+               pointerY: this._pointerY,
+               unTranslatedPointerX: this._unTranslatedPointerX,
+               unTranslatedPointerY: this._unTranslatedPointerY
+             }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > DH.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > DH.DragMovementThreshold), SH.isPointerLo … [truncated]
+           if (!rH.cameraToUseForPointers && !rH.activeCamera) return;
+           if (rH.skipPointerMovePicking) return void this._processPointerMove(new YH.b, HH);
+           this._ensurePointerMovePredicate();
+ ... (1264 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L386-L387` → after: `L8914-L8925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R8914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L8914-L8925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L8914-L8925) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L386-L387)

```diff
-         static _IsScene(VV) {
-           return "Scene" === VV.getClassName()
+         return this.executeWhenReady((() => {
+           if (this.activeCamera) {
+             if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = SH, this._skipEvaluateActiveMeshesCompletely = HH, AH)
+               for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._freeze();
+             BH && BH()
+           } else LH && LH("No active camera found")
+         })), this
+       }
+       unfreezeActiveMeshes() {
+         for (let HH = 0; HH < this.meshes.length; HH++) {
+           const BH = this.meshes[HH];
+           BH._internalAbstractMeshDataInfo && (BH._internalAbstractMeshDataInfo._isActive = !1)
```

#### 65. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L389-L643` → after: `L8927-L8943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R8927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L8927-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L8927-L8943) · [Before (L389-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L389-L643)

```diff
-       }, (() => {
-         const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(iV[Symbol.metadata] ?? null) : void 0;
-         eV = [(0, YV.J)()], xV = [(0, YV.J)()], nV = [(0, YV.J)()], ZV = [(0, YV.J)()], rV = [(0, YV.J)("hasAlpha")], kV = [(0, YV.J)("getAlphaFromRGB")], bV = [(0, YV.J)()], EV = [(0, YV.J)("coordinatesIndex")], BV = [(0, YV.J)()], jV = [(0, YV.J)("coordinatesMode")], qV = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "wrapU" in VV,
-             get: VV => VV.wrapU
-           },
-           metadata: UV
-         }, null, CV), (0, JV.i)(VV, null, tV, {
-           kind: "getter",
-           name: "wrapV",
-           static: !1,
- ... (239 more removed lines; see GitHub link above)
+         if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
+           const HH = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
+           for (const BH of HH) BH.objectRenderer._unfreezeActiveMeshes()
+         } else
+           for (let HH = 0; HH < this._activeMeshes.length; HH++) this._activeMeshes.data[HH]._unFreeze();
+         return this._activeMeshesFrozen = !1, this
+       }
+       _executeActiveContainerCleanup(HH) {
+         (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => HH.dispose()))
+       }
+       _evaluateActiveMeshes() {
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._acti … [truncated]
+         if (this._activeMeshesFrozen && this._activeMeshes.length) {
+           if (!this._skipEvaluateActiveMeshesCompletely) {
+             const HH = this._activeMeshes.length;
+             for (let BH = 0; BH < HH; BH++) {
+ ... (1 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L645-L656` → after: `L8945-L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R8945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L8945-L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L8945-L8973) · [Before (L645-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L645-L656)

```diff
-           },
-           metadata: UV
-         }, ye, pe), (0, JV.i)(null, null, MV, {
-           kind: "field",
-           name: "invertZ",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "invertZ" in VV,
-             get: VV => VV.invertZ,
-             set: (VV, eV) => {
-               VV.invertZ = eV
+           }
+           if (this._activeParticleSystems) {
+             const HH = this._activeParticleSystems.length;
+             for (let BH = 0; BH < HH; BH++) this._activeParticleSystems.data[BH].animate()
+           }
+           return void this._renderingManager.resetSprites()
+         }
+         if (!this.activeCamera) return;
+         this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(),  … [truncated]
+         for (let rH = 0, SH = this._beforeEvaluateActiveMeshStage; rH < SH.length; rH++) {
+           SH[rH].action()
+         }
+         const HH = this.getActiveMeshCandidates(),
+           BH = HH.length,
+           LH = wH.e.Enabled,
+           AH = this.customLODSelector;
+ ... (13 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L658-L669` → after: `L8975-L9054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R8975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L8975-L9054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L8975-L9054) · [Before (L658-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L658-L669)

```diff
-           },
-           metadata: UV
-         }, Qe, ne), (0, JV.i)(null, null, zV, {
-           kind: "field",
-           name: "lodLevelInAlpha",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "lodLevelInAlpha" in VV,
-             get: VV => VV.lodLevelInAlpha,
-             set: (VV, eV) => {
-               VV.lodLevelInAlpha = eV
+           }
+         }
+         if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
+           this.onBeforeParticlesRenderingObservable.notifyObservers(this);
+           for (let HH = 0; HH < this.dU.length; HH++) {
+             const BH = this.dU[HH];
+             if (!BH.isStarted() || !BH.emitter) continue;
+             const LH = BH.emitter;
+             LH.position && !LH.isEnabled() || (this._activeParticleSystems.push(BH), BH.animate(), this._renderingManager.dispatchParticles(BH))
+           }
+           this.onAfterParticlesRenderingObservable.notifyObservers(this)
+         }
+       }
+       _prepareSkeleton(HH) {
+         this._skeletonsEnabled && HH.skeleton && (this._activeSkeletons.pushNoDuplicate(HH.skeleton) && (HH.skeleton.prepare(), this._activeBones.addCount(HH.skeleton.bones.length, !1)), HH.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(HH) && this.frameG … [truncated]
+       }
+ ... (64 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L671-L682` → after: `L9056-L9062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9056-L9062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9056-L9062) · [Before (L671-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L671-L682)

```diff
-           },
-           metadata: UV
-         }, we, Ze), (0, JV.i)(null, null, DV, {
-           kind: "field",
-           name: "isRenderTarget",
-           static: !1,
-           private: !1,
-           access: {
-             has: VV => "isRenderTarget" in VV,
-             get: VV => VV.isRenderTarget,
-             set: (VV, eV) => {
-               VV.isRenderTarget = eV
+             BH && HH && (BH.renderList.data = HH, BH.renderList.length = HH.length), AH.i.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
+           }
+           if (this._cameraDrawRenderTargetStage.length > 0) {
+             const BH = this.getBoundingBoxRenderer?.();
+             BH && !HH && (HH = BH.renderList.length > 0 ? BH.renderList.data.slice() : [], HH.length = BH.renderList.length);
+             for (let HH = 0, LH = this._cameraDrawRenderTargetStage; HH < LH.length; HH++) {
+               SH = LH[HH].action(this.activeCamera) || SH
```

#### 69. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L684-L735` → after: `L9064-L9085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9064-L9085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9064-L9085) · [Before (L684-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L684-L735)

```diff
-           },
-           metadata: UV
-         }, ve, re), UV && Object.defineProperty(VV, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: UV
-         })
-       })(), VV.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, VV
-     })();
-     (ZV = kV.prototype).forceSphericalPolynomialsRecompute ?? (ZV.forceSphericalPolynomialsRecompute = (0, rV.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(kV.prototype, "sphericalPolynomial") || Object.defineProperty(kV.prototype, "sph … [truncated]
-   },
-   41738: (VV, eV, xV) => {
-     xV.d(eV, {
-       e: () => FV,
-       f: () => qV
- ... (36 more removed lines; see GitHub link above)
+             BH && HH && (BH.renderList.data = HH, BH.renderList.length = HH.length)
+           }
+           this._intermediateRendering = !1
+         }
+         SH && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || HH._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame … [truncated]
+         for (let AH = 0, tH = this._beforeCameraDrawStage; AH < tH.length; AH++) {
+           tH[AH].action(this.activeCamera)
+         }
+         this.onBeforeDrawPhaseObservable.notifyObservers(this);
+         const hH = rH.snapshotRendering && 1 === rH.snapshotRenderingMode;
+         hH && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !hH), this.onAfterDrawPhaseObservable.notifyObservers(this);
+         for (let AH = 0, tH = this._afterCameraDrawStage; AH < tH.length; AH++) {
+           tH[AH].action(this.activeCamera)
+         }
+         if (this.postProcessManager && !HH._multiviewTexture) {
+           const BH = HH.outputRenderTarget ? HH.outputRenderTarget.renderTarget : void 0;
+ ... (6 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L737-L849` → after: `L9087-L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9087-L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9087-L9111) · [Before (L737-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L737-L849)

```diff
-       return UV.toDataURL("image/png")
-     }
- 
-     function bV(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const JV = VV.getInternalTexture();
-       if (!JV) return null;
-       const YV = VV._readPixelsSync(eV, xV);
-       return YV ? kV(YV, VV.getSize(), JV.invertY) : null
-     }
-     async function EV(VV) {
-       let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const JV = VV.getInternalTexture();
-       if (!JV) return null;
- ... (97 more removed lines; see GitHub link above)
+       _processSubCameras(HH) {
+         let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         if (0 === HH.cameraRigMode || HH._renderingMultiview) return HH._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(HH, void 0, BH), void this.onAfterRenderCameraObservable.notifyObservers(HH);
+         if (HH._useMultiviewToSingleView) this._renderMultiviewToSingleView(HH);
+         else {
+           this.onBeforeCameraRenderObservable.notifyObservers(HH);
+           for (let BH = 0; BH < HH._rigCameras.length; BH++) this._renderForCamera(HH._rigCameras[BH], HH)
+         }
+         this._activeCamera = HH, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(HH)
+       }
+       _checkIntersections() {
+         for (let HH = 0; HH < this._meshesForIntersections.length; HH++) {
+           const BH = this._meshesForIntersections.data[HH];
+           if (BH.actionManager)
+             for (let HH = 0; BH.actionManager && HH < BH.actionManager.actions.length; HH++) {
+               const LH = BH.actionManager.actions[HH];
+ ... (9 more added lines; see GitHub link above)
```

#### 71. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L854-L888` → after: `L9171-L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9171-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9171-L9189) · [Before (L854-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L854-L888)

```diff
-           updateURL(VV) {
-             let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               xV = arguments.length > 2 ? arguments[2] : void 0,
-               JV = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.dD().markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = VV), this.url = VV, this._buffer = eV, this._forcedExtension = JV, this.delayLoadState = 4;
-             const YV = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               YV ? YV() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), xV && xV()
-             }, this.delayLoad()
-           }
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const VV = this.dD();
-             if (!VV) return;
-             let eV = this.url;
-             !eV && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (eV = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(eV, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
- ... (19 more removed lines; see GitHub link above)
+           AH.i.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
+         }
+         this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
+         for (let LH = 0, AH = this._beforeClearStage; LH < AH.length; LH++) {
+           AH[LH].action()
+         }
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+         else {
+           const BH = this.getActiveMeshCandidates(),
+             LH = BH.length;
+           if (this._activeMeshesFrozen) {
+             if (!this._skipEvaluateActiveMeshesCompletely)
+               for (let HH = 0; HH < LH; HH++) {
+                 const LH = BH.data[HH];
+                 LH._internalAbstractMeshDataInfo._wasActiveLastFrame && LH.computeWorldMatrix()
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L890-L900` → after: `L9191-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9191-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9191-L9202) · [Before (L890-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L890-L900)

```diff
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = yV.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = yV.d.Zero());
-             const xV = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case VV.PLANAR_MODE:
-                 yV.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case VV.PROJECTION_MODE: {
-                 yV.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const VV = eV.getProjectionMatrix();
-                 this._cachedReflectionProjectionMatrixId = VV.updateFlag, VV.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
-                 break
+           } else {
+             this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
+             for (let AH = 0; AH < LH; AH++) {
+               const LH = BH.data[AH];
+               LH._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, LH.isBlocked || (this._totalVertices.addCount(LH.getTotalVertices(), !1), LH.isReady() && LH.isEnabled() && !LH.bX.hasAZeroComponent && (LH.computeWorldMatrix(HH), LH.actionManager && LH.actionManager.hasSpe … [truncated]
+             }
+             if (this.particlesEnabled)
+               for (let HH = 0; HH < this.dU.length; HH++) {
+                 const BH = this.dU[HH];
+                 if (!BH.isStarted() || !BH.emitter) continue;
+                 const LH = BH.emitter;
+                 LH.position && !LH.isEnabled() || (this._activeParticleSystems.push(BH), BH.animate())
```

#### 73. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L902-L903` → after: `L9204-L9252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9204-L9252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9204-L9252) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L902-L903)

```diff
-               default:
-                 yV.d.IdentityToRef(this._cachedReflectionTextureMatrix)
+           }
+         }
+         this.frameGraph?.execute()
+       }
+       _renderRenderTarget(HH, BH) {
+         let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         if (this._intermediateRendering = !0, HH._shouldRender()) {
+           if (this._renderId++, this.activeCamera = BH, !this.activeCamera) throw new Error("Active camera not set");
+           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), HH.render(LH, AH)
+         }
+         this._intermediateRendering = !1
+       }
+       render() {
+         let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+           BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+ ... (33 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L905` → after: `L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9254) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L905)

```diff
-             return xV && eV.markAllMaterialsAsDirty(1, (VV => VV.hasTexture(this))), this._cachedReflectionTextureMatrix
+             AH.i.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
```

#### 75. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L907-L922` → after: `L9256-L9258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9256-L9258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9256-L9258) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L907-L922)

```diff
-           clone() {
-             const eV = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
-             };
-             return jV.b.Clone((() => new VV(this._texture ? this._texture.url : null, this.dD(), eV)), this)
+           this._engine.currentRenderPassId = HH?.renderPassId ?? 0, this.activeCamera = HH, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(t … [truncated]
+           for (let BH = 0, LH = this._beforeClearStage; BH < LH.length; BH++) {
+             LH[BH].action()
```

#### 76. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L924-L935` → after: `L9260-L9262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9260-L9262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9260-L9262) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L924-L935)

```diff
-           serialize() {
-             const eV = this.name;
-             VV.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const xV = super.serialize(VV._SerializeInternalTextureUniqueId);
-             if (!xV) return null;
-             if (VV.SerializeBuffers || VV.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) xV.base64String = this._buffer, xV.name = xV.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const VV = this.mimeType || "image/png";
-               xV.base64String = `data:${VV};base64,${(0,rV.h)(this._buffer)}`
-             } else(VV.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (xV.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? bV(this) : EV(this));
-             return xV.invertY = this._invertY, xV.samplingMode = this.samplingMode, xV._creationFlags = this._creationFlags, xV._useSRGBBuffer = this._useSRGBBuffer, VV._SerializeInternalTextureUniqueId && (xV.internalTextureUniqueId = this._texture?.uniqueId), xV.internalTexture … [truncated]
+           this._clearFrameBuffer(this.activeCamera);
+           for (let BH = 0, LH = this._gatherRenderTargetsStage; BH < LH.length; BH++) {
+             LH[BH].action(this._renderTargets)
```

#### 77. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L937-L938` → after: `L9264-L9268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9264-L9268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9264-L9268) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+           if (this.activeCameras && this.activeCameras.length > 0)
+             for (let BH = 0; BH < this.activeCameras.length; BH++) this._processSubCameras(this.activeCameras[BH], BH > 0);
+           else {
+             if (!this.activeCamera) throw new Error("No camera defined");
+             this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
```

#### 78. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L940-L941` → after: `L9270-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R9270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/892a35894ad8b973f84df281b97745981e598db2...build/bloxd.io/cwj32u.ae3e40c2#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L9270-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/cwj32u.ae3e40c2/bundles/bloxd.io/chunks/js/281.js#L9270-L9278) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/892a35894ad8b973f84df281b97745981e598db2/bundles/bloxd.io/chunks/js/281.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+         }
+         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
+         for (let LH = 0, AH = this._afterRenderStage; LH < AH.length; LH++) {
+           AH[LH].action()
+         }
+         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
+           for (let HH = 0; HH < this._toBeDisposed.length; HH++) {
+             const BH = this._toBeDisposed[HH];
+             BH && BH.dispose()
```
