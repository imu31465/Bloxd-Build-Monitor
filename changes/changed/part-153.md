# Changed — Bundle Modifications Report (Part 153 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `153 / 154` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 152](part-152.md) · [Part 154 →](part-154.md)

## `bloxd.io` · `bundles/bloxd.io/main.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/main.js` (1829 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1256. `bundles/bloxd.io/main.js` (Changed code · before: `L22671-L22680` → after: `L22671-L22680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22671-L22680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22671-L22680) · [Before (L22671-L22680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22671-L22680)

```diff
-           var sr = Qr(1815),
-             ur = Qr(26),
-             rS = Qr(170),
-             SS = Qr(1828),
-             QS = Qr(1846),
-             ZS = Qr(1912),
-             WS = Qr(1929),
-             aS = Qr(1940),
-             jS = Qr(712);
-           const IS = SS.d.requests["appCheck.getToken"].timeoutMs;
+           var Md = md(1822),
+             dO = md(29),
+             OO = md(184),
+             mO = md(1836),
+             WO = md(1856),
+             FO = md(1916),
+             RO = md(1930),
+             XO = md(1941),
+             KO = md(732);
+           const hO = mO.b.requests["appCheck.getToken"].timeoutMs;
```

#### 1257. `bundles/bloxd.io/main.js` (Changed code · before: `L22685-L22686` → after: `L22685-L22686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22685-L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22685-L22686) · [Before (L22685-L22686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22685-L22686)

```diff
-               if (rr instanceof jr.b) return String(rr.httpCode);
-               if (rr instanceof QS.e && "timeout" === rr.code) return;
+               if (dd instanceof Xd.e) return String(dd.httpCode);
+               if (dd instanceof WO.c && "timeout" === dd.code) return;
```

#### 1258. `bundles/bloxd.io/main.js` (Changed code · before: `L22689` → after: `L22689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22689) · [Before (L22689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22689)

```diff
-             (0, ZS.reportClientError)("app_check", Sr, void 0 === Qr ? rr : `${rr}_${Qr}`)
+             (0, FO.reportClientError)("app_check", Od, void 0 === md ? dd : `${dd}_${md}`)
```

#### 1259. `bundles/bloxd.io/main.js` (Changed code · before: `L22695` → after: `L22695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22695) · [Before (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22695)

```diff
-               } = await (0, aS.d)(IS);
+               } = await (0, XO.c)(hO);
```

#### 1260. `bundles/bloxd.io/main.js` (Changed code · before: `L22702` → after: `L22702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22702) · [Before (L22702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22702)

```diff
-                 return rr instanceof QS.e && "failed" === rr.code ? "failed" : rr instanceof QS.e && "timeout" === rr.code ? "timeout" : "error"
+                 return dd instanceof WO.c && "failed" === dd.code ? "failed" : dd instanceof WO.c && "timeout" === dd.code ? "timeout" : "error"
```

#### 1261. `bundles/bloxd.io/main.js` (Changed code · before: `L22709` → after: `L22709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22709) · [Before (L22709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22709)

```diff
-             const Qr = () => (null === Sr && ((0, Dr.f)("appCheck_b"), Sr = async function() {
+             const md = () => (null === Od && ((0, kd.h)("appCheck_b"), Od = async function() {
```

#### 1262. `bundles/bloxd.io/main.js` (Changed code · before: `L22723` → after: `L22723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22723) · [Before (L22723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22723)

```diff
-               ar = await Promise.race([Wr, (0, ir.T)(2500).then((() => "tooSlow"))]),
+               Rd = await Promise.race([Fd, (0, jd.S)(2500).then((() => "tooSlow"))]),
```

#### 1263. `bundles/bloxd.io/main.js` (Changed code · before: `L22738` → after: `L22738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22738) · [Before (L22738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22738)

```diff
-                   } = await BQ(`${Ar.clientSideServerUrls.indexUrl}/index/app-traffic-code`, {
+                   } = await Jm(`${zd.clientSideServerUrls.indexUrl}/index/app-traffic-code`, {
```

#### 1264. `bundles/bloxd.io/main.js` (Changed code · before: `L22748` → after: `L22748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22748) · [Before (L22748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22748)

```diff
-               if (null !== Sr) return (0, WS.o)("appCheck"), Sr;
+               if (null !== Od) return (0, RO.q)("appCheck"), Od;
```

#### 1265. `bundles/bloxd.io/main.js` (Changed code · before: `L22751` → after: `L22751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22751) · [Before (L22751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22751)

```diff
-             const pr = "b" === (null === jr || void 0 === jr ? void 0 : jr.method) ? jr : await Qr();
+             const Qd = "b" === (null === Xd || void 0 === Xd ? void 0 : Xd.method) ? Xd : await md();
```

#### 1266. `bundles/bloxd.io/main.js` (Changed code · before: `L22756` → after: `L22756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22756) · [Before (L22756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22756)

```diff
-             return (0, WS.o)(`appCheck_b_${Er?"refused":null!==fr&&void 0!==fr?fr:"late"}`), xr
+             return (0, RO.q)(`appCheck_b_${vd?"refused":null!==hd&&void 0!==hd?hd:"late"}`), td
```

#### 1267. `bundles/bloxd.io/main.js` (Changed code · before: `L22761` → after: `L22761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22761) · [Before (L22761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22761)

```diff
-             } = await BQ(`${Ar.clientSideServerUrls.indexUrl}/index/traffic-code`, {
+             } = await Jm(`${zd.clientSideServerUrls.indexUrl}/index/traffic-code`, {
```

#### 1268. `bundles/bloxd.io/main.js` (Changed code · before: `L22766` → after: `L22766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22766) · [Before (L22766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22766)

```diff
-               [jr.P]: jS.B.client
+               [Xd.R]: KO.y.client
```

#### 1269. `bundles/bloxd.io/main.js` (Changed code · before: `L22770-L22780` → after: `L22770-L22780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22770-L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22770-L22780) · [Before (L22770-L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22770-L22780)

```diff
-           var mS = Qr(1949),
-             NS = Qr(1956),
-             US = Qr(1786),
-             tS = Qr(1781),
-             hS = Qr(379),
-             zS = Qr(1264),
-             YS = Qr(1965),
-             nS = Qr(1371),
-             eS = Qr(1626),
-             KS = Qr(1967),
-             yS = Qr(1977),
+           var NO = md(1947),
+             qO = md(1951),
+             HO = md(1792),
+             yO = md(1784),
+             bO = md(405),
+             TO = md(1262),
+             pO = md(1954),
+             YO = md(1368),
+             gO = md(1620),
+             wO = md(1958),
+             aO = md(1971),
```

#### 1270. `bundles/bloxd.io/main.js` (Changed code · before: `L22782` → after: `L22782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22782) · [Before (L22782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22782)

```diff
-             TS = Qr(1984),
+             JO = md(1982),
```

#### 1271. `bundles/bloxd.io/main.js` (Changed code · before: `L22784-L22787` → after: `L22784-L22787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22784-L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22784-L22787) · [Before (L22784-L22787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22784-L22787)

```diff
-             OS = Qr(2008),
-             LS = Qr(2031),
-             lS = Qr(2038),
-             XS = Qr(2034);
+             xO = md(2007),
+             BO = md(2029),
+             SO = md(2047),
+             sO = md(2038);
```

#### 1272. `bundles/bloxd.io/main.js` (Changed code · before: `L22790-L22791` → after: `L22790-L22791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22790-L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22790-L22791) · [Before (L22790-L22791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22790-L22791)

```diff
-               this.bridge = rr, this.appVersionPolicySettled = Sr, this.logInLate = Qr, this.wI = null, rr.on("gameCenter.signedIn", (Sr => {
-                 (0, XS.j)("gameCenter", Sr), this.logInOnHomepage(new vS.e(rr, Sr))
+               this.bridge = dd, this.appVersionPolicySettled = Od, this.logInLate = md, this.jK = null, dd.on("gameCenter.signedIn", (Od => {
+                 (0, sO.j)("gameCenter", Od), this.logInOnHomepage(new UO.b(dd, Od))
```

#### 1273. `bundles/bloxd.io/main.js` (Changed code · before: `L22795-L22796` → after: `L22795-L22796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22795-L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22795-L22796) · [Before (L22795-L22796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22795-L22796)

```diff
-               if (await this.appVersionPolicySettled, (0, OS.h)()) return void await this.logIn(rr);
-               if (console.log("Holding a late Game Center sign-in until the homepage"), null !== this.wI) return void(this.wI.latest = rr);
+               if (await this.appVersionPolicySettled, (0, xO.e)()) return void await this.logIn(dd);
+               if (console.log("Holding a late Game Center sign-in until the homepage"), null !== this.jK) return void(this.jK.latest = dd);
```

#### 1274. `bundles/bloxd.io/main.js` (Changed code · before: `L22800-L22801` → after: `L22800-L22801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22800-L22801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22800-L22801) · [Before (L22800-L22801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22800-L22801)

```diff
-               this.wI = Sr, (0, OS.i)((() => {
-                 this.wI = null, this.logIn(Sr.latest)
+               this.jK = Od, (0, xO.i)((() => {
+                 this.jK = null, this.logIn(Od.latest)
```

#### 1275. `bundles/bloxd.io/main.js` (Changed code · before: `L22813` → after: `L22813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22813) · [Before (L22813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22813)

```diff
-               } else console.log(`Dropping a late Game Center sign-in: ${Sr}`)
+               } else console.log(`Dropping a late Game Center sign-in: ${Od}`)
```

#### 1276. `bundles/bloxd.io/main.js` (Changed code · before: `L22816` → after: `L22816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22816) · [Before (L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22816)

```diff
-               return (0, TS.r)(this.bridge, fr.c.GAME_CENTER) ? null !== ur.c.get("appUpdateStoreUrl") ? "the app must update first" : (0, lS.e)(rr) ? "the player kept playing as a guest" : null !== ur.c.get("gameAccountSwitchPrompt") ? "the player is already asked to switch acco … [truncated]
+               return (0, JO.r)(this.bridge, hd.e.GAME_CENTER) ? null !== dO.e.get("appUpdateStoreUrl") ? "the app must update first" : (0, SO.h)(dd) ? "the player kept playing as a guest" : null !== dO.e.get("gameAccountSwitchPrompt") ? "the player is already asked to switch acco … [truncated]
```

#### 1277. `bundles/bloxd.io/main.js` (Changed code · before: `L22825` → after: `L22825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22825) · [Before (L22825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22825)

```diff
-             return rr.currentType() === fr.c.ANONYMOUS && (0, OS.h)()
+             return dd.currentType() === hd.e.ANONYMOUS && (0, xO.e)()
```

#### 1278. `bundles/bloxd.io/main.js` (Changed code · before: `L22841` → after: `L22841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22841) · [Before (L22841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22841)

```diff
-               }), this.silentLink = new LS.b(Sr, {
+               }), this.silentLink = new BO.c(Od, {
```

#### 1279. `bundles/bloxd.io/main.js` (Changed code · before: `L22844` → after: `L22844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22844) · [Before (L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22844)

```diff
-               }), new PS(Sr, Qr, (rr => this.logInLate(fr.c.GAME_CENTER, rr)))
+               }), new uO(Od, md, (dd => this.logInLate(hd.e.GAME_CENTER, dd)))
```

#### 1280. `bundles/bloxd.io/main.js` (Changed code · before: `L22850` → after: `L22850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22850) · [Before (L22850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22850)

```diff
-                 const Qr = (0, TS.h)(this.bridge);
+                 const md = (0, JO.j)(this.bridge);
```

#### 1281. `bundles/bloxd.io/main.js` (Changed code · before: `L22855` → after: `L22855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22855) · [Before (L22855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22855)

```diff
-                 const Zr = this.signInSilently(Qr, (() => !Sr || (0, OS.h)())).then((rr => {
+                 const Wd = this.signInSilently(md, (() => !Od || (0, xO.e)())).then((dd => {
```

#### 1282. `bundles/bloxd.io/main.js` (Changed code · before: `L22859` → after: `L22859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22859) · [Before (L22859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22859)

```diff
-                     return null !== Sr && (0, lS.e)(Sr.accountId) ? (console.log(`Not logging in with ${Qr}: the player kept playing as a guest`), null) : Sr
+                     return null !== Od && (0, SO.h)(Od.accountId) ? (console.log(`Not logging in with ${md}: the player kept playing as a guest`), null) : Od
```

#### 1283. `bundles/bloxd.io/main.js` (Changed code · before: `L22866` → after: `L22866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22866) · [Before (L22866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22866)

```diff
-                 return "timedOut" === Wr ? (console.warn(`No ${Qr} sign-in within 6000ms, so starting as a guest`), Zr.then((rr => null !== rr && this.logInLate(Qr, rr))), !1) : null !== Wr && await this.logInSilently(Qr, Wr, {
+                 return "timedOut" === Fd ? (console.warn(`No ${md} sign-in within 6000ms, so starting as a guest`), Wd.then((dd => null !== dd && this.logInLate(md, dd))), !1) : null !== Fd && await this.logInSilently(md, Fd, {
```

#### 1284. `bundles/bloxd.io/main.js` (Changed code · before: `L22876-L22877` → after: `L22876-L22877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22876-L22877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22876-L22877) · [Before (L22876-L22877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22876-L22877)

```diff
-               const Qr = TS.e[rr];
-               if (await this.appVersionPolicySettled, !(0, TS.r)(this.bridge, rr)) throw new yS.i("unavailable");
+               const md = JO.g[dd];
+               if (await this.appVersionPolicySettled, !(0, JO.r)(this.bridge, dd)) throw new aO.f("unavailable");
```

#### 1285. `bundles/bloxd.io/main.js` (Changed code · before: `L22879-L22881` → after: `L22879-L22881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22879-L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22879-L22881) · [Before (L22879-L22881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22879-L22881)

```diff
-                 const Wr = await this.bridge.request(`${Qr}.signIn`, {});
-                 if ((0, XS.j)(Qr, Wr), "reason" in Wr) throw new yS.i(Wr.reason);
-                 const ar = (0, vS.f)(this.bridge, Wr);
+                 const Fd = await this.bridge.request(`${md}.signIn`, {});
+                 if ((0, sO.j)(md, Fd), "reason" in Fd) throw new aO.f(Fd.reason);
+                 const Rd = (0, UO.c)(this.bridge, Fd);
```

#### 1286. `bundles/bloxd.io/main.js` (Changed code · before: `L22886` → after: `L22886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22886) · [Before (L22886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22886)

```diff
-                 return (0, lS.f)(ar.accountId, !0), jr
+                 return (0, SO.k)(Rd.accountId, !0), Xd
```

#### 1287. `bundles/bloxd.io/main.js` (Changed code · before: `L22892-L22893` → after: `L22892-L22893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22892-L22893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22892-L22893) · [Before (L22892-L22893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22892-L22893)

