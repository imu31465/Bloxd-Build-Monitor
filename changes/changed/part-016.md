# Changed — Bundle Modifications Report (Part 016 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `16 / 154` (**423** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/109.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/109.js` (3925 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df)

#### 2689. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24801-L24802` → after: `L24822-L24823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24822-L24823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24822-L24823) · [Before (L24801-L24802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24801-L24802)

```diff
-           ar = Zr * Kr.i.TEXT_PLANE_RATIO * Wr.height.full;
-         return SS(rr, Zr * Kr.i.TEXT_PLANE_RATIO * Wr.width.full * Qr, ar * Qr), ar
+           Rd = Wd * gd.h.TEXT_PLANE_RATIO * Fd.height.full;
+         return WO(dd, Wd * gd.h.TEXT_PLANE_RATIO * Fd.width.full * md, Rd * md), Rd
```

#### 2690. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24806` → after: `L24827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24827) · [Before (L24806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24806)

```diff
-         rr._scaleX === Sr && rr._scaleY === Qr || (rr._scaleX = Sr, rr._scaleY = Qr, rr._planeMesh.Tx.set(Sr, Qr, 1))
+         dd._scaleX === Od && dd._scaleY === md || (dd._scaleX = Od, dd._scaleY = md, dd._planeMesh.Tt.set(Od, md, 1))
```

#### 2691. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24811` → after: `L24832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24832) · [Before (L24811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24811)

```diff
-         return null !== (Sr = rr.name) && void 0 !== Sr ? Sr : (0, tr.c)().getEntityName(rr.XM, !hr.featureFlags.canSeeRealPlayerNames)
+         return null !== (Od = dd.name) && void 0 !== Od ? Od : (0, Hd.b)().getEntityName(dd.QG, !yd.featureFlags.canSeeRealPlayerNames)
```

#### 2692. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24825` → after: `L24846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24846) · [Before (L24825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24825)

```diff
-           (Sr = Sr ? JSON.parse(JSON.stringify(Sr)) : {}).content ? Sr.content = (0, Kr.s)(Sr.content, Kr.i.DEFAULT_FONT_SIZE) : Sr.content = [{
+           (Od = Od ? JSON.parse(JSON.stringify(Od)) : {}).content ? Od.content = (0, gd.x)(Od.content, gd.h.DEFAULT_FONT_SIZE) : Od.content = [{
```

#### 2693. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24828-L24829` → after: `L24849-L24850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24849-L24850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24849-L24850) · [Before (L24828-L24829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24828-L24829)

```diff
-           const jr = (0, tr.c)().getPlayerRanks(rr).map((rr => Nr.k[rr])).filter((rr => rr.nameTag && rr.visible)),
-             Ir = "Player" === (0, tr.c)().getLifeformType(rr) ? (0, Br.i)(Sr.backgroundColor) : null;
+           const Xd = (0, Hd.b)().getPlayerRanks(dd).map((dd => Nd.l[dd])).filter((dd => dd.nameTag && dd.visible)),
+             Kd = "Player" === (0, Hd.b)().getLifeformType(dd) ? (0, Ed.i)(Od.backgroundColor) : null;
```

#### 2694. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24831` → after: `L24852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24852) · [Before (L24831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24831)

```diff
-           const fr = Nr.r[Zr];
+           const hd = Nd.q[Wd];
```

#### 2695. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24833` → after: `L24854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24854) · [Before (L24833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24833)

```diff
-             for (const Er of Sr.content)(0, Kr.x)(Er) && (Er.style ? (0, mr._b)(Er.style) || (Er.style.color = fr) : Er.style = {
+             for (const vd of Od.content)(0, gd.C)(vd) && (vd.style ? (0, od.Yb)(vd.style) || (vd.style.color = hd) : vd.style = {
```

#### 2696. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24836` → after: `L24857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24857) · [Before (L24836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24836)

```diff
-           if (or(rr) ? (Sr.content.push(Kr.e), br.add(rr)) : br.delete(rr), mS(rr)) {
+           if (Cd(dd) ? (Od.content.push(gd.d), Zd.add(dd)) : Zd.delete(dd), qO(dd)) {
```

#### 2697. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24839` → after: `L24860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24860) · [Before (L24839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24839)

```diff
-               str: ` ${Qr}m`,
+               str: ` ${md}m`,
```

#### 2698. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24845-L24846` → after: `L24866-L24867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24866-L24867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24866-L24867) · [Before (L24845-L24846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24845-L24846)

```diff
-           return Sr.subtitle && (Sr.subtitle = (0, Kr.s)(Sr.subtitle, Kr.i.DEFAULT_SUBTITLE_FONT_SIZE)), Sr.backgroundColor = null !== (Wr = Sr.backgroundColor) && void 0 !== Wr ? Wr : "#22283b", Sr.subtitleBackgroundColor = null !== (ar = Sr.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(Sr.XM, Sr.nameTagInfo, Qr, Sr.nameColour);
+           return Od.subtitle && (Od.subtitle = (0, gd.x)(Od.subtitle, gd.h.DEFAULT_SUBTITLE_FONT_SIZE)), Od.backgroundColor = null !== (Fd = Od.backgroundColor) && void 0 !== Fd ? Fd : "#22283b", Od.subtitleBackgroundColor = null !== (Rd = Od.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(Od.QG, Od.nameTagInfo, md, Od.nameColour);
```

#### 2699. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24849` → after: `L24870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24870) · [Before (L24849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24849)

```diff
-             const Qr = (0, ar.h)(rr._planeTexture);
+             const md = (0, Rd.k)(dd._planeTexture);
```

#### 2700. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24852-L24853` → after: `L24873-L24874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24873-L24874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24873-L24874) · [Before (L24852-L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24852-L24853)

```diff
-               const Wr = null !== (Qr = null === (Zr = Sr.healthbar) || void 0 === Zr ? void 0 : Zr.display) && void 0 !== Qr ? Qr : "onDamage";
-               return "never" === Wr ? null : "always" === Wr ? null !== (ar = rr.AW) && void 0 !== ar ? ar : 1 : rr.healthTimeout ? rr.AW : null;
+               const Fd = null !== (md = null === (Wd = Od.healthbar) || void 0 === Wd ? void 0 : Wd.display) && void 0 !== md ? md : "onDamage";
+               return "never" === Fd ? null : "always" === Fd ? null !== (Rd = dd.nF) && void 0 !== Rd ? Rd : 1 : dd.healthTimeout ? dd.nF : null;
```

#### 2701. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24858` → after: `L24879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24879) · [Before (L24858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24858)

```diff
-         for (const rr of Jr) or(rr.XM) !== br.has(rr.XM) && jS(rr)
+         for (const dd of kd) Cd(dd.QG) !== Zd.has(dd.QG) && hO(dd)
```

#### 2702. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24861` → after: `L24882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24882) · [Before (L24861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24861)

```diff
-       })), (0, Or.e)(rr.Ox.eC(), (() => {
+       })), (0, xd.d)(dd.gt.zV(), (() => {
```

#### 2703. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24875` → after: `L24896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24896) · [Before (L24875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24875)

```diff
-         const Zr = (0, tr.c)().getLifeformType(Sr);
+         const Wd = (0, Hd.b)().getLifeformType(Od);
```

#### 2704. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24877` → after: `L24898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24898) · [Before (L24877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24877)

```diff
-         return !!(null === (Qr = rr.YB.iQr(Sr)) || void 0 === Qr ? void 0 : Qr.nU)
+         return !!(null === (md = dd.qE.JWd(Od)) || void 0 === md ? void 0 : md.xq)
```

#### 2705. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24885` → after: `L24906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24906) · [Before (L24885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24885)

```diff
-             rr.Xt("Error updating a nametag", Sr)
+             dd.AH("Error updating a nametag", Od)
```

#### 2706. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24897` → after: `L24918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24918) · [Before (L24897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24897)

```diff
-         return null !== (Qr = rr.fC !== Sr && (null === (Zr = rr.xG[rr.fC][Sr]) || void 0 === Zr ? void 0 : Zr.hasPriorityNametag)) && void 0 !== Qr && Qr
+         return null !== (md = dd.YV !== Od && (null === (Wd = dd.sG[dd.YV][Od]) || void 0 === Wd ? void 0 : Wd.hasPriorityNametag)) && void 0 !== md && md
```

#### 2707. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24908` → after: `L24929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24929) · [Before (L24908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24908)

```diff
-         if (Wr === ar && !Lr.d.getTexture(ar, lr.e.ICON).notFound) {
+         if (Fd === Rd && !Bd.c.getTexture(Rd, Sd.i.ICON).notFound) {
```

#### 2708. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24913` → after: `L24934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24934) · [Before (L24913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24913)

```diff
-             !jr || null !== (Ir = (0, tr.c)().client) && void 0 !== Ir && Ir.isReplayMode() || (Sr = setTimeout((() => {
+             !Xd || null !== (Kd = (0, Hd.b)().client) && void 0 !== Kd && Kd.isReplayMode() || (Od = setTimeout((() => {
```

#### 2709. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24926` → after: `L24947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24947) · [Before (L24926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24926)

```diff
-         return mS(Sr) && Qr > fr.d && (Zr = fr.d), (0, Rr.f)(Zr) * (0, Ur.e)(rr.Ox.engine.getRenderWidth())
+         return qO(Od) && md > hd.c && (Wd = hd.c), (0, rd.f)(Wd) * (0, qd.d)(dd.gt.engine.getRenderWidth())
```

#### 2710. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24932-L24940` → after: `L24953-L24961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24953-L24961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24953-L24961) · [Before (L24932-L24940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24932-L24940)

```diff
-         const Zr = rr.YB.jQr(Sr.XM),
-           ar = mS(Sr.XM),
-           pr = (0, Kr.D)(Sr._planeMesh, rr.NK.canSeeNametagsThroughWalls, null === Zr || void 0 === Zr ? void 0 : Zr.crouching, ar),
-           xr = rr.YB.gJ(Sr.planeEId).lD,
-           mr = rr.camera.PD(),
-           Nr = Wr().Oj(xr, mr),
-           Ur = rr.YB.rQr(Sr.planeEId).offset,
-           tr = Qr ? (0, fr.t)(rr, Sr.XM, Sr.planeEId, pr) : 1;
-         if (ar && pr && Nr > fr.d) {
+         const Wd = dd.qE.Pmd(Od.QG),
+           Rd = qO(Od.QG),
+           Qd = (0, gd.G)(Od._planeMesh, dd.EY.canSeeNametagsThroughWalls, null === Wd || void 0 === Wd ? void 0 : Wd.crouching, Rd),
+           td = dd.qE.gM(Od.planeEId).y_,
+           od = dd.camera.b_(),
+           Nd = Fd().UX(td, od),
+           qd = dd.qE.Vmd(Od.planeEId).offset,
+           Hd = md ? (0, hd.p)(dd, Od.QG, Od.planeEId, Qd) : 1;
+         if (Rd && Qd && Nd > hd.c) {
```

#### 2711. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24943` → after: `L24964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24964) · [Before (L24943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24943)

```diff
-           const Sr = Wr().scale(rr, rr, fr.d),
+           const Od = Fd().scale(dd, dd, hd.c),
```

#### 2712. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24947-L24948` → after: `L24968-L24969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24968-L24969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24968-L24969) · [Before (L24947-L24948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24947-L24948)

```diff
-         Qr && (0, fr.l)(rr, Sr.planeEId);
-         const hr = (0, fr.p)(Nr, ar, pr) * tr,
+         md && (0, hd.f)(dd, Od.planeEId);
+         const yd = (0, hd.j)(Nd, Rd, Qd) * Hd,
```

#### 2713. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24950` → after: `L24971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24971) · [Before (L24950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24950)

```diff
-         if (Sr._layoutHeight = zr, rr.Ox.ct && Sr._planeMesh.isEnabled() && Sr._planeMesh.isVisible) {
+         if (Od._layoutHeight = bd, dd.gt.lH && Od._planeMesh.isEnabled() && Od._planeMesh.isVisible) {
```

#### 2714. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24952` → after: `L24973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24973) · [Before (L24952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24952)

```diff
-           const Qr = (0, jr.c)(rr, Sr.XM),
+           const md = (0, Xd.g)(dd, Od.QG),
```

#### 2715. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24957` → after: `L24978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24978) · [Before (L24957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24957)

```diff
-             pr = Xr.b.lerp(null !== (nr = ar) && void 0 !== nr ? nr : fS, ES, fr);
+             Qd = sd.b.lerp(null !== (pd = Rd) && void 0 !== pd ? pd : QO, tO, hd);
```

#### 2716. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24959-L24960` → after: `L24980-L24981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24980-L24981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24980-L24981) · [Before (L24959-L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24959-L24960)

```diff
-           const xr = (0, Er.applyHeldLightTint)(rr, Sr.XM, Qr, kr);
-           kr[0] = Math.max(xr[0], ar), kr[1] = Math.max(xr[1], ar), kr[2] = Math.max(xr[2], ar), kr[3] = Math.max(xr[3], ar), (0, Ir.k)(Sr._lightState, kr)
+           const td = (0, vd.applyHeldLightTint)(dd, Od.QG, md, zd);
+           zd[0] = Math.max(td[0], Rd), zd[1] = Math.max(td[1], Rd), zd[2] = Math.max(td[2], Rd), zd[3] = Math.max(td[3], Rd), (0, Kd.l)(Od._lightState, zd)
```

#### 2717. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L24974` → after: `L24995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR24995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L24995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L24995) · [Before (L24974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L24974)

```diff
-           AW: null,
+           nF: null,
```

#### 2718. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25006-L25007` → after: `L25027-L25028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25027-L25028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25027-L25028) · [Before (L25006-L25007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25006-L25007)

```diff
-         zB: function(Sr, Qr) {
-           Qr.effects = {}, Jr.add(Qr), Qr._lightId = `nt_${Sr}`, Qr._visibilityCombinator = new nr.d((Sr => {
+         QE: function(Od, md) {
+           md.effects = {}, kd.add(md), md._lightId = `nt_${Od}`, md._visibilityCombinator = new pd.e((Od => {
```

#### 2719. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25009-L25011` → after: `L25030-L25032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25030-L25032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25030-L25032) · [Before (L25009-L25011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25009-L25011)

```diff
-             const Zr = rr.YB.LQr(Qr.XM);
-             Zr ? Zr.meshEnabledCombinator.forceUpdate() : (0, Hr.k)(rr, Qr.planeEId, Sr)
-           })), Qr.entityMeshScalingSub = pr.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|meshScaling`, (rr => {
+             const Wd = dd.qE.tWd(md.QG);
+             Wd ? Wd.meshEnabledCombinator.forceUpdate() : (0, Vd.t)(dd, md.planeEId, Od)
+           })), md.entityMeshScalingSub = Qd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|meshScaling`, (dd => {
```

#### 2720. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25013` → after: `L25034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25034) · [Before (L25013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25013)

```diff
-           })), Qr.nameTagInfoSub = pr.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|nameTagInfo`, (rr => {
+           })), md.nameTagInfoSub = Qd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|nameTagInfo`, (dd => {
```

#### 2721. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25015` → after: `L25036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25036) · [Before (L25015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25015)

```diff
-           })), Qr.priorityNametagSub = pr.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|hasPriorityNametag`, (rr => {
+           })), md.priorityNametagSub = Qd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|hasPriorityNametag`, (dd => {
```

#### 2722. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25017` → after: `L25038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25038) · [Before (L25017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25017)

```diff
-           })), Qr.rankUpdateSub = pr.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|ranks`, (rr => {
+           })), md.rankUpdateSub = Qd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|ranks`, (dd => {
```

#### 2723. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25019` → after: `L25040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25040) · [Before (L25019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25019)

```diff
-           })), Qr.hideNameSub = pr.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|hideNameSeed`, (rr => {
+           })), md.hideNameSub = Qd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|hideNameSeed`, (dd => {
```

#### 2724. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25021` → after: `L25042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25042) · [Before (L25021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25021)

```diff
-           })), Qr.nameChangedSub = pr.i.subscribe(`entityNameChanged|${Sr}`, (() => {
+           })), md.nameChangedSub = Qd.j.subscribe(`entityNameChanged|${Od}`, (() => {
```

#### 2725. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25023` → after: `L25044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25044) · [Before (L25023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25023)

```diff
-           })), Qr.nameColourSub = pr.i.subscribe(`otherEntitySettingsClientifiedEId|${Sr}|nameColour`, (rr => {
+           })), md.nameColourSub = Qd.j.subscribe(`otherEntitySettingsClientifiedEId|${Od}|nameColour`, (dd => {
```

#### 2726. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25025` → after: `L25046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25046) · [Before (L25025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25025)

```diff
-           })), Qr.effectInfoSub = pr.i.subscribe("EffectUpdate", (rr => {
+           })), md.effectInfoSub = Qd.j.subscribe("EffectUpdate", (dd => {
```

#### 2727. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25027-L25028` → after: `L25048-L25049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25048-L25049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25048-L25049) · [Before (L25027-L25028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25027-L25028)

```diff
-             (null === (Zr = rr.showInNametag) || void 0 === Zr || Zr) && (0, zr.e)(rr.ua) === Sr && NS(Qr, rr)
-           })), Qr.removeEffectSub = pr.i.subscribe("RemoveEffect", (rr => {
+             (null === (Wd = dd.showInNametag) || void 0 === Wd || Wd) && (0, bd.b)(dd.MR) === Od && HO(md, dd)
+           })), md.removeEffectSub = Qd.j.subscribe("RemoveEffect", (dd => {
```

#### 2728. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25030-L25031` → after: `L25051-L25052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25051-L25052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25051-L25052) · [Before (L25030-L25031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25030-L25031)

```diff
-             (0, zr.e)(rr.ua) === Sr && (clearTimeout(null === (Zr = Qr.effects[rr.name]) || void 0 === Zr ? void 0 : Zr.timeout), delete Qr.effects[rr.name], jS(Qr))
-           })), Qr.leaveGameSub = pr.i.subscribe("leaveGame", (() => {
+             (0, bd.b)(dd.MR) === Od && (clearTimeout(null === (Wd = md.effects[dd.name]) || void 0 === Wd ? void 0 : Wd.timeout), delete md.effects[dd.name], hO(md))
+           })), md.leaveGameSub = Qd.j.subscribe("leaveGame", (() => {
```

#### 2729. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25034` → after: `L25055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25055) · [Before (L25034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25034)

```diff
-           })), Qr.lifeformHurtSub = pr.i.subscribe("lifeformHurt", (rr => {
+           })), md.lifeformHurtSub = Qd.j.subscribe("lifeformHurt", (dd => {
```

#### 2730. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25037` → after: `L25058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25058) · [Before (L25037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25037)

```diff
-               AW: Wr
+               nF: Fd
```

#### 2731. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25039` → after: `L25060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25060) · [Before (L25039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25039)

```diff
-             (0, zr.e)(Zr) === Sr && (clearTimeout(Qr.healthTimeout), Qr.healthTimeout = setTimeout((() => {
+             (0, bd.b)(Wd) === Od && (clearTimeout(md.healthTimeout), md.healthTimeout = setTimeout((() => {
```

#### 2732. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25041-L25042` → after: `L25062-L25063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25062-L25063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25062-L25063) · [Before (L25041-L25042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25041-L25042)

```diff
-             }), 2e3), Qr.AW = Wr, jS(Qr))
-           })), Qr.lifeformHealthChangedSub = pr.i.subscribe("lifeformHealthChanged", (Zr => {
+             }), 2e3), md.nF = Fd, hO(md))
+           })), md.lifeformHealthChangedSub = Qd.j.subscribe("lifeformHealthChanged", (Wd => {
```

#### 2733. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25045-L25046` → after: `L25066-L25067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25066-L25067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25066-L25067) · [Before (L25045-L25046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25045-L25046)

```diff
-               sW: ar,
-               uW: jr
+               ZF: Rd,
+               kF: Xd
```

#### 2734. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25048` → after: `L25069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25069) · [Before (L25048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25048)

```diff
-             if ((0, zr.e)(Wr) !== Sr || null === jr) return;
+             if ((0, bd.b)(Fd) !== Od || null === Xd) return;
```

#### 2735. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25051-L25052` → after: `L25072-L25073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25072-L25073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25072-L25073) · [Before (L25051-L25052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25051-L25052)

```diff
-             }), 2e3)), Qr.AW = jr, rr.bloxd.client.gameRecorder.recordLifeformHealth(Wr, ar, jr), jS(Qr)
-           })), Qr.hideNametagSub = pr.i.subscribe("appManagerUpdated|areNametagsHidden", (rr => {
+             }), 2e3)), md.nF = Xd, dd.bloxd.client.gameRecorder.recordLifeformHealth(Fd, Rd, Xd), hO(md)
+           })), md.hideNametagSub = Qd.j.subscribe("appManagerUpdated|areNametagsHidden", (dd => {
```

