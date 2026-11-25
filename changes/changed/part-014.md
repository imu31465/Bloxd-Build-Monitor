# Changed — Bundle Modifications Report (Part 014 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `14 / 56` (**272** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 013](part-013.md) · [Part 015 →](part-015.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (223 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 108. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1463-L1464` → after: `L3170-L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3170-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3170-L3171) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1463-L1464)

```diff
-           async directlySetCurrentUser(QQ) {
-             this.currentUser && this.currentUser !== QQ && this._currentUser._stopProactiveRefresh(), QQ && this.isProactiveRefreshEnabled && QQ._startProactiveRefresh(), this.currentUser = QQ, QQ ? await this.assertedPersistence.setCurrentUser(QQ) : await this.assertedPersistenc … [truncated]
+           setIndices(MM, rM) {
+             return this
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1466-L1467` → after: `L3173-L3174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3173-L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3173-L3174) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1466-L1467)

```diff
-           queue(QQ) {
-             return this.operations = this.operations.then(QQ, QQ), this.operations
+           isVerticesDataPresent(MM) {
+             return !1
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1469-L1470` → after: `L3176-L3177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3176-L3177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3176-L3177) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1469-L1470)

```diff
-           get assertedPersistence() {
-             return HQ(this.persistenceManager, this, "internal-error"), this.persistenceManager
+           aY() {
+             return this._masterMesh ? this._masterMesh.aY() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1472-L1473` → after: `L3179-L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3179-L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3179-L3180) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1472-L1473)

```diff
-           _logFramework(QQ) {
-             QQ && !this.frameworks.includes(QQ) && (this.frameworks.push(QQ), this.frameworks.sort(), this.clientVersion = GW(this.config.clientPlatform, this._getFrameworks()))
+           getRawBoundingInfo() {
+             return this.rawBoundingInfo ?? this.aY()
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1475-L1476` → after: `L3182-L3183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3182-L3183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3182-L3183) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1475-L1476)

