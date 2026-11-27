# Changed — Bundle Modifications Report (Part 071 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `71 / 86` (**393** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 070](part-070.md) · [Part 072 →](part-072.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (983 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6535` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6585) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6535)

```diff
-           givenUp: () => (0, ZQ.e)(this, Dj)[Dj] === YB,
+           givenUp: () => (0, MN.d)(this, PL)[PL] === mW,
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6537` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6587) · [Before (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6537)

```diff
-             if ((0, ZQ.e)(this, Yj)[Yj] !== YB || !(0, ZQ.e)(this, Pj)[Pj]) return null;
+             if ((0, MN.d)(this, NL)[NL] !== mW || !(0, MN.d)(this, lL)[lL]) return null;
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6539-L6541` → after: `L6589-L6591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6589-L6591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6589-L6591) · [Before (L6539-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6539-L6541)

```diff
-             return (0, ZQ.e)(this, lj)[lj](((YB, DB) => {
-               const QB = YB.koB();
-               0 !== QB && BB >= 0 && OB >= 0 && BB + OB <= QB && (GB = new Uint8Array(DB.buffer, YB.doB() + BB, OB))
+             return (0, MN.d)(this, bL)[bL](((mW, EW) => {
+               const NW = mW.NPW();
+               0 !== NW && WW >= 0 && iW >= 0 && WW + iW <= NW && (OW = new Uint8Array(EW.buffer, mW.PPW() + WW, iW))
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6545-L6547` → after: `L6595-L6597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6595-L6597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6595-L6597) · [Before (L6545-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6545-L6547)

```diff
-             if ((0, ZQ.e)(this, Yj)[Yj] !== YB) return;
-             (0, ZQ.e)(this, Yj)[Yj] = null, (0, ZQ.e)(this, Dj)[Dj] = null, (0, ZQ.e)(this, lj)[lj]((BB => {
-               BB.KoB()
+             if ((0, MN.d)(this, NL)[NL] !== mW) return;
+             (0, MN.d)(this, NL)[NL] = null, (0, MN.d)(this, PL)[PL] = null, (0, MN.d)(this, bL)[bL]((WW => {
+               WW.LPW()
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6549-L6550` → after: `L6599-L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6599-L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6599-L6600) · [Before (L6549-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6549-L6550)

```diff
-             const BB = (0, ZQ.e)(this, Qj)[Qj];
-             (0, ZQ.e)(this, Qj)[Qj] = null, "unload" === BB ? (0, ZQ.e)(this, yj)[yj]() : "drop" === BB && (0, ZQ.e)(this, Jj)[Jj]()
+             const WW = (0, MN.d)(this, LL)[LL];
+             (0, MN.d)(this, LL)[LL] = null, "unload" === WW ? (0, MN.d)(this, tL)[tL]() : "drop" === WW && (0, MN.d)(this, ZL)[ZL]()
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6553` → after: `L6603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6603) · [Before (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6553)

```diff
-         return (0, ZQ.e)(this, Yj)[Yj] = YB, YB
+         return (0, MN.d)(this, NL)[NL] = mW, mW
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6556` → after: `L6606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6606) · [Before (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6556)

```diff
-         (0, ZQ.e)(this, jj)[jj] = (0, ZQ.e)(this, oj)[oj]
+         (0, MN.d)(this, wL)[wL] = (0, MN.d)(this, cL)[cL]
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6559-L6560` → after: `L6609-L6610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6609-L6610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6609-L6610) · [Before (L6559-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6559-L6560)

```diff
-         (0, ZQ.e)(this, zj)[zj]((OB => {
-           OB.uoB(BB)
+         (0, MN.d)(this, AL)[AL]((iW => {
+           iW.cPW(WW)
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6564-L6565` → after: `L6614-L6615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6614-L6615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6614-L6615) · [Before (L6564-L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6564-L6565)

```diff
-         (0, ZQ.e)(this, zj)[zj]((OB => {
-           OB.moB(BB)
+         (0, MN.d)(this, AL)[AL]((iW => {
+           iW.wPW(WW)
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6569` → after: `L6619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6619) · [Before (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6569)

```diff
-         (0, ZQ.e)(this, zj)[zj]((BB => {
+         (0, MN.d)(this, AL)[AL]((WW => {
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6574` → after: `L6624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6624) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6574)

```diff
-         (0, ZQ.e)(this, Oj)[Oj]++, (0, ZQ.e)(this, Pj)[Pj] && ((0, ZQ.e)(this, lj)[lj]((BB => {
+         (0, MN.d)(this, mL)[mL]++, (0, MN.d)(this, lL)[lL] && ((0, MN.d)(this, bL)[bL]((WW => {
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6576` → after: `L6626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6626) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6576)

```diff
-         })), (0, ZQ.e)(this, xo)[xo]) ? (0, ZQ.e)(this, Qj)[Qj] = "unload" : (0, ZQ.e)(this, yj)[yj]()
+         })), (0, MN.d)(this, WL)[WL]) ? (0, MN.d)(this, LL)[LL] = "unload" : (0, MN.d)(this, tL)[tL]()
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6581` → after: `L6631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6631) · [Before (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6581)

```diff
-       (0, ZQ.e)(this, Jj)[Jj](), (0, ZQ.e)(this, Bj)[Bj] || ((0, ZQ.e)(this, so)[so] = null, this.deps.unload())
+       (0, MN.d)(this, ZL)[ZL](), (0, MN.d)(this, OL)[OL] || ((0, MN.d)(this, QP)[QP] = null, this.deps.unload())
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6585` → after: `L6635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6635) · [Before (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6585)

```diff
-       (0, ZQ.e)(this, lj)[lj]((BB => {
+       (0, MN.d)(this, bL)[bL]((WW => {
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6587` → after: `L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6637) · [Before (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6587)

```diff
-       })), (0, ZQ.e)(this, xo)[xo] = null, (0, ZQ.e)(this, to)[to] = null
+       })), (0, MN.d)(this, WL)[WL] = null, (0, MN.d)(this, iL)[iL] = null
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6592` → after: `L6642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6642) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6592)

```diff
-       }) ? "reloading" : zB.jd.ModuleLoad
+       }) ? "reloading" : xW.gd.ModuleLoad
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6596` → after: `L6646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6646) · [Before (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6596)

```diff
-       return null !== (0, ZQ.e)(this, Yj)[Yj] && (0, ZQ.e)(this, Dj)[Dj] !== (0, ZQ.e)(this, Yj)[Yj]
+       return null !== (0, MN.d)(this, NL)[NL] && (0, MN.d)(this, PL)[PL] !== (0, MN.d)(this, NL)[NL]
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6600` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6650) · [Before (L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6600)

```diff
-       return null === (0, ZQ.e)(this, Qj)[Qj] && (0, ZQ.e)(this, lj)[lj](BB)
+       return null === (0, MN.d)(this, LL)[LL] && (0, MN.d)(this, bL)[bL](WW)
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6604-L6606` → after: `L6654-L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6654-L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6654-L6656) · [Before (L6604-L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6604-L6606)

```diff
-       const OB = (0, ZQ.e)(this, xo)[xo],
-         GB = (0, ZQ.e)(this, to)[to];
-       return !(!OB || !GB) && (0, ZQ.e)(this, pj)[pj]((() => {
+       const iW = (0, MN.d)(this, WL)[WL],
+         OW = (0, MN.d)(this, iL)[iL];
+       return !(!iW || !OW) && (0, MN.d)(this, jL)[jL]((() => {
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6612` → after: `L6662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6662) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6612)

```diff
-       if ((0, ZQ.e)(this, Bj)[Bj]) return !1;
+       if ((0, MN.d)(this, OL)[OL]) return !1;
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6616` → after: `L6666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6666) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6616)

```diff
-         return (0, ZQ.e)(this, qj)[qj](OB), !1
+         return (0, MN.d)(this, UL)[UL](iW), !1
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6622` → after: `L6672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6672) · [Before (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6622)

```diff
-       (0, ZQ.e)(this, Bj)[Bj] = !0, (0, ZQ.e)(this, xo)[xo] = null, (0, ZQ.e)(this, to)[to] = null, (0, ZQ.e)(this, so)[so] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.NoB(zB.jd.ModuleTrap)
+       (0, MN.d)(this, OL)[OL] = !0, (0, MN.d)(this, WL)[WL] = null, (0, MN.d)(this, iL)[iL] = null, (0, MN.d)(this, QP)[QP] = null, this.deps.crash(this.deps.markTrapped(WW)), this.deps.core.zNW(xW.gd.ModuleTrap)
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6624-L6625` → after: `L6674-L6675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6674-L6675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6674-L6675) · [Before (L6624-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6624-L6625)

```diff
-     var fj = GB(6997),
-       kj = GB(42042);
+     var hL = OW(7459),
+       HL = OW(42519);
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6636` → after: `L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6686) · [Before (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6636)

```diff
-         case zB.qd.FlyingText: {
+         case xW.pd.FlyingText: {
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6641` → after: `L6691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6691) · [Before (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6641)

```diff
-             return void console.warn(`${dj} a replay's flying text isn't JSON`, JB)
+             return void console.warn(`${nL} a replay's flying text isn't JSON`, wW)
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6643` → after: `L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6693) · [Before (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6643)

```diff
-           oB.o.tM("forceFlyingMiddleMessage", {
+           PW.l.iZ("forceFlyingMiddleMessage", {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6645` → after: `L6695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6695) · [Before (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6645)

```diff
-             VB: BB.VB,
+             RN: WW.RN,
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6647` → after: `L6697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6697) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6647)

```diff
-             SB: BB.SB
+             GN: WW.GN
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6651-L6652` → after: `L6701-L6702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6701-L6702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6701-L6702) · [Before (L6651-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6651-L6652)

```diff
-         case zB.qd.PlayerKilled:
-           (0, kj.f)({
+         case xW.pd.PlayerKilled:
+           (0, HL.g)({
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6655` → after: `L6705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6705) · [Before (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6655)

```diff
-               deadEId: null !== (OB = uj(BB.dead)) && void 0 !== OB ? OB : "",
+               deadEId: null !== (iW = oL(WW.dead)) && void 0 !== iW ? iW : "",
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6657` → after: `L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6707) · [Before (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6657)

```diff
-               withItem: null !== (GB = BB.withItem) && void 0 !== GB ? GB : "",
+               withItem: null !== (OW = WW.withItem) && void 0 !== OW ? OW : "",
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6662-L6663` → after: `L6712-L6713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6712-L6713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6712-L6713) · [Before (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6662-L6663)

```diff
-         case zB.qd.Killfeed:
-           (0, kj.f)({
+         case xW.pd.Killfeed:
+           (0, HL.g)({
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6668-L6669` → after: `L6718-L6719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6718-L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6718-L6719) · [Before (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6668-L6669)

```diff
-                 name: null !== (YB = BB.killerName) && void 0 !== YB ? YB : void 0,
-                 colour: null !== (DB = BB.killerColour) && void 0 !== DB ? DB : void 0
+                 name: null !== (mW = WW.killerName) && void 0 !== mW ? mW : void 0,
+                 colour: null !== (EW = WW.killerColour) && void 0 !== EW ? EW : void 0
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6673-L6674` → after: `L6723-L6724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6723-L6724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6723-L6724) · [Before (L6673-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6673-L6674)

```diff
-                 name: null !== (QB = BB.victimName) && void 0 !== QB ? QB : void 0,
-                 colour: null !== (jB = BB.victimColour) && void 0 !== jB ? jB : void 0
+                 name: null !== (NW = WW.victimName) && void 0 !== NW ? NW : void 0,
+                 colour: null !== (LW = WW.victimColour) && void 0 !== LW ? LW : void 0
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6676` → after: `L6726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6726) · [Before (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6676)

```diff
-               withItem: null !== (yB = BB.withItem) && void 0 !== yB ? yB : ""
+               withItem: null !== (cW = WW.withItem) && void 0 !== cW ? cW : ""
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6686` → after: `L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6736) · [Before (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6686)

```diff
-       return Number.isInteger(OB) && OB > TD && OB <= 2147483647 ? OB : null
+       return Number.isInteger(iW) && iW > rE && iW <= 2147483647 ? iW : null
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6698` → after: `L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6748) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6698)

```diff
-       const OB = (0, GQ.g)(oY.oc.PlayerKilled, (OB => {
+       const iW = (0, PN.j)(wm.uc.PlayerKilled, (iW => {
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6700-L6701` → after: `L6750-L6751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6750-L6751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6750-L6751) · [Before (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6700-L6701)

```diff
-           const DB = (0, OQ.l)(OB);
-           if (!(0, OQ.e)(DB)) return;
+           const EW = (0, NN.j)(iW);
+           if (!(0, NN.d)(EW)) return;
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6708` → after: `L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6758) · [Before (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6708)

```diff
-           BB.recordPlayerKilled(null !== (GB = Fj(QB)) && void 0 !== GB ? GB : TD, null !== (YB = Fj(oB)) && void 0 !== YB ? YB : TD, "number" === typeof yB ? yB : 0, "string" === typeof jB ? jB : "")
+           WW.recordPlayerKilled(null !== (OW = vL(NW)) && void 0 !== OW ? OW : rE, null !== (mW = vL(PW)) && void 0 !== mW ? mW : rE, "number" === typeof cW ? cW : 0, "string" === typeof LW ? LW : "")
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6710-L6712` → after: `L6760-L6762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6760-L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6760-L6762) · [Before (L6710-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6710-L6712)

```diff
-         GB = (0, GQ.g)(oY.oc.CustomKillfeed, (OB => {
-           const GB = (0, OQ.l)(OB);
-           if (!(0, OQ.e)(GB) || !(0, OQ.e)(GB.killer) || !(0, OQ.e)(GB.victim)) return;
+         OW = (0, PN.j)(wm.uc.CustomKillfeed, (iW => {
+           const OW = (0, NN.j)(iW);
+           if (!(0, NN.d)(OW) || !(0, NN.d)(OW.killer) || !(0, NN.d)(OW.victim)) return;
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6718` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6768) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6718)

```diff
-           BB.recordKillfeed(ij(YB), ij(DB), "string" === typeof QB ? QB : null)
+           WW.recordKillfeed(gL(mW), gL(EW), "string" === typeof NW ? NW : null)
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6736` → after: `L6781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6781) · [Before (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6736)

```diff
-         } = YB.c.get("clientEscMenuOptions"), QB = `${GB}:${DB}`;
+         } = mW.d.get("clientEscMenuOptions"), NW = `${OW}:${EW}`;
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6739` → after: `L6784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6784) · [Before (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6739)

```diff
-       return GB(), (0, oB.p)("appManagerUpdated|clientEscMenuOptions", GB)
+       return OW(), (0, PW.n)("appManagerUpdated|clientEscMenuOptions", OW)
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6746` → after: `L6791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6791) · [Before (L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6746)

```diff
-         return BB.isStopped ? GB : OB(...arguments)
+         return WW.isStopped ? OW : iW(...arguments)
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6758` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6803) · [Before (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6758)

```diff
-       return GB.e(76).then((() => GB(64058)))
+       return OW.e(77).then((() => OW(64604)))
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6762` → after: `L6807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6807) · [Before (L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6762)

```diff
-       (0, gD.h)({
+       (0, fE.i)({
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6774` → after: `L6819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6819) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6774)

```diff
-         } = BB, QB = () => BB.memory().buffer, oB = () => OB.isStopped ? null : OB.rings.cmd, jB = Ej(OB, ((BB, OB) => DB.yoB(BB, OB)), 0), yB = () => DB.MoB();
+         } = WW, NW = () => WW.memory().buffer, PW = () => iW.isStopped ? null : iW.rings.cmd, LW = CL(iW, ((WW, iW) => EW.CNW(WW, iW)), 0), cW = () => EW.BNW();
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6778-L6782` → after: `L6823-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6823-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6823-L6827) · [Before (L6778-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6778-L6782)

```diff
-             ZoB: Ej(OB, (BB => DB.ZoB(BB)), -1),
-             yoB: jB,
-             MoB: yB,
-             NoB: Ej(OB, (BB => {
-               DB.NoB(BB)
+             aNW: CL(iW, (WW => EW.aNW(WW)), -1),
+             CNW: LW,
+             BNW: cW,
+             zNW: CL(iW, (WW => {
+               EW.zNW(WW)
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6786` → after: `L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6831) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6786)

```diff
-           load: async () => (JB = await GB.e(77).then((() => GB(64066))), JB.loadReplayModule()),
+           load: async () => (wW = await OW.e(78).then((() => OW(64611))), wW.loadReplayModule()),
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6800-L6803` → after: `L6845-L6848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6845-L6848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6845-L6848) · [Before (L6800-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6800-L6803)

```diff
-             zoB: Ej(OB, (BB => DB.zoB(BB)), 0),
-             DoB: Ej(OB, (BB => DB.DoB(BB)), 0),
-             yoB: jB,
-             MoB: yB
+             RNW: CL(iW, (WW => EW.RNW(WW)), 0),
+             DNW: CL(iW, (WW => EW.DNW(WW)), 0),
+             CNW: LW,
+             BNW: cW
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6813` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6858) · [Before (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6813)

```diff
-               console.warn(`${Ij} the recorder module didn't prefetch, so a save loads it:`, BB)
+               console.warn(`${eL} the recorder module didn't prefetch, so a save loads it:`, WW)
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6823` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6868) · [Before (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6823)

```diff
-             return null !== (BB = null === (OB = MB) || void 0 === OB ? void 0 : OB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
+             return null !== (WW = null === (iW = tW) || void 0 === iW ? void 0 : iW.recorderMemoryBytes()) && void 0 !== WW ? WW : 0
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6842-L6844` → after: `L6887-L6889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6887-L6889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6887-L6889) · [Before (L6842-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6842-L6844)

```diff
-             HQB: Ej(OB, (BB => DB.HQB(BB)), 0),
-             sQB: Ej(OB, (() => {
-               DB.sQB()
+             hNW: CL(iW, (WW => EW.hNW(WW)), 0),
+             nNW: CL(iW, (() => {
+               EW.nNW()
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6846-L6847` → after: `L6891-L6892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6891-L6892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6891-L6892) · [Before (L6846-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6846-L6847)

```diff
-             eZ: Ej(OB, (() => DB.eZ()), 0),
-             vQB: Ej(OB, (() => DB.vQB()), 0)
+             EU: CL(iW, (() => EW.EU()), 0),
+             HNW: CL(iW, (() => EW.HNW()), 0)
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6860` → after: `L6905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6905) · [Before (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6860)

```diff
-             console.warn(`${Ij} the recorded game's replay hooks:`, BB)
+             console.warn(`${eL} the recorded game's replay hooks:`, WW)
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6869` → after: `L6914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6914) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6869)

```diff
-           notify: gD.h,
+           notify: fE.i,
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6872` → after: `L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6917) · [Before (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6872)

```diff
-             null === (BB = (0, XD.g)()) || void 0 === BB || BB.recorderChanged()
+             null === (WW = (0, XE.h)()) || void 0 === WW || WW.recorderChanged()
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6876` → after: `L6921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6921) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6876)

```diff
-             null === (BB = (0, XD.g)()) || void 0 === BB || BB.viewerChanged()
+             null === (WW = (0, XE.h)()) || void 0 === WW || WW.viewerChanged()
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6881` → after: `L6926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6926) · [Before (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6881)

```diff
-               const DB = oY.Cb[OB.key];
+               const EW = wm.Db[iW.key];
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6883` → after: `L6928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6928) · [Before (L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6883)

```diff
-               let QB = null !== (GB = OB.value) && void 0 !== GB ? GB : JSON.parse(JSON.stringify(null !== (YB = fj.b[DB]) && void 0 !== YB ? YB : null));
+               let NW = null !== (OW = iW.value) && void 0 !== OW ? OW : JSON.parse(JSON.stringify(null !== (mW = hL.c[EW]) && void 0 !== mW ? mW : null));
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6887` → after: `L6932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6932) · [Before (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6887)

```diff
-                 return void console.warn(`${dj} a replay's ${DB} isn't JSON`, oB)
+                 return void console.warn(`${nL} a replay's ${EW} isn't JSON`, PW)
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6896` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6941) · [Before (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6896)

```diff
-             this.entityHooks.opened((0, dB.ac)(OB)), BB.replayShaderPack(OB)
+             this.entityHooks.opened((0, hW.Tb)(iW)), WW.replayShaderPack(iW)
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6900` → after: `L6945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6945) · [Before (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6900)

```diff
-             return null !== (BB = null === (GB = OB.lastHeader) || void 0 === GB ? void 0 : GB.renderPending) && void 0 !== BB ? BB : 0
+             return null !== (WW = null === (OW = iW.lastHeader) || void 0 === OW ? void 0 : OW.renderPending) && void 0 !== WW ? WW : 0
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6902` → after: `L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6947) · [Before (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6902)

```diff
-           viewerOpen: rD.b,
+           viewerOpen: CE.e,
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6907` → after: `L6952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6952) · [Before (L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6907)

```diff
-         this.runtime = zB, YB.replay = zB.sink, (0, XD.s)(zB);
+         this.runtime = xW, mW.replay = xW.sink, (0, XE.x)(xW);
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6916-L6917` → after: `L6961-L6962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6961-L6962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6961-L6962) · [Before (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6916-L6917)

```diff
-         this.freecam = lB, (0, XD.p)(lB), this.recordedOptions = function(BB, OB) {
-           const GB = oY.Cb,
+         this.freecam = lW, (0, XE.t)(lW), this.recordedOptions = function(WW, iW) {
+           const OW = wm.Db,
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6919` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6964) · [Before (L6919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6919)

```diff
-               BB.setOption(YB, gj(OB))
+               WW.setOption(mW, iW)
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6923-L6925` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6968) · [Before (L6923-L6925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6923-L6925)

```diff
-               GB.forEach(((GB, YB) => {
-                 BB.setOption(YB, gj(OB.get(GB)))
-               }))
+               WW.setAllOptions(OW.map((WW => iW.get(WW))))
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6931` → after: `L6974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6974) · [Before (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6931)

```diff
-         }(zB.recorder, BB.options), this.stops = [(0, ZY.o)((BB => {
+         }(xW.recorder, WW.options), this.stops = [(0, sm.n)((WW => {
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6938` → after: `L6981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6981) · [Before (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6938)

```diff
-         })), (0, ZY.C)(((BB, OB) => {
+         })), (0, sm.B)(((WW, iW) => {
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6957` → after: `L7000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7000) · [Before (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6957)

```diff
-           GB && (null === (YB = (0, XD.g)()) || void 0 === YB || YB.keyDown(OB))
+           OW && (null === (mW = (0, XE.h)()) || void 0 === mW || mW.keyDown(iW))
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6961` → after: `L7004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7004) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6961)

```diff
-           return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
+           return !0 === (null === WW || void 0 === WW ? void 0 : WW.isOpen) ? WW : null
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6963` → after: `L7006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7006) · [Before (L6963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6963)

```diff
-         (0, LD.g)({
+         (0, pE.f)({
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6967` → after: `L7010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7010) · [Before (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6967)

```diff
-             return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.id) && void 0 !== BB ? BB : null
+             return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.id) && void 0 !== WW ? WW : null
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6971` → after: `L7014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7014) · [Before (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6971)

```diff
-             return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.saveRefusal) && void 0 !== BB ? BB : null
+             return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.saveRefusal) && void 0 !== WW ? WW : null
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6975` → after: `L7018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7018) · [Before (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6975)

```diff
-             return null !== (BB = null === (OB = pB()) || void 0 === OB ? void 0 : OB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
+             return null !== (WW = null === (iW = AW()) || void 0 === iW ? void 0 : iW.save()) && void 0 !== WW ? WW : Promise.resolve(null)
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6979` → after: `L7022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7022) · [Before (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6979)

```diff
-             return null !== (BB = null === (OB = zB.currentViewer) || void 0 === OB ? void 0 : OB.fileHandle) && void 0 !== BB ? BB : null
+             return null !== (WW = null === (iW = xW.currentViewer) || void 0 === iW ? void 0 : iW.fileHandle) && void 0 !== WW ? WW : null
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6989` → after: `L7032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7032) · [Before (L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6989)

```diff
-           if (BB.phase === zB.E.Activated) {
+           if (WW.phase === xW.A.Activated) {
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6993` → after: `L7036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7036) · [Before (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6993)

```diff
-               lobbyType: (0, KB.B)(OB.lobbyName),
+               lobbyType: (0, HW.A)(iW.lobbyName),
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6997` → after: `L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7040) · [Before (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6997)

```diff
-           } else BB.phase !== zB.E.Left && BB.phase !== zB.E.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else WW.phase !== xW.A.Left && WW.phase !== xW.A.Closed || WW.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7003` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7046) · [Before (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7003)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, XD.l)() === this.runtime && (0, XD.s)(null), (0, XD.i)() === this.freecam && (0, XD.p)(null), (0, LD.g)(cj), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, XE.n)() === this.runtime && (0, XE.x)(null), (0, XE.j)() === this.freecam && (0, XE.t)(null), (0, pE.f)(XL), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7016` → after: `L7059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7059) · [Before (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7016)

```diff
-             return OB.inPlayback || (0, ZY.O)().leaveGame(null), OB
+             return iW.inPlayback || (0, sm.K)().leaveGame(null), iW
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7019` → after: `L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7062) · [Before (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7019)

```diff
-           throw console.warn(`${Ij} the replay viewer didn't load`, DB), new Error(gD.e.viewerLoadFailed.text)
+           throw console.warn(`${eL} the replay viewer didn't load`, EW), new Error(fE.e.viewerLoadFailed.text)
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7025` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7068) · [Before (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7025)

```diff
-     var Tj = GB(2050);
+     var GL = OW(2061);
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7033` → after: `L7076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7076) · [Before (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7033)

```diff
-           aux: BB.reset ? zB.kc.ResetFirst : 0,
+           aux: WW.reset ? xW.bc.ResetFirst : 0,
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7037` → after: `L7080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7080) · [Before (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7037)

```diff
-       BB.queueOptions(GB, YB) && (OB.reset && Tj.e.reset(), Tj.e.apply(OB.changes))
+       WW.queueOptions(OW, mW) && (iW.reset && GL.d.reset(), GL.d.apply(iW.changes))
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7110-L7114` → after: `L7153-L7157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7153-L7157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7153-L7157) · [Before (L7110-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7110-L7114)

```diff
-     var By = GB(36945),
-       Oy = GB(36991),
-       Gy = GB(41964),
-       Yy = GB(42006),
-       Dy = GB(3210);
+     var ic = OW(37336),
+       Oc = OW(37432),
+       mc = OW(42455),
+       Ec = OW(42482),
+       Nc = OW(2388);
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7118` → after: `L7161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7161) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7118)

```diff
-         this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.Vp = !1
+         this.host = WW, this.sets = new Map, this.table = [], this.generation = 0, this.JA = !1
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7122` → after: `L7165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7165) · [Before (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7122)

```diff
-           if (BB.byteLength !== zB.vd) return null;
+           if (WW.byteLength !== xW.Cd) return null;
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7129` → after: `L7172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7172) · [Before (L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7129)

```diff
-         OB && !this.Vp && (OB.release !== zB.xd && this.release(OB.release), OB.want !== zB.xd && this.want(OB.want))
+         iW && !this.JA && (iW.release !== xW.Ed && this.release(iW.release), iW.want !== xW.Ed && this.want(iW.want))
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7132` → after: `L7175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7175) · [Before (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7132)

```diff
-         if (!this.Vp) {
+         if (!this.JA) {
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7138-L7139` → after: `L7181-L7182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7181-L7182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7181-L7182) · [Before (L7138-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7138-L7139)

```diff
-         if (this.Vp) return;
-         this.Vp = !0, this.generation++, this.table = [];
+         if (this.JA) return;
+         this.JA = !0, this.generation++, this.table = [];
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7145` → after: `L7188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7188) · [Before (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7145)

```diff
-             this.host.NDB(BB)
+             this.host.mEW(WW)
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7162` → after: `L7205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7205) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7162)

```diff
-         if (!GB || 1 !== GB.urls.length && GB.urls.length !== oY.lc.CubeFaces) return this.host.sendReady(Jy(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
+         if (!OW || 1 !== OW.urls.length && OW.urls.length !== wm.nc.CubeFaces) return this.host.sendReady(tc(WW)), void this.host.onLoadFailed(WW, "", new Error(`no image set ${WW}`));
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7180` → after: `L7223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7223) · [Before (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7180)

```diff
-           if (!yB || !GB.wanted) return this.Vp ? void this.releaseAfterDispose(jB.map(jy)) : (this.releaseAll(jB.map(jy)), void(yB && this.sets.delete(BB)));
+           if (!cW || !OW.wanted) return this.JA ? void this.releaseAfterDispose(LW.map(cc)) : (this.releaseAll(LW.map(cc)), void(cW && this.sets.delete(WW)));
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7187` → after: `L7230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7230) · [Before (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7187)

```diff
-         const [DB] = YB, QB = [DB.width, DB.height], oB = YB.every((BB => BB.width === QB[0] && BB.height === QB[1])), jB = OB.urls.length === oY.lc.CubeFaces;
+         const [EW] = mW, NW = [EW.width, EW.height], PW = mW.every((WW => WW.width === NW[0] && WW.height === NW[1])), LW = iW.urls.length === wm.nc.CubeFaces;
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7190-L7191` → after: `L7233-L7234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7233-L7234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7233-L7234) · [Before (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7190-L7191)

```diff
-           const GB = YB.map((BB => `${BB.width}x${BB.height}`));
-           return void this.host.onLoadFailed(BB, OB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${GB.join(", ")}`))
+           const OW = mW.map((WW => `${WW.width}x${WW.height}`));
+           return void this.host.onLoadFailed(WW, iW.urls[0], new Error(`set ${WW}'s images can't make its texture: ${OW.join(", ")}`))
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7207` → after: `L7250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7250) · [Before (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7207)

```diff
-         for (const OB of BB) this.host.NDB(OB)
+         for (const iW of WW) this.host.mEW(iW)
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7211` → after: `L7254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7254) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7211)

```diff
-           this.host.NDB(OB)
+           this.host.mEW(iW)
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7221` → after: `L7264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7264) · [Before (L7221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7221)

```diff
-       const YB = new Uint8Array(oY.lc.SkyImagesReadyBytes),
+       const mW = new Uint8Array(wm.nc.SkyImagesReadyBytes),
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7223` → after: `L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7266) · [Before (L7223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7223)

```diff
-       return DB.setUint16(0, BB, !0), DB.setUint16(2, OB.length, !0), DB.setUint16(4, GB[0], !0), DB.setUint16(6, GB[1], !0), OB.slice(0, oY.lc.CubeFaces).forEach(((BB, OB) => {
+       return EW.setUint16(0, WW, !0), EW.setUint16(2, iW.length, !0), EW.setUint16(4, OW[0], !0), EW.setUint16(6, OW[1], !0), iW.slice(0, wm.nc.CubeFaces).forEach(((WW, iW) => {
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7229` → after: `L7272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7272) · [Before (L7229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7229)

```diff
-       const OB = new Uint8Array(oY.lc.SkyImagesReadyBytes),
+       const iW = new Uint8Array(wm.nc.SkyImagesReadyBytes),
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7231` → after: `L7274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7274) · [Before (L7231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7231)

```diff
-       return GB.setUint16(0, BB, !0), GB.setUint16(2, oY.lc.Failed, !0), OB
+       return OW.setUint16(0, WW, !0), OW.setUint16(2, wm.nc.Failed, !0), iW
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7237` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7280) · [Before (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7237)

```diff
-         GB = await (0, Dy.I)(BB)
+         OW = await (0, Nc.C)(WW)
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7239` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7282) · [Before (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7239)

```diff
-         throw new Gy.d("fetch", BB, {
+         throw new mc.c("fetch", WW, {
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7272` → after: `L7315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7315) · [Before (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7272)

```diff
-         throw new Gy.d("decode", BB, {
+         throw new mc.c("decode", WW, {
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7277` → after: `L7320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7320) · [Before (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7277)

```diff
-         id: (0, Gy.q)(DB),
+         id: (0, mc.l)(EW),
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7282-L7286` → after: `L7325-L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7325-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7325-L7329) · [Before (L7282-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7282-L7286)

```diff
-     var zy = GB(2272),
-       ly = GB(34612),
-       py = GB(39930);
-     const qy = zy.i.length,
-       Zy = new Set([...zy.i, "earth"]);
+     var lc = OW(2300),
+       Ac = OW(35056),
+       bc = OW(40452);
+     const jc = lc.f.length,
+       Uc = new Set([...lc.f, "earth"]);
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7295` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7338) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7295)

```diff
-               kind: oY.lc.KindCustom,
+               kind: wm.nc.KindCustom,
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7306` → after: `L7349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7349) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7306)

```diff
-             kind: oY.lc.KindEarth,
+             kind: wm.nc.KindEarth,
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7311` → after: `L7354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7354) · [Before (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7311)

```diff
-       zy.i.forEach(((OB, GB) => {
+       lc.f.forEach(((iW, OW) => {
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7313` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7356) · [Before (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7313)

```diff
-         YB(GB, null !== (DB = Ry(BB[OB])) && void 0 !== DB ? DB : ly.p[OB])
+         mW(OW, null !== (EW = sc(WW[iW])) && void 0 !== EW ? EW : Ac.p[iW])
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7324` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7367) · [Before (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7324)

```diff
-         OB.length > 255 ? jB.push(`Ignoring texture pack skybox ${lB}, whose name is over 255 bytes`) : oB.length === oY.lc.MaxAdded ? jB.push(`Ignoring texture pack skybox ${lB}, past the ${oY.lc.MaxAdded} skies a pack can add`) : (oB.push(OB), YB(oY.lc.AddedId, BB))
+         iW.length > 255 ? LW.push(`Ignoring texture pack skybox ${lW}, whose name is over 255 bytes`) : PW.length === wm.nc.MaxAdded ? LW.push(`Ignoring texture pack skybox ${lW}, past the ${wm.nc.MaxAdded} skies a pack can add`) : (PW.push(iW), mW(wm.nc.AddedId, WW))
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7328` → after: `L7371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7371) · [Before (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7328)

```diff
-         urls: ly.g.map((BB => ly.i + BB)),
+         urls: Ac.e.map((WW => Ac.i + WW)),
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7334` → after: `L7377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7377) · [Before (L7334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7334)

```diff
-         urls: [ly.e],
+         urls: [Ac.c],
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7337` → after: `L7380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7380) · [Before (L7337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7337)

```diff
-       const JB = oY.lc.SkyTableHeaderBytes + GB.length * oY.lc.SkyTableEntryBytes,
+       const wW = wm.nc.SkyTableHeaderBytes + OW.length * wm.nc.SkyTableEntryBytes,
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7341` → after: `L7384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7384) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7341)

```diff
-         const GB = oY.lc.SkyTableHeaderBytes + OB * oY.lc.SkyTableEntryBytes;
+         const OW = wm.nc.SkyTableHeaderBytes + iW * wm.nc.SkyTableEntryBytes;
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7361` → after: `L7404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7404) · [Before (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7361)

```diff
-             "number" === typeof yB && Number.isFinite(yB) && (OB.setFloat32(GB + oY.w.CameraOffsetAt + 4 * QB, yB, !0), DB |= jB)
+             "number" === typeof cW && Number.isFinite(cW) && (iW.setFloat32(OW + wm.x.CameraOffsetAt + 4 * NW, cW, !0), EW |= LW)
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7367` → after: `L7410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7410) · [Before (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7367)

```diff
-           OB.setUint32(GB + oY.w.PresentAt, DB, !0), OB.setUint8(GB + oY.w.FlagsAt, QB)
+           iW.setUint32(OW + wm.x.PresentAt, EW, !0), iW.setUint8(OW + wm.x.FlagsAt, NW)
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7386` → after: `L7429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7429) · [Before (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7386)

```diff
-       })) ? BB : null
+       })) ? WW : null
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7389-L7396` → after: `L7432-L7439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7432-L7439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7432-L7439) · [Before (L7389-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7389-L7396)

```diff
-         ["inclination", oY.w.Inclination],
-         ["turbidity", oY.w.Turbidity],
-         ["luminance", oY.w.Luminance],
-         ["rayleigh", oY.w.Rayleigh],
-         ["mieCoefficient", oY.w.MieCoefficient],
-         ["mieDirectionalG", oY.w.MieDirectionalG],
-         ["distance", oY.w.Distance],
-         ["azimuth", oY.w.Azimuth]
+         ["inclination", wm.x.Inclination],
+         ["turbidity", wm.x.Turbidity],
+         ["luminance", wm.x.Luminance],
+         ["rayleigh", wm.x.Rayleigh],
+         ["mieCoefficient", wm.x.MieCoefficient],
+         ["mieDirectionalG", wm.x.MieDirectionalG],
+         ["distance", wm.x.Distance],
+         ["azimuth", wm.x.Azimuth]
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7399-L7401` → after: `L7442-L7444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7442-L7444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7442-L7444) · [Before (L7399-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7399-L7401)

```diff
-         ["sunPosition", oY.w.SunPosition, oY.w.SunPositionAt],
-         ["up", oY.w.Up, oY.w.UpAt],
-         ["vertexTint", oY.w.VertexTint, oY.w.VertexTintAt]
+         ["sunPosition", wm.x.SunPosition, wm.x.SunPositionAt],
+         ["up", wm.x.Up, wm.x.UpAt],
+         ["vertexTint", wm.x.VertexTint, wm.x.VertexTintAt]
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7404-L7406` → after: `L7447-L7449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7447-L7449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7447-L7449) · [Before (L7404-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7404-L7406)

```diff
-         ["xCameraOffset", oY.w.CameraOffsetX],
-         ["yCameraOffset", oY.w.CameraOffsetY],
-         ["zCameraOffset", oY.w.CameraOffsetZ]
+         ["xCameraOffset", wm.x.CameraOffsetX],
+         ["yCameraOffset", wm.x.CameraOffsetY],
+         ["zCameraOffset", wm.x.CameraOffsetZ]
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7409-L7411` → after: `L7452-L7454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7452-L7454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7452-L7454) · [Before (L7409-L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7409-L7411)

```diff
-         ["useSunPosition", oY.w.UseSunPosition],
-         ["dithering", oY.w.Dithering],
-         ["infiniteDistance", oY.w.InfiniteDistance]
+         ["useSunPosition", wm.x.UseSunPosition],
+         ["dithering", wm.x.Dithering],
+         ["infiniteDistance", wm.x.InfiniteDistance]
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7441` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7484) · [Before (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7441)

```diff
-                       return "string" !== typeof BB ? null : null !== (OB = null === (GB = ky.exec(BB)) || void 0 === GB || null === (YB = GB.groups) || void 0 === YB ? void 0 : YB.base64) && void 0 !== OB ? OB : null
+                       return "string" !== typeof WW ? null : null !== (iW = null === (OW = hc.exec(WW)) || void 0 === OW || null === (mW = OW.groups) || void 0 === mW ? void 0 : mW.base64) && void 0 !== iW ? iW : null
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7445` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7488) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7445)

```diff
-                 }(YB) || (GB(`Ignoring texture pack skybox ${OB}, whose faces are not all data URLs`, null), !1)
+                 }(mW) || (OW(`Ignoring texture pack skybox ${iW}, whose faces are not all data URLs`, null), !1)
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7458` → after: `L7501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7501) · [Before (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7458)

```diff
-         this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Vp = !1, this.wait = null !== (OB = BB.wait) && void 0 !== OB ? OB : (BB, OB) => {
+         this.host = WW, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.JA = !1, this.wait = null !== (iW = WW.wait) && void 0 !== iW ? iW : (WW, iW) => {
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7461-L7462` → after: `L7504-L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7504-L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7504-L7505) · [Before (L7461-L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7461-L7462)

```diff
-           loadImage: null !== (GB = BB.loadImage) && void 0 !== GB ? GB : Py,
-           NDB: null !== (YB = BB.NDB) && void 0 !== YB ? YB : Gy.s,
+           loadImage: null !== (OW = WW.loadImage) && void 0 !== OW ? OW : xc,
+           mEW: null !== (mW = WW.mEW) && void 0 !== mW ? mW : mc.o,
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7465` → after: `L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7508) · [Before (L7465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7465)

```diff
-               kind: oY.lc.SkyImagesReady,
+               kind: wm.nc.SkyImagesReady,
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7470` → after: `L7513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7513) · [Before (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7470)

```diff
-             BB.warn(`sky image set ${OB} (${GB}) didn't load: the last sky stays`, YB)
+             WW.warn(`sky image set ${iW} (${OW}) didn't load: the last sky stays`, mW)
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7476` → after: `L7519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7519) · [Before (L7476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7476)

```diff
-         this.wait(Yy.e, (() => {
+         this.wait(Ec.c, (() => {
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7479` → after: `L7522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7522) · [Before (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7479)

```diff
-           this.write(null !== BB && void 0 !== BB ? BB : {})
+           this.write(null !== WW && void 0 !== WW ? WW : {})
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7492` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7535) · [Before (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7492)

```diff
-         this.Vp = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.JA = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7495` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7538) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7495)

```diff
-         if (this.Vp) return;
+         if (this.JA) return;
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7503-L7504` → after: `L7546-L7547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7546-L7547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7546-L7547) · [Before (L7503-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7503-L7504)

```diff
-           this.written = OB, this.loader.reset(OB.sets), this.queue = this.queue.filter((BB => BB.kind !== oY.lc.SkyImagesReady)), this.queue.push({
-             kind: oY.lc.SkyTable,
+           this.written = iW, this.loader.reset(iW.sets), this.queue = this.queue.filter((WW => WW.kind !== wm.nc.SkyImagesReady)), this.queue.push({
+             kind: wm.nc.SkyTable,
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7511-L7526` → after: `L7554-L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7554-L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7554-L7569) · [Before (L7511-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7511-L7526)

```diff
-     var dy = GB(3116),
-       Ky = GB(3362),
-       uy = GB(283),
-       my = GB(182),
-       Iy = GB(3121),
-       Fy = GB(3125),
-       iy = GB(254),
-       Ly = GB(258),
-       gy = GB(3244),
-       ry = GB(3272),
-       Xy = GB(3279),
-       wy = GB(104),
-       Ey = GB(3349),
-       cy = GB(3347),
-       hy = GB(320),
-       ay = GB(41864);
+     var Hc = OW(2915),
+       nc = OW(2908),
+       uc = OW(269),
+       oc = OW(169),
+       dc = OW(3841),
+       ec = OW(3851),
+       vc = OW(243),
+       gc = OW(248),
+       Dc = OW(3934),
+       Vc = OW(3970),
+       pc = OW(3982),
+       fc = OW(117),
+       Cc = OW(4048),
+       Xc = OW(4045),
+       Bc = OW(315),
+       qc = OW(42358);
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7529-L7530` → after: `L7572-L7573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7572-L7573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7572-L7573) · [Before (L7529-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7529-L7530)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, GQ.g)(IY.I, (BB => {
-           this.onReply((0, OQ.h)(IY.I, BB), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, PN.j)(gm.K, (WW => {
+           this.onReply((0, NN.g)(gm.K, WW), performance.now())
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7534` → after: `L7577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7577) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7534)

```diff
-         null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : OB)
+         null === this.id ? this.id = WW : WW !== this.id && (this.id = WW, this.sentMs = document.hidden ? null : iW)
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7601-L7603` → after: `L7644-L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7644-L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7644-L7646) · [Before (L7601-L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7601-L7603)

```diff
-         const GB = BB.headerWord(oY.O.Pacing),
-           YB = BB.headerWord(oY.O.PacingLagUs),
-           DB = (GB >>> oY.fb.LagsShift) - (this.word >>> oY.fb.LagsShift) & oY.fb.CountMask,
+         const OW = WW.headerWord(wm.M.Pacing),
+           mW = WW.headerWord(wm.M.PacingLagUs),
+           EW = (OW >>> wm.cb.LagsShift) - (this.word >>> wm.cb.LagsShift) & wm.cb.CountMask,
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7606` → after: `L7649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7649) · [Before (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7606)

```diff
-         this.word = GB, this.lagUs = YB, this.primed = !0, oB && OB && DB > 0 && 0 !== (GB & oY.fb.Defaulted) && this.lags.add(QB, DB)
+         this.word = OW, this.lagUs = mW, this.primed = !0, PW && iW && EW > 0 && 0 !== (OW & wm.cb.Defaulted) && this.lags.add(NW, EW)
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7615-L7621` → after: `L7658-L7664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7658-L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7658-L7664) · [Before (L7615-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7615-L7621)

```diff
-     var vy = GB(3235),
-       sy = GB(34732),
-       xy = GB(3249),
-       ty = GB(41900),
-       BJ = GB(34725),
-       OJ = GB(3134),
-       GJ = GB(3255);
+     var zc = OW(3927),
+       Fc = OW(35164),
+       Qc = OW(3941),
+       Ww = OW(42402),
+       iw = OW(35159),
+       Ow = OW(3859),
+       mw = OW(3947);
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7651` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7695) · [Before (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7651)

```diff
-         this.shell = BB, this.tracker = new Fy.c, this.gpu = new Ty, this.pacing = new Hy, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = WW, this.tracker = new ec.c, this.gpu = new Gc, this.pacing = new rc, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7653` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7697) · [Before (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7653)

```diff
-         }), (BB => this.shell.hU(BB))), this.onVisibility = () => {
+         }), (WW => this.shell.eJ(WW))), this.onVisibility = () => {
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7657` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7701) · [Before (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7657)

```diff
-         }, (0, sy.b)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, OJ.e)("wasm", (() => {
+         }, (0, Fc.d)(WW.backend, WW.canvas, WW.adapterVendor), this.tracker.start((() => !WW.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, Ow.b)("wasm", (() => {
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7661-L7662` → after: `L7705-L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7705-L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7705-L7706) · [Before (L7661-L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7661-L7662)

```diff
-           } = (0, ty.i)();
-           return `${BB.backend}, quality steps aim at up to ${GJ.d.target.maxFps} fps, pixel n ${OB}, msaa ${GB}`
+           } = (0, Ww.e)();
+           return `${WW.backend}, quality steps aim at up to ${mw.c.target.maxFps} fps, pixel n ${iW}, msaa ${OW}`
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7676` → after: `L7720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7720) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7676)

```diff
-         this.ping.onFrame(BB.headerWord(oY.O.PingSent), OB), this.sendsStartMs = OB, this.sendsEndMs = GB
+         this.ping.onFrame(WW.headerWord(wm.M.PingSent), iW), this.sendsStartMs = iW, this.sendsEndMs = OW
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7680` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7724) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7680)

```diff
-         this.ping.onFrame(BB.headerWord(oY.O.PingSent), GB);
+         this.ping.onFrame(WW.headerWord(wm.M.PingSent), OW);
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7683` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7727) · [Before (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7683)

```diff
-         const oB = BB.headerWord(oY.O.TickUs) / 1e3 + (0, ZY.P)();
+         const PW = WW.headerWord(wm.M.TickUs) / 1e3 + (0, sm.N)();
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7685` → after: `L7729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7729) · [Before (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7685)

```diff
-         (QB.yR(oB), null === (DB = this.frameDebug) || void 0 === DB || DB.wasmFrame(BB, OB, GB, YB, QB.isSampling(), oB), null !== this.game) && (null === (jB = this.frameDebug) || void 0 === jB || jB.inGame());
+         (NW.Hk(PW), null === (EW = this.frameDebug) || void 0 === EW || EW.wasmFrame(WW, iW, OW, mW, NW.isSampling(), PW), null !== this.game) && (null === (LW = this.frameDebug) || void 0 === LW || LW.inGame());
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7690` → after: `L7734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7734) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7690)

```diff
-         this.gpu.onFrame(BB.headerWord(oY.O.GpuSampled), BB.headerWord(oY.O.GpuTimed), BB.headerWord(oY.O.GpuFrameUs), QB.isSampling()) && QB.onGpuSampleStarted(), QB.onFrameCpu(JB + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(OB)
+         this.gpu.onFrame(WW.headerWord(wm.M.GpuSampled), WW.headerWord(wm.M.GpuTimed), WW.headerWord(wm.M.GpuFrameUs), NW.isSampling()) && NW.onGpuSampleStarted(), NW.onFrameCpu(wW + this.pacedCpuMs), this.pacedCpuMs = 0, this.countFpsFrame(iW)
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7716` → after: `L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7760) · [Before (L7716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7716)

```diff
-         if (!(OB < Xy.b)) {
+         if (!(iW < pc.d)) {
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7735` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7779) · [Before (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7735)

```diff
-           JB = yB ? oB : (0, Iy.e)(oB),
+           wW = cW ? PW : (0, dc.g)(PW),
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7739` → after: `L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7783) · [Before (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7739)

```diff
-           lB = (0, ry.t)((0, ry.q)(PB), this.unsentPage),
+           lW = (0, Vc.v)((0, Vc.u)(ZW), this.unsentPage),
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7749` → after: `L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7793) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7749)

```diff
-                 autoMsaaOff: (0, BJ.d)()
+                 autoMsaaOff: (0, iw.b)()
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7751` → after: `L7795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7795) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7751)

```diff
-             for (const NB of (0, Ky.h)()) {
+             for (const UW of (0, nc.g)()) {
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7754-L7756` → after: `L7798-L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7798-L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7798-L7800) · [Before (L7754-L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7754-L7756)

```diff
-               if ((0, uy.C)(RB)) WB = (0, ry.b)(RB);
-               else if ((0, ry.h)(RB)) WB = yB[RB];
-               else if ((0, gy.m)(RB)) WB = ZB[RB];
+               if ((0, uc.M)(kW)) sW = (0, Vc.e)(kW);
+               else if ((0, Vc.k)(kW)) sW = cW[kW];
+               else if ((0, Dc.j)(kW)) sW = jW[kW];
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7761` → after: `L7805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7805) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7761)

```diff
-                 case "jo":
+                 case "Ec":
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7764-L7765` → after: `L7808-L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7808-L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7808-L7809) · [Before (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7764-L7765)

```diff
-                 case "zo":
-                   WB = (0, xy.E)((0, ty.i)().n);
+                 case "tc":
+                   sW = (0, Qc.B)((0, Ww.e)().n);
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7767` → after: `L7811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7811) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7767)

```diff
-                 case "po":
+                 case "Zc":
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7770` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7814) · [Before (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7770)

```diff
-                 case "qo":
+                 case "xc":
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7773` → after: `L7817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7817) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7773)

```diff
-                 case "Zo":
+                 case "lc":
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7776` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7820) · [Before (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7776)

```diff
-                 case "Ro":
+                 case "Ac":
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7779` → after: `L7823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7823) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7779)

```diff
-                 case "Wo":
+                 case "bc":
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7782` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7826) · [Before (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7782)

```diff
-                 case "Ao":
+                 case "jc":
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7785` → after: `L7829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7829) · [Before (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7785)

```diff
-                 case "Vo":
+                 case "Uc":
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7788` → after: `L7832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7832) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7788)

```diff
-                 case "Uo":
+                 case "kc":
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7791` → after: `L7835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7835) · [Before (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7791)

```diff
-                 case "fo":
+                 case "sc":
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7794` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7838) · [Before (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7794)

```diff
-                 case "ko":
+                 case "Mc":
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7797` → after: `L7841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7841) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7797)

```diff
-                 case "Ko":
+                 case "Kc":
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800` → after: `L7844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7844) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7800)

```diff
-                 case "Xo":
+                 case "hc":
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7803` → after: `L7847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7847) · [Before (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7803)

```diff
-                 case "wo":
+                 case "Hc":
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7806` → after: `L7850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7850) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7806)

```diff
-                 case "uo":
+                 case "Sc":
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7809` → after: `L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7853) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7809)

```diff
-                 case "mo":
+                 case "Yc":
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7812` → after: `L7856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7856) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7812)

```diff
-                 case "Io":
+                 case "yc":
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7815` → after: `L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7859) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7815)

```diff
-                 case "Fo":
+                 case "Tc":
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7818` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7862) · [Before (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7818)

```diff
-                 case "ro":
+                 case "Jc":
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7821` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7865) · [Before (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7821)

```diff
-                 case "Eo":
+                 case "nc":
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7824` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7868) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7824)

```diff
-                 case "co":
+                 case "uc":
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7827` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7871) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7827)

```diff
-                 case "ho":
+                 case "oc":
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7830` → after: `L7874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7874) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7830)

```diff
-                 case "ao":
+                 case "dc":
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7833-L7834` → after: `L7877-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878) · [Before (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7833-L7834)

```diff
-                 case "Qj":
-                   WB = (0, dy.j)(oB);
+                 case "Ic":
+                   sW = (0, Hc.i)(PW);
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7836` → after: `L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7880) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7836)

```diff
-                 case "Po":
+                 case "wc":
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7839-L7853` → after: `L7883-L7897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7883-L7897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7883-L7897) · [Before (L7839-L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7839-L7853)

```diff
-                 case "eo":
-                 case "bo":
-                 case "Co":
-                 case "Ho":
-                 case "vo":
-                 case "xo":
-                 case "Bj":
-                 case "Oj":
-                 case "Gj":
-                 case "Yj":
-                 case "Dj":
-                 case "oj":
-                 case "jj":
-                 case "yj":
-                 case "Jj":
+                 case "vc":
+                 case "gc":
+                 case "Dc":
+                 case "Vc":
+                 case "fc":
+                 case "Cc":
+                 case "Xc":
+                 case "Bc":
+                 case "qc":
+                 case "Rc":
+                 case "Gc":
+                 case "rc":
+                 case "zc":
+                 case "Fc":
+                 case "Qc":
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856` → after: `L7900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7900) · [Before (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7856)

```diff
-                 case "nj":
+                 case "Aw":
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7859` → after: `L7903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7903) · [Before (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7859)

```diff
-                 case "Uj":
+                 case "bw":
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7862` → after: `L7906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7906) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7862)

```diff
-                 case "fj":
+                 case "jw":
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7865` → after: `L7909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7909) · [Before (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7865)

```diff
-                 case "kj":
+                 case "Uw":
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7868` → after: `L7912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7912) · [Before (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7868)

```diff
-                 case "dj":
+                 case "kw":
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7871` → after: `L7915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7915) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7871)

```diff
-                 case "Kj":
+                 case "Mw":
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7874-L7875` → after: `L7918-L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7918-L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7918-L7919) · [Before (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7874-L7875)

```diff
-                 case "uj":
-                   WB = null !== (JB = YB.c.get("gameEntrySource")) && void 0 !== JB ? JB : my.e;
+                 case "Kw":
+                   sW = null !== (wW = mW.d.get("gameEntrySource")) && void 0 !== wW ? wW : oc.h;
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7877-L7878` → after: `L7921-L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7921-L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7921-L7922) · [Before (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878)

```diff
-                 case "mj":
-                   WB = null !== (MB = OB.frameLimiter) && void 0 !== MB ? MB : my.e;
+                 case "Sw":
+                   sW = null !== (tW = iW.frameLimiter) && void 0 !== tW ? tW : oc.h;
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7880-L7881` → after: `L7924-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7924-L7925) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7880-L7881)

```diff
-                 case "Ij":
-                   WB = (0, iy.l)();
+                 case "Yw":
+                   sW = (0, vc.i)();
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7883-L7884` → after: `L7927-L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7927-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7927-L7928) · [Before (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884)

```diff
-                 case "Fj":
-                   WB = null !== (PB = (0, Ly.c)()) && void 0 !== PB ? PB : my.e;
+                 case "yw":
+                   sW = null !== (ZW = (0, gc.d)()) && void 0 !== ZW ? ZW : oc.h;
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7886` → after: `L7930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7930) · [Before (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7886)

```diff
-                 case "ij":
+                 case "Tw":
```

#### 938. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7889-L7890` → after: `L7933-L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7933-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7933-L7934) · [Before (L7889-L7890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7889-L7890)

```diff
-                 case "Lj":
-                   WB = (0, Ky.i)(-(new Date).getTimezoneOffset());
+                 case "Jw":
+                   sW = (0, nc.h)(-(new Date).getTimezoneOffset());
```

#### 939. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7892-L7893` → after: `L7936-L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7936-L7937) · [Before (L7892-L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7892-L7893)

```diff
-                 case "cj":
-                   WB = null !== (zB = BB.fallbackReason) && void 0 !== zB ? zB : my.e;
+                 case "dw":
+                   sW = null !== (xW = WW.fallbackReason) && void 0 !== xW ? xW : oc.h;
```

#### 940. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7895` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7939) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7895)

```diff
-                 case "ej":
+                 case "Dw":
```

#### 941. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7898` → after: `L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7942) · [Before (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7898)

```diff
-                 case "Tj":
+                 case "Vw":
```

#### 942. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7901-L7902` → after: `L7945-L7946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7945-L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7945-L7946) · [Before (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7901-L7902)

```diff
-                 case "rj":
-                   WB = (0, Ey.d)();
+                 case "Hw":
+                   sW = (0, Cc.c)();
```

#### 943. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7904-L7905` → after: `L7948-L7949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7948-L7949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7948-L7949) · [Before (L7904-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7904-L7905)

```diff
-                 case "Xj":
-                   WB = (0, cy.e)().replayState;
+                 case "nw":
+                   sW = (0, Xc.f)().replayState;
```

#### 944. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7907-L7908` → after: `L7951-L7952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7951-L7952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7951-L7952) · [Before (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7907-L7908)

```diff
-                 case "wj":
-                   WB = (0, cy.e)().replaySelection;
+                 case "uw":
+                   sW = (0, Xc.f)().replaySelection;
```

#### 945. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7910` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7954) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7910)

```diff
-                 case "Ej":
+                 case "ow":
```

#### 946. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7913` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7957) · [Before (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7913)

```diff
-                 case "bj":
+                 case "pw":
```

#### 947. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7916` → after: `L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7960) · [Before (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7916)

```diff
-                 case "Cj": {
+                 case "fw": {
```

#### 948. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7921-L7922` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7965-L7966) · [Before (L7921-L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7921-L7922)

```diff
-                 case "Hj":
-                   WB = hy.B;
+                 case "Cw":
+                   sW = Bc.C;
```

#### 949. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7924-L7925` → after: `L7968-L7969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7968-L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7968-L7969) · [Before (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7924-L7925)

```diff
-                 case "Gy":
-                   WB = (0, ry.j)();
+                 case "aw":
+                   sW = (0, Vc.l)();
```

#### 950. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7927-L7929` → after: `L7971-L7973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7971-L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7971-L7973) · [Before (L7927-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7927-L7929)

```diff
-                 case "gj": {
-                   const OB = BB.wq();
-                   WB = null === OB ? my.e : String(OB);
+                 case "hw": {
+                   const iW = WW.qb();
+                   sW = null === iW ? oc.h : String(iW);
```

#### 951. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7932-L7934` → after: `L7976-L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7976-L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7976-L7978) · [Before (L7932-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7932-L7934)

```diff
-                 case "hj":
-                 case "aj":
-                   WB = my.e;
+                 case "ew":
+                 case "gw":
+                   sW = oc.h;
```

#### 952. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7937` → after: `L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7981) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7937)

```diff
-                   throw new Error(`Unhandled field name: ${RB}`)
+                   throw new Error(`Unhandled field name: ${kW}`)
```

#### 953. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7939` → after: `L7983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7983) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7939)

```diff
-               if (void 0 === WB) throw new Error(`Metric ${RB} has no value`);
+               if (void 0 === sW) throw new Error(`Metric ${kW} has no value`);
```

#### 954. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7951-L7955` → after: `L7995-L7999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7995-L7999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7995-L7999) · [Before (L7951-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7951-L7955)

```diff
-             return (0, YG.b)(), BB(pB.n.Send, OB, GB)
-           }(this.shell.writeCmd, zB.ud, function(BB) {
-             const OB = (0, wB.e)((0, oG.g)(BB)),
-               GB = new Uint8Array(pB.Zd.BYTES + OB.length);
-             return new DataView(GB.buffer).setUint16(0, oG.c.AnalyticsUpdate, !0), GB.set(OB, pB.Zd.BYTES), GB
+             return (0, PO.b)(), WW(AW.q.Send, iW, OW)
+           }(this.shell.writeCmd, xW.zd, function(WW) {
+             const iW = (0, pW.e)((0, wO.i)(WW)),
+               OW = new Uint8Array(AW.de.BYTES + iW.length);
+             return new DataView(OW.buffer).setUint16(0, wO.e.AnalyticsUpdate, !0), OW.set(iW, AW.de.BYTES), OW
```

#### 955. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7957` → after: `L8001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8001) · [Before (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7957)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, dy.f), (0, ry.p)(qB, "wasm", PB)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Hc.f), (0, Vc.q)(bW, "wasm", ZW)
```

#### 956. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7960` → after: `L8004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8004) · [Before (L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7960)

```diff
-     var oJ = GB(40390);
+     var Lw = OW(40955);
```

#### 957. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7964-L7966` → after: `L8008-L8010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8008-L8010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8008-L8010) · [Before (L7964-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7964-L7966)

```diff
-       return (0, oJ.b)(((BB, GB, YB) => OB.SM(BB, GB, YB)), ((OB, GB, DB) => {
-         const QB = `${OB},${GB},${DB}`;
-         return YB.has(QB) || YB.set(QB, (0, bO.c)(BB, OB, GB, DB)), YB.get(QB)
+       return (0, Lw.b)(((WW, OW, mW) => iW.NL(WW, OW, mW)), ((iW, OW, EW) => {
+         const NW = `${iW},${OW},${EW}`;
+         return mW.has(NW) || mW.set(NW, (0, ri.d)(WW, iW, OW, EW)), mW.get(NW)
```

#### 958. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7969-L7970` → after: `L8013-L8014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8013-L8014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8013-L8014) · [Before (L7969-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7969-L7970)

```diff
-     var yJ = GB(40396),
-       JJ = GB(41897);
+     var tw = OW(40957),
+       Zw = OW(42394);
```

#### 959. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7973-L7974` → after: `L8017-L8018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8017-L8018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8017-L8018) · [Before (L7973-L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7973-L7974)

```diff
-       const OB = null !== BB && 0 !== (pB.u.playerFlags(BB.api.apiView, 0) & pB.Id.CursorAim);
-       OB !== (0, JJ.k)() && (0, JJ.B)(OB, null !== BB)
+       const iW = null !== WW && 0 !== (AW.z.playerFlags(WW.api.apiView, 0) & AW.Ud.CursorAim);
+       iW !== (0, Zw.q)() && (0, Zw.I)(iW, null !== WW)
```

#### 960. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7978` → after: `L8022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8022) · [Before (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7978)

```diff
-       return (0, mY.e)(IY.C, BB)
+       return (0, em.c)(gm.E, WW)
```

#### 961. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7980-L7981` → after: `L8024-L8025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8024-L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8024-L8025) · [Before (L7980-L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7980-L7981)

```diff
-     var zJ = GB(42045);
-     const lJ = new QB.e((BB => GB(53997)(`./${BB}/${BB}Client`)));
+     var Aw = OW(42528);
+     const bw = new NW.f((WW => OW(54746)(`./${WW}/${WW}Client`)));
```

#### 962. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7985` → after: `L8029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8029) · [Before (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7985)

```diff
-       pJ ??= GB.e(32).then((() => GB(39849))).then((BB => {
+       jw ??= OW.e(33).then((() => OW(40366))).then((WW => {
```

#### 963. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8018-L8019` → after: `L8062-L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8062-L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8062-L8063) · [Before (L8018-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8018-L8019)

```diff
-         return BB.crash(FD.x, zB), null
-       }(0, yB.h)(ID(GB, QB));
+         return WW.crash(DE.B, xW), null
+       }(0, cW.f)(gE(OW, NW));
```

#### 964. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8031` → after: `L8075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8075) · [Before (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8031)

```diff
-       (0, ZY.E)();
+       (0, sm.D)();
```

#### 965. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8064-L8065` → after: `L8108-L8109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8108-L8109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8108-L8109) · [Before (L8064-L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8064-L8065)

```diff
-           AJ(DB.o), AJ(ZD), AJ((() => {
-             YB.c.set({
+           Sw(EW.p), Sw(ME), Sw((() => {
+             mW.d.set({
```

#### 966. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8078` → after: `L8122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8122) · [Before (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8078)

```diff
-         screenBandY: jB.g,
+         screenBandY: LW.m,
```

#### 967. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8088-L8090` → after: `L8132-L8134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8132-L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8132-L8134) · [Before (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8088-L8090)

```diff
-           (0, oB.p)("userContextUpdated", OB)
-         }(PB), RJ || (RJ = !0, (0, oB.p)("appManagerUpdated|openInGameMenuName", (BB => {
-           !BB && (0, JB.n)().includes(JB.b) && (0, JB.o)(JB.b)
+           (0, PW.n)("userContextUpdated", iW)
+         }(ZW), Mw || (Mw = !0, (0, PW.n)("appManagerUpdated|openInGameMenuName", (WW => {
+           !WW && (0, wW.t)().includes(wW.b) && (0, wW.v)(wW.b)
```

#### 968. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8103` → after: `L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8147) · [Before (L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8103)

```diff
-   36945: (BB, OB, GB) => {
+   42402: (WW, iW, OW) => {
```

#### 969. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8105-L8108` → after: `L8149-L8154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8149-L8154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8149-L8154) · [Before (L8105-L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8105-L8108)

```diff
-       b: () => ZB,
-       f: () => EB,
-       h: () => uB,
-       i: () => FB
+       c: () => SW,
+       e: () => xW,
+       g: () => sW,
+       k: () => KW,
+       o: () => MW,
+       q: () => YW
```

#### 970. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8110-L8113` → after: `L8156-L8164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8156-L8164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8156-L8164) · [Before (L8110-L8113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8110-L8113)

```diff
-     var YB = GB(36977),
-       DB = GB(36948),
-       QB = GB(36954),
-       oB = GB(36961);
+     var mW = OW(167),
+       EW = OW(25),
+       NW = OW(27),
+       PW = OW(3941),
+       LW = OW(1301),
+       cW = OW(35159),
+       wW = OW(281),
+       tW = OW(100),
+       ZW = OW(163);
```

#### 971. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8115-L8168` → after: `L8166-L8173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8166-L8173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8166-L8173) · [Before (L8115-L8168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8115-L8168)

```diff
-     function jB(BB, OB, GB) {
-       const YB = "object" === typeof BB && null !== BB ? BB : {},
-         DB = function(BB, OB, GB) {
-           if (!Array.isArray(BB) || 0 === BB.length) return [];
-           const YB = [{
-             width: 0,
-             height: 0,
-             y: 0,
-             items: []
-           }];
-           for (const jB of (0, oB.h)(BB, oB.d.DEFAULT_FONT_SIZE, GB)) {
-             if ("text" !== jB.kind) {
-               YB[YB.length - 1].items.push({
-                 content: jB,
-                 chars: 1,
-                 size: {
- ... (38 more removed lines; see GitHub link above)
+     function xW() {
+       var WW;
+       const iW = (0, PW.F)(),
+         OW = function(WW, iW) {
+           return {
+             sampleCount: WW.antiAliasing ? 4 : 1,
+             n: (0, PW.A)(WW.pixelScale, iW),
+             pixelated: (0, PW.x)(WW.pixelSmoothing)
```

#### 972. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8170-L8200` → after: `L8175-L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8175-L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8175-L8190) · [Before (L8170-L8200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8170-L8200)

```diff
-           return YB
-         }(YB.content, OB, GB);
-       let jB = 0,
-         yB = oB.d.VERTICAL_PADDING,
-         JB = 0;
-       for (const QB of DB) {
-         jB = Math.max(jB, QB.width + 2 * oB.d.HORIZONTAL_PADDING), yB += QB.height + oB.d.LINE_SPACING;
-         for (const BB of QB.items) JB += BB.chars
-       }
-       const MB = "string" === typeof YB.backgroundColor ? YB.backgroundColor : "#22283b";
-       return {
-         width: jB,
-         height: yB,
-         chars: JB,
-         draw: (BB, OB) => {
-           const YB = [];
- ... (15 more removed lines; see GitHub link above)
+         }(EW.d.get("clientEscMenuOptions"), iW);
+       return OW.sampleCount > 1 && (0, cW.b)() && (OW.sampleCount = 1), OW.n = null !== (WW = (0, cW.m)()) && void 0 !== WW ? WW : OW.n, mW.h.includes((0, tW.getSoftwareRenderer)()) && (OW.sampleCount = 1, OW.n = Math.max(OW.n, (0, PW.A)(ZW.w.pixelScale, iW))), OW
+     }
+     let lW = null,
+       AW = null;
+     const bW = new Set;
+     let jW = null;
+ 
+     function UW() {
+       for (const WW of bW) WW()
+     }
+ 
+     function kW() {
+       if (null === lW) {
+         const WW = document.createElement("div");
+         WW.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", WW.setAttribute("aria-hidden", "true"), document.body.append(WW), AW = WW, lW = new PW.d(WW, UW)
```

#### 973. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8235-L8238` → after: `L8195-L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8195-L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8195-L8207) · [Before (L8235-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8235-L8238)

```diff
-     function uB(BB, OB) {
-       const GB = KB.encode(JSON.stringify(OB)),
-         YB = new Uint8Array(GB.length + 1);
-       return YB[0] = BB, YB.set(GB, 1), YB
+     function sW(WW) {
+       const iW = (0, PW.p)(),
+         [OW, mW] = kW().size(iW);
+       return (0, PW.i)(OW, mW, iW, WW.n)
+     }
+ 
+     function MW(WW) {
+       var iW, OW, mW, EW;
+       const NW = (0, PW.p)(),
+         [cW, wW] = kW().size(NW);
+       if (cW <= 0 || wW <= 0) return null;
+       const tW = (0, PW.i)(cW, wW, NW, xW().n);
+       return (0, PW.g)(WW, tW), WW.style.left = `${null!==(iW=null===(OW=jW)||void 0===OW?void 0:OW.rect.left)&&void 0!==iW?iW:0}px`, WW.style.top = `${null!==(mW=null===(EW=jW)||void 0===EW?void 0:EW.rect.top)&&void 0!==mW?mW:0}px`, (0, LW.L)(WW.style, jW), tW
```

#### 974. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8273-L8276` → after: `L8211-L8265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8211-L8265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8211-L8265) · [Before (L8273-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8273-L8276)

```diff
-       qB.k.load().then((() => {
-         if (BB()) return;
-         const OB = (0, DB.f)(1, 1, {
-           willReadFrequently: !0
+       jW = WW, kW(), (0, LW.B)(AW.style, WW, ""), UW()
+     }
+ 
+     function SW(WW, iW) {
+       WW.style.imageRendering = (0, PW.G)(iW.pixelated)
+     }
+ 
+     function YW(WW, iW) {
+       const OW = (0, NW.n)("appManagerUpdated|clientEscMenuOptions", (() => {
+           SW(WW, xW()), iW()
+         })),
+         mW = (0, cW.C)(iW),
+         EW = (0, wW.o)(iW);
+       return kW(), bW.add(iW), () => {
+         OW(), mW(), EW(), bW.delete(iW)
+       }
+ ... (39 more added lines; see GitHub link above)
```

#### 975. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8278-L8280` → after: `L8267-L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8267-L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8267-L8276) · [Before (L8278-L8280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8278-L8280)

```diff
-         var GB;
-         OB && (GB = OB.canvas, IB.map((BB => EB(BB, GB))))
-       }))
+         return await createImageBitmap(iW, {
+           premultiplyAlpha: "none",
+           colorSpaceConversion: "none",
+           imageOrientation: OW
+         })
+       } catch (mW) {
+         throw new LW("decode", null !== iW && void 0 !== iW ? iW : `${WW.byteLength} bytes`, {
+           cause: mW
+         })
+       }
```

#### 976. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8282` → after: `L8278-L8281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8278-L8281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8278-L8281) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8282)

```diff
-     let iB = qB.y;
+     let ZW = null;
+     const xW = new Map;
+     let lW = 1;
+     const AW = new Map;
```

#### 977. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8284-L8285` → after: `L8283-L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8283-L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8283-L8293) · [Before (L8284-L8285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8284-L8285)

```diff
-     function LB() {
-       fB.clear(), kB.clear()
+     function bW(WW) {
+       var iW;
+       if (ZW = WW, null !== WW) {
+         null === (iW = WW.PEW) || void 0 === iW || iW.call(WW, kW);
+         for (const [iW, OW] of xW) jW(WW, iW, OW);
+         xW.clear()
+       }
+     }
+ 
+     function jW(WW, iW, OW) {
+       AW.has(iW) && void 0 !== WW.EEW ? WW.EEW(iW, OW) : WW.OEW(iW, OW)
```

#### 978. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8290` → after: `L8302-L8308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8302-L8308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8302-L8308) · [Before (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8290)

```diff
-       return void 0 !== GB && (BB.delete(OB), BB.set(OB, GB)), GB
+       void 0 === iW || iW.decoding || (iW.decoding = !0, tW(iW.bytes, iW.url, iW.orientation).then((OW => {
+         iW.decoding = !1, AW.get(WW) === iW ? (iW.failures = 0, UW(WW, OW)) : OW.close()
+       }), (OW => {
+         iW.decoding = !1, iW.failures++, 1 === iW.failures && console.warn(`shellImages: decoding image ${WW} again failed; trying again until it decodes`, OW), setTimeout((() => {
+           kW(WW)
+         }), Math.min(NW * 2 ** (iW.failures - 1), PW))
+       })))
```

#### 979. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8293-L8294` → after: `L8311-L8362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8311-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8311-L8362) · [Before (L8293-L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8293-L8294)

```diff
-     function rB(BB, OB, GB) {
-       BB.set(OB, GB), BB.size > RB && BB.delete(BB.keys().next().value)
+     function sW(WW) {
+       const iW = lW++;
+       return UW(iW, WW), iW
+     }
+     async function MW(WW) {
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.C,
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
+         NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       const PW = "string" === typeof WW ? WW : null,
+         LW = await wW(WW, iW),
+         cW = await tW(LW, PW, OW),
+         {
+           width: ZW,
+           height: xW
+         } = cW,
+         bW = lW++;
+ ... (36 more added lines; see GitHub link above)
```

#### 980. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8298-L8300` → after: `L8366-L8384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8366-L8384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8366-L8384) · [Before (L8298-L8300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8298-L8300)

```diff
-       if (BB === ZB.Nametag) {
-         let BB = gB(fB, OB);
-         return void 0 === BB && (BB = (0, yB.d)(JSON.parse(OB), GB, nB), rB(fB, OB, BB)), BB
+       var EW;
+       const PW = WW instanceof Error ? WW.name : "thrown",
+         LW = (WW instanceof Error && null !== (EW = WW.stack) && void 0 !== EW ? EW : "").split("\n").filter((WW => NW.test(WW))).slice(0, 8).map((WW => WW.trim())),
+         cW = null === iW ? "wasm memory unknown" : `wasm memory ${Math.round(iW/2**20)} MB`,
+         wW = null === OW.panic ? "" : `, panic: ${(0,mW.h)(OW.panic)}`,
+         tW = `${PW}: ${WW instanceof Error?WW.message:String(WW)}`;
+       return `${(0,mW.o)(OW.kind,OW.refusedBytes)} ${tW} (${cW})${wW}${LW.length>0?` | ${LW.join(" < ")}`:""}`
+     }
+     const cW = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;
+ 
+     function wW(WW) {
+       var iW;
+       let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
+       if (!(WW instanceof Error) || !cW.test(WW.message)) return {};
+       if (!("detached" in OW)) return {
+         arrayBufferDetached: "absent"
+ ... (3 more added lines; see GitHub link above)
```

#### 981. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8302-L8317` → after: `L8386-L8399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8386-L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8386-L8399) · [Before (L8302-L8317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8302-L8317)

```diff
-       if (BB === ZB.MultilineText) {
-         var DB;
-         const BB = JSON.parse(OB),
-           YB = JSON.stringify(null !== (DB = BB.box) && void 0 !== DB ? DB : null),
-           QB = "number" === typeof BB.shown ? BB.shown : null;
-         let oB = gB(kB, YB);
-         void 0 === oB && (oB = jB(BB.box, GB, nB), rB(kB, YB, oB));
-         const yB = null === QB ? null : Math.min(Math.max(0, Math.floor(QB)), oB.chars),
-           JB = oB;
-         return {
-           width: JB.width,
-           height: JB.height,
-           draw: BB => {
-             JB.draw(BB, yB)
-           }
-         }
+     }
+     const tW = 500;
+ 
+     function ZW(WW) {
+       let iW = "[object Object]";
+       try {
+         iW = String(WW)
+       } catch {}
+       if ("[object Object]" !== iW) return iW;
+       try {
+         var OW, mW;
+         return null !== (OW = null === (mW = JSON.stringify(WW)) || void 0 === mW ? void 0 : mW.slice(0, tW)) && void 0 !== OW ? OW : iW
+       } catch {
+         return iW
```

#### 982. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8376` → after: `L8402-L8415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8402-L8415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8402-L8415) · [Before (L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8376)

```diff
-     const wB = 2 ** Math.floor(Math.log2(NB));
+   },
+   37257: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW,
+       e: () => NW,
+       h: () => cW,
+       l: () => PW,
+       o: () => EW
+     });
+     const mW = /^alloc_failed (\d+) bytes$/;
+ 
+     function EW(WW, iW) {
+       return NW(WW, iW) ? `trap=alloc_failed ${iW} bytes` : `trap=${WW}`
+     }
```

#### 983. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8379-L8423` → after: `L8418-L8435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8418-L8435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8418-L8435) · [Before (L8379-L8423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8379-L8423)

```diff
-       let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       try {
-         if (BB.length < 2) return [0, 0];
-         const QB = (0, DB.e)(OB);
-         if (!QB) return [0, 0];
-         const oB = iB();
-         oB !== UB && (UB = oB, LB());
-         const [jB] = BB, yB = SB.decode(BB.subarray(1));
-         let JB;
-         jB !== ZB.Board && jB !== ZB.Leaderboard || !nB.canSeePlayerWrittenText || nB.glyphsShown(yB), QB.save();
-         try {
-           JB = XB(jB, yB, QB)
-         } finally {
-           QB.restore()
-         }
- ... (29 more removed lines; see GitHub link above)
+       return "unreachable" === WW && iW > 0
+     }
+ 
+     function PW(WW, iW, OW) {
+       const mW = function(WW) {
+         return WW instanceof WebAssembly.RuntimeError ? /unreachable/i.test(WW.message) ? "unreachable" : /out of bounds/i.test(WW.message) ? "out_of_bounds" : "runtime_error" : (WW instanceof RangeError || WW instanceof Error && "InternalError" === WW.name) && /call stack|recurs … [truncated]
+       }(WW);
+       if ("unreachable" !== mW) return {
+         kind: mW,
+         panic: null,
+         refusedBytes: 0
+       };
+       const EW = iW(),
+         NW = OW();
+       return {
+         kind: mW,
+ ... (2 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L1-L2)

```diff
- export const id = 69;
- export const ids = [69];
+ export const id = 70;
+ export const ids = [70];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4)

```diff
-   41630: (BB, OB, GB) => {
+   42137: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6)

```diff
-       b: () => DB,
+       d: () => EW,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14)

```diff
-       if (OB.at !== BB.length) throw new Error(`msgpack: ${BB.length-OB.at} bytes after the value`);
+       if (iW.at !== WW.length) throw new Error(`msgpack: ${WW.length-iW.at} bytes after the value`);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92)

```diff
-             throw new Error(`msgpack: unknown byte 0x${BB.toString(16)} at ${this.at-1}`)
+             throw new Error(`msgpack: unknown byte 0x${WW.toString(16)} at ${this.at-1}`)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97)

```diff
-         if (OB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${OB}`);
+         if (iW + WW > this.bytes.length) throw new Error(`msgpack: ${WW} bytes past the end at ${iW}`);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169)

```diff
-           throw new Error(`msgpack: ext type ${OB} of ${BB} bytes`)
+           throw new Error(`msgpack: ext type ${iW} of ${WW} bytes`)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L210)

```diff
-               if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(GB=null===(YB=BB.constructor)||void 0===YB?void 0:YB.name)&&void 0!==GB?GB:"object"}`);
+               if (Object.getPrototypeOf(WW) !== Object.prototype && null !== Object.getPrototypeOf(WW)) throw new Error(`msgpack: can't encode a ${null!==(OW=null===(mW=WW.constructor)||void 0===mW?void 0:mW.name)&&void 0!==OW?OW:"object"}`);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L255)

```diff
-   54057: (BB, OB, GB) => {
+   54800: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L261-L268` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L261-L268) · [Before (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L261-L268)

```diff
-     var YB = GB(162),
-       DB = GB(1200),
-       QB = GB(37160),
-       oB = GB(41630),
-       jB = GB(5281),
-       yB = GB(41692),
-       JB = GB(41916);
-     const MB = Uint8Array.of(13, ...(0, oB.e)(YB.g));
+     var mW = OW(154),
+       EW = OW(1194),
+       NW = OW(37727),
+       PW = OW(42137),
+       LW = OW(5546),
+       cW = OW(42307),
+       wW = OW(42422);
+     const tW = Uint8Array.of(13, ...(0, PW.e)(mW.f));
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L290)

```diff
-       } = GB, oB = () => (0, JB.i)(OB.endpoint, OB.roomName, OB.joinOptions, GB), {
+       } = OW, PW = () => (0, wW.f)(iW.endpoint, iW.roomName, iW.joinOptions, OW), {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L292-L293` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L292-L293) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L292-L293)

```diff
-       } = GB, yB = jB ? null !== (YB = await jB.take(QB)) && void 0 !== YB ? YB : await jB.reserveInstead(oB, QB) : await oB();
-       return (0, DB.r)(QB), ZB(BB, OB.endpoint, yB, GB, !1)
+       } = OW, cW = LW ? null !== (mW = await LW.take(NW)) && void 0 !== mW ? mW : await LW.reserveInstead(PW, NW) : await PW();
+       return (0, EW.s)(NW), jW(WW, iW.endpoint, cW, OW, !1)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L297-L298` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L297-L298) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L297-L298)

```diff
-       const oB = await (0, JB.g)(OB, GB, YB, QB);
-       return (0, DB.r)(QB.signal), ZB(BB, OB, oB, QB, !0)
+       const PW = await (0, wW.d)(iW, OW, mW, NW);
+       return (0, EW.s)(NW.signal), jW(WW, iW, PW, NW, !0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L302)

```diff
-       const YB = (0, JB.k)(BB, OB);
+       const mW = (0, wW.h)(WW, iW);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L309)

```diff
-       return (null !== (YB = BB.setTimer) && void 0 !== YB ? YB : (BB, OB) => {
+       return (null !== (mW = WW.setTimer) && void 0 !== mW ? mW : (WW, iW) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L329)

```diff
-         WB = !0, null === (OB = ZB) || void 0 === OB || OB.reject(new yB.d("the room socket closed before the resume", "closed", BB.code))
+         sW = !0, null === (iW = jW) || void 0 === iW || iW.reject(new cW.c("the room socket closed before the resume", "closed", WW.code))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L334-L336` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L334-L336) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L334-L336)

```diff
-           if (BB === (oB ? jB.E.Resumed : jB.E.Activated)) RB = !0, null === (GB = ZB) || void 0 === GB || GB.resolve();
-           else if (!oB || BB !== jB.E.ResumeRefused && BB !== jB.E.Activated)
-             if (BB === jB.E.Error) {
+           if (WW === (PW ? LW.A.Resumed : LW.A.Activated)) kW = !0, null === (OW = jW) || void 0 === OW || OW.resolve();
+           else if (!PW || WW !== LW.A.ResumeRefused && WW !== LW.A.Activated)
+             if (WW === LW.A.Error) {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L338)

```diff
-               null === (YB = ZB) || void 0 === YB || YB.reject(new yB.d(`the room refused the join (code ${OB})`, "roomError", OB))
+               null === (mW = jW) || void 0 === mW || mW.reject(new cW.c(`the room refused the join (code ${iW})`, "roomError", iW))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L341)

```diff
-               null === (DB = ZB) || void 0 === DB || DB.reject(new yB.d("the room socket closed before the join", "closed", OB, null, zB))
+               null === (EW = jW) || void 0 === EW || EW.reject(new cW.c("the room socket closed before the join", "closed", iW, null, xW))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L345)

```diff
-             null === (QB = ZB) || void 0 === QB || QB.reject(new yB.m("the core refused the resume: it held no game"))
+             null === (NW = jW) || void 0 === NW || NW.reject(new cW.p("the core refused the resume: it held no game"))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L352)

```diff
-       if (null === nB) throw SB(), new yB.d("the core could not take the room socket", "attach");
+       if (null === YW) throw SW(), new cW.c("the core could not take the room socket", "attach");
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L355)

```diff
-       const fB = oB ? null : new QB.c((() => {
+       const TW = PW ? null : new NW.b((() => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L357)

```diff
-         null === (OB = BB.flushNet) || void 0 === OB || OB.call(BB), null === (GB = ZB) || void 0 === GB || GB.reject(new QB.d(zB ? "socket" : "socket_unopened"))
+         null === (iW = WW.flushNet) || void 0 === iW || iW.call(WW), null === (OW = jW) || void 0 === OW || OW.reject(new NW.c(xW ? "socket" : "socket_unopened"))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L367-L368)

```diff
-         if (kB = !0, SB(), oB && (PB.removeEventListener("close", AB), !RB && !(null !== JB && void 0 !== JB && JB.aborted && (0, DB.i)(JB) instanceof yB.o))) return void(WB || BB.closeSocket(nB));
-         RB && BB.leaveRoom(nB) || BB.sendRaw(nB, yB.h) ? qB(YB, (() => {
+         if (JW = !0, SW(), PW && (ZW.removeEventListener("close", MW), !kW && !(null !== wW && void 0 !== wW && wW.aborted && (0, EW.f)(wW) instanceof cW.t))) return void(sW || WW.closeSocket(YW));
+         kW && WW.leaveRoom(YW) || WW.sendRaw(YW, cW.j) ? bW(mW, (() => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L370)

```diff
-         }), yB.f) : BB.closeSocket(nB)
+         }), cW.e) : WW.closeSocket(YW)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L377)

```diff
-             GB((0, DB.i)(JB))
+             OW((0, EW.f)(wW))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L410)

```diff
-         const DB = pB(BB, await (0, JB.g)(BB, OB, GB, YB), YB);
+         const EW = AW(WW, await (0, wW.d)(WW, iW, OW, mW), mW);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L414)

```diff
-           }), yB.f);
+           }), cW.e);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L416)

```diff
-             DB.send(yB.h)
+             EW.send(cW.j)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L1-L2)

```diff
- export const id = 70;
- export const ids = [70];
+ export const id = 71;
+ export const ids = [71];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L4)

```diff
-   37484: (BB, OB, GB) => {
+   37606: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L9)

```diff
-       if (!OB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${OB.status}`);
+       if (!iW.ok) throw new Error(`Fetching ${WW} failed: HTTP ${iW.status}`);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L14)

```diff
-       b: () => YB
+       d: () => mW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L17)

```diff
-   42053: (BB, OB, GB) => {
+   42198: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L20)

```diff
-       probeWebgl2AheadOfJoin: () => MB.R,
+       probeWebgl2AheadOfJoin: () => tW.K,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L24-L33` → after: `L24-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L24-L33) · [Before (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L24-L33)

```diff
-     var YB = GB(3206),
-       DB = GB(36912),
-       QB = GB(41882),
-       oB = GB(1308),
-       jB = GB(41729),
-       yB = (GB(41805), GB(37484)),
-       JB = GB(2265),
-       MB = GB(41723),
-       PB = GB(41995),
-       zB = GB(37009);
+     var mW = OW(2381),
+       EW = OW(37297),
+       NW = OW(42202),
+       PW = OW(1303),
+       LW = OW(42216),
+       cW = (OW(42244), OW(37606)),
+       wW = OW(2296),
+       tW = OW(42255),
+       ZW = OW(42362),
+       xW = OW(37446);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L44)

```diff
-         const BB = await (0, MB.P)();
+         const WW = await (0, tW.J)();
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L46-L47)

```diff
-         if ((0, jB.u)(BB)) return (0, MB.S)("none"), void AB("none");
-         (0, MB.S)(BB.backend);
+         if ((0, LW.r)(WW)) return (0, tW.L)("none"), void MW("none");
+         (0, tW.L)(WW.backend);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L50-L51)

```diff
-         const GB = "unloaded" === (0, YB.x)();
-         if (GB && (0, MB.q)(), !await (0, PB.b)(OB)) return void console.warn(`${lB} the join's early wasm load failed: the boot loads the client itself`);
+         const OW = "unloaded" === (0, mW.D)();
+         if (OW && (0, tW.n)(), !await (0, ZW.c)(iW)) return void console.warn(`${lW} the join's early wasm load failed: the boot loads the client itself`);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L53` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L53) · [Before (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L53)

```diff
-         const QB = (0, DB.j)(OB.name);
+         const NW = (0, EW.n)(iW.name);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L59)

```diff
-         }) : console.warn(`${lB} the join's wasm load left no record of how it compiled ${OB.name}`)
+         }) : console.warn(`${lW} the join's wasm load left no record of how it compiled ${iW.name}`)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L61)

```diff
-         console.warn(`${lB} the join's early wasm load did not start: the boot loads the client itself`, BB)
+         console.warn(`${lW} the join's early wasm load did not start: the boot loads the client itself`, WW)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L78)

```diff
-         const GB = null !== (OB = BB.joinStarted) && void 0 !== OB ? OB : () => !1;
+         const OW = null !== (iW = WW.joinStarted) && void 0 !== iW ? iW : () => !1;
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L87-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L87-L88) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L87-L88)

```diff
-         const OB = await (0, MB.k)();
-         null === OB || BB() || "unloaded" !== (0, YB.x)() || (RB = OB.name, await (0, DB.e)([OB, QB.e], "low"))
+         const iW = await (0, tW.h)();
+         null === iW || WW() || "unloaded" !== (0, mW.D)() || (kW = iW.name, await (0, EW.e)([iW, NW.d], "low"))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L90)

```diff
-         console.warn(`${lB} the compile ahead of the join did not start: the join loads the client itself`, BB)
+         console.warn(`${lW} the compile ahead of the join did not start: the join loads the client itself`, WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L105)

```diff
-               const BB = await fetch((0, JB.f)("static/js/gw4e3a.wasmJoinFiles.json"), {
+               const WW = await fetch((0, wW.g)("static/js/1yqdn.wasmJoinFiles.json"), {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L109-L110` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L109-L110) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L109-L110)

```diff
-               if (BB.ok && /\bno-store\b/.test(null !== (GB = BB.headers.get("Cache-Control")) && void 0 !== GB ? GB : "")) return !1;
-               OB = await (0, JB.g)(BB)
+               if (WW.ok && /\bno-store\b/.test(null !== (OW = WW.headers.get("Cache-Control")) && void 0 !== OW ? OW : "")) return !1;
+               iW = await (0, wW.j)(WW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L112)

```diff
-               return console.warn(`${lB} the join's chunk list did not load: the join downloads its chunks itself`, DB), !BB()
+               return console.warn(`${lW} the join's chunk list did not load: the join downloads its chunks itself`, EW), !WW()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L117-L119` → after: `L117-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L117-L119) · [Before (L117-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L117-L119)

```diff
-               const BB = (0, JB.f)(QB);
-               YB ? UB(BB) : (0, yB.b)(BB).catch((OB => {
-                 console.warn(`${lB} prefetching ${BB} failed`, OB)
+               const WW = (0, wW.g)(NW);
+               mW ? yW(WW) : (0, cW.d)(WW).catch((iW => {
+                 console.warn(`${lW} prefetching ${WW} failed`, iW)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L124-L125)

```diff
-         const GB = [(0, yB.b)((0, zB.c)())];
-         (0, zB.b)(OB) && GB.push((0, yB.b)((0, zB.e)()));
+         const OW = [(0, cW.d)((0, xW.d)())];
+         (0, xW.b)(iW) && OW.push((0, cW.d)((0, xW.h)()));
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L128)

```diff
-         console.warn(`${lB} the prefetch failed: the join downloads the client itself`, BB)
+         console.warn(`${lW} the prefetch failed: the join downloads the client itself`, WW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (134 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1-L2)

```diff
- export const id = 71;
- export const ids = [71];
+ export const id = 72;
+ export const ids = [72];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L4)

```diff
-   39860: (BB, OB, GB) => {
+   40380: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L14)

```diff
-           CP: OB.CP,
+           aZ: iW.aZ,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L32)

```diff
-       c: () => DB
+       d: () => EW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L35)

```diff
-   39836: (BB, OB, GB) => {
+   40337: (WW, iW, OW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L39-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L38-L40) · [Before (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L39-L40)

```diff
-       f: () => yB,
-       g: () => oB
+       g: () => wW,
+       h: () => cW,
+       i: () => PW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L42)

```diff
-     var YB = GB(204);
+     var mW = OW(192);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L51)

```diff
-       return null !== (OB = (0, YB.c)(oB, BB)) && void 0 !== OB ? OB : null
+       return null !== (iW = (0, mW.c)(PW, WW)) && void 0 !== iW ? iW : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L56)

```diff
-       return null !== (OB = (0, YB.c)(jB, BB)) && void 0 !== OB ? OB : null
+       return null !== (iW = (0, mW.c)(LW, WW)) && void 0 !== iW ? iW : null
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L59)

```diff
-   39331: (BB, OB, GB) => {
+   39881: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L61-L62` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L61-L62) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L61-L62)

```diff
-       d: () => DB,
-       f: () => QB
+       e: () => EW,
+       h: () => NW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L72)

```diff
-       return null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : null
+       return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L75` → after: `L75-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L75-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L75-L93) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L75)

```diff
-   36939: (BB, OB, GB) => {
+   42659: (WW, iW, OW) => {
+     function mW(WW, iW, OW) {
+       return new Promise((mW => {
+         const EW = setTimeout((() => {
+             NW(), mW(null)
+           }), OW),
+           NW = iW((() => {
+             clearTimeout(EW);
+             const iW = WW();
+             mW(null === iW ? null : function(WW) {
+               if (0 === WW.width || 0 === WW.height) return null;
+               const iW = document.createElement("canvas");
+               iW.width = WW.width, iW.height = WW.height;
+               const OW = iW.getContext("2d");
+               return OW ? (OW.drawImage(WW, 0, 0), iW) : null
+             }(iW))
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L83` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L106) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L83)

```diff
-       let [QB, oB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, OB], jB = Math.min(Number.isFinite(GB) && GB > 0 ? GB : 1, DB);
+       let [NW, PW] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [WW, iW], LW = Math.min(Number.isFinite(OW) && OW > 0 ? OW : 1, EW);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L88` → after: `L111-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L111-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L111-L175) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L88)

```diff
-   54039: (BB, OB, GB) => {
+   35247: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => mW,
+       f: () => tW
+     });
+     const mW = .01,
+       EW = .08,
+       NW = .01,
+       PW = 5,
+       LW = 100,
+       cW = 40,
+       wW = 800;
+ 
+     function tW(WW) {
+       const {
+         canvas: iW
+ ... (49 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L95-L96` → after: `L182-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L182-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L182-L183) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L95-L96)

```diff
-     var YB = GB(3210),
-       DB = GB(645);
+     var mW = OW(2388),
+       EW = OW(649);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L102` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L189) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L102)

```diff
-         client: String(DB.b)
+         client: String(EW.d)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L106` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L193) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L106)

```diff
-         OB.wasm = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.eP()) && void 0 !== GB ? GB : OB.wasm
+         iW.wasm = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.RZ()) && void 0 !== OW ? OW : iW.wasm
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L115` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L202) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L115)

```diff
-         } = await Promise.resolve().then((() => GB(3143)));
+         } = await Promise.resolve().then((() => OW(3876)));
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L123` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L210) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L123)

```diff
-       Promise.resolve().then((() => GB(41773))).then((GB => {
+       Promise.resolve().then((() => OW(42266))).then((OW => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L129` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L216) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L129)

```diff
-         console.warn(`${QB} ${BB} didn't load, and the report couldn't be sent`, YB.error, OB)
+         console.warn(`${NW} ${WW} didn't load, and the report couldn't be sent`, mW.error, iW)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L169` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L256) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L169)

```diff
-             const GB = BB.LoB(OB);
+             const OW = WW.omW(iW);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L188` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L275) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L188)

```diff
-         fetch: async () => jB(await (0, YB.I)(lB(), {
+         fetch: async () => LW(await (0, mW.C)(lW(), {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L201` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L288) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L201)

```diff
-       return GB(54047)
+       return OW(44913)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L203-L228` → after: `L290-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L290-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L290-L315) · [Before (L203-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L203-L228)

```diff
-     var pB = GB(3206),
-       qB = GB(1186),
-       ZB = GB(328),
-       NB = GB(320),
-       RB = GB(662),
-       WB = GB(5281),
-       AB = GB(41729),
-       VB = GB(41761),
-       SB = GB(41953),
-       nB = (GB(41805), GB(36937)),
-       UB = GB(41827),
-       fB = GB(41834),
-       kB = GB(41842),
-       dB = GB(41742),
-       KB = GB(41971),
-       uB = GB(41980),
- ... (10 more removed lines; see GitHub link above)
+     var AW = OW(2381),
+       bW = OW(1185),
+       jW = OW(324),
+       UW = OW(315),
+       kW = OW(671),
+       sW = OW(5546),
+       MW = OW(42216),
+       KW = OW(42240),
+       SW = OW(42448),
+       YW = (OW(42244), OW(37325)),
+       yW = OW(42330),
+       TW = OW(42339),
+       JW = OW(42344),
+       hW = OW(42225),
+       HW = OW(42461),
+       nW = OW(42463),
+ ... (10 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L242-L244` → after: `L330-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L330-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L330-L332) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L242-L244)

```diff
-         GB = (0, AB.W)(BB),
-         YB = (0, AB.r)(BB);
-       return null !== GB && null !== YB && "function" === typeof OB.IoB && "function" === typeof OB.FoB && "function" === typeof OB.ioB ? OB : null
+         OW = (0, MW.M)(WW),
+         mW = (0, MW.n)(WW);
+       return null !== OW && null !== mW && "function" === typeof iW.dmW && "function" === typeof iW.emW && "function" === typeof iW.vmW && "function" === typeof iW.DH ? iW : null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L248` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L336) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L248)

```diff
-       return GB(54055)
+       return OW(44918)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L253-L255` → after: `L341-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L341-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L341-L343) · [Before (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L253-L255)

```diff
-       "lost" === BB && (0, mB.D)();
-       const jB = await (0, mB.P)();
-       if (null === jB || (0, AB.u)(jB) || (0, mB.c)()) return;
+       "lost" === WW && (0, uW.x)();
+       const LW = await (0, uW.J)();
+       if (null === LW || (0, MW.r)(LW) || (0, uW.c)()) return;
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L258-L260` → after: `L346-L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L346-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L346-L348) · [Before (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L258-L260)

```diff
-       const JB = yB && (0, NB.r)(jB.adapter, null !== YB && void 0 !== YB ? YB : null, "lost" === BB, QB),
-         MB = null !== (DB = "lost" === BB ? (0, VB.l)((0, pB.S)() ? (0, AB.W)((0, pB.A)()) : null) : void 0) && void 0 !== DB ? DB : OB,
-         PB = yB ? (0, AB.eb)(BB, void 0, (0, VB.c)(MB)) : (0, RB.p)() ? null : RB.f;
+       const wW = cW && (0, UW.p)(LW.adapter, null !== mW && void 0 !== mW ? mW : null, "lost" === WW, NW),
+         tW = null !== (EW = "lost" === WW ? (0, KW.n)((0, AW.R)() ? (0, MW.M)((0, AW.G)()) : null) : void 0) && void 0 !== EW ? EW : iW,
+         ZW = cW ? (0, MW.Z)(WW, void 0, (0, KW.e)(tW)) : (0, kW.u)() ? null : kW.i;
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L262` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L350) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L262)

```diff
-         (0, mB.s)();
+         (0, uW.o)();
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L269` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L357) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L269)

```diff
-             const JB = (0, pB.S)(),
+             const wW = (0, AW.R)(),
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L273-L274` → after: `L361-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L361-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L361-L362) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L273-L274)

```diff
-               } = await Promise.resolve().then((() => GB(41773)));
-             PB(BB.backend, DB, oB(JB ? (0, pB.A)() : null), {
+               } = await Promise.resolve().then((() => OW(42266)));
+             ZW(WW.backend, EW, PW(wW ? (0, AW.G)() : null), {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L280-L281` → after: `L368-L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L368-L369) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L280-L281)

```diff
-             }), await MB(FB.c)
-           }(jB, BB, MB, null !== YB && void 0 !== YB ? YB : "start_failed" === BB ? 0 : 1, {
+             }), await tW(dW.d)
+           }(LW, WW, tW, null !== mW && void 0 !== mW ? mW : "start_failed" === WW ? 0 : 1, {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L286-L287` → after: `L374-L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L374-L375) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L286-L287)

```diff
-           console.warn(`${cB} ${jB.backend} failed at home (${BB}), and its report couldn't be sent`, lB)
-         }(0, FB.g)()
+           console.warn(`${CW} ${LW.backend} failed at home (${WW}), and its report couldn't be sent`, lW)
+         }(0, dW.j)()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L291-L292` → after: `L379-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L379-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L379-L380) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L291-L292)

```diff
-           YB = `${yB?"WebGPU":"WebGL"} failed at home (${BB}${void 0===OB.error?"":`: ${OB.error instanceof Error?OB.error.message:(0,XB.l)(OB.error)}`}) and ${PB}`;
-         console.warn(`${cB} ${YB}: the previews stop`, null !== (zB = OB.error) && void 0 !== zB ? zB : ""), (0, mB.v)({
+           mW = `${cW?"WebGPU":"WebGL"} failed at home (${WW}${void 0===iW.error?"":`: ${iW.error instanceof Error?iW.error.message:(0,VW.m)(iW.error)}`}) and ${ZW}`;
+         console.warn(`${CW} ${mW}: the previews stop`, null !== (xW = iW.error) && void 0 !== xW ? xW : ""), (0, uW.r)({
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L299` → after: `L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L387) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L299)

```diff
-           } = await Promise.resolve().then((() => GB(41773)));
+           } = await Promise.resolve().then((() => OW(42266)));
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L302` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L390) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L302)

```diff
-           console.warn(`${cB} ${jB.backend} failed at home (${BB}), and its count couldn't be sent`, qB)
+           console.warn(`${CW} ${LW.backend} failed at home (${WW}), and its count couldn't be sent`, bW)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L315-L317` → after: `L403-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L403-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L403-L405) · [Before (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L315-L317)

```diff
-           boundAtMs: "start_failed" === OB ? null : (0, mB.L)(),
-           indirectHangs: (0, mB.E)(),
-           restoresSkipped: (0, mB.O)()
+           boundAtMs: "start_failed" === iW ? null : (0, uW.G)(),
+           indirectHangs: (0, uW.y)(),
+           restoresSkipped: (0, uW.H)()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L321-L327` → after: `L409-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L409-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L409-L421) · [Before (L321-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L321-L327)

```diff
-     async function GO() {
-       if (!(0, pB.S)()) {
-         const BB = await (0, mB.P)();
-         if (null === BB || (0, AB.u)(BB)) return null;
-         if (await (0, IB.b)(await BB.load()), !(0, pB.S)()) return null
-       }
-       return xB((0, pB.A)())
+     async function mi(WW) {
+       if (!(0, AW.R)()) {
+         await (null === WW || void 0 === WW ? void 0 : WW("renderer pick", {
+           longStep: !0
+         }));
+         const iW = await (0, uW.J)();
+         if (null === iW || (0, MW.r)(iW)) return null;
+         const OW = await iW.load();
+         if (await (null === WW || void 0 === WW ? void 0 : WW("renderer instantiation", {
+             longStep: !0
+           })), await (0, oW.c)(OW), !(0, AW.R)()) return null
+       }
+       return QW((0, AW.G)())
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L336` → after: `L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L430) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L336)

```diff
-               return null !== (OB = this.models.drawnUrl(BB)) && void 0 !== OB ? OB : QB.images.glbUrl(BB)
+               return null !== (iW = this.models.drawnUrl(WW)) && void 0 !== iW ? iW : NW.images.glbUrl(WW)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L340-L341` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L434-L435) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L340-L341)

```diff
-         this.images = new SB.h(oB, (BB => {
-           console.warn(`${cB} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
+         this.images = new SW.g(PW, (WW => {
+           console.warn(`${CW} image ${WW.key.kind}:${WW.key.index}:${WW.key.word} failed`, WW.error)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L346` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L440) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L346)

```diff
-           console.warn(`${cB} model file ${BB.file} (${BB.url}) failed`, BB.error)
+           console.warn(`${CW} model file ${WW.file} (${WW.url}) failed`, WW.error)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L357-L358` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L451-L452) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L357-L358)

```diff
-           if (BB === UB.d) {
-             const BB = new DataView(GB.buffer, GB.byteOffset, kB.d),
+           if (WW === yW.b) {
+             const WW = new DataView(OW.buffer, OW.byteOffset, JW.b),
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L360-L361` → after: `L454-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L454-L455) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L360-L361)

```diff
-               DB = BB.getUint32(kB.f, !0),
-               QB = this.page.hostCall(sB, (() => this.host.EjB(this.id, YB, OB, GB.subarray(kB.d))));
+               EW = WW.getUint32(JW.d, !0),
+               NW = this.page.hostCall(FW, (() => this.host.gmW(this.id, mW, iW, OW.subarray(JW.b))));
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L364-L365` → after: `L458-L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L458-L459) · [Before (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L364-L365)

```diff
-           return BB === SB.e && (this.page.hostCall(void 0, (() => {
-             this.host.ajB(this.id, GB)
+           return WW === SW.d && (this.page.hostCall(void 0, (() => {
+             this.host.DmW(this.id, OW)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L377` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L471) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L377)

```diff
-         const [YB, DB] = (0, EB.c)(BB, OB, this.page.dpr(), GB);
+         const [mW, EW] = (0, fW.b)(WW, iW, this.page.dpr(), OW);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L383` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L477) · [Before (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L383)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.vjB(this.id, BB, OB, GB, YB))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.VmW(this.id, WW, iW, OW, mW))))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L386` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L480) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L386)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xjB(this.id, BB, OB, GB, YB))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.pmW(this.id, WW, iW, OW, mW))))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L389` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L483) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L389)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.bjB(this.id, BB, OB, GB))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fmW(this.id, WW, iW, OW))))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L398` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L492) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L398)

```diff
-         const DB = null !== (OB = null === GB || void 0 === GB ? void 0 : GB.model) && void 0 !== OB ? OB : -1,
+         const EW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.model) && void 0 !== iW ? iW : -1,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L403` → after: `L497-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L497-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L497-L502) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L403)

```diff
-           this.host.TjB(this.id, DB, QB, null !== (BB = null === GB || void 0 === GB ? void 0 : GB.flyClip) && void 0 !== BB ? BB : "", null !== (OB = null === YB || void 0 === YB ? void 0 : YB.opts) && void 0 !== OB ? OB : "", oB)
+           this.host.CmW(this.id, EW, NW, null !== (WW = null === OW || void 0 === OW ? void 0 : OW.flyClip) && void 0 !== WW ? WW : "", null !== (iW = null === mW || void 0 === mW ? void 0 : mW.opts) && void 0 !== iW ? iW : "", PW)
+         }))
+       }
+       setNametag(WW, iW, OW) {
+         this.closed || this.page.hostCall(void 0, (() => {
+           this.host.XmW(this.id, WW, iW, OW)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L407` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L506) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L407)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.CjB(this.id, BB, OB, GB, YB))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.BmW(this.id, WW, iW, OW, mW))))
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L428` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L527) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L428)

```diff
-           this.host.sjB(this.id, OB, GB, YB)
+           this.host.qmW(this.id, iW, OW, mW)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L437` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L536) · [Before (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L437)

```diff
-         this.quiet = 0, this.models.refresh(), (0, KB.j)(this.images)
+         this.quiet = 0, this.models.refresh(), (0, HW.i)(this.images)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L442` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L541) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L442)

```diff
-           const GB = OB === HB ? [] : [OB === vB ? BB : (BB | UB.e) >>> 0];
+           const OW = iW === rW ? [] : [iW === zW ? WW : (WW | yW.c) >>> 0];
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L450` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L549) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L450)

```diff
-           const BB = this.host.OyB(this.id);
+           const WW = this.host.RmW(this.id);
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L452` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L551) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L452)

```diff
-           const GB = this.host.ByB(this.id);
+           const OW = this.host.GmW(this.id);
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L468` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L567) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L468)

```diff
-           OB.length > 0 && this.images.onEvent(OB), this.page.isTrapped || BB.ioB(this.id)
+           iW.length > 0 && this.images.onEvent(iW), this.page.isTrapped || WW.vmW(this.id)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L484` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L583) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L484)

```diff
-             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${cB} a model worker was lost: ${BB}`))
+             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${CW} a model worker was lost: ${WW}`))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L487` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L586) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L487)