#### 2736. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25055` → after: `L25076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25076) · [Before (L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25055)

```diff
-           Qr.unsubscribeKeyPromptChanges = (0, xr.u)((() => {
+           md.unsubscribeKeyPromptChanges = (0, td.r)((() => {
```

#### 2737. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25057-L25060` → after: `L25078-L25081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25078-L25081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25078-L25081) · [Before (L25057-L25060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25057-L25060)

```diff
-             (null !== (rr = Qr.nameTagInfo) && void 0 !== rr && null !== (Sr = rr.content) && void 0 !== Sr && Sr.some(mr.wb) || null !== (Zr = Qr.nameTagInfo) && void 0 !== Zr && null !== (Wr = Zr.subtitle) && void 0 !== Wr && Wr.some(mr.wb)) && jS(Qr)
-           })), Qr._visibilityCombinator.setBooleanType("nametagEnabled", !Pr.c.get("areNametagsHidden"));
-           const Zr = (0, qr.b)(rr);
-           Qr.AW = Zr.getHealthFrac(Sr);
+             (null !== (dd = md.nameTagInfo) && void 0 !== dd && null !== (Od = dd.content) && void 0 !== Od && Od.some(od.sb) || null !== (Wd = md.nameTagInfo) && void 0 !== Wd && null !== (Fd = Wd.subtitle) && void 0 !== Fd && Fd.some(od.sb)) && hO(md)
+           })), md._visibilityCombinator.setBooleanType("nametagEnabled", !ud.e.get("areNametagsHidden"));
+           const Wd = (0, Ad.e)(dd);
+           md.nF = Wd.getHealthFrac(Od);
```

#### 2738. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25070` → after: `L25091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25091) · [Before (L25070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25070)

```diff
-           rr.fC in rr.xG && Sr in rr.xG[rr.fC] && ("nameTagInfo" in rr.xG[rr.fC][Sr] && (Qr.nameTagInfo = rr.xG[rr.fC][Sr].nameTagInfo), "nameColour" in rr.xG[rr.fC][Sr] && (Qr.nameColour = rr.xG[rr.fC][Sr].nameColour)), jS(Qr)
+           dd.YV in dd.sG && Od in dd.sG[dd.YV] && ("nameTagInfo" in dd.sG[dd.YV][Od] && (md.nameTagInfo = dd.sG[dd.YV][Od].nameTagInfo), "nameColour" in dd.sG[dd.YV][Od] && (md.nameColour = dd.sG[dd.YV][Od].nameColour)), hO(md)
```

#### 2739. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25075` → after: `L25096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25096) · [Before (L25075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25075)

```diff
-             const rr = IS(Qr.XM);
+             const dd = vO(md.QG);
```

#### 2740. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25081` → after: `L25102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25102) · [Before (L25081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25081)

```diff
-             mS(Qr.XM) && Fr(Qr) && jS(Qr)
+             qO(md.QG) && ld(md) && hO(md)
```

#### 2741. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25084` → after: `L25105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25105) · [Before (L25084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25084)

```diff
-         nB: function(rr, Sr) {
+         yE: function(dd, Od) {
```

#### 2742. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25087` → after: `L25108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25108) · [Before (L25087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25087)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 2743. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25089` → after: `L25110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25110) · [Before (L25089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25089)

```diff
-           sr(Sr), Jr.delete(Sr), br.delete(Sr.XM), pr.i.unsubscribe(Sr.entityMeshScalingSub), pr.i.unsubscribe(Sr.nameTagInfoSub), pr.i.unsubscribe(Sr.priorityNametagSub), pr.i.unsubscribe(Sr.rankUpdateSub), pr.i.unsubscribe(Sr.hideNameSub), pr.i.unsubscribe(Sr.nameChangedSub), p … [truncated]
+           dO(Od), kd.delete(Od), Zd.delete(Od.QG), Qd.j.unsubscribe(Od.entityMeshScalingSub), Qd.j.unsubscribe(Od.nameTagInfoSub), Qd.j.unsubscribe(Od.priorityNametagSub), Qd.j.unsubscribe(Od.rankUpdateSub), Qd.j.unsubscribe(Od.hideNameSub), Qd.j.unsubscribe(Od.nameChangedSub), Q … [truncated]
```

#### 2744. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25100` → after: `L25121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25121) · [Before (L25100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25100)

```diff
-   40456: (rr, Sr, Qr) => {
+   40461: (dd, Od, md) => {
```

#### 2745. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25104-L25107` → after: `L25125-L25128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25125-L25128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25125-L25128) · [Before (L25104-L25107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25104-L25107)

```diff
-     var Zr = Qr(39402),
-       Wr = Qr(39030),
-       ar = Qr(38849),
-       jr = Qr(388),
+     var Wd = md(39459),
+       Fd = md(39074),
+       Rd = md(38907),
+       Xd = md(415),
```

#### 2746. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25109-L25111` → after: `L25130-L25132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25130-L25132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25130-L25132) · [Before (L25109-L25111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25109-L25111)

```diff
-       fr = Qr(39142),
-       Er = Qr(38723);
-     const pr = Qr(40460).d,
+       hd = md(39162),
+       vd = md(38766);
+     const Qd = md(40466).b,
```

#### 2747. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25116-L25117` → after: `L25137-L25138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25137-L25138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25137-L25138) · [Before (L25116-L25117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25116-L25117)

```diff
-       const Sr = rr.Ox.eC(),
-         Qr = (0, Zr.p)(rr.Ox, "phBox", (0, Wr.e)({
+       const Od = dd.gt.zV(),
+         md = (0, Wd.p)(dd.gt, "phBox", (0, Fd.b)({
```

#### 2748. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25122` → after: `L25143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25143) · [Before (L25122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25122)

```diff
-       Qr.material = (0, Er.b)({
+       md.material = (0, vd.d)({
```

#### 2749. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25124` → after: `L25145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25145) · [Before (L25124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25124)

```diff
-         Dt: Sr,
+         MH: Od,
```

#### 2750. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25132` → after: `L25153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25153) · [Before (L25132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25132)

```diff
-       }).mirror, Qr.visibility = .5, Qr.VK(!1);
+       }).mirror, md.visibility = .5, md.rY(!1);
```

#### 2751. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25142` → after: `L25163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25163) · [Before (L25142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25142)

```diff
-         zB: function(Sr, Zr) {
+         QE: function(Od, Wd) {
```

#### 2752. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25144` → after: `L25165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25165) · [Before (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25144)

```diff
-           Zr.instance = Qr.createInstance(`mesh overlay ${Sr}`), rr.Ox.Sh(Zr.instance, !1, null), Zr.lastFlash = Date.now(), null === (Wr = rr.YB.LQr(Sr)) || void 0 === Wr || Wr.meshEnabledCombinator.forceUpdate()
+           Wd.instance = md.createInstance(`mesh overlay ${Od}`), dd.gt.Fy(Wd.instance, !1, null), Wd.lastFlash = Date.now(), null === (Fd = dd.qE.tWd(Od)) || void 0 === Fd || Fd.meshEnabledCombinator.forceUpdate()
```

#### 2753. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25146` → after: `L25167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25167) · [Before (L25146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25146)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 2754. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25149` → after: `L25170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25170) · [Before (L25149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25149)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 2755. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25152-L25153` → after: `L25173-L25174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25173-L25174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25173-L25174) · [Before (L25152-L25153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25152-L25153)

```diff
-             const Sr = (0, fr.getCaughtUpMeshRotation)(rr, jr.XM).renderRotation,
-               Qr = rr.YB.gJ(jr.XM).lD;
+             const Od = (0, hd.getCaughtUpMeshRotation)(dd, Xd.QG).renderRotation,
+               md = dd.qE.gM(Xd.QG).y_;
```

#### 2756. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25155` → after: `L25176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25176) · [Before (L25155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25155)

```diff
-             if (Ir().set(Ur, Qr[0], Qr[1] + pr.playerHitboxHeights.head / 2, Qr[2] + .1), Ir().Nh(Ur, Ur, Qr, Sr[2]), Ir().xh(Ur, Ur, Qr, Sr[0]), Ir().mh(Ur, Ur, Qr, Sr[1]), (0, ar.p)(jr.instance, Ur[0], Ur[1], Ur[2]), jr.instance.rotation.set(Sr[0], Sr[1], Sr[2]), Zr > jr.lastFl … [truncated]
+             if (Kd().set(qd, md[0], md[1] + Qd.playerHitboxHeights.head / 2, md[2] + .1), Kd().yy(qd, qd, md, Od[2]), Kd().Ny(qd, qd, md, Od[0]), Kd().Hy(qd, qd, md, Od[1]), (0, Rd.q)(Xd.instance, qd[0], qd[1], qd[2]), Xd.instance.rotation.set(Od[0], Od[1], Od[2]), Wd > Xd.lastFl … [truncated]
```

#### 2757. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25162` → after: `L25183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25183) · [Before (L25162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25162)

```diff
-   40466: (rr, Sr, Qr) => {
+   40471: (dd, Od, md) => {
```

#### 2758. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25166-L25167` → after: `L25187-L25188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25187-L25188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25187-L25188) · [Before (L25166-L25167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25166-L25167)

```diff
-     var Zr = Qr(723),
-       Wr = Qr(38849);
+     var Wd = md(744),
+       Fd = md(38907);
```

#### 2759. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25178` → after: `L25199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25199) · [Before (L25178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25178)

```diff
-           sa: null,
+           fR: null,
```

#### 2760. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25182` → after: `L25203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25203) · [Before (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25182)

```diff
-         zB: function(rr, Sr) {
+         QE: function(dd, Od) {
```

#### 2761. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25185` → after: `L25206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25206) · [Before (L25185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25185)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 2762. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25188` → after: `L25209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25209) · [Before (L25188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25188)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 2763. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25194` → after: `L25215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25215) · [Before (L25194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25194)

```diff
-             const Sr = null === Zr.sa ? 0 : pr(rr, rr.YB.gJ(Zr.XM).NZr, Zr.sa);
+             const Od = null === Wd.fR ? 0 : Qd(dd, dd.qE.gM(Wd.QG).ZWd, Wd.fR);
```

#### 2764. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25196` → after: `L25217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25217) · [Before (L25196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25196)

```diff
-               for (let Qr = 0; Qr < ar; Qr++) Zr.meshes.push(mr(rr, Zr.XM));
+               for (let md = 0; md < Rd; md++) Wd.meshes.push(od(dd, Wd.QG));
```

#### 2765. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25199` → after: `L25220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25220) · [Before (L25199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25199)

```diff
-               Wr && Nr(rr, Zr, Qr, jr[Qr], Zr.sa, Ir[Qr]), Zr._shown[Qr] !== Wr && (Zr._shown[Qr] = Wr, Zr.meshes[Qr].VK(Wr))
+               Fd && Nd(dd, Wd, md, Xd[md], Wd.fR, Kd[md]), Wd._shown[md] !== Fd && (Wd._shown[md] = Fd, Wd.meshes[md].rY(Fd))
```

#### 2766. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25212` → after: `L25233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25233) · [Before (L25212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25212)

```diff
-       const Zr = rr.um;
+       const Wd = dd.XN;
```

#### 2767. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25217` → after: `L25238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25238) · [Before (L25217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25217)

```diff
-         xr(ar, Sr, Zr, fr, Er) || rr.qx.uF(fr, Qr, Er) || (jr[Wr] = fr, Ir[Wr] = Er, Wr++)
+         td(Rd, Od, Wd, hd, vd) || dd.Bt.Wk(hd, md, vd) || (Xd[Fd] = hd, Kd[Fd] = vd, Fd++)
```

#### 2768. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25229-L25230` → after: `L25250-L25251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25250-L25251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25250-L25251) · [Before (L25229-L25230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25229-L25230)

```diff
-       const Qr = rr.Ox.UZr.createInstance(`floatingMesh_${Sr}_${(0,Zr.f)()}`);
-       return rr.Ox.Sh(Qr), Qr.VK(!1), Qr
+       const md = dd.gt.kWd.createInstance(`floatingMesh_${Od}_${(0,Wd.f)()}`);
+       return dd.gt.Fy(md), md.rY(!1), md
```

#### 2769. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25234` → after: `L25255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25255) · [Before (L25234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25234)

```diff
-       const Ir = rr.um,
+       const Kd = dd.XN,
```

#### 2770. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25239` → after: `L25260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25260) · [Before (L25239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25239)

```diff
-       xr[3 * Qr] === fr && xr[3 * Qr + 1] === Er && xr[3 * Qr + 2] === pr || (xr[3 * Qr] = fr, xr[3 * Qr + 1] = Er, xr[3 * Qr + 2] = pr, (0, Wr.p)(Sr.meshes[Qr], fr, Er, pr))
+       td[3 * md] === hd && td[3 * md + 1] === vd && td[3 * md + 2] === Qd || (td[3 * md] = hd, td[3 * md + 1] = vd, td[3 * md + 2] = Qd, (0, Fd.q)(Od.meshes[md], hd, vd, Qd))
```

#### 2771. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25242` → after: `L25263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25263) · [Before (L25242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25242)

```diff
-   40475: (rr, Sr, Qr) => {
+   40478: (dd, Od, md) => {
```

#### 2772. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25246-L25248` → after: `L25267-L25269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25267-L25269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25267-L25269) · [Before (L25246-L25248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25246-L25248)

```diff
-     var Zr = Qr(2114),
-       Wr = Qr(2364),
-       ar = Qr(39120);
+     var Wd = md(2116),
+       Fd = md(2386),
+       Rd = md(39146);
```

#### 2773. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25267-L25268` → after: `L25288-L25289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25288-L25289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25288-L25289) · [Before (L25267-L25268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25267-L25268)

```diff
-         zB: function(Sr, Qr) {
-           const fr = [Zr.d.subscribe("forcedCameraDirection", (Sr => {
+         QE: function(Od, md) {
+           const hd = [Wd.e.subscribe("forcedCameraDirection", (Od => {
```

#### 2774. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25270-L25271` → after: `L25291-L25292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25291-L25292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25291-L25292) · [Before (L25270-L25271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25270-L25271)

```diff
-               if (rr.NK.forcedCameraDirectionTransitionMs <= 0 || null === Sr) {
-                 if (null === Sr) rr.camera.pD = null, rr.camera.mD = null;
+               if (dd.EY.forcedCameraDirectionTransitionMs <= 0 || null === Od) {
+                 if (null === Od) dd.camera.h_ = null, dd.camera.v_ = null;
```

#### 2775. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25274-L25275` → after: `L25295-L25296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25295-L25296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25295-L25296) · [Before (L25274-L25275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25274-L25275)

```diff
-                     Qx: Qr,
-                     kQr: Zr
+                     MQ: md,
+                     wWd: Wd
```

#### 2776. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25277` → after: `L25298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25298) · [Before (L25277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25277)

```diff
-                   rr.camera.pD = Zr, rr.camera.mD = Qr
+                   dd.camera.h_ = Wd, dd.camera.v_ = md
```

#### 2777. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25287-L25288` → after: `L25308-L25309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25308-L25309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25308-L25309) · [Before (L25287-L25288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25287-L25288)

```diff
-                 Qx: Wr,
-                 kQr: jr
+                 MQ: Fd,
+                 wWd: Xd
```

#### 2778. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25295` → after: `L25316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25316) · [Before (L25295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25295)

```diff
-               Qr.directionTransitionStart = Ir, Qr.directionTransitionEnd = Ir + rr.NK.forcedCameraDirectionTransitionMs, rr.camera.pD = Zr.pitch, rr.camera.mD = Zr.heading
+               md.directionTransitionStart = Kd, md.directionTransitionEnd = Kd + dd.EY.forcedCameraDirectionTransitionMs, dd.camera.h_ = Wd.pitch, dd.camera.v_ = Wd.heading
```

#### 2779. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25297` → after: `L25318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25318) · [Before (L25297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25297)

```diff
-           })), Zr.d.subscribe("cameraRoll", (Sr => {
+           })), Wd.e.subscribe("cameraRoll", (Od => {
```

#### 2780. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25299-L25300` → after: `L25320-L25321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25320-L25321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25320-L25321) · [Before (L25299-L25300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25299-L25300)

```diff
-               if (rr.NK.cameraRollTransitionMs <= 0) return rr.camera.mx = Sr, Qr.rollTransitionFrom = null, Qr.rollTransitionTo = null, Qr.rollTransitionStart = null, void(Qr.rollTransitionEnd = null);
-               Qr.rollTransitionFrom = rr.camera.mx, Qr.rollTransitionTo = Sr;
+               if (dd.EY.cameraRollTransitionMs <= 0) return dd.camera.Kt = Od, md.rollTransitionFrom = null, md.rollTransitionTo = null, md.rollTransitionStart = null, void(md.rollTransitionEnd = null);
+               md.rollTransitionFrom = dd.camera.Kt, md.rollTransitionTo = Od;
```

#### 2781. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25302` → after: `L25323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25323) · [Before (L25302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25302)

```diff
-               Qr.rollTransitionStart = Zr, Qr.rollTransitionEnd = Zr + rr.NK.cameraRollTransitionMs
+               md.rollTransitionStart = Wd, md.rollTransitionEnd = Wd + dd.EY.cameraRollTransitionMs
```

#### 2782. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25304` → after: `L25325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25325) · [Before (L25304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25304)

```diff
-           })), Zr.d.subscribe("forcedCameraDirectionTransitionMs", (rr => {
+           })), Wd.e.subscribe("forcedCameraDirectionTransitionMs", (dd => {
```

#### 2783. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25311` → after: `L25332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25332) · [Before (L25311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25311)

```diff
-           })), Zr.d.subscribe("cameraRollTransitionMs", (rr => {
+           })), Wd.e.subscribe("cameraRollTransitionMs", (dd => {
```

#### 2784. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25318` → after: `L25339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25339) · [Before (L25318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25318)

```diff
-           })), Zr.d.subscribe("cameraRotationOffset", (rr => {
+           })), Wd.e.subscribe("cameraRotationOffset", (dd => {
```

#### 2785. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25320` → after: `L25341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25341) · [Before (L25320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25320)

```diff
-           })), Zr.d.subscribe("cameraPositionOffset", (rr => {
+           })), Wd.e.subscribe("cameraPositionOffset", (dd => {
```

#### 2786. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25333-L25334` → after: `L25354-L25355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25354-L25355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25354-L25355) · [Before (L25333-L25334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25333-L25334)

```diff
-           }, Er(rr.NK.cameraRotationOffset), pr(rr.NK.cameraPositionOffset), (0, Wr.onGameReset)((() => {
-             rr.camera.pD = null, rr.camera.mD = null, rr.camera.mx = 0, Er(jr), pr(Ir), Qr.directionTransitionFrom = null, Qr.directionTransitionTo = null, Qr.directionTransitionStart = null, Qr.directionTransitionEnd = null, Qr.rollTransitionFrom = null, Qr.rollTransitionTo = nu … [truncated]
+           }, vd(dd.EY.cameraRotationOffset), Qd(dd.EY.cameraPositionOffset), (0, Fd.onGameReset)((() => {
+             dd.camera.h_ = null, dd.camera.v_ = null, dd.camera.Kt = 0, vd(Xd), Qd(Kd), md.directionTransitionFrom = null, md.directionTransitionTo = null, md.directionTransitionStart = null, md.directionTransitionEnd = null, md.rollTransitionFrom = null, md.rollTransitionTo = nu … [truncated]
```

#### 2787. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25337` → after: `L25358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25358) · [Before (L25337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25337)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 2788. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25340` → after: `L25361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25361) · [Before (L25340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25340)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 2789. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25349` → after: `L25370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25370) · [Before (L25349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25349)

```diff
-             ar >= 1 ? (rr.camera.pD = Qr.pitch, rr.camera.mD = pr(Qr.heading), Zr.directionTransitionFrom = null, Zr.directionTransitionTo = null, Zr.directionTransitionStart = null, Zr.directionTransitionEnd = null) : (rr.camera.pD = Sr.pitch + (Qr.pitch - Sr.pitch) * jr, rr.cam … [truncated]
+             Rd >= 1 ? (dd.camera.h_ = md.pitch, dd.camera.v_ = Qd(md.heading), Wd.directionTransitionFrom = null, Wd.directionTransitionTo = null, Wd.directionTransitionStart = null, Wd.directionTransitionEnd = null) : (dd.camera.h_ = Od.pitch + (md.pitch - Od.pitch) * Xd, dd.cam … [truncated]
```

#### 2790. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25354` → after: `L25375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25375) · [Before (L25354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25354)