```diff
-           _getFrameworks() {
-             return this.frameworks
+           setBoundingInfo(MM) {
+             return this._boundingInfo = MM, this
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1478-L1501` → after: `L3185-L3186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3185-L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3185-L3186) · [Before (L1478-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1478-L1501)

```diff
-           async _getAdditionalHeaders() {
-             var QQ;
-             const WQ = {
-               "X-Client-Version": this.clientVersion
-             };
-             this.app.options.appId && (WQ["X-Firebase-gmpid"] = this.app.options.appId);
-             const XQ = await (null === (QQ = this.heartbeatServiceProvider.getImmediate({
-               optional: !0
-             })) || void 0 === QQ ? void 0 : QQ.getHeartbeatsHeader());
-             XQ && (WQ["X-Firebase-Client"] = XQ);
-             const wQ = await this._getAppCheckToken();
-             return wQ && (WQ["X-Firebase-AppCheck"] = wQ), WQ
-           }
-           async _getAppCheckToken() {
-             var QQ;
-             const WQ = await (null === (QQ = this.appCheckServiceProvider.getImmediate({
- ... (8 more removed lines; see GitHub link above)
+           get hasBoundingInfo() {
+             return null !== this._boundingInfo
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1503-L1510` → after: `L3188-L3189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3188-L3189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3188-L3189) · [Before (L1503-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1503-L1510)

```diff
-         }
- 
-         function AW(QQ) {
-           return (0, wQ.L)(QQ)
-         }
-         class RW {
-           constructor(QQ) {
-             this.auth = QQ, this.observer = null, this.addObserver = (0, wQ.x)((QQ => this.observer = QQ))
+           buildBoundingInfo(MM, rM, iM) {
+             return this._boundingInfo = new zM.d(MM, rM, iM), this._boundingInfo
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1512-L1513` → after: `L3191-L3195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3191-L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3191-L3195) · [Before (L1512-L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1512-L1513)

```diff
-           get next() {
-             return HQ(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
+           normalizeToUnitCube() {
+             let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+               rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+               iM = arguments.length > 2 ? arguments[2] : void 0;
+             return super.normalizeToUnitCube(MM, rM, iM)
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1515-L1594` → after: `L3197-L3198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3197-L3198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3197-L3198) · [Before (L1515-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1515-L1594)

```diff
-         }
- 
-         function EW(QQ, WQ) {
-           const XQ = (0, qQ.B)(QQ, "auth");
-           if (XQ.isInitialized()) {
-             const QQ = XQ.getImmediate(),
-               qQ = XQ.getOptions();
-             if ((0, wQ.y)(qQ, null !== WQ && void 0 !== WQ ? WQ : {})) return QQ;
-             GQ(QQ, "already-initialized")
-           }
-           return XQ.initialize({
-             options: WQ
-           })
-         }
- 
-         function CW(QQ, WQ, XQ) {
- ... (64 more removed lines; see GitHub link above)
+           get useBones() {
+             return this.skeleton && this.Hk().skeletonsEnabled && this.isVerticesDataPresent(aM.j.MatricesIndicesKind) && this.isVerticesDataPresent(aM.j.MatricesWeightsKind)
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1596-L1597` → after: `L3200-L3203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3200-L3203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3200-L3203) · [Before (L1596-L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1596-L1597)

```diff
-           toJSON() {
-             return aQ("not implemented")
+           _preActivate() {}
+           _preActivateForIntermediateRendering(MM) {}
+           _activate(MM, rM) {
+             return this._renderId = MM, !0
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1599-L1600` → after: `L3205-L3209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3205-L3209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3205-L3209) · [Before (L1599-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1599-L1600)

```diff
-           _getIdTokenResponse(QQ) {
-             return aQ("not implemented")
+           _postActivate() {}
+           _freeze() {}
+           _unFreeze() {}
+           getWorldMatrix() {
+             return this._masterMesh && this.billboardMode === nM.e.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1602-L1603` → after: `L3211-L3212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3211-L3212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3211-L3212) · [Before (L1602-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1602-L1603)

```diff
-           _linkToIdToken(QQ, WQ) {
-             return aQ("not implemented")
+           _getWorldMatrixDeterminant() {
+             return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1605-L1606` → after: `L3214-L3215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3214-L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3214-L3215) · [Before (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1605-L1606)

```diff
-           _getReauthenticationResolver(QQ) {
-             return aQ("not implemented")
+           get Wk() {
+             return !1
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1608-L1630` → after: `L3217-L3218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3217-L3218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3217-L3218) · [Before (L1608-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1608-L1630)

```diff
-         }
-         async function fW(QQ, WQ) {
-           return kQ(QQ, "POST", "/v1/accounts:resetPassword", LQ(QQ, WQ))
-         }
-         async function SW(QQ, WQ) {
-           return kQ(QQ, "POST", "/v1/accounts:update", WQ)
-         }
-         async function tW(QQ, WQ) {
-           return SQ(QQ, "POST", "/v1/accounts:signInWithPassword", LQ(QQ, WQ))
-         }
-         async function oW(QQ, WQ) {
-           return kQ(QQ, "POST", "/v1/accounts:sendOobCode", LQ(QQ, WQ))
-         }
-         async function eW(QQ, WQ) {
-           return oW(QQ, WQ)
-         }
- ... (7 more removed lines; see GitHub link above)
+           get nSM() {
+             return !1
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1632-L1633` → after: `L3220-L3221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3220-L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3220-L3221) · [Before (L1632-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1632-L1633)

```diff
-           static _fromEmailAndPassword(QQ, WQ) {
-             return new xW(QQ, WQ, "password")
+           get hasThinInstances() {
+             return !1
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1635-L1636` → after: `L3223-L3224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3223-L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3223-L3224) · [Before (L1635-L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1635-L1636)

```diff
-           static _fromEmailAndCode(QQ, WQ) {
-             return new xW(QQ, WQ, "emailLink", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
+           movePOV(MM, rM, iM) {
+             return this.position.addInPlace(this.calcMovePOV(MM, rM, iM)), this
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1638-L1644` → after: `L3226-L3231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3226-L3231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3226-L3231) · [Before (L1638-L1644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1638-L1644)

```diff
-           toJSON() {
-             return {
-               email: this._email,
-               password: this._password,
-               signInMethod: this.signInMethod,
-               tenantId: this._tenantId
-             }
+           calcMovePOV(MM, rM, iM) {
+             const OM = new jM.d;
+             (this.rotationQuaternion ? this.rotationQuaternion : jM.h.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(OM);
+             const SM = jM.q.Zero(),
+               aM = this.definedFacingForward ? -1 : 1;
+             return jM.q.TransformCoordinatesFromFloatsToRef(MM * aM, rM, iM * aM, OM, SM), SM
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1646-L1652` → after: `L3233-L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3233-L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3233-L3234) · [Before (L1646-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1646-L1652)

```diff
-           static fromJSON(QQ) {
-             const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ;
-             if ((null === WQ || void 0 === WQ ? void 0 : WQ.email) && (null === WQ || void 0 === WQ ? void 0 : WQ.password)) {
-               if ("password" === WQ.signInMethod) return this._fromEmailAndPassword(WQ.email, WQ.password);
-               if ("emailLink" === WQ.signInMethod) return this._fromEmailAndCode(WQ.email, WQ.password, WQ.tenantId)
-             }
-             return null
+           rotatePOV(MM, rM, iM) {
+             return this.rotation.addInPlace(this.calcRotatePOV(MM, rM, iM)), this
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1654-L1666` → after: `L3236-L3275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3236-L3275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3236-L3275) · [Before (L1654-L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1654-L1666)

```diff
-           async _getIdTokenResponse(QQ) {
-             var WQ;
-             switch (this.signInMethod) {
-               case "password":
-                 const XQ = {
-                   returnSecureToken: !0,
-                   email: this._email,
-                   password: this._password,
-                   clientType: "CLIENT_TYPE_WEB"
-                 };
-                 if (null === (WQ = QQ._getRecaptchaConfig()) || void 0 === WQ ? void 0 : WQ.emailPasswordEnabled) {
-                   const WQ = await hW(QQ, XQ, "signInWithPassword");
-                   return tW(QQ, WQ)
+           calcRotatePOV(MM, rM, iM) {
+             const OM = this.definedFacingForward ? 1 : -1;
+             return new jM.q(MM * OM, rM, iM * OM)
+           }
+           _refreshBoundingInfo(MM, rM) {
+             if (MM) {
+               const iM = (0, lM.d)(MM, 0, this.getTotalVertices(), rM);
+               this._boundingInfo ? this._boundingInfo.reConstruct(iM.minimum, iM.maximum) : this._boundingInfo = new zM.d(iM.minimum, iM.maximum)
+             }
+             if (this.iG)
+               for (let iM = 0; iM < this.iG.length; iM++) this.iG[iM].refreshBoundingInfo(MM);
+             this._updateBoundingInfo()
+           }
+           _refreshBoundingInfoDirect(MM) {
+             if (this._boundingInfo ? this._boundingInfo.reConstruct(MM.minimum, MM.maximum) : this._boundingInfo = new zM.d(MM.minimum, MM.maximum), this.iG)
+               for (let rM = 0; rM < this.iG.length; rM++) this.iG[rM].refreshBoundingInfo(null);
+ ... (24 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1668-L1672` → after: `L3277-L3311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3277-L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3277-L3311) · [Before (L1668-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1668-L1672)

```diff
-                 return tW(QQ, XQ).catch((async WQ => {
-                   if ("auth/missing-recaptcha-token" === WQ.code) {
-                     console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
-                     const WQ = await hW(QQ, XQ, "signInWithPassword");
-                     return tW(QQ, WQ)
+                 return this.getVerticesData(MM)
+               };
+             if (iM || (iM = PM(OM)), !iM) return null;
+             SM ? (SM._outputData ? SM._outputData.set(iM) : SM._outputData = new Float32Array(iM), iM = SM._outputData) : (rM.applyMorph && this.morphTargetManager || rM.applySkeleton && this.skeleton || rM.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) … [truncated]
+               let OM;
+               switch (rM) {
+                 case aM.j.PositionKind:
+                   OM = MM => MM.getPositions();
+                   break;
+                 case aM.j.NormalKind:
+                   OM = MM => MM.getNormals();
+                   break;
+                 case aM.j.TangentKind:
+                   OM = MM => MM.getTangents();
+                   break;
+                 case aM.j.UVKind:
+ ... (19 more added lines; see GitHub link above)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1674-L1705` → after: `L3313-L3327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3313-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3313-L3327) · [Before (L1674-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1674-L1705)

```diff
-                   return Promise.reject(WQ)
-                 }));
-               case "emailLink":
-                 return async function(QQ, WQ) {
-                   return SQ(QQ, "POST", "/v1/accounts:signInWithEmailLink", LQ(QQ, WQ))
-                 }(QQ, {
-                   email: this._email,
-                   oobCode: this._password
-                 });
-               default:
-                 GQ(QQ, "internal-error")
-             }
-           }
-           async _linkToIdToken(QQ, WQ) {
-             switch (this.signInMethod) {
-               case "password":
- ... (16 more removed lines; see GitHub link above)
+                 }
+                 MM[SM] = rM
+               }
+             }(iM, OM, this.morphTargetManager);
+             const nM = this.bakedVertexAnimationManager;
+             let QM = !1;
+             if (rM.applyBakedVertexAnimation && nM?.isEnabled) {
+               const MM = PM(aM.j.MatricesIndicesKind),
+                 SM = PM(aM.j.MatricesWeightsKind);
+               if (SM && MM) {
+                 const jM = this.numBoneInfluencers > 4,
+                   zM = jM ? PM(aM.j.MatricesIndicesExtraKind) : null,
+                   LM = jM ? PM(aM.j.MatricesWeightsExtraKind) : null;
+                 QM = uM(iM, OM, nM, rM.bakedVertexAnimationSettings ?? nM.animationParameters, MM, SM, zM, LM, this.numBoneInfluencers)
+               }
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1707-L1764` → after: `L3329-L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3329-L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3329-L3346) · [Before (L1707-L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1707-L1764)

```diff
-           }
-           _getReauthenticationResolver(QQ) {
-             return this._getIdTokenResponse(QQ)
-           }
-         }
-         async function YW(QQ, WQ) {
-           return SQ(QQ, "POST", "/v1/accounts:signInWithIdp", LQ(QQ, WQ))
-         }
-         class NW extends kW {
-           constructor() {
-             super(...arguments), this.pendingToken = null
-           }
-           static _fromParams(QQ) {
-             const WQ = new NW(QQ.providerId, QQ.signInMethod);
-             return QQ.idToken || QQ.accessToken ? (QQ.idToken && (WQ.idToken = QQ.idToken), QQ.accessToken && (WQ.accessToken = QQ.accessToken), QQ.nonce && !QQ.pendingToken && (WQ.nonce = QQ.nonce), QQ.pendingToken && (WQ.pendingToken = QQ.pendingToken)) : QQ.oauthToken && QQ.oa … [truncated]
-           }
- ... (42 more removed lines; see GitHub link above)
+             if (!QM && rM.applySkeleton && this.skeleton) {
+               const rM = PM(aM.j.MatricesIndicesKind),
+                 SM = PM(aM.j.MatricesWeightsKind);
+               if (SM && rM) {
+                 const jM = this.numBoneInfluencers > 4,
+                   nM = jM ? PM(aM.j.MatricesIndicesExtraKind) : null,
+                   QM = jM ? PM(aM.j.MatricesWeightsExtraKind) : null,
+                   zM = this.skeleton.getTransformMatrices(this);
+                 MM._ApplySkeleton(iM, OM, zM, rM, SM, nM, QM)
+               }
+             }
+             if (!1 !== rM.updatePositionsArray && OM === aM.j.PositionKind) {
+               const MM = this._internalAbstractMeshDataInfo._positions || [],
+                 rM = MM.length;
+               if (MM.length = iM.length / 3, rM < MM.length)
+                 for (let iM = rM; iM < MM.length; iM++) MM[iM] = new jM.q;
+ ... (2 more added lines; see GitHub link above)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1768-L1882` → after: `L3350-L3377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3350-L3377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3350-L3377) · [Before (L1768-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1768-L1882)

```diff
-         }
-         const ZW = {
-           USER_NOT_FOUND: "user-not-found"
-         };
-         class OW extends kW {
-           constructor(QQ) {
-             super("phone", "phone"), this.params = QQ
-           }
-           static _fromVerification(QQ, WQ) {
-             return new OW({
-               verificationId: QQ,
-               verificationCode: WQ
-             })
-           }
-           static _fromTokenResponse(QQ, WQ) {
-             return new OW({
- ... (99 more removed lines; see GitHub link above)
+           getNormalsData() {
+             let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+               rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             return this._getData({
+               applySkeleton: MM,
+               applyMorph: rM,
+               updatePositionsArray: !1
+             }, null, aM.j.NormalKind)
+           }
+           jK() {
+             let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+               rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+               iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+             return this._getData({
+               applySkeleton: MM,
+               applyMorph: rM,
+ ... (12 more added lines; see GitHub link above)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1885-L1892` → after: `L3381-L3382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3381-L3382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3381-L3382) · [Before (L1885-L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1885-L1892)

```diff
-         }
- 
-         function mW(QQ) {
-           return KW.parseLink(QQ)
-         }
-         class MW {
-           constructor() {
-             this.providerId = MW.PROVIDER_ID
+           _afterComputeWorldMatrix() {
+             this.kh || (this._boundingInfoIsDirty = !0)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1894-L1895` → after: `L3384-L3385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3384-L3385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3384-L3385) · [Before (L1894-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1894-L1895)

```diff
-           static credential(QQ, WQ) {
-             return xW._fromEmailAndPassword(QQ, WQ)
+           isInFrustum(MM) {
+             return this.aY().isInFrustum(MM, this.cullingStrategy)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1897-L1899` → after: `L3387-L3388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3387-L3388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3387-L3388) · [Before (L1897-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1897-L1899)

```diff
-           static credentialWithLink(QQ, WQ) {
-             const XQ = KW.parseLink(WQ);
-             return HQ(XQ, "argument-error"), xW._fromEmailAndCode(QQ, XQ.code, XQ.tenantId)
+           isCompletelyInFrustum(MM) {
+             return this.aY().isCompletelyInFrustum(MM)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1901-L1905` → after: `L3390-L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3390-L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3390-L3399) · [Before (L1901-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1901-L1905)

```diff
-         }
-         MW.PROVIDER_ID = "password", MW.EMAIL_PASSWORD_SIGN_IN_METHOD = "password", MW.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
-         class QX {
-           constructor(QQ) {
-             this.providerId = QQ, this.defaultLanguageCode = null, this.customParameters = {}
+           iSM(MM) {
+             let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+               iM = arguments.length > 2 ? arguments[2] : void 0;
+             const OM = this.aY(),
+               SM = MM.aY();
+             if (OM.intersects(SM, rM)) return !0;
+             if (iM)
+               for (const jM of this.getChildMeshes())
+                 if (jM.iSM(MM, rM, !0)) return !0;
+             return !1
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1907-L1908` → after: `L3401-L3402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3401-L3402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3401-L3402) · [Before (L1907-L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1907-L1908)

```diff
-           setDefaultLanguage(QQ) {
-             this.defaultLanguageCode = QQ
+           intersectsPoint(MM) {
+             return this.aY().intersectsPoint(MM)
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1910-L1911` → after: `L3404-L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3404-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3404-L3405) · [Before (L1910-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1910-L1911)

```diff
-           setCustomParameters(QQ) {
-             return this.customParameters = QQ, this
+           get checkCollisions() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1913-L1914` → after: `L3407-L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3407-L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3407-L3408) · [Before (L1913-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1913-L1914)

```diff
-           getCustomParameters() {
-             return this.customParameters
+           set checkCollisions(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._checkCollisions = MM
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1916-L1919` → after: `L3410-L3411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3410-L3411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3410-L3411) · [Before (L1916-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1916-L1919)

```diff
-         }
-         class WX extends QX {
-           constructor() {
-             super(...arguments), this.scopes = []
+           get collider() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collider
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1921-L1922` → after: `L3413-L3417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3413-L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3413-L3417) · [Before (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1921-L1922)

```diff
-           addScope(QQ) {
-             return this.scopes.includes(QQ) || this.scopes.push(QQ), this
+           moveWithCollisions(MM) {
+             let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+             this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
+             const iM = this.Hk().collisionCoordinator;
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = iM.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, iM.getNewPositi … [truncated]
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1924-L1925` → after: `L3419-L3436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3419-L3436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3419-L3436) · [Before (L1924-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1924-L1925)

```diff
-           getScopes() {
-             return [...this.scopes]
+           _collideForSubMesh(MM, rM, iM) {
+             if (this._generatePointsArray(), !this._positions) return this;
+             if (!MM._lastColliderWorldVertices || !MM._lastColliderTransformMatrix.equals(rM)) {
+               MM._lastColliderTransformMatrix = rM.clone(), MM._lastColliderWorldVertices = [], MM._trianglePlanes = [];
+               const iM = MM.verticesStart,
+                 OM = MM.verticesStart + MM.verticesCount;
+               for (let SM = iM; SM < OM; SM++) MM._lastColliderWorldVertices.push(jM.q.TransformCoordinates(this._positions[SM], rM))
+             }
+             return iM._collide(MM._trianglePlanes, MM._lastColliderWorldVertices, this.hOM(), MM.indexStart, MM.indexStart + MM.indexCount, MM.verticesStart, !!MM.Zh(), this, this._shouldConvertRHS(), 7 === MM.Zh()?.fillMode), this
+           }
+           _processCollisionsForSubMeshes(MM, rM) {
+             const iM = this._scene.getCollidingSubMeshCandidates(this, MM),
+               OM = iM.length;
+             for (let SM = 0; SM < OM; SM++) {
+               const jM = iM.data[SM];
+               OM > 1 && !jM._checkCollision(MM) || this._collideForSubMesh(jM, rM, MM)
+ ... (2 more added lines; see GitHub link above)
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1927-L1931` → after: `L3438-L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3438-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3438-L3439) · [Before (L1927-L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1927-L1931)

```diff
-         }
-         class XX extends WX {
-           static credentialFromJSON(QQ) {
-             const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ;
-             return HQ("providerId" in WQ && "signInMethod" in WQ, "argument-error"), NW._fromParams(WQ)
+           _shouldConvertRHS() {
+             return !1
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1933-L1936` → after: `L3441-L3445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3441-L3445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3441-L3445) · [Before (L1933-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1933-L1936)

```diff
-           credential(QQ) {
-             return this._credential(Object.assign(Object.assign({}, QQ), {
-               nonce: QQ.rawNonce
-             }))
+           _checkCollision(MM) {
+             if (!this.aY()._checkCollision(MM)) return this;
+             const rM = jM.l.Matrix[0],
+               iM = jM.l.Matrix[1];
+             return jM.d.ScalingToRef(1 / MM._radius.x, 1 / MM._radius.y, 1 / MM._radius.z, rM), this.worldMatrixFromCache.multiplyToRef(rM, iM), this._processCollisionsForSubMeshes(MM, iM), this
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1938-L1942` → after: `L3447-L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3447-L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3447-L3448) · [Before (L1938-L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1938-L1942)

```diff
-           _credential(QQ) {
-             return HQ(QQ.idToken || QQ.accessToken, "argument-error"), NW._fromParams(Object.assign(Object.assign({}, QQ), {
-               providerId: this.providerId,
-               signInMethod: this.providerId
-             }))
+           _generatePointsArray() {
+             return !1
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1944-L1945` → after: `L3450-L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3450-L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3450-L3488) · [Before (L1944-L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1944-L1945)

```diff
-           static credentialFromResult(QQ) {
-             return XX.oauthCredentialFromTaggedObject(QQ)
+           intersects(MM, rM, iM) {
+             let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               SM = arguments.length > 4 ? arguments[4] : void 0,
+               aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+             const PM = new QM.c,
+               nM = this.getClassName(),
+               zM = "InstancedLinesMesh" === nM || "LinesMesh" === nM || "GreasedLineMesh" === nM ? this.intersectionThreshold : 0,
+               LM = this.aY();
+             if (!this.iG) return PM;
+             if (!aM && (!MM.intersectsSphere(LM.YOM, zM) || !MM.intersectsBox(LM.boundingBox, zM))) return PM;
+             if (OM) return PM.hit = !aM, PM.pickedMesh = aM ? null : this, PM.distance = aM ? 0 : jM.q.Distance(MM.origin, LM.YOM.center), PM.subMeshId = 0, PM;
+             if (!this._generatePointsArray()) return PM;
+             let mM = null;
+             const HM = this._scene.getIntersectingSubMeshCandidates(this, MM),
+               hM = HM.length;
+             let JM = !1;
+ ... (23 more added lines; see GitHub link above)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1947-L1948` → after: `L3490-L3491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3490-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3490-L3491) · [Before (L1947-L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1947-L1948)

```diff
-           static credentialFromError(QQ) {
-             return XX.oauthCredentialFromTaggedObject(QQ.customData || {})
+           clone(MM, rM, iM) {
+             return null
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1950-L1963` → after: `L3493-L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3493-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3493-L3638) · [Before (L1950-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1950-L1963)

```diff
-           static oauthCredentialFromTaggedObject(QQ) {
-             let {
-               _tokenResponse: WQ
-             } = QQ;
-             if (!WQ) return null;
-             const {
-               oauthIdToken: XQ,
-               oauthAccessToken: wQ,
-               oauthTokenSecret: qQ,
-               pendingToken: TQ,
-               nonce: zQ,
-               providerId: sQ
-             } = WQ;
-             if (!wQ && !qQ && !XQ && !TQ) return null;
+           releaseSubMeshes() {
+             let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+             if (this.iG)
+               for (; this.iG.length;) this.iG[0].dispose(MM);
+             else this.iG = [];
+             return this
+           }
+           dispose(MM) {
+             let rM, iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             const OM = this.Hk();
+             for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), OM.freeActiveMeshes(), OM.freeRenderingGroups … [truncated]
+               const MM = this._intersectionsInProgress[rM],
+                 iM = MM._intersectionsInProgress.indexOf(this);
+               MM._intersectionsInProgress.splice(iM, 1)
+             }
+             this._intersectionsInProgress.length = 0;
+ ... (130 more added lines; see GitHub link above)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1965-L1989` → after: `L3640-L3642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3640-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3640-L3642) · [Before (L1965-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1965-L1989)

```diff
-             try {
-               return new XX(sQ)._credential({
-                 idToken: XQ,
-                 accessToken: wQ,
-                 nonce: zQ,
-                 pendingToken: TQ
-               })
-             } catch (FQ) {
-               return null
-             }
-           }
-         }
-         class wX extends WX {
-           constructor() {
-             super("facebook.com")
-           }
- ... (9 more removed lines; see GitHub link above)
+             let lM, EM, UM, GM, CM = Number.MAX_VALUE;
+             for (let eM = 0; eM < yM.length; eM++) EM = yM[eM], UM = dM[EM], GM = JM[EM], PM = (MM - GM.x) * UM.x + (rM - GM.y) * UM.y + (iM - GM.z) * UM.z, (!mM || mM && HM && PM >= 0 || mM && !HM && PM <= 0) && (PM = UM.x * GM.x + UM.y * GM.y + UM.z * GM.z, nM = -(UM.x * MM + U … [truncated]
+             return hM
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1991-L1992` → after: `L3644-L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3644-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3644-L3645) · [Before (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1991-L1992)

```diff
-           static credentialFromError(QQ) {
-             return wX.credentialFromTaggedObject(QQ.customData || {})
+           getFacetDataParameters() {
+             return this._internalAbstractMeshDataInfo._facetData.facetParameters
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1994-L2018` → after: `L3647-L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3647-L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3647-L3649) · [Before (L1994-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1994-L2018)

```diff
-           static credentialFromTaggedObject(QQ) {
-             let {
-               _tokenResponse: WQ
-             } = QQ;
-             if (!WQ || !("oauthAccessToken" in WQ)) return null;
-             if (!WQ.oauthAccessToken) return null;
-             try {
-               return wX.credential(WQ.oauthAccessToken)
-             } catch (XQ) {
-               return null
-             }
-           }
-         }
-         wX.FACEBOOK_SIGN_IN_METHOD = "facebook.com", wX.PROVIDER_ID = "facebook.com";
-         class qX extends WX {
-           constructor() {
- ... (9 more removed lines; see GitHub link above)
+           disableFacetData() {
+             const MM = this._internalAbstractMeshDataInfo._facetData;
+             return MM.facetDataEnabled && (MM.facetDataEnabled = !1, MM.facetPositions = [], MM.facetNormals = [], MM.facetPartitioning = new Array, MM.facetParameters = {}, MM.depthSortedIndices = new Uint32Array(0)), this
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2020-L2021` → after: `L3651-L3652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3651-L3652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3651-L3652) · [Before (L2020-L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2020-L2021)

```diff
-           static credentialFromResult(QQ) {
-             return qX.credentialFromTaggedObject(QQ)
+           updateIndices(MM, rM) {
+             return this
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2023-L2024` → after: `L3654-L3660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3654-L3660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3654-L3660) · [Before (L2023-L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2023-L2024)

```diff
-           static credentialFromError(QQ) {
-             return qX.credentialFromTaggedObject(QQ.customData || {})
+           createNormals(MM) {
+             const rM = this.getVerticesData(aM.j.PositionKind),
+               iM = this.hOM();
+             let OM;
+             return OM = this.isVerticesDataPresent(aM.j.NormalKind) ? this.getVerticesData(aM.j.NormalKind) : [], PM.d.ComputeNormals(rM, iM, OM, {
+               useRightHandedSystem: this.Hk().useRightHandedSystem
+             }), this.setVerticesData(aM.j.NormalKind, OM, MM), this
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2026-L2030` → after: `L3662-L3664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3662-L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3662-L3664) · [Before (L2026-L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2026-L2030)

```diff
-           static credentialFromTaggedObject(QQ) {
-             let {
-               _tokenResponse: WQ
-             } = QQ;
-             if (!WQ) return null;
+           async optimizeIndicesAsync() {
+             const MM = this.hOM();
+             if (!MM) return this;
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2032-L2053` → after: `L3666-L3668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3666-L3668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3666-L3668) · [Before (L2032-L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2032-L2053)

```diff
-               oauthIdToken: XQ,
-               oauthAccessToken: wQ
-             } = WQ;
-             if (!XQ && !wQ) return null;
-             try {
-               return qX.credential(XQ, wQ)
-             } catch (qQ) {
-               return null
-             }
-           }
-         }
-         qX.GOOGLE_SIGN_IN_METHOD = "google.com", qX.PROVIDER_ID = "google.com";
-         class TX extends WX {
-           constructor() {
-             super("github.com")
-           }
- ... (6 more removed lines; see GitHub link above)
+               OptimizeIndices: rM
+             } = await iM.e(660).then((() => iM(45226)));
+             return rM(MM), this.setIndices(MM, this.getTotalVertices()), this
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2055-L2056` → after: `L3670-L3674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3670-L3674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3670-L3674) · [Before (L2055-L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2055-L2056)

```diff
-           static credentialFromResult(QQ) {
-             return TX.credentialFromTaggedObject(QQ)
+           alignWithNormal(MM, rM) {
+             rM || (rM = GM.d.Y);
+             const iM = jM.l.sh[0],
+               OM = jM.l.sh[1];
+             return jM.q.CrossToRef(rM, MM, OM), jM.q.CrossToRef(MM, OM, iM), this.rotationQuaternion ? jM.h.RotationQuaternionFromAxisToRef(iM, MM, OM, this.rotationQuaternion) : jM.q.RotationFromAxisToRef(iM, MM, OM, this.rotation), this
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2058-L2059` → after: `L3676-L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3676-L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3676-L3677) · [Before (L2058-L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2058-L2059)

```diff
-           static credentialFromError(QQ) {
-             return TX.credentialFromTaggedObject(QQ.customData || {})
+           _checkOcclusionQuery() {
+             return !1
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2061-L2063` → after: `L3679-L4043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3679-L4043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3679-L4043) · [Before (L2061-L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2061-L2063)

```diff
-           static credentialFromTaggedObject(QQ) {
-             let {
-               _tokenResponse: WQ
+           disableEdgesRendering() {
+             throw (0, dM.n)("EdgesRenderer")
+           }
+           enableEdgesRendering(MM, rM, iM) {
+             throw (0, dM.n)("EdgesRenderer")
+           }
+           getConnectedParticleSystems() {
+             return this._scene.aG.filter((MM => MM.emitter === this))
+           }
+         }, (() => {
+           const iM = "function" === typeof Symbol && Symbol.metadata ? Object.create(mM[Symbol.metadata] ?? null) : void 0;
+           rM = [eM.k.filter((function() {
+             return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && ! … [truncated]
+           }))], (0, OM.i)(MM, null, rM, {
+             kind: "method",
+             name: "_ApplySkeleton",
+ ... (349 more added lines; see GitHub link above)
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2065-L2094` → after: `L4045-L4161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4045-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L4045-L4161) · [Before (L2065-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2065-L2094)

```diff
-             if (!WQ || !("oauthAccessToken" in WQ)) return null;
-             if (!WQ.oauthAccessToken) return null;
-             try {
-               return TX.credential(WQ.oauthAccessToken)
-             } catch (XQ) {
-               return null
-             }
-           }
-         }
-         TX.GITHUB_SIGN_IN_METHOD = "github.com", TX.PROVIDER_ID = "github.com";
-         class zX extends kW {
-           constructor(QQ, WQ) {
-             super(QQ, QQ), this.pendingToken = WQ
-           }
-           _getIdTokenResponse(QQ) {
-             return YW(QQ, this.buildRequest())
- ... (14 more removed lines; see GitHub link above)
+           SM = SM || jM;
+           let mM = this._totalVertices;
+           if (MM.getIsInstanced()) {
+             let MM;
+             MM = iM instanceof Array ? 4 * iM.length : iM.byteLength, mM = MM / zM
+           }
+           const HM = (0, dM.r)(iM, PM, nM, QM, zM, mM, !0),
+             hM = new aM.j(this._engine, HM, OM, {
+               updatable: jM,
+               useBytes: !1,
+               stride: PM,
+               size: PM,
+               offset: 0,
+               type: nM,
+               normalized: LM,
+               takeBufferOwnership: !0,
+ ... (101 more added lines; see GitHub link above)
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2096-L2113` → after: `L4163-L4170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4163-L4170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L4163-L4170) · [Before (L2096-L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2096-L2113)

```diff
-           }
-           static fromJSON(QQ) {
-             const WQ = "string" === typeof QQ ? JSON.parse(QQ) : QQ,
-               {
-                 providerId: XQ,
-                 signInMethod: wQ,
-                 pendingToken: qQ
-               } = WQ;
-             return XQ && wQ && qQ && XQ === wQ ? new zX(XQ, qQ) : null
-           }
-           static _create(QQ, WQ) {
-             return new zX(QQ, WQ)
-           }
-           buildRequest() {
-             return {
-               requestUri: "http://localhost",
- ... (2 more removed lines; see GitHub link above)
+             rM.setVerticesData(aM.j.MatricesIndicesKind, SM, !1)
+           }
+           if (iM.matricesIndicesExtraAttrDesc && iM.matricesIndicesExtraAttrDesc.count > 0) {
+             const OM = new Int32Array(MM, iM.matricesIndicesExtraAttrDesc.offset, iM.matricesIndicesExtraAttrDesc.count),
+               SM = [];
+             for (let MM = 0; MM < OM.length; MM++) {
+               const rM = OM[MM];
+               SM.push(255 & rM), SM.push((65280 & rM) >> 8), SM.push((16711680 & rM) >> 16), SM.push(rM >> 24 & 255)
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2115-L2144` → after: `L4172-L4191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4172-L4191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L4172-L4191) · [Before (L2115-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2115-L2144)

```diff
-           }
-         }
-         class sX extends QX {
-           constructor(QQ) {
-             HQ(QQ.startsWith("saml."), "argument-error"), super(QQ)
-           }
-           static credentialFromResult(QQ) {
-             return sX.samlCredentialFromTaggedObject(QQ)
-           }
-           static credentialFromError(QQ) {
-             return sX.samlCredentialFromTaggedObject(QQ.customData || {})
-           }
-           static credentialFromJSON(QQ) {
-             const WQ = zX.fromJSON(QQ);
-             return HQ(WQ, "argument-error"), WQ
-           }
- ... (14 more removed lines; see GitHub link above)
+             rM.setVerticesData(aM.j.MatricesIndicesExtraKind, SM, !1)
+           }
+           if (iM.matricesWeightsAttrDesc && iM.matricesWeightsAttrDesc.count > 0) {
+             const OM = new Float32Array(MM, iM.matricesWeightsAttrDesc.offset, iM.matricesWeightsAttrDesc.count);
+             rM.setVerticesData(aM.j.MatricesWeightsKind, OM, !1)
+           }
+           if (iM.indicesAttrDesc && iM.indicesAttrDesc.count > 0) {
+             const OM = new Int32Array(MM, iM.indicesAttrDesc.offset, iM.indicesAttrDesc.count);
+             rM.setIndices(OM, null)
+           }
+           if (iM.subMeshesAttrDesc && iM.subMeshesAttrDesc.count > 0) {
+             const OM = new Int32Array(MM, iM.subMeshesAttrDesc.offset, 5 * iM.subMeshesAttrDesc.count);
+             rM.iG = [];
+             for (let MM = 0; MM < iM.subMeshesAttrDesc.count; MM++) {
+               const iM = OM[5 * MM + 0],
+                 SM = OM[5 * MM + 1],
+ ... (4 more added lines; see GitHub link above)
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2148-L2179` → after: `L4917-L4966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4917-L4966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L4917-L4966) · [Before (L2148-L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2148-L2179)

```diff
-         class FX extends WX {
-           constructor() {
-             super("twitter.com")
-           }
-           static credential(QQ, WQ) {
-             return NW._fromParams({
-               providerId: FX.PROVIDER_ID,
-               signInMethod: FX.TWITTER_SIGN_IN_METHOD,
-               oauthToken: QQ,
-               oauthTokenSecret: WQ
-             })
-           }
-           static credentialFromResult(QQ) {
-             return FX.credentialFromTaggedObject(QQ)
-           }
-           static credentialFromError(QQ) {
- ... (16 more removed lines; see GitHub link above)
+         const rM = this._geometry.getVerticesDataKinds();
+         if (!MM && this._userInstancedBuffersStorage)
+           for (const iM in this._userInstancedBuffersStorage.vertexBuffers) - 1 === rM.indexOf(iM) && rM.push(iM);
+         return rM
+       }
+       getTotalIndices() {
+         return this._geometry ? this._geometry.getTotalIndices() : 0
+       }
+       hOM(MM, rM) {
+         return this._geometry ? this._geometry.hOM(MM, rM) : []
+       }
+       get isBlocked() {
+         return null !== this._masterMesh && void 0 !== this._masterMesh
+       }
+       isReady() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+ ... (34 more added lines; see GitHub link above)
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2183-L2210` → after: `L4970-L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4970-L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L4970-L5239) · [Before (L2183-L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2183-L2210)

```diff
-         async function PX(QQ, WQ) {
-           return SQ(QQ, "POST", "/v1/accounts:signUp", LQ(QQ, WQ))
-         }
-         FX.TWITTER_SIGN_IN_METHOD = "twitter.com", FX.PROVIDER_ID = "twitter.com";
-         class gX {
-           constructor(QQ) {
-             this.user = QQ.user, this.providerId = QQ.providerId, this._tokenResponse = QQ._tokenResponse, this.operationType = QQ.operationType
-           }
-           static async _fromIdTokenResponse(QQ, WQ, XQ) {
-             let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             const qQ = await wW._fromIdTokenResponse(QQ, XQ, wQ),
-               TQ = JX(XQ);
-             return new gX({
-               user: qQ,
-               providerId: TQ,
-               _tokenResponse: XQ,
- ... (12 more removed lines; see GitHub link above)
+         for (const PM of this._internalMeshDataInfo._LODLevels)
+           if (PM.mesh && !PM.mesh.isReady(SM)) return !1;
+         return !0
+       }
+       get areNormalsFrozen() {
+         return this._internalMeshDataInfo._areNormalsFrozen
+       }
+       oh() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !0, this
+       }
+       unfreezeNormals() {
+         return this._internalMeshDataInfo._areNormalsFrozen = !1, this
+       }
+       set overridenInstanceCount(MM) {
+         this._instanceDataStorage.overridenInstanceCount = MM
+       }
+ ... (254 more added lines; see GitHub link above)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2213-L2238` → after: `L5242-L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5242-L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5242-L5289) · [Before (L2213-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2213-L2238)

```diff
- 
-         function JX(QQ) {
-           return QQ.providerId ? QQ.providerId : "phoneNumber" in QQ ? "phone" : null
-         }
-         async function rX(QQ) {
-           var WQ;
-           const XQ = AW(QQ);
-           if (await XQ._initializationPromise, null === (WQ = XQ.currentUser) || void 0 === WQ ? void 0 : WQ.isAnonymous) return new gX({
-             user: XQ.currentUser,
-             providerId: null,
-             operationType: "signIn"
-           });
-           const wQ = await PX(XQ, {
-               returnSecureToken: !0
-             }),
-             qQ = await gX._fromIdTokenResponse(XQ, "signIn", wQ, !0);
- ... (10 more removed lines; see GitHub link above)
+         if (dM) {
+           let MM;
+           if (zM && zM.dispose(), LM && LM.dispose(), zM = new gM.d(OM, nM.instancesData, !0, 16, !1, !0), nM.instancesBuffer = zM, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
+               data: {},
+               vertexBuffers: {},
+               strides: {},
+               sizes: {},
+               vertexArrayObjects: this.ph().getCaps().vertexArrayObject ? {} : void 0
+             }), this._instanceDataStorage.useMonoDataStorageRenderPass) MM = this._userInstancedBuffersStorage.vertexBuffers;
+           else {
+             this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
+             const rM = this._instanceDataStorage.engine.currentRenderPassId;
+             MM = this._userInstancedBuffersStorage.renderPasses[rM], MM || (this._userInstancedBuffersStorage.renderPasses[rM] = MM = {})
+           }
+           MM.world0 = zM.createVertexBuffer("world0", 0, 4), MM.world1 = zM.createVertexBuffer("world1", 4, 4), MM.world2 = zM.createVertexBuffer("world2", 8, 4), MM.world3 = zM.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (LM = new gM.d(OM, nM.i … [truncated]
+         } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (zM.updateDirectly(nM.instancesData, 0, HM), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate  … [truncated]
+ ... (32 more added lines; see GitHub link above)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2241-L2250` → after: `L5292-L5390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5292-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5292-L5390) · [Before (L2241-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2241-L2250)

```diff
-           static _fromErrorAndOperation(QQ, WQ, XQ, wQ) {
-             return new IX(QQ, WQ, XQ, wQ)
-           }
-         }
- 
-         function jX(QQ, WQ, XQ, wQ) {
-           return ("reauthenticate" === WQ ? XQ._getReauthenticationResolver(QQ) : XQ._getIdTokenResponse(QQ)).catch((XQ => {
-             if ("auth/multi-factor-auth-required" === XQ.code) throw IX._fromErrorAndOperation(QQ, XQ, WQ, wQ);
-             throw XQ
-           }))
+           nM._activeIndices.addCount(rM.indexCount * iM, !1)
+         }
+         return this
+       }
+       _disposeInstanceDataStorageRenderPass(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         MM?.instancesBuffer && (rM && MM.instancesBuffer.dispose(), MM.instancesBuffer = null), MM?.instancesPreviousBuffer && (rM && MM.instancesPreviousBuffer.dispose(), MM.instancesPreviousBuffer = null)
+       }
+       _rebuild() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const rM in this._instanceDataStorage.renderPasses) {
+           const iM = this._instanceDataStorage.renderPasses[rM];
+           this._disposeInstanceDataStorageRenderPass(iM, MM)
+         }
+         if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, MM), this._userInstancedBuffersStorage) {
+           for (const rM in this._userInstancedBuffersStorage.vertexBuffers) {
+ ... (83 more added lines; see GitHub link above)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2252-L2288` → after: `L5392-L5548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5392-L5548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5392-L5548) · [Before (L2252-L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2252-L2288)

```diff
- 
-         function BX(QQ) {
-           return new Set(QQ.map((QQ => {
-             let {
-               providerId: WQ
-             } = QQ;
-             return WQ
-           })).filter((QQ => !!QQ)))
-         }
-         async function yX(QQ, WQ) {
-           const XQ = (0, wQ.L)(QQ);
-           await DX(!0, XQ, WQ);
-           const {
-             providerUserInfo: qQ
-           } = await async function(QQ, WQ) {
-             return kQ(QQ, "POST", "/v1/accounts:update", WQ)
- ... (21 more removed lines; see GitHub link above)
+         let JM;
+         JM = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? MM._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
+         const dM = JM?.effect ?? null;
+         for (let eM = 0, bM = OM._beforeRenderingMeshStage; eM < bM.length; eM++) {
+           bM[eM].action(this, MM, nM, dM)
+         }
+         if (!JM || !dM) return zM && (zM.maxZ = QM, OM.updateTransformMatrix(!0)), this;
+         const yM = iM || this;
+         let lM;
+         if (!HM.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
+           const MM = yM._getWorldMatrixDeterminant();
+           lM = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), MM < 0 && (lM = lM === sM.c.ClockWiseSideOrientation ? sM.c.CounterClockWiseSideOrientation : sM.c.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = lM
+         }
+         const EM = this._internalMeshDataInfo._effectiveMaterial._preBind(JM, this._internalMeshDataInfo._effectiveSideOrientation);
+         this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && SM.setDepthWrite(!0);
+         const UM = this._internalMeshDataInfo._effectiveMaterial,
+ ... (141 more added lines; see GitHub link above)
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2290-L2297` → after: `L5550-L5553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5550-L5553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5550-L5553) · [Before (L2290-L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2290-L2297)

```diff
-             const TQ = await OQ(QQ, jX(wQ, qQ, WQ, QQ), XQ);
-             HQ(TQ.idToken, wQ, "internal-error");
-             const zQ = ZQ(TQ.idToken);
-             HQ(zQ, wQ, "internal-error");
-             const {
-               sub: sQ
-             } = zQ;
-             return HQ(QQ.uid === sQ, wQ, "user-mismatch"), gX._forOperation(QQ, qQ, TQ)
+             const iM = await MM._loadDelayedFileAsync(this.delayLoadingFile, rM, !0);
+             iM instanceof ArrayBuffer ? this._delayLoadingFunction(iM, this) : this._delayLoadingFunction(JSON.parse(iM), this);
+             for (const MM of this.instances) MM.refreshBoundingInfo(), MM._syncSubMeshes();
+             this.delayLoadState = 1, MM.removePendingData(this)
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2299-L2374` → after: `L5555-L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5555-L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5555-L5626) · [Before (L2299-L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2299-L2374)

```diff
-             throw "auth/user-not-found" === (null === TQ || void 0 === TQ ? void 0 : TQ.code) && GQ(wQ, "user-mismatch"), TQ
-           }
-         }
-         async function GX(QQ, WQ) {
-           let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-           const wQ = "signIn",
-             qQ = await jX(QQ, wQ, WQ),
-             TQ = await gX._fromIdTokenResponse(QQ, wQ, qQ);
-           return XQ || await QQ._updateCurrentUser(TQ.user), TQ
-         }
-         async function UX(QQ, WQ) {
-           return GX(AW(QQ), WQ)
-         }
-         async function bX(QQ, WQ) {
-           const XQ = (0, wQ.L)(QQ);
-           return await DX(!1, XQ, WQ.providerId), VX(XQ, WQ)
- ... (60 more removed lines; see GitHub link above)
+             MM.removePendingData(this), MM.xG || fM.e.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${iM}`)
+           }
+         })(), this
+       }
+       isInFrustum(MM) {
+         return 2 !== this.delayLoadState && (!!super.isInFrustum(MM) && (this._checkDelayState(), !0))
+       }
+       setMaterialById(MM) {
+         const rM = this.Hk().materials;
+         let iM;
+         for (iM = rM.length - 1; iM > -1; iM--)
+           if (rM[iM].id === MM) return this.material = rM[iM], this;
+         const OM = this.Hk().multiMaterials;
+         for (iM = OM.length - 1; iM > -1; iM--)
+           if (OM[iM].id === MM) return this.material = OM[iM], this;
+         return this
+ ... (56 more added lines; see GitHub link above)
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2376-L2432` → after: `L5628-L5749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5628-L5749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5628-L5749) · [Before (L2376-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2376-L2432)

```diff
-           }))
-         }
-         async function cX(QQ, WQ, XQ) {
-           await fW((0, wQ.L)(QQ), {
-             oobCode: WQ,
-             newPassword: XQ
-           })
-         }
-         async function AX(QQ, WQ) {
-           await async function(QQ, WQ) {
-             return kQ(QQ, "POST", "/v1/accounts:update", LQ(QQ, WQ))
-           }((0, wQ.L)(QQ), {
-             oobCode: WQ
-           })
-         }
-         async function RX(QQ, WQ) {
- ... (41 more removed lines; see GitHub link above)
+           iM._source && iM._source._internalMeshDataInfo.meshMap && (iM._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
+         } else {
+           const MM = this.Hk().meshes;
+           for (const rM of MM) {
+             const MM = rM;
+             MM._internalMeshDataInfo && MM._internalMeshDataInfo._source && MM._internalMeshDataInfo._source === this && (MM._internalMeshDataInfo._source = null)
+           }
+         }
+         iM._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(MM, rM)
+       }
+       _disposeInstanceSpecificData() {}
+       _disposeThinInstanceSpecificData() {}
+       _invalidateInstanceVertexArrayObject() {}
+       applyDisplacementMap(MM, rM, iM, OM, SM, jM) {
+         let aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           PM = arguments.length > 7 ? arguments[7] : void 0;
+ ... (106 more added lines; see GitHub link above)
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2434-L2473` → after: `L5751-L5788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5751-L5788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5751-L5788) · [Before (L2434-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2434-L2473)

```diff
-           if (null === (wQ = qQ._getRecaptchaConfig()) || void 0 === wQ ? void 0 : wQ.emailPasswordEnabled) {
-             const QQ = await hW(qQ, TQ, "signUpPassword");
-             zQ = PX(qQ, QQ)
-           } else zQ = PX(qQ, TQ).catch((async QQ => {
-             if ("auth/missing-recaptcha-token" === QQ.code) {
-               console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
-               const QQ = await hW(qQ, TQ, "signUpPassword");
-               return PX(qQ, QQ)
-             }
-             return Promise.reject(QQ)
-           }));
-           const sQ = await zQ.catch((QQ => Promise.reject(QQ))),
-             FQ = await gX._fromIdTokenResponse(qQ, "signIn", sQ);
-           return await qQ._updateCurrentUser(FQ.user), FQ
-         }
- 
- ... (24 more removed lines; see GitHub link above)
+           for (iM = 0; iM < rM.indices.length; iM += 3) MM = rM.indices[iM + 1], rM.indices[iM + 1] = rM.indices[iM + 2], rM.indices[iM + 2] = MM;
+           this.setIndices(rM.indices, null, this.isVertexBufferUpdatable(gM.j.PositionKind), !0)
+         }
+         return this
+       }
+       increaseVertices() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         const rM = uM.d.ExtractFromMesh(this),
+           iM = rM.indices && !Array.isArray(rM.indices) && Array.from ? Array.from(rM.indices) : rM.indices,
+           OM = rM.positions && !Array.isArray(rM.positions) && Array.from ? Array.from(rM.positions) : rM.positions,
+           SM = rM.uvs && !Array.isArray(rM.uvs) && Array.from ? Array.from(rM.uvs) : rM.uvs,
+           jM = rM.normals && !Array.isArray(rM.normals) && Array.from ? Array.from(rM.normals) : rM.normals;
+         if (iM && OM) {
+           rM.indices = iM, rM.positions = OM, SM && (rM.uvs = SM), jM && (rM.normals = jM);
+           const aM = MM + 1,
+             PM = [];
+ ... (22 more added lines; see GitHub link above)
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2475-L2621` → after: `L5790-L5794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5790-L5794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5790-L5794) · [Before (L2475-L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2475-L2621)

```diff
-           }))
-         }
- 
-         function kX(QQ, WQ) {
-           const XQ = KW.parseLink(WQ);
-           return "EMAIL_SIGNIN" === (null === XQ || void 0 === XQ ? void 0 : XQ.operation)
-         }
-         async function fX(QQ, WQ, XQ) {
-           const qQ = (0, wQ.L)(QQ),
-             TQ = MW.credentialWithLink(WQ, XQ || hQ());
-           return HQ(TQ._tenantId === (qQ.tenantId || null), qQ, "tenant-id-mismatch"), UX(qQ, TQ)
-         }
-         async function SX(QQ, WQ) {
-           const XQ = {
-               identifier: WQ,
-               continueUri: iQ() ? hQ() : "http://localhost"
- ... (131 more removed lines; see GitHub link above)
+             PM[aM] = JM[iM[MM + 1]][iM[MM + 2]], HM.push(PM[0][0], PM[1][0], PM[1][1]);
+             for (let MM = 1; MM < aM; MM++) {
+               let rM;
+               for (rM = 0; rM < MM; rM++) HM.push(PM[MM][rM], PM[MM + 1][rM], PM[MM + 1][rM + 1]), HM.push(PM[MM][rM], PM[MM + 1][rM + 1], PM[MM][rM + 1]);
+               HM.push(PM[MM][rM], PM[MM + 1][rM], PM[MM + 1][rM + 1])
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2686-L2691` → after: `L5797-L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5797-L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5797-L5827) · [Before (L2686-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2686-L2691)

```diff
-           toJSON() {
-             const QQ = "enroll" === this.type ? "idToken" : "pendingCredential";
-             return {
-               multiFactorSession: {
-                 [QQ]: this.credential
-               }
+           rM.indices = HM, rM.applyToMesh(this, this.isVertexBufferUpdatable(gM.j.PositionKind))
+         } else fM.e.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
+       }
+       forceSharedVertices() {
+         const MM = uM.d.ExtractFromMesh(this),
+           rM = MM.uvs,
+           iM = MM.indices,
+           OM = MM.positions,
+           SM = MM.colors,
+           jM = MM.matricesIndices,
+           aM = MM.matricesWeights,
+           PM = MM.matricesIndicesExtra,
+           nM = MM.matricesWeightsExtra;
+         if (void 0 === iM || void 0 === OM || null === iM || null === OM) fM.e.Warn("VertexData contains empty entries");
+         else {
+           const QM = [],
+ ... (15 more added lines; see GitHub link above)
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2694-L2698` → after: `L5850-L5884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5850-L5884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5850-L5884) · [Before (L2694-L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2694-L2698)

```diff
-           static fromJSON(QQ) {
-             var WQ, XQ;
-             if (null === QQ || void 0 === QQ ? void 0 : QQ.multiFactorSession) {
-               if (null === (WQ = QQ.multiFactorSession) || void 0 === WQ ? void 0 : WQ.pendingCredential) return gw._fromMfaPendingCredential(QQ.multiFactorSession.pendingCredential);
-               if (null === (XQ = QQ.multiFactorSession) || void 0 === XQ ? void 0 : XQ.idToken) return gw._fromIdtoken(QQ.multiFactorSession.idToken)
+           const CM = [];
+           uM.d.ComputeNormals(QM, zM, CM), MM.positions = QM, MM.indices = zM, MM.normals = CM, null !== rM && void 0 !== rM && (MM.uvs = LM), null !== SM && void 0 !== SM && (MM.colors = mM), null !== jM && void 0 !== jM && (MM.matricesIndices = HM), null !== aM && void 0 !== aM … [truncated]
+         }
+       }
+       static _instancedMeshFactory(MM, rM) {
+         throw (0, NM.n)("InstancedMesh")
+       }
+       static _PhysicsImpostorParser(MM, rM, iM) {
+         throw (0, NM.n)("PhysicsImpostor")
+       }
+       createInstance(MM) {
+         const rM = TM._instancedMeshFactory(MM, this);
+         return rM.parent = this.parent, rM
+       }
+       synchronizeInstances() {
+         for (let MM = 0; MM < this.instances.length; MM++) {
+ ... (19 more added lines; see GitHub link above)
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2731-L2733` → after: `L5887-L5907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5887-L5907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5887-L5907) · [Before (L2731-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2731-L2733)

```diff
-           async resolveSignIn(QQ) {
-             const WQ = QQ;
-             return this.signInResolver(WQ)
+         }), (() => {
+           for (let MM = 0; MM < rM.length; ++MM) rM[MM] = SM[rM[MM]] || rM[MM];
+           const iM = this.iG.slice(0);
+           this.setIndices(rM), this.iG = iM, MM && MM(this)
+         })), this
+       }
+       serialize() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         MM.name = this.name, MM.id = this.id, MM.uniqueId = this.uniqueId, MM.type = this.getClassName(), GM.d && GM.d.HasTags(this) && (MM.tags = GM.d.GetTags(this)), MM.position = this.position.HOM(), this.rotationQuaternion ? MM.rotationQuaternion = this.rotationQuaternion.HOM … [truncated]
+         const rM = this._geometry;
+         if (rM && this.iG) {
+           MM.geometryUniqueId = rM.uniqueId, MM.geometryId = rM.id, MM.iG = [];
+           for (let rM = 0; rM < this.iG.length; rM++) {
+             const iM = this.iG[rM];
+             MM.iG.push({
+               materialIndex: iM.materialIndex,
+ ... (5 more added lines; see GitHub link above)
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2736-L2741` → after: `L5910-L5912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5910-L5912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5910-L5912) · [Before (L2736-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2736-L2741)

```diff
- 
-         function rw(QQ, WQ) {
-           var XQ;
-           const qQ = (0, wQ.L)(QQ),
-             TQ = WQ;
-           return HQ(WQ.customData.operationType, qQ, "argument-error"), HQ(null === (XQ = TQ.customData._serverResponse) || void 0 === XQ ? void 0 : XQ.mfaPendingCredential, qQ, "argument-error"), Jw._fromError(qQ, TQ)
+         if (this.material ? this.material.doNotSerialize || (MM.materialUniqueId = this.material.uniqueId, MM.materialId = this.material.id) : (this.material = null, MM.materialUniqueId = this._scene.defaultMaterial.uniqueId, MM.materialId = this._scene.defaultMaterial.id), this. … [truncated]
+           const rM = this.getPhysicsImpostor?.();
+           rM && (MM.physicsMass = rM.getParam("vz"), MM.physicsFriction = rM.getParam("friction"), MM.physicsRestitution = rM.getParam("vz"), MM.physicsImpostor = rM.type)
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2743-L2822` → after: `L5914-L6000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R5914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L5914-L6000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L5914-L6000) · [Before (L2743-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2743-L2822)

```diff
-         class Iw {
-           constructor(QQ) {
-             this.user = QQ, this.enrolledFactors = [], QQ._onReload((WQ => {
-               WQ.mfaInfo && (this.enrolledFactors = WQ.mfaInfo.map((WQ => HX._fromServerResponse(QQ.auth, WQ))))
-             }))
-           }
-           static _fromUser(QQ) {
-             return new Iw(QQ)
-           }
-           async getSession() {
-             return gw._fromIdtoken(await this.user.getIdToken(), this.user.auth)
-           }
-           async enroll(QQ, WQ) {
-             const XQ = QQ,
-               wQ = await this.getSession(),
-               qQ = await OQ(this.user, XQ._process(this.user.auth, wQ, WQ));
- ... (64 more removed lines; see GitHub link above)
+         this.metadata && (MM.metadata = this.metadata), 0 !== this.meshBlendingTag && (MM.meshBlendingTag = this.meshBlendingTag), MM.instances = [];
+         for (let iM = 0; iM < this.instances.length; iM++) {
+           const rM = this.instances[iM];
+           if (rM.doNotSerialize) continue;
+           const OM = {
+             name: rM.name,
+             id: rM.id,
+             isEnabled: rM.isEnabled(!1),
+             isVisible: rM.isVisible,
+             AJ: rM.AJ,
+             checkCollisions: rM.checkCollisions,
+             position: rM.position.HOM(),
+             UL: rM.UL.HOM()
+           };
+           if (rM.parent && rM.parent._serializeAsParent(OM), rM.rotationQuaternion ? OM.rotationQuaternion = rM.rotationQuaternion.HOM() : rM.rotation && (OM.rotation = rM.rotation.HOM()), this.Hk()._getComponent(AM.e.NAME_PHYSICSENGINE)) {
+             const MM = rM.getPhysicsImpostor?.();
+ ... (71 more added lines; see GitHub link above)
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2824-L2830` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6002) · [Before (L2824-L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2824-L2830)

```diff
-             }(), this.fallbackToPolling = pW(), this._shouldAllowMigration = !0
-           }
-           forAllChangedKeys(QQ) {
-             for (const WQ of Object.keys(this.listeners)) {
-               const XQ = this.storage.getItem(WQ),
-                 wQ = this.localCache[WQ];
-               XQ !== wQ && QQ(WQ, wQ, XQ)
+               tM.d.ParseAnimationRanges(SM, iM, rM), iM.autoAnimate && rM.beginAnimation(SM, iM.autoAnimateFrom, iM.autoAnimateTo, iM.autoAnimateLoop, iM.autoAnimateSpeed || 1)
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2833-L2853` → after: `L6005-L6132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6005-L6132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6005-L6132) · [Before (L2833-L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2833-L2853)

```diff
-           onStorageEvent(QQ) {
-             let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (!QQ.key) return void this.forAllChangedKeys(((QQ, WQ, XQ) => {
-               this.notifyListeners(QQ, XQ)
-             }));
-             const XQ = QQ.key;
-             if (WQ ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
-               const wQ = this.storage.getItem(XQ);
-               if (QQ.newValue !== wQ) null !== QQ.newValue ? this.storage.setItem(XQ, QQ.newValue) : this.storage.removeItem(XQ);
-               else if (this.localCache[XQ] === QQ.newValue && !WQ) return
-             }
-             const qQ = () => {
-                 const QQ = this.storage.getItem(XQ);
-                 (WQ || this.localCache[XQ] !== QQ) && this.notifyListeners(XQ, QQ)
-               },
-               TQ = this.storage.getItem(XQ);
- ... (5 more removed lines; see GitHub link above)
+         if (MM.thinInstances) {
+           const rM = MM.thinInstances;
+           if (OM.krM = !!rM.enablePicking, rM.matrixData ? (OM.v_("matrix", new Float32Array(rM.matrixData), 16, !1), OM._thinInstanceDataStorage.matrixBufferSize = rM.matrixBufferSize, OM._thinInstanceDataStorage.instancesCount = rM.instancesCount) : OM._thinInstanceDataStorage. … [truncated]
+             const rM = MM.thinInstances.userThinInstance;
+             for (const MM in rM.data) OM.v_(MM, new Float32Array(rM.data[MM]), rM.strides[MM], !1), OM._userThinInstanceBuffersStorage.sizes[MM] = rM.sizes[MM]
+           }
+         }
+         return OM
+       }
+       setPositionsForCPUSkinning() {
+         const MM = this._internalMeshDataInfo;
+         if (!MM._sourcePositions) {
+           const rM = this.getVerticesData(gM.j.PositionKind);
+           if (!rM) return MM._sourcePositions;
+           MM._sourcePositions = new Float32Array(rM), this.isVertexBufferUpdatable(gM.j.PositionKind) || this.setVerticesData(gM.j.PositionKind, rM, !0)
+         }
+ ... (112 more added lines; see GitHub link above)
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2855-L2945` → after: `L6134-L6147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6134-L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6134-L6147) · [Before (L2855-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2855-L2945)

```diff
-               for (const wQ of Array.from(XQ)) wQ(WQ ? JSON.parse(WQ) : WQ)
-           }
-           startPolling() {
-             this.stopPolling(), this.pollTimer = setInterval((() => {
-               this.forAllChangedKeys(((QQ, WQ, XQ) => {
-                 this.onStorageEvent(new StorageEvent("storage", {
-                   key: QQ,
-                   oldValue: WQ,
-                   newValue: XQ
-                 }), !0)
-               }))
-             }), 1e3)
-           }
-           stopPolling() {
-             this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
-           }
- ... (75 more removed lines; see GitHub link above)
+               if (iM.material) {
+                 const rM = iM.material;
+                 if (rM instanceof kM.e) {
+                   for (let MM = 0; MM < rM.B_.length; MM++) QM.indexOf(rM.B_[MM]) < 0 && QM.push(rM.B_[MM]);
+                   for (let OM = 0; OM < iM.iG.length; OM++) zM.push(QM.indexOf(rM.B_[iM.iG[OM].materialIndex])), LM.push({
+                     start: MM + iM.iG[OM].indexStart,
+                     count: iM.iG[OM].indexCount
+                   })
+                 } else {
+                   QM.indexOf(rM) < 0 && QM.push(rM);
+                   for (let OM = 0; OM < iM.iG.length; OM++) zM.push(QM.indexOf(rM)), LM.push({
+                     start: MM + iM.iG[OM].indexStart,
+                     count: iM.iG[OM].indexCount
+                   })
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2947-L2953` → after: `L6149-L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6149-L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6149-L6156) · [Before (L2947-L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2947-L2953)

```diff
-               })))
-             }(zQ);
-             WQ.ports[0].postMessage({
-               status: "done",
-               eventId: XQ,
-               eventType: wQ,
-               response: sQ
+               } else
+                 for (let rM = 0; rM < iM.iG.length; rM++) zM.push(0), LM.push({
+                   start: MM + iM.iG[rM].indexStart,
+                   count: iM.iG[rM].indexCount
+                 });
+             else LM.push({
+               start: MM,
+               count: iM.getTotalIndices()
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L2963-L3014` → after: `L6160-L6165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6160-L6165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6160-L6165) · [Before (L2963-L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L2963-L3014)

```diff
- 
-         function vw() {
-           let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
-             WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
-             XQ = "";
-           for (let wQ = 0; wQ < WQ; wQ++) XQ += Math.floor(10 * Math.random());
-           return QQ + XQ
-         }
-         bw.receivers = [];
-         class dw {
-           constructor(QQ) {
-             this.target = QQ, this.handlers = new Set
-           }
-           removeMessageHandler(QQ) {
-             QQ.messageChannel && (QQ.messageChannel.port1.removeEventListener("message", QQ.KV), QQ.messageChannel.port1.close()), this.handlers.delete(QQ)
-           }
- ... (36 more removed lines; see GitHub link above)
+         if (aM && LM.length > 1) {
+           let MM = 0;
+           for (let rM = 1; rM < LM.length; rM++) {
+             const iM = LM[MM],
+               OM = LM[rM];
+             zM[rM] === zM[MM] && iM.start + iM.count === OM.start ? iM.count += OM.count : (MM++, LM[MM] = OM, zM[MM] = zM[rM])
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3018-L3039` → after: `L6326-L6394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6326-L6394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6326-L6394) · [Before (L3018-L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3018-L3039)

```diff
-         function Hw() {
-           return window
-         }
- 
-         function aw() {
-           return "undefined" !== typeof Hw().WorkerGlobalScope && "function" === typeof Hw().importScripts
-         }
-         const lw = "firebaseLocalStorageDb",
-           hw = "firebaseLocalStorage",
-           iw = "fbase_key";
-         class Aw {
-           constructor(QQ) {
-             this.request = QQ
-           }
-           toPromise() {
-             return new Promise(((QQ, WQ) => {
- ... (6 more removed lines; see GitHub link above)
+     function cM() {
+       VM || (VM = !0, (0, YM.e)("BABYLON.Mesh", TM))
+     }(OM = TM.prototype).sZ ?? (OM.sZ = (0, NM.j)("Mesh", "sZ")), (SM = TM.prototype).simplify ?? (SM.simplify = (0, NM.j)("Mesh", "simplify")), (jM = TM.prototype).thinInstanceAdd ?? (jM.thinInstanceAdd = (0, NM.j)("Mesh", "thinInstanceAdd")), (aM = TM.prototype).thinInstanceAdd … [truncated]
+   },
+   41508: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => hM
+     });
+     var OM = iM(41099),
+       SM = iM(38040),
+       jM = iM(41250),
+       aM = iM(40990),
+       PM = iM(38173),
+       nM = iM(39711),
+       QM = iM(41105),
+       zM = iM(41506),
+ ... (53 more added lines; see GitHub link above)
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3042-L3044` → after: `L6397-L6398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6397-L6398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6397-L6398) · [Before (L3042-L3044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3042-L3044)

```diff
- 
-         function Rw(QQ, WQ) {
-           return QQ.transaction([hw], WQ ? "readwrite" : "readonly").objectStore(hw)
+         applyToMesh(MM, rM) {
+           return this._applyTo(MM, rM, !1), this
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3046-L3069` → after: `L6400-L6401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6400-L6401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6400-L6401) · [Before (L3046-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3046-L3069)

```diff
- 
-         function Ew() {
-           const QQ = indexedDB.open(lw, 1);
-           return new Promise(((WQ, XQ) => {
-             QQ.addEventListener("error", (() => {
-               XQ(QQ.error)
-             })), QQ.addEventListener("upgradeneeded", (() => {
-               const WQ = QQ.result;
-               try {
-                 WQ.createObjectStore(hw, {
-                   keyPath: iw
-                 })
-               } catch (wQ) {
-                 XQ(wQ)
-               }
-             })), QQ.addEventListener("success", (async () => {
- ... (8 more removed lines; see GitHub link above)
+         applyToGeometry(MM, rM) {
+           return this._applyTo(MM, rM, !1), this
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3071-L3081` → after: `L6403-L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6403-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6403-L6404) · [Before (L3071-L3081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3071-L3081)

```diff
-         async function Cw(QQ, WQ, XQ) {
-           const wQ = Rw(QQ, !0).put({
-             [iw]: WQ,
-             value: XQ
-           });
-           return new Aw(wQ).toPromise()
-         }
- 
-         function uw(QQ, WQ) {
-           const XQ = Rw(QQ, !0).delete(WQ);
-           return new Aw(XQ).toPromise()
+         updateMesh(MM) {
+           return this._update(MM), this
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3083-L3138` → after: `L6406-L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6406-L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6406-L6413) · [Before (L3083-L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3083-L3138)

```diff
-         class Lw {
-           constructor() {
-             this.type = "LOCAL", this._shouldAllowMigration = !0, this.listeners = {}, this.localCache = {}, this.pollTimer = null, this.pendingWrites = 0, this.receiver = null, this.sender = null, this.serviceWorkerReceiverAvailable = !1, this.activeServiceWorker = null, this._w … [truncated]
-           }
-           async _openDb() {
-             return this.db || (this.db = await Ew()), this.db
-           }
-           async _withRetries(QQ) {
-             let WQ = 0;
-             for (;;) try {
-               const WQ = await this._openDb();
-               return await QQ(WQ)
-             } catch (XQ) {
-               if (WQ++ > 3) throw XQ;
-               this.db && (this.db.close(), this.db = void 0)
-             }
- ... (40 more removed lines; see GitHub link above)
+         updateGeometry(MM) {
+           return this._update(MM), this
+         }* _applyToCoroutine(MM) {
+           let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             iM = arguments.length > 2 ? arguments[2] : void 0;
+           if (this.positions && (MM.setVerticesData(jM.j.PositionKind, this.positions, rM), iM && (yield)), this.normals && (MM.setVerticesData(jM.j.NormalKind, this.normals, rM), iM && (yield)), this.tangents && (MM.setVerticesData(jM.j.TangentKind, this.tangents, rM), iM && (yi … [truncated]
+             const OM = this.positions && this.colors.length === this.positions.length ? 3 : 4;
+             MM.setVerticesData(jM.j.ColorKind, this.colors, rM, OM), this.hasVertexAlpha && void 0 !== MM.hasVertexAlpha && (MM.hasVertexAlpha = !0), iM && (yield)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3140-L3145` → after: `L6415-L6465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6415-L6465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6415-L6465) · [Before (L3140-L3145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3140-L3145)

```diff
-           async _withPendingWrite(QQ) {
-             this.pendingWrites++;
-             try {
-               await QQ()
-             } finally {
-               this.pendingWrites--
+           if (this.matricesIndices && (MM.setVerticesData(jM.j.MatricesIndicesKind, this.matricesIndices, rM), iM && (yield)), this.matricesWeights && (MM.setVerticesData(jM.j.MatricesWeightsKind, this.matricesWeights, rM), iM && (yield)), this.matricesIndicesExtra && (MM.setVert … [truncated]
+             const rM = MM;
+             rM.iG = [];
+             for (const MM of this.materialInfos) new mM.e(MM.materialIndex, MM.verticesStart, MM.verticesCount, MM.indexStart, MM.indexCount, rM)
+           }
+           return this
+         }
+         _update(MM, rM, iM) {
+           return this.positions && MM.updateVerticesData(jM.j.PositionKind, this.positions, rM, iM), this.normals && MM.updateVerticesData(jM.j.NormalKind, this.normals, rM, iM), this.tangents && MM.updateVerticesData(jM.j.TangentKind, this.tangents, rM, iM), this.uvs && MM.updat … [truncated]
+         }
+         static _TransformVector3Coordinates(MM, rM) {
+           let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+             OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.length;
+           const jM = SM.l.sh[0],
+             aM = SM.l.sh[1];
+           for (let PM = iM; PM < iM + OM; PM += 3) SM.q.FromArrayToRef(MM, PM, jM), SM.q.TransformCoordinatesToRef(jM, rM, aM), MM[PM] = aM.x, MM[PM + 1] = aM.y, MM[PM + 2] = aM.z
+ ... (35 more added lines; see GitHub link above)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3148-L3165` → after: `L6470-L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6470-L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6470-L6517) · [Before (L3148-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3148-L3165)

```diff
-           async _set(QQ, WQ) {
-             return this._withPendingWrite((async () => (await this._withRetries((XQ => Cw(XQ, QQ, WQ))), this.localCache[QQ] = WQ, this.notifyServiceWorker(QQ))))
-           }
-           async _get(QQ) {
-             const WQ = await this._withRetries((WQ => async function(QQ, WQ) {
-               const XQ = Rw(QQ, !1).get(WQ),
-                 wQ = await new Aw(XQ).toPromise();
-               return void 0 === wQ ? null : wQ.value
-             }(WQ, QQ)));
-             return this.localCache[QQ] = WQ, WQ
-           }
-           async _remove(QQ) {
-             return this._withPendingWrite((async () => (await this._withRetries((WQ => uw(WQ, QQ))), delete this.localCache[QQ], this.notifyServiceWorker(QQ))))
-           }
-           async _poll() {
-             const QQ = await this._withRetries((QQ => {
- ... (2 more removed lines; see GitHub link above)
+           return rM
+         }
+         merge(MM) {
+           let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+             OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+             SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+           const jM = Array.isArray(MM) ? MM.map((MM => ({
+             vertexData: MM
+           }))) : [{
+             vertexData: MM
+           }];
+           return (0, zM.n)(this._mergeCoroutine(void 0, jM, rM, !1, iM, OM, SM))
+         }* _mergeCoroutine(rM, iM) {
+           let OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+             SM = arguments.length > 3 ? arguments[3] : void 0,
+ ... (32 more added lines; see GitHub link above)
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3167-L3170` → after: `L6519-L6543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6519-L6543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6519-L6543) · [Before (L3167-L3170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3167-L3170)

```diff
-             if (!QQ) return [];
-             if (0 !== this.pendingWrites) return [];
-             const WQ = [],
-               XQ = new Set;
+             for (const rM of PM) {
+               const iM = rM.vertexData;
+               if (MM = iM.materialInfos ? iM.materialInfos[0].materialIndex : 0, aM && aM.materialIndex === MM) aM.indexCount += iM.indices.length, aM.verticesCount += iM.positions.length / 3;
+               else {
+                 const rM = new HM;
+                 rM.materialIndex = MM, rM.indexStart = OM, rM.indexCount = iM.indices.length, rM.verticesStart = SM, rM.verticesCount = iM.positions.length / 3, jM.push(rM), aM = rM
+               }
+               OM += iM.indices.length, SM += iM.positions.length / 3
+             }
+             const nM = PM.splice(0, 1)[0];
+             zM = nM.vertexData, rM = nM.transform, QM = PM.map((MM => MM.vertexData)), iM = PM, this.materialInfos = jM
+           }
+           const LM = QM.reduce(((MM, rM) => MM + (rM.indices?.length ?? 0)), zM.indices?.length ?? 0);
+           let mM = aM || QM.some((MM => MM.indices === zM.indices)) ? zM.indices?.slice() : zM.indices;
+           if (LM > 0) {
+             let jM = mM?.length ?? 0;
+ ... (9 more added lines; see GitHub link above)
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3172-L3173` → after: `L6545-L6551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6545-L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6545-L6551) · [Before (L3172-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3172-L3173)

```diff
-                 fbase_key: wQ,
-                 value: qQ
+                 vertexData: rM,
+                 transform: OM
+               }
+               of iM)
+               if (rM.indices) {
+                 for (let MM = 0; MM < rM.indices.length; MM++) mM[jM + MM] = rM.indices[MM] + aM;
+                 OM && OM.determinant() < 0 && MM._FlipFaces(mM, jM, rM.indices.length), aM += rM.positions.length / 3, jM += rM.indices.length, SM && (yield)
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3219-L3222` → after: `L6554-L6577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6554-L6577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6554-L6577) · [Before (L3219-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3219-L3222)

```diff
-           async execute(QQ) {
-             var WQ;
-             const XQ = QQ || fw;
-             return null === (WQ = this._widgets.get(XQ)) || void 0 === WQ || WQ.execute(), ""
+           return this.indices = mM, this.positions = MM._MergeElement(jM.j.PositionKind, zM.positions, rM, iM.map((MM => [MM.vertexData.positions, MM.transform]))), SM && (yield), zM.normals && (this.normals = MM._MergeElement(jM.j.NormalKind, zM.normals, rM, iM.map((MM => [MM.ve … [truncated]
+         }
+         static _MergeElement(rM, iM, OM, SM) {
+           const aM = SM.filter((MM => null !== MM[0] && void 0 !== MM[0]));
+           if (!iM && 0 == aM.length) return iM;
+           if (!iM) return this._MergeElement(rM, aM[0][0], aM[0][1], aM.slice(1));
+           const PM = aM.reduce(((MM, rM) => MM + rM[0].length), iM.length),
+             nM = rM === jM.j.PositionKind ? MM._TransformVector3Coordinates : rM === jM.j.NormalKind ? MM._TransformVector3Normals : rM === jM.j.TangentKind ? MM._TransformVector4Normals : () => {};
+           if (iM instanceof Float32Array) {
+             const MM = new Float32Array(PM);
+             MM.set(iM), OM && nM(MM, OM, 0, iM.length);
+             let rM = iM.length;
+             for (const [iM, OM] of aM) MM.set(iM, rM), OM && nM(MM, OM, rM, iM.length), rM += iM.length;
+             return MM
+           } {
+             const MM = new Array(PM);
+ ... (8 more added lines; see GitHub link above)
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3225-L3228` → after: `L6580-L6590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6580-L6590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6580-L6590) · [Before (L3225-L3228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3225-L3228)

```diff
-         class tw {
-           constructor(QQ, WQ, XQ) {
-             this.params = XQ, this.timerId = null, this.deleted = !1, this.responseToken = null, this.clickHandler = () => {
-               this.execute()
+         _validate() {
+           if (!this.positions) throw new LM.i("Positions are required", LM.e.MeshInvalidPositionsError);
+           const MM = (MM, rM) => {
+               const iM = (0, jM.h)(MM);
+               if (rM.length % iM !== 0) throw new Error("The " + MM + "s array count must be a multiple of " + iM);
+               return rM.length / iM
+             },
+             rM = MM(jM.j.PositionKind, this.positions),
+             iM = (iM, OM) => {
+               const SM = MM(iM, OM);
+               if (SM !== rM) throw new Error("The " + iM + "s element count (" + SM + ") does not match the positions count (" + rM + ")")
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3230-L3291` → after: `L6592-L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6592-L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6592-L6608) · [Before (L3230-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3230-L3291)

```diff
-             const wQ = "string" === typeof QQ ? document.getElementById(QQ) : QQ;
-             HQ(wQ, "argument-error", {
-               appName: WQ
-             }), this.container = wQ, this.isVisible = "invisible" !== this.params.size, this.isVisible ? this.execute() : this.container.addEventListener("click", this.clickHandler)
-           }
-           getResponse() {
-             return this.checkIfDeleted(), this.responseToken
-           }
-           delete() {
-             this.checkIfDeleted(), this.deleted = !0, this.timerId && (clearTimeout(this.timerId), this.timerId = null), this.container.removeEventListener("click", this.clickHandler)
-           }
-           execute() {
-             this.checkIfDeleted(), this.timerId || (this.timerId = window.setTimeout((() => {
-               this.responseToken = function(QQ) {
-                 const WQ = [],
-                   XQ = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
- ... (46 more removed lines; see GitHub link above)
+           this.normals && iM(jM.j.NormalKind, this.normals), this.tangents && iM(jM.j.TangentKind, this.tangents), this.uvs && iM(jM.j.UVKind, this.uvs), this.uvs2 && iM(jM.j.UV2Kind, this.uvs2), this.uvs3 && iM(jM.j.UV3Kind, this.uvs3), this.uvs4 && iM(jM.j.UV4Kind, this.uvs4),  … [truncated]
+         }
+         clone() {
+           const rM = this.serialize();
+           return MM.Parse(rM)
+         }
+         serialize() {
+           const MM = {};
+           if (this.positions && (MM.positions = Array.from(this.positions)), this.normals && (MM.normals = Array.from(this.normals)), this.tangents && (MM.tangents = Array.from(this.tangents)), this.uvs && (MM.uvs = Array.from(this.uvs)), this.uvs2 && (MM.uvs2 = Array.from(this.u … [truncated]
+             MM.materialInfos = [];
+             for (const rM of this.materialInfos) {
+               const iM = {
+                 indexStart: rM.indexStart,
+                 indexCount: rM.indexCount,
+                 materialIndex: rM.materialIndex,
+                 verticesStart: rM.verticesStart,
+ ... (1 more added lines; see GitHub link above)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3293-L3308` → after: `L6610-L6611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6610-L6611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6610-L6611) · [Before (L3293-L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3293-L3308)

```diff
-               HW(`https://www.google.com/recaptcha/api.js??${(0,wQ.eb)({onload:ow,render:"explicit",hl:WQ})}`).catch((() => {
-                 clearTimeout(TQ), qQ(UQ(QQ, "internal-error"))
-               }))
-             }))
-           }
-           clearedOneInstance() {
-             this.counter--
-           }
-           shouldResolveImmediately(QQ) {
-             var WQ;
-             return !!(null === (WQ = Hw().grecaptcha) || void 0 === WQ ? void 0 : WQ.render) && (QQ === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded)
-           }
-         }
-         class xw {
-           async load(QQ) {
-             return new Sw(QQ)
+               MM.materialInfos.push(iM)
+             }
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3310` → after: `L6613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6613) · [Before (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3310)

```diff
-           clearedOneInstance() {}
+           return MM
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3312-L3341` → after: `L6615-L6633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6615-L6633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6615-L6633) · [Before (L3312-L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3312-L3341)

```diff
-         const Yw = "recaptcha",
-           Nw = {
-             theme: "light",
-             type: "image"
-           };
-         class Zw {
-           constructor(QQ) {
-             let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.assign({}, Nw),
-               XQ = arguments.length > 2 ? arguments[2] : void 0;
-             this.parameters = WQ, this.type = Yw, this.destroyed = !1, this.widgetId = null, this.tokenChangeListeners = new Set, this.renderPromise = null, this.recaptcha = null, this.auth = AW(XQ), this.isInvisible = "invisible" === this.parameters.size, HQ("undefined" !== type … [truncated]
-             const wQ = "string" === typeof QQ ? document.getElementById(QQ) : QQ;
-             HQ(wQ, this.auth, "argument-error"), this.container = wQ, this.parameters.callback = this.makeTokenCallback(this.parameters.callback), this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new xw : new nw, this.validateStartingState()
-           }
-           async verify() {
-             this.assertNotDestroyed();
-             const QQ = await this.render(),
- ... (14 more removed lines; see GitHub link above)
+         static ExtractFromMesh(rM, iM, OM) {
+           return MM._ExtractFrom(rM, iM, OM)
+         }
+         static ExtractFromGeometry(rM, iM, OM) {
+           return MM._ExtractFrom(rM, iM, OM)
+         }
+         static _ExtractFrom(rM, iM, OM) {
+           const SM = new MM;
+           if (rM.isVerticesDataPresent(jM.j.PositionKind) && (SM.positions = rM.getVerticesData(jM.j.PositionKind, iM, OM)), rM.isVerticesDataPresent(jM.j.NormalKind) && (SM.normals = rM.getVerticesData(jM.j.NormalKind, iM, OM)), rM.isVerticesDataPresent(jM.j.TangentKind) && (SM. … [truncated]
+             const MM = rM.geometry || rM,
+               aM = MM.getVertexBuffer(jM.j.ColorKind),
+               PM = MM.getVerticesData(jM.j.ColorKind, iM, OM);
+             if (3 === aM.getSize()) {
+               const MM = new Float32Array(4 * PM.length / 3);
+               for (let rM = 0, iM = 0; rM < PM.length; rM += 3, iM += 4) MM[iM] = PM[rM], MM[iM + 1] = PM[rM + 1], MM[iM + 2] = PM[rM + 2], MM[iM + 3] = 1;
+               SM.colors = MM
+ ... (3 more added lines; see GitHub link above)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3347-L3364` → after: `L6636-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6636-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6636-L6729) · [Before (L3347-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3347-L3364)

```diff
-           _reset() {
-             this.assertNotDestroyed(), null !== this.widgetId && this.getAssertedRecaptcha().reset(this.widgetId)
-           }
-           clear() {
-             this.assertNotDestroyed(), this.destroyed = !0, this._recaptchaLoader.clearedOneInstance(), this.isInvisible || this.container.childNodes.forEach((QQ => {
-               this.container.removeChild(QQ)
-             }))
-           }
-           validateStartingState() {
-             HQ(!this.parameters.sitekey, this.auth, "argument-error"), HQ(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"), HQ("undefined" !== typeof document, this.auth, "operation-not-supported-in-this-environment")
-           }
-           makeTokenCallback(QQ) {
-             return WQ => {
-               if (this.tokenChangeListeners.forEach((QQ => QQ(WQ))), "function" === typeof QQ) QQ(WQ);
-               else if ("string" === typeof QQ) {
-                 const XQ = Hw()[QQ];
- ... (2 more removed lines; see GitHub link above)
+           return rM.isVerticesDataPresent(jM.j.MatricesIndicesKind) && (SM.matricesIndices = rM.getVerticesData(jM.j.MatricesIndicesKind, iM, OM)), rM.isVerticesDataPresent(jM.j.MatricesWeightsKind) && (SM.matricesWeights = rM.getVerticesData(jM.j.MatricesWeightsKind, iM, OM)), r … [truncated]
+         }
+         static CreateRibbon(MM) {
+           throw (0, aM.n)("ribbonBuilder")
+         }
+         static CreateBox(MM) {
+           throw (0, aM.n)("boxBuilder")
+         }
+         static CreateTiledBox(MM) {
+           throw (0, aM.n)("tiledBoxBuilder")
+         }
+         static CreateTiledPlane(MM) {
+           throw (0, aM.n)("tiledPlaneBuilder")
+         }
+         static CreateSphere(MM) {
+           throw (0, aM.n)("sphereBuilder")
+ ... (78 more added lines; see GitHub link above)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3367-L3375` → after: `L6737-L6749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6737-L6749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6737-L6749) · [Before (L3367-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3367-L3375)

```diff
-           assertNotDestroyed() {
-             HQ(!this.destroyed, this.auth, "internal-error")
-           }
-           async makeRenderPromise() {
-             if (await this.init(), !this.widgetId) {
-               let QQ = this.container;
-               if (!this.isInvisible) {
-                 const WQ = document.createElement("div");
-                 QQ.appendChild(WQ), QQ = WQ
+           for (jM = 0; jM < iM.length / 3; jM++) mM = iM[3 * jM], HM = iM[3 * jM + 1], hM = iM[3 * jM + 2], JM = Math.sqrt(mM * mM + HM * HM + hM * hM), JM = 0 === JM ? 1 : JM, mM /= JM, HM /= JM, hM /= JM, iM[3 * jM] = mM, iM[3 * jM + 1] = HM, iM[3 * jM + 2] = hM
+         }
+         static _ComputeSides(rM, iM, OM, jM, aM, PM, nM) {
+           const QM = OM.length,
+             zM = jM.length;
+           let LM, mM;
+           switch (rM = rM || MM.DEFAULTSIDE) {
+             case MM.FRONTSIDE:
+               break;
+             case MM.BACKSIDE:
+               for (LM = 0; LM < QM; LM += 3) {
+                 const MM = OM[LM];
+                 OM[LM] = OM[LM + 2], OM[LM + 2] = MM
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3377-L3397` → after: `L6751-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6751-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6751-L6764) · [Before (L3377-L3397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3377-L3397)

```diff
-               this.widgetId = this.getAssertedRecaptcha().render(QQ, this.parameters)
-             }
-             return this.widgetId
-           }
-           async init() {
-             HQ(iQ() && !aw(), this.auth, "internal-error"), await
-             function() {
-               let QQ = null;
-               return new Promise((WQ => {
-                 "complete" !== document.readyState ? (QQ = () => WQ(), window.addEventListener("load", QQ)) : WQ()
-               })).catch((WQ => {
-                 throw QQ && window.removeEventListener("load", QQ), WQ
-               }))
-             }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
-             const QQ = await async function(QQ) {
-               return (await kQ(QQ, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
- ... (5 more removed lines; see GitHub link above)
+               for (mM = 0; mM < zM; mM++) jM[mM] = -jM[mM];
+               break;
+             case MM.DOUBLESIDE: {
+               const MM = iM.length,
+                 rM = MM / 3;
+               for (let OM = 0; OM < MM; OM++) iM[MM + OM] = iM[OM];
+               for (LM = 0; LM < QM; LM += 3) OM[LM + QM] = OM[LM + 2] + rM, OM[LM + 1 + QM] = OM[LM + 1] + rM, OM[LM + 2 + QM] = OM[LM] + rM;
+               for (mM = 0; mM < zM; mM++) jM[zM + mM] = -jM[mM];
+               const HM = aM.length;
+               let hM;
+               for (hM = 0; hM < HM; hM++) aM[hM + HM] = aM[hM];
+               for (PM = PM || new SM.u(0, 0, 1, 1), nM = nM || new SM.u(0, 0, 1, 1), hM = 0, LM = 0; LM < HM / 2; LM++) aM[hM] = PM.x + (PM.z - PM.x) * aM[hM], aM[hM + 1] = PM.y + (PM.w - PM.y) * aM[hM + 1], aM[hM + HM] = nM.x + (nM.z - nM.x) * aM[hM + HM], aM[hM + HM + 1] = nM.y … [truncated]
+               break
+             }
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3400-L3406` → after: `L6767-L6801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6767-L6801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6767-L6801) · [Before (L3400-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3400-L3406)

```diff
-         class Ow {
-           constructor(QQ, WQ) {
-             this.verificationId = QQ, this.onConfirmation = WQ
-           }
-           confirm(QQ) {
-             const WQ = OW._fromVerification(this.verificationId, QQ);
-             return this.onConfirmation(WQ)
+         static Parse(rM) {
+           const iM = new MM,
+             OM = rM.positions;
+           OM && iM.set(OM, jM.j.PositionKind);
+           const SM = rM.normals;
+           SM && iM.set(SM, jM.j.NormalKind);
+           const aM = rM.tangents;
+           aM && iM.set(aM, jM.j.TangentKind);
+           const nM = rM.uvs;
+           nM && iM.set(nM, jM.j.UVKind);
+           const QM = rM.uvs2;
+           QM && iM.set(QM, jM.j.UV2Kind);
+           const zM = rM.uvs3;
+           zM && iM.set(zM, jM.j.UV3Kind);
+           const LM = rM.uvs4;
+           LM && iM.set(LM, jM.j.UV4Kind);
+ ... (19 more added lines; see GitHub link above)
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3409-L3412` → after: `L6805-L7186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L6805-L7186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L6805-L7186) · [Before (L3409-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3409-L3412)

```diff
-         async function Kw(QQ, WQ, XQ) {
-           const qQ = AW(QQ),
-             TQ = await Qq(qQ, WQ, (0, wQ.L)(XQ));
-           return new Ow(TQ, (QQ => UX(qQ, QQ)))
+         static ImportVertexData(rM, iM) {
+           const OM = MM.Parse(rM);
+           iM.setAllVerticesData(OM, rM.updatable)
+         }
+       }, (() => {
+         const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         rM = [QM.k.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], iM = [QM.k.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], hM = [QM.k.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], JM = [QM.k.filter((function() {
+           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
+         }))], (0, OM.i)(MM, null, rM, {
+           kind: "method",
+ ... (366 more added lines; see GitHub link above)
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3414-L3418` → after: `L7188-L7189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7188-L7189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7188-L7189) · [Before (L3414-L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3414-L3418)

```diff
-         async function mw(QQ, WQ, XQ) {
-           const qQ = (0, wQ.L)(QQ);
-           await DX(!1, qQ, "phone");
-           const TQ = await Qq(qQ.auth, WQ, (0, wQ.L)(XQ));
-           return new Ow(TQ, (QQ => bX(qQ, QQ)))
+         get absoluteRotationQuaternion() {
+           return this._syncAbsoluteScalingAndRotation(), this._absoluteRotationQuaternion
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3420-L3423` → after: `L7191-L7192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7191-L7192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7191-L7192) · [Before (L3420-L3423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3420-L3423)

```diff
-         async function Mw(QQ, WQ, XQ) {
-           const qQ = (0, wQ.L)(QQ),
-             TQ = await Qq(qQ.auth, WQ, (0, wQ.L)(XQ));
-           return new Ow(TQ, (QQ => vX(qQ, QQ)))
+         setPreTransformMatrix(MM) {
+           return this.setPivotMatrix(MM, !1)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3425-L3476` → after: `L7194-L7196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7194-L7196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7194-L7196) · [Before (L3425-L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3425-L3476)

```diff
-         async function Qq(QQ, WQ, XQ) {
-           var wQ;
-           const qQ = await XQ.verify();
-           try {
-             let TQ;
-             if (HQ("string" === typeof qQ, QQ, "argument-error"), HQ(XQ.type === Yw, QQ, "argument-error"), TQ = "string" === typeof WQ ? {
-                 phoneNumber: WQ
-               } : WQ, "session" in TQ) {
-               const WQ = TQ.session;
-               if ("phoneNumber" in TQ) {
-                 HQ("enroll" === WQ.type, QQ, "internal-error");
-                 const XQ = await
-                 function(QQ, WQ) {
-                   return kQ(QQ, "POST", "/v2/accounts/mfaEnrollment:start", LQ(QQ, WQ))
-                 }(QQ, {
-                   idToken: WQ.credential,
- ... (36 more removed lines; see GitHub link above)
+         setPivotMatrix(MM) {
+           let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           return this._pivotMatrix.jR(MM), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = rM, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrix … [truncated]
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3478-L3479` → after: `L7198-L7199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7198-L7199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7198-L7199) · [Before (L3478-L3479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3478-L3479)

```diff
-         async function Wq(QQ, WQ) {
-           await VX((0, wQ.L)(QQ), WQ)
+         getPivotMatrix() {
+           return this._pivotMatrix
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3481-L3508` → after: `L7201-L7208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7201-L7208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7201-L7208) · [Before (L3481-L3508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3481-L3508)

```diff
-         class Xq {
-           constructor(QQ) {
-             this.providerId = Xq.PROVIDER_ID, this.auth = AW(QQ)
-           }
-           verifyPhoneNumber(QQ, WQ) {
-             return Qq(this.auth, QQ, (0, wQ.L)(WQ))
-           }
-           static credential(QQ, WQ) {
-             return OW._fromVerification(QQ, WQ)
-           }
-           static credentialFromResult(QQ) {
-             const WQ = QQ;
-             return Xq.credentialFromTaggedObject(WQ)
-           }
-           static credentialFromError(QQ) {
-             return Xq.credentialFromTaggedObject(QQ.customData || {})
- ... (12 more removed lines; see GitHub link above)
+         instantiateHierarchy() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+             rM = arguments.length > 1 ? arguments[1] : void 0,
+             iM = arguments.length > 2 ? arguments[2] : void 0;
+           const OM = this.clone("Clone of " + (this.name || this.id), MM || this.parent, !0);
+           OM && iM && iM(this, OM);
+           for (const SM of this.getChildTransformNodes(!0)) SM.instantiateHierarchy(OM, rM, iM);
+           return OM
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3510-L3512` → after: `L7210-L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7210-L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7210-L7331) · [Before (L3510-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3510-L3512)

```diff
- 
-         function wq(QQ, WQ) {
-           return WQ ? TW(WQ) : (HQ(QQ._popupRedirectResolver, QQ, "argument-error"), QQ._popupRedirectResolver)
+         Yk() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return MM ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.P_(0), this._rotationQuaternion = this._rotationQuaternion || LM.h.Identity(), MM.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0 … [truncated]
+         }
+         unfreezeWorldMatrix() {
+           return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
+         }
+         get TaM() {
+           return this._isWorldMatrixFrozen
+         }
+         getAbsolutePosition() {
+           return this.computeWorldMatrix(), this._absolutePosition
+         }
+         setAbsolutePosition(MM) {
+           if (!MM) return this;
+           let rM, iM, OM;
+ ... (106 more added lines; see GitHub link above)
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3514-L3539` → after: `L7333-L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7333-L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7333-L7335) · [Before (L3514-L3539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3514-L3539)

```diff
-         Xq.PROVIDER_ID = "phone", Xq.PHONE_SIGN_IN_METHOD = "phone";
-         class qq extends kW {
-           constructor(QQ) {
-             super("custom", "custom"), this.params = QQ
-           }
-           _getIdTokenResponse(QQ) {
-             return YW(QQ, this._buildIdpRequest())
-           }
-           _linkToIdToken(QQ, WQ) {
-             return YW(QQ, this._buildIdpRequest(WQ))
-           }
-           _getReauthenticationResolver(QQ) {
-             return YW(QQ, this._buildIdpRequest())
-           }
-           _buildIdpRequest(QQ) {
-             const WQ = {
- ... (10 more removed lines; see GitHub link above)
+         removeChild(MM) {
+           let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           return MM.parent !== this || MM.setParent(null, rM), this
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3541-L3543` → after: `L7337-L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7337-L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7337-L7338) · [Before (L3541-L3543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3541-L3543)

```diff
- 
-         function Tq(QQ) {
-           return GX(QQ.auth, new qq(QQ), QQ.bypassAuthState)
+         get nonUniformScaling() {
+           return this._nonUniformScaling
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3545-L3574` → after: `L7340-L7461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7340-L7461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7340-L7461) · [Before (L3545-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3545-L3574)

```diff
- 
-         function zq(QQ) {
-           const {
-             auth: WQ,
-             user: XQ
-           } = QQ;
-           return HQ(XQ, WQ, "internal-error"), pX(XQ, new qq(QQ), QQ.bypassAuthState)
-         }
-         async function sq(QQ) {
-           const {
-             auth: WQ,
-             user: XQ
-           } = QQ;
-           return HQ(XQ, WQ, "internal-error"), VX(XQ, new qq(QQ), QQ.bypassAuthState)
-         }
-         class Fq {
- ... (14 more removed lines; see GitHub link above)
+         _updateNonUniformScalingState(MM) {
+           return this._nonUniformScaling !== MM && (this._nonUniformScaling = MM, !0)
+         }
+         attachToBone(MM, rM) {
+           return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = rM, this.parent = MM, MM.getSkeleton().prepare(!0), MM.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
+         }
+         detachFromBone() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = MM ? this._currentParentWhenAttachingToBone : null, this) : (MM && (this.parent = this._currentParentWhenAttaching … [truncated]
+         }
+         rotate(rM, iM, OM) {
+           let SM;
+           if (rM.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.P_(0)), OM && 0 !== OM) {
+             if (this.parent) {
+               const MM = this.parent.getWorldMatrix(),
+                 OM = LM.l.Matrix[0];
+ ... (106 more added lines; see GitHub link above)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3576-L3707` → after: `L7463-L7477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7463-L7477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7463-L7477) · [Before (L3576-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3576-L3707)

```diff
-             }))
-           }
-           async onAuthEvent(QQ) {
-             const {
-               urlResponse: WQ,
-               sessionId: XQ,
-               postBody: wQ,
-               tenantId: qQ,
-               error: TQ,
-               type: zQ
-             } = QQ;
-             if (TQ) return void this.reject(TQ);
-             const sQ = {
-               auth: this.auth,
-               requestUri: WQ,
-               sessionId: XQ,
- ... (116 more removed lines; see GitHub link above)
+               this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(LM.l.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(LM.l.sh[0])
+             } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : jM && jM._nonUniformScaling ? this._updateNonUniformScalingState(jM._nonUniformScaling) : this._up … [truncated]
+         }
+         resetLocalMatrix() {
+           let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+           if (this.computeWorldMatrix(), MM) {
+             const MM = this.getChildren();
+             for (let rM = 0; rM < MM.length; ++rM) {
+               const iM = MM[rM];
+               if (iM) {
+                 iM.computeWorldMatrix();
+                 const MM = LM.l.Matrix[0];
+                 iM._localMatrix.multiplyToRef(this._localMatrix, MM);
+                 const rM = LM.l.Quaternion[0];
+                 MM.decompose(iM.UL, rM, iM.position), iM.rotationQuaternion ? iM.rotationQuaternion.jR(rM) : rM.toEulerAnglesToRef(iM.rotation)
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3713-L3724` → after: `L7481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7481) · [Before (L3713-L3724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3713-L3724)

```diff
-           async onAuthEvent(QQ) {
-             if ("signInViaRedirect" === QQ.type) return super.onAuthEvent(QQ);
-             if ("unknown" !== QQ.type) {
-               if (QQ.eventId) {
-                 const WQ = await this.auth._redirectUserForId(QQ.eventId);
-                 if (WQ) return this.user = WQ, super.onAuthEvent(QQ);
-                 this.resolve(null)
-               }
-             } else this.resolve(null)
-           }
-           async onExecution() {}
-           cleanUp() {}
+           this.UL.iMM(1, 1, 1), this.position.iMM(0, 0, 0), this.rotation.iMM(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = LM.h.Identity()), this._worldMatrix = LM.d.Identity()
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3726-L3727` → after: `L7483-L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7483-L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7483-L7485) · [Before (L3726-L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3726-L3727)

```diff
-         async function Vq(QQ, WQ) {
-           return pq(QQ)._set(Gq(WQ), "true")
+         _afterComputeWorldMatrix() {}
+         registerAfterWorldMatrixUpdate(MM) {
+           return this.onAfterWorldMatrixUpdateObservable.add(MM), this
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3729-L3731` → after: `L7487-L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7487-L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7487-L7488) · [Before (L3729-L3731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3729-L3731)

```diff
- 
-         function Dq(QQ, WQ) {
-           Bq.set(QQ._key(), WQ)
+         unregisterAfterWorldMatrixUpdate(MM) {
+           return this.onAfterWorldMatrixUpdateObservable.removeCallback(MM), this
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3733-L3735` → after: `L7490-L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7490-L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7490-L7492) · [Before (L3733-L3735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3733-L3735)

```diff
- 
-         function pq(QQ) {
-           return TW(QQ._redirectPersistence)
+         getPositionInCameraSpace() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return MM || (MM = this.Hk().activeCamera), LM.q.TransformCoordinates(this.getAbsolutePosition(), MM.getViewMatrix())
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3737-L3748` → after: `L7494-L7496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7494-L7496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7494-L7496) · [Before (L3737-L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3737-L3748)

```diff
- 
-         function Gq(QQ) {
-           return FW(jq, QQ.config.apiKey, QQ.name)
-         }
- 
-         function Uq(QQ, WQ, XQ) {
-           return async function(QQ, WQ, XQ) {
-             const wQ = AW(QQ);
-             vQ(QQ, WQ, QX), await wQ._initializationPromise;
-             const qQ = wq(wQ, XQ);
-             return await Vq(qQ, wQ), qQ._openRedirect(wQ, WQ, "signInViaRedirect")
-           }(QQ, WQ, XQ)
+         getDistanceToCamera() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return MM || (MM = this.Hk().activeCamera), this.getAbsolutePosition().subtract(MM.globalPosition).length()
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3750-L3830` → after: `L7498-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7498-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7498-L7505) · [Before (L3750-L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3750-L3830)

```diff
- 
-         function bq(QQ, WQ, XQ) {
-           return async function(QQ, WQ, XQ) {
-             const qQ = (0, wQ.L)(QQ);
-             vQ(qQ.auth, WQ, QX), await qQ.auth._initializationPromise;
-             const TQ = wq(qQ.auth, XQ);
-             await Vq(TQ, qQ.auth);
-             const zQ = await aq(qQ);
-             return TQ._openRedirect(qQ.auth, WQ, "reauthViaRedirect", zQ)
-           }(QQ, WQ, XQ)
-         }
- 
-         function vq(QQ, WQ, XQ) {
-           return async function(QQ, WQ, XQ) {
-             const qQ = (0, wQ.L)(QQ);
-             vQ(qQ.auth, WQ, QX), await qQ.auth._initializationPromise;
- ... (65 more removed lines; see GitHub link above)
+         clone(rM, iM, OM) {
+           const SM = QM.b.Clone((() => new MM(rM, this.Hk())), this);
+           if (SM.name = rM, SM.id = rM, iM && (SM.parent = iM), !OM) {
+             const MM = this.getDescendants(!0);
+             for (let iM = 0; iM < MM.length; iM++) {
+               const OM = MM[iM];
+               OM.clone && OM.clone(rM + "." + OM.name, SM)
+             }
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3833-L3835` → after: `L7509-L7511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7509-L7511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7509-L7511) · [Before (L3833-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3833-L3835)

```diff
- 
-         function hq(QQ) {
-           return [QQ.type, QQ.eventId, QQ.sessionId, QQ.tenantId].filter((QQ => QQ)).join("-")
+         serialize(MM) {
+           const rM = QM.b.Serialize(this, MM);
+           return rM.type = this.getClassName(), rM.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(rM), rM.localMatrix = this.getPivotMatrix().HOM(), rM.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (rM.Yk = !0), QM.b.AppendSerializedAnimation … [truncated]
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3837-L3857` → after: `L7513-L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7513-L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7513-L7515) · [Before (L3837-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3837-L3857)

```diff
- 
-         function iq(QQ) {
-           let {
-             type: WQ,
-             error: XQ
-           } = QQ;
-           return "unknown" === WQ && "auth/no-auth-event" === (null === XQ || void 0 === XQ ? void 0 : XQ.code)
-         }
-         const cq = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
-           Aq = /^https?/;
-         async function Rq(QQ) {
-           if (QQ.config.emulator) return;
-           const {
-             authorizedDomains: WQ
-           } = await async function(QQ) {
-             return kQ(QQ, "GET", "/v1/projects", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
- ... (5 more removed lines; see GitHub link above)
+         getChildTransformNodes(rM, iM) {
+           const OM = [];
+           return this._getDescendants(OM, rM, (rM => (!iM || iM(rM)) && rM instanceof MM)), OM
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3860-L3884` → after: `L7674-L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7674-L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7674-L7686) · [Before (L3860-L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3860-L3884)

```diff
-         function Eq(QQ) {
-           const WQ = hQ(),
-             {
-               protocol: XQ,
-               hostname: wQ
-             } = new URL(WQ);
-           if (QQ.startsWith("chrome-extension://")) {
-             const qQ = new URL(QQ);
-             return "" === qQ.hostname && "" === wQ ? "chrome-extension:" === XQ && QQ.replace("chrome-extension://", "") === WQ.replace("chrome-extension://", "") : "chrome-extension:" === XQ && qQ.hostname === wQ
-           }
-           if (!Aq.test(XQ)) return !1;
-           if (cq.test(QQ)) return wQ === QQ;
-           const qQ = QQ.replace(/\./g, "\\.");
-           return new RegExp("^(.+\\." + qQ + "|" + qQ + ")$", "i").test(wQ)
-         }
-         const Cq = new AQ(3e4, 6e4);
- ... (9 more removed lines; see GitHub link above)
+     function dM(MM, rM, iM) {
+       const OM = QM.b.Parse((() => new JM(MM.name, rM)), MM, rM, iM);
+       if (MM.localMatrix ? OM.setPreTransformMatrix(LM.d.FromArray(MM.localMatrix)) : MM.pivotMatrix && OM.setPivotMatrix(LM.d.FromArray(MM.pivotMatrix)), OM.kR(MM.isEnabled), OM._waitingParsedUniqueId = MM.uniqueId, void 0 !== MM.parentId && (OM._waitingParentId = MM.parentId),  … [truncated]
+         for (let rM = 0; rM < MM.animations.length; rM++) {
+           const iM = MM.animations[rM],
+             SM = (0, HM.b)("BABYLON.Animation");
+           SM && OM.animations.push(SM.Parse(iM))
+         }
+         mM.d.ParseAnimationRanges(OM, MM, rM)
+       }
+       return MM.autoAnimate && rM.beginAnimation(OM, MM.autoAnimateFrom, MM.autoAnimateTo, MM.autoAnimateLoop, MM.autoAnimateSpeed || 1), OM
+     }
+     let yM = !1;
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3886-L3889` → after: `L7688-L7702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7688-L7702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7688-L7702) · [Before (L3886-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3886-L3889)

```diff
-         function kq(QQ) {
-           return Lq = Lq || function(QQ) {
-             return new Promise(((WQ, XQ) => {
-               var wQ, qQ, TQ;
+     function lM() {
+       yM || (yM = !0, JM.Parse = dM)
+     }(OM = JM.prototype).Av ?? (OM.Av = (0, hM.j)("TransformNode", "Av")), (SM = JM.prototype).applyImpulse ?? (SM.applyImpulse = (0, hM.j)("TransformNode", "applyImpulse")), (jM = JM.prototype).applyAngularImpulse ?? (jM.applyAngularImpulse = (0, hM.j)("TransformNode", "applyAng … [truncated]
+   },
+   41506: (MM, rM, iM) => {
+     function OM(MM, rM, iM) {
+       try {
+         const OM = MM.next();
+         OM.done ? rM(OM) : OM.value ? OM.value.then((() => {
+           OM.value = void 0, rM(OM)
+         }), iM) : rM(OM)
+       } catch (OM) {
+         iM(OM)
+       }
+     }
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3891-L3932` → after: `L7704-L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7704-L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7704-L7712) · [Before (L3891-L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3891-L3932)

```diff
-               function zQ() {
-                 uq(), gapi.load("gapi.iframes", {
-                   callback: () => {
-                     WQ(gapi.iframes.getContext())
-                   },
-                   ontimeout: () => {
-                     uq(), XQ(UQ(QQ, "network-request-failed"))
-                   },
-                   timeout: Cq.get()
-                 })
-               }
-               if (null === (qQ = null === (wQ = Hw().gapi) || void 0 === wQ ? void 0 : wQ.iframes) || void 0 === qQ ? void 0 : qQ.Iframe) WQ(gapi.iframes.getContext());
-               else {
-                 if (!(null === (TQ = Hw().gapi) || void 0 === TQ ? void 0 : TQ.load)) {
-                   const WQ = aW("iframefcb");
-                   return Hw()[WQ] = () => {
- ... (26 more removed lines; see GitHub link above)
+     function SM() {
+       let MM, rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
+       return (iM, SM, jM) => {
+         const aM = performance.now();
+         void 0 === MM || aM - MM > rM ? (MM = aM, setTimeout((() => {
+           OM(iM, SM, jM)
+         }), 0)) : OM(iM, SM, jM)
+       }
+     }
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3934-L3952` → after: `L7714-L7718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7714-L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7714-L7718) · [Before (L3934-L3952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3934-L3952)

```diff
-         function oq(QQ) {
-           const WQ = QQ.config;
-           HQ(WQ.authDomain, QQ, "auth-domain-config-required");
-           const XQ = WQ.emulator ? RQ(WQ, "emulator/auth/iframe") : `https://${QQ.config.authDomain}/__/auth/iframe`,
-             TQ = {
-               apiKey: WQ.apiKey,
-               appName: QQ.name,
-               v: qQ.g
-             },
-             zQ = tq.get(QQ.config.apiHost);
-           zQ && (TQ.eid = zQ);
-           const sQ = QQ._getFrameworks();
-           return sQ.length && (TQ.fw = sQ.join(",")), `${XQ}?${(0,wQ.eb)(TQ).slice(1)}`
-         }
-         const eq = {
-           location: "yes",
- ... (3 more removed lines; see GitHub link above)
+     function jM(MM, rM, iM, OM, SM) {
+       const jM = () => {
+         let aM;
+         const PM = MM => {
+           MM.done ? iM(MM.value) : void 0 === aM ? aM = !0 : jM()
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3954-L3963` → after: `L7720-L7725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7720-L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7720-L7725) · [Before (L3954-L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3954-L3963)

```diff
-         class nq {
-           constructor(QQ) {
-             this.window = QQ, this.associatedEvent = null
-           }
-           close() {
-             if (this.window) try {
-               this.window.close()
-             } catch (QQ) {}
-           }
-         }
+         do {
+           aM = void 0, SM && SM.aborted ? OM(new Error("Aborted")) : rM(MM, PM, OM), void 0 === aM && (aM = !1)
+         } while (aM)
+       };
+       jM()
+     }
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L3965-L4026` → after: `L7727-L7753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L7727-L7753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L7727-L7753) · [Before (L3965-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L3965-L4026)

```diff
-         function xq(QQ, WQ, XQ) {
-           let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
-             TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 600;
-           const zQ = Math.max((window.screen.availHeight - TQ) / 2, 0).toString(),
-             sQ = Math.max((window.screen.availWidth - qQ) / 2, 0).toString();
-           let FQ = "";
-           const PQ = Object.assign(Object.assign({}, eq), {
-               width: qQ.toString(),
-               height: TQ.toString(),
-               top: zQ,
-               left: sQ
-             }),
-             gQ = (0, wQ.N)().toLowerCase();
-           XQ && (FQ = IW(gQ) ? "_blank" : XQ), JW(gQ) && (WQ = WQ || "http://localhost", PQ.scrollbars = "yes");
-           const JQ = Object.entries(PQ).reduce(((QQ, WQ) => {
-             let [XQ, wQ] = WQ;
- ... (46 more removed lines; see GitHub link above)
+     function aM(MM, rM) {
+       let iM;
+       return jM(MM, OM, (MM => iM = MM), (MM => {
+         throw MM
+       }), rM), iM
+     }
+     async function PM(MM, rM, iM) {
+       return await new Promise(((OM, SM) => {
+         jM(MM, rM, OM, SM, iM)
+       }))
+     }
+ 
+     function nM(MM, rM) {
+       return function() {
+         return aM(MM(...arguments), rM)
+       }
+ ... (11 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 1. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L4)

```diff
-   40813: (QQ, WQ, XQ) => {
+   41250: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L6-L141` → after: `L6-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L6-L9) · [Before (L6-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L6-L141)

```diff
-       $: () => eQ,
-       $c: () => xQ,
-       $e: () => oX,
-       A: () => eW,
-       Ad: () => dQ,
-       Be: () => VX,
-       C: () => nQ,
-       Cb: () => wX,
-       Cc: () => TW,
-       Cf: () => KX,
-       Db: () => qX,
-       Ed: () => zW,
-       Ef: () => MX,
-       F: () => YW,
-       Fd: () => yQ,
-       Fe: () => UX,
- ... (120 more removed lines; see GitHub link above)
+       d: () => PM,
+       f: () => JM,
+       h: () => QM,
+       j: () => nM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L143-L1222` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L11-L14) · [Before (L143-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L143-L1222)

```diff
-     const wQ = -2147483648,
-       qQ = 12,
-       TQ = 12,
-       zQ = 4095,
-       sQ = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       FQ = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (1064 more removed lines; see GitHub link above)
+     var OM = iM(41026),
+       SM = iM(39711),
+       jM = iM(41167),
+       aM = iM(41072);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1224-L1225` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L16-L17) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1224-L1225)

```diff
-       constructor(QQ, WQ) {
-         this.core = QQ, this.afterCall = WQ
+       get xG() {
+         return this._isDisposed
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1227-L1229` → after: `L19-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L19-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L19-L26) · [Before (L1227-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1227-L1229)

```diff
-       canModify(QQ, WQ, XQ) {
-         const wQ = this.core.xTQ(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       constructor(MM, rM, iM) {
+         let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           PM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           nM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+           QM = arguments.length > 7 ? arguments[7] : void 0,
+           zM = arguments.length > 8 ? arguments[8] : void 0;
+         this._isAlreadyOwned = !1, this._isDisposed = !1, (0, aM.c)(), MM && MM.Hk ? this._engine = MM.Hk().ph() : this._engine = MM, this._updatable = iM, this._instanced = PM, this._divisor = QM || 1, this._label = zM, rM instanceof OM.c ? (this._data = null, this._buffer = rM) … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1231-L1233` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L28-L33) · [Before (L1231-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1231-L1233)

```diff
-       terrainBlocked(QQ, WQ, XQ, wQ, qQ) {
-         const TQ = this.core.kzQ(QQ, WQ, XQ, wQ, qQ);
-         return this.afterCall(), TQ
+       createVertexBuffer(MM, rM, iM, OM, SM) {
+         let jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+           aM = arguments.length > 6 ? arguments[6] : void 0;
+         const PM = jM ? rM : rM * Float32Array.BYTES_PER_ELEMENT,
+           QM = OM ? jM ? OM : OM * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
+         return new nM(this._engine, this, MM, this._updatable, !0, QM, void 0 === SM ? this._instanced : SM, PM, iM, void 0, void 0, !0, this._divisor || aM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1235-L1237` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L35-L36) · [Before (L1235-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1235-L1237)

```diff
-       hA(QQ, WQ, XQ, wQ) {
-         const qQ = this.core.Zr(QQ, WQ, XQ, wQ);
-         return this.afterCall(), qQ
+       isUpdatable() {
+         return this._updatable
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1239-L1241` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L38-L39) · [Before (L1239-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1239-L1241)

```diff
-       blockData(QQ, WQ, XQ) {
-         const wQ = this.core.eTQ(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       getData() {
+         return this._data
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1243-L1245` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L41-L42) · [Before (L1243-L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1243-L1245)

```diff
-       cameraSweep(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-         const sQ = this.core.tqQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ);
-         return this.afterCall(), sQ
+       getBuffer() {
+         return this._buffer
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1247-L1249` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L44-L45) · [Before (L1247-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1247-L1249)

```diff
-       hasServerTarget(QQ) {
-         const WQ = this.core.qzQ(QQ);
-         return this.afterCall(), WQ
+       getStrideSize() {
+         return this.byteStride / Float32Array.BYTES_PER_ELEMENT
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1251-L1253` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L47-L49) · [Before (L1251-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1251-L1253)

```diff
-       entityInteractable(QQ) {
-         const WQ = this.core.MTQ(QQ);
-         return this.afterCall(), WQ
+       create() {
+         let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         !MM && this._buffer || (MM = MM || this._data, MM && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, MM), this._data = MM) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(MM, this._label), this._data = MM … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1255-L1257` → after: `L51-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L51-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L51-L57) · [Before (L1255-L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1255-L1257)

```diff
-       entityCrouching(QQ) {
-         const WQ = this.core.mTQ(QQ);
-         return this.afterCall(), WQ
+       _rebuild() {
+         if (this._data) this._buffer = null, this.create(this._data);
+         else {
+           if (!this._buffer) return;
+           if (this._buffer.vL > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.vL, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.vL, void 0, this._label));
+           SM.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1259-L1261` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L59-L60) · [Before (L1259-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1259-L1261)

```diff
-       predictServerPosition(QQ, WQ, XQ, wQ) {
-         const qQ = this.core.yzQ(QQ, WQ, XQ, wQ);
-         return this.afterCall(), qQ
+       update(MM) {
+         this.create(MM)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1263-L1265` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L62-L64) · [Before (L1263-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1263-L1265)

```diff
-       setOtherEntitySetting(QQ, WQ, XQ) {
-         const wQ = this.core.xqQ(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       updateDirectly(MM, rM, iM) {
+         let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+         this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, MM, OM ? rM : rM * Float32Array.BYTES_PER_ELEMENT, iM ? iM * this.byteStride : void 0), this._data = 0 === rM && void 0 === iM ? MM : null)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1267-L1269` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L66-L67) · [Before (L1267-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1267-L1269)

```diff
-       entityInfoBatch(QQ) {
-         const WQ = this.core.ZqQ(QQ);
-         return this.afterCall(), WQ
+       _increaseReferences() {
+         this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1271-L1273` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L69-L70) · [Before (L1271-L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1271-L1273)

```diff
-       entityName(QQ) {
-         const WQ = this.core.QzQ(QQ);
-         return this.afterCall(), WQ
+       dispose() {
+         this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1275-L1277` → after: `L72-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L72-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L72-L82) · [Before (L1275-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1275-L1277)

```diff
-       hasEffect(QQ, WQ) {
-         const XQ = this.core.wzQ(QQ, WQ);
-         return this.afterCall(), XQ
+     }
+     class nM {
+       get xG() {
+         return this._isDisposed
+       }
+       get instanceDivisor() {
+         return this._instanceDivisor
+       }
+       set instanceDivisor(MM) {
+         const rM = 0 != MM;
+         this._instanceDivisor = MM, rM !== this._instanced && (this._instanced = rM, this._computeHashCode())
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1279-L1281` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L84-L86) · [Before (L1279-L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1279-L1281)

```diff
-       scratchPtr() {
-         const QQ = this.core.LqQ();
-         return this.afterCall(), QQ
+       get _maxVerticesCount() {
+         const MM = this.getData();
+         return MM ? Array.isArray(MM) ? MM.length / (this.byteStride / 4) - this.byteOffset / 4 : (MM.byteLength - this.byteOffset) / this.byteStride : 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1283-L1285` → after: `L88-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L88-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L88-L98) · [Before (L1283-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1283-L1285)

```diff
-       invSwap(QQ, WQ) {
-         const XQ = this.core.JzQ(QQ, WQ);
-         return this.afterCall(), XQ
+       constructor(MM, rM, iM, OM, SM, aM, LM, mM, HM, hM) {
+         let JM, dM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+           yM = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
+           lM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
+           EM = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
+         if (this._isDisposed = !1, this.engine = MM, "object" === typeof OM && null !== OM ? (JM = OM.updatable ?? !1, SM = OM.postponeInternalCreation, aM = OM.stride, LM = OM.instanced, mM = OM.offset, HM = OM.size, hM = OM.type, dM = OM.normalized ?? !1, yM = OM.useBytes ?? !1 … [truncated]
+           const MM = this.getData();
+           this.type = MM ? zM(MM) : nM.FLOAT
+         } else this.type = hM;
+         const UM = (0, jM.n)(this.type);
+         yM ? (this._size = HM || (aM ? aM / UM : QM(iM)), this.byteStride = aM || this._buffer.byteStride || this._size * UM, this.byteOffset = mM || 0) : (this._size = HM || aM || QM(iM), this.byteStride = aM ? aM * UM : this._buffer.byteStride || this._size * UM, this.byteOffse … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1287-L1289` → after: `L100-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L100-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L100-L120) · [Before (L1287-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1287-L1289)

```diff
-       invMove(QQ, WQ, XQ) {
-         const wQ = this.core.szQ(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       static _GetTypeHashIndex(MM) {
+         switch (MM) {
+           case nM.BYTE:
+             return 0;
+           case nM.UNSIGNED_BYTE:
+             return 1;
+           case nM.SHORT:
+             return 2;
+           case nM.UNSIGNED_SHORT:
+             return 3;
+           case nM.INT:
+             return 4;
+           case nM.UNSIGNED_INT:
+             return 5;
+           case nM.FLOAT:
+             return 6;
+ ... (5 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1291-L1293` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L122-L123) · [Before (L1291-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1291-L1293)

```diff
-       invQuickMove(QQ, WQ, XQ, wQ) {
-         const qQ = this.core.PzQ(QQ, WQ, XQ, wQ);
-         return this.afterCall(), qQ
+       _computeHashCode() {
+         this.hashCode = (nM._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1295-L1297` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L125-L126) · [Before (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1295-L1297)

```diff
-       invRemove(QQ, WQ, XQ) {
-         const wQ = this.core.gzQ(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       _rebuild() {
+         this._buffer?._rebuild()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1299-L1301` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L128-L129) · [Before (L1299-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1299-L1301)

```diff
-       invEnchant(QQ, WQ, XQ, wQ, qQ) {
-         const TQ = this.core.zzQ(QQ, WQ, XQ, wQ, qQ);
-         return this.afterCall(), TQ
+       getKind() {
+         return this._kind
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1303-L1305` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L131-L132) · [Before (L1303-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1303-L1305)

```diff
-       craft(QQ, WQ, XQ) {
-         const wQ = this.core.craft(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       isUpdatable() {
+         return this._buffer.isUpdatable()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1307-L1309` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L134-L135) · [Before (L1307-L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1307-L1309)

```diff
-       salvage(QQ, WQ, XQ) {
-         const wQ = this.core.salvage(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       getData() {
+         return this._buffer.getData()
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1311-L1313` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L137-L139) · [Before (L1311-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1311-L1313)

```diff
-       selectSlot(QQ) {
-         const WQ = this.core.GzQ(QQ);
-         return this.afterCall(), WQ
+       getFloatData(MM, rM) {
+         const iM = this.getData();
+         return iM ? (0, jM.m)(iM, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, MM, rM) : null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1315-L1317` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L141-L142) · [Before (L1315-L1317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1315-L1317)

```diff
-       closeChest() {
-         const QQ = this.core.YTQ();
-         return this.afterCall(), QQ
+       getBuffer() {
+         return this._buffer.getBuffer()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1319-L1321` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L144-L145) · [Before (L1319-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1319-L1321)

```diff
-       itemAttributesBatch(QQ) {
-         const WQ = this.core.NqQ(QQ);
-         return this.afterCall(), WQ
+       getWrapperBuffer() {
+         return this._buffer
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1323-L1325` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L147-L148) · [Before (L1323-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1323-L1325)

```diff
-       itemNames() {
-         const QQ = this.core.IH();
-         return this.afterCall(), QQ
+       getStrideSize() {
+         return this.byteStride / (0, jM.n)(this.type)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1327-L1329` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L150-L151) · [Before (L1327-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1327-L1329)

```diff
-       blockProps() {
-         const QQ = this.core.nTQ();
-         return this.afterCall(), QQ
+       diM() {
+         return this.byteOffset / (0, jM.n)(this.type)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1331-L1333` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L153-L154) · [Before (L1331-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1331-L1333)

```diff
-       itemProps() {
-         const QQ = this.core.rzQ();
-         return this.afterCall(), QQ
+       getSize() {
+         return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, jM.n)(this.type) : this._size
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1335-L1337` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L156-L157) · [Before (L1335-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1335-L1337)

```diff
-       salvageRecipe(QQ) {
-         const WQ = this.core.KqQ(QQ);
-         return this.afterCall(), WQ
+       getIsInstanced() {
+         return this._instanced
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1339-L1341` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L159-L160) · [Before (L1339-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1339-L1341)

```diff
-       craftingView(QQ, WQ, XQ) {
-         const wQ = this.core.YqQ(QQ, WQ, XQ);
-         return this.afterCall(), wQ
+       getInstanceDivisor() {
+         return this._instanceDivisor
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1343-L1345` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L162-L163) · [Before (L1343-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1343-L1345)

```diff
-       directorView() {
-         const QQ = this.core.fqQ();
-         return this.afterCall(), QQ
+       create(MM) {
+         this._buffer.create(MM), this._alignBuffer()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1347-L1349` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L165-L166) · [Before (L1347-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1347-L1349)

```diff
-       directorDefaultPose() {
-         const QQ = this.core.oqQ();
-         return this.afterCall(), QQ
+       update(MM) {
+         this._buffer.update(MM), this._alignBuffer()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1351-L1353` → after: `L168-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L168-L170) · [Before (L1351-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1351-L1353)

```diff
-       directorEntity(QQ) {
-         const WQ = this.core.SqQ(QQ);
-         return this.afterCall(), WQ
+       updateDirectly(MM, rM) {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._buffer.updateDirectly(MM, rM, void 0, iM), this._alignBuffer()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1355-L1357` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L172-L173) · [Before (L1355-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1355-L1357)

```diff
-       directorPose(QQ, WQ, XQ, wQ, qQ, TQ) {
-         const zQ = this.core.eqQ(QQ, WQ, XQ, wQ, qQ, TQ);
-         return this.afterCall(), zQ
+       dispose() {
+         this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1359-L1361` → after: `L175-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L175-L178) · [Before (L1359-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1359-L1361)

```diff
-       passTimings(QQ) {
-         const WQ = this.core.BzQ(QQ);
-         return this.afterCall(), WQ
+       forEach(MM, rM) {
+         (0, jM.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, MM, this.normalized, ((MM, iM) => {
+           for (let OM = 0; OM < this._size; OM++) rM(MM[OM], iM + OM)
+         }))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L1363-L1365` → after: `L180-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L180-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/277.js#L180-L204) · [Before (L1363-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/277.js#L1363-L1365)

```diff
-       drawCensus() {
-         const QQ = this.core.KTQ();
-         return this.afterCall(), QQ
+       _alignBuffer() {}
+     }
+ 
+     function QM(MM) {
+       switch (MM) {
+         case nM.UVKind:
+         case nM.UV2Kind:
+         case nM.UV3Kind:
+         case nM.UV4Kind:
+         case nM.UV5Kind:
+         case nM.UV6Kind:
+           return 2;
+         case nM.NormalKind:
+         case nM.PositionKind:
+           return 3;
+         case nM.ColorKind:
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L2)

```diff
- export const ids = [278];
+ export const ids = [278, 662];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L4)

```diff
-   41851: (QQ, WQ, XQ) => {
+   40964: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L6-L8339` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L6-L7) · [Before (L6-L8339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L6-L8339)

```diff
-       b: () => yQ,
-       f: () => sQ,
-       i: () => zQ,
-       j: () => PQ
-     });
-     var wQ = XQ(37539),
-       qQ = XQ(38986),
-       TQ = XQ(38979);
- 
-     function zQ(QQ, WQ, XQ, wQ) {
-       const qQ = TQ.u;
-       WQ.fill(0), QQ.gravity.toArray(WQ, qQ.gravity), QQ.colorDead.toArray(WQ, qQ.colorDead), XQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
-       const zQ = QQ.getColorGradients(),
-         sQ = rQ(QQ, zQ, "colour", wQ);
-       XQ[qQ.colorCount] = sQ;
-       for (let TQ = 0; TQ < sQ; TQ++) {
- ... (8318 more removed lines; see GitHub link above)
+       e: () => OM
+     });
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8341-L8450` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L9-L10) · [Before (L8341-L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L8341-L8450)

```diff
-       constructor(QQ, WQ, XQ, wQ) {
-         this.canvas = WQ, this.options = XQ, this.MWQ = void 0, this.backendName = "WebGPU (Lite)", this.i_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new EF, this.lastFrameTime = 0, this.engine = void 0, this.cB = void 0, … [truncated]
-         const {
-           resources: qQ,
-           meshes: TQ
-         } = QQ;
-         this.resources = qQ, this.particles = QQ.particles, this.MWQ = new RF(QQ.engine, WQ, wQ, QQ.device.limits, qQ), (0, lQ.K)({
-           Ds: QQ => {
-             AQ(QQ) && qQ.textureSlot(QQ)
-           },
-           loaded: QQ => AQ(QQ) ? qQ.textureLoaded(QQ) : null,
-           canvasUpdated: (QQ, WQ, XQ) => {
-             AQ(QQ) && qQ.canvasUpdated(QQ, WQ, XQ)
-           }
-         }), this.i_ = TQ.i_, this.modelMeshes = TQ.modelMeshes
-       }
- ... (94 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8452-L8460` → after: `L12-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L12-L13) · [Before (L8452-L8460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L8452-L8460)

```diff
-       describePendingWork() {
-         var QQ, WQ, XQ, wQ;
-         const qQ = [...this.particles.describePendingWork(), ...null !== (QQ = null === (WQ = this.sunShadow) || void 0 === WQ ? void 0 : WQ.describePendingWork()) && void 0 !== QQ ? QQ : []],
-           TQ = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (XQ = this.terrain.sceneDepth) && void 0 !== XQ && XQ.compiling ? 1 : 0) + (null !== (wQ = this.terrain.shadowMask) && void 0 !== wQ && wQ.compiling ? 1 : 0);
-         TQ > 0 && qQ.push(`${TQ} Lite pipelines compiling`);
-         const zQ = this.terrain.buffersAwaitingVerdict;
-         zQ > 0 && qQ.push(`${zQ} Lite terrain buffers awaiting their out-of-memory verdict`);
-         const sQ = this.resources.texturesLoading;
-         return sQ > 0 && qQ.push(`${sQ} Lite textures loading`), qQ
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8462-L8586` → after: `L15-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L15-L16) · [Before (L8462-L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L8462-L8586)

```diff
-       prepareTexture(QQ) {
-         return null !== this.resources.boundTexture(QQ) || this.resources.textureFailed(QQ)
-       }
-       drawFrame(QQ, WQ) {
-         var XQ, wQ, qQ, TQ, zQ, sQ;
-         const FQ = ps(QQ);
-         this.camera.copyFromView(FQ), this.setClearColour(FQ.clearColour[0], FQ.clearColour[1], FQ.clearColour[2]), null === (XQ = this.sunShadow) || void 0 === XQ || XQ.prepare(QQ.KJ, FQ.eye, null !== (wQ = QQ.KJ.xI) && void 0 !== wQ ? wQ : null), this.terrain.prepare(QQ, FQ), n … [truncated]
-         const PQ = performance.now();
-         this.resources.flushUploads(), null === (sQ = this.sunShadow) || void 0 === sQ || sQ.traceEntities(this.meshes);
-         try {
-           (0, SQ.j)(this.engine, this.lastFrameTime > 0 ? PQ - this.lastFrameTime : 0)
-         } finally {
-           this.resources.endUploadFrame()
-         }
-         this.lastFrameTime = PQ, this.firstTerrain && this.liteTerrain.drawStats().drawn > 0 && (this.firstTerrain.drawn(PQ), this.firstTerrain = null)
-       }
- ... (109 more removed lines; see GitHub link above)
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8590-L8603` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L21-L23) · [Before (L8590-L8603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L8590-L8603)

```diff
-   40917: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       A: () => jQ,
-       b: () => qQ,
-       d: () => wQ,
-       h: () => rQ,
-       i: () => gQ,
-       k: () => yQ,
-       n: () => TQ,
-       p: () => sQ,
-       r: () => FQ,
-       t: () => zQ,
-       w: () => BQ,
-       z: () => IQ
+   63910: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       postprocessVertexShader: () => aM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8605-L8675` → after: `L25-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L25-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L25-L28) · [Before (L8605-L8675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L8605-L8675)

```diff
-     const wQ = 3,
-       qQ = 0,
-       TQ = 1,
-       zQ = 2,
-       sQ = {
-         uniform: 3,
-         Gr: 4,
-         special: 5,
-         volume: 6,
-         sampler: 7,
-         entities: 8,
-         entityGrids: 9
-       },
-       FQ = 10,
-       PQ = "BloxdPackInputs",
-       gQ = "bloxdPackInputs",
- ... (55 more removed lines; see GitHub link above)
+     var OM = iM(40964);
+     const SM = "postprocessVertexShader",
+       jM = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
+     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L8677-L8679` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/278.js#L30-L31) · [Before (L8677-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/278.js#L8677-L8679)

```diff
-       off: 0,
-       strict: 1,
-       allow: 2
+       name: SM,
+       shader: jM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L4)

```diff
-   41128: (QQ, WQ, XQ) => {
+   41167: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L6)

```diff
-       e: () => zQ,
+       c: () => mM,
+       f: () => LM,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L8` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L9-L12) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L8)

```diff
-       j: () => sQ
+       i: () => HM,
+       m: () => QM,
+       n: () => PM,
+       r: () => zM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L10-L11` → after: `L14-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L14-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L14-L217) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L10-L11)

```diff
-     let wQ = null,
-       qQ = null;
+     var OM = iM(39711),
+       SM = iM(41176);
+ 
+     function jM(MM, rM, iM, OM) {
+       switch (rM) {
+         case 5120: {
+           let rM = MM.getInt8(iM);
+           return OM && (rM = Math.max(rM / 127, -1)), rM
+         }
+         case 5121: {
+           let rM = MM.getUint8(iM);
+           return OM && (rM /= 255), rM
+         }
+         case 5122: {
+           let rM = MM.getInt16(iM, !0);
+           return OM && (rM = Math.max(rM / 32767, -1)), rM
+ ... (188 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L14-L15` → after: `L220-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L220-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L220-L225) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L14-L15)

```diff
-       return wQ = QQ, qQ = null, sQ(WQ), () => {
-         wQ === QQ && (wQ = null, qQ = null)
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
+         OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+       if (Array.isArray(MM)) {
+         for (let SM = 0; SM < rM; SM++)
+           if (MM[iM + SM] - OM > 65535) return !0;
+         return !1
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L19-L21` → after: `L230-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L230-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L230-L439) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L19-L21)

```diff
-     function zQ() {
-       return null === qQ ? null : {
-         ...qQ
+     function HM(MM) {
+       const rM = MM.buffer;
+       if (rM instanceof ArrayBuffer) return MM;
+       const iM = new ArrayBuffer(MM.byteLength);
+       return new Uint8Array(iM).set(new Uint8Array(rM, MM.byteOffset, MM.byteLength)), iM
+     }
+   },
+   40998: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => bM,
+       c: () => CM,
+       h: () => eM,
+       e: () => WM,
+       i: () => sM
+     });
+     class OM {
+ ... (194 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L26-L29` → after: `L454-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L454-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L454-L652) · [Before (L26-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L26-L29)

```diff
-       var WQ;
-       null !== (WQ = wQ) && void 0 !== WQ && WQ(QQ) && (qQ = {
-         ...QQ
-       })
+       MM.processor && MM.processor.initializeShaders && MM.processor.initializeShaders(MM.processingContext)
+     }
+ 
+     function eM(MM, rM, iM, OM) {
+       rM.processor?.preProcessShaderCode && (MM = rM.processor.preProcessShaderCode(MM, rM.isFragment)), WM(MM, rM, (MM => {
+         rM.processCodeAfterIncludes && (MM = rM.processCodeAfterIncludes(rM.isFragment ? "fragment" : "vertex", MM, rM.defines));
+         const SM = function(MM, rM, iM) {
+           let OM = function(MM, rM) {
+             if (rM.processor?.noPrecision) return MM;
+             const iM = rM.shouldUseHighPrecisionShader; - 1 === MM.indexOf("precision highp float") ? MM = iM ? "precision highp float;\n" + MM : "precision mediump float;\n" + MM : iM || (MM = MM.replace("precision highp float", "precision mediump float"));
+             return MM
+           }(MM, rM);
+           if (!rM.processor) return OM;
+           if (0 === rM.processor.shaderLanguage && -1 !== OM.indexOf("#version 3") && (OM = OM.replace("#version 300 es", ""), !rM.processor.parseGLES3)) return OM;
+           const SM = rM.defines,
+             jM = pM(rM, iM);
+ ... (183 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L32` → after: `L655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L655) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L32)

```diff
-   41139: (QQ, WQ, XQ) => {
+   40981: (MM, rM, iM) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L35` → after: `L659-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L659-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L659-L661) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L35)

```diff
-       g: () => TQ
+       f: () => PM,
+       i: () => aM,
+       k: () => nM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L37` → after: `L663-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L663-L664) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L37)

```diff
-     let wQ = null;
+     var OM = iM(40990);
+     const SM = {};
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L40-L42` → after: `L667-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L667-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L667-L680) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L40-L42)

```diff
-       wQ = {
-         conn: QQ,
-         reason: WQ
+       return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (rM ? rM + "\n" : "") + MM
+     }
+ 
+     function aM(MM, rM, iM, jM, aM, PM, nM) {
+       const QM = nM || SM.loadFile;
+       if (!QM) throw (0, OM.n)("FileTools");
+       return QM(MM, rM, iM, jM, aM, PM)
+     }
+ 
+     function PM(MM, rM, iM, OM) {
+       if (MM) return rM ? MM.IS_NDC_HALF_ZRANGE = "" : delete MM.IS_NDC_HALF_ZRANGE, iM ? MM.USE_REVERSE_DEPTHBUFFER = "" : delete MM.USE_REVERSE_DEPTHBUFFER, void(OM ? MM.USE_EXACT_SRGB_CONVERSIONS = "" : delete MM.USE_EXACT_SRGB_CONVERSIONS);
+       {
+         let MM = "";
+         return rM && (MM += "#define IS_NDC_HALF_ZRANGE"), iM && (MM && (MM += "\n"), MM += "#define USE_REVERSE_DEPTHBUFFER"), OM && (MM && (MM += "\n"), MM += "#define USE_EXACT_SRGB_CONVERSIONS"), MM
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L47-L49` → after: `L758-L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L758-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L758-L774) · [Before (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L47-L49)

```diff
-       var WQ;
-       const XQ = (null === (WQ = wQ) || void 0 === WQ ? void 0 : WQ.conn) === QQ ? wQ.reason : null;
-       return wQ = null, XQ
+       return !!MM && !MM.__isSideEffectStub
+     }
+ 
+     function zM(MM, rM) {
+       return {
+         get() {},
+         set(MM) {
+           Object.defineProperty(this, rM, {
+             value: MM,
+             writable: !0,
+             configurable: !0,
+             enumerable: !0
+           })
+         },
+         configurable: !0,
+         enumerable: !0
+ ... (1 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L52` → after: `L777-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L777-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L777-L795) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L52)

```diff
-   41195: (QQ, WQ, XQ) => {
+   40972: (MM, rM, iM) => {
+     function OM() {
+       return "undefined" !== typeof window
+     }
+ 
+     function SM() {
+       return "undefined" !== typeof navigator
+     }
+ 
+     function jM() {
+       return "undefined" !== typeof document
+     }
+ 
+     function aM(MM) {
+       let rM = "",
+         iM = MM.firstChild;
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L55` → after: `L798-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L798-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L798-L807) · [Before (L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L55)

```diff
-       d: () => qQ
+       g: () => jM,
+       k: () => SM,
+       l: () => OM
+     })
+   },
+   41156: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => OM,
+       e: () => SM,
+       i: () => jM
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L57-L59` → after: `L809-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L809-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L809-L818) · [Before (L57-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L57-L59)

```diff
-     let wQ = {
-       fire: () => {},
-       close: () => {}
+     class OM extends Error {}
+     OM._setPrototypeOf = Object.setPrototypeOf || ((MM, rM) => (MM.__proto__ = rM, MM));
+     const SM = {
+       MeshInvalidPositionsError: 0,
+       UnsupportedTextureError: 1e3,
+       GLTFLoaderUnexpectedMagicError: 2e3,
+       SceneLoaderError: 3e3,
+       LoadFileError: 4e3,
+       RequestFileError: 4001,
+       ReadFileError: 4002
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L63` → after: `L1186-L1238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1186-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L1186-L1238) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L63)

```diff
-       wQ = QQ
+       return (0, nM.d)(MM.split(",")[1])
+     }
+     const WM = MM => (0, nM.f)(MM.split(",")[1]);
+     let sM;
+     const DM = (MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) => {
+       sM = {
+         DecodeBase64UrlToBinary: MM,
+         DecodeBase64UrlToString: rM,
+         DefaultRetryStrategy: iM.DefaultRetryStrategy,
+         BaseUrl: iM.BaseUrl,
+         CorsBehavior: iM.CorsBehavior,
+         PreprocessUrl: iM.PreprocessUrl,
+         IsBase64DataUrl: OM,
+         IsFileURL: SM,
+         LoadFile: jM,
+         LoadImage: aM,
+ ... (37 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L67` → after: `L1250-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1250-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/279.js#L1250-L1506) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/279.js#L67)

```diff
-       return wQ
+       if (OM) return OM;
+       const MM = new ArrayBuffer(4),
+         rM = new Float32Array(MM),
+         iM = new Uint32Array(MM),
+         SM = new Uint32Array(512),
+         jM = new Uint32Array(512);
+       for (let OM = 0; OM < 256; ++OM) {
+         const MM = OM - 127;
+         MM < -24 ? (SM[OM] = 0, SM[256 | OM] = 32768, jM[OM] = 24, jM[256 | OM] = 24) : MM < -14 ? (SM[OM] = 1024 >> -MM - 14, SM[256 | OM] = 1024 >> -MM - 14 | 32768, jM[OM] = -MM - 1, jM[256 | OM] = -MM - 1) : MM <= 15 ? (SM[OM] = MM + 15 << 10, SM[256 | OM] = MM + 15 << 10 | 3 … [truncated]
+       }
+       const aM = new Uint32Array(2048),
+         PM = new Uint32Array(64),
+         nM = new Uint32Array(64);
+       for (let OM = 1; OM < 1024; ++OM) {
+         let MM = OM << 13,
+           rM = 0;
+ ... (241 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/280.js#L4-L6)

```diff
-   41265: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       gamePackSource: () => TQ
+   41210: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => jM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L8-L9` → after: `L8-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/280.js#L8-L46) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/280.js#L8-L9)

```diff
-     var wQ = XQ(5340),
-       qQ = XQ(1548);
+     var OM = iM(39711),
+       SM = iM(38085);
+     class jM {
+       static Instantiate(MM) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[MM]) return this.RegisteredExternalClasses[MM];
+         const rM = (0, SM.b)(MM);
+         if (rM) return rM;
+         OM.e.Warn(MM + " not found, you may have missed an import.");
+         const iM = MM.split(".");
+         let jM = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let OM = 0, SM = iM.length; OM < SM; OM++) jM = jM[iM[OM]];
+         return "function" !== typeof jM ? null : jM
+       }
+     }
+     jM.RegisteredExternalClasses = {}
+   },
+ ... (23 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L12-L15` → after: `L49-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L49-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/280.js#L49-L612) · [Before (L12-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/280.js#L12-L15)

```diff
-       return {
-         packKey: async WQ => (await qQ.e.getGame(QQ, WQ, !0)).customTexturePackKey,
-         fetchPack: wQ.e
-       }
+       const rM = aM(MM),
+         iM = PM(MM);
+       return rM - MM > MM - iM ? iM : rM
+     }
+ 
+     function aM(MM) {
+       return MM--, MM |= MM >> 1, MM |= MM >> 2, MM |= MM >> 4, MM |= MM >> 8, MM |= MM >> 16, ++MM
+     }
+ 
+     function PM(MM) {
+       return MM |= MM >> 1, MM |= MM >> 2, MM |= MM >> 4, MM |= MM >> 8, (MM |= MM >> 16) - (MM >> 1)
+     }
+ 
+     function nM(MM, rM) {
+       let iM;
+       switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
+ ... (548 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L2)

```diff
- export const ids = [280, 281];
+ export const ids = [281];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L4-L6)

```diff
-   41265: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       gamePackSource: () => TQ
+   41520: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => OM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L8-L14` → after: `L8-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L8-L92) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L8-L14)

```diff
-     var wQ = XQ(5340),
-       qQ = XQ(1548);
- 
-     function TQ(QQ) {
-       return {
-         packKey: async WQ => (await qQ.e.getGame(QQ, WQ, !0)).customTexturePackKey,
-         fetchPack: wQ.e
+     let OM = !1
+   },
+   41091: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => hM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38068),
+       aM = iM(38040),
+       PM = iM(38064),
+       nM = iM(38885),
+       QM = iM(41115);
+     class zM {
+       get wrapU() {
+         return this._wrapU
+ ... (69 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L18-L24` → after: `L696-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L696-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L696-L699) · [Before (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L18-L24)

```diff
-   51222: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       fetchGuestContext: () => rQ,
-       guestJoinTarget: () => pQ,
-       guestJoinWithPack: () => jQ,
-       guestPackForGame: () => IQ,
-       invalidateGuestTrafficCode: () => DQ
+   41560: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => GM,
+       h: () => EM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L26-L37` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L701-L711) · [Before (L26-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L26-L37)

```diff
-     var wQ = XQ(1238),
-       qQ = XQ(1548),
-       TQ = XQ(105),
-       zQ = XQ(36766),
-       sQ = XQ(1165),
-       FQ = XQ(40963),
-       PQ = XQ(41265),
-       gQ = XQ(40926);
- 
-     function JQ() {
-       if (TQ.featureFlags.useTurnstile) throw new FQ.TurnstilePageError
-     }
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38068),
+       aM = iM(38040),
+       PM = iM(41091),
+       nM = iM(38085),
+       QM = iM(40990),
+       zM = iM(41003),
+       LM = iM(41210),
+       mM = iM(38744),
+       HM = iM(41160);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L39-L48` → after: `L713-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L713-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L713-L724) · [Before (L39-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L39-L48)

```diff
-     function rQ() {
-       return (0, sQ.fetchAnonymousUserContext)(!0).catch((QQ => (console.warn("the guest context didn't load", QQ), null)))
-     }
-     async function IQ(QQ, WQ, XQ, wQ) {
-       try {
-         const qQ = await XQ;
-         if (null === qQ) return void console.warn(`the texture pack step for ${QQ} has no guest context: the pack in play stays`);
-         await WQ.packForGame(QQ, (0, PQ.gamePackSource)(qQ), wQ)
-       } catch (qQ) {
-         console.warn(`the texture pack step for ${QQ} failed: the pack in play stays`, qQ)
+     function hM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const OM = rM.width,
+         SM = rM.height;
+       if (MM instanceof Float32Array) {
+         let rM = MM.byteLength / MM.BYTES_PER_ELEMENT;
+         const iM = new Uint8Array(rM);
+         for (; --rM >= 0;) {
+           let OM = MM[rM];
+           OM < 0 ? OM = 0 : OM > 1 && (OM = 1), iM[rM] = 255 * OM
+         }
+         MM = iM
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L51-L54` → after: `L739-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L739-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L739-L746) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L51-L54)

```diff
-     async function jQ(QQ, WQ, XQ, wQ) {
-       JQ();
-       const qQ = rQ();
-       return await XQ(((WQ, XQ) => IQ(QQ, WQ, qQ, XQ))), pQ(QQ, WQ, wQ(), await qQ)
+ 
+     function JM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const OM = MM.getInternalTexture();
+       if (!OM) return null;
+       const SM = MM._readPixelsSync(rM, iM);
+       return SM ? hM(SM, MM.getSize(), OM.invertY) : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L56-L64` → after: `L748-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L748-L754) · [Before (L56-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L56-L64)

```diff
-     let BQ = null,
-       yQ = null;
-     async function VQ() {
-       if ((null === BQ || BQ.hasExpired()) && (yQ ??= (0, sQ.fetchAnonymousUserContext)(!0).then((QQ => {
-           BQ = QQ
-         })).finally((() => {
-           yQ = null
-         })), await yQ), null === BQ) throw new Error("no guest context to post as");
-       return BQ.getMetricsCookies()
+     async function dM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const OM = MM.getInternalTexture();
+       if (!OM) return null;
+       const SM = await MM.readPixels(rM, iM);
+       return SM ? hM(SM, MM.getSize(), OM.invertY) : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L66-L68` → after: `L756-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L756-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L756-L1231) · [Before (L66-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L66-L68)

```diff
-     async function DQ() {
-       var QQ;
-       await (null === (QQ = BQ) || void 0 === QQ ? void 0 : QQ.invalidateTrafficCode())
+     var yM = iM(41520),
+       lM = iM(41121);
+     let EM = (() => {
+         var MM;
+         let rM, iM, hM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM = PM.c,
+           pM = [],
+           WM = [],
+           sM = [],
+           DM = [],
+           kM = [],
+           ZM = [],
+           oM = [],
+           fM = [],
+           YM = [],
+           NM = [],
+           AM = [],
+ ... (460 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L70-L91` → after: `L1233-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1233-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/281.js#L1233-L1288) · [Before (L70-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/281.js#L70-L91)

```diff
-     async function pQ(QQ, WQ, XQ) {
-       let TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-       JQ();
-       const FQ = null !== TQ && void 0 !== TQ ? TQ : await (0, sQ.fetchAnonymousUserContext)(!0);
-       if (BQ = FQ, FQ.isLoggedIn()) throw new Error("the shell's page joins as a guest only");
-       const PQ = await qQ.e.matchmakePlayer(FQ, WQ, QQ, (0, zQ.c)()),
-         rQ = performance.now();
-       if (!("gameServerHost" in PQ)) throw new Error(`matchmaking refused: ${PQ.failReason}`);
-       const IQ = wQ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(PQ.gameServerHost);
-       if (IQ.isError()) throw new Error(`no socket URL for ${PQ.gameServerHost}: ${IQ.asError().message}`);
-       const jQ = {
-         endpoint: IQ.getValue(),
-         gameNameWithVariation: PQ.gameNameWithVariation,
-         lobbyName: PQ.lobbyName
-       };
-       return {
- ... (6 more removed lines; see GitHub link above)
+   },
+   41115: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM
+     });
+     class OM {
+       constructor(MM, rM) {
+         this.width = MM, this.height = rM
+       }
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
+       }
+       getClassName() {
+         return "Size"
+       }
+       getHashCode() {
+ ... (40 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/282.js#L4-L6)

```diff
-   41271: (QQ, WQ, XQ) => {
-     XQ.r(WQ), XQ.d(WQ, {
-       BloxdInformation: () => IQ
+   41354: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => aM,
+       e: () => PM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L8-L16` → after: `L9-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L9-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/282.js#L9-L436) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/282.js#L8-L16)

```diff
-     var wQ = XQ(1226),
-       qQ = XQ(61),
-       TQ = XQ(105),
-       zQ = XQ(1507),
-       sQ = XQ(158),
-       FQ = XQ(1094),
-       PQ = XQ(1145);
-     const gQ = (0, qQ.lazy)((() => Promise.all([XQ.e(126), XQ.e(402)]).then((() => XQ(6914))))),
-       JQ = (0, qQ.lazy)((() => XQ.e(128).then((() => XQ(6928)))));
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
+ ... (412 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L18-L80` → after: `L438-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L438-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/282.js#L438-L441) · [Before (L18-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/282.js#L18-L80)

```diff
-     function rQ() {
-       return (0, PQ.jsxs)("div", {
-         className: "LegalText",
-         children: [(0, PQ.jsx)("div", {
-           className: "BloxdInformationHeader FullyFancyText",
-           children: "Security Exploit Bounty Program"
-         }), (0, PQ.jsx)("p", {
-           children: "We have a program for reporting security exploits. Find an important security flaw in Bloxd? Report it through the process below. Please include steps to reproduce the exploit, including any relevant code if the exploit requires it. You will receive the rewar … [truncated]
-         }), (0, PQ.jsx)("h3", {
-           children: "1. How to Report"
-         }), (0, PQ.jsxs)("p", {
-           children: ["Please follow the instructions on", " ", (0, PQ.jsx)("a", {
-             href: "https://forms.gle/wUL8WiH3LbGiJBzF7",
-             target: "_blank",
-             rel: "noreferrer",
-             children: "this form"
- ... (47 more removed lines; see GitHub link above)
+     function GM(MM, rM, iM) {
+       let OM = "";
+       for (const SM of MM) OM += SM;
+       return new EM(OM, rM, null, iM, MM)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L83-L151` → after: `L444-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/282.js#L444-L450) · [Before (L83-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/282.js#L83-L151)

```diff
-     function IQ() {
-       const {
-         t: QQ
-       } = (0, wQ.C)(), [WQ, XQ] = (0, qQ.useState)("partnersAndCredits"), IQ = {
-         partnersAndCredits: {
-           title: TQ.featureFlags.usePartnerLinks ? QQ("homePage:partnersAndCredits") : QQ("homePage:credits"),
-           content: (0, PQ.jsxs)(PQ.Fragment, {
-             children: [(0, PQ.jsx)("div", {
-               className: "BloxdInformationHeader FullyFancyText",
-               children: TQ.featureFlags.usePartnerLinks ? QQ("homePage:partnersAndCredits") : QQ("homePage:credits")
-             }), TQ.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
-           })
-         },
-         bloxdIngameRules: {
-           title: QQ("homePage:bloxdIngameRules"),
-           content: (0, PQ.jsxs)(PQ.Fragment, {
- ... (53 more removed lines; see GitHub link above)
+     function CM(MM, rM) {
+       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const SM = rM.useDelayedTextureLoading;
+       rM.useDelayedTextureLoading = !1;
+       const jM = new EM(MM, rM, null, !1, null, null, null, void 0, !0, iM, OM);
+       return rM.useDelayedTextureLoading = SM, jM
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L4)

```diff
-   41309: (QQ, WQ, XQ) => {
+   41313: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L6-L13` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L6) · [Before (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L6-L13)

```diff
-       b: () => pQ,
-       d: () => RQ,
-       f: () => yQ,
-       h: () => VQ,
-       k: () => rQ,
-       o: () => BQ,
-       s: () => jQ,
-       w: () => IQ
+       d: () => tM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L15-L89` → after: `L8-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L8-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L8-L76) · [Before (L15-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L15-L89)

```diff
-     var wQ = XQ(37370),
-       qQ = XQ(37546),
-       TQ = XQ(37404),
-       zQ = XQ(41313),
-       sQ = XQ(40491),
-       FQ = XQ(40277),
-       PQ = XQ(40314),
-       gQ = XQ(40286),
-       JQ = XQ(37418);
-     const rQ = Object.freeze(new wQ.h(0, 0, 0, 0)),
-       IQ = Object.freeze(wQ.s.Zero()),
-       jQ = Object.freeze(wQ.q.Zero()),
-       BQ = Object.freeze(FQ.e.Zero()),
-       yQ = Object.freeze(qQ.b.Black()),
-       VQ = Object.freeze(new qQ.d(0, 0, 0, 0)),
-       DQ = {
- ... (59 more removed lines; see GitHub link above)
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(41320),
+       PM = iM(41354),
+       nM = iM(41287),
+       QM = iM(41205);
+     let zM = (() => {
+       var MM;
+       let rM, iM, aM, PM, zM, LM, mM, HM, hM, JM, dM, yM = [],
+         lM = [],
+         EM = [],
+         UM = [],
+         GM = [],
+         CM = [],
+         eM = [],
+ ... (53 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L93-L293` → after: `L79-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L79-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L79-L321) · [Before (L93-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L93-L293)

```diff
-       }
-       getRange(QQ) {
-         return this._ranges[QQ]
-       }
-       getKeys() {
-         return this._keys
-       }
-       getHighestFrame() {
-         let QQ = 0;
-         for (let WQ = 0, XQ = this._keys.length; WQ < XQ; WQ++) QQ < this._keys[WQ].frame && (QQ = this._keys[WQ].frame);
-         return QQ
-       }
-       getEasingFunction() {
-         return this._easingFunction
-       }
-       setEasingFunction(QQ) {
- ... (185 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
+         }
+         _onLostFocus() {
+           this._keys.length = 0
+         }
+         getSimpleName() {
+           return "keyboard"
+         }
+         _getLocalRotation() {
+           const MM = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * MM
+         }
+       }, (() => {
+         const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         rM = [(0, SM.L)()], iM = [(0, SM.L)()], aM = [(0, SM.L)()], PM = [(0, SM.L)()], zM = [(0, SM.L)()], LM = [(0, SM.L)()], mM = [(0, SM.L)()], HM = [(0, SM.L)()], hM = [(0, SM.L)()], JM = [(0, SM.L)()], dM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
+ ... (227 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L296-L311` → after: `L325-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L325-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L325-L724) · [Before (L296-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L296-L311)

```diff
-         return WQ
-       }
-       setKeys(QQ) {
-         let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = QQ;
-         else if (this._keys = QQ.slice(0), WQ)
-           for (let XQ = 0; XQ < this._keys.length; XQ++) {
-             const QQ = this._keys[XQ];
-             this._keys[XQ] = {
-               frame: QQ.frame,
-               value: QQ.value.clone ? QQ.value.clone() : QQ.value,
-               inTangent: QQ.inTangent && QQ.inTangent.clone ? QQ.inTangent.clone() : QQ.inTangent,
-               outTangent: QQ.outTangent && QQ.outTangent.clone ? QQ.outTangent.clone() : QQ.outTangent,
-               interpolation: QQ.interpolation,
-               lockedTangent: QQ.lockedTangent,
-               easingFunction: QQ.easingFunction
+         getClassName() {
+           return "FreeCameraMouseInput"
+         }
+         getSimpleName() {
+           return "mouse"
+         }
+       }, (() => {
+         const QM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         rM = [(0, SM.L)()], iM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
+           kind: "field",
+           name: "buttons",
+           static: !1,
+           private: !1,
+           access: {
+             has: MM => "buttons" in MM,
+             get: MM => MM.buttons,
+ ... (384 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L315-L323` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L797-L798) · [Before (L315-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L315-L323)

```diff
-       createKeyForFrame(QQ) {
-         DQ.key = 0;
-         const WQ = this._interpolate(QQ, DQ, !0);
-         if (!WQ) return this._keys[DQ.key].frame === QQ ? DQ.key : DQ.key + 1;
-         const XQ = {
-           frame: QQ,
-           value: WQ.clone ? WQ.clone() : WQ
-         };
-         return this._keys.splice(DQ.key + 1, 0, XQ), DQ.key + 1
+       addKeyboard() {
+         return this.add(new zM), this
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L325-L354` → after: `L800-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L800-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L800-L802) · [Before (L325-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L325-L354)

```diff
-       serialize() {
-         const QQ = {};
-         QQ.name = this.name, QQ.property = this.targetProperty, QQ.framePerSecond = this.framePerSecond, QQ.dataType = this.dataType, QQ.loopBehavior = this.nw, QQ.enableBlending = this.enableBlending, QQ.blendingSpeed = this.blendingSpeed;
-         const WQ = this.dataType;
-         QQ.keys = [];
-         const XQ = this.getKeys();
-         for (let wQ = 0; wQ < XQ.length; wQ++) {
-           const qQ = XQ[wQ],
-             TQ = {};
-           switch (TQ.frame = qQ.frame, WQ) {
-             case pQ.ANIMATIONTYPE_FLOAT:
-               TQ.values = [qQ.value], void 0 !== qQ.inTangent && TQ.values.push(qQ.inTangent), void 0 !== qQ.outTangent && (void 0 === qQ.inTangent && TQ.values.push(void 0), TQ.values.push(qQ.outTangent)), void 0 !== qQ.interpolation && (void 0 === qQ.inTangent && TQ.values.push … [truncated]
-               break;
-             case pQ.ANIMATIONTYPE_QUATERNION:
-             case pQ.ANIMATIONTYPE_MATRIX:
-             case pQ.ANIMATIONTYPE_VECTOR3:
- ... (14 more removed lines; see GitHub link above)
+       addMouse() {
+         let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this._mouseInput || (this._mouseInput = new HM(MM), this.add(this._mouseInput)), this
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L356-L358` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L804-L805) · [Before (L356-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L356-L358)

```diff
-       static _UniversalLerp(QQ, WQ, XQ) {
-         const wQ = QQ.constructor;
-         return wQ.Lerp ? wQ.Lerp(QQ, WQ, XQ) : wQ.Slerp ? wQ.Slerp(QQ, WQ, XQ) : QQ.toFixed ? QQ * (1 - XQ) + XQ * WQ : WQ
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L360-L408` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L807-L808) · [Before (L360-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L360-L408)

```diff
-     }
- 
-     function GQ(QQ, WQ, XQ) {
-       let qQ;
-       qQ = "object" === typeof WQ ? WQ : {
-         referenceFrame: WQ ?? 0,
-         range: XQ,
-         cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
-       };
-       let TQ = QQ;
-       qQ.cloneOriginalAnimation && (TQ = QQ.clone(), TQ.name = qQ.clonedAnimationName || TQ.name);
-       const zQ = TQ.getKeys();
-       if (!zQ.length) return TQ;
-       const sQ = qQ.referenceFrame && qQ.referenceFrame >= 0 ? qQ.referenceFrame : 0;
-       let FQ = 0;
- ... (33 more removed lines; see GitHub link above)
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new yM, this.add(this._mouseWheelInput)), this
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L410-L441` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L810-L811) · [Before (L410-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L410-L441)

```diff
-       TQ.dataType === pQ.ANIMATIONTYPE_QUATERNION ? rQ.referenceValue.normalize().conjugateInPlace() : TQ.dataType === pQ.ANIMATIONTYPE_MATRIX && (rQ.referenceValue.decompose(rQ.referenceScaling, rQ.referenceQuaternion, rQ.referencePosition), rQ.referenceQuaternion.normalize().co … [truncated]
-       let yQ = Number.MAX_VALUE;
-       const VQ = qQ.clipKeys ? [] : null;
-       for (let DQ = FQ; DQ <= gQ; DQ++) {
-         let QQ = BQ[DQ];
-         if ((VQ || qQ.cloneOriginalAnimation) && (QQ = {
-             frame: QQ.frame,
-             value: QQ.value.clone ? QQ.value.clone() : QQ.value,
-             inTangent: QQ.inTangent,
-             outTangent: QQ.outTangent,
-             interpolation: QQ.interpolation,
-             lockedTangent: QQ.lockedTangent,
-             easingFunction: QQ.easingFunction
-           }, VQ && (yQ === Number.MAX_VALUE && (yQ = QQ.frame), QQ.frame -= yQ, VQ.push(QQ))), !DQ || TQ.dataType === pQ.ANIMATIONTYPE_FLOAT || QQ.value !== PQ.value) switch (TQ.dataType) {
-           case pQ.ANIMATIONTYPE_MATRIX:
-             QQ.value.decompose(rQ.keyScaling, rQ.keyQuaternion, rQ.keyPosition), rQ.keyPosition.YwQ(rQ.referencePosition), rQ.keyScaling.divideInPlace(rQ.referenceScaling), rQ.referenceQuaternion.multiplyToRef(rQ.keyQuaternion, rQ.keyQuaternion), wQ.e.ComposeToRef(rQ.keyScaling,  … [truncated]
- ... (16 more removed lines; see GitHub link above)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L443-L524` → after: `L813-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L813-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L813-L817) · [Before (L443-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L443-L524)

```diff
-       return VQ && TQ.setKeys(VQ, !0), TQ
-     }
- 
-     function UQ(QQ, WQ, XQ, wQ) {
-       const qQ = new pQ(QQ + "Animation", QQ, XQ, WQ, pQ.ANIMATIONLOOPMODE_CONSTANT);
-       return qQ.setEasingFunction(wQ), qQ
-     }
- 
-     function bQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
-       const JQ = pQ._PrepareAnimation(QQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ);
-       return JQ ? (WQ.sE && (gQ = WQ.sE()), gQ ? gQ.beginDirectAnimation(WQ, [JQ], 0, qQ, JQ.nw !== pQ.ANIMATIONLOOPMODE_CONSTANT, 1, PQ) : null) : null
-     }
- 
-     function vQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
-       const JQ = pQ._PrepareAnimation(QQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ);
-       if (!JQ) return null;
- ... (66 more removed lines; see GitHub link above)
+       addTouch() {
+         return this.add(new lM), this
+       }
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L526-L543` → after: `L819-L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L819-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L819-L981) · [Before (L526-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L526-L543)

```diff
-       if (WQ.setKeys(TQ), QQ.Qy)
-         for (sQ = 0; sQ < QQ.Qy.length; sQ++) zQ = QQ.Qy[sQ], WQ.createRange(zQ.name, zQ.from, zQ.to);
-       return WQ
-     }
-     async function hQ(QQ, WQ) {
-       return await new Promise(((XQ, wQ) => {
-         const qQ = new PQ.b;
-         qQ.addEventListener("readystatechange", (() => {
-           if (4 == qQ.readyState)
-             if (200 == qQ.status) {
-               let WQ = JSON.parse(qQ.responseText);
-               if (WQ.animations && (WQ = WQ.animations), WQ.length) {
-                 const QQ = [];
-                 for (const XQ of WQ) QQ.push(lQ(XQ));
-                 XQ(QQ)
-               } else {
- ... (2 more removed lines; see GitHub link above)
+     }(EM = eM.prototype).addDeviceOrientation ?? (EM.addDeviceOrientation = (0, CM.j)("FreeCameraInputsManager", "addDeviceOrientation")), (UM = eM.prototype).addVirtualJoystick ?? (UM.addVirtualJoystick = (0, CM.j)("FreeCameraInputsManager", "addVirtualJoystick")), (GM = eM.prot … [truncated]
+     var bM = iM(41005),
+       wM = iM(38085);
+     let tM = (() => {
+         var MM;
+         let rM, iM, PM, nM, zM = aM.g,
+           LM = [],
+           mM = [],
+           HM = [],
+           hM = [],
+           JM = [],
+           dM = [],
+           yM = [],
+           lM = [];
+         return MM = class extends zM {
+           get angularSensibility() {
+ ... (147 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L545-L567` → after: `L983-L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L983-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L983-L994) · [Before (L545-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L545-L567)

```diff
-             } else wQ("Unable to load the animation")
-         })), qQ.open("GET", WQ), qQ.send()
-       }))
-     }
-     async function iQ(QQ) {
-       const WQ = this?.SnippetUrl ?? pQ.SnippetUrl;
-       return await new Promise(((XQ, wQ) => {
-         const qQ = new PQ.b;
-         qQ.addEventListener("readystatechange", (() => {
-           if (4 == qQ.readyState)
-             if (200 == qQ.status) {
-               const WQ = JSON.parse(JSON.parse(qQ.responseText).jsonPayload);
-               if (WQ.animations) {
-                 const wQ = JSON.parse(WQ.animations),
-                   qQ = [];
-                 for (const WQ of wQ.animations) {
- ... (7 more removed lines; see GitHub link above)
+             },
+             metadata: jM
+           }, LM, mM), (0, OM.i)(null, null, iM, {
+             kind: "field",
+             name: "ellipsoidOffset",
+             static: !1,
+             private: !1,
+             access: {
+               has: MM => "ellipsoidOffset" in MM,
+               get: MM => MM.ellipsoidOffset,
+               set: (MM, rM) => {
+                 MM.ellipsoidOffset = rM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L569-L628` → after: `L996-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L996-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/283.js#L996-L1033) · [Before (L569-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/283.js#L569-L628)

```diff
-             } else wQ("Unable to load the snippet " + QQ)
-         })), qQ.open("GET", WQ + "/" + QQ.replace(/#/g, "/")), qQ.send()
-       }))
-     }
-     pQ._UniqueIdGenerator = 0, pQ.AllowMatricesInterpolation = !1, pQ.AllowMatrixDecomposeForInterpolation = !0, pQ.InheritOriginalValueFromActiveAnimations = !1, pQ.SnippetUrl = "https://snippet.babylonjs.com", pQ.ANIMATIONTYPE_FLOAT = 0, pQ.ANIMATIONTYPE_VECTOR3 = 1, pQ.ANIMATI … [truncated]
-     const cQ = iQ;
-     let AQ = !1;
- 
-     function RQ() {
-       AQ || (AQ = !0, pQ.Parse = lQ, pQ.ParseFromFileAsync = hQ, pQ.ParseFromSnippetAsync = iQ, pQ.CreateFromSnippetAsync = cQ, pQ.CreateAnimation = UQ, pQ.CreateAndStartAnimation = bQ, pQ.CreateAndStartHierarchyAnimation = vQ, pQ.CreateMergeAndStartAnimation = dQ, pQ.MakeAnimati … [truncated]
-     }
-   },
-   41313: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ
-     });
- ... (44 more removed lines; see GitHub link above)
+             },
+             metadata: jM
+           }, HM, hM), (0, OM.i)(null, null, PM, {
+             kind: "field",
+             name: "checkCollisions",
+             static: !1,
+             private: !1,
+             access: {
+               has: MM => "checkCollisions" in MM,
+               get: MM => MM.checkCollisions,
+               set: (MM, rM) => {
+                 MM.checkCollisions = rM
+               }
+             },
+             metadata: jM
+           }, JM, dM), (0, OM.i)(null, null, nM, {
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/284.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/284.js` (Changed code · before: `L4-L5` → after: `L4-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-aac11077e59a6285c70741b824c3bd948ae8cfca4eabfa0f7dadc4dd02f62ef5) · [After (L4-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L880) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/284.js#L4-L5)

```diff
-   41417: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKGSURBVHic7Zk9bNNAFMf/MZFIwrUBCVVILF26tXNnKrEwIHViYSxLkNgIHxVCCFGgK6KwdOvClK1LRTuXBaF2i5BYkBBDoOGSGAkcBucF+2zHcXzGMX6/xbnn9y7n5/fu3 … [truncated]
+   41366: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => mM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(38173),
+       PM = iM(41328),
+       nM = iM(41240),
+       QM = iM(38085),
+       zM = iM(41309),
+       LM = iM(41121);
+     let mM = (() => {
+       var MM, rM;
+       let iM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM = PM.d,
+ ... (861 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/285.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/285.js` (Changed code · before: `L4-L5` → after: `L4-L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-fed0fcaea8892faf95ca06e82d3fc31782ac0ac6cf4b5866965f6dbe66a5ba0b) · [After (L4-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L2236) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/285.js#L4-L5)

```diff
-   41426: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQjqUTcxgHs7DmCvQv0ArbO4AB2DuA2ItHEklXFotR4U9/U/H/LZjrz8nmhXuoyo8NufbPcfzpfTecvVltnuX9gOv0P5KE2KoqR1/qquoQ62 … [truncated]
+   42190: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => NM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38068),
+       aM = iM(38040),
+       PM = iM(38074),
+       nM = iM(41328),
+       QM = iM(41502),
+       zM = iM(41283),
+       LM = iM(41009),
+       mM = iM(38044);
+     class HM {
+       constructor() {
+ ... (2217 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/286.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/286.js` (Changed code · before: `L4-L5` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-006ae92bb1336b58effdee72792097f1dfc213449147d64092918780aabb976b) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L2730) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/286.js#L4-L5)

```diff
-   41431: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEMSURBVHic7doxDgFBFMbxHZaEKDXOoHUFB3BSB1DrtCoH0Eg0QkKEakWxrPFmfbPm/ys3szMvnxfWy7rMaDoe3iz3H89X0/nLzd5Z7m+ZTv8DeaiNBr2O1/rD6RLqaBM6I … [truncated]
+   41491: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => SM
+     });
+     var OM = iM(41109);
+ 
+     function SM(MM) {
+       return class extends MM {
+         constructor() {
+           super(...arguments);
+           const MM = new.target;
+           if (!MM[Symbol.metadata]) {
+             const rM = Object.getPrototypeOf(MM)?.[Symbol.metadata];
+             MM[Symbol.metadata] = rM ? Object.create(rM) : {}
+           }
+           const rM = (0, OM.b)(MM[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/287.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/287.js` (Changed code · before: `L4-L5` → after: `L4-L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-467a947ae56292f9426599746fc5696081940dedc599a5178207138f35a2aac3) · [After (L4-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L2648) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/287.js#L4-L5)

```diff
-   41440: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7dpBDsFAFMbxjnQljcSGxAXsHcDeAcQ5HMsJ7B3AMSRsJNLYsqpYlBpv6pua/2/ZTGdePi/US11mdNrsbpb7z4ej6fzpeuks9/dMp/+BPNRG/UHhtf56KUMdb … [truncated]
+   41408: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => OM
+     });
+     class OM {
+       constructor(MM, rM, iM) {
+         this.bu = MM, this.bv = rM, this.distance = iM, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   41412: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM
+     });
+     var OM = iM(38048),
+       SM = iM(38040),
+ ... (2629 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/288.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468)

#### 1. `bundles/preprod.bloxd.io/chunks/js/288.js` (Changed code · before: `L4-L5` → after: `L4-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2a46503f7881f1bc7443b5e0c56349457ec7aa1e8cb7ef9cb3a0f264f78e0468) · [After (L4-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L365) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/288.js#L4-L5)

```diff
-   41447: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIFSURBVHic7ZqxTsMwEIYvKB0qWgkydOlD8QJsDIihsMDUuRsLYkAMSAyIjYFXKluHgMjgSqkE01Wpm4vj2GkJ/r+lSez/0ub+XGLXETny/Pr2U9xXSlX27/f7G/vc36ST4 … [truncated]
+   44241: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => OM
+     });
+     class OM {}
+     OM.AUTOSAMPLERSUFFIX = "Sampler", OM.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", OM.ALPHA_DISABLE = 0, OM.ALPHA_ADD = 1, OM.ALPHA_COMBINE = 2, OM.ALPHA_SUBTRACT = 3, OM.ALPHA_MULTIPLY = 4, OM.ALPHA_MAXIMIZED = 5, OM.ALPHA_ONEONE = 6, OM.ALPHA_PREMULTIPLIED = 7, OM.ALPH … [truncated]
+   },
+   44229: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => nM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(38040),
+       aM = iM(41366),
+       PM = iM(41337);
+ ... (346 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/289.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/289.js` (Changed code · before: `L4-L5` → after: `L4-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0ddR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-9c50e5a8935b033aea73212fe8d0426a3382c5498fed807e5203a489df8de0dd) · [After (L4-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L569) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/289.js#L4-L5)

```diff
-   41449: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrMkM4tXUGr3WjFqpVir0GrXOcwkqqhhFiHU3zsb+X5nZ7N457hB34jKj7WJ8s9x/vlxN5883R2e5v2c6/Q/koTYaFYXX+lNZhjrahA4IvWHTJ … [truncated]
+   41556: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => eM,
+       f: () => GM,
+       g: () => EM,
+       j: () => UM,
+       m: () => lM,
+       n: () => yM
+     });
+     var OM = iM(41121),
+       SM = iM(41196),
+       jM = iM(38040),
+       aM = iM(41250),
+       PM = iM(41560),
+       nM = iM(41447),
+       QM = iM(41148),
+ ... (550 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/290.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/290.js` (Changed code · before: `L4-L5` → after: `L4-L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-6cc9841d8893e3ff011c5fbc162ef1f2d30c67a7e66a054a003dd3a5612118e1) · [After (L4-L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L2446) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/290.js#L4-L5)

```diff
-   41452: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEWSURBVHic7dohEoJAFMZxcCgSLHIOq8Vs8QSewOxJzJ7AO5gtVs+hxYBREwzjMDDLW/zA/f/iusCbz6fCG+PI6HrevS3H3x9P0/U321NsOX5iuvofSHydaJqmTvtfee7r0 … [truncated]
+   41573: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       default: () => yi
+     });
+     var OM = iM(44),
+       SM = iM(1116),
+       jM = iM.n(SM);
+     const aM = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       PM = 3e3;
+ 
+     function nM(MM) {
+       return MM.down && MM.inPlay && !MM.bound
+     }
+ 
+     function QM(MM, rM) {
+       let iM = 0,
+ ... (2427 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/291.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/291.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade)

#### 1. `bundles/preprod.bloxd.io/chunks/js/291.js` (Changed code · before: `L4-L5` → after: `L5-L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1adeR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3761c67a982492ad36a27e1b70649242351ce47d91b0041887704d1e248f1ade) · [After (L5-L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/291.js#L5-L11248) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/291.js#L4-L5)

```diff
-   41459: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEQSURBVHic7dpBDsFAFMbxjnRBIiSO4QZ2tuIgDuAEDuAATmJrxwkcQ0Ik7FhVLEqNN/VNzf+3bKYzL58X6qUuM9ouxzfL/YfT1XT+dLFzlvtbptP/QB5qo36347X+eL6EO … [truncated]
+   41580: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => Ra,
+       g: () => pa,
+       i: () => zn
+     });
+     var OM, SM = Object.defineProperty,
+       jM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? SM(MM, rM, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: iM
+       }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
+       aM = Object.defineProperty,
+       PM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? aM(MM, rM, {
+         enumerable: !0,
+ ... (11228 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/292.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93)

#### 1. `bundles/preprod.bloxd.io/chunks/js/292.js` (Changed code · before: `L4-L5` → after: `L5-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-e0640866e88067b8843d4473febb0a17f3b80519058720dab2d8a413a222fa93) · [After (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/292.js#L5-L27) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/292.js#L4-L5)

```diff
-   41462: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEHSURBVHic7dqxEsFAFIXhrEkjGt5Nq9bSKhUKDa1aq/dYNKKkilGEWHfjbOz/lZnN7p3jDnEnLjParMY3y/2n88V0/nJ9dJb7e6bT/0AeaqOi6HutL8trqKNN6IDQGzZ9s … [truncated]
+   41593: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       FirebaseError: () => OM.d,
+       SDK_VERSION: () => OM.g,
+       _DEFAULT_ENTRY_NAME: () => OM.j,
+       MOM: () => OM.l,
+       _addOrOverwriteComponent: () => OM.o,
+       _apps: () => OM.r,
+       _clearComponents: () => OM.t,
+       _components: () => OM.w,
+       _getProvider: () => OM.x,
+       _registerComponent: () => OM.z,
+       _removeServiceInstance: () => OM.A,
+       deleteApp: () => OM.B,
+       getApp: () => OM.G,
+       getApps: () => OM.F,
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/293.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/293.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22)

#### 1. `bundles/preprod.bloxd.io/chunks/js/293.js` (Changed code · before: `L4-L5` → after: `L5-L1233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d9617555a1229d3e2dd0fa6a3a6883a9f2408fded9956974696d2ef5759b5e22) · [After (L5-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/293.js#L5-L1233) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/293.js#L4-L5)

```diff
-   41468: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEOSURBVHic7do9EsFAGMbxrEnjY3Quo1WrncIBnMABXIJardDonUNnfJRUMYoQ6914Nvb/KzOb3Xce7xDvxGVG0/HwZrn/cDybzl9u985yf8t0+h/IQ23U67S91p8u11BHm … [truncated]
+   41611: (MM, rM, iM) => {
+     iM.d(rM, {
+       $: () => JM,
+       C: () => tM,
+       D: () => pM,
+       G: () => LM,
+       H: () => zM,
+       L: () => mM,
+       N: () => NM,
+       P: () => hM,
+       T: () => dM,
+       U: () => wM,
+       V: () => lM,
+       X: () => EM,
+       db: () => yM,
+       e: () => HM,
+ ... (1213 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/294.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/294.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79)

#### 1. `bundles/preprod.bloxd.io/chunks/js/294.js` (Changed code · before: `L4-L5` → after: `L5-L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-375e626bf8c507face6e03ac563dc3ef588400b4ea5a613ff761e5f9de4c6b79) · [After (L5-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/294.js#L5-L1039) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/294.js#L4-L5)

```diff
-   41473: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVHic7dqxEsFAFIXhrElDFB5OSavRewSFXqOlVOi8lkIoqWIUIdbdOBv7f2Vms3vnuEPcicuMVpPxzXL/6Vyazl8ejs5yf890+h/IQ21UDPpe68vLNdTRJnRA6A2bP … [truncated]
+   41619: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       getAnalytics: () => Xr,
+       getGoogleAnalyticsClientId: () => Tr,
+       initializeAnalytics: () => Ir,
+       isSupported: () => Kr,
+       logEvent: () => ii,
+       setAnalyticsCollectionEnabled: () => Mi,
+       setConsent: () => Oi,
+       setCurrentScreen: () => qr,
+       setDefaultEventParameters: () => ri,
+       setUserId: () => Vr,
+       setUserProperties: () => cr,
+       settings: () => Fr
+     });
+     var OM = iM(41598),
+ ... (1019 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/295.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/295.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/295.js` (Changed code · before: `L4-L9` → after: `L5-L4026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dadR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-470558c2bb94b6eaf36c970f48485879a438a6bda4e42f718666dfaf6cbe2dad) · [After (L5-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/295.js#L5-L4026) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/295.js#L4-L9)

```diff
-   41475: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAEACAYAAAADRnAGAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAPVSURBVHic7dxPbhMxGIdhB03aRSXaHafgAmwQC4TEohI34BRIPQESl0Fi20XVTS/ADThBi1QCnZHKAiwl7njGY3v8+c/77BJsx5n57GZI5rdRgd69P3/cf7w9Op5s3z/8O … [truncated]
-   }
- };
- Object.freeze(modules);
- for (const QQ in modules) Object.freeze(modules[QQ]);
+     41628: (MM, rM, iM) => {
+         iM.r(rM), iM.d(rM, {
+           ActionCodeOperation: () => mM,
+           ActionCodeURL: () => Tr,
+           AuthCredential: () => fr,
+           AuthErrorCodes: () => yM,
+           EmailAuthCredential: () => Br,
+           EmailAuthProvider: () => cr,
+           FacebookAuthProvider: () => Oi,
+           FactorId: () => nM,
+           GithubAuthProvider: () => ji,
+           GoogleAuthProvider: () => Si,
+           OAuthCredential: () => Ir,
+           OAuthProvider: () => ii,
+           OperationType: () => LM,
+           PhoneAuthCredential: () => qr,
+ ... (4006 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/296.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/296.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/296.js` (Changed code · before: `L4-L5` → after: `L4-L1384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2eb5f4991fc9d3a0e350a61a1182b63958737b24ccbd03aac1ca13e5cde798f4) · [After (L4-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L1384) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/296.js#L4-L5)

```diff
-   41477: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKpSURBVHic7Zq/ThVBFMa/JXNBFAiVISEhSsM2WhFewADREAMkFEYSX4DCjvgExs4XoNBgKyUF8SUgBLWxkcTCRMMFLty78VrNze5hZ3Z2Z+7dXeb8utmZMzM78805Z/8Es … [truncated]
+   41669: (MM, rM, iM) => {
+     iM.d(rM, {
+       $: () => Tr,
+       $b: () => jr,
+       $d: () => GM,
+       $f: () => di,
+       A: () => mM,
+       Ae: () => Ii,
+       Af: () => OO,
+       Bb: () => Pr,
+       Bc: () => Qr,
+       Be: () => ki,
+       Cd: () => zM,
+       E: () => Sr,
+       Ed: () => dr,
+       Ee: () => oi,
+ ... (1365 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/297.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/297.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/297.js` (Changed code · before: `L4-L5` → after: `L4-L8680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f8592ee8ae59a40a119586338f4e4d08bf872553a6f42244c37ce66fd928707e) · [After (L4-L8680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L8680) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/297.js#L4-L5)

```diff
-   41481: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEKSURBVHic7doxDoJAEIVh1hBjY/BsxsrOI3ADLmA8gp2VsfJgEhtjoxXGAsV1Ft/i/l9Jlt3Jc6I4wWVG22pxs9x/Ol9M55fro7PcPzKd/gfyUBsVxdhrfV1fQx1tQgeE3 … [truncated]
+   44259: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => dM,
+       e: () => PM,
+       h: () => aM,
+       i: () => QM
+     });
+     var OM = iM(38167),
+       SM = iM(39748),
+       jM = iM(39741);
+ 
+     function aM(MM, rM, iM, OM) {
+       const SM = jM.z;
+       rM.fill(0), MM.gravity.toArray(rM, SM.gravity), MM.colorDead.toArray(rM, SM.colorDead), iM[SM.ramp] = MM.useRampGradients ? 1 : 0;
+       const aM = MM.getColorGradients(),
+         PM = mM(MM, aM, "colour", OM);
+ ... (8661 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/298.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/298.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/298.js` (Changed code · before: `L4-L5` → after: `L4-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2e6f6709c7182aac89eb44600d9b02f1f949a51f93307560c34e7cb04b0b388f) · [After (L4-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L68) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/298.js#L4-L5)

```diff
-   41490: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAELSURBVHic7dqxEsFAFIXhjcmko6BTeSKlSucBVB5Hp1J6IpUKBV0aqhhFiHU3zsb+X5nZ7N457hB3kjmj8WZ9s9xfns6m84/LVWa5v2c6/Q/koTYqBn2v9eXlGupoEzog9 … [truncated]
+   42017: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => aM,
+       e: () => jM,
+       g: () => PM
+     });
+     let OM = null,
+       SM = null;
+ 
+     function jM(MM, rM) {
+       return OM = MM, SM = null, PM(rM), () => {
+         OM === MM && (OM = null, SM = null)
+       }
+     }
+ 
+     function aM() {
+ ... (49 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/299.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/299.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/299.js` (Changed code · before: `L4-L5` → after: `L4-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-aed411673daf0907f8c1123a6da6b42ff92bf56a9d633e3acc54021d633c7f7a) · [After (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L16) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/299.js#L4-L5)

```diff
-   41496: QQ => {
-     QQ.exports = JSON.parse('{"texture":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIOSURBVHic7ZoxSwMxFIDfFRGVKgVxcpJDnK6Dg/9AXFwqdFKqk3UUl9JJnMTNsXYqopNDZ/EfODjYSVpxEoQOHlraUsFzsLFeendtLrlLr3nfEnp5Ly+XvPdySaoBJ+W8Y … [truncated]
+   42165: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       gamePackSource: () => jM
+     });
+     var OM = iM(5388),
+       SM = iM(1573);
+ 
+     function jM(MM) {
+       return {
+         packKey: async rM => (await SM.c.getGame(MM, rM, !0)).customTexturePackKey,
+         fetchPack: OM.d
+       }
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/300.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/300.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03)

#### 1. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/300.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/300.js#L2)

```diff
- export const ids = [300];
+ export const ids = [299, 300];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/300.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/300.js#L4)

```diff
-   41521: (QQ, WQ, XQ) => {
+   42165: (MM, rM, iM) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/300.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/300.js#L6)

```diff
-       CharacterPreview: () => JQ
+       gamePackSource: () => jM
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/300.js` (Changed code · before: `L8-L160` → after: `L8-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-2ea2b7e94ea7bba263137dcf756239ecd6557726188ec6a9fda1621cf2ba3d03) · [After (L8-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/300.js#L8-L93) · [Before (L8-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/300.js#L8-L160)

```diff
-     var wQ = XQ(61),
-       qQ = XQ(2978),
-       TQ = XQ(1273),
-       zQ = XQ(2678),
-       sQ = XQ(34541),
-       FQ = XQ(3862),
-       PQ = XQ(1145);
-     const gQ = .6 * Math.PI,
-       JQ = (0, wQ.memo)((0, wQ.forwardRef)((function(QQ, WQ) {
-         let {
-           onReady: XQ,
-           onDrawn: JQ,
-           owner: rQ = "other",
-           framing: IQ = "player",
-           forcedCosmetics: jQ,
-           Rs: BQ,
- ... (137 more removed lines; see GitHub link above)
+     var OM = iM(5388),
+       SM = iM(1573);
+ 
+     function jM(MM) {
+       return {
+         packKey: async rM => (await SM.c.getGame(MM, rM, !0)).customTexturePackKey,
+         fetchPack: OM.d
+       }
+     }
+   },
+   53755: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       fetchGuestContext: () => mM,
+       guestJoinTarget: () => EM,
+       guestJoinWithPack: () => hM,
+       guestPackForGame: () => HM,
+ ... (70 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/301.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/301.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L4)

```diff
-   41536: (QQ, WQ, XQ) => {
+   42170: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L6)

```diff
-       default: () => xW
+       BloxdInformation: () => HM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L8-L95` → after: `L8-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L8-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L39) · [Before (L8-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L8-L95)

```diff
-     var wQ = XQ(41545),
-       qQ = XQ(41577),
-       TQ = XQ(41586),
-       zQ = XQ(61),
-       sQ = XQ(78),
-       FQ = XQ(41603),
-       PQ = XQ(41611),
-       gQ = XQ(5085),
-       JQ = XQ(41613),
-       rQ = XQ(1975),
-       IQ = XQ(41615),
-       jQ = XQ(41631),
-       BQ = XQ.n(jQ),
-       yQ = XQ(41592),
-       VQ = XQ(41598),
-       DQ = XQ(1391),
- ... (72 more removed lines; see GitHub link above)
+     var OM = iM(1188),
+       SM = iM(44),
+       jM = iM(83),
+       aM = iM(1520),
+       PM = iM(119),
+       nM = iM(1398),
+       QM = iM(1303);
+     const zM = (0, SM.lazy)((() => Promise.all([iM.e(137), iM.e(702)]).then((() => iM(7016))))),
+       LM = (0, SM.lazy)((() => iM.e(139).then((() => iM(7033)))));
+ 
+     function mM() {
+       return (0, QM.jsxs)("div", {
+         className: "LegalText",
+         children: [(0, QM.jsx)("div", {
+           className: "BloxdInformationHeader FullyFancyText",
+           children: "Security Exploit Bounty Program"
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L97-L209` → after: `L41-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L41-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L41-L45) · [Before (L97-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L97-L209)

```diff
-         }
-       }
-       const qQ = new lQ.x,
-         TQ = [];
-       for (const zQ of XQ) TQ.push({
-         bias: 1,
-         deco: zQ.decoration,
-         from: zQ.pos,
-         to: zQ.pos
-       });
-       for (const zQ of wQ) TQ.push({
-         bias: 0,
-         deco: zQ.decoration,
-         from: zQ.from,
-         to: zQ.to
-       });
- ... (97 more removed lines; see GitHub link above)
+         }), (0, QM.jsx)("p", {
+           children: "A: If you've left any contact details, you will typically receive a response within two to four weeks, but we will try to respond as soon as possible."
+         }), (0, QM.jsx)("p", {
+           children: (0, QM.jsx)("b", {
+             children: "Q: Can I remain anonymous?"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L211-L251` → after: `L47-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L47-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L47-L80) · [Before (L211-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L211-L251)

```diff
-         }
-         const {
-           doc: sQ
-         } = QQ.state, FQ = sQ.line(Math.min(Math.max(qQ.line, 1), sQ.lines)), PQ = FQ.from + Math.min(null !== (wQ = qQ.column) && void 0 !== wQ ? wQ : 0, FQ.length);
-         QQ.dispatch({
-           selection: {
-             anchor: PQ
-           },
-           effects: TQ.d.scrollIntoView(PQ, {
-             y: "center"
-           }),
-           userEvent: null !== zQ && void 0 !== zQ && zQ.placed ? "select" : void 0
-         }), !1 !== (null === zQ || void 0 === zQ ? void 0 : zQ.focused) && QQ.focus()
-       };
-       return (0, vQ.f)("CodeEditorGoToLine", (WQ => {
-         XQ.current = WQ, wQ(QQ.current)
- ... (25 more removed lines; see GitHub link above)
+         }), (0, QM.jsx)("p", {
+           children: "A: Yes, but we will be unable to contact you for rewards if you do not leave any contact details."
+         }), (0, QM.jsx)("p", {
+           children: (0, QM.jsx)("b", {
+             children: "Q: What if multiple people report the same exploit, complete with repro steps?"
+           })
+         }), (0, QM.jsx)("p", {
+           children: "A: Typically, only the first reporter will receive the reward."
+         }), (0, QM.jsx)("p", {
+           children: (0, QM.jsx)("b", {
+             children: "Q: What is out of scope?"
+           })
+         }), (0, QM.jsxs)("p", {
+           children: ["A:", (0, QM.jsxs)("ul", {
+             children: [(0, QM.jsx)("li", {
+               children: "Social engineering / phishing"
+ ... (18 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L256` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L83) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L256)

```diff
-     function qW(QQ, WQ) {
+     function HM() {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L259-L292` → after: `L86-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L86-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L86-L93) · [Before (L259-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L259-L292)

```diff
-       } = (0, wW.C)();
-       (0, vQ.f)("CodeEditorInsertText", (wQ => {
-         let {
-           text: qQ,
-           focus: TQ
-         } = wQ;
-         const zQ = QQ.current,
-           sQ = null !== zQ && void 0 !== zQ && zQ.dom.isConnected ? function(QQ, WQ) {
-             if (!MQ(QQ)) return null;
-             const {
-               from: XQ,
-               to: wQ
-             } = QQ.selection.main, qQ = XQ + WQ.length;
-             return {
-               changes: {
-                 from: XQ,
- ... (18 more removed lines; see GitHub link above)
+       } = (0, OM.A)(), [rM, iM] = (0, SM.useState)("partnersAndCredits"), HM = {
+         partnersAndCredits: {
+           title: jM.featureFlags.usePartnerLinks ? MM("homePage:partnersAndCredits") : MM("homePage:credits"),
+           content: (0, QM.jsxs)(QM.Fragment, {
+             children: [(0, QM.jsx)("div", {
+               className: "BloxdInformationHeader FullyFancyText",
+               children: jM.featureFlags.usePartnerLinks ? MM("homePage:partnersAndCredits") : MM("homePage:credits")
+             }), jM.featureFlags.usePartnerLinks && "\n\t\t\t\t\tPartners:\n\n\t\t\t\t\tcrazygames.com - https://www.crazygames.com/c/io\n\t\t\t\t\tnow.gg - https://now.gg/\n\t\t\t\t\tminijuegos.com - https://www.minijuegos.com/\n\t\t\t\t\tkevin.games - https://kevin.games/\n\t\t\ … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L351-L383` → after: `L96-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L96-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L96-L103) · [Before (L351-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L351-L383)

```diff
-         ".cm-activeLine": {
-           backgroundColor: "#383a420a"
-         },
-         ".cm-selectionMatch": {
-           backgroundColor: "#50a14f26"
-         },
-         "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
-           backgroundColor: "#4078f233"
-         },
-         ".cm-gutters": {
-           backgroundColor: JW,
-           color: FW,
-           border: "none"
-         },
-         ".cm-activeLineGutter": {
-           backgroundColor: gW
- ... (17 more removed lines; see GitHub link above)
+         bloxdIngameRules: {
+           title: MM("homePage:bloxdIngameRules"),
+           content: (0, QM.jsxs)(QM.Fragment, {
+             children: [(0, QM.jsx)("div", {
+               className: "BloxdInformationHeader FullyFancyText",
+               children: MM("homePage:bloxdIngameRules")
+             }), "\n\t\t\t\t\t1. Be respectful of others.\n\n\t\t\t\t\t2. Don't harass or bully other players.\n\n\t\t\t\t\t3. Discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation,  … [truncated]
+           })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L385-L549` → after: `L105-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L105-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L105-L109) · [Before (L385-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L385-L549)

```diff
-         ".cm-tooltip-autocomplete": {
-           "& > ul > li[aria-selected]": {
-             backgroundColor: gW,
-             color: sW
-           }
-         }
-       }, {
-         dark: !1
-       }),
-       BW = LQ.b.define([{
-         tag: TW.h.keyword,
-         color: "#a626a4"
-       }, {
-         tag: [TW.h.name, TW.h.deleted, TW.h.character, TW.h.propertyName, TW.h.macroName],
-         color: zW
-       }, {
- ... (149 more removed lines; see GitHub link above)
+         privacyPolicy: {
+           title: MM("homePage:privacyPolicy"),
+           content: (0, QM.jsx)(SM.Suspense, {
+             fallback: null,
+             children: (0, QM.jsx)(zM, {})
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L551-L735` → after: `L111-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L111-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L111-L116) · [Before (L551-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L551-L735)

```diff
-         }
-         return wQ
-       }
-       const wQ = [];
-       if (wQ.push(...XQ(QQ.prefixDisplayParts, aW.text)), QQ.parameters.length > 0) {
-         wQ.push("\n");
-         for (let qQ = 0; qQ < QQ.parameters.length; qQ++) {
-           const TQ = QQ.parameters[qQ];
-           wQ.push("\t"), wQ.push(...XQ(TQ.displayParts, aW.parameter, null !== WQ && qQ !== WQ)), wQ.push("\n")
-         }
-       }
-       return wQ.push(...XQ(QQ.suffixDisplayParts, aW.suffix)), QQ.documentation && (wQ.push("\n\n"), wQ.push(...XQ(QQ.documentation, aW.docs))), wQ
-     }
-     var hW = function(QQ) {
-       return QQ[QQ.VariableDefinedElsewhere = 2304] = "VariableDefinedElsewhere", QQ[QQ.DuplicateIdentifier = 2300] = "DuplicateIdentifier", QQ
-     }(hW || {});
- ... (169 more removed lines; see GitHub link above)
+         },
+         termsOfService: {
+           title: MM("homePage:termsOfService"),
+           content: (0, QM.jsx)(SM.Suspense, {
+             fallback: null,
+             children: (0, QM.jsx)(LM, {})
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L772-L983` → after: `L124-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L124-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L124-L131) · [Before (L772-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L772-L983)

```diff
- 
-     function xW(QQ) {
-       let {
-         isLobbyCode: WQ,
-         code: XQ,
-         onChange: sQ,
-         canEditCode: rQ,
-         setTemporaryMessage: jQ,
-         close: dQ,
-         showTooltips: nQ,
-         lightMode: xQ,
-         collabState: NQ,
-         onRemoteDocChange: ZQ,
-         files: OQ,
-         activePath: KQ,
-         pluginName: MQ,
- ... (196 more removed lines; see GitHub link above)
+       return (0, QM.jsxs)("div", {
+         className: "BloxdInformation",
+         children: [(0, QM.jsxs)("div", {
+           className: "BloxdInformationSectionList",
+           children: [Object.keys(HM).map((OM => (0, QM.jsx)(aM.V, {
+             active: rM === OM,
+             onClick: () => {
+               iM(OM)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/301.js` (Changed code · before: `L985-L1181` → after: `L133-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-3f64cd330b81c23a046407b4e98f41ce82b5461b7b156d8716770a567c2760f9) · [After (L133-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/301.js#L133-L151) · [Before (L985-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/301.js#L985-L1181)

```diff
-             provide: QQ => TQ.t.computeN([QQ], (WQ => WQ.field(QQ)))
-           }), (0, TQ.q)(tW(QQ, HW)), (0, VQ.h)(LW(WQ, QQ, HW)), TQ.n.fromClass(class {
-             constructor(QQ) {
-               this.view = QQ, this.searchPanel = null
-             }
-             update(QQ) {
-               const WQ = QQ.view.dom.querySelector(".cm-search");
-               if (WQ !== this.searchPanel) {
-                 if (this.searchPanel = WQ, !this.searchPanel) return;
-                 this.searchPanel.addEventListener("keydown", (QQ => {
-                   "Escape" === QQ.key && (0, yQ.c)(this.view), QQ.stopPropagation()
-                 }))
-               }
-             }
-           })];
-         TW && !MQ && sQ.push(bW(WQ ? null !== KQ && void 0 !== KQ ? KQ : GQ.j : VW.c, zW));
- ... (181 more removed lines; see GitHub link above)
+             children: MM(HM[OM].title)
+           }, OM))), jM.featureFlags.usePartnerLinks && (0, QM.jsx)(QM.Fragment, {
+             children: (0, QM.jsxs)(aM.V, {
+               onClick: () => {
+                 window.open("https://www.crazygames.com/c/io")
+               },
+               children: [(0, QM.jsx)(nM.b, {
+                 name: "arrow-up-right-from-square"
+               }), " Crazy Games"]
+             })
+           })]
+         }), (0, QM.jsx)("div", {
+           className: "BloxdInformationContentWrapper",
+           children: HM[rM].content
+         }), (0, QM.jsxs)("div", {
+           className: "BloxdInformationText",
+ ... (3 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/302.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/302.js` (72 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L4)

```diff
-   41545: (QQ, WQ, XQ) => {
+   42200: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L8-L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L9)

```diff
-       i: () => FQ,
+       j: () => dM,
+       k: () => yM,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L12-L288` → after: `L12-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L12-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L12-L33) · [Before (L12-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L12-L288)

```diff
-       p: () => rW
-     });
-     var wQ = XQ(41550),
-       qQ = XQ(41555),
-       TQ = XQ(41566);
-     class zQ {
-       constructor(QQ, WQ, XQ, wQ) {
-         this.state = QQ, this.pos = WQ, this.explicit = XQ, this.view = wQ, this.abortListeners = [], this.abortOnDocChange = !1
-       }
-       tokenBefore(QQ) {
-         let WQ = (0, TQ.fb)(this.state).resolveInner(this.pos, -1);
-         for (; WQ && QQ.indexOf(WQ.name) < 0;) WQ = WQ.parent;
-         return WQ ? {
-           from: WQ.from,
-           to: this.pos,
-           text: this.state.sliceDoc(WQ.from, this.pos),
- ... (261 more removed lines; see GitHub link above)
+       r: () => hM,
+       v: () => HM
+     });
+     var OM = iM(38040),
+       SM = iM(38173),
+       jM = iM(38074),
+       aM = iM(42208),
+       PM = iM(41328),
+       nM = iM(41115),
+       QM = iM(41148),
+       zM = iM(41121),
+       LM = iM(38085);
+     const mM = Object.freeze(new OM.h(0, 0, 0, 0)),
+       HM = Object.freeze(OM.q.Zero()),
+       hM = Object.freeze(OM.o.Zero()),
+       JM = Object.freeze(nM.d.Zero()),
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L304-L339` → after: `L36-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L36-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L36-L42) · [Before (L304-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L304-L339)

```diff
-       constructor(QQ, WQ, XQ) {
-         this.view = QQ, this.stateField = WQ, this.applyCompletion = XQ, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
-           read: () => this.measureInfo(),
-           write: QQ => this.placeInfo(QQ),
-           key: this
-         }, this.space = null, this.currentClass = "";
-         let wQ = QQ.state.field(WQ),
-           {
-             options: qQ,
-             selected: TQ
-           } = wQ.open,
-           zQ = QQ.state.facet(UQ);
-         this.optionContent = function(QQ) {
-           let WQ = QQ.addToOptions.slice();
-           return QQ.icons && WQ.push({
-             render(QQ) {
- ... (20 more removed lines; see GitHub link above)
+       static _PrepareAnimation(MM, rM, iM, jM, aM, PM, QM, zM) {
+         let LM;
+         if (!isNaN(parseFloat(aM)) && isFinite(aM) ? LM = EM.ANIMATIONTYPE_FLOAT : aM instanceof OM.h ? LM = EM.ANIMATIONTYPE_QUATERNION : aM instanceof OM.q ? LM = EM.ANIMATIONTYPE_VECTOR3 : aM instanceof OM.o ? LM = EM.ANIMATIONTYPE_VECTOR2 : aM instanceof SM.d ? LM = EM.ANIMAT … [truncated]
+         const mM = new EM(MM, rM, iM, LM, QM),
+           HM = [{
+             frame: 0,
+             value: aM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L341-L365` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L44-L47) · [Before (L341-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L341-L365)

```diff
-             render(QQ) {
-               if (!QQ.detail) return null;
-               let WQ = document.createElement("span");
-               return WQ.className = "cm-completionDetail", WQ.textContent = QQ.detail, WQ
-             },
-             position: 80
-           }), WQ.sort(((QQ, WQ) => QQ.position - WQ.position)).map((QQ => QQ.render))
-         }(zQ), this.optionClass = zQ.optionClass, this.tooltipClass = zQ.tooltipClass, this.range = HQ(qQ.length, TQ, zQ.maxRenderedOptions), this.dom = document.createElement("div"), this.dom.className = "cm-tooltip-autocomplete", this.updateTooltipClass(QQ.state), this.dom.addE … [truncated]
-           let {
-             options: wQ
-           } = QQ.state.field(WQ).open;
-           for (let WQ, qQ = XQ.target; qQ && qQ != this.dom; qQ = qQ.parentNode)
-             if ("LI" == qQ.nodeName && (WQ = /-(\d+)$/.exec(qQ.id)) && +WQ[1] < wQ.length) return this.applyCompletion(QQ, wQ[+WQ[1]]), void XQ.preventDefault();
-           if (XQ.target == this.list) {
-             let WQ = this.list.classList.contains("cm-completionListIncompleteTop") && XQ.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains("cm-completionListIncompleteBottom") && XQ.clientY > this.list.lastChild.getBo … [truncated]
-             null != WQ && (QQ.dispatch({
- ... (9 more removed lines; see GitHub link above)
+             frame: jM,
+             value: PM
+           }];
+         return mM.setKeys(HM), void 0 !== zM && mM.setEasingFunction(zM), mM
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L367-L368` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L49-L50) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L367-L368)

```diff
-       mount() {
-         this.updateSel()
+       get runtimeAnimations() {
+         return this._runtimeAnimations
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L370-L394` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L52-L55) · [Before (L370-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L370-L394)

```diff
-       showOptions(QQ, WQ) {
-         this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(QQ, WQ, this.range)), this.list.addEventListener("scroll", (() => {
-           this.info && this.view.requestMeasure(this.placeInfoReq)
-         }))
-       }
-       update(QQ) {
-         var WQ;
-         let XQ = QQ.state.field(this.stateField),
-           wQ = QQ.startState.field(this.stateField);
-         if (this.updateTooltipClass(QQ.state), XQ != wQ) {
-           let {
-             options: qQ,
-             selected: TQ,
-             disabled: zQ
-           } = XQ.open;
-           wQ.open && wQ.open.options == qQ || (this.range = HQ(qQ.length, TQ, QQ.state.facet(UQ).maxRenderedOptions), this.showOptions(qQ, XQ.id)), this.updateSel(), zQ != (null === (WQ = wQ.open) || void 0 === WQ ? void 0 : WQ.disabled) && this.dom.classList.toggle("cm-tooltip-a … [truncated]
- ... (9 more removed lines; see GitHub link above)
+       get hasRunningRuntimeAnimations() {
+         for (const MM of this._runtimeAnimations)
+           if (!MM.isStopped()) return !0;
+         return !1
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L396-L397` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L57-L58) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L396-L397)

```diff
-       positioned(QQ) {
-         this.space = QQ, this.info && this.view.requestMeasure(this.placeInfoReq)
+       constructor(MM, rM, iM, OM, SM, jM) {
+         this.name = MM, this.targetProperty = rM, this.framePerSecond = iM, this.dataType = OM, this.lS = SM, this.enableBlending = jM, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._c … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L399-L416` → after: `L60-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L60-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L60-L66) · [Before (L399-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L399-L416)

```diff
-       updateSel() {
-         let QQ = this.view.state.field(this.stateField),
-           WQ = QQ.open;
-         (WQ.selected > -1 && WQ.selected < this.range.from || WQ.selected >= this.range.to) && (this.range = HQ(WQ.options.length, WQ.selected, this.view.state.facet(UQ).maxRenderedOptions), this.showOptions(WQ.options, QQ.id));
-         let XQ = this.updateSelectedOption(WQ.selected);
-         if (XQ) {
-           this.destroyInfo();
-           let {
-             completion: wQ
-           } = WQ.options[WQ.selected], {
-             info: TQ
-           } = wQ;
-           if (!TQ) return;
-           let zQ = "string" === typeof TQ ? document.createTextNode(TQ) : TQ(wQ);
-           if (!zQ) return;
-           "then" in zQ ? zQ.then((WQ => {
- ... (2 more removed lines; see GitHub link above)
+       toString(MM) {
+         let rM = "Name: " + this.name + ", property: " + this.targetProperty;
+         if (rM += ", datatype: " + ["Float", "sh", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], rM += ", nKeys: " + (this._keys ? this._keys.length : "none"), rM += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), MM) {
+           rM += ", Ranges: {";
+           let MM = !0;
+           for (const iM in this._ranges) MM || (rM += ", "), MM = !1, rM += iM;
+           rM += "}"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L419-L430` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L70-L71) · [Before (L419-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L419-L430)

```diff
-       addInfoPane(QQ, WQ) {
-         this.destroyInfo();
-         let XQ = this.info = document.createElement("div");
-         if (XQ.className = "cm-tooltip cm-completionInfo", XQ.id = "cm-completionInfo-" + Math.floor(65535 * Math.random()).toString(16), null != QQ.nodeType) XQ.appendChild(QQ), this.infoDestroy = null;
-         else {
-           let {
-             dom: WQ,
-             destroy: wQ
-           } = QQ;
-           XQ.appendChild(WQ), this.infoDestroy = wQ || null
-         }
-         this.dom.appendChild(XQ), this.view.requestMeasure(this.placeInfoReq)
+       addEvent(MM) {
+         this._events.push(MM), this._events.sort(((MM, rM) => MM.frame - rM.frame))
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L432-L440` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L73-L74) · [Before (L432-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L432-L440)

```diff
-       updateSelectedOption(QQ) {
-         let WQ = null;
-         for (let XQ = this.list.firstChild, wQ = this.range.from; XQ; XQ = XQ.nextSibling, wQ++) "LI" == XQ.nodeName && XQ.id ? wQ == QQ ? XQ.hasAttribute("aria-selected") || (XQ.setAttribute("aria-selected", "true"), WQ = XQ) : XQ.hasAttribute("aria-selected") && (XQ.removeAttri … [truncated]
-         return WQ && function(QQ, WQ) {
-           let XQ = QQ.getBoundingClientRect(),
-             wQ = WQ.getBoundingClientRect(),
-             qQ = XQ.height / QQ.offsetHeight;
-           wQ.top < XQ.top ? QQ.scrollTop -= (XQ.top - wQ.top) / qQ : wQ.bottom > XQ.bottom && (QQ.scrollTop += (wQ.bottom - XQ.bottom) / qQ)
-         }(this.list, WQ), WQ
+       removeEvents(MM) {
+         for (let rM = 0; rM < this._events.length; rM++) this._events[rM].frame === MM && (this._events.splice(rM, 1), rM--)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L442-L458` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L76-L77) · [Before (L442-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L442-L458)

```diff
-       measureInfo() {
-         let QQ = this.dom.querySelector("[aria-selected]");
-         if (!QQ || !this.info) return null;
-         let WQ = this.dom.getBoundingClientRect(),
-           XQ = this.info.getBoundingClientRect(),
-           wQ = QQ.getBoundingClientRect(),
-           qQ = this.space;
-         if (!qQ) {
-           let QQ = this.dom.ownerDocument.documentElement;
-           qQ = {
-             left: 0,
-             top: 0,
-             right: QQ.clientWidth,
-             bottom: QQ.clientHeight
-           }
-         }
- ... (1 more removed lines; see GitHub link above)
+       getEvents() {
+         return this._events
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L460-L461` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L79-L80) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L460-L461)

```diff
-       placeInfo(QQ) {
-         this.info && (QQ ? (QQ.style && (this.info.style.cssText = QQ.style), this.info.className = "cm-tooltip cm-completionInfo " + (QQ.class || "")) : this.info.style.cssText = "top: -1e6px")
+       createRange(MM, rM, iM) {
+         this._ranges[MM] || (this._ranges[MM] = new aM.d(MM, rM, iM))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L463-L475` → after: `L82-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L82-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L82-L85) · [Before (L463-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L463-L475)

```diff
-       createListBox(QQ, WQ, XQ) {
-         const wQ = document.createElement("ul");
-         wQ.id = WQ, wQ.setAttribute("role", "listbox"), wQ.setAttribute("aria-expanded", "true"), wQ.setAttribute("aria-label", this.view.state.phrase("Completions")), wQ.addEventListener("mousedown", (QQ => {
-           QQ.target == wQ && QQ.preventDefault()
-         }));
-         let qQ = null;
-         for (let TQ = XQ.from; TQ < XQ.to; TQ++) {
-           let {
-             completion: zQ,
-             match: sQ
-           } = QQ[TQ], {
-             section: FQ
-           } = zQ;
+       deleteRange(MM) {
+         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const iM = this._ranges[MM];
+         if (iM) {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L477-L490` → after: `L87-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L87-L89) · [Before (L477-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L477-L490)

```diff
-             let QQ = "string" == typeof FQ ? FQ : FQ.name;
-             if (QQ != qQ && (TQ > XQ.from || 0 == XQ.from))
-               if (qQ = QQ, "string" != typeof FQ && FQ.header) wQ.appendChild(FQ.header(FQ));
-               else {
-                 wQ.appendChild(document.createElement("completion-section")).textContent = QQ
-               }
-           }
-           const PQ = wQ.appendChild(document.createElement("li"));
-           PQ.id = WQ + "-" + TQ, PQ.setAttribute("role", "option");
-           let gQ = this.optionClass(zQ);
-           gQ && (PQ.className = gQ);
-           for (let QQ of this.optionContent) {
-             let WQ = QQ(zQ, this.view.state, this.view, sQ);
-             WQ && PQ.appendChild(WQ)
+             const MM = iM.from,
+               rM = iM.to;
+             for (let iM = this._keys.length - 1; iM >= 0; iM--) this._keys[iM].frame >= MM && this._keys[iM].frame <= rM && this._keys.splice(iM, 1)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L495-L496` → after: `L94-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L94-L95) · [Before (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L495-L496)

```diff
-       destroyInfo() {
-         this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null)
+       getRange(MM) {
+         return this._ranges[MM]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L498-L499` → after: `L97-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L97-L98) · [Before (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L498-L499)

```diff
-       destroy() {
-         this.destroyInfo()
+       getKeys() {
+         return this._keys
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L501-L630` → after: `L100-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L100-L103) · [Before (L501-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L501-L630)

```diff
-     }
- 
-     function lQ(QQ, WQ) {
-       return XQ => new aQ(XQ, QQ, WQ)
-     }
- 
-     function hQ(QQ) {
-       return 100 * (QQ.boost || 0) + (QQ.apply ? 10 : 0) + (QQ.info ? 5 : 0) + (QQ.type ? 1 : 0)
-     }
-     class iQ {
-       constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
-         this.options = QQ, this.attrs = WQ, this.tooltip = XQ, this.timestamp = wQ, this.selected = qQ, this.disabled = TQ
-       }
-       setSelected(QQ, WQ) {
-         return QQ == this.selected || QQ >= this.options.length ? this : new iQ(this.options, EQ(WQ, QQ), this.tooltip, this.timestamp, QQ, this.disabled)
-       }
- ... (114 more removed lines; see GitHub link above)
+       getHighestFrame() {
+         let MM = 0;
+         for (let rM = 0, iM = this._keys.length; rM < iM; rM++) MM < this._keys[rM].frame && (MM = this._keys[rM].frame);
+         return MM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L632-L633` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L105-L106) · [Before (L632-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L632-L633)

```diff
-       get tooltip() {
-         return this.open ? this.open.tooltip : null
+       getEasingFunction() {
+         return this._easingFunction
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L635-L636` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L108-L109) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L635-L636)

```diff
-       get attrs() {
-         return this.open ? this.open.attrs : this.active.length ? AQ : RQ
+       setEasingFunction(MM) {
+         this._easingFunction = MM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L638-L657` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L111-L112) · [Before (L638-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L638-L657)

```diff
-     }
-     const AQ = {
-         "aria-autocomplete": "list"
-       },
-       RQ = {};
- 
-     function EQ(QQ, WQ) {
-       let XQ = {
-         "aria-autocomplete": "list",
-         "aria-haspopup": "listbox",
-         "aria-controls": QQ
-       };
-       return WQ > -1 && (XQ["aria-activedescendant"] = QQ + "-" + WQ), XQ
-     }
-     const CQ = [];
- 
- ... (4 more removed lines; see GitHub link above)
+       floatInterpolateFunction(MM, rM, iM) {
+         return (0, jM.Lerp)(MM, rM, iM)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L659-L665` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L114-L115) · [Before (L659-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L659-L665)

```diff
-       let XQ = QQ.isUserEvent("input.type");
-       return XQ && WQ.activateOnTyping ? 5 : XQ ? 1 : QQ.isUserEvent("delete.backward") ? 2 : QQ.selection ? 8 : QQ.docChanged ? 16 : 0
-     }
-     class LQ {
-       constructor(QQ, WQ) {
-         let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         this.source = QQ, this.state = WQ, this.explicit = XQ
+       floatInterpolateFunctionWithTangents(MM, rM, iM, OM, SM) {
+         return (0, jM.Hermite)(MM, rM, iM, OM, SM)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L667-L668` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L117-L118) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L667-L668)

```diff
-       hasResult() {
-         return !1
+       quaternionInterpolateFunction(MM, rM, iM) {
+         return OM.h.Slerp(MM, rM, iM)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L670-L671` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L120-L121) · [Before (L670-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L670-L671)

```diff
-       get isPending() {
-         return 1 == this.state
+       quaternionInterpolateFunctionWithTangents(MM, rM, iM, SM, jM) {
+         return OM.h.Hermite(MM, rM, iM, SM, jM).normalize()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L673-L682` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L123-L124) · [Before (L673-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L673-L682)

```diff
-       update(QQ, WQ) {
-         let XQ = uQ(QQ, WQ),
-           wQ = this;
-         (8 & XQ || 16 & XQ && this.touches(QQ)) && (wQ = new LQ(wQ.source, 0)), 4 & XQ && 0 == wQ.state && (wQ = new LQ(this.source, 1)), wQ = wQ.updateFor(QQ, XQ);
-         for (let qQ of QQ.effects)
-           if (qQ.is(VQ)) wQ = new LQ(wQ.source, 1, qQ.value);
-           else if (qQ.is(DQ)) wQ = new LQ(wQ.source, 0);
-         else if (qQ.is(fQ))
-           for (let QQ of qQ.value) QQ.source == wQ.source && (wQ = QQ);
-         return wQ
+       vector3InterpolateFunction(MM, rM, iM) {
+         return OM.q.Lerp(MM, rM, iM)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L684-L685` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L126-L127) · [Before (L684-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L684-L685)

```diff
-       updateFor(QQ, WQ) {
-         return this.map(QQ.changes)
+       vector3InterpolateFunctionWithTangents(MM, rM, iM, SM, jM) {
+         return OM.q.Hermite(MM, rM, iM, SM, jM)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L687-L688` → after: `L129-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L129-L130) · [Before (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L687-L688)

```diff
-       map(QQ) {
-         return this
+       vector2InterpolateFunction(MM, rM, iM) {
+         return OM.o.Lerp(MM, rM, iM)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/302.js` (Changed code · before: `L690-L691` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-f5a6a87d88366ae523064337fdc9832b1dc42ae918af542583d756e71eed79e1) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/302.js#L132-L133) · [Before (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/302.js#L690-L691)

```diff
-       touches(QQ) {
-         return QQ.changes.touchesRange(JQ(QQ.state))
+       vector2InterpolateFunctionWithTangents(MM, rM, iM, SM, jM) {
+         return OM.o.Hermite(MM, rM, iM, SM, jM)
```