```diff
-         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.zp = {
+         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.kA = {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L496-L497` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L595-L596) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L496-L497)

```diff
-               if (!this.stopIfTrapped(GB) && (this.stop(), (0, AB.v)(GB))) return void this.deps.onRenderFailed("frames_refused", GB);
-               console.warn(`${cB} the previews stopped: their frame threw`, GB)
+               if (!this.stopIfTrapped(OW) && (this.stop(), (0, MW.s)(OW))) return void this.deps.onRenderFailed("frames_refused", OW);
+               console.warn(`${CW} the previews stopped: their frame threw`, OW)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L527-L528` → after: `L626-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L626-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L626-L627) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L527-L528)

```diff
-           if (!QB.hjB()) {
-             const OB = (0, LB.i)().sampleCount,
+           if (!NW.ImW()) {
+             const iW = (0, vW.e)().sampleCount,
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L531-L532` → after: `L630-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L630-L631) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L531-L532)

```diff
-             if (!QB.UjB(oB)) throw new Error("the page has a renderer already");
-             (0, mB.z)(performance.now()), this.samples = OB, (0, gB.h)((0, AB.r)(BB))
+             if (!NW.amW(PW)) throw new Error("the page has a renderer already");
+             (0, uW.u)(performance.now()), this.samples = iW, (0, gW.d)((0, MW.n)(WW))
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L544-L545` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L643-L644) · [Before (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L544-L545)

```diff
-           console.warn(`${cB} an ended session's renderer didn't free`, QB)
-         } else OB.UjB(GB) && ((0, mB.z)(performance.now()), this.samples = YB, (0, gB.h)(this.registryOf(BB)))
+           console.warn(`${CW} an ended session's renderer didn't free`, NW)
+         } else iW.amW(OW) && ((0, uW.u)(performance.now()), this.samples = mW, (0, gW.d)(this.registryOf(WW)))
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L567-L568` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L666-L667) · [Before (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L567-L568)

```diff
-             return void console.warn(`${cB} the session's core kept the page's renderer`, DB)
-           }!0 === (null === (OB = this.host) || void 0 === OB ? void 0 : OB.attached()) && console.warn(`${cB} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (GB = this.host) || void 0 === GB ? void 0 : GB.hjB()) … [truncated]
+             return void console.warn(`${CW} the session's core kept the page's renderer`, EW)
+           }!0 === (null === (iW = this.host) || void 0 === iW ? void 0 : iW.attached()) && console.warn(`${CW} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (OW = this.host) || void 0 === OW ? void 0 : OW.ImW()) … [truncated]
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L585` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L684) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L585)

