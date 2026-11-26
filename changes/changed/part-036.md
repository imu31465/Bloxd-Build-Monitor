# Changed — Bundle Modifications Report (Part 036 / 146)

- **Updated at**: `2026-11-26T17:59 JST`
- **Part**: `36 / 146` (**458** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 035](part-035.md) · [Part 037 →](part-037.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/157.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d · continued)

- **File**: `bundles/bloxd.io/chunks/js/157.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076)

#### 5. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/157.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/157.js#L48)

```diff
-         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${MM}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
+         return window.open(`https://discord.com/oauth2/authorize?response_type=code&client_id=${VV}&scope=identify%20guilds&redirect_uri=${this.discordRedirectUrl}&integration_type=0`, "oauth_authentication", `popup,width=480,height=720,top=${window.screen.height/2-360},left=${wi … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/157.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/157.js#L71)

```diff
-           this.popupWindowPromise === MM && this.failPopup(rM instanceof Error ? rM : new Error(String(rM)))
+           this.popupWindowPromise === VV && this.failPopup(eV instanceof Error ? eV : new Error(String(eV)))
```

#### 7. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/157.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/157.js#L93)

```diff
-         } = await PM()((async () => await (0, jM.postJsonWithMetricsCookiesAndJsonResponse)(`${nM.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+         } = await pV()((async () => await (0, UV.postJsonWithMetricsCookiesAndJsonResponse)(`${QV.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
```

#### 8. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/157.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/157.js#L115)

```diff
-               return await (0, jM.postJsonWithMetricsCookiesAndJsonResponse)(`${nM.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
+               return await (0, UV.postJsonWithMetricsCookiesAndJsonResponse)(`${QV.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
```

#### 9. `bundles/bloxd.io/chunks/js/157.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-d6ce05292549b1b8526f898b838b64b126c682dffdcb750cce367516a092e076) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/157.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/157.js#L141)

```diff
-       return MM instanceof OM.e && 435 === MM.httpCode
+       return VV instanceof JV.b && 435 === VV.httpCode
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/158.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/158.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056)

#### 1. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L4)

```diff
-   7173: (MM, rM, iM) => {
+   7255: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L8-L13)

```diff
-     var OM = iM(1940),
-       SM = iM(3241),
-       jM = iM(94),
-       aM = iM(83),
-       PM = iM(1771),
-       nM = iM(2157);
+     var JV = xV(1952),
+       YV = xV(3245),
+       UV = xV(110),
+       yV = xV(99),
+       pV = xV(1781),
+       QV = xV(2184);
```

#### 3. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L22-L23)

```diff
-     var zM = iM(3258),
-       LM = iM(1810);
+     var wV = xV(3268),
+       ZV = xV(1813);
```

#### 4. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L34-L36` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L34-L36) · [Before (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L34-L36)

```diff
-         const MM = await Promise.all([iM.e(293), iM.e(292)]).then((() => iM(41593))),
-           rM = await Promise.all([iM.e(293), iM.e(294)]).then((() => iM(41619))),
-           HM = await Promise.all([iM.e(293), iM.e(295)]).then((() => iM(41628))),
+         const VV = await Promise.all([xV.e(293), xV.e(292)]).then((() => xV(41779))),
+           eV = await Promise.all([xV.e(293), xV.e(294)]).then((() => xV(41810))),
+           rV = await Promise.all([xV.e(293), xV.e(295)]).then((() => xV(41819))),
```

#### 5. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L57-L58)

```diff
-         const EM = new HM.OAuthProvider(OM.j[OM.d.APPLE]),
-           UM = new HM.OAuthProvider(OM.j[OM.d.MICROSOFT]);
+         const qV = new rV.OAuthProvider(JV.h[JV.d.APPLE]),
+           tV = new rV.OAuthProvider(JV.h[JV.d.MICROSOFT]);
```

#### 6. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L88)

```diff
-             return null !== (rM = null === iM || void 0 === iM ? void 0 : iM.user) && void 0 !== rM ? rM : null
+             return null !== (eV = null === xV || void 0 === xV ? void 0 : xV.user) && void 0 !== eV ? eV : null
```

#### 7. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L96)

```diff
-             return iM === OM.j[MM] ? rM : null
+             return xV === JV.h[VV] ? eV : null
```

#### 8. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L103)

```diff
-           const iM = await PM.e.request(`${MM}.${rM}`, {});
+           const xV = await pV.b.request(`${VV}.${eV}`, {});
```

#### 9. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L118)

```diff
-             return null !== (0, nM.d)(MM)
+             return null !== (0, QV.e)(VV)
```

#### 10. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L121-L122` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L121-L122) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L121-L122)

```diff
-             const rM = (0, nM.d)(MM);
-             if (null === rM) return console.warn(`The app can't sign in with ${MM}; check canSignIn first`), null;
+             const eV = (0, QV.e)(VV);
+             if (null === eV) return console.warn(`The app can't sign in with ${VV}; check canSignIn first`), null;
```

#### 11. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L126-L127` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L126-L127) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L126-L127)

```diff
-               if (iM instanceof LM.e && "timeout" === iM.code) return null;
-               throw (0, zM.reportClientError)("login_failed", iM, `app_${rM}`), iM
+               if (xV instanceof ZV.c && "timeout" === xV.code) return null;
+               throw (0, wV.reportClientError)("login_failed", xV, `app_${eV}`), xV
```

#### 12. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L136)

```diff
-               if (iM === OM.j[MM]) return rM
+               if (xV === JV.h[VV]) return eV
```

#### 13. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L138)

```diff
-             const iM = (0, nM.d)(MM);
+             const xV = (0, QV.e)(VV);
```

#### 14. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L143)

```diff
-               return console.error(`Failed to get the current ${MM} user from the app:`, SM), null
+               return console.error(`Failed to get the current ${VV} user from the app:`, YV), null
```

#### 15. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L147-L149` → after: `L147-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L147-L149) · [Before (L147-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L147-L149)

```diff
-             const rM = (0, nM.d)(MM);
-             null !== rM && PM.e.request(`${rM}.signOut`, {}).catch((rM => {
-               console.error(`Failed to sign out of ${MM} in the app:`, rM)
+             const eV = (0, QV.e)(VV);
+             null !== eV && pV.b.request(`${eV}.signOut`, {}).catch((eV => {
+               console.error(`Failed to sign out of ${VV} in the app:`, eV)
```

#### 16. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L156)

```diff
-               rM === OM.j[MM] && await HM.signOut(yM)
+               eV === JV.h[VV] && await rV.signOut(BV)
```

#### 17. `bundles/bloxd.io/chunks/js/158.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bbb704f55e4f4ad1ee2fb0daabf08c2d64a59f9956427e7ad706b27842241056) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/158.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/158.js#L160)

```diff
-         return (0, aM.isMobileApp)() ? (await PM.e.ready, new bM) : new CM
+         return (0, yV.isMobileApp)() ? (await pV.b.ready, new AV) : new TV
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/159.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/159.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb)

#### 1. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L4)

```diff
-   7180: (MM, rM, iM) => {
+   7259: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L8-L18)

```diff
-     var OM = iM(7185),
-       SM = iM(1232),
-       jM = iM(1188),
-       aM = iM(625),
-       PM = iM(1258),
-       nM = iM(1830),
-       QM = iM(1373),
-       zM = iM(821),
-       LM = iM(19),
-       mM = iM(1211),
-       HM = iM(2482),
+     var JV = xV(7266),
+       YV = xV(1260),
+       UV = xV(1220),
+       yV = xV(657),
+       pV = xV(1279),
+       QV = xV(1838),
+       nV = xV(1391),
+       wV = xV(812),
+       ZV = xV(27),
+       vV = xV(1238),
+       rV = xV(2517),
```

#### 3. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L116` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L116) · [Before (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L116)

```diff
-           console.error(`Failed to update Discord activity rich presence with description="${iM}":`, MM)
+           console.error(`Failed to update Discord activity rich presence with description="${xV}":`, VV)
```

#### 4. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L125-L126` → after: `L125-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L125-L126) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L125-L126)

```diff
-         if ((0, QM.k)(MM)) return {
-           primary: `${rM} in a Discord World`
+         if ((0, nV.j)(VV)) return {
+           primary: `${eV} in a Discord World`
```

#### 5. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L128)

```diff
-         const OM = `${rM} in ${iM}`;
+         const JV = `${eV} in ${xV}`;
```

#### 6. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L133)

```diff
-           secondary: `Lobby ${MM.lobbyName}`
+           secondary: `Lobby ${VV.lobbyName}`
```

#### 7. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L143)

```diff
-         const OM = (0, zM.m)(MM);
+         const JV = (0, wV.l)(VV);
```

#### 8. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L146-L147` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L146-L147) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L146-L147)

```diff
-           verb: null !== (SM = lM[MM]) && void 0 !== SM ? SM : yM[OM.type],
-           title: await (0, jM.y)(PM.c.ENGLISH, OM.title)
+           verb: null !== (YV = jV[VV]) && void 0 !== YV ? YV : BV[JV.type],
+           title: await (0, UV.y)(pV.b.ENGLISH, JV.title)
```

#### 9. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L151)

```diff
-           verb: null !== (rM = nM && yM[nM.gameCategory]) && void 0 !== rM ? rM : iM,
+           verb: null !== (eV = QV && BV[QV.gameCategory]) && void 0 !== eV ? eV : xV,
```

#### 10. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L160` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L160) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L160)

```diff
-         return null !== rM ? SM.c.GUILD : null !== MM ? SM.c.DM : null
+         return null !== eV ? YV.e.GUILD : null !== VV ? YV.e.DM : null
```

#### 11. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L166-L167` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L166-L167) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L166-L167)

```diff
-           case SM.c.DM:
-           case SM.c.GUILD:
+           case YV.e.DM:
+           case YV.e.GUILD:
```

#### 12. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L170)

```diff
-             throw new Error(`Unknown Discord channel type: ${MM}`)
+             throw new Error(`Unknown Discord channel type: ${VV}`)
```

#### 13. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L179-L180)

```diff
-           channelId: null !== MM && void 0 !== MM ? MM : null,
-           guildId: null !== rM && void 0 !== rM ? rM : null
+           channelId: null !== VV && void 0 !== VV ? VV : null,
+           guildId: null !== eV && void 0 !== eV ? eV : null
```

#### 14. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L230-L231` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L230-L231) · [Before (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L230-L231)

```diff
-         return SM.i.from({
-           type: SM.c.DM,
+         return YV.l.from({
+           type: YV.e.DM,
```

#### 15. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L238-L239` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L238-L239) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L238-L239)

```diff
-         return (0, aM.J)(rM) ? null : SM.e.from({
-           type: SM.c.GUILD,
+         return (0, yV.J)(eV) ? null : YV.i.from({
+           type: YV.e.GUILD,
```

#### 16. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L255)

```diff
-         return this.discordSdk.platform === OM.e.MOBILE
+         return this.discordSdk.platform === JV.c.MOBILE
```

#### 17. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L260)

```diff
-             const OM = parseFloat(MM.getPropertyValue(`--discord-safe-area-inset-${rM}`));
+             const JV = parseFloat(VV.getPropertyValue(`--discord-safe-area-inset-${eV}`));
```

#### 18. `bundles/bloxd.io/chunks/js/159.js` (Changed code · before: `L263` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fbR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-0dd32f357c6d936b7c3810bebcc29b7b9c0c4d180da6e081c2f5cbaefedd34fb) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/159.js#L263) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/159.js#L263)

```diff
-         LM.d.set({
+         ZV.b.set({
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/160.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/160.js` (188 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786)

#### 1. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L4)

```diff
-   7185: (MM, rM, iM) => {
+   7266: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L7)

```diff
-       e: () => oi
+       c: () => ix
```

#### 3. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L11-L13` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L11-L12) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L11-L13)

```diff
-       c: () => jO,
-       g: () => nO,
-       f: () => PO,
+       d: () => JJ,
+       k: () => yJ,
```

#### 4. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L15-L17` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L14) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L15-L17)

```diff
-       l: () => qi,
-       m: () => pO,
-       n: () => MO,
+       o: () => sx,
```

#### 5. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L19-L20` → after: `L16-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L16-L18) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L19-L20)

```diff
-       u: () => bO,
-       x: () => sO,
+       s: () => zJ,
+       t: () => dx,
+       w: () => RJ,
```

#### 6. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L23-L24` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L21-L23) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L23-L24)

```diff
-       D: () => RO,
-       H: () => WO,
+       A: () => Sx,
+       C: () => AJ,
+       G: () => MJ,
```

#### 7. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L26` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L25) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L26)

```diff
-       J: () => OO,
+       N: () => Ix,
```

#### 8. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L27-L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L28)

```diff
-       O: () => gO
+       Q: () => XJ,
+       R: () => NJ
```

#### 9. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L45)

```diff
-         this.jL = MM, this.context = rM, this.once = iM || !1
+         this.bZ = VV, this.context = eV, this.once = xV || !1
```

#### 10. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L51-L52` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L51-L52) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L51-L52)

```diff
-           nM = iM ? iM + rM : rM;
-         return MM._events[nM] ? MM._events[nM].jL ? MM._events[nM] = [MM._events[nM], PM] : MM._events[nM].push(PM) : (MM._events[nM] = PM, MM._eventsCount++), MM
+           QV = xV ? xV + eV : eV;
+         return VV._events[QV] ? VV._events[QV].bZ ? VV._events[QV] = [VV._events[QV], pV] : VV._events[QV].push(pV) : (VV._events[QV] = pV, VV._eventsCount++), VV
```

#### 11. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L56)

```diff
-         0 === --MM._eventsCount ? MM._events = new OM : delete MM._events[rM]
+         0 === --VV._eventsCount ? VV._events = new JV : delete VV._events[eV]
```

#### 12. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L68)

```diff
-         var rM = iM ? iM + MM : MM,
+         var eV = xV ? xV + VV : VV,
```

#### 13. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L71-L72` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L71-L72) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L71-L72)

```diff
-         if (OM.jL) return [OM.jL];
-         for (var SM = 0, jM = OM.length, aM = new Array(jM); SM < jM; SM++) aM[SM] = OM[SM].jL;
+         if (JV.bZ) return [JV.bZ];
+         for (var YV = 0, UV = JV.length, yV = new Array(UV); YV < UV; YV++) yV[YV] = JV[YV].bZ;
```

#### 14. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L75)

```diff
-         var rM = iM ? iM + MM : MM,
+         var eV = xV ? xV + VV : VV,
```

#### 15. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L77)

```diff
-         return OM ? OM.jL ? 1 : OM.length : 0
+         return JV ? JV.bZ ? 1 : JV.length : 0
```

#### 16. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L79)

```diff
-         var PM = iM ? iM + MM : MM;
+         var pV = xV ? xV + VV : VV;
```

#### 17. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L83-L84` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L83-L84) · [Before (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L83-L84)

```diff
-         if (zM.jL) {
-           switch (zM.once && this.removeListener(MM, zM.jL, void 0, !0), LM) {
+         if (wV.bZ) {
+           switch (wV.once && this.removeListener(VV, wV.bZ, void 0, !0), ZV) {
```

#### 18. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L86)

```diff
-               return zM.jL.call(zM.context), !0;
+               return wV.bZ.call(wV.context), !0;
```

#### 19. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L88)

```diff
-               return zM.jL.call(zM.context, rM), !0;
+               return wV.bZ.call(wV.context, eV), !0;
```

#### 20. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L90)

```diff
-               return zM.jL.call(zM.context, rM, OM), !0;
+               return wV.bZ.call(wV.context, eV, JV), !0;
```

#### 21. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L92)

```diff
-               return zM.jL.call(zM.context, rM, OM, SM), !0;
+               return wV.bZ.call(wV.context, eV, JV, YV), !0;
```

#### 22. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L94)

```diff
-               return zM.jL.call(zM.context, rM, OM, SM, jM), !0;
+               return wV.bZ.call(wV.context, eV, JV, YV, UV), !0;
```

#### 23. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L96)

```diff
-               return zM.jL.call(zM.context, rM, OM, SM, jM, aM), !0
+               return wV.bZ.call(wV.context, eV, JV, YV, UV, yV), !0
```

#### 24. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L99)

```diff
-           zM.jL.apply(zM.context, nM)
+           wV.bZ.apply(wV.context, QV)
```

#### 25. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L102)

```diff
-           for (QM = 0; QM < HM; QM++) switch (zM[QM].once && this.removeListener(MM, zM[QM].jL, void 0, !0), LM) {
+           for (nV = 0; nV < rV; nV++) switch (wV[nV].once && this.removeListener(VV, wV[nV].bZ, void 0, !0), ZV) {
```

#### 26. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L104)

```diff
-               zM[QM].jL.call(zM[QM].context);
+               wV[nV].bZ.call(wV[nV].context);
```

#### 27. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L107)

```diff
-               zM[QM].jL.call(zM[QM].context, rM);
+               wV[nV].bZ.call(wV[nV].context, eV);
```

#### 28. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L110)

```diff
-               zM[QM].jL.call(zM[QM].context, rM, OM);
+               wV[nV].bZ.call(wV[nV].context, eV, JV);
```

#### 29. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L113)

```diff
-               zM[QM].jL.call(zM[QM].context, rM, OM, SM);
+               wV[nV].bZ.call(wV[nV].context, eV, JV, YV);
```

#### 30. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L118)

```diff
-               zM[QM].jL.apply(zM[QM].context, nM)
+               wV[nV].bZ.apply(wV[nV].context, QV)
```

#### 31. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L127)

```diff
-         var jM = iM ? iM + MM : MM;
+         var UV = xV ? xV + VV : VV;
```

#### 32. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L131)

```diff
-         if (PM.jL) PM.jL !== rM || SM && !PM.once || OM && PM.context !== OM || aM(this, jM);
+         if (pV.bZ) pV.bZ !== eV || YV && !pV.once || JV && pV.context !== JV || yV(this, UV);
```

#### 33. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L133-L134` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L133-L134) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L133-L134)

```diff
-           for (var nM = 0, QM = [], zM = PM.length; nM < zM; nM++)(PM[nM].jL !== rM || SM && !PM[nM].once || OM && PM[nM].context !== OM) && QM.push(PM[nM]);
-           QM.length ? this._events[jM] = 1 === QM.length ? QM[0] : QM : aM(this, jM)
+           for (var QV = 0, nV = [], wV = pV.length; QV < wV; QV++)(pV[QV].bZ !== eV || YV && !pV[QV].once || JV && pV[QV].context !== JV) && nV.push(pV[QV]);
+           nV.length ? this._events[UV] = 1 === nV.length ? nV[0] : nV : yV(this, UV)
```

#### 34. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L137)

```diff
-       }, PM.prototype.aE = function(MM) {
+       }, pV.prototype.bq = function(VV) {
```

#### 35. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L139)

```diff
-         return MM ? (rM = iM ? iM + MM : MM, this._events[rM] && aM(this, rM)) : (this._events = new OM, this._eventsCount = 0), this
+         return VV ? (eV = xV ? xV + VV : VV, this._events[eV] && yV(this, eV)) : (this._events = new JV, this._eventsCount = 0), this
```

#### 36. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L166)

```diff
-         return MM.map((MM => "string" === typeof MM ? `'${MM}'` : MM)).join(rM)
+         return VV.map((VV => "string" === typeof VV ? `'${VV}'` : VV)).join(eV)
```

#### 37. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L270)

```diff
-           iM = MM.received === zM.undefined ? "Required" : `Expected ${MM.expected}, received ${MM.received}`;
+           xV = VV.received === wV.undefined ? "Required" : `Expected ${VV.expected}, received ${VV.received}`;
```

#### 38. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L273)

```diff
-           iM = `Invalid literal value, expected ${JSON.stringify(MM.expected,PM.jsonStringifyReplacer)}`;
+           xV = `Invalid literal value, expected ${JSON.stringify(VV.expected,pV.jsonStringifyReplacer)}`;
```

#### 39. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L276)

```diff
-           iM = `Unrecognized key(s) in object: ${PM.joinValues(MM.keys,", ")}`;
+           xV = `Unrecognized key(s) in object: ${pV.joinValues(VV.keys,", ")}`;
```

#### 40. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L282)

```diff
-           iM = `Invalid discriminator value. Expected ${PM.joinValues(MM.options)}`;
+           xV = `Invalid discriminator value. Expected ${pV.joinValues(VV.options)}`;
```

#### 41. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L285)

```diff
-           iM = `Invalid enum value. Expected ${PM.joinValues(MM.options)}, received '${MM.received}'`;
+           xV = `Invalid enum value. Expected ${pV.joinValues(VV.options)}, received '${VV.received}'`;
```

#### 42. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L297` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L297) · [Before (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L297)

```diff
-           "object" === typeof MM.validation ? "includes" in MM.validation ? (iM = `Invalid input: must include "${MM.validation.includes}"`, "number" === typeof MM.validation.position && (iM = `${iM} at one or more positions greater than or equal to ${MM.validation.position}`)) : … [truncated]
+           "object" === typeof VV.validation ? "includes" in VV.validation ? (xV = `Invalid input: must include "${VV.validation.includes}"`, "number" === typeof VV.validation.position && (xV = `${xV} at one or more positions greater than or equal to ${VV.validation.position}`)) : … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L300` → after: `L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L300) · [Before (L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L300)

```diff
-           iM = "array" === MM.type ? `Array must contain ${MM.exact?"exactly":MM.inclusive?"at least":"more than"} ${MM.minimum} element(s)` : "string" === MM.type ? `String must contain ${MM.exact?"exactly":MM.inclusive?"at least":"over"} ${MM.minimum} character(s)` : "number" = … [truncated]
+           xV = "array" === VV.type ? `Array must contain ${VV.exact?"exactly":VV.inclusive?"at least":"more than"} ${VV.minimum} element(s)` : "string" === VV.type ? `String must contain ${VV.exact?"exactly":VV.inclusive?"at least":"over"} ${VV.minimum} character(s)` : "number" = … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L303)

