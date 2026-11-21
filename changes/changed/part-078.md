# Changed — Bundle Modifications Report (Part 078 / 133)

- **Updated at**: `2026-11-21T12:06 JST`
- **Part**: `78 / 133` (**453** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 077](part-077.md) · [Part 079 →](part-079.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/83.js` (x17cru.159bd7ce → bqoxjr.2558012f · continued)

- **File**: `bundles/bloxd.io/chunks/js/83.js` (2108 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4)

#### 159. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1587-L1591` → after: `L1587-L1591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1587-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1587-L1591) · [Before (L1587-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1587-L1591)

```diff
-       Bd = kd(1904),
-       sd = kd(1459),
-       ad = kd(313),
-       Md = kd(1968),
-       Fd = kd(1359);
+       SQ = wQ(1873),
+       iQ = wQ(1447),
+       WQ = wQ(317),
+       RQ = wQ(1927),
+       OQ = wQ(1348);
```

#### 160. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1599` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1599) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1599)

```diff
-       return null === Nd ? null : null !== (Jd = null === (kd = pd[Nd]) || void 0 === kd ? void 0 : kd.name) && void 0 !== Jd ? Jd : null
+       return null === qQ ? null : null !== (FQ = null === (wQ = LQ[qQ]) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : null
```

#### 161. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1609` → after: `L1609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1609) · [Before (L1609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1609)

```diff
-       } = (0, qd.c)(), Wd = (0, Md.g)("players", Yd), [Pd, Zd] = (0, Nd.useState)(kd.selectedCat || (null === Jd || void 0 === Jd ? void 0 : Jd[0]) || null), [gd, od] = (0, Nd.useState)(kd.selectedTimeframe || "Today"), [ld, Qd] = (0, Nd.useState)(null);
+       } = (0, CQ.e)(), oQ = (0, RQ.g)("players", sQ), [DQ, kQ] = (0, qQ.useState)(wQ.selectedCat || (null === FQ || void 0 === FQ ? void 0 : FQ[0]) || null), [vQ, HQ] = (0, qQ.useState)(wQ.selectedTimeframe || "Today"), [bQ, YQ] = (0, qQ.useState)(null);
```

#### 162. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1630` → after: `L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1630) · [Before (L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1630)

```diff
-       }), [ld, Ld]), (0, sd.h)("leaderboardResponse", (dd => {
+       }), [bQ, xQ]), (0, iQ.g)("leaderboardResponse", (QQ => {
```

#### 163. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1669)

```diff
-             children: (0, Kd.jsx)(xd.c, {
+             children: (0, uQ.jsx)(cQ.d, {
```

#### 164. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1684-L1685` → after: `L1684-L1685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1684-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1684-L1685) · [Before (L1684-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1684-L1685)

```diff
-             children: (0, Kd.jsx)(xd.c, {
-               options: ad._c.map((dd => ({
+             children: (0, uQ.jsx)(cQ.d, {
+               options: WQ.Uc.map((QQ => ({
```

#### 165. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1709` → after: `L1709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1709) · [Before (L1709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1709)

```diff
-             children: (0, Kd.jsx)(Fd.b, {})
+             children: (0, uQ.jsx)(OQ.c, {})
```

#### 166. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1733` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1733) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1733)