```diff
-           [yB, JB] = (0, EB.c)(OB, GB, this.deps.dpr(), YB);
+           [cW, wW] = (0, fW.b)(iW, OW, this.deps.dpr(), mW);
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L587-L588` → after: `L686-L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L686-L687) · [Before (L587-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L587-L588)

```diff
-         if (!this.guarded((() => (QB.FoB(oB, jB), DB.open(oB, yB, JB, BB))))) throw this.hostCall(void 0, (() => {
-           QB.ioB(oB)
+         if (!this.guarded((() => (NW.emW(PW, LW), EW.open(PW, cW, wW, WW))))) throw this.hostCall(void 0, (() => {
+           NW.vmW(PW)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L594-L595` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L693-L694) · [Before (L594-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L594-L595)

```diff
-       prefetch() {
-         if (this.prefetched || this.isStopped || (0, mB.c)() || null !== (0, mB.K)()) return;
+       prefetch(WW) {
+         if (this.prefetched || !this.mayPrefetch) return;
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L597-L598` → after: `L696-L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L696-L697) · [Before (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L597-L598)

```diff
-         (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((BB => {
-           null === BB || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
+         (null === this.module ? this.loadModule(WW) : Promise.resolve(this.module)).then((async iW => {
+           null !== iW && (await (null === WW || void 0 === WW ? void 0 : WW("preview workers and files")), this.mayPrefetch && (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles()))
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L605` → after: `L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L704) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L605)

```diff
-         return this.prefetchedOr(BB, YB.I)
+         return this.prefetchedOr(WW, mW.C)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L613` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L712) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L613)

```diff
-           OB = await Promise.all([BB, this.deps.images.lifeformAtlasUrl(KB.c)]).catch((() => null));
+           iW = await Promise.all([WW, this.deps.images.lifeformAtlasUrl(HW.e)]).catch((() => null));
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L624-L625` → after: `L723-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L723-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L723-L724) · [Before (L624-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L624-L625)

```diff
-       loadModule() {
-         return this.moduleLoad ??= this.deps.loadModule().then((BB => (null === BB && (this.moduleLoad = null), BB)), (BB => {
+       loadModule(WW) {
+         return this.moduleLoad ??= this.deps.loadModule(WW).then((WW => (null === WW && (this.moduleLoad = null), WW)), (WW => {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L647` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L746) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L647)

```diff
-         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${cB} the model workers didn't start: models won't draw in the previews`, BB))
+         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${CW} the model workers didn't start: models won't draw in the previews`, WW))
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L657` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L756) · [Before (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L657)

```diff
-         return this.module = BB, null === this.host && (this.host = this.guarded((() => new BB.IoB)), this.tellInGame(), this.handOverShaderPack()), this.host
+         return this.module = WW, null === this.host && (this.host = this.guarded((() => new WW.dmW)), this.tellInGame(), this.handOverShaderPack()), this.host
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L664` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L763) · [Before (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L664)

```diff
-           BB.HjB(this.deps.game.inGame())
+           WW.rmW(this.deps.game.inGame())
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L673` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L772) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L673)

```diff
-           BB.uDB(...OB) || console.warn(`${cB} the host refused the shader pack: previews draw without it at home`)
+           WW.umW(...iW) || console.warn(`${CW} the host refused the shader pack: previews draw without it at home`)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L680` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L779) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L680)