```diff
-             Sr >= 1 ? (rr.camera.mx = Zr.rollTransitionTo, Zr.rollTransitionFrom = null, Zr.rollTransitionTo = null, Zr.rollTransitionStart = null, Zr.rollTransitionEnd = null) : rr.camera.mx = Zr.rollTransitionFrom + (Zr.rollTransitionTo - Zr.rollTransitionFrom) * Qr
+             Od >= 1 ? (dd.camera.Kt = Wd.rollTransitionTo, Wd.rollTransitionFrom = null, Wd.rollTransitionTo = null, Wd.rollTransitionStart = null, Wd.rollTransitionEnd = null) : dd.camera.Kt = Wd.rollTransitionFrom + (Wd.rollTransitionTo - Wd.rollTransitionFrom) * md
```

#### 2791. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25361` → after: `L25382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25382) · [Before (L25361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25361)

```diff
-       return rr < .5 ? 4 * rr * rr * rr : 1 - Math.pow(-2 * rr + 2, 3) / 2
+       return dd < .5 ? 4 * dd * dd * dd : 1 - Math.pow(-2 * dd + 2, 3) / 2
```

#### 2792. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25373` → after: `L25394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25394) · [Before (L25373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25373)

```diff
-       return Wr > Math.PI ? Wr -= Qr : Wr < -Math.PI && (Wr += Qr), rr + Wr
+       return Fd > Math.PI ? Fd -= md : Fd < -Math.PI && (Fd += md), dd + Fd
```

#### 2793. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25380` → after: `L25401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25401) · [Before (L25380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25380)

```diff
-       }(rr) ? rr : Qr;
+       }(dd) ? dd : md;
```

#### 2794. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25384` → after: `L25405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25405) · [Before (L25384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25384)

```diff
-   40351: (rr, Sr, Qr) => {
+   40350: (dd, Od, md) => {
```

#### 2795. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25390-L25391` → after: `L25411-L25412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25411-L25412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25411-L25412) · [Before (L25390-L25391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25390-L25391)

```diff
-     var Zr = Qr(38552),
-       Wr = Qr(39580);
+     var Wd = md(38623),
+       Fd = md(39627);
```

#### 2796. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25394` → after: `L25415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25415) · [Before (L25394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25394)

```diff
-         this.JC = null, this.tZr = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.XM = void 0
+         this.JA = null, this.fWd = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.QG = void 0
```

#### 2797. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25403-L25404` → after: `L25424-L25425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25424-L25425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25424-L25425) · [Before (L25403-L25404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25403-L25404)

```diff
-         nB: function(Sr, Qr) {
-           for (const Wr of Qr) Wr.tZr.zZr && ((0, Zr.pausesOutOfView)(rr, Wr.XM, Wr.JC) ? Wr._posePaused = !0 : fr(rr, Wr))
+         yE: function(Od, md) {
+           for (const Fd of md) Fd.fWd.MWd && ((0, Wd.pausesOutOfView)(dd, Fd.QG, Fd.JA) ? Fd._posePaused = !0 : hd(dd, Fd))
```

#### 2798. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25410` → after: `L25431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25431) · [Before (L25410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25410)

```diff
-       const Qr = rr.YB.qQr(Sr);
+       const md = dd.qE.yWd(Od);
```

#### 2799. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25416` → after: `L25437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25437) · [Before (L25416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25416)

```diff
-       const Qr = Sr.XM;
+       const md = Od.QG;
```

#### 2800. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25420` → after: `L25441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25441) · [Before (L25420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25420)

```diff
-       } = rr.YB.getState(Qr, "updateWalkingState");
+       } = dd.qE.getState(md, "updateWalkingState");
```

#### 2801. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25423` → after: `L25444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25444) · [Before (L25423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25423)

```diff
-       const ar = rr.YB.getState(Qr, "animator");
+       const Rd = dd.qE.getState(md, "animator");
```

#### 2802. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25427` → after: `L25448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25448) · [Before (L25427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25427)

```diff
-   40483: (rr, Sr, Qr) => {
+   40487: (dd, Od, md) => {
```

#### 2803. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25431-L25435` → after: `L25452-L25456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25452-L25456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25452-L25456) · [Before (L25431-L25435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25431-L25435)

```diff
-     var Zr = Qr(37927),
-       Wr = Qr(34),
-       ar = Qr(39652),
-       jr = Qr(38659),
-       Ir = Qr(39612);
+     var Wd = md(38006),
+       Fd = md(32),
+       Rd = md(39698),
+       Xd = md(38702),
+       Kd = md(39649);
```

#### 2804. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25451` → after: `L25472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25472) · [Before (L25451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25451)

```diff
-         zB: function(Sr, Qr) {
+         QE: function(Od, md) {
```

#### 2805. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25453-L25455` → after: `L25474-L25476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25474-L25476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25474-L25476) · [Before (L25453-L25455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25453-L25455)

```diff
-           Qr.isAlive = (0, Ir.d)("_isAlive", null === (Er = rr.xG[rr.fC]) || void 0 === Er || null === (pr = Er[Qr.XM]) || void 0 === pr ? void 0 : pr._isAlive), Qr._isAliveSub = Wr.i.subscribe(`otherEntitySettingsClientifiedEId|${Qr.XM}|_isAlive`, (rr => {
-             Qr.isAlive = (0, Ir.d)("_isAlive", rr), (0, ar.updateLocalPlayerHeldItem)()
-           })), Qr.addedTime = Date.now(), Qr._hasPriorityNametagSub = Wr.i.subscribe(`otherEntitySettingsClientifiedEId|${Qr.XM}|hasPriorityNametag`, (rr => {
+           md.isAlive = (0, Kd.c)("_isAlive", null === (vd = dd.sG[dd.YV]) || void 0 === vd || null === (Qd = vd[md.QG]) || void 0 === Qd ? void 0 : Qd._isAlive), md._isAliveSub = Fd.j.subscribe(`otherEntitySettingsClientifiedEId|${md.QG}|_isAlive`, (dd => {
+             md.isAlive = (0, Kd.c)("_isAlive", dd), (0, Rd.updateLocalPlayerHeldItem)()
+           })), md.addedTime = Date.now(), md._hasPriorityNametagSub = Fd.j.subscribe(`otherEntitySettingsClientifiedEId|${md.QG}|hasPriorityNametag`, (dd => {
```

#### 2806. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25459` → after: `L25480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25480) · [Before (L25459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25459)

```diff
-             YB: xr
+             qE: td
```

#### 2807. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25461` → after: `L25482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25482) · [Before (L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25461)

```diff
-           Qr.meshEnabledCombinator = new Zr.d(((Zr, ar) => {
+           md.meshEnabledCombinator = new Wd.e(((Wd, Rd) => {
```

#### 2808. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25463` → after: `L25484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25484) · [Before (L25463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25463)

```diff
-             (0, jr.k)(rr, Sr, Zr);
+             (0, Xd.t)(dd, Od, Wd);
```

#### 2809. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25465` → after: `L25486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25486) · [Before (L25465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25465)

```diff
-               pr = xr.PQr(Sr),
+               Qd = td.qWd(Od),
```

#### 2810. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25471` → after: `L25492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25492) · [Before (L25471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25471)

```diff
-               if (null !== (Ur = null === (tr = rr.xG[rr.fC][Qr.XM]) || void 0 === tr ? void 0 : tr.hasPriorityNametag) && void 0 !== Ur && Ur)
+               if (null !== (qd = null === (Hd = dd.sG[dd.YV][md.QG]) || void 0 === Hd ? void 0 : Hd.hasPriorityNametag) && void 0 !== qd && qd)
```

#### 2811. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25474` → after: `L25495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25495) · [Before (L25474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25474)

```diff
-               (Nr || Qr.drawnHidden) && (Sr = !1), (0, jr.k)(rr, mr, Sr)
+               (Nd || md.drawnHidden) && (Od = !1), (0, Xd.t)(dd, od, Od)
```

#### 2812. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25478-L25480` → after: `L25499-L25501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25499-L25501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25499-L25501) · [Before (L25478-L25480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25478-L25480)

```diff
-             hr && (hr.forceSetEnabled = !!Er && null, hr.instance.VK(null !== (zr = hr.forceSetEnabled) && void 0 !== zr ? zr : hr.isEnabled));
-             Qr.XM !== rr.fC && (Zr ? xr.TSr(Sr, "collideTerrain") || xr.gM(Sr, "collideTerrain") : xr.TSr(Sr, "collideTerrain") && xr.bM(Sr, "collideTerrain")), Sr === rr.fC && Wr.i.Jp("clientPlayerModelVisible", Er)
-           })), xr.getState(Sr, xr.names.Px).enabledCombinator = new Zr.d
+             yd && (yd.forceSetEnabled = !!vd && null, yd.instance.rY(null !== (bd = yd.forceSetEnabled) && void 0 !== bd ? bd : yd.isEnabled));
+             md.QG !== dd.YV && (Wd ? td.MOd(Od, "collideTerrain") || td.yG(Od, "collideTerrain") : td.MOd(Od, "collideTerrain") && td.pG(Od, "collideTerrain")), Od === dd.YV && Fd.j.lQ("clientPlayerModelVisible", vd)
+           })), td.getState(Od, td.names.Ut).enabledCombinator = new Wd.e
```

#### 2813. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25482-L25483` → after: `L25503-L25504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25503-L25504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25503-L25504) · [Before (L25482-L25483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25482-L25483)

```diff
-         bq: function(rr, Sr) {
-           Wr.i.unsubscribe(Sr._isAliveSub), Wr.i.unsubscribe(Sr._hasPriorityNametagSub)
+         qS: function(dd, Od) {
+           Fd.j.unsubscribe(Od._isAliveSub), Fd.j.unsubscribe(Od._hasPriorityNametagSub)
```

#### 2814. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25488` → after: `L25509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25509) · [Before (L25488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25488)

```diff
-   40487: (rr, Sr, Qr) => {
+   40489: (dd, Od, md) => {
```

#### 2815. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25492-L25493` → after: `L25513-L25514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25513-L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25513-L25514) · [Before (L25492-L25493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25492-L25493)

```diff
-     var Zr = Qr(39307),
-       Wr = Qr(39533);
+     var Wd = md(39347),
+       Fd = md(39593);
```

#### 2816. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25508` → after: `L25529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25529) · [Before (L25508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25508)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 2817. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25511` → after: `L25532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25532) · [Before (L25511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25511)

```diff
-             const Sr = rr.YB.rQr(ar.XM);
+             const Od = dd.qE.Vmd(Rd.QG);
```

#### 2818. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25513-L25514` → after: `L25534-L25535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25534-L25535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25534-L25535) · [Before (L25513-L25514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25513-L25514)

```diff
-             const Qr = (0, Zr.j)(ar.startedAtMs, ar.endsAtMs, Wr);
-             Sr.mesh.Tx.set(Qr, Qr, Qr), Sr.offset[1] = ar.centreOffsetY + ar.halfHeight * (Qr - Zr.o)
+             const md = (0, Wd.g)(Rd.startedAtMs, Rd.endsAtMs, Fd);
+             Od.mesh.Tt.set(md, md, md), Od.offset[1] = Rd.centreOffsetY + Rd.halfHeight * (md - Wd.l)
```

#### 2819. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25520` → after: `L25541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25541) · [Before (L25520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25520)

```diff
-   40494: (rr, Sr, Qr) => {
+   40498: (dd, Od, md) => {
```

#### 2820. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25525-L25526` → after: `L25546-L25547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25546-L25547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25546-L25547) · [Before (L25525-L25526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25525-L25526)

```diff
-     var Zr = Qr(208),
-       Wr = Qr(388),
+     var Wd = md(218),
+       Fd = md(415),
```

#### 2821. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25528-L25530` → after: `L25549-L25551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25549-L25551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25549-L25551) · [Before (L25528-L25530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25528-L25530)

```diff
-       jr = Qr(37927),
-       Ir = Qr(2383),
-       fr = Qr(38541);
+       Xd = md(38006),
+       Kd = md(2402),
+       hd = md(38608);
```

#### 2822. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25534` → after: `L25555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25555) · [Before (L25534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25534)

```diff
-       mr = Zr.i.hx,
+       od = Wd.i.Qt,
```

#### 2823. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25557` → after: `L25578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25578) · [Before (L25557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25557)

```diff
-         const Zr = `${rr}|${Sr}|${Qr}`,
+         const Wd = `${dd}|${Od}|${md}`,
```

#### 2824. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25575` → after: `L25596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25596) · [Before (L25575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25575)

```diff
-           Fp: null,
+           eQ: null,
```

#### 2825. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25585-L25588` → after: `L25606-L25609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25606-L25609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25606-L25609) · [Before (L25585-L25588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25585-L25588)