```diff
-               (0, TS.h)(this.bridge) === rr && ((0, TS.q)(), this.bridge.request(`${TS.e[rr]}.signOut`, {}).catch((Sr => {
-                 console.warn(`Failed to sign the app's ${rr} sign-in out:`, Sr)
+               (0, JO.j)(this.bridge) === dd && ((0, JO.q)(), this.bridge.request(`${JO.g[dd]}.signOut`, {}).catch((Od => {
+                 console.warn(`Failed to sign the app's ${dd} sign-in out:`, Od)
```

#### 1288. `bundles/bloxd.io/main.js` (Changed code · before: `L22897` → after: `L22897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22897) · [Before (L22897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22897)

```diff
-               const Qr = TS.e[rr];
+               const md = JO.g[dd];
```

#### 1289. `bundles/bloxd.io/main.js` (Changed code · before: `L22899-L22903` → after: `L22899-L22903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22899-L22903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22899-L22903) · [Before (L22899-L22903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22899-L22903)

```diff
-                 if (await this.appVersionPolicySettled, !(0, TS.r)(this.bridge, rr)) return console.log(`Not signing in with ${rr}: the app version policy switches ${Qr} off`), HS;
-                 if (null !== ur.c.get("appUpdateStoreUrl")) return console.log(`Not signing in with ${rr}: the app must update first`), HS;
-                 if (!Sr()) return console.log(`Not signing in with ${rr}: the player left the homepage or signed out while the app version policy loaded`), HS;
-                 const Zr = await this.bridge.request(`${Qr}.signInSilently`, {});
-                 return (0, XS.j)(Qr, Zr), "reason" in Zr ? (console.log(`No silent ${rr} sign-in: ${Zr.reason}`), "dismissed" === Zr.reason && (0, TS.q)(), {
+                 if (await this.appVersionPolicySettled, !(0, JO.r)(this.bridge, dd)) return console.log(`Not signing in with ${dd}: the app version policy switches ${md} off`), VO;
+                 if (null !== dO.e.get("appUpdateStoreUrl")) return console.log(`Not signing in with ${dd}: the app must update first`), VO;
+                 if (!Od()) return console.log(`Not signing in with ${dd}: the player left the homepage or signed out while the app version policy loaded`), VO;
+                 const Wd = await this.bridge.request(`${md}.signInSilently`, {});
+                 return (0, sO.j)(md, Wd), "reason" in Wd ? (console.log(`No silent ${dd} sign-in: ${Wd.reason}`), "dismissed" === Wd.reason && (0, JO.q)(), {
```

#### 1290. `bundles/bloxd.io/main.js` (Changed code · before: `L22905` → after: `L22905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22905) · [Before (L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22905)

```diff
-                   asked: (0, XS.f)(Zr)
+                   asked: (0, sO.h)(Wd)
```

#### 1291. `bundles/bloxd.io/main.js` (Changed code · before: `L22907` → after: `L22907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22907) · [Before (L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22907)

```diff
-                   credential: (0, vS.f)(this.bridge, Zr),
+                   credential: (0, UO.c)(this.bridge, Wd),
```

#### 1292. `bundles/bloxd.io/main.js` (Changed code · before: `L22911` → after: `L22911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22911) · [Before (L22911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22911)

```diff
-                 return console.warn(`The app's silent ${rr} sign-in failed:`, Zr), HS
+                 return console.warn(`The app's silent ${dd} sign-in failed:`, Wd), VO
```

#### 1293. `bundles/bloxd.io/main.js` (Changed code · before: `L22935` → after: `L22935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22935) · [Before (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22935)

```diff
-                 if (void 0 !== Wr && fr.whamm !== Wr) throw new yS.e(`The ${fr.type} login now goes to another account`);
+                 if (void 0 !== Fd && hd.whamm !== Fd) throw new aO.b(`The ${hd.type} login now goes to another account`);
```

#### 1294. `bundles/bloxd.io/main.js` (Changed code · before: `L22941` → after: `L22941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22941) · [Before (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22941)

```diff
-                 return (0, lS.c)(rr.accountId) ? {
+                 return (0, SO.e)(dd.accountId) ? {
```

#### 1295. `bundles/bloxd.io/main.js` (Changed code · before: `L22948-L22949` → after: `L22948-L22949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22948-L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22948-L22949) · [Before (L22948-L22949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22948-L22949)

```diff
-                 const Qr = (0, yS.p)(Wr);
-                 return "switchNeedsConfirm" === (null === Qr || void 0 === Qr ? void 0 : Qr.errorCode) ? this.offerSwitch(rr, Sr, Qr.name) : null !== Qr ? console.log(`The index server refused the silent ${rr} login: ${Qr.errorCode}`) : console.warn(`Failed to log in with ${rr} a … [truncated]
+                 const md = (0, aO.s)(Fd);
+                 return "switchNeedsConfirm" === (null === md || void 0 === md ? void 0 : md.errorCode) ? this.offerSwitch(dd, Od, md.name) : null !== md ? console.log(`The index server refused the silent ${dd} login: ${md.errorCode}`) : console.warn(`Failed to log in with ${dd} a … [truncated]
```

#### 1296. `bundles/bloxd.io/main.js` (Changed code · before: `L22957` → after: `L22957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22957) · [Before (L22957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22957)

```diff
-                   return Qr || console.log(`Dropping a late ${rr} sign-in`), Qr
+                   return md || console.log(`Dropping a late ${dd} sign-in`), md
```

#### 1297. `bundles/bloxd.io/main.js` (Changed code · before: `L22962` → after: `L22962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22962) · [Before (L22962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22962)

```diff
-               ur.c.set({
+               dO.e.set({
```

#### 1298. `bundles/bloxd.io/main.js` (Changed code · before: `L22967` → after: `L22967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22967) · [Before (L22967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22967)

```diff
-                     ur.c.set({
+                     dO.e.set({
```

#### 1299. `bundles/bloxd.io/main.js` (Changed code · before: `L22969` → after: `L22969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22969) · [Before (L22969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22969)

```diff
-                     }), (0, lS.f)(Sr.accountId, !0);
+                     }), (0, SO.k)(Od.accountId, !0);
```

#### 1300. `bundles/bloxd.io/main.js` (Changed code · before: `L22975` → after: `L22975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22975) · [Before (L22975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22975)

```diff
-                     }) || console.log(`Didn't switch to the ${rr} account: the player is no longer a guest on the homepage`)
+                     }) || console.log(`Didn't switch to the ${dd} account: the player is no longer a guest on the homepage`)
```

#### 1301. `bundles/bloxd.io/main.js` (Changed code · before: `L22978` → after: `L22978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22978) · [Before (L22978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22978)

```diff
-                     ur.c.set({
+                     dO.e.set({
```

#### 1302. `bundles/bloxd.io/main.js` (Changed code · before: `L22980` → after: `L22980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22980) · [Before (L22980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22980)

```diff
-                     }), (0, lS.f)(Sr.accountId, !1)
+                     }), (0, SO.k)(Od.accountId, !1)
```

#### 1303. `bundles/bloxd.io/main.js` (Changed code · before: `L22986` → after: `L22986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R22986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L22986) · [Before (L22986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L22986)

```diff
-           var gS = Qr(1999);
+           var rO = md(2002);
```

#### 1304. `bundles/bloxd.io/main.js` (Changed code · before: `L23006` → after: `L23006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23006) · [Before (L23006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23006)

```diff
-               isOnHomepage: OS.h,
+               isOnHomepage: xO.e,
```

#### 1305. `bundles/bloxd.io/main.js` (Changed code · before: `L23015` → after: `L23015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23015) · [Before (L23015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23015)

```diff
-             if ((0, Dr.f)("pending"), await sr.b.ready, rr.buysTrafficCodeWithAppCheck()) return (0, Dr.f)("appCheck"), pS(Qr);
+             if ((0, kd.h)("pending"), await Md.c.ready, dd.buysTrafficCodeWithAppCheck()) return (0, kd.h)("appCheck"), tO(md);
```

#### 1306. `bundles/bloxd.io/main.js` (Changed code · before: `L23025` → after: `L23025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23025) · [Before (L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23025)

```diff
-               (0, Dr.f)("a");
+               (0, kd.h)("a");
```

#### 1307. `bundles/bloxd.io/main.js` (Changed code · before: `L23036` → after: `L23036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23036) · [Before (L23036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23036)

```diff
-               Zr.x.a = await (null !== Qr && void 0 !== Qr ? Qr : Cr.h.turnstileLoadedPromise.then((() => Cr.h.getTurnstileToken(rr.whamm, Sr)))).catch((rr => (console.error("Failed to get token via method A:", rr), Xr.j.setItem(Rr, (Date.now() + 6048e5).toString()), null)))
+               Wd.x.a = await (null !== md && void 0 !== md ? md : Gd.f.turnstileLoadedPromise.then((() => Gd.f.getTurnstileToken(dd.whamm, Od)))).catch((dd => (console.error("Failed to get token via method A:", dd), sd.k.setItem(Ad, (Date.now() + 6048e5).toString()), null)))
```

#### 1308. `bundles/bloxd.io/main.js` (Changed code · before: `L23038` → after: `L23038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23038) · [Before (L23038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23038)

```diff
-             null === Zr.x.a && ((0, Dr.f)(Wr ? "a_b" : "b"), Zr.x.b = await Pr.b.getRecaptchaToken().catch((rr => (console.error("Failed to get token via method B:", rr), null))));
+             null === Wd.x.a && ((0, kd.h)(Fd ? "a_b" : "b"), Wd.x.b = await ud.b.getRecaptchaToken().catch((dd => (console.error("Failed to get token via method B:", dd), null))));
```

#### 1309. `bundles/bloxd.io/main.js` (Changed code · before: `L23040` → after: `L23040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23040) · [Before (L23040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23040)

```diff
-             for (const Ir in Zr.x)(0, ir.L)(Zr.x[Ir]) && delete Zr.x[Ir];
+             for (const Kd in Wd.x)(0, jd.O)(Wd.x[Kd]) && delete Wd.x[Kd];
```

#### 1310. `bundles/bloxd.io/main.js` (Changed code · before: `L23043` → after: `L23043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23043) · [Before (L23043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23043)

```diff
-             return (0, WS.o)(ar), jr
+             return (0, RO.q)(Rd), Xd
```

#### 1311. `bundles/bloxd.io/main.js` (Changed code · before: `L23059` → after: `L23059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23059) · [Before (L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23059)

```diff
-               return this.prom.then((rr => (this.isStored && (0, WS.o)("cached"), rr.trafficCode)))
+               return this.prom.then((dd => (this.isStored && (0, RO.q)("cached"), dd.trafficCode)))
```

#### 1312. `bundles/bloxd.io/main.js` (Changed code · before: `L23078` → after: `L23078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23078) · [Before (L23078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23078)

```diff
-                 const Qr = JSON.parse(null !== (Sr = Xr.j.getItem(this.storageKey)) && void 0 !== Sr ? Sr : "{}");
+                 const md = JSON.parse(null !== (Od = sd.k.getItem(this.storageKey)) && void 0 !== Od ? Od : "{}");
```

#### 1313. `bundles/bloxd.io/main.js` (Changed code · before: `L23091` → after: `L23091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23091) · [Before (L23091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23091)

```diff
-               }(rr, Date.now()), rS.c || gr() && this.hadFreshCodeAtBoot || Pr.b.preload()
+               }(dd, Date.now()), OO.d || rd() && this.hadFreshCodeAtBoot || ud.b.preload()
```

#### 1314. `bundles/bloxd.io/main.js` (Changed code · before: `L23096` → after: `L23096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23096) · [Before (L23096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23096)

```diff
-               let Wr = null !== (Qr = this.cache[Zr]) && void 0 !== Qr ? Qr : null;
+               let Fd = null !== (md = this.cache[Wd]) && void 0 !== md ? md : null;
```

#### 1315. `bundles/bloxd.io/main.js` (Changed code · before: `L23110` → after: `L23110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23110) · [Before (L23110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23110)

```diff
-               return null === rr.whamm ? null : `whamm_${btoa(rr.whamm)}_${btoa(rr.type)}`
+               return null === dd.whamm ? null : `whamm_${btoa(dd.whamm)}_${btoa(dd.type)}`
```

#### 1316. `bundles/bloxd.io/main.js` (Changed code · before: `L23115` → after: `L23115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23115) · [Before (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23115)

```diff
-               Xr.j.setItem(this.storageKey, JSON.stringify(rr))
+               sd.k.setItem(this.storageKey, JSON.stringify(dd))
```

#### 1317. `bundles/bloxd.io/main.js` (Changed code · before: `L23120` → after: `L23120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23120) · [Before (L23120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23120)

```diff
-               null !== (null !== (Sr = this.cache[Qr]) && void 0 !== Sr ? Sr : null) && (delete this.cache[Qr], await this.onCacheUpdated())
+               null !== (null !== (Od = this.cache[md]) && void 0 !== Od ? Od : null) && (delete this.cache[md], await this.onCacheUpdated())
```

#### 1318. `bundles/bloxd.io/main.js` (Changed code · before: `L23127` → after: `L23127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23127) · [Before (L23127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23127)

```diff
-             const Sr = Xr.j.getItem("pendingRecentlyPlayedJoin");
+             const Od = sd.k.getItem("pendingRecentlyPlayedJoin");
```

#### 1319. `bundles/bloxd.io/main.js` (Changed code · before: `L23130-L23131` → after: `L23130-L23131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23130-L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23130-L23131) · [Before (L23130-L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23130-L23131)

```diff
-               Zr = [Sr[0], Sr[1], Sr[2], rr ? Qr : null, Qr];
-             Xr.j.setItem("pendingRecentlyPlayedJoin", Zr)
+               Wd = [Od[0], Od[1], Od[2], dd ? md : null, md];
+             sd.k.setItem("pendingRecentlyPlayedJoin", Wd)
```

#### 1320. `bundles/bloxd.io/main.js` (Changed code · before: `L23135` → after: `L23135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23135) · [Before (L23135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23135)

```diff
-           }), 6e4), nr.i.subscribe("leaveGame", (() => {
+           }), 6e4), pd.j.subscribe("leaveGame", (() => {
```

#### 1321. `bundles/bloxd.io/main.js` (Changed code · before: `L23143` → after: `L23143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23143) · [Before (L23143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23143)

```diff
-               }, this._newPlayerDeal = Yr, this._gifting = nr, this.whamm = null !== Ir && void 0 !== Ir ? Ir : function(rr) {
+               }, this._newPlayerDeal = Td, this._gifting = pd, this.whamm = null !== Kd && void 0 !== Kd ? Kd : function(dd) {
```

#### 1322. `bundles/bloxd.io/main.js` (Changed code · before: `L23145` → after: `L23145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23145) · [Before (L23145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23145)

```diff
-                 return rr["3PSIDMC"] ? null === (Sr = (0, Zr.b)(rr["3PSIDMC"])) || void 0 === Sr ? void 0 : Sr.x : null
+                 return dd["3PSIDMC"] ? null === (Od = (0, Wd.d)(dd["3PSIDMC"])) || void 0 === Od ? void 0 : Od.x : null
```

#### 1323. `bundles/bloxd.io/main.js` (Changed code · before: `L23167` → after: `L23167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23167) · [Before (L23167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23167)

```diff
-               this.recentlyPlayedGames = rr, Xr.j.setItem("recentlyPlayedGames", rr), this.publishUpdateIfCurrent()
+               this.recentlyPlayedGames = dd, sd.k.setItem("recentlyPlayedGames", dd), this.publishUpdateIfCurrent()
```

#### 1324. `bundles/bloxd.io/main.js` (Changed code · before: `L23170` → after: `L23170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23170) · [Before (L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23170)

```diff
-               VS = [this.playerName, rr, Sr, null, Date.now()], Xr.j.setItem("pendingRecentlyPlayedJoin", VS), this.setRecentlyPlayedGames(Yr(this.recentlyPlayedGames, rr, Sr))
+               cO = [this.playerName, dd, Od, null, Date.now()], sd.k.setItem("pendingRecentlyPlayedJoin", cO), this.setRecentlyPlayedGames(Td(this.recentlyPlayedGames, dd, Od))
```

#### 1325. `bundles/bloxd.io/main.js` (Changed code · before: `L23173` → after: `L23173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23173) · [Before (L23173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23173)

```diff
-               const rr = Xr.j.getItem("pendingRecentlyPlayedJoin");
+               const dd = sd.k.getItem("pendingRecentlyPlayedJoin");
```

#### 1326. `bundles/bloxd.io/main.js` (Changed code · before: `L23176` → after: `L23176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23176) · [Before (L23176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23176)

```diff
-               Date.now() - (null !== Zr && void 0 !== Zr ? Zr : Wr) >= 3e5 || ar()(jr, this.recentlyPlayedGames) ? Xr.j.removeItem("pendingRecentlyPlayedJoin") : this.recentlyPlayedGames = jr
+               Date.now() - (null !== Wd && void 0 !== Wd ? Wd : Fd) >= 3e5 || Rd()(Xd, this.recentlyPlayedGames) ? sd.k.removeItem("pendingRecentlyPlayedJoin") : this.recentlyPlayedGames = Xd
```

#### 1327. `bundles/bloxd.io/main.js` (Changed code · before: `L23180` → after: `L23180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23180) · [Before (L23180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23180)

```diff
-                 rr === this && nr.i.Jp("userContextUpdated", rr)
+                 dd === this && pd.j.lQ("userContextUpdated", dd)
```

#### 1328. `bundles/bloxd.io/main.js` (Changed code · before: `L23191` → after: `L23191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23191) · [Before (L23191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23191)

```diff
-               return rS.c && this.appTrafficCodeOn && sr.b.supports("appCheck")
+               return OO.d && this.appTrafficCodeOn && Md.c.supports("appCheck")
```

#### 1329. `bundles/bloxd.io/main.js` (Changed code · before: `L23212` → after: `L23212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23212) · [Before (L23212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23212)

```diff
-               return null === this.type || this.type === fr.c.ANONYMOUS ? null : this.whamm
+               return null === this.type || this.type === hd.e.ANONYMOUS ? null : this.whamm
```

#### 1330. `bundles/bloxd.io/main.js` (Changed code · before: `L23215` → after: `L23215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23215) · [Before (L23215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23215)

```diff
-               return this.isLoggedIn() && (0, Er.b)(this.availableUserContextTypes)
+               return this.isLoggedIn() && (0, vd.d)(this.availableUserContextTypes)
```

#### 1331. `bundles/bloxd.io/main.js` (Changed code · before: `L23264` → after: `L23264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23264) · [Before (L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23264)

```diff
-               return (0, zr.x)(this.ranks, this.getPlayerName(), xr.e)
+               return (0, bd.x)(this.ranks, this.getPlayerName(), td.b)
```

#### 1332. `bundles/bloxd.io/main.js` (Changed code · before: `L23272` → after: `L23272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23272) · [Before (L23272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23272)

```diff
-               return Cr.h.showWidgetPopupWhile(rr), (0, WS.k)(rr), rr
+               return Gd.f.showWidgetPopupWhile(dd), (0, RO.m)(dd), dd
```

#### 1333. `bundles/bloxd.io/main.js` (Changed code · before: `L23277` → after: `L23277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23277) · [Before (L23277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23277)

```diff
-                 (0, mS.h)(rr) && AS.getTrafficCode(this, "refetch").catch((() => {}))
+                 (0, NO.e)(dd) && zO.getTrafficCode(this, "refetch").catch((() => {}))
```

#### 1334. `bundles/bloxd.io/main.js` (Changed code · before: `L23307-L23308` → after: `L23307-L23308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23307-L23308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23307-L23308) · [Before (L23307-L23308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23307-L23308)

```diff
-             Mr.j.firebase().then((Sr => null === Sr || void 0 === Sr ? void 0 : Sr.signOut(rr))).catch((rr => {
-               console.error("Failed to sign out of Firebase:", rr), (0, nS.Pt)(new Error("Failed to sign out of Firebase"), {
+             nd.q.firebase().then((Od => null === Od || void 0 === Od ? void 0 : Od.signOut(dd))).catch((dd => {
+               console.error("Failed to sign out of Firebase:", dd), (0, YO.rH)(new Error("Failed to sign out of Firebase"), {
```

#### 1335. `bundles/bloxd.io/main.js` (Changed code · before: `L23314-L23315` → after: `L23314-L23315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23314-L23315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23314-L23315) · [Before (L23314-L23315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23314-L23315)

```diff
-               [fr.c.GOOGLE]: () => {
-                 JS(fr.c.GOOGLE)
+               [hd.e.GOOGLE]: () => {
+                 ZO(hd.e.GOOGLE)
```

#### 1336. `bundles/bloxd.io/main.js` (Changed code · before: `L23317` → after: `L23317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23317) · [Before (L23317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23317)

```diff
-               [fr.c.DISCORD]: () => {
+               [hd.e.DISCORD]: () => {
```

#### 1337. `bundles/bloxd.io/main.js` (Changed code · before: `L23319` → after: `L23319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23319) · [Before (L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23319)

```diff
-                 Mr.j.discord().then((rr => {
+                 nd.q.discord().then((dd => {
```

#### 1338. `bundles/bloxd.io/main.js` (Changed code · before: `L23323-L23325` → after: `L23323-L23325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23323-L23325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23323-L23325) · [Before (L23323-L23325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23323-L23325)

```diff
-               [fr.c.CRAZY_GAMES]: () => {},
-               [fr.c.APPLE]: () => {
-                 JS(fr.c.APPLE)
+               [hd.e.CRAZY_GAMES]: () => {},
+               [hd.e.APPLE]: () => {
+                 ZO(hd.e.APPLE)
```

#### 1339. `bundles/bloxd.io/main.js` (Changed code · before: `L23327-L23328` → after: `L23327-L23328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23327-L23328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23327-L23328) · [Before (L23327-L23328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23327-L23328)

```diff
-               [fr.c.MICROSOFT]: () => {
-                 JS(fr.c.MICROSOFT)
+               [hd.e.MICROSOFT]: () => {
+                 ZO(hd.e.MICROSOFT)
```

#### 1340. `bundles/bloxd.io/main.js` (Changed code · before: `L23330-L23332` → after: `L23330-L23332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23330-L23332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23330-L23332) · [Before (L23330-L23332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23330-L23332)

```diff
-               [fr.c.MSN]: () => {},
-               [fr.c.PLAY_GAMES]: () => {
-                 rQ().signOut(fr.c.PLAY_GAMES)
+               [hd.e.MSN]: () => {},
+               [hd.e.PLAY_GAMES]: () => {
+                 Om().signOut(hd.e.PLAY_GAMES)
```

#### 1341. `bundles/bloxd.io/main.js` (Changed code · before: `L23334-L23335` → after: `L23334-L23335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23334-L23335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23334-L23335) · [Before (L23334-L23335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23334-L23335)

```diff
-               [fr.c.GAME_CENTER]: () => {
-                 rQ().signOut(fr.c.GAME_CENTER)
+               [hd.e.GAME_CENTER]: () => {
+                 Om().signOut(hd.e.GAME_CENTER)
```

#### 1342. `bundles/bloxd.io/main.js` (Changed code · before: `L23339-L23343` → after: `L23339-L23343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23339-L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23339-L23343) · [Before (L23339-L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23339-L23343)

```diff
-               [fr.c.GOOGLE]: "/index/google/login",
-               [fr.c.APPLE]: "/index/apple/login",
-               [fr.c.MICROSOFT]: "/index/microsoft/login",
-               [fr.c.GAME_CENTER]: "/index/game-center/login",
-               [fr.c.PLAY_GAMES]: "/index/play-games/login"
+               [hd.e.GOOGLE]: "/index/google/login",
+               [hd.e.APPLE]: "/index/apple/login",
+               [hd.e.MICROSOFT]: "/index/microsoft/login",
+               [hd.e.GAME_CENTER]: "/index/game-center/login",
+               [hd.e.PLAY_GAMES]: "/index/play-games/login"
```

#### 1343. `bundles/bloxd.io/main.js` (Changed code · before: `L23356-L23357` → after: `L23356-L23357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23356-L23357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23356-L23357) · [Before (L23356-L23357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23356-L23357)

```diff
-                   const Qr = null !== (rr = this.userContexts.get(this.currentUserContextType)) && void 0 !== rr ? rr : cS;
-                   (0, eS.k)(null !== (Sr = this.userContexts.get(this.currentUserContextType)) && void 0 !== Sr ? Sr : null), nr.i.Jp("userContextUpdated", Qr), this.isCurrentUserContextUpdating = !1, this.shouldPublishUpdate = !1, null !== this.currentUserContextType && this.onC … [truncated]
+                   const md = null !== (dd = this.userContexts.get(this.currentUserContextType)) && void 0 !== dd ? dd : eO;
+                   (0, gO.i)(null !== (Od = this.userContexts.get(this.currentUserContextType)) && void 0 !== Od ? Od : null), pd.j.lQ("userContextUpdated", md), this.isCurrentUserContextUpdating = !1, this.shouldPublishUpdate = !1, null !== this.currentUserContextType && this.onC … [truncated]
```

#### 1344. `bundles/bloxd.io/main.js` (Changed code · before: `L23367` → after: `L23367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23367) · [Before (L23367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23367)

```diff
-                   return null !== (rr = this.userContexts.get(this.currentUserContextType)) && void 0 !== rr ? rr : null
+                   return null !== (dd = this.userContexts.get(this.currentUserContextType)) && void 0 !== dd ? dd : null
```

#### 1345. `bundles/bloxd.io/main.js` (Changed code · before: `L23369` → after: `L23369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23369) · [Before (L23369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23369)

```diff
-                 loadGuest: () => this.getOrCreateUserContext(fr.c.ANONYMOUS, MS.LOGIN),
+                 loadGuest: () => this.getOrCreateUserContext(hd.e.ANONYMOUS, nO.LOGIN),
```

#### 1346. `bundles/bloxd.io/main.js` (Changed code · before: `L23374` → after: `L23374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23374) · [Before (L23374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23374)

```diff
-                   const Zr = await this.getOrCreateUserContext(fr.c.ANONYMOUS, MS.LOGIN);
+                   const Wd = await this.getOrCreateUserContext(hd.e.ANONYMOUS, nO.LOGIN);
```

#### 1347. `bundles/bloxd.io/main.js` (Changed code · before: `L23388` → after: `L23388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23388) · [Before (L23388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23388)

```diff
-                   this.userContexts.set(rr.type, rr), Xr.j.setItem("recentlyPlayedGames", rr.getRecentlyPlayedGames()), this.updateCurrentUserContext(rr.type)
+                   this.userContexts.set(dd.type, dd), sd.k.setItem("recentlyPlayedGames", dd.getRecentlyPlayedGames()), this.updateCurrentUserContext(dd.type)
```

#### 1348. `bundles/bloxd.io/main.js` (Changed code · before: `L23402` → after: `L23402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23402) · [Before (L23402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23402)

```diff
-               this.isCurrentUserContextUpdating || (this.isCurrentUserContextUpdating = !0, nr.i.Jp("userContextIsUpdating"))
+               this.isCurrentUserContextUpdating || (this.isCurrentUserContextUpdating = !0, pd.j.lQ("userContextIsUpdating"))
```

#### 1349. `bundles/bloxd.io/main.js` (Changed code · before: `L23421` → after: `L23421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23421) · [Before (L23421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23421)

```diff
-               return await this.synchronize((async () => this.currentUserContextType !== fr.c.ANONYMOUS ? (console.log("CrazyGames login on CrazyGames ignored: the player is", this.currentUserContextType), "done") : this.hadCrazyGamesUser ? (console.log("CrazyGames login on Crazy … [truncated]
+               return await this.synchronize((async () => this.currentUserContextType !== hd.e.ANONYMOUS ? (console.log("CrazyGames login on CrazyGames ignored: the player is", this.currentUserContextType), "done") : this.hadCrazyGamesUser ? (console.log("CrazyGames login on Crazy … [truncated]
```

#### 1350. `bundles/bloxd.io/main.js` (Changed code · before: `L23427` → after: `L23427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23427) · [Before (L23427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23427)

```diff
-                 throw console.error(`Failed to set current user context to ${rr}:`, Sr.message), Qr !== MS.LINK && cr.f.reloadIfScheduled(), this.currentUserContextType === rr ? this.updateCurrentUserContext(null) : this.updateCurrentUserContext(this.currentUserContextType), Sr
+                 throw console.error(`Failed to set current user context to ${dd}:`, Od.message), md !== nO.LINK && ed.e.reloadIfScheduled(), this.currentUserContextType === dd ? this.updateCurrentUserContext(null) : this.updateCurrentUserContext(this.currentUserContextType), Od
```

#### 1351. `bundles/bloxd.io/main.js` (Changed code · before: `L23448` → after: `L23448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23448) · [Before (L23448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23448)

```diff
-                   throw console.error("Failed to get current user context:", rr.message), cr.f.reloadIfScheduled(), this.updateCurrentUserContext(null), rr
+                   throw console.error("Failed to get current user context:", dd.message), ed.e.reloadIfScheduled(), this.updateCurrentUserContext(null), dd
```

#### 1352. `bundles/bloxd.io/main.js` (Changed code · before: `L23470` → after: `L23470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23470) · [Before (L23470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23470)

```diff
-               return null !== (Qr = this.tryGetUserContext(rr)) && void 0 !== Qr ? Qr : await this.createUserContext(rr, Sr, Zr)
+               return null !== (md = this.tryGetUserContext(dd)) && void 0 !== md ? md : await this.createUserContext(dd, Od, Wd)
```

#### 1353. `bundles/bloxd.io/main.js` (Changed code · before: `L23474` → after: `L23474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23474) · [Before (L23474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23474)

```diff
-               return Sr && !((0, pr.c)(rr) ? Sr.isPastHardExpiry() : Sr.hasExpired()) ? Sr : null
+               return Od && !((0, Qd.c)(dd) ? Od.isPastHardExpiry() : Od.hasExpired()) ? Od : null
```

#### 1354. `bundles/bloxd.io/main.js` (Changed code · before: `L23479-L23480` → after: `L23479-L23480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23479-L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23479-L23480) · [Before (L23479-L23480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23479-L23480)

```diff
-               if (Sr === MS.LINK && rr === this.currentUserContextType) throw new Error(`Cannot link to the same user context type: ${rr}`);
-               if ((0, pr.c)(rr)) throw new Error(`${rr} logs in only through GameAccountLogin`);
+               if (Od === nO.LINK && dd === this.currentUserContextType) throw new Error(`Cannot link to the same user context type: ${dd}`);
+               if ((0, Qd.c)(dd)) throw new Error(`${dd} logs in only through GameAccountLogin`);
```

#### 1355. `bundles/bloxd.io/main.js` (Changed code · before: `L23484` → after: `L23484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23484) · [Before (L23484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23484)

```diff
-                       return this.getOrCreateUserContext(fr.c.ANONYMOUS, Sr);
+                       return this.getOrCreateUserContext(hd.e.ANONYMOUS, Od);
```

#### 1356. `bundles/bloxd.io/main.js` (Changed code · before: `L23489` → after: `L23489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23489) · [Before (L23489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23489)

```diff
-                 ar = rr === fr.c.CRAZY_GAMES;
+                 Rd = dd === hd.e.CRAZY_GAMES;
```

#### 1357. `bundles/bloxd.io/main.js` (Changed code · before: `L23492` → after: `L23492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23492) · [Before (L23492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23492)

```diff
-                   case fr.c.ANONYMOUS:
+                   case hd.e.ANONYMOUS:
```

#### 1358. `bundles/bloxd.io/main.js` (Changed code · before: `L23494-L23496` → after: `L23494-L23496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23494-L23496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23494-L23496) · [Before (L23494-L23496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23494-L23496)

```diff
-                   case fr.c.GOOGLE:
-                   case fr.c.APPLE:
-                   case fr.c.MICROSOFT: {
+                   case hd.e.GOOGLE:
+                   case hd.e.APPLE:
+                   case hd.e.MICROSOFT: {
```

#### 1359. `bundles/bloxd.io/main.js` (Changed code · before: `L23499` → after: `L23499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23499) · [Before (L23499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23499)

```diff
-                         const Qr = await Mr.j.firebase();
+                         const md = await nd.q.firebase();
```

#### 1360. `bundles/bloxd.io/main.js` (Changed code · before: `L23517` → after: `L23517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23517) · [Before (L23517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23517)

```diff
-                           return Zr ? "auth/popup-closed-by-user" === Qr.code || "auth/cancelled-popup-request" === Qr.code ? (ar = !1, Wr = Qr.code, jr = "Rr") : (Wr = (0, hS.w)(Qr.code.replace("auth/", "").replaceAll("-", " ")), "auth/popup-blocked" === Qr.code && (jr = "popup_ … [truncated]
+                           return Wd ? "auth/popup-closed-by-user" === md.code || "auth/cancelled-popup-request" === md.code ? (Rd = !1, Fd = md.code, Xd = "Ad") : (Fd = (0, bO.q)(md.code.replace("auth/", "").replaceAll("-", " ")), "auth/popup-blocked" === md.code && (Xd = "popup_ … [truncated]
```

#### 1361. `bundles/bloxd.io/main.js` (Changed code · before: `L23531` → after: `L23531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23531) · [Before (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23531)

```diff
-                     return await UQ(rr, new gS.d(Ir), jr, Sr)
+                     return await ym(dd, new rO.e(Kd), Xd, Od)
```

#### 1362. `bundles/bloxd.io/main.js` (Changed code · before: `L23533` → after: `L23533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23533) · [Before (L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23533)

```diff
-                   case fr.c.DISCORD: {
+                   case hd.e.DISCORD: {
```

#### 1363. `bundles/bloxd.io/main.js` (Changed code · before: `L23538` → after: `L23538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23538) · [Before (L23538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23538)

```diff
-                         const Sr = await Mr.j.discordActivity();
+                         const Od = await nd.q.discordActivity();
```

#### 1364. `bundles/bloxd.io/main.js` (Changed code · before: `L23555` → after: `L23555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23555) · [Before (L23555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23555)

```diff
-                           return await BQ(`${Ar.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
+                           return await Jm(`${zd.clientSideServerUrls.indexUrl}/index/discord/log-event`, {
```

#### 1365. `bundles/bloxd.io/main.js` (Changed code · before: `L23557` → after: `L23557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23557) · [Before (L23557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23557)

```diff
-                             bloxdClientEnvironment: zS.c.clientEnvironment,
+                             bloxdClientEnvironment: TO.b.clientEnvironment,
```

#### 1366. `bundles/bloxd.io/main.js` (Changed code · before: `L23568` → after: `L23568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23568) · [Before (L23568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23568)

```diff
-                             confirmText: (0, Vr.r)(Wr),
+                             confirmText: (0, cd.m)(Fd),
```

#### 1367. `bundles/bloxd.io/main.js` (Changed code · before: `L23583` → after: `L23583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23583) · [Before (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23583)

```diff
-                         const Sr = await Mr.j.discord(),
+                         const Od = await nd.q.discord(),
```

#### 1368. `bundles/bloxd.io/main.js` (Changed code · before: `L23594` → after: `L23594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23594) · [Before (L23594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23594)

```diff
-                           throw new xQ(fr.c.DISCORD, null !== (ar = null === jr || void 0 === jr ? void 0 : jr.error) && void 0 !== ar ? ar : null === jr || void 0 === jr ? void 0 : jr.message, {
+                           throw new Nm(hd.e.DISCORD, null !== (Rd = null === Xd || void 0 === Xd ? void 0 : Xd.error) && void 0 !== Rd ? Rd : null === Xd || void 0 === Xd ? void 0 : Xd.message, {
```

#### 1369. `bundles/bloxd.io/main.js` (Changed code · before: `L23597` → after: `L23597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23597) · [Before (L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23597)

```diff
-                             failure: rr ? "Rr" : "failed"
+                             failure: dd ? "Ad" : "failed"
```

#### 1370. `bundles/bloxd.io/main.js` (Changed code · before: `L23608` → after: `L23608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23608) · [Before (L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23608)

```diff
-                       if (!rr) throw new xQ(fr.c.DISCORD, "No Discord token");
+                       if (!dd) throw new Nm(hd.e.DISCORD, "No Discord token");
```

#### 1371. `bundles/bloxd.io/main.js` (Changed code · before: `L23611` → after: `L23611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23611) · [Before (L23611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23611)

```diff
-                         Wr = (await Mr.j.discordActivity()).getInstanceId()
+                         Fd = (await nd.q.discordActivity()).getInstanceId()
```

#### 1372. `bundles/bloxd.io/main.js` (Changed code · before: `L23634` → after: `L23634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23634) · [Before (L23634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23634)

```diff
-                         } = await BQ(`${Ar.clientSideServerUrls.indexUrl}/index/discord/login`, {
+                         } = await Jm(`${zd.clientSideServerUrls.indexUrl}/index/discord/login`, {
```

#### 1373. `bundles/bloxd.io/main.js` (Changed code · before: `L23642` → after: `L23642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23642) · [Before (L23642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23642)

```diff
-                           error: (0, yS.o)(rr, "An error occurred when logging in with Discord! Please report on discord what steps you took to get this error message.")
+                           error: (0, aO.q)(dd, "An error occurred when logging in with Discord! Please report on discord what steps you took to get this error message.")
```

#### 1374. `bundles/bloxd.io/main.js` (Changed code · before: `L23644` → after: `L23644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23644) · [Before (L23644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23644)

```diff
-                       if (hr) throw new xQ(fr.c.DISCORD, hr, {
+                       if (yd) throw new Nm(hd.e.DISCORD, yd, {
```

#### 1375. `bundles/bloxd.io/main.js` (Changed code · before: `L23650` → after: `L23650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23650) · [Before (L23650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23650)

```diff
-                         const Sr = await Mr.j.discordActivity();
+                         const Od = await nd.q.discordActivity();
```

#### 1376. `bundles/bloxd.io/main.js` (Changed code · before: `L23653-L23654` → after: `L23653-L23654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23653-L23654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23653-L23654) · [Before (L23653-L23654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23653-L23654)

```diff
-                         if (Qr instanceof Error) throw new xQ(fr.c.DISCORD, `Discord authentication failed: ${Qr.message}`);
-                         if (!1 === Qr) throw new xQ(fr.c.DISCORD, "Discord authentication failed for some unknown reason");
+                         if (md instanceof Error) throw new Nm(hd.e.DISCORD, `Discord authentication failed: ${md.message}`);
+                         if (!1 === md) throw new Nm(hd.e.DISCORD, "Discord authentication failed for some unknown reason");
```

#### 1377. `bundles/bloxd.io/main.js` (Changed code · before: `L23658-L23660` → after: `L23658-L23660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23658-L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23658-L23660) · [Before (L23658-L23660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23658-L23660)

```diff
-                       console.log("Successfully logged in with Discord!"), (0, or.isDiscordClient)() && ur.c.holdWebGpuForAccountLoss(vr);
-                       return ar["3PSIDMCPP"] = Ur, new wS(fr.c.DISCORD, {
-                         authProvider: fr.f.DISCORD,
+                       console.log("Successfully logged in with Discord!"), (0, ld.isDiscordClient)() && dO.e.holdWebGpuForAccountLoss(Ud);
+                       return Rd["3PSIDMCPP"] = qd, new DO(hd.e.DISCORD, {
+                         authProvider: hd.i.DISCORD,
```

#### 1378. `bundles/bloxd.io/main.js` (Changed code · before: `L23662` → after: `L23662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23662) · [Before (L23662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23662)

```diff
-                       }, Ir, Er, pr, ar, tr, xr, !(0, or.isDiscordClient)(), zr, null !== nr && void 0 !== nr ? nr : [], null !== er && void 0 !== er ? er : null, null !== Br && void 0 !== Br ? Br : null, null !== Tr && void 0 !== Tr ? Tr : [], null !== Or && void 0 !== Or ? Or : … [truncated]
+                       }, Kd, vd, Qd, Rd, Hd, td, !(0, ld.isDiscordClient)(), bd, null !== pd && void 0 !== pd ? pd : [], null !== Yd && void 0 !== Yd ? Yd : null, null !== Ed && void 0 !== Ed ? Ed : null, null !== Jd && void 0 !== Jd ? Jd : [], null !== xd && void 0 !== xd ? xd : … [truncated]
```

#### 1379. `bundles/bloxd.io/main.js` (Changed code · before: `L23665-L23666` → after: `L23665-L23666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23665-L23666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23665-L23666) · [Before (L23665-L23666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23665-L23666)

```diff
-                   case fr.c.CRAZY_GAMES: {
-                     const rr = await Mr.j.crazyGames();
+                   case hd.e.CRAZY_GAMES: {
+                     const dd = await nd.q.crazyGames();
```

#### 1380. `bundles/bloxd.io/main.js` (Changed code · before: `L23671-L23672` → after: `L23671-L23672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23671-L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23671-L23672) · [Before (L23671-L23672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23671-L23672)

```diff
-                       if (!rr) throw new xQ(fr.c.CRAZY_GAMES, "No CrazyGames token");
-                       return await zQ(fr.c.CRAZY_GAMES, "/index/crazy-games/context", {
+                       if (!dd) throw new Nm(hd.e.CRAZY_GAMES, "No CrazyGames token");
+                       return await pm(hd.e.CRAZY_GAMES, "/index/crazy-games/context", {
```

#### 1381. `bundles/bloxd.io/main.js` (Changed code · before: `L23675` → after: `L23675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23675) · [Before (L23675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23675)

```diff
-                     }(Qr, ar), Ir = jr.includes(fr.c.ANONYMOUS), Er = ar.availableUserContextTypes.includes(fr.c.CRAZY_GAMES), pr = Zr ? null === (0, Jr.e)() : Jr.g;
+                     }(md, Rd), Kd = Xd.includes(hd.e.ANONYMOUS), vd = Rd.availableUserContextTypes.includes(hd.e.CRAZY_GAMES), Qd = Wd ? null === (0, Zd.b)() : Zd.f;
```

#### 1382. `bundles/bloxd.io/main.js` (Changed code · before: `L23677-L23678` → after: `L23677-L23678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23677-L23678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23677-L23678) · [Before (L23677-L23678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23677-L23678)

```diff
-                     if (pr ? (console.log("CrazyGames user type: first time"), xr = !0) : Ir || Er ? (console.log("CrazyGames user type: automatic tie required"), xr = !0) : (console.log("CrazyGames user type: account not yet tied and requires prompt"), xr = await rr.doesUserWant … [truncated]
-                       failure: "Rr"
+                     if (Qd ? (console.log("CrazyGames user type: first time"), td = !0) : Kd || vd ? (console.log("CrazyGames user type: automatic tie required"), td = !0) : (console.log("CrazyGames user type: account not yet tied and requires prompt"), td = await dd.doesUserWant … [truncated]
+                       failure: "Ad"
```

#### 1383. `bundles/bloxd.io/main.js` (Changed code · before: `L23682-L23683` → after: `L23682-L23683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23682-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23682-L23683) · [Before (L23682-L23683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23682-L23683)

```diff
-                       if (!rr) throw new xQ(fr.c.CRAZY_GAMES, "No CrazyGames token");
-                       return await YQ(fr.c.CRAZY_GAMES, "/index/crazy-games/login", {
+                       if (!dd) throw new Nm(hd.e.CRAZY_GAMES, "No CrazyGames token");
+                       return await Ym(hd.e.CRAZY_GAMES, "/index/crazy-games/login", {
```

#### 1384. `bundles/bloxd.io/main.js` (Changed code · before: `L23690` → after: `L23690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23690) · [Before (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23690)

```diff
-                   case fr.c.MSN: {
+                   case hd.e.MSN: {
```

#### 1385. `bundles/bloxd.io/main.js` (Changed code · before: `L23694-L23695` → after: `L23694-L23695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23694-L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23694-L23695) · [Before (L23694-L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23694-L23695)

```diff
-                     }, jr = (await zQ(fr.c.MSN, "/index/msn/context", ar, Zr)).includes(fr.c.ANONYMOUS);
-                     return await YQ(fr.c.MSN, "/index/msn/login", {
+                     }, Xd = (await pm(hd.e.MSN, "/index/msn/context", Rd, Wd)).includes(hd.e.ANONYMOUS);
+                     return await Ym(hd.e.MSN, "/index/msn/login", {
```

#### 1386. `bundles/bloxd.io/main.js` (Changed code · before: `L23697` → after: `L23697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23697) · [Before (L23697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23697)

```diff
-                       preferMsnName: Jr.g && !jr,
+                       preferMsnName: Zd.f && !Xd,
```

#### 1387. `bundles/bloxd.io/main.js` (Changed code · before: `L23702` → after: `L23702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23702) · [Before (L23702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23702)

```diff
-                     throw new Error(`Unknown user context type: ${rr}`)
+                     throw new Error(`Unknown user context type: ${dd}`)
```

#### 1388. `bundles/bloxd.io/main.js` (Changed code · before: `L23706-L23707` → after: `L23706-L23707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23706-L23707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23706-L23707) · [Before (L23706-L23707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23706-L23707)

```diff
-               })).then((Sr => (this.userContexts.set(rr, Sr), Xr.j.setItem("recentlyPlayedGames", Sr.getRecentlyPlayedGames()), Sr))).catch((Sr => {
-                 throw this.userContexts.delete(rr), new Error(`Failed to create ${rr} user context: ${Sr.message}`, {
+               })).then((Od => (this.userContexts.set(dd, Od), sd.k.setItem("recentlyPlayedGames", Od.getRecentlyPlayedGames()), Od))).catch((Od => {
+                 throw this.userContexts.delete(dd), new Error(`Failed to create ${dd} user context: ${Od.message}`, {
```

#### 1389. `bundles/bloxd.io/main.js` (Changed code · before: `L23715` → after: `L23715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23715) · [Before (L23715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23715)

```diff
-             return sS ??= new RS((rr => uS.runLoginJob(rr)), sr.b, KS.c), sS
+             return MO ??= new AO((dd => dm.runLoginJob(dd)), Md.c, wO.d), MO
```

#### 1390. `bundles/bloxd.io/main.js` (Changed code · before: `L23718-L23719` → after: `L23718-L23719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23718-L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23718-L23719) · [Before (L23718-L23719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23718-L23719)

```diff
-             const rr = nr.i.subscribe("userContextUpdated", (Sr => {
-               null !== Sr.type && (nr.i.unsubscribe(rr), console.log(`Boot login: ${Sr.type}, set ${Math.round(performance.now())} ms after page start`))
+             const dd = pd.j.subscribe("userContextUpdated", (Od => {
+               null !== Od.type && (pd.j.unsubscribe(dd), console.log(`Boot login: ${Od.type}, set ${Math.round(performance.now())} ms after page start`))
```

#### 1391. `bundles/bloxd.io/main.js` (Changed code · before: `L23725` → after: `L23725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23725) · [Before (L23725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23725)

```diff
-               const Sr = (0, br.d)((0, br.e)());
+               const Od = (0, Cd.f)((0, Cd.i)());
```

#### 1392. `bundles/bloxd.io/main.js` (Changed code · before: `L23731` → after: `L23731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23731) · [Before (L23731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23731)

```diff
-                   token: Cr.h.turnstileLoadedPromise.then((() => Cr.h.getTurnstileToken(Sr, "boot", Qr.signal))).then((rr => (Zr.issuedAt = Date.now(), rr))),
+                   token: Gd.f.turnstileLoadedPromise.then((() => Gd.f.getTurnstileToken(Od, "boot", md.signal))).then((dd => (Wd.issuedAt = Date.now(), dd))),
```

#### 1393. `bundles/bloxd.io/main.js` (Changed code · before: `L23734` → after: `L23734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23734) · [Before (L23734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23734)

```diff
-               Zr.token.catch((() => {})), (0, Dr.f)("a"), dr = Zr
+               Wd.token.catch((() => {})), (0, kd.h)("a"), fd = Wd
```

#### 1394. `bundles/bloxd.io/main.js` (Changed code · before: `L23737-L23741` → after: `L23737-L23741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23737-L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23737-L23741) · [Before (L23737-L23741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23737-L23741)

```diff
-               jr = await Mr.j.firebase();
-             null !== (null !== (rr = await (null === jr || void 0 === jr ? void 0 : jr.getCurrentUser(fr.c.GOOGLE))) && void 0 !== rr ? rr : null) && ar.push(fr.c.GOOGLE);
-             null !== (null !== (Sr = await (null === jr || void 0 === jr ? void 0 : jr.getCurrentUser(fr.c.APPLE))) && void 0 !== Sr ? Sr : null) && ar.push(fr.c.APPLE);
-             null !== (null !== (Qr = await (null === jr || void 0 === jr ? void 0 : jr.getCurrentUser(fr.c.MICROSOFT))) && void 0 !== Qr ? Qr : null) && ar.push(fr.c.MICROSOFT);
-             const Ir = await Mr.j.crazyGames();
+               Xd = await nd.q.firebase();
+             null !== (null !== (dd = await (null === Xd || void 0 === Xd ? void 0 : Xd.getCurrentUser(hd.e.GOOGLE))) && void 0 !== dd ? dd : null) && Rd.push(hd.e.GOOGLE);
+             null !== (null !== (Od = await (null === Xd || void 0 === Xd ? void 0 : Xd.getCurrentUser(hd.e.APPLE))) && void 0 !== Od ? Od : null) && Rd.push(hd.e.APPLE);
+             null !== (null !== (md = await (null === Xd || void 0 === Xd ? void 0 : Xd.getCurrentUser(hd.e.MICROSOFT))) && void 0 !== md ? md : null) && Rd.push(hd.e.MICROSOFT);
+             const Kd = await nd.q.crazyGames();
```

#### 1395. `bundles/bloxd.io/main.js` (Changed code · before: `L23743-L23746` → after: `L23743-L23746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23743-L23746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23743-L23746) · [Before (L23743-L23746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23743-L23746)

```diff
-             null !== (null !== (Zr = await (null === Ir || void 0 === Ir ? void 0 : Ir.getCurrentUser().catch((rr => (console.error("Failed to get the current CrazyGames user:", rr), null))))) && void 0 !== Zr ? Zr : null) && ar.push(fr.c.CRAZY_GAMES);
-             const Er = await Mr.j.discordActivity();
-             if (null !== Er) ar.push(fr.c.DISCORD), uS.getCurrentUserContext().then((rr => {
-               if (rr.type !== fr.c.DISCORD) throw new Error(`Current user context is ${rr.type} not ${fr.c.DISCORD} in the Discord client`)
+             null !== (null !== (Wd = await (null === Kd || void 0 === Kd ? void 0 : Kd.getCurrentUser().catch((dd => (console.error("Failed to get the current CrazyGames user:", dd), null))))) && void 0 !== Wd ? Wd : null) && Rd.push(hd.e.CRAZY_GAMES);
+             const vd = await nd.q.discordActivity();
+             if (null !== vd) Rd.push(hd.e.DISCORD), dm.getCurrentUserContext().then((dd => {
+               if (dd.type !== hd.e.DISCORD) throw new Error(`Current user context is ${dd.type} not ${hd.e.DISCORD} in the Discord client`)
```

#### 1396. `bundles/bloxd.io/main.js` (Changed code · before: `L23748` → after: `L23748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23748) · [Before (L23748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23748)

```diff
-               rr && nr.i.Jp("discordContextUpdated", rr)
+               dd && pd.j.lQ("discordContextUpdated", dd)
```

#### 1397. `bundles/bloxd.io/main.js` (Changed code · before: `L23753` → after: `L23753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23753) · [Before (L23753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23753)

```diff
-               (await Mr.j.discord()).hasCurrentUser() && ar.push(fr.c.DISCORD)
+               (await nd.q.discord()).hasCurrentUser() && Rd.push(hd.e.DISCORD)
```

#### 1398. `bundles/bloxd.io/main.js` (Changed code · before: `L23755-L23756` → after: `L23755-L23756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23755-L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23755-L23756) · [Before (L23755-L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23755-L23756)

```diff
-             const pr = await Mr.j.msn();
-             null !== (null !== (Wr = await (null === pr || void 0 === pr ? void 0 : pr.getSignedInUser())) && void 0 !== Wr ? Wr : null) && ar.push(fr.c.MSN);
+             const Qd = await nd.q.msn();
+             null !== (null !== (Fd = await (null === Qd || void 0 === Qd ? void 0 : Qd.getSignedInUser())) && void 0 !== Fd ? Fd : null) && Rd.push(hd.e.MSN);
```

#### 1399. `bundles/bloxd.io/main.js` (Changed code · before: `L23762` → after: `L23762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23762) · [Before (L23762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23762)

```diff
-               console.error(`Failed to set initial user context to ${fr}:`, xr)
+               console.error(`Failed to set initial user context to ${hd}:`, td)
```

#### 1400. `bundles/bloxd.io/main.js` (Changed code · before: `L23768` → after: `L23768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23768) · [Before (L23768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23768)

```diff
-           const QQ = nr.i.EY("bloxdRequiresUpdate", (() => {
+           const Wm = pd.j.wT("bloxdRequiresUpdate", (() => {
```

#### 1401. `bundles/bloxd.io/main.js` (Changed code · before: `L23776` → after: `L23776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23776) · [Before (L23776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23776)

```diff
-             nr.i.EY("updateBloxd", (() => {
+             pd.j.wT("updateBloxd", (() => {
```

#### 1402. `bundles/bloxd.io/main.js` (Changed code · before: `L23783` → after: `L23783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23783) · [Before (L23783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23783)

```diff
-               [jr.K]: or.subsiteUsed
+               [Xd.J]: ld.subsiteUsed
```

#### 1403. `bundles/bloxd.io/main.js` (Changed code · before: `L23789-L23790` → after: `L23789-L23790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23789-L23790) · [Before (L23789-L23790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23789-L23790)

```diff
-                 const Qr = Xr.d.getItem(rr);
-                 return (0, Xr.s)(Qr) ? Qr : Sr[rr.replaceAll("_", "").replace("Secure-", "")]
+                 const md = sd.e.getItem(dd);
+                 return (0, sd.w)(md) ? md : Od[dd.replaceAll("_", "").replace("Secure-", "")]
```

#### 1404. `bundles/bloxd.io/main.js` (Changed code · before: `L23797` → after: `L23797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23797) · [Before (L23797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23797)

```diff
-                 "3PSIDMC": (0, br.e)(),
+                 "3PSIDMC": (0, Cd.i)(),
```

#### 1405. `bundles/bloxd.io/main.js` (Changed code · before: `L23801-L23802` → after: `L23801-L23802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23801-L23802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23801-L23802) · [Before (L23801-L23802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23801-L23802)

```diff
-             Wr["3PSIDMCSP"] === Sr["3PSIDMCSP"] && (Wr["3PSIDMCSP"] = (0, Zr.f)((0, Gr.j)(Ir.e))), (0, Jr.l)(Wr["3PSIDMC"]), YS.c.markHomepageLoadEnd(), SQ && (await WQ, SQ = !1), nr.i.unsubscribe(QQ);
-             const ar = await BQ(`${Ar.clientSideServerUrls.indexUrl}/index/metrics/cookies`, {}, {
+             Fd["3PSIDMCSP"] === Od["3PSIDMCSP"] && (Fd["3PSIDMCSP"] = (0, Wd.e)((0, Ld.k)(Kd.c))), (0, Zd.p)(Fd["3PSIDMC"]), pO.e.markHomepageLoadEnd(), mm && (await Rm, mm = !1), pd.j.unsubscribe(Wm);
+             const Rd = await Jm(`${zd.clientSideServerUrls.indexUrl}/index/metrics/cookies`, {}, {
```

#### 1406. `bundles/bloxd.io/main.js` (Changed code · before: `L23823` → after: `L23823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23823) · [Before (L23823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23823)

```diff
-             return Wr["3PSIDMCPP"] = Nr, new wS(fr.c.ANONYMOUS, null, jr, Er, pr, Wr, null, xr, rr, Ur, null !== tr && void 0 !== tr ? tr : [], null !== hr && void 0 !== hr ? hr : null, null !== er && void 0 !== er ? er : null, null !== Kr && void 0 !== Kr ? Kr : [], null !== yr  … [truncated]
+             return Fd["3PSIDMCPP"] = Nd, new DO(hd.e.ANONYMOUS, null, Xd, vd, Qd, Fd, null, td, dd, qd, null !== Hd && void 0 !== Hd ? Hd : [], null !== yd && void 0 !== yd ? yd : null, null !== Yd && void 0 !== Yd ? Yd : null, null !== gd && void 0 !== gd ? gd : [], null !== wd  … [truncated]
```

#### 1407. `bundles/bloxd.io/main.js` (Changed code · before: `L23827` → after: `L23827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23827) · [Before (L23827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23827)

```diff
-             (0, br.c)() === rr && (0, Jr.k)()
+             (0, Cd.e)() === dd && (0, Zd.l)()
```

#### 1408. `bundles/bloxd.io/main.js` (Changed code · before: `L23838` → after: `L23838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23838) · [Before (L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23838)

```diff
-           class xQ extends BS.b {
+           class Nm extends EO.d {
```

#### 1409. `bundles/bloxd.io/main.js` (Changed code · before: `L23842` → after: `L23842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23842) · [Before (L23842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23842)

```diff
-               Zr.forceSignOut && DS[rr](), Zr.showPopup && 0 === EQ && mQ(rr, Sr), super(`Failed to log in with ${rr}: ${Sr}`, null !== (Qr = Zr.failure) && void 0 !== Qr ? Qr : "failed", Sr)
+               Wd.forceSignOut && kO[dd](), Wd.showPopup && 0 === tm && qm(dd, Od), super(`Failed to log in with ${dd}: ${Od}`, null !== (md = Wd.failure) && void 0 !== md ? md : "failed", Od)
```

#### 1410. `bundles/bloxd.io/main.js` (Changed code · before: `L23847` → after: `L23847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23847) · [Before (L23847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23847)

```diff
-             const Qr = fr.f[rr];
+             const md = hd.i[dd];
```

#### 1411. `bundles/bloxd.io/main.js` (Changed code · before: `L23866` → after: `L23866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23866) · [Before (L23866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23866)

```diff
-             const Ir = await BQ(`${Ar.clientSideServerUrls.indexUrl}${dS[rr]}`, (async () => ({
+             const Kd = await Jm(`${zd.clientSideServerUrls.indexUrl}${fO[dd]}`, (async () => ({
```

#### 1412. `bundles/bloxd.io/main.js` (Changed code · before: `L23868` → after: `L23868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23868) · [Before (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23868)

```diff
-                 throw jr = new(lr().AbortError)(rr instanceof Error ? rr : String(rr)), jr
+                 throw Xd = new(Sd().AbortError)(dd instanceof Error ? dd : String(dd)), Xd
```

#### 1413. `bundles/bloxd.io/main.js` (Changed code · before: `L23875` → after: `L23875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23875) · [Before (L23875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23875)

```diff
-                 if (rr === fr.c.GAME_CENTER && (0, yS.k)(Sr)) throw Sr
+                 if (dd === hd.e.GAME_CENTER && (0, aO.k)(Od)) throw Od
```

#### 1414. `bundles/bloxd.io/main.js` (Changed code · before: `L23880-L23881` → after: `L23880-L23881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23880-L23881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23880-L23881) · [Before (L23880-L23881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23880-L23881)

```diff
-               return console.error(`Bad response from the server when trying to login with ${rr} Firebase:`, Sr), {
-                 error: (0, yS.o)(Sr, `An error occurred on ${rr} login! Please report on discord what steps you took to get this error message.`)
+               return console.error(`Bad response from the server when trying to login with ${dd} Firebase:`, Od), {
+                 error: (0, aO.q)(Od, `An error occurred on ${dd} login! Please report on discord what steps you took to get this error message.`)
```

#### 1415. `bundles/bloxd.io/main.js` (Changed code · before: `L23884` → after: `L23884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23884) · [Before (L23884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23884)

```diff
-             if (Ir.error && ar) throw new yS.g(`The index server refused the ${rr} credential: ${Ir.error}`);
+             if (Kd.error && Rd) throw new aO.e(`The index server refused the ${dd} credential: ${Kd.error}`);
```

#### 1416. `bundles/bloxd.io/main.js` (Changed code · before: `L23913` → after: `L23913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23913) · [Before (L23913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23913)

```diff
-             console.log(`Successfully logged in with ${rr}:`, Sr.accountId);
+             console.log(`Successfully logged in with ${dd}:`, Od.accountId);
```

#### 1417. `bundles/bloxd.io/main.js` (Changed code · before: `L23916` → after: `L23916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23916) · [Before (L23916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23916)

```diff
-               authProvider: fr.f[rr],
+               authProvider: hd.i[dd],
```

#### 1418. `bundles/bloxd.io/main.js` (Changed code · before: `L23918` → after: `L23918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23918) · [Before (L23918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23918)

```diff
-             }, jr, Ir, Nr, Tr, xr, Er, !0, Ur, null !== hr && void 0 !== hr ? hr : [], null !== zr && void 0 !== zr ? zr : null, null !== er && void 0 !== er ? er : null, null !== Kr && void 0 !== Kr ? Kr : [], null !== yr && void 0 !== yr ? yr : mr, !0 === Br, !0 === tr, null != … [truncated]
+             }, Xd, Kd, Nd, Jd, td, vd, !0, qd, null !== yd && void 0 !== yd ? yd : [], null !== bd && void 0 !== bd ? bd : null, null !== Yd && void 0 !== Yd ? Yd : null, null !== gd && void 0 !== gd ? gd : [], null !== wd && void 0 !== wd ? wd : od, !0 === Ed, !0 === Hd, null != … [truncated]
```

#### 1419. `bundles/bloxd.io/main.js` (Changed code · before: `L23921` → after: `L23921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23921) · [Before (L23921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23921)

```diff
-             const Sr = await Mr.j.crazyGames();
+             const Od = await nd.q.crazyGames();
```

#### 1420. `bundles/bloxd.io/main.js` (Changed code · before: `L23927-L23928` → after: `L23927-L23928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23927-L23928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23927-L23928) · [Before (L23927-L23928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23927-L23928)

```diff
-               const rr = (0, BS.h)(Zr);
-               throw new xQ(fr.c.CRAZY_GAMES, null !== rr ? Zr.message : "Unknown error. Please report on Discord what steps you took to get this error message.", {
+               const dd = (0, EO.l)(Wd);
+               throw new Nm(hd.e.CRAZY_GAMES, null !== dd ? Wd.message : "Unknown error. Please report on Discord what steps you took to get this error message.", {
```

#### 1421. `bundles/bloxd.io/main.js` (Changed code · before: `L23931` → after: `L23931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23931) · [Before (L23931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23931)

```diff
-                 failure: null !== rr && void 0 !== rr ? rr : "failed"
+                 failure: null !== dd && void 0 !== dd ? dd : "failed"
```

#### 1422. `bundles/bloxd.io/main.js` (Changed code · before: `L23937` → after: `L23937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23937) · [Before (L23937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23937)

```diff
-             const Sr = await Mr.j.msn();
+             const Od = await nd.q.msn();
```

#### 1423. `bundles/bloxd.io/main.js` (Changed code · before: `L23941` → after: `L23941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23941) · [Before (L23941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23941)

```diff
-             if (!rr) throw new xQ(fr.c.MSN, "Not signed in to MSN Play");
+             if (!dd) throw new Nm(hd.e.MSN, "Not signed in to MSN Play");
```

#### 1424. `bundles/bloxd.io/main.js` (Changed code · before: `L23947` → after: `L23947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23947) · [Before (L23947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23947)

```diff
-               throw new xQ(fr.c.MSN, rr ? "MSN Play couldn't sign you in. Please try again later." : String(null !== (Zr = null === Wr || void 0 === Wr ? void 0 : Wr.message) && void 0 !== Zr ? Zr : Wr), {
+               throw new Nm(hd.e.MSN, dd ? "MSN Play couldn't sign you in. Please try again later." : String(null !== (Wd = null === Fd || void 0 === Fd ? void 0 : Fd.message) && void 0 !== Wd ? Wd : Fd), {
```

#### 1425. `bundles/bloxd.io/main.js` (Changed code · before: `L23949` → after: `L23949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23949) · [Before (L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23949)

```diff
-                 failure: void 0 === (null === Wr || void 0 === Wr ? void 0 : Wr.code) ? "Rr" : "failed"
+                 failure: void 0 === (null === Fd || void 0 === Fd ? void 0 : Fd.code) ? "Ad" : "failed"
```

#### 1426. `bundles/bloxd.io/main.js` (Changed code · before: `L23954` → after: `L23954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23954) · [Before (L23954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23954)

```diff
-             const Wr = fr.f[rr],
+             const Fd = hd.i[dd],
```

#### 1427. `bundles/bloxd.io/main.js` (Changed code · before: `L23959` → after: `L23959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23959) · [Before (L23959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23959)

```diff
-               } = await BQ(`${Ar.clientSideServerUrls.indexUrl}${Sr}`, Qr, {
+               } = await Jm(`${zd.clientSideServerUrls.indexUrl}${Od}`, md, {
```

#### 1428. `bundles/bloxd.io/main.js` (Changed code · before: `L23961-L23962` → after: `L23961-L23962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23961-L23962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23961-L23962) · [Before (L23961-L23962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23961-L23962)

```diff
-               }, ar).catch((rr => (console.error(`Bad response from the server when trying to get ${Wr} context:`, rr), {
-                 error: `An error occurred when logging in with ${Wr}! Please report on discord what steps you took to get this error message.`
+               }, Rd).catch((dd => (console.error(`Bad response from the server when trying to get ${Fd} context:`, dd), {
+                 error: `An error occurred when logging in with ${Fd}! Please report on discord what steps you took to get this error message.`
```

#### 1429. `bundles/bloxd.io/main.js` (Changed code · before: `L23971` → after: `L23971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23971) · [Before (L23971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23971)

```diff
-             const ar = fr.f[rr],
+             const Rd = hd.i[dd],
```

#### 1430. `bundles/bloxd.io/main.js` (Changed code · before: `L23992` → after: `L23992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23992) · [Before (L23992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23992)

```diff
-               } = await BQ(`${Ar.clientSideServerUrls.indexUrl}${Sr}`, Qr, {
+               } = await Jm(`${zd.clientSideServerUrls.indexUrl}${Od}`, md, {
```

#### 1431. `bundles/bloxd.io/main.js` (Changed code · before: `L23994-L23995` → after: `L23994-L23995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R23994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L23994-L23995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L23994-L23995) · [Before (L23994-L23995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L23994-L23995)

```diff
-               }, jr, aQ()).catch((rr => (console.error(`Bad response from the server when trying to login with ${ar}:`, rr), {
-                 error: (0, yS.o)(rr, `An error occurred when logging in with ${ar}! Please report on discord what steps you took to get this error message.`)
+               }, Xd, Xm()).catch((dd => (console.error(`Bad response from the server when trying to login with ${Rd}:`, dd), {
+                 error: (0, aO.q)(dd, `An error occurred when logging in with ${Rd}! Please report on discord what steps you took to get this error message.`)
```

#### 1432. `bundles/bloxd.io/main.js` (Changed code · before: `L24002` → after: `L24002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24002) · [Before (L24002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24002)

```diff
-             return console.log(`Successfully logged in with ${ar}!`), void 0 !== vr && ur.c.holdWebGpuForAccountLoss(vr), jr["3PSIDMCPP"] = Ur, new wS(rr, {
+             return console.log(`Successfully logged in with ${Rd}!`), void 0 !== Ud && dO.e.holdWebGpuForAccountLoss(Ud), Xd["3PSIDMCPP"] = qd, new DO(dd, {
```

#### 1433. `bundles/bloxd.io/main.js` (Changed code · before: `L24005` → after: `L24005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24005) · [Before (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24005)

```diff
-             }, Er, pr, xr, jr, tr, Nr, !0, zr, null !== nr && void 0 !== nr ? nr : [], null !== er && void 0 !== er ? er : null, null !== Br && void 0 !== Br ? Br : null, null !== Tr && void 0 !== Tr ? Tr : [], null !== Or && void 0 !== Or ? Or : mr, !1, !0 === Yr, null !== Kr && … [truncated]
+             }, vd, Qd, td, Xd, Hd, Nd, !0, bd, null !== pd && void 0 !== pd ? pd : [], null !== Yd && void 0 !== Yd ? Yd : null, null !== Ed && void 0 !== Ed ? Ed : null, null !== Jd && void 0 !== Jd ? Jd : [], null !== xd && void 0 !== xd ? xd : od, !1, !0 === Td, null !== gd && … [truncated]
```

#### 1434. `bundles/bloxd.io/main.js` (Changed code · before: `L24010-L24011` → after: `L24010-L24011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24010-L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24010-L24011) · [Before (L24010-L24011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24010-L24011)

```diff
-             uS.setCurrentUserContext(fr.c.ANONYMOUS, rr, MS.LOGIN).catch((rr => {
-               console.error("Failed to set current user context to anonymous:", rr.message), cr.f.isReloading || nr.i.Jp("unrecoverableError", "Can't connect to Bloxd!\n\nThis might be the server restarting.\n\nIf this happens repeatedly, please report on Discord what steps you t … [truncated]
+             dm.setCurrentUserContext(hd.e.ANONYMOUS, dd, nO.LOGIN).catch((dd => {
+               console.error("Failed to set current user context to anonymous:", dd.message), ed.e.isReloading || pd.j.lQ("unrecoverableError", "Can't connect to Bloxd!\n\nThis might be the server restarting.\n\nIf this happens repeatedly, please report on Discord what steps you t … [truncated]
```

#### 1435. `bundles/bloxd.io/main.js` (Changed code · before: `L24036` → after: `L24036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24036) · [Before (L24036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24036)

```diff
-             const xr = new tS.d,
+             const td = new yO.e,
```

#### 1436. `bundles/bloxd.io/main.js` (Changed code · before: `L24049` → after: `L24049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24049) · [Before (L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24049)

```diff
-                 if (Wr === KQ.json) mr = async () => (0, US.g)(rr, await Er(), fr, Zr);
+                 if (Fd === am.json) od = async () => (0, HO.d)(dd, await vd(), hd, Wd);
```

#### 1437. `bundles/bloxd.io/main.js` (Changed code · before: `L24053-L24054` → after: `L24053-L24054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24053-L24054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24053-L24054) · [Before (L24053-L24054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24053-L24054)

```diff
-                   } = await Qr.e(164).then((() => Qr(7632))), Zr = Sr(await Er()).toString("base64");
-                   mr = () => (0, US.d)(rr, Zr, fr)
+                   } = await md.e(164).then((() => md(7620))), Wd = Od(await vd()).toString("base64");
+                   od = () => (0, HO.c)(dd, Wd, hd)
```

#### 1438. `bundles/bloxd.io/main.js` (Changed code · before: `L24064-L24066` → after: `L24064-L24066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24064-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24064-L24066) · [Before (L24064-L24066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24064-L24066)

```diff
-                     cr.f.schedule();
-                     const rr = (0, Fr.z)(wr.f.get().getCurrentLanguageCode(), "general:updatedReloading");
-                     return new jr.b(Nr.status, rr, rr, null)
+                     ed.e.schedule();
+                     const dd = (0, Id.B)(Dd.f.get().getCurrentLanguageCode(), "general:updatedReloading");
+                     return new Xd.e(Nd.status, dd, dd, null)
```

#### 1439. `bundles/bloxd.io/main.js` (Changed code · before: `L24071` → after: `L24071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24071) · [Before (L24071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24071)

```diff
-                     return new jr.b(Nr.status, Nr.status.toString(), null !== (Ur = rr.errorMessageForUser) && void 0 !== Ur ? Ur : null, null !== (tr = rr.errorMessageTranslationParams) && void 0 !== tr ? tr : null, rr)
+                     return new Xd.e(Nd.status, Nd.status.toString(), null !== (qd = dd.errorMessageForUser) && void 0 !== qd ? qd : null, null !== (Hd = dd.errorMessageTranslationParams) && void 0 !== Hd ? Hd : null, dd)
```

#### 1440. `bundles/bloxd.io/main.js` (Changed code · before: `L24074` → after: `L24074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24074) · [Before (L24074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24074)

```diff
-                 throw new jr.b(Nr.status, `${Nr.status} ${new URL(rr,location.href).pathname}`, null, null, null, (0, tS.g)(Nr))
+                 throw new Xd.e(Nd.status, `${Nd.status} ${new URL(dd,location.href).pathname}`, null, null, null, (0, yO.g)(Nd))
```

#### 1441. `bundles/bloxd.io/main.js` (Changed code · before: `L24076` → after: `L24076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24076) · [Before (L24076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24076)

```diff
-             if (mr instanceof jr.b) throw mr;
+             if (od instanceof Xd.e) throw od;
```

#### 1442. `bundles/bloxd.io/main.js` (Changed code · before: `L24094` → after: `L24094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24094) · [Before (L24094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24094)

```diff
-         }, , , , rr => {
+         }, , , , , , dd => {
```

#### 1443. `bundles/bloxd.io/main.js` (Changed code · before: `L24120` → after: `L24120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24120) · [Before (L24120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24120)

```diff
-         }, , , , , , , , rr => {
+         }, , , dd => {
```

#### 1444. `bundles/bloxd.io/main.js` (Changed code · before: `L24127` → after: `L24127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24127) · [Before (L24127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24127)

```diff
-             this.Wx = rr, this.context = Sr, this.once = Qr || !1
+             this.Ot = dd, this.context = Od, this.once = md || !1
```

#### 1445. `bundles/bloxd.io/main.js` (Changed code · before: `L24133-L24134` → after: `L24133-L24134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24133-L24134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24133-L24134) · [Before (L24133-L24134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24133-L24134)

```diff
-               fr = Qr ? Qr + Sr : Sr;
-             return rr._events[fr] ? rr._events[fr].Wx ? rr._events[fr] = [rr._events[fr], Ir] : rr._events[fr].push(Ir) : (rr._events[fr] = Ir, rr._eventsCount++), rr
+               hd = md ? md + Od : Od;
+             return dd._events[hd] ? dd._events[hd].Ot ? dd._events[hd] = [dd._events[hd], Kd] : dd._events[hd].push(Kd) : (dd._events[hd] = Kd, dd._eventsCount++), dd
```

#### 1446. `bundles/bloxd.io/main.js` (Changed code · before: `L24138` → after: `L24138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24138) · [Before (L24138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24138)

```diff
-             0 === --rr._eventsCount ? rr._events = new Zr : delete rr._events[Sr]
+             0 === --dd._eventsCount ? dd._events = new Wd : delete dd._events[Od]
```

#### 1447. `bundles/bloxd.io/main.js` (Changed code · before: `L24150` → after: `L24150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24150) · [Before (L24150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24150)

```diff
-             var Sr = Qr ? Qr + rr : rr,
+             var Od = md ? md + dd : dd,
```

#### 1448. `bundles/bloxd.io/main.js` (Changed code · before: `L24153-L24154` → after: `L24153-L24154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24153-L24154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24153-L24154) · [Before (L24153-L24154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24153-L24154)

```diff
-             if (Zr.Wx) return [Zr.Wx];
-             for (var Wr = 0, ar = Zr.length, jr = new Array(ar); Wr < ar; Wr++) jr[Wr] = Zr[Wr].Wx;
+             if (Wd.Ot) return [Wd.Ot];
+             for (var Fd = 0, Rd = Wd.length, Xd = new Array(Rd); Fd < Rd; Fd++) Xd[Fd] = Wd[Fd].Ot;
```

#### 1449. `bundles/bloxd.io/main.js` (Changed code · before: `L24157` → after: `L24157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24157) · [Before (L24157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24157)

```diff
-             var Sr = Qr ? Qr + rr : rr,
+             var Od = md ? md + dd : dd,
```

#### 1450. `bundles/bloxd.io/main.js` (Changed code · before: `L24159` → after: `L24159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24159) · [Before (L24159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24159)

```diff
-             return Zr ? Zr.Wx ? 1 : Zr.length : 0
+             return Wd ? Wd.Ot ? 1 : Wd.length : 0
```

#### 1451. `bundles/bloxd.io/main.js` (Changed code · before: `L24161` → after: `L24161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24161) · [Before (L24161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24161)

```diff
-             var Ir = Qr ? Qr + rr : rr;
+             var Kd = md ? md + dd : dd;
```

#### 1452. `bundles/bloxd.io/main.js` (Changed code · before: `L24165-L24166` → after: `L24165-L24166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24165-L24166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24165-L24166) · [Before (L24165-L24166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24165-L24166)

```diff
-             if (pr.Wx) {
-               switch (pr.once && this.removeListener(rr, pr.Wx, void 0, !0), xr) {
+             if (Qd.Ot) {
+               switch (Qd.once && this.removeListener(dd, Qd.Ot, void 0, !0), td) {
```

#### 1453. `bundles/bloxd.io/main.js` (Changed code · before: `L24168` → after: `L24168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24168) · [Before (L24168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24168)

```diff
-                   return pr.Wx.call(pr.context), !0;
+                   return Qd.Ot.call(Qd.context), !0;
```

#### 1454. `bundles/bloxd.io/main.js` (Changed code · before: `L24170` → after: `L24170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24170) · [Before (L24170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24170)

```diff
-                   return pr.Wx.call(pr.context, Sr), !0;
+                   return Qd.Ot.call(Qd.context, Od), !0;
```

#### 1455. `bundles/bloxd.io/main.js` (Changed code · before: `L24172` → after: `L24172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24172) · [Before (L24172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24172)

```diff
-                   return pr.Wx.call(pr.context, Sr, Zr), !0;
+                   return Qd.Ot.call(Qd.context, Od, Wd), !0;
```

#### 1456. `bundles/bloxd.io/main.js` (Changed code · before: `L24174` → after: `L24174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24174) · [Before (L24174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24174)

```diff
-                   return pr.Wx.call(pr.context, Sr, Zr, Wr), !0;
+                   return Qd.Ot.call(Qd.context, Od, Wd, Fd), !0;
```

#### 1457. `bundles/bloxd.io/main.js` (Changed code · before: `L24176` → after: `L24176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24176) · [Before (L24176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24176)

```diff
-                   return pr.Wx.call(pr.context, Sr, Zr, Wr, ar), !0;
+                   return Qd.Ot.call(Qd.context, Od, Wd, Fd, Rd), !0;
```

#### 1458. `bundles/bloxd.io/main.js` (Changed code · before: `L24178` → after: `L24178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24178) · [Before (L24178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24178)

```diff
-                   return pr.Wx.call(pr.context, Sr, Zr, Wr, ar, jr), !0
+                   return Qd.Ot.call(Qd.context, Od, Wd, Fd, Rd, Xd), !0
```

#### 1459. `bundles/bloxd.io/main.js` (Changed code · before: `L24181` → after: `L24181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24181) · [Before (L24181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24181)

```diff
-               pr.Wx.apply(pr.context, fr)
+               Qd.Ot.apply(Qd.context, hd)
```

#### 1460. `bundles/bloxd.io/main.js` (Changed code · before: `L24184` → after: `L24184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24184) · [Before (L24184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24184)

```diff
-               for (Er = 0; Er < Nr; Er++) switch (pr[Er].once && this.removeListener(rr, pr[Er].Wx, void 0, !0), xr) {
+               for (vd = 0; vd < Nd; vd++) switch (Qd[vd].once && this.removeListener(dd, Qd[vd].Ot, void 0, !0), td) {
```

#### 1461. `bundles/bloxd.io/main.js` (Changed code · before: `L24186` → after: `L24186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24186) · [Before (L24186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24186)

```diff
-                   pr[Er].Wx.call(pr[Er].context);
+                   Qd[vd].Ot.call(Qd[vd].context);
```

#### 1462. `bundles/bloxd.io/main.js` (Changed code · before: `L24189` → after: `L24189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24189) · [Before (L24189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24189)

```diff
-                   pr[Er].Wx.call(pr[Er].context, Sr);
+                   Qd[vd].Ot.call(Qd[vd].context, Od);
```

#### 1463. `bundles/bloxd.io/main.js` (Changed code · before: `L24192` → after: `L24192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24192) · [Before (L24192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24192)

```diff
-                   pr[Er].Wx.call(pr[Er].context, Sr, Zr);
+                   Qd[vd].Ot.call(Qd[vd].context, Od, Wd);
```

#### 1464. `bundles/bloxd.io/main.js` (Changed code · before: `L24195` → after: `L24195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24195) · [Before (L24195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24195)

```diff
-                   pr[Er].Wx.call(pr[Er].context, Sr, Zr, Wr);
+                   Qd[vd].Ot.call(Qd[vd].context, Od, Wd, Fd);
```

#### 1465. `bundles/bloxd.io/main.js` (Changed code · before: `L24200` → after: `L24200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24200) · [Before (L24200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24200)

```diff
-                   pr[Er].Wx.apply(pr[Er].context, fr)
+                   Qd[vd].Ot.apply(Qd[vd].context, hd)
```

#### 1466. `bundles/bloxd.io/main.js` (Changed code · before: `L24209` → after: `L24209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24209) · [Before (L24209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24209)

```diff
-             var ar = Qr ? Qr + rr : rr;
+             var Rd = md ? md + dd : dd;
```

#### 1467. `bundles/bloxd.io/main.js` (Changed code · before: `L24213` → after: `L24213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24213) · [Before (L24213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24213)

```diff
-             if (Ir.Wx) Ir.Wx !== Sr || Wr && !Ir.once || Zr && Ir.context !== Zr || jr(this, ar);
+             if (Kd.Ot) Kd.Ot !== Od || Fd && !Kd.once || Wd && Kd.context !== Wd || Xd(this, Rd);
```

#### 1468. `bundles/bloxd.io/main.js` (Changed code · before: `L24215-L24216` → after: `L24215-L24216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24215-L24216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24215-L24216) · [Before (L24215-L24216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24215-L24216)

```diff
-               for (var fr = 0, Er = [], pr = Ir.length; fr < pr; fr++)(Ir[fr].Wx !== Sr || Wr && !Ir[fr].once || Zr && Ir[fr].context !== Zr) && Er.push(Ir[fr]);
-               Er.length ? this._events[ar] = 1 === Er.length ? Er[0] : Er : jr(this, ar)
+               for (var hd = 0, vd = [], Qd = Kd.length; hd < Qd; hd++)(Kd[hd].Ot !== Od || Fd && !Kd[hd].once || Wd && Kd[hd].context !== Wd) && vd.push(Kd[hd]);
+               vd.length ? this._events[Rd] = 1 === vd.length ? vd[0] : vd : Xd(this, Rd)
```

#### 1469. `bundles/bloxd.io/main.js` (Changed code · before: `L24219` → after: `L24219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24219) · [Before (L24219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24219)

```diff
-           }, Ir.prototype.hY = function(rr) {
+           }, Kd.prototype.eT = function(dd) {
```

#### 1470. `bundles/bloxd.io/main.js` (Changed code · before: `L24221` → after: `L24221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24221) · [Before (L24221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24221)

```diff
-             return rr ? (Sr = Qr ? Qr + rr : rr, this._events[Sr] && jr(this, Sr)) : (this._events = new Zr, this._eventsCount = 0), this
+             return dd ? (Od = md ? md + dd : dd, this._events[Od] && Xd(this, Od)) : (this._events = new Wd, this._eventsCount = 0), this
```

#### 1471. `bundles/bloxd.io/main.js` (Changed code · before: `L24223-L24224` → after: `L24223-L24224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24223-L24224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24223-L24224) · [Before (L24223-L24224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24223-L24224)

```diff
-         }, , , , , (rr, Sr, Qr) => {
-           const Zr = Qr(1209),
+         }, , (dd, Od, md) => {
+           const Wd = md(1202),
```

#### 1472. `bundles/bloxd.io/main.js` (Changed code · before: `L24244` → after: `L24244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24244) · [Before (L24244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24244)

```diff
-                 if (!(Er instanceof Error)) return void jr(new TypeError(`Non-error was thrown: "${Er}". You should only throw errors.`));
+                 if (!(vd instanceof Error)) return void Xd(new TypeError(`Non-error was thrown: "${vd}". You should only throw errors.`));
```

#### 1473. `bundles/bloxd.io/main.js` (Changed code · before: `L24264-L24267` → after: `L24264-L24267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24264-L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24264-L24267) · [Before (L24264-L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24264-L24267)

```diff
-         }, , , , , (rr, Sr, Qr) => {
-           rr.exports = Qr(1218)
-         }, , , , , , , , , (rr, Sr, Qr) => {
-           var Zr = Qr(1222);
+         }, , (dd, Od, md) => {
+           dd.exports = md(1210)
+         }, , , , , , , , (dd, Od, md) => {
+           var Wd = md(1215);
```

#### 1474. `bundles/bloxd.io/main.js` (Changed code · before: `L24312` → after: `L24312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24312) · [Before (L24312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24312)

```diff
-         }, , , , rr => {
+         }, , , , , dd => {
```

#### 1475. `bundles/bloxd.io/main.js` (Changed code · before: `L24362` → after: `L24362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24362) · [Before (L24362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24362)

```diff
-         }, , , , , , , (rr, Sr, Qr) => {
+         }, , , (dd, Od, md) => {
```

#### 1476. `bundles/bloxd.io/main.js` (Changed code · before: `L24366` → after: `L24366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24366) · [Before (L24366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24366)

```diff
-           var Zr = Qr(43);
+           var Wd = md(46);
```

#### 1477. `bundles/bloxd.io/main.js` (Changed code · before: `L24379` → after: `L24379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24379) · [Before (L24379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24379)

```diff
-                 jr - Ir >= 1e3 && (Ir = jr, fr = 0), (fr < 2 || 32 * (ar === Qr.length && (Sr(Qr), ar = 0), Qr[ar++] / 2 ** 32) * (fr / 2) ** 2 < 1) && ((0, Zr.r)() && (Wr = "2 "), fr += rr() - jr)
+                 Xd - Kd >= 1e3 && (Kd = Xd, hd = 0), (hd < 2 || 32 * (Rd === md.length && (Od(md), Rd = 0), md[Rd++] / 2 ** 32) * (hd / 2) ** 2 < 1) && ((0, Wd.s)() && (Fd = "2 "), hd += dd() - Xd)
```

#### 1478. `bundles/bloxd.io/main.js` (Changed code · before: `L24384` → after: `L24384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24384) · [Before (L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24384)

```diff
-         }, , , , (rr, Sr, Qr) => {
+         }, , , (dd, Od, md) => {
```

#### 1479. `bundles/bloxd.io/main.js` (Changed code · before: `L24388-L24389` → after: `L24388-L24389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24388-L24389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24388-L24389) · [Before (L24388-L24389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24388-L24389)

```diff
-           var Zr = Qr(109),
-             Wr = Qr(1240);
+           var Wd = md(107),
+             Fd = md(1229);
```

#### 1480. `bundles/bloxd.io/main.js` (Changed code · before: `L24411` → after: `L24411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24411) · [Before (L24411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24411)

```diff
-                   of rr.reverse()) Qr.insertBefore(Sr, null !== Zr && Zr.parentNode === Qr ? Zr : null);
+                   of dd.reverse()) md.insertBefore(Od, null !== Wd && Wd.parentNode === md ? Wd : null);
```

#### 1481. `bundles/bloxd.io/main.js` (Changed code · before: `L24422` → after: `L24422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24422) · [Before (L24422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24422)

```diff
-             const Qr = null !== (rr = (new Error).stack) && void 0 !== rr ? rr : "";
+             const md = null !== (dd = (new Error).stack) && void 0 !== dd ? dd : "";
```

#### 1482. `bundles/bloxd.io/main.js` (Changed code · before: `L24498` → after: `L24498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24498) · [Before (L24498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24498)

```diff
-                   }), 0)))), hr.call(this, rr, null !== (Wr = ar) && void 0 !== Wr ? Wr : Sr, Qr)
+                   }), 0)))), yd.call(this, dd, null !== (Fd = Rd) && void 0 !== Fd ? Fd : Od, md)
```

#### 1483. `bundles/bloxd.io/main.js` (Changed code · before: `L24503` → after: `L24503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24503) · [Before (L24503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24503)

```diff
-                   }(rr, Sr)) && void 0 !== Zr ? Zr : Sr, Qr)
+                   }(dd, Od)) && void 0 !== Wd ? Wd : Od, md)
```

#### 1484. `bundles/bloxd.io/main.js` (Changed code · before: `L24574` → after: `L24574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24574) · [Before (L24574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24574)

```diff
-                 window.onRecaptchaLoaded = rr, (0, Wr.e)(`https://www.recaptcha.net/recaptcha/api.js?onload=onRecaptchaLoaded&render=${pr}`, {}, !1).catch((rr => {
+                 window.onRecaptchaLoaded = dd, (0, Fd.d)(`https://www.recaptcha.net/recaptcha/api.js?onload=onRecaptchaLoaded&render=${Qd}`, {}, !1).catch((dd => {
```

#### 1485. `bundles/bloxd.io/main.js` (Changed code · before: `L24587` → after: `L24587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24587) · [Before (L24587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24587)

```diff
-                 Wr(new Error(`Recaptcha didn't ${Qr} within ${Sr} ms`))
+                 Fd(new Error(`Recaptcha didn't ${md} within ${Od} ms`))
```

#### 1486. `bundles/bloxd.io/main.js` (Changed code · before: `L24612` → after: `L24612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24612) · [Before (L24612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24612)

```diff
-             hr = Zr.featureFlags.useRecaptcha ? tr : {
+             yd = Wd.featureFlags.useRecaptcha ? Hd : {
```

#### 1487. `bundles/bloxd.io/main.js` (Changed code · before: `L24617` → after: `L24617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24617) · [Before (L24617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24617)

```diff
-         }, , , , , , , (rr, Sr, Qr) => {
+         }, , , , , , , , (dd, Od, md) => {
```

#### 1488. `bundles/bloxd.io/main.js` (Changed code · before: `L24619` → after: `L24619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24619) · [Before (L24619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24619)

```diff
-             e: () => ar
+             d: () => Rd
```

#### 1489. `bundles/bloxd.io/main.js` (Changed code · before: `L24621-L24622` → after: `L24621-L24622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24621-L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24621-L24622) · [Before (L24621-L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24621-L24622)

```diff
-           var Zr = Qr(34),
-             Wr = Qr(26);
+           var Wd = md(32),
+             Fd = md(29);
```

#### 1490. `bundles/bloxd.io/main.js` (Changed code · before: `L24631` → after: `L24631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24631) · [Before (L24631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24631)

```diff
-                   jr(new Error(`Failed to load script ${rr}`, {
+                   Xd(new Error(`Failed to load script ${dd}`, {
```

#### 1491. `bundles/bloxd.io/main.js` (Changed code · before: `L24638` → after: `L24638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24638) · [Before (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24638)

```diff
-               !Qr || Wr.c.get("requiredLibrariesLoaded") ? Ir() : Zr.i.subscribe("requiredLibrariesLoaded", (() => {
+               !md || Fd.e.get("requiredLibrariesLoaded") ? Kd() : Wd.j.subscribe("requiredLibrariesLoaded", (() => {
```

#### 1492. `bundles/bloxd.io/main.js` (Changed code · before: `L24643` → after: `L24643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24643) · [Before (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24643)

```diff
-         }, , , , , , (rr, Sr, Qr) => {
+         }, , , , , (dd, Od, md) => {
```

#### 1493. `bundles/bloxd.io/main.js` (Changed code · before: `L24645-L24647` → after: `L24645-L24647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24645-L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24645-L24647) · [Before (L24645-L24647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24645-L24647)

```diff
-             d: () => Pr,
-             h: () => yr,
-             g: () => Ur
+             c: () => ud,
+             f: () => wd,
+             d: () => qd
```

#### 1494. `bundles/bloxd.io/main.js` (Changed code · before: `L24649-L24652` → after: `L24649-L24652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24649-L24652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24649-L24652) · [Before (L24649-L24652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24649-L24652)

```diff
-           var Zr = Qr(72),
-             Wr = Qr(109),
-             ar = Qr(1251),
-             jr = Qr(1405),
+           var Wd = md(66),
+             Fd = md(107),
+             Rd = md(1238),
+             Xd = md(1401),
```

#### 1495. `bundles/bloxd.io/main.js` (Changed code · before: `L24654-L24659` → after: `L24654-L24659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24654-L24659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24654-L24659) · [Before (L24654-L24659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24654-L24659)

```diff
-             fr = Qr(1353),
-             Er = Qr(1240),
-             pr = Qr(1371),
-             xr = Qr(1391),
-             mr = Qr(1398),
-             Nr = Qr(1338);
+             hd = md(1349),
+             vd = md(1229),
+             Qd = md(1368),
+             td = md(1388),
+             od = md(1392),
+             Nd = md(1341);
```

#### 1496. `bundles/bloxd.io/main.js` (Changed code · before: `L24674` → after: `L24674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24674) · [Before (L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24674)

```diff
-           const hr = new jr.c;
+           const yd = new Xd.d;
```

#### 1497. `bundles/bloxd.io/main.js` (Changed code · before: `L24690` → after: `L24690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24690) · [Before (L24690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24690)

```diff
-                     return void await (0, Er.e)("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoaded", {}, !1)
+                     return void await (0, vd.d)("https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoaded", {}, !1)
```

#### 1498. `bundles/bloxd.io/main.js` (Changed code · before: `L24698` → after: `L24698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24698) · [Before (L24698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24698)

```diff
-                   console.error(rr), (0, pr.Pt)(rr), Sr(rr)
+                   console.error(dd), (0, Qd.rH)(dd), Od(dd)
```

#### 1499. `bundles/bloxd.io/main.js` (Changed code · before: `L24728` → after: `L24728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24728) · [Before (L24728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24728)

```diff
-             zr ? arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && "shown" === Tr ? Sr = "silent" : "shown" !== Tr && (Sr = rr ? er ? "shown" : "silent" : Tr) : Sr = "hidden", (0, mr.e)(rr && nr > 0), Sr !== Tr && function(rr) {
+             bd ? arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && "shown" === Jd ? Od = "silent" : "shown" !== Jd && (Od = dd ? Yd ? "shown" : "silent" : Jd) : Od = "hidden", (0, od.d)(dd && pd > 0), Od !== Jd && function(dd) {
```

#### 1500. `bundles/bloxd.io/main.js` (Changed code · before: `L24743` → after: `L24743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24743) · [Before (L24743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24743)

```diff
-               "shown" === rr ? (0, fr.t)(Ur) : (0, fr.s)(Ur)
+               "shown" === dd ? (0, hd.v)(qd) : (0, hd.u)(qd)
```

#### 1501. `bundles/bloxd.io/main.js` (Changed code · before: `L24762` → after: `L24762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24762) · [Before (L24762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24762)

```diff
-               } = (0, ar.E)(), Sr = "turnstile-widget", Qr = async () => {
+               } = (0, Rd.G)(), Od = "turnstile-widget", md = async () => {
```

#### 1502. `bundles/bloxd.io/main.js` (Changed code · before: `L24778` → after: `L24778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24778) · [Before (L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24778)

```diff
-                       (0, xr.c)(), Qr === Lr && (er = !0, vr())
+                       (0, td.d)(), md === Bd && (Yd = !0, Ud())
```

#### 1503. `bundles/bloxd.io/main.js` (Changed code · before: `L24781` → after: `L24781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24781) · [Before (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24781)

```diff
-                       (0, xr.i)(Sr), rr.reject(new Error(`Turnstile Error: ${Sr}`))
+                       (0, td.k)(Od), dd.reject(new Error(`Turnstile Error: ${Od}`))
```

#### 1504. `bundles/bloxd.io/main.js` (Changed code · before: `L24785` → after: `L24785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24785) · [Before (L24785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24785)

```diff
-                   Or = window.turnstile.render(`#${Sr}`, Zr), (0, xr.m)(rr.trigger)
+                   xd = window.turnstile.render(`#${Od}`, Wd), (0, td.n)(dd.trigger)
```

#### 1505. `bundles/bloxd.io/main.js` (Changed code · before: `L24787` → after: `L24787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24787) · [Before (L24787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24787)

```diff
-                   (0, pr.Pt)(Wr), rr.reject(Wr instanceof Error ? Wr : new Error(String(Wr)))
+                   (0, Qd.rH)(Fd), dd.reject(Fd instanceof Error ? Fd : new Error(String(Fd)))
```

#### 1506. `bundles/bloxd.io/main.js` (Changed code · before: `L24798` → after: `L24798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24798) · [Before (L24798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24798)

```diff
-                   for (;;) await Qr(), hr.nx() && (zr = !1, vr())
+                   for (;;) await md(), yd.Nt() && (bd = !1, Ud())
```

#### 1507. `bundles/bloxd.io/main.js` (Changed code · before: `L24806` → after: `L24806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24806) · [Before (L24806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24806)

```diff
-                 children: (0, Nr.jsxs)(Ir.d, {
+                 children: (0, Nd.jsxs)(Kd.e, {
```

#### 1508. `bundles/bloxd.io/main.js` (Changed code · before: `L24823` → after: `L24823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24823) · [Before (L24823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24823)

```diff
-         }, , , , , (rr, Sr, Qr) => {
+         }, , , , (dd, Od, md) => {
```

#### 1509. `bundles/bloxd.io/main.js` (Changed code · before: `L24825` → after: `L24825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24825) · [Before (L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24825)

```diff
-             d: () => yr,
+             e: () => wd,
```

#### 1510. `bundles/bloxd.io/main.js` (Changed code · before: `L24829-L24831` → after: `L24828-L24834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24828-L24834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24828-L24834) · [Before (L24829-L24831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24829-L24831)

```diff
-             l: () => zr,
-             m: () => er,
-             p: () => Ur.e,
+             k: () => Hd,
+             n: () => bd,
+             p: () => Yd,
+             s: () => qd.g,
+             D: () => yd,
+             u: () => Jd,
+             x: () => Ed,
```

#### 1511. `bundles/bloxd.io/main.js` (Changed code · before: `L24833-L24836` → after: `L24836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24836) · [Before (L24833-L24836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24833-L24836)

```diff
-             s: () => Tr,
-             v: () => Br,
-             z: () => Yr,
-             E: () => Mr
+             G: () => nd
```

#### 1512. `bundles/bloxd.io/main.js` (Changed code · before: `L24838-L24839` → after: `L24838-L24839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24838-L24839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24838-L24839) · [Before (L24838-L24839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24838-L24839)

```diff
-           var Zr = Qr(72),
-             Wr = Qr(92);
+           var Wd = md(66),
+             Fd = md(86);
```

#### 1513. `bundles/bloxd.io/main.js` (Changed code · before: `L24841` → after: `L24841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24841) · [Before (L24841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24841)

```diff
-           var jr = Qr(1256);
+           var Xd = md(1245);
```

#### 1514. `bundles/bloxd.io/main.js` (Changed code · before: `L24844-L24849` → after: `L24844-L24849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24844-L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24844-L24849) · [Before (L24844-L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24844-L24849)

```diff
-           var Er = Qr(1262),
-             pr = Qr(1304),
-             xr = Qr(688),
-             mr = Qr(360),
-             Nr = Qr(379),
-             Ur = Qr(1317);
+           var vd = md(1253),
+             Qd = md(1306),
+             td = md(701),
+             od = md(387),
+             Nd = md(405),
+             qd = md(1315);
```

#### 1515. `bundles/bloxd.io/main.js` (Changed code · before: `L24851` → after: `L24851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24851) · [Before (L24851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24851)

```diff
-             [pr.b.ARABIC]: {
+             [Qd.c.ARABIC]: {
```

#### 1516. `bundles/bloxd.io/main.js` (Changed code · before: `L24853` → after: `L24853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24853) · [Before (L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24853)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/ar.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/ar.json`
```

#### 1517. `bundles/bloxd.io/main.js` (Changed code · before: `L24855` → after: `L24855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24855) · [Before (L24855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24855)

```diff
-             [pr.b.GERMAN]: {
+             [Qd.c.GERMAN]: {
```

#### 1518. `bundles/bloxd.io/main.js` (Changed code · before: `L24857` → after: `L24857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24857) · [Before (L24857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24857)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/de.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/de.json`
```

#### 1519. `bundles/bloxd.io/main.js` (Changed code · before: `L24859` → after: `L24859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24859) · [Before (L24859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24859)

```diff
-             [pr.b.ENGLISH]: {
+             [Qd.c.ENGLISH]: {
```

#### 1520. `bundles/bloxd.io/main.js` (Changed code · before: `L24866` → after: `L24866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24866) · [Before (L24866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24866)

```diff
-             [pr.b.SPANISH]: {
+             [Qd.c.SPANISH]: {
```

#### 1521. `bundles/bloxd.io/main.js` (Changed code · before: `L24868` → after: `L24868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24868) · [Before (L24868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24868)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/es.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/es.json`
```

#### 1522. `bundles/bloxd.io/main.js` (Changed code · before: `L24870` → after: `L24870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24870) · [Before (L24870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24870)

```diff
-             [pr.b.FRENCH]: {
+             [Qd.c.FRENCH]: {
```

#### 1523. `bundles/bloxd.io/main.js` (Changed code · before: `L24872` → after: `L24872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24872) · [Before (L24872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24872)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/fr.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/fr.json`
```

#### 1524. `bundles/bloxd.io/main.js` (Changed code · before: `L24874` → after: `L24874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24874) · [Before (L24874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24874)

```diff
-             [pr.b.HINDI]: {
+             [Qd.c.HINDI]: {
```

#### 1525. `bundles/bloxd.io/main.js` (Changed code · before: `L24876` → after: `L24876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24876) · [Before (L24876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24876)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/hi.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/hi.json`
```

#### 1526. `bundles/bloxd.io/main.js` (Changed code · before: `L24878` → after: `L24878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24878) · [Before (L24878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24878)

```diff
-             [pr.b.INDONESIAN]: {
+             [Qd.c.INDONESIAN]: {
```

#### 1527. `bundles/bloxd.io/main.js` (Changed code · before: `L24880` → after: `L24880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24880) · [Before (L24880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24880)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/id.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/id.json`
```

#### 1528. `bundles/bloxd.io/main.js` (Changed code · before: `L24882` → after: `L24882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24882) · [Before (L24882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24882)

```diff
-             [pr.b.ITALIAN]: {
+             [Qd.c.ITALIAN]: {
```

#### 1529. `bundles/bloxd.io/main.js` (Changed code · before: `L24884` → after: `L24884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24884) · [Before (L24884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24884)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/it.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/it.json`
```

#### 1530. `bundles/bloxd.io/main.js` (Changed code · before: `L24886` → after: `L24886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24886) · [Before (L24886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24886)

```diff
-             [pr.b.JAPANESE]: {
+             [Qd.c.JAPANESE]: {
```

#### 1531. `bundles/bloxd.io/main.js` (Changed code · before: `L24888` → after: `L24888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24888) · [Before (L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24888)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/ja.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/ja.json`
```

#### 1532. `bundles/bloxd.io/main.js` (Changed code · before: `L24890` → after: `L24890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24890) · [Before (L24890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24890)

```diff
-             [pr.b.DUTCH]: {
+             [Qd.c.DUTCH]: {
```

#### 1533. `bundles/bloxd.io/main.js` (Changed code · before: `L24892` → after: `L24892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24892) · [Before (L24892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24892)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/nl.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/nl.json`
```

#### 1534. `bundles/bloxd.io/main.js` (Changed code · before: `L24894` → after: `L24894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24894) · [Before (L24894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24894)

```diff
-             [pr.b.PORTUGUESE]: {
+             [Qd.c.PORTUGUESE]: {
```

#### 1535. `bundles/bloxd.io/main.js` (Changed code · before: `L24896` → after: `L24896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24896) · [Before (L24896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24896)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/pt.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/pt.json`
```

#### 1536. `bundles/bloxd.io/main.js` (Changed code · before: `L24898` → after: `L24898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24898) · [Before (L24898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24898)

```diff
-             [pr.b.PORTUGUESE_BRAZILIAN]: {
+             [Qd.c.PORTUGUESE_BRAZILIAN]: {
```

#### 1537. `bundles/bloxd.io/main.js` (Changed code · before: `L24900` → after: `L24900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24900) · [Before (L24900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24900)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/pt-br.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/pt-br.json`
```

#### 1538. `bundles/bloxd.io/main.js` (Changed code · before: `L24902` → after: `L24902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24902) · [Before (L24902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24902)

```diff
-             [pr.b.RUSSIAN]: {
+             [Qd.c.RUSSIAN]: {
```

#### 1539. `bundles/bloxd.io/main.js` (Changed code · before: `L24904` → after: `L24904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24904) · [Before (L24904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24904)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/ru.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/ru.json`
```

#### 1540. `bundles/bloxd.io/main.js` (Changed code · before: `L24906` → after: `L24906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24906) · [Before (L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24906)

```diff
-             [pr.b.TAMIL]: {
+             [Qd.c.TAMIL]: {
```

#### 1541. `bundles/bloxd.io/main.js` (Changed code · before: `L24908` → after: `L24908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24908) · [Before (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24908)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/ta.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/ta.json`
```

#### 1542. `bundles/bloxd.io/main.js` (Changed code · before: `L24910` → after: `L24910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24910) · [Before (L24910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24910)

```diff
-             [pr.b.TURKISH]: {
+             [Qd.c.TURKISH]: {
```

#### 1543. `bundles/bloxd.io/main.js` (Changed code · before: `L24912` → after: `L24912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24912) · [Before (L24912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24912)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/tr.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/tr.json`
```

#### 1544. `bundles/bloxd.io/main.js` (Changed code · before: `L24914` → after: `L24914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24914) · [Before (L24914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24914)

```diff
-             [pr.b.VIETNAMESE]: {
+             [Qd.c.VIETNAMESE]: {
```

#### 1545. `bundles/bloxd.io/main.js` (Changed code · before: `L24916` → after: `L24916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24916) · [Before (L24916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24916)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/vi.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/vi.json`
```

#### 1546. `bundles/bloxd.io/main.js` (Changed code · before: `L24918` → after: `L24918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24918) · [Before (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24918)

```diff
-             [pr.b.CHINESE_SIMPLIFIED]: {
+             [Qd.c.CHINESE_SIMPLIFIED]: {
```

#### 1547. `bundles/bloxd.io/main.js` (Changed code · before: `L24920` → after: `L24920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24920) · [Before (L24920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24920)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/zh-Hans.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/zh-Hans.json`
```

#### 1548. `bundles/bloxd.io/main.js` (Changed code · before: `L24922` → after: `L24922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24922) · [Before (L24922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24922)

```diff
-             [pr.b.CHINESE_TRADITIONAL]: {
+             [Qd.c.CHINESE_TRADITIONAL]: {
```

#### 1549. `bundles/bloxd.io/main.js` (Changed code · before: `L24924` → after: `L24924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24924) · [Before (L24924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24924)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/zh-Hant.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/zh-Hant.json`
```

#### 1550. `bundles/bloxd.io/main.js` (Changed code · before: `L24926` → after: `L24926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24926) · [Before (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24926)

```diff
-             [pr.b.POLISH]: {
+             [Qd.c.POLISH]: {
```

#### 1551. `bundles/bloxd.io/main.js` (Changed code · before: `L24928` → after: `L24928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24928) · [Before (L24928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24928)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/pl.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/pl.json`
```

#### 1552. `bundles/bloxd.io/main.js` (Changed code · before: `L24930` → after: `L24930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24930) · [Before (L24930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24930)

```diff
-             [pr.b.UKRAINIAN]: {
+             [Qd.c.UKRAINIAN]: {
```

#### 1553. `bundles/bloxd.io/main.js` (Changed code · before: `L24932` → after: `L24932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24932) · [Before (L24932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24932)

```diff
-               translationsUrl: `${Er.clientSideServerUrls.staticUrl}/translations/uk.json`
+               translationsUrl: `${vd.clientSideServerUrls.staticUrl}/translations/uk.json`
```

#### 1554. `bundles/bloxd.io/main.js` (Changed code · before: `L24955` → after: `L24955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24955) · [Before (L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24955)

```diff
-             return nr(rr, Sr) ? rr : pr.b.ENGLISH
+             return pd(dd, Od) ? dd : Qd.c.ENGLISH
```

#### 1555. `bundles/bloxd.io/main.js` (Changed code · before: `L24963` → after: `L24963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24963) · [Before (L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24963)

```diff
-             Object.assign(tr[pr.b.ENGLISH].translations, rr)
+             Object.assign(Hd[Qd.c.ENGLISH].translations, dd)
```

#### 1556. `bundles/bloxd.io/main.js` (Changed code · before: `L24979-L24980` → after: `L24979-L24980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R24979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L24979-L24980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L24979-L24980) · [Before (L24979-L24980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L24979-L24980)

```diff
-             const Qr = rr.map((rr => "string" === typeof rr ? rr : `[[${rr.icon}]]`)).join("");
-             return Sr ? Qr : (0, mr.vb)(Qr)
+             const md = dd.map((dd => "string" === typeof dd ? dd : `[[${dd.icon}]]`)).join("");
+             return Od ? md : (0, od.rb)(md)
```

#### 1557. `bundles/bloxd.io/main.js` (Changed code · before: `L25002` → after: `L25002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25002) · [Before (L25002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25002)

```diff
-                 const Wr = tr[pr.b.ENGLISH];
+                 const Fd = Hd[Qd.c.ENGLISH];
```

#### 1558. `bundles/bloxd.io/main.js` (Changed code · before: `L25015` → after: `L25015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25015) · [Before (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25015)

```diff
-             if (!jr) return console.error(`Missing translation key: ${Sr}`), [Sr];
+             if (!Xd) return console.error(`Missing translation key: ${Od}`), [Od];
```

#### 1559. `bundles/bloxd.io/main.js` (Changed code · before: `L25019-L25020` → after: `L25019-L25020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25019-L25020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25019-L25020) · [Before (L25019-L25020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25019-L25020)

```diff
-               xr = Qr => (0, Nr.Z)(er(rr, Sr), Number(Qr));
-             return (0, mr.gc)(ar).map((rr => "string" === typeof rr ? (rr => {
+               td = md => (0, Nd.U)(Yd(dd, Od), Number(md));
+             return (0, od.dc)(Rd).map((dd => "string" === typeof dd ? (dd => {
```

#### 1560. `bundles/bloxd.io/main.js` (Changed code · before: `L25025` → after: `L25025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25025) · [Before (L25025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25025)

```diff
-                   jr = String(null !== (ar = null === Qr || void 0 === Qr ? void 0 : Qr[rr]) && void 0 !== ar ? ar : ""),
+                   Xd = String(null !== (Rd = null === md || void 0 === md ? void 0 : md[dd]) && void 0 !== Rd ? Rd : ""),
```

#### 1561. `bundles/bloxd.io/main.js` (Changed code · before: `L25027` → after: `L25027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25027) · [Before (L25027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25027)

```diff
-                 let pr, mr = null === Ir ? jr : xr(Ir[1]);
+                 let Qd, od = null === Kd ? Xd : td(Kd[1]);
```

#### 1562. `bundles/bloxd.io/main.js` (Changed code · before: `L25033` → after: `L25033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25033) · [Before (L25033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25033)

```diff
-                   mr = mr.replace(`$t(${rr})`, Sr)
+                   od = od.replace(`$t(${dd})`, Od)
```

#### 1563. `bundles/bloxd.io/main.js` (Changed code · before: `L25035` → after: `L25035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25035) · [Before (L25035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25035)

```diff
-                 Zr = Zr.replace(`{{${rr}}}`, mr)
+                 Wd = Wd.replace(`{{${dd}}}`, od)
```

#### 1564. `bundles/bloxd.io/main.js` (Changed code · before: `L25043` → after: `L25043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25043) · [Before (L25043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25043)

```diff
-             return (0, xr.L)(rr.translations) && (0, xr.L)(rr.translationFetchInFlightPromise) ? (rr.translationFetchInFlightPromise = fetch(rr.translationsUrl).then((async Sr => Sr.ok ? Sr.json() : (console.error(`Error fetching translations from ${rr.translationsUrl}`), {}))).c … [truncated]
+             return (0, td.O)(dd.translations) && (0, td.O)(dd.translationFetchInFlightPromise) ? (dd.translationFetchInFlightPromise = fetch(dd.translationsUrl).then((async Od => Od.ok ? Od.json() : (console.error(`Error fetching translations from ${dd.translationsUrl}`), {}))).c … [truncated]
```

#### 1565. `bundles/bloxd.io/main.js` (Changed code · before: `L25045` → after: `L25045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25045) · [Before (L25045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25045)

```diff
-             })), rr.translationFetchInFlightPromise) : null !== (Sr = rr.translationFetchInFlightPromise) && void 0 !== Sr ? Sr : Promise.resolve()
+             })), dd.translationFetchInFlightPromise) : null !== (Od = dd.translationFetchInFlightPromise) && void 0 !== Od ? Od : Promise.resolve()
```

#### 1566. `bundles/bloxd.io/main.js` (Changed code · before: `L25061` → after: `L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25061) · [Before (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25061)

```diff
-             return Pr(tr[rr].translations ? rr : pr.b.ENGLISH)
+             return ud(Hd[dd].translations ? dd : Qd.c.ENGLISH)
```

#### 1567. `bundles/bloxd.io/main.js` (Changed code · before: `L25081` → after: `L25081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25081) · [Before (L25081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25081)

```diff
-             (0, Zr.useEffect)((() => (null === Hr && (Hr = Rr().code, (0, pr.i)(Cr), Cr(pr.f.get().getCurrentLanguageCode())), qr.add(Sr), Sr(Rr()), () => {
+             (0, Wd.useEffect)((() => (null === Vd && (Vd = Ad().code, (0, Qd.g)(Gd), Gd(Qd.f.get().getCurrentLanguageCode())), id.add(Od), Od(Ad()), () => {
```

#### 1568. `bundles/bloxd.io/main.js` (Changed code · before: `L25090` → after: `L25090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25090) · [Before (L25090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25090)

```diff
-         }, , , , , rr => {
+         }, , , , , , , dd => {
```

#### 1569. `bundles/bloxd.io/main.js` (Changed code · before: `L25092` → after: `L25092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25092) · [Before (L25092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25092)

```diff
-         }, , , , , , (rr, Sr, Qr) => {
+         }, , , , , , , , (dd, Od, md) => {
```

#### 1570. `bundles/bloxd.io/main.js` (Changed code · before: `L25096-L25103` → after: `L25096-L25103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25096-L25103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25096-L25103) · [Before (L25096-L25103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25096-L25103)

```diff
-           var Zr = Qr(1295),
-             Wr = Qr(219),
-             ar = Qr(1269),
-             jr = Qr(139),
-             Ir = Qr(1264),
-             fr = Qr(1279),
-             Er = Qr(43),
-             pr = Qr(1267);
+           var Wd = md(1304),
+             Fd = md(235),
+             Rd = md(1272),
+             Xd = md(151),
+             Kd = md(1262),
+             hd = md(1286),
+             vd = md(46),
+             Qd = md(1268);
```

#### 1571. `bundles/bloxd.io/main.js` (Changed code · before: `L25110` → after: `L25110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25110) · [Before (L25110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25110)

```diff
-               "number" === typeof Zr && Number.isInteger(Zr) && Zr >= 1 && Zr <= rr ? this.index = Zr : (null !== Zr && console.warn(`Stored static server ${String(Zr)} is not one of 1-${rr}; picking again`), this.index = 1 + Math.floor(Qr() * rr), Sr.setItem(xr, this.index))
+               "number" === typeof Wd && Number.isInteger(Wd) && Wd >= 1 && Wd <= dd ? this.index = Wd : (null !== Wd && console.warn(`Stored static server ${String(Wd)} is not one of 1-${dd}; picking again`), this.index = 1 + Math.floor(md() * dd), Od.setItem(td, this.index))
```

#### 1572. `bundles/bloxd.io/main.js` (Changed code · before: `L25121` → after: `L25121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25121) · [Before (L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25121)

```diff
-               null !== Zr ? console.warn(`Static server ${this.index} failed its check twice (${Zr}); static server ${Qr} from the next page load`) : this.storage.setItem(xr, this.index)
+               null !== Wd ? console.warn(`Static server ${this.index} failed its check twice (${Wd}); static server ${md} from the next page load`) : this.storage.setItem(td, this.index)
```

#### 1573. `bundles/bloxd.io/main.js` (Changed code · before: `L25125` → after: `L25125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25125) · [Before (L25125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25125)

```diff
-             const Sr = await (0, pr.j)(`${rr}/version`, {
+             const Od = await (0, Qd.m)(`${dd}/version`, {
```

#### 1574. `bundles/bloxd.io/main.js` (Changed code · before: `L25128` → after: `L25128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25128) · [Before (L25128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25128)

```diff
-             return null === Sr ? "no answer" : Sr >= 200 && Sr < 300 ? null : `HTTP ${Sr}`
+             return null === Od ? "no answer" : Od >= 200 && Od < 300 ? null : `HTTP ${Od}`
```

#### 1575. `bundles/bloxd.io/main.js` (Changed code · before: `L25130` → after: `L25130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25130) · [Before (L25130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25130)

```diff
-           var Ur = Qr(272);
+           var qd = md(285);
```

#### 1576. `bundles/bloxd.io/main.js` (Changed code · before: `L25133` → after: `L25133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25133) · [Before (L25133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25133)

```diff
-               this.indexUrl = Ir.c.urls.index, this.staticUrl = (() => {
+               this.indexUrl = Kd.b.urls.index, this.staticUrl = (() => {
```

#### 1577. `bundles/bloxd.io/main.js` (Changed code · before: `L25135` → after: `L25135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25135) · [Before (L25135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25135)

```diff
-                 const rr = new mr((0, Wr.i)() ? 1 : 8, Er.j);
+                 const dd = new od((0, Fd.f)() ? 1 : 8, vd.k);
```

#### 1578. `bundles/bloxd.io/main.js` (Changed code · before: `L25137-L25138` → after: `L25137-L25138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25137-L25138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25137-L25138) · [Before (L25137-L25138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25137-L25138)

```diff
-                 let Sr = `https://static${rr.index}.bloxd.io`;
-                 return (0, jr.isDiscordClient)() ? Sr = `https://${Ir.c.discordDomain}/bloxd-static/${rr.index}` : (0, Wr.i)() && (Sr = `https://static${rr.index}.preprod.bloxd.io`), (0, Ur.c)((() => {
+                 let Od = `https://static${dd.index}.bloxd.io`;
+                 return (0, Xd.isDiscordClient)() ? Od = `https://${Kd.b.discordDomain}/bloxd-static/${dd.index}` : (0, Fd.f)() && (Od = `https://static${dd.index}.preprod.bloxd.io`), (0, qd.e)((() => {
```

#### 1579. `bundles/bloxd.io/main.js` (Changed code · before: `L25141` → after: `L25141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25141) · [Before (L25141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25141)

```diff
-               })(), this.s3Url = Ir.c.urls.s3, this.texturePackUrl = (0, jr.isDiscordClient)() ? `https://${Ir.c.discordDomain}/texture-pack` : "https://raw.githubusercontent.com/Bloxdy/texturePacks/main/_json", this.wsUrlPrefix = (0, Wr.m)() ? "ws://" : "wss://"
+               })(), this.s3Url = Kd.b.urls.s3, this.texturePackUrl = (0, Xd.isDiscordClient)() ? `https://${Kd.b.discordDomain}/texture-pack` : "https://raw.githubusercontent.com/Bloxdy/texturePacks/main/_json", this.wsUrlPrefix = (0, Fd.m)() ? "ws://" : "wss://"
```

#### 1580. `bundles/bloxd.io/main.js` (Changed code · before: `L25144` → after: `L25144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25144) · [Before (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25144)

```diff
-               return (0, jr.isDiscordClient)() ? `https://${Ir.c.discordDomain}/social/${rr}` : (0, ar.G)(rr)
+               return (0, Xd.isDiscordClient)() ? `https://${Kd.b.discordDomain}/social/${dd}` : (0, Rd.I)(dd)
```

#### 1581. `bundles/bloxd.io/main.js` (Changed code · before: `L25151` → after: `L25151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25151) · [Before (L25151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25151)

```diff
-                   const Sr = (0, fr.cb)(rr);
+                   const Od = (0, hd.Y)(dd);
```

#### 1582. `bundles/bloxd.io/main.js` (Changed code · before: `L25157` → after: `L25157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25157) · [Before (L25157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25157)

```diff
-                   return `game/${Zr}/${Qr}`
+                   return `game/${Wd}/${md}`
```

#### 1583. `bundles/bloxd.io/main.js` (Changed code · before: `L25160-L25161` → after: `L25160-L25161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25160-L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25160-L25161) · [Before (L25160-L25161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25160-L25161)

```diff
-                 Sr = `wss://${Ir.c.discordDomain}/${Qr}`
-               } else Sr = `${tr.wsUrlPrefix}${rr}`;
+                 Od = `wss://${Kd.b.discordDomain}/${md}`
+               } else Od = `${Hd.wsUrlPrefix}${dd}`;
```

#### 1584. `bundles/bloxd.io/main.js` (Changed code · before: `L25168` → after: `L25168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25168) · [Before (L25168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25168)

```diff
-         }, , (rr, Sr, Qr) => {
+         }, , , , , , , , , (dd, Od, md) => {
```

#### 1585. `bundles/bloxd.io/main.js` (Changed code · before: `L25170` → after: `L25170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25170) · [Before (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25170)

```diff
-             c: () => Er
+             b: () => vd
```

#### 1586. `bundles/bloxd.io/main.js` (Changed code · before: `L25172-L25175` → after: `L25172-L25175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25172-L25175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25172-L25175) · [Before (L25172-L25175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25172-L25175)

```diff
-           var Zr = Qr(360),
-             Wr = Qr(208),
-             ar = Qr(213),
-             jr = Qr(219);
+           var Wd = md(387),
+             Fd = md(218),
+             Rd = md(222),
+             Xd = md(235);
```

#### 1587. `bundles/bloxd.io/main.js` (Changed code · before: `L25177` → after: `L25177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25177) · [Before (L25177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25177)

```diff
-           var fr = Qr(139);
+           var hd = md(151);
```

#### 1588. `bundles/bloxd.io/main.js` (Changed code · before: `L25180` → after: `L25180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25180) · [Before (L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25180)

```diff
-               this.Kx = rr, this.clientEnvironment = void 0, this.discordClientID = void 0, this.discordEmojiId = void 0, this.discordDomain = void 0, this.urls = void 0, this.discordRoutePrefix = ".proxy", this.clientEnvironment = this.getClientEnvironment(), this.discordClientI … [truncated]
+               this.Ht = dd, this.clientEnvironment = void 0, this.discordClientID = void 0, this.discordEmojiId = void 0, this.discordDomain = void 0, this.urls = void 0, this.discordRoutePrefix = ".proxy", this.clientEnvironment = this.getClientEnvironment(), this.discordClientI … [truncated]
```

#### 1589. `bundles/bloxd.io/main.js` (Changed code · before: `L25189` → after: `L25189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25189) · [Before (L25189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25189)

```diff
-               return Ir ? Zr.e.LOCAL : this.Kx.isPreprod ? Zr.e.PREPROD : Zr.e.PRODUCTION
+               return Kd ? Wd.b.LOCAL : this.Ht.isPreprod ? Wd.b.PREPROD : Wd.b.PRODUCTION
```

#### 1590. `bundles/bloxd.io/main.js` (Changed code · before: `L25193` → after: `L25193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25193) · [Before (L25193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25193)

```diff
-               return null !== (rr = this.Kx.client) && void 0 !== rr && rr.isDiscord ? `https://${this.discordDomain}/index` : jr.e ? "https://bloxd.io" : (0, jr.m)() ? `http://${ar.d.localDomain}:${jr.l.indexServerPort}` : this.Kx.urls.productionIndexUrl()
+               return null !== (dd = this.Ht.client) && void 0 !== dd && dd.isDiscord ? `https://${this.discordDomain}/index` : Xd.c ? "https://bloxd.io" : (0, Xd.m)() ? `http://${Rd.b.localDomain}:${Xd.j.indexServerPort}` : this.Ht.urls.productionIndexUrl()
```

#### 1591. `bundles/bloxd.io/main.js` (Changed code · before: `L25197` → after: `L25197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25197) · [Before (L25197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25197)

```diff
-               return null !== (Sr = this.Kx.client) && void 0 !== Sr && Sr.isDiscord ? `https://${this.discordDomain}/s3` : Ir && ar.d.useLocalDatabase ? `${rr}/local-s3/bloxdhop` : "https://cdn.bloxd.io"
+               return null !== (Od = this.Ht.client) && void 0 !== Od && Od.isDiscord ? `https://${this.discordDomain}/s3` : Kd && Rd.b.useLocalDatabase ? `${dd}/local-s3/bloxdhop` : "https://cdn.bloxd.io"
```

#### 1592. `bundles/bloxd.io/main.js` (Changed code · before: `L25213-L25214` → after: `L25213-L25214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25213-L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25213-L25214) · [Before (L25213-L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25213-L25214)

```diff
-                   console.warn(`The ${rr} environment variable is improperly formatted in production mode. Any Discord integrations will break as a consequence.`)
-                 } else console.warn(`The ${rr} environment variable is missing in production mode. Any Discord integrations will break as a consequence.`);
+                   console.warn(`The ${dd} environment variable is improperly formatted in production mode. Any Discord integrations will break as a consequence.`)
+                 } else console.warn(`The ${dd} environment variable is missing in production mode. Any Discord integrations will break as a consequence.`);
```

#### 1593. `bundles/bloxd.io/main.js` (Changed code · before: `L25217` → after: `L25217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25217) · [Before (L25217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25217)

```diff
-               return this.Kx.isPreprod ? Wr.i.discordPreprodId : Wr.i.discordProductionId
+               return this.Ht.isPreprod ? Fd.i.discordPreprodId : Fd.i.discordProductionId
```

#### 1594. `bundles/bloxd.io/main.js` (Changed code · before: `L25223` → after: `L25223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25223) · [Before (L25223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25223)

```diff
-             isPreprod: (0, jr.i)(),
+             isPreprod: (0, Xd.f)(),
```

#### 1595. `bundles/bloxd.io/main.js` (Changed code · before: `L25231` → after: `L25231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25231) · [Before (L25231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25231)

```diff
-         }, , , (rr, Sr, Qr) => {
+         }, , , , , , (dd, Od, md) => {
```

#### 1596. `bundles/bloxd.io/main.js` (Changed code · before: `L25238-L25239` → after: `L25237-L25239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25237-L25239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25237-L25239) · [Before (L25238-L25239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25238-L25239)

```diff
-             l: () => jr,
-             o: () => Ir
+             m: () => Qd,
+             p: () => Xd,
+             s: () => Kd
```

#### 1597. `bundles/bloxd.io/main.js` (Changed code · before: `L25249` → after: `L25249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25249) · [Before (L25249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25249)

```diff
-             const Qr = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.reason) && void 0 !== Sr ? Sr : rr && Zr.get(rr);
+             const md = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.reason) && void 0 !== Od ? Od : dd && Wd.get(dd);
```

#### 1598. `bundles/bloxd.io/main.js` (Changed code · before: `L25311` → after: `L25311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25311) · [Before (L25311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25311)

```diff
-         }, , (rr, Sr, Qr) => {
+         }, , , , (dd, Od, md) => {
```

#### 1599. `bundles/bloxd.io/main.js` (Changed code · before: `L25313-L25315` → after: `L25313-L25315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25313-L25315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25313-L25315) · [Before (L25313-L25315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25313-L25315)

```diff
-             e: () => er,
-             f: () => Tr,
-             h: () => Mr,
+             d: () => Yd,
+             g: () => Jd,
+             i: () => nd,
```

#### 1600. `bundles/bloxd.io/main.js` (Changed code · before: `L25320-L25321` → after: `L25319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25319) · [Before (L25320-L25321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25320-L25321)

```diff
-             t: () => Kr,
-             v: () => gr,
+             w: () => Ad,
```

#### 1601. `bundles/bloxd.io/main.js` (Changed code · before: `L25323` → after: `L25321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25321) · [Before (L25323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25323)

```diff
-             A: () => Or,
+             z: () => rd,
```

#### 1602. `bundles/bloxd.io/main.js` (Changed code · before: `L25325-L25327` → after: `L25323-L25327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25323-L25327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25323-L25327) · [Before (L25325-L25327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25325-L25327)

```diff
-             G: () => Br,
-             K: () => vr,
-             O: () => Pr,
+             E: () => xd,
+             H: () => Sd,
+             I: () => Ed,
+             M: () => Ud,
+             P: () => ud,
```

#### 1603. `bundles/bloxd.io/main.js` (Changed code · before: `L25329-L25330` → after: `L25329-L25330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25329-L25330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25329-L25330) · [Before (L25329-L25330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25329-L25330)

```diff
-             U: () => Hr,
-             X: () => Cr
+             W: () => Vd,
+             Z: () => Gd
```

#### 1604. `bundles/bloxd.io/main.js` (Changed code · before: `L25332-L25335` → after: `L25332-L25335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25332-L25335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25332-L25335) · [Before (L25332-L25335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25332-L25335)

```diff
-           var Zr = Qr(1277),
-             Wr = Qr(219),
-             ar = Qr(688),
-             jr = Qr(213);
+           var Wd = md(1280),
+             Fd = md(235),
+             Rd = md(701),
+             Xd = md(222);
```

#### 1605. `bundles/bloxd.io/main.js` (Changed code · before: `L25353` → after: `L25353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25353) · [Before (L25353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25353)

```diff
-               return void 0 === Sr ? rr : `[${rr}${Sr}]`
+               return void 0 === Od ? dd : `[${dd}${Od}]`
```

#### 1606. `bundles/bloxd.io/main.js` (Changed code · before: `L25357` → after: `L25357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25357) · [Before (L25357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25357)

```diff
-             xr = new RegExp(`^[0-9A-Z]?(?:${Er(["anal","ass","bum","butt","cok","coon","cox","crap","cum","fak","hoar","hore","jap","kum","lust","mong","muff","nob","poon","scat","sob","spac","spic","tit"])})$`);
+             td = new RegExp(`^[0-9A-Z]?(?:${vd(["anal","ass","bum","butt","cok","coon","cox","crap","cum","fak","hoar","hore","jap","kum","lust","mong","muff","nob","poon","scat","sob","spac","spic","tit"])})$`);
```

#### 1607. `bundles/bloxd.io/main.js` (Changed code · before: `L25362` → after: `L25362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25362) · [Before (L25362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25362)

```diff
-           var Nr = Qr(661);
+           var Nd = md(678);
```

#### 1608. `bundles/bloxd.io/main.js` (Changed code · before: `L25366` → after: `L25366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25366) · [Before (L25366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25366)

```diff
-             return !(0, ar.L)(rr) && Date.now() - rr < Ur
+             return !(0, Rd.O)(dd) && Date.now() - dd < qd
```

#### 1609. `bundles/bloxd.io/main.js` (Changed code · before: `L25368` → after: `L25368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25368) · [Before (L25368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25368)

```diff
-           const hr = Object.values(Wr.l.socialServerPorts);
+           const yd = Object.values(Fd.j.socialServerPorts);
```

#### 1610. `bundles/bloxd.io/main.js` (Changed code · before: `L25375` → after: `L25375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25375) · [Before (L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25375)

```diff
-             return (0, Nr.c)(rr) ? nr : Yr
+             return (0, Nd.b)(dd) ? pd : Td
```

#### 1611. `bundles/bloxd.io/main.js` (Changed code · before: `L25383` → after: `L25383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25383) · [Before (L25383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25383)

```diff
-             const Sr = Object.keys(Wr.l.socialServerPorts).map((rr => Number(rr)));
+             const Od = Object.keys(Fd.j.socialServerPorts).map((dd => Number(dd)));
```

#### 1612. `bundles/bloxd.io/main.js` (Changed code · before: `L25388` → after: `L25388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25388) · [Before (L25388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25388)

```diff
-             return (0, Wr.m)() ? `http://${jr.d.localDomain}:${Wr.l.socialServerPorts[rr]}` : (0, Wr.i)() ? `https://social${rr}.preprod.bloxd.io` : `https://social${rr}.bloxd.io`
+             return (0, Fd.m)() ? `http://${Xd.b.localDomain}:${Fd.j.socialServerPorts[dd]}` : (0, Fd.f)() ? `https://social${dd}.preprod.bloxd.io` : `https://social${dd}.bloxd.io`
```

#### 1613. `bundles/bloxd.io/main.js` (Changed code · before: `L25392` → after: `L25392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25392) · [Before (L25392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25392)

```diff
-             return `social_updates_${rr}`
+             return `social_updates_${dd}`
```

#### 1614. `bundles/bloxd.io/main.js` (Changed code · before: `L25410` → after: `L25410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25410) · [Before (L25410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25410)

```diff
-             if ((0, ar.L)(rr)) return Sr.push("Party Code is empty"), Sr;
+             if ((0, Rd.O)(dd)) return Od.push("Party Code is empty"), Od;
```

#### 1615. `bundles/bloxd.io/main.js` (Changed code · before: `L25413` → after: `L25413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25413) · [Before (L25413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25413)

```diff
-             return Object.keys(Wr.l.socialServerPorts).includes(String(Qr)) || Sr.push("First digit of Party Code must be valid Social Server index"), 0 === Sr.length && mr(rr) && Sr.push(gr), Sr
+             return Object.keys(Fd.j.socialServerPorts).includes(String(md)) || Od.push("First digit of Party Code must be valid Social Server index"), 0 === Od.length && od(dd) && Od.push(rd), Od
```

#### 1616. `bundles/bloxd.io/main.js` (Changed code · before: `L25418-L25419` → after: `L25418-L25419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25418-L25419) · [Before (L25418-L25419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25418-L25419)

```diff
-             const Qr = Object.keys(Wr.l.socialServerPorts),
-               ar = (0, Zr.c)(rr, 0, Object.keys(Wr.l.socialServerPorts).length),
+             const md = Object.keys(Fd.j.socialServerPorts),
+               Rd = (0, Wd.c)(dd, 0, Object.keys(Fd.j.socialServerPorts).length),
```

#### 1617. `bundles/bloxd.io/main.js` (Changed code · before: `L25424` → after: `L25424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25424) · [Before (L25424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25424)

```diff
-               const rr = `${jr}${((fr+Zr)%Ir).toString(36).toUpperCase()}`;
+               const dd = `${Xd}${((hd+Wd)%Kd).toString(36).toUpperCase()}`;
```

#### 1618. `bundles/bloxd.io/main.js` (Changed code · before: `L25427` → after: `L25427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25427) · [Before (L25427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25427)

```diff
-             throw new Error(`Every Party Code with prefix ${jr} is profane`)
+             throw new Error(`Every Party Code with prefix ${Xd} is profane`)
```

#### 1619. `bundles/bloxd.io/main.js` (Changed code · before: `L25441` → after: `L25441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25441) · [Before (L25441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25441)

```diff
-         }, , (rr, Sr, Qr) => {
+         }, , , , , , (dd, Od, md) => {
```

#### 1620. `bundles/bloxd.io/main.js` (Changed code · before: `L25447` → after: `L25445-L25447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25445-L25447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25445-L25447) · [Before (L25447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25447)

```diff
-             J: () => Br,
+             H: () => Ed,
+             K: () => bd,
+             L: () => Hd,
```

#### 1621. `bundles/bloxd.io/main.js` (Changed code · before: `L25451` → after: `L25451-L25452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25451-L25452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25451-L25452) · [Before (L25451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25451)

```diff
-             W: () => qr,
+             V: () => Gd,
+             Y: () => Jd,
```

#### 1622. `bundles/bloxd.io/main.js` (Changed code · before: `L25453-L25454` → after: `L25454-L25455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25454-L25455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25454-L25455) · [Before (L25453-L25454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25453-L25454)

```diff
-             ab: () => Cr,
-             cb: () => Tr,
+             bb: () => rd,
+             d: () => zd,
```

#### 1623. `bundles/bloxd.io/main.js` (Changed code · before: `L25457` → after: `L25458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25458) · [Before (L25457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25457)

```diff
-             gb: () => gr,
+             fb: () => nd,
```

#### 1624. `bundles/bloxd.io/main.js` (Changed code · before: `L25459` → after: `L25460-L25461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25460-L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25460-L25461) · [Before (L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25459)

```diff
-             hb: () => IS,
+             ib: () => Vd,
+             kb: () => Bd,
```

#### 1625. `bundles/bloxd.io/main.js` (Changed code · before: `L25466-L25468` → after: `L25465-L25466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25465-L25466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25465-L25466) · [Before (L25466-L25468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25466-L25468)

```diff
-             qb: () => Lr,
-             sb: () => Or,
-             t: () => jS,
+             r: () => ud,
+             rb: () => gd,
```

#### 1626. `bundles/bloxd.io/main.js` (Changed code · before: `L25472-L25473` → after: `L25471-L25473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25471-L25473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25471-L25473) · [Before (L25472-L25473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25472-L25473)

```diff
-             y: () => Vr,
-             yb: () => Gr
+             yb: () => wd,
+             z: () => cd,
+             zb: () => Sd
```

#### 1627. `bundles/bloxd.io/main.js` (Changed code · before: `L25475-L25486` → after: `L25475-L25486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25475-L25486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25475-L25486) · [Before (L25475-L25486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25475-L25486)

```diff
-           var Zr = Qr(1131),
-             Wr = Qr(1281),
-             ar = Qr(868),
-             jr = Qr(379),
-             Ir = Qr(1127),
-             fr = Qr(1283),
-             Er = Qr(688),
-             pr = Qr(1287),
-             xr = Qr(672),
-             mr = Qr(360),
-             Nr = Qr(692),
-             Ur = Qr(215);
+           var Wd = md(1128),
+             Fd = md(1289),
+             Rd = md(870),
+             Xd = md(405),
+             Kd = md(1122),
+             hd = md(1295),
+             vd = md(701),
+             Qd = md(1300),
+             td = md(689),
+             od = md(387),
+             Nd = md(708),
+             qd = md(231);
```

#### 1628. `bundles/bloxd.io/main.js` (Changed code · before: `L25491` → after: `L25491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25491) · [Before (L25491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25491)

```diff
-             return !(0, Er.L)((0, jr.ie)(rr))
+             return !(0, vd.O)((0, Xd.re)(dd))
```

#### 1629. `bundles/bloxd.io/main.js` (Changed code · before: `L25500` → after: `L25500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25500) · [Before (L25500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25500)

```diff
-             return !zr(Sr) || null === (Qr = null === (Zr = (0, ar.k)(rr)) || void 0 === Zr ? void 0 : Zr.canJoinPublicRequestedLobbyName) || void 0 === Qr || Qr
+             return !bd(Od) || null === (md = null === (Wd = (0, Rd.j)(dd)) || void 0 === Wd ? void 0 : Wd.canJoinPublicRequestedLobbyName) || void 0 === md || md
```

#### 1630. `bundles/bloxd.io/main.js` (Changed code · before: `L25504` → after: `L25504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25504) · [Before (L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25504)

```diff
-             return Wr.o.lobbyNameIsGuild(rr) ? Zr.e.DISCORD_GUILD : Wr.m.lobbyNameIsDm(rr) ? Zr.e.DISCORD_DM : Zr.e.STANDARD
+             return Fd.p.lobbyNameIsGuild(dd) ? Wd.b.DISCORD_GUILD : Fd.l.lobbyNameIsDm(dd) ? Wd.b.DISCORD_DM : Wd.b.STANDARD
```

#### 1631. `bundles/bloxd.io/main.js` (Changed code · before: `L25510` → after: `L25510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25510) · [Before (L25510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25510)

```diff
-               const Wr = (0, jr.ie)(rr);
+               const Fd = (0, Xd.re)(dd);
```

#### 1632. `bundles/bloxd.io/main.js` (Changed code · before: `L25514-L25515` → after: `L25514-L25515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25514-L25515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25514-L25515) · [Before (L25514-L25515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25514-L25515)

```diff
-                 const ar = (null !== (Sr = null === (Qr = rr.match(/^0+\d/)) || void 0 === Qr || null === (Zr = Qr[0]) || void 0 === Zr ? void 0 : Zr.length) && void 0 !== Sr ? Sr : 1) - 1;
-                 rr = `${"0".repeat(ar)}${Wr}`
+                 const Rd = (null !== (Od = null === (md = dd.match(/^0+\d/)) || void 0 === md || null === (Wd = md[0]) || void 0 === Wd ? void 0 : Wd.length) && void 0 !== Od ? Od : 1) - 1;
+                 dd = `${"0".repeat(Rd)}${Fd}`
```

#### 1633. `bundles/bloxd.io/main.js` (Changed code · before: `L25527` → after: `L25527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25527) · [Before (L25527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25527)

```diff
-             "string" === typeof Wr && (Yr(Wr) && "" !== Wr.trim() && Kr(Wr) === Wr && (jr = Wr, !(0, Ur.d)(jr)) || Zr.push("Lobby name is not valid"));
+             "string" === typeof Fd && (Td(Fd) && "" !== Fd.trim() && gd(Fd) === Fd && (Xd = Fd, !(0, qd.c)(Xd)) || Wd.push("Lobby name is not valid"));
```

#### 1634. `bundles/bloxd.io/main.js` (Changed code · before: `L25531` → after: `L25531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25531) · [Before (L25531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25531)

```diff
-             if (null === (Sr = null === (Qr = (0, ar.k)(Ir)) || void 0 === Qr ? void 0 : Qr.canCreateCustomLobbies) || void 0 === Sr || Sr || Zr.push("This game does not support creating custom lobbies"), rr.listedOptions.emojis && (fr = rr.listedOptions.emojis, /^[\p{Emoji}]{1,3 … [truncated]
+             if (null === (Od = null === (md = (0, Rd.j)(Kd)) || void 0 === md ? void 0 : md.canCreateCustomLobbies) || void 0 === Od || Od || Wd.push("This game does not support creating custom lobbies"), dd.listedOptions.emojis && (hd = dd.listedOptions.emojis, /^[\p{Emoji}]{1,3 … [truncated]
```

#### 1635. `bundles/bloxd.io/main.js` (Changed code · before: `L25534` → after: `L25534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25534) · [Before (L25534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25534)

```diff
-               rr.worldOptions.voidDeathHeight && (Sr < pr.R || Sr > pr.K) && Zr.push(`Void Death Height must be between ${pr.R} and ${pr.K}`), rr.worldOptions.worldBorder && (Qr < pr.V || Qr > pr.O) && Zr.push(`World Border must be between ${pr.V} and ${pr.O}`), rr.worldOptions.w … [truncated]
+               dd.worldOptions.voidDeathHeight && (Od < Qd.F || Od > Qd.D) && Wd.push(`Void Death Height must be between ${Qd.F} and ${Qd.D}`), dd.worldOptions.worldBorder && (md < Qd.J || md > Qd.E) && Wd.push(`World Border must be between ${Qd.J} and ${Qd.E}`), dd.worldOptions.w … [truncated]
```

#### 1636. `bundles/bloxd.io/main.js` (Changed code · before: `L25540` → after: `L25540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25540) · [Before (L25540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25540)

```diff
-             return rr !== Zr.m && (void 0 !== (0, Ur.b)(ar.c, rr) || (0, Ir.l)(rr))
+             return dd !== Wd.h && (void 0 !== (0, qd.b)(Rd.c, dd) || (0, Kd.k)(dd))
```

#### 1637. `bundles/bloxd.io/main.js` (Changed code · before: `L25546` → after: `L25546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25546) · [Before (L25546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25546)

```diff
-               const Qr = /^[a-z]+:\/\//i.test(rr) ? rr : `https://${rr}`;
+               const md = /^[a-z]+:\/\//i.test(dd) ? dd : `https://${dd}`;
```

#### 1638. `bundles/bloxd.io/main.js` (Changed code · before: `L25555` → after: `L25555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25555) · [Before (L25555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25555)

```diff
-             const jr = Object.values(mr.g).find((rr => rr === `${Wr}.${ar}`));
+             const Xd = Object.values(od.c).find((dd => dd === `${Fd}.${Rd}`));
```

#### 1639. `bundles/bloxd.io/main.js` (Changed code · before: `L25578` → after: `L25578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25578) · [Before (L25578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25578)

```diff
-             } : Sr && (0, fr.d)(rr).length < fr.w ? {
+             } : Od && (0, hd.e)(dd).length < hd.t ? {
```

#### 1640. `bundles/bloxd.io/main.js` (Changed code · before: `L25581` → after: `L25581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25581) · [Before (L25581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25581)

```diff
-                 min: String(fr.w)
+                 min: String(hd.t)
```

#### 1641. `bundles/bloxd.io/main.js` (Changed code · before: `L25595` → after: `L25595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25595) · [Before (L25595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25595)

```diff
-                     if ("string" !== typeof Sr.type) throw new Error(`Unknown schema type. typeof schema.type: ${typeof Sr.type}. schema.type: ${Sr.type}`);
+                     if ("string" !== typeof Od.type) throw new Error(`Unknown schema type. typeof schema.type: ${typeof Od.type}. schema.type: ${Od.type}`);
```

#### 1642. `bundles/bloxd.io/main.js` (Changed code · before: `L25648` → after: `L25648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25648) · [Before (L25648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25648)

```diff
-           const sr = ["b", 0, 1, "h", 3, 87, "i", 7, "e", 84, 39, 8, 255, "length", "c", 40, "a", 95, "undefined", void 0, 83, 178, 2, 63, 6, "fromCodePoint", 12, "push", 111];
+           const Md = [118, 0, 1, 65, 3, 47, 32, "g", "e", "f", "d", 8, 255, "length", 119, 2, 129, "a", 25, "undefined", void 0, 128, 133, 235, 58, 63, 6, "fromCodePoint", 7, 12, "push", 154, 223, 38, "c", 4, "b", 209];
```

#### 1643. `bundles/bloxd.io/main.js` (Changed code · before: `L25651-L25653` → after: `L25651-L25653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25651-L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25651-L25653) · [Before (L25651-L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25651-L25653)

```diff
-             for (SS(rr[sr[13]] = sr[2], rr[-sr[5]] = 'c`M;3V<"g@21XN%RBi7Zq4D=,QF0!edY.*r(fzIKP8{|y9^j&}SOG$#:h>[nxEbwv/u5_6?lpU)k+AasJCL]H~mtWoT', rr[sr[0]] = "" + (rr[sr[1]] || ""), rr[sr[4]] = rr[sr[0]].length, rr[sr[10]] = [], rr[sr[8]] = sr[1], rr[sr[9]] = sr[1], rr[sr[7]] = … [truncated]
-               if (rr[sr[6]] = rr[-sr[5]].indexOf(rr[sr[0]][rr[sr[3]]]), rr[sr[6]] !== -sr[2])
-                 if (rr[sr[7]] < sr[1]) rr[sr[7]] = rr[sr[6]];
+             for (mO(dd[Md[13]] = Md[2], dd[-Md[5]] = 'u`^v+2](w3.5G=Pia:!<nOr4k7,?SM&"FIcAexyjqX/CNWJ8}mVh|)~[HTb$g9_*t{QZ#zdBLfl0pEo;>Y@RKDs61U%', dd[-Md[0]] = "" + (dd[Md[1]] || ""), dd[Md[4]] = dd[-Md[0]].length, dd[Md[10]] = [], dd[Md[8]] = Md[1], dd[Md[9]] = Md[1], dd[Md[7]] … [truncated]
+               if (dd[-Md[6]] = dd[-Md[5]].indexOf(dd[-Md[0]][dd[Md[3]]]), dd[-Md[6]] !== -Md[2])
+                 if (dd[Md[7]] < Md[1]) dd[Md[7]] = dd[-Md[6]];
```

#### 1644. `bundles/bloxd.io/main.js` (Changed code · before: `L25655` → after: `L25655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25655) · [Before (L25655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25655)

```diff
-                   SS(rr[sr[7]] += 91 * rr[sr[6]], rr[sr[8]] |= rr[sr[7]] << rr[sr[9]], rr[sr[9]] += (8191 & rr[sr[7]]) > 88 ? 13 : 14);
+                   mO(dd[Md[7]] += 91 * dd[-Md[6]], dd[Md[8]] |= dd[Md[7]] << dd[Md[9]], dd[Md[9]] += (8191 & dd[Md[7]]) > 88 ? 13 : 14);
```

#### 1645. `bundles/bloxd.io/main.js` (Changed code · before: `L25658` → after: `L25658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25658) · [Before (L25658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25658)

```diff
-                   } while (rr[sr[9]] > sr[7]);
+                   } while (dd[Md[9]] > Md[28]);
```

#### 1646. `bundles/bloxd.io/main.js` (Changed code · before: `L25662` → after: `L25662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25662) · [Before (L25662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25662)

```diff
-                 return rr[sr[13]] = sr[2], typeof Fr !== sr[18] && Fr ? (new Fr).decode(new or(rr[sr[1]])) : typeof br !== sr[18] && br ? br.from(rr[sr[1]]).toString("utf-8") : dr(rr[sr[1]])
+                 return dd[Md[13]] = Md[2], typeof Id !== Md[19] && Id ? (new Id).decode(new ld(dd[Md[1]])) : typeof Cd !== Md[19] && Cd ? Cd.from(dd[Md[1]]).toString("utf-8") : fd(dd[Md[1]])
```

#### 1647. `bundles/bloxd.io/main.js` (Changed code · before: `L25667` → after: `L25667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25667) · [Before (L25667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25667)

```diff
-             return rr[sr[13]] = sr[2], typeof ir[rr[sr[1]]] === sr[18] ? ir[rr[sr[1]]] = ur(wr[rr[sr[1]]]) : ir[rr[sr[1]]]
+             return dd[Md[13]] = Md[2], typeof jd[dd[Md[1]]] === Md[19] ? jd[dd[Md[1]]] = dO(Dd[dd[Md[1]]]) : jd[dd[Md[1]]]
```

#### 1648. `bundles/bloxd.io/main.js` (Changed code · before: `L25679` → after: `L25679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25679) · [Before (L25679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25679)

```diff
-                 colour: Qr ? xr.r[Qr] : void 0
+                 colour: md ? td.q[md] : void 0
```

#### 1649. `bundles/bloxd.io/main.js` (Changed code · before: `L25686` → after: `L25686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25686) · [Before (L25686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25686)

```diff
-             return rr > 999999 ? `${(rr/1e6).toFixed(Sr)}m` : rr > 999 ? `${(rr/1e3).toFixed(Sr)}k` : rr.toString()
+             return dd > 999999 ? `${(dd/1e6).toFixed(Od)}m` : dd > 999 ? `${(dd/1e3).toFixed(Od)}k` : dd.toString()
```

#### 1650. `bundles/bloxd.io/main.js` (Changed code · before: `L25688-L25689` → after: `L25688-L25689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25688-L25689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25688-L25689) · [Before (L25688-L25689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25688-L25689)

```diff
-           SS(ir = {}, wr = [":;P#0#d,YuCDcKx{^Y.#%>Cenh7kl]Ffe@_Sa9d7`w?.EfYeo/w3i", "]U~YO[XGY4:+lF?z^F}#B:Tr]@J5`", "gwMVy(7M&>{;[Cbdexe+V6kkcX`LL6?,nFc<w[c", "e|s!+:E=%wNd9B?QDqo#xA#m3", "zlgOf(3f{/&3.l)Ii@6:Us56f#sRhRx(Q^,UF", "1l9!|UmP91LVq;cz", '<X+SYj+[":}', "An#+VfaPCR76! … [truncated]
-             SS(rr[sr[13]] = sr[1], rr[sr[16]] = [function() {
+           mO(jd = {}, Dd = ["%5#l>_F^", "9}z[+}C0$:qpf+", "eBP39Ex<AGgHB,qy^3~S=[>JJH=@j^", '0H83ElP|Ji%`2ggeq{thCA~s8ifA"POSMC_+,fu', "wT&+S~Jq6t4]Yejx{x0MLc}^", "Q:rS]ge^", 'D$9(_)e|"i3&5,Pq2F&pqfkeXbuoBBlyf:jSY|S!#T{)I+', '_fO"`ex(&!9>u', "nq,hoTO=+", "i~|[P_ETJHn;e+N7l:wI=R]t … [truncated]
+             mO(dd[Md[13]] = Md[1], dd[Md[17]] = [function() {
```

#### 1651. `bundles/bloxd.io/main.js` (Changed code · before: `L25697` → after: `L25697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25697) · [Before (L25697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25697)

```diff
-             }], rr[sr[0]] = sr[19], rr[sr[14]] = []);
+             }], dd[Md[14]] = Md[20], dd[Md[15]] = []);
```

#### 1652. `bundles/bloxd.io/main.js` (Changed code · before: `L25699` → after: `L25699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25699) · [Before (L25699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25699)

```diff
-               SS(rr[sr[0]] = Object, rr[sr[14]][sr[27]]("".__proto__.constructor.name))
+               mO(dd[Md[14]] = Object, dd[Md[15]][Md[30]]("".__proto__.constructor.name))
```

#### 1653. `bundles/bloxd.io/main.js` (Changed code · before: `L25701-L25704` → after: `L25701-L25704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25701-L25704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25701-L25704) · [Before (L25701-L25704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25701-L25704)

```diff
-             rr: for (rr[-sr[15]] = sr[1]; rr[-sr[15]] < rr[sr[16]][sr[13]]; rr[-sr[15]]++) try {
-               for (rr[sr[0]] = rr[sr[16]][rr[-sr[15]]](), rr[sr[17]] = sr[1]; rr[sr[17]] < rr[sr[14]][sr[13]]; rr[sr[17]]++)
-                 if (typeof rr[sr[0]][rr[sr[14]][rr[sr[17]]]] === sr[18]) continue rr;
-               return rr[sr[0]]
+             dd: for (dd[Md[16]] = Md[1]; dd[Md[16]] < dd[Md[17]][Md[13]]; dd[Md[16]]++) try {
+               for (dd[Md[14]] = dd[Md[17]][dd[Md[16]]](), dd[Md[18]] = Md[1]; dd[Md[18]] < dd[Md[15]][Md[13]]; dd[Md[18]]++)
+                 if (typeof dd[Md[14]][dd[Md[15]][dd[Md[18]]]] === Md[19]) continue dd;
+               return dd[Md[14]]
```

#### 1654. `bundles/bloxd.io/main.js` (Changed code · before: `L25706-L25708` → after: `L25706-L25708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25706-L25708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25706-L25708) · [Before (L25706-L25708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25706-L25708)

```diff
-             return rr[sr[0]] || this
-           }() || {}, Fr = cr.TextDecoder, or = cr.Uint8Array, br = cr.Dp, Jr = cr.String || String, Dr = cr.Array || Array, dr = function(...rr) {
-             return SS(rr[sr[13]] = sr[1], rr[sr[16]] = new Dr(128), rr[sr[2]] = Jr[sr[25]] || Jr.fromCharCode, rr[sr[20]] = []),
+             return dd[Md[14]] || this
+           }() || {}, Id = ed.TextDecoder, ld = ed.Uint8Array, Cd = ed.CQ, Zd = ed.String || String, kd = ed.Array || Array, fd = function(...dd) {
+             return mO(dd[Md[13]] = Md[1], dd[-Md[31]] = new kd(Md[21]), dd[Md[2]] = Zd[Md[27]] || Zd.fromCharCode, dd[-Md[22]] = []),
```

#### 1655. `bundles/bloxd.io/main.js` (Changed code · before: `L25710-L25711` → after: `L25710-L25711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25710-L25711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25710-L25711) · [Before (L25710-L25711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25710-L25711)

```diff
-                 for (SS(Sr[sr[13]] = sr[2], Sr[sr[16]] = sr[19], Sr[sr[22]] = sr[19], Sr[sr[4]] = Sr[sr[1]][sr[13]], rr[sr[20]][sr[13]] = sr[1]), Sr[-sr[21]] = sr[1]; Sr[-sr[21]] < Sr[sr[4]];) SS(Sr[sr[22]] = Sr[sr[1]][Sr[-sr[21]]++], Sr[sr[22]] <= 127 ? Sr[sr[16]] = Sr[sr[22]] : … [truncated]
-                 return rr[sr[20]].join("")
+                 for (mO(Od[Md[13]] = Md[2], Od[Md[2]] = Md[20], Od[-Md[21]] = Md[20], Od[Md[24]] = Od[Md[1]][Md[13]], dd[-Md[22]][Md[13]] = Md[1]), Od[-Md[23]] = Md[1]; Od[-Md[23]] < Od[Md[24]];) mO(Od[-Md[21]] = Od[Md[1]][Od[-Md[23]]++], Od[-Md[21]] <= 127 ? Od[Md[2]] = Od[-Md[2 … [truncated]
+                 return dd[-Md[22]].join("")
```

#### 1656. `bundles/bloxd.io/main.js` (Changed code · before: `L25713` → after: `L25713-L25728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25713-L25728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25713-L25728) · [Before (L25713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25713)

```diff
-           }()), Vr = Math[rS(110)](sr[28] * Math[rS(sr[28])](Nr[sr[8]] * (Nr[sr[8]] - sr[2]))) + 165;
+           }()), OO(82) in
+           function() {} && function(...dd) {
+             mO(dd[Md[13]] = Md[1], dd[Md[37]] = function(...dd) {
+               for (mO(dd[Md[13]] = Md[2], dd[-Md[32]] = dd[Md[1]].length, dd[Md[36]] = [], dd[Md[34]] = Md[1], dd[Md[35]] = Md[1], dd[Md[1]].sort(((dd, Od) => dd - Od))), dd[-Md[33]] = Md[1]; dd[-Md[33]] < dd[-Md[32]]; dd[-Md[33]]++)
+                 if (!(dd[-Md[33]] > Md[1] && dd[Md[1]][dd[-Md[33]]] === dd[Md[1]][dd[-Md[33]] - Md[2]]))
+                   for (mO(dd[Md[34]] = dd[-Md[33]] + Md[2], dd[Md[35]] = dd[-Md[32]] - Md[2]); dd[Md[34]] < dd[Md[35]];)
+                     if (dd[Md[1]][dd[-Md[33]]] + dd[Md[1]][dd[Md[34]]] + dd[Md[1]][dd[Md[35]]] < Md[1]) dd[Md[34]]++;
+                     else if (dd[Md[1]][dd[-Md[33]]] + dd[Md[1]][dd[Md[34]]] + dd[Md[1]][dd[Md[35]]] > Md[1]) dd[Md[35]]--;
+               else {
+                 for (dd[Md[36]].push([dd[Md[1]][dd[-Md[33]]], dd[Md[1]][dd[Md[34]]], dd[Md[1]][dd[Md[35]]]]); dd[Md[34]] < dd[Md[35]] && dd[Md[1]][dd[Md[34]]] === dd[Md[1]][dd[Md[34]] + Md[2]];) dd[Md[34]]++;
+                 for (; dd[Md[34]] < dd[Md[35]] && dd[Md[1]][dd[Md[35]]] === dd[Md[1]][dd[Md[35]] - Md[2]];) dd[Md[35]]--;
+                 mO(dd[Md[34]]++, dd[Md[35]]--)
+               }
+               return dd[Md[36]]
+             }, console.log(dd[Md[37]]))
+           }(), cd = Math[OO(83)](111 * Math[OO(84)](Nd[Md[34]] * (Nd[Md[34]] - Md[2]))) + 165;
```

#### 1657. `bundles/bloxd.io/main.js` (Changed code · before: `L25728-L25750` → after: `L25743-L25765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25743-L25765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25743-L25765) · [Before (L25728-L25750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25728-L25750)

```diff
-             Qr: "texture",
-             Zr: "minLifeTime",
-             Wr: "maxLifeTime",
-             ar: "minEmitPower",
-             jr: "maxEmitPower",
-             Ir: "minSize",
-             Er: "maxSize",
-             pr: "gravity",
-             mr: "velocityGradients",
-             Nr: "timeFraction",
-             Ur: "factor",
-             tr: "factor2",
-             hr: "colorGradients",
-             zr: "minColor",
-             Yr: "maxColor",
-             nr: "color",
- ... (7 more removed lines; see GitHub link above)
+             Wd: "texture",
+             Fd: "minLifeTime",
+             Rd: "maxLifeTime",
+             Xd: "minEmitPower",
+             Kd: "maxEmitPower",
+             hd: "minSize",
+             vd: "maxSize",
+             Qd: "gravity",
+             od: "velocityGradients",
+             Nd: "timeFraction",
+             qd: "factor",
+             Hd: "factor2",
+             yd: "colorGradients",
+             bd: "minColor",
+             Td: "maxColor",
+             pd: "color",
+ ... (7 more added lines; see GitHub link above)
```

#### 1658. `bundles/bloxd.io/main.js` (Changed code · before: `L25754` → after: `L25769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25769) · [Before (L25754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25754)

```diff
-             return WS(rr, (rr => aS[rr] ? aS[rr] : (console.error(`Unknown particle system option key: ${rr}.`), rr)))
+             return RO(dd, (dd => XO[dd] ? XO[dd] : (console.error(`Unknown particle system option key: ${dd}.`), dd)))
```

#### 1659. `bundles/bloxd.io/main.js` (Changed code · before: `L25765` → after: `L25780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25780) · [Before (L25765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25765)

```diff
-         }, , (rr, Sr, Qr) => {
+         }, , , (dd, Od, md) => {
```

#### 1660. `bundles/bloxd.io/main.js` (Changed code · before: `L25767-L25771` → after: `L25782-L25786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25782-L25786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25782-L25786) · [Before (L25767-L25771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25767-L25771)

```diff
-             e: () => Wr,
-             i: () => ar,
-             m: () => jr,
-             o: () => Ir,
-             q: () => fr
+             d: () => Fd,
+             h: () => Rd,
+             l: () => Xd,
+             p: () => Kd,
+             t: () => hd
```

#### 1661. `bundles/bloxd.io/main.js` (Changed code · before: `L25773` → after: `L25788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25788) · [Before (L25773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25773)

```diff
-           var Zr = Qr(360);
+           var Wd = md(387);
```

#### 1662. `bundles/bloxd.io/main.js` (Changed code · before: `L25791` → after: `L25806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25806) · [Before (L25791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25791)

```diff
-               return `${rr}-${Sr=Sr.padStart(this.MIN_SNOWFLAKE_LENGTH,"0")}`
+               return `${dd}-${Od=Od.padStart(this.MIN_SNOWFLAKE_LENGTH,"0")}`
```

#### 1663. `bundles/bloxd.io/main.js` (Changed code · before: `L25800` → after: `L25815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25815) · [Before (L25800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25800)

```diff
-                   throw new Error(`Failed to parse Discord-context parameters: ${JSON.stringify(rr)}`)
+                   throw new Error(`Failed to parse Discord-context parameters: ${JSON.stringify(dd)}`)
```

#### 1664. `bundles/bloxd.io/main.js` (Changed code · before: `L25850-L25852` → after: `L25865-L25867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25865-L25867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25865-L25867) · [Before (L25850-L25852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25850-L25852)

```diff
-             [Zr.e.LOCAL]: "http://localhost:3000/auth-callback/discord",
-             [Zr.e.PREPROD]: "https://preprod.bloxd.io/auth-callback/discord",
-             [Zr.e.PRODUCTION]: "https://bloxd.io/auth-callback/discord"
+             [Wd.b.LOCAL]: "http://localhost:3000/auth-callback/discord",
+             [Wd.b.PREPROD]: "https://preprod.bloxd.io/auth-callback/discord",
+             [Wd.b.PRODUCTION]: "https://bloxd.io/auth-callback/discord"
```

#### 1665. `bundles/bloxd.io/main.js` (Changed code · before: `L25854` → after: `L25869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25869) · [Before (L25854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25854)

```diff
-         }, , (rr, Sr, Qr) => {
+         }, , , , , , (dd, Od, md) => {
```

#### 1666. `bundles/bloxd.io/main.js` (Changed code · before: `L25856` → after: `L25871-L25872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25871-L25872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25871-L25872) · [Before (L25856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25856)

```diff
-             d: () => jr,
+             e: () => Xd,
+             g: () => Nd,
```

#### 1667. `bundles/bloxd.io/main.js` (Changed code · before: `L25859-L25863` → after: `L25876-L25878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25876-L25878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25876-L25878) · [Before (L25859-L25863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25859-L25863)

```diff
-             o: () => Ir,
-             q: () => fr,
-             r: () => Er,
-             u: () => Wr,
-             w: () => ar
+             n: () => vd,
+             p: () => Fd,
+             t: () => Rd
```

#### 1668. `bundles/bloxd.io/main.js` (Changed code · before: `L25878` → after: `L25893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25893) · [Before (L25878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25878)

```diff
-             return Sr.length >= ar ? Sr : null
+             return Od.length >= Rd ? Od : null
```

#### 1669. `bundles/bloxd.io/main.js` (Changed code · before: `L25882` → after: `L25897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25897) · [Before (L25882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25882)

```diff
-             return Qr ? `/${rr}/${Sr}/${encodeURIComponent(Qr)}` : `/${rr}/${Sr}`
+             return md ? `/${dd}/${Od}/${encodeURIComponent(md)}` : `/${dd}/${Od}`
```

#### 1670. `bundles/bloxd.io/main.js` (Changed code · before: `L25891` → after: `L25906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25906) · [Before (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25891)

```diff
-             return rr.urlId ? fr("player", rr.urlId, null !== (Sr = Ir(rr.name)) && void 0 !== Sr ? Sr : rr.name) : `/player/${encodeURIComponent(rr.name)}`
+             return dd.urlId ? hd("player", dd.urlId, null !== (Od = Kd(dd.name)) && void 0 !== Od ? Od : dd.name) : `/player/${encodeURIComponent(dd.name)}`
```

#### 1671. `bundles/bloxd.io/main.js` (Changed code · before: `L25916` → after: `L25931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25931) · [Before (L25916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25916)

```diff
-         }, , , , (rr, Sr, Qr) => {
+         }, , , , , (dd, Od, md) => {
```

#### 1672. `bundles/bloxd.io/main.js` (Changed code · before: `L25922` → after: `L25938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25938) · [Before (L25922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25922)

```diff
-             K: () => Yr,
+             N: () => vd,
```

#### 1673. `bundles/bloxd.io/main.js` (Changed code · before: `L25924-L25927` → after: `L25940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25940) · [Before (L25924-L25927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25924-L25927)

```diff
-             R: () => zr,
-             V: () => tr,
-             X: () => Er,
-             Y: () => jr,
+             b: () => Kd,
```

#### 1674. `bundles/bloxd.io/main.js` (Changed code · before: `L25929` → after: `L25942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25942) · [Before (L25929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25929)

```diff
-             f: () => mr,
+             g: () => Nd,
```

#### 1675. `bundles/bloxd.io/main.js` (Changed code · before: `L25931-L25933` → after: `L25944-L25948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25944-L25948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25944-L25948) · [Before (L25931-L25933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25931-L25933)

```diff
-             n: () => Ur,
-             q: () => pr,
-             t: () => ar,
+             k: () => Qd,
+             l: () => Rd,
+             p: () => td,
+             s: () => hd,
+             v: () => pd,
```

#### 1676. `bundles/bloxd.io/main.js` (Changed code · before: `L25947` → after: `L25962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25962) · [Before (L25947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25947)

```diff
-               return null !== (Zr = null === rr || void 0 === rr ? void 0 : rr[Qr]) && void 0 !== Zr ? Zr : ""
+               return null !== (Wd = null === dd || void 0 === dd ? void 0 : dd[md]) && void 0 !== Wd ? Wd : ""
```

#### 1677. `bundles/bloxd.io/main.js` (Changed code · before: `L25967` → after: `L25982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L25982) · [Before (L25967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L25967)

```diff
-         }, , , , , , , , (rr, Sr, Qr) => {
+         }, , , , (dd, Od, md) => {
```

#### 1678. `bundles/bloxd.io/main.js` (Changed code · before: `L26042` → after: `L26057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L26057) · [Before (L26042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L26042)

```diff
-         }, , , , , , , , , (rr, Sr, Qr) => {
+         }, , (dd, Od, md) => {
```

#### 1679. `bundles/bloxd.io/main.js` (Changed code · before: `L26044` → after: `L26059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L26059) · [Before (L26044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L26044)

```diff
-             b: () => fr,
+             c: () => hd,
```

#### 1680. `bundles/bloxd.io/main.js` (Changed code · before: `L26046` → after: `L26061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L26061) · [Before (L26046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L26046)

```diff
-             i: () => Nr
+             g: () => Nd
```

#### 1681. `bundles/bloxd.io/main.js` (Changed code · before: `L26048` → after: `L26063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L26063) · [Before (L26048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L26048)

```diff
-           var Zr = Qr(38),
+           var Wd = md(40),
```

#### 1682. `bundles/bloxd.io/main.js` (Changed code · before: `L26050-L26052` → after: `L26065-L26067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R26065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L26065-L26067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/main.js#L26065-L26067) · [Before (L26050-L26052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/main.js#L26050-L26052)

```diff
-             ar = Qr(43),
-             jr = Qr(688),
-             Ir = Qr(1308);
+             Rd = md(46),
+             Xd = md(701),
+             Kd = md(1313);
```