```diff
-           this.stop(), console.warn(`${cB} the previews stopped: ${BB} threw`, GB)
+           this.stop(), console.warn(`${CW} the previews stopped: ${WW} threw`, OW)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L687` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L786) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L687)

```diff
-           OB.wasm = null === GB ? OB.wasm : this.hostCall(OB.wasm, (() => GB.eP()))
+           iW.wasm = null === OW ? iW.wasm : this.hostCall(iW.wasm, (() => OW.RZ()))
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L700` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L799) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L700)

```diff
-             DB = BB.ejB(YB)
+             EW = WW.zmW(mW)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L717` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L816) · [Before (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L717)

```diff
-         return null !== BB && this.guarded((() => BB.hjB())) ? BB : (this.opening ??= this.openAtHome().finally((() => {
+         return null !== WW && this.guarded((() => WW.ImW())) ? WW : (this.opening ??= this.openAtHome().finally((() => {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L723` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L822) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L723)

```diff
-         const OB = null !== (BB = this.module) && void 0 !== BB ? BB : await this.loadModule();
+         const iW = null !== (WW = this.module) && void 0 !== WW ? WW : await this.loadModule();
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L726` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L825) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L726)

```diff
-           YB = () => this.guarded((() => GB.hjB()));
+           mW = () => this.guarded((() => OW.ImW()));
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L728` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L827) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L728)