```diff
-         zB: function(Qr, Zr) {
-           if (!Zr.addMeshComponent || !Zr.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${Zr.addMeshComponent} ${Zr.removeMeshComponent}`);
-           if (Zr._lastPos = ar().create(), ar().copy(Zr._lastPos, rr.YB.JY(Qr)), null !== Zr.movingHideDist && Wr.add(Zr), 0 === Sr.size && (ar().set(Br, 1 / 0, 1 / 0, 1 / 0), ar().copy(yr, Br)), Hr(Zr), Pr(Zr, Zr._competesForCap), Zr.immediatelyUpdate) {
-             lr(Zr, rr.YB.JY(rr.fC))
+         QE: function(md, Wd) {
+           if (!Wd.addMeshComponent || !Wd.removeMeshComponent) throw new Error(`Added hidingMeshManager without addMeshComponent or removeMeshComponent ${Wd.addMeshComponent} ${Wd.removeMeshComponent}`);
+           if (Wd._lastPos = Rd().create(), Rd().copy(Wd._lastPos, dd.qE.hY(md)), null !== Wd.movingHideDist && Fd.add(Wd), 0 === Od.size && (Rd().set(Ed, 1 / 0, 1 / 0, 1 / 0), Rd().copy(wd, Ed)), Vd(Wd), ud(Wd, Wd._competesForCap), Wd.immediatelyUpdate) {
+             Sd(Wd, dd.qE.hY(dd.YV))
```

#### 2826. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25591` → after: `L25612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25612) · [Before (L25591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25591)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 2827. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25595` → after: `L25616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25616) · [Before (L25595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25595)

```diff
-           const fr = rr.camera.JY(),
+           const hd = dd.camera.hY(),
```

#### 2828. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25614` → after: `L25635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25635) · [Before (L25614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25614)

```diff
-                 for (const Qr of Wr) Kr[jr++] = ar().sqrDist(Sr, rr.YB.JY(Qr.XM));
+                 for (const md of Fd) gd[Xd++] = Rd().sqrDist(Od, dd.qE.hY(md.QG));
```

#### 2829. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25619` → after: `L25640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25640) · [Before (L25619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25619)

```diff
-             const Qr = rr.YB.JY(Sr.XM);
+             const md = dd.qE.hY(Od.QG);
```

#### 2830. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25624` → after: `L25645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25645) · [Before (L25624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25624)

```diff
-           if (!Or) rr: for (const rr of Qr)
+           if (!xd) dd: for (const dd of md)
```

#### 2831. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25638-L25639` → after: `L25659-L25660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25659-L25660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25659-L25660) · [Before (L25638-L25639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25638-L25639)

```diff
-           YB: Wr
-         } = rr, pr = Sr.XM, xr = Wr.JY(pr);
+           qE: Fd
+         } = dd, Qd = Od.QG, td = Fd.hY(Qd);
```

#### 2832. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25647` → after: `L25668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25668) · [Before (L25647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25647)

```diff
-           Ur = Math.max(mr, null !== (Zr = Sr.movingHideDist) && void 0 !== Zr ? Zr : 0),
+           qd = Math.max(od, null !== (Wd = Od.movingHideDist) && void 0 !== Wd ? Wd : 0),
```

#### 2833. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25649` → after: `L25670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25670) · [Before (L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25649)

```diff
-           hr = tr && (Sr.displayOutsideLoadedChunk || (0, Ir.c)().aJ(Math.floor(xr[0]), Math.floor(xr[1]), Math.floor(xr[2])));
+           yd = Hd && (Od.displayOutsideLoadedChunk || (0, Kd.b)().Rk(Math.floor(td[0]), Math.floor(td[1]), Math.floor(td[2])));
```

#### 2834. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25651` → after: `L25672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25672) · [Before (L25651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25651)

```diff
-         const zr = er.get(Sr.Fp),
+         const bd = Yd.get(Od.eQ),
```

#### 2835. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25653` → after: `L25674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25674) · [Before (L25653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25653)

```diff
-         Sr.isMeshShown !== Yr && (Yr ? (Wr.rQr(pr) || (Sr.addMeshComponent(), (0, fr.h)(rr, pr)), Sr.addShadow && !Wr.getState(pr, Wr.names.Px) && (Wr.gM(pr, Wr.names.Px, {
+         Od.isMeshShown !== Td && (Td ? (Fd.Vmd(Qd) || (Od.addMeshComponent(), (0, hd.i)(dd, Qd)), Od.addShadow && !Fd.getState(Qd, Fd.names.Ut) && (Fd.yG(Qd, Fd.names.Ut, {
```

#### 2836. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25655` → after: `L25676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25676) · [Before (L25655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25655)

```diff
-         }), Wr.getState(pr, Wr.names.Px).enabledCombinator = new jr.d)) : (Sr.removeMeshComponent(), Sr.addShadow && Wr.getState(pr, Wr.names.Px) && Wr.bM(pr, Wr.names.Px)), Sr.isMeshShown = Yr)
+         }), Fd.getState(Qd, Fd.names.Ut).enabledCombinator = new Xd.e)) : (Od.removeMeshComponent(), Od.addShadow && Fd.getState(Qd, Fd.names.Ut) && Fd.pG(Qd, Fd.names.Ut)), Od.isMeshShown = Td)
```

#### 2837. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25673-L25675` → after: `L25694-L25696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25694-L25696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25694-L25696) · [Before (L25673-L25675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25673-L25675)

```diff
-         if (rr._competesForCap = Sr, !rr.Fp) return;
-         let Qr = nr.get(rr.Fp);
-         Sr ? (Qr || (Qr = new Set, nr.set(rr.Fp, Qr)), Qr.add(rr)) : Qr && (Qr.delete(rr), 0 === Qr.size && (nr.delete(rr.Fp), er.delete(rr.Fp)))
+         if (dd._competesForCap = Od, !dd.eQ) return;
+         let md = pd.get(dd.eQ);
+         Od ? (md || (md = new Set, pd.set(dd.eQ, md)), md.add(dd)) : md && (md.delete(dd), 0 === md.size && (pd.delete(dd.eQ), Yd.delete(dd.eQ)))
```

#### 2838. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25679` → after: `L25700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25700) · [Before (L25679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25679)

```diff
-         let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr.YB.JY(Qr.XM);
+         let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd.qE.hY(md.QG);
```

#### 2839. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25686` → after: `L25707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25707) · [Before (L25686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25686)

```diff
-         const fr = `${Wr}|${ar}|${jr}`,
+         const hd = `${Fd}|${Rd}|${Xd}`,
```

#### 2840. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25751` → after: `L25772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25772) · [Before (L25751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25751)

```diff
-       return Math.max(rr.hideDist, null !== (Sr = rr.movingHideDist) && void 0 !== Sr ? Sr : 0)
+       return Math.max(dd.hideDist, null !== (Od = dd.movingHideDist) && void 0 !== Od ? Od : 0)
```

#### 2841. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25757` → after: `L25778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25778) · [Before (L25757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25757)

```diff
-       return Sr < Qr ? Qr - Sr : Sr > Zr ? Sr - Zr : 0
+       return Od < md ? md - Od : Od > Wd ? Od - Wd : 0
```

#### 2842. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25760` → after: `L25781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25781) · [Before (L25760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25760)

```diff
-   40342: (rr, Sr, Qr) => {
+   40347: (dd, Od, md) => {
```

#### 2843. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25765-L25771` → after: `L25786-L25792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25786-L25792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25786-L25792) · [Before (L25765-L25771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25765-L25771)

```diff
-     var Zr = Qr(39055),
-       Wr = Qr(38552),
-       ar = Qr(38638),
-       jr = Qr(38625),
-       Ir = Qr(39113),
-       fr = Qr(39580),
-       Er = Qr(39597);
+     var Wd = md(39095),
+       Fd = md(38623),
+       Rd = md(38682),
+       Xd = md(38673),
+       Kd = md(39142),
+       hd = md(39627),
+       vd = md(39633);
```

#### 2844. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25778-L25779` → after: `L25799-L25800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25799-L25800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25799-L25800) · [Before (L25778-L25779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25778-L25779)

```diff
-           JC: null,
-           tZr: null,
+           JA: null,
+           fWd: null,
```

#### 2845. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25795-L25796` → after: `L25816-L25817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25816-L25817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25816-L25817) · [Before (L25795-L25796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25795-L25796)

```diff
-         nB: function(Sr, Qr) {
-           for (const Zr of Qr) Zr.tZr.zZr && ((0, Wr.pausesOutOfView)(rr, Zr.XM, Zr.JC) ? (Zr._posePaused = !0, mr(rr, Zr, Sr)) : Ur(rr, Zr, Sr))
+         yE: function(Od, md) {
+           for (const Wd of md) Wd.fWd.MWd && ((0, Fd.pausesOutOfView)(dd, Wd.QG, Wd.JA) ? (Wd._posePaused = !0, od(dd, Wd, Od)) : qd(dd, Wd, Od))
```

#### 2846. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25802` → after: `L25823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25823) · [Before (L25802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25802)

```diff
-       const Qr = rr.YB.HQr(Sr);
+       const md = dd.qE.HWd(Od);
```

#### 2847. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25807` → after: `L25828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25828) · [Before (L25807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25807)

```diff
-       const Zr = rr.YB.jQr(Sr.XM);
+       const Wd = dd.qE.Pmd(Od.QG);
```

#### 2848. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25810` → after: `L25831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25831) · [Before (L25810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25810)

```diff
-       (0, Er.e)(rr, Sr.XM) || "gliding" === Wr || "driving" === Wr || (Yr(rr, Sr) ? nr(rr, Sr, Zr) : "zombie" !== Wr && er(rr, Sr, Zr, Nr(rr, Sr), Qr))
+       (0, vd.e)(dd, Od.QG) || "gliding" === Fd || "driving" === Fd || (Td(dd, Od) ? pd(dd, Od, Wd) : "zombie" !== Fd && Yd(dd, Od, Wd, Nd(dd, Od), md))
```

#### 2849. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25814` → after: `L25835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25835) · [Before (L25814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25814)

```diff
-       return rr.YB.getState(Sr.XM, "animator")
+       return dd.qE.getState(Od.QG, "animator")
```

#### 2850. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25820` → after: `L25841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25841) · [Before (L25820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25820)

```diff
-       const Wr = rr.YB.jQr(Sr.XM),
+       const Fd = dd.qE.Pmd(Od.QG),
```

#### 2851. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25824-L25825` → after: `L25845-L25846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25845-L25846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25845-L25846) · [Before (L25824-L25825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25824-L25825)

```diff
-         xr = Sr.XM === rr.fC ? Ir.e.getPlayerFacingPitch(rr) : Wr.cameraPitch,
-         mr = null === (Zr = rr.YB.lQr(Sr.XM)) || void 0 === Zr ? void 0 : Zr.jB,
+         td = Od.QG === dd.YV ? Kd.c.getPlayerFacingPitch(dd) : Fd.cameraPitch,
+         od = null === (Wd = dd.qE.oWd(Od.QG)) || void 0 === Wd ? void 0 : Wd.WE,
```

#### 2852. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25827` → after: `L25848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25848) · [Before (L25827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25827)

```diff
-         hr = (0, Er.e)(rr, Sr.XM),
+         yd = (0, vd.e)(dd, Od.QG),
```

#### 2853. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25829` → after: `L25850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25850) · [Before (L25829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25829)

```diff
-         lr = (0, fr.getRigController)(rr, Sr.XM),
+         Sd = (0, hd.getRigController)(dd, Od.QG),
```

#### 2854. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25857` → after: `L25878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25878) · [Before (L25857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25857)

```diff
-         Er = Ir ? rr.YB.getState(Sr.XM, "updateWalkingState").walkingAngle : 0;
+         vd = Kd ? dd.qE.getState(Od.QG, "updateWalkingState").walkingAngle : 0;
```

#### 2855. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25870` → after: `L25891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25891) · [Before (L25870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25870)

```diff
-       return (0, fr.rigHasAction)(rr, Sr.XM, Zr.m)
+       return (0, hd.rigHasAction)(dd, Od.QG, Wd.l)
```

#### 2856. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25874` → after: `L25895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25895) · [Before (L25874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25874)

```diff
-       (!Sr.consumedNetworkArmSwing || Qr.armSwinging && !(0, fr.rigActionPlaying)(rr, Sr.XM, Zr.m)) && (0, fr.playRigAction)(rr, Sr.XM, Zr.m), Sr.consumedNetworkArmSwing = !0, Sr._queuedSwing = !1
+       (!Od.consumedNetworkArmSwing || md.armSwinging && !(0, hd.rigActionPlaying)(dd, Od.QG, Wd.l)) && (0, hd.playRigAction)(dd, Od.QG, Wd.l), Od.consumedNetworkArmSwing = !0, Od._queuedSwing = !1
```

#### 2857. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25879` → after: `L25900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25900) · [Before (L25879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25879)

```diff
-       const Ir = rr.mq,
+       const Kd = dd.pB,
```

#### 2858. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25882` → after: `L25903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25903) · [Before (L25882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25882)

```diff
-           BQ: Er
+           gm: vd
```

#### 2859. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25884` → after: `L25905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25905) · [Before (L25884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25884)

```diff
-       Qr.armSwinging || !Sr.consumedNetworkArmSwing ? (Sr.consumedNetworkArmSwing = !0, fr >= Er ? (ar = Wr / Er, Sr._queuedSwing = !1) : fr >= .65 * Er && !Sr._queuedSwing && (Sr._queuedSwing = !0)) : Sr._queuedSwing && fr >= Er && (ar = Math.min(Wr, fr - Er) / Er, Sr._queuedSwi … [truncated]
+       md.armSwinging || !Od.consumedNetworkArmSwing ? (Od.consumedNetworkArmSwing = !0, hd >= vd ? (Rd = Fd / vd, Od._queuedSwing = !1) : hd >= .65 * vd && !Od._queuedSwing && (Od._queuedSwing = !0)) : Od._queuedSwing && hd >= vd && (Rd = Math.min(Fd, hd - vd) / vd, Od._queuedSwi … [truncated]
```

#### 2860. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25898-L25899` → after: `L25919-L25920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25919-L25920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25919-L25920) · [Before (L25898-L25899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25898-L25899)

```diff
-       const Qr = rr.YB.jQr(Sr.XM),
-         Zr = Sr.XM === rr.fC ? Ir.e.getPlayerFacingPitch(rr) : Qr.cameraPitch,
+       const md = dd.qE.Pmd(Od.QG),
+         Wd = Od.QG === dd.YV ? Kd.c.getPlayerFacingPitch(dd) : md.cameraPitch,
```

#### 2861. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25907` → after: `L25928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25928) · [Before (L25907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25907)

```diff
-       } = rr.YB.getState(Sr.XM, "updateWalkingState"), Wr = Nr(rr, Sr);
+       } = dd.qE.getState(Od.QG, "updateWalkingState"), Fd = Nd(dd, Od);
```

#### 2862. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25918-L25920` → after: `L25939-L25941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25939-L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25939-L25941) · [Before (L25918-L25920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25918-L25920)

```diff
-     const Lr = (0, ar.d)({
-       BQ: 250,
-       vQ: {
+     const Bd = (0, Rd.h)({
+       gm: 250,
+       am: {
```

#### 2863. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25925` → after: `L25946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25946) · [Before (L25925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25925)

```diff
-               lQ: "catmull-rom-spline",
+               Um: "catmull-rom-spline",
```

#### 2864. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25931` → after: `L25952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25952) · [Before (L25931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25931)

```diff
-               lQ: "catmull-rom-spline",
+               Um: "catmull-rom-spline",
```

#### 2865. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25937` → after: `L25958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25958) · [Before (L25937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25937)

```diff
-               lQ: "catmull-rom-spline",
+               Um: "catmull-rom-spline",
```

#### 2866. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25943` → after: `L25964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25964) · [Before (L25943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25943)

```diff
-               lQ: "catmull-rom-spline",
+               Um: "catmull-rom-spline",
```

#### 2867. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25949` → after: `L25970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25970) · [Before (L25949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25949)

```diff
-               lQ: "catmull-rom-spline",
+               Um: "catmull-rom-spline",
```

#### 2868. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25957` → after: `L25978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25978) · [Before (L25957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25957)

```diff
-   40497: (rr, Sr, Qr) => {
+   40504: (dd, Od, md) => {
```

#### 2869. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25961` → after: `L25982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25982) · [Before (L25961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25961)

```diff
-     var Zr = Qr(2383);
+     var Wd = md(2402);
```

#### 2870. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25973` → after: `L25994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR25994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L25994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L25994) · [Before (L25973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25973)

```diff
-         zB: function(rr, Qr) {
+         QE: function(dd, md) {
```

#### 2871. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25982-L25983` → after: `L26003-L26004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26003-L26004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26003-L26004) · [Before (L25982-L25983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25982-L25983)

```diff
-         const Qr = rr.YB.JY(Sr.XM),
-           Wr = (0, Zr.c)().aJ(Qr[0], Qr[1], Qr[2]);
+         const md = dd.qE.hY(Od.QG),
+           Fd = (0, Wd.b)().Rk(md[0], md[1], md[2]);
```

#### 2872. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25988` → after: `L26009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26009) · [Before (L25988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25988)

```diff
-   40382: (rr, Sr, Qr) => {
+   40383: (dd, Od, md) => {
```

#### 2873. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L25993-L26000` → after: `L26014-L26021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26014-L26021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26014-L26021) · [Before (L25993-L26000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L25993-L26000)

```diff
-     var Zr = Qr(38679),
-       Wr = Qr(37866),
-       ar = Qr(38555),
-       jr = Qr(39402),
-       Ir = Qr(38849);
-     const fr = ar.kU.Up(),
-       Er = new ar.kU(0, -.5, .5),
-       pr = new ar.kU(.16, .01, .1).scaleInPlace(1.4),
+     var Wd = md(38736),
+       Fd = md(37958),
+       Rd = md(38627),
+       Xd = md(39459),
+       Kd = md(38907);
+     const hd = Rd.Cq.Up(),
+       vd = new Rd.Cq(0, -.5, .5),
+       Qd = new Rd.Cq(.16, .01, .1).scaleInPlace(1.4),
```

#### 2874. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26027-L26029` → after: `L26048-L26050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26048-L26050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26048-L26050) · [Before (L26027-L26029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26027-L26029)

```diff
-         zB: function(Sr, Qr) {
-           if (Qr._targetEId = (0, Wr.e)(Qr.lineToEId), !rr.YB.gJ(Qr.XM)) return console.warn(`Skipping line from entity ${Qr.XM}, which has no position`), void rr.YB.bM(Qr.XM, "lineToEntity");
-           Qr._thisPos = ar.kU.Zero(), Qr._targetPos = ar.kU.Zero(), Qr._forward = ar.kU.Zero(), Qr._right = ar.kU.Zero(), Qr._up = ar.kU.Zero(), Qr._quat = ar.Quaternion.Zero(), Qr._displacement = ar.kU.Zero(), Qr._cameraOffset = ar.kU.Zero(), Qr._initialCameraOffset = ar.kU.Zero … [truncated]
+         QE: function(Od, md) {
+           if (md._targetEId = (0, Fd.b)(md.lineToEId), !dd.qE.gM(md.QG)) return console.warn(`Skipping line from entity ${md.QG}, which has no position`), void dd.qE.pG(md.QG, "lineToEntity");
+           md._thisPos = Rd.Cq.Zero(), md._targetPos = Rd.Cq.Zero(), md._forward = Rd.Cq.Zero(), md._right = Rd.Cq.Zero(), md._up = Rd.Cq.Zero(), md._quat = Rd.Quaternion.Zero(), md._displacement = Rd.Cq.Zero(), md._cameraOffset = Rd.Cq.Zero(), md._initialCameraOffset = Rd.Cq.Zero … [truncated]
```

#### 2875. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26040` → after: `L26061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26061) · [Before (L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26040)

```diff
-           }()), Qr._line.color = mr, Qr._line.ut = !1, rr.Ox.Sh(Qr._line)
+           }()), md._line.color = od, md._line.my = !1, dd.gt.Fy(md._line)
```

#### 2876. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26042` → after: `L26063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26063) · [Before (L26042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26042)

```diff
-         bq: function(rr, Sr) {
+         qS: function(dd, Od) {
```

#### 2877. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26045` → after: `L26066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26066) · [Before (L26045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26045)

```diff
-         nB: function(Sr, Qr) {
+         yE: function(Od, md) {
```

#### 2878. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26052-L26055` → after: `L26073-L26076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26073-L26076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26073-L26076) · [Before (L26052-L26055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26052-L26055)

```diff
-       const Qr = rr.YB.gJ(Sr._targetEId);
-       if (!Qr) return Sr._line.VK(!1), void(Sr._enabled = null);
-       const Zr = Sr._thisPos.dp(rr.YB.gJ(Sr.XM).lD);
-       (0, Ir.p)(Sr._line, Zr.x, Zr.y, Zr.z);
+       const md = dd.qE.gM(Od._targetEId);
+       if (!md) return Od._line.rY(!1), void(Od._enabled = null);
+       const Wd = Od._thisPos.ZQ(dd.qE.gM(Od.QG).y_);
+       (0, Kd.q)(Od._line, Wd.x, Wd.y, Wd.z);
```

#### 2879. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26059-L26061` → after: `L26080-L26082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26080-L26082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26080-L26082) · [Before (L26059-L26061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26059-L26061)

```diff
-               jr = rr.YB.HQr(Sr._targetEId);
-             if (!jr) return Wr.dp(Zr.lD), nr.NON_HUMANOID;
-             const Ir = rr.Ox.bC,
+               Xd = dd.qE.HWd(Od._targetEId);
+             if (!Xd) return Fd.ZQ(Wd.y_), pd.NON_HUMANOID;
+             const Kd = dd.gt.HA,
```

#### 2880. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26063` → after: `L26084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26084) · [Before (L26063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26063)

```diff
-                 JC: fr
+                 JA: hd
```

#### 2881. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26068` → after: `L26089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26089) · [Before (L26068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26068)

```diff
-               return ar.kU.TransformCoordinatesToRef(Er, rr, Wr), nr.THIRD_PERSON_HUMANOID
+               return Rd.Cq.TransformCoordinatesToRef(vd, dd, Fd), pd.THIRD_PERSON_HUMANOID
```

#### 2882. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26070-L26073` → after: `L26091-L26094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26091-L26094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26091-L26094) · [Before (L26070-L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26070-L26073)

```diff
-             if (Sr._targetEId !== rr.fC) return Wr.dp(Zr.lD), Wr.y += .8, nr.THIRD_PERSON_HUMANOID;
-             const mr = rr.camera.pitch + rr.camera.eh[0],
-               Nr = rr.camera.heading + rr.camera.eh[1],
-               Ur = rr.camera.mx + rr.camera.eh[2];
+             if (Od._targetEId !== dd.YV) return Fd.ZQ(Wd.y_), Fd.y += .8, pd.THIRD_PERSON_HUMANOID;
+             const od = dd.camera.pitch + dd.camera.Jy[0],
+               Nd = dd.camera.heading + dd.camera.Jy[1],
+               qd = dd.camera.Kt + dd.camera.Jy[2];
```

#### 2883. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26075` → after: `L26096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26096) · [Before (L26075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26075)

```diff
-             const tr = rr.YB.gJ(rr.camera.qJ).lD;
+             const Hd = dd.qE.gM(dd.camera.pM).y_;
```

#### 2884. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26079` → after: `L26100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26100) · [Before (L26079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26079)

```diff
-           Sr._targetPos.subtractToRef(Qr, Sr._displacement), null === Sr._enabled ? Wr === nr.FIRST_PERSON_HUMANOID ? (Sr._initialCameraOffset.iH(Sr._cameraOffset), Sr._enabled = !1, Sr._line.VK(!1)) : (Sr._enabled = !0, Sr._line.VK(!0)) : !1 !== Sr._enabled || Wr === nr.FIRST_PE … [truncated]
+           Od._targetPos.subtractToRef(md, Od._displacement), null === Od._enabled ? Fd === pd.FIRST_PERSON_HUMANOID ? (Od._initialCameraOffset.Bx(Od._cameraOffset), Od._enabled = !1, Od._line.rY(!1)) : (Od._enabled = !0, Od._line.rY(!0)) : !1 !== Od._enabled || Fd === pd.FIRST_PE … [truncated]
```

#### 2885. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26084-L26085` → after: `L26105-L26106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26105-L26106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26105-L26106) · [Before (L26084-L26085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26084-L26085)

```diff
-         hr = ar.kU.CrossToRef(fr, mr, Sr._right).normalizeToRef(Sr._right),
-         zr = ar.kU.CrossToRef(mr, hr, Sr._up),
+         yd = Rd.Cq.CrossToRef(hd, od, Od._right).normalizeToRef(Od._right),
+         bd = Rd.Cq.CrossToRef(od, yd, Od._up),
```

#### 2886. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26087` → after: `L26108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26108) · [Before (L26087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26087)

```diff
-       (0, Ir.q)(Sr._line, Yr.x, Yr.y, Yr.z, Yr.w);
+       (0, Kd.s)(Od._line, Td.x, Td.y, Td.z, Td.w);
```

#### 2887. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26089` → after: `L26110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26110) · [Before (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26089)

```diff
-       Sr._line.Tx.set(1, er, jr)
+       Od._line.Tt.set(1, Yd, Xd)
```

#### 2888. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26095` → after: `L26116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26116) · [Before (L26095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26095)

```diff
-   40504: (rr, Sr, Qr) => {
+   40510: (dd, Od, md) => {
```

#### 2889. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26100-L26102` → after: `L26121-L26123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26121-L26123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26121-L26123) · [Before (L26100-L26102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26100-L26102)

```diff
-     var Zr = Qr(2364),
-       Wr = Qr(37927),
-       ar = Qr(388),
+     var Wd = md(2386),
+       Fd = md(38006),
+       Rd = md(415),
```

#### 2890. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26104-L26112` → after: `L26125-L26133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26125-L26133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26125-L26133) · [Before (L26104-L26112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26104-L26112)

```diff
-       Ir = Qr(34),
-       fr = Qr(2114),
-       Er = Qr(2049),
-       pr = Qr(7424),
-       xr = Qr(26),
-       mr = Qr(804),
-       Nr = Qr(2383),
-       Ur = Qr(1279),
-       tr = Qr(379);
+       Kd = md(32),
+       hd = md(2116),
+       vd = md(2057),
+       Qd = md(7410),
+       td = md(29),
+       od = md(819),
+       Nd = md(2402),
+       qd = md(1286),
+       Hd = md(405);
```

#### 2891. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26117` → after: `L26138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26138) · [Before (L26117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26117)

```diff
-       return (0, mr.t)(xr.c.get("clientEscMenuOptions").cameraFOV)
+       return (0, od.r)(td.e.get("clientEscMenuOptions").cameraFOV)
```

#### 2892. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26124` → after: `L26145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26145) · [Before (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26124)

```diff
-         const Sr = (0, Nr.c)().getEyeCappingBodyHeight(rr.fC);
+         const Od = (0, Nd.b)().getEyeCappingBodyHeight(dd.YV);
```

#### 2893. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26126-L26127` → after: `L26147-L26148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26147-L26148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26147-L26148) · [Before (L26126-L26127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26126-L26127)

```diff
-         const Qr = rr.Ox.r_();
-         return (0, mr.s)(Sr, Qr.near, Qr.fov, (0, mr.o)(rr.Ox.engine))
+         const md = dd.gt.l_();
+         return (0, od.n)(Od, md.near, md.fov, (0, od.l)(dd.gt.engine))
```

#### 2894. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26129-L26130` → after: `L26150-L26151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26150-L26151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26150-L26151) · [Before (L26129-L26130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26129-L26130)

```diff
-       return fr.d.subscribe("movementBasedFovScale", (rr => {
-         Sr = "number" === typeof rr && isFinite(rr) ? rr : 1
+       return hd.e.subscribe("movementBasedFovScale", (dd => {
+         Od = "number" === typeof dd && isFinite(dd) ? dd : 1
```

#### 2895. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26133-L26135` → after: `L26154-L26156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26154-L26156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26154-L26156) · [Before (L26133-L26135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26133-L26135)

```diff
-       })), Ir.i.subscribe(`entityScale|${rr.fC}`, (function() {
-         const Sr = rr.YB.iQr(rr.camera.qJ);
-         Sr && ((0, Nr.c)().removeFromEyeHeightCache(rr.fC), Sr.offset[1] = Math.min((0, Nr.c)().getLifeformEyeHeight(rr.fC), Qr()))
+       })), Kd.j.subscribe(`entityScale|${dd.YV}`, (function() {
+         const Od = dd.qE.JWd(dd.camera.pM);
+         Od && ((0, Nd.b)().removeFromEyeHeightCache(dd.YV), Od.offset[1] = Math.min((0, Nd.b)().getLifeformEyeHeight(dd.YV), md()))
```

#### 2896. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26141` → after: `L26162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26162) · [Before (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26141)

```diff
-           fovMultiplier: new Wr.k,
+           fovMultiplier: new Fd.h,
```

#### 2897. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26148` → after: `L26169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26169) · [Before (L26148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26148)

```diff
-         nB: function(Zr, Wr) {
+         yE: function(Wd, Fd) {
```

#### 2898. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26150-L26154` → after: `L26171-L26175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26171-L26175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26171-L26175) · [Before (L26150-L26154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26150-L26154)

```diff
-             const Wr = rr.YB.iQr(rr.camera.qJ),
-               Ir = rr.YB.getState(ar.XM, "movement"),
-               fr = rr.YB.ASr(ar.XM).physicsState,
-               Yr = rr.YB.cV(ar.XM);
-             jr().set(hr, Yr.Lh[0], fr.type === pr.n.GLIDER ? Yr.Lh[1] : 0, Yr.Lh[2]);
+             const Fd = dd.qE.JWd(dd.camera.pM),
+               Kd = dd.qE.getState(Rd.QG, "movement"),
+               hd = dd.qE.Hmd(Rd.QG).physicsState,
+               Td = dd.qE.pC(Rd.QG);
+             Xd().set(yd, Td.Gy[0], hd.type === Qd.q.GLIDER ? Td.Gy[1] : 0, Td.Gy[2]);
```

#### 2899. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26156-L26162` → after: `L26177-L26183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26177-L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26177-L26183) · [Before (L26156-L26162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26156-L26162)

```diff
-               er = 4 * (Ir._flying ? rr.NK.flySpeedMultiplier : 1);
-             let Kr = mr.l;
-             nr > er && (Kr += Math.min(.033 * (nr - 4), .5) * Sr), Kr *= ar.fovMultiplier.getTotalMultipliedVal(), ar.zoomKeyPressed && rr.NK.canUseZoomKey && (Kr *= .2), Kr *= xr.c.get("clientEscMenuOptions").cameraFOV / 100, Kr = Math.min(Kr, mr.i), ar.movementBasedFov = ar.mov … [truncated]
-             const yr = (0, Nr.c)().getLifeformEyeHeight(ar.XM);
-             if (zr[1] += yr, !1 === xr.c.get("clientEscMenuOptions").disableBobbing) {
-               const Sr = (0, Nr.c)().getIsStoodOnBlock(ar.XM);
-               0 === nr || !1 === Sr || 0 !== rr.camera.MJ ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += Zr / (140 - 2 * (0, Er.h)(nr, 1, 100));
+               Yd = 4 * (Kd._flying ? dd.EY.flySpeedMultiplier : 1);
+             let gd = od.j;
+             pd > Yd && (gd += Math.min(.033 * (pd - 4), .5) * Od), gd *= Rd.fovMultiplier.getTotalMultipliedVal(), Rd.zoomKeyPressed && dd.EY.canUseZoomKey && (gd *= .2), gd *= td.e.get("clientEscMenuOptions").cameraFOV / 100, gd = Math.min(gd, od.g), Rd.movementBasedFov = Rd.mov … [truncated]
+             const wd = (0, Nd.b)().getLifeformEyeHeight(Rd.QG);
+             if (bd[1] += wd, !1 === td.e.get("clientEscMenuOptions").disableBobbing) {
+               const Od = (0, Nd.b)().getIsStoodOnBlock(Rd.QG);
+               0 === pd || !1 === Od || 0 !== dd.camera.rM ? this.state.bobbleProgress = 0 : this.state.bobbleProgress += Wd / (140 - 2 * (0, vd.h)(pd, 1, 100));
```

#### 2900. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26164` → after: `L26185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26185) · [Before (L26164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26164)

```diff
-               this.state.bobbleValue = (0, Ur.yb)(this.state.bobbleValue, Qr, .1);
+               this.state.bobbleValue = (0, qd.ub)(this.state.bobbleValue, md, .1);
```

#### 2901. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26168` → after: `L26189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26189) · [Before (L26168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26168)

```diff
-             const Br = (0, Nr.c)().qD(ar.XM),
+             const Ed = (0, Nd.b)().T_(Rd.QG),
```

#### 2902. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26171` → after: `L26192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26192) · [Before (L26171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26171)

```diff
-               for (let rr = 0; rr < 3; rr++) Wr.offset[rr] = (0, Ur.yb)(Wr.offset[rr], zr[rr], Tr);
+               for (let dd = 0; dd < 3; dd++) Fd.offset[dd] = (0, qd.ub)(Fd.offset[dd], bd[dd], Jd);
```

#### 2903. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26180` → after: `L26201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26201) · [Before (L26180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26180)

```diff
-   40509: (rr, Sr, Qr) => {
+   40518: (dd, Od, md) => {
```

#### 2904. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26184-L26185` → after: `L26205-L26206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26205-L26206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26205-L26206) · [Before (L26184-L26185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26184-L26185)

```diff
-     var Zr = Qr(5681),
-       Wr = Qr(208);
+     var Wd = md(5641),
+       Fd = md(218);
```

#### 2905. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26211-L26214` → after: `L26232-L26235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26232-L26235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26232-L26235) · [Before (L26211-L26214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26211-L26214)

```diff
-           const Er = rr.YB.JY(rr.fC),
-             pr = rr.camera.Y1(),
-             xr = rr.camera.uD();
-           Sr[0] = Er[2], Sr[1] = Er[1] + Wr.i.Uz * Wr.i.playerEyeToHeightRatio, Sr[2] = Er[0], Sr[3] = pr[2], Sr[4] = pr[1], Sr[5] = pr[0], Sr[6] = xr[2], Sr[7] = xr[1], Sr[8] = xr[0];
+           const vd = dd.qE.hY(dd.YV),
+             Qd = dd.camera.B_(),
+             td = dd.camera.J_();
+           Od[0] = vd[2], Od[1] = vd[1] + Fd.i.yb * Fd.i.playerEyeToHeightRatio, Od[2] = vd[0], Od[3] = Qd[2], Od[4] = Qd[1], Od[5] = Qd[0], Od[6] = td[2], Od[7] = td[1], Od[8] = td[0];
```

#### 2906. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26220` → after: `L26241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26241) · [Before (L26220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26220)

```diff
-         nB: null
+         yE: null
```

#### 2907. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26224` → after: `L26245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26245) · [Before (L26224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26224)

```diff
-   40514: (rr, Sr, Qr) => {
+   40520: (dd, Od, md) => {
```

#### 2908. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26228` → after: `L26249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26249) · [Before (L26228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26228)

```diff
-     var Zr = Qr(388),
+     var Wd = md(415),
```

#### 2909. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26230-L26231` → after: `L26251-L26252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26251-L26252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26251-L26252) · [Before (L26230-L26231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26230-L26231)

```diff
-       ar = Qr(34),
-       jr = Qr(2114);
+       Rd = md(32),
+       Xd = md(2116);
```

#### 2910. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26248-L26249` → after: `L26269-L26270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26269-L26270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26269-L26270) · [Before (L26248-L26249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26248-L26249)

```diff
-         zB: function(Sr, Qr) {
-           Qr.thisPlayerTeleportSub = ar.i.subscribe(`otherPlayerTeleported|${Sr}`, (Sr => {
+         QE: function(Od, md) {
+           md.thisPlayerTeleportSub = Rd.j.subscribe(`otherPlayerTeleported|${Od}`, (Od => {
```

#### 2911. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26253` → after: `L26274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26274) · [Before (L26253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26253)

```diff
-             const Wr = rr.YB.JY(rr.fC);
+             const Fd = dd.qE.hY(dd.YV);
```

#### 2912. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26255` → after: `L26276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26276) · [Before (L26255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26255)

```diff
-           })), Qr.localPlayerTeleportSub = ar.i.subscribe("localPlayerTeleported", (Zr => {
+           })), md.localPlayerTeleportSub = Rd.j.subscribe("localPlayerTeleported", (Wd => {
```

#### 2913. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26261` → after: `L26282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26282) · [Before (L26261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26261)

```diff
-             const jr = rr.YB.getState(Sr, "smoothToServerPos");
+             const Xd = dd.qE.getState(Od, "smoothToServerPos");
```

#### 2914. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26265-L26266` → after: `L26286-L26287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26286-L26287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26286-L26287) · [Before (L26265-L26266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26265-L26266)

```diff
-         bq: function(Sr, Qr) {
-           ar.i.unsubscribe(Qr.thisPlayerTeleportSub), ar.i.unsubscribe(Qr.localPlayerTeleportSub);
+         qS: function(Od, md) {
+           Rd.j.unsubscribe(md.thisPlayerTeleportSub), Rd.j.unsubscribe(md.localPlayerTeleportSub);
```

#### 2915. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26268-L26269` → after: `L26289-L26290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26289-L26290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26289-L26290) · [Before (L26268-L26269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26268-L26269)

```diff
-             YB: Zr
-           } = rr, Wr = Zr.LQr(Sr);
+             qE: Wd
+           } = dd, Fd = Wd.tWd(Od);
```

#### 2916. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26271` → after: `L26292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26292) · [Before (L26271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26271)

```diff
-           const jr = Zr.getState(Sr, Zr.names.Px);
+           const Xd = Wd.getState(Od, Wd.names.Ut);
```

#### 2917. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26275` → after: `L26296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26296) · [Before (L26275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26275)

```diff
-           const Zr = rr.YB.JY(rr.fC);
+           const Wd = dd.qE.hY(dd.YV);
```

#### 2918. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26286` → after: `L26307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26307) · [Before (L26286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26286)

```diff
-             const Sr = rr.YB.getState(Wr.XM, "smoothToServerPos");
+             const Od = dd.qE.getState(Fd.QG, "smoothToServerPos");
```

#### 2919. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26297-L26298` → after: `L26318-L26319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26318-L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26318-L26319) · [Before (L26297-L26298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26297-L26298)

```diff
-         YB: Zr
-       } = rr, Wr = Zr.LQr(Sr.XM);
+         qE: Wd
+       } = dd, Fd = Wd.tWd(Od.QG);
```

#### 2920. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26300` → after: `L26321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26321) · [Before (L26300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26300)

```diff
-       const ar = Zr.getState(Sr.XM, Zr.names.Px);
+       const Rd = Wd.getState(Od.QG, Wd.names.Ut);
```

#### 2921. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26316-L26317` → after: `L26337-L26338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26337-L26338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26337-L26338) · [Before (L26316-L26317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26316-L26317)

```diff
-         const Wr = null === (Qr = rr.YB.jQr(rr.fC)) || void 0 === Qr ? void 0 : Qr.ridingVehicleEId;
-         return !!Wr && Wr === (null === (Zr = rr.YB.jQr(Sr.XM)) || void 0 === Zr ? void 0 : Zr.ridingVehicleEId)
+         const Fd = null === (md = dd.qE.Pmd(dd.YV)) || void 0 === md ? void 0 : md.ridingVehicleEId;
+         return !!Fd && Fd === (null === (Wd = dd.qE.Pmd(Od.QG)) || void 0 === Wd ? void 0 : Wd.ridingVehicleEId)
```

#### 2922. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26319` → after: `L26340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26340) · [Before (L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26319)

```diff
-         const Sr = jr.d.get("gameCamera");
+         const Od = Xd.e.get("gameCamera");
```

#### 2923. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26321` → after: `L26342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26342) · [Before (L26321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26321)

```diff
-       }(Sr.XM)
+       }(Od.QG)
```

#### 2924. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26332` → after: `L26353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26353) · [Before (L26332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26332)

```diff
-   40520: (rr, Sr, Qr) => {
+   40522: (dd, Od, md) => {
```

#### 2925. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26338` → after: `L26359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26359) · [Before (L26338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26338)

```diff
-     var Zr = Qr(388),
+     var Wd = md(415),
```

#### 2926. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26340-L26345` → after: `L26361-L26366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26361-L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26361-L26366) · [Before (L26340-L26345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26340-L26345)

```diff
-       ar = Qr(37851),
-       jr = Qr(37843),
-       Ir = Qr(5779),
-       fr = Qr(2383),
-       Er = Qr(39488),
-       pr = Qr(39580);
+       Rd = md(37942),
+       Xd = md(37939),
+       Kd = md(5733),
+       hd = md(2402),
+       vd = md(39547),
+       Qd = md(39627);
```

#### 2927. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26358` → after: `L26379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26379) · [Before (L26358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26358)

```diff
-         zB: (rr, Sr) => {
+         QE: (dd, Od) => {
```

#### 2928. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26361` → after: `L26382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26382) · [Before (L26361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26361)

```diff
-         bq: null,
+         qS: null,
```

#### 2929. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26363` → after: `L26384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26384) · [Before (L26363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26363)

```diff
-           const Zr = (0, fr.c)();
+           const Wd = (0, hd.b)();
```

#### 2930. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26365-L26366` → after: `L26386-L26387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26386-L26387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26386-L26387) · [Before (L26365-L26366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26365-L26366)

```diff
-             if (!rr.YB.LQr(fr.XM).isAlive) continue;
-             const Sr = rr.YB.ASr(fr.XM);
+             if (!dd.qE.tWd(hd.QG).isAlive) continue;
+             const Od = dd.qE.Hmd(hd.QG);
```

#### 2931. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26369-L26371` → after: `L26390-L26392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26390-L26392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26390-L26392) · [Before (L26369-L26371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26369-L26371)

```diff
-             if (rr.bloxd.getResolvedPhysicsSettings(fr.XM, Qr).disableFootstepSounds) continue;
-             const mr = rr.YB.JY(fr.XM);
-             let Ur = Zr.VY(Math.floor(mr[0]), Math.ceil(mr[1]) - 1, Math.floor(mr[2]));
+             if (dd.bloxd.getResolvedPhysicsSettings(hd.QG, md).disableFootstepSounds) continue;
+             const od = dd.qE.hY(hd.QG);
+             let qd = Wd.mY(Math.floor(od[0]), Math.ceil(od[1]) - 1, Math.floor(od[2]));
```

#### 2932. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26376` → after: `L26397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26397) · [Before (L26376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26376)

```diff
-             const tr = Wr().Oj(fr.lastPos, mr);
+             const Hd = Fd().UX(hd.lastPos, od);
```

#### 2933. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26378` → after: `L26399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26399) · [Before (L26378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26378)

```diff
-             const hr = (0, pr.getRigFootfallPhase)(rr, fr.XM);
+             const yd = (0, Qd.getRigFootfallPhase)(dd, hd.QG);
```

#### 2934. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26380-L26383` → after: `L26401-L26404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26401-L26404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26401-L26404) · [Before (L26380-L26383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26380-L26383)

```diff
-             const zr = Number.isNaN(hr) ? fr.distSinceLastSound > xr : fr.stepPending;
-             if (Sr.isOnGround() && 0 !== Ur && (zr && !Ir.j[Ur].HN)) {
-               const rr = (0, ar.c)(`step_${(0,Er.d)(Ur,!1)}`);
-               jr.b.play(rr, .15), fr.distSinceLastSound = 0, fr.stepPending = !1
+             const bd = Number.isNaN(yd) ? hd.distSinceLastSound > td : hd.stepPending;
+             if (Od.isOnGround() && 0 !== qd && (bd && !Kd.i[qd].LN)) {
+               const dd = (0, Rd.f)(`step_${(0,vd.e)(qd,!1)}`);
+               Xd.d.play(dd, .15), hd.distSinceLastSound = 0, hd.stepPending = !1
```

#### 2935. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26396` → after: `L26417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26417) · [Before (L26396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26396)

```diff
-   40525: (rr, Sr, Qr) => {
+   40528: (dd, Od, md) => {
```

#### 2936. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26402-L26403` → after: `L26423-L26424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26423-L26424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26423-L26424) · [Before (L26402-L26403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26402-L26403)

```diff
-         zB: function(rr, Sr) {},
-         bq: function(rr, Sr) {},
+         QE: function(dd, Od) {},
+         qS: function(dd, Od) {},
```

#### 2937. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26411` → after: `L26432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26432) · [Before (L26411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26411)

```diff
-   40417: (rr, Sr, Qr) => {
+   40413: (dd, Od, md) => {
```

#### 2938. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26416-L26417` → after: `L26437-L26438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26437-L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26437-L26438) · [Before (L26416-L26417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26416-L26417)

```diff
-     var Zr = Qr(2364),
-       Wr = Qr(388),
+     var Wd = md(2386),
+       Fd = md(415),
```

#### 2939. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26419-L26423` → after: `L26440-L26444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26440-L26444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26440-L26444) · [Before (L26419-L26423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26419-L26423)

```diff
-       jr = Qr(2484),
-       Ir = Qr(40391),
-       fr = Qr(1308),
-       Er = Qr(39157),
-       pr = Qr(39113);
+       Xd = md(2497),
+       Kd = md(40395),
+       hd = md(1313),
+       vd = md(39175),
+       Qd = md(39142);
```

#### 2940. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26432` → after: `L26453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26453) · [Before (L26432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26432)

```diff
-           if (console.assert(1 === Qr.length, "There should only be one entity with updateServerOfMovement."), rr.YB.LQr(rr.fC).isAlive)
+           if (console.assert(1 === md.length, "There should only be one entity with updateServerOfMovement."), dd.qE.tWd(dd.YV).isAlive)
```

#### 2941. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26435` → after: `L26456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26456) · [Before (L26435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26435)

```diff
-               const Sr = rr.YB.gJ(rr.fC).GSr;
+               const Od = dd.qE.gM(dd.YV).Nmd;
```

#### 2942. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26437-L26438` → after: `L26458-L26459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26458-L26459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26458-L26459) · [Before (L26437-L26438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26437-L26438)

```diff
-               const Qr = rr.YB.jQr(Ir.XM),
-                 mr = rr.YB.ASr(Ir.XM),
+               const md = dd.qE.Pmd(Kd.QG),
+                 od = dd.qE.Hmd(Kd.QG),
```

#### 2943. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26440-L26457` → after: `L26461-L26478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26461-L26478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26461-L26478) · [Before (L26440-L26457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26440-L26457)

```diff
-                   tI: Sr[0],
-                   hI: Sr[1],
-                   zI: Sr[2],
-                   nI: (0, Er.x)(rr.bloxd.getResolvedPhysicsSettings(Ir.XM, mr.physicsState), mr.steeringHeading, pr.e.getPlayerFacingHeading(rr)),
-                   YI: Qr.heading,
-                   eI: Qr.speed,
-                   KI: Qr.jumping,
-                   yI: Qr.crouching,
-                   BI: Qr.cameraPitch,
-                   TI: Qr.armSwinging,
-                   vI: null !== (Wr = rr.LSr) && void 0 !== Wr ? Wr : ar().copy(xr, rr.camera.Y1()),
-                   OI: Qr.cameraDirection,
-                   LI: (0, Zr.getLastReceivedPacketId)(),
-                   lI: rr.um,
-                   XI: Qr.bunnyHopDisabled,
-                   HI: Qr.toggleFly,
- ... (2 more removed lines; see GitHub link above)
+                   yK: Od[0],
+                   bK: Od[1],
+                   TK: Od[2],
+                   YK: (0, vd.p)(dd.bloxd.getResolvedPhysicsSettings(Kd.QG, od.physicsState), od.steeringHeading, Qd.c.getPlayerFacingHeading(dd)),
+                   pK: md.heading,
+                   gK: md.speed,
+                   wK: md.jumping,
+                   aK: md.crouching,
+                   EK: md.cameraPitch,
+                   JK: md.armSwinging,
+                   UK: null !== (Fd = dd.mmd) && void 0 !== Fd ? Fd : Rd().copy(td, dd.camera.B_()),
+                   xK: md.cameraDirection,
+                   BK: (0, Wd.getLastReceivedPacketId)(),
+                   SK: dd.XN,
+                   sK: md.bunnyHopDisabled,
+                   uK: md.toggleFly,
+ ... (2 more added lines; see GitHub link above)
```

#### 2944. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26459` → after: `L26480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26480) · [Before (L26459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26459)

```diff
-               isNaN(Nr.eI) && (console.error("speed was NaN! Setting to 0"), Nr.eI = 0);
+               isNaN(Nd.gK) && (console.error("speed was NaN! Setting to 0"), Nd.gK = 0);
```

#### 2945. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26473` → after: `L26494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26494) · [Before (L26473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26473)

```diff
-               Ur.pitch = rr.camera.pitch, tr.speed = Qr.speed, 0 === Ur.pitch && (tr.speed *= 1.3), (0, Zr.sendColyMessage)(jr.pi, Nr)
+               qd.pitch = dd.camera.pitch, Hd.speed = md.speed, 0 === qd.pitch && (Hd.speed *= 1.3), (0, Wd.sendColyMessage)(Xd.Dh, Nd)
```

#### 2946. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26483` → after: `L26504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26504) · [Before (L26483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26483)

```diff
-   40683: (rr, Sr, Qr) => {
+   40688: (dd, Od, md) => {
```

#### 2947. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26485-L26486` → after: `L26506-L26507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26506-L26507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26506-L26507) · [Before (L26485-L26486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26485-L26486)

```diff
-       b: () => er,
-       d: () => nr
+       c: () => Yd,
+       f: () => pd
```

#### 2948. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26488-L26499` → after: `L26509-L26520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26509-L26520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26509-L26520) · [Before (L26488-L26499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26488-L26499)

```diff
-     var Zr = Qr(208),
-       Wr = Qr(2396),
-       ar = Qr(1371),
-       jr = Qr(1920),
-       Ir = Qr(35287),
-       fr = Qr(5257),
-       Er = Qr(2393),
-       pr = Qr(4832),
-       xr = Qr(37522),
-       mr = Qr(38008),
-       Nr = Qr(38011),
-       Ur = Qr(34);
+     var Wd = md(218),
+       Fd = md(2421),
+       Rd = md(1368),
+       Xd = md(1922),
+       Kd = md(35375),
+       hd = md(5161),
+       vd = md(2414),
+       Qd = md(4820),
+       td = md(37652),
+       od = md(38096),
+       Nd = md(38102),
+       qd = md(32);
```

#### 2949. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26506` → after: `L26527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26527) · [Before (L26506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26506)

```diff
-       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nr.x,
+       let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.B,
```

#### 2950. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26526` → after: `L26547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26547) · [Before (L26526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26526)

```diff
-           const [Sr, Qr] = rr.qx.Iq, Wr = Math.max(Zr.i.defaultChunkHorizAddDistance, Sr - tr);
+           const [Od, md] = dd.Bt.yB, Fd = Math.max(Wd.i.defaultChunkHorizAddDistance, Od - Hd);
```

#### 2951. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26532` → after: `L26553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26553) · [Before (L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26532)

```diff
-           return (0, fr.l)(Wr), (0, fr.c)(rr.qx, ar), (0, mr.t)(...(0, fr.e)(ar))
+           return (0, hd.p)(Fd), (0, hd.b)(dd.Bt, Rd), (0, od.t)(...(0, hd.f)(Rd))
```

#### 2952. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26534` → after: `L26555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26555) · [Before (L26534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26534)

```diff
-         return null === Qr ? (0, Nr.m)(Sr) && (Ir = Sr) : ar = -1 / 0, Qr
+         return null === md ? (0, Nd.k)(Od) && (Kd = Od) : Rd = -1 / 0, md
```

#### 2953. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26536-L26537` → after: `L26557-L26558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26557-L26558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26557-L26558) · [Before (L26536-L26537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26536-L26537)

```diff
-         1 === Qr ? Kr("shed", rr, Zr, Sr.memoryBytes()) : console.warn(`wasm memory: shed again (${rr}): shed ${Qr}`, Zr.wasmMemoryShed)
-       }), (() => rr.qx.Iq[0])), (0, Wr.Y)((() => {
+         1 === md ? gd("shed", dd, Wd, Od.memoryBytes()) : console.warn(`wasm memory: shed again (${dd}): shed ${md}`, Wd.wasmMemoryShed)
+       }), (() => dd.Bt.yB[0])), (0, Fd.W)((() => {
```

#### 2954. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26544-L26545` → after: `L26565-L26566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26565-L26566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26565-L26566) · [Before (L26544-L26545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26544-L26545)

```diff
-       const er = Ur.i.subscribe("appManagerUpdated|gameState", (rr => {
-         "inGame" === rr && (Ur.i.unsubscribe(er), (0, pr.g)((() => {
+       const Yd = qd.j.subscribe("appManagerUpdated|gameState", (dd => {
+         "inGame" === dd && (qd.j.unsubscribe(Yd), (0, Qd.e)((() => {
```

#### 2955. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26570-L26572` → after: `L26591-L26593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26591-L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26591-L26593) · [Before (L26570-L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26570-L26572)

```diff
-         fr = `${(0,Nr.y)(Sr)} (${Sr}): ${Wr}`,
-         Er = `wasm_memory_${rr}_${Sr}_m${(0,xr.i)(Zr)}`;
-       (0, ar.Pt)(new Error(fr), {
+         hd = `${(0,Nd.E)(Od)} (${Od}): ${Fd}`,
+         vd = `wasm_memory_${dd}_${Od}_m${(0,td.i)(Wd)}`;
+       (0, Rd.rH)(new Error(hd), {
```

#### 2956. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26580` → after: `L26601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26601) · [Before (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26580)

```diff
-   40268: (rr, Sr, Qr) => {
+   40280: (dd, Od, md) => {
```

#### 2957. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26583` → after: `L26604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26604) · [Before (L26583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26583)

```diff
-       e: () => jr
+       d: () => Xd
```

#### 2958. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26585-L26586` → after: `L26606-L26607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26606-L26607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26606-L26607) · [Before (L26585-L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26585-L26586)

```diff
-     var Zr = Qr(38764),
-       Wr = Qr(3879);
+     var Wd = md(38808),
+       Fd = md(3864);
```

#### 2959. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26591-L26592` → after: `L26612-L26613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26612-L26613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26612-L26613) · [Before (L26591-L26592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26591-L26592)

```diff
-       } = rr.Ox;
-       return "CU" in Sr && Sr._gl.isContextLost()
+       } = dd.gt;
+       return "eq" in Od && Od._gl.isContextLost()
```

#### 2960. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26599` → after: `L26620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26620) · [Before (L26599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26599)

```diff
-       if (!("lC" in rr)) {
+       if (!("cV" in dd)) {
```

#### 2961. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26602` → after: `L26623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26623) · [Before (L26602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26602)

```diff
-         const rr = (0, Wr.m)();
+         const dd = (0, Fd.j)();
```

#### 2962. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26605` → after: `L26626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26626) · [Before (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26605)

```diff
-           Ir = (0, Zr.c)(Sr);
+           Kd = (0, Wd.e)(Od);
```

#### 2963. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26610-L26611` → after: `L26631-L26632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26631-L26632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26631-L26632) · [Before (L26610-L26611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26610-L26611)

```diff
-       const jr = rr.MU(),
-         Ir = jr.CU.add((() => {
+       const Xd = dd.Iq(),
+         Kd = Xd.eq.add((() => {
```

#### 2964. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26618-L26619` → after: `L26639-L26640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26639-L26640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26639-L26640) · [Before (L26618-L26619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26618-L26619)

```diff
-         fr = rr.lC.addOnce((() => {
-           jr.CU.remove(Ir)
+         hd = dd.cV.addOnce((() => {
+           Xd.eq.remove(Kd)
```

#### 2965. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26622` → after: `L26643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26643) · [Before (L26622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26622)

```diff
-         jr.CU.remove(Ir), rr.lC.remove(fr)
+         Xd.eq.remove(Kd), dd.cV.remove(hd)
```

#### 2966. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26626` → after: `L26647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26647) · [Before (L26626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26626)

```diff
-   40371: (rr, Sr, Qr) => {
+   40373: (dd, Od, md) => {
```

#### 2967. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26628` → after: `L26649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26649) · [Before (L26628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26628)

```diff
-       e: () => mr
+       d: () => od
```

#### 2968. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26630-L26634` → after: `L26651-L26655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26651-L26655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26651-L26655) · [Before (L26630-L26634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26630-L26634)

```diff
-     var Zr = Qr(38694),
-       Wr = Qr(38813),
-       ar = Qr(38804),
-       jr = Qr(38715),
-       Ir = Qr(38702);
+     var Wd = md(38750),
+       Fd = md(38856),
+       Rd = md(38845),
+       Xd = md(38758),
+       Kd = md(38752);
```

#### 2969. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26637` → after: `L26658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26658) · [Before (L26637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26637)

```diff
-       return `\n\t\t\t\t${(0,Ir.A)(rr,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       return `\n\t\t\t\t${(0,Kd.t)(dd,"mat2","rotate",[{name:"ang",type:"float"}],`\
```

#### 2970. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26639` → after: `L26660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26660) · [Before (L26639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26639)

```diff
-         (0, Ir.E)(rr, "float", "s", "sin(ang)")
+         (0, Kd.z)(dd, "float", "s", "sin(ang)")
```

#### 2971. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26642` → after: `L26663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26663) · [Before (L26642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26642)

```diff
-         (0, Ir.E)(rr, "float", "c", "cos(ang)")
+         (0, Kd.z)(dd, "float", "c", "cos(ang)")
```

#### 2972. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26645` → after: `L26666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26666) · [Before (L26645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26645)

```diff
-         (0, Ir.p)(rr, "mat2", "c", "s", "-s", "c")
+         (0, Kd.l)(dd, "mat2", "c", "s", "-s", "c")
```

#### 2973. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26651-L26652` → after: `L26672-L26673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26672-L26673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26672-L26673) · [Before (L26651-L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26651-L26652)

```diff
-       let Qr = (0, Ir.zb)(rr, "skele" + (Sr - 1));
-       for (let Wr = Sr - 2; Wr >= 0; Wr--) Qr = (0, Ir.vb)(rr, `boneIdx == ${Wr}`, (0, Ir.zb)(rr, `skele${Wr}`), Qr);
+       let md = (0, Kd.ob)(dd, "skele" + (Od - 1));
+       for (let Fd = Od - 2; Fd >= 0; Fd--) md = (0, Kd.fb)(dd, `boneIdx == ${Fd}`, (0, Kd.ob)(dd, `skele${Fd}`), md);
```

#### 2974. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26654` → after: `L26675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26675) · [Before (L26654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26654)

```diff
-       return `\n\t\t\t\t${(0,Ir.E)(rr,"int","boneIdx",(0,Ir.xb)(rr,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Ir.E)(rr,"vec3","bone",Qr)}\n\t\t\t\t${(0,Ir.E)(rr,"vec2","pivot",(0,Ir.p)(rr,"vec2","0.0",`${(0,Ir.Hb)(rr,"position")}.z`))}\n\t\t\t\t${(0,Ir.fb)(rr)?`posit … [truncated]
+       return `\n\t\t\t\t${(0,Kd.z)(dd,"int","boneIdx",(0,Kd.mb)(dd,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Kd.z)(dd,"vec3","bone",md)}\n\t\t\t\t${(0,Kd.z)(dd,"vec2","pivot",(0,Kd.l)(dd,"vec2","0.0",`${(0,Kd.wb)(dd,"position")}.z`))}\n\t\t\t\t${(0,Kd.S)(dd)?`positi … [truncated]
```

#### 2975. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26658` → after: `L26679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26679) · [Before (L26658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26658)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Ir.p)(rr,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Kd.l)(dd,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 2976. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26664` → after: `L26685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26685) · [Before (L26664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26664)

```diff
-         dp(rr, Sr) {
+         ZQ(dd, Od) {
```

#### 2977. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26674-L26675` → after: `L26695-L26696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26695-L26696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26695-L26696) · [Before (L26674-L26675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26674-L26675)

```diff
-           BLOXD_CAPE_BONES: `${rr}`,
-           BLOXD_CAPE_MAX_Y: (0, Wr.tb)(Sr)
+           BLOXD_CAPE_BONES: `${dd}`,
+           BLOXD_CAPE_MAX_Y: (0, Fd.cb)(Od)
```

#### 2978. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26681` → after: `L26702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26702) · [Before (L26681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26681)

```diff
-               name: `skele${Qr}`,
+               name: `skele${md}`,
```

#### 2979. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26688` → after: `L26709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26709) · [Before (L26688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26688)

```diff
-           for (let Sr = 0; Sr < this.skeleLen; Sr++) rr.updateVector3(`skele${Sr}`, xr.dp(this.skele, 3 * Sr))
+           for (let Od = 0; Od < this.skeleLen; Od++) dd.updateVector3(`skele${Od}`, td.ZQ(this.skele, 3 * Od))
```

#### 2980. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26701` → after: `L26722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26722) · [Before (L26701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26701)

```diff
-     (0, jr.k)(mr)
+     (0, Xd.m)(od)
```

#### 2981. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26703` → after: `L26724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26724) · [Before (L26703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26703)

```diff
-   40263: (rr, Sr, Qr) => {
+   40272: (dd, Od, md) => {
```

#### 2982. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26705-L26706` → after: `L26726-L26727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26726-L26727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26726-L26727) · [Before (L26705-L26706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26705-L26706)

```diff
-       d: () => pr,
-       h: () => xr
+       b: () => Qd,
+       f: () => td
```

#### 2983. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26708-L26711` → after: `L26729-L26732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26729-L26732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26729-L26732) · [Before (L26708-L26711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26708-L26711)

```diff
-     var Zr = Qr(38694),
-       Wr = Qr(38804),
-       ar = Qr(38702),
-       jr = Qr(38715);
+     var Wd = md(38750),
+       Fd = md(38845),
+       Rd = md(38752),
+       Xd = md(38758);
```

#### 2984. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26734-L26737` → after: `L26755-L26758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26755-L26758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26755-L26758) · [Before (L26734-L26737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26734-L26737)

```diff
-           const Qr = (0, ar.L)(Sr, `vec4 ${Er}(sampler2D s, vec2 uv, float bias)`, `fn ${Er}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
-             Zr = (0, ar.L)(Sr, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
-             Wr = `${(0,ar.Y)(Sr,"vDiffuseUV")} + uvOffset`,
-             jr = (0, ar.L)(Sr, `${Er}(diffuseSampler, ${Wr}, ${(0,ar.zb)(Sr,Ir)})`, `${Er}(diffuseSampler, diffuseSamplerSampler, ${Wr}, ${(0,ar.zb)(Sr,Ir)})`);
+           const md = (0, Rd.F)(Od, `vec4 ${vd}(sampler2D s, vec2 uv, float bias)`, `fn ${vd}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
+             Wd = (0, Rd.F)(Od, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
+             Fd = `${(0,Rd.O)(Od,"vDiffuseUV")} + uvOffset`,
+             Xd = (0, Rd.F)(Od, `${vd}(diffuseSampler, ${Fd}, ${(0,Rd.ob)(Od,Kd)})`, `${vd}(diffuseSampler, diffuseSamplerSampler, ${Fd}, ${(0,Rd.ob)(Od,Kd)})`);
```

#### 2985. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26739-L26740` → after: `L26760-L26761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26760-L26761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26760-L26761) · [Before (L26739-L26740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26739-L26740)

```diff
-             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Qr} {\n\t\t\t\t\t${(0,ar.E)(Sr,"vec4","texel",Zr)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ar … [truncated]
-             [(0, ar.G)(Sr)]: `baseColor = ${jr};`
+             CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${md} {\n\t\t\t\t\t${(0,Rd.z)(Od,"vec4","texel",Wd)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Rd … [truncated]
+             [(0, Rd.A)(Od)]: `baseColor = ${Xd};`
```

#### 2986. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26744` → after: `L26765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26765) · [Before (L26744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26744)

```diff
-     (0, jr.k)(xr)
+     (0, Xd.m)(td)
```

#### 2987. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26746` → after: `L26767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26767) · [Before (L26746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26746)

```diff
-   40792: (rr, Sr, Qr) => {
+   40819: (dd, Od, md) => {
```

#### 2988. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26753-L26757` → after: `L26774-L26778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26774-L26778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26774-L26778) · [Before (L26753-L26757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26753-L26757)

```diff
-     var Zr = Qr(109),
-       Wr = Qr(43),
-       ar = (Qr(4699), Qr(6005), Qr(4690)),
-       jr = Qr(7617);
-     Qr(7588);
+     var Wd = md(107),
+       Fd = md(46),
+       Rd = (md(4678), md(5951), md(4674)),
+       Xd = md(7602);
+     md(7583);
```

#### 2989. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26767-L26768` → after: `L26788-L26789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26788-L26789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26788-L26789) · [Before (L26767-L26768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26767-L26768)

```diff
-           if ((0, ar.g)(Zr.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), Er().then((rr => {
-             rr && Wr.j.removeItem(ar.b)
+           if ((0, Rd.h)(Wd.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), vd().then((dd => {
+             dd && Fd.k.removeItem(Rd.d)
```

#### 2990. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26775` → after: `L26796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26796) · [Before (L26775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26775)

```diff
-         return (0, ar.d)(Zr.featureFlags.settings.canUseShaderPacks)
+         return (0, Rd.e)(Wd.featureFlags.settings.canUseShaderPacks)
```

#### 2991. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26796` → after: `L26817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26817) · [Before (L26796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26796)

```diff
-         return this.compiling ??= Promise.all([Qr.e(91), Qr.e(157), Qr.e(163)]).then((() => Qr(54275))).then((rr => (rr.prefetchCompiler(), rr))), this.compiling
+         return this.compiling ??= Promise.all([md.e(91), md.e(157), md.e(163)]).then((() => md(54160))).then((dd => (dd.prefetchCompiler(), dd))), this.compiling
```

#### 2992. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26810` → after: `L26831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26831) · [Before (L26810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26810)

```diff
-       if (!(0, ar.k)(Zr.featureFlags.settings.canUseShaderPacks)) return null;
+       if (!(0, Rd.i)(Wd.featureFlags.settings.canUseShaderPacks)) return null;
```

#### 2993. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26812-L26813` → after: `L26833-L26834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26833-L26834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26833-L26834) · [Before (L26812-L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26812-L26813)

```diff
-         const rr = await (0, jr.e)(!0);
-         return rr || Wr.j.setItem(ar.b, !1), rr
+         const dd = await (0, Xd.g)(!0);
+         return dd || Fd.k.setItem(Rd.d, !1), dd
```

#### 2994. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26815` → after: `L26836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26836) · [Before (L26815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26815)

```diff
-         return console.error("Failed to read the stored shader pack", rr), Wr.j.removeItem(ar.b), null
+         return console.error("Failed to read the stored shader pack", dd), Fd.k.removeItem(Rd.d), null
```

#### 2995. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26826` → after: `L26847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26847) · [Before (L26826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26826)

```diff
-   40837: (rr, Sr, Qr) => {
+   40865: (dd, Od, md) => {
```

#### 2996. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26828-L26829` → after: `L26849-L26850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26849-L26850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26849-L26850) · [Before (L26828-L26829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26828-L26829)

```diff
-       b: () => xr,
-       c: () => mr
+       e: () => td,
+       i: () => od
```

#### 2997. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26831-L26838` → after: `L26852-L26859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26852-L26859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26852-L26859) · [Before (L26831-L26838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26831-L26838)

```diff
-     var Zr = Qr(161),
-       Wr = Qr(194),
-       ar = Qr(1621),
-       jr = Qr(1912),
-       Ir = Qr(1629),
-       fr = Qr(38001),
-       Er = Qr(727),
-       pr = Qr(40792);
+     var Wd = md(180),
+       Fd = md(210),
+       Rd = md(1618),
+       Xd = md(1916),
+       Kd = md(1627),
+       hd = md(38082),
+       vd = md(747),
+       Qd = md(40819);
```

#### 2998. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26841` → after: `L26862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26862) · [Before (L26841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26841)

```diff
-       (0, jr.reportClientError)("matchmake_failed", rr, Zr.i[Zr.i.SHADER_PACK])
+       (0, Xd.reportClientError)("matchmake_failed", dd, Wd.l[Wd.l.SHADER_PACK])
```

#### 2999. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26846-L26847` → after: `L26867-L26868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26867-L26868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26867-L26868) · [Before (L26846-L26847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26846-L26847)

```diff
-         jr = (0, fr.d)();
-       Zr && null !== jr && await Ir.c.reportShaderPackSession(rr, {
+         Xd = (0, hd.b)();
+       Wd && null !== Xd && await Kd.e.reportShaderPackSession(dd, {
```

#### 3000. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26850` → after: `L26871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26871) · [Before (L26850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26850)

```diff
-         game: (0, ar.g)(Sr, Wr.K, "other"),
+         game: (0, Rd.e)(Od, Fd.F, "other"),
```

#### 3001. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26856` → after: `L26877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26877) · [Before (L26856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26856)

```diff
-   7588: (rr, Sr, Qr) => {
+   7583: (dd, Od, md) => {
```

#### 3002. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26861` → after: `L26882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26882) · [Before (L26861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26861)

```diff
-     var Zr = Qr(6007);
+     var Wd = md(5954);
```

#### 3003. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26866` → after: `L26887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26887) · [Before (L26866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26866)

```diff
-       return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
+       return Rd ??= Promise.all([md.e(85), md.e(126)]).then((() => md(42438))).then((dd => {
```

#### 3004. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26872` → after: `L26893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26893) · [Before (L26872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26872)

```diff
-         return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
+         return Fd ??= (0, Wd.h)(md, Rd, Od), Fd
```

#### 3005. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26881` → after: `L26902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26902) · [Before (L26881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26881)

```diff
-   35378: (rr, Sr, Qr) => {
+   35465: (dd, Od, md) => {
```

#### 3006. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26886` → after: `L26907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26907) · [Before (L26886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26886)

```diff
-       d: () => Zr
+       e: () => Wd
```

#### 3007. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26891-L26893` → after: `L26912-L26914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26912-L26914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26912-L26914) · [Before (L26891-L26893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26891-L26893)

```diff
-       c: () => jr,
-       d: () => Ir,
-       h: () => fr
+       e: () => Xd,
+       h: () => Kd,
+       j: () => hd
```

#### 3008. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26904` → after: `L26925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26925) · [Before (L26904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26904)

```diff
-       return Zr.set(rr, (null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : 0) + 1), ar(), () => {
+       return Wd.set(dd, (null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : 0) + 1), Rd(), () => {
```

#### 3009. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26918` → after: `L26939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26939) · [Before (L26918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26918)

```diff
-   40824: (rr, Sr, Qr) => {
+   40852: (dd, Od, md) => {
```

#### 3010. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26931` → after: `L26952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26952) · [Before (L26931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26931)

```diff
-           }] = await Promise.all([Promise.resolve().then((() => Qr(1885))), Promise.resolve().then((() => Qr(1475)))]);
+           }] = await Promise.all([Promise.resolve().then((() => md(1890))), Promise.resolve().then((() => md(1462)))]);
```

#### 3011. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26947` → after: `L26968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26968) · [Before (L26947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26947)

```diff
-   41311: (rr, Sr, Qr) => {
+   41319: (dd, Od, md) => {
```

#### 3012. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26949-L26951` → after: `L26970-L26972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR26970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L26970-L26972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L26970-L26972) · [Before (L26949-L26951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26949-L26951)

```diff
-       e: () => Zr,
-       h: () => ar,
-       k: () => Wr
+       b: () => Wd,
+       d: () => Rd,
+       f: () => Fd
```

#### 3013. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26985` → after: `L27006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27006) · [Before (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26985)

```diff
-   41293: (rr, Sr, Qr) => {
+   41301: (dd, Od, md) => {
```

#### 3014. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26989` → after: `L27010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27010) · [Before (L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26989)

```diff
-     var Zr = Qr(2049);
+     var Wd = md(2057);
```

#### 3015. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26992` → after: `L27013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27013) · [Before (L26992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26992)

```diff
-       return (0, Zr.m)(rr, Sr) < Qr
+       return (0, Wd.p)(dd, Od) < md
```

#### 3016. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26995` → after: `L27016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27016) · [Before (L26995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26995)

```diff
-   38494: (rr, Sr, Qr) => {
+   38556: (dd, Od, md) => {
```

#### 3017. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26997` → after: `L27018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27018) · [Before (L26997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26997)

```diff
-       e: () => Zr.j
+       e: () => Wd.i
```

#### 3018. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L26999` → after: `L27020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27020) · [Before (L26999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L26999)

```diff
-     var Zr = Qr(5779)
+     var Wd = md(5733)
```

#### 3019. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27001` → after: `L27022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27022) · [Before (L27001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27001)

```diff
-   38503: (rr, Sr, Qr) => {
+   38564: (dd, Od, md) => {
```

#### 3020. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27003` → after: `L27024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27024) · [Before (L27003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27003)

```diff
-       d: () => Zr.n
+       b: () => Wd.q
```

#### 3021. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27005` → after: `L27026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27026) · [Before (L27005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27005)

```diff
-     var Zr = Qr(38509)
+     var Wd = md(38573)
```

#### 3022. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27007` → after: `L27028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27028) · [Before (L27007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27007)

```diff
-   38486: (rr, Sr, Qr) => {
+   38547: (dd, Od, md) => {
```

#### 3023. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27011` → after: `L27032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27032) · [Before (L27011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27011)

```diff
-     const Zr = [() => Qr(38494).e, () => Qr(38503).d, () => Qr(38059).e, () => Qr(38541).g, () => Qr(39142).getCaughtUpMeshRotation, () => Qr(39172).tickMovementPrePhysics, () => Qr(39198).d, () => [Qr(39245).tickMovementInputsPrePhysics, Qr(39286).x, Qr(39514).c, Qr(39525).b], ( … [truncated]
+     const Wd = [() => md(38556).e, () => md(38564).b, () => md(38149).e, () => md(38608).f, () => md(39162).getCaughtUpMeshRotation, () => md(39191).tickMovementPrePhysics, () => md(39229).d, () => [md(39279).tickMovementInputsPrePhysics, md(39327).v, md(39575).b, md(39588).d], ( … [truncated]
```

#### 3024. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27014` → after: `L27035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27035) · [Before (L27014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27014)

```diff
-       return await rr(), Qr(41290)
+       return await dd(), md(41297)
```

#### 3025. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27017` → after: `L27038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27038) · [Before (L27017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27017)

```diff
-   41290: (rr, Sr, Qr) => {
+   41297: (dd, Od, md) => {
```

#### 3026. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27020` → after: `L27041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27041) · [Before (L27020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27020)

```diff
-       LobbyLeaderboard: () => vr.b,
+       LobbyLeaderboard: () => Ud.c,
```

#### 3027. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27027-L27034` → after: `L27048-L27055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27048-L27055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27048-L27055) · [Before (L27027-L27034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27027-L27034)

```diff
-     var Zr = Qr(37866),
-       Wr = Qr(38039),
-       ar = Qr(1187),
-       jr = Qr(2484),
-       Ir = Qr(10242),
-       fr = Qr(1267),
-       Er = Qr(1364),
-       pr = Qr(38018);
+     var Wd = md(37958),
+       Fd = md(38128),
+       Rd = md(1189),
+       Xd = md(2497),
+       Kd = md(10297),
+       hd = md(1268),
+       vd = md(1361),
+       Qd = md(38109);
```

#### 3028. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27050-L27051` → after: `L27071-L27072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27071-L27072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27071-L27072) · [Before (L27050-L27051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27050-L27051)

```diff
-         const Sr = "string" === typeof rr ? rr : JSON.stringify(rr);
-         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof rr}): ${String(Sr).slice(0,150)}`))
+         const Od = "string" === typeof dd ? dd : JSON.stringify(dd);
+         return Promise.reject(new Error(`Matchmake answer holds no seat (${typeof dd}): ${String(Od).slice(0,150)}`))
```

#### 3029. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27056` → after: `L27077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27077) · [Before (L27056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27056)

```diff
-           if (rr.aborted) return void Zr((0, fr.f)(rr));
+           if (dd.aborted) return void Wd((0, hd.e)(dd));
```

#### 3030. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27059` → after: `L27080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27080) · [Before (L27059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27059)

```diff
-               Wr.giveUp((0, fr.f)(rr))
+               Fd.giveUp((0, hd.e)(dd))
```

#### 3031. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27070` → after: `L27091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27091) · [Before (L27070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27070)

```diff
-         return null !== (rr = null === (Sr = this.seatRequest) || void 0 === Sr ? void 0 : Sr.leg) && void 0 !== rr ? rr : this.lastLeg
+         return null !== (dd = null === (Od = this.seatRequest) || void 0 === Od ? void 0 : Od.leg) && void 0 !== dd ? dd : this.lastLeg
```

#### 3032. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27074` → after: `L27095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27095) · [Before (L27074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27074)

```diff
-         if (null !== Qr && void 0 !== Qr && Qr.givenUp) throw new pr.c(Qr.leg);
+         if (null !== md && void 0 !== md && md.givenUp) throw new Qd.i(md.leg);
```

#### 3033. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27081-L27082` → after: `L27102-L27103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27102-L27103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27102-L27103) · [Before (L27081-L27082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27081-L27082)

```diff
-         this.reject = rr, this.room = null, this.opened = !1, this.wasGivenUp = !1, this.countdown = void 0, this.countdown = new pr.b((() => {
-           this.giveUp(new pr.c(this.leg))
+         this.reject = dd, this.room = null, this.opened = !1, this.wasGivenUp = !1, this.countdown = void 0, this.countdown = new Qd.e((() => {
+           this.giveUp(new Qd.i(this.leg))
```

#### 3034. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27096` → after: `L27117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27117) · [Before (L27096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27096)

```diff
-             this.opened = !0, this.countdown.socketOpened(), (0, Er.D)("wasm_socket_open", performance.now())
+             this.opened = !0, this.countdown.socketOpened(), (0, vd.A)("wasm_socket_open", performance.now())
```

#### 3035. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27113-L27129` → after: `L27134-L27150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27134-L27150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27134-L27150) · [Before (L27113-L27129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27113-L27129)

```diff
-     var Nr = Qr(1262),
-       Ur = Qr(40226),
-       tr = Qr(40313),
-       hr = Qr(37508),
-       zr = Qr(26),
-       Yr = Qr(37977),
-       nr = Qr(40792),
-       er = Qr(35378),
-       Kr = Qr(38776),
-       yr = Qr(5433),
-       Br = Qr(1422),
-       Tr = Qr(2383),
-       vr = Qr(38468),
-       Or = Qr(2089),
-       Lr = Qr(1287),
-       lr = Qr(2364),
- ... (1 more removed lines; see GitHub link above)
+     var Nd = md(1253),
+       qd = md(40254),
+       Hd = md(40319),
+       yd = md(37641),
+       bd = md(29),
+       Td = md(38068),
+       pd = md(40819),
+       Yd = md(35465),
+       gd = md(38823),
+       wd = md(5341),
+       Ed = md(1415),
+       Jd = md(2402),
+       Ud = md(38540),
+       xd = md(2092),
+       Bd = md(1300),
+       Sd = md(2386),
+ ... (1 more added lines; see GitHub link above)
```

#### 3036. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27136` → after: `L27155-L27157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27155-L27157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27155-L27157) · [Before (L27136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27136)

```diff
-           return (0, Xr.d)(Zr.getLifeformEyePos(Qr.fC, !1), rr, Zr.getBlockReach(Qr.fC))
+           if (!md || null !== (Od = md.qE.Pmd(md.YV)) && void 0 !== Od && Od.crouching) return !1;
+           const Wd = (0, Jd.b)();
+           return (0, sd.d)(Wd.getLifeformEyePos(md.YV, !1), dd, Wd.getBlockReach(md.YV))
```

#### 3037. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27143-L27145` → after: `L27164-L27166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27164-L27166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27164-L27166) · [Before (L27143-L27145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27143-L27145)

```diff
-               JI: !1,
-               lj: rr,
-               Xj: null
+               CK: !1,
+               BX: dd,
+               SX: null
```

#### 3038. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27147` → after: `L27168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27168) · [Before (L27147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27147)

```diff
-             (0, lr.sendColyMessage)(jr.Ph, {
+             (0, Sd.sendColyMessage)(Xd.eh, {
```

#### 3039. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27149-L27150` → after: `L27170-L27171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27170-L27171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27170-L27171) · [Before (L27149-L27150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27149-L27150)

```diff
-               bI: Lr.d.DownFirePrimary
-             }, !0), (0, lr.sendColyMessage)(jr.Ph, {
+               lK: Bd.b.DownFirePrimary
+             }, !0), (0, Sd.sendColyMessage)(Xd.eh, {
```

#### 3040. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27152` → after: `L27173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27173) · [Before (L27152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27152)

```diff
-               bI: Lr.d.UpFirePrimary
+               lK: Bd.b.UpFirePrimary
```

#### 3041. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27157` → after: `L27178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27178) · [Before (L27157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27157)

```diff
-     var qr = Qr(388),
+     var Ad = md(415),
```

#### 3042. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27159` → after: `L27180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27180) · [Before (L27159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27159)

```diff
-       gr = Qr(39926);
+       Gd = md(39966);
```

#### 3043. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27163` → after: `L27184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27184) · [Before (L27163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27163)

```diff
-       (0, lr.sendColyMessage)(jr.ai, rr, !0)
+       (0, Sd.sendColyMessage)(Xd.lh, dd, !0)
```

#### 3044. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27167-L27169` → after: `L27188-L27190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27188-L27190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27188-L27190) · [Before (L27167-L27169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27167-L27169)

```diff
-       (0, lr.sendColyMessage)(jr.di, {
-         iI: rr,
-         wI: "a"
+       (0, Sd.sendColyMessage)(Xd.ph, {
+         cK: dd,
+         jK: "a"
```

#### 3045. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27174` → after: `L27195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27195) · [Before (L27174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27174)

```diff
-         const Sr = (0, Tr.e)();
+         const Od = (0, Jd.c)();
```

#### 3046. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27197` → after: `L27218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27218) · [Before (L27197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27197)

```diff
-         gr.f.setMultiplierType(gr.b, rr)
+         Gd.g.setMultiplierType(Gd.e, dd)
```

#### 3047. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27200-L27203` → after: `L27221-L27224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27221-L27224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27221-L27224) · [Before (L27200-L27203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27200-L27203)

```diff
-         (0, lr.sendColyMessage)(jr.yj);
-         const rr = (0, Tr.e)(),
-           Sr = rr.YB.cV(rr.fC);
-         Sr && (Rr().set(Sr.Lh, 0, 0, 0), Rr().set(Sr.YV, 0, 0, 0), Rr().set(Sr.KV, 0, 0, 0))
+         (0, Sd.sendColyMessage)(Xd.$i);
+         const dd = (0, Jd.c)(),
+           Od = dd.qE.pC(dd.YV);
+         Od && (rd().set(Od.Gy, 0, 0, 0), rd().set(Od.ZD, 0, 0, 0), rd().set(Od.mI, 0, 0, 0))
```

#### 3048. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27207-L27208` → after: `L27228-L27229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27228-L27229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27228-L27229) · [Before (L27207-L27208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27207-L27208)

```diff
-         Sr = rr, (0, lr.sendColyMessage)(jr.Qj, {
-           JE: Sr
+         Od = dd, (0, Sd.sendColyMessage)(Xd.pj, {
+           Iv: Od
```

#### 3049. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27212-L27215` → after: `L27233-L27236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27233-L27236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27233-L27236) · [Before (L27212-L27215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27212-L27215)

```diff
-     var Ar = Qr(39688),
-       Vr = Qr(34),
-       ir = Qr(38278),
-       wr = Qr(2119);
+     var cd = md(39725),
+       jd = md(32),
+       Dd = md(38359),
+       ed = md(2121);
```

#### 3050. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27241` → after: `L27262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27262) · [Before (L27241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27241)

```diff
-         mI: ar
+         NK: Rd
```

#### 3051. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27243` → after: `L27264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27264) · [Before (L27243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27243)

```diff
-       const jr = (0, Tr.c)(),
+       const Xd = (0, Jd.b)(),
```

#### 3052. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27268` → after: `L27289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27289) · [Before (L27268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27268)

```diff
-         mI: ar,
+         NK: Rd,
```

#### 3053. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27277` → after: `L27298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27298) · [Before (L27277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27277)

```diff
-       crafting: (0, wr.l)((function() {
+       crafting: (0, ed.k)((function() {
```

#### 3054. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27282-L27284` → after: `L27303-L27305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27303-L27305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27303-L27305) · [Before (L27282-L27284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27282-L27284)

```diff
-         const rr = (0, Tr.e)(),
-           Sr = rr.fC;
-         if (!rr.YB.pQr(Sr)) return Fr = {
+         const dd = (0, Jd.c)(),
+           Od = dd.YV;
+         if (!dd.qE.Imd(Od)) return ld = {
```

#### 3055. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27289` → after: `L27310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27310) · [Before (L27289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27289)

```diff
-         const Qr = rr.YB.fQr(Sr),
+         const md = dd.qE.Dmd(Od),
```

#### 3056. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27292` → after: `L27313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27313) · [Before (L27292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27292)

```diff
-           } = (0, Tr.c)(),
+           } = (0, Jd.b)(),
```

#### 3057. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27297` → after: `L27318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27318) · [Before (L27297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27297)

```diff
-             } = Zr.getRecipesForItem(Sr, rr.name)[rr.mI];
+             } = Wd.getRecipesForItem(Od, dd.name)[dd.NK];
```

#### 3058. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27300` → after: `L27321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27321) · [Before (L27300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27300)

```diff
-               mI: rr.mI,
+               NK: dd.NK,
```

#### 3059. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27312` → after: `L27333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27333) · [Before (L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27312)

```diff
-       }), [...wr.f, "syncedInvenFromServer", "craftingRecipesEdited", or])
+       }), [...ed.d, "syncedInvenFromServer", "craftingRecipesEdited", Cd])
```

#### 3060. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27323` → after: `L27344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27344) · [Before (L27323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27323)

```diff
-         } = (0, Tr.c)(), ar = (0, Tr.e)().fC;
+         } = (0, Jd.b)(), Rd = (0, Jd.c)().YV;
```

#### 3061. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27334` → after: `L27355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27355) · [Before (L27334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27334)

```diff
-         for (let fr = 0; fr < ir.d; fr++) {
+         for (let hd = 0; hd < Dd.f; hd++) {
```

#### 3062. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27356` → after: `L27377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27377) · [Before (L27356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27356)

```diff
-         cr = rr, Vr.i.Jp(or)
+         Id = dd, jd.j.lQ(Cd)
```

#### 3063. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27361` → after: `L27382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27382) · [Before (L27361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27361)

```diff
-           mI: Qr,
+           NK: md,
```

#### 3064. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27364-L27368` → after: `L27385-L27389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27385-L27389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27385-L27389) · [Before (L27364-L27368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27364-L27368)

```diff
-         const Wr = (0, Tr.e)(),
-           ar = (0, Tr.c)(),
-           Ir = ar.craftingManager.craftItem(Wr.fC, Wr.YB.fQr(Wr.fC), Sr, Qr, null !== Zr && void 0 !== Zr ? Zr : 1 / 0);
-         if (Ir.NI > 0) {
-           const rr = ar.client.inventoryPrediction.record(Ar.c.craft(ar.craftingManager, Wr.fC, Sr, Qr, Ir.NI));
+         const Fd = (0, Jd.c)(),
+           Rd = (0, Jd.b)(),
+           Kd = Rd.craftingManager.craftItem(Fd.YV, Fd.qE.Dmd(Fd.YV), Od, md, null !== Wd && void 0 !== Wd ? Wd : 1 / 0);
+         if (Kd.qK > 0) {
+           const dd = Rd.client.inventoryPrediction.record(cd.b.craft(Rd.craftingManager, Fd.YV, Od, md, Kd.qK));
```

#### 3065. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27370-L27374` → after: `L27391-L27395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27391-L27395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27391-L27395) · [Before (L27370-L27374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27370-L27374)

```diff
-             (0, lr.sendColyMessage)(jr.nh, {
-               xI: rr,
-               mI: Sr,
-               NI: Qr,
-               jj: Zr
+             (0, Sd.sendColyMessage)(Xd.Kg, {
+               oK: dd,
+               NK: Od,
+               qK: md,
+               XX: Wd
```

#### 3066. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27376` → after: `L27397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27397) · [Before (L27376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27376)

```diff
-           }(Sr, Qr, Ir.NI, rr)
+           }(Od, md, Kd.qK, dd)
```

#### 3067. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27386-L27388` → after: `L27407-L27409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27407-L27409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27407-L27409) · [Before (L27386-L27388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27386-L27388)

```diff
-         const Wr = (0, Tr.c)(),
-           ar = (0, Tr.e)(),
-           Ir = Wr.craftingManager.salvageItem(ar.YB.fQr(ar.fC), Sr, Qr, Zr);
+         const Fd = (0, Jd.b)(),
+           Rd = (0, Jd.c)(),
+           Kd = Fd.craftingManager.salvageItem(Rd.qE.Dmd(Rd.YV), Od, md, Wd);
```

#### 3068. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27390-L27393` → after: `L27411-L27414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27411-L27414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27411-L27414) · [Before (L27390-L27393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27390-L27393)

```diff
-         return Ir && (fr = Sr, Er = Zr, pr = Wr.client.inventoryPrediction.record(Ar.c.salvage(Wr.craftingManager, Sr, Zr)), (0, lr.sendColyMessage)(jr.zj, {
-           Mj: fr,
-           Gj: Er,
-           jj: pr
+         return Kd && (hd = Od, vd = Wd, Qd = Fd.client.inventoryPrediction.record(cd.b.salvage(Fd.craftingManager, Od, Wd)), (0, Sd.sendColyMessage)(Xd.dj, {
+           GX: hd,
+           nX: vd,
+           XX: Qd
```

#### 3069. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27403-L27406` → after: `L27424-L27427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27424-L27427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27424-L27427) · [Before (L27403-L27406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27403-L27406)

```diff
-         Wr = Sr, ar = Qr, Ir = Zr, (0, lr.sendColyMessage)(jr.uh, {
-           Kp: Wr,
-           Bp: ar,
-           yp: Ir
+         Fd = Od, Rd = md, Kd = Wd, (0, Sd.sendColyMessage)(Xd.Pg, {
+           gQ: Fd,
+           aQ: Rd,
+           wQ: Kd
```

#### 3070. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27410-L27419` → after: `L27431-L27440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27431-L27440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27431-L27440) · [Before (L27410-L27419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27410-L27419)

```diff
-     var ur = Qr(38509),
-       rS = Qr(39104),
-       SS = Qr(208),
-       QS = Qr(5779),
-       ZS = Qr(7424),
-       WS = Qr(683),
-       aS = Qr(5229),
-       jS = Qr(39113),
-       IS = Qr(39670),
-       fS = Qr(41296);
+     var OO = md(38573),
+       mO = md(39137),
+       WO = md(218),
+       FO = md(5733),
+       RO = md(7410),
+       XO = md(699),
+       KO = md(5141),
+       hO = md(39142),
+       vO = md(39713),
+       QO = md(41304);
```

#### 3071. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27424` → after: `L27445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27445) · [Before (L27424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27424)

```diff
-       return null !== (Sr = jS.e.aimsFromBody(rr) ? rr.LSr : null) && void 0 !== Sr ? Sr : rr.camera.Y1()
+       return null !== (Od = hO.c.aimsFromBody(dd) ? dd.mmd : null) && void 0 !== Od ? Od : dd.camera.B_()
```

#### 3072. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27429-L27430` → after: `L27450-L27451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27450-L27451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27450-L27451) · [Before (L27429-L27430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27429-L27430)

```diff
-       const Wr = (0, Tr.e)(),
-         ar = null !== (Sr = null === (Qr = Wr.YB.IQr(Wr.fC)) || void 0 === Qr ? void 0 : Qr.selectedItem) && void 0 !== Sr ? Sr : null,
+       const Fd = (0, Jd.c)(),
+         Rd = null !== (Od = null === (md = Fd.qE.zmd(Fd.YV)) || void 0 === md ? void 0 : md.selectedItem) && void 0 !== Od ? Od : null,
```

#### 3073. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27432` → after: `L27453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27453) · [Before (L27432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27432)

```diff
-       if ((0, aS.h)(null === ar || void 0 === ar ? void 0 : ar.typeObj.type) && Wr.YB.jQr(Wr.fC).crouching) return;
+       if ((0, KO.h)(null === Rd || void 0 === Rd ? void 0 : Rd.typeObj.type) && Fd.qE.Pmd(Fd.YV).crouching) return;
```

#### 3074. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27434-L27435` → after: `L27455-L27456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27455-L27456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27455-L27456) · [Before (L27434-L27435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27434-L27435)

```diff
-         const Sr = (0, Tr.e)().YB.gJ((0, Tr.e)().fC).position;
-         for (const Qr of (0, Tr.c)().client.iterateEntityIds())
+         const Od = (0, Jd.c)().qE.gM((0, Jd.c)().YV).position;
+         for (const md of (0, Jd.b)().client.iterateEntityIds())
```

#### 3075. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27438-L27442` → after: `L27459-L27463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27459-L27463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27459-L27463) · [Before (L27438-L27442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27438-L27442)

```diff
-       }(jr) ? Tr.h.localPlayerPickActionHelper.pickCameraRayEntity(rr, SS.i.entityInteractReach) : null;
-       return Ir && (0, rS.h)(Ir.eId) ? (0, rS.d)(Ir.eId) : null !== (Zr = function(rr) {
-         const Sr = (0, Tr.e)(),
-           Qr = (0, Tr.c)(),
-           Zr = null === Sr.LSr || rr === Sr.LSr ? Sr.xSr : Sr.pickBlock(null, rr, Qr.getBlockReach(Sr.fC), Sr.pSr);
+       }(Xd) ? Jd.g.localPlayerPickActionHelper.pickCameraRayEntity(dd, WO.i.entityInteractReach) : null;
+       return Kd && (0, mO.f)(Kd.eId) ? (0, mO.d)(Kd.eId) : null !== (Wd = function(dd) {
+         const Od = (0, Jd.c)(),
+           md = (0, Jd.b)(),
+           Wd = null === Od.mmd || dd === Od.mmd ? Od.nOd : Od.pickBlock(null, dd, md.getBlockReach(Od.YV), Od.GOd);
```

#### 3076. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27445` → after: `L27466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27466) · [Before (L27445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27445)

```diff
-           e_: Wr,
+           K9: Fd,
```

#### 3077. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27448` → after: `L27469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27469) · [Before (L27448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27448)

```diff
-         if ((0, QS.o)((0, QS.g)(Wr))) return QS.j[Wr].meta.open ? fS.f.close : fS.f.open;
+         if ((0, FO.o)((0, FO.g)(Fd))) return FO.i[Fd].meta.open ? QO.h.close : QO.h.open;
```

#### 3078. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27452` → after: `L27473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27473) · [Before (L27452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27452)

```diff
-         if ((0, IS.m)(jr) || (0, IS.B)(jr, Qr.playerCanChangePos(Sr.fC, ...ar))) return fS.f.open;
+         if ((0, vO.k)(Xd) || (0, vO.x)(Xd, md.playerCanChangePos(Od.YV, ...Rd))) return QO.h.open;
```

#### 3079. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27454` → after: `L27475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27475) · [Before (L27454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27454)

```diff
-       }(rr)) && void 0 !== Zr ? Zr : Ir ? function(rr, Sr, Qr) {
+       }(dd)) && void 0 !== Wd ? Wd : Kd ? function(dd, Od, md) {
```

#### 3080. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27461` → after: `L27482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27482) · [Before (L27461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27461)

```diff
-           } = (0, Tr.c)(),
+           } = (0, Jd.b)(),
```

#### 3081. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27463-L27465` → after: `L27484-L27486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27484-L27486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27484-L27486) · [Before (L27463-L27465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27463-L27465)

```diff
-           Er = (0, IS.y)(jr, ar, Sr);
-         if (null !== Er) return "Milk" === Er ? fS.f.milk : "Sheared" === (null === fr || void 0 === fr ? void 0 : fr.metaInfo) ? void 0 : fS.f.shear;
-         const pr = null !== (Zr = null === fr || void 0 === fr ? void 0 : fr.ownerDbId) && void 0 !== Zr ? Zr : null,
+           vd = (0, vO.t)(Xd, Rd, Od);
+         if (null !== vd) return "Milk" === vd ? QO.h.milk : "Sheared" === (null === hd || void 0 === hd ? void 0 : hd.metaInfo) ? void 0 : QO.h.shear;
+         const Qd = null !== (Wd = null === hd || void 0 === hd ? void 0 : hd.ownerDbId) && void 0 !== Wd ? Wd : null,
```

#### 3082. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27467-L27470` → after: `L27488-L27491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27488-L27491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27488-L27491) · [Before (L27467-L27470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27467-L27470)

```diff
-         if ((0, IS.l)(ar, jr)) {
-           if (null === pr && (0, IS.x)(ar, jr)) return fS.f.tame;
-           const rr = null === pr && (0, IS.w)(ar, jr) ? (0, IS.A)(ar) : void 0;
-           return void 0 !== rr ? (0, fS.v)(rr) : xr && (0, IS.t)(ar, jr) ? fS.f.feed : void 0
+         if ((0, vO.j)(Rd, Xd)) {
+           if (null === Qd && (0, vO.s)(Rd, Xd)) return QO.h.tame;
+           const dd = null === Qd && (0, vO.q)(Rd, Xd) ? (0, vO.w)(Rd) : void 0;
+           return void 0 !== dd ? (0, QO.w)(dd) : td && (0, vO.p)(Rd, Xd) ? QO.h.feed : void 0
```

#### 3083. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27472-L27473` → after: `L27493-L27494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27493-L27494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27493-L27494) · [Before (L27472-L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27472-L27473)

```diff
-         const mr = (0, Tr.e)(),
-           Nr = mr.YB.ASr(mr.fC).physicsState.type === ZS.n.DEFAULT,
+         const od = (0, Jd.c)(),
+           Nd = od.qE.Hmd(od.YV).physicsState.type === RO.q.DEFAULT,
```

#### 3084. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27475` → after: `L27496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27496) · [Before (L27475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27475)

```diff
-         return "Saddled" === (null === fr || void 0 === fr ? void 0 : fr.metaInfo) && Nr && Ur && (null === pr || xr) ? fS.f.ride : void 0
+         return "Saddled" === (null === hd || void 0 === hd ? void 0 : hd.metaInfo) && Nd && qd && (null === Qd || td) ? QO.h.ride : void 0
```

#### 3085. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27480` → after: `L27501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27501) · [Before (L27480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27480)

```diff
-       const Qr = (0, Tr.e)().YB.gJ(rr);
+       const md = (0, Jd.c)().qE.gM(dd);
```

#### 3086. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27486-L27487` → after: `L27507-L27508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27507-L27508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27507-L27508) · [Before (L27486-L27487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27486-L27487)

```diff
-       const Wr = (0, Tr.e)();
-       if (null !== (Qr = Wr.xG[Wr.fC][rr]) && void 0 !== Qr && Qr.interactable) return !0;
+       const Fd = (0, Jd.c)();
+       if (null !== (md = Fd.sG[Fd.YV][dd]) && void 0 !== md && md.interactable) return !0;
```

#### 3087. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27491-L27492` → after: `L27512-L27513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27512-L27513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27512-L27513) · [Before (L27491-L27492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27491-L27492)

```diff
-         } = (0, Tr.c)();
-       return null !== ar && ((0, IS.l)(ar, Sr) || null !== (0, IS.y)(Sr, ar, 0) || "Saddled" === (null === (Zr = jr.getColyseusEntity(rr)) || void 0 === Zr ? void 0 : Zr.metaInfo))
+         } = (0, Jd.b)();
+       return null !== Rd && ((0, vO.j)(Rd, Od) || null !== (0, vO.t)(Od, Rd, 0) || "Saddled" === (null === (Wd = Xd.getColyseusEntity(dd)) || void 0 === Wd ? void 0 : Wd.metaInfo))
```

#### 3088. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27499` → after: `L27520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27520) · [Before (L27499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27499)

```diff
-         const Sr = (0, Tr.e)(),
+         const Od = (0, Jd.c)(),
```

#### 3089. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27502-L27504` → after: `L27523-L27525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27523-L27525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27523-L27525) · [Before (L27502-L27504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27502-L27504)

```diff
-           } = (0, Tr.c)(),
-           Zr = Sr.xG[Sr.fC],
-           Wr = Sr.YB.gJ(Sr.fC).position,
+           } = (0, Jd.b)(),
+           Wd = Od.sG[Od.YV],
+           Fd = Od.qE.gM(Od.YV).position,
```

#### 3090. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27512` → after: `L27533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27533) · [Before (L27512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27512)

```diff
-           const [pr, xr, Nr] = Sr.YB.gJ(mr).position, Ur = Qr.getColyseusEntity(mr);
+           const [Qd, td, Nd] = Od.qE.gM(od).position, qd = md.getColyseusEntity(od);
```

#### 3091. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27524-L27525` → after: `L27545-L27546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27545-L27546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27545-L27546) · [Before (L27524-L27525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27524-L27525)

```diff
-       const Qr = null === (Sr = (0, Tr.e)().YB.yQr(rr)) || void 0 === Sr ? void 0 : Sr.lifeformType;
-       return WS.n.includes(Qr) ? Qr : null
+       const md = null === (Od = (0, Jd.c)().qE.XWd(dd)) || void 0 === Od ? void 0 : Od.lifeformType;
+       return XO.q.includes(md) ? md : null
```

#### 3092. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27527` → after: `L27548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27548) · [Before (L27527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27527)

```diff
-     var hS = Qr(2114);
+     var TO = md(2116);
```

#### 3093. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27558` → after: `L27579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27579) · [Before (L27558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27558)

```diff
-         }, this.pickaxe = new fS.d, this.touchCandidates = new US
+         }, this.pickaxe = new QO.e, this.touchCandidates = new yO
```

#### 3094. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27562-L27563` → after: `L27583-L27584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27583-L27584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27583-L27584) · [Before (L27562-L27563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27562-L27563)

```diff
-         const Zr = (0, Tr.e)(),
-           Wr = (0, Tr.c)();
+         const Wd = (0, Jd.c)(),
+           Fd = (0, Jd.b)();
```

#### 3095. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27565` → after: `L27586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27586) · [Before (L27565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27565)

```diff
-         if ("off" !== nS && null !== (rr = hS.d.get("canAltAction")) && void 0 !== rr && rr) {
+         if ("off" !== gO && null !== (dd = TO.e.get("canAltAction")) && void 0 !== dd && dd) {
```

#### 3096. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27572-L27577` → after: `L27593-L27598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27593-L27598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27593-L27598) · [Before (L27572-L27577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27572-L27577)

```diff
-             const Wr = Sr ? pS(Zr) : null !== (jr = Zr.LSr) && void 0 !== jr ? jr : Zr.camera.Y1(),
-               xr = Zr.YB.JY(Zr.fC),
-               mr = Sr && null !== (Ir = null === (fr = Zr.xSr) || void 0 === fr ? void 0 : fr.e_) && void 0 !== Ir ? Ir : 0,
-               Nr = Sr ? null === (Er = Zr.YB.IQr(Zr.fC)) || void 0 === Er || null === (pr = Er.selectedItem) || void 0 === pr ? void 0 : pr.name : void 0,
-               Ur = Sr && Zr.YB.jQr(Zr.fC).crouching,
-               tr = Sr ? Zr.camera.GJ : 0,
+             const Fd = Od ? oO(Wd) : null !== (Xd = Wd.mmd) && void 0 !== Xd ? Xd : Wd.camera.B_(),
+               td = Wd.qE.hY(Wd.YV),
+               od = Od && null !== (Kd = null === (hd = Wd.nOd) || void 0 === hd ? void 0 : hd.K9) && void 0 !== Kd ? Kd : 0,
+               Nd = Od ? null === (vd = Wd.qE.zmd(Wd.YV)) || void 0 === vd || null === (Qd = vd.selectedItem) || void 0 === Qd ? void 0 : Qd.name : void 0,
+               qd = Od && Wd.qE.Pmd(Wd.YV).crouching,
+               Hd = Od ? Wd.camera.R7 : 0,
```

#### 3097. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27584` → after: `L27605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27605) · [Before (L27584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27584)

```diff
-                   const Sr = (0, rS.p)(null, rr);
+                   const Od = (0, mO.i)(null, dd);
```

#### 3098. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27588` → after: `L27609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27609) · [Before (L27588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27588)

```diff
-               rr.shown === jr && rr.label === (null !== Zr && void 0 !== Zr ? Zr : null) || (rr.shown = jr, rr.label = null !== Zr && void 0 !== Zr ? Zr : null, ar = !0)
+               dd.shown === Xd && dd.label === (null !== Wd && void 0 !== Wd ? Wd : null) || (dd.shown = Xd, dd.label = null !== Wd && void 0 !== Wd ? Wd : null, Rd = !0)
```

#### 3099. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27592` → after: `L27613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27613) · [Before (L27592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27592)

```diff
-         const xr = null === (Sr = Zr.xSr) || void 0 === Sr ? void 0 : Sr.e_;
+         const td = null === (Od = Wd.nOd) || void 0 === Od ? void 0 : Od.K9;
```

#### 3100. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27597-L27598` → after: `L27618-L27619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27618-L27619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27618-L27619) · [Before (L27597-L27598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27597-L27598)

```diff
-           this.block.prevBlockId !== Sr && (this.block.prevClientOptStr = `${rr.rootName}CrosshairText`, this.block.prevBlockId = Sr);
-           const Qr = null !== (mr = Wr.getClientPredictedOption(Zr.fC, this.block.prevClientOptStr)) && void 0 !== mr ? mr : Wr.getDefaultItemStat(Sr, "CrosshairText");
+           this.block.prevBlockId !== Od && (this.block.prevClientOptStr = `${dd.rootName}CrosshairText`, this.block.prevBlockId = Od);
+           const md = null !== (od = Fd.getClientPredictedOption(Wd.YV, this.block.prevClientOptStr)) && void 0 !== od ? od : Fd.getDefaultItemStat(Od, "CrosshairText");
```

#### 3101. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27603-L27604` → after: `L27624-L27625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27624-L27625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27624-L27625) · [Before (L27603-L27604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27603-L27604)

```diff
-             const Sr = (0, Tr.e)(),
-               Qr = Sr.YB.lQr(Sr.fC).fistItem;
+             const Od = (0, Jd.c)(),
+               md = Od.qE.oWd(Od.YV).fistItem;
```

#### 3102. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27606` → after: `L27627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27627) · [Before (L27606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27606)

```diff
-             const Zr = null !== Qr.targetedPosition ? Sr.VY(Qr.targetedPosition) : 0;
+             const Wd = null !== md.targetedPosition ? Od.mY(md.targetedPosition) : 0;
```

#### 3103. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27608-L27611` → after: `L27629-L27632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27629-L27632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27629-L27632) · [Before (L27608-L27611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27608-L27611)

```diff
-             const Wr = (0, Tr.c)();
-             if (Wr.getBlockTypeIsHarvestable(Sr.fC, Zr)) return null;
-             const ar = null !== (rr = Wr.getItemStat(Sr.fC, Zr, "harvestLevel")) && void 0 !== rr ? rr : 0;
-             return ur.p[ar] ? ur.p[ar] : null
+             const Fd = (0, Jd.b)();
+             if (Fd.getBlockTypeIsHarvestable(Od.YV, Wd)) return null;
+             const Rd = null !== (dd = Fd.getItemStat(Od.YV, Wd, "harvestLevel")) && void 0 !== dd ? dd : 0;
+             return OO.u[Rd] ? OO.u[Rd] : null
```

#### 3104. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27614` → after: `L27635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27635) · [Before (L27614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27614)

```diff
-         return this.target = (0, wr.n)(Nr, {
+         return this.target = (0, ed.l)(Nd, {
```

#### 3105. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27618` → after: `L27639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27639) · [Before (L27618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27618)

```diff
-           blockText: null !== (Qr = this.block.text) && void 0 !== Qr ? Qr : null,
+           blockText: null !== (md = this.block.text) && void 0 !== md ? md : null,
```

#### 3106. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27627` → after: `L27648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27648) · [Before (L27627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27627)

```diff
-           return null !== (rr = null === (Sr = yS) || void 0 === Sr ? void 0 : Sr.target) && void 0 !== rr ? rr : YS
+           return null !== (dd = null === (Od = EO) || void 0 === Od ? void 0 : Od.target) && void 0 !== dd ? dd : YO
```

#### 3107. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27632` → after: `L27653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27653) · [Before (L27632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27632)

```diff
-           const Qr = (0, Er.P)((() => {
+           const md = (0, vd.N)((() => {
```

#### 3108. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27645` → after: `L27666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27666) · [Before (L27645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27645)

```diff
-     var vS = Qr(38669);
+     var xO = md(38718);
```

#### 3109. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27648` → after: `L27669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27669) · [Before (L27648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27648)

```diff
-       return (0, Vr.j)(`otherEntitySettingsClientifiedEId|${(0,Tr.e)().fC}|_isAlive`, rr)
+       return (0, jd.l)(`otherEntitySettingsClientifiedEId|${(0,Jd.c)().YV}|_isAlive`, dd)
```

#### 3110. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27655-L27657` → after: `L27676-L27678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27676-L27678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27676-L27678) · [Before (L27655-L27657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27655-L27657)

```diff
-             const Qr = (0, Tr.e)(),
-               Zr = null === (rr = Qr.xG[Qr.fC]) || void 0 === rr ? void 0 : rr[Qr.fC];
-             return void 0 !== Zr && "_isAlive" in Zr && (null !== (Sr = Zr._isAlive) && void 0 !== Sr ? Sr : vS.e._isAlive)
+             const md = (0, Jd.c)(),
+               Wd = null === (dd = md.sG[md.YV]) || void 0 === dd ? void 0 : dd[md.YV];
+             return void 0 !== Wd && "_isAlive" in Wd && (null !== (Od = Wd._isAlive) && void 0 !== Od ? Od : xO.e._isAlive)
```

#### 3111. `bundles/bloxd.io/chunks/js/109.js` (Changed code · before: `L27668` → after: `L27689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9dfR27689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-da3fcc6f23ce0c6919dd7a302258d14c319532a8cd3828742e1479373f95a9df) · [After (L27689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/109.js#L27689) · [Before (L27668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/109.js#L27668)

```diff
-           const Wr = (0, Tr.c)(),
+           const Fd = (0, Jd.b)(),
```
