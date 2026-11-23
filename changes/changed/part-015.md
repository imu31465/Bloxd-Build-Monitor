# Changed — Bundle Modifications Report (Part 015 / 050)

- **Updated at**: `2026-11-24T00:42 JST`
- **Part**: `15 / 50` (**274** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (bbb6l5.0244a119 → w4ddu.56408518 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (89 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L700-L701` → after: `L1379-L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1379-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1379-L1381) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L700-L701)

```diff
-           _copy(qq) {
-             this.createdAt = qq.createdAt, this.lastLoginAt = qq.lastLoginAt, this._initializeTime()
+           get useNaturalPinchZoom() {
+             const CC = this.inputs.attached.pointers;
+             return !!CC && CC.useNaturalPinchZoom
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L703-L707` → after: `L1383-L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1383-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1383-L1385) · [Before (L703-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L703-L707)

```diff
-           toJSON() {
-             return {
-               createdAt: this.createdAt,
-               lastLoginAt: this.lastLoginAt
-             }
+           set useNaturalPinchZoom(CC) {
+             const zC = this.inputs.attached.pointers;
+             zC && (zC.useNaturalPinchZoom = CC)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L709-L760` → after: `L1387-L1389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1387-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1387-L1389) · [Before (L709-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L709-L760)

```diff
-         }
-         async function Dq(qq) {
-           var Eq;
-           const gq = qq.auth,
-             Yq = await qq.getIdToken(),
-             lq = await Cq(qq, async function(qq, Eq) {
-               return Gq(qq, "POST", "/v1/accounts:lookup", Eq)
-             }(gq, {
-               idToken: Yq
-             }));
-           vq(null === lq || void 0 === lq ? void 0 : lq.users.length, gq, "internal-error");
-           const mq = lq.users[0];
-           qq._notifyReloadListener(mq);
-           const xq = (null === (Eq = mq.providerUserInfo) || void 0 === Eq ? void 0 : Eq.length) ? mq.providerUserInfo.map((qq => {
-             var {
-               providerId: Eq
- ... (36 more removed lines; see GitHub link above)
+           get panningSensibility() {
+             const CC = this.inputs.attached.pointers;
+             return CC ? CC.panningSensibility : 0
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L762-L763` → after: `L1391-L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1391-L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1391-L1393) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L762-L763)

```diff
-           get isExpired() {
-             return !this.expirationTime || Date.now() > this.expirationTime - 3e4
+           set panningSensibility(CC) {
+             const zC = this.inputs.attached.pointers;
+             zC && (zC.panningSensibility = CC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L765-L771` → after: `L1395-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1395-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1395-L1397) · [Before (L765-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L765-L771)

```diff
-           updateFromServerResponse(qq) {
-             vq(qq.idToken, "internal-error"), vq("undefined" !== typeof qq.idToken, "internal-error"), vq("undefined" !== typeof qq.refreshToken, "internal-error");
-             const Eq = "expiresIn" in qq && "undefined" !== typeof qq.expiresIn ? Number(qq.expiresIn) : function(qq) {
-               const Eq = Kq(qq);
-               return vq(Eq, "internal-error"), vq("undefined" !== typeof Eq.exp, "internal-error"), vq("undefined" !== typeof Eq.iat, "internal-error"), Number(Eq.exp) - Number(Eq.iat)
-             }(qq.idToken);
-             this.updateTokensAndExpiration(qq.idToken, qq.refreshToken, Eq)
+           get keysUp() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysUp : []
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L773-L833` → after: `L1399-L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1399-L1401) · [Before (L773-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L773-L833)

```diff
-           async getToken(qq) {
-             let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             return vq(!this.accessToken || this.refreshToken, qq, "user-token-expired"), Eq || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(qq, this.refreshToken), this.accessToken) : null : this.accessToken
-           }
-           clearRefreshToken() {
-             this.refreshToken = null
-           }
-           async refresh(qq, Eq) {
-             const {
-               accessToken: gq,
-               refreshToken: lq,
-               expiresIn: Oq
-             } = await async function(qq, Eq) {
-               const gq = await Lq(qq, {}, (async () => {
-                 const gq = (0, Yq.$)({
-                     grant_type: "refresh_token",
- ... (45 more removed lines; see GitHub link above)
+           set keysUp(CC) {
+             const zC = this.inputs.attached.keyboard;
+             zC && (zC.keysUp = CC)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L835-L836` → after: `L1403-L1405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1403-L1405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1403-L1405) · [Before (L835-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L835-L836)

```diff
-           _assign(qq) {
-             this.accessToken = qq.accessToken, this.refreshToken = qq.refreshToken, this.expirationTime = qq.expirationTime
+           get keysDown() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysDown : []
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L838-L839` → after: `L1407-L1409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1407-L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1407-L1409) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L838-L839)

```diff
-           _clone() {
-             return Object.assign(new EE, this.toJSON())
+           set keysDown(CC) {
+             const zC = this.inputs.attached.keyboard;
+             zC && (zC.keysDown = CC)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L841-L842` → after: `L1411-L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1411-L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1411-L1413) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L841-L842)

```diff
-           _performRefresh() {
-             return hq("not implemented")
+           get keysLeft() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysLeft : []
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L844-L858` → after: `L1415-L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1415-L1417) · [Before (L844-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L844-L858)

```diff
-         }
- 
-         function gE(qq, Eq) {
-           vq("string" === typeof qq || "undefined" === typeof qq, "internal-error", {
-             appName: Eq
-           })
-         }
-         class YE {
-           constructor(qq) {
-             var {
-               uid: Eq,
-               auth: gq,
-               stsTokenManager: Yq
-             } = qq, lq = Oq(qq, ["uid", "auth", "stsTokenManager"]);
-             this.providerId = "firebase", this.proactiveRefresh = new Iq(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = Eq, this.auth = gq, this.stsTokenManager = Yq, this.accessToken = Yq.accessToken, this.displayName = lq.displayName || null, this.ema … [truncated]
+           set keysLeft(CC) {
+             const zC = this.inputs.attached.keyboard;
+             zC && (zC.keysLeft = CC)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L860-L862` → after: `L1419-L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1419-L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1419-L1421) · [Before (L860-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L860-L862)

```diff
-           async getIdToken(qq) {
-             const Eq = await Cq(this, this.stsTokenManager.getToken(this.auth, qq));
-             return vq(Eq, this.auth, "internal-error"), this.accessToken !== Eq && (this.accessToken = Eq, await this.auth._persistUserIfCurrent(this), this.auth._notifyListenersIfCurrent(this)), Eq
+           get keysRight() {
+             const CC = this.inputs.attached.keyboard;
+             return CC ? CC.keysRight : []
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L864-L865` → after: `L1423-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1423-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1423-L1425) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L864-L865)

```diff
-           getIdTokenResult(qq) {
-             return Xq(this, qq)
+           set keysRight(CC) {
+             const zC = this.inputs.attached.keyboard;
+             zC && (zC.keysRight = CC)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L867-L868` → after: `L1427-L1429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1427-L1429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1427-L1429) · [Before (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L867-L868)

```diff
-           reload() {
-             return qE(this)
+           get wheelPrecision() {
+             const CC = this.inputs.attached.mousewheel;
+             return CC ? CC.wheelPrecision : 0
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L870-L871` → after: `L1431-L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1431-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1431-L1433) · [Before (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L870-L871)

```diff
-           _assign(qq) {
-             this !== qq && (vq(this.uid === qq.uid, this.auth, "internal-error"), this.displayName = qq.displayName, this.photoURL = qq.photoURL, this.email = qq.email, this.emailVerified = qq.emailVerified, this.phoneNumber = qq.phoneNumber, this.isAnonymous = qq.isAnonymous, th … [truncated]
+           set wheelPrecision(CC) {
+             const zC = this.inputs.attached.mousewheel;
+             zC && (zC.wheelPrecision = CC)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L873-L878` → after: `L1435-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1435-L1437) · [Before (L873-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L873-L878)

```diff
-           _clone(qq) {
-             const Eq = new YE(Object.assign(Object.assign({}, this), {
-               auth: qq,
-               stsTokenManager: this.stsTokenManager._clone()
-             }));
-             return Eq.metadata._copy(this.metadata), Eq
+           get zoomToMouseLocation() {
+             const CC = this.inputs.attached.mousewheel;
+             return !!CC && CC.zoomToMouseLocation
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L880-L881` → after: `L1439-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1439-L1441) · [Before (L880-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L880-L881)

```diff
-           _onReload(qq) {
-             vq(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = qq, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
+           set zoomToMouseLocation(CC) {
+             const zC = this.inputs.attached.mousewheel;
+             zC && (zC.zoomToMouseLocation = CC)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L883-L884` → after: `L1443-L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1443-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1443-L1445) · [Before (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L883-L884)

```diff
-           _notifyReloadListener(qq) {
-             this.reloadListener ? this.reloadListener(qq) : this.reloadUserInfo = qq
+           get wheelDeltaPercentage() {
+             const CC = this.inputs.attached.mousewheel;
+             return CC ? CC.wheelDeltaPercentage : 0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L886-L887` → after: `L1447-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1447-L1449) · [Before (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L886-L887)

```diff
-           _startProactiveRefresh() {
-             this.proactiveRefresh._start()
+           set wheelDeltaPercentage(CC) {
+             const zC = this.inputs.attached.mousewheel;
+             zC && (zC.wheelDeltaPercentage = CC)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L889-L890` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1451-L1452) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L889-L890)

```diff
-           _stopProactiveRefresh() {
-             this.proactiveRefresh._stop()
+           get _useCtrlForPanning() {
+             return this._useCtrlForPanningInternal
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L892-L920` → after: `L1454-L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1454-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1454-L1480) · [Before (L892-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L892-L920)

```diff
-           async _updateTokensIfNecessary(qq) {
-             let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-               gq = !1;
-             qq.idToken && qq.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(qq), gq = !0), Eq && await Dq(this), await this.auth._persistUserIfCurrent(this), gq && this.auth._notifyListenersIfCurrent(this)
-           }
-           async delete() {
-             const qq = await this.getIdToken();
-             return await Cq(this, async function(qq, Eq) {
-               return Gq(qq, "POST", "/v1/accounts:delete", Eq)
-             }(this.auth, {
-               idToken: qq
-             })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
-           }
-           toJSON() {
-             return Object.assign(Object.assign({
-               uid: this.uid,
- ... (13 more removed lines; see GitHub link above)
+           set _useCtrlForPanning(CC) {
+             this._useCtrlForPanningInternal = CC;
+             const zC = this.movement.input,
+               ZC = zC.getEntry("keyboard", "pan", {
+                 modifiers: {
+                   ctrl: !0
+                 }
+               });
+             !CC && ZC ? zC.inputMap.splice(zC.inputMap.indexOf(ZC), 1) : CC && !ZC && zC.addEntry({
+               source: "keyboard",
+               modifiers: {
+                 ctrl: !0
+               },
+               interaction: "pan"
+             });
+             const QC = zC.getEntry("pointer", "pan", {
+ ... (11 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L923-L970` → after: `L1483-L1489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1483-L1489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1483-L1489) · [Before (L923-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L923-L970)

```diff
-           get refreshToken() {
-             return this.stsTokenManager.refreshToken || ""
-           }
-           static _fromJSON(qq, Eq) {
-             var gq, Yq, lq, Oq, mq, xq, Aq, cq;
-             const uq = null !== (gq = Eq.displayName) && void 0 !== gq ? gq : void 0,
-               Bq = null !== (Yq = Eq.email) && void 0 !== Yq ? Yq : void 0,
-               Wq = null !== (lq = Eq.phoneNumber) && void 0 !== lq ? lq : void 0,
-               Nq = null !== (Oq = Eq.photoURL) && void 0 !== Oq ? Oq : void 0,
-               aq = null !== (mq = Eq.tenantId) && void 0 !== mq ? mq : void 0,
-               Vq = null !== (xq = Eq._redirectEventId) && void 0 !== xq ? xq : void 0,
-               dq = null !== (Aq = Eq.createdAt) && void 0 !== Aq ? Aq : void 0,
-               jq = null !== (cq = Eq.lastLoginAt) && void 0 !== cq ? cq : void 0,
-               {
-                 uid: Hq,
-                 emailVerified: oq,
- ... (32 more removed lines; see GitHub link above)
+           get _panningMouseButton() {
+             return this._panningMouseButtonInternal
+           }
+           set _panningMouseButton(CC) {
+             this._panningMouseButtonInternal = CC;
+             const zC = this.movement.input.getEntry("pointer", "pan", {
+               modifiers: {}
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L972` → after: `L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1491) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L972)

```diff
-             return await Dq(lq), lq
+             zC && (zC.button = CC)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L974-L984` → after: `L1493-L1494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1493-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1493-L1494) · [Before (L974-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L974-L984)

```diff
-         }
-         const lE = new Map;
- 
-         function OE(qq) {
-           nq(qq instanceof Function, "Expected a class definition");
-           let Eq = lE.get(qq);
-           return Eq ? (nq(Eq instanceof qq, "Instance stored in cache mismatched with class"), Eq) : (Eq = new qq, lE.set(qq, Eq), Eq)
-         }
-         class mE {
-           constructor() {
-             this.type = "NONE", this.storage = {}
+           get isInterpolating() {
+             return this._isInterpolating
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L986-L987` → after: `L1496-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1496-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1496-L1497) · [Before (L986-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L986-L987)

```diff
-           async _isAvailable() {
-             return !0
+           get bouncingBehavior() {
+             return this._bouncingBehavior
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L989-L990` → after: `L1499-L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1499-L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1499-L1500) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L989-L990)

```diff
-           async _set(qq, Eq) {
-             this.storage[qq] = Eq
+           get useBouncingBehavior() {
+             return null != this._bouncingBehavior
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L992-L994` → after: `L1502-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1502-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1502-L1503) · [Before (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L992-L994)

```diff
-           async _get(qq) {
-             const Eq = this.storage[qq];
-             return void 0 === Eq ? null : Eq
+           set useBouncingBehavior(CC) {
+             CC !== this.useBouncingBehavior && (CC ? (this._bouncingBehavior = new pC, this.addBehavior(this._bouncingBehavior)) : this._bouncingBehavior && (this.removeBehavior(this._bouncingBehavior), this._bouncingBehavior = null))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L996-L997` → after: `L1505-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1505-L1506) · [Before (L996-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L996-L997)

```diff
-           async _remove(qq) {
-             delete this.storage[qq]
+           get framingBehavior() {
+             return this._framingBehavior
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L999-L1060` → after: `L1508-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1508-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1508-L1509) · [Before (L999-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L999-L1060)

```diff
-           _addListener(qq, Eq) {}
-           _removeListener(qq, Eq) {}
-         }
-         mE.type = "NONE";
-         const xE = mE;
- 
-         function AE(qq, Eq, gq) {
-           return `firebase:${qq}:${Eq}:${gq}`
-         }
-         class cE {
-           constructor(qq, Eq, gq) {
-             this.persistence = qq, this.auth = Eq, this.userKey = gq;
-             const {
-               config: Yq,
-               name: lq
-             } = this.auth;
- ... (46 more removed lines; see GitHub link above)
+           get useFramingBehavior() {
+             return null != this._framingBehavior
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1062-L1159` → after: `L1511-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1511-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1511-L1512) · [Before (L1062-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1062-L1159)

```diff
-         }
- 
-         function uE(qq) {
-           const Eq = qq.toLowerCase();
-           if (Eq.includes("opera/") || Eq.includes("opr/") || Eq.includes("opios/")) return "Opera";
-           if (aE(Eq)) return "IEMobile";
-           if (Eq.includes("msie") || Eq.includes("trident/")) return "IE";
-           if (Eq.includes("edge/")) return "Edge";
-           if (BE(Eq)) return "Firefox";
-           if (Eq.includes("silk/")) return "Silk";
-           if (dE(Eq)) return "Blackberry";
-           if (jE(Eq)) return "Webos";
-           if (WE(Eq)) return "Safari";
-           if ((Eq.includes("chrome/") || NE(Eq)) && !Eq.includes("edge/")) return "Chrome";
-           if (VE(Eq)) return "Android";
-           {
- ... (82 more removed lines; see GitHub link above)
+           set useFramingBehavior(CC) {
+             CC !== this.useFramingBehavior && (CC ? (this._framingBehavior = new PC, this.addBehavior(this._framingBehavior)) : this._framingBehavior && (this.removeBehavior(this._framingBehavior), this._framingBehavior = null))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1161-L1182` → after: `L1514-L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1514-L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1514-L1515) · [Before (L1161-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1161-L1182)

```diff
-         }
- 
-         function vE(qq) {
-           return new Promise(((Eq, gq) => {
-             const Yq = document.createElement("script");
-             Yq.setAttribute("src", qq), Yq.onload = Eq, Yq.onerror = qq => {
-                 const Eq = Qq("internal-error");
-                 Eq.customData = qq, gq(Eq)
-               }, Yq.type = "text/javascript", Yq.charset = "UTF-8",
-               function() {
-                 var qq, Eq;
-                 return null !== (Eq = null === (qq = document.getElementsByTagName("head")) || void 0 === qq ? void 0 : qq[0]) && void 0 !== Eq ? Eq : document
-               }().appendChild(Yq)
-           }))
-         }
- 
- ... (6 more removed lines; see GitHub link above)
+           get autoRotationBehavior() {
+             return this._autoRotationBehavior
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1184-L1233` → after: `L1517-L1518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1517-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1517-L1518) · [Before (L1184-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1184-L1233)

```diff
-           async verify() {
-             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
-               Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
- 
-             function gq(Eq, gq, Yq) {
-               const lq = window.grecaptcha;
-               tE(lq) ? lq.enterprise.ready((() => {
-                 lq.enterprise.execute(Eq, {
-                   action: qq
-                 }).then((qq => {
-                   gq(qq)
-                 })).catch((() => {
-                   gq("NO_RECAPTCHA")
-                 }))
-               })) : Yq(Error("No reCAPTCHA enterprise script loaded."))
-             }
- ... (34 more removed lines; see GitHub link above)
+           get useAutoRotationBehavior() {
+             return null != this._autoRotationBehavior
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1235-L1272` → after: `L1520-L1521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1520-L1521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1520-L1521) · [Before (L1235-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1235-L1272)

```diff
-         }
-         async function bE(qq, Eq, gq) {
-           let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-           const lq = new nE(qq);
-           let Oq;
-           try {
-             Oq = await lq.verify(gq)
-           } catch (xq) {
-             Oq = await lq.verify(gq, !0)
-           }
-           const mq = Object.assign({}, Eq);
-           return Yq ? Object.assign(mq, {
-             captchaResp: Oq
-           }) : Object.assign(mq, {
-             captchaResponse: Oq
-           }), Object.assign(mq, {
- ... (22 more removed lines; see GitHub link above)
+           set useAutoRotationBehavior(CC) {
+             CC !== this.useAutoRotationBehavior && (CC ? (this._autoRotationBehavior = new MC, this.addBehavior(this._autoRotationBehavior)) : this._autoRotationBehavior && (this.removeBehavior(this._autoRotationBehavior), this._autoRotationBehavior = null))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1274-L1286` → after: `L1523-L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1523-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1523-L1580) · [Before (L1274-L1286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1274-L1286)

```diff
-           async runMiddleware(qq) {
-             if (this.auth.currentUser === qq) return;
-             const Eq = [];
-             try {
-               for (const gq of this.queue) await gq(qq), gq.onAbort && Eq.push(gq.onAbort)
-             } catch (gq) {
-               Eq.reverse();
-               for (const qq of Eq) try {
-                 qq()
-               } catch (Yq) {}
-               throw this.auth._errorFactory.create("login-blocked", {
-                 originalMessage: null === gq || void 0 === gq ? void 0 : gq.message
-               })
+           constructor(CC, zC, ZC, wC, fC, oC) {
+             var qC;
+             let FC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+             super(CC, nC.r.Zero(), oC, FC), qC = this, this.alpha = ((0, QC.n)(this, LC), (0, QC.n)(this, UC, void 0)), this.beta = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, void 0)), this.radius = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, void 0)), this.overrideCloneAlphaBetaRad … [truncated]
+               let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+               ZC ? (qC.setPosition(zC), qC.GN && qC.GN(ZC)) : qC._previousPosition.Av(qC._position);
+               const QC = Math.cos(qC.alpha),
+                 wC = Math.sin(qC.alpha),
+                 bC = Math.cos(qC.beta);
+               let nC = Math.sin(qC.beta);
+               0 === nC && (nC = 1e-4);
+               const fC = qC._getTargetPosition();
+               qC._computationVector.L_(qC.radius * QC * nC, qC.radius * bC, qC.radius * wC * nC), fC.addToRef(qC._computationVector, qC._newPosition), qC._position.Av(qC._newPosition);
+               let oC = qC.upVector;
+               qC.allowUpsideDown && qC.beta < 0 && (oC = oC.clone(), oC = oC.Of()), qC._computeViewMatrix(qC._position, fC, oC), qC._viewMatrix.addAtIndex(12, qC.targetScreenOffset.x), qC._viewMatrix.addAtIndex(13, qC.targetScreenOffset.y), qC._collisionTriggered = !1
+             }, this.wV = nC.r.Zero(), fC && this.setTarget(fC), this.alpha = zC, this.beta = ZC, this.radius = wC, this.getViewMatrix(), this.inputs = new EC(this), this.inputs.addKeyboard().addMouseWheel().addPointers(), this.movement = new uC(this.Km(), this._position), this.mo … [truncated]
+ ... (42 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1289-L1303` → after: `L1583-L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1583-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1583-L1607) · [Before (L1289-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1289-L1303)

```diff
-         }
-         class ZE {
-           constructor(qq, Eq, gq, Yq) {
-             this.app = qq, this.heartbeatServiceProvider = Eq, this.appCheckServiceProvider = gq, this.config = Yq, this.currentUser = null, this.emulatorConfig = null, this.operations = Promise.resolve(), this.authStateSubscription = new ME(this), this.idTokenSubscription = new  … [truncated]
-               appVerificationDisabledForTesting: !1
-             }, this.frameworks = [], this.name = qq.name, this.clientVersion = Yq.sdkClientVersion
-           }
-           _initializeWithPersistence(qq, Eq) {
-             return Eq && (this._popupRedirectResolver = OE(Eq)), this._initializationPromise = this.queue((async () => {
-               var gq, Yq;
-               if (!this._deleted && (this.persistenceManager = await cE.create(this, qq), !this._deleted)) {
-                 if (null === (gq = this._popupRedirectResolver) || void 0 === gq ? void 0 : gq._shouldInitProactively) try {
-                   await this._popupRedirectResolver._initialize(this)
-                 } catch (lq) {}
-                 await this.initializeCurrentUser(Eq), this.lastNotifiedUid = (null === (Yq = this.currentUser) || void 0 === Yq ? void 0 : Yq.uid) || null, this._deleted || (this._isInitialized = !0)
+           detachControl() {
+             this.inputs.detachElement(), this._reset && this._reset()
+           }
+           _applyRotationAndZoomDelta(CC, zC, ZC) {
+             const QC = this.invertRotation ? -1 : 1;
+             let wC = CC * this._calculateHandednessMultiplier();
+             this.beta < 0 && (wC *= -1), this.alpha += wC * QC, this.beta += zC * QC, this.radius -= ZC
+           }
+           _applyPanDelta(CC, zC) {
+             const ZC = nC.j.Eg[0].L_(CC, zC, zC);
+             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZC.multiplyInPlace(this.panningAxis), nC.r.TransformNormalToRef(ZC, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
+               const CC = this.upVector,
+                 zC = nC.r.CrossToRef(this._transformedDirection, CC, this._transformedDirection);
+               nC.r.CrossToRef(CC, zC, this._transformedDirection)
+             } else this.panningAxis.y || (this._transformedDirection.y = 0);
+             if (!this._targetHost)
+ ... (9 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1312-L1322` → after: `L1610-L1621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1610-L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1610-L1621) · [Before (L1312-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1312-L1322)

```diff
-           async initializeCurrentUser(qq) {
-             var Eq;
-             const gq = await this.assertedPersistence.getCurrentUser();
-             let Yq = gq,
-               lq = !1;
-             if (qq && this.config.authDomain) {
-               await this.getOrInitRedirectPersistenceManager();
-               const gq = null === (Eq = this.redirectUser) || void 0 === Eq ? void 0 : Eq._redirectEventId,
-                 Oq = null === Yq || void 0 === Yq ? void 0 : Yq._redirectEventId,
-                 mq = await this.tryRedirectSignIn(qq);
-               gq && gq !== Oq || !(null === mq || void 0 === mq ? void 0 : mq.user) || (Yq = mq.user, lq = !0)
+           _checkInputs() {
+             if (this._collisionTriggered) return;
+             this.inputs.checkInputs();
+             let CC = !1;
+             this.movement.computeCurrentFrameDeltas();
+             const zC = this.movement.rotationDeltaCurrentFrame,
+               ZC = this.movement.zoomDeltaCurrentFrame,
+               QC = this.movement.panDeltaCurrentFrame;
+             if (0 === zC.x && 0 === zC.y && 0 === ZC && 0 === QC.x && 0 === QC.y || (CC = !0, 0 === zC.x && 0 === zC.y && 0 === ZC || this._applyRotationAndZoomDelta(zC.x, zC.y, ZC), 0 === QC.x && 0 === QC.y || this._applyPanDelta(QC.x, QC.y)), 0 === this._inertialAlphaOffset &&  … [truncated]
+               this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
+               const zC = this._panningEpsilon;
+               Math.abs(this.inertialPanningX) < zC && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < zC && (this.inertialPanningY = 0), CC = !0
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1324-L1329` → after: `L1623-L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1623-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1623-L1631) · [Before (L1324-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1324-L1329)

```diff
-             if (!Yq) return this.directlySetCurrentUser(null);
-             if (!Yq._redirectEventId) {
-               if (lq) try {
-                 await this.beforeStateQueue.runMiddleware(Yq)
-               } catch (Oq) {
-                 Yq = gq, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(Oq)))
+             if (CC) this.stopInterpolation();
+             else if (this._isInterpolating) {
+               let CC = !1;
+               const zC = this._scene.mg().getDeltaTime() / 1e3,
+                 ZC = 1 - Math.pow(2, -zC / this._currentInterpolationFactor),
+                 QC = rC(this._goalRadius, this.radius);
+               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
+                 const zC = nC.j.Eg[0].set(rC(this._goalTarget.x, this.wV.x), rC(this._goalTarget.y, this.wV.y), rC(this._goalTarget.z, this.wV.z));
+                 nC.r.LerpToRef(this.target, zC, ZC, this.wV), 10 * nC.r.Distance(this.target, zC) / QC < NC.e ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Av(zC), this.setTarget(this.target, !1, !0, !0)) : CC = !0
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1331-L1340` → after: `L1633-L1649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1633-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1633-L1649) · [Before (L1331-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1331-L1340)

```diff
-               return Yq ? this.reloadAndSetCurrentUserOrClear(Yq) : this.directlySetCurrentUser(null)
-             }
-             return vq(this._popupRedirectResolver, this, "argument-error"), await this.getOrInitRedirectPersistenceManager(), this.redirectUser && this.redirectUser._redirectEventId === Yq._redirectEventId ? this.directlySetCurrentUser(Yq) : this.reloadAndSetCurrentUserOrClear(Yq … [truncated]
-           }
-           async tryRedirectSignIn(qq) {
-             let Eq = null;
-             try {
-               Eq = await this._popupRedirectResolver._completeRedirectFn(this, qq, !0)
-             } catch (gq) {
-               await this._setRedirectUser(null)
+               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
+                 const zC = nC.f.RotationAlphaBetaGammaToRef(rC(this._goalAlpha, this.alpha), rC(this._goalBeta, this.beta), 0, nC.j.Quaternion[0]),
+                   QC = nC.f.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, nC.j.Quaternion[1]),
+                   wC = nC.f.SlerpToRef(QC, zC, ZC, nC.j.Quaternion[2]);
+                 wC.normalize();
+                 const bC = wC.toAlphaBetaGammaToRef(nC.j.Eg[0]);
+                 if (this.alpha = bC.x, this.beta = bC.y, wC.isApprox(zC, NC.e / 5)) {
+                   this._goalAlpha = NaN, this._goalBeta = NaN;
+                   const CC = zC.toAlphaBetaGammaToRef(nC.j.Eg[0]);
+                   this.alpha = CC.x, this.beta = CC.y
+                 } else CC = !0
+               }
+               if (isNaN(this._goalRadius) || (this.radius += (QC - this.radius) * ZC, Math.abs(QC / this.radius - 1) < NC.e ? (this._goalRadius = NaN, this.radius = QC) : CC = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
+                 const zC = nC.j.Vector2[0].set(rC(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), rC(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
+                 nC.n.LerpToRef(this.targetScreenOffset, zC, ZC, this.targetScreenOffset), nC.n.Distance(this.targetScreenOffset, zC) < NC.e ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Av(zC)) : CC = !0
+               }
+ ... (1 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1342` → after: `L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1651) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1342)

```diff
-             return Eq
+             this._checkLimits(), super._checkInputs()
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1344-L1350` → after: `L1653-L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1653-L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1653-L1654) · [Before (L1344-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1344-L1350)

```diff
-           async reloadAndSetCurrentUserOrClear(qq) {
-             try {
-               await Dq(qq)
-             } catch (Eq) {
-               if ("auth/network-request-failed" !== (null === Eq || void 0 === Eq ? void 0 : Eq.code)) return this.directlySetCurrentUser(null)
-             }
-             return this.directlySetCurrentUser(qq)
+           _checkLimits() {
+             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1352-L1357` → after: `L1656-L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1656-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1656-L1665) · [Before (L1352-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1352-L1357)

```diff
-           useDeviceLanguage() {
-             this.languageCode = function() {
-               if ("undefined" === typeof navigator) return null;
-               const qq = navigator;
-               return qq.languages && qq.languages[0] || qq.language || null
-             }()
+           rebuildAnglesAndRadius() {
+             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || nC.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
+             const CC = this.alpha;
+             var zC, ZC;
+             this.alpha = function(CC) {
+               let zC = Math.PI / 2;
+               return 0 === CC.x && 0 === CC.z || (zC = Math.acos(CC.x / Math.sqrt(Math.pow(CC.x, 2) + Math.pow(CC.z, 2)))), CC.z < 0 && (zC = 2 * Math.PI - zC), zC
+             }(this._computationVector), this.beta = (zC = this._computationVector.y, ZC = this.radius, Math.acos(zC / ZC));
+             const QC = Math.round((CC - this.alpha) / (2 * Math.PI));
+             this.alpha += 2 * QC * Math.PI, this._checkLimits()
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1359-L1360` → after: `L1667-L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1667-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1667-L1668) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1359-L1360)

```diff
-           async _delete() {
-             this._deleted = !0
+           setPosition(CC) {
+             this._position.equals(CC) || (this._position.Av(CC), this.rebuildAnglesAndRadius())
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1362-L1364` → after: `L1670-L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1670-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1670-L1698) · [Before (L1362-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1362-L1364)

```diff
-           async updateCurrentUser(qq) {
-             const Eq = qq ? (0, Yq.K)(qq) : null;
-             return Eq && vq(Eq.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(Eq && Eq._clone(this))
+           setTarget(CC) {
+             let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+               ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+               QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+             if (QC = this.overrideCloneAlphaBetaRadius ?? QC, CC.computeWorldMatrix) zC && CC.WE ? this._targetBoundingCenter = CC.WE().boundingBox.centerWorld.clone() : this._targetBoundingCenter = null, CC.computeWorldMatrix(), this._targetHost = CC, this.wV = this._getTargetPo … [truncated]
+             else {
+               const zC = CC,
+                 QC = this._getTargetPosition();
+               if (QC && !ZC && QC.equals(zC)) return;
+               this._targetHost = null, this.wV = zC, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
+             }
+             QC || this.rebuildAnglesAndRadius()
+           }
+           _getViewMatrix() {
+             const CC = Math.cos(this.alpha),
+               zC = Math.sin(this.alpha),
+ ... (13 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1366` → after: `L1700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1700) · [Before (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1366)

```diff
-           async _updateCurrentUser(qq) {
+           zoomOn(CC) {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1368-L1387` → after: `L1702-L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1702-L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1702-L1708) · [Before (L1368-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1368-L1387)

```diff
-             if (!this._deleted) return qq && vq(this.tenantId === qq.tenantId, this, "tenant-id-mismatch"), Eq || await this.beforeStateQueue.runMiddleware(qq), this.queue((async () => {
-               await this.directlySetCurrentUser(qq), this.notifyAuthListeners()
-             }))
-           }
-           async signOut() {
-             return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
-           }
-           setPersistence(qq) {
-             return this.queue((async () => {
-               await this.assertedPersistence.setPersistence(OE(qq))
-             }))
-           }
-           async initializeRecaptchaConfig() {
-             const qq = await QE(this, {
-                 clientType: "CLIENT_TYPE_WEB",
-                 version: "RECAPTCHA_ENTERPRISE"
- ... (4 more removed lines; see GitHub link above)
+             CC = CC || this.Km().meshes;
+             const ZC = qC.b.MinMax(CC);
+             let QC = this._calculateLowerRadiusFromModelBoundingSphere(ZC.min, ZC.max);
+             if (QC = Math.max(Math.min(QC, this.upperRadiusLimit || Number.MAX_VALUE), this.lowerRadiusLimit || 0), this.radius = QC * this.zoomOnFactor, this.mode === GC.d.ORTHOGRAPHIC_CAMERA) {
+               const CC = this.Km().mg().getAspectRatio(this),
+                 zC = QC * this.zoomOnFactor / 2;
+               this.orthoLeft = -zC * CC, this.orthoRight = zC * CC, this.orthoBottom = -zC, this.orthoTop = zC
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1389-L1414` → after: `L1710-L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1710-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1710-L1722) · [Before (L1389-L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1389-L1414)

```diff
-           }
-           _getRecaptchaConfig() {
-             return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
-           }
-           _getPersistence() {
-             return this.assertedPersistence.persistence.type
-           }
-           _updateErrorMap(qq) {
-             this._errorFactory = new Yq.d("auth", "Firebase", qq())
-           }
-           onAuthStateChanged(qq, Eq, gq) {
-             return this.registerStateListener(this.authStateSubscription, qq, Eq, gq)
-           }
-           beforeAuthStateChanged(qq, Eq) {
-             return this.beforeStateQueue.pushCallback(qq, Eq)
-           }
- ... (10 more removed lines; see GitHub link above)
+             this.focusOn({
+               min: ZC.min,
+               max: ZC.max,
+               distance: QC
+             }, zC)
+           }
+           focusOn(CC) {
+             let zC, ZC, QC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             if (void 0 === CC.min) {
+               const QC = CC || this.Km().meshes;
+               zC = qC.b.MinMax(QC), ZC = nC.r.Distance(zC.min, zC.max)
+             } else {
+               zC = CC, ZC = CC.distance
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1417-L1424` → after: `L1726-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1726-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1726-L1737) · [Before (L1417-L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1417-L1424)

```diff
-           async _setRedirectUser(qq, Eq) {
-             const gq = await this.getOrInitRedirectPersistenceManager(Eq);
-             return null === qq ? gq.removeCurrentUser() : gq.setCurrentUser(qq)
-           }
-           async getOrInitRedirectPersistenceManager(qq) {
-             if (!this.redirectPersistenceManager) {
-               const Eq = qq && OE(qq) || this._popupRedirectResolver;
-               vq(Eq, this, "argument-error"), this.redirectPersistenceManager = await cE.create(this, [OE(Eq._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
+           createRigCamera(zC, ZC) {
+             let QC = 0;
+             switch (this.cameraRigMode) {
+               case GC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case GC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case GC.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case GC.d.RIG_MODE_VR:
+                 QC = this._cameraRigParams.stereoHalfAngle * (0 === ZC ? 1 : -1);
+                 break;
+               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+                 QC = this._cameraRigParams.stereoHalfAngle * (0 === ZC ? -1 : 1)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1426-L1499` → after: `L1739-L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1739-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1739-L1836) · [Before (L1426-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1426-L1499)

```diff
-             return this.redirectPersistenceManager
-           }
-           async _redirectUserForId(qq) {
-             var Eq, gq;
-             return this._isInitialized && await this.queue((async () => {})), (null === (Eq = this._currentUser) || void 0 === Eq ? void 0 : Eq._redirectEventId) === qq ? this._currentUser : (null === (gq = this.redirectUser) || void 0 === gq ? void 0 : gq._redirectEventId) === q … [truncated]
-           }
-           async _persistUserIfCurrent(qq) {
-             if (qq === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(qq)))
-           }
-           _notifyListenersIfCurrent(qq) {
-             qq === this.currentUser && this.notifyAuthListeners()
-           }
-           _key() {
-             return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
-           }
-           _startProactiveRefresh() {
- ... (58 more removed lines; see GitHub link above)
+             const wC = new CC(zC, this.alpha + QC, this.beta, this.radius, this.wV, this.Km());
+             return wC._cameraRigParams = {}, wC.isRigCamera = !0, wC.rigParent = this, wC.upVector = this.upVector, wC.mode = this.mode, wC.orthoLeft = this.orthoLeft, wC.orthoRight = this.orthoRight, wC.orthoBottom = this.orthoBottom, wC.orthoTop = this.orthoTop, wC
+           }
+           _updateRigCameras() {
+             const CC = this._rigCameras[0],
+               zC = this._rigCameras[1];
+             switch (CC.beta = zC.beta = this.beta, this.cameraRigMode) {
+               case GC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case GC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case GC.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
+               case GC.d.RIG_MODE_VR:
+                 CC.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, zC.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
+                 break;
+               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+                 CC.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, zC.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
+ ... (82 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1501-L1558` → after: `L1838-L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1838-L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1838-L1849) · [Before (L1501-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L1501-L1558)

```diff
-             }(`Error while retrieving App Check token: ${Eq.error}`), null === Eq || void 0 === Eq ? void 0 : Eq.token
-           }
-         }
- 
-         function fE(qq) {
-           return (0, Yq.K)(qq)
-         }
-         class ME {
-           constructor(qq) {
-             this.auth = qq, this.observer = null, this.addObserver = (0, Yq.u)((qq => this.observer = qq))
-           }
-           get next() {
-             return vq(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer)
-           }
-         }
- 
- ... (42 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, UC, BC), (0, QC.j)(null, null, ZC, {
+             kind: "field",
+             name: "beta",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "beta" in CC,
+               get: CC => CC.beta,
+               set: (CC, zC) => {
+                 CC.beta = zC
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2415-L2490` → after: `L1852-L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1852-L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1852-L1863) · [Before (L2415-L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L2415-L2490)

```diff
-             operation: Oq
-           }
-         }
-         async function Tg(qq, Eq) {
-           const {
-             data: gq
-           } = await Mg((0, Yq.K)(qq), Eq);
-           return gq.email
-         }
-         async function zg(qq, Eq, gq) {
-           var Yq;
-           const lq = fE(qq),
-             Oq = {
-               returnSecureToken: !0,
-               email: Eq,
-               password: gq,
- ... (60 more removed lines; see GitHub link above)
+             metadata: bC
+           }, OC, kC), (0, QC.j)(null, null, oC, {
+             kind: "field",
+             name: "radius",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "radius" in CC,
+               get: CC => CC.radius,
+               set: (CC, zC) => {
+                 CC.radius = zC
+               }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2492-L2539` → after: `L1865-L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1865-L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1865-L1876) · [Before (L2492-L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L2492-L2539)

```diff
-             {
-               signinMethods: lq
-             } = await async function(qq, Eq) {
-               return Gq(qq, "POST", "/v1/accounts:createAuthUri", pq(qq, Eq))
-             }((0, Yq.K)(qq), gq);
-           return lq || []
-         }
-         async function kg(qq, Eq) {
-           const gq = (0, Yq.K)(qq),
-             lq = {
-               requestType: "VERIFY_EMAIL",
-               idToken: await qq.getIdToken()
-             };
-           Eq && bg(gq.auth, lq, Eq);
-           const {
-             email: Oq
- ... (32 more removed lines; see GitHub link above)
+             metadata: bC
+           }, VC, Cz), (0, QC.j)(null, null, FC, {
+             kind: "field",
+             name: "overrideCloneAlphaBetaRadius",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "overrideCloneAlphaBetaRadius" in CC,
+               get: CC => CC.overrideCloneAlphaBetaRadius,
+               set: (CC, zC) => {
+                 CC.overrideCloneAlphaBetaRadius = zC
+               }
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2541-L2690` → after: `L1878-L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1878-L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1878-L1888) · [Before (L2541-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L2541-L2690)

```diff
-             xq = await Cq(Oq, async function(qq, Eq) {
-               return Gq(qq, "POST", "/v1/accounts:update", Eq)
-             }(Oq.auth, mq));
-           Oq.displayName = xq.displayName || null, Oq.photoURL = xq.photoUrl || null;
-           const Aq = Oq.providerData.find((qq => {
-             let {
-               providerId: Eq
-             } = qq;
-             return "password" === Eq
-           }));
-           Aq && (Aq.displayName = Oq.displayName, Aq.photoURL = Oq.photoURL), await Oq._updateTokensIfNecessary(xq)
-         }
- 
-         function Fg(qq, Eq) {
-           return Xg((0, Yq.K)(qq), Eq, null)
-         }
- ... (134 more removed lines; see GitHub link above)
+             metadata: bC
+           }, zz, Zz), (0, QC.j)(null, null, WC, {
+             kind: "field",
+             name: "wV",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "wV" in CC,
+               get: CC => CC.wV,
+               set: (CC, zC) => {
+                 CC.wV = zC
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2692-L2727` → after: `L1890-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1890-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1890-L1901) · [Before (L2692-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L2692-L2727)

```diff
-             }
-           }
-           static fromJSON(qq) {
-             var Eq, gq;
-             if (null === qq || void 0 === qq ? void 0 : qq.multiFactorSession) {
-               if (null === (Eq = qq.multiFactorSession) || void 0 === Eq ? void 0 : Eq.pendingCredential) return uY._fromMfaPendingCredential(qq.multiFactorSession.pendingCredential);
-               if (null === (gq = qq.multiFactorSession) || void 0 === gq ? void 0 : gq.idToken) return uY._fromIdtoken(qq.multiFactorSession.idToken)
-             }
-             return null
-           }
-         }
-         class BY {
-           constructor(qq, Eq, gq) {
-             this.session = qq, this.hints = Eq, this.signInResolver = gq
-           }
-           static _fromError(qq, Eq) {
- ... (20 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, Qz, wz), (0, QC.j)(null, null, gC, {
+             kind: "field",
+             name: "_targetHost",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "_targetHost" in CC,
+               get: CC => CC._targetHost,
+               set: (CC, zC) => {
+                 CC._targetHost = zC
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2729-L2822` → after: `L1903-L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1903-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1903-L1914) · [Before (L2729-L2822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L2729-L2822)

```diff
-             }))
-           }
-           async resolveSignIn(qq) {
-             const Eq = qq;
-             return this.signInResolver(Eq)
-           }
-         }
- 
-         function WY(qq, Eq) {
-           var gq;
-           const lq = (0, Yq.K)(qq),
-             Oq = Eq;
-           return vq(Eq.customData.operationType, lq, "argument-error"), vq(null === (gq = Oq.customData._serverResponse) || void 0 === gq ? void 0 : gq.mfaPendingCredential, lq, "argument-error"), BY._fromError(lq, Oq)
-         }
-         class NY {
-           constructor(qq) {
- ... (78 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, bz, nz), (0, QC.j)(null, null, IC, {
+             kind: "field",
+             name: "lowerAlphaLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "lowerAlphaLimit" in CC,
+               get: CC => CC.lowerAlphaLimit,
+               set: (CC, zC) => {
+                 CC.lowerAlphaLimit = zC
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2824-L3059` → after: `L1916-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1916-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1916-L1927) · [Before (L2824-L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L2824-L3059)

```diff
-             }(), this.fallbackToPolling = oE(), this._shouldAllowMigration = !0
-           }
-           forAllChangedKeys(qq) {
-             for (const Eq of Object.keys(this.listeners)) {
-               const gq = this.storage.getItem(Eq),
-                 Yq = this.localCache[Eq];
-               gq !== Yq && qq(Eq, Yq, gq)
-             }
-           }
-           onStorageEvent(qq) {
-             let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (!qq.key) return void this.forAllChangedKeys(((qq, Eq, gq) => {
-               this.notifyListeners(qq, gq)
-             }));
-             const gq = qq.key;
-             if (Eq ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced) {
- ... (220 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, fz, oz), (0, QC.j)(null, null, iC, {
+             kind: "field",
+             name: "upperAlphaLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "upperAlphaLimit" in CC,
+               get: CC => CC.upperAlphaLimit,
+               set: (CC, zC) => {
+                 CC.upperAlphaLimit = zC
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3061-L3173` → after: `L1929-L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1929-L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1929-L1940) · [Before (L3061-L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3061-L3173)

```diff
-             })), qq.addEventListener("success", (async () => {
-               const gq = qq.result;
-               gq.objectStoreNames.contains(bY) ? Eq(gq) : (gq.close(), await
-                 function() {
-                   const qq = indexedDB.deleteDatabase(nY);
-                   return new ZY(qq).toPromise()
-                 }(), Eq(await MY()))
-             }))
-           }))
-         }
-         async function TY(qq, Eq, gq) {
-           const Yq = fY(qq, !0).put({
-             [iY]: Eq,
-             value: gq
-           });
-           return new ZY(Yq).toPromise()
- ... (97 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, qz, Fz), (0, QC.j)(null, null, vC, {
+             kind: "field",
+             name: "lowerBetaLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "lowerBetaLimit" in CC,
+               get: CC => CC.lowerBetaLimit,
+               set: (CC, zC) => {
+                 CC.lowerBetaLimit = zC
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3175-L3363` → after: `L1942-L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1942-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1942-L1953) · [Before (L3175-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3175-L3363)

```diff
-               of qq) gq.add(Yq), JSON.stringify(this.localCache[Yq]) !== JSON.stringify(lq) && (this.notifyListeners(Yq, lq), Eq.push(Yq));
-             for (const Yq of Object.keys(this.localCache)) this.localCache[Yq] && !gq.has(Yq) && (this.notifyListeners(Yq, null), Eq.push(Yq));
-             return Eq
-           }
-           notifyListeners(qq, Eq) {
-             this.localCache[qq] = Eq;
-             const gq = this.listeners[qq];
-             if (gq)
-               for (const Yq of Array.from(gq)) Yq(Eq)
-           }
-           startPolling() {
-             this.stopPolling(), this.pollTimer = setInterval((async () => this._poll()), 800)
-           }
-           stopPolling() {
-             this.pollTimer && (clearInterval(this.pollTimer), this.pollTimer = null)
-           }
- ... (173 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, Wz, Nz), (0, QC.j)(null, null, eC, {
+             kind: "field",
+             name: "upperBetaLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "upperBetaLimit" in CC,
+               get: CC => CC.upperBetaLimit,
+               set: (CC, zC) => {
+                 CC.upperBetaLimit = zC
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3365-L3375` → after: `L1955-L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1955-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1955-L1966) · [Before (L3365-L3375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3365-L3375)

```diff
-             }
-           }
-           assertNotDestroyed() {
-             vq(!this.destroyed, this.auth, "internal-error")
-           }
-           async makeRenderPromise() {
-             if (await this.init(), !this.widgetId) {
-               let qq = this.container;
-               if (!this.isInvisible) {
-                 const Eq = document.createElement("div");
-                 qq.appendChild(Eq), qq = Eq
+             },
+             metadata: bC
+           }, Mz, gz), (0, QC.j)(null, null, hC, {
+             kind: "field",
+             name: "lowerRadiusLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "lowerRadiusLimit" in CC,
+               get: CC => CC.lowerRadiusLimit,
+               set: (CC, zC) => {
+                 CC.lowerRadiusLimit = zC
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3377-L3461` → after: `L1968-L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1968-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1968-L1979) · [Before (L3377-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3377-L3461)

```diff
-               this.widgetId = this.getAssertedRecaptcha().render(qq, this.parameters)
-             }
-             return this.widgetId
-           }
-           async init() {
-             vq(iq() && !hY(), this.auth, "internal-error"), await
-             function() {
-               let qq = null;
-               return new Promise((Eq => {
-                 "complete" !== document.readyState ? (qq = () => Eq(), window.addEventListener("load", qq)) : Eq()
-               })).catch((Eq => {
-                 throw qq && window.removeEventListener("load", qq), Eq
-               }))
-             }(), this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
-             const qq = await async function(qq) {
-               return (await Gq(qq, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || ""
- ... (69 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, Sz, pz), (0, QC.j)(null, null, KC, {
+             kind: "field",
+             name: "upperRadiusLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "upperRadiusLimit" in CC,
+               get: CC => CC.upperRadiusLimit,
+               set: (CC, zC) => {
+                 CC.upperRadiusLimit = zC
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3463-L3574` → after: `L1981-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1981-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1981-L1992) · [Before (L3463-L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3463-L3574)

```diff
-             } {
-               const {
-                 sessionInfo: Eq
-               } = await async function(qq, Eq) {
-                 return Gq(qq, "POST", "/v1/accounts:sendVerificationCode", pq(qq, Eq))
-               }(qq, {
-                 phoneNumber: Oq.phoneNumber,
-                 recaptchaToken: lq
-               });
-               return Eq
-             }
-           } finally {
-             gq._reset()
-           }
-         }
-         async function ql(qq, Eq) {
- ... (96 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, Pz, Gz), (0, QC.j)(null, null, YC, {
+             kind: "field",
+             name: "lowerTargetYLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "lowerTargetYLimit" in CC,
+               get: CC => CC.lowerTargetYLimit,
+               set: (CC, zC) => {
+                 CC.lowerTargetYLimit = zC
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3576-L3707` → after: `L1994-L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1994-L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L1994-L2005) · [Before (L3576-L3707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3576-L3707)

```diff
-             }))
-           }
-           async onAuthEvent(qq) {
-             const {
-               urlResponse: Eq,
-               sessionId: gq,
-               postBody: Yq,
-               tenantId: lq,
-               error: Oq,
-               type: mq
-             } = qq;
-             if (Oq) return void this.reject(Oq);
-             const xq = {
-               auth: this.auth,
-               requestUri: Eq,
-               sessionId: gq,
- ... (116 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, Rz, Az), (0, QC.j)(null, null, dC, {
+             kind: "field",
+             name: "inertialPanningX",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "inertialPanningX" in CC,
+               get: CC => CC.inertialPanningX,
+               set: (CC, zC) => {
+                 CC.inertialPanningX = zC
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3709-L3719` → after: `L2007-L2018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2007-L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2007-L2018) · [Before (L3709-L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3709-L3719)

```diff
-               al.set(this.auth._key(), qq)
-             }
-             return this.bypassAuthState || al.set(this.auth._key(), (() => Promise.resolve(null))), qq()
-           }
-           async onAuthEvent(qq) {
-             if ("signInViaRedirect" === qq.type) return super.onAuthEvent(qq);
-             if ("unknown" !== qq.type) {
-               if (qq.eventId) {
-                 const Eq = await this.auth._redirectUserForId(qq.eventId);
-                 if (Eq) return this.user = Eq, super.onAuthEvent(qq);
-                 this.resolve(null)
+             },
+             metadata: bC
+           }, xz, Jz), (0, QC.j)(null, null, mC, {
+             kind: "field",
+             name: "inertialPanningY",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "inertialPanningY" in CC,
+               get: CC => CC.inertialPanningY,
+               set: (CC, zC) => {
+                 CC.inertialPanningY = zC
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3721-L3811` → after: `L2020-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2020-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2020-L2031) · [Before (L3721-L3811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3721-L3811)

```diff
-             } else this.resolve(null)
-           }
-           async onExecution() {}
-           cleanUp() {}
-         }
-         async function dl(qq, Eq) {
-           return Hl(qq)._set(ol(Eq), "true")
-         }
- 
-         function jl(qq, Eq) {
-           al.set(qq._key(), Eq)
-         }
- 
-         function Hl(qq) {
-           return OE(qq._redirectPersistence)
-         }
- ... (75 more removed lines; see GitHub link above)
+             },
+             metadata: bC
+           }, Iz, iz), (0, QC.j)(null, null, HC, {
+             kind: "field",
+             name: "pinchToPanMaxDistance",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "pinchToPanMaxDistance" in CC,
+               get: CC => CC.pinchToPanMaxDistance,
+               set: (CC, zC) => {
+                 CC.pinchToPanMaxDistance = zC
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3813` → after: `L2033-L2165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2033-L2165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2033-L2165) · [Before (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3813)

```diff
-             }(qq) || (this.hasHandledPotentialRedirect = !0, Eq || (this.queuedRedirectEvent = qq, Eq = !0)), Eq
+             },
+             metadata: bC
+           }, vz, ez), (0, QC.j)(null, null, lC, {
+             kind: "field",
+             name: "panningDistanceLimit",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "panningDistanceLimit" in CC,
+               get: CC => CC.panningDistanceLimit,
+               set: (CC, zC) => {
+                 CC.panningDistanceLimit = zC
+               }
+             },
+             metadata: bC
+           }, hz, Kz), (0, QC.j)(null, null, XC, {
+ ... (117 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3815-L3820` → after: `L2167-L2168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2167-L2168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2167-L2168) · [Before (L3815-L3820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3815-L3820)

```diff
-           sendToConsumer(qq, Eq) {
-             var gq;
-             if (qq.error && !bl(qq)) {
-               const Yq = (null === (gq = qq.error.code) || void 0 === gq ? void 0 : gq.split("auth/")[1]) || "internal-error";
-               Eq.onError(Qq(this.auth, Yq))
-             } else Eq.onAuthEvent(qq)
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniform … [truncated]
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3822-L3824` → after: `L2170-L2171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2170-L2171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2170-L2171) · [Before (L3822-L3824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3822-L3824)

```diff
-           isEventForConsumer(qq, Eq) {
-             const gq = null === Eq.eventId || !!qq.eventId && qq.eventId === Eq.eventId;
-             return Eq.filter.includes(qq.type) && gq
+           getClassName() {
+             return "HemisphericLight"
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3826-L3827` → after: `L2173-L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2173-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2173-L2174) · [Before (L3826-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3826-L3827)

```diff
-           hasEventBeenHandled(qq) {
-             return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(nl(qq))
+           setDirectionToTarget(CC) {
+             return this.direction = bC.r.Normalize(CC.subtract(bC.r.Zero())), this.direction
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3829-L3830` → after: `L2176-L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2176-L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2176-L2177) · [Before (L3829-L3830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3829-L3830)

```diff
-           saveEventToCache(qq) {
-             this.cachedEventUids.add(nl(qq)), this.lastProcessedEventTime = Date.now()
+           getShadowGenerator() {
+             return null
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3832-L3900` → after: `L2179-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2179-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2179-L2207) · [Before (L3832-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3832-L3900)

```diff
-         }
- 
-         function nl(qq) {
-           return [qq.type, qq.eventId, qq.sessionId, qq.tenantId].filter((qq => qq)).join("-")
-         }
- 
-         function bl(qq) {
-           let {
-             type: Eq,
-             error: gq
-           } = qq;
-           return "unknown" === Eq && "auth/no-auth-event" === (null === gq || void 0 === gq ? void 0 : gq.code)
-         }
-         const il = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
-           Zl = /^https?/;
-         async function fl(qq) {
- ... (53 more removed lines; see GitHub link above)
+           transferToEffect(CC, zC) {
+             const ZC = bC.r.Normalize(this.direction);
+             return this._uniformBuffer.updateFloat4("vLightData", ZC.x, ZC.y, ZC.z, 0, zC), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zC), this
+           }
+           transferToNodeMaterialEffect(CC, zC) {
+             const ZC = bC.r.Normalize(this.direction);
+             return CC.setFloat3(zC, ZC.x, ZC.y, ZC.z), this
+           }
+           computeWorldMatrix() {
+             return this._worldMatrix || (this._worldMatrix = bC.b.Identity()), this._worldMatrix
+           }
+           getTypeID() {
+             return fC.c.LIGHTTYPEID_HEMISPHERICLIGHT
+           }
+           prepareLightSpecificDefines(CC, zC) {
+             CC["HEMILIGHT" + zC] = !0
+ ... (13 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3925-L3941` → after: `L2210-L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2210-L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2210-L2221) · [Before (L3925-L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3925-L3941)

```diff
-             "aria-hidden": "true",
-             tabindex: "-1"
-           },
-           Jl = new Map([
-             ["identitytoolkit.googleapis.com", "p"],
-             ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
-             ["test-identitytoolkit.sandbox.googleapis.com", "t"]
-           ]);
- 
-         function kl(qq) {
-           const Eq = qq.config;
-           vq(Eq.authDomain, qq, "auth-domain-config-required");
-           const gq = Eq.emulator ? Mq(Eq, "emulator/auth/iframe") : `https://${qq.config.authDomain}/__/auth/iframe`,
-             Oq = {
-               apiKey: Eq.apiKey,
-               appName: qq.name,
- ... (1 more removed lines; see GitHub link above)
+             metadata: bC
+           }, qC, FC), (0, QC.j)(null, null, ZC, {
+             kind: "field",
+             name: "direction",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "direction" in CC,
+               get: CC => CC.direction,
+               set: (CC, zC) => {
+                 CC.direction = zC
+               }
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L3943-L4026` → after: `L2223-L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR2223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L2223-L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/260.js#L2223-L2240) · [Before (L3943-L4026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/260.js#L3943-L4026)

```diff
-             mq = Jl.get(qq.config.apiHost);
-           mq && (Oq.eid = mq);
-           const xq = qq._getFrameworks();
-           return xq.length && (Oq.fw = xq.join(",")), `${gq}?${(0,Yq.$)(Oq).slice(1)}`
-         }
-         const Rl = {
-           location: "yes",
-           resizable: "yes",
-           statusbar: "yes",
-           toolbar: "no"
-         };
-         class Ul {
-           constructor(qq) {
-             this.window = qq, this.associatedEvent = null
-           }
-           close() {
- ... (68 more removed lines; see GitHub link above)
+             metadata: bC
+           }, WC, NC), bC && Object.defineProperty(CC, Symbol.metadata, {
+             enumerable: !0,
+             configurable: !0,
+             writable: !0,
+             value: bC
+           })
+         })(), CC
+       })(),
+       WC = !1;
+ 
+     function NC() {
+       WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
+     }
+   }
+ };
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   40318: (qq, Eq, gq) => {
+   40216: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L141` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L6) · [Before (L6-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L141)

```diff
-       $b: () => Iq,
-       Ac: () => FE,
-       B: () => Wq,
-       Bd: () => yq,
-       Bf: () => qY,
-       Cc: () => kq,
-       Ce: () => Mg,
-       Cf: () => Ig,
-       Db: () => NE,
-       Df: () => Dg,
-       Ed: () => Tq,
-       F: () => lE,
-       Fb: () => xE,
-       Fd: () => Mq,
-       Fe: () => zg,
-       Gb: () => lq,
- ... (120 more removed lines; see GitHub link above)
+       c: () => wC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L143-L775` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L8) · [Before (L143-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L143-L775)

```diff
-     const Yq = -2147483648,
-       lq = 12,
-       Oq = 12,
-       mq = 4095,
-       xq = {
-         Lifeform: 1,
-         Throwable: 2,
-         Mesh: 3,
-         Audio: 4,
-         Item: 5
-       },
-       Aq = {
-         Alive: 1,
-         Crouching: 2,
-         OnGround: 4,
-         InFluid: 8,
- ... (617 more removed lines; see GitHub link above)
+     var QC = ZC(39826);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L777-L831` → after: `L10-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L10-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L10-L77) · [Before (L777-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L777-L831)

```diff
-     function Ag(qq, Eq, gq, Yq, lq) {
-       var Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq;
-       switch (qq) {
-         case 32:
-           return 4 === Yq && (null === (Oq = lq.tickEnd) || void 0 === Oq || Oq.call(lq, jE.SB(Eq, gq)), !0);
-         case 33:
-           return 12 === Yq && (null === (mq = lq.entitySpawned) || void 0 === mq || mq.call(lq, HE.serverId(Eq, gq), HE.index(Eq, gq), HE.kind(Eq, gq)), !0);
-         case 34:
-           return 12 === Yq && (null === (xq = lq.entityDespawned) || void 0 === xq || xq.call(lq, HE.serverId(Eq, gq), HE.index(Eq, gq), HE.kind(Eq, gq)), !0);
-         case 39:
-           return !(Yq < 20) && (null === (Aq = lq.changeBlockFail) || void 0 === Aq || Aq.call(lq, oE.pos(Eq, gq, 0), oE.pos(Eq, gq, 1), oE.pos(Eq, gq, 2), oE.actual(Eq, gq), oE.dataLen(Eq, gq), gq + 20, Yq - 20), !0);
-         case 46:
-           return 0 === Yq && (null === (cq = lq.changeBlockFailEnd) || void 0 === cq || cq.call(lq), !0);
-         case 48:
-           return 20 === Yq && (null === (uq = lq.inventoryEvent) || void 0 === uq || uq.call(lq, PE.what(Eq, gq), PE.value(Eq, gq), PE.pos(Eq, gq, 0), PE.pos(Eq, gq, 1), PE.pos(Eq, gq, 2), PE.block(Eq, gq)), !0);
-         case 49:
- ... (39 more removed lines; see GitHub link above)
+     function wC(CC) {
+       return class extends CC {
+         constructor() {
+           super(...arguments);
+           const CC = new.target;
+           if (!CC[Symbol.metadata]) {
+             const zC = Object.getPrototypeOf(CC)?.[Symbol.metadata];
+             CC[Symbol.metadata] = zC ? Object.create(zC) : {}
+           }
+           const zC = (0, QC.e)(CC[Symbol.metadata]);
+           zC._imageProcessingConfiguration || (zC._imageProcessingConfiguration = {
+             type: 9,
+             sourceName: void 0
+           })
+         }
+         get imageProcessingConfiguration() {
+ ... (52 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L834-L886` → after: `L80-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L80-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L80-L86) · [Before (L834-L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L834-L886)

```diff
-     const cg = {
-       SetChunkAddDistance: 2,
-       WatchEntityInfo: 66,
-       EventResync: 67,
-       WatchPromptPick: 68,
-       SetLocalDbId: 69,
-       SetAltVeto: 128,
-       EnchantOfferRequest: 130,
-       ClearPickupDelay: 131,
-       SyncOpMarker: 132,
-       SetHooks: 133,
-       SetPublicLobby: 144,
-       ClickCodeBlock: 145,
-       Send: 256,
-       Leave: 257,
-       SetPaused: 258,
- ... (37 more removed lines; see GitHub link above)
+   },
+   40100: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC,
+       e: () => wC
+     });
+     var QC = ZC(40102);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L889-L985` → after: `L89-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L89-L93) · [Before (L889-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L889-L985)

```diff
-       return ug.buffer !== qq.buffer && (ug = new Uint8Array(qq.buffer)), ug
-     }
- 
-     function Wg(qq, Eq, gq) {
-       const Yq = qq.gN(66, Eq, 4);
-       if (Yq < 0) return !1;
-       return qq.view.setUint8(Yq + 0, gq), !0
-     }
- 
-     function Ng(qq, Eq, gq) {
-       const Yq = qq.gN(67, Eq, 4);
-       if (Yq < 0) return !1;
-       return qq.view.setUint32(Yq + 0, gq, !0), !0
-     }
- 
-     function ag(qq, Eq, gq) {
- ... (81 more removed lines; see GitHub link above)
+       return class extends CC {
+         constructor() {
+           super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING … [truncated]
+         }
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L987-L995` → after: `L95-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L95-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L95-L98) · [Before (L987-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L987-L995)

```diff
- 
-     function hg(qq, Eq, gq, Yq, lq, Oq, mq) {
-       const xq = qq.gN(322, Eq, 44 + mq.length);
-       if (xq < 0) return !1;
-       const Aq = qq.view;
-       Aq.setUint32(xq + 0, gq, !0), Aq.setUint32(xq + 4, Yq, !0);
-       for (let cq = 0; cq < 3; cq++) Aq.setFloat64(xq + 8 + 8 * cq, lq[cq], !0);
-       for (let cq = 0; cq < 3; cq++) Aq.setFloat32(xq + 32 + 4 * cq, Oq[cq], !0);
-       return Bg(Aq).set(mq, Aq.byteOffset + xq + 44), !0
+     class bC extends QC.b {
+       constructor() {
+         super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this. … [truncated]
+       }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L997-L1001` → after: `L100-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L100-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L100-L115) · [Before (L997-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L997-L1001)

```diff
- 
-     function ng(qq, Eq, gq) {
-       const Yq = qq.gN(323, Eq, 4);
-       if (Yq < 0) return !1;
-       return qq.view.setUint32(Yq + 0, gq, !0), !0
+   },
+   40180: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => WC
+     });
+     var QC = ZC(39811),
+       wC = ZC(40110),
+       bC = ZC(39818),
+       nC = ZC(40162),
+       fC = ZC(40102),
+       oC = ZC(40188),
+       qC = ZC(40151);
+     class FC extends fC.b {
+       constructor() {
+         super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1003-L1010` → after: `L117-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L117-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L117-L392) · [Before (L1003-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1003-L1010)

```diff
- 
-     function bg(qq, Eq, gq, Yq, lq, Oq) {
-       const mq = qq.gN(324, Eq, 32 + Oq.length);
-       if (mq < 0) return !1;
-       const xq = qq.view;
-       xq.setUint32(mq + 0, gq, !0), xq.setUint32(mq + 4, Yq, !0);
-       for (let Aq = 0; Aq < 3; Aq++) xq.setFloat64(mq + 8 + 8 * Aq, lq[Aq], !0);
-       return Bg(xq).set(Oq, xq.byteOffset + mq + 32), !0
+     let WC = (() => {
+       var CC, zC, ZC, fC;
+       let WC, NC, MC, gC, SC, pC, PC = oC.c,
+         GC = [],
+         RC = [],
+         AC = [],
+         xC = [],
+         JC = [],
+         IC = [],
+         iC = [],
+         vC = [],
+         eC = [],
+         hC = [],
+         KC = [],
+         YC = [];
+       return CC = class extends PC {
+ ... (260 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1014-L1187` → after: `L404-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L404-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L404-L407) · [Before (L1014-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1014-L1187)

```diff
-       return !(qq.gN(325, Eq, 0) < 0)
-     }
- 
-     function Zg(qq, Eq, gq, Yq, lq, Oq) {
-       const mq = qq.gN(384, Eq, 16);
-       if (mq < 0) return !1;
-       const xq = qq.view;
-       return xq.setUint32(mq + 0, gq, !0), xq.setUint32(mq + 4, Yq, !0), xq.setFloat32(mq + 8, lq, !0), xq.setFloat32(mq + 12, Oq, !0), !0
-     }
- 
-     function fg(qq, Eq, gq, Yq, lq, Oq, mq) {
-       const xq = qq.gN(385, Eq, 36 + mq.length);
-       if (xq < 0) return !1;
-       const Aq = qq.view;
-       Aq.setUint32(xq + 0, gq, !0), Aq.setUint32(xq + 4, Yq, !0);
-       for (let cq = 0; cq < 3; cq++) Aq.setFloat64(xq + 8 + 8 * cq, lq[cq], !0);
- ... (158 more removed lines; see GitHub link above)
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
+       const QC = zC(CC);
+       if (!Number.isInteger(QC) || QC < 0 || QC > ZC) throw new Error(`Invalid geometry object ID ${QC} for mesh "${CC.name}". Object IDs must be integers between 0 and 0x${ZC.toString(16).toUpperCase()}.`);
+       return QC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1191-L1216` → after: `L411-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L411-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L411-L416) · [Before (L1191-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1191-L1216)

```diff
-       return !(qq.gN(576, Eq, 0) < 0)
-     }
- 
-     function gY(qq, Eq, gq, Yq, lq, Oq) {
-       const mq = qq.gN(577, Eq, 36 + Oq.length);
-       if (mq < 0) return !1;
-       const xq = qq.view;
-       xq.setUint8(mq + 0, gq);
-       for (let Aq = 0; Aq < 16; Aq++) xq.setUint8(mq + 4 + 1 * Aq, Yq[Aq]);
-       for (let Aq = 0; Aq < 16; Aq++) xq.setUint8(mq + 20 + 1 * Aq, lq[Aq]);
-       return Bg(xq).set(Oq, xq.byteOffset + mq + 36), !0
-     }
- 
-     function YY(qq, Eq, gq, Yq) {
-       const lq = qq.gN(578, Eq, 4 + Yq.length);
-       if (lq < 0) return !1;
- ... (10 more removed lines; see GitHub link above)
+       const ZC = zC(CC);
+       if (!Number.isInteger(ZC) || ZC < 0 || ZC > 255 || 0 !== ZC && 0 === (63 & ZC)) throw new Error(`Invalid geometry mesh-blending tag ${ZC} for mesh "${CC.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
+       return ZC
+     }! function(CC) {
+       CC[CC.Zero = 0] = "Zero", CC[CC.One = 1] = "One", CC[CC.MaxViewZ = 2] = "MaxViewZ", CC[CC.NoClear = 3] = "NoClear"
+     }(QC || (QC = {}));
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1218-L1219` → after: `L418-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L418-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L418-L429) · [Before (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1218-L1219)

```diff
-       constructor(qq, Eq) {
-         this.core = qq, this.afterCall = Eq
+       static CreateConfiguration(CC) {
+         return fC._Configurations[CC] = {
+           defines: {},
+           previousWorldMatrices: {},
+           previousViewProjection: wC.b.Zero(),
+           currentViewProjection: wC.b.Zero(),
+           previousBones: {},
+           lastUpdateFrameId: -1,
+           excludedSkinnedMesh: [],
+           reverseCulling: !1,
+           objectIdIsRedFormat: !1
+         }, fC._Configurations[CC]
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1221-L1223` → after: `L431-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L431-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L431-L432) · [Before (L1221-L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1221-L1223)

```diff
-       canModify(qq, Eq, gq) {
-         const Yq = this.core.SOq(qq, Eq, gq);
-         return this.afterCall(), Yq
+       static DeleteConfiguration(CC) {
+         delete fC._Configurations[CC]
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1225-L1227` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L434-L435) · [Before (L1225-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1225-L1227)

```diff
-       terrainBlocked(qq, Eq, gq, Yq, lq) {
-         const Oq = this.core.hmq(qq, Eq, gq, Yq, lq);
-         return this.afterCall(), Oq
+       static GetConfiguration(CC) {
+         return fC._Configurations[CC]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1229-L1231` → after: `L437-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L437-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L437-L445) · [Before (L1229-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1229-L1231)

```diff
-       xJ(qq, Eq, gq, Yq) {
-         const lq = this.core.JW(qq, Eq, gq, Yq);
-         return this.afterCall(), lq
+       static _PrepareConfiguration(CC, zC, ZC) {
+         const QC = fC._Configurations[CC];
+         QC._attachments = zC, QC._colorAttachments = ZC, QC._mrtCount = zC.length;
+         let wC = "#define PREPASS\n";
+         for (const bC of fC.GeometryTextureDescriptions) {
+           const CC = QC.defines[bC.defineIndex];
+           void 0 !== CC && (wC += `#define ${bC.define}\n#define ${bC.defineIndex} ${CC}\n`)
+         }
+         QC.objectIdIsRedFormat && (wC += "#define PREPASS_OBJECT_ID_R8\n"), QC._defines = wC + `#define SCENE_MRT_COUNT ${zC.length}\n`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1233-L1235` → after: `L447-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L447-L449) · [Before (L1233-L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1233-L1235)

```diff
-       blockData(qq, Eq, gq) {
-         const Yq = this.core.TOq(qq, Eq, gq);
-         return this.afterCall(), Yq
+       static _PrepareStringDefines(CC, zC) {
+         const ZC = fC._Configurations[CC];
+         return !!ZC?._defines && (zC.push(ZC._defines), !0)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1237-L1239` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L451-L453) · [Before (L1237-L1239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1237-L1239)

```diff
-       cameraSweep(qq, Eq, gq, Yq, lq, Oq, mq) {
-         const xq = this.core.zlq(qq, Eq, gq, Yq, lq, Oq, mq);
-         return this.afterCall(), xq
+       static _BindAttachmentsForEffect(CC, zC) {
+         const ZC = fC._Configurations[CC.currentRenderPassId];
+         return !ZC?._attachments || (CC.bindAttachments(zC._multiTarget ? ZC._attachments : ZC._colorAttachments), zC._multiTarget || void 0 !== ZC.defines.PREPASS_COLOR_INDEX)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1241-L1243` → after: `L455-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L455-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L455-L457) · [Before (L1241-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1241-L1243)

```diff
-       hasServerTarget(qq) {
-         const Eq = this.core.KOq(qq);
-         return this.afterCall(), Eq
+       static _RestoreAttachments(CC) {
+         const zC = fC._Configurations[CC.currentRenderPassId];
+         zC?._colorAttachments && CC.bindAttachments(zC._colorAttachments)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1245-L1247` → after: `L459-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L459-L461) · [Before (L1245-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1245-L1247)

```diff
-       entityInteractable(qq) {
-         const Eq = this.core.UOq(qq);
-         return this.afterCall(), Eq
+       static _BindColorAttachments(CC) {
+         const zC = fC._Configurations[CC.currentRenderPassId];
+         return !zC?._colorAttachments || (CC.bindAttachments(zC._colorAttachments), void 0 !== zC.defines.PREPASS_COLOR_INDEX)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1249-L1251` → after: `L463-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L463-L465) · [Before (L1249-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1249-L1251)

```diff
-       entityCrouching(qq) {
-         const Eq = this.core.ROq(qq);
-         return this.afterCall(), Eq
+       static _IsColorAttachmentEnabled(CC) {
+         const zC = fC._Configurations[CC.currentRenderPassId];
+         return !zC?._colorAttachments || void 0 !== zC.defines.PREPASS_COLOR_INDEX
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1253-L1255` → after: `L467-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L467-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L467-L472) · [Before (L1253-L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1253-L1255)

```diff
-       predictServerPosition(qq, Eq, gq, Yq) {
-         const lq = this.core.mmq(qq, Eq, gq, Yq);
-         return this.afterCall(), lq
+       static _BindZeroAlphaDiscard(CC, zC) {
+         const ZC = fC._Configurations[CC.currentRenderPassId];
+         if (!ZC) return;
+         const QC = CC.getAlphaMode(),
+           wC = void 0 === ZC.defines.PREPASS_COLOR_INDEX || 2 === QC || 1 === QC || 17 === QC;
+         zC.setFloat("geometryZeroAlphaDiscard", wC ? 1 : 0)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1257-L1259` → after: `L474-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L474-L475) · [Before (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1257-L1259)

```diff
-       setOtherEntitySetting(qq, Eq, gq) {
-         const Yq = this.core.Jlq(qq, Eq, gq);
-         return this.afterCall(), Yq
+       static AddUniformsAndSamplers(CC, zC) {
+         CC.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1261-L1263` → after: `L477-L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L477-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L477-L480) · [Before (L1261-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1261-L1263)

```diff
-       entityInfoBatch(qq) {
-         const Eq = this.core.Ulq(qq);
-         return this.afterCall(), Eq
+       static MarkAsDirty(CC, zC) {
+         for (const ZC of zC)
+           if (ZC.Zx)
+             for (const zC of ZC.Zx) zC._removeDrawWrapper(CC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1265-L1267` → after: `L482-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L482-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L482-L495) · [Before (L1265-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1265-L1267)

```diff
-       entityName(qq) {
-         const Eq = this.core.FOq(qq);
-         return this.afterCall(), Eq
+       static PrepareDefines(CC, zC, ZC) {
+         if (!ZC._arePrePassDirty) return;
+         const QC = fC._Configurations[CC];
+         if (!QC) return;
+         ZC.PREPASS = !0;
+         let wC = 0;
+         for (let bC = 0; bC < fC.GeometryTextureDescriptions.length; bC++) {
+           const CC = fC.GeometryTextureDescriptions[bC],
+             zC = CC.define,
+             nC = CC.defineIndex,
+             oC = QC.defines[nC];
+           void 0 !== oC ? (ZC[zC] = !0, ZC[nC] = oC, wC++) : (ZC[zC] = !1, delete ZC[nC])
+         }
+         ZC.PREPASS_OBJECT_ID_R8 = QC.objectIdIsRedFormat, ZC.SCENE_MRT_COUNT = QC._mrtCount ?? wC, ZC.BONES_VELOCITY_ENABLED = zC.useBones && zC.computeBonesUsingShaders && zC.skeleton && !zC.skeleton.isUsingTextureForMatrices && -1 === QC.excludedSkinnedMesh.indexOf(zC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1269-L1271` → after: `L497-L523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L497-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L497-L523) · [Before (L1269-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1269-L1271)

```diff
-       hasEffect(qq, Eq) {
-         const gq = this.core.wOq(qq, Eq);
-         return this.afterCall(), gq
+       static Bind(CC, zC, ZC, QC, wC) {
+         const oC = fC._Configurations[CC];
+         if (!oC) return;
+         const qC = ZC.Km(),
+           FC = qC.mg();
+         if (oC.reverseCulling && FC.setStateCullFaceType(qC._mirroredCameraPosition ? wC.cullBackFaces : !wC.cullBackFaces), void 0 !== oC.defines.PREPASS_OBJECT_ID_INDEX) {
+           const CC = oC.objectIdIsRedFormat ? 255 : 16777215;
+           let QC = ZC.uniqueId;
+           if (oC.objectIdProvider) QC = bC(ZC, oC.objectIdProvider, CC);
+           else if (QC > CC) throw new Error(`Invalid geometry object ID ${QC} for mesh "${ZC.name}". Object IDs must be integers between 0 and 0x${CC.toString(16).toUpperCase()}.`);
+           zC.setFloat("objectId", QC)
+         }
+         if (void 0 !== oC.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
+           const CC = oC.meshBlendTagProvider ? nC(ZC, oC.meshBlendTagProvider) : ZC.meshBlendingTag;
+           zC.setInt("meshBlendTag", CC)
+         }
+ ... (11 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1273-L1275` → after: `L525-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L525-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L525-L642) · [Before (L1273-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1273-L1275)

```diff
-       scratchPtr() {
-         const qq = this.core.flq();
-         return this.afterCall(), qq
+     }
+     fC.GeometryTextureDescriptions = [{
+       type: 0,
+       name: "IrradianceLegacy",
+       clearType: 0,
+       define: "PREPASS_IRRADIANCE_LEGACY",
+       defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
+     }, {
+       type: 1,
+       name: "WorldPosition",
+       clearType: 0,
+       define: "PREPASS_POSITION",
+       defineIndex: "PREPASS_POSITION_INDEX"
+     }, {
+       type: 2,
+       name: "Velocity",
+ ... (102 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1277-L1279` → after: `L644-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L644-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L644-L656) · [Before (L1277-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1277-L1279)

```diff
-       invSwap(qq, Eq) {
-         const gq = this.core.Emq(qq, Eq);
-         return this.afterCall(), gq
+       _addPlugin(CC) {
+         for (let QC = 0; QC < this._plugins.length; ++QC)
+           if (this._plugins[QC].name === CC.name) return !1;
+         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !CC.isCompatible(this._material.shaderLanguage)) throw `The plugin "${CC.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
+         const zC = CC.getClassName();
+         oC._MaterialPluginClassToMainDefine[zC] || (oC._MaterialPluginClassToMainDefine[zC] = "MATERIALPLUGIN_" + ++oC._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (CC, zC) => this._handlePluginEvent(CC, zC), this._plugins.push(CC), this._plugins.sort(((C … [truncated]
+         const ZC = {};
+         ZC[oC._MaterialPluginClassToMainDefine[zC]] = {
+           type: "boolean",
+           default: !0
+         };
+         for (const QC of this._plugins) QC.collectDefines(ZC), this._collectPointNames("vertex", QC.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", QC.getCustomCode("fragment", this._material.shaderLanguage));
+         return this._defineNamesFromPlugins = ZC, !0
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1281-L1283` → after: `L658-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L658-L659) · [Before (L1281-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1281-L1283)

```diff
-       invMove(qq, Eq, gq) {
-         const Yq = this.core.eOq(qq, Eq, gq);
-         return this.afterCall(), Yq
+       _activatePlugin(CC) {
+         -1 === this._activePlugins.indexOf(CC) && (this._activePlugins.push(CC), this._activePlugins.sort(((CC, zC) => CC.priority - zC.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1285-L1287` → after: `L661-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L661-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L661-L664) · [Before (L1285-L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1285-L1287)

```diff
-       invQuickMove(qq, Eq, gq, Yq) {
-         const lq = this.core.DOq(qq, Eq, gq, Yq);
-         return this.afterCall(), lq
+       getPlugin(CC) {
+         for (let zC = 0; zC < this._plugins.length; ++zC)
+           if (this._plugins[zC].name === CC) return this._plugins[zC];
+         return null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1289-L1291` → after: `L666-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L666-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L666-L669) · [Before (L1289-L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1289-L1291)

```diff
-       invRemove(qq, Eq, gq) {
-         const Yq = this.core.qmq(qq, Eq, gq);
-         return this.afterCall(), Yq
+       _handlePluginEventIsReadyForSubMesh(CC) {
+         let zC = !0;
+         for (const ZC of this._activePlugins) zC = zC && ZC.isReadyForSubMesh(CC.defines, this._scene, this._engine, CC.subMesh);
+         CC.isReadyForSubMesh = zC
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1293-L1295` → after: `L671-L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L671-L672) · [Before (L1293-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1293-L1295)

```diff
-       invEnchant(qq, Eq, gq, Yq, lq) {
-         const Oq = this.core.IOq(qq, Eq, gq, Yq, lq);
-         return this.afterCall(), Oq
+       _handlePluginEventPrepareDefinesBeforeAttributes(CC) {
+         for (const zC of this._activePlugins) zC.prepareDefinesBeforeAttributes(CC.defines, this._scene, CC.mesh)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1297-L1299` → after: `L674-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L674-L675) · [Before (L1297-L1299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1297-L1299)

```diff
-       craft(qq, Eq, gq) {
-         const Yq = this.core.craft(qq, Eq, gq);
-         return this.afterCall(), Yq
+       _handlePluginEventPrepareDefines(CC) {
+         for (const zC of this._activePlugins) zC.prepareDefines(CC.defines, this._scene, CC.mesh)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1301-L1303` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L677-L678) · [Before (L1301-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1301-L1303)

```diff
-       salvage(qq, Eq, gq) {
-         const Yq = this.core.salvage(qq, Eq, gq);
-         return this.afterCall(), Yq
+       _handlePluginEventHardBindForSubMesh(CC) {
+         for (const zC of this._activePluginsForExtraEvents) zC.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, CC.subMesh)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1305-L1307` → after: `L680-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L680-L681) · [Before (L1305-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1305-L1307)

```diff
-       selectSlot(qq) {
-         const Eq = this.core.umq(qq);
-         return this.afterCall(), Eq
+       _handlePluginEventBindForSubMesh(CC) {
+         for (const zC of this._activePlugins) zC.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, CC.subMesh)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1309-L1311` → after: `L683-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L683-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L683-L687) · [Before (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1309-L1311)

```diff
-       closeChest() {
-         const qq = this.core.pOq();
-         return this.afterCall(), qq
+       _handlePluginEventHasRenderTargetTextures(CC) {
+         let zC = !1;
+         for (const ZC of this._activePluginsForExtraEvents)
+           if (zC = ZC.hasRenderTargetTextures(), zC) break;
+         CC.hasRenderTargetTextures = zC
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1313-L1315` → after: `L689-L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L689-L690) · [Before (L1313-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1313-L1315)

```diff
-       itemAttributesBatch(qq) {
-         const Eq = this.core.Rlq(qq);
-         return this.afterCall(), Eq
+       _handlePluginEventFillRenderTargetTextures(CC) {
+         for (const zC of this._activePluginsForExtraEvents) zC.fillRenderTargetTextures(CC.renderTargets)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1317-L1319` → after: `L692-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L692-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L692-L760) · [Before (L1317-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1317-L1319)

```diff
-       itemNames() {
-         const qq = this.core.yG();
-         return this.afterCall(), qq
+       _handlePluginEvent(CC, zC) {
+         switch (CC) {
+           case 512: {
+             const CC = zC;
+             for (const zC of this._activePlugins) zC.getActiveTextures(CC.activeTextures);
+             break
+           }
+           case 256: {
+             const CC = zC;
+             for (const zC of this._activePlugins) zC.getAnimatables(CC.animatables);
+             break
+           }
+           case 1024: {
+             const CC = zC;
+             let ZC = !1;
+             for (const zC of this._activePlugins)
+ ... (53 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1321-L1323` → after: `L762-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L762-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L762-L764) · [Before (L1321-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1321-L1323)

```diff
-       blockProps() {
-         const qq = this.core.zOq();
-         return this.afterCall(), qq
+       _collectPointNames(CC, zC) {
+         if (zC)
+           for (const ZC in zC) this._codeInjectionPoints[CC] || (this._codeInjectionPoints[CC] = {}), this._codeInjectionPoints[CC][ZC] = !0
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1325-L1327` → after: `L766-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L766-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L766-L818) · [Before (L1325-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1325-L1327)

```diff
-       itemProps() {
-         const qq = this.core.gmq();
-         return this.afterCall(), qq
+       _injectCustomCode(CC, zC) {
+         return (ZC, QC) => {
+           zC && (QC = zC(ZC, QC)), this._uboDeclaration && (QC = QC.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (QC = QC.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
+           const wC = this._codeInjectionPoints?.[ZC];
+           if (!wC) return QC;
+           let oC = null;
+           for (let zC in wC) {
+             let wC = "";
+             for (const QC of this._activePlugins) {
+               const fC = this._material.shaderLanguage;
+               let qC = QC.getCustomCode(ZC, fC)?.[zC];
+               qC && (QC.resolveIncludes && (null === oC && (oC = {
+                 defines: [],
+                 indexParameters: CC.indexParameters,
+                 isFragment: !1,
+                 shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
+ ... (37 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1329-L1331` → after: `L820-L982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L820-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L820-L982) · [Before (L1329-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1329-L1331)

```diff
-       salvageRecipe(qq) {
-         const Eq = this.core.slq(qq);
-         return this.afterCall(), Eq
+     }
+     oC._MaterialPluginClassToMainDefine = {}, oC._MaterialPluginCounter = 0;
+ 
+     function qC(CC, zC) {
+       return CC.replace(/\$(\d+)/g, ((CC, ZC) => {
+         const QC = Number(ZC);
+         return QC < zC.length ? zC[QC] : ""
+       }))
+     }
+     var FC = ZC(39842),
+       WC = ZC(37002);
+     let NC = (() => {
+         var CC;
+         let zC, ZC, bC, nC, fC = [],
+           qC = [],
+           WC = [],
+ ... (147 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1333-L1335` → after: `L984-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L984-L985) · [Before (L1333-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1333-L1335)

```diff
-       craftingView(qq, Eq, gq) {
-         const Yq = this.core.klq(qq, Eq, gq);
-         return this.afterCall(), Yq
+       static AddUniforms(CC) {
+         CC.push("previousWorld", "previousViewProjection", "mPreviousBones")
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1337-L1339` → after: `L987-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L987-L993) · [Before (L1337-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1337-L1339)

```diff
-       directorView() {
-         const qq = this.core.Tlq();
-         return this.afterCall(), qq
+       static AddSamplers(CC) {}
+       bindForSubMesh(CC, zC, ZC, QC, wC) {
+         if (zC.prePassRenderer && zC.prePassRenderer.enabled && zC.prePassRenderer.currentRTisSceneRT && (-1 !== zC.prePassRenderer.getIndex(2) || -1 !== zC.prePassRenderer.getIndex(11))) {
+           this.previousWorldMatrices[ZC.uniqueId] || (this.previousWorldMatrices[ZC.uniqueId] = QC.clone()), this.previousViewProjection || (this.previousViewProjection = zC.getTransformMatrix().clone(), this.currentViewProjection = zC.getTransformMatrix().clone());
+           const wC = zC.mg();
+           this.currentViewProjection.updateFlag !== zC.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = wC.frameId, this.previousViewProjection.Av(this.currentViewProjection), this.currentViewProjection.Av(zC.getTransformMatrix())) : this._lastUpdateFrameId !== wC.fra … [truncated]
+         }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1341-L1343` → after: `L995-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L995-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L995-L1002) · [Before (L1341-L1343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1341-L1343)

```diff
-       directorDefaultPose() {
-         const qq = this.core.Slq();
-         return this.afterCall(), qq
+     }
+   },
+   40211: (CC, zC, ZC) => {
+     function QC(CC) {
+       return class extends CC {
+         constructor() {
+           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+         }
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1345-L1347` → after: `L1004-L2707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L1004-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L1004-L2707) · [Before (L1345-L1347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1345-L1347)

```diff
-       directorEntity(qq) {
-         const Eq = this.core.plq(qq);
-         return this.afterCall(), Eq
+     }
+     ZC.d(zC, {
+       d: () => QC
+     })
+   },
+   40092: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       StandardMaterial: () => QC.d
+     });
+     var QC = ZC(40095);
+     (0, QC.b)()
+   },
+   40095: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => XC,
+       d: () => EC
+ ... (1688 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1349-L1351` → after: `L2709-L2713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2709-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L2709-L2713) · [Before (L1349-L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1349-L1351)

```diff
-       directorPose(qq, Eq, gq, Yq, lq, Oq) {
-         const mq = this.core.Glq(qq, Eq, gq, Yq, lq, Oq);
-         return this.afterCall(), mq
+       getLoadCallback(CC) {
+         const zC = 1 === CC ? this._webGPU : this._webGL;
+         return zC.loaded ? void 0 : async () => {
+           await this._loadAsync(zC)
+         }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1353-L1355` → after: `L2715-L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2715-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L2715-L2725) · [Before (L1353-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1353-L1355)

```diff
-       passTimings(qq) {
-         const Eq = this.core.Omq(qq);
-         return this.afterCall(), Eq
+       async _loadAsync(CC) {
+         if (CC.loaded) return;
+         let zC = CC.loadPromise;
+         const ZC = null === zC;
+         ZC && (zC = Promise.all(CC.load()), CC.loadPromise = zC);
+         let QC = !1;
+         try {
+           await zC, QC = !0
+         } finally {
+           ZC && this._completeLoad(CC, QC)
+         }
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1357-L1359` → after: `L2727-L2728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/261.js#L2727-L2728) · [Before (L1357-L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/261.js#L1357-L1359)

```diff
-       drawCensus() {
-         const qq = this.core.kOq();
-         return this.afterCall(), qq
+       _completeLoad(CC, zC) {
+         CC.loaded = zC, CC.loadPromise = null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (bbb6l5.0244a119 → w4ddu.56408518)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (216 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4)

```diff
-   41355: (qq, Eq, gq) => {
+   40123: (CC, zC, ZC) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6-L9` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L6) · [Before (L6-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6-L9)

```diff
-       b: () => dq,
-       e: () => xq,
-       h: () => mq,
-       l: () => cq
+       d: () => QC
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L11-L93` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L8-L10) · [Before (L11-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L11-L93)

```diff
-     var Yq = gq(37286),
-       lq = gq(38677),
-       Oq = gq(38671);
- 
-     function mq(qq, Eq, gq, Yq) {
-       const lq = Oq.w;
-       Eq.fill(0), qq.gravity.toArray(Eq, lq.gravity), qq.colorDead.toArray(Eq, lq.colorDead), gq[lq.ramp] = qq.useRampGradients ? 1 : 0;
-       const mq = qq.getColorGradients(),
-         xq = Wq(qq, mq, "colour", Yq);
-       gq[lq.colorCount] = xq;
-       for (let Oq = 0; Oq < xq; Oq++) {
-         var Aq;
-         const qq = mq[Nq(mq, Oq)];
-         Eq[lq.colorPositions + Oq] = qq.gradient, qq.color1.toArray(Eq, lq.color1 + 4 * Oq), (null !== (Aq = qq.color2) && void 0 !== Aq ? Aq : qq.color1).toArray(Eq, lq.color2 + 4 * Oq)
-       }
-       const cq = qq.getVelocityGradients(),
- ... (67 more removed lines; see GitHub link above)
+     class QC {
+       constructor(CC, zC, ZC) {
+         this.bu = CC, this.bv = zC, this.distance = ZC, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L100` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L14) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L100)

```diff
-   41387: (qq, Eq, gq) => {
+   40136: (CC, zC, ZC) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L102-L104` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L16) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L102-L104)

```diff
-       createLiteRendererAsync: () => bA,
-       liteBabylonBackend: () => Lq,
-       setPipelineFailureHook: () => sl
+       b: () => nC
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L106-L165` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L18-L20) · [Before (L106-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L106-L165)

```diff
-     var Yq = gq(37286),
-       lq = gq(37614),
-       Oq = gq(37870),
-       mq = gq(37242),
-       xq = gq(37877);
-     class Aq extends xq.e {
-       constructor() {
-         for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
-         super(...Eq), this.color = new Yq.Color3(1, 1, 1), this.alpha = 1, this.material = {
-           name: "colorShader",
-           uniqueId: Eq[0].ZJ().getUniqueId(),
-           shaderPath: "color",
-           fillMode: 4,
-           sideOrientation: null,
-           alphaMode: 2,
-           forceDepthWrite: !1,
- ... (44 more removed lines; see GitHub link above)
+     var QC = ZC(36971),
+       wC = ZC(36963),
+       bC = ZC(36968);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L167-L187` → after: `L22-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L22-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L22-L108) · [Before (L167-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L167-L187)

```diff
-       constructor(qq, Eq) {
-         this.name = qq, this.PV = Eq, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.MJ = {
-           addOnce: qq => {
-             this.disposers.push(qq)
-           }
-         }, this.uniqueId = Eq.getUniqueId()
-       }
-       get isFrozen() {
-         return this.checkReadyOnlyOnce
-       }
-       ZJ() {
-         return this.PV
-       }
-       getClassName() {
-         return "LiteMaterial"
-       }
- ... (5 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC) {
+         this.vectors = (0, QC.d)(8, wC.r.Zero), this.center = wC.r.Zero(), this.centerWorld = wC.r.Zero(), this.extendSize = wC.r.Zero(), this.extendSizeWorld = wC.r.Zero(), this.directions = (0, QC.d)(3, wC.r.Zero), this.vectorsWorld = (0, QC.d)(8, wC.r.Zero), this.minimumWorld  … [truncated]
+       }
+       reConstruct(CC, zC, ZC) {
+         const QC = CC.x,
+           bC = CC.y,
+           nC = CC.z,
+           fC = zC.x,
+           oC = zC.y,
+           qC = zC.z,
+           FC = this.vectors;
+         this.minimum.L_(QC, bC, nC), this.maximum.L_(fC, oC, qC), FC[0].L_(QC, bC, nC), FC[1].L_(fC, oC, qC), FC[2].L_(fC, bC, nC), FC[3].L_(QC, oC, nC), FC[4].L_(QC, bC, qC), FC[5].L_(fC, oC, nC), FC[6].L_(QC, oC, qC), FC[7].L_(fC, bC, qC), zC.addToRef(CC, this.center).scaleInPl … [truncated]
+       }
+       scale(CC) {
+         const zC = nC._TmpVector3,
+           ZC = this.maximum.subtractToRef(this.minimum, zC[0]),
+ ... (71 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L189-L191` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L110-L111) · [Before (L189-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L189-L191)

```diff
-       markDirty() {}
-       get fillMode() {
-         return this.model.fillMode
+       dispose() {
+         this._drawWrapperFront?.dispose(), this._drawWrapperBack?.dispose()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L193-L194` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L113-L114) · [Before (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L193-L194)

```diff
-       needAlphaBlendingForMesh(qq) {
-         return (0, vq.I)(this.model, qq.visibility, qq.hasVertexAlpha)
+       static Intersects(CC, zC) {
+         return CC.intersectsMinMax(zC.minimumWorld, zC.maximumWorld)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L196-L197` → after: `L116-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L116-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L116-L119) · [Before (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L196-L197)

```diff
-       needAlphaTestingForMesh(qq) {
-         return (0, vq.M)(this.model, qq.visibility, qq.hasVertexAlpha)
+       static IntersectsSphere(CC, zC, ZC, QC) {
+         const bC = nC._TmpVector3[0];
+         wC.r.ClampToRef(ZC, CC, zC, bC);
+         return wC.r.DistanceSquared(ZC, bC) <= QC * QC
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L199-L201` → after: `L121-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L121-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L121-L127) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L199-L201)

```diff
-       dispose() {
-         (0, Pq.n)(this);
-         for (const qq of this.disposers.splice(0)) qq()
+       static IsCompletelyInFrustum(CC, zC) {
+         for (let ZC = 0; ZC < 6; ++ZC) {
+           const QC = zC[ZC];
+           for (let zC = 0; zC < 8; ++zC)
+             if (QC.dotCoordinate(CC[zC]) < 0) return !1
+         }
+         return !0
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L203-L204` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L129-L139) · [Before (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L203-L204)

```diff
-       get model() {
-         return (0, vq.T)(this)
+       static IsInFrustum(CC, zC) {
+         for (let ZC = 0; ZC < 6; ++ZC) {
+           let QC = !0;
+           const wC = zC[ZC];
+           for (let zC = 0; zC < 8; ++zC)
+             if (wC.dotCoordinate(CC[zC]) >= 0) {
+               QC = !1;
+               break
+             } if (QC) return !1
+         }
+         return !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L207-L273` → after: `L142-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L142-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L142-L150) · [Before (L207-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L207-L273)

```diff
-     const Zq = new WeakSet;
- 
-     function fq(qq) {
-       return Zq.has(qq)
-     }
- 
-     function Mq(qq) {
-       Zq.add(qq)
-     }
-     const Tq = {
-       create: (qq, Eq) => ((0, Qq.t)(qq, new iq(qq.name, Eq)), hq.c.defines()),
-       write: () => {},
-       addFeature: (qq, Eq) => {
-         const gq = qq.mirror;
-         Eq.feature === rq.g && Eq.state.dirLightCount > 0 && (qq.disableLighting = !0, (0, vq.Q)(qq)), "BLOXD_LIGHTING" in Eq.defines && (0, Pq.l)(gq), Eq.feature === tq.j && ((0, oq.h)(Eq.state, bq), function(qq, Eq) {
-           const gq = qq.ZJ().Ba();
- ... (51 more removed lines; see GitHub link above)
+     nC._TmpVector3 = (0, QC.d)(3, wC.r.Zero)
+   },
+   40127: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => WC
+     });
+     var QC = ZC(36971),
+       wC = ZC(36963),
+       bC = ZC(40136);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L276-L291` → after: `L153-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L153-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L153-L180) · [Before (L276-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L276-L291)

```diff
-         this.engine = qq, this.clearColor = Eq, this.ambientColor = gq, this.onBeforeRenderObservable = new Sq.d, this.onBeforeCameraRenderObservable = new Sq.d, this.onAfterRenderObservable = new Sq.d, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = … [truncated]
-       }
-       Ba() {
-         return this.engine
-       }
-       getUniqueId() {
-         return ++this.lastId
-       }
-       getFrameId() {
-         return this.frameId
-       }
-       getAnimationRatio() {
-         return this.animationRatio
-       }
-       addPendingData(qq) {
-         this.pending.push(qq)
+         this.center = wC.r.Zero(), this.centerWorld = wC.r.Zero(), this.minimum = wC.r.Zero(), this.maximum = wC.r.Zero(), this.reConstruct(CC, zC, ZC)
+       }
+       reConstruct(CC, zC, ZC) {
+         this.minimum.Av(CC), this.maximum.Av(zC);
+         const QC = wC.r.Distance(CC, zC);
+         zC.addToRef(CC, this.center).scaleInPlace(.5), this.radius = .5 * QC, this._update(ZC || wC.b.IdentityReadOnly)
+       }
+       scale(CC) {
+         const zC = nC._TmpVector3,
+           ZC = this.maximum.subtractToRef(this.minimum, zC[0]),
+           QC = ZC.length();
+         ZC.normalizeFromLength(QC);
+         const wC = QC * CC,
+           bC = ZC.scaleInPlace(.5 * wC),
+           fC = this.center.subtractToRef(bC, zC[1]),
+           oC = this.center.addToRef(bC, zC[2]);
+ ... (12 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L293-L294` → after: `L182-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L182-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L182-L187) · [Before (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L293-L294)

```diff
-       removePendingData(qq) {
-         const Eq = this.pending.indexOf(qq); - 1 !== Eq && this.pending.splice(Eq, 1)
+       isInFrustum(CC) {
+         const zC = this.centerWorld,
+           ZC = this.radiusWorld;
+         for (let QC = 0; QC < 6; QC++)
+           if (CC[QC].dotCoordinate(zC) <= -ZC) return !1;
+         return !0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L296-L297` → after: `L189-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L189-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L189-L193) · [Before (L296-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L296-L297)

```diff
-       getWaitingItemsCount() {
-         return this.pending.length
+       isCenterInFrustum(CC) {
+         const zC = this.centerWorld;
+         for (let ZC = 0; ZC < 6; ZC++)
+           if (CC[ZC].dotCoordinate(zC) < 0) return !1;
+         return !0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L299-L300` → after: `L195-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L195-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L195-L197) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L299-L300)

```diff
-       isReady() {
-         return 0 === this.pending.length
+       intersectsPoint(CC) {
+         const zC = wC.r.DistanceSquared(this.centerWorld, CC);
+         return !(this.radiusWorld * this.radiusWorld < zC)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L302-L303` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L199-L202) · [Before (L302-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L302-L303)

```diff
-       getActiveMeshes() {
-         return []
+       static Intersects(CC, zC) {
+         const ZC = wC.r.DistanceSquared(CC.centerWorld, zC.centerWorld),
+           QC = CC.radiusWorld + zC.radiusWorld;
+         return !(QC * QC < ZC)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L305-L306` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L204-L207) · [Before (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L305-L306)

```diff
-       render() {
-         this.frameId++, this.animationRatio = .06 * Math.max(1, Math.min(this.engine.getDeltaTime(), 1e3)), this.draw(), this.onAfterRenderObservable.notifyObservers(this)
+       static CreateFromCenterAndRadius(CC, zC, ZC) {
+         this._TmpVector3[0].Av(CC), this._TmpVector3[1].L_(0, 0, zC), this._TmpVector3[2].Av(CC), this._TmpVector3[0].addInPlace(this._TmpVector3[1]), this._TmpVector3[2].RQC(this._TmpVector3[1]);
+         const QC = new nC(this._TmpVector3[0], this._TmpVector3[2]);
+         return QC._worldMatrix = ZC || wC.b.Identity(), QC
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L309-L312` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L210) · [Before (L309-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L309-L312)

```diff
- 
-     function Gq() {
-       throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
-     }
+     nC._TmpVector3 = (0, QC.d)(3, wC.r.Zero);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L314-L323` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L212-L213) · [Before (L314-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L314-L323)

```diff
-       sgq: Gq,
-       clq: (qq, Eq) => {
-         const gq = new pq(qq.engine, Yq.e.FromArray(Eq.clearColor), Yq.Color3.FromArray(Eq.ambientColor));
-         (0, mq.e)(Tq, gq), qq.PV = gq,
-           function(qq, Eq) {
-             const gq = Object.assign((0, zq.e)(qq, "camera"), {
-               layerMask: 268435455
-             });
-             qq.model.nodes.setWorldSource(gq.row, qq.model.view.worldMatrix), qq.camera = Eq.activeCamera = gq
-           }(qq, gq), (0, lq.l)(qq, ((qq, Eq, gq) => (0, Oq.h)(qq, Eq, gq, xq.e)))
+         min: 0,
+         max: 0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L325-L359` → after: `L215-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L215-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L215-L224) · [Before (L325-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L325-L359)

```diff
-       Olq: () => {},
-       setBabylonFog: () => {},
-       Blq: Gq,
-       alq: () => {},
-       linesFromArrays: (qq, Eq, gq) => (0, Oq.h)(qq, Eq, gq, Aq),
-       QV: () => {},
-       Nlq: Gq
-     };
-     var Jq = gq(41459),
-       kq = gq(41475);
-     class Rq {
-       constructor(qq) {
-         this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
-         const Eq = new Promise((qq => {
-           this.refused = qq
-         }));
- ... (19 more removed lines; see GitHub link above)
+       oC = {
+         min: 0,
+         max: 0
+       },
+       qC = (CC, zC, ZC) => {
+         const QC = wC.r.Dot(zC.centerWorld, CC),
+           bC = Math.abs(wC.r.Dot(zC.directions[0], CC)) * zC.extendSize.x + Math.abs(wC.r.Dot(zC.directions[1], CC)) * zC.extendSize.y + Math.abs(wC.r.Dot(zC.directions[2], CC)) * zC.extendSize.z;
+         ZC.min = QC - bC, ZC.max = QC + bC
+       },
+       FC = (CC, zC, ZC) => (qC(CC, zC, fC), qC(CC, ZC, oC), !(fC.min > oC.max || oC.min > fC.max));
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L361-L367` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L226-L227) · [Before (L361-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L361-L367)

```diff
-       constructor(qq) {
-         this.resources = qq, this.matrixKey = {
-           WB: 0
-         }, this.attributesKey = {
-           WB: 0
-         }, this.inputs = Object.create(null);
-         for (let Eq = 0; Eq < 4; Eq++) this.inputs[`world${Eq}`] = new Xq(this.matrixKey, 16 * Eq, 64, 4)
+       constructor(CC, zC, ZC) {
+         this._isLocked = !1, this.boundingBox = new bC.b(CC, zC, ZC), this.IQC = new nC(CC, zC, ZC)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L369-L370` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L229-L230) · [Before (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L369-L370)

```diff
-       release() {
-         this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
+       reConstruct(CC, zC, ZC) {
+         this.boundingBox.reConstruct(CC, zC, ZC), this.IQC.reConstruct(CC, zC, ZC)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L372-L373` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L232-L233) · [Before (L372-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L372-L373)

```diff
-       bind(qq, Eq) {
-         this.resources.vertexBufferCreated(this.matrixKey, qq, !0), Eq && this.resources.vertexBufferCreated(this.attributesKey, Eq, !0)
+       get minimum() {
+         return this.boundingBox.minimum
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L375-L394` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L235-L236) · [Before (L375-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L375-L394)

```diff
-     }
-     class Fq extends Uq {
-       constructor(qq, Eq, gq) {
-         super(qq), this.mesh = Eq, this.rowStride = void 0, this.matrices = null, this.attributes = null;
-         const Yq = this.inputs;
-         let lq = 0;
-         for (const {
-             size: mq
-           }
-           of gq) lq += mq;
-         for (const {
-             name: mq,
-             offset: xq,
-             size: Aq,
-             type: cq
-           }
- ... (4 more removed lines; see GitHub link above)
+       get maximum() {
+         return this.boundingBox.maximum
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L396-L397` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L238-L239) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L396-L397)

```diff
-       attach(qq, Eq) {
-         this.matrices = qq, this.attributes = Eq, this.bind(qq, Eq), this.mirror(qq, qq.length, qq.length / 16)
+       get isLocked() {
+         return this._isLocked
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L399-L400` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L241-L242) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L399-L400)

```diff
-       gqq(qq) {
-         this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, qq ? 64 * qq : void 0)
+       set isLocked(CC) {
+         this._isLocked = CC
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L402-L403` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L244-L245) · [Before (L402-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L402-L403)

```diff
-       Yqq() {
-         this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
+       update(CC) {
+         this._isLocked || (this.boundingBox._update(CC), this.IQC._update(CC))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L405-L406` → after: `L247-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L247-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L247-L250) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L405-L406)

```diff
-       matrixRows(qq, Eq) {
-         this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * qq, 16 * Eq)
+       centerOn(CC, zC) {
+         const ZC = WC._TmpVector3[0].Av(CC).RQC(zC),
+           QC = WC._TmpVector3[1].Av(CC).addInPlace(zC);
+         return this.boundingBox.reConstruct(ZC, QC, this.boundingBox.getWorldMatrix()), this.IQC.reConstruct(ZC, QC, this.boundingBox.getWorldMatrix()), this
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L408-L409` → after: `L252-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L252-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L252-L255) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L408-L409)

```diff
-       attributeRows(qq, Eq) {
-         this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, qq * this.rowStride, Eq * this.rowStride)
+       encapsulate(CC) {
+         const zC = wC.r.Minimize(this.minimum, CC),
+           ZC = wC.r.Maximize(this.maximum, CC);
+         return this.reConstruct(zC, ZC, this.boundingBox.getWorldMatrix()), this
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L411-L412` → after: `L257-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L257-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L257-L261) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L411-L412)

```diff
-       release() {
-         super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
+       encapsulateBoundingInfo(CC) {
+         const zC = wC.j.Matrix[0];
+         this.boundingBox.getWorldMatrix().invertToRef(zC);
+         const ZC = wC.j.Eg[0];
+         return wC.r.TransformCoordinatesToRef(CC.boundingBox.minimumWorld, zC, ZC), this.encapsulate(ZC), wC.r.TransformCoordinatesToRef(CC.boundingBox.maximumWorld, zC, ZC), this.encapsulate(ZC), this
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L414-L416` → after: `L263-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L263-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L263-L264) · [Before (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L414-L416)

```diff
-       mirror(qq, Eq, gq) {
-         const Yq = this.mesh._thinInstanceDataStorage;
-         Yq.matrixData = qq, Yq.matrixBufferSize = Eq, Yq.worldMatrices = null, Yq.instancesCount = gq
+       scale(CC) {
+         return this.boundingBox.scale(CC), this.IQC.scale(CC), this
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L418-L465` → after: `L266-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L266-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L266-L270) · [Before (L418-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L418-L465)

```diff
-     }
-     class sq extends Uq {
-       constructor(qq, Eq, gq) {
-         var Yq, lq, Oq, mq;
-         super(qq), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Yq = null === gq | … [truncated]
-           this.inputs[qq] = new Xq(this.attributesKey, 4 * this.offsets[Eq], 4 * this.rowStride, gq.strides[qq])
-         })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), qq.batchUploads.set(Eq, this), Eq.MJ.addOnce((() => {
-           this.release()
-         }))
-       }
-       get packedMatrices() {
-         return this.matrices
-       }
-       packedRowMesh(qq) {
-         const Eq = this.packedBatch;
-         return Eq.renderSelf ? 0 === qq ? this.packedSource : Eq.instances[qq - 1] : Eq.instances[qq]
- ... (32 more removed lines; see GitHub link above)
+       isInFrustum(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         if ((2 === zC || 3 === zC) && this.IQC.isCenterInFrustum(CC)) return !0;
+         if (!this.IQC.isInFrustum(CC)) return !1;
+         return !(1 !== zC && 3 !== zC) || this.boundingBox.isInFrustum(CC)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L467-L473` → after: `L272-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L272-L274) · [Before (L467-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L467-L473)

```diff
-     }
-     class Xq {
-       constructor(qq, Eq, gq, Yq) {
-         let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-           Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
-           mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-         this.key = qq, this.byteOffset = Eq, this.byteStride = gq, this.size = Yq, this.instanced = lq, this.type = Oq, this.normalized = mq
+       get diagonalLength() {
+         const CC = this.boundingBox;
+         return CC.maximumWorld.subtractToRef(CC.minimumWorld, WC._TmpVector3[0]).length()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L475-L476` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L276-L277) · [Before (L475-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L475-L476)

```diff
-       getBuffer() {
-         return this.key
+       isCompletelyInFrustum(CC) {
+         return this.boundingBox.isCompletelyInFrustum(CC)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L478-L479` → after: `L279-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L279-L280) · [Before (L478-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L478-L479)

```diff
-       getSize() {
-         return this.size
+       _checkCollision(CC) {
+         return CC._canDoCollision(this.IQC.centerWorld, this.IQC.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L481-L482` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L282-L283) · [Before (L481-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L481-L482)

```diff
-       getIsInstanced() {
-         return this.instanced
+       intersectsPoint(CC) {
+         return !!this.IQC.centerWorld && (!!this.IQC.intersectsPoint(CC) && !!this.boundingBox.intersectsPoint(CC))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L484-L517` → after: `L285-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L285-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L285-L291) · [Before (L484-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L484-L517)

```diff
-     }
-     const wq = "CANVAS_ALPHA_ONE",
-       Kq = `override ${wq}: bool = false;`,
-       Cq = {
-         srcFactor: "zero",
-         dstFactor: "one",
-         operation: "add"
-       };
- 
-     function Iq(qq, Eq, gq) {
-       var Yq;
-       let lq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const Oq = null !== (Yq = Eq._colorFormat) && void 0 !== Yq ? Yq : "bgra8unorm",
-         mq = lq ? 15 : 0;
-       return gq ? {
-         ...qq,
- ... (18 more removed lines; see GitHub link above)
+       intersects(CC, zC) {
+         if (!nC.Intersects(this.IQC, CC.IQC)) return !1;
+         if (!bC.b.Intersects(this.boundingBox, CC.boundingBox)) return !1;
+         if (!zC) return !0;
+         const ZC = this.boundingBox,
+           QC = CC.boundingBox;
+         return !!FC(ZC.directions[0], ZC, QC) && (!!FC(ZC.directions[1], ZC, QC) && (!!FC(ZC.directions[2], ZC, QC) && (!!FC(QC.directions[0], ZC, QC) && (!!FC(QC.directions[1], ZC, QC) && (!!FC(QC.directions[2], ZC, QC) && (!!FC(wC.r.Cross(ZC.directions[0], QC.directions[0]), ZC … [truncated]
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L520-L532` → after: `L294-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L294-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L294-L304) · [Before (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L520-L532)

```diff
- 
-     function eq(qq, Eq) {
-       qq._renderables.push(Eq)
-     }
- 
-     function Dq(qq) {
-       var Eq, gq;
-       return null !== (Eq = null === (gq = qq._frameGraph) || void 0 === gq ? void 0 : gq._tasks) && void 0 !== Eq ? Eq : []
-     }
- 
-     function qE(qq) {
-       return qq._currentEncoder
-     }
+     WC._TmpVector3 = (0, QC.d)(2, wC.r.Zero)
+   },
+   40157: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => bC,
+       g: () => oC,
+       i: () => fC,
+       l: () => nC
+     });
+     var QC = ZC(39969),
+       wC = ZC(36963);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L535-L715` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L307) · [Before (L535-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L535-L715)

```diff
-       return qq.createBindGroupLayout({
-         label: "lite-scene-equivalent",
-         entries: [{
-           binding: 0,
-           visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform"
-           }
-         }, {
-           binding: 1,
-           visibility: GPUShaderStage.FRAGMENT,
-           buffer: {
-             type: "uniform"
-           }
-         }]
-       })
- ... (165 more removed lines; see GitHub link above)
+       -1 === CC.indexOf("vClipPlane") && CC.push("vClipPlane"), -1 === CC.indexOf("vClipPlane2") && CC.push("vClipPlane2"), -1 === CC.indexOf("vClipPlane3") && CC.push("vClipPlane3"), -1 === CC.indexOf("vClipPlane4") && CC.push("vClipPlane4"), -1 === CC.indexOf("vClipPlane5") &&  … [truncated]
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L719-L818` → after: `L311-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L311-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L311-L317) · [Before (L719-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L719-L818)

```diff
-       return qq.replace(Eq, (qq => {
-         const Eq = gq.get(qq);
-         return "string" === typeof Eq ? Eq : qq
-       }))
-     }
- 
-     function yE(qq, Eq) {
-       var gq;
-       const Yq = null !== (gq = qq.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== gq ? gq : [];
-       let lq = 0;
-       const Oq = () => Yq[lq],
-         mq = () => Yq[lq++],
-         xq = qq => {
-           const gq = /^\d/.test(qq) ? qq : Eq.get(qq);
-           return "string" === typeof gq ? parseInt(gq) : Number.NaN
-         },
- ... (84 more removed lines; see GitHub link above)
+       const QC = !!(CC.clipPlane ?? zC.clipPlane),
+         wC = !!(CC.clipPlane2 ?? zC.clipPlane2),
+         bC = !!(CC.clipPlane3 ?? zC.clipPlane3),
+         nC = !!(CC.clipPlane4 ?? zC.clipPlane4),
+         fC = !!(CC.clipPlane5 ?? zC.clipPlane5),
+         oC = !!(CC.clipPlane6 ?? zC.clipPlane6);
+       QC && ZC.push("#define CLIPPLANE"), wC && ZC.push("#define CLIPPLANE2"), bC && ZC.push("#define CLIPPLANE3"), nC && ZC.push("#define CLIPPLANE4"), fC && ZC.push("#define CLIPPLANE5"), oC && ZC.push("#define CLIPPLANE6")
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L822-L823` → after: `L321-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L321-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L321-L328) · [Before (L822-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L822-L823)

```diff
-       return Yq = FE(qq, ZE[0]), lq = FE(Eq, ZE[1]), Oq = FE(gq, ZE[2]), Yq + ZE[0] * (lq + ZE[1] * Oq);
-       var Yq, lq, Oq
+       let QC = !1;
+       const wC = !!(CC.clipPlane ?? zC.clipPlane),
+         bC = !!(CC.clipPlane2 ?? zC.clipPlane2),
+         nC = !!(CC.clipPlane3 ?? zC.clipPlane3),
+         fC = !!(CC.clipPlane4 ?? zC.clipPlane4),
+         oC = !!(CC.clipPlane5 ?? zC.clipPlane5),
+         qC = !!(CC.clipPlane6 ?? zC.clipPlane6);
+       return ZC.CLIPPLANE !== wC && (ZC.CLIPPLANE = wC, QC = !0), ZC.CLIPPLANE2 !== bC && (ZC.CLIPPLANE2 = bC, QC = !0), ZC.CLIPPLANE3 !== nC && (ZC.CLIPPLANE3 = nC, QC = !0), ZC.CLIPPLANE4 !== fC && (ZC.CLIPPLANE4 = fC, QC = !0), ZC.CLIPPLANE5 !== oC && (ZC.CLIPPLANE5 = oC, QC = … [truncated]
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L827` → after: `L332-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L332-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L332-L333) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L827)

```diff
-       return qq + 8 * (Eq + 8 * gq)
+       let QC = zC.clipPlane ?? ZC.clipPlane;
+       qC(CC, "vClipPlane", QC), QC = zC.clipPlane2 ?? ZC.clipPlane2, qC(CC, "vClipPlane2", QC), QC = zC.clipPlane3 ?? ZC.clipPlane3, qC(CC, "vClipPlane3", QC), QC = zC.clipPlane4 ?? ZC.clipPlane4, qC(CC, "vClipPlane4", QC), QC = zC.clipPlane5 ?? ZC.clipPlane5, qC(CC, "vClipPlane5 … [truncated]
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L831-L870` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L337-L339) · [Before (L831-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L831-L870)

```diff
-       return qq + 4 * (Eq + 4 * gq)
-     }
-     const KE = 65535,
-       CE = 0,
-       IE = 1,
-       eE = 2,
-       DE = 3;
- 
-     function qg(qq) {
-       return Math.ceil(qq * qq / 32)
-     }
-     const Eg = 8192,
-       gg = 1 << 18,
-       Yg = 65536,
-       lg = 294912,
-       Og = 128,
- ... (24 more removed lines; see GitHub link above)
+       if (ZC) {
+         const bC = QC.b.Km()?.floatingOriginOffset || wC.r.ZeroReadOnly;
+         CC.setFloat4(zC, ZC.normal.x, ZC.normal.y, ZC.normal.z, ZC.d + wC.r.Dot(ZC.normal, bC))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L875-L991` → after: `L349-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L349-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L349-L379) · [Before (L875-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L875-L991)

```diff
-         this.words = new Uint32Array(ug), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt  … [truncated]
-       }
-       gN(qq, Eq) {
-         this.parts = 0, this.refs = 0, this.view = qq, this.viewAt = Eq;
-         const gq = qq[Eq + 1] * qq[Eq + 6] - qq[Eq + 2] * qq[Eq + 5],
-           Yq = qq[Eq + 2] * qq[Eq + 4] - qq[Eq] * qq[Eq + 6],
-           lq = qq[Eq] * qq[Eq + 5] - qq[Eq + 1] * qq[Eq + 4],
-           Oq = Math.hypot(gq, Yq, lq) || 1;
-         this.light[0] = gq / Oq, this.light[1] = Yq / Oq, this.light[2] = lq / Oq
-       }
-       add(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         if (this.parts >= mg || ! function(qq, Eq, gq) {
-             const Yq = qq[Eq],
-               lq = qq[Eq + 1],
-               Oq = qq[Eq + 2],
- ... (101 more removed lines; see GitHub link above)
+         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
+       }
+       unBindMesh() {
+         this._mesh = null
+       }
+       addFallback(CC, zC) {
+         this._defines[CC] || (CC < this._currentRank && (this._currentRank = CC), CC > this._maxRank && (this._maxRank = CC), this._defines[CC] = new Array), this._defines[CC].push(zC)
+       }
+       addCPUSkinningFallback(CC, zC) {
+         this._mesh = zC, CC < this._currentRank && (this._currentRank = CC), CC > this._maxRank && (this._maxRank = CC)
+       }
+       get hasMoreFallbacks() {
+         return this._currentRank <= this._maxRank
+       }
+       reduce(CC, zC) {
+         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
+ ... (15 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L994` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L387) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L994)

```diff
-         this.refs = lq
+         return CC
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L997-L1043` → after: `L390-L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L390-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L390-L411) · [Before (L997-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L997-L1043)

```diff
- 
-     function dg(qq) {
-       return Math.min(127, Math.max(0, Math.floor((.5 * qq + .5) * Og)))
-     }
- 
-     function jg(qq, Eq, gq, Yq, lq) {
-       for (let Oq = 0; Oq < 4; Oq++)
-         for (let mq = 0; mq < 4; mq++) lq[4 * Oq + mq] = qq[Eq + 4 * Oq] * gq[Yq + mq] + qq[Eq + 4 * Oq + 1] * gq[Yq + 4 + mq] + qq[Eq + 4 * Oq + 2] * gq[Yq + 8 + mq] + qq[Eq + 4 * Oq + 3] * gq[Yq + 12 + mq]
-     }
- 
-     function Hg(qq, Eq, gq, Yq, lq) {
-       const Oq = qq[0] - Eq,
-         mq = qq[1] - gq,
-         xq = qq[2] - Yq,
-         Aq = qq[3] - Eq,
-         cq = qq[4] - gq,
- ... (31 more removed lines; see GitHub link above)
+   },
+   40110: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => GC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(39913),
+       nC = ZC(36987),
+       fC = ZC(36985),
+       oC = ZC(40119),
+       qC = ZC(39950),
+       FC = ZC(38507),
+       WC = ZC(37596),
+       NC = ZC(40148),
+       MC = ZC(39842);
+ ... (6 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1045-L1264` → after: `L413-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L413-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L413-L633) · [Before (L1045-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1045-L1264)

```diff
-       }
-       return !0
-     }
-     const og = new Float32Array(1);
-     new Uint32Array(og.buffer);
-     var Pg = gq(38718);
- 
-     function Qg(qq) {
-       const [Eq, gq, Yq] = Pg.r;
-       return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${qq.group}) @binding(${qq.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeT … [truncated]
-     }
- 
-     function yg(qq) {
-       let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
- ... (204 more removed lines; see GitHub link above)
+         reset() {
+           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
+         }
+         get func() {
+           return this._func
+         }
+         set func(CC) {
+           this._func = CC
+         }
+         get backFunc() {
+           return this._backFunc
+         }
+         set backFunc(CC) {
+           this._backFunc = CC
+         }
+         get funcRef() {
+ ... (205 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1266-L1448` → after: `L635-L683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L635-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L635-L683) · [Before (L1266-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1266-L1448)

```diff
-       return !(null === (Eq = (0, nE.i)(qq)) || void 0 === Eq || !Eq.sceneDepth)
-     }
- 
-     function OY(qq) {
-       const Eq = (0, nE.i)(qq);
-       return !!Eq && Xg(Eq.hooks, Eq.strict, Eq.program)
-     }
- 
-     function mY(qq, Eq, gq, Yq) {
-       return Tg(qq, Eq, gq, Yq, "terrain")
-     }
- 
-     function xY(qq, Eq, gq) {
-       let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
-       const Oq = function(qq) {
- ... (167 more removed lines; see GitHub link above)
+       let zC, ZC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC = [],
+         yC = [],
+         LC = [],
+         UC = [],
+         BC = [],
+         OC = [],
+         kC = [],
+         VC = [],
+         Cz = [],
+         zz = [],
+         Zz = [],
+         Qz = [],
+         wz = [],
+         bz = [],
+         nz = [],
+         fz = [],
+ ... (33 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1451-L1600` → after: `L686-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L686-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L686-L688) · [Before (L1451-L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1451-L1600)

```diff
-       for (const cq of Eq) {
-         var xq, Aq;
-         const Eq = null !== (xq = cq.type.trim().split(/\s+/).pop()) && void 0 !== xq ? xq : cq.type,
-           uq = ZY.get(Eq);
-         if (!uq) throw new Error(`Lite: no uniform layout for ${cq.name}: ${cq.type}`);
-         const Bq = null !== (Aq = cq.arraySize) && void 0 !== Aq ? Aq : 0,
-           Wq = Bq ? 4 : uq.align;
-         Yq = Math.ceil(Yq / Wq) * Wq;
-         const Nq = Bq ? 4 * Math.ceil(uq.floats / 4) : uq.floats;
-         if (gq.set(cq.name, {
-             offset: Yq,
-             floats: uq.floats,
-             arraySize: Bq,
-             stride: Nq
-           }), Bq && uq.floats <= 2) {
-           const Eq = `${qq}_${mq.length}_strided`;
- ... (134 more removed lines; see GitHub link above)
+       return CC = class {
+         get useVertexPulling() {
+           return this._useVertexPulling
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1602-L1607` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L690-L691) · [Before (L1602-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1602-L1607)

```diff
-         let qq = Oq.substring(1),
-           Eq = "g";
-         if (qq.startsWith("!")) Eq = "", qq = qq.substring(1);
-         else {
-           const gq = IY.exec(qq);
-           gq && (Eq = gq[1], qq = qq.substring(Eq.length + 1))
+         set useVertexPulling(zC) {
+           this._useVertexPulling !== zC && (this._useVertexPulling = zC, this.YzC(CC.MiscDirtyFlag))
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1609-L1614` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L693-L694) · [Before (L1609-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1609-L1614)

```diff
-         const Yq = new RegExp(qq, Eq.includes("g") ? Eq : `${Eq}g`);
-         let lq = Yq.exec(gq);
-         for (lq || DY(Oq); lq;) {
-           const qq = lq,
-             Eq = mq.replace(/\$(\d+)/g, ((Eq, gq) => Number(gq) < qq.length ? qq[Number(gq)] : ""));
-           gq = gq.substring(0, qq.index) + Eq + gq.substring(qq.index + qq[0].length), Yq.lastIndex = qq.index + Eq.length, lq = Yq.exec(gq)
+         get _supportGlowLayer() {
+           return !1
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1616-L1752` → after: `L696-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L696-L698) · [Before (L1616-L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1616-L1752)

```diff
-       }
-       return gq
-     }
-     const El = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
-       gl = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
-       Yl = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;
- 
-     function ll(qq) {
-       const Eq = {
-         attributes: [],
-         varyings: [],
-         uniforms: [],
-         textures: [],
-         samplers: new Set,
-         body: ""
-       };
- ... (121 more removed lines; see GitHub link above)
+         set _glowModeEnabled(CC) {}
+         get shaderLanguage() {
+           return this._shaderLanguage
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1754-L2077` → after: `L700-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L700-L701) · [Before (L1754-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L1754-L2077)

```diff
-       },
-       vl = new Float64Array(16);
- 
-     function hl(qq, Eq, gq) {
-       const Yq = gq.worldMatrix;
-       var lq;
-       qq.updateFloat3("viewFrom", Yq[12], Yq[13], Yq[14]), qq.updateFloatsFrom("zenithOffset", Eq.cameraOffset, 0, 3), qq.updateFloatsFrom("up", Eq.up, 0, 3), Eq.luminance > 0 && (qq.updateFloat("exposure", Eq.luminance), qq.updateFloat("exposureScale", (lq = Eq.luminance, Math.l … [truncated]
-       const Oq = Eq.sunPosition;
-       if (Pl.set(Oq[0], Oq[1], Oq[2]), !Eq.useSunPosition) {
-         const qq = Math.PI * (Eq.inclination - .5),
-           gq = 2 * Math.PI * (Eq.azimuth - .5);
-         Pl.set(Eq.distance * Math.cos(gq) * Math.cos(qq), Eq.distance * Math.sin(-qq), Eq.distance * Math.sin(gq) * Math.cos(qq)), ol.Quaternion.FromUnitVectorsToRef(ol.Na.UpReadOnly, Ql.set(Eq.up[0], Eq.up[1], Eq.up[2]), yl), Pl.rotateByQuaternionToRef(yl, Pl)
-       }
-       qq.updateVector3("sun", Pl), tl[0] = Pl.x, tl[1] = Pl.y, tl[2] = Pl.z;
-       const mq = VE(Eq, tl, rl);
-       qq.updateFloatsFrom("sunDir", mq.sunDir, 0, 3), qq.updateFloat("sunE", mq.sunE), qq.updateFloatsFrom("inScatterR", mq.inScatterR, 0, 3), qq.updateFloatsFrom("inScatterM", mq.inScatterM, 0, 3), qq.updateFloatsFrom("extinctionBeta", mq.extinctionBeta, 0, 3), qq.updateFloat("s … [truncated]
- ... (308 more removed lines; see GitHub link above)
+         get canRenderToMRT() {
+           return !1
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2079-L2188` → after: `L703-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L703-L706) · [Before (L2079-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2079-L2188)

```diff
-         of qq.features)
-         for (const qq in gq) Eq[qq] = gq[qq];
-       return Eq
-     }
- 
-     function lO(qq) {
-       const Eq = qq.parts.geometry;
-       return null !== Eq && void 0 !== Eq && Eq.live ? Eq : null
-     }
- 
-     function OO(qq) {
-       var Eq;
-       return null !== (Eq = lO(qq)) && void 0 !== Eq ? Eq : Dl
-     }
-     class mO {
-       constructor(qq, Eq, gq) {
- ... (94 more removed lines; see GitHub link above)
+         set alpha(zC) {
+           if (this._alpha === zC) return;
+           const ZC = this._alpha;
+           this._alpha = zC, 1 !== ZC && 1 !== zC || this.YzC(CC.MiscDirtyFlag + CC.PrePassDirtyFlag)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2190-L2210` → after: `L708-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L708-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L708-L709) · [Before (L2190-L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2190-L2210)

```diff
-         this.modelPackKind(gq) && (Yq._needNormals = !0), Yq.NORMAL = Yq._needNormals && Eq.isVerticesDataPresent("normal"), Yq.UV1 = Yq._needUVs && Eq.isVerticesDataPresent("uv"), Yq.UV2 = Yq._needUVs && Eq.isVerticesDataPresent("uv2");
-         const jq = Eq.useVertexColors && Eq.isVerticesDataPresent("color");
-         Yq.VERTEXCOLOR = jq, Yq.VERTEXALPHA = Eq.hasVertexAlpha && jq, Yq.INSTANCESCOLOR = "none" !== Oq && Eq.isVerticesDataPresent("instanceColor");
-         for (const {
-             feature: tq,
-             state: rq,
-             active: vq
-           }
-           of mq) {
-           var Hq, oq;
-           if (vq) null === (Hq = (oq = (0, uE.k)(tq)).prepareDefines) || void 0 === Hq || Hq.call(oq, rq, Yq, qq, Eq, gq)
-         }
-         const Pq = qq.Ba();
-         for (const {
-             feature: tq,
-             state: rq,
- ... (5 more removed lines; see GitHub link above)
+         get alpha() {
+           return this._alpha
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2212-L2243` → after: `L711-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L711-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L711-L741) · [Before (L2212-L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2212-L2243)

```diff
-         return !0
-       }
-     }
- 
-     function xO(qq, Eq, gq) {
-       return qq.codeVersion !== Eq.version && function(qq, Eq) {
-         const gq = [],
-           Yq = [];
-         for (const {
-             feature: Wq,
-             state: Nq,
-             active: aq
-           }
-           of Eq.features) {
-           var lq, Oq, mq, xq;
-           if (aq) AO(null === (lq = (Oq = (0, uE.k)(Wq)).getCustomCode) || void 0 === lq ? void 0 : lq.call(Oq, Nq, "vertex", yq.d.WGSL), gq), AO(null === (mq = (xq = (0, uE.k)(Wq)).getCustomCode) || void 0 === mq ? void 0 : mq.call(xq, Nq, "fragment", yq.d.WGSL), Yq)
- ... (16 more removed lines; see GitHub link above)
+         set backFaceCulling(zC) {
+           this._backFaceCulling !== zC && (this._backFaceCulling = zC, this.YzC(CC.TextureDirtyFlag))
+         }
+         get backFaceCulling() {
+           return this._backFaceCulling
+         }
+         set textureRepetitionMode(zC) {
+           const ZC = Math.max(0, Math.min(0 | zC, 4));
+           this._textureRepetitionMode !== ZC && (this._textureRepetitionMode = ZC, this.YzC(CC.TextureDirtyFlag))
+         }
+         get textureRepetitionMode() {
+           return this._textureRepetitionMode
+         }
+         set cullBackFaces(zC) {
+           this._cullBackFaces !== zC && (this._cullBackFaces = zC, this.YzC(CC.TextureDirtyFlag))
+         }
+ ... (15 more added lines; see GitHub link above)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2246-L2305` → after: `L744-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L744-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L744-L745) · [Before (L2246-L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2246-L2305)

```diff
-         qq.vertexCode = gq, qq.fragmentCode = Yq, qq.pluginUniforms = Aq, qq.codeKey = JSON.stringify([gq, Yq, Aq]), qq.codeVersion = Eq.version
-       }(qq, Eq), `${gq}#${qq.codeKey}`
-     }
- 
-     function AO(qq, Eq) {
-       if (qq)
-         for (const gq in qq) qq[gq] && Eq.push([gq, qq[gq]])
-     }
-     const cO = new Map([
-       [512, "never"],
-       [513, "greater"],
-       [514, "equal"],
-       [515, "greater-equal"],
-       [516, "less"],
-       [517, "not-equal"],
-       [518, "less-equal"],
- ... (44 more removed lines; see GitHub link above)
+         get hasRenderTargetTextures() {
+           return this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._eventInfo.hasRenderTargetTextures
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2307-L2443` → after: `L747-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L747-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L747-L796) · [Before (L2307-L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2307-L2443)

```diff
-         return uq
-       }
-     }
-     var BO = gq(37437);
- 
-     function WO(qq) {
-       if (!qq.frozen) return -1;
-       let Eq = qq.version;
-       for (const {
-           feature: gq,
-           state: Yq,
-           active: lq
-         }
-         of qq.features) {
-         if (!lq || !gq.bind) continue;
-         const qq = (0, uE.k)(gq).uniformsVersion;
- ... (121 more removed lines; see GitHub link above)
+         set onDispose(CC) {
+           this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
+         }
+         get onBindObservable() {
+           return this._onBindObservable || (this._onBindObservable = new nC.d), this._onBindObservable
+         }
+         set onBind(CC) {
+           this._onBindObserver && this.onBindObservable.remove(this._onBindObserver), this._onBindObserver = this.onBindObservable.add(CC)
+         }
+         get onUnBindObservable() {
+           return this._onUnBindObservable || (this._onUnBindObservable = new nC.d), this._onUnBindObservable
+         }
+         get onEffectCreatedObservable() {
+           return this._onEffectCreatedObservable || (this._onEffectCreatedObservable = new nC.d), this._onEffectCreatedObservable
+         }
+         set alphaMode(CC) {
+ ... (34 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2445-L2447` → after: `L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L798) · [Before (L2445-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2445-L2447)

```diff
-           of gq.features) {
-           var Wq, Nq;
-           if (dq) null === (Wq = (Nq = (0, uE.k)(aq)).bind) || void 0 === Wq || Wq.call(Nq, Vq, lq, qq, Bq)
+           return this._scene.forceWireframe
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2449-L2527` → after: `L800-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L800-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L800-L807) · [Before (L2449-L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2449-L2527)

```diff
-       }
-     }
- 
-     function dO(qq) {
-       const Eq = qq.replace(/\s+/g, "");
-       return /u32|^vec\du$/.test(Eq) ? "u32" : /i32|^vec\di$/.test(Eq) ? "i32" : "f32"
-     }
- 
-     function jO(qq, Eq) {
-       const gq = qq.getSize(),
-         Yq = dO(Eq),
-         lq = qq => 4 === gq ? `${qq}x4` : 2 === gq ? `${qq}x2` : null;
-       if ("f32" === Yq) {
-         if (5126 === qq.type) return 1 === gq ? "float32" : gq >= 2 && gq <= 4 ? `float32x${gq}` : null;
-         if (!qq.normalized) return null;
-         switch (qq.type) {
- ... (63 more removed lines; see GitHub link above)
+         set wireframe(zC) {
+           this.fillMode = zC ? CC.WireFrameFillMode : CC.TriangleFillMode
+         }
+         get pointsCloud() {
+           switch (this._fillMode) {
+             case CC.PointFillMode:
+             case CC.PointListDrawMode:
+               return !0
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2529-L2551` → after: `L809-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L809-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L809-L862) · [Before (L2529-L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2529-L2551)

```diff
-           const Aq = xq.getBuffer();
-           mq.push(xq);
-           const cq = jO(xq, gq.type);
-           if (!cq) return this.warnOnce(`format:${Eq}:${gq.name}`, `${Eq}'s ${gq.name} (type ${xq.type}, size ${xq.getSize()}) has no WebGPU vertex format`), null;
-           const Bq = xq.getIsInstanced() ? "instance" : "vertex",
-             Wq = xq.byteStride,
-             Nq = HO(cq),
-             aq = lq.find((qq => qq.data === Aq && qq.stride === Wq && qq.step === Bq && xq.byteOffset >= qq.base && xq.byteOffset - qq.base + Nq <= Wq));
-           aq ? aq.attributes.push({
-             shaderLocation: uq,
-             offset: xq.byteOffset - aq.base,
-             format: cq
-           }) : lq.push({
-             data: Aq,
-             base: xq.byteOffset,
-             stride: Wq,
- ... (7 more removed lines; see GitHub link above)
+           return this._scene.forcePointsCloud
+         }
+         set pointsCloud(zC) {
+           this.fillMode = zC ? CC.PointFillMode : CC.TriangleFillMode
+         }
+         get fillMode() {
+           return this._fillMode
+         }
+         set fillMode(zC) {
+           this._fillMode !== zC && (this._fillMode = zC, this.YzC(CC.MiscDirtyFlag))
+         }
+         get useLogarithmicDepth() {
+           return this._useLogarithmicDepth
+         }
+         set useLogarithmicDepth(CC) {
+           const zC = this.Km().mg().getCaps().fragmentDepthSupported;
+ ... (38 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2553-L2594` → after: `L864-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L864-L865) · [Before (L2553-L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2553-L2594)

```diff
-         if (lq.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Eq}`, `${Eq} needs ${lq.length} vertex buffers`), null;
-         let xq = "";
-         for (const uq of lq) {
-           xq += `${uq.stride}${"instance"===uq.step?"i":"v"}`;
-           for (const qq of uq.attributes) xq += `,${qq.shaderLocation}:${qq.offset}:${qq.format}`;
-           xq += ";"
-         }
-         let Aq = this.layouts.get(xq);
-         Aq || (Aq = {
-           key: xq,
-           buffers: lq.map((qq => ({
-             arrayStride: qq.stride,
-             stepMode: qq.step,
-             attributes: qq.attributes
-           }))),
-           instanceEnds: lq.map((qq => {
- ... (26 more removed lines; see GitHub link above)
+         unfreeze() {
+           this.markDirty(), this.checkReadyOnlyOnce = !1
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2596-L2626` → after: `L867-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L867-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L867-L868) · [Before (L2596-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2596-L2626)

```diff
-       }
-     }
- 
-     function PO(qq, Eq, gq, Yq) {
-       const lq = Eq.program.program.attributes;
-       for (let Oq = 0; Oq < lq.length; Oq++) {
-         if ((lq[Oq].optional ? null : gq.vertexInput(qq, lq[Oq].name, Yq)) !== Eq.sources[Oq]) return !1
-       }
-       return !0
-     }
-     const QO = 64;
-     class yO {
-       constructor(qq, Eq, gq, Yq) {
-         this.device = qq, this.layout = Eq, this.frameBuffer = gq, this.label = Yq, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
-       }
-       ensure(qq) {
- ... (15 more removed lines; see GitHub link above)
+         isReady(CC, zC) {
+           return !0
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2628-L2693` → after: `L870-L918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L870-L918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L870-L918) · [Before (L2628-L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2628-L2693)

```diff
-         return mq
-       }
-       upload(qq, Eq) {
-         this.device.queue.writeBuffer(this.buffer, qq * JY, this.data, qq * QO, (Eq - qq) * QO)
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: this.label,
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         })
-       }
-       createBindGroup() {
-         return this.device.createBindGroup({
-           label: this.label,
-           layout: this.layout,
- ... (50 more removed lines; see GitHub link above)
+         isReadyForSubMesh(CC, zC, ZC) {
+           const QC = zC.materialDefines;
+           return !!QC && (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = QC, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), this._eventInfo.isReadyForSubMesh)
+         }
+         getEffect() {
+           return this._drawWrapper.effect
+         }
+         Km() {
+           return this._scene
+         }
+         _getEffectiveOrientation(CC) {
+           return null !== this.sideOrientation ? this.sideOrientation : CC.sideOrientation
+         }
+         get transparencyMode() {
+           return this._transparencyMode
+         }
+ ... (33 more added lines; see GitHub link above)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2695-L2722` → after: `L920-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L920-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L920-L924) · [Before (L2695-L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2695-L2722)

```diff
-             for (const lq of gq[Yq].units) qq(lq.owner, "text" === Yq ? "transparent" : Yq, Eq)
-       }
-       select(qq, Eq) {
-         this.frame++, this.selectedCount = 0;
-         for (const xq of this.groups.values())
-           for (const qq of vO) xq[qq].units.length = 0, xq[qq].rows.length = 0;
-         const {
-           model: gq,
-           mirror: Yq
-         } = this;
-         if (!gq || !Yq || !qq) return;
-         this.rows.length < gq.nodes.WB && (this.rows = new Int32Array(gq.nodes.WB));
-         const lq = this.rows,
-           Oq = gq.meshes;
-         for (let xq = 0; xq < Oq.looseCount; xq++) {
-           const qq = Oq.loose[xq],
- ... (12 more removed lines; see GitHub link above)
+             if (CC.Zx)
+               for (const ZC of CC.Zx)
+                 if (ZC.cg() === this)
+                   for (const CC of ZC._drawWrappers) CC && this._materialContext === CC.materialContext && (CC._wasPreviouslyReady = !1, CC._wasPreviouslyUsingInstances = null, CC._forceRebindOnNextCall = zC);
+           zC && this.YzC(CC.AllDirtyFlag)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2724-L2865` → after: `L926-L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L926-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L926-L931) · [Before (L2724-L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2724-L2865)

```diff
-       }
-       instanceBatch(qq) {
-         const Eq = this.batchOf(qq);
-         return Eq.dispatched || (Eq.dispatched = Eq.renderSelf = !0, Eq.row = this.rowOf(qq)), Eq
-       }
-       rowOf(qq) {
-         return qq.row
-       }
-       activate(qq, Eq) {
-         if (!qq.GJ) {
-           const gq = qq;
-           if (gq.olq) {
-             const qq = this.batchOf(gq);
-             qq.dispatched = !0, qq.renderSelf = !0, qq.row = Eq
-           }
-           return void this.dispatch(gq, Eq, Eq)
- ... (126 more removed lines; see GitHub link above)
+         _preBind(zC) {
+           let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const QC = this._scene.mg(),
+             wC = (null == ZC ? this.sideOrientation : ZC) === CC.ClockWiseSideOrientation,
+             bC = zC || this._getDrawWrapper();
+           return (0, pC.c)(bC) && bC.materialContext && (bC.materialContext.useVertexPulling = this.useVertexPulling), QC.enableEffect(bC), QC.setState(this.backFaceCulling, this.zOffset, !1, wC, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this … [truncated]
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2867-L2875` → after: `L933-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L933-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L933-L936) · [Before (L2867-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2867-L2875)

```diff
-       }
-       hG(qq, Eq) {
-         if (Eq === qq.index >= 0) return;
-         qq.steady = null;
-         const gq = this.enabled;
-         if (Eq) qq.index = gq.length, gq.push(qq);
-         else {
-           const Eq = gq.pop();
-           Eq !== qq && (gq[qq.index] = Eq, Eq.index = qq.index), qq.index = -1
+         bind(CC, zC) {}
+         buildUniformLayout() {
+           const CC = this._uniformBuffer;
+           this._eventInfo.ubo = CC, this._callbackPluginEventGeneric(8, this._eventInfo), CC.create(), this._uniformBufferLayoutBuilt = !0
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2877-L3230` → after: `L938-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L938-L940) · [Before (L2877-L3230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L2877-L3230)

```diff
-       }
-       listsFor(qq) {
-         let Eq = this.groups.get(qq);
-         return Eq || (Eq = {
-           opaque: [],
-           transparent: []
-         }, this.groups.set(qq, Eq)), Eq
-       }
-     }
-     var bO = gq(39494);
-     class iO {
-       constructor() {
-         this.bundle = null, this.stale = !0, this.Fc = new Set
-       }
-     }
-     class ZO {
- ... (338 more removed lines; see GitHub link above)
+         bindForSubMesh(CC, zC, ZC) {
+           const QC = ZC._drawWrapper;
+           this._eventInfo.subMesh = ZC, this._callbackPluginEventBindForSubMesh(this._eventInfo), QC._forceRebindOnNextCall = !1
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3232-L3529` → after: `L942-L956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L942-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L942-L956) · [Before (L3232-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3232-L3529)

```diff
-         return Oq
-       }
-       bind(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         qq.setBindGroup(hE.c, this.bindGroupFor(Eq, gq, Yq))
-       }
-     }
- 
-     function RO(qq, Eq, gq) {
-       if (qq.gpuVersion === Eq.gpuBuffersVersion) return !0;
-       let Yq;
-       do {
-         if (Yq = Eq.gpuBuffersVersion, !UO(qq, Eq, gq)) return !1
-       } while (Eq.gpuBuffersVersion !== Yq);
-       return qq.gpuVersion = Yq, qq.fitInstances = 0, !0
- ... (282 more removed lines; see GitHub link above)
+         bindOnlyWorldMatrix(CC) {}
+         bindView(CC) {
+           this._useUBO ? this._needToBindSceneUbo = !0 : CC.setMatrix("view", this.Km().getViewMatrix())
+         }
+         bindViewProjection(CC) {
+           this._useUBO ? this._needToBindSceneUbo = !0 : (CC.setMatrix("viewProjection", this.Km().getTransformMatrix()), CC.setMatrix("projection", this.Km().getProjectionMatrix()), CC.setMatrix("inverseProjection", this.Km().getInverseProjectionMatrix()))
+         }
+         bindEyePosition(CC, zC) {
+           this._useUBO ? this._needToBindSceneUbo = !0 : this._scene.bindEyePosition(CC, zC)
+         }
+         _afterBind(CC) {
+           let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           if (this._scene._cachedMaterial = this, this._needToBindSceneUbo && zC && (this._needToBindSceneUbo = !1, (0, SC.x)(zC, this.Km().getSceneUniformBuffer()), this._scene.finalizeSceneUbo()), this._scene._cachedVisibility = CC ? CC.visibility : 1, this._onBindObservable && … [truncated]
+             const CC = this._scene.mg();
+             this._cachedDepthWriteState = CC.getDepthWrite(), CC.setDepthWrite(!1)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3531-L3608` → after: `L958-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L958-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L958-L960) · [Before (L3531-L3608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3531-L3608)

```diff
-         }(qq)) : null
-       } : null, Bq = "placed" === mq ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
-         let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-         return `${(0,hE.B)()}${Gg(Eq,gq)}${Yq}${sg(qq)}${Zg}${Bq}${Eq.code}`
-       };
-       let {
-         vertex: aq,
-         fragment: Vq
-       } = qq;
-       const dq = wg(lq, Aq);
-       if (dq) {
-         const qq = Ym(Eq, gq, "vertex") ? `\tbloxdSpCell = ${gm};\n` : "";
-         aq = om(aq, wO, `${qq}${dq.slice(1)}${wO}`, "vertex")
-       }
-       const jq = `${Lg(Eq,Oq,function(qq,Eq){return Eq.TWOSIDEDLIGHTING?qq:`select(-(${qq}), ${qq}, fragmentInputs.frontFacing)`}(Aq.normal,xq),Aq.flags)}${Kg(lq,Eq.strict,Eq.program,Wq,Aq)}`;
-       jq && (Vq = om(Vq, KO, `${jq.slice(1)}${KO}`, "surface")), Oq && Eq.sunShadow && !xq.TWOSIDEDLIGHTING && (Vq = om(Vq, Pm, `${Pm}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
- ... (62 more removed lines; see GitHub link above)
+           if (this.disableColorWrite) {
+             const CC = this._scene.mg();
+             this._cachedColorWriteState = CC.getColorWrite(), CC.setColorWrite(!1)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3610-L3645` → after: `L962-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L962-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L962-L964) · [Before (L3610-L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3610-L3645)

```diff
-         }), Eq.onDestroy = qq => {
-           this.thinBundle.resourceDestroyed(qq)
-         }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = … [truncated]
-       }
-       renderable(qq, Eq, gq) {
-         let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         const lq = {
-           order: qq,
-           isTransparent: Eq,
-           _direct: !Eq,
-           bind: (qq, Eq) => this.createBinding(lq, Eq, gq, Yq)
-         };
-         return lq
-       }
-       get pipelinesCompiling() {
-         return this.compiling
- ... (20 more removed lines; see GitHub link above)
+           if (0 !== this.depthFunction) {
+             const CC = this._scene.mg();
+             this._cachedDepthFunctionState = CC.getDepthFunction() || 0, CC.setDepthFunction(this.depthFunction)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3648-L3658` → after: `L967-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L967-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L967-L975) · [Before (L3648-L3658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3648-L3658)

```diff
-         return Oq.length - xq
-       }
-       bundleDraws(qq, Eq, gq) {
-         let Yq = 0;
-         for (const lq of Eq) {
-           let Eq = this.retainedDraw(qq, lq, gq, !1);
-           const Oq = void 0 !== Eq;
-           if (void 0 === Eq && (Eq = this.drawFor(qq, lq, gq, !1), this.retain(lq, Eq)), Eq) {
-             const qq = lq.owner,
-               gq = this.thinBundle.add(lq, Eq, qq.getWorldMatrix().m, qq.visibility);
-             Oq && this.steadyFrom(lq, Eq, gq), Yq++
+         unbind() {
+           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
+             this._scene.mg().setDepthFunction(this._cachedDepthFunctionState)
+           }
+           if (this.disableDepthWrite) {
+             this._scene.mg().setDepthWrite(this._cachedDepthWriteState)
+           }
+           if (this.disableColorWrite) {
+             this._scene.mg().setColorWrite(this._cachedColorWriteState)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3661-L3723` → after: `L978-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L978-L979) · [Before (L3661-L3723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3661-L3723)

```diff
-         return Yq
-       }
-       steadyFrom(qq, Eq, gq) {
-         const Yq = qq.owner,
-           lq = this.W4.base(Yq),
-           Oq = Yq.material,
-           {
-             drawState: mq,
-             instance: xq
-           } = Eq.inputs.retained;
-         if (!lq || !Oq || 1 !== qq.parts.materials.length || rO(qq) !== Oq) return;
-         const Aq = lq.steady ??= {
-           unit: qq,
-           material: Oq,
-           visibility: 1,
-           draw: Eq,
- ... (47 more removed lines; see GitHub link above)
+         getAnimatables() {
+           return this._eventInfo.animatables = [], this._callbackPluginEventGeneric(256, this._eventInfo), this._eventInfo.animatables
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3725-L3857` → after: `L981-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L981-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L981-L995) · [Before (L3725-L3857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3725-L3857)

```diff
-         let Wq = !1;
-         if (Aq.frame !== this.frame && (Wq = this.modelUniforms.refreshModelUniforms(qq, Aq, Aq.model, this.view)), !this.bindMaterial(Aq, Wq) || !this.withGpuBuffers(lq) || !this.instanceBuffersFit(uq.name, lq, Bq)) return null;
-         const Nq = this.makeDraw(xq, lq, this.renderStates.renderState(mq.model, uq, Yq, lq.state), Aq, Bq);
-         return this.setRange(Nq, Eq, Oq.indexBuffer, Oq.indexData), Nq
-       }
-       retain(qq, Eq) {
-         const gq = this.drawDefines.drawStates.get(qq);
-         if (!Eq || !gq || gq.program !== Eq.program) {
-           const Eq = this.inputs.get(qq);
-           return void(Eq && (Eq.retained = null))
-         }
-         const Yq = qq.owner,
-           lq = gq.instancing,
-           Oq = this.indexKey(qq),
-           mq = Eq.inputs.retained;
-         mq ? (mq.drawState = gq, mq.instancing = lq, mq.program = Eq.program, mq.instance = Eq.material, mq.indexData = Oq, mq.unIndexed = Yq.isUnIndexed, mq.indexBuffer = Eq.indexBuffer, mq.gpuVersion = this.resources.gpuBuffersVersion) : Eq.inputs.retained = {
- ... (117 more removed lines; see GitHub link above)
+         getActiveTextures() {
+           return this._eventInfo.activeTextures = [], this._callbackPluginEventGeneric(512, this._eventInfo), this._eventInfo.activeTextures
+         }
+         hasTexture(CC) {
+           return this._eventInfo.hasTexture = !1, this._eventInfo.texture = CC, this._callbackPluginEventGeneric(1024, this._eventInfo), this._eventInfo.hasTexture
+         }
+         clone(CC) {
+           return null
+         }
+         _clonePlugins(zC, ZC) {
+           const QC = {};
+           if (this._serializePlugins(QC), CC._ParsePlugins(QC, zC, this._scene, ZC), this.pluginManager)
+             for (const CC of this.pluginManager._plugins) {
+               const ZC = zC.pluginManager.getPlugin(CC.name);
+               ZC && CC.copyTo(ZC)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3880-L3938` → after: `L998-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L998-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L998-L1003) · [Before (L3880-L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3880-L3938)

```diff
-         return this.createProgram(lq, Aq, "standard")
-       }
-       modelPackProgram(qq, Eq, gq, Yq, lq) {
-         const Oq = this.programs.get(gq);
-         if (Oq || this.unbuildable.has(gq)) return null !== Oq && void 0 !== Oq ? Oq : null;
-         const mq = this.drawDefines.modelPackVariant;
-         let xq;
-         try {
-           const qq = function(qq) {
-               return (0, nE.e)(qq, "model")
-             }(mq),
-             gq = Hm(qq, lq, Yq.vertexCode, Yq.fragmentCode);
-           xq = ym(xl({
-             defines: gO(Eq),
-             ...gq,
-             pluginUniforms: Yq.pluginUniforms
- ... (43 more removed lines; see GitHub link above)
+         getBindedMeshes() {
+           if (this.meshMap) {
+             const CC = [];
+             for (const zC in this.meshMap) {
+               const ZC = this.meshMap[zC];
+               ZC && CC.push(ZC)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3940-L3945` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1005) · [Before (L3940-L3945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3940-L3945)

```diff
-           }];
-         for (const Bq of Eq.textures) Aq.push({
-           binding: Bq.binding,
-           visibility: xq,
-           texture: {
-             viewDimension: Bq.dimension
+             return CC
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3947-L3975` → after: `L1007-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1007-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1007-L1030) · [Before (L3947-L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3947-L3975)

```diff
-         }), Aq.push({
-           binding: Bq.samplerBinding,
-           visibility: xq,
-           sampler: {}
-         });
-         const cq = this.device.createBindGroupLayout({
-             label: mq,
-             entries: Aq
-           }),
-           uq = {
-             key: qq,
-             id: Oq,
-             kind: gq,
-             program: Eq,
-             vertex: this.device.createShaderModule({
-               label: `${mq}-vertex`,
- ... (13 more removed lines; see GitHub link above)
+           return this._scene.meshes.filter((CC => CC.material === this))
+         }
+         forceCompilation(CC, zC, ZC, QC) {
+           const wC = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...ZC
+             },
+             bC = this.Km(),
+             nC = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const fC = () => {
+             if (!this._scene || !this._scene.mg()) return;
+             const ZC = bC.clipPlane;
+             if (wC.clipPlane && (bC.clipPlane = new WC.d(0, 0, 0, 1)), this._storeEffectOnSubMeshes) {
+               let ZC = !0,
+ ... (8 more added lines; see GitHub link above)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L3977-L4069` → after: `L1032-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1032-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1032-L1041) · [Before (L3977-L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L3977-L4069)

```diff
-         return this.programs.set(qq, uq), uq
-       }
-       writeFrameUniforms() {
-         const qq = this.frameUniforms;
-         aO(this.view, qq), this.device.queue.writeBuffer(this.frameBuffer, 0, qq)
-       }
-       materialInstance(qq, Eq) {
-         let gq = this.materials.get(qq);
-         if (!gq) {
-           const Eq = new Map;
-           this.materials.set(qq, Eq), qq.MJ.addOnce((() => {
-             for (const qq of Eq.values()) qq.released = !0, this.resources.destroyBuffer(qq.buffer);
-             this.materials.delete(qq)
-           })), gq = Eq
-         }
-         let Yq = gq.get(Eq.key);
- ... (77 more removed lines; see GitHub link above)
+           fC()
+         }
+         async forceCompilationAsync(CC, zC) {
+           return await new Promise(((ZC, QC) => {
+             this.forceCompilation(CC, (() => {
+               ZC()
+             }), zC, (CC => {
+               QC(CC)
+             }))
+           }))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4071-L4090` → after: `L1043-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1043-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1043-L1044) · [Before (L4071-L4090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4071-L4090)

```diff
-         if (!Oq) return lq && (qq.bindGroup = null), !1;
-         if (lq) {
-           const lq = [{
-             binding: 0,
-             resource: {
-               buffer: qq.buffer
-             }
-           }];
-           for (let qq = 0; qq < Yq.length; qq++) lq.push({
-             binding: Yq[qq].binding,
-             resource: gq[2 * qq]
-           }), lq.push({
-             binding: Yq[qq].samplerBinding,
-             resource: gq[2 * qq + 1]
-           });
-           qq.bindGroup = this.device.createBindGroup({
- ... (4 more removed lines; see GitHub link above)
+         YzC(zC) {
+           this.Km().blockMaterialDirtyMechanism || this._blockDirtyMechanism || (CC._DirtyCallbackArray.length = 0, zC & CC.ImageProcessingDirtyFlag && CC._DirtyCallbackArray.push(CC._ImageProcessingDirtyCallBack), zC & CC.TextureDirtyFlag && CC._DirtyCallbackArray.push(CC._Textu … [truncated]
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4092-L4106` → after: `L1046-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1046-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1046-L1050) · [Before (L4092-L4106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4092-L4106)

```diff
-         return !0
-       }
-       writeMeshSlot(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, qq, Eq, gq), this.slotCount++ * JY
-       }
-       uploadMeshSlots() {
-         this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
-       }
-       vertexInputs(qq, Eq, gq, Yq, lq) {
-         let Oq = this.inputs.get(qq);
-         if (!Oq || Oq.program !== Yq || !PO(Eq, Oq, this.resources, lq)) {
-           var mq;
-           if (Oq = null !== (mq = this.vertexLayouts.resolveInputs(Eq, gq, Yq, lq)) && void 0 !== mq ? mq : void 0, !Oq) return null;
-           this.inputs.set(qq, Oq)
+         resetDrawCache() {
+           const CC = this.Km().meshes;
+           for (const zC of CC)
+             if (zC.Zx)
+               for (const CC of zC.Zx) CC.cg() === this && CC.resetDrawCache()
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4108-L4130` → after: `L1052-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1052-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1052-L1061) · [Before (L4108-L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4108-L4130)

```diff
-         return this.withGpuBuffers(Oq)
-       }
-       meshInputs(qq, Eq, gq) {
-         const Yq = this.inputs.get(qq);
-         if (Yq && this.inputsStamped(Yq, qq, gq, Eq)) return this.withGpuBuffers(Yq);
-         const lq = qq.owner,
-           Oq = lO(qq),
-           mq = this.vertexInputs(qq, lq, lq.name, Eq, Oq);
-         return mq && (mq.geometry = OO(qq), mq.instanceLayout = this.drawDefines.instanceLayout(lq, gq)), mq
-       }
-       inputsStamped(qq, Eq, gq, Yq) {
-         return function(qq, Eq, gq, Yq) {
-           return qq.program === gq && qq.geometry === OO(Eq) && qq.instanceLayout === Yq
-         }(qq, Eq, Yq, this.drawDefines.instanceLayout(Eq.owner, gq))
-       }
-       withGpuBuffers(qq) {
- ... (7 more removed lines; see GitHub link above)
+         _markAllSubMeshesAsDirty(CC) {
+           const zC = this.Km();
+           if (zC.blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const ZC = zC.meshes;
+           for (const QC of ZC)
+             if (QC.Zx)
+               for (const ZC of QC.Zx) {
+                 if ((ZC.cg() || (zC._hasDefaultMaterial ? zC.defaultMaterial : null)) === this)
+                   for (const zC of ZC._drawWrappers) zC && zC.defines && zC.defines.markAllAsDirty && this._materialContext === zC.materialContext && CC(zC.defines)
+               }
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4132-L4146` → after: `L1063-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1063-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1063-L1066) · [Before (L4132-L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4132-L4146)

```diff
-         return !0
-       }
-       createBinding(qq, Eq, gq, Yq) {
-         const lq = `${Eq._colorFormat}|${Eq._depthStencilFormat}|${Eq._depthCompare}|${Eq._sampleCount}`,
-           Oq = mE(this.device, Eq);
-         if (qq === this.skyLastRenderable) {
-           let gq = null;
-           return {
-             renderable: qq,
-             pipeline: Oq,
-             draw: qq => gq ? this.drawSky(qq, Eq, lq, gq) : 0,
-             update: qq => {
-               gq = qq
-             }
-           }
+         _markScenePrePassDirty() {
+           if (this.Km().blockMaterialDirtyMechanism || this._blockDirtyMechanism) return;
+           const CC = this.Km().enablePrePassRenderer();
+           CC && CC.YzC()
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4148-L4151` → after: `L1068-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1068-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1068-L1069) · [Before (L4148-L4151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4148-L4151)

```diff
-         return {
-           renderable: qq,
-           pipeline: Oq,
-           draw: qq => (Yq ? Yq.execute(qq, Eq, lq) : 0) + this.drawList(qq, Eq, lq, gq)
+         _markAllSubMeshesAsAllDirty() {
+           this._markAllSubMeshesAsDirty(CC._AllDirtyCallBack)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4153-L4160` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1071-L1072) · [Before (L4153-L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4153-L4160)

```diff
-       }
-       drawSky(qq, Eq, gq, Yq) {
-         const lq = this.lists.skyDraws,
-           Oq = lq.length > 0;
-         if (Oq) {
-           var mq;
-           const gq = (null !== (mq = Eq._depthCompare) && void 0 !== mq ? mq : gE).startsWith("greater") ? 0 : 1;
-           qq.setViewport(0, 0, Yq.targetWidth, Yq.targetHeight, gq, gq)
+         _markAllSubMeshesAsImageProcessingDirty() {
+           this._markAllSubMeshesAsDirty(CC._ImageProcessingDirtyCallBack)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4162-L4171` → after: `L1074-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1074-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1074-L1075) · [Before (L4162-L4171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4162-L4171)

```diff
-         const xq = this.drawList(qq, Eq, gq, lq);
-         return Oq && qq.setViewport(0, 0, Yq.targetWidth, Yq.targetHeight, 0, 1), xq
-       }
-       drawList(qq, Eq, gq, Yq) {
-         let lq = 0;
-         const Oq = this.binder;
-         Oq.reset();
-         for (const mq of Yq) {
-           const Yq = this.pipelineFor(mq, Eq, gq);
-           Yq && (Oq.bind(qq, mq, Yq, this.meshSlots.bindGroup, mq.slotOffset), mq.indexBuffer ? qq.drawIndexed(mq.count, mq.instances, mq.first, 0, 0) : qq.draw(mq.count, mq.instances, mq.first, 0), lq++)
+         _markAllSubMeshesAsTexturesDirty() {
+           this._markAllSubMeshesAsDirty(CC._TextureDirtyCallBack)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4173-L4213` → after: `L1077-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1077-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1077-L1116) · [Before (L4173-L4213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4173-L4213)

```diff
-         return lq
-       }
-       pipelineFor(qq, Eq, gq) {
-         var Yq, lq;
-         if (qq.program.failed) return null;
-         const Oq = qq.inputs;
-         if (Oq.pipeline && Oq.pipelineTarget === gq) return Oq.pipeline;
-         const mq = `${qq.pipelineKey}|${gq}`,
-           xq = this.pipelines.get(mq);
-         if (void 0 !== xq) return xq && (Oq.pipeline = xq, Oq.pipelineTarget = gq), xq || null;
-         this.pipelines.set(mq, null);
-         const {
-           program: Aq,
-           layout: cq,
-           state: uq
-         } = qq, Bq = {
- ... (25 more removed lines; see GitHub link above)
+         _markAllSubMeshesAsFresnelDirty() {
+           this._markAllSubMeshesAsDirty(CC._FresnelDirtyCallBack)
+         }
+         _markAllSubMeshesAsFresnelAndMiscDirty() {
+           this._markAllSubMeshesAsDirty(CC._FresnelAndMiscDirtyCallBack)
+         }
+         _markAllSubMeshesAsLightsDirty() {
+           this._markAllSubMeshesAsDirty(CC._LightsDirtyCallBack)
+         }
+         _markAllSubMeshesAsAttributesDirty() {
+           this._markAllSubMeshesAsDirty(CC._AttributeDirtyCallBack)
+         }
+         _markAllSubMeshesAsMiscDirty() {
+           this._markAllSubMeshesAsDirty(CC._MiscDirtyCallBack)
+         }
+         _markAllSubMeshesAsPrePassDirty() {
+ ... (24 more added lines; see GitHub link above)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4215-L4236` → after: `L1118-L1141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1118-L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1118-L1141) · [Before (L4215-L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4215-L4236)

```diff
-         };
-         return this.compiling++, this.device.createRenderPipelineAsync(Bq).then((qq => {
-           this.compiling--, this.pipelines.set(mq, qq)
-         }), (qq => {
-           this.compiling--, this.reportFailure(Aq, mq, qq)
-         })), null
-       }
-       forEachSunShadowCaster(qq) {
-         const Eq = this.caster,
-           gq = (gq, Yq, lq) => {
-             const Oq = gq.unit && function(qq) {
-               const Eq = qq.material.model;
-               return null !== Eq && (Eq.lifeform || Eq.item) && Eq.castsSunShadow && "triangle-list" === qq.state.topology
-             }(gq) ? lO(gq.unit) : null;
-             if (!Oq) return;
-             const mq = gq.unit.owner;
- ... (6 more removed lines; see GitHub link above)
+           if (!0 !== ZC)
+             if (this.meshMap)
+               for (const wC in this.meshMap) {
+                 const CC = this.meshMap[wC];
+                 this._disposeMeshResources(CC)
+               } else {
+                 const CC = QC.meshes;
+                 for (const zC of CC) this._disposeMeshResources(zC)
+               }
+           this._uniformBuffer.dispose(), this._drawWrapper.effect && (this._storeEffectOnSubMeshes || this._drawWrapper.effect.dispose(), this._drawWrapper.effect = null), this.metadata = null, this.Tm.notifyObservers(this), this.Tm.clear(), this._onBindObservable && this._onBind … [truncated]
+         }
+         _disposeMeshResources(CC) {
+           if (!CC) return;
+           const zC = CC.geometry,
+             ZC = CC._internalAbstractMeshDataInfo._materialForRenderPass;
+           if (this._storeEffectOnSubMeshes) {
+ ... (8 more added lines; see GitHub link above)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4238-L4241` → after: `L1143-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1143-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1143-L1171) · [Before (L4238-L4241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4238-L4241)

```diff
-               case "instanced": {
-                 const qq = this.resources.batchUploads.get(mq);
-                 if (!qq || qq.frame !== this.frame || !this.writeBatchCasters(qq)) return;
-                 break
+           } else zC?._releaseVertexArrayObject(this._drawWrapper.effect);
+           CC.material !== this || CC.LQC || (CC.material = null)
+         }
+         serialize() {
+           const CC = MC.d.Serialize(this);
+           return CC.stencil = this.stencil.serialize(), CC.uniqueId = this.uniqueId, this._serializePlugins(CC), CC
+         }
+         _serializePlugins(CC) {
+           if (CC.plugins = {}, this.pluginManager)
+             for (const zC of this.pluginManager._plugins) zC.doNotSerialize || (CC.plugins[zC.getClassName()] = zC.serialize())
+         }
+         static ParseAlphaMode(CC, zC) {
+           void 0 !== CC._alphaMode ? zC._alphaMode = Array.isArray(CC._alphaMode) ? [...CC._alphaMode] : [CC._alphaMode] : void 0 !== CC.alphaMode ? zC._alphaMode = Array.isArray(CC.alphaMode) ? [...CC.alphaMode] : [CC.alphaMode] : zC._alphaMode = [2]
+         }
+         static Parse(zC, ZC, QC) {
+           if (zC.customType) {
+ ... (13 more added lines; see GitHub link above)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4244-L4317` → after: `L1175-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1175-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1175-L1227) · [Before (L4244-L4317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4244-L4317)

```diff
-             qq(Eq)
-           };
-         for (const Yq of this.lists.opaqueDraws) gq(Yq, this.meshSlots.data, Yq.slotOffset / 4);
-         this.thinBundle.forEachDrawn(gq)
-       }
-       writeBatchCasters(qq) {
-         const {
-           caster: Eq
-         } = this, gq = qq.packedMatrices, Yq = qq.count;
-         Eq.instances = gq, Eq.instanceCount = Yq;
-         let lq = -1;
-         for (let Oq = 0; Oq < Yq; Oq++) {
-           const Eq = bm(qq.packedRowMesh(Oq));
-           Eq && lq < 0 ? (this.casterWorlds.length < 16 * Yq && (this.casterWorlds = new Float32Array(gq.length)), this.casterWorlds.set(gq.subarray(0, 16 * Oq)), lq = Oq) : !Eq && lq >= 0 && (this.casterWorlds.set(gq.subarray(16 * Oq, 16 * Oq + 16), 16 * lq), lq++)
-         }
-         return lq >= 0 && (Eq.instances = this.casterWorlds, Eq.instanceCount = lq), Eq.instanceCount > 0
- ... (58 more removed lines; see GitHub link above)
+         }
+       }, (() => {
+         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)("alpha")], IC = [(0, wC.M)("backFaceCulling")], iC = [(0, wC.M)("textureRepetitionMode")], vC = [(0, wC.M)("textureR … [truncated]
+           kind: "getter",
+           name: "pointsCloud",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "pointsCloud" in CC,
+             get: CC => CC.pointsCloud
+           },
+           metadata: bC
+         }, null, jC), (0, QC.j)(CC, null, TC, {
+           kind: "getter",
+           name: "fillMode",
+ ... (37 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4319-L4342` → after: `L1229-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1229-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1229-L1563) · [Before (L4319-L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4319-L4342)

```diff
-           }, {
-             width: gq,
-             height: gq
-           });
-           return lq
-         }(Eq, gq, Oq, 1 === Yq ? "r8unorm" : "rgba8unorm")
-       } finally {
-         Sm(gq)
-       }
-     }
- 
-     function Sm(qq) {
-       for (const Eq of null !== qq && void 0 !== qq ? qq : []) null === Eq || void 0 === Eq || Eq.close()
-     }
-     async function pm(qq) {
-       const Eq = [],
- ... (8 more removed lines; see GitHub link above)
+           },
+           metadata: bC
+         }, yC, LC), (0, QC.j)(null, null, ZC, {
+           kind: "field",
+           name: "uniqueId",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "uniqueId" in CC,
+             get: CC => CC.uniqueId,
+             set: (CC, zC) => {
+               CC.uniqueId = zC
+             }
+           },
+           metadata: bC
+         }, UC, BC), (0, QC.j)(null, null, PC, {
+ ... (319 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4344-L4390` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1565-L1566) · [Before (L4344-L4390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4344-L4390)

```diff
-       constructor(qq) {
-         this.WB = qq, this.starts = [], this.lengths = [], this.used = 0, qq > 0 && (this.starts.push(0), this.lengths.push(qq))
-       }
-       allocate(qq) {
-         const {
-           starts: Eq,
-           lengths: gq
-         } = this;
-         for (let Yq = 0; Yq < Eq.length; Yq++) {
-           if (gq[Yq] < qq) continue;
-           const lq = Eq[Yq];
-           return gq[Yq] === qq ? (Eq.splice(Yq, 1), gq.splice(Yq, 1)) : (Eq[Yq] += qq, gq[Yq] -= qq), this.used += qq, lq
-         }
-         return -1
-       }
-       free(qq, Eq) {
- ... (31 more removed lines; see GitHub link above)
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4392-L4400` → after: `L1568-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1568-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1568-L1569) · [Before (L4392-L4400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4392-L4400)

```diff
-     }
-     const Lm = 256;
-     class Jm {
-       constructor(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
-           Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
-         this.device = qq, this.onReplaced = Eq, this.mergeGap = gq, this.gpu = null, this.bytes = void 0, this.zV = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
-         const lq = Math.max(Lm, Math.ceil(Yq / Lm) * Lm);
-         this.bytes = new Uint8Array(lq), this.zV = new Gm(lq / Lm)
+       static set DiffuseTextureEnabled(CC) {
+         this._DiffuseTextureEnabled !== CC && (this._DiffuseTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4402-L4403` → after: `L1571-L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1571-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1571-L1572) · [Before (L4402-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4402-L4403)

```diff
-       get buffer() {
-         return this.gpu ??= this.createGpu(this.bytes.byteLength)
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4405-L4406` → after: `L1574-L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1574-L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1574-L1575) · [Before (L4405-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4405-L4406)

```diff
-       static slotBytes(qq) {
-         return Math.max(1, Math.ceil(qq / Lm)) * Lm
+       static set BaseWeightTextureEnabled(CC) {
+         this._BaseWeightTextureEnabled !== CC && (this._BaseWeightTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4408-L4461` → after: `L1577-L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1577-L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1577-L1578) · [Before (L4408-L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4408-L4461)

```diff
-       allocate(qq) {
-         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qq;
-         const Yq = Jm.slotBytes(qq),
-           lq = Yq / Lm;
-         let Oq = this.zV.allocate(lq);
-         Oq < 0 && (this.grow(this.zV.WB + lq), Oq = this.zV.allocate(lq));
-         const mq = Oq * Lm;
-         return this.growTo(mq + Math.max(gq, Yq)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, mq, mq + Yq), Eq && this.bytes.set(new Uint8Array(Eq.buffer, Eq.byteOffset, Math.min(Eq.byteLength, Yq)), mq), this.markDirty(mq, mq + Yq), mq
-       }
-       growTo(qq) {
-         const Eq = Math.ceil(qq / Lm);
-         Eq > this.zV.WB && this.grow(Eq)
-       }
-       free(qq, Eq) {
-         this.freed.push(qq, Eq)
- ... (38 more removed lines; see GitHub link above)
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4463-L4492` → after: `L1580-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1580-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1580-L1581) · [Before (L4463-L4492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4463-L4492)

```diff
-       Kr() {
-         this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
-         const qq = this.freed;
-         for (let Eq = 0; Eq < qq.length; Eq += 2) this.zV.free(qq[Eq] / Lm, qq[Eq + 1] / Lm);
-         qq.length = 0
-       }
-       send(qq, Eq) {
-         this.device.queue.writeBuffer(this.gpu, qq, this.bytes.buffer, qq, Eq - qq);
-         for (const gq of this.replaced) {
-           const Yq = Math.min(Eq, gq.size);
-           Yq > qq && this.device.queue.writeBuffer(gq, qq, this.bytes.buffer, qq, Yq - qq)
-         }
-       }
-       markDirty(qq, Eq) {
-         qq &= -4, Eq = Eq + 3 & -4, this.holding ? (this.dirtyStarts.push(qq), this.dirtyEnds.push(Eq)) : this.send(qq, Eq)
-       }
- ... (14 more removed lines; see GitHub link above)
+       static set BaseDiffuseRoughnessTextureEnabled(CC) {
+         this._BaseDiffuseRoughnessTextureEnabled !== CC && (this._BaseDiffuseRoughnessTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4494-L4563` → after: `L1583-L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1583-L1584) · [Before (L4494-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4494-L4563)

```diff
-     }
- 
-     function km(qq) {
-       return Array.isArray(qq) ? new Float32Array(qq) : qq
-     }
- 
-     function Rm(qq, Eq, gq, Yq, lq) {
-       const Oq = il(lq),
-         mq = Math.min(lq, Yq.byteLength);
-       if (Oq === mq && Yq.byteOffset % 4 === 0) return void qq.queue.writeBuffer(Eq, gq, Yq.buffer, Yq.byteOffset, Oq);
-       const xq = new Uint8Array(Oq);
-       xq.set(new Uint8Array(Yq.buffer, Yq.byteOffset, mq)), qq.queue.writeBuffer(Eq, gq, xq)
-     }
- 
-     function Um(qq, Eq, gq) {
-       const Yq = "linear",
- ... (54 more removed lines; see GitHub link above)
+       static get DetailTextureEnabled() {
+         return this._DetailTextureEnabled
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4565-L4602` → after: `L1586-L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1586-L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1586-L1587) · [Before (L4565-L4602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4565-L4602)

```diff
-     }
- 
-     function Fm(qq) {
-       return 0 === qq ? "clamp-to-edge" : 2 === qq ? "mirror-repeat" : "repeat"
-     }
-     class sm {
-       constructor(qq, Eq) {
-         let {
-           vertexArena: gq = !0
-         } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
-         this.engine = qq, this.device = Eq, this.buffers = new WeakMap, this.U_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, … [truncated]
-           var Eq;
-           null === (Eq = this.onDestroy) || void 0 === Eq || Eq.call(this, qq), this.gpuBuffersVersion++
-         })) : null
-       }
-       flushUploads() {
- ... (22 more removed lines; see GitHub link above)
+       static set DetailTextureEnabled(CC) {
+         this._DetailTextureEnabled !== CC && (this._DetailTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4604-L4639` → after: `L1589-L1590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1589-L1590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1589-L1590) · [Before (L4604-L4639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4604-L4639)

```diff
-       vertexBufferUpdated(qq, Eq) {
-         let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
-           Yq = arguments.length > 3 ? arguments[3] : void 0;
-         const lq = this.buffers.get(qq);
-         if (!lq) return;
-         const Oq = km(Eq),
-           mq = void 0 === Yq ? Oq.byteLength : Math.min(Yq, Oq.byteLength);
-         this.update(lq, Oq, gq, mq)
-       }
-       vertexBufferFloatsUpdated(qq, Eq, gq, Yq) {
-         const lq = this.buffers.get(qq);
-         if (!lq) return;
-         const Oq = gq * Float32Array.BYTES_PER_ELEMENT,
-           mq = (Yq - gq) * Float32Array.BYTES_PER_ELEMENT;
-         lq.slot >= 0 && mq > 0 && Oq + mq <= lq.size ? this.writeSlot(lq, Oq, Eq, Eq.byteOffset + Oq, mq, !1) : lq.gpu && mq > 0 && Oq + mq <= lq.gpu.size ? this.device.queue.writeBuffer(lq.gpu, Oq, Eq.buffer, Eq.byteOffset + Oq, mq) : this.update(lq, Eq.subarray(gq, Yq), Oq, mq)
-       }
- ... (20 more removed lines; see GitHub link above)
+       static get DecalMapEnabled() {
+         return this._DecalMapEnabled
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4641-L4668` → after: `L1592-L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1592-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1592-L1593) · [Before (L4641-L4668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4641-L4668)

```diff
-       bufferDeleted(qq) {
-         const Eq = this.buffers.get(qq);
-         null !== Eq && void 0 !== Eq && Eq.gpu ? (this.destroyBuffer(Eq.gpu), this.gpuBuffersVersion++) : Eq && Eq.slot >= 0 && (this.arena.free(Eq.slot, Eq.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(qq)
-       }
-       update(qq, Eq, gq, Yq) {
-         if (qq.slot >= 0) this.updateSlot(qq, Eq, gq, Yq);
-         else if (qq.gpu) {
-           if (gq + il(Yq) > qq.gpu.size) {
-             const Eq = this.device.createBuffer({
-                 label: qq.label,
-                 size: il(Math.max(2 * qq.gpu.size, gq + Yq)),
-                 usage: qq.usage | GPUBufferUsage.COPY_SRC
-               }),
-               lq = this.device.createCommandEncoder();
-             lq.copyBufferToBuffer(qq.gpu, 0, Eq, 0, qq.gpu.size), this.device.queue.submit([lq.finish()]), this.destroyBuffer(qq.gpu), this.gpuBuffersVersion++, qq.gpu = Eq
-           }
- ... (12 more removed lines; see GitHub link above)
+       static set DecalMapEnabled(CC) {
+         this._DecalMapEnabled !== CC && (this._DecalMapEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4670-L4672` → after: `L1595-L1596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1595-L1596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1595-L1596) · [Before (L4670-L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4670-L4672)

```diff
-       updateSlot(qq, Eq, gq, Yq) {
-         const lq = this.arena;
-         gq + il(Yq) > qq.size && (qq.size = il(Math.max(2 * qq.size, gq + Yq)), lq.growTo(qq.slot + qq.size), this.gpuBuffersVersion++), 0 === Yq ? this.writeSlot(qq, gq, wm, 0, 4, !1) : this.writeSlot(qq, gq, Eq, Eq.byteOffset, Yq, !0)
+       static get AmbientTextureEnabled() {
+         return this._AmbientTextureEnabled
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4674-L4676` → after: `L1598-L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1598-L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1598-L1599) · [Before (L4674-L4676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4674-L4676)

```diff
-       writeSlot(qq, Eq, gq, Yq, lq, Oq) {
-         const mq = Eq + (Oq ? il(lq) : lq);
-         mq > qq.slotBytes && this.moveSlot(qq, mq), this.arena.write(qq.slot + Eq, gq, Yq, lq, Oq)
+       static set AmbientTextureEnabled(CC) {
+         this._AmbientTextureEnabled !== CC && (this._AmbientTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4678-L4682` → after: `L1601-L1602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1601-L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1601-L1602) · [Before (L4678-L4682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4678-L4682)

```diff
-       moveSlot(qq, Eq) {
-         const gq = this.arena,
-           Yq = Jm.slotBytes(Math.max(Eq, Math.min(2 * qq.slotBytes, qq.size))),
-           lq = gq.allocate(Yq, null, qq.size);
-         gq.move(qq.slot, lq, qq.slotBytes), gq.free(qq.slot, qq.slotBytes), qq.slot = lq, qq.slotBytes = Yq, this.gpuBuffersVersion++
+       static get OpacityTextureEnabled() {
+         return this._OpacityTextureEnabled
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4684-L4688` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1604-L1605) · [Before (L4684-L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4684-L4688)

```diff
-       cover(qq, Eq) {
-         const gq = this.buffers.get(qq);
-         if (!gq || gq.slot < 0) return !1;
-         const Yq = Math.min(Eq, gq.size);
-         return !(Yq <= gq.slotBytes) && (this.moveSlot(gq, Yq), !0)
+       static set OpacityTextureEnabled(CC) {
+         this._OpacityTextureEnabled !== CC && (this._OpacityTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4690-L4692` → after: `L1607-L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1607-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1607-L1608) · [Before (L4690-L4692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4690-L4692)

```diff
-       destroyBuffer(qq) {
-         var Eq;
-         null === (Eq = this.onDestroy) || void 0 === Eq || Eq.call(this, qq), qq.destroy()
+       static get ReflectionTextureEnabled() {
+         return this._ReflectionTextureEnabled
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4694-L4748` → after: `L1610-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1610-L1611) · [Before (L4694-L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4694-L4748)

```diff
-       gpuBuffer(qq) {
-         const Eq = this.buffers.get(qq);
-         if (!Eq) return null;
-         if (Eq.slot >= 0) return this.arena.buffer;
-         if (Eq.arena && Eq.pending) {
-           const qq = Eq.pending,
-             gq = this.arena;
-           return Eq.size = il(qq.byteLength), Eq.slotBytes = Jm.slotBytes(function(qq) {
-             const Eq = new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength);
-             let gq = Eq.length;
-             if (qq.byteOffset % 4 === 0) {
-               for (; gq % 4 !== 0 && 0 === Eq[gq - 1];) gq--;
-               if (gq % 4 === 0) {
-                 const Eq = new Uint32Array(qq.buffer, qq.byteOffset, gq / 4);
-                 let Yq = Eq.length;
-                 for (; Yq > 0 && 0 === Eq[Yq - 1];) Yq--;
- ... (39 more removed lines; see GitHub link above)
+       static set ReflectionTextureEnabled(CC) {
+         this._ReflectionTextureEnabled !== CC && (this._ReflectionTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4750-L4751` → after: `L1613-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1613-L1614) · [Before (L4750-L4751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4750-L4751)

```diff
-       modelIndex(qq) {
-         return qq.indexData && this.modelKey(this.geometrySlot(qq), qq.indexData, !0)
+       static get EmissiveTextureEnabled() {
+         return this._EmissiveTextureEnabled
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4753-L4771` → after: `L1616-L1617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1616-L1617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1616-L1617) · [Before (L4753-L4771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4753-L4771)

```diff
-       geometrySlot(qq) {
-         let Eq = qq.gpu[nq.f.lite];
-         if (!Eq) {
-           const gq = new Map,
-             Yq = () => {
-               for (const qq of gq.values()) this.bufferDeleted(qq)
-             },
-             lq = qq => {
-               const Eq = gq.get(qq);
-               Eq && this.vertexBufferUpdated(Eq, qq)
-             };
-           Eq = {
-             keys: gq,
-             inputs: new Map,
-             release: Yq,
-             updated: lq
- ... (3 more removed lines; see GitHub link above)
+       static set EmissiveTextureEnabled(CC) {
+         this._EmissiveTextureEnabled !== CC && (this._EmissiveTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4773-L4787` → after: `L1619-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1619-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1619-L1620) · [Before (L4773-L4787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4773-L4787)

```diff
-       modelKey(qq, Eq, gq) {
-         let Yq = qq.keys.get(Eq);
-         if (!Yq) {
-           if (gq) {
-             const qq = {
-               WB: 0,
-               is32Bits: !1
-             };
-             this.indexBufferCreated(qq, Eq, "model-indices"), Yq = qq
-           } else Yq = {
-             WB: 0
-           }, this.vertexBufferCreated(Yq, Eq, !1, "model-vertices");
-           qq.keys.set(Eq, Yq)
-         }
-         return Yq
+       static get SpecularTextureEnabled() {
+         return this._SpecularTextureEnabled
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4789-L4852` → after: `L1622-L1623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1622-L1623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1622-L1623) · [Before (L4789-L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4789-L4852)

```diff
-       indexFormat(qq) {
-         return qq.is32Bits ? "uint32" : "uint16"
-       }
-       get texturesLoading() {
-         return this.pending
-       }
-       releaseSlot(qq, Eq) {
-         --qq.refs > 0 || (this.releaseTexture(qq), Sm(qq.images), null !== Eq && this.textures.delete(Eq))
-       }
-       load(qq, Eq) {
-         const gq = Eq.decoded = async function(qq) {
-           if ("cube" === qq.kind) return async function(qq) {
-             if (6 !== qq.length) throw new Error(`${qq.length} files where six faces were expected`);
-             const Eq = await pm(qq.map((qq => Sl(qq)))),
-               gq = Eq[0].width;
-             return pm(Eq.map((async qq => {
- ... (48 more removed lines; see GitHub link above)
+       static set SpecularTextureEnabled(CC) {
+         this._SpecularTextureEnabled !== CC && (this._SpecularTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4854-L4941` → after: `L1625-L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1625-L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1625-L1626) · [Before (L4854-L4941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4854-L4941)

```diff
-       boundTexture(qq) {
-         const Eq = this.atlasBindings.get(qq);
-         if (Eq) return Eq;
-         const gq = qq;
-         if (gq.released) return null;
-         const Yq = this.textureSlot(gq, !0),
-           {
-             state: lq
-           } = Yq;
-         if (!lq.view && (lq.wanted = !0, lq.loading || lq.failed || this.upload(gq, lq), !lq.view)) return null;
-         const Oq = this.chosenSampler(gq, Yq),
-           mq = Yq.bound;
-         return mq && mq.view === lq.view && mq.sampler === Oq ? mq : (Yq.bound = {
-           view: lq.view,
-           sampler: Oq
-         }, Yq.bound)
- ... (72 more removed lines; see GitHub link above)
+       static get BumpTextureEnabled() {
+         return this._BumpTextureEnabled
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4943-L4954` → after: `L1628-L1629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1628-L1629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1628-L1629) · [Before (L4943-L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4943-L4954)

```diff
-       samplerFor(qq, Eq, gq, Yq, lq) {
-         const Oq = `${qq}|${Eq}|${gq}|${Yq}|${lq}`;
-         let mq = this.samplers.get(Oq);
-         if (!mq) {
-           const xq = {
-             ...Um(qq, Eq, gq),
-             addressModeU: Fm(Yq),
-             addressModeV: Fm(lq)
-           };
-           mq = (0, im.e)(this.engine, xq), this.samplers.set(Oq, mq)
-         }
-         return mq
+       static set BumpTextureEnabled(CC) {
+         this._BumpTextureEnabled !== CC && (this._BumpTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4956-L5012` → after: `L1631-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1631-L1632) · [Before (L4956-L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L4956-L5012)

```diff
-       upload(qq, Eq) {
-         const {
-           source: gq,
-           sampler: Yq
-         } = qq;
-         Eq.hasMips = !Yq.noMipmap, "canvas" === gq.kind ? this.createDynamic(gq, Eq) : "cube" === gq.kind ? this.uploadCube(Eq, gq.luminance) : this.uploadImage(Eq, !0 === Yq.invertY, gq.url)
-       }
-       uploadImage(qq, Eq, gq) {
-         const [Yq] = qq.images;
-         qq.images = null;
-         const lq = (0, Zm.b)(this.engine, Yq, {
-           mipMaps: qq.hasMips,
-           invertY: Eq,
-           srgb: !1
-         }).then((Eq => {
-           Yq.close(), 0 !== qq.refs ? (qq.view = Eq.view, qq.destroy = Eq.texture.destroy.bind(Eq.texture)) : Eq.texture.destroy()
- ... (41 more removed lines; see GitHub link above)
+       static get LightmapTextureEnabled() {
+         return this._LightmapTextureEnabled
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5014-L5055` → after: `L1634-L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1634-L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1634-L1635) · [Before (L5014-L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5014-L5055)

```diff
-     }
- 
-     function Xm(qq) {
-       return "cube" === qq.kind ? qq.rootUrl : "canvas" === qq.kind ? "canvas" : qq.url
-     }
-     const wm = new Uint8Array(4);
- 
-     function Km(qq) {
-       const Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
-       qq._colorAttachment.storeOp = qq._targetSignature._sampleCount > 1 ? Eq : "store";
-       const gq = qq._renderPassDescriptor.depthStencilAttachment;
-       gq && (gq.depthStoreOp = Eq, gq.stencilStoreOp && (gq.stencilStoreOp = Eq))
-     }
-     var Cm = gq(37767),
-       Im = gq(37806),
-       em = gq(37472),
- ... (26 more removed lines; see GitHub link above)
+       static set LightmapTextureEnabled(CC) {
+         this._LightmapTextureEnabled !== CC && (this._LightmapTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5057-L5101` → after: `L1637-L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1637-L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1637-L1638) · [Before (L5057-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5057-L5101)

```diff
-     }
- 
-     function Ax(qq, Eq) {
-       const gq = Eq.clearColor;
-       qq.clearColour[0] = gq.r, qq.clearColour[1] = gq.g, qq.clearColour[2] = gq.b, qq.clearColour[3] = gq.a;
-       const Yq = Eq.ambientColor;
-       qq.ambientColour[0] = Yq.r, qq.ambientColour[1] = Yq.g, qq.ambientColour[2] = Yq.b, qq.animationRatio = Eq.animationRatio, qq.frameId = Eq.frameId, qq.version++
-     }
- 
-     function cx(qq) {
-       const Eq = qq.model.view;
-       return Eq.animTick = (0, Im.i)(), Eq.timeMs = performance.now(), Ax(Eq, qq.PV), qq.model.update(Eq.frameId), Eq
-     }
- 
-     function ux(qq) {
-       const Eq = qq.PV,
- ... (29 more removed lines; see GitHub link above)
+       static get RefractionTextureEnabled() {
+         return this._RefractionTextureEnabled
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5103-L5107` → after: `L1640-L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1640-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1640-L1653) · [Before (L5103-L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5103-L5107)

```diff
-     }
-     var Vx = gq(2790);
-     class dx {
-       constructor(qq) {
-         this.units = qq, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
+       static set RefractionTextureEnabled(CC) {
+         this._RefractionTextureEnabled !== CC && (this._RefractionTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get ColorGradingTextureEnabled() {
+         return this._ColorGradingTextureEnabled
+       }
+       static set ColorGradingTextureEnabled(CC) {
+         this._ColorGradingTextureEnabled !== CC && (this._ColorGradingTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get FresnelEnabled() {
+         return this._FresnelEnabled
+       }
+       static set FresnelEnabled(CC) {
+         this._FresnelEnabled !== CC && (this._FresnelEnabled = CC, QC.b.MarkAllMaterialsAsDirty(4))
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5109-L5110` → after: `L1655-L1656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1655-L1656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1655-L1656) · [Before (L5109-L5110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5109-L5110)

```diff
-       get ready() {
-         return this.bufferReady && (!this.twin || this.twinReady)
+       static get ClearCoatTextureEnabled() {
+         return this._ClearCoatTextureEnabled
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5112-L5114` → after: `L1658-L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1658-L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1658-L1659) · [Before (L5112-L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5112-L5114)

```diff
-       destroy() {
-         var qq;
-         this.buffer.destroy(), null === (qq = this.twin) || void 0 === qq || qq.destroy()
+       static set ClearCoatTextureEnabled(CC) {
+         this._ClearCoatTextureEnabled !== CC && (this._ClearCoatTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5116-L5121` → after: `L1661-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1661-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1661-L1662) · [Before (L5116-L5121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5116-L5121)

```diff
-     }
-     class jx {
-       constructor(qq, Eq) {
-         this.arena = qq, this.zV = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.zV = new Gm(Eq);
-         const gq = new dx(Eq);
-         gq.buffer = this.createBuffer(gq, !1), this.backings.push(gq), this.refresh()
+       static get ClearCoatBumpTextureEnabled() {
+         return this._ClearCoatBumpTextureEnabled
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5123-L5124` → after: `L1664-L1665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1664-L1665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1664-L1665) · [Before (L5123-L5124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5123-L5124)

```diff
-       get WB() {
-         return this.zV.WB
+       static set ClearCoatBumpTextureEnabled(CC) {
+         this._ClearCoatBumpTextureEnabled !== CC && (this._ClearCoatBumpTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5126-L5127` → after: `L1667-L1668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1667-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1667-L1668) · [Before (L5126-L5127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5126-L5127)

```diff
-       get canGrow() {
-         return this.growable && !this.dropped
+       static get ClearCoatTintTextureEnabled() {
+         return this._ClearCoatTintTextureEnabled
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5129-L5130` → after: `L1670-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1670-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1670-L1671) · [Before (L5129-L5130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5129-L5130)

```diff
-       get live() {
-         return !this.dropped
+       static set ClearCoatTintTextureEnabled(CC) {
+         this._ClearCoatTintTextureEnabled !== CC && (this._ClearCoatTintTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5132-L5133` → after: `L1673-L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1673-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1673-L1674) · [Before (L5132-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5132-L5133)

```diff
-       get hasTwin() {
-         return null !== this.backings[this.backings.length - 1].twin
+       static get SheenTextureEnabled() {
+         return this._SheenTextureEnabled
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5135-L5138` → after: `L1676-L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1676-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1676-L1677) · [Before (L5135-L5138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5135-L5138)

```diff
-       get allocatedBytes() {
-         let qq = 0;
-         for (const Eq of this.backings) qq += Eq.units * (this.arena.unitBytes + (Eq.twin ? this.arena.twinUnitBytes : 0));
-         return qq
+       static set SheenTextureEnabled(CC) {
+         this._SheenTextureEnabled !== CC && (this._SheenTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5140-L5218` → after: `L1679-L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1679-L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1679-L1680) · [Before (L5140-L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5140-L5218)

```diff
-       holds(qq) {
-         return qq.start + qq.length <= this.usable
-       }
-       lost(qq) {
-         return this.dropped || qq.start + qq.length > this.WB
-       }
-       write(qq, Eq) {
-         const {
-           device: gq,
-           unitBytes: Yq
-         } = this.arena;
-         for (const lq of this.backings) {
-           const Oq = (lq.units - qq.start) * Yq;
-           Oq > 0 && gq.queue.writeBuffer(lq.buffer, qq.start * Yq, Eq, 0, Math.min(Eq.byteLength, Oq))
-         }
-       }
- ... (63 more removed lines; see GitHub link above)
+       static get AnisotropicTextureEnabled() {
+         return this._AnisotropicTextureEnabled
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5220-L5227` → after: `L1682-L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1682-L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1682-L1683) · [Before (L5220-L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5220-L5227)

```diff
-       promote() {
-         const {
-           backings: qq
-         } = this;
-         let Eq = 0;
-         for (; Eq + 1 < qq.length && qq[Eq].ready && qq[Eq + 1].ready;) Eq++;
-         for (const gq of qq.splice(0, Eq)) gq.destroy();
-         this.refresh()
+       static set AnisotropicTextureEnabled(CC) {
+         this._AnisotropicTextureEnabled !== CC && (this._AnisotropicTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5229-L5231` → after: `L1685-L1686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1685-L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1685-L1686) · [Before (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5229-L5231)

```diff
-       refresh() {
-         const qq = this.backings[0];
-         this.buffer = qq.buffer, this.twin = qq.twinReady ? qq.twin : null, this.usable = !this.dropped && qq.bufferReady ? qq.units : 0
+       static get ThicknessTextureEnabled() {
+         return this._ThicknessTextureEnabled
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5233-L5330` → after: `L1688-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1688-L1689) · [Before (L5233-L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5233-L5330)

```diff
-     }
-     class Hx {
-       constructor(qq, Eq, gq, Yq) {
-         let {
-           verticesPerUnit: lq = 1,
-           twinUsage: Oq = GPUBufferUsage.VERTEX
-         } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-         if (this.device = qq, this.unitBytes = Eq, this.usage = gq, this.label = Yq, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
-         this.verticesPerUnit = lq, this.twinUsage = Oq, this.twinValueBytes = lq > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * lq
-       }
-       twinLight(qq, Eq) {
-         if (4 === this.twinValueBytes) return this.widened.length < Eq && (this.widened = new Float32Array(Math.max(Eq, 2 * this.widened.length))), this.widened.set(qq.subarray(0, Eq)), {
-           light: this.widened,
-           count: Eq
-         };
-         const gq = Eq % this.verticesPerUnit;
- ... (82 more removed lines; see GitHub link above)
+       static set ThicknessTextureEnabled(CC) {
+         this._ThicknessTextureEnabled !== CC && (this._ThicknessTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5332-L5417` → after: `L1691-L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1691-L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1691-L1692) · [Before (L5332-L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5332-L5417)

```diff
-     }
-     const ox = 16383;
- 
-     function Px(qq, Eq, gq, Yq, lq) {
-       let Oq = 0;
-       for (let mq = gq; mq < Yq; mq += ox) qq.drawIndexed(6 * Math.min(ox, Yq - mq), 1, 0, Eq + 4 * mq, lq), Oq++;
-       return Oq
-     }
-     class Qx {
-       constructor(qq, Eq) {
-         this.recordsGroup = Eq, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
-         const gq = rE.e.strideWithoutAtlas;
-         this.vertexArena = new Hx(qq, gq, GPUBufferUsage.VERTEX, `terrain-vertices-${gq}`), this.quadArena = new Hx(qq, Wx.e, GPUBufferUsage.STORAGE, "terrain-quads", {
-           verticesPerUnit: 4,
-           twinUsage: GPUBufferUsage.STORAGE
-         });
- ... (70 more removed lines; see GitHub link above)
+       static get RefractionIntensityTextureEnabled() {
+         return this._ThicknessTextureEnabled
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5419-L5420` → after: `L1694-L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1694-L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1694-L1695) · [Before (L5419-L5420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5419-L5420)

```diff
-       forgetBound() {
-         this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
+       static set RefractionIntensityTextureEnabled(CC) {
+         this._RefractionIntensityTextureEnabled !== CC && (this._RefractionIntensityTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5422-L5494` → after: `L1697-L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1697-L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1697-L1698) · [Before (L5422-L5494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5422-L5494)

```diff
-     }
-     class yx {
-       constructor(qq, Eq, gq, Yq) {
-         this.device = qq, this.splitBefore = Eq, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = qq.createBu … [truncated]
-           label: "scene-depth-unproject",
-           size: 8,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         });
-         const lq = qq.createShaderModule({
-           label: "scene-depth-copy",
-           code: (Oq = gq._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Oq?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
-         });
-         var Oq;
-         qq.createRenderPipelineAsync({
-           label: "scene-depth-copy",
-           layout: "auto",
- ... (57 more removed lines; see GitHub link above)
+       static get TranslucencyIntensityTextureEnabled() {
+         return this._TranslucencyIntensityTextureEnabled
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5496-L5499` → after: `L1700-L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1700-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1700-L1701) · [Before (L5496-L5499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5496-L5499)

```diff
-       splitIndex(qq) {
-         for (let Eq = 0; Eq < qq.length; Eq++)
-           if (qq[Eq].renderable === this.splitBefore) return Eq;
-         return -1
+       static set TranslucencyIntensityTextureEnabled(CC) {
+         this._TranslucencyIntensityTextureEnabled !== CC && (this._TranslucencyIntensityTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5501-L5509` → after: `L1703-L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1703-L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1703-L1704) · [Before (L5501-L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5501-L5509)

```diff
-       drawList(qq, Eq, gq, Yq, lq) {
-         let Oq = null,
-           mq = 0;
-         for (let xq = Yq; xq < lq; xq++) {
-           const Yq = gq[xq],
-             lq = Yq.renderable.mesh;
-           lq && !1 === lq.visible || (Yq.pipeline !== Oq && (qq.setPipeline(Yq.pipeline), Oq = Yq.pipeline), mq += Yq.draw(qq, Eq))
-         }
-         return mq
+       static get TranslucencyColorTextureEnabled() {
+         return this._TranslucencyColorTextureEnabled
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5511-L5558` → after: `L1706-L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1706-L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1706-L1707) · [Before (L5511-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5511-L5558)

```diff
-       copyDepth(qq, Eq) {
-         var gq, Yq;
-         const lq = (null !== (gq = Eq._config.depth) && void 0 !== gq ? gq : Eq._config.rt)._depthTexture,
-           Oq = (null === (Yq = this.copy) || void 0 === Yq ? void 0 : Yq.source) === lq ? this.copy : this.remakeCopy(lq),
-           mq = qq.beginRenderPass(Oq.pass);
-         mq.setPipeline(this.pipeline), mq.setBindGroup(0, Oq.bindGroup), mq.draw(3), mq.end()
-       }
-       remakeCopy(qq) {
-         var Eq, gq;
-         this.retired = null !== (Eq = null === (gq = this.copy) || void 0 === gq ? void 0 : gq.texture) && void 0 !== Eq ? Eq : null;
-         const Yq = this.device.createTexture({
-             label: "scene-depth",
-             size: [qq.width, qq.height],
-             format: "r32float",
-             usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
-           }),
- ... (32 more removed lines; see GitHub link above)
+       static set TranslucencyColorTextureEnabled(CC) {
+         this._TranslucencyColorTextureEnabled !== CC && (this._TranslucencyColorTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5560-L5776` → after: `L1709-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1709-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1709-L1713) · [Before (L5560-L5776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5560-L5776)

```diff
-     }
-     const tx = "rgba8unorm";
- 
-     function rx(qq) {
-       return qq ? 15 : 1
-     }
-     class vx {
-       constructor(qq, Eq, gq, Yq) {
-         this.device = qq, this.terrain = Yq, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Eq._targetSi … [truncated]
-           label: "sun-shadow-mask-camera",
-           size: 64,
-           usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
-         }), this.layout = qq.createBindGroupLayout({
-           label: "sun-shadow-mask",
-           entries: [{
-             binding: 0,
- ... (201 more removed lines; see GitHub link above)
+       static get IridescenceTextureEnabled() {
+         return this._IridescenceTextureEnabled
+       }
+       static set IridescenceTextureEnabled(CC) {
+         this._IridescenceTextureEnabled !== CC && (this._IridescenceTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5781-L5785` → after: `L1757-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1757-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1757-L1759) · [Before (L5781-L5785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5781-L5785)

```diff
-       let Yq = null,
-         lq = 0;
-       for (const Oq of gq) {
-         const gq = Oq.renderable.mesh;
-         gq && !1 === gq.visible || (Oq.pipeline !== Yq && (qq.setPipeline(Oq.pipeline), Yq = Oq.pipeline), lq += Oq.draw(qq, Eq))
+       if (!CC || CC.LOGARITHMICDEPTH || CC.indexOf && CC.indexOf("LOGARITHMICDEPTH") >= 0) {
+         const CC = ZC.activeCamera;
+         1 === CC.mode && QC.c.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), zC.setFloat("logarithmicDepthConstant", 2 / (Math.log(CC.maxZ + 1) / Math.LN2))
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5789-L5791` → after: `L1762-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1762-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1762-L1765) · [Before (L5789-L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5789-L5791)

```diff
-     const nx = 6e4,
-       bx = {
-         status: "ok"
+     const qC = {
+         r: 0,
+         g: 0,
+         b: 0
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5794-L5801` → after: `L1768-L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1768-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1768-L1773) · [Before (L5794-L5801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5794-L5801)

```diff
-         status: "skipped"
-       };
-     async function Zx(qq, Eq) {
-       const {
-         isCancelled: gq
-       } = qq;
-       if (gq()) return {
-         status: "lE"
+         NUM_MORPH_INFLUENCERS: 0,
+         NORMAL: !1,
+         TANGENT: !1,
+         UV: !1,
+         UV2: !1,
+         COLOR: !1
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5803-L5896` → after: `L1775-L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1775-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1775-L1783) · [Before (L5803-L5896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5803-L5896)

```diff
-       const {
-         target: Yq
-       } = Eq;
-       if (!Yq) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
-         status: "skipped"
-       };
-       const lq = [],
-         Oq = Promise.all(Array.from(new Set(qq.materials), (async gq => {
-           lq.push(await async function(qq, Eq, gq, Yq) {
-             const lq = {
-               lighting: qq.lighting,
-               dirLightCount: Math.min(qq.dirLightCount, 4),
-               pN: qq.runtime
-             };
-             try {
-               const Oq = Eq.material(Yq);
- ... (78 more removed lines; see GitHub link above)
+ 
+     function WC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       ZC && CC.fogEnabled && (!zC || zC.applyFog) && 0 !== CC.fogMode && (ZC.setFloat4("vFogInfos", CC.fogMode, CC.fogStart, CC.fogEnd, CC.fogDensity), QC ? (CC.fogColor.toLinearSpaceToRef(qC, CC.mg().useExactSrgbConversions), ZC.setColor3("vFogColor", qC)) : ZC.setColor3("vFogCo … [truncated]
+     }
+ 
+     function NC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
+       const WC = CC.numMaxInfluencers || CC.numInfluencers;
+       return WC <= 0 ? 0 : (zC.push("#define MORPHTARGETS"), CC.hasPositions && zC.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), CC.hasNormals && zC.push("#define MORPHTARGETTEXTURE_HASNORMALS"), CC.hasTangents && zC.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), CC.hasUVs && … [truncated]
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5898-L5903` → after: `L1785-L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1785-L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1785-L1799) · [Before (L5898-L5903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5898-L5903)

```diff
-     async function fx(qq) {
-       if (!qq) return [];
-       try {
-         return (await qq.getCompilationInfo()).messages.filter((qq => "error" === qq.type))
-       } catch {
-         return []
+ 
+     function MC(CC, zC, ZC) {
+       let bC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const nC = ZC.NUM_MORPH_INFLUENCERS;
+       if (nC > 0 && wC.c.LastCreatedEngine) {
+         const fC = wC.c.LastCreatedEngine.getCaps().maxVertexAttribs,
+           oC = zC.morphTargetManager;
+         if (oC?.isUsingTextureForTargets) return;
+         const qC = oC && oC.supportsPositions && bC,
+           FC = oC && oC.supportsNormals && ZC.NORMAL,
+           WC = oC && oC.supportsTangents && ZC.TANGENT,
+           NC = oC && oC.supportsUVs && ZC.UV1,
+           MC = oC && oC.supportsUV2s && ZC.UV2,
+           gC = oC && oC.supportsColors && ZC.VERTEXCOLOR;
+         for (let ZC = 0; ZC < nC; ZC++) qC && CC.push("position" + ZC), FC && CC.push("normal" + ZC), WC && CC.push("tangent" + ZC), NC && CC.push("uv_" + ZC), MC && CC.push("uv2_" + ZC), gC && CC.push("color" + ZC), CC.length > fC && QC.c.Error("Cannot add more vertex attributes … [truncated]
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5908-L5909` → after: `L1804-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1804-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1804-L1805) · [Before (L5908-L5909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5908-L5909)

```diff
-       var Eq;
-       return null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.message) && void 0 !== Eq ? Eq : String(qq)
+       let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       CC.push("world0"), CC.push("world1"), CC.push("world2"), CC.push("world3"), zC && (CC.push("previousWorld0"), CC.push("previousWorld1"), CC.push("previousWorld2"), CC.push("previousWorld3"))
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5912-L5916` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1808-L1810) · [Before (L5912-L5916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5912-L5916)

```diff
-     function Tx(qq, Eq, gq, Yq) {
-       cY(qq) ? fx(gq).then((qq => {
-         const [gq] = qq;
-         Xl("terrain", Eq, Yq, gq ? `${gq.lineNum}:${gq.linePos} error: ${gq.message}` : null)
-       })) : Xl("terrain", Eq, Yq)
+     function SC(CC, zC) {
+       const ZC = CC.morphTargetManager;
+       CC && ZC && zC.setFloatArray("morphTargetInfluences", ZC.influences)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5923-L5942` → after: `L1813-L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1813-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1813-L1830) · [Before (L5923-L5942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5923-L5942)

```diff
-     function Lx(qq, Eq, gq, Yq, lq) {
-       const Oq = Math.hypot(gq[0], gq[1], gq[2]);
-       if (!(Oq > 0)) return;
-       const mq = [gq[0] / Oq, gq[1] / Oq, gq[2] / Oq],
-         xq = [Math.floor(Eq[0]), Math.floor(Eq[1]), Math.floor(Eq[2])],
-         Aq = [0, 0, 0],
-         cq = [1 / 0, 1 / 0, 1 / 0],
-         uq = [1 / 0, 1 / 0, 1 / 0];
-       for (let Nq = 0; Nq < 3; Nq++) mq[Nq] > 0 ? (Aq[Nq] = 1, cq[Nq] = (xq[Nq] + 1 - Eq[Nq]) / mq[Nq], uq[Nq] = 1 / mq[Nq]) : mq[Nq] < 0 && (Aq[Nq] = -1, cq[Nq] = (xq[Nq] - Eq[Nq]) / mq[Nq], uq[Nq] = -1 / mq[Nq]);
-       const {
-         Oa: Bq
-       } = qq;
-       let Wq = qq.mC(xq[0], xq[1], xq[2]);
-       for (;;) {
-         const Eq = cq[0] < cq[1] ? cq[0] < cq[2] ? 0 : 2 : cq[1] < cq[2] ? 1 : 2;
-         if (cq[Eq] > Yq) return;
- ... (4 more removed lines; see GitHub link above)
+     function pC(CC, zC) {
+       zC.bindToEffect(CC, "Scene")
+     }
+ 
+     function PC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         qC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         FC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         WC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         NC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (CC.texturesEnabled && wC && fC.b.ReflectionTextureEnabled) {
+         if (ZC.x_("reflectionMatrix", wC.getReflectionTextureMatrix()), ZC.updateFloat2("vReflectionInfos", wC.level * CC.iblIntensity, NC), oC && wC.boundingBoxSize) {
+           const CC = wC;
+ ... (2 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5944-L5949` → after: `L1832-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1832-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1832-L1833) · [Before (L5944-L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5944-L5949)

```diff
-           const Yq = [xq[0], xq[1], xq[2]];
-           Yq[Eq] = gq;
-           const Oq = Math.floor(Yq[0] / Bq),
-             mq = Math.floor(Yq[1] / Bq),
-             Aq = Math.floor(Yq[2] / Bq);
-           !qq.isDrawn(Oq, mq, Aq) && qq.hasParts(Oq, mq, Aq) && lq.add(`${Oq},${mq},${Aq}`)
+           const CC = wC.getSize().width;
+           ZC.updateFloat2("vReflectionFilteringInfo", CC, Math.log2(CC))
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5951-L5952` → after: `L1835-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1835-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1835-L1843) · [Before (L5951-L5952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5951-L5952)

```diff
-         if (mq && qq.occluders[Oq]) return;
-         Wq = Oq
+         if (FC && !zC.USEIRRADIANCEMAP) {
+           const CC = wC.sphericalPolynomial;
+           if (zC.USESPHERICALFROMREFLECTIONMAP && CC)
+             if (zC.SPHERICAL_HARMONICS) {
+               const zC = CC.preScaledHarmonics;
+               ZC.updateVector3("vSphericalL00", zC.l00), ZC.updateVector3("vSphericalL1_1", zC.l1_1), ZC.updateVector3("vSphericalL10", zC.l10), ZC.updateVector3("vSphericalL11", zC.l11), ZC.updateVector3("vSphericalL2_2", zC.l2_2), ZC.updateVector3("vSphericalL2_1", zC.l2_1), ZC … [truncated]
+             } else ZC.updateFloat3("vSphericalX", CC.x.x, CC.x.y, CC.x.z), ZC.updateFloat3("vSphericalY", CC.y.x, CC.y.y, CC.y.z), ZC.updateFloat3("vSphericalZ", CC.z.x, CC.z.y, CC.z.z), ZC.updateFloat3("vSphericalXX_ZZ", CC.xx.x - CC.zz.x, CC.xx.y - CC.zz.y, CC.xx.z - CC.zz.z),  … [truncated]
+         } else qC && zC.USEIRRADIANCEMAP && zC.USE_IRRADIANCE_DOMINANT_DIRECTION && wC.irradianceTexture && ZC.updateVector3("vReflectionDominantDirection", wC.irradianceTexture._dominantDirection);
+         nC && ZC.updateFloat3("vReflectionMicrosurfaceInfos", wC.getSize().width, wC.lodGenerationScale, wC.lodGenerationOffset)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5956-L5968` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1848-L1854) · [Before (L5956-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5956-L5968)

```diff
-     function Jx(qq, Eq) {
-       return qq.group - Eq.group || qq.nearest - Eq.nearest
-     }
-     class kx {
-       constructor(qq, Eq) {
-         this.device = qq, this.EQ = Eq, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
-       }
-       createBuffer() {
-         return this.device.createBuffer({
-           label: "terrain-chunk-slots",
-           size: this.data.byteLength,
-           usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
-         })
+     function GC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (QC && fC.b.ReflectionTextureEnabled) {
+         zC.LODBASEDMICROSFURACE ? ZC.setTexture("reflectionSampler", QC) : (ZC.setTexture("reflectionSampler", QC._lodTextureMid || QC), ZC.setTexture("reflectionSamplerLow", QC._lodTextureLow || QC), ZC.setTexture("reflectionSamplerHigh", QC._lodTextureHigh || QC)), zC.USEIRRADI … [truncated]
+         const bC = CC.iblCdfGenerator;
+         wC && bC && ZC.setTexture("icdfSampler", bC.getIcdfTexture())
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5970-L5975` → after: `L1856-L1880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1856-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1856-L1880) · [Before (L5970-L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5970-L5975)

```diff
-       allocate() {
-         var qq;
-         const Eq = null !== (qq = this.free.pop()) && void 0 !== qq ? qq : this.next++;
-         if (8 * Eq >= this.data.length) {
-           const qq = new Float32Array(2 * this.data.length);
-           qq.set(this.data), this.data = qq, this.words = new Uint32Array(qq.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.EQ()
+     }
+ 
+     function RC(CC, zC, ZC) {
+       zC._needUVs = !0, zC[ZC] = !0, CC.optimizeUVAllocation && CC.getTextureMatrix().isIdentityAs3x2() ? (zC[ZC + "DIRECTUV"] = CC.coordinatesIndex + 1, zC["MAINUV" + (CC.coordinatesIndex + 1)] = !0) : zC[ZC + "DIRECTUV"] = 0
+     }
+ 
+     function AC(CC, zC, ZC) {
+       const QC = CC.getTextureMatrix();
+       zC.x_(ZC + "Matrix", QC)
+     }
+ 
+     function xC(CC, zC, ZC) {
+       ZC.BAKED_VERTEX_ANIMATION_TEXTURE && ZC.INSTANCES && CC.push("bakedVertexAnimationSettingsInstanced")
+     }
+ 
+     function JC(CC, zC, ZC) {
+ ... (9 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5982-L5994` → after: `L1883-L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1883-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1883-L1896) · [Before (L5982-L5994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5982-L5994)

```diff
-       set(qq, Eq, gq, Yq, lq) {
-         const Oq = 8 * qq + oY;
-         this.data[Oq] = Eq, this.data[Oq + 1] = gq, this.data[Oq + 2] = Yq, this.setVisibility(qq, lq)
-       }
-       setVisibility(qq, Eq) {
-         this.data[8 * qq + PY] = Eq, this.markDirty(qq, qq)
-       }
-       setFaces(qq, Eq, gq) {
-         const Yq = 8 * qq;
-         this.words[Yq + QY] = Eq, this.words[Yq + yY] = gq, this.markDirty(qq, qq)
-       }
-       markDirty(qq, Eq) {
-         this.dirtyMin = Math.min(this.dirtyMin, qq), this.dirtyMax = Math.max(this.dirtyMax, Eq)
+     }
+ 
+     function IC(CC, zC, ZC, QC, wC) {
+       let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       CC._bindLight(zC, ZC, QC, wC, bC)
+     }
+     const iC = 4,
+       vC = new WeakMap;
+ 
+     function eC(CC, zC, ZC, QC) {
+       let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const bC = Math.min(zC.lightSources.length, wC);
+       for (let nC = 0; nC < bC; nC++) {
+         IC(zC.lightSources[nC], nC, CC, ZC, "boolean" === typeof QC ? QC : QC.SPECULARTERM, zC.receiveShadows)
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L5996-L5998` → after: `L1898-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1898-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1898-L1927) · [Before (L5996-L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L5996-L5998)

```diff
-       flush() {
-         if (this.dirtyMax < this.dirtyMin) return;
-         this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
+     }
+ 
+     function hC(CC, zC, ZC, QC) {
+       ZC.NUM_BONE_INFLUENCERS > 0 && (QC.addCPUSkinningFallback(0, zC), CC.push("matricesIndices"), CC.push("matricesWeights"), ZC.NUM_BONE_INFLUENCERS > 4 && (CC.push("matricesIndicesExtra"), CC.push("matricesWeightsExtra")))
+     }
+ 
+     function KC(CC, zC) {
+       (zC.INSTANCES || zC.THIN_INSTANCES) && gC(CC, !!zC.PREPASS_VELOCITY), zC.INSTANCESCOLOR && CC.push("instanceColor")
+     }
+ 
+     function YC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         wC = 0;
+       for (let bC = 0; bC < ZC && CC["LIGHT" + bC]; bC++) bC > 0 && (wC = QC + bC, zC.addFallback(wC, "LIGHT" + bC)), CC.SHADOWS || (CC["SHADOW" + bC] && zC.addFallback(QC, "SHADOW" + bC), CC["SHADOWPCF" + bC] && zC.addFallback(QC, "SHADOWPCF" + bC), CC["SHADOWPCSS" + bC] && zC.a … [truncated]
+       return wC
+ ... (14 more added lines; see GitHub link above)
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6001-L6015` → after: `L1930-L1958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1930-L1958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1930-L1958) · [Before (L6001-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6001-L6015)

```diff
-     const Rx = HY,
-       Ux = !0;
-     const Fx = {
-         arrayStride: 4,
-         stepMode: "vertex",
-         attributes: [{
-           shaderLocation: Rx.packedLight,
-           offset: 0,
-           format: "float32"
-         }]
-       },
-       sx = {
-         srcFactor: "src-alpha",
-         dstFactor: "one-minus-src-alpha",
-         operation: "add"
+ 
+     function mC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!CC.lightsEnabled || QC) return !0;
+       const wC = zC.lightSources,
+         bC = Math.min(wC.length, ZC);
+       for (let nC = 0; nC < bC; nC++)
+         if (!wC[nC].areLightTexturesReady()) return !1;
+       return !0
+     }
+ 
+     function HC(CC, zC, ZC, wC) {
+       let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!ZC._areLightsDirty) return ZC._needNormals;
+       const fC = bC;
+ ... (13 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6017-L6101` → after: `L1960-L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1960-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1960-L1966) · [Before (L6017-L6101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6017-L6101)

```diff
-     class Xx {
-       constructor(qq) {
-         this.device = qq, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
-           this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
-         })), this.sceneLayout = EE(qq), this.frameLayout = qq.createBindGroupLayout({
-           label: "terrain-frame",
-           entries: [{
-             binding: 0,
-             visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
-             buffer: {
-               type: "uniform"
-             }
-           }, {
-             binding: 1,
-             visibility: GPUShaderStage.VERTEX,
-             buffer: {
- ... (69 more removed lines; see GitHub link above)
+       if (CC.lightsEnabled && !nC) {
+         zC.lightSources.length > bC && bC < fC && function(CC, zC, ZC, wC) {
+           let bC = vC.get(CC);
+           bC || (bC = new Set, vC.set(CC, bC)), bC.has(wC) || (bC.add(wC), QC.c.Warn(`maxSimultaneousLights is ${zC} but this engine supports at most ${ZC} simultaneous lights. Each light declares its own uniform buffer in the vertex shader, so the ${wC} lights affecting this mes … [truncated]
+         }(CC.mg(), fC, bC, Math.min(zC.lightSources.length, fC));
+         for (const QC of zC.lightSources)
+           if (lC(CC, zC, QC, oC, ZC, wC, qC), oC++, oC === bC) break
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6103-L6285` → after: `L1968-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L1968-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L1968-L2026) · [Before (L6103-L6285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6103-L6285)

```diff
-       recordsGroup(qq, Eq) {
-         const gq = null !== Eq && void 0 !== Eq ? Eq : qq;
-         let Yq = this.recordsGroups.get(gq);
-         return Yq || (Yq = this.createFrameBindGroup(qq, Eq), this.recordsGroups.set(gq, Yq)), Yq
-       }
-       setChunkMesh(qq, Eq, gq) {
-         var Yq;
-         let lq = this.chunks.get(qq);
-         lq ? this.geometry.release(lq) : (lq = {
-           mesh: qq,
-           slot: this.slots.allocate(),
-           origin: [gq[0], gq[1], gq[2]],
-           material: null,
-           vertices: null,
-           lit: !1,
-           faceCount: 0,
- ... (167 more removed lines; see GitHub link above)
+       ZC.SPECULARTERM = qC.specularEnabled, ZC.SHADOWS = qC.shadowEnabled;
+       const FC = Math.max(bC, ZC.MAXLIGHTCOUNT || 0);
+       for (let QC = oC; QC < FC; QC++) void 0 !== ZC["LIGHT" + QC] && (ZC["LIGHT" + QC] = !1, ZC["HEMILIGHT" + QC] = !1, ZC["POINTLIGHT" + QC] = !1, ZC["DIRLIGHT" + QC] = !1, ZC["SPOTLIGHT" + QC] = !1, ZC["AREALIGHT" + QC] = !1, ZC["CLUSTLIGHT" + QC] = !1, ZC["SHADOW" + QC] = !1, … [truncated]
+       ZC.LIGHTCOUNT = oC, ZC.MAXLIGHTCOUNT = bC;
+       const WC = CC.mg().getCaps();
+       return void 0 === ZC.SHADOWFLOAT && (qC.needRebuild = !0), ZC.SHADOWFLOAT = qC.shadowEnabled && (WC.textureFloatRender && WC.textureFloatLinearFiltering || WC.textureHalfFloatRender && WC.textureHalfFloatLinearFiltering), ZC.LIGHTMAPEXCLUDED = qC.lightmapMode, qC.needRebuil … [truncated]
+     }
+ 
+     function EC(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (zC && fC.b.ReflectionTextureEnabled) {
+         if (!zC.isReadyOrNotBlocking()) return !1;
+         ZC._needNormals = !0, ZC.REFLECTION = !0, ZC.GAMMAREFLECTION = zC.gammaSpace, ZC.RGBDREFLECTION = zC.isRGBD, ZC.LODINREFLECTIONALPHA = zC.lodLevelInAlpha, ZC.LINEARSPECULARREFLECTION = zC.linearSpecularLOD, ZC.USEIRRADIANCEMAP = !1, ZC.LODBASEDMICROSFURACE = CC.mg().getCa … [truncated]
+         const nC = CC.mg();
+ ... (43 more added lines; see GitHub link above)
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6287-L6290` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2028-L2029) · [Before (L6287-L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6287-L6290)

```diff
-       async createMaterialBindGroup(qq, Eq) {
-         const gq = [{
-           buffer: qq.uniformBuffer
-         }];
+       if (nC && !ZC.specular.equalsFloats(0, 0, 0) && (fC.specularEnabled = !0), wC["SHADOW" + QC] = !1, wC["SHADOWCSM" + QC] = !1, wC["SHADOWCSMDEBUG" + QC] = !1, wC["SHADOWCSMNUM_CASCADES" + QC] = !1, wC["SHADOWCSMUSESHADOWMAXZ" + QC] = !1, wC["SHADOWCSMNOBLEND" + QC] = !1, wC[ … [truncated]
+         const zC = ZC.getShadowGenerator(CC.activeCamera) ?? ZC.getShadowGenerator();
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6292-L6349` → after: `L2031-L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2031-L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2031-L2032) · [Before (L6292-L6349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6292-L6349)

```diff
-           const {
-             urls: Yq,
-             pixels: lq,
-             layerWidth: Oq
-           } = Eq.sources, mq = await Promise.all(Yq.map(((qq, Eq) => {
-             var gq;
-             return Ll(this.device, qq, null !== (gq = null === lq || void 0 === lq ? void 0 : lq[Eq]) && void 0 !== gq ? gq : null, Oq)
-           })));
-           qq.atlasCount = mq.length, qq.N_ = mq[0].layerWidth, qq.atlasLayers = mq[0].layers, Eq.animDataPerTex && gq.push({
-             buffer: Zl(this.device, Float32Array.from(Eq.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
-           }), gq.push(this.sampler);
-           for (const qq of mq) gq.push(qq.texture.createView({
-             dimension: "2d-array"
-           }))
-         } else if ("single" === qq.texture) {
-           const {
- ... (42 more removed lines; see GitHub link above)
+           const CC = zC.getShadowMap();
+           CC && CC.renderList && CC.renderList.length > 0 && (fC.shadowEnabled = !0, zC.prepareDefines(wC, QC))
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L6352-L6550` → after: `L2035-L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b...build/preprod.bloxd.io/w4ddu.56408518#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L2035-L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/w4ddu.56408518/bundles/preprod.bloxd.io/chunks/js/262.js#L2035-L2048) · [Before (L6352-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/5d647be8aeea2ded1c2f5544d57720ba0d7cb69b/bundles/preprod.bloxd.io/chunks/js/262.js#L6352-L6550)

```diff
-       shaderPackFields(qq, Eq) {
-         return qq.customRenderMat ? YY : function(qq, Eq) {
-           if (!qq) return YY;
-           const gq = qq.defineFor(Eq ? "liquid" : "terrain");
-           return 0 === gq ? YY : {
-             packVariant: gq,
-             liquid: Eq
-           }
-         }(Eq, qq.liquid)
-       }
-       isBlended(qq) {
-         return qq.model.transparencyMode === vq.q.alphaBlend
-       }
-       shaderModule(qq, Eq) {
-         let gq = this.modules.get(qq);
-         return gq || (gq = this.device.createShaderModule({
- ... (183 more removed lines; see GitHub link above)
+       ZC.lightmapMode != bC.c.LIGHTMAP_DEFAULT ? (fC.lightmapMode = !0, wC["LIGHTMAPEXCLUDED" + QC] = !0, wC["LIGHTMAPNOSPECULAR" + QC] = ZC.lightmapMode == bC.c.LIGHTMAP_SHADOWSONLY) : (wC["LIGHTMAPEXCLUDED" + QC] = !1, wC["LIGHTMAPNOSPECULAR" + QC] = !1)
+     }
+ 
+     function XC(CC, zC, ZC, QC, wC) {
+       let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         fC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         oC = function(CC, zC) {
+           let ZC = !1;
+           if (CC.activeCamera) {
+             const QC = zC.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               wC = zC.CAMERA_PERSPECTIVE ? 1 : 0,
+               bC = 1 === CC.activeCamera.mode ? 1 : 0,
+               nC = 0 === CC.activeCamera.mode ? 1 : 0;
+             (QC ^ bC || wC ^ nC) && (zC.CAMERA_ORTHOGRAPHIC = 1 === bC, zC.CAMERA_PERSPECTIVE = 1 === nC, ZC = !0)
```