```diff
-           iM = "array" === MM.type ? `Array must contain ${MM.exact?"exactly":MM.inclusive?"at most":"less than"} ${MM.maximum} element(s)` : "string" === MM.type ? `String must contain ${MM.exact?"exactly":MM.inclusive?"at most":"under"} ${MM.maximum} character(s)` : "number" == … [truncated]
+           xV = "array" === VV.type ? `Array must contain ${VV.exact?"exactly":VV.inclusive?"at most":"less than"} ${VV.maximum} element(s)` : "string" === VV.type ? `String must contain ${VV.exact?"exactly":VV.inclusive?"at most":"under"} ${VV.maximum} character(s)` : "number" == … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L312)

```diff
-           iM = `Number must be a multiple of ${MM.multipleOf}`;
+           xV = `Number must be a multiple of ${VV.multipleOf}`;
```

#### 46. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L366` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L366) · [Before (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L366)

```diff
-         "valid" === this.value && (this.value = "fh")
+         "valid" === this.value && (this.value = "Jb")
```

#### 47. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L375)

```diff
-           "fh" === OM.status && MM.fh(), iM.push(OM.value)
+           "Jb" === JV.status && VV.Jb(), xV.push(JV.value)
```

#### 48. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L399)

```diff
-           "fh" === rM.status && MM.fh(), "fh" === SM.status && MM.fh(), "__proto__" === rM.value || "undefined" === typeof SM.value && !OM.alwaysSet || (iM[rM.value] = SM.value)
+           "Jb" === eV.status && VV.Jb(), "Jb" === YV.status && VV.Jb(), "__proto__" === eV.value || "undefined" === typeof YV.value && !JV.alwaysSet || (xV[eV.value] = YV.value)
```

#### 49. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L411)

```diff
-         status: "fh",
+         status: "Jb",
```

#### 50. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L419` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L419) · [Before (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L419)

```diff
-       bM = MM => "fh" === MM.status,
+       AV = VV => "Jb" === VV.status,
```

#### 51. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L426` → after: `L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L426) · [Before (L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L426)

```diff
-       } : MM || {}, MM.toString = MM => "string" === typeof MM ? MM : null === MM || void 0 === MM ? void 0 : MM.message
+       } : VV || {}, VV.toString = VV => "string" === typeof VV ? VV : null === VV || void 0 === VV ? void 0 : VV.message
```

#### 52. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L469)

```diff
-           message: null !== OM && void 0 !== OM ? OM : rM.defaultError
+           message: null !== JV && void 0 !== JV ? JV : eV.defaultError
```

#### 53. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L471)

```diff
-           message: null !== iM && void 0 !== iM ? iM : rM.defaultError
+           message: null !== xV && void 0 !== xV ? xV : eV.defaultError
```

#### 54. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L567)

```diff
-           SM = await (tM(OM) ? OM : Promise.resolve(OM));
+           YV = await (XV(JV) ? JV : Promise.resolve(JV));
```

#### 55. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L632` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L632) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L632)

```diff
-         const rM = "function" === typeof MM ? MM : () => MM;
+         const eV = "function" === typeof VV ? VV : () => VV;
```

#### 56. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L647)

```diff
-         const rM = "function" === typeof MM ? MM : () => MM;
+         const eV = "function" === typeof VV ? VV : () => VV;
```

#### 57. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L703)

```diff
-           }), rM.fh());
+           }), eV.Jb());
```

#### 58. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L711)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 59. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L729` → after: `L729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L729) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L729)

```diff
-           }), rM.fh())
+           }), eV.Jb())
```

#### 60. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L734` → after: `L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L734) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L734)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 61. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L739)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 62. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L744)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 63. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L749)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 64. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L754)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 65. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L759` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L759) · [Before (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L759)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 66. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L767)

```diff
-           }), rM.fh()
+           }), eV.Jb()
```

#### 67. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L774)

```diff
-           }), rM.fh())
+           }), eV.Jb())
```

#### 68. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L783)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 69. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L792)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 70. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L799)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 71. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L801)

```diff
-           ((jM = nM).precision ? jM.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${jM.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${jM.precision}}Z$`) : 0 === jM.precision ? jM.offset ? new RegE … [truncated]
+           ((UV = QV).precision ? UV.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${UV.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${UV.precision}}Z$`) : 0 === UV.precision ? UV.offset ? new RegE … [truncated]
```

#### 72. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L805)

```diff
-           }), rM.fh())
+           }), eV.Jb())
```

#### 73. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L810` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L810) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L810)

```diff
-         }), rM.fh())) : PM.assertNever(nM);
+         }), eV.Jb())) : pV.assertNever(QV);
```

#### 74. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1011` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1011) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1011)

```diff
-         SM = iM > OM ? iM : OM;
+         YV = xV > JV ? xV : JV;
```

#### 75. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1045)

```diff
-           }), iM.fh());
+           }), xV.Jb());
```

#### 76. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1054)

```diff
-           }), iM.fh())
+           }), xV.Jb())
```

#### 77. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1063` → after: `L1063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1063) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1063)

```diff
-           }), iM.fh())
+           }), xV.Jb())
```

#### 78. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1068` → after: `L1068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1068) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1068)

```diff
-         }), iM.fh()) : "finite" === OM.kind ? Number.isFinite(MM.data) || (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
+         }), xV.Jb()) : "finite" === JV.kind ? Number.isFinite(VV.data) || (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
```

#### 79. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1071)

```diff
-         }), iM.fh()) : PM.assertNever(OM);
+         }), xV.Jb()) : pV.assertNever(JV);
```

#### 80. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1223` → after: `L1223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1223) · [Before (L1223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1223)

```diff
-             }), iM.fh())
+             }), xV.Jb())
```

#### 81. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1231)

```diff
-           }), iM.fh())
+           }), xV.Jb())
```

#### 82. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1236` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1236) · [Before (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1236)

```diff
-         }), iM.fh()) : PM.assertNever(OM);
+         }), xV.Jb()) : pV.assertNever(JV);
```

#### 83. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1374` → after: `L1374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1374) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1374)

```diff
-         }), rM.fh()) : "max" === OM.kind ? MM.data.getTime() > OM.value && (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
+         }), eV.Jb()) : "max" === JV.kind ? VV.data.getTime() > JV.value && (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
```

#### 84. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1381` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1381) · [Before (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1381)

```diff
-         }), rM.fh()) : PM.assertNever(OM);
+         }), eV.Jb()) : pV.assertNever(JV);
```

#### 85. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1552` → after: `L1552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1552) · [Before (L1552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1552)

```diff
-           }), iM.fh())
+           }), xV.Jb())
```

#### 86. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1561` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1561) · [Before (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1561)

```diff
-           }), iM.fh()), null !== OM.maxLength && rM.data.length > OM.maxLength.value && (lM(rM, {
+           }), xV.Jb()), null !== JV.maxLength && eV.data.length > JV.maxLength.value && (jV(eV, {
```

#### 87. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1568)

```diff
-           }), iM.fh()), rM.common.async) return Promise.all([...rM.data].map(((MM, iM) => OM.type._parseAsync(new uM(rM, MM, rM.path, iM))))).then((MM => EM.mergeArray(iM, MM)));
+           }), xV.Jb()), eV.common.async) return Promise.all([...eV.data].map(((VV, xV) => JV.type._parseAsync(new zV(eV, VV, eV.path, xV))))).then((VV => qV.mergeArray(xV, VV)));
```

#### 88. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1692` → after: `L1692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1692) · [Before (L1692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1692)

```diff
-           }), rM.fh());
+           }), eV.Jb());
```

#### 89. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1731)

```diff
-               const PM = null !== (jM = null === (SM = (OM = this._def).errorMap) || void 0 === SM ? void 0 : SM.call(OM, rM, iM).message) && void 0 !== jM ? jM : iM.defaultError;
+               const pV = null !== (UV = null === (YV = (JV = this._def).errorMap) || void 0 === YV ? void 0 : YV.call(JV, eV, xV).message) && void 0 !== UV ? UV : xV.defaultError;
```

#### 90. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1733` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1733) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1733)

```diff
-                 message: null !== (aM = gM.errToObj(MM).message) && void 0 !== aM ? aM : PM
+                 message: null !== (yV = MV.errToObj(VV).message) && void 0 !== yV ? yV : pV
```

#### 91. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1809` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1809) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1809)

```diff
-           MM && !MM[iM] ? rM[iM] = OM : rM[iM] = OM.optional()
+           VV && !VV[xV] ? eV[xV] = JV : eV[xV] = JV.optional()
```

#### 92. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1878)

```diff
-             if ("fh" === OM.result.status) return rM.common.issues.push(...OM.ctx.common.issues), OM.result;
+             if ("Jb" === JV.result.status) return eV.common.issues.push(...JV.ctx.common.issues), JV.result;
```

#### 93. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1903)

```diff
-             "fh" !== SM.status || MM || (MM = {
+             "Jb" !== YV.status || VV || (VV = {
```

#### 94. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1966)

```diff
-           if (!rM) throw new Error(`A discriminator value for key \`${MM}\` could not be extracted from all schema options`);
+           if (!eV) throw new Error(`A discriminator value for key \`${VV}\` could not be extracted from all schema options`);
```

#### 95. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L1968` → after: `L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L1968) · [Before (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L1968)

```diff
-             if (OM.has(iM)) throw new Error(`Discriminator property ${String(MM)} has duplicate value ${String(iM)}`);
+             if (JV.has(xV)) throw new Error(`Discriminator property ${String(VV)} has duplicate value ${String(xV)}`);
```

#### 96. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2040` → after: `L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2040) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2040)

```diff
-           return SM.valid ? ((bM(MM) || bM(OM)) && rM.fh(), {
+           return YV.valid ? ((AV(VV) || AV(JV)) && eV.Jb(), {
```

#### 97. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2099` → after: `L2099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2099) · [Before (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2099)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 98. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2201` → after: `L2201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2201) · [Before (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2201)

```diff
-               "fh" !== OM.status && "fh" !== SM.status || rM.fh(), MM.set(OM.value, SM.value)
+               "Jb" !== JV.status && "Jb" !== YV.status || eV.Jb(), VV.set(JV.value, YV.value)
```

#### 99. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2214)

```diff
-             "fh" !== OM.status && "fh" !== SM.status || rM.fh(), MM.set(OM.value, SM.value)
+             "Jb" !== JV.status && "Jb" !== YV.status || eV.Jb(), VV.set(JV.value, YV.value)
```

#### 100. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2248)

```diff
-         }), rM.fh()), null !== OM.maxSize && iM.data.size > OM.maxSize.value && (lM(iM, {
+         }), eV.Jb()), null !== JV.maxSize && xV.data.size > JV.maxSize.value && (jV(xV, {
```

#### 101. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2255)

```diff
-         }), rM.fh());
+         }), eV.Jb());
```

#### 102. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2262` → after: `L2262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2262) · [Before (L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2262)

```diff
-             "fh" === OM.status && rM.fh(), iM.add(OM.value)
+             "Jb" === JV.status && eV.Jb(), xV.add(JV.value)
```

#### 103. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2574` → after: `L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2574) · [Before (L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2574)

```diff
-             lM(iM, MM), MM.fatal ? rM.abort() : rM.fh()
+             jV(xV, VV), VV.fatal ? eV.abort() : eV.Jb()
```

#### 104. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2583` → after: `L2583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2583) · [Before (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2583)

```diff
-             status: "fh",
+             status: "Jb",
```

#### 105. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2608)

```diff
-             return "aborted" === OM.status ? UM : ("fh" === OM.status && rM.fh(), MM(OM.value), {
+             return "aborted" === JV.status ? tV : ("Jb" === JV.status && eV.Jb(), VV(JV.value), {
```

#### 106. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2617)

```diff
-           }).then((iM => "aborted" === iM.status ? UM : ("fh" === iM.status && rM.fh(), MM(iM.value).then((() => ({
+           }).then((xV => "aborted" === xV.status ? tV : ("Jb" === xV.status && eV.Jb(), VV(xV.value).then((() => ({
```

#### 107. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2805` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2805) · [Before (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2805)

```diff
-             return "aborted" === MM.status ? UM : "fh" === MM.status ? (rM.fh(), GM(MM.value)) : this._def.out._parseAsync({
+             return "aborted" === VV.status ? tV : "Jb" === VV.status ? (eV.Jb(), FV(VV.value)) : this._def.out._parseAsync({
```

#### 108. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2817-L2818` → after: `L2817-L2818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2817-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2817-L2818) · [Before (L2817-L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2817-L2818)

```diff
-           return "aborted" === MM.status ? UM : "fh" === MM.status ? (rM.fh(), {
-             status: "fh",
+           return "aborted" === VV.status ? tV : "Jb" === VV.status ? (eV.Jb(), {
+             status: "Jb",
```

#### 109. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L2855` → after: `L2855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R2855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L2855) · [Before (L2855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L2855)

```diff
-               PM = null === (aM = null !== (jM = MM.fatal) && void 0 !== jM ? jM : iM) || void 0 === aM || aM,
+               pV = null === (yV = null !== (UV = VV.fatal) && void 0 !== UV ? UV : xV) || void 0 === yV || yV,
```

#### 110. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3015` → after: `L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3015) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3015)

```diff
-             message: `Input not instance of ${MM.name}`
+             message: `Input not instance of ${VV.name}`
```

#### 111. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3165` → after: `L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3165) · [Before (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3165)

```diff
-           for (SM = 0; SM < aM; SM++) jM = MM[SM] + zM, zM = Math.floor(jM / LM), jM %= LM, PM[SM] = jM < 0 ? jM + LM : jM;
+           for (YV = 0; YV < yV; YV++) UV = VV[YV] + wV, wV = Math.floor(UV / ZV), UV %= ZV, pV[YV] = UV < 0 ? UV + ZV : UV;
```

#### 112. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3244` → after: `L3244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3244) · [Before (L3244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3244)

```diff
-             if (-1 == yM) return [MM.VJ(), PM[0]];
+             if (-1 == BV) return [VV.gr(), pV[0]];
```

#### 113. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3306` → after: `L3306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3306) · [Before (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3306)

```diff
-           MM: for (SM = 0; SM < iM.length; SM++)
+           VV: for (YV = 0; YV < xV.length; YV++)
```

#### 114. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3318` → after: `L3318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3318) · [Before (L3318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3318)

```diff
-           if (this.sign !== rM.sign) return this.subtract(rM.VJ());
+           if (this.sign !== eV.sign) return this.subtract(eV.gr());
```

#### 115. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3325` → after: `L3325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3325) · [Before (L3325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3325)

```diff
-           if (iM < 0 !== rM.sign) return this.subtract(rM.VJ());
+           if (xV < 0 !== eV.sign) return this.subtract(eV.gr());
```

#### 116. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3336` → after: `L3336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3336) · [Before (L3336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3336)

```diff
-           if (this.sign !== rM.sign) return this.add(rM.VJ());
+           if (this.sign !== eV.sign) return this.add(eV.gr());
```

#### 117. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3346` → after: `L3346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3346) · [Before (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3346)

```diff
-           if (iM < 0 !== rM.sign) return this.add(rM.VJ());
+           if (xV < 0 !== eV.sign) return this.add(eV.gr());
```

#### 118. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3351` → after: `L3351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3351) · [Before (L3351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3351)

```diff
-         }, zM.prototype.minus = zM.prototype.subtract, nM.prototype.VJ = function() {
+         }, wV.prototype.minus = wV.prototype.subtract, QV.prototype.gr = function() {
```

#### 119. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3353` → after: `L3353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3353) · [Before (L3353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3353)

```diff
-         }, QM.prototype.VJ = function() {
+         }, nV.prototype.gr = function() {
```

#### 120. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3357` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3357) · [Before (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3357)

```diff
-         }, zM.prototype.VJ = function() {
+         }, wV.prototype.gr = function() {
```

#### 121. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3373` → after: `L3373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3373) · [Before (L3373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3373)

```diff
-             if (-1 === QM) return this.VJ();
+             if (-1 === nV) return this.gr();
```

#### 122. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3381` → after: `L3381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3381) · [Before (L3381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3381)

```diff
-           return 0 === MM.value ? PM[0] : 1 === MM.value ? this : -1 === MM.value ? this.VJ() : tM(Math.abs(MM.value), this.value, this.sign !== MM.sign)
+           return 0 === VV.value ? pV[0] : 1 === VV.value ? this : -1 === VV.value ? this.gr() : XV(Math.abs(VV.value), this.value, this.sign !== VV.sign)
```

#### 123. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3457` → after: `L3457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3457) · [Before (L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3457)

```diff
-           return (rM = rM >= 0 ? rM : -rM) === (iM = iM >= 0 ? iM : -iM) ? 0 : rM > iM ? 1 : -1
+           return (eV = eV >= 0 ? eV : -eV) === (xV = xV >= 0 ? xV : -xV) ? 0 : eV > xV ? 1 : -1
```

#### 124. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3541` → after: `L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3541) · [Before (L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3541)

```diff
-           return -1 === jM.compare(0) && (jM = jM.add(MM)), this.isNegative() ? jM.VJ() : jM
+           return -1 === UV.compare(0) && (UV = UV.add(VV)), this.isNegative() ? UV.gr() : UV
```

#### 125. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3591` → after: `L3591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3591) · [Before (L3591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3591)

```diff
-           return this.VJ().prev()
+           return this.gr().prev()
```

#### 126. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3609` → after: `L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3609) · [Before (L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3609)

```diff
-             OM = "number" === typeof rM ? rM | YM : "bigint" === typeof rM ? rM | BigInt(YM) : rM[0] + rM[1] * iM | 1073758208;
+             JV = "number" === typeof eV ? eV | cV : "bigint" === typeof eV ? eV | BigInt(cV) : eV[0] + eV[1] * xV | 1073758208;
```

#### 127. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3634` → after: `L3634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3634) · [Before (L3634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3634)

```diff
-           return MM = TM(MM), rM = TM(rM), MM.greater(rM) ? MM : rM
+           return VV = IV(VV), eV = IV(eV), VV.greater(eV) ? VV : eV
```

#### 128. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3638` → after: `L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3638) · [Before (L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3638)

```diff
-           return MM = TM(MM), rM = TM(rM), MM.lesser(rM) ? MM : rM
+           return VV = IV(VV), eV = IV(eV), VV.lesser(eV) ? VV : eV
```

#### 129. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3651` → after: `L3651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3651) · [Before (L3651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3651)

```diff
-           return SM.isUnit() ? MM : MM.multiply(SM)
+           return YV.isUnit() ? VV : VV.multiply(YV)
```

#### 130. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3655` → after: `L3655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3655) · [Before (L3655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3655)

```diff
-           return MM.compareTo(rM(0)) < 0 && (MM = MM.VJ().subtract(rM(1))), 0 === MM.compareTo(rM(0)) ? rM(0) : rM(AM(MM, rM(2)).e).add(rM(1))
+           return VV.compareTo(eV(0)) < 0 && (VV = VV.gr().subtract(eV(1))), 0 === VV.compareTo(eV(0)) ? eV(0) : eV(lV(VV, eV(2)).e).add(eV(1))
```

#### 131. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3691` → after: `L3691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3691) · [Before (L3691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3691)

```diff
-           return iM ? SM.VJ() : SM
+           return xV ? YV.gr() : YV
```

#### 132. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3764` → after: `L3764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3764) · [Before (L3764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3764)

```diff
-           if (aM) return new zM(BigInt(iM ? "-" + MM : MM));
+           if (yV) return new wV(BigInt(xV ? "-" + VV : VV));
```

#### 133. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3816-L3817` → after: `L3816-L3817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3816-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3816-L3817) · [Before (L3816-L3817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3816-L3817)

```diff
-           return jM.add(PM.cz(QM, iM, !1))
-         }, PM.cz = function(MM, rM, iM) {
+           return UV.add(pV.wZ(nV, xV, !1))
+         }, pV.wZ = function(VV, eV, xV) {
```

#### 134. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3855` → after: `L3855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3855) · [Before (L3855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3855)

```diff
-         for (let OM = 0; OM < 4; OM++) rM[3 - OM] = OM === iM ? 1 << MM - 16 * iM : 0;
+         for (let JV = 0; JV < 4; JV++) eV[3 - JV] = JV === xV ? 1 << VV - 16 * xV : 0;
```

#### 135. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3894` → after: `L3894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3894) · [Before (L3894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3894)

```diff
-         })), this.str = Ui.cz(MM, 16).toString()
+         })), this.str = qx.wZ(VV, 16).toString()
```

#### 136. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3914` → after: `L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3914) · [Before (L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3914)

```diff
-         return MM instanceof ei ? MM : ("number" === typeof MM && (MM = MM.toString()), null != wi[MM] || (wi[MM] = ei.fromString(MM)), wi[MM])
+         return VV instanceof Tx ? VV : ("number" === typeof VV && (VV = VV.toString()), null != Ax[VV] || (Ax[VV] = Tx.fromString(VV)), Ax[VV])
```

#### 137. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3938` → after: `L3938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3938) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3938)

```diff
-         return null == MM || null == rM ? MM == rM : MM.equals(rM)
+         return null == VV || null == eV ? VV == eV : VV.equals(eV)
```

#### 138. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3947` → after: `L3947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3947) · [Before (L3947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3947)

```diff
-         return rM === gi ? MM : Ri(MM, rM)
+         return eV === Xx ? VV : zx(VV, eV)
```

#### 139. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3950` → after: `L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3950) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3950)

```diff
-         return rM === gi ? MM : Wi(MM, ui(MM, rM))
+         return eV === Xx ? VV : Gx(VV, Mx(VV, eV))
```

#### 140. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L3995` → after: `L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R3995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L3995) · [Before (L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L3995)

```diff
-         }))) && void 0 !== iM ? iM : [];
+         }))) && void 0 !== xV ? xV : [];
```

#### 141. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4783` → after: `L4783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L4783) · [Before (L4783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L4783)

```diff
-           }(0, new Error(`Unrecognized command ${rM}`))
+           }(0, new Error(`Unrecognized command ${eV}`))
```

#### 142. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4810` → after: `L4810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L4810) · [Before (L4810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L4810)

```diff
-         if (!(rM in ZO)) throw new Error(`Unrecognized event type ${MM.evt}`);
+         if (!(eV in DJ)) throw new Error(`Unrecognized event type ${VV.evt}`);
```

#### 143. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L4862` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L4862) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L4862)

```diff
-     jO.LH({
+     JJ.Pr({
```

#### 144. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5103` → after: `L5103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5103) · [Before (L5103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5103)

```diff
-             return null !== (rM = MM.transfer) && void 0 !== rM ? rM : void 0
+             return null !== (eV = VV.transfer) && void 0 !== eV ? eV : void 0
```

#### 145. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5158` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5158) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5158)

```diff
-           }, this.isReady = !1, this.clientId = MM, this.configuration = null !== rM && void 0 !== rM ? rM : {
+           }, this.isReady = !1, this.clientId = VV, this.configuration = null !== eV && void 0 !== eV ? eV : {
```

#### 146. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5170` → after: `L5170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5170) · [Before (L5170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5170)

```diff
-         if (aM !== oi.DESKTOP && aM !== oi.MOBILE) throw new Error(`Invalid query param "platform" of "${aM}". Valid values are "${oi.DESKTOP}" or "${oi.MOBILE}"`);
+         if (yV !== ix.DESKTOP && yV !== ix.MOBILE) throw new Error(`Invalid query param "platform" of "${yV}". Valid values are "${ix.DESKTOP}" or "${ix.MOBILE}"`);
```

#### 147. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5173)

```diff
-           return [null !== (MM = window.parent.opener) && void 0 !== MM ? MM : window.parent, document.referrer ? document.referrer : "*"]
+           return [null !== (VV = window.parent.opener) && void 0 !== VV ? VV : window.parent, document.referrer ? document.referrer : "*"]
```

#### 148. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5317` → after: `L5317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5317) · [Before (L5317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5317)

```diff
-       for (rM = 0, iM = (OM = jM.d.length) < (SM = MM.d.length) ? OM : SM; rM < iM; ++rM)
+       for (eV = 0, xV = (JV = UV.d.length) < (YV = VV.d.length) ? JV : YV; eV < xV; ++eV)
```

#### 149. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5387` → after: `L5387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5387) · [Before (L5387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5387)

```diff
-       return MM && rM > iM ? rM : iM
+       return VV && eV > xV ? eV : xV
```

#### 150. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5395` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5395) · [Before (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5395)

```diff
-       for (MM = wj(PM), Qj = !1, 0 == (SM = Math.sqrt(+PM)) || SM == 1 / 0 ? (((rM = Cj(PM.d)).length + MM) % 2 == 0 && (rM += "0"), SM = Math.sqrt(rM), MM = Hj((MM + 1) / 2) - (MM < 0 || MM % 2), OM = new nM(rM = SM == 1 / 0 ? "1e" + MM : (rM = SM.toExponential()).slice(0, rM.in … [truncated]
+       for (VV = PU(pV), pU = !1, 0 == (YV = Math.sqrt(+pV)) || YV == 1 / 0 ? (((eV = tU(pV.d)).length + VV) % 2 == 0 && (eV += "0"), YV = Math.sqrt(eV), VV = ZU((VV + 1) / 2) - (VV < 0 || VV % 2), JV = new QV(eV = YV == 1 / 0 ? "1e" + VV : (eV = YV.toExponential()).slice(0, eV.in … [truncated]
```

#### 151. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5417` → after: `L5417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5417) · [Before (L5417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5417)

```diff
-       return rM ? ++iM : jM.shift(), MM.d = jM, MM.e = iM, Qj ? pj(MM, LM.precision) : MM
+       return eV ? ++xV : UV.shift(), VV.d = UV, VV.e = xV, pU ? zU(VV, ZV.precision) : VV
```

#### 152. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5421` → after: `L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5421) · [Before (L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5421)

```diff
-       return iM = new OM(iM), void 0 === MM ? iM : (Gj(MM, 0, nj), void 0 === rM ? rM = OM.rounding : Gj(rM, 0, 8), pj(iM, MM + wj(iM) + 1, rM))
+       return xV = new JV(xV), void 0 === VV ? xV : (qU(VV, 0, yU), void 0 === eV ? eV = JV.rounding : qU(eV, 0, 8), zU(xV, VV + PU(xV) + 1, eV))
```

#### 153. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5429` → after: `L5429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5429) · [Before (L5429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5429)

```diff
-       return void 0 === MM ? sj(SM) : (Gj(MM, 0, nj), void 0 === rM ? rM = jM.rounding : Gj(rM, 0, 8), iM = sj((OM = pj(new jM(SM), MM + wj(SM) + 1, rM)).abs(), !1, MM + wj(OM) + 1), SM.isneg() && !SM.isZero() ? "-" + iM : iM)
+       return void 0 === VV ? WU(YV) : (qU(VV, 0, yU), void 0 === eV ? eV = UV.rounding : qU(eV, 0, 8), xV = WU((JV = zU(new UV(YV), VV + PU(YV) + 1, eV)).abs(), !1, VV + PU(JV) + 1), YV.isneg() && !YV.isZero() ? "-" + xV : xV)
```

#### 154. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5448` → after: `L5448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5448) · [Before (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5448)

```diff
-         if ((iM = QM < 0 ? -QM : QM) <= yj) {
+         if ((xV = nV < 0 ? -nV : nV) <= bU) {
```

#### 155. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5506)

```diff
-             zM = 0, (PM = rM(uM, JM, eM, dM)) < 0 ? (yM = JM[0], eM != dM && (yM = yM * dj + (JM[1] || 0)), (zM = yM / CM | 0) > 1 ? (zM >= dj && (zM = dj - 1), 1 == (PM = rM(LM = MM(uM, zM), JM, mM = LM.length, dM = JM.length)) && (zM--, iM(LM, eM < mM ? bM : uM, mM))) : (0 == z … [truncated]
+             wV = 0, (pV = eV(zV, bV, PV, EV)) < 0 ? (BV = bV[0], PV != EV && (BV = BV * kU + (bV[1] || 0)), (wV = BV / TV | 0) > 1 ? (wV >= kU && (wV = kU - 1), 1 == (pV = eV(ZV = VV(zV, wV), bV, vV = ZV.length, EV = bV.length)) && (wV--, xV(ZV, PV < vV ? AV : zV, vV))) : (0 == w … [truncated]
```

#### 156. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5587` → after: `L5587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5587) · [Before (L5587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5587)

```diff
-       if (0 == OM ? (LM.length = zM, jM = 1, zM--) : (LM.length = zM + 1, jM = hj(10, 7 - OM), LM[zM] = SM > 0 ? (QM / hj(10, aM - SM) % hj(10, SM) | 0) * jM : 0), nM)
+       if (0 == JV ? (ZV.length = wV, UV = 1, wV--) : (ZV.length = wV + 1, UV = vU(10, 7 - JV), ZV[wV] = YV > 0 ? (nV / vU(10, yV - YV) % vU(10, YV) | 0) * UV : 0), QV)
```

#### 157. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5632` → after: `L5632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5632) · [Before (L5632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5632)

```diff
-       return rM ? (iM && (OM = iM - aM) > 0 ? jM = jM.charAt(0) + "." + jM.slice(1) + gj(OM) : aM > 1 && (jM = jM.charAt(0) + "." + jM.slice(1)), jM = jM + (SM < 0 ? "e" : "e+") + SM) : SM < 0 ? (jM = "0." + gj(-SM - 1) + jM, iM && (OM = iM - aM) > 0 && (jM += gj(OM))) : SM >= aM … [truncated]
+       return eV ? (xV && (JV = xV - yV) > 0 ? UV = UV.charAt(0) + "." + UV.slice(1) + NU(JV) : yV > 1 && (UV = UV.charAt(0) + "." + UV.slice(1)), UV = UV + (YV < 0 ? "e" : "e+") + YV) : YV < 0 ? (UV = "0." + NU(-YV - 1) + UV, xV && (JV = xV - yV) > 0 && (UV += NU(JV))) : YV >= yV … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5779` → after: `L5779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5779) · [Before (L5779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5779)

```diff
-           return MM ? "Symbol(src)_1." + MM : ""
+           return VV ? "Symbol(src)_1." + VV : ""
```

#### 159. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5875` → after: `L5875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5875) · [Before (L5875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5875)

```diff
-         return this.__data__[MM] = Hr && void 0 === rM ? iM : rM, this
+         return this.__data__[VV] = re && void 0 === eV ? xV : eV, this
```

#### 160. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5929` → after: `L5929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5929) · [Before (L5929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5929)

```diff
-           var PM = jM[Rr ? aM : ++OM];
+           var pV = UV[Ge ? yV : ++JV];
```

#### 161. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5941` → after: `L5941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5941) · [Before (L5941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5941)

```diff
-         return iM && iM == OM ? MM : void 0
+         return xV && xV == JV ? VV : void 0
```

#### 162. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5949` → after: `L5949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5949) · [Before (L5949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5949)

```diff
-         return MM === rM || (null == MM || null == rM || !ji(MM) && !ai(rM) ? MM !== MM && rM !== rM : function(MM, rM, iM, OM, SM, zM) {
+         return VV === eV || (null == VV || null == eV || !Ux(VV) && !yx(eV) ? VV !== VV && eV !== eV : function(VV, eV, xV, JV, YV, wV) {
```

#### 163. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5954-L5955` → after: `L5954-L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5954-L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5954-L5955) · [Before (L5954-L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5954-L5955)

```diff
-           hM || (CM = (CM = vr(MM)) == jM ? HM : CM);
-           EM || (eM = (eM = vr(rM)) == jM ? HM : eM);
+           kV || (TV = (TV = fe(VV)) == UV ? rV : TV);
+           qV || (PV = (PV = fe(eV)) == UV ? rV : PV);
```

#### 164. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5961)

```diff
-               case GM:
+               case FV:
```

#### 165. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5964` → after: `L5964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5964) · [Before (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5964)

```diff
-               case UM:
+               case tV:
```

#### 166. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5966-L5968` → after: `L5966-L5968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5966-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5966-L5968) · [Before (L5966-L5968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5966-L5968)

```diff
-               case PM:
-               case nM:
-               case mM:
+               case pV:
+               case QV:
+               case vV:
```

#### 167. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5970` → after: `L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5970) · [Before (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5970)

```diff
-               case QM:
+               case nV:
```

#### 168. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5972-L5973` → after: `L5972-L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5972-L5973) · [Before (L5972-L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5972-L5973)

```diff
-               case JM:
-               case yM:
+               case bV:
+               case BV:
```

#### 169. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5975` → after: `L5975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5975) · [Before (L5975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5975)

```diff
-               case LM:
+               case ZV:
```

#### 170. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5977` → after: `L5977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5977) · [Before (L5977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5977)

```diff
-               case dM:
+               case EV:
```

#### 171. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L5985` → after: `L5985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R5985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L5985) · [Before (L5985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L5985)

```diff
-               case lM:
+               case jV:
```

#### 172. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6011` → after: `L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6011) · [Before (L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6011)

```diff
-                 if (!(aM ? mM in rM : VM.call(rM, mM))) return !1
+                 if (!(yV ? vV in eV : dV.call(eV, vV))) return !1
```

#### 173. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6039` → after: `L6039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6039) · [Before (L6039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6039)

```diff
-         return !(!ji(MM) || (rM = MM, qM && qM in rM)) && (Oi(MM) || AM(MM) ? Mr : gM).test(Tr(MM));
+         return !(!Ux(VV) || (eV = VV, SV && SV in eV)) && (Jx(VV) || lV(VV) ? Ve : MV).test(Ie(VV));
```

#### 174. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6044` → after: `L6044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6044) · [Before (L6044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6044)

```diff
-         return "function" == typeof MM ? MM : null == MM ? Li : "object" == typeof MM ? ri(MM) ? function(MM, rM) {
+         return "function" == typeof VV ? VV : null == VV ? Zx : "object" == typeof VV ? ex(VV) ? function(VV, eV) {
```

#### 175. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6049` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6049) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6049)

```diff
-               return void 0 === OM ? iM : OM
+               return void 0 === JV ? xV : JV
```

#### 176. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6128` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6128) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6128)

```diff
-         return ri(MM) ? MM : Kr(MM)
+         return ex(VV) ? VV : se(VV)
```

#### 177. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6140` → after: `L6140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6140) · [Before (L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6140)

```diff
-           mM = 1 & SM ? new wr : void 0;
+           vV = 1 & YV ? new Ne : void 0;
```

#### 178. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6169` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6169) · [Before (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6169)

```diff
-           return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
+           return "string" == eV || "number" == eV || "symbol" == eV || "boolean" == eV ? "__proto__" !== VV : null === VV
```

#### 179. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6177` → after: `L6177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6177) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6177)

```diff
-         return Zr(iM) ? iM : void 0
+         return Ce(xV) ? xV : void 0
```

#### 180. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6184` → after: `L6184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6184) · [Before (L6184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6184)

```diff
-         return !!(rM = null == rM ? OM : rM) && ("number" == typeof MM || uM.test(MM)) && MM > -1 && MM % 1 == 0 && MM < rM
+         return !!(eV = null == eV ? JV : eV) && ("number" == typeof VV || zV.test(VV)) && VV > -1 && VV % 1 == 0 && VV < eV
```

#### 181. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6206` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6206) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6206)

```diff
-           case hr:
+           case ke:
```

#### 182. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6208` → after: `L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6208) · [Before (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6208)

```diff
-           case Jr:
+           case be:
```

#### 183. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6210` → after: `L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6210) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6210)

```diff
-           case dr:
+           case Ee:
```

#### 184. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6212` → after: `L6212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6212) · [Before (L6212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6212)

```diff
-           case yr:
+           case Be:
```

#### 185. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6214` → after: `L6214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6214) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6214)

```diff
-           case lr:
+           case je:
```

#### 186. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6319` → after: `L6319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6319) · [Before (L6319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6319)

```diff
-             iM = SM ? ri(MM) ? new jM : [] : Oi(jM) ? ji(OM = Or(MM)) ? Sr(OM) : {} : {}
+             xV = YV ? ex(VV) ? new UV : [] : Jx(UV) ? Ux(JV = Je(VV)) ? Ye(JV) : {} : {}
```

#### 187. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6321` → after: `L6321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6321) · [Before (L6321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6321)

```diff
-         return (SM ? YM : Wr)(MM, (function(MM, OM, SM) {
+         return (YV ? cV : Re)(VV, (function(VV, JV, YV) {
```

#### 188. `bundles/bloxd.io/chunks/js/160.js` (Changed code · before: `L6328` → after: `L6328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786R6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-a9f19f5c19e45a647c0fa6ff6f54b44a02070e41c6e9100d3d25fbaca95e3786) · [After (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/160.js#L6328) · [Before (L6328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/160.js#L6328)

```diff
-       h: Yj
+       o: aU
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/161.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/161.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907)

#### 1. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L4)

```diff
-   7190: (MM, rM, iM) => {
+   7274: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L9-L13` → after: `L9-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L9-L13) · [Before (L9-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L9-L13)

```diff
-     var OM = iM(1367),
-       SM = iM(1177),
-       jM = iM(3868),
-       aM = iM(625),
-       PM = iM(1821);
+     var JV = xV(1389),
+       YV = xV(1213),
+       UV = xV(3919),
+       yV = xV(657),
+       pV = xV(1820);
```

#### 3. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L20)

```diff
-         for (let MM = 0; MM < 50 && !window.$msstart; MM++) await (0, aM.Q)(100)
+         for (let VV = 0; VV < 50 && !window.$msstart; VV++) await (0, yV.R)(100)
```

#### 4. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L26)

```diff
-         if (null !== (0, PM.b)()) return new LM;
+         if (null !== (0, pV.c)()) return new ZV;
```

#### 5. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L28)

```diff
-           await Promise.race([zM(), (0, aM.Q)(1e4).then((() => {
+           await Promise.race([wV(), (0, yV.R)(1e4).then((() => {
```

#### 6. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L34)

```diff
-         return window.$msstart ? new LM : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
+         return window.$msstart ? new ZV : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
```

#### 7. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L37)

```diff
-         const MM = (0, PM.b)();
+         const VV = (0, pV.c)();
```

#### 8. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L40)

```diff
-           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, aM.Q)(1e4).then((() => {
+           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, yV.R)(1e4).then((() => {
```

#### 9. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L49)

```diff
-         return null !== (MM = (0, PM.b)()) && void 0 !== MM ? MM : await window.$msstart.signInAsync()
+         return null !== (VV = (0, pV.c)()) && void 0 !== VV ? VV : await window.$msstart.signInAsync()
```

#### 10. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L103)

```diff
-     class JM extends OM.d {
+     class bV extends JV.b {
```

#### 11. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L122)

```diff
-         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,jM.b)(MM)}: msn placement is already showing so not requesting`);
+         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,UV.e)(VV)}: msn placement is already showing so not requesting`);
```

#### 12. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L124)

```diff
-         if ((0, aM.J)(rM)) return void console.warn(`AD ${(0,jM.b)(MM)}: no msn placement is configured for this bloxd placement so not showing any ad`);
+         if ((0, yV.J)(eV)) return void console.warn(`AD ${(0,UV.e)(VV)}: no msn placement is configured for this bloxd placement so not showing any ad`);
```

#### 13. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L139-L140` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L139-L140) · [Before (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L139-L140)

```diff
-           console.log(`AD ${(0,jM.b)(MM)}: Attempting to show msn units: `, iM);
-           const rM = iM.map((MM => `${MM.placement}:${MM.width}x${MM.height}`));
+           console.log(`AD ${(0,UV.e)(VV)}: Attempting to show msn units: `, xV);
+           const eV = xV.map((VV => `${VV.placement}:${VV.width}x${VV.height}`));
```

#### 14. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L142)

```diff
-             placementId: (0, jM.b)(MM),
+             placementId: (0, UV.e)(VV),
```

#### 15. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L144)

```diff
-               console.log(`AD ${(0,jM.b)(MM)}: Successfully request msn banner ad`)
+               console.log(`AD ${(0,UV.e)(VV)}: Successfully request msn banner ad`)
```

#### 16. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L146)

```diff
-               console.log(`AD ${(0,jM.b)(MM)}: Error while requesting msn banner ad`, rM)
+               console.log(`AD ${(0,UV.e)(VV)}: Error while requesting msn banner ad`, eV)
```

#### 17. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L149)

```diff
-         } else console.warn(`AD ${(0,jM.b)(MM)}: couldn't find an msn unit that fit screen size`)
+         } else console.warn(`AD ${(0,UV.e)(VV)}: couldn't find an msn unit that fit screen size`)
```

#### 18. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L152)

```diff
-         null !== this.currentlyShowingBannerPlacement && (0, jM.b)(MM) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,jM.b)(MM)}: Attempting to clear msn banner ads for banner`, MM), await this.clearAllBannerAds())
+         null !== this.currentlyShowingBannerPlacement && (0, UV.e)(VV) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,UV.e)(VV)}: Attempting to clear msn banner ads for banner`, VV), await this.clearAllBannerAds())
```

#### 19. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L166)

```diff
-           console.error(`AD: Error while playing MSN ${MM} ad: `, rM), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), iM()
+           console.error(`AD: Error while playing MSN ${VV} ad: `, eV), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), xV()
```

#### 20. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L169)

```diff
-           console.log(`AD: Attempting to play MSN ${MM} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
+           console.log(`AD: Attempting to play MSN ${VV} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
```

#### 21. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L174)

```diff
-               this.clearAllBannerAds(), await OM.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${MM} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), rM()
+               this.clearAllBannerAds(), await JV.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${VV} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), eV()
```

#### 22. `bundles/bloxd.io/chunks/js/161.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-2894d58c671bf93391f2c5856e3b40edf88d87492edde981469ec380494eb907) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/161.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/161.js#L182)

```diff
-         } else OM(`AD: Can't play MSN ${MM} ad because sdk is not loaded`)
+         } else JV(`AD: Can't play MSN ${VV} ad because sdk is not loaded`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/162.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/162.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e)

#### 1. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/162.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/162.js#L4)

```diff
-   7195: (MM, rM, iM) => {
+   7282: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/162.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-bd1115cac592918f7c9d8d92a8cba58af9d4fdb9215555a8bf686ff6f2865d6e) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/162.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/162.js#L8-L10)

```diff
-     var OM = iM(1367),
-       SM = iM(1177);
-     class jM extends OM.d {
+     var JV = xV(1389),
+       YV = xV(1213);
+     class UV extends JV.b {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/163.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/163.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838)

#### 1. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/163.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/163.js#L4)

```diff
-   7204: (MM, rM, iM) => {
+   7290: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/163.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-5f5ae29c9b42b5b008e75ee5dcb57d151ab9b6551fb96b32dc691d43c1dc9838) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/163.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/163.js#L8-L10)

```diff
-     var OM = iM(1367),
-       SM = iM(1177);
-     class jM extends OM.d {
+     var JV = xV(1389),
+       YV = xV(1213);
+     class UV extends JV.b {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/164.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/164.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711)

#### 1. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L4)

```diff
-   7206: (MM, rM, iM) => {
+   7293: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L8-L13)

```diff
-     var OM = iM(1367),
-       SM = iM(19),
-       jM = iM(1771),
-       aM = iM(119),
-       PM = iM(3868),
-       nM = iM(332);
+     var JV = xV(1389),
+       YV = xV(27),
+       UV = xV(1781),
+       yV = xV(138),
+       pV = xV(3919),
+       QV = xV(375);
```

#### 3. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L40)

```diff
-     class zM extends OM.d {
+     class wV extends JV.b {
```

#### 4. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L42)

```diff
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = QM[MM], jM.e.on("ads.bannerStatus", (MM => {
+         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = nV[VV], UV.b.on("ads.bannerStatus", (VV => {
```

#### 5. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L49)

```diff
-           this.bannerFirstResponseSeen.add(rM), SM ? iM ? console.log(`AD ${rM}: AdMob banner loaded`) : console.warn(`AD ${rM}: AdMob banner failed to load: ${OM}`) : iM || console.warn(`AD ${rM}: AdMob banner refresh failed: ${OM}`)
+           this.bannerFirstResponseSeen.add(eV), YV ? xV ? console.log(`AD ${eV}: AdMob banner loaded`) : console.warn(`AD ${eV}: AdMob banner failed to load: ${JV}`) : xV || console.warn(`AD ${eV}: AdMob banner refresh failed: ${JV}`)
```

#### 6. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L54)

```diff
-         return console.log(`AD: AdMobSDK initialised for ${MM}`), new zM(MM)
+         return console.log(`AD: AdMobSDK initialised for ${VV}`), new wV(VV)
```

#### 7. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L57)

```diff
-         return this.fullScreenAdsInFlight++, SM.d.set({
+         return this.fullScreenAdsInFlight++, YV.b.set({
```

#### 8. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L60)

```diff
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && SM.d.set({
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && YV.b.set({
```

#### 9. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L67)

```diff
-         this.muteGameDuring(jM.e.request("ads.showRewarded", {
+         this.muteGameDuring(UV.b.request("ads.showRewarded", {
```

#### 10. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L75)

```diff
-           console.warn(`AD ${iM}: AdMob rewarded failed:`, MM), rM()
+           console.warn(`AD ${xV}: AdMob rewarded failed:`, VV), eV()
```

#### 11. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L80)

```diff
-         this.muteGameDuring(jM.e.request("ads.showInterstitial", {
+         this.muteGameDuring(UV.b.request("ads.showInterstitial", {
```

#### 12. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L85)

```diff
-           console.warn(`AD ${iM}: AdMob interstitial failed:`, rM), MM()
+           console.warn(`AD ${xV}: AdMob interstitial failed:`, eV), VV()
```

#### 13. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L89)

```diff
-         const rM = (0, PM.b)(MM),
+         const eV = (0, pV.e)(VV),
```

#### 14. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L93)

```diff
-         if (!OM) return void console.warn(`AD ${rM}: AdMob renderBanner called but div ${MM.divId} is not in DOM`);
+         if (!JV) return void console.warn(`AD ${eV}: AdMob renderBanner called but div ${VV.divId} is not in DOM`);
```

#### 15. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L97)

```diff
-         if (0 === aM || 0 === QM) return void console.warn(`AD ${rM}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         if (0 === yV || 0 === nV) return void console.warn(`AD ${eV}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
```

#### 16. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L99-L102` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L99-L102) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L99-L102)

```diff
-           x1: nM.d.clamp(SM.left / aM * 100, 0, 100),
-           y1: nM.d.clamp(SM.top / QM * 100, 0, 100),
-           x2: nM.d.clamp(SM.right / aM * 100, 0, 100),
-           y2: nM.d.clamp(SM.bottom / QM * 100, 0, 100)
+           x1: QV.b.clamp(YV.left / yV * 100, 0, 100),
+           y1: QV.b.clamp(YV.top / nV * 100, 0, 100),
+           x2: QV.b.clamp(YV.right / yV * 100, 0, 100),
+           y2: QV.b.clamp(YV.bottom / nV * 100, 0, 100)
```

#### 17. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L104` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L104) · [Before (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L104)

```diff
-         this.bannerPlacementByBloxdId.set(rM, iM), console.log(`AD ${rM}: AdMob renderBanner placementId=${iM} box=`, zM), jM.e.emit("ads.showBanner", {
+         this.bannerPlacementByBloxdId.set(eV, xV), console.log(`AD ${eV}: AdMob renderBanner placementId=${xV} box=`, wV), UV.b.emit("ads.showBanner", {
```

#### 18. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L110)

```diff
-         const rM = (0, PM.b)(MM),
+         const eV = (0, pV.e)(VV),
```

#### 19. `bundles/bloxd.io/chunks/js/164.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-e292d646f035ba33ad7dab3cb857dca2cbfc93d9ec0a6d63b66a06cf52efb711) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/164.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/164.js#L112)

```diff
-         void 0 !== iM && (this.bannerPlacementByBloxdId.delete(rM), this.bannerFirstResponseSeen.delete(iM), console.log(`AD ${rM}: AdMob clearBanner placementId=${iM}`), jM.e.emit("ads.hideBanner", {
+         void 0 !== xV && (this.bannerPlacementByBloxdId.delete(eV), this.bannerFirstResponseSeen.delete(xV), console.log(`AD ${eV}: AdMob clearBanner placementId=${xV}`), UV.b.emit("ads.hideBanner", {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/165.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/165.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c)

#### 1. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L4)

```diff
-   7221: (MM, rM, iM) => {
+   7301: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L8)

```diff
-     var OM = iM(3241);
+     var JV = xV(3245);
```

#### 3. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L44)

```diff
-   7215: (MM, rM, iM) => {
+   7299: (VV, eV, xV) => {
```

#### 4. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L48-L52` → after: `L48-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L48-L52) · [Before (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L48-L52)

```diff
-     var OM = iM(1367),
-       SM = iM(1177),
-       jM = iM(212),
-       aM = iM(7221),
-       PM = iM(3241);
+     var JV = xV(1389),
+       YV = xV(1213),
+       UV = xV(255),
+       yV = xV(7301),
+       pV = xV(3245);
```

#### 5. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L54)

```diff
-     class QM extends OM.d {
+     class nV extends JV.b {
```

#### 6. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L75)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (rM ? ` (alias: ${rM})` : "")), window.aiptag.cmd.player.push((function() {
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (eV ? ` (alias: ${eV})` : "")), window.aiptag.cmd.player.push((function() {
```

#### 7. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L92)

```diff
-         })), console.log("AD: Requested aip banner", document.getElementById(MM.divId), iM ? `(alias: ${iM})` : "")
+         })), console.log("AD: Requested aip banner", document.getElementById(VV.divId), xV ? `(alias: ${xV})` : "")
```

#### 8. `bundles/bloxd.io/chunks/js/165.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066cR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-4d758bfb58545f217dd9b83662ee3b088eac74c644f701dddb45273efef8066c) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/165.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/165.js#L97)

```diff
-         })), console.log(`AD: Clearing aip banner ad ${MM.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
+         })), console.log(`AD: Clearing aip banner ad ${VV.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/166.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/166.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122)

#### 1. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L4)

```diff
-   7221: (MM, rM, iM) => {
+   7301: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L8)

```diff
-     var OM = iM(3241);
+     var JV = xV(3245);
```

#### 3. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L44)

```diff
-   7238: (MM, rM, iM) => {
+   7311: (VV, eV, xV) => {
```

#### 4. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L48-L51` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L48-L51) · [Before (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L48-L51)

```diff
-     var OM = iM(1367),
-       SM = iM(1177),
-       jM = iM(7221),
-       aM = iM(3241);
+     var JV = xV(1389),
+       YV = xV(1213),
+       UV = xV(7301),
+       yV = xV(3245);
```

#### 5. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L53)

```diff
-     class nM extends OM.d {
+     class QV extends JV.b {
```

#### 6. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L72)

```diff
-           const SM = document.getElementById(null !== (rM = null === (iM = MM.detail) || void 0 === iM || null === (OM = iM.adInfo) || void 0 === OM ? void 0 : OM.adUnitCode) && void 0 !== rM ? rM : "");
+           const YV = document.getElementById(null !== (eV = null === (xV = VV.detail) || void 0 === xV || null === (JV = xV.adInfo) || void 0 === JV ? void 0 : JV.adUnitCode) && void 0 !== eV ? eV : "");
```

#### 7. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L110)

```diff
-               if (!MM) return console.log(`AD: Nitro video not filled: ${rM}`), void aM(!1);
+               if (!VV) return console.log(`AD: Nitro video not filled: ${eV}`), void yV(!1);
```

#### 8. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L135)

```diff
-           HM.textContent = `Skip ad in ${hM}s`, hM--
+           rV.textContent = `Skip ad in ${kV}s`, kV--
```

#### 9. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L157)

```diff
-         } = MM, SM = `${rM}-nitro`;
+         } = VV, YV = `${eV}-nitro`;
```

#### 10. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L159)

```diff
-         null === jM && (jM = document.createElement("div"), jM.id = SM, jM.className = "NitroBanner", jM.style.setProperty("--nitro-slot-width", `${iM}px`), jM.style.setProperty("--nitro-slot-height", `${OM}px`), document.getElementById(rM).appendChild(jM));
+         null === UV && (UV = document.createElement("div"), UV.id = YV, UV.className = "NitroBanner", UV.style.setProperty("--nitro-slot-width", `${xV}px`), UV.style.setProperty("--nitro-slot-height", `${JV}px`), document.getElementById(eV).appendChild(UV));
```

#### 11. `bundles/bloxd.io/chunks/js/166.js` (Changed code · before: `L166-L167` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-8c626a05b92aed4f4e5a195c9777a4bc22d3219f125208fae546ec918c712122) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/166.js#L166-L167) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/166.js#L166-L167)

```diff
-           console.error(`AD: Nitro failed to create banner ${SM}:`, MM)
-         })), console.log(`AD: Requested Nitro banner ${SM}`)
+           console.error(`AD: Nitro failed to create banner ${YV}:`, VV)
+         })), console.log(`AD: Requested Nitro banner ${YV}`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/167.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/167.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9)

#### 1. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/167.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/167.js#L4)

```diff
-   7228: (MM, rM, iM) => {
+   7306: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/167.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-3107cbcb7455107f151868651358fcb88546fd60ef20a420c0ffd2a678078ff9) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/167.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/167.js#L8-L10)

```diff
-     var OM = iM(1367),
-       SM = iM(1177);
-     class jM extends OM.d {
+     var JV = xV(1389),
+       YV = xV(1213);
+     class UV extends JV.b {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/168.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/168.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf)

#### 1. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L4)

```diff
-   7230: (MM, rM, iM) => {
+   7308: (VV, eV, xV) => {
```

#### 2. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L8-L9)

```diff
-     var OM = iM(1367),
-       SM = iM(1177);
+     var JV = xV(1389),
+       YV = xV(1213);
```

#### 3. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L14)

```diff
-     class aM extends OM.d {
+     class yV extends JV.b {
```

#### 4. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L39)

```diff
-         return `pb-slot-bloxdio-${rM}-${iM}${MM>1?`-${MM}`:""}`
+         return `pb-slot-bloxdio-${eV}-${xV}${VV>1?`-${VV}`:""}`
```

#### 5. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L48)

```diff
-             console.error(`AD: Error while playing Aditude video ad: ${MM}:`, rM), aM(), iM()
+             console.error(`AD: Error while playing Aditude video ad: ${VV}:`, eV), yV(), xV()
```

#### 6. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L50)

```diff
-         if (console.log(`AD: Requesting Aditude ${MM} ad`), void 0 === (null === (OM = window.tude) || void 0 === OM ? void 0 : OM.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${MM} ad playing`), void PM("Aditude ad lib not loaded", null);
+         if (console.log(`AD: Requesting Aditude ${VV} ad`), void 0 === (null === (JV = window.tude) || void 0 === JV ? void 0 : JV.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${VV} ad playing`), void pV("Aditude ad lib not loaded", null);
```

#### 7. `bundles/bloxd.io/chunks/js/168.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bfR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-82e6eaded1a94451e3bf4f3e618cc3b244fa73535869c681835545931c7303bf) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/168.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/168.js#L60)

```diff
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${MM} ad`), aM(), rM()
+                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${VV} ad`), yV(), eV()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/169.js` (fo1voe.f743fbcf → pxmq3aq.c63b303d)

- **File**: `bundles/bloxd.io/chunks/js/169.js` (532 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2)

#### 1. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L1)

```diff
- /*! For license information please see fo1voe.169.69dda7f7.chunk.js.LICENSE.txt */
+ /*! For license information please see pxmq3aq.169.88f23af5.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L5-L7` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L5-L7) · [Before (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L5-L7)

```diff
-   7259: (MM, rM, iM) => {
-     var OM = iM(7263);
-     rM.e = {
+   7334: (VV, eV, xV) => {
+     var JV = xV(7342);
+     eV.b = {
```

#### 3. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L11)

```diff
-     }, rM.i = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.c = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 4. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L13-L15` → after: `L13-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L13-L15) · [Before (L13-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L13-L15)

```diff
-   7265: (MM, rM, iM) => {
-     var OM = iM(7273);
-     rM.d = {
+   7344: (VV, eV, xV) => {
+     var JV = xV(7352);
+     eV.c = {
```

#### 5. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L19)

```diff
-     }, rM.f = rM.d, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.g = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 6. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L21)

```diff
-   7275: (MM, rM) => {
+   7355: (VV, eV) => {
```

#### 7. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L32)

```diff
-   7282: (MM, rM) => {
+   7360: (VV, eV) => {
```

#### 8. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L37)

```diff
-     rM.b = {
+     eV.d = {
```

#### 9. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L41)

```diff
-     }, rM.d = rM.b
+     }, eV.g = eV.d
```

#### 10. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L43)

```diff
-   7273: (MM, rM) => {
+   7352: (VV, eV) => {
```

#### 11. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L57)

```diff
-   7288: (MM, rM) => {
+   7362: (VV, eV) => {
```

#### 12. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L62)

```diff
-     rM.d = {
+     eV.e = {
```

#### 13. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L66)

```diff
-     }, rM.g = rM.d
+     }, eV.f = eV.e
```

#### 14. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L68)

```diff
-   7296: (MM, rM) => {
+   7366: (VV, eV) => {
```

#### 15. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L73)

```diff
-     rM.c = {
+     eV.d = {
```

#### 16. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L77)

```diff
-     }, rM.g = rM.c
+     }, eV.f = eV.d
```

#### 17. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L79)

```diff
-   7302: (MM, rM) => {
+   7371: (VV, eV) => {
```

#### 18. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L84)

```diff
-     rM.d = {
+     eV.e = {
```

#### 19. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L88)

```diff
-     }, rM.f = rM.d
+     }, eV.g = eV.e
```

#### 20. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L90)

```diff
-   7304: (MM, rM) => {
+   7375: (VV, eV) => {
```

#### 21. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L95)

```diff
-     rM.c = {
+     eV.e = {
```

#### 22. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L99` → after: `L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L99) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L99)

```diff
-     }, rM.f = rM.c
+     }, eV.f = eV.e
```

#### 23. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L101)

```diff
-   7307: (MM, rM) => {
+   7378: (VV, eV) => {
```

#### 24. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L110)

```diff
-     }, rM.i = rM.e
+     }, eV.h = eV.e
```

#### 25. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L112)

```diff
-   7311: (MM, rM) => {
+   7381: (VV, eV) => {
```

#### 26. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L126-L128` → after: `L126-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L126-L128) · [Before (L126-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L126-L128)

```diff
-   7319: (MM, rM, iM) => {
-     var OM = iM(7328);
-     rM.b = {
+   7387: (VV, eV, xV) => {
+     var JV = xV(7396);
+     eV.c = {
```

#### 27. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L132)

```diff
-     }, rM.d = rM.b, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.e = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 28. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L134-L135` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L134-L135) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L134-L135)

```diff
-   7330: (MM, rM, iM) => {
-     var OM = iM(7338);
+   7403: (VV, eV, xV) => {
+     var JV = xV(7410);
```

#### 29. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L140` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L140) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L140)

```diff
-     }, rM.f = rM.c, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.d = eV.c, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 30. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L142)

```diff
-   7338: (MM, rM) => {
+   7410: (VV, eV) => {
```

#### 31. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L156)

```diff
-   7342: (MM, rM) => {
+   7418: (VV, eV) => {
```

#### 32. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L170)

```diff
-   7328: (MM, rM) => {
+   7396: (VV, eV) => {
```

#### 33. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L184)

```diff
-   7350: (MM, rM) => {
+   7427: (VV, eV) => {
```

#### 34. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L195)

```diff
-   7353: (MM, rM) => {
+   7432: (VV, eV) => {
```

#### 35. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L200)

```diff
-     rM.b = {
+     eV.c = {
```

#### 36. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L204)

```diff
-     }, rM.e = rM.b
+     }, eV.e = eV.c
```

#### 37. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L206)

```diff
-   7359: (MM, rM) => {
+   7441: (VV, eV) => {
```

#### 38. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L210)

```diff
-     rM.d = {
+     eV.c = {
```

#### 39. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L214)

```diff
-     }, rM.h = rM.d
+     }, eV.f = eV.c
```

#### 40. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L216)

```diff
-   7368: (MM, rM) => {
+   7445: (VV, eV) => {
```

#### 41. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L230)

```diff
-   7370: (MM, rM) => {
+   7450: (VV, eV) => {
```

#### 42. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L234)

```diff
-     rM.d = {
+     eV.e = {
```

#### 43. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L238)

```diff
-     }, rM.h = rM.d
+     }, eV.h = eV.e
```

#### 44. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L240)

```diff
-   7378: (MM, rM) => {
+   7459: (VV, eV) => {
```

#### 45. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L245)

```diff
-     rM.c = {
+     eV.b = {
```

#### 46. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L249)

```diff
-     }, rM.f = rM.c
+     }, eV.d = eV.b
```

#### 47. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L251)

```diff
-   7386: (MM, rM) => {
+   7463: (VV, eV) => {
```

#### 48. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L256)

```diff
-     rM.c = {
+     eV.b = {
```

#### 49. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L260)

```diff
-     }, rM.g = rM.c
+     }, eV.d = eV.b
```

#### 50. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L262)

```diff
-   7392: (MM, rM) => {
+   7467: (VV, eV) => {
```

#### 51. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L271)

```diff
-     }, rM.f = rM.d
+     }, eV.e = eV.d
```

#### 52. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L273)

```diff
-   7398: (MM, rM) => {
+   7476: (VV, eV) => {
```

#### 53. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L287)

```diff
-   7404: (MM, rM) => {
+   7484: (VV, eV) => {
```

#### 54. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L292)

```diff
-     rM.b = {
+     eV.e = {
```

#### 55. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L296)

```diff
-     }, rM.d = rM.b
+     }, eV.f = eV.e
```

#### 56. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L298)

```diff
-   7409: (MM, rM) => {
+   7489: (VV, eV) => {
```

#### 57. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L303)

```diff
-     rM.d = {
+     eV.e = {
```

#### 58. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L307)

```diff
-     }, rM.h = rM.d
+     }, eV.f = eV.e
```

#### 59. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L309)

```diff
-   7424: (MM, rM) => {
+   7499: (VV, eV) => {
```

#### 60. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L323-L325` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L323-L325) · [Before (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L323-L325)

```diff
-   7416: (MM, rM, iM) => {
-     var OM = iM(7424);
-     rM.e = {
+   7492: (VV, eV, xV) => {
+     var JV = xV(7499);
+     eV.d = {
```

#### 61. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L329)

```diff
-     }, rM.g = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.e = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 62. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L331` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L331) · [Before (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L331)

```diff
-   7431: (MM, rM) => {
+   7504: (VV, eV) => {
```

#### 63. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L336)

```diff
-     rM.d = {
+     eV.b = {
```

#### 64. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L340)

```diff
-     }, rM.h = rM.d
+     }, eV.d = eV.b
```

#### 65. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L342)

```diff
-   7435: (MM, rM) => {
+   7509: (VV, eV) => {
```

#### 66. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L347)

```diff
-     rM.e = {
+     eV.c = {
```

#### 67. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L351)

```diff
-     }, rM.f = rM.e
+     }, eV.f = eV.c
```

#### 68. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L353` → after: `L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L353) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L353)

```diff
-   7442: (MM, rM) => {
+   7517: (VV, eV) => {
```

#### 69. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L358)

```diff
-     rM.d = {
+     eV.c = {
```

#### 70. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L362)

```diff
-     }, rM.g = rM.d
+     }, eV.f = eV.c
```

#### 71. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L364)

```diff
-   7447: (MM, rM) => {
+   7526: (VV, eV) => {
```

#### 72. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L369)

```diff
-     rM.e = {
+     eV.b = {
```

#### 73. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L373)

```diff
-     }, rM.g = rM.e
+     }, eV.d = eV.b
```

#### 74. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L375)

```diff
-   7456: (MM, rM) => {
+   7531: (VV, eV) => {
```

#### 75. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L380` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L380) · [Before (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L380)

```diff
-     rM.c = {
+     eV.e = {
```

#### 76. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L384)

```diff
-     }, rM.d = rM.c
+     }, eV.h = eV.e
```

#### 77. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L386)

```diff
-   7460: (MM, rM) => {
+   7539: (VV, eV) => {
```

#### 78. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L400)

```diff
-   7468: (MM, rM) => {
+   7543: (VV, eV) => {
```

#### 79. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L405)

```diff
-     rM.b = {
+     eV.e = {
```

#### 80. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L409)

```diff
-     }, rM.d = rM.b
+     }, eV.h = eV.e
```

#### 81. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L411)

```diff
-   7470: (MM, rM) => {
+   7546: (VV, eV) => {
```

#### 82. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L416)

```diff
-     rM.e = {
+     eV.d = {
```

#### 83. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L420)

```diff
-     }, rM.g = rM.e
+     }, eV.e = eV.d
```

#### 84. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L422)

```diff
-   7476: (MM, rM) => {
+   7553: (VV, eV) => {
```

#### 85. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L427)

```diff
-     rM.d = {
+     eV.e = {
```

#### 86. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L431)

```diff
-     }, rM.f = rM.d
+     }, eV.i = eV.e
```

#### 87. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L433)

```diff
-   7478: (MM, rM) => {
+   7558: (VV, eV) => {
```

#### 88. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L444)

```diff
-   7486: (MM, rM) => {
+   7563: (VV, eV) => {
```

#### 89. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L449)

```diff
-     rM.e = {
+     eV.c = {
```

#### 90. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L453)

```diff
-     }, rM.i = rM.e
+     }, eV.g = eV.c
```

#### 91. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L455)

```diff
-   7492: (MM, rM) => {
+   7571: (VV, eV) => {
```

#### 92. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L460` → after: `L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L460) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L460)

```diff
-     rM.c = {
+     eV.b = {
```

#### 93. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L464)

```diff
-     }, rM.e = rM.c
+     }, eV.f = eV.b
```

#### 94. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L466)

```diff
-   7499: (MM, rM) => {
+   7574: (VV, eV) => {
```

#### 95. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L480)

```diff
-   7501: (MM, rM) => {
+   7582: (VV, eV) => {
```

#### 96. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L494)

```diff
-   7503: (MM, rM) => {
+   7584: (VV, eV) => {
```

#### 97. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L499)

```diff
-     rM.c = {
+     eV.d = {
```

#### 98. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L503` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L503) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L503)

```diff
-     }, rM.d = rM.c
+     }, eV.g = eV.d
```

#### 99. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L505)

```diff
-   7508: (MM, rM) => {
+   7587: (VV, eV) => {
```

#### 100. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L519)

```diff
-   7516: (MM, rM) => {
+   7590: (VV, eV) => {
```

#### 101. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L524)

```diff
-     rM.c = {
+     eV.b = {
```

#### 102. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L528)

```diff
-     }, rM.d = rM.c
+     }, eV.e = eV.b
```

#### 103. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L530` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L530) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L530)

```diff
-   7525: (MM, rM) => {
+   7596: (VV, eV) => {
```

#### 104. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L541-L542` → after: `L541-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L541-L542) · [Before (L541-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L541-L542)

```diff
-   7530: (MM, rM, iM) => {
-     var OM = iM(7535);
+   7601: (VV, eV, xV) => {
+     var JV = xV(7604);
```

#### 105. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L547` → after: `L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L547) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L547)

```diff
-     }, rM.i = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.f = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 106. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L549` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L549) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L549)

```diff
-   7539: (MM, rM) => {
+   7610: (VV, eV) => {
```

#### 107. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L554)

```diff
-     rM.c = {
+     eV.d = {
```

#### 108. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L558)

```diff
-     }, rM.f = rM.c
+     }, eV.h = eV.d
```

#### 109. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L560)

```diff
-   7541: (MM, rM) => {
+   7615: (VV, eV) => {
```

#### 110. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L574-L576` → after: `L574-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L574-L576) · [Before (L574-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L574-L576)

```diff
-   7548: (MM, rM, iM) => {
-     var OM = iM(7541);
-     rM.b = {
+   7617: (VV, eV, xV) => {
+     var JV = xV(7615);
+     eV.d = {
```

#### 111. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L580` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L580) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L580)

```diff
-     }, rM.c = rM.b, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.g = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 112. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L582)

```diff
-   7555: (MM, rM) => {
+   7622: (VV, eV) => {
```

#### 113. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L591)

```diff
-     }, rM.d = rM.b
+     }, eV.e = eV.b
```

#### 114. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L593)

```diff
-   7560: (MM, rM) => {
+   7631: (VV, eV) => {
```

#### 115. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L607)

```diff
-   7569: (MM, rM) => {
+   7638: (VV, eV) => {
```

#### 116. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L612)

```diff
-     rM.c = {
+     eV.e = {
```

#### 117. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L616)

```diff
-     }, rM.g = rM.c
+     }, eV.i = eV.e
```

#### 118. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L618)

```diff
-   7578: (MM, rM) => {
+   7643: (VV, eV) => {
```

#### 119. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L623)

```diff
-     rM.d = {
+     eV.b = {
```

#### 120. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L627)

```diff
-     }, rM.e = rM.d
+     }, eV.f = eV.b
```

#### 121. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L629)

```diff
-   7587: (MM, rM) => {
+   7649: (VV, eV) => {
```

#### 122. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L634` → after: `L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L634) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L634)

```diff
-     rM.b = {
+     eV.d = {
```

#### 123. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L638)

```diff
-     }, rM.c = rM.b
+     }, eV.e = eV.d
```

#### 124. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L640)

```diff
-   7590: (MM, rM) => {
+   7657: (VV, eV) => {
```

#### 125. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L645)

```diff
-     rM.e = {
+     eV.b = {
```

#### 126. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L649` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L649) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L649)

```diff
-     }, rM.h = rM.e
+     }, eV.c = eV.b
```

#### 127. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L651)

```diff
-   7593: (MM, rM) => {
+   7659: (VV, eV) => {
```

#### 128. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L660)

```diff
-     }, rM.e = rM.b
+     }, eV.c = eV.b
```

#### 129. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L662)

```diff
-   7596: (MM, rM) => {
+   7661: (VV, eV) => {
```

#### 130. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L667` → after: `L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L667) · [Before (L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L667)

```diff
-     rM.e = {
+     eV.d = {
```

#### 131. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L671)

```diff
-     }, rM.h = rM.e
+     }, eV.h = eV.d
```

#### 132. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L673-L675` → after: `L673-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L673-L675) · [Before (L673-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L673-L675)

```diff
-   7605: (MM, rM, iM) => {
-     var OM = iM(7612);
-     rM.e = {
+   7669: (VV, eV, xV) => {
+     var JV = xV(7673);
+     eV.b = {
```

#### 133. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L679)

```diff
-     }, rM.f = rM.e, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.d = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 134. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L681` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L681) · [Before (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L681)

```diff
-   7615: (MM, rM) => {
+   7679: (VV, eV) => {
```

#### 135. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L686` → after: `L686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L686) · [Before (L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L686)

```diff
-     rM.e = {
+     eV.b = {
```

#### 136. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L690` → after: `L690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L690) · [Before (L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L690)

```diff
-     }, rM.f = rM.e
+     }, eV.d = eV.b
```

#### 137. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L692` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L692) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L692)

```diff
-   7623: (MM, rM) => {
+   7685: (VV, eV) => {
```

#### 138. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L697)

```diff
-     rM.b = {
+     eV.d = {
```

#### 139. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L701)

```diff
-     }, rM.d = rM.b
+     }, eV.h = eV.d
```

#### 140. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L703-L705` → after: `L703-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L703-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L703-L705) · [Before (L703-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L703-L705)

```diff
-   7628: (MM, rM, iM) => {
-     var OM = iM(7632);
-     rM.c = {
+   7689: (VV, eV, xV) => {
+     var JV = xV(7695);
+     eV.b = {
```

#### 141. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L709)

```diff
-     }, rM.g = rM.c, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.e = eV.b, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 142. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L711)

```diff
-   7635: (MM, rM) => {
+   7704: (VV, eV) => {
```

#### 143. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L716)

```diff
-     rM.c = {
+     eV.e = {
```

#### 144. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L720)

```diff
-     }, rM.g = rM.c
+     }, eV.h = eV.e
```

#### 145. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L722)

```diff
-   7637: (MM, rM) => {
+   7708: (VV, eV) => {
```

#### 146. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L727` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L727) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L727)

```diff
-     rM.d = {
+     eV.b = {
```

#### 147. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L731` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L731) · [Before (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L731)

```diff
-     }, rM.e = rM.d
+     }, eV.c = eV.b
```

#### 148. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L733` → after: `L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L733) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L733)

```diff
-   7646: (MM, rM) => {
+   7715: (VV, eV) => {
```

#### 149. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L738)

```diff
-     rM.b = {
+     eV.e = {
```

#### 150. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L742)

```diff
-     }, rM.c = rM.b
+     }, eV.g = eV.e
```

#### 151. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L744-L746` → after: `L744-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L744-L746) · [Before (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L744-L746)

```diff
-   7651: (MM, rM, iM) => {
-     var OM = iM(7659);
-     rM.c = {
+   7720: (VV, eV, xV) => {
+     var JV = xV(7726);
+     eV.d = {
```

#### 152. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L750)

```diff
-     }, rM.f = rM.c, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.e = eV.d, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 153. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L752` → after: `L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L752) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L752)

```diff
-   7664: (MM, rM) => {
+   7734: (VV, eV) => {
```

#### 154. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L766-L768` → after: `L766-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L766-L768) · [Before (L766-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L766-L768)

```diff
-   7669: (MM, rM, iM) => {
-     var OM = iM(7664);
-     rM.d = {
+   7740: (VV, eV, xV) => {
+     var JV = xV(7734);
+     eV.e = {
```

#### 155. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L772)

```diff
-     }, rM.e = rM.d, OM.prefix, OM.iconName, OM.width, OM.height, OM.aliases, OM.unicode, OM.svgPathData, OM.aliases
+     }, eV.i = eV.e, JV.prefix, JV.iconName, JV.width, JV.height, JV.aliases, JV.unicode, JV.svgPathData, JV.aliases
```

#### 156. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L774` → after: `L774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L774) · [Before (L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L774)

```diff
-   7678: (MM, rM) => {
+   7748: (VV, eV) => {
```

#### 157. `bundles/bloxd.io/chunks/js/169.js` (Changed code · before: `L782` → after: `L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2R782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1fe1b99f09c3d04c910c2e3914743a4f3c280011...build/bloxd.io/pxmq3aq.c63b303d#diff-25b9c4637dd9f78b3cedb218e9dbbb55a1c2d772b32f6d6813dd08535e580fc2) · [After (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/pxmq3aq.c63b303d/bundles/bloxd.io/chunks/js/169.js#L782) · [Before (L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1fe1b99f09c3d04c910c2e3914743a4f3c280011/bundles/bloxd.io/chunks/js/169.js#L782)

```diff
-     }, rM.i = rM.e
+     }, eV.g = eV.e
```