```diff
-         if (null !== (0, mB.K)() || (0, mB.c)()) return null;
+         if (null !== (0, uW.F)() || (0, uW.c)()) return null;
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L733` → after: `L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L832) · [Before (L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L733)

```diff
-         const oB = (0, LB.i)().sampleCount;
+         const PW = (0, vW.e)().sampleCount;
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L736` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L835) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L736)

```diff
-           jB = await (0, AB.B)(OB, "previewRenderer", DB, oB, rB.f, QB)
+           LW = await (0, MW.x)(iW, "previewRenderer", EW, PW, DW.h, NW)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L738` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L837) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L738)

```diff
-           throw yB instanceof dB.e ? this.stopForTrap(yB) : (0, AB.y)(yB) && await this.deps.onRenderFailed("start_failed", yB), yB
+           throw cW instanceof hW.e ? this.stopForTrap(cW) : (0, MW.u)(cW) && await this.deps.onRenderFailed("start_failed", cW), cW
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L740` → after: `L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L839) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L740)

```diff
-         return this.guarded((() => GB.UjB(jB))) ? ((0, mB.z)(performance.now()), this.samples = oB, this.pageCanvas = DB, (0, gB.h)(this.registryOf(OB)), GB) : YB() ? GB : null
+         return this.guarded((() => OW.amW(LW))) ? ((0, uW.u)(performance.now()), this.samples = PW, this.pageCanvas = EW, (0, gW.d)(this.registryOf(iW)), OW) : mW() ? OW : null
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L759-L760` → after: `L859-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L859-L860) · [Before (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L759-L760)

```diff
-             const OB = BB.tjB();
-             for (let BB = 0; BB + 1 < OB.length; BB += 2) OB[BB] === WB.I.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(OB[BB], OB[BB + 1])
+             const iW = WW.FmW();
+             for (let WW = 0; WW + 1 < iW.length; WW += 2) iW[WW] === sW.D.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(iW[WW], iW[WW + 1])
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L763-L765` → after: `L863-L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L863-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L863-L865) · [Before (L763-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L763-L765)

```diff
-             if (QB === bB) return this.stop(), void this.deps.onFatal(BB.rjB(), BB.XjB());
-             if (QB === CB) return this.stop(), void console.warn(`${cB} the previews stopped: the page's renderer went with its session`);
-             (0, ZB.b)(OB), this.startFrames()
+             if (NW === IW) return this.stop(), void this.deps.onFatal(WW.WEW(), WW.iEW());
+             if (NW === aW) return this.stop(), void console.warn(`${CW} the previews stopped: the page's renderer went with its session`);
+             (0, jW.c)(iW), this.startFrames()
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L767` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L867) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L767)

```diff
-             const OB = BB.wjB();
+             const iW = WW.QmW();
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L769-L770` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L869-L870) · [Before (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L769-L770)

```diff
-             const GB = OB[2] === WB.dd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
-             this.deps.onRenderFailed(GB, void 0, OB[1], OB[2] === WB.dd.RESTORE_LOST)
+             const OW = iW[2] === sW.cd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
+             this.deps.onRenderFailed(OW, void 0, iW[1], iW[2] === sW.cd.RESTORE_LOST)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L778` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L881) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L778)

```diff
-         return null !== this.module && ((0, dB.m)(this.module) || "failed" === (0, pB.x)())
+         return null !== this.module && ((0, hW.i)(this.module) || "failed" === (0, AW.D)())
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L799` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L902) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L799)

```diff
-           ZDB: (OB, GB) => {
+           OEW: (iW, OW) => {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L801` → after: `L904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L904) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L801)

```diff
-               BB.ZDB(OB, GB)
+               WW.OEW(iW, OW)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L804` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L907) · [Before (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L804)

```diff
-           NDB: OB => {
+           mEW: iW => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L806` → after: `L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L909) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L806)

```diff
-               BB.NDB(OB)
+               WW.mEW(iW)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L812` → after: `L931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L931) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L812)