```diff
-                     children: `#${dd.place}`
+                     children: `#${QQ.place}`
```

#### 167. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1736` → after: `L1736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1736) · [Before (L1736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1736)

```diff
-                     children: (0, Kd.jsx)(Bd.c, {
+                     children: (0, uQ.jsx)(SQ.e, {
```

#### 168. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1759` → after: `L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1759) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1759)

```diff
-                 children: `${jd} Place${jd>1?"s":""}`
+                 children: `${NQ} Place${NQ>1?"s":""}`
```

#### 169. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1775-L1778` → after: `L1775-L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1775-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1775-L1778) · [Before (L1775-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1775-L1778)

```diff
-     var bd = kd(2974),
-       Sd = kd(95),
-       jd = kd(33),
-       Xd = kd(3253);
+     var IQ = wQ(3002),
+       UQ = wQ(96),
+       NQ = wQ(27),
+       TQ = wQ(3282);
```

#### 170. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1785-L1786` → after: `L1785-L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1785-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1785-L1786) · [Before (L1785-L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1785-L1786)

```diff
-       const pd = (0, gd.j)("_tasks"),
-         Wd = (0, gd.j)("_availableLeaderboards"),
+       const LQ = (0, vQ.l)("_tasks"),
+         oQ = (0, vQ.l)("_availableLeaderboards"),
```

#### 171. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1824)

```diff
-       }), [Ld()]), (0, Zd.c)(!0, Od && Jd), (0, Nd.useEffect)((() => {
+       }), [xQ()]), (0, kQ.b)(!0, AQ && FQ), (0, qQ.useEffect)((() => {
```

#### 172. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1836` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1836) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1836)

```diff
-           children: (0, Kd.jsxs)(Pd.e, {
+           children: (0, uQ.jsxs)(DQ.d, {
```

#### 173. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1891)

```diff
-       const dd = (0, gd.j)("currencyAmounts");
+       const QQ = (0, vQ.l)("currencyAmounts");
```

#### 174. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1894)

```diff
-         children: Object.keys(null !== dd && void 0 !== dd ? dd : {}).map((Jd => {
+         children: Object.keys(null !== QQ && void 0 !== QQ ? QQ : {}).map((FQ => {
```

#### 175. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1898` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1898) · [Before (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1898)

```diff
-             children: [(0, Kd.jsx)(ed.e, {
+             children: [(0, uQ.jsx)(tQ.c, {
```

#### 176. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1922` → after: `L1922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1922) · [Before (L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1922)

```diff
-         children: [(0, Kd.jsx)(ed.e, {
+         children: [(0, uQ.jsx)(tQ.c, {
```

#### 177. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1930)

```diff
-             }), "joinDiscord" in Jd && Ld.j.nO("clientTaskProgress", {
+             }), "joinDiscord" in FQ && xQ.l.GA("clientTaskProgress", {
```

#### 178. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1935` → after: `L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1935) · [Before (L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1935)

```diff
-         }), (0, Kd.jsx)(Wd.e, {})]
+         }), (0, uQ.jsx)(oQ.b, {})]
```

#### 179. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1938-L1960` → after: `L1938-L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1938-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1938-L1960) · [Before (L1938-L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1938-L1960)

```diff
-     var Dd = kd(22),
-       Td = kd(1670),
-       Ed = kd(36703),
-       cd = kd(9134),
-       hd = kd(4482),
-       rd = kd(149),
-       ud = kd(1230),
-       td = kd(1384),
-       Vd = kd(2530),
-       zd = kd(1211),
-       Hd = kd(1675),
-       wd = kd(2324),
-       Ad = kd(2319),
-       dJ = kd(1858),
-       JJ = kd(2013),
-       kJ = kd(1279),
- ... (7 more removed lines; see GitHub link above)
+     var aQ = wQ(17),
+       XQ = wQ(1641),
+       fQ = wQ(36164),
+       VQ = wQ(8995),
+       hQ = wQ(4475),
+       JQ = wQ(160),
+       EQ = wQ(1225),
+       nQ = wQ(1367),
+       gQ = wQ(2552),
+       PQ = wQ(1207),
+       ZQ = wQ(1645),
+       yQ = wQ(2304),
+       BQ = wQ(2290),
+       dQ = wQ(1835),
+       QF = wQ(1998),
+       FF = wQ(1276),
+ ... (7 more added lines; see GitHub link above)
```

#### 180. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1966)

```diff
-         QG: pd
+         uC: LQ
```

#### 181. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1970)

```diff
-       } = (0, zd.B)(), Pd = (0, CJ.o)(CJ.j), [Zd, gd] = (0, Nd.useState)([]), Cd = [], od = (dd, Jd) => {
+       } = (0, PQ.y)(), DQ = (0, vF.r)(vF.k), [kQ, vQ] = (0, qQ.useState)([]), mQ = [], HQ = (QQ, FQ) => {
```

#### 182. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1972)

```diff
-         Cd.length < 3 && !(0, WJ.l)(pd, dd.name) && Cd.push({
+         mQ.length < 3 && !(0, qF.h)(LQ, QQ.name) && mQ.push({
```

#### 183. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1977)

```diff
-       for (const Nd of Jd) od((0, gJ.h)(Nd.name, Nd.cosmetics, Nd.ranks), Wd("worldSocial:inThisWorld"));
+       for (const qQ of FQ) HQ((0, kF.e)(qQ.name, qQ.cosmetics, qQ.ranks), oQ("worldSocial:inThisWorld"));
```

#### 184. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L1996)

```diff
-           return (0, Kd.jsx)(gJ.f, {
+           return (0, uQ.jsx)(kF.d, {
```

#### 185. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2009` → after: `L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2009) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2009)

```diff
-               children: (0, Kd.jsx)(Qd.d, {
+               children: (0, uQ.jsx)(YQ.f, {
```

#### 186. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2012` → after: `L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2012) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2012)

```diff
-                 ariaLabel: `${Wd("recentPlayers:addFriend")} ${kd.name}`,
+                 ariaLabel: `${oQ("recentPlayers:addFriend")} ${wQ.name}`,
```

#### 187. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2016` → after: `L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2016) · [Before (L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2016)

```diff
-                 children: (0, Kd.jsx)(ed.e, {
+                 children: (0, uQ.jsx)(tQ.c, {
```

#### 188. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2021` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2021) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2021)

```diff
-           }, `suggestion:${kd.name}`)
+           }, `suggestion:${wQ.name}`)
```

#### 189. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2025-L2031` → after: `L2025-L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2025-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2025-L2031) · [Before (L2025-L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2025-L2031)

```diff
-     var oJ = kd(36907),
-       lJ = kd(36911),
-       QJ = kd(1245),
-       LJ = kd(1515),
-       OJ = kd(4480),
-       eJ = kd(284),
-       RJ = kd(4460);
+     var uF = wQ(36362),
+       HF = wQ(36369),
+       bF = wQ(1237),
+       YF = wQ(1485),
+       xF = wQ(4467),
+       AF = wQ(291),
+       tF = wQ(4455);
```

#### 190. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2039-L2040` → after: `L2039-L2040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2039-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2039-L2040) · [Before (L2039-L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2039-L2040)

```diff
-       const kd = (0, QJ.tb)(dd);
-       return null !== Jd && (0, QJ.tb)(Jd) === kd || (0, RJ.d)().some((dd => (0, QJ.tb)(dd.name) === kd))
+       const wQ = (0, bF.Cb)(QQ);
+       return null !== FQ && (0, bF.Cb)(FQ) === wQ || (0, tF.d)().some((QQ => (0, bF.Cb)(QQ.name) === wQ))
```

#### 191. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2045` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2045) · [Before (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2045)

```diff
-       return `worldSocialSeen:${dd}`
+       return `worldSocialSeen:${QQ}`
```

#### 192. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2055-L2056` → after: `L2055-L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2055-L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2055-L2056) · [Before (L2055-L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2055-L2056)

```diff
-     var iJ = kd(2369),
-       aJ = kd(2372);
+     var iF = wQ(2353),
+       WF = wQ(2359);
```

#### 193. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2073` → after: `L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2073) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2073)

```diff
-       }), [Jd]), (0, Kd.jsx)(Pd.e, {
+       }), [FQ]), (0, uQ.jsx)(DQ.d, {
```

#### 194. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2083)

```diff
-           worldCode: null !== Zd && void 0 !== Zd ? Zd : Wd,
+           worldCode: null !== kQ && void 0 !== kQ ? kQ : oQ,
```

#### 195. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2098)

```diff
-       } = (0, zd.B)(), Zd = (0, Nd.useRef)(null), {
+       } = (0, PQ.y)(), kQ = (0, qQ.useRef)(null), {
```

#### 196. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2104)

```diff
-       } = (0, NJ.g)(kd), Od = (0, Hd.j)(), Rd = (0, Md.k)("players"), Id = (0, Md.k)("hiddenPlayerNames"), [Gd, vd] = (0, Nd.useState)([]), [xd, Bd] = (0, Nd.useState)([]), [sd, ad] = (0, Nd.useState)(!1), Yd = (0, iJ.d)(), md = (0, Nd.useMemo)((() => {
+       } = (0, LF.h)(wQ), AQ = (0, ZQ.m)(), eQ = (0, RQ.k)("players"), MQ = (0, RQ.k)("hiddenPlayerNames"), [GQ, pQ] = (0, qQ.useState)([]), [cQ, SQ] = (0, qQ.useState)([]), [iQ, WQ] = (0, qQ.useState)(!1), sQ = (0, iF.b)(), rQ = (0, qQ.useMemo)((() => {
```

#### 197. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2106` → after: `L2106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2106) · [Before (L2106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2106)

```diff
-         const kd = null === Rd.localId ? null : null !== (dd = null === (Jd = Rd.byId[Rd.localId]) || void 0 === Jd ? void 0 : Jd.name) && void 0 !== dd ? dd : null;
+         const wQ = null === eQ.localId ? null : null !== (QQ = null === (FQ = eQ.byId[eQ.localId]) || void 0 === FQ ? void 0 : FQ.name) && void 0 !== QQ ? QQ : null;
```

#### 198. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2115` → after: `L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2115) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2115)

```diff
-       }), [Rd]), bd = (0, Nd.useMemo)((() => (0, WJ.j)(Od.friends, kd, md.map((dd => dd.name)))), [Od.friends, kd, md]), jd = Sd.featureFlags.canSeeRealPlayerNames ? md.filter((dd => null === (0, kJ.d)(dd.name, Id))) : [], Xd = null !== gd && void 0 !== gd && gd.canManage ? gd :  … [truncated]
+       }), [eQ]), IQ = (0, qQ.useMemo)((() => (0, qF.g)(AQ.friends, wQ, rQ.map((QQ => QQ.name)))), [AQ.friends, wQ, rQ]), NQ = UQ.featureFlags.canSeeRealPlayerNames ? rQ.filter((QQ => null === (0, FF.b)(QQ.name, MQ))) : [], TQ = null !== vQ && void 0 !== vQ && vQ.canManage ? vQ :  … [truncated]
```

#### 199. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2117)

```diff
-       } = (0, qd.c)();
+       } = (0, CQ.e)();
```

#### 200. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2130` → after: `L2130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2130) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2130)

```diff
-         null !== dd && void 0 !== dd && dd.contains(document.activeElement) || !Jd && !kd || (0, Ed.f)() || null === dd || void 0 === dd || dd.focus({
+         null !== QQ && void 0 !== QQ && QQ.contains(document.activeElement) || !FQ && !wQ || (0, fQ.c)() || null === QQ || void 0 === QQ || QQ.focus({
```

#### 201. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2144` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2144) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2144)

```diff
-         eJ = Gd.filter((dd => !(0, WJ.l)(OJ, dd))),
+         AF = GQ.filter((QQ => !(0, qF.h)(xF, QQ))),
```

#### 202. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2150` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2150) · [Before (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2150)

```diff
-           for (const kd of (0, WJ.o)(dd, hd.x)) {
+           for (const wQ of (0, qF.j)(QQ, hQ.y)) {
```

#### 203. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2153` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2153) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2153)

```diff
-               }, (dd => (0, WJ.t)(dd, kd, !0)), {
+               }, (QQ => (0, qF.n)(QQ, wQ, !0)), {
```

#### 204. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2160` → after: `L2160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2160) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2160)

```diff
-             on: (0, WJ.l)(Xd.whitelist, dd),
+             on: (0, qF.h)(TQ.whitelist, QQ),
```

#### 205. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2169` → after: `L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2169) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2169)

```diff
-               }, (kd => (0, WJ.t)(kd, [dd], Jd)))
+               }, (wQ => (0, qF.n)(wQ, [QQ], FQ)))
```

#### 206. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2177-L2178` → after: `L2177-L2178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2177-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2177-L2178) · [Before (L2177-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2177-L2178)

```diff
-           const kd = await (0, Ad.i)(dd, "world_social");
-           return (0, Ad.d)(kd, dd, {
+           const wQ = await (0, BQ.j)(QQ, "world_social");
+           return (0, BQ.e)(wQ, QQ, {
```

#### 207. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2180` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2180) · [Before (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2180)

```diff
-           }), "failed" !== kd.kind && ("sent" === kd.kind && vd((Jd => (0, WJ.l)(Jd, dd) ? Jd : [...Jd, dd])), Ud && await xJ([dd]), !0)
+           }), "failed" !== wQ.kind && ("sent" === wQ.kind && pQ((FQ => (0, qF.h)(FQ, QQ) ? FQ : [...FQ, QQ])), lQ && await pF([QQ]), !0)
```

#### 208. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2198)

```diff
-           }), (0, Kd.jsx)(Qd.i, {
+           }), (0, uQ.jsx)(YQ.j, {
```

#### 209. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2204)

```diff
-           children: (0, Kd.jsx)(Fd.b, {})
+           children: (0, uQ.jsx)(OQ.c, {})
```

#### 210. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2206)

```diff
-           children: [(0, Kd.jsx)(PJ.c, {
+           children: [(0, uQ.jsx)(oF.e, {
```

#### 211. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2214)

```diff
-           }), fd && null !== nd && (0, Kd.jsx)(ZJ.c, {
+           }), KQ && null !== zQ && (0, uQ.jsx)(DF.d, {
```

#### 212. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2224)

```diff
-                   pd = "whitelist" === dd && gd ? (0, WJ.g)(bd, Jd, gd.whitelist) : [];
+                   LQ = "whitelist" === QQ && vQ ? (0, qF.f)(IQ, FQ, vQ.whitelist) : [];
```

#### 213. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2235)

```diff
-             children: [(0, Kd.jsx)(Vd.c, {
+             children: [(0, uQ.jsx)(gQ.b, {
```

#### 214. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2237-L2238` → after: `L2237-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2237-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2237-L2238) · [Before (L2237-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2237-L2238)

```diff
-                 children: [(0, Kd.jsx)(ed.e, {
-                   name: JJ.f
+                 children: [(0, uQ.jsx)(tQ.c, {
+                   name: QF.i
```

#### 215. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2242)

```diff
-                 children: [Od.requests.length, Od.requests.length === ud.l && (0, Kd.jsx)("span", {
+                 children: [AQ.requests.length, AQ.requests.length === EQ.p && (0, uQ.jsx)("span", {
```

#### 216. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2258` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2258) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2258)

```diff
-               children: GJ.map(((dd, Jd) => (0, Kd.jsx)(gJ.f, {
+               children: MF.map(((QQ, FQ) => (0, uQ.jsx)(kF.d, {
```

#### 217. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2268` → after: `L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2268) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2268)

```diff
-                     children: (0, Kd.jsx)(Qd.d, {
+                     children: (0, uQ.jsx)(YQ.f, {
```

#### 218. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2270` → after: `L2270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2270) · [Before (L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2270)

```diff
-                       ariaLabel: `${Pd("general:accept")} ${dd.name}`,
+                       ariaLabel: `${DQ("general:accept")} ${QQ.name}`,
```

#### 219. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2276` → after: `L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2276) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2276)

```diff
-                         (0, Ad.f)(dd.name, !0, {
+                         (0, BQ.i)(QQ.name, !0, {
```

#### 220. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2280` → after: `L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2280) · [Before (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2280)

```diff
-                       children: (0, Kd.jsx)(ed.e, {
+                       children: (0, uQ.jsx)(tQ.c, {
```

#### 221. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2290` → after: `L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2290) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2290)

```diff
-                     children: (0, Kd.jsx)(Qd.f, {
+                     children: (0, uQ.jsx)(YQ.i, {
```

#### 222. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2292` → after: `L2292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2292) · [Before (L2292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2292)

```diff
-                       ariaLabel: `${Pd("general:decline")} ${dd.name}`,
+                       ariaLabel: `${DQ("general:decline")} ${QQ.name}`,
```

#### 223. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2298` → after: `L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2298) · [Before (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2298)

```diff
-                         (0, Ad.f)(dd.name, !1, {
+                         (0, BQ.i)(QQ.name, !1, {
```

#### 224. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2302)

```diff
-                       children: (0, Kd.jsx)(ed.e, {
+                       children: (0, uQ.jsx)(tQ.c, {
```

#### 225. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2308)

```diff
-               }, `incoming:${dd.name}`)))
+               }, `incoming:${QQ.name}`)))
```

#### 226. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2312` → after: `L2312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2312) · [Before (L2312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2312)

```diff
-             children: [(0, Kd.jsx)(Vd.c, {
+             children: [(0, uQ.jsx)(gQ.b, {
```

#### 227. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2314-L2315` → after: `L2314-L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2314-L2315) · [Before (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2314-L2315)

```diff
-                 children: [(0, Kd.jsx)(ed.e, {
-                   name: JJ.c
+                 children: [(0, uQ.jsx)(tQ.c, {
+                   name: QF.e
```

#### 228. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2319` → after: `L2319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2319) · [Before (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2319)

```diff
-             }), (0, Kd.jsx)(oJ.e, {
+             }), (0, uQ.jsx)(uF.d, {
```

#### 229. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2331` → after: `L2331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2331) · [Before (L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2331)

```diff
-               children: (0, Kd.jsx)(Fd.b, {})
+               children: (0, uQ.jsx)(OQ.c, {})
```

#### 230. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2335` → after: `L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2335) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2335)

```diff
-                 children: [eJ.map(((dd, Jd) => (0, Kd.jsx)(gJ.f, {
+                 children: [AF.map(((QQ, FQ) => (0, uQ.jsx)(kF.d, {
```

#### 231. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2337` → after: `L2337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2337) · [Before (L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2337)

```diff
-                   player: (0, gJ.h)(dd, null),
+                   player: (0, kF.e)(QQ, null),
```

#### 232. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2339-L2340` → after: `L2339-L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2339-L2340) · [Before (L2339-L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2339-L2340)

```diff
-                   Do: qJ(dd)
-                 }, `request:${dd}`))), !yd && bd.map(((dd, Jd) => (0, Kd.jsx)(gJ.b, {
+                   fH: cF(QQ)
+                 }, `request:${QQ}`))), !jQ && IQ.map(((QQ, FQ) => (0, uQ.jsx)(kF.c, {
```

#### 233. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2343)

```diff
-                   Do: qJ(dd.friend.name),
+                   fH: cF(QQ.friend.name),
```

#### 234. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2356` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2356) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2356)

```diff
-                       const pd = (0, WJ.r)(gd, dd);
+                       const LQ = (0, qF.k)(vQ, QQ);
```

#### 235. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2361` → after: `L2361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2361) · [Before (L2361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2361)

```diff
-                       await (0, wd.k)(dd, "game", {
+                       await (0, yQ.h)(QQ, "game", {
```

#### 236. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2370` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2370) · [Before (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2370)

```diff
-                   QG: dd => BJ(dd, "suggestion")
+                   uC: QQ => CF(QQ, "suggestion")
```

#### 237. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2378` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2378) · [Before (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2378)

```diff
-         }), Yd && (0, Kd.jsxs)(Qd.G, {
+         }), sQ && (0, uQ.jsxs)(YQ.L, {
```

#### 238. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2381` → after: `L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2381) · [Before (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2381)

```diff
-             (0, aJ.f)({
+             (0, WF.e)({
```

#### 239. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2386` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2386) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2386)

```diff
-           children: [(0, Kd.jsx)(ed.e, {
+           children: [(0, uQ.jsx)(tQ.c, {
```

#### 240. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2392-L2393` → after: `L2392-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2392-L2393) · [Before (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2392-L2393)

```diff
-     var YJ = kd(2394),
-       mJ = kd(2365);
+     var sF = wQ(2395),
+       rF = wQ(2349);
```

#### 241. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2401)

```diff
-       const Wd = (0, Md.g)("connectedGame", (dd => (0, YJ.d)(dd) ? dd.lobbyName : null));
+       const oQ = (0, RQ.g)("connectedGame", (QQ => (0, sF.c)(QQ) ? QQ.lobbyName : null));
```

#### 242. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2406` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2406) · [Before (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2406)

```diff
-         } = (0, Dd.j)(["gameEntrySource", "loadingOverlayVisible"]), {
+         } = (0, aQ.l)(["gameEntrySource", "loadingOverlayVisible"]), {
```

#### 243. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2408` → after: `L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2408) · [Before (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2408)

```diff
-         } = (0, qd.c)(), Wd = (0, Md.k)("localPlayerAlive"), Pd = (0, Md.g)("players", (dd => null !== dd.localId && void 0 !== dd.byId[dd.localId])), Zd = (0, mJ.o)(), gd = (0, Nd.useRef)(null), Cd = (0, Nd.useRef)(null), Kd = "worldCreation" === Jd, od = pd.whamm, ld = pd.getPe … [truncated]
+         } = (0, CQ.e)(), oQ = (0, RQ.k)("localPlayerAlive"), DQ = (0, RQ.g)("players", (QQ => null !== QQ.localId && void 0 !== QQ.byId[QQ.localId])), kQ = (0, rF.n)(), vQ = (0, qQ.useRef)(null), mQ = (0, qQ.useRef)(null), uQ = "worldCreation" === FQ, HQ = LQ.whamm, bQ = LQ.getPe … [truncated]
```

#### 244. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2435-L2436` → after: `L2435-L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2435-L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2435-L2436) · [Before (L2435-L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2435-L2436)

```diff
-                       const Jd = eJ.c.world_social_popup_v1;
-                       return (0, eJ.g)("world_social_popup_v1"), (0, pJ.reportAnalyticsClick)({
+                       const FQ = AF.e.world_social_popup_v1;
+                       return (0, AF.j)("world_social_popup_v1"), (0, wF.reportAnalyticsClick)({
```

#### 245. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2438` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2438) · [Before (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2438)

```diff
-                         value: `${Jd}:${(0,OJ.d)()}:${dd}`
+                         value: `${FQ}:${(0,xF.d)()}:${QQ}`
```

#### 246. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2440)

```diff
-                     }(Jd) && ((0, NJ.c)(dd), Ld.j.nO("toggleMenu", `inviteLink|${Jd}`), "inviteLink" !== Dd.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
+                     }(FQ) && ((0, LF.b)(QQ), xQ.l.GA("toggleMenu", `inviteLink|${FQ}`), "inviteLink" !== aQ.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
```

#### 247. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2458)

```diff
-         opener: GJ(pd) ? pd : "icon"
+         opener: MF(LQ) ? LQ : "icon"
```

#### 248. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2467)

```diff
-       return SJ.has(dd) || !!jd.k.getItem(`worldSocialShown:${dd}`)
+       return UF.has(QQ) || !!NQ.m.getItem(`worldSocialShown:${QQ}`)
```

#### 249. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2471` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2471) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2471)

```diff
-       SJ.add(dd), jd.k.setItem(`worldSocialShown:${dd}`, !0)
+       UF.add(QQ), NQ.m.setItem(`worldSocialShown:${QQ}`, !0)
```

#### 250. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2501` → after: `L2501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2501) · [Before (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2501)

```diff
-       return "inGame" === Dd.d.get("gameState") && Cd.gameBridge.latest("connectedGame").lobbyName === dd
+       return "inGame" === aQ.c.get("gameState") && mQ.gameBridge.latest("connectedGame").lobbyName === QQ
```

#### 251. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2505` → after: `L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2505) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2505)

```diff
-       return (0, Ed.f)() || Dd.d.get("loadingOverlayVisible") || (0, Td.n)()
+       return (0, fQ.c)() || aQ.c.get("loadingOverlayVisible") || (0, XQ.m)()
```

#### 252. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2507-L2510` → after: `L2507-L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2507-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2507-L2510) · [Before (L2507-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2507-L2510)

```diff
-     var EJ = kd(36919),
-       cJ = kd(3014),
-       hJ = kd(1975),
-       rJ = kd(3011);
+     var fF = wQ(36378),
+       VF = wQ(3045),
+       hF = wQ(1940),
+       JF = wQ(3037);
```

#### 253. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2513` → after: `L2513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2513) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2513)

```diff
-       return rJ.d.overridesTexture(dd) ? rJ.d.getTexture(dd, Jd).url : kd
+       return JF.b.overridesTexture(QQ) ? JF.b.getTexture(QQ, FQ).url : wQ
```

#### 254. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2515` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2515) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2515)

```diff
-     var tJ = kd(10077);
+     var nF = wQ(9933);
```

#### 255. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2536)

```diff
-             src: uJ("board_full", cJ.h.BLOCK, tJ),
+             src: EF("board_full", VF.i.BLOCK, nF),
```

#### 256. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2544-L2545` → after: `L2544-L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2544-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2544-L2545) · [Before (L2544-L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2544-L2545)

```diff
-               fontSize: `${Wd}rem`,
-               lineHeight: `${Pd}rem`
+               fontSize: `${oQ}rem`,
+               lineHeight: `${DQ}rem`
```

#### 257. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2570` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2570) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2570)

```diff
-               }(dd), /^F\d+$/i.test(dd.code) && null !== (Jd = hJ.x.OpenCodeEditor) && void 0 !== Jd && Jd.includes(dd.code) && kd())
+               }(QQ), /^F\d+$/i.test(QQ.code) && null !== (FQ = hF.u.OpenCodeEditor) && void 0 !== FQ && FQ.includes(QQ.code) && wQ())
```

#### 258. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2582` → after: `L2582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2582) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2582)

```diff
-     var wJ = kd(1723);
+     var yF = wQ(1690);
```

#### 259. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2592)

```diff
-         }), Gd = (dd, Jd) => Od ? (0, EJ.m)(dd, Jd, Od.width, Od.height) : (0, EJ.f)(dd, Jd), vd = dd => {
+         }), GQ = (QQ, FQ) => AQ ? (0, fF.o)(QQ, FQ, AQ.width, AQ.height) : (0, fF.g)(QQ, FQ), pQ = QQ => {
```

#### 260. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2611` → after: `L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2611) · [Before (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2611)

```diff
-           const Kd = null !== (Nd = null !== (Wd = dd.textSize) && void 0 !== Wd ? Wd : jd.i.getItem("lastBoardTextSize")) && void 0 !== Nd ? Nd : 0;
+           const uQ = null !== (qQ = null !== (oQ = QQ.textSize) && void 0 !== oQ ? oQ : NQ.i.getItem("lastBoardTextSize")) && void 0 !== qQ ? qQ : 0;
```

#### 261. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2618` → after: `L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2618) · [Before (L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2618)

```diff
-         VJ(qd, Jd), (0, wJ.n)(qd, {
+         gF(CQ, FQ), (0, yF.o)(CQ, {
```

#### 262. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2623` → after: `L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2623) · [Before (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2623)

```diff
-             const kd = EJ.c[dd];
+             const wQ = fF.e[QQ];
```

#### 263. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2632` → after: `L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2632) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2632)

```diff
-         return (0, Kd.jsxs)(Pd.e, {
+         return (0, uQ.jsxs)(DQ.d, {
```

#### 264. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2654` → after: `L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2654) · [Before (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2654)

```diff
-             children: [(0, Kd.jsx)(Qd.d, {
+             children: [(0, uQ.jsx)(YQ.f, {
```

#### 265. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2661` → after: `L2661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2661) · [Before (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2661)

```diff
-             }), (0, Kd.jsx)(Qd.d, {
+             }), (0, uQ.jsx)(YQ.f, {
```

#### 266. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2668` → after: `L2668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2668) · [Before (L2668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2668)

```diff
-             }), (0, Kd.jsx)(Qd.d, {
+             }), (0, uQ.jsx)(YQ.f, {
```

#### 267. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2688` → after: `L2688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2688) · [Before (L2688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2688)

```diff
-         (0, sd.h)("EditNameTag", (dd => {
+         (0, iQ.g)("EditNameTag", (QQ => {
```

#### 268. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2692` → after: `L2692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2692) · [Before (L2692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2692)

```diff
-         VJ(od, Jd), (0, wJ.n)(od, {
+         gF(HQ, FQ), (0, yF.o)(HQ, {
```

#### 269. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2696` → after: `L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2696) · [Before (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2696)

```diff
-         const ld = EJ.E.nameTag.uiFontSize,
+         const bQ = fF.H.nameTag.uiFontSize,
```

#### 270. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2698` → after: `L2698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2698) · [Before (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2698)

```diff
-         return (0, Kd.jsxs)(Pd.e, {
+         return (0, uQ.jsxs)(DQ.d, {
```

#### 271. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2712` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2712) · [Before (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2712)

```diff
-                 Zd((0, EJ.q)(Jd, "nameTag"))
+                 kQ((0, fF.p)(FQ, "nameTag"))
```

#### 272. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2719` → after: `L2719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2719) · [Before (L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2719)

```diff
-           }), (0, Kd.jsx)(Qd.d, {
+           }), (0, uQ.jsx)(YQ.f, {
```

#### 273. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2726` → after: `L2726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2726) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2726)

```diff
-     var Jk = kd(18427);
+     var Qw = wQ(18175);
```

#### 274. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2734` → after: `L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2734) · [Before (L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2734)

```diff
-       (0, sd.h)("EditBook", (dd => {
+       (0, iQ.g)("EditBook", (QQ => {
```

#### 275. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2741` → after: `L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2741) · [Before (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2741)

```diff
-         Sd.featureFlags.canSeePlayerWrittenText && (null !== Jd ? (ed(Jd), Zd(null !== (Wd = Jd[0]) && void 0 !== Wd ? Wd : ""), Id(pd), od(0), Ld(!1), vd(!Nd), qd(!1), kd()) : ed(["", "", "", "", "", "", "", "", "", ""]))
+         UQ.featureFlags.canSeePlayerWrittenText && (null !== FQ ? (tQ(FQ), kQ(null !== (oQ = FQ[0]) && void 0 !== oQ ? oQ : ""), MQ(LQ), HQ(0), xQ(!1), pQ(!qQ), CQ(!1), wQ()) : tQ(["", "", "", "", "", "", "", "", "", ""]))
```

#### 276. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2745` → after: `L2745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2745) · [Before (L2745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2745)

```diff
-       VJ(Bd, Jd), (0, wJ.n)(Bd, {
+       gF(SQ, FQ), (0, yF.o)(SQ, {
```

#### 277. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2747-L2748` → after: `L2747-L2748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2747-L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2747-L2748) · [Before (L2747-L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2747-L2748)

```diff
-       }), (0, wJ.n)(ad, {
-         kind: "iC"
+       }), (0, yF.o)(WQ, {
+         kind: "Tm"
```

#### 278. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2750` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2750) · [Before (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2750)

```diff
-       const Md = EJ.E.book.uiFontSize,
+       const RQ = fF.H.book.uiFontSize,
```

#### 279. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2762` → after: `L2762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2762) · [Before (L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2762)

```diff
-       return (0, Kd.jsxs)(Pd.e, {
+       return (0, uQ.jsxs)(DQ.d, {
```

#### 280. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2779` → after: `L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2779) · [Before (L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2779)

```diff
-               lineHeight: `${Fd}rem`
+               lineHeight: `${OQ}rem`
```

#### 281. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2788` → after: `L2788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2788) · [Before (L2788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2788)

```diff
-               Jd = (0, EJ.q)(Jd, "iC"), Id(Jd)
+               FQ = (0, fF.p)(FQ, "Tm"), MQ(FQ)
```

#### 282. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2792` → after: `L2792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2792) · [Before (L2792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2792)

```diff
-             src: uJ("book_page", cJ.h.ITEM, Jk),
+             src: EF("book_page", VF.i.ITEM, Qw),
```

#### 283. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2802-L2803` → after: `L2802-L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2802-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2802-L2803) · [Before (L2802-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2802-L2803)

```diff
-                 fontSize: `${Md}rem`,
-                 lineHeight: `${Fd}rem`
+                 fontSize: `${RQ}rem`,
+                 lineHeight: `${OQ}rem`
```

#### 284. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2812` → after: `L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2812) · [Before (L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2812)

```diff
-                 Zd((0, EJ.q)(Jd, "book")), Ld(!0)
+                 kQ((0, fF.p)(FQ, "book")), xQ(!0)
```

#### 285. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2819` → after: `L2819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2819) · [Before (L2819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2819)

```diff
-           children: [(0, Kd.jsx)(Qd.d, {
+           children: [(0, uQ.jsx)(YQ.f, {
```

#### 286. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2830)

```diff
-           }), (0, Kd.jsx)(Qd.d, {
+           }), (0, uQ.jsx)(YQ.f, {
```

#### 287. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2841` → after: `L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2841) · [Before (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2841)

```diff
-           }), (0, Kd.jsx)(Qd.d, {
+           }), (0, uQ.jsx)(YQ.f, {
```

#### 288. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2851-L2854` → after: `L2851-L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2851-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2851-L2854) · [Before (L2851-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2851-L2854)

```diff
-     var pk = kd(36783),
-       Nk = kd(8588),
-       Wk = kd(1404),
-       Pk = kd(1924);
+     var ww = wQ(36238),
+       Lw = wQ(8423),
+       qw = wQ(1395),
+       ow = wQ(1887);
```

#### 289. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2863` → after: `L2863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2863) · [Before (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2863)

```diff
-       } = (0, zd.B)(), Wd = (0, Nd.useRef)(null);
+       } = (0, PQ.y)(), oQ = (0, qQ.useRef)(null);
```

#### 290. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2866` → after: `L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2866) · [Before (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2866)

```diff
-         const pd = Jd ? (0, pk.D)() : null;
+         const LQ = FQ ? (0, ww.w)() : null;
```

#### 291. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2869` → after: `L2869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2869) · [Before (L2869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2869)

```diff
-         (0, Nk.l)(null !== (dd = null === (kd = Wd.current) || void 0 === kd ? void 0 : kd.children[Nd]) && void 0 !== dd ? dd : null)
+         (0, Lw.q)(null !== (QQ = null === (wQ = oQ.current) || void 0 === wQ ? void 0 : wQ.children[qQ]) && void 0 !== QQ ? QQ : null)
```

#### 292. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2881` → after: `L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2881) · [Before (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2881)

```diff
-           return (0, Kd.jsxs)(Qd.j, {
+           return (0, uQ.jsxs)(YQ.m, {
```

#### 293. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2885` → after: `L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2885) · [Before (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2885)

```diff
-               (0, pk.w)(dd)
+               (0, ww.q)(QQ)
```

#### 294. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2887-L2888` → after: `L2887-L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2887-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2887-L2888) · [Before (L2887-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2887-L2888)

```diff
-             ariaLabel: dd.iconOnly ? Jd : void 0,
-             title: dd.iconOnly ? Jd : void 0,
+             ariaLabel: QQ.iconOnly ? FQ : void 0,
+             title: QQ.iconOnly ? FQ : void 0,
```

#### 295. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2891` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2891) · [Before (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2891)

```diff
-               children: ["item" === dd.icon.kind && (0, Kd.jsx)(Pk.d, {
+               children: ["item" === QQ.icon.kind && (0, uQ.jsx)(ow.e, {
```

#### 296. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2898` → after: `L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2898) · [Before (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2898)

```diff
-               }), "icon" === dd.icon.kind && (0, Kd.jsx)(ed.e, {
+               }), "icon" === QQ.icon.kind && (0, uQ.jsx)(tQ.c, {
```

#### 297. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2906-L2910` → after: `L2906-L2910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2906-L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2906-L2910) · [Before (L2906-L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2906-L2910)

```diff
-     var gk = kd(36926),
-       Ck = kd(2610),
-       Kk = kd(9250),
-       lk = kd(36701),
-       Qk = kd(36692);
+     var kw = wQ(36382),
+       vw = wQ(2649),
+       mw = wQ(9116),
+       uw = wQ(36157),
+       Hw = wQ(36149);
```

#### 298. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2916` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2916) · [Before (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2916)

```diff
-     var ek = kd(1928);
+     var xw = wQ(1895);
```

#### 299. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2931` → after: `L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2931) · [Before (L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2931)

```diff
-         children: (0, Kd.jsx)(Pk.d, {
+         children: (0, uQ.jsx)(ow.e, {
```

#### 300. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2935` → after: `L2935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2935) · [Before (L2935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2935)

```diff
-           bar: (0, ek.f)(pd)
+           bar: (0, xw.i)(LQ)
```

#### 301. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2947` → after: `L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2947) · [Before (L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2947)

```diff
-         className: `InvenHoveredItemInfo SmallTextBold ${Jd}`,
+         className: `InvenHoveredItemInfo SmallTextBold ${FQ}`,
```

#### 302. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2949-L2950` → after: `L2949-L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2949-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2949-L2950) · [Before (L2949-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2949-L2950)

```diff
-         children: [(0, Kd.jsx)(Bd.c, {
-           text: (0, ad.yb)(kd.name, {
+         children: [(0, uQ.jsx)(SQ.e, {
+           text: (0, WQ.ub)(wQ.name, {
```

#### 303. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2955` → after: `L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2955) · [Before (L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2955)

```diff
-           children: (0, Kd.jsx)(Bd.c, {
+           children: (0, uQ.jsx)(SQ.e, {
```

#### 304. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L2991-L2992` → after: `L2991-L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R2991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L2991-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L2991-L2992) · [Before (L2991-L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L2991-L2992)

```diff
-           }, Dd.d.get("notchSize"));
-         dd.style.left = `${kd}px`, dd.style.top = `${Nd}px`
+           }, aQ.c.get("notchSize"));
+         QQ.style.left = `${wQ}px`, QQ.style.top = `${qQ}px`
```

#### 305. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3007` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3007) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3007)

```diff
-     var vk = kd(1044),
+     var Mw = wQ(1070),
```

#### 306. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3009` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3009) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3009)

```diff
-       qk = kd(193);
+       pw = wQ(201);
```

#### 307. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3022)

```diff
-         } = (0, qd.c)();
+         } = (0, CQ.e)();
```

#### 308. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3040` → after: `L3040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3040) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3040)

```diff
-           oK: dd
+           pu: QQ
```

#### 309. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3043` → after: `L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3043) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3043)

```diff
-       return (0, Kd.jsx)(Pd.e, {
+       return (0, uQ.jsx)(DQ.d, {
```

#### 310. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3053` → after: `L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3053) · [Before (L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3053)

```diff
-             oK: Zd,
+             pu: kQ,
```

#### 311. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3067` → after: `L3067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3067) · [Before (L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3067)

```diff
-         oK: kd,
+         pu: wQ,
```

#### 312. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3074` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3074) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3074)

```diff
-       } = (0, zd.B)();
+       } = (0, PQ.y)();
```

#### 313. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3076` → after: `L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3076) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3076)

```diff
-         className: `${Jd} IronChestPasskeyInput`,
+         className: `${FQ} IronChestPasskeyInput`,
```

#### 314. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3082` → after: `L3082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3082) · [Before (L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3082)

```diff
-           children: new Array(qk.g.ironChestPasskeyLength).fill(0).map(((dd, Jd) => (0, Kd.jsx)(ik, {
+           children: new Array(pw.e.ironChestPasskeyLength).fill(0).map(((QQ, FQ) => (0, uQ.jsx)(iw, {
```

#### 315. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3089` → after: `L3089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3089) · [Before (L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3089)

```diff
-         }), (0, Kd.jsx)(Qd.j, {
+         }), (0, uQ.jsx)(YQ.m, {
```

#### 316. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3106` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3106) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3106)

```diff
-           children: [(0, Kd.jsx)(Qd.j, {
+           children: [(0, uQ.jsx)(YQ.m, {
```

#### 317. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3109` → after: `L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3109) · [Before (L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3109)

```diff
-               kd(ad.b.mod(Jd + 1, 10))
+               wQ(WQ.e.mod(FQ + 1, 10))
```

#### 318. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3111` → after: `L3111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3111) · [Before (L3111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3111)

```diff
-             children: (0, Kd.jsx)(ed.e, {
+             children: (0, uQ.jsx)(tQ.c, {
```

#### 319. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3117` → after: `L3117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3117) · [Before (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3117)

```diff
-           }), (0, Kd.jsx)(Qd.j, {
+           }), (0, uQ.jsx)(YQ.m, {
```

#### 320. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3120` → after: `L3120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3120) · [Before (L3120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3120)

```diff
-               kd(ad.b.mod(Jd - 1, 10))
+               wQ(WQ.e.mod(FQ - 1, 10))
```

#### 321. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3122` → after: `L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3122) · [Before (L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3122)

```diff
-             children: (0, Kd.jsx)(ed.e, {
+             children: (0, uQ.jsx)(tQ.c, {
```

#### 322. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3129-L3131` → after: `L3129-L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3129-L3131) · [Before (L3129-L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3129-L3131)

```diff
-     var ak = kd(9247),
-       Mk = kd(36981),
-       Fk = kd(36686);
+     var Ww = wQ(9110),
+       Rw = wQ(36426),
+       Ow = wQ(36147);
```

#### 323. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3144` → after: `L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3144) · [Before (L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3144)

```diff
-       } = (0, zd.B)(), [ld, Ld] = (0, Nd.useState)(null), [Od, ed] = (0, Nd.useState)(null), Rd = (0, gd.j)("auraPerLevel"), Id = Math.floor((0, Md.k)("aura") / Rd);
+       } = (0, PQ.y)(), [bQ, xQ] = (0, qQ.useState)(null), [AQ, tQ] = (0, qQ.useState)(null), eQ = (0, vQ.l)("auraPerLevel"), MQ = Math.floor((0, RQ.k)("aura") / eQ);
```

#### 324. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3169` → after: `L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3169) · [Before (L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3169)

```diff
-                 possibilities: Object.fromEntries(kd.map(((dd, Jd) => [`Tier ${Jd+1}`, dd])))
+                 possibilities: Object.fromEntries(wQ.map(((QQ, FQ) => [`Tier ${FQ+1}`, QQ])))
```

#### 325. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3178` → after: `L3178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3178) · [Before (L3178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3178)

```diff
-                 str: `${Jd}: ${kd>0?kd<.01?kd.toPrecision(1):kd.toFixed(2):0}%\n`,
+                 str: `${FQ}: ${wQ>0?wQ<.01?wQ.toPrecision(1):wQ.toFixed(2):0}%\n`,
```

#### 326. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3180` → after: `L3180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3180) · [Before (L3180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3180)

```diff
-                   color: ad.tb[Jd]
+                   color: WQ.pb[FQ]
```

#### 327. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3191` → after: `L3191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3191) · [Before (L3191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3191)

```diff
-       for (let Nd = 0; Nd < Mk.e; Nd++) {
+       for (let qQ = 0; qQ < Rw.d; qQ++) {
```

#### 328. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3194` → after: `L3194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3194) · [Before (L3194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3194)

```diff
-         Gd.push((0, Kd.jsx)(Qd.d, {
+         GQ.push((0, uQ.jsx)(YQ.f, {
```

#### 329. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3230` → after: `L3230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3230) · [Before (L3230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3230)

```diff
-                       color: ad.tb[Jd]
+                       color: WQ.pb[FQ]
```

#### 330. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3245` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3245) · [Before (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3245)

```diff
-                       color: ad.tb[Jd]
+                       color: WQ.pb[FQ]
```

#### 331. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3270-L3271` → after: `L3270-L3271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3270-L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3270-L3271) · [Before (L3270-L3271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3270-L3271)

```diff
-             children: [(0, Kd.jsx)(Fk.b, {
-               idx: Qk.g,
+             children: [(0, uQ.jsx)(Ow.d, {
+               idx: Hw.d,
```

#### 332. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3273` → after: `L3273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3273) · [Before (L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3273)

```diff
-                 null === kd || void 0 === kd || kd(Qk.g)(dd)
+                 null === wQ || void 0 === wQ || wQ(Hw.d)(QQ)
```

#### 333. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3289-L3290` → after: `L3289-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3289-L3290) · [Before (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3289-L3290)

```diff
-                     children: (0, Kd.jsx)(Pk.d, {
-                       itemName: `${dd} Enchantment`,
+                     children: (0, uQ.jsx)(ow.e, {
+                       itemName: `${QQ} Enchantment`,
```

#### 334. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3299` → after: `L3299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3299) · [Before (L3299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3299)

```diff
-                   children: od((0, ak.k)(dd).translationKey)
+                   children: HQ((0, Ww.g)(QQ).translationKey)
```

#### 335. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3313` → after: `L3313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3313) · [Before (L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3313)

```diff
-     var mk = kd(36987);
+     var rw = wQ(36435);
```

#### 336. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3326` → after: `L3326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3326) · [Before (L3326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3326)

```diff
-       } = (0, zd.B)(), od = (0, Md.g)("inventory", (dd => dd.freeSlots)), [ld, Ld] = (0, Nd.useState)(null);
+       } = (0, PQ.y)(), HQ = (0, RQ.g)("inventory", (QQ => QQ.freeSlots)), [bQ, xQ] = (0, qQ.useState)(null);
```

#### 337. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3329` → after: `L3329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3329) · [Before (L3329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3329)

```diff
-           const dd = (0, mk.b)(kd.name, kd.amount);
+           const QQ = (0, rw.e)(wQ.name, wQ.amount);
```

#### 338. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3351-L3352` → after: `L3351-L3352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3351-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3351-L3352) · [Before (L3351-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3351-L3352)

```diff
-             children: (0, Kd.jsx)(Fk.b, {
-               idx: Qk.g,
+             children: (0, uQ.jsx)(Ow.d, {
+               idx: Hw.d,
```

#### 339. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3354` → after: `L3354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3354) · [Before (L3354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3354)

```diff
-                 null === Wd || void 0 === Wd || Wd(Qk.g)(dd)
+                 null === oQ || void 0 === oQ || oQ(Hw.d)(QQ)
```

#### 340. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3364` → after: `L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3364) · [Before (L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3364)

```diff
-             children: (0, Kd.jsx)(Qd.d, {
+             children: (0, uQ.jsx)(YQ.f, {
```

#### 341. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3410)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 342. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3429-L3438` → after: `L3429-L3438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3429-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3429-L3438) · [Before (L3429-L3438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3429-L3438)

```diff
-     var Sk = kd(201),
-       jk = kd(9331),
-       Xk = kd(2581),
-       fk = kd(1714),
-       nk = kd(8598),
-       Uk = kd(8593),
-       yk = kd(1699),
-       Dk = kd(1986),
-       Tk = kd(1417),
-       Ek = kd(2049);
+     var Uw = wQ(217),
+       Nw = wQ(9195),
+       Tw = wQ(2609),
+       Kw = wQ(1682),
+       zw = wQ(8439),
+       lw = wQ(8431),
+       jw = wQ(1668),
+       aw = wQ(1957),
+       Xw = wQ(1407),
+       fw = wQ(2032);
```

#### 343. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3460` → after: `L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3460) · [Before (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3460)

```diff
-           amount: null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : 1
+           amount: null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : 1
```

#### 344. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3466` → after: `L3466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3466) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3466)

```diff
-       return dd < 1e3 ? `${dd}` : dd < 1e4 ? Math.floor(dd / 100) / 10 + "k" : `${Math.floor(dd/1e3)}k`
+       return QQ < 1e3 ? `${QQ}` : QQ < 1e4 ? Math.floor(QQ / 100) / 10 + "k" : `${Math.floor(QQ/1e3)}k`
```

#### 345. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3468-L3469` → after: `L3468-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3468-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3468-L3469) · [Before (L3468-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3468-L3469)

```diff
-     var uk = kd(36991);
-     const tk = Qd.d,
+     var Ew = wQ(36439);
+     const nw = YQ.f,
```

#### 346. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3475` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3475) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3475)

```diff
-         const dd = (0, Tk.g)();
+         const QQ = (0, Xw.d)();
```

#### 347. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3481` → after: `L3481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3481) · [Before (L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3481)

```diff
-       const Wd = (0, Kk.o)(Jd, dd);
+       const oQ = (0, mw.q)(FQ, QQ);
```

#### 348. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3483-L3484` → after: `L3483-L3484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3483-L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3483-L3484) · [Before (L3483-L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3483-L3484)

```diff
-       if (kd && (null === (Nd = (0, uk.e)().get(dd)) || void 0 === Nd || !Nd.hideIngredients)) {
-         Pd ? (Pd = (0, ad.yb)(Pd), Pd.push({
+       if (wQ && (null === (qQ = (0, Ew.h)().get(QQ)) || void 0 === qQ || !qQ.hideIngredients)) {
+         DQ ? (DQ = (0, WQ.ub)(DQ), DQ.push({
```

#### 349. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3498)

```diff
-         }), Pd.push(...(0, ad.yb)((0, Kk.o)(Jd, dd))), Pd.push({
+         }), DQ.push(...(0, WQ.ub)((0, mw.q)(FQ, QQ))), DQ.push({
```

#### 350. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3511` → after: `L3511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3511) · [Before (L3511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3511)

```diff
-         QC: kd
+         Cm: wQ
```

#### 351. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3513` → after: `L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3513) · [Before (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3513)

```diff
-       return `${Jd}_${kd}`
+       return `${FQ}_${wQ}`
```

#### 352. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3545` → after: `L3545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3545) · [Before (L3545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3545)

```diff
-           CraftableItemLockedFar: (null !== (Jd = null === Qd || void 0 === Qd ? void 0 : Qd.stepsAway) && void 0 !== Jd ? Jd : 1) > 1
+           CraftableItemLockedFar: (null !== (FQ = null === YQ || void 0 === YQ ? void 0 : YQ.stepsAway) && void 0 !== FQ ? FQ : 1) > 1
```

#### 353. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3554` → after: `L3554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3554) · [Before (L3554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3554)

```diff
-           null === Cd || void 0 === Cd || Cd(!0, Hk(pd, Ld)), !Pd && (0, yk.o)(dd.nativeEvent) && (0, Uk.f)() && kd()
+           null === mQ || void 0 === mQ || mQ(!0, Zw(LQ, xQ)), !DQ && (0, jw.o)(QQ.nativeEvent) && (0, lw.h)() && wQ()
```

#### 354. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3559` → after: `L3559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3559) · [Before (L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3559)

```diff
-         children: [(0, Kd.jsx)(Pk.d, {
+         children: [(0, uQ.jsx)(ow.e, {
```

#### 355. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3568` → after: `L3568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3568) · [Before (L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3568)

```diff
-           children: [(0, Kd.jsx)(ed.e, {
+           children: [(0, uQ.jsx)(tQ.c, {
```

#### 356. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3570` → after: `L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3570) · [Before (L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3570)

```diff
-           }), (0, Kd.jsx)(Bd.c, {
+           }), (0, uQ.jsx)(SQ.e, {
```

#### 357. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3611` → after: `L3611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3611) · [Before (L3611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3611)

```diff
-             transform: `scaleY(${od})`
+             transform: `scaleY(${HQ})`
```

#### 358. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3613` → after: `L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3613) · [Before (L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3613)

```diff
-         }), (0, Kd.jsx)(Pk.d, {
+         }), (0, uQ.jsx)(ow.e, {
```

#### 359. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3629` → after: `L3629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3629) · [Before (L3629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3629)

```diff
-           QC: od,
+           Cm: HQ,
```

#### 360. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3646` → after: `L3646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3646) · [Before (L3646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3646)

```diff
-       } = (0, zd.B)(), Md = null !== Od && !Od.roomForOne, Fd = null !== (Jd = null === Od || void 0 === Od ? void 0 : Od.craftAllTimes) && void 0 !== Jd ? Jd : 0, Yd = function(dd, Jd) {
+       } = (0, PQ.y)(), RQ = null !== AQ && !AQ.roomForOne, OQ = null !== (FQ = null === AQ || void 0 === AQ ? void 0 : AQ.craftAllTimes) && void 0 !== FQ ? FQ : 0, sQ = function(QQ, FQ) {
```

#### 361. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3666` → after: `L3666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3666) · [Before (L3666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3666)

```diff
-         return null !== (Jd = null === Od || void 0 === Od ? void 0 : Od.amounts[dd]) && void 0 !== Jd ? Jd : 0
+         return null !== (FQ = null === AQ || void 0 === AQ ? void 0 : AQ.amounts[QQ]) && void 0 !== FQ ? FQ : 0
```

#### 362. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3671` → after: `L3671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3671) · [Before (L3671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3671)

```diff
-       const Sd = `calc(${bd} * ${md} + ${bd-1} * 0.4rem + 1px)`,
+       const UQ = `calc(${IQ} * ${rQ} + ${IQ-1} * 0.4rem + 1px)`,
```

#### 363. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3698` → after: `L3698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3698) · [Before (L3698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3698)

```diff
-         for (const pd of null !== (Jd = null === (kd = jd.current) || void 0 === kd ? void 0 : kd.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== Jd ? Jd : []) {
+         for (const LQ of null !== (FQ = null === (wQ = NQ.current) || void 0 === wQ ? void 0 : wQ.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== FQ ? FQ : []) {
```

#### 364. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3708` → after: `L3708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3708) · [Before (L3708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3708)

```diff
-           if ((0, uk.e)().has(gd)) return void(kd && clearInterval(Ud.current));
+           if ((0, Ew.h)().has(vQ)) return void(wQ && clearInterval(lQ.current));
```

#### 365. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3712-L3713` → after: `L3712-L3713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3712-L3713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3712-L3713) · [Before (L3712-L3713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3712-L3713)

```diff
-               LC: Pd,
-               wg: Zd,
+               Sm: DQ,
+               wm: kQ,
```

#### 366. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3717` → after: `L3717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3717) · [Before (L3717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3717)

```diff
-               QC: od,
+               Cm: HQ,
```

#### 367. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3753-L3754` → after: `L3753-L3754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3753-L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3753-L3754) · [Before (L3753-L3754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3753-L3754)

```diff
-                 pd = null === (Qd = jd.current) || void 0 === Qd ? void 0 : Qd.querySelector(`[data-craft-ingredient="${kd}"]`),
-                 Nd = (0, Kk.c)(dd.idx);
+                 LQ = null === (YQ = NQ.current) || void 0 === YQ ? void 0 : YQ.querySelector(`[data-craft-ingredient="${wQ}"]`),
+                 qQ = (0, mw.f)(QQ.idx);
```

#### 368. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3759` → after: `L3759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3759) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3759)

```diff
-                 wg: dd.idx,
+                 wm: QQ.idx,
```

#### 369. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3761` → after: `L3761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3761) · [Before (L3761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3761)

```diff
-                 to: (0, Kk.c)(pd),
+                 to: (0, mw.f)(LQ),
```

#### 370. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3768` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3768) · [Before (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3768)

```diff
-               const dd = Jd.length > 0 ? Jd[Jd.length - 1].delayMs + .6 * Ld : 0;
+               const QQ = FQ.length > 0 ? FQ[FQ.length - 1].delayMs + .6 * xQ : 0;
```

#### 371. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3772-L3773` → after: `L3772-L3773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3772-L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3772-L3773) · [Before (L3772-L3773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3772-L3773)

```diff
-                 wg: Zd,
-                 from: (0, Kk.c)(Xd.current),
+                 wm: kQ,
+                 from: (0, mw.f)(TQ.current),
```

#### 372. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3777` → after: `L3777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3777) · [Before (L3777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3777)

```diff
-             ed(Od, dd && !Nd ? Zd : null, Jd), gk.b.play("wood1", .5).rate(1.75)
+             tQ(AQ, QQ && !qQ ? kQ : null, FQ), kw.b.play("wood1", .5).rate(1.75)
```

#### 373. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3796-L3797` → after: `L3796-L3797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3796-L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3796-L3797) · [Before (L3796-L3797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3796-L3797)

```diff
-         cd = null !== (kd = null === (pd = (0, Ek.b)()) || void 0 === pd ? void 0 : pd.hideButtonHints) && void 0 !== kd && kd,
-         hd = null !== (Wd = null === (Pd = (0, Tk.g)()) || void 0 === Pd ? void 0 : Pd.getBoundButton("inventorySecondary")) && void 0 !== Wd ? Wd : null,
+         VQ = null !== (wQ = null === (LQ = (0, fw.c)()) || void 0 === LQ ? void 0 : LQ.hideButtonHints) && void 0 !== wQ && wQ,
+         hQ = null !== (oQ = null === (DQ = (0, Xw.d)()) || void 0 === DQ ? void 0 : DQ.getBoundButton("inventorySecondary")) && void 0 !== oQ ? oQ : null,
```

#### 374. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3848` → after: `L3848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3848) · [Before (L3848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3848)

```diff
-       const pJ = (0, Kk.o)(sd, gd);
+       const wF = (0, mw.q)(iQ, vQ);
```

#### 375. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3854` → after: `L3854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3854) · [Before (L3854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3854)

```diff
-           children: (0, Kd.jsx)(Bd.c, {
+           children: (0, uQ.jsx)(SQ.e, {
```

#### 376. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3882` → after: `L3882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3882) · [Before (L3882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3882)

```diff
-           children: (0, Kd.jsx)(Bd.c, {
+           children: (0, uQ.jsx)(SQ.e, {
```

#### 377. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3898` → after: `L3898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3898) · [Before (L3898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3898)

```diff
-             children: [vd && hd && !Td && !cd && (0, Kd.jsx)(Dk.c, {
+             children: [pQ && hQ && !XQ && !VQ && (0, uQ.jsx)(aw.b, {
```

#### 378. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3910` → after: `L3910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3910) · [Before (L3910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3910)

```diff
-               children: (0, Kd.jsx)(Pk.d, {
+               children: (0, uQ.jsx)(ow.e, {
```

#### 379. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3939)

```diff
-       const pd = (0, Wk.m)(),
+       const LQ = (0, qw.n)(),
```

#### 380. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3950` → after: `L3950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3950) · [Before (L3950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3950)

```diff
-               gd = null === (Wd = null !== (Pd = null === Zd || void 0 === Zd ? void 0 : Zd.querySelector(".InvenItem")) && void 0 !== Pd ? Pd : Zd) || void 0 === Wd ? void 0 : Wd.getBoundingClientRect();
+               vQ = null === (oQ = null !== (DQ = null === kQ || void 0 === kQ ? void 0 : kQ.querySelector(".InvenItem")) && void 0 !== DQ ? DQ : kQ) || void 0 === oQ ? void 0 : oQ.getBoundingClientRect();
```

#### 381. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3953` → after: `L3953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3953) · [Before (L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3953)

```diff
-             dd.style.opacity = "1", dd.style.width = `${gd.width}px`, dd.style.height = `${gd.height}px`, dd.style.transform = `translate(${gd.left-Cd.left+pd.scrollLeft}px, ${gd.top-Cd.top+pd.scrollTop}px)`
+             QQ.style.opacity = "1", QQ.style.width = `${vQ.width}px`, QQ.style.height = `${vQ.height}px`, QQ.style.transform = `translate(${vQ.left-mQ.left+LQ.scrollLeft}px, ${vQ.top-mQ.top+LQ.scrollTop}px)`
```

#### 382. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3973` → after: `L3973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3973) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3973)

```diff
-       return dd ? (0, Sk.d)(jk.g, dd) ? Np(dd, Jd, kd) : dd : kd("classicGame:handCrafting")
+       return QQ ? (0, Uw.b)(Nw.h, QQ) ? LL(QQ, FQ, wQ) : QQ : wQ("classicGame:handCrafting")
```

#### 383. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3983` → after: `L3983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3983) · [Before (L3983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3983)

```diff
-         if ("translationKey" in dd) return kd(dd.translationKey, (0, zd.r)(dd.params, Wd));
+         if ("translationKey" in QQ) return wQ(QQ.translationKey, (0, PQ.m)(QQ.params, oQ));
```

#### 384. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3986` → after: `L3986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3986) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3986)

```diff
-           if ("translationKey" in dd.str) return kd(dd.str.translationKey, (0, zd.r)(dd.str.params, Wd))
+           if ("translationKey" in QQ.str) return wQ(QQ.str.translationKey, (0, PQ.m)(QQ.str.params, oQ))
```

#### 385. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3989` → after: `L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3989) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3989)

```diff
-       })).join("") : Nd && "translationKey" in Nd ? kd(Nd.translationKey, (0, zd.r)(Nd.params, Wd)) : dd
+       })).join("") : qQ && "translationKey" in qQ ? wQ(qQ.translationKey, (0, PQ.m)(qQ.params, oQ)) : QQ
```

#### 386. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L3993` → after: `L3993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R3993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L3993) · [Before (L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L3993)

```diff
-       return dd === Jd || null !== dd && null !== Jd && dd.name === Jd.name && dd.QC === Jd.QC
+       return QQ === FQ || null !== QQ && null !== FQ && QQ.name === FQ.name && QQ.Cm === FQ.Cm
```

#### 387. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4008` → after: `L4008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4008) · [Before (L4008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4008)

```diff
-       } = (0, zd.B)(), [Ld, Od] = (0, Nd.useState)(""), [ed, Rd] = (0, Nd.useState)(0);
+       } = (0, PQ.y)(), [xQ, AQ] = (0, qQ.useState)(""), [tQ, eQ] = (0, qQ.useState)(0);
```

#### 388. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4016` → after: `L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4016) · [Before (L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4016)

```diff
-         qd = (0, Uk.h)(),
+         CQ = (0, lw.j)(),
```

#### 389. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4019` → after: `L4019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4019) · [Before (L4019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4019)

```diff
-         Fd = null !== od && void 0 !== od ? od : null,
+         OQ = null !== HQ && void 0 !== HQ ? HQ : null,
```

#### 390. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4032-L4034` → after: `L4032-L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4032-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4032-L4034) · [Before (L4032-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4032-L4034)

```diff
-         Xd = (0, uk.A)(),
-         fd = (0, uk.y)(),
-         nd = (0, uk.C)(),
+         TQ = (0, Ew.E)(),
+         KQ = (0, Ew.B)(),
+         zQ = (0, Ew.I)(),
```

#### 391. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4089` → after: `L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4089) · [Before (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4089)

```diff
-         yd = (0, uk.j)(yd, Xd, fd, nd), Ud && (yd = (0, uk.f)(yd, Ud, wk))
+         jQ = (0, Ew.m)(jQ, TQ, KQ, zQ), lQ && (jQ = (0, Ew.l)(jQ, lQ, yw))
```

#### 392. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4092` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4092) · [Before (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4092)

```diff
-         Ed = `${od}|${Ld}`,
+         fQ = `${HQ}|${xQ}`,
```

#### 393. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4096` → after: `L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4096) · [Before (L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4096)

```diff
-         td = null !== (kd = null !== (pd = Td(ud)) && void 0 !== pd ? pd : Td(rd)) && void 0 !== kd ? kd : yd[0],
+         nQ = null !== (wQ = null !== (LQ = XQ(EQ)) && void 0 !== LQ ? LQ : XQ(JQ)) && void 0 !== wQ ? wQ : jQ[0],
```

#### 394. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4100` → after: `L4100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4100) · [Before (L4100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4100)

```diff
-           QC: td.QC
+           Cm: nQ.Cm
```

#### 395. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4114` → after: `L4114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4114) · [Before (L4114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4114)

```diff
-         JJ = () => xd.current ? (0, nk.b)(xd.current) : null,
+         QF = () => cQ.current ? (0, zw.c)(cQ.current) : null,
```

#### 396. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4125` → after: `L4125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4125) · [Before (L4125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4125)

```diff
-         null !== Jd && void 0 !== Jd && Jd.press("primary") && !dd.EC && (null === (kd = Jd.release) || void 0 === kd || kd.call(Jd))
+         null !== FQ && void 0 !== FQ && FQ.press("primary") && !QQ.ym && (null === (wQ = FQ.release) || void 0 === wQ || wQ.call(FQ))
```

#### 397. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4130` → after: `L4130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4130) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4130)

```diff
-             QC: dd.QC
+             Cm: QQ.Cm
```

#### 398. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4134` → after: `L4134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4134) · [Before (L4134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4134)

```diff
-               Zd(Jd), (0, Nk.l)(xd.current)
+               kQ(FQ), (0, Lw.q)(cQ.current)
```

#### 399. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4140` → after: `L4140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4140) · [Before (L4140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4140)

```diff
-                 EC: !0,
+                 ym: !0,
```

#### 400. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4146` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4146) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4146)

```diff
-               kJ.current ? kJ.current.EC = !1 : null === (dd = JJ()) || void 0 === dd || null === (Jd = dd.release) || void 0 === Jd || Jd.call(dd)
+               FF.current ? FF.current.ym = !1 : null === (QQ = QF()) || void 0 === QQ || null === (FQ = QQ.release) || void 0 === FQ || FQ.call(QQ)
```

#### 401. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4155` → after: `L4155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4155) · [Before (L4155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4155)

```diff
-           (0, Nk.l)(null !== (dd = null === (Jd = vd.current) || void 0 === Jd || null === (kd = Jd.querySelector(".CraftableItems")) || void 0 === kd ? void 0 : kd.children[dJ]) && void 0 !== dd ? dd : null)
+           (0, Lw.q)(null !== (QQ = null === (FQ = pQ.current) || void 0 === FQ || null === (wQ = FQ.querySelector(".CraftableItems")) || void 0 === wQ ? void 0 : wQ.children[dQ]) && void 0 !== QQ ? QQ : null)
```

#### 402. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4160` → after: `L4160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4160) · [Before (L4160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4160)

```diff
-         gJ.current !== ZJ && (gJ.current = ZJ, Bd && dJ >= 0 && (0, Uk.f)() && PJ())
+         kF.current !== DF && (kF.current = DF, SQ && dQ >= 0 && (0, lw.h)() && oF())
```

#### 403. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4168` → after: `L4168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4168) · [Before (L4168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4168)

```diff
-           children: [(0, Kd.jsx)(fk.e, {
+           children: [(0, uQ.jsx)(Kw.b, {
```

#### 404. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4184` → after: `L4184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4184) · [Before (L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4184)

```diff
-               children: [(0, Kd.jsx)(Xk.b, {
+               children: [(0, uQ.jsx)(Tw.e, {
```

#### 405. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4189` → after: `L4189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4189) · [Before (L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4189)

```diff
-                     QC: kd,
+                     Cm: wQ,
```

#### 406. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4194` → after: `L4194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4194) · [Before (L4194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4194)

```diff
-                     QC: kd,
+                     Cm: wQ,
```

#### 407. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4202` → after: `L4202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4202) · [Before (L4202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4202)

```diff
-                     QC: kd,
+                     Cm: wQ,
```

#### 408. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4211` → after: `L4211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4211) · [Before (L4211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4211)

```diff
-                         QC: kd
+                         Cm: wQ
```

#### 409. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4245-L4248` → after: `L4245-L4248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4245-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4245-L4248) · [Before (L4245-L4248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4245-L4248)

```diff
-     var Zp = kd(9252),
-       gp = kd(3130),
-       Cp = kd(2079),
-       Kp = kd(8565);
+     var DL = wQ(9125),
+       kL = wQ(3149),
+       vL = wQ(2050),
+       mL = wQ(8414);
```

#### 410. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4251` → after: `L4251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4251) · [Before (L4251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4251)

```diff
-         this.commit = dd, this.delayMs = Jd, this.defers = kd, this.pending = null, this.timer = void 0, this.EC = !1, this.flush = () => {
+         this.commit = QQ, this.delayMs = FQ, this.defers = wQ, this.pending = null, this.timer = void 0, this.ym = !1, this.flush = () => {
```

#### 411. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4258` → after: `L4258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4258) · [Before (L4258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4258)

```diff
-         this.pending = dd, clearTimeout(this.timer), this.EC || this.defers() ? this.EC || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
+         this.pending = QQ, clearTimeout(this.timer), this.ym || this.defers() ? this.ym || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
```

#### 412. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4262` → after: `L4262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4262) · [Before (L4262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4262)

```diff
-         return null !== (Jd = this.pending) && void 0 !== Jd ? Jd : dd
+         return null !== (FQ = this.pending) && void 0 !== FQ ? FQ : QQ
```

#### 413. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4265` → after: `L4265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4265) · [Before (L4265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4265)

```diff
-         return this.EC
+         return this.ym
```

#### 414. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4268` → after: `L4268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4268) · [Before (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4268)

```diff
-         this.EC = dd, dd || this.flush()
+         this.ym = QQ, QQ || this.flush()
```

#### 415. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4273` → after: `L4273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4273) · [Before (L4273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4273)

```diff
-       return null === dd ? "creativeInventory:all" : `creativeInventory:${dd}`
+       return null === QQ ? "creativeInventory:all" : `creativeInventory:${QQ}`
```

#### 416. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4280` → after: `L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4280) · [Before (L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4280)

```diff
-       return null === Jd ? (0, Kd.jsx)(ed.e, {
+       return null === FQ ? (0, uQ.jsx)(tQ.c, {
```

#### 417. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4282` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4282) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4282)

```diff
-       }) : (0, Kd.jsx)(Pk.d, {
+       }) : (0, uQ.jsx)(ow.e, {
```

#### 418. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4302` → after: `L4302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4302) · [Before (L4302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4302)

```diff
-           (0, Kk.l)(dd) || Nd(!0, {
+           (0, mw.p)(QQ) || qQ(!0, {
```

#### 419. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4324` → after: `L4324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4324) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4324)

```diff
-       } = (0, zd.B)(), [Pd, Zd] = (0, Nd.useState)(!1), gd = (0, Nd.useRef)(null), Cd = (0, Nd.useCallback)((() => {
+       } = (0, PQ.y)(), [DQ, kQ] = (0, qQ.useState)(!1), vQ = (0, qQ.useRef)(null), mQ = (0, qQ.useCallback)((() => {
```

#### 420. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4327` → after: `L4327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4327) · [Before (L4327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4327)

```diff
-       return (0, Cp.e)(gd, Cd), (0, Kd.jsxs)("div", {
+       return (0, vL.d)(vQ, mQ), (0, uQ.jsxs)("div", {
```

#### 421. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4342` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4342) · [Before (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4342)

```diff
-           }), (0, Kd.jsx)(ed.e, {
+           }), (0, uQ.jsx)(tQ.c, {
```

#### 422. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4362` → after: `L4362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4362) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4362)

```diff
-           }, null !== dd && void 0 !== dd ? dd : "all")))
+           }, null !== QQ && void 0 !== QQ ? QQ : "all")))
```

#### 423. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4381` → after: `L4381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4381) · [Before (L4381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4381)

```diff
-       } = (0, zd.B)(), Od = (0, Md.k)("creativeVisibility"), {
+       } = (0, PQ.y)(), AQ = (0, RQ.k)("creativeVisibility"), {
```

#### 424. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4383` → after: `L4383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4383) · [Before (L4383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4383)

```diff
-       } = (0, qd.c)(), Id = (0, gd.j)("canUseDevCreativeItems"), Gd = Rd.playerHasRank("developer") || !!Id, vd = (0, Nd.useMemo)((() => Ip("", Od, Gd)), [Od, Gd]), xd = (0, Nd.useMemo)((() => {
+       } = (0, CQ.e)(), MQ = (0, vQ.l)("canUseDevCreativeItems"), GQ = eQ.playerHasRank("developer") || !!MQ, pQ = (0, qQ.useMemo)((() => eL("", AQ, GQ)), [AQ, GQ]), cQ = (0, qQ.useMemo)((() => {
```

#### 425. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4387` → after: `L4387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4387) · [Before (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4387)

```diff
-       }), [vd]), Bd = null !== od && xd.includes(od) ? od : null, ad = (0, Nd.useMemo)((() => "" === Zd ? vd : Ip(Zd, Od, Gd)), [vd, Zd, Od, Gd]), Fd = (0, Nd.useMemo)((() => {
+       }), [pQ]), SQ = null !== HQ && cQ.includes(HQ) ? HQ : null, WQ = (0, qQ.useMemo)((() => "" === kQ ? pQ : eL(kQ, AQ, GQ)), [pQ, kQ, AQ, GQ]), OQ = (0, qQ.useMemo)((() => {
```

#### 426. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4398` → after: `L4398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4398) · [Before (L4398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4398)

```diff
-         } = (0, Dd.j)(["isTouchScreen"]),
+         } = (0, aQ.l)(["isTouchScreen"]),
```

#### 427. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4437` → after: `L4437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4437) · [Before (L4437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4437)

```diff
-       (0, sd.h)(Kp.b, (dd => {
+       (0, iQ.g)(mL.c, (QQ => {
```

#### 428. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4440` → after: `L4440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4440) · [Before (L4440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4440)

```diff
-       const ud = (0, Kd.jsx)(fk.e, {
+       const EQ = (0, uQ.jsx)(Kw.b, {
```

#### 429. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4462` → after: `L4462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4462) · [Before (L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4462)

```diff
-               children: (0, Kd.jsx)(ed.e, {
+               children: (0, uQ.jsx)(tQ.c, {
```

#### 430. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4472` → after: `L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4472) · [Before (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4472)

```diff
-               children: (0, Kd.jsx)(ed.e, {
+               children: (0, uQ.jsx)(tQ.c, {
```

#### 431. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4482` → after: `L4482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4482) · [Before (L4482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4482)

```diff
-             }), (0, Kd.jsx)(Xk.b, {
+             }), (0, uQ.jsx)(Tw.e, {
```

#### 432. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4489` → after: `L4489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4489) · [Before (L4489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4489)

```diff
-                 return (0, Kd.jsx)(Fk.b, {
+                 return (0, uQ.jsx)(Ow.d, {
```

#### 433. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4507` → after: `L4507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4507) · [Before (L4507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4507)

```diff
-             "--rail-height": fd > 0 ? `${fd}px` : void 0,
+             "--rail-height": KQ > 0 ? `${KQ}px` : void 0,
```

#### 434. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4520` → after: `L4520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4520) · [Before (L4520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4520)

```diff
-           }, null !== dd && void 0 !== dd ? dd : "all")))
+           }, null !== QQ && void 0 !== QQ ? QQ : "all")))
```

#### 435. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4537` → after: `L4537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4537) · [Before (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4537)

```diff
-       return null !== (Jd = (0, gp.d)(dd)) && void 0 !== Jd ? Jd : ""
+       return null !== (FQ = (0, kL.e)(QQ)) && void 0 !== FQ ? FQ : ""
```

#### 436. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4567-L4568` → after: `L4567-L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4567-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4567-L4568) · [Before (L4567-L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4567-L4568)

```diff
-     var Gp = kd(37009),
-       vp = kd(610);
+     var ML = wQ(36458),
+       GL = wQ(619);
```

#### 437. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4571` → after: `L4571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4571) · [Before (L4571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4571)

```diff
-       return dd > vp.n
+       return QQ > GL.h
```

#### 438. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4592` → after: `L4592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4592) · [Before (L4592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4592)

```diff
-       } = (0, zd.B)(), Wd = (0, Nd.useRef)(null);
+       } = (0, PQ.y)(), oQ = (0, qQ.useRef)(null);
```

#### 439. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4623` → after: `L4623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4623) · [Before (L4623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4623)

```diff
-         zd: Jd,
+         VQ: FQ,
```

#### 440. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4628` → after: `L4628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4628) · [Before (L4628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4628)

```diff
-       } = (0, zd.B)(), [Wd, Pd] = (0, Nd.useState)(kd), [Zd, gd] = (0, Nd.useState)(kd);
+       } = (0, PQ.y)(), [oQ, DQ] = (0, qQ.useState)(wQ), [kQ, vQ] = (0, qQ.useState)(wQ);
```

#### 441. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4641` → after: `L4641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4641) · [Before (L4641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4641)

```diff
-           oK: Zd,
+           pu: kQ,
```

#### 442. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4647` → after: `L4647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4647) · [Before (L4647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4647)

```diff
-               oK: [...Zd]
+               pu: [...kQ]
```

#### 443. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4678` → after: `L4678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4678) · [Before (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4678)

```diff
-       } = (0, qd.c)(), {
+       } = (0, CQ.e)(), {
```

#### 444. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4680` → after: `L4680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4680) · [Before (L4680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4680)

```diff
-       } = (0, zd.B)(), sd = (0, Md.g)("inventory", (dd => dd.chest)), ad = (0, Md.g)("inventory", (dd => dd.player.length)), Fd = (0, Md.g)("inventory", (dd => dd.creative));
+       } = (0, PQ.y)(), iQ = (0, RQ.g)("inventory", (QQ => QQ.chest)), WQ = (0, RQ.g)("inventory", (QQ => QQ.player.length)), OQ = (0, RQ.g)("inventory", (QQ => QQ.creative));
```

#### 445. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4685` → after: `L4685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4685) · [Before (L4685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4685)

```diff
-           return (0, Kd.jsx)(Fk.b, {
+           return (0, uQ.jsx)(Ow.d, {
```

#### 446. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4694` → after: `L4694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4694) · [Before (L4694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4694)

```diff
-         Sd = sd ? (0, Gp.b)(sd.type) : null;
+         UQ = iQ ? (0, ML.d)(iQ.type) : null;
```

#### 447. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4698` → after: `L4698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4698) · [Before (L4698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4698)

```diff
-           zd: sd.pos,
+           VQ: iQ.pos,
```

#### 448. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4707` → after: `L4707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4707) · [Before (L4707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4707)

```diff
-         "Iron" === Jd && (kd = sd.ironChest.ownerDbId === xd.whamm, pd = sd.ironChest.oK), Yd = `InvenLeftSideChest${Jd}`;
+         "Iron" === FQ && (wQ = iQ.ironChest.ownerDbId === cQ.whamm, LQ = iQ.ironChest.pu), sQ = `InvenLeftSideChest${FQ}`;
```

#### 449. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4712)

```diff
-             zd: dd,
+             VQ: QQ,
```

#### 450. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4729` → after: `L4729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4729) · [Before (L4729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4729)

```diff
-         if (kd && "Enchanting Table" === Jd) Yd = `InvenLeftSide${(null!==ld&&void 0!==ld?ld:"").replace(/ /gi,"")}`, md = (0, Kd.jsx)(Yk, {
+         if (wQ && "Enchanting Table" === FQ) sQ = `InvenLeftSide${(null!==bQ&&void 0!==bQ?bQ:"").replace(/ /gi,"")}`, rQ = (0, uQ.jsx)(sw, {
```

#### 451. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4732-L4733` → after: `L4732-L4733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4732-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4732-L4733) · [Before (L4732-L4733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4732-L4733)

```diff
-           pointerDown: gd(Qk.g),
-           pointerUp: Cd(Qk.g),
+           pointerDown: vQ(Hw.d),
+           pointerUp: mQ(Hw.d),
```

#### 452. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4743-L4744` → after: `L4743-L4744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4743-L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4743-L4744) · [Before (L4743-L4744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4743-L4744)

```diff
-         pointerDown: gd(Qk.g),
-         pointerUp: Cd(Qk.g)
+         pointerDown: vQ(Hw.d),
+         pointerUp: mQ(Hw.d)
```

#### 453. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4748` → after: `L4748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4748) · [Before (L4748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4748)

```diff
-         Yd = `InvenLeftSide${(null!==Jd&&void 0!==Jd?Jd:"HandCrafting").replace(/ /gi,"")}`, md = (0, Kd.jsx)(Pp, {
+         sQ = `InvenLeftSide${(null!==FQ&&void 0!==FQ?FQ:"HandCrafting").replace(/ /gi,"")}`, rQ = (0, uQ.jsx)(oL, {
```

#### 454. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4770` → after: `L4770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4770) · [Before (L4770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4770)

```diff
-         className: `InvenLeftSide ${Yd}`,
+         className: `InvenLeftSide ${sQ}`,
```

#### 455. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4775-L4778` → after: `L4775-L4778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4775-L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4775-L4778) · [Before (L4775-L4778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4775-L4778)

```diff
-     var ap = kd(597),
-       Mp = kd(20493),
-       Fp = kd(20502),
-       Yp = kd(20506);
+     var WL = wQ(609),
+       RL = wQ(20052),
+       OL = wQ(20061),
+       sL = wQ(20066);
```

#### 456. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4782` → after: `L4782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4782) · [Before (L4782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4782)

```diff
-         image: kd(20510)
+         image: wQ(20071)
```

#### 457. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4794` → after: `L4794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4794) · [Before (L4794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4794)

```diff
-         image: kd(20518)
+         image: wQ(20077)
```

#### 458. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4807` → after: `L4807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4807) · [Before (L4807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4807)

```diff
-       return uJ(Jd, cJ.h.ITEM, kd)
+       return EF(FQ, VF.i.ITEM, wQ)
```

#### 459. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4829` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4829) · [Before (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4829)

```diff
-             return (0, Kd.jsx)(Fk.b, {
+             return (0, uQ.jsx)(Ow.d, {
```

#### 460. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4833` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4833) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4833)

```diff
-               craftFlyHoldbackInfo: (0, lk.g)(pd, Qd),
+               craftFlyHoldbackInfo: (0, uw.j)(LQ, YQ),
```

#### 461. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4838` → after: `L4838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4838) · [Before (L4838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4838)

```diff
-               variation: gd ? Zd : void 0,
+               variation: vQ ? kQ : void 0,
```

#### 462. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4846` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4846) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4846)

```diff
-             return (0, Kd.jsx)(Fk.b, {
+             return (0, uQ.jsx)(Ow.d, {
```

#### 463. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4850` → after: `L4850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4850) · [Before (L4850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4850)

```diff
-               craftFlyHoldbackInfo: (0, lk.g)(pd, Qd),
+               craftFlyHoldbackInfo: (0, uw.j)(LQ, YQ),
```

#### 464. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4854` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4854) · [Before (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4854)

```diff
-               variation: gd ? Zd : void 0,
+               variation: vQ ? kQ : void 0,
```

#### 465. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4861-L4862` → after: `L4861-L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4861-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4861-L4862) · [Before (L4861-L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4861-L4862)

```diff
-     var jp = kd(37011),
-       Xp = kd(37015);
+     var NL = wQ(36463),
+       TL = wQ(36468);
```

#### 466. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4868` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4868) · [Before (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4868)

```diff
-       } = dd, pd = (0, Kk.f)(dd.readInventory(), kd), Nd = (0, Kk.i)(Jd);
+       } = QQ, LQ = (0, mw.m)(QQ.readInventory(), wQ), qQ = (0, mw.o)(FQ);
```

#### 467. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4880` → after: `L4880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4880) · [Before (L4880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4880)

```diff
-       }(dd, Nd) : kd === Qk.g ? function(dd, Jd) {
+       }(QQ, qQ) : wQ === Hw.d ? function(QQ, FQ) {
```

#### 468. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4889` → after: `L4889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4889) · [Before (L4889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4889)

```diff
-         else if (pd.current && Nd.current && (pd.current.idx === Nd.current.idx || (0, Xp.d)(pd.current, Nd.current)) && pd.current.amount > 0 && Nd.current.amount > 0 && Nd.current.amount < qk.g.maxItemStackSize)
+         else if (LQ.current && qQ.current && (LQ.current.idx === qQ.current.idx || (0, TL.e)(LQ.current, qQ.current)) && LQ.current.amount > 0 && qQ.current.amount > 0 && qQ.current.amount < pw.e.maxItemStackSize)
```

#### 469. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4892` → after: `L4892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4892) · [Before (L4892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4892)

```diff
-               const dd = Math.min(pd.current.amount, qk.g.maxItemStackSize - Nd.current.amount);
+               const QQ = Math.min(LQ.current.amount, pw.e.maxItemStackSize - qQ.current.amount);
```

#### 470. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4897` → after: `L4897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4897) · [Before (L4897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4897)

```diff
-           const dd = Math.min(pd.current.amount, qk.g.maxItemStackSize - Nd.current.amount);
+           const QQ = Math.min(LQ.current.amount, pw.e.maxItemStackSize - qQ.current.amount);
```

#### 471. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4933` → after: `L4933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4933) · [Before (L4933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4933)

```diff
-               const kd = (0, Kk.f)(ld, dd);
+               const wQ = (0, mw.m)(bQ, QQ);
```

#### 472. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4936` → after: `L4936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4936) · [Before (L4936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4936)

```diff
-                 stacksWithMoved: (0, Xp.d)(kd, Jd)
+                 stacksWithMoved: (0, TL.e)(wQ, FQ)
```

#### 473. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4964` → after: `L4964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4964) · [Before (L4964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4964)

```diff
-               })(dd, 10, Od, od, qk.g.maxItemStackSize)) Kd(Jd.start, Jd.end, Nd, Jd.amount)
+               })(QQ, 10, AQ, HQ, pw.e.maxItemStackSize)) uQ(FQ.start, FQ.end, qQ, FQ.amount)
```

#### 474. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4967-L4969` → after: `L4967-L4969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4967-L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4967-L4969) · [Before (L4967-L4969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4967-L4969)

```diff
-           const kd = (0, ad.Eb)(Jd.name),
-             pd = kd ? (0, ad.Cb)(kd) : null;
-           if (!ap.c.includes(kd) || Nd !== pd && (0, Kk.g)(ld, dd.itemInfo, pd, Nd))
+           const wQ = (0, WQ.Cb)(FQ.name),
+             LQ = wQ ? (0, WQ.Bb)(wQ) : null;
+           if (!WL.c.includes(wQ) || qQ !== LQ && (0, mw.n)(bQ, QQ.itemInfo, LQ, qQ))
```

#### 475. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4973` → after: `L4973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4973) · [Before (L4973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4973)

```diff
-                 const [dd, Jd] = null !== (Rd = null === (Id = (0, Gp.b)(Ld.type)) || void 0 === Id ? void 0 : Id.quickMoveRange) && void 0 !== Rd ? Rd : [0, Ld.numSlots];
+                 const [QQ, FQ] = null !== (eQ = null === (MQ = (0, ML.d)(xQ.type)) || void 0 === MQ ? void 0 : MQ.quickMoveRange) && void 0 !== eQ ? eQ : [0, xQ.numSlots];
```

#### 476. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4976` → after: `L4976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4976) · [Before (L4976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4976)

```diff
-           else ld.creative ? Nd < 10 ? ed() : Nd < Qd ? Kd(0, 10, Nd, od) : Kd(0, Qd - ap.c.length, Nd, null !== Jd.amount ? qk.g.maxItemStackSize : null) : Nd < 10 ? ed() : Kd(0, 10, Nd, od);
+           else bQ.creative ? qQ < 10 ? tQ() : qQ < YQ ? uQ(0, 10, qQ, HQ) : uQ(0, YQ - WL.c.length, qQ, null !== FQ.amount ? pw.e.maxItemStackSize : null) : qQ < 10 ? tQ() : uQ(0, 10, qQ, HQ);
```

#### 477. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4982` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4982) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4982)

```diff
-           amount: null !== Jd.amount ? od : 0
+           amount: null !== FQ.amount ? HQ : 0
```

#### 478. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L4993` → after: `L4993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R4993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L4993) · [Before (L4993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L4993)

```diff
-         if (kd && (Jd === od || (0, Xp.d)(Nd.current, kd)) && Nd.current.amount > 0 && (0, Kk.b)(kd) > 0 && (kd.amount < qk.g.maxItemStackSize || Jd === od)) pd ? kd.amount + Nd.current.amount <= qk.g.maxItemStackSize || Jd === od ? Pd(Jd, Nd.current.amount) : Pd(Jd, qk.g.maxItem … [truncated]
+         if (wQ && (FQ === HQ || (0, TL.e)(qQ.current, wQ)) && qQ.current.amount > 0 && (0, mw.c)(wQ) > 0 && (wQ.amount < pw.e.maxItemStackSize || FQ === HQ)) LQ ? wQ.amount + qQ.current.amount <= pw.e.maxItemStackSize || FQ === HQ ? DQ(FQ, qQ.current.amount) : DQ(FQ, pw.e.maxItem … [truncated]
```

#### 479. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5004` → after: `L5004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5004) · [Before (L5004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5004)

```diff
-                 Pd = (0, Kk.f)(pd, od),
+                 DQ = (0, mw.m)(LQ, HQ),
```

#### 480. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5007)

```diff
-                 let dd = (0, Kk.b)(Pd);
+                 let QQ = (0, mw.c)(DQ);
```

#### 481. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5025` → after: `L5025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5025) · [Before (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5025)

```diff
-         let Zd = (0, Kk.b)(kd);
+         let kQ = (0, mw.c)(wQ);
```

#### 482. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5055` → after: `L5055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5055) · [Before (L5055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5055)

```diff
-       return (0, Kk.e)(dd, Cd.gameBridge.latest("itemInfo"), Cd.gameBridge.latest("stationItems").enchantable)
+       return (0, mw.j)(QQ, mQ.gameBridge.latest("itemInfo"), mQ.gameBridge.latest("stationItems").enchantable)
```

#### 483. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5073` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5073) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5073)

```diff
-         Zd((kd => kd.map((kd => "ingredient" === kd.kind ? kd : kd.wg === dd ? {
+         kQ((wQ => wQ.map((wQ => "ingredient" === wQ.kind ? wQ : wQ.wm === QQ ? {
```

#### 484. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5075-L5077` → after: `L5075-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5075-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5075-L5077) · [Before (L5075-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5075-L5077)

```diff
-           wg: Jd,
-           to: (0, Kk.c)(Jd)
-         } : kd.wg === Jd ? {
+           wm: FQ,
+           to: (0, mw.f)(FQ)
+         } : wQ.wm === FQ ? {
```

#### 485. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5079-L5080` → after: `L5079-L5080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5079-L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5079-L5080) · [Before (L5079-L5080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5079-L5080)

```diff
-           wg: dd,
-           to: (0, Kk.c)(dd)
+           wm: QQ,
+           to: (0, mw.f)(QQ)
```

#### 486. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5084` → after: `L5084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5084) · [Before (L5084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5084)

```diff
-         if (kd.x = dd, kd.y = Jd, Od.current) !Dd.current.isTouch || Dd.current.itemBeingDragged && !fd.current ? (Od.current.style.transform = `translate(${kd.x}px, ${kd.y}px)`, Ld(Dd.current.isTouch && !fd.current)) : (Od.current.style.transform = "translate(0.5rem, 0.5rem)", L … [truncated]
+         if (wQ.x = QQ, wQ.y = FQ, AQ.current) !aQ.current.isTouch || aQ.current.itemBeingDragged && !KQ.current ? (AQ.current.style.transform = `translate(${wQ.x}px, ${wQ.y}px)`, xQ(aQ.current.isTouch && !KQ.current)) : (AQ.current.style.transform = "translate(0.5rem, 0.5rem)", x … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5091` → after: `L5091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5091) · [Before (L5091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5091)

```diff
-           pd + Wd > window.innerWidth && (pd = dd - Wd - 10), Nd + Pd > window.innerHeight && (Nd = Jd - Pd - 10), pd < 0 && (pd = 0), Nd < 0 && (Nd = 0), Id.current.style.transform = `translate(${pd}px, ${Nd}px)`
+           LQ + oQ > window.innerWidth && (LQ = QQ - oQ - 10), qQ + DQ > window.innerHeight && (qQ = FQ - DQ - 10), LQ < 0 && (LQ = 0), qQ < 0 && (qQ = 0), MQ.current.style.transform = `translate(${LQ}px, ${qQ}px)`
```

#### 488. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5094-L5095` → after: `L5094-L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5094-L5095) · [Before (L5094-L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5094-L5095)

```diff
-         if (Kd(Jd && void 0 !== dd ? dd : null), Jd) {
-           if (void 0 === dd && !kd) return void(0, jp.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
+         if (uQ(FQ && void 0 !== QQ ? QQ : null), FQ) {
+           if (void 0 === QQ && !wQ) return void(0, NL.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
```

#### 489. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5100` → after: `L5100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5100) · [Before (L5100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5100)

```diff
-             if (kd = dd === Qk.g ? Rd.current ? (0, Kk.f)(Jd, Rd.current.idx) : null : (0, Kk.f)(Jd, dd), !kd) return void ld(null);
+             if (wQ = QQ === Hw.d ? eQ.current ? (0, mw.m)(FQ, eQ.current.idx) : null : (0, mw.m)(FQ, QQ), !wQ) return void bQ(null);
```

#### 490. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5102` → after: `L5102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5102) · [Before (L5102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5102)

```diff
-               if (0 === (0, Kk.b)(kd) - Rd.current.amount) return void ld(null)
+               if (0 === (0, mw.c)(wQ) - eQ.current.amount) return void bQ(null)
```

#### 491. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5125` → after: `L5125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5125) · [Before (L5125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5125)

```diff
-           return dd === Jd ? kd : dd === kd ? Jd : dd
+           return QQ === FQ ? wQ : QQ === wQ ? FQ : QQ
```

#### 492. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5144)

```diff
-           return !(!Jd || pd < 0 || pd >= ap.c.length) && (0, ad.Eb)(Jd) !== ap.c[pd]
+           return !(!FQ || LQ < 0 || LQ >= WL.c.length) && (0, WQ.Cb)(FQ) !== WL.c[LQ]
```

#### 493. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5173)

```diff
-           Dd.current.isTouch = (0, Kk.l)(dd)
+           aQ.current.isTouch = (0, mw.p)(QQ)
```

#### 494. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5176` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5176) · [Before (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5176)

```diff
-           const pd = (0, Kk.l)(Jd);
+           const LQ = (0, mw.p)(FQ);
```

#### 495. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5182` → after: `L5182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5182) · [Before (L5182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5182)

```diff
-                 const kd = (0, Kk.f)(Up(), dd);
+                 const wQ = (0, mw.m)(lL(), QQ);
```

#### 496. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5191` → after: `L5191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5191) · [Before (L5191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5191)

```diff
-                         kd = dd.creative && !dd.chest && ed.current.idx >= qk.g.numInvenSlots && null !== (0, Kk.f)(dd, ed.current.idx).amount ? qk.g.maxItemStackSize : ed.current.amount;
+                         wQ = QQ.creative && !QQ.chest && tQ.current.idx >= pw.e.numInvenSlots && null !== (0, mw.m)(QQ, tQ.current.idx).amount ? pw.e.maxItemStackSize : tQ.current.amount;
```

#### 497. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5203` → after: `L5203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5203) · [Before (L5203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5203)

```diff
-           else dd === Qk.c && (0, Kk.i)(Jd) && kd()
+           else QQ === Hw.c && (0, mw.o)(FQ) && wQ()
```

#### 498. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5207` → after: `L5207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5207) · [Before (L5207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5207)

```diff
-           const Jd = (0, Kk.l)(dd);
+           const FQ = (0, mw.p)(QQ);
```

#### 499. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5253` → after: `L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5253) · [Before (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5253)

```diff
-             const dd = (0, Kk.f)(Up(), ed.current.idx);
+             const QQ = (0, mw.m)(lL(), tQ.current.idx);
```

#### 500. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5260` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5260) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5260)

```diff
-             const Jd = (0, Kk.f)(Up(), dd.idx);
+             const FQ = (0, mw.m)(lL(), QQ.idx);
```

#### 501. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5294)

```diff
-             amount: null !== (Jd = dd.amount) && void 0 !== Jd ? Jd : 1
+             amount: null !== (FQ = QQ.amount) && void 0 !== FQ ? FQ : 1
```

#### 502. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5349` → after: `L5349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5349) · [Before (L5349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5349)

```diff
-           const [Jd, kd] = (0, Nd.useState)(!0), [pd, Wd] = (0, Nd.useState)(!1), Pd = (0, Nd.useRef)(null), Zd = (0, Nd.useRef)(null), Cd = (0, gd.j)("_shield"), Kd = (0, Nd.useRef)(null), od = (0, gd.j)("_health"), ld = (0, Nd.useRef)(null);
+           const [FQ, wQ] = (0, qQ.useState)(!0), [LQ, oQ] = (0, qQ.useState)(!1), DQ = (0, qQ.useRef)(null), kQ = (0, qQ.useRef)(null), mQ = (0, vQ.l)("_shield"), uQ = (0, qQ.useRef)(null), HQ = (0, vQ.l)("_health"), bQ = (0, qQ.useRef)(null);
```

#### 503. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5359` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5359) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5359)

```diff
-             const dd = Ld.j.subscribe("requestingPlayVideoAd", (() => {
+             const QQ = xQ.l.subscribe("requestingPlayVideoAd", (() => {
```

#### 504. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5363` → after: `L5363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5363) · [Before (L5363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5363)

```diff
-               clearTimeout(Pd.current), Ld.j.unsubscribe(dd)
+               clearTimeout(DQ.current), xQ.l.unsubscribe(QQ)
```

#### 505. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5376` → after: `L5376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5376) · [Before (L5376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5376)

```diff
-       (0, sd.i)(pk.e, null);
+       (0, iQ.i)(ww.c, null);
```

#### 506. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5391-L5392` → after: `L5391-L5392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5391-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5391-L5392) · [Before (L5391-L5392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5391-L5392)

```diff
-         md = (0, gd.j)("inventoryItemsMoveable"),
-         bd = (0, gd.j)("canCraft"),
+         rQ = (0, vQ.l)("inventoryItemsMoveable"),
+         IQ = (0, vQ.l)("canCraft"),
```

#### 507. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5395` → after: `L5395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5395) · [Before (L5395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5395)

```diff
-         } = (0, Dd.j)(["clientEscMenuOptions"]),
+         } = (0, aQ.l)(["clientEscMenuOptions"]),
```

#### 508. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5436` → after: `L5436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5436) · [Before (L5436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5436)

```diff
-       const pJ = (0, mJ.o)();
+       const wF = (0, rF.n)();
```

#### 509. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5442` → after: `L5442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5442) · [Before (L5442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5442)

```diff
-         (fd.update(Jd, !kd && pJ.shown), yd.current) && (yd.current = (Nd = yd.current, Wd = null !== (pd = Jd[yd.current.idx]) && void 0 !== pd ? pd : null, np(Nd, Wd) ? (Nd.attributes = Wd.attributes, null !== Wd.amount && Nd.amount > Wd.amount && (Nd.amount = Wd.amount), Nd) : … [truncated]
+         (KQ.update(FQ, !wQ && wF.shown), jQ.current) && (jQ.current = (qQ = jQ.current, oQ = null !== (LQ = FQ[jQ.current.idx]) && void 0 !== LQ ? LQ : null, zL(qQ, oQ) ? (qQ.attributes = oQ.attributes, null !== oQ.amount && qQ.amount > oQ.amount && (qQ.amount = oQ.amount), qQ) : … [truncated]
```

#### 510. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5448` → after: `L5448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5448) · [Before (L5448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5448)

```diff
-         if (dd === Qk.g) return void(dd => {
+         if (QQ === Hw.d) return void(QQ => {
```

#### 511. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5450` → after: `L5450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5450) · [Before (L5450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5450)

```diff
-           if (!Jd || null === (0, Kk.f)(Cd.gameBridge.latest("inventory"), Jd.idx)) return;
+           if (!FQ || null === (0, mw.m)(mQ.gameBridge.latest("inventory"), FQ.idx)) return;
```

#### 512. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5461` → after: `L5461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5461) · [Before (L5461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5461)

```diff
-         const kd = null === dd ? null : (0, Kk.f)(Cd.gameBridge.latest("inventory"), dd);
+         const wQ = null === QQ ? null : (0, mw.m)(mQ.gameBridge.latest("inventory"), QQ);
```

#### 513. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5464` → after: `L5464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5464) · [Before (L5464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5464)

```diff
-           const Pd = Jd && null !== (pd = kd.amount) && void 0 !== pd ? pd : 1;
+           const DQ = FQ && null !== (LQ = wQ.amount) && void 0 !== LQ ? LQ : 1;
```

#### 514. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5473` → after: `L5473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5473) · [Before (L5473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5473)

```diff
-         kd && cd !== Qk.g && NJ(cd, dd)
+         wQ && VQ !== Hw.d && LF(VQ, QQ)
```

#### 515. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5477` → after: `L5477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5477) · [Before (L5477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5477)

```diff
-         if (Jd === Qk.g) {
+         if (FQ === Hw.d) {
```

#### 516. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5482-L5483` → after: `L5482-L5483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5482-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5482-L5483) · [Before (L5482-L5483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5482-L5483)

```diff
-         if (pd && Ud.current && (Ud.current.idx === kd ? Ud.current.idx = dd : Ud.current.idx === dd && (Ud.current.idx = kd)), pd && Jd === Qk.g) {
-           const dd = (0, Kk.f)(Cd.gameBridge.latest("inventory"), kd);
+         if (LQ && lQ.current && (lQ.current.idx === wQ ? lQ.current.idx = QQ : lQ.current.idx === QQ && (lQ.current.idx = wQ)), LQ && FQ === Hw.d) {
+           const QQ = (0, mw.m)(mQ.gameBridge.latest("inventory"), wQ);
```

#### 517. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5500` → after: `L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5500) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5500)

```diff
-         cd === Qk.g && dJ(Qk.g)(!0)
+         VQ === Hw.d && dQ(Hw.d)(!0)
```

#### 518. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5506)

```diff
-       const [gJ, CJ] = (0, Nd.useState)(new Map), KJ = null !== (Jd = gJ.get(Zd)) && void 0 !== Jd ? Jd : null, oJ = (dd, Jd) => {
+       const [kF, vF] = (0, qQ.useState)(new Map), mF = null !== (FQ = kF.get(kQ)) && void 0 !== FQ ? FQ : null, uF = (QQ, FQ) => {
```

#### 519. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5509` → after: `L5509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5509) · [Before (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5509)

```diff
-           return pd && pd.name === Jd.name && pd.QC === Jd.QC ? kd : new Map(kd).set(dd, Jd)
+           return LQ && LQ.name === FQ.name && LQ.Cm === FQ.Cm ? wQ : new Map(wQ).set(QQ, FQ)
```

#### 520. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5512` → after: `L5512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5512) · [Before (L5512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5512)

```diff
-       (0, sd.h)("craftingRecipesEdited", (() => {
+       (0, iQ.g)("craftingRecipesEdited", (() => {
```

#### 521. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5514` → after: `L5514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5514) · [Before (L5514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5514)

```diff
-       })), (0, sd.h)(uk.b, (dd => {
+       })), (0, iQ.g)(Ew.d, (QQ => {
```

#### 522. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5521` → after: `L5521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5521) · [Before (L5521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5521)

```diff
-           QC: 0
+           Cm: 0
```

#### 523. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5575-L5577` → after: `L5575-L5577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5575-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5575-L5577) · [Before (L5575-L5577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5575-L5577)

```diff
-                 if (dd === Qk.g) return !!pd.current;
-                 const Nd = (0, Kk.f)(Cd.gameBridge.latest("inventory"), dd);
-                 return !!Nd && (0, Fk.d)(dd, (0, Kk.b)(Nd), [kd.current, pd.current]).shown
+                 if (QQ === Hw.d) return !!LQ.current;
+                 const qQ = (0, mw.m)(mQ.gameBridge.latest("inventory"), QQ);
+                 return !!qQ && (0, Ow.e)(QQ, (0, mw.c)(qQ), [wQ.current, LQ.current]).shown
```

#### 524. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5584` → after: `L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5584) · [Before (L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5584)

```diff
-                 pd(kd.clientX, kd.clientY), Nd(null !== dd && void 0 !== dd ? dd : void 0)(null !== dd, void 0, {
+                 LQ(wQ.clientX, wQ.clientY), qQ(null !== QQ && void 0 !== QQ ? QQ : void 0)(null !== QQ, void 0, {
```

#### 525. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5596` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5596) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5596)

```diff
-           return (0, Nk.k)(pd)
+           return (0, Lw.o)(LQ)
```

#### 526. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5611` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5611) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5611)

```diff
-         Ld.j.nO("inventoryDraggedItemUpdated", {
+         xQ.l.GA("inventoryDraggedItemUpdated", {
```

#### 527. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5617` → after: `L5617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5617) · [Before (L5617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5617)

```diff
-           variation: bd ? Zd : void 0,
+           variation: IQ ? kQ : void 0,
```

#### 528. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5638` → after: `L5638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5638) · [Before (L5638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5638)

```diff
-         }), vd.map((dd => (0, Kd.jsx)(lk.d, {
+         }), pQ.map((QQ => (0, uQ.jsx)(uw.e, {
```

#### 529. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5641` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5641) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5641)

```diff
-         }, dd.id))), (0, Kd.jsx)(Pd.e, {
+         }, QQ.id))), (0, uQ.jsx)(DQ.d, {
```

#### 530. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5657` → after: `L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5657) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5657)

```diff
-             children: (0, Kd.jsx)(Ck.b, {
+             children: (0, uQ.jsx)(vw.c, {
```

#### 531. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5713` → after: `L5713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5713) · [Before (L5713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5713)

```diff
-                           id: (0, lk.f)(),
+                           id: (0, uw.g)(),
```

#### 532. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5718` → after: `L5718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5718) · [Before (L5718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5718)

```diff
-                           id: (0, lk.f)(),
+                           id: (0, uw.g)(),
```

#### 533. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5720` → after: `L5720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5720) · [Before (L5720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5720)

```diff
-                           to: (0, Kk.c)(dd.wg)
+                           to: (0, mw.f)(QQ.wm)
```

#### 534. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5725` → after: `L5725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5725) · [Before (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5725)

```diff
-                       (0, ad.Eb)(null === (pd = (0, Kk.f)(dd, Jd)) || void 0 === pd ? void 0 : pd.name) ? wd(Jd)({
+                       (0, WQ.Cb)(null === (LQ = (0, mw.m)(QQ, FQ)) || void 0 === LQ ? void 0 : LQ.name) ? yQ(FQ)({
```

#### 535. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5757-L5758` → after: `L5757-L5758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5757-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5757-L5758) · [Before (L5757-L5758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5757-L5758)

```diff
-     var tp = kd(1453),
-       Vp = kd(126);
+     var EL = wQ(1440),
+       nL = wQ(134);
```

#### 536. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5766` → after: `L5766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5766) · [Before (L5766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5766)

```diff
-         Zd = () => (0, tp.i)() && !(0, tp.r)() && Wd.current <= 2;
+         kQ = () => (0, EL.j)() && !(0, EL.p)() && oQ.current <= 2;
```

#### 537. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5771` → after: `L5771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5771) · [Before (L5771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5771)

```diff
-       (0, sd.h)("ctrlCrouchWithoutFullscreen", (() => {
+       (0, iQ.g)("ctrlCrouchWithoutFullscreen", (() => {
```

#### 538. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5773` → after: `L5773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5773) · [Before (L5773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5773)

```diff
-       })), (0, sd.h)("displaymodeFullscreenChange", (dd => {
+       })), (0, iQ.g)("displaymodeFullscreenChange", (QQ => {
```

#### 539. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5776-L5777` → after: `L5776-L5777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5776-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5776-L5777) · [Before (L5776-L5777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5776-L5777)

```diff
-       const Cd = "crazygames" === Vp.t;
-       return (0, Kd.jsx)(Pd.e, {
+       const mQ = "crazygames" === nL.r;
+       return (0, uQ.jsx)(DQ.d, {
```

#### 540. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5796` → after: `L5796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5796) · [Before (L5796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5796)

```diff
-             children: [!Cd && (0, Kd.jsx)(Qd.j, {
+             children: [!mQ && (0, uQ.jsx)(YQ.m, {
```

#### 541. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5799` → after: `L5799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5799) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5799)

```diff
-                 (0, tp.u)(), gd()
+                 (0, EL.v)(), vQ()
```

#### 542. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5805` → after: `L5805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5805) · [Before (L5805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5805)

```diff
-             }), (0, Kd.jsx)(Qd.B, {
+             }), (0, uQ.jsx)(YQ.F, {
```

#### 543. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5819-L5821` → after: `L5819-L5821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5819-L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5819-L5821) · [Before (L5819-L5821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5819-L5821)

```diff
-     var Hp = kd(3487),
-       wp = kd(3511),
-       Ap = kd(1371),
+     var PL = wQ(3484),
+       ZL = wQ(3505),
+       yL = wQ(1362),
```

#### 544. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5823-L5826` → after: `L5823-L5826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5823-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5823-L5826) · [Before (L5823-L5826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5823-L5826)

```diff
-       JN = kd(1380),
-       kN = kd(36720),
-       pN = kd(3473),
-       NN = kd(3478);
+       dL = wQ(1365),
+       Qq = wQ(36185),
+       Fq = wQ(3470),
+       wq = wQ(3479);
```

#### 545. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5831` → after: `L5831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5831) · [Before (L5831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5831)

```diff
-           await dN.d.refresh();
+           await BL.c.refresh();
```

#### 546. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5835` → after: `L5835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5835) · [Before (L5835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5835)

```diff
-           } = dN.d.getState();
+           } = BL.c.getState();
```

#### 547. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5837` → after: `L5837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5837) · [Before (L5837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5837)

```diff
-           const pd = dN.d.getExclusion(dd);
+           const LQ = BL.c.getExclusion(QQ);
```

#### 548. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5843` → after: `L5843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5843) · [Before (L5843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5843)

```diff
-                 text: pN.j[kd].text,
+                 text: Fq.f[wQ].text,
```

#### 549. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5845` → after: `L5845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5845) · [Before (L5845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5845)

```diff
-                   Jd(), (0, NN.e)(kd, dd, null)
+                   FQ(), (0, wq.f)(wQ, QQ, null)
```

#### 550. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5848` → after: `L5848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5848) · [Before (L5848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5848)

```diff
-               return (0, Kd.jsx)(JN.i, {
+               return (0, uQ.jsx)(dL.j, {
```

#### 551. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5882` → after: `L5882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5882) · [Before (L5882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5882)

```diff
-             WC: dd,
+             Hm: QQ,
```

#### 552. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5888` → after: `L5888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5888) · [Before (L5888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5888)

```diff
-         shownPlayerName: (0, kJ.e)(Wd, ed),
+         shownPlayerName: (0, FF.f)(oQ, tQ),
```

#### 553. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5890` → after: `L5890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5890) · [Before (L5890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5890)

```diff
-           pd(), (0, wp.c)({
+           LQ(), (0, ZL.b)({
```

#### 554. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5900` → after: `L5900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5900) · [Before (L5900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5900)

```diff
-       return (0, sd.h)("OpenReportMenu", (dd => {
+       return (0, iQ.g)("OpenReportMenu", (QQ => {
```

#### 555. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5904` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5904) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5904)

```diff
-           IC: Nd,
+           Om: qQ,
```

#### 556. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5908` → after: `L5908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5908) · [Before (L5908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5908)

```diff
-       })), (0, Kd.jsx)(Pd.e, {
+       })), (0, uQ.jsx)(DQ.d, {
```

#### 557. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5919` → after: `L5919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5919) · [Before (L5919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5919)

```diff
-             reported: null === gd ? Rd : Id,
+             reported: null === vQ ? eQ : MQ,
```

#### 558. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5927` → after: `L5927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5927) · [Before (L5927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5927)

```diff
-     var ZN = kd(37023);
+     var oq = wQ(36470);
```

#### 559. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5936-L5937` → after: `L5936-L5937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5936-L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5936-L5937) · [Before (L5936-L5937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5936-L5937)

```diff
-       } = (0, zd.B)(), [Zd, gd] = (0, Nd.useState)(null), [od, ld] = (0, Nd.useState)(0);
-       (0, sd.h)("OpenDiscordReportBox", (dd => {
+       } = (0, PQ.y)(), [kQ, vQ] = (0, qQ.useState)(null), [HQ, bQ] = (0, qQ.useState)(0);
+       (0, iQ.g)("OpenDiscordReportBox", (QQ => {
```

#### 560. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5943` → after: `L5943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5943) · [Before (L5943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5943)

```diff
-       return (0, sd.h)("setDiscordReportKey", (dd => {
+       return (0, iQ.g)("setDiscordReportKey", (QQ => {
```

#### 561. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5945` → after: `L5945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5945) · [Before (L5945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5945)

```diff
-       })), (0, Kd.jsx)(Pd.e, {
+       })), (0, uQ.jsx)(DQ.d, {
```

#### 562. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5955` → after: `L5955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5955) · [Before (L5955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5955)

```diff
-           children: (0, Kd.jsx)(JN.i, {
+           children: (0, uQ.jsx)(dL.j, {
```

#### 563. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5975-L5976` → after: `L5975-L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5975-L5976) · [Before (L5975-L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5975-L5976)

```diff
-                 children: null !== Zd && void 0 !== Zd ? Zd : Wd("report:loadingReportKey")
-               }), (0, Kd.jsx)(Qd.d, {
+                 children: null !== kQ && void 0 !== kQ ? kQ : oQ("report:loadingReportKey")
+               }), (0, uQ.jsx)(YQ.f, {
```

#### 564. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L5991` → after: `L5991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R5991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L5991) · [Before (L5991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L5991)

```diff
-     var CN = kd(1307);
+     var kq = wQ(1302);
```

#### 565. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6064-L6065` → after: `L6064-L6065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6064-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6064-L6065) · [Before (L6064-L6065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6064-L6065)

```diff
-         } = (0, zd.B)();
-         (0, sd.h)("EditCustomLobbyBlock", (dd => {
+         } = (0, PQ.y)();
+         (0, iQ.g)("EditCustomLobbyBlock", (QQ => {
```

#### 566. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6077` → after: `L6077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6077) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6077)

```diff
-         return (0, Kd.jsx)(Pd.e, {
+         return (0, uQ.jsx)(DQ.d, {
```

#### 567. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6110)

```diff
-                           children: [ld(Jd), (0, Kd.jsx)(td.e, {
+                           children: [bQ(FQ), (0, uQ.jsx)(nQ.b, {
```

#### 568. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6137` → after: `L6137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6137) · [Before (L6137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6137)

```diff
-           Wd = null !== (Jd = void 0 === Nd ? void 0 : (0, Zp.displayNameOf)(Nd)) && void 0 !== Jd ? Jd : kd,
+           oQ = null !== (FQ = void 0 === qQ ? void 0 : (0, DL.displayNameOf)(qQ)) && void 0 !== FQ ? FQ : wQ,
```

#### 569. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6144` → after: `L6144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6144) · [Before (L6144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6144)

```diff
-               children: (0, Kd.jsx)(Bd.c, {
+               children: (0, uQ.jsx)(SQ.e, {
```

#### 570. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6149` → after: `L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6149) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6149)

```diff
-               children: (0, Kd.jsx)(Bd.c, {
+               children: (0, uQ.jsx)(SQ.e, {
```

#### 571. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6157` → after: `L6157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6157) · [Before (L6157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6157)

```diff
-             children: (0, Kd.jsx)(Pk.d, {
+             children: (0, uQ.jsx)(ow.e, {
```

#### 572. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6164-L6166` → after: `L6164-L6166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6164-L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6164-L6166) · [Before (L6164-L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6164-L6166)

```diff
-     var QN = kd(2851),
-       LN = kd(4085),
-       ON = kd(9272);
+     var Hq = wQ(2910),
+       bq = wQ(4112),
+       Yq = wQ(9137);
```

#### 573. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6175` → after: `L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6175) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6175)

```diff
-             return "description" === kd ? null === Nd || void 0 === Nd ? void 0 : Nd.description : null !== (pd = null === Nd || void 0 === Nd ? void 0 : Nd.displayName) && void 0 !== pd ? pd : Jd
+             return "description" === wQ ? null === qQ || void 0 === qQ ? void 0 : qQ.description : null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.displayName) && void 0 !== LQ ? LQ : FQ
```

#### 574. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6190` → after: `L6190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6190) · [Before (L6190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6190)

```diff
-         } = (0, zd.B)(), fd = eN(), nd = (0, Nd.useRef)(null), Ud = (0, Nd.useRef)(LN.b.MobHungerLevel.Hungry), yd = (0, Nd.useRef)(null), Dd = (0, QN.b)(), Td = (0, Nd.useRef)(null), Ed = (0, Nd.useRef)(null), cd = nd.current;
+         } = (0, PQ.y)(), KQ = xq(), zQ = (0, qQ.useRef)(null), lQ = (0, qQ.useRef)(bq.b.MobHungerLevel.Hungry), jQ = (0, qQ.useRef)(null), aQ = (0, Hq.b)(), XQ = (0, qQ.useRef)(null), fQ = (0, qQ.useRef)(null), VQ = zQ.current;
```

#### 575. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6193` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6193) · [Before (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6193)

```diff
-           const dd = ON.j.openPet(Td.current);
+           const QQ = Yq.d.openPet(XQ.current);
```

#### 576. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6206` → after: `L6206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6206) · [Before (L6206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6206)

```diff
-               variation: null !== (Jd = pd.variation) && void 0 !== Jd ? Jd : "default",
+               variation: null !== (FQ = LQ.variation) && void 0 !== FQ ? FQ : "default",
```

#### 577. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6208` → after: `L6208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6208) · [Before (L6208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6208)

```diff
-               tamed: !(0, vp.I)(pd.ownerDbId)
+               tamed: !(0, GL.F)(LQ.ownerDbId)
```

#### 578. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6233` → after: `L6233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6233) · [Before (L6233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6233)

```diff
-         }), [cd, Dd]), (0, sd.h)("showPetUi", (dd => {
+         }), [VQ, aQ]), (0, iQ.g)("showPetUi", (QQ => {
```

#### 579. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6245-L6246` → after: `L6245-L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6245-L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6245-L6246) · [Before (L6245-L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6245-L6246)

```diff
-           ud = LN.b.getFriendshipLevelInfo(null !== (pd = null === (Wd = nd.current) || void 0 === Wd ? void 0 : Wd.mobSettings.petInfo.friendshipPoints) && void 0 !== pd ? pd : 0);
-         return (0, Kd.jsx)(Pd.e, {
+           EQ = bq.b.getFriendshipLevelInfo(null !== (LQ = null === (oQ = zQ.current) || void 0 === oQ ? void 0 : oQ.mobSettings.petInfo.friendshipPoints) && void 0 !== LQ ? LQ : 0);
+         return (0, uQ.jsx)(DQ.d, {
```

#### 580. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6262` → after: `L6262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6262) · [Before (L6262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6262)

```diff
-                   children: null !== (Zd = null === (gd = nd.current) || void 0 === gd ? void 0 : gd.mobSettings.name) && void 0 !== Zd ? Zd : "Your Pet"
+                   children: null !== (kQ = null === (vQ = zQ.current) || void 0 === vQ ? void 0 : vQ.mobSettings.name) && void 0 !== kQ ? kQ : "Your Pet"
```

#### 581. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6269` → after: `L6269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6269) · [Before (L6269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6269)

```diff
-                 children: [!(0, vp.I)(null === (Cd = nd.current) || void 0 === Cd ? void 0 : Cd.mobSettings.petInfo.friendshipPoints) && (0, Kd.jsxs)("div", {
+                 children: [!(0, GL.F)(null === (mQ = zQ.current) || void 0 === mQ ? void 0 : mQ.mobSettings.petInfo.friendshipPoints) && (0, uQ.jsxs)("div", {
```

#### 582. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6276` → after: `L6276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6276) · [Before (L6276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6276)

```diff
-                     children: LN.b.getIconsFromFriendshipPoints(null !== (od = nd.current.mobSettings.petInfo.friendshipPoints) && void 0 !== od ? od : 0).map(((dd, Jd) => (0, Kd.jsx)("div", {
+                     children: bq.b.getIconsFromFriendshipPoints(null !== (HQ = zQ.current.mobSettings.petInfo.friendshipPoints) && void 0 !== HQ ? HQ : 0).map(((QQ, FQ) => (0, uQ.jsx)("div", {
```

#### 583. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6278` → after: `L6278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6278) · [Before (L6278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6278)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 584. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6290` → after: `L6290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6290) · [Before (L6290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6290)

```diff
-                           transform: `scaleX(${ud.totalPointsForNextLevel>0?Math.max(ud.pointsIntoCurrentLevel/ud.totalPointsForNextLevel,0):1})`,
+                           transform: `scaleX(${EQ.totalPointsForNextLevel>0?Math.max(EQ.pointsIntoCurrentLevel/EQ.totalPointsForNextLevel,0):1})`,
```

#### 585. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6295` → after: `L6295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6295) · [Before (L6295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6295)

```diff
-                         children: ud.totalPointsForNextLevel > 0 ? ` ${Math.ceil(ud.pointsIntoCurrentLevel)}/${Math.ceil(ud.totalPointsForNextLevel)}` : Math.ceil(ud.pointsIntoCurrentLevel)
+                         children: EQ.totalPointsForNextLevel > 0 ? ` ${Math.ceil(EQ.pointsIntoCurrentLevel)}/${Math.ceil(EQ.totalPointsForNextLevel)}` : Math.ceil(EQ.pointsIntoCurrentLevel)
```

#### 586. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6308)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 587. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6315` → after: `L6315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6315) · [Before (L6315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6315)

```diff
-                     children: [Xd(LN.b.hungerLevelTranslations[Ud.current].translationKey), Ud.current !== LN.b.MobHungerLevel.Starving && !(0, vp.I)(null === (ld = nd.current) || void 0 === ld ? void 0 : ld.mobSettings.petInfo.lastFedAt) && (0, Kd.jsxs)("div", {
+                     children: [TQ(bq.b.hungerLevelTranslations[lQ.current].translationKey), lQ.current !== bq.b.MobHungerLevel.Starving && !(0, GL.F)(null === (bQ = zQ.current) || void 0 === bQ ? void 0 : bQ.mobSettings.petInfo.lastFedAt) && (0, uQ.jsxs)("div", {
```

#### 588. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6333` → after: `L6333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6333) · [Before (L6333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6333)

```diff
-                       Disabled: (0, vp.I)(hd) || (0, vp.I)(rd)
+                       Disabled: (0, GL.F)(hQ) || (0, GL.F)(JQ)
```

#### 589. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6337` → after: `L6337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6337) · [Before (L6337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6337)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 590. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6343` → after: `L6343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6343) · [Before (L6343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6343)

```diff
-                       children: (0, vp.I)(hd) || (0, vp.I)(rd) ? "" : (0, Kd.jsxs)(Kd.Fragment, {
+                       children: (0, GL.F)(hQ) || (0, GL.F)(JQ) ? "" : (0, uQ.jsxs)(uQ.Fragment, {
```

#### 591. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6360` → after: `L6360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6360) · [Before (L6360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6360)

```diff
-                       Disabled: (0, vp.I)(null === (Qd = nd.current) || void 0 === Qd ? void 0 : Qd.mobSettings.attackDamage) || nd.current.mobSettings.attackDamage <= 0
+                       Disabled: (0, GL.F)(null === (YQ = zQ.current) || void 0 === YQ ? void 0 : YQ.mobSettings.attackDamage) || zQ.current.mobSettings.attackDamage <= 0
```

#### 592. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6364` → after: `L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6364) · [Before (L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6364)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 593. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6382` → after: `L6382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6382) · [Before (L6382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6382)

```diff
-                       Disabled: (0, vp.I)(null === (Od = nd.current) || void 0 === Od ? void 0 : Od.mobSettings.secondaryAttackDamage) || nd.current.mobSettings.secondaryAttackDamage <= 0
+                       Disabled: (0, GL.F)(null === (AQ = zQ.current) || void 0 === AQ ? void 0 : AQ.mobSettings.secondaryAttackDamage) || zQ.current.mobSettings.secondaryAttackDamage <= 0
```

#### 594. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6386` → after: `L6386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6386) · [Before (L6386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6386)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 595. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6404` → after: `L6404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6404) · [Before (L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6404)

```diff
-                       Disabled: (0, vp.I)(null === (Id = nd.current) || void 0 === Id ? void 0 : Id.mobSettings.baseRunningSpeed)
+                       Disabled: (0, GL.F)(null === (MQ = zQ.current) || void 0 === MQ ? void 0 : MQ.mobSettings.baseRunningSpeed)
```

#### 596. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6408` → after: `L6408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6408) · [Before (L6408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6408)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 597. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6414` → after: `L6414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6414) · [Before (L6414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6414)

```diff
-                       children: null !== (Gd = null === (vd = nd.current) || void 0 === vd || null === (xd = vd.mobSettings.baseRunningSpeed) || void 0 === xd ? void 0 : xd.toFixed(2)) && void 0 !== Gd ? Gd : ""
+                       children: null !== (GQ = null === (pQ = zQ.current) || void 0 === pQ || null === (cQ = pQ.mobSettings.baseRunningSpeed) || void 0 === cQ ? void 0 : cQ.toFixed(2)) && void 0 !== GQ ? GQ : ""
```

#### 598. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6430` → after: `L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6430) · [Before (L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6430)

```diff
-                       children: (0, Kd.jsx)(Pk.d, {
+                       children: (0, uQ.jsx)(ow.e, {
```

#### 599. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6436` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6436) · [Before (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6436)

```diff
-                       children: "Saddled" === (null === (Bd = nd.current) || void 0 === Bd ? void 0 : Bd.mobSettings.metaInfo) ? (0, Kd.jsx)(ed.e, {
+                       children: "Saddled" === (null === (SQ = zQ.current) || void 0 === SQ ? void 0 : SQ.mobSettings.metaInfo) ? (0, uQ.jsx)(tQ.c, {
```

#### 600. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6441)

```diff
-                 }), !(0, vp.I)(null === (ad = nd.current) || void 0 === ad ? void 0 : ad.mobSettings.tameInfo) && (0, Kd.jsxs)(Kd.Fragment, {
+                 }), !(0, GL.F)(null === (WQ = zQ.current) || void 0 === WQ ? void 0 : WQ.mobSettings.tameInfo) && (0, uQ.jsxs)(uQ.Fragment, {
```

#### 601. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6551` → after: `L6551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6551) · [Before (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6551)

```diff
-                             children: (0, Kd.jsx)(Pk.d, {
+                             children: (0, uQ.jsx)(ow.e, {
```

#### 602. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6555` → after: `L6555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6555) · [Before (L6555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6555)

```diff
-                           }, `${kd}-${Jd}`)))
+                           }, `${wQ}-${FQ}`)))
```

#### 603. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6584` → after: `L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6584) · [Before (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6584)

```diff
-           description: kd ? Wd : null
+           description: wQ ? oQ : null
```

#### 604. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6602` → after: `L6602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6602) · [Before (L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6602)

```diff
-               children: (0, Kd.jsx)(Bd.c, {
+               children: (0, uQ.jsx)(SQ.e, {
```

#### 605. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6607` → after: `L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6607) · [Before (L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6607)

```diff
-               children: (0, Kd.jsx)(Bd.c, {
+               children: (0, uQ.jsx)(SQ.e, {
```

#### 606. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6614` → after: `L6614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6614) · [Before (L6614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6614)

```diff
-             children: (0, Kd.jsx)(Pk.d, {
+             children: (0, uQ.jsx)(ow.e, {
```

#### 607. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6622` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6622) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6622)

```diff
-     var vN = kd(3624),
+     var Mq = wQ(3621),
```

#### 608. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6624-L6628` → after: `L6624-L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6624-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6624-L6628) · [Before (L6624-L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6624-L6628)

```diff
-       qN = kd(1260),
-       BN = kd(37041),
-       sN = kd(37035),
-       iN = kd(1013),
-       aN = kd(2316);
+       pq = wQ(1254),
+       cq = wQ(36483),
+       Cq = wQ(36481),
+       Sq = wQ(1038),
+       iq = wQ(2283);
```

#### 609. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6639` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6639) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6639)

```diff
-           const Pd = null !== (Jd = null === (Nd = Wd.byId[dd.playerId]) || void 0 === Nd ? void 0 : Nd.cosmetics) && void 0 !== Jd ? Jd : {};
+           const DQ = null !== (FQ = null === (qQ = oQ.byId[QQ.playerId]) || void 0 === qQ ? void 0 : qQ.cosmetics) && void 0 !== FQ ? FQ : {};
```

#### 610. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6653` → after: `L6653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6653) · [Before (L6653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6653)

```diff
-             children: [(0, Kd.jsx)(aN.e, {
+             children: [(0, uQ.jsx)(iq.c, {
```

#### 611. `bundles/bloxd.io/chunks/js/83.js` (Changed code · before: `L6666-L6669` → after: `L6666-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3a414f028cea86b9a89db6543a39dac85a9cdc7f...build/bloxd.io/bqoxjr.2558012f#diff-ccec400df325e08820f8b7368ce31ab1e8abb4cd74e7efff8b3b7ec5ae8935a4) · [After (L6666-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bqoxjr.2558012f/bundles/bloxd.io/chunks/js/83.js#L6666-L6669) · [Before (L6666-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3a414f028cea86b9a89db6543a39dac85a9cdc7f/bundles/bloxd.io/chunks/js/83.js#L6666-L6669)

```diff
-     var FN = kd(638),
-       YN = kd(37030),
-       mN = kd(36715),
-       bN = kd(37048);
+     var Rq = wQ(647),
+       Oq = wQ(36472),
+       sq = wQ(36180),
+       rq = wQ(36486);
```