```diff
-         return !!this.isTrapped && (this.stopped || (this.stop(), (0, gB.h)(null)), !0)
+         return !!this.isTrapped && (this.stopped || (this.stop(), (0, gW.d)(null)), !0)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L815` → after: `L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L934) · [Before (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L815)

```diff
-         return !(null === this.module || !(0, dB.q)(this.module, BB)) && (this.stopForTrap(BB), !0)
+         return !(null === this.module || !(0, hW.k)(this.module, WW)) && (this.stopForTrap(WW), !0)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L818` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L937) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L818)

```diff
-         this.stop(), (0, gB.h)(null), (0, wB.g)("previews", BB)
+         this.stop(), (0, gW.d)(null), (0, pW.g)("previews", WW)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L825-L826` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L944-L945) · [Before (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L825-L826)

```diff
-         const GB = `${BB}:${OB}`;
-         this.loggedErrors.has(GB) || (this.loggedErrors.add(GB), console.warn(`${cB} error ${BB} (detail ${OB})`))
+         const OW = `${WW}:${iW}`;
+         this.loggedErrors.has(OW) || (this.loggedErrors.add(OW), console.warn(`${CW} error ${WW} (detail ${iW})`))
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L833` → after: `L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L952) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L833)

```diff
-         const BB = (0, fB.n)(qB.clientSideServerUrls.staticUrl, {
+         const WW = (0, TW.p)(bW.clientSideServerUrls.staticUrl, {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L836` → after: `L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L955) · [Before (L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L836)

```diff
-             return null !== (OB = null === (GB = KB.g.current) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null
+             return null !== (iW = null === (OW = HW.h.current) || void 0 === OW ? void 0 : OW.modelUrl(WW)) && void 0 !== iW ? iW : null
```
