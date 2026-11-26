# Changed — Bundle Modifications Report (Part 104 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `104 / 115` (**396** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 103](part-103.md) · [Part 105 →](part-105.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (937 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 682. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6136` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6156) · [Before (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6136)

```diff
-           yU = (0, tQ.d)(this, gA)[gA]((() => cU.HQU()));
+           rH = (0, WS.e)(this, Mh)[Mh]((() => AH.HhH()));
```

#### 683. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6138-L6140` → after: `L6158-L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6158-L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6158-L6160) · [Before (L6138-L6140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6138-L6140)

```diff
-         const QU = this.deps.core.MQU();
-         if (yU !== QU) return await (0, tQ.d)(this, aA)[aA](new Error(`recorder port version ${yU}, the core's ${QU}`)), !1;
-         (0, tQ.d)(this, OQ)[OQ] = UU
+         const SH = this.deps.core.BhH();
+         if (rH !== SH) return await (0, WS.e)(this, Qh)[Qh](new Error(`recorder port version ${rH}, the core's ${SH}`)), !1;
+         (0, WS.e)(this, lS)[lS] = HH
```

#### 684. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6144-L6147` → after: `L6164-L6167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6164-L6167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6164-L6167) · [Before (L6144-L6147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6144-L6147)

```diff
-         if (!(0, tQ.d)(this, gA)[gA]((() => ((0, tQ.d)(this, SQ)[SQ] = new XU.vQU, (0, tQ.d)(this, rQ)[rQ] = XU.qQU(), !0)))) return !1;
-         (0, tQ.d)(this, FA)[FA]();
-         const UU = (0, tQ.d)(this, nQ)[nQ];
-         return (0, tQ.d)(this, nQ)[nQ] = null, UU && (0, tQ.d)(this, DA)[DA](NU.Rc.Control, UU), (0, tQ.d)(this, AA)[AA]()
+         if (!(0, WS.e)(this, Mh)[Mh]((() => ((0, WS.e)(this, KS)[KS] = new BH.LhH, (0, WS.e)(this, cS)[cS] = BH.dSH(), !0)))) return !1;
+         (0, WS.e)(this, th)[th]();
+         const HH = (0, WS.e)(this, DS)[DS];
+         return (0, WS.e)(this, DS)[DS] = null, HH && (0, WS.e)(this, Ch)[Ch](GH.Mc.Control, HH), (0, WS.e)(this, hh)[hh]()
```

#### 685. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6149` → after: `L6169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6169) · [Before (L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6149)

```diff
-         return (0, tQ.d)(this, EA)[EA](), await (0, tQ.d)(this, aA)[aA](zU), !1
+         return (0, WS.e)(this, Eh)[Eh](), await (0, WS.e)(this, Qh)[Qh](LH), !1
```

#### 686. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6154` → after: `L6174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6174) · [Before (L6154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6154)

```diff
-       return this.deps.core.VQU(0), 1 === this.deps.core.VQU(1) || ((0, tQ.d)(this, EA)[EA](), this.deps.failed(CQ), !1)
+       return this.deps.core.AhH(0), 1 === this.deps.core.AhH(1) || ((0, WS.e)(this, Eh)[Eh](), this.deps.failed(oS), !1)
```

#### 687. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6158` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6178) · [Before (L6158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6158)

```diff
-       (0, tQ.d)(this, VQ)[VQ] && (0, tQ.d)(this, DA)[DA](NU.Rc.Prefs, WQ((0, tQ.d)(this, VQ)[VQ].on, (0, tQ.d)(this, VQ)[VQ].seconds)), (0, tQ.d)(this, sQ)[sQ] && (0, tQ.d)(this, KQ)[KQ]((0, tQ.d)(this, sQ)[sQ])
+       (0, WS.e)(this, nS)[nS] && (0, WS.e)(this, Ch)[Ch](GH.Mc.Prefs, OS((0, WS.e)(this, nS)[nS].on, (0, WS.e)(this, nS)[nS].seconds)), (0, WS.e)(this, FS)[FS] && (0, WS.e)(this, JS)[JS]((0, WS.e)(this, FS)[FS])
```

#### 688. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6166` → after: `L6186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6186) · [Before (L6166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6166)

```diff
-           return null !== (UU = null === (XU = (0, tQ.d)(this, VQ)[VQ]) || void 0 === XU ? void 0 : XU.seconds) && void 0 !== UU ? UU : 0
+           return null !== (HH = null === (BH = (0, WS.e)(this, nS)[nS]) || void 0 === BH ? void 0 : BH.seconds) && void 0 !== HH ? HH : 0
```

#### 689. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6168-L6171` → after: `L6188-L6191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6188-L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6188-L6191) · [Before (L6168-L6171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6168-L6171)

```diff
-         trapped: () => (0, tQ.d)(this, uQ)[uQ],
-         busy: () => (0, tQ.d)(this, hQ)[hQ](),
-         loadInFlight: () => (0, tQ.d)(this, HQ)[HQ],
-         kp: () => (0, tQ.d)(this, fQ)[fQ],
+         trapped: () => (0, WS.e)(this, eS)[eS],
+         busy: () => (0, WS.e)(this, yS)[yS](),
+         loadInFlight: () => (0, WS.e)(this, NS)[NS],
+         Mu: () => (0, WS.e)(this, qS)[qS],
```

#### 690. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6173` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6193) · [Before (L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6173)

```diff
-           (0, tQ.d)(this, EA)[EA]()
+           (0, WS.e)(this, Eh)[Eh]()
```

#### 691. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6175` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6195) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6175)

```diff
-         load: () => (0, tQ.d)(this, XA)[XA]()
+         load: () => (0, WS.e)(this, Bh)[Bh]()
```

#### 692. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6180-L6181` → after: `L6200-L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6200-L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6200-L6201) · [Before (L6180-L6181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6180-L6181)

```diff
-       (0, tQ.d)(this, mQ)[mQ] ? (0, tQ.d)(this, mQ)[mQ].push([UU, XU]): (0, tQ.d)(this, tA)[tA](((zU, cU) => {
-         const yU = zU.OQU(XU.length);
+       (0, WS.e)(this, wS)[wS] ? (0, WS.e)(this, wS)[wS].push([HH, BH]): (0, WS.e)(this, Wh)[Wh](((LH, AH) => {
+         const rH = LH.aSH(BH.length);
```

#### 693. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6187` → after: `L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6207) · [Before (L6187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6187)

```diff
-       (0, tQ.d)(this, MQ)[MQ]++, (0, tQ.d)(this, yA)[yA]("cY"), (0, tQ.d)(this, jQ)[jQ].stop(), this.deps.core.VQU(0), (0, tQ.d)(this, YA)[YA](), (0, tQ.d)(this, uQ)[uQ] || ((0, tQ.d)(this, OQ)[OQ] = null, this.deps.unload())
+       (0, WS.e)(this, RS)[RS]++, (0, WS.e)(this, rh)[rh]("hX"), (0, WS.e)(this, sS)[sS].stop(), this.deps.core.AhH(0), (0, WS.e)(this, Xh)[Xh](), (0, WS.e)(this, eS)[eS] || ((0, WS.e)(this, lS)[lS] = null, this.deps.unload())
```

#### 694. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6191` → after: `L6211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6211) · [Before (L6191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6191)

```diff
-       (0, tQ.d)(this, tA)[tA]((UU => {
+       (0, WS.e)(this, Wh)[Wh]((HH => {
```

#### 695. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6193` → after: `L6213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6213) · [Before (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6193)

```diff
-       })), (0, tQ.d)(this, SQ)[SQ] = null, (0, tQ.d)(this, rQ)[rQ] = null, (0, tQ.d)(this, JQ)[JQ] = null
+       })), (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null
```

#### 696. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6199` → after: `L6219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6219) · [Before (L6199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6199)

```diff
-       return (null === (UU = (0, tQ.d)(this, lQ)[lQ]) || void 0 === UU ? void 0 : UU.buffer) !== XU && ((0, tQ.d)(this, lQ)[lQ] = new Uint8Array(XU)), (0, tQ.d)(this, lQ)[lQ]
+       return (null === (HH = (0, WS.e)(this, ZS)[ZS]) || void 0 === HH ? void 0 : HH.buffer) !== BH && ((0, WS.e)(this, ZS)[ZS] = new Uint8Array(BH)), (0, WS.e)(this, ZS)[ZS]
```

#### 697. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6205` → after: `L6225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6225) · [Before (L6205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6205)

```diff
-       return (null === (UU = (0, tQ.d)(this, xQ)[xQ]) || void 0 === UU ? void 0 : UU.buffer) !== XU && ((0, tQ.d)(this, xQ)[xQ] = new Uint32Array(XU, 0, XU.byteLength >>> 2)), (0, tQ.d)(this, xQ)[xQ]
+       return (null === (HH = (0, WS.e)(this, dS)[dS]) || void 0 === HH ? void 0 : HH.buffer) !== BH && ((0, WS.e)(this, dS)[dS] = new Uint32Array(BH, 0, BH.byteLength >>> 2)), (0, WS.e)(this, dS)[dS]
```

#### 698. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6211` → after: `L6231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6231) · [Before (L6211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6211)

```diff
-       return (null === (XU = (0, tQ.d)(this, JQ)[JQ]) || void 0 === XU ? void 0 : XU.buffer) !== zU && ((0, tQ.d)(this, JQ)[JQ] = new Uint8Array(zU)), (0, tQ.d)(this, JQ)[JQ]
+       return (null === (BH = (0, WS.e)(this, aS)[aS]) || void 0 === BH ? void 0 : BH.buffer) !== LH && ((0, WS.e)(this, aS)[aS] = new Uint8Array(LH)), (0, WS.e)(this, aS)[aS]
```

#### 699. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6220-L6222` → after: `L6240-L6242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6240-L6242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6240-L6242) · [Before (L6220-L6222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6220-L6222)

```diff
-       const XU = (0, tQ.d)(this, SQ)[SQ],
-         zU = (0, tQ.d)(this, rQ)[rQ];
-       if (XU && zU) return (0, tQ.d)(this, gA)[gA]((() => UU(XU, zU)))
+       const BH = (0, WS.e)(this, KS)[KS],
+         LH = (0, WS.e)(this, cS)[cS];
+       if (BH && LH) return (0, WS.e)(this, Mh)[Mh]((() => HH(BH, LH)))
```

#### 700. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6226` → after: `L6246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6246) · [Before (L6226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6226)

```diff
-       if (!(0, tQ.d)(this, uQ)[uQ]) try {
+       if (!(0, WS.e)(this, eS)[eS]) try {
```

#### 701. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6229` → after: `L6249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6249) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6229)

```diff
-         if (!(0, tQ.d)(this, kA)[kA](XU)) throw XU;
+         if (!(0, WS.e)(this, xh)[xh](BH)) throw BH;
```

#### 702. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6235` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6255) · [Before (L6235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6235)

```diff
-       return UU instanceof WebAssembly.RuntimeError && ((0, tQ.d)(this, uQ)[uQ] = !0, (0, tQ.d)(this, SQ)[SQ] = null, (0, tQ.d)(this, rQ)[rQ] = null, (0, tQ.d)(this, JQ)[JQ] = null, (0, tQ.d)(this, OQ)[OQ] = null, (0, tQ.d)(this, nQ)[nQ] = null, (0, tQ.d)(this, yA)[yA]("trapped") … [truncated]
+       return HH instanceof WebAssembly.RuntimeError && ((0, WS.e)(this, eS)[eS] = !0, (0, WS.e)(this, KS)[KS] = null, (0, WS.e)(this, cS)[cS] = null, (0, WS.e)(this, aS)[aS] = null, (0, WS.e)(this, lS)[lS] = null, (0, WS.e)(this, DS)[DS] = null, (0, WS.e)(this, rh)[rh]("trapped") … [truncated]
```

#### 703. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6237` → after: `L6257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6257) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6237)

```diff
-     var mA = zU(39462);
+     var wh = LH(39568);
```

#### 704. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6239` → after: `L6259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6259) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6239)

```diff
-       ["skyblock", () => zU.e(59).then((() => zU(39455)))]
+       ["skyblock", () => LH.e(59).then((() => LH(39559)))]
```

#### 705. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6245-L6246` → after: `L6265-L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6265-L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6265-L6266) · [Before (L6245-L6246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6245-L6246)

```diff
-         const XU = (0, mA.e)(UU);
-         if (!XU) throw new Error(`${UU}'s replay hook module registered no hook`);
+         const BH = (0, wh.b)(HH);
+         if (!BH) throw new Error(`${HH}'s replay hook module registered no hook`);
```

#### 706. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6326-L6344` → after: `L6346-L6364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6346-L6364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6346-L6364) · [Before (L6326-L6344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6326-L6344)

```diff
-     var jA = (0, gQ.e)("bindings"),
-       KA = (0, gQ.e)("module"),
-       bA = (0, gQ.e)("memory"),
-       TA = (0, gQ.e)("trapped"),
-       hA = (0, gQ.e)("generation"),
-       UF = (0, gQ.e)("loading"),
-       XF = (0, gQ.e)("lend"),
-       zF = (0, gQ.e)("givenUp"),
-       cF = (0, gQ.e)("afterSave"),
-       yF = (0, gQ.e)("opens"),
-       QF = (0, gQ.e)("saveAskedAt"),
-       AF = (0, gQ.e)("unload"),
-       FF = (0, gQ.e)("dropModule"),
-       oF = (0, gQ.e)("loadFailed"),
-       DF = (0, gQ.e)("saveReadsBody"),
-       EF = (0, gQ.e)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var sh = (0, MS.c)("bindings"),
+       Jh = (0, MS.c)("module"),
+       ih = (0, MS.c)("memory"),
+       ph = (0, MS.c)("trapped"),
+       yh = (0, MS.c)("generation"),
+       Ht = (0, MS.c)("loading"),
+       Bt = (0, MS.c)("lend"),
+       Lt = (0, MS.c)("givenUp"),
+       At = (0, MS.c)("afterSave"),
+       rt = (0, MS.c)("opens"),
+       St = (0, MS.c)("saveAskedAt"),
+       ht = (0, MS.c)("unload"),
+       tt = (0, MS.c)("dropModule"),
+       zt = (0, MS.c)("loadFailed"),
+       Ct = (0, MS.c)("saveReadsBody"),
+       Et = (0, MS.c)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 707. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6400` → after: `L6420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6420) · [Before (L6400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6400)

```diff
-         return null !== (0, tQ.d)(this, KA)[KA] && null === (0, tQ.d)(this, cF)[cF]
+         return null !== (0, WS.e)(this, Jh)[Jh] && null === (0, WS.e)(this, At)[At]
```

#### 708. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6403-L6404` → after: `L6423-L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6423-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6423-L6424) · [Before (L6403-L6404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6403-L6404)

```diff
-         if ((0, tQ.d)(this, TA)[TA]) return NU.bd.ModuleTrap;
-         let zU = (0, tQ.d)(this, jA)[jA];
+         if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
+         let LH = (0, WS.e)(this, sh)[sh];
```

#### 709. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6406-L6407` → after: `L6426-L6427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6426-L6427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6426-L6427) · [Before (L6406-L6407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6406-L6407)

```diff
-           const UU = (0, tQ.d)(this, hA)[hA];
-           (0, tQ.d)(this, UF)[UF]++;
+           const HH = (0, WS.e)(this, yh)[yh];
+           (0, WS.e)(this, Ht)[Ht]++;
```

#### 710. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6411` → after: `L6431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6431) · [Before (L6411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6411)

```diff
-             return (0, tQ.d)(this, UF)[UF]--, UU !== (0, tQ.d)(this, hA)[hA] ? "stopped" : (0, tQ.d)(this, oF)[oF](yU, XU)
+             return (0, WS.e)(this, Ht)[Ht]--, HH !== (0, WS.e)(this, yh)[yh] ? "stopped" : (0, WS.e)(this, zt)[zt](rH, BH)
```

#### 711. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6413-L6420` → after: `L6433-L6440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6433-L6440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6433-L6440) · [Before (L6413-L6420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6413-L6420)

```diff
-           if ((0, tQ.d)(this, UF)[UF]--, UU !== (0, tQ.d)(this, hA)[hA]) return (0, tQ.d)(this, jA)[jA] || 0 !== (0, tQ.d)(this, UF)[UF] || (0, tQ.d)(this, TA)[TA] || this.deps.unload(), "stopped";
-           if ((0, tQ.d)(this, TA)[TA]) return NU.bd.ModuleTrap;
-           const cU = zU.HQU(),
-             QU = this.deps.core.MQU();
-           if (cU !== QU) return (0, tQ.d)(this, oF)[oF](new Error(`replay port version ${cU}, the core's ${QU}`), XU);
-           (0, tQ.d)(this, jA)[jA] = zU
-         }
-         if (!(0, tQ.d)(this, KA)[KA]) {
+           if ((0, WS.e)(this, Ht)[Ht]--, HH !== (0, WS.e)(this, yh)[yh]) return (0, WS.e)(this, sh)[sh] || 0 !== (0, WS.e)(this, Ht)[Ht] || (0, WS.e)(this, ph)[ph] || this.deps.unload(), "stopped";
+           if ((0, WS.e)(this, ph)[ph]) return GH.$c.ModuleTrap;
+           const AH = LH.HhH(),
+             SH = this.deps.core.BhH();
+           if (AH !== SH) return (0, WS.e)(this, zt)[zt](new Error(`replay port version ${AH}, the core's ${SH}`), BH);
+           (0, WS.e)(this, sh)[sh] = LH
+         }
+         if (!(0, WS.e)(this, Jh)[Jh]) {
```

#### 712. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6422-L6424` → after: `L6442-L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6442-L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6442-L6444) · [Before (L6422-L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6422-L6424)

```diff
-           if (!(0, tQ.d)(this, NF)[NF]((() => {
-               (0, tQ.d)(this, KA)[KA] = new UU.sQU, (0, tQ.d)(this, bA)[bA] = UU.nQU()
-             }))) return NU.bd.ModuleTrap
+           if (!(0, WS.e)(this, Gt)[Gt]((() => {
+               (0, WS.e)(this, Jh)[Jh] = new HH.rhH, (0, WS.e)(this, ih)[ih] = HH.ShH()
+             }))) return GH.$c.ModuleTrap
```

#### 713. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6427-L6428` → after: `L6447-L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6447-L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6447-L6448) · [Before (L6427-L6428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6427-L6428)

```diff
-         return (0, tQ.d)(this, YF)[YF](((XU, zU) => {
-           null !== (0, tQ.d)(this, cF)[cF] && XU.step(0, 0);
+         return (0, WS.e)(this, Xt)[Xt](((BH, LH) => {
+           null !== (0, WS.e)(this, At)[At] && BH.step(0, 0);
```

#### 714. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6430-L6431` → after: `L6450-L6451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6450-L6451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6450-L6451) · [Before (L6430-L6431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6430-L6431)

```diff
-           0 !== yU && (new Uint8Array(zU.buffer, yU, UU.length).set(UU), XU.open(), (0, tQ.d)(this, zF)[zF] = (0, tQ.d)(this, XF)[XF], (0, tQ.d)(this, cF)[cF] = null, (0, tQ.d)(this, yF)[yF]++, cU = !0)
-         })) ? cU ? "opening" : NU.bd.TooLarge : NU.bd.ModuleTrap
+           0 !== rH && (new Uint8Array(LH.buffer, rH, HH.length).set(HH), BH.open(), (0, WS.e)(this, Lt)[Lt] = (0, WS.e)(this, Bt)[Bt], (0, WS.e)(this, At)[At] = null, (0, WS.e)(this, rt)[rt]++, AH = !0)
+         })) ? AH ? "opening" : GH.$c.TooLarge : GH.$c.ModuleTrap
```

#### 715. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6434-L6436` → after: `L6454-L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6454-L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6454-L6456) · [Before (L6434-L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6434-L6436)

```diff
-         const XU = (0, tQ.d)(this, KA)[KA],
-           zU = (0, tQ.d)(this, bA)[bA];
-         if (!XU || !zU || null !== (0, tQ.d)(this, cF)[cF]) return;
+         const BH = (0, WS.e)(this, Jh)[Jh],
+           LH = (0, WS.e)(this, ih)[ih];
+         if (!BH || !LH || null !== (0, WS.e)(this, At)[At]) return;
```

#### 716. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6439` → after: `L6459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6459) · [Before (L6439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6439)

```diff
-         } = this.deps, yU = cU.mQU(UU);
+         } = this.deps, rH = AH.hhH(HH);
```

#### 717. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6444` → after: `L6464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6464) · [Before (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6444)

```diff
-           AU = XU.step(QU, yU - QU), FU = XU.rQU()
+           hH = BH.step(SH, rH - SH), tH = BH.JSH()
```

#### 718. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6446` → after: `L6466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6466) · [Before (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6446)

```diff
-           return void(0, tQ.d)(this, IF)[IF](DU)
+           return void(0, WS.e)(this, Yt)[Yt](CH)
```

#### 719. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6448` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6468) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6448)

```diff
-         const oU = cU.iQU(1, AU);
+         const zH = AH.ySH(1, hH);
```

#### 720. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6450` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6470) · [Before (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6450)

```diff
-           const UU = (0, tQ.d)(this, YF)[YF]((UU => {
+           const HH = (0, WS.e)(this, Xt)[Xt]((HH => {
```

#### 721. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6454` → after: `L6474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6474) · [Before (L6454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6454)

```diff
-           return (0, tQ.d)(this, DF)[DF] ? (0, tQ.d)(this, cF)[cF] = "drop" : (0, tQ.d)(this, FF)[FF](), void cU.lQU(NU.bd.Port)
+           return (0, WS.e)(this, Ct)[Ct] ? (0, WS.e)(this, At)[At] = "drop" : (0, WS.e)(this, tt)[tt](), void AH.thH(GH.$c.Port)
```

#### 722. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6459` → after: `L6479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6479) · [Before (L6459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6459)

```diff
-         (0, tQ.d)(this, EF)[EF]((UU => {
+         (0, WS.e)(this, Et)[Et]((HH => {
```

#### 723. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6464` → after: `L6484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6484) · [Before (L6464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6464)

```diff
-         (0, tQ.d)(this, EF)[EF]((UU => {
+         (0, WS.e)(this, Et)[Et]((HH => {
```

#### 724. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6470` → after: `L6490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6490) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6470)

```diff
-         (0, tQ.d)(this, EF)[EF]((zU => {
+         (0, WS.e)(this, Et)[Et]((LH => {
```

#### 725. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6475-L6476` → after: `L6495-L6496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6495-L6496) · [Before (L6475-L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6475-L6476)

```diff
-         return (0, tQ.d)(this, EF)[EF]((zU => {
-           zU.xQU(UU, XU)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.zhH(HH, BH)
```

#### 726. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6480-L6481` → after: `L6500-L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6500-L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6500-L6501) · [Before (L6480-L6481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6480-L6481)

```diff
-         return (0, tQ.d)(this, EF)[EF]((zU => {
-           zU.JQU(UU[0], UU[1], UU[2], XU[0], XU[1], XU[2])
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.ChH(HH[0], HH[1], HH[2], BH[0], BH[1], BH[2])
```

#### 727. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6485-L6486` → after: `L6505-L6506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6505-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6505-L6506) · [Before (L6485-L6486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6485-L6486)

```diff
-         return (0, tQ.d)(this, EF)[EF]((zU => {
-           zU.KQU(UU, XU)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.EhH(HH, BH)
```

#### 728. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6490-L6491` → after: `L6510-L6511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6510-L6511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6510-L6511) · [Before (L6490-L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6490-L6491)

```diff
-         return (0, tQ.d)(this, EF)[EF]((zU => {
-           zU.bQU(UU, XU)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.XhH(HH, BH)
```

#### 729. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6495-L6496` → after: `L6515-L6516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6515-L6516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6515-L6516) · [Before (L6495-L6496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6495-L6496)

```diff
-         return (0, tQ.d)(this, EF)[EF]((zU => {
-           zU.TQU(UU, XU)
+         return (0, WS.e)(this, Et)[Et]((LH => {
+           LH.GhH(HH, BH)
```

#### 730. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6500` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6520) · [Before (L6500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6500)

```diff
-         return null === (0, tQ.d)(this, XF)[XF] && (0, tQ.d)(this, EF)[EF]((zU => {
+         return null === (0, WS.e)(this, Bt)[Bt] && (0, WS.e)(this, Et)[Et]((LH => {
```

#### 731. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6505-L6506` → after: `L6525-L6526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6525-L6526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6525-L6526) · [Before (L6505-L6506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6505-L6506)

```diff
-         const UU = (0, tQ.d)(this, QF)[QF];
-         if ((0, tQ.d)(this, QF)[QF] = null, null !== UU && UU !== (0, tQ.d)(this, yF)[yF]) return null;
+         const HH = (0, WS.e)(this, St)[St];
+         if ((0, WS.e)(this, St)[St] = null, null !== HH && HH !== (0, WS.e)(this, rt)[rt]) return null;
```

#### 732. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6509-L6510` → after: `L6529-L6530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6529-L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6529-L6530) · [Before (L6509-L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6509-L6510)

```diff
-         if ((0, tQ.d)(this, YF)[YF](((UU, cU) => {
-             XU = UU.save(), 0 !== XU && (zU = new Uint8Array(cU.buffer, UU.hQU(), UU.UAU()).slice())
+         if ((0, WS.e)(this, Xt)[Xt](((HH, AH) => {
+             BH = HH.save(), 0 !== BH && (LH = new Uint8Array(AH.buffer, HH.YhH(), HH.uhH()).slice())
```

#### 733. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6515` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6535) · [Before (L6515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6515)

```diff
-           givenUp: () => (0, tQ.d)(this, zF)[zF] === cU,
+           givenUp: () => (0, WS.e)(this, Lt)[Lt] === AH,
```

#### 734. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6517` → after: `L6537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6537) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6517)

```diff
-             if ((0, tQ.d)(this, XF)[XF] !== cU || !(0, tQ.d)(this, DF)[DF]) return null;
+             if ((0, WS.e)(this, Bt)[Bt] !== AH || !(0, WS.e)(this, Ct)[Ct]) return null;
```

#### 735. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6519-L6521` → after: `L6539-L6541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6539-L6541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6539-L6541) · [Before (L6519-L6521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6519-L6521)

```diff
-             return (0, tQ.d)(this, YF)[YF](((cU, yU) => {
-               const QU = cU.zAU();
-               0 !== QU && UU >= 0 && XU >= 0 && UU + XU <= QU && (zU = new Uint8Array(yU.buffer, cU.cAU() + UU, XU))
+             return (0, WS.e)(this, Xt)[Xt](((AH, rH) => {
+               const SH = AH.QhH();
+               0 !== SH && HH >= 0 && BH >= 0 && HH + BH <= SH && (LH = new Uint8Array(rH.buffer, AH.WhH() + HH, BH))
```

#### 736. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6525-L6527` → after: `L6545-L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6545-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6545-L6547) · [Before (L6525-L6527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6525-L6527)

```diff
-             if ((0, tQ.d)(this, XF)[XF] !== cU) return;
-             (0, tQ.d)(this, XF)[XF] = null, (0, tQ.d)(this, zF)[zF] = null, (0, tQ.d)(this, YF)[YF]((UU => {
-               UU.yAU()
+             if ((0, WS.e)(this, Bt)[Bt] !== AH) return;
+             (0, WS.e)(this, Bt)[Bt] = null, (0, WS.e)(this, Lt)[Lt] = null, (0, WS.e)(this, Xt)[Xt]((HH => {
+               HH.MhH()
```

#### 737. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6529-L6530` → after: `L6549-L6550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6549-L6550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6549-L6550) · [Before (L6529-L6530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6529-L6530)

```diff
-             const UU = (0, tQ.d)(this, cF)[cF];
-             (0, tQ.d)(this, cF)[cF] = null, "unload" === UU ? (0, tQ.d)(this, AF)[AF]() : "drop" === UU && (0, tQ.d)(this, FF)[FF]()
+             const HH = (0, WS.e)(this, At)[At];
+             (0, WS.e)(this, At)[At] = null, "unload" === HH ? (0, WS.e)(this, ht)[ht]() : "drop" === HH && (0, WS.e)(this, tt)[tt]()
```

#### 738. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6533` → after: `L6553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6553) · [Before (L6533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6533)

```diff
-         return (0, tQ.d)(this, XF)[XF] = cU, cU
+         return (0, WS.e)(this, Bt)[Bt] = AH, AH
```

#### 739. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6536` → after: `L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6556) · [Before (L6536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6536)

```diff
-         (0, tQ.d)(this, QF)[QF] = (0, tQ.d)(this, yF)[yF]
+         (0, WS.e)(this, St)[St] = (0, WS.e)(this, rt)[rt]
```

#### 740. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6539-L6540` → after: `L6559-L6560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6559-L6560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6559-L6560) · [Before (L6539-L6540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6539-L6540)

```diff
-         (0, tQ.d)(this, EF)[EF]((XU => {
-           XU.QAU(UU)
+         (0, WS.e)(this, Et)[Et]((BH => {
+           BH.xhH(HH)
```

#### 741. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6544-L6545` → after: `L6564-L6565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6564-L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6564-L6565) · [Before (L6544-L6545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6544-L6545)

```diff
-         (0, tQ.d)(this, EF)[EF]((XU => {
-           XU.AAU(UU)
+         (0, WS.e)(this, Et)[Et]((BH => {
+           BH.vhH(HH)
```

#### 742. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6549` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6569) · [Before (L6549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6549)

```diff
-         (0, tQ.d)(this, EF)[EF]((UU => {
+         (0, WS.e)(this, Et)[Et]((HH => {
```

#### 743. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6554` → after: `L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6574) · [Before (L6554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6554)

```diff
-         (0, tQ.d)(this, hA)[hA]++, (0, tQ.d)(this, DF)[DF] && ((0, tQ.d)(this, YF)[YF]((UU => {
+         (0, WS.e)(this, yh)[yh]++, (0, WS.e)(this, Ct)[Ct] && ((0, WS.e)(this, Xt)[Xt]((HH => {
```

#### 744. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6556` → after: `L6576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6576) · [Before (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6556)

```diff
-         })), (0, tQ.d)(this, KA)[KA]) ? (0, tQ.d)(this, cF)[cF] = "unload" : (0, tQ.d)(this, AF)[AF]()
+         })), (0, WS.e)(this, Jh)[Jh]) ? (0, WS.e)(this, At)[At] = "unload" : (0, WS.e)(this, ht)[ht]()
```

#### 745. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6561` → after: `L6581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6581) · [Before (L6561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6561)

```diff
-       (0, tQ.d)(this, FF)[FF](), (0, tQ.d)(this, TA)[TA] || ((0, tQ.d)(this, jA)[jA] = null, this.deps.unload())
+       (0, WS.e)(this, tt)[tt](), (0, WS.e)(this, ph)[ph] || ((0, WS.e)(this, sh)[sh] = null, this.deps.unload())
```

#### 746. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6565` → after: `L6585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6585) · [Before (L6565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6565)

```diff
-       (0, tQ.d)(this, YF)[YF]((UU => {
+       (0, WS.e)(this, Xt)[Xt]((HH => {
```

#### 747. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6567` → after: `L6587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6587) · [Before (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6567)

```diff
-       })), (0, tQ.d)(this, KA)[KA] = null, (0, tQ.d)(this, bA)[bA] = null
+       })), (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null
```

#### 748. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6572` → after: `L6592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6592) · [Before (L6572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6572)

```diff
-       }) ? "reloading" : NU.bd.ModuleLoad
+       }) ? "reloading" : GH.$c.ModuleLoad
```

#### 749. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6576` → after: `L6596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6596) · [Before (L6576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6576)

```diff
-       return null !== (0, tQ.d)(this, XF)[XF] && (0, tQ.d)(this, zF)[zF] !== (0, tQ.d)(this, XF)[XF]
+       return null !== (0, WS.e)(this, Bt)[Bt] && (0, WS.e)(this, Lt)[Lt] !== (0, WS.e)(this, Bt)[Bt]
```

#### 750. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6580` → after: `L6600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6600) · [Before (L6580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6580)

```diff
-       return null === (0, tQ.d)(this, cF)[cF] && (0, tQ.d)(this, YF)[YF](UU)
+       return null === (0, WS.e)(this, At)[At] && (0, WS.e)(this, Xt)[Xt](HH)
```

#### 751. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6584-L6586` → after: `L6604-L6606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6604-L6606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6604-L6606) · [Before (L6584-L6586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6584-L6586)

```diff
-       const XU = (0, tQ.d)(this, KA)[KA],
-         zU = (0, tQ.d)(this, bA)[bA];
-       return !(!XU || !zU) && (0, tQ.d)(this, NF)[NF]((() => {
+       const BH = (0, WS.e)(this, Jh)[Jh],
+         LH = (0, WS.e)(this, ih)[ih];
+       return !(!BH || !LH) && (0, WS.e)(this, Gt)[Gt]((() => {
```

#### 752. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6592` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6612) · [Before (L6592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6592)

```diff
-       if ((0, tQ.d)(this, TA)[TA]) return !1;
+       if ((0, WS.e)(this, ph)[ph]) return !1;
```

#### 753. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6596` → after: `L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6616) · [Before (L6596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6596)

```diff
-         return (0, tQ.d)(this, IF)[IF](XU), !1
+         return (0, WS.e)(this, Yt)[Yt](BH), !1
```

#### 754. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6602` → after: `L6622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6622) · [Before (L6602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6602)

```diff
-       (0, tQ.d)(this, TA)[TA] = !0, (0, tQ.d)(this, KA)[KA] = null, (0, tQ.d)(this, bA)[bA] = null, (0, tQ.d)(this, jA)[jA] = null, this.deps.crash(this.deps.markTrapped(UU)), this.deps.core.lQU(NU.bd.ModuleTrap)
+       (0, WS.e)(this, ph)[ph] = !0, (0, WS.e)(this, Jh)[Jh] = null, (0, WS.e)(this, ih)[ih] = null, (0, WS.e)(this, sh)[sh] = null, this.deps.crash(this.deps.markTrapped(HH)), this.deps.core.thH(GH.$c.ModuleTrap)
```

#### 755. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6604-L6605` → after: `L6624-L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6624-L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6624-L6625) · [Before (L6604-L6605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6604-L6605)

```diff
-     var PF = zU(7062),
-       WF = zU(42127);
+     var Vt = LH(7014),
+       Ot = LH(42339);
```

#### 756. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6616` → after: `L6636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6636) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6616)

```diff
-         case NU.md.FlyingText: {
+         case GH.gd.FlyingText: {
```

#### 757. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6621` → after: `L6641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6641) · [Before (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6621)

```diff
-             return void console.warn(`${dF} a replay's flying text isn't JSON`, DU)
+             return void console.warn(`${bt} a replay's flying text isn't JSON`, CH)
```

#### 758. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6623` → after: `L6643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6643) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6623)

```diff
-           AU.k.UY("forceFlyingMiddleMessage", {
+           hH.k.AX("forceFlyingMiddleMessage", {
```

#### 759. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6625` → after: `L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6645) · [Before (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6625)

```diff
-             nX: UU.nX,
+             dr: HH.dr,
```

#### 760. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6627` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6647) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6627)

```diff
-             mX: UU.mX
+             ar: HH.ar
```

#### 761. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6631-L6632` → after: `L6651-L6652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6651-L6652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6651-L6652) · [Before (L6631-L6632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6631-L6632)

```diff
-         case NU.md.PlayerKilled:
-           (0, WF.c)({
+         case GH.gd.PlayerKilled:
+           (0, Ot.e)({
```

#### 762. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6635` → after: `L6655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6655) · [Before (L6635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6635)

```diff
-               deadEId: null !== (XU = eF(UU.dead)) && void 0 !== XU ? XU : "",
+               deadEId: null !== (BH = mt(HH.dead)) && void 0 !== BH ? BH : "",
```

#### 763. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6637` → after: `L6657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6657) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6637)

```diff
-               withItem: null !== (zU = UU.withItem) && void 0 !== zU ? zU : "",
+               withItem: null !== (LH = HH.withItem) && void 0 !== LH ? LH : "",
```

#### 764. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6642-L6643` → after: `L6662-L6663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6662-L6663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6662-L6663) · [Before (L6642-L6643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6642-L6643)

```diff
-         case NU.md.Killfeed:
-           (0, WF.c)({
+         case GH.gd.Killfeed:
+           (0, Ot.e)({
```

#### 765. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6648-L6649` → after: `L6668-L6669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6668-L6669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6668-L6669) · [Before (L6648-L6649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6648-L6649)

```diff
-                 name: null !== (cU = UU.killerName) && void 0 !== cU ? cU : void 0,
-                 colour: null !== (yU = UU.killerColour) && void 0 !== yU ? yU : void 0
+                 name: null !== (AH = HH.killerName) && void 0 !== AH ? AH : void 0,
+                 colour: null !== (rH = HH.killerColour) && void 0 !== rH ? rH : void 0
```

#### 766. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6653-L6654` → after: `L6673-L6674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6673-L6674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6673-L6674) · [Before (L6653-L6654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6653-L6654)

```diff
-                 name: null !== (QU = UU.victimName) && void 0 !== QU ? QU : void 0,
-                 colour: null !== (FU = UU.victimColour) && void 0 !== FU ? FU : void 0
+                 name: null !== (SH = HH.victimName) && void 0 !== SH ? SH : void 0,
+                 colour: null !== (tH = HH.victimColour) && void 0 !== tH ? tH : void 0
```

#### 767. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6656` → after: `L6676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6676) · [Before (L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6656)

```diff
-               withItem: null !== (oU = UU.withItem) && void 0 !== oU ? oU : ""
+               withItem: null !== (zH = HH.withItem) && void 0 !== zH ? zH : ""
```

#### 768. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6666` → after: `L6686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6686) · [Before (L6666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6666)

```diff
-       return Number.isInteger(XU) && XU > ly && XU <= 2147483647 ? XU : null
+       return Number.isInteger(BH) && BH > Zr && BH <= 2147483647 ? BH : null
```

#### 769. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6678` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6698) · [Before (L6678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6678)

```diff
-       const XU = (0, zQ.m)(Ac.oc.PlayerKilled, (XU => {
+       const BH = (0, LS.k)(hA.nc.PlayerKilled, (BH => {
```

#### 770. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6680-L6681` → after: `L6700-L6701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6700-L6701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6700-L6701) · [Before (L6680-L6681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6680-L6681)

```diff
-           const yU = (0, XQ.f)(XU);
-           if (!(0, XQ.b)(yU)) return;
+           const rH = (0, BS.i)(BH);
+           if (!(0, BS.c)(rH)) return;
```

#### 771. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6688` → after: `L6708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6708) · [Before (L6688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6688)

```diff
-           UU.recordPlayerKilled(null !== (zU = qF(QU)) && void 0 !== zU ? zU : ly, null !== (cU = qF(AU)) && void 0 !== cU ? cU : ly, "number" === typeof oU ? oU : 0, "string" === typeof FU ? FU : "")
+           HH.recordPlayerKilled(null !== (LH = ft(SH)) && void 0 !== LH ? LH : Zr, null !== (AH = ft(hH)) && void 0 !== AH ? AH : Zr, "number" === typeof zH ? zH : 0, "string" === typeof tH ? tH : "")
```

#### 772. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6690-L6692` → after: `L6710-L6712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6710-L6712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6710-L6712) · [Before (L6690-L6692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6690-L6692)

```diff
-         zU = (0, zQ.m)(Ac.oc.CustomKillfeed, (XU => {
-           const zU = (0, XQ.f)(XU);
-           if (!(0, XQ.b)(zU) || !(0, XQ.b)(zU.killer) || !(0, XQ.b)(zU.victim)) return;
+         LH = (0, LS.k)(hA.nc.CustomKillfeed, (BH => {
+           const LH = (0, BS.i)(BH);
+           if (!(0, BS.c)(LH) || !(0, BS.c)(LH.killer) || !(0, BS.c)(LH.victim)) return;
```

#### 773. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6698` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6718) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6698)

```diff
-           UU.recordKillfeed(OF(cU), OF(yU), "string" === typeof QU ? QU : null)
+           HH.recordKillfeed(lt(AH), lt(rH), "string" === typeof SH ? SH : null)
```

#### 774. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6707` → after: `L6727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6727) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6707)

```diff
-       return void 0 === UU || null === UU ? null : null !== (XU = JSON.stringify(UU)) && void 0 !== XU ? XU : null
+       return void 0 === HH || null === HH ? null : null !== (BH = JSON.stringify(HH)) && void 0 !== BH ? BH : null
```

#### 775. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6716` → after: `L6736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6736) · [Before (L6716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6716)

```diff
-         } = cU.e.get("clientEscMenuOptions"), QU = `${zU}:${yU}`;
+         } = AH.c.get("clientEscMenuOptions"), SH = `${LH}:${rH}`;
```

#### 776. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6719` → after: `L6739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6739) · [Before (L6719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6719)

```diff
-       return zU(), (0, AU.n)("appManagerUpdated|clientEscMenuOptions", zU)
+       return LH(), (0, hH.m)("appManagerUpdated|clientEscMenuOptions", LH)
```

#### 777. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6726` → after: `L6746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6746) · [Before (L6726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6726)

```diff
-         return UU.isStopped ? zU : XU(...arguments)
+         return HH.isStopped ? LH : BH(...arguments)
```

#### 778. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6738` → after: `L6758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6758) · [Before (L6738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6738)

```diff
-       return zU.e(76).then((() => zU(64133)))
+       return LH.e(76).then((() => LH(64318)))
```

#### 779. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6754` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6774) · [Before (L6754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6754)

```diff
-         } = UU, QU = () => UU.memory().buffer, AU = () => XU.isStopped ? null : XU.rings.cmd, FU = HF(XU, ((UU, XU) => yU.iQU(UU, XU)), 0), oU = () => yU.MQU();
+         } = HH, SH = () => HH.memory().buffer, hH = () => BH.isStopped ? null : BH.rings.cmd, tH = Nt(BH, ((HH, BH) => rH.ySH(HH, BH)), 0), zH = () => rH.BhH();
```

#### 780. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6758-L6762` → after: `L6778-L6782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6778-L6782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6778-L6782) · [Before (L6758-L6762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6758-L6762)

```diff
-             mQU: HF(XU, (UU => yU.mQU(UU)), -1),
-             iQU: FU,
-             MQU: oU,
-             lQU: HF(XU, (UU => {
-               yU.lQU(UU)
+             hhH: Nt(BH, (HH => rH.hhH(HH)), -1),
+             ySH: tH,
+             BhH: zH,
+             thH: Nt(BH, (HH => {
+               rH.thH(HH)
```

#### 781. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6766` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6786) · [Before (L6766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6766)

```diff
-           load: async () => (DU = await zU.e(77).then((() => zU(64142))), DU.loadReplayModule()),
+           load: async () => (CH = await LH.e(77).then((() => LH(64329))), CH.loadReplayModule()),
```

#### 782. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6780-L6783` → after: `L6800-L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6800-L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6800-L6803) · [Before (L6780-L6783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6780-L6783)

```diff
-             VQU: HF(XU, (UU => yU.VQU(UU)), 0),
-             SQU: HF(XU, (UU => yU.SQU(UU)), 0),
-             iQU: FU,
-             MQU: oU
+             AhH: Nt(BH, (HH => rH.AhH(HH)), 0),
+             sSH: Nt(BH, (HH => rH.sSH(HH)), 0),
+             ySH: tH,
+             BhH: zH
```

#### 783. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6793` → after: `L6813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6813) · [Before (L6793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6793)

```diff
-               console.warn(`${wF} the recorder module didn't prefetch, so a save loads it:`, UU)
+               console.warn(`${It} the recorder module didn't prefetch, so a save loads it:`, HH)
```

#### 784. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6803` → after: `L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6823) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6803)

```diff
-             return null !== (UU = null === (XU = EU) || void 0 === XU ? void 0 : XU.recorderMemoryBytes()) && void 0 !== UU ? UU : 0
+             return null !== (HH = null === (BH = EH) || void 0 === BH ? void 0 : BH.recorderMemoryBytes()) && void 0 !== HH ? HH : 0
```

#### 785. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6822-L6824` → after: `L6842-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6842-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6842-L6844) · [Before (L6822-L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6822-L6824)

```diff
-             PQU: HF(XU, (UU => yU.PQU(UU)), 0),
-             dQU: HF(XU, (() => {
-               yU.dQU()
+             RSH: Nt(BH, (HH => rH.RSH(HH)), 0),
+             nSH: Nt(BH, (() => {
+               rH.nSH()
```

#### 786. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6826-L6827` → after: `L6846-L6847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6846-L6847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6846-L6847) · [Before (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6826-L6827)

```diff
-             Kt: HF(XU, (() => yU.Kt()), 0),
-             WQU: HF(XU, (() => yU.WQU()), 0)
+             DW: Nt(BH, (() => rH.DW()), 0),
+             jSH: Nt(BH, (() => rH.jSH()), 0)
```

#### 787. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6840` → after: `L6860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6860) · [Before (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6840)

```diff
-             console.warn(`${wF} the recorded game's replay hooks:`, UU)
+             console.warn(`${It} the recorded game's replay hooks:`, HH)
```

#### 788. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6852` → after: `L6872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6872) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6852)

```diff
-             null === (UU = (0, Hy.f)()) || void 0 === UU || UU.recorderChanged()
+             null === (HH = (0, Nr.g)()) || void 0 === HH || HH.recorderChanged()
```

#### 789. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6856` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6876) · [Before (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6856)

```diff
-             null === (UU = (0, Hy.f)()) || void 0 === UU || UU.viewerChanged()
+             null === (HH = (0, Nr.g)()) || void 0 === HH || HH.viewerChanged()
```

#### 790. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6861` → after: `L6881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6881) · [Before (L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6861)

```diff
-               const yU = Ac.yb[XU.key];
+               const rH = hA.Ab[BH.key];
```

#### 791. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6863` → after: `L6883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6883) · [Before (L6863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6863)

```diff
-               let QU = null !== (zU = XU.value) && void 0 !== zU ? zU : JSON.parse(JSON.stringify(null !== (cU = PF.b[yU]) && void 0 !== cU ? cU : null));
+               let SH = null !== (LH = BH.value) && void 0 !== LH ? LH : JSON.parse(JSON.stringify(null !== (AH = Vt.d[rH]) && void 0 !== AH ? AH : null));
```

#### 792. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6867` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6887) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6867)

```diff
-                 return void console.warn(`${dF} a replay's ${yU} isn't JSON`, AU)
+                 return void console.warn(`${bt} a replay's ${rH} isn't JSON`, hH)
```

#### 793. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6876` → after: `L6896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6896) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6876)

```diff
-             this.entityHooks.opened((0, eU.Tb)(XU)), UU.replayShaderPack(XU)
+             this.entityHooks.opened((0, mH.Wb)(BH)), HH.replayShaderPack(BH)
```

#### 794. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6880` → after: `L6900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6900) · [Before (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6880)

```diff
-             return null !== (UU = null === (zU = XU.lastHeader) || void 0 === zU ? void 0 : zU.renderPending) && void 0 !== UU ? UU : 0
+             return null !== (HH = null === (LH = BH.lastHeader) || void 0 === LH ? void 0 : LH.renderPending) && void 0 !== HH ? HH : 0
```

#### 795. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6882` → after: `L6902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6902) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6882)

```diff
-           viewerOpen: iy.e,
+           viewerOpen: gr.c,
```

#### 796. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6884` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6904) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6884)

```diff
-             (0, ry.d)(UU)
+             (0, cr.k)(HH)
```

#### 797. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6887` → after: `L6907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6907) · [Before (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6887)

```diff
-         this.runtime = NU, cU.replay = NU.sink, (0, Hy.r)(NU);
+         this.runtime = GH, AH.replay = GH.sink, (0, Nr.t)(GH);
```

#### 798. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6896-L6897` → after: `L6916-L6917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6916-L6917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6916-L6917) · [Before (L6896-L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6896-L6897)

```diff
-         this.freecam = IU, (0, Hy.o)(IU), this.recordedOptions = function(UU, XU) {
-           const zU = Ac.yb,
+         this.freecam = YH, (0, Nr.r)(YH), this.recordedOptions = function(HH, BH) {
+           const LH = hA.Ab,
```

#### 799. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6911` → after: `L6931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6931) · [Before (L6911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6911)

```diff
-         }(NU.recorder, UU.options), this.stops = [(0, tc.j)((UU => {
+         }(GH.recorder, HH.options), this.stops = [(0, WA.k)((HH => {
```

#### 800. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6918` → after: `L6938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6938) · [Before (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6918)

```diff
-         })), (0, tc.x)(((UU, XU) => {
+         })), (0, WA.z)(((HH, BH) => {
```

#### 801. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6937` → after: `L6957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6957) · [Before (L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6937)

```diff
-           zU && (null === (cU = (0, Hy.f)()) || void 0 === cU || cU.keyDown(XU))
+           LH && (null === (AH = (0, Nr.g)()) || void 0 === AH || AH.keyDown(BH))
```

#### 802. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6941` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6961) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6941)

```diff
-           return !0 === (null === UU || void 0 === UU ? void 0 : UU.isOpen) ? UU : null
+           return !0 === (null === HH || void 0 === HH ? void 0 : HH.isOpen) ? HH : null
```

#### 803. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6947` → after: `L6967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6967) · [Before (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6947)

```diff
-             return null !== (UU = null === (XU = pU()) || void 0 === XU ? void 0 : XU.id) && void 0 !== UU ? UU : null
+             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.id) && void 0 !== HH ? HH : null
```

#### 804. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6951` → after: `L6971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6971) · [Before (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6951)

```diff
-             return null !== (UU = null === (XU = pU()) || void 0 === XU ? void 0 : XU.saveRefusal) && void 0 !== UU ? UU : null
+             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.saveRefusal) && void 0 !== HH ? HH : null
```

#### 805. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6955` → after: `L6975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6975) · [Before (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6955)

```diff
-             return null !== (UU = null === (XU = pU()) || void 0 === XU ? void 0 : XU.save()) && void 0 !== UU ? UU : Promise.resolve(null)
+             return null !== (HH = null === (BH = uH()) || void 0 === BH ? void 0 : BH.save()) && void 0 !== HH ? HH : Promise.resolve(null)
```

#### 806. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6959` → after: `L6979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6979) · [Before (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6959)

```diff
-             return null !== (UU = null === (XU = NU.currentViewer) || void 0 === XU ? void 0 : XU.fileHandle) && void 0 !== UU ? UU : null
+             return null !== (HH = null === (BH = GH.currentViewer) || void 0 === BH ? void 0 : BH.fileHandle) && void 0 !== HH ? HH : null
```

#### 807. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6969` → after: `L6989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6989) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6969)

```diff
-           if (UU.phase === NU.E.Activated) {
+           if (HH.phase === GH.C.Activated) {
```

#### 808. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6973` → after: `L6993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6993) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6973)

```diff
-               lobbyType: (0, CU.s)(XU.lobbyName),
+               lobbyType: (0, oH.v)(BH.lobbyName),
```

#### 809. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6977` → after: `L6997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R6997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L6997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6997) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6977)

```diff
-           } else UU.phase !== NU.E.Left && UU.phase !== NU.E.Closed || UU.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else HH.phase !== GH.C.Left && HH.phase !== GH.C.Closed || HH.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 810. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6983` → after: `L7003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7003) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6983)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Hy.l)() === this.runtime && (0, Hy.r)(null), (0, Hy.h)() === this.freecam && (0, Hy.o)(null), (0, uy.h)(MF), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Nr.n)() === this.runtime && (0, Nr.t)(null), (0, Nr.j)() === this.freecam && (0, Nr.r)(null), (0, er.h)(Rt), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 811. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6996` → after: `L7016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7016) · [Before (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6996)

```diff
-             return XU.inPlayback || (0, tc.H)().leaveGame(null), XU
+             return BH.inPlayback || (0, WA.L)().leaveGame(null), BH
```

#### 812. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6999` → after: `L7019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7019) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L6999)

```diff
-           throw console.warn(`${wF} the replay viewer didn't load`, yU), new Error(fy.e.viewerLoadFailed.text)
+           throw console.warn(`${It} the replay viewer didn't load`, rH), new Error(qr.e.viewerLoadFailed.text)
```

#### 813. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7005` → after: `L7025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7025) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7005)

```diff
-     var nF = zU(2032);
+     var Dt = LH(2036);
```

#### 814. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7013` → after: `L7033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7033) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7013)

```diff
-           aux: UU.reset ? NU.dc.ResetFirst : 0,
+           aux: HH.reset ? GH.cc.ResetFirst : 0,
```

#### 815. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7017` → after: `L7037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7037) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7017)

```diff
-       UU.queueOptions(zU, cU) && (XU.reset && nF.d.reset(), nF.d.apply(XU.changes))
+       HH.queueOptions(LH, AH) && (BH.reset && Dt.e.reset(), Dt.e.apply(BH.changes))
```

#### 816. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7090-L7094` → after: `L7110-L7114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7110-L7114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7110-L7114) · [Before (L7090-L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7090-L7094)

```diff
-     var TF = zU(53654),
-       hF = zU(53661),
-       Uo = zU(42053),
-       Xo = zU(42098),
-       zo = zU(3176);
+     var yt = LH(37110),
+       Hz = LH(37157),
+       Bz = LH(42271),
+       Lz = LH(42307),
+       Az = LH(3171);
```

#### 817. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7098` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7118) · [Before (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7098)

```diff
-         this.host = UU, this.sets = new Map, this.table = [], this.generation = 0, this.kp = !1
+         this.host = HH, this.sets = new Map, this.table = [], this.generation = 0, this.Mu = !1
```

#### 818. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7102` → after: `L7122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7122) · [Before (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7102)

```diff
-           if (UU.byteLength !== NU.vd) return null;
+           if (HH.byteLength !== GH.pd) return null;
```

#### 819. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7109` → after: `L7129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7129) · [Before (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7109)

```diff
-         XU && !this.kp && (XU.release !== NU.wd && this.release(XU.release), XU.want !== NU.wd && this.want(XU.want))
+         BH && !this.Mu && (BH.release !== GH.qd && this.release(BH.release), BH.want !== GH.qd && this.want(BH.want))
```

#### 820. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7112` → after: `L7132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7132) · [Before (L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7112)

```diff
-         if (!this.kp) {
+         if (!this.Mu) {
```

#### 821. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7118-L7119` → after: `L7138-L7139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7138-L7139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7138-L7139) · [Before (L7118-L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7118-L7119)

```diff
-         if (this.kp) return;
-         this.kp = !0, this.generation++, this.table = [];
+         if (this.Mu) return;
+         this.Mu = !0, this.generation++, this.table = [];
```

#### 822. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7125` → after: `L7145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7145) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7125)

```diff
-             this.host.xcU(UU)
+             this.host.zrH(HH)
```

#### 823. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7142` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7162) · [Before (L7142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7142)

```diff
-         if (!zU || 1 !== zU.urls.length && zU.urls.length !== Ac.ic.CubeFaces) return this.host.sendReady(Fo(UU)), void this.host.onLoadFailed(UU, "", new Error(`no image set ${UU}`));
+         if (!LH || 1 !== LH.urls.length && LH.urls.length !== hA.ic.CubeFaces) return this.host.sendReady(zz(HH)), void this.host.onLoadFailed(HH, "", new Error(`no image set ${HH}`));
```

#### 824. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7160` → after: `L7180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7180) · [Before (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7160)

```diff
-           if (!oU || !zU.wanted) return this.kp ? void this.releaseAfterDispose(FU.map(Qo)) : (this.releaseAll(FU.map(Qo)), void(oU && this.sets.delete(UU)));
+           if (!zH || !LH.wanted) return this.Mu ? void this.releaseAfterDispose(tH.map(hz)) : (this.releaseAll(tH.map(hz)), void(zH && this.sets.delete(HH)));
```

#### 825. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7170-L7171` → after: `L7190-L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7190-L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7190-L7191) · [Before (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7170-L7171)

```diff
-           const zU = cU.map((UU => `${UU.width}x${UU.height}`));
-           return void this.host.onLoadFailed(UU, XU.urls[0], new Error(`set ${UU}'s images can't make its texture: ${zU.join(", ")}`))
+           const LH = AH.map((HH => `${HH.width}x${HH.height}`));
+           return void this.host.onLoadFailed(HH, BH.urls[0], new Error(`set ${HH}'s images can't make its texture: ${LH.join(", ")}`))
```

#### 826. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7187` → after: `L7207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7207) · [Before (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7187)

```diff
-         for (const XU of UU) this.host.xcU(XU)
+         for (const BH of HH) this.host.zrH(BH)
```

#### 827. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7191` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7191)

```diff
-           this.host.xcU(XU)
+           this.host.zrH(BH)
```

#### 828. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7217` → after: `L7237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7237) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7217)

```diff
-         zU = await (0, zo.Q)(UU)
+         LH = await (0, Az.M)(HH)
```

#### 829. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7219` → after: `L7239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7239) · [Before (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7219)

```diff
-         throw new Uo.e("fetch", UU, {
+         throw new Bz.b("fetch", HH, {
```

#### 830. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7252` → after: `L7272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7272) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7252)

```diff
-         throw new Uo.e("decode", UU, {
+         throw new Bz.b("decode", HH, {
```

#### 831. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7257` → after: `L7277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7277) · [Before (L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7257)

```diff
-         id: (0, Uo.r)(yU),
+         id: (0, Bz.i)(rH),
```

#### 832. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7262-L7266` → after: `L7282-L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7282-L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7282-L7286) · [Before (L7262-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7262-L7266)

```diff
-     var Eo = zU(2219),
-       Yo = zU(34686),
-       No = zU(40074);
-     const Io = Eo.d.length,
-       po = new Set([...Eo.d, "earth"]);
+     var Xz = LH(2227),
+       Gz = LH(34806),
+       Yz = LH(40184);
+     const uz = Xz.f.length,
+       Qz = new Set([...Xz.f, "earth"]);
```

#### 833. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7281` → after: `L7301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7301) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7281)

```diff
-               urls: (0, No.i)(yU),
+               urls: (0, Yz.f)(rH),
```

#### 834. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7291` → after: `L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7311) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7291)

```diff
-       Eo.d.forEach(((XU, zU) => {
+       Xz.f.forEach(((BH, LH) => {
```

#### 835. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7293` → after: `L7313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7313) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7293)

```diff
-         cU(zU, null !== (yU = to(UU[XU])) && void 0 !== yU ? yU : Yo.o[XU])
+         AH(LH, null !== (rH = Mz(HH[BH])) && void 0 !== rH ? rH : Gz.n[BH])
```

#### 836. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7304` → after: `L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7324) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7304)

```diff
-         XU.length > 255 ? FU.push(`Ignoring texture pack skybox ${IU}, whose name is over 255 bytes`) : AU.length === Ac.ic.MaxAdded ? FU.push(`Ignoring texture pack skybox ${IU}, past the ${Ac.ic.MaxAdded} skies a pack can add`) : (AU.push(XU), cU(Ac.ic.AddedId, UU))
+         BH.length > 255 ? tH.push(`Ignoring texture pack skybox ${YH}, whose name is over 255 bytes`) : hH.length === hA.ic.MaxAdded ? tH.push(`Ignoring texture pack skybox ${YH}, past the ${hA.ic.MaxAdded} skies a pack can add`) : (hH.push(BH), AH(hA.ic.AddedId, HH))
```

#### 837. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7308` → after: `L7328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7328) · [Before (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7308)

```diff
-         urls: Yo.g.map((UU => Yo.k + UU)),
+         urls: Gz.h.map((HH => Gz.l + HH)),
```

#### 838. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7311` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7331) · [Before (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7311)

```diff
-         urls: [Yo.n],
+         urls: [Gz.m],
```

#### 839. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7341` → after: `L7361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7361) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7341)

```diff
-             "number" === typeof oU && Number.isFinite(oU) && (XU.setFloat32(zU + Ac.s.CameraOffsetAt + 4 * QU, oU, !0), yU |= FU)
+             "number" === typeof zH && Number.isFinite(zH) && (BH.setFloat32(LH + hA.v.CameraOffsetAt + 4 * SH, zH, !0), rH |= tH)
```

#### 840. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7347` → after: `L7367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7367) · [Before (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7347)

```diff
-           XU.setUint32(zU + Ac.s.PresentAt, yU, !0), XU.setUint8(zU + Ac.s.FlagsAt, QU)
+           BH.setUint32(LH + hA.v.PresentAt, rH, !0), BH.setUint8(LH + hA.v.FlagsAt, SH)
```

#### 841. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7366` → after: `L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7386) · [Before (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7366)

```diff
-       })) ? UU : null
+       })) ? HH : null
```

#### 842. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7369-L7376` → after: `L7389-L7396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7389-L7396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7389-L7396) · [Before (L7369-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7369-L7376)

```diff
-         ["inclination", Ac.s.Inclination],
-         ["turbidity", Ac.s.Turbidity],
-         ["luminance", Ac.s.Luminance],
-         ["rayleigh", Ac.s.Rayleigh],
-         ["mieCoefficient", Ac.s.MieCoefficient],
-         ["mieDirectionalG", Ac.s.MieDirectionalG],
-         ["distance", Ac.s.Distance],
-         ["azimuth", Ac.s.Azimuth]
+         ["inclination", hA.v.Inclination],
+         ["turbidity", hA.v.Turbidity],
+         ["luminance", hA.v.Luminance],
+         ["rayleigh", hA.v.Rayleigh],
+         ["mieCoefficient", hA.v.MieCoefficient],
+         ["mieDirectionalG", hA.v.MieDirectionalG],
+         ["distance", hA.v.Distance],
+         ["azimuth", hA.v.Azimuth]
```

#### 843. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7379-L7381` → after: `L7399-L7401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7399-L7401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7399-L7401) · [Before (L7379-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7379-L7381)

```diff
-         ["sunPosition", Ac.s.SunPosition, Ac.s.SunPositionAt],
-         ["up", Ac.s.Up, Ac.s.UpAt],
-         ["vertexTint", Ac.s.VertexTint, Ac.s.VertexTintAt]
+         ["sunPosition", hA.v.SunPosition, hA.v.SunPositionAt],
+         ["up", hA.v.Up, hA.v.UpAt],
+         ["vertexTint", hA.v.VertexTint, hA.v.VertexTintAt]
```

#### 844. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7384-L7386` → after: `L7404-L7406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7404-L7406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7404-L7406) · [Before (L7384-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7384-L7386)

```diff
-         ["xCameraOffset", Ac.s.CameraOffsetX],
-         ["yCameraOffset", Ac.s.CameraOffsetY],
-         ["zCameraOffset", Ac.s.CameraOffsetZ]
+         ["xCameraOffset", hA.v.CameraOffsetX],
+         ["yCameraOffset", hA.v.CameraOffsetY],
+         ["zCameraOffset", hA.v.CameraOffsetZ]
```

#### 845. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7389-L7391` → after: `L7409-L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7409-L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7409-L7411) · [Before (L7389-L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7389-L7391)

```diff
-         ["useSunPosition", Ac.s.UseSunPosition],
-         ["dithering", Ac.s.Dithering],
-         ["infiniteDistance", Ac.s.InfiniteDistance]
+         ["useSunPosition", hA.v.UseSunPosition],
+         ["dithering", hA.v.Dithering],
+         ["infiniteDistance", hA.v.InfiniteDistance]
```

#### 846. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7421` → after: `L7441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7441) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7421)

```diff
-                       return "string" !== typeof UU ? null : null !== (XU = null === (zU = Wo.exec(UU)) || void 0 === zU || null === (cU = zU.groups) || void 0 === cU ? void 0 : cU.base64) && void 0 !== XU ? XU : null
+                       return "string" !== typeof HH ? null : null !== (BH = null === (LH = bz.exec(HH)) || void 0 === LH || null === (AH = LH.groups) || void 0 === AH ? void 0 : AH.base64) && void 0 !== BH ? BH : null
```

#### 847. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7425` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7445) · [Before (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7425)

```diff
-                 }(cU) || (zU(`Ignoring texture pack skybox ${XU}, whose faces are not all data URLs`, null), !1)
+                 }(AH) || (LH(`Ignoring texture pack skybox ${BH}, whose faces are not all data URLs`, null), !1)
```

#### 848. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7438` → after: `L7458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7458) · [Before (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7438)

```diff
-         this.host = UU, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.kp = !1, this.wait = null !== (XU = UU.wait) && void 0 !== XU ? XU : (UU, XU) => {
+         this.host = HH, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.Mu = !1, this.wait = null !== (BH = HH.wait) && void 0 !== BH ? BH : (HH, BH) => {
```

#### 849. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7441-L7442` → after: `L7461-L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7461-L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7461-L7462) · [Before (L7441-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7441-L7442)

```diff
-           loadImage: null !== (zU = UU.loadImage) && void 0 !== zU ? zU : Do,
-           xcU: null !== (cU = UU.xcU) && void 0 !== cU ? cU : Uo.v,
+           loadImage: null !== (LH = HH.loadImage) && void 0 !== LH ? LH : Ez,
+           zrH: null !== (AH = HH.zrH) && void 0 !== AH ? AH : Bz.k,
```

#### 850. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7450` → after: `L7470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7470) · [Before (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7450)

```diff
-             UU.warn(`sky image set ${XU} (${zU}) didn't load: the last sky stays`, cU)
+             HH.warn(`sky image set ${BH} (${LH}) didn't load: the last sky stays`, AH)
```

#### 851. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7459` → after: `L7479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7479) · [Before (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7459)

```diff
-           this.write(null !== UU && void 0 !== UU ? UU : {})
+           this.write(null !== HH && void 0 !== HH ? HH : {})
```

#### 852. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7472` → after: `L7492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7492) · [Before (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7472)

```diff
-         this.kp = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.Mu = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 853. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7475` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7495) · [Before (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7475)

```diff
-         if (this.kp) return;
+         if (this.Mu) return;
```

#### 854. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7491-L7506` → after: `L7511-L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7511-L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7511-L7526) · [Before (L7491-L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7491-L7506)

```diff
-     var Lo = zU(3076),
-       eo = zU(3318),
-       Co = zU(295),
-       wo = zU(193),
-       qo = zU(3080),
-       Oo = zU(3094),
-       So = zU(274),
-       ro = zU(281),
-       uo = zU(3198),
-       fo = zU(3231),
-       io = zU(3242),
-       Ho = zU(114),
-       Mo = zU(3286),
-       vo = zU(3280),
-       Vo = zU(316),
-       so = zU(41927);
+     var kz = LH(3064),
+       mz = LH(3310),
+       oz = LH(268),
+       Iz = LH(168),
+       fz = LH(3073),
+       lz = LH(3090),
+       Kz = LH(233),
+       cz = LH(241),
+       ez = LH(3193),
+       qz = LH(3223),
+       gz = LH(3235),
+       Nz = LH(101),
+       Rz = LH(3292),
+       jz = LH(3287),
+       nz = LH(293),
+       Fz = LH(42150);
```

#### 855. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7509-L7510` → after: `L7529-L7530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7529-L7530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7529-L7530) · [Before (L7509-L7510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7509-L7510)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, zQ.m)(Oc.L, (UU => {
-           this.onReply((0, XQ.d)(Oc.L, UU), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, LS.k)(lA.G, (HH => {
+           this.onReply((0, BS.f)(lA.G, HH), performance.now())
```

#### 856. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7514` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7534) · [Before (L7514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7514)

```diff
-         null === this.id ? this.id = UU : UU !== this.id && (this.id = UU, this.sentMs = document.hidden ? null : XU)
+         null === this.id ? this.id = HH : HH !== this.id && (this.id = HH, this.sentMs = document.hidden ? null : BH)
```

#### 857. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7583` → after: `L7603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7603) · [Before (L7583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7583)

```diff
-           yU = (zU >>> Ac.cb.LagsShift) - (this.word >>> Ac.cb.LagsShift) & Ac.cb.CountMask,
+           rH = (LH >>> hA.fb.LagsShift) - (this.word >>> hA.fb.LagsShift) & hA.fb.CountMask,
```

#### 858. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7586` → after: `L7606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7606) · [Before (L7586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7586)

```diff
-         this.word = zU, this.lagUs = cU, this.primed = !0, AU && XU && yU > 0 && 0 !== (zU & Ac.cb.Defaulted) && this.lags.add(QU, yU)
+         this.word = LH, this.lagUs = AH, this.primed = !0, hH && BH && rH > 0 && 0 !== (LH & hA.fb.Defaulted) && this.lags.add(SH, rH)
```

#### 859. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7595-L7601` → after: `L7615-L7621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7615-L7621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7615-L7621) · [Before (L7595-L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7595-L7601)

```diff
-     var Ko = zU(3194),
-       bo = zU(34807),
-       To = zU(3203),
-       ho = zU(41979),
-       UD = zU(34798),
-       XD = zU(3096),
-       zD = zU(3212);
+     var sz = LH(3187),
+       Jz = LH(34924),
+       iz = LH(3195),
+       pz = LH(42200),
+       yz = LH(34915),
+       HC = LH(3098),
+       BC = LH(3200);
```

#### 860. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7630` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7651) · [Before (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7630)

```diff
-         this.shell = UU, this.tracker = new Oo.c, this.gpu = new mo, this.pacing = new jo, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = HH, this.tracker = new lz.c, this.gpu = new wz, this.pacing = new az, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 861. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7632` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7653) · [Before (L7632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7632)

```diff
-         }), (UU => this.shell.RL(UU))), this.onVisibility = () => {
+         }), (HH => this.shell.Km(HH))), this.onVisibility = () => {
```

#### 862. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7636` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7657) · [Before (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7636)

```diff
-         }, (0, bo.c)(UU.backend, UU.canvas, UU.adapterVendor), this.tracker.start((() => !UU.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, XD.d)("wasm", (() => {
+         }, (0, Jz.b)(HH.backend, HH.canvas, HH.adapterVendor), this.tracker.start((() => !HH.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, HC.c)("wasm", (() => {
```

#### 863. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7641` → after: `L7662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7662) · [Before (L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7641)

```diff
-           return `${UU.backend}, quality steps aim at up to ${zD.b.target.maxFps} fps, pixel n ${XU}, msaa ${zU}`
+           return `${HH.backend}, quality steps aim at up to ${BC.b.target.maxFps} fps, pixel n ${BH}, msaa ${LH}`
```

#### 864. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7662` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7683) · [Before (L7662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7662)

```diff
-         const AU = UU.headerWord(Ac.I.TickUs) / 1e3 + (0, tc.L)();
+         const hH = HH.headerWord(hA.I.TickUs) / 1e3 + (0, WA.P)();
```

#### 865. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7664` → after: `L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7685) · [Before (L7664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7664)

```diff
-         (QU.aG(AU), null === (yU = this.frameDebug) || void 0 === yU || yU.wasmFrame(UU, XU, zU, cU, QU.isSampling(), AU), null !== this.game) && (null === (FU = this.frameDebug) || void 0 === FU || FU.inGame());
+         (SH.Dv(hH), null === (rH = this.frameDebug) || void 0 === rH || rH.wasmFrame(HH, BH, LH, AH, SH.isSampling(), hH), null !== this.game) && (null === (tH = this.frameDebug) || void 0 === tH || tH.inGame());
```

#### 866. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7714` → after: `L7735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7735) · [Before (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7714)

```diff
-           DU = oU ? AU : (0, qo.e)(AU),
+           CH = zH ? hH : (0, fz.d)(hH),
```

#### 867. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7718` → after: `L7739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7739) · [Before (L7718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7718)

```diff
-           IU = (0, fo.r)((0, fo.n)(YU), this.unsentPage),
+           YH = (0, qz.y)((0, qz.u)(XH), this.unsentPage),
```

#### 868. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7725` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7746) · [Before (L7725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7725)

```diff
-               tU = (0, uo.i)({
+               WH = (0, ez.j)({
```

#### 869. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7730` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7751) · [Before (L7730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7730)

```diff
-             for (const gU of (0, eo.d)()) {
+             for (const MH of (0, mz.c)()) {
```

#### 870. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7733` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7754) · [Before (L7733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7733)

```diff
-               if ((0, Co.B)(kU)) GU = (0, fo.b)(kU);
+               if ((0, oz.H)(xH)) vH = (0, qz.c)(xH);
```

#### 871. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7735` → after: `L7756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7756) · [Before (L7735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7735)

```diff
-               else if ((0, uo.j)(kU)) GU = tU[kU];
+               else if ((0, ez.n)(xH)) vH = WH[xH];
```

#### 872. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7740` → after: `L7761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7761) · [Before (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7740)

```diff
-                 case "QF":
+                 case "yt":
```

#### 873. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7743-L7744` → after: `L7764-L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7764-L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7764-L7765) · [Before (L7743-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7743-L7744)

```diff
-                 case "EF":
-                   GU = (0, To.z)((0, ho.d)().n);
+                 case "Sz":
+                   vH = (0, iz.G)((0, pz.d)().n);
```

#### 874. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7746` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7767) · [Before (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7746)

```diff
-                 case "YF":
+                 case "hz":
```

#### 875. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7749` → after: `L7770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7770) · [Before (L7749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7749)

```diff
-                 case "NF":
+                 case "tz":
```

#### 876. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7752` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7773) · [Before (L7752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7752)

```diff
-                 case "IF":
+                 case "zz":
```

#### 877. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7755` → after: `L7776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7776) · [Before (L7755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7755)

```diff
-                 case "pF":
+                 case "Cz":
```

#### 878. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7758` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7779) · [Before (L7758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7758)

```diff
-                 case "aF":
+                 case "Ez":
```

#### 879. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7761` → after: `L7782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7782) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7761)

```diff
-                 case "tF":
+                 case "Xz":
```

#### 880. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7764` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7785) · [Before (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7764)

```diff
-                 case "gF":
+                 case "Gz":
```

#### 881. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7767` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7788) · [Before (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7767)

```diff
-                 case "kF":
+                 case "Yz":
```

#### 882. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7770` → after: `L7791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7791) · [Before (L7770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7770)

```diff
-                 case "GF":
+                 case "uz":
```

#### 883. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7773` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7794) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7773)

```diff
-                 case "BF":
+                 case "Qz":
```

#### 884. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7776` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7797) · [Before (L7776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7776)

```diff
-                 case "ZF":
+                 case "Wz":
```

#### 885. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7779` → after: `L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7800) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7779)

```diff
-                 case "dF":
+                 case "Uz":
```

#### 886. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7782` → after: `L7803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7803) · [Before (L7782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7782)

```diff
-                 case "LF":
+                 case "Vz":
```

#### 887. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7785` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7806) · [Before (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7785)

```diff
-                 case "RF":
+                 case "Mz":
```

#### 888. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7788` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7809) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7788)

```diff
-                 case "PF":
+                 case "xz":
```

#### 889. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7791` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7812) · [Before (L7791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7791)

```diff
-                 case "WF":
+                 case "vz":
```

#### 890. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7794` → after: `L7815-L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7815-L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7815-L7821) · [Before (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7794)

```diff
-                 case "eF":
+                 case "Pz":
+                   vH = BH.framesOver50msPerMin;
+                   break;
+                 case "Tz":
+                   vH = BH.framesOver100msPerMin;
+                   break;
+                 case "Oz":
```

#### 891. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7797` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7824) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7797)

```diff
-                 case "CF":
+                 case "bz":
```

#### 892. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7827) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7800)

```diff
-                 case "wF":
+                 case "kz":
```

#### 893. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7803` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7830) · [Before (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7803)

```diff
-                 case "qF":
+                 case "mz":
```

#### 894. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7806-L7807` → after: `L7833-L7834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7833-L7834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7833-L7834) · [Before (L7806-L7807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7806-L7807)

```diff
-                 case "mF":
-                   GU = (0, Lo.j)(AU);
+                 case "jz":
+                   vH = (0, kz.i)(hH);
```

#### 895. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7809` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7836) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7809)

```diff
-                 case "DF":
+                 case "rz":
```

#### 896. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7812-L7826` → after: `L7839-L7853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7839-L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7839-L7853) · [Before (L7812-L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7812-L7826)

```diff
-                 case "SF":
-                 case "rF":
-                 case "uF":
-                 case "fF":
-                 case "iF":
-                 case "HF":
-                 case "MF":
-                 case "vF":
-                 case "VF":
-                 case "sF":
-                 case "nF":
-                 case "lF":
-                 case "xF":
-                 case "JF":
-                 case "jF":
+                 case "oz":
+                 case "Iz":
+                 case "fz":
+                 case "lz":
+                 case "Kz":
+                 case "cz":
+                 case "ez":
+                 case "qz":
+                 case "gz":
+                 case "Nz":
+                 case "Rz":
+                 case "nz":
+                 case "Fz":
+                 case "Dz":
+                 case "wz":
```

#### 897. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7829` → after: `L7856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7856) · [Before (L7829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7829)

```diff
-                 case "Eo":
+                 case "tC":
```

#### 898. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7832` → after: `L7859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7859) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7832)

```diff
-                 case "Yo":
+                 case "zC":
```

#### 899. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7835-L7836` → after: `L7862-L7863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7862-L7863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7862-L7863) · [Before (L7835-L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7835-L7836)

```diff
-                 case "Io":
-                   GU = so.e[UU.backend];
+                 case "CC":
+                   vH = Fz.b[HH.backend];
```

#### 900. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7838-L7839` → after: `L7865-L7866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7865-L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7865-L7866) · [Before (L7838-L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7838-L7839)

```diff
-                 case "po":
-                   GU = (0, Ho.c)();
+                 case "XC":
+                   vH = (0, Nz.d)();
```

#### 901. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7841` → after: `L7868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7868) · [Before (L7841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7841)

```diff
-                 case "ao":
+                 case "YC":
```

#### 902. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7844` → after: `L7871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7871) · [Before (L7844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7844)

```diff
-                 case "ko":
+                 case "uC":
```

#### 903. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7847-L7848` → after: `L7874-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7874-L7875) · [Before (L7847-L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7847-L7848)

```diff
-                 case "Go":
-                   GU = null !== (DU = cU.e.get("gameEntrySource")) && void 0 !== DU ? DU : wo.h;
+                 case "QC":
+                   vH = null !== (CH = AH.c.get("gameEntrySource")) && void 0 !== CH ? CH : Iz.f;
```

#### 904. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7850-L7851` → after: `L7877-L7878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878) · [Before (L7850-L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7850-L7851)

```diff
-                 case "Bo":
-                   GU = null !== (EU = XU.frameLimiter) && void 0 !== EU ? EU : wo.h;
+                 case "WC":
+                   vH = null !== (EH = BH.frameLimiter) && void 0 !== EH ? EH : Iz.f;
```

#### 905. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7853` → after: `L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7880) · [Before (L7853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7853)

```diff
-                 case "Zo":
+                 case "MC":
```

#### 906. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7856-L7857` → after: `L7883-L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884) · [Before (L7856-L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7856-L7857)

```diff
-                 case "Ro":
-                   GU = null !== (YU = (0, ro.b)()) && void 0 !== YU ? YU : wo.h;
+                 case "xC":
+                   vH = null !== (XH = (0, cz.e)()) && void 0 !== XH ? XH : Iz.f;
```

#### 907. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7859-L7860` → after: `L7886-L7887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7886-L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7886-L7887) · [Before (L7859-L7860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7859-L7860)

```diff
-                 case "Po":
-                   GU = (0, So.b)(aU.width, aU.height);
+                 case "vC":
+                   vH = (0, Kz.d)(QH.width, QH.height);
```

#### 908. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7862` → after: `L7889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7889) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7862)

```diff
-                 case "Wo":
+                 case "PC":
```

#### 909. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7865-L7866` → after: `L7892-L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7892-L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7892-L7893) · [Before (L7865-L7866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7865-L7866)

```diff
-                 case "ro":
-                   GU = null !== (NU = UU.fallbackReason) && void 0 !== NU ? NU : wo.h;
+                 case "kC":
+                   vH = null !== (GH = HH.fallbackReason) && void 0 !== GH ? GH : Iz.f;
```

#### 910. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7868` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7895) · [Before (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7868)

```diff
-                 case "Ho":
+                 case "IC":
```

#### 911. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7871` → after: `L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7898) · [Before (L7871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7871)

```diff
-                 case "Mo":
+                 case "fC":
```

#### 912. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7874-L7875` → after: `L7901-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7901-L7902) · [Before (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7874-L7875)

```diff
-                 case "Co":
-                   GU = (0, Mo.e)();
+                 case "UC":
+                   vH = (0, Rz.c)();
```

#### 913. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7877-L7878` → after: `L7904-L7905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7904-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7904-L7905) · [Before (L7877-L7878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7877-L7878)

```diff
-                 case "wo":
-                   GU = (0, vo.g)().replayState;
+                 case "VC":
+                   vH = (0, jz.e)().replayState;
```

#### 914. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7880-L7881` → after: `L7907-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7907-L7908) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7880-L7881)

```diff
-                 case "qo":
-                   GU = (0, vo.g)().replaySelection;
+                 case "OC":
+                   vH = (0, jz.e)().replaySelection;
```

#### 915. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7883` → after: `L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7910) · [Before (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7883)

```diff
-                 case "Oo":
+                 case "bC":
```

#### 916. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7886` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7913) · [Before (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7886)

```diff
-                 case "vo":
+                 case "lC":
```

#### 917. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7889` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7916) · [Before (L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7889)

```diff
-                 case "Vo": {
+                 case "KC": {
```

#### 918. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7894-L7895` → after: `L7921-L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7921-L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7921-L7922) · [Before (L7894-L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7894-L7895)

```diff
-                 case "mo":
-                   GU = Vo.F;
+                 case "cC":
+                   vH = nz.z;
```

#### 919. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7897-L7898` → after: `L7924-L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7924-L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7924-L7925) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7897-L7898)

```diff
-                 case "UD":
-                   GU = (0, fo.i)();
+                 case "nC":
+                   vH = (0, qz.j)();
```

#### 920. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7900-L7902` → after: `L7927-L7929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7927-L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7927-L7929) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7900-L7902)

```diff
-                 case "eo": {
-                   const XU = UU.ia();
-                   GU = null === XU ? wo.h : String(XU);
+                 case "TC": {
+                   const BH = HH.KQ();
+                   vH = null === BH ? Iz.f : String(BH);
```

#### 921. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7905-L7907` → after: `L7932-L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7932-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7932-L7934) · [Before (L7905-L7907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7905-L7907)

```diff
-                 case "uo":
-                 case "fo":
-                   GU = wo.h;
+                 case "mC":
+                 case "oC":
+                   vH = Iz.f;
```

#### 922. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7910` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7937) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7910)

```diff
-                   throw new Error(`Unhandled field name: ${kU}`)
+                   throw new Error(`Unhandled field name: ${xH}`)
```

#### 923. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7912` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7939) · [Before (L7912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7912)

```diff
-               if (void 0 === GU) throw new Error(`Metric ${kU} has no value`);
+               if (void 0 === vH) throw new Error(`Metric ${xH} has no value`);
```

#### 924. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7924-L7928` → after: `L7951-L7955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7951-L7955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7951-L7955) · [Before (L7924-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7924-L7928)

```diff
-             return (0, cz.e)(), UU(pU.l.Send, XU, zU)
-           }(this.shell.writeCmd, NU.ud, function(UU) {
-             const XU = (0, HU.e)((0, Az.c)(UU)),
-               zU = new Uint8Array(pU.be.BYTES + XU.length);
-             return new DataView(zU.buffer).setUint16(0, Az.b.AnalyticsUpdate, !0), zU.set(XU, pU.be.BYTES), zU
+             return (0, AL.b)(), HH(uH.q.Send, BH, LH)
+           }(this.shell.writeCmd, GH.nd, function(HH) {
+             const BH = (0, RH.g)((0, hL.f)(HH)),
+               LH = new Uint8Array(uH.ge.BYTES + BH.length);
+             return new DataView(LH.buffer).setUint16(0, hL.d.AnalyticsUpdate, !0), LH.set(BH, uH.ge.BYTES), LH
```

#### 925. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7930` → after: `L7957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7957) · [Before (L7930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7930)

```diff
-         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, Lo.g), (0, fo.m)(aU, "wasm", YU)
+         this.unsentPage = null, this.pendingLightFailures -= Math.min(this.pendingLightFailures, kz.h), (0, qz.r)(QH, "wasm", XH)
```

#### 926. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7933` → after: `L7960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7960) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7933)

```diff
-     var AD = zU(40504);
+     var SC = LH(40657);
```

#### 927. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7937-L7939` → after: `L7964-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7964-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7964-L7966) · [Before (L7937-L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7937-L7939)

```diff
-       return (0, AD.c)(((UU, zU, cU) => XU.yF(UU, zU, cU)), ((XU, zU, yU) => {
-         const QU = `${XU},${zU},${yU}`;
-         return cU.has(QU) || cU.set(QU, (0, xX.c)(UU, XU, zU, yU)), cU.get(QU)
+       return (0, SC.d)(((HH, LH, AH) => BH.ph(HH, LH, AH)), ((BH, LH, rH) => {
+         const SH = `${BH},${LH},${rH}`;
+         return AH.has(SH) || AH.set(SH, (0, dB.d)(HH, BH, LH, rH)), AH.get(SH)
```

#### 928. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7942-L7943` → after: `L7969-L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7969-L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7969-L7970) · [Before (L7942-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7942-L7943)

```diff
-     var oD = zU(40510),
-       DD = zU(41976);
+     var tC = LH(40661),
+       zC = LH(42192);
```

#### 929. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7946` → after: `L7973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7973) · [Before (L7946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7946)

```diff
-       const XU = null !== UU && 0 !== (pU.w.playerFlags(UU.api.apiView, 0) & pU.Od.CursorAim);
+       const BH = null !== HH && 0 !== (uH.y.playerFlags(HH.api.apiView, 0) & uH.Md.CursorAim);
```

#### 930. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7951` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7978) · [Before (L7951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7951)

```diff
-       return (0, qc.d)(Oc.G, UU)
+       return (0, fA.d)(lA.C, HH)
```

#### 931. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7953-L7954` → after: `L7980-L7981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7980-L7981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7980-L7981) · [Before (L7953-L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7953-L7954)

```diff
-     var ND = zU(42133);
-     const ID = new QU.f((UU => zU(53669)(`./${UU}/${UU}Client`)));
+     var XC = LH(42343);
+     const GC = new SH.e((HH => LH(54469)(`./${HH}/${HH}Client`)));
```

#### 932. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7958` → after: `L7985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L7985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7985) · [Before (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7958)

```diff
-       pD ??= zU.e(32).then((() => zU(39983))).then((UU => {
+       YC ??= LH.e(32).then((() => LH(40091))).then((HH => {
```

#### 933. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7991-L7992` → after: `L8018-L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8018-L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8018-L8019) · [Before (L7991-L7992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L7991-L7992)

```diff
-         return UU.crash(Sy.C, NU), null
-       }(0, oU.f)(Oy(zU, QU));
+         return HH.crash(Kr.x, GH), null
+       }(0, zH.g)(lr(LH, SH));
```

#### 934. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8004` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8031) · [Before (L8004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8004)

```diff
-       (0, tc.y)();
+       (0, WA.D)();
```

#### 935. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8037-L8038` → after: `L8064-L8065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8064-L8065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8064-L8065) · [Before (L8037-L8038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8037-L8038)

```diff
-           BD(yU.m), BD(ty), BD((() => {
-             cU.e.set({
+           vC(rH.i), vC(Wr), vC((() => {
+             AH.c.set({
```

#### 936. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8050` → after: `L8078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8078) · [Before (L8050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8050)

```diff
-         screenBandY: FU.l,
+         screenBandY: tH.k,
```

#### 937. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L8060-L8062` → after: `L8088-L8090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R8088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L8088-L8090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8088-L8090) · [Before (L8060-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L8060-L8062)

```diff
-           (0, AU.n)("userContextUpdated", XU)
-         }(YU), kD || (kD = !0, (0, AU.n)("appManagerUpdated|openInGameMenuName", (UU => {
-           !UU && (0, DU.p)().includes(DU.c) && (0, DU.s)(DU.c)
+           (0, hH.m)("userContextUpdated", BH)
+         }(XH), MC || (MC = !0, (0, hH.m)("appManagerUpdated|openInGameMenuName", (HH => {
+           !HH && (0, CH.p)().includes(CH.d) && (0, CH.t)(CH.d)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L4)

```diff
-   41685: (UU, XU, zU) => {
+   41946: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L6-L7)

```diff
-       d: () => yU,
-       e: () => EU
+       e: () => rH,
+       g: () => EH
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L14)

```diff
-       if (XU.at !== UU.length) throw new Error(`msgpack: ${UU.length-XU.at} bytes after the value`);
+       if (BH.at !== HH.length) throw new Error(`msgpack: ${HH.length-BH.at} bytes after the value`);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L92)

```diff
-             throw new Error(`msgpack: unknown byte 0x${UU.toString(16)} at ${this.at-1}`)
+             throw new Error(`msgpack: unknown byte 0x${HH.toString(16)} at ${this.at-1}`)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L97)

```diff
-         if (XU + UU > this.bytes.length) throw new Error(`msgpack: ${UU} bytes past the end at ${XU}`);
+         if (BH + HH > this.bytes.length) throw new Error(`msgpack: ${HH} bytes past the end at ${BH}`);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L169)

```diff
-           throw new Error(`msgpack: ext type ${XU} of ${UU} bytes`)
+           throw new Error(`msgpack: ext type ${BH} of ${HH} bytes`)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L210)

```diff
-               if (Object.getPrototypeOf(UU) !== Object.prototype && null !== Object.getPrototypeOf(UU)) throw new Error(`msgpack: can't encode a ${null!==(zU=null===(cU=UU.constructor)||void 0===cU?void 0:cU.name)&&void 0!==zU?zU:"object"}`);
+               if (Object.getPrototypeOf(HH) !== Object.prototype && null !== Object.getPrototypeOf(HH)) throw new Error(`msgpack: can't encode a ${null!==(LH=null===(AH=HH.constructor)||void 0===AH?void 0:AH.name)&&void 0!==LH?LH:"object"}`);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L255)

```diff
-   53743: (UU, XU, zU) => {
+   54546: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L261-L268` → after: `L261-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L261-L268) · [Before (L261-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L261-L268)

```diff
-     var cU = zU(173),
-       yU = zU(1220),
-       QU = zU(37201),
-       AU = zU(41685),
-       FU = zU(5318),
-       oU = zU(41750),
-       DU = zU(42004);
-     const EU = Uint8Array.of(13, ...(0, AU.e)(cU.h));
+     var AH = LH(152),
+       rH = LH(1148),
+       SH = LH(37366),
+       hH = LH(41946),
+       tH = LH(5265),
+       zH = LH(42006),
+       CH = LH(42228);
+     const EH = Uint8Array.of(13, ...(0, hH.g)(AH.f));
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L290)

```diff
-       } = zU, AU = () => (0, DU.f)(XU.endpoint, XU.roomName, XU.joinOptions, zU), {
+       } = LH, hH = () => (0, CH.h)(BH.endpoint, BH.roomName, BH.joinOptions, LH), {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L292-L293` → after: `L292-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L292-L293) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L292-L293)

```diff
-       } = zU, oU = FU ? null !== (cU = await FU.take(QU)) && void 0 !== cU ? cU : await FU.reserveInstead(AU, QU) : await AU();
-       return (0, yU.l)(QU), tU(UU, XU.endpoint, oU, zU, !1)
+       } = LH, zH = tH ? null !== (AH = await tH.take(SH)) && void 0 !== AH ? AH : await tH.reserveInstead(hH, SH) : await hH();
+       return (0, rH.t)(SH), WH(HH, BH.endpoint, zH, LH, !1)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L297-L298` → after: `L297-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L297-L298) · [Before (L297-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L297-L298)

```diff
-       const AU = await (0, DU.d)(XU, zU, cU, QU);
-       return (0, yU.l)(QU.signal), tU(UU, XU, AU, QU, !0)
+       const hH = await (0, CH.f)(BH, LH, AH, SH);
+       return (0, rH.t)(SH.signal), WH(HH, BH, hH, SH, !0)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L302)

```diff
-       const cU = (0, DU.j)(UU, XU);
+       const AH = (0, CH.l)(HH, BH);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L309)

```diff
-       return (null !== (cU = UU.setTimer) && void 0 !== cU ? cU : (UU, XU) => {
+       return (null !== (AH = HH.setTimer) && void 0 !== AH ? AH : (HH, BH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L329` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L329) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L329)

```diff
-         GU = !0, null === (XU = tU) || void 0 === XU || XU.reject(new oU.c("the room socket closed before the resume", "closed", UU.code))
+         vH = !0, null === (BH = WH) || void 0 === BH || BH.reject(new zH.d("the room socket closed before the resume", "closed", HH.code))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L334-L336` → after: `L334-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L334-L336) · [Before (L334-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L334-L336)

```diff
-           if (UU === (AU ? FU.E.Resumed : FU.E.Activated)) kU = !0, null === (zU = tU) || void 0 === zU || zU.resolve();
-           else if (!AU || UU !== FU.E.ResumeRefused && UU !== FU.E.Activated)
-             if (UU === FU.E.Error) {
+           if (HH === (hH ? tH.C.Resumed : tH.C.Activated)) xH = !0, null === (LH = WH) || void 0 === LH || LH.resolve();
+           else if (!hH || HH !== tH.C.ResumeRefused && HH !== tH.C.Activated)
+             if (HH === tH.C.Error) {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L338` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L338) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L338)

```diff
-               null === (cU = tU) || void 0 === cU || cU.reject(new oU.c(`the room refused the join (code ${XU})`, "roomError", XU))
+               null === (AH = WH) || void 0 === AH || AH.reject(new zH.d(`the room refused the join (code ${BH})`, "roomError", BH))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L341)

```diff
-               null === (yU = tU) || void 0 === yU || yU.reject(new oU.c("the room socket closed before the join", "closed", XU, null, NU))
+               null === (rH = WH) || void 0 === rH || rH.reject(new zH.d("the room socket closed before the join", "closed", BH, null, GH))
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L352)

```diff
-       if (null === PU) throw RU(), new oU.c("the core could not take the room socket", "attach");
+       if (null === VH) throw UH(), new zH.d("the core could not take the room socket", "attach");
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L367-L368` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L367-L368) · [Before (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L367-L368)

```diff
-         if (LU = !0, RU(), AU && (YU.removeEventListener("close", BU), !kU && !(null !== DU && void 0 !== DU && DU.aborted && (0, yU.e)(DU) instanceof oU.q))) return void(GU || UU.closeSocket(PU));
-         kU && UU.leaveRoom(PU) || UU.sendRaw(PU, oU.k) ? aU(cU, (() => {
+         if (kH = !0, UH(), hH && (XH.removeEventListener("close", PH), !xH && !(null !== CH && void 0 !== CH && CH.aborted && (0, rH.g)(CH) instanceof zH.q))) return void(vH || HH.closeSocket(VH));
+         xH && HH.leaveRoom(VH) || HH.sendRaw(VH, zH.m) ? QH(AH, (() => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L370` → after: `L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L370) · [Before (L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L370)

```diff
-         }), oU.g) : UU.closeSocket(PU)
+         }), zH.f) : HH.closeSocket(VH)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L377)

```diff
-             zU((0, yU.e)(DU))
+             LH((0, rH.g)(CH))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L410)

```diff
-         const yU = pU(UU, await (0, DU.d)(UU, XU, zU, cU), cU);
+         const rH = uH(HH, await (0, CH.f)(HH, BH, LH, AH), AH);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L414)

```diff
-           }), oU.g);
+           }), zH.f);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-626e0b16128975164c9cad266e2c422cedc1a4221b732ea14f18eb62f344a413) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientJoin.js#L416)

```diff
-             yU.send(oU.k)
+             rH.send(zH.m)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (20 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L4)

```diff
-   37514: (UU, XU, zU) => {
+   37652: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L9)

```diff
-       if (!XU.ok) throw new Error(`Fetching ${UU} failed: HTTP ${XU.status}`);
+       if (!BH.ok) throw new Error(`Fetching ${HH} failed: HTTP ${BH.status}`);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L17)

```diff
-   42151: (UU, XU, zU) => {
+   42355: (HH, BH, LH) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L20)

```diff
-       probeWebgl2AheadOfJoin: () => EU.R,
+       probeWebgl2AheadOfJoin: () => EH.S,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L24-L33` → after: `L24-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L24-L33) · [Before (L24-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L24-L33)

```diff
-     var cU = zU(3169),
-       yU = zU(37014),
-       QU = zU(41959),
-       AU = zU(1325),
-       FU = zU(41795),
-       oU = (zU(41865), zU(37514)),
-       DU = zU(2217),
-       EU = zU(41786),
-       YU = zU(42084),
-       NU = zU(41947);
+     var AH = LH(3168),
+       rH = LH(37083),
+       SH = LH(42172),
+       hH = LH(1260),
+       tH = LH(42034),
+       zH = (LH(42101), LH(37652)),
+       CH = LH(2224),
+       EH = LH(42032),
+       XH = LH(42295),
+       GH = LH(37177);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L44)

```diff
-         const UU = await (0, EU.N)();
+         const HH = await (0, EH.R)();
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L46-L47` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L46-L47) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L46-L47)

```diff
-         if ((0, FU.r)(UU)) return (0, EU.T)("none"), void BU("none");
-         (0, EU.T)(UU.backend);
+         if ((0, tH.k)(HH)) return (0, EH.W)("none"), void PH("none");
+         (0, EH.W)(HH.backend);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L50-L51` → after: `L50-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L50-L51) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L50-L51)

```diff
-         const zU = "unloaded" === (0, cU.A)();
-         if (zU && (0, EU.l)(), !await (0, YU.e)(XU)) return void console.warn(`${IU} the join's early wasm load failed: the boot loads the client itself`);
+         const LH = "unloaded" === (0, AH.B)();
+         if (LH && (0, EH.o)(), !await (0, XH.d)(BH)) return void console.warn(`${YH} the join's early wasm load failed: the boot loads the client itself`);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L59)

```diff
-         }) : console.warn(`${IU} the join's wasm load left no record of how it compiled ${XU.name}`)
+         }) : console.warn(`${YH} the join's wasm load left no record of how it compiled ${BH.name}`)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L61)

```diff
-         console.warn(`${IU} the join's early wasm load did not start: the boot loads the client itself`, UU)
+         console.warn(`${YH} the join's early wasm load did not start: the boot loads the client itself`, HH)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L78)

```diff
-         const zU = null !== (XU = UU.joinStarted) && void 0 !== XU ? XU : () => !1;
+         const LH = null !== (BH = HH.joinStarted) && void 0 !== BH ? BH : () => !1;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L87-L88` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L87-L88) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L87-L88)

```diff
-         const XU = await (0, EU.i)();
-         null === XU || UU() || "unloaded" !== (0, cU.A)() || (kU = XU.name, await (0, yU.e)([XU, QU.g], "low"))
+         const BH = await (0, EH.j)();
+         null === BH || HH() || "unloaded" !== (0, AH.B)() || (xH = BH.name, await (0, rH.d)([BH, SH.e], "low"))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L90)

```diff
-         console.warn(`${IU} the compile ahead of the join did not start: the join loads the client itself`, UU)
+         console.warn(`${YH} the compile ahead of the join did not start: the join loads the client itself`, HH)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L105-L106` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L105-L106) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L105-L106)

```diff
-               const UU = await fetch((0, DU.f)("static/js/fecih8.wasmJoinFiles.json"), {
-                 ...DU.d,
+               const HH = await fetch((0, CH.c)("static/js/cwj32u.wasmJoinFiles.json"), {
+                 ...CH.b,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L109-L110` → after: `L109-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L109-L110) · [Before (L109-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L109-L110)

```diff
-               if (UU.ok && /\bno-store\b/.test(null !== (zU = UU.headers.get("Cache-Control")) && void 0 !== zU ? zU : "")) return !1;
-               XU = await (0, DU.g)(UU)
+               if (HH.ok && /\bno-store\b/.test(null !== (LH = HH.headers.get("Cache-Control")) && void 0 !== LH ? LH : "")) return !1;
+               BH = await (0, CH.d)(HH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L112)

```diff
-               return console.warn(`${IU} the join's chunk list did not load: the join downloads its chunks itself`, yU), !UU()
+               return console.warn(`${YH} the join's chunk list did not load: the join downloads its chunks itself`, rH), !HH()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L117)

```diff
-               const UU = (0, DU.f)(QU);
+               const HH = (0, CH.c)(SH);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L119` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L119) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L119)

```diff
-                 console.warn(`${IU} prefetching ${UU} failed`, XU)
+                 console.warn(`${YH} prefetching ${HH} failed`, BH)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L124-L125` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L124-L125) · [Before (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L124-L125)

```diff
-         const zU = [(0, oU.c)((0, NU.e)())];
-         (0, NU.d)(XU) && zU.push((0, oU.c)((0, NU.f)()));
+         const LH = [(0, zH.c)((0, GH.h)())];
+         (0, GH.e)(BH) && LH.push((0, zH.c)((0, GH.k)()));
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-4f1116cd5f0742f13efcb1456cda8d6f59897d1e296e99d1629e3bc53e87999c) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientLoad.js#L128)

```diff
-         console.warn(`${IU} the prefetch failed: the join downloads the client itself`, UU)
+         console.warn(`${YH} the prefetch failed: the join downloads the client itself`, HH)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (137 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47)

#### 1. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L4)

```diff
-   39994: (UU, XU, zU) => {
+   40108: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L14)

```diff
-           xY: XU.xY,
+           aX: BH.aX,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L32)

```diff
-       c: () => yU
+       b: () => rH
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L35)

```diff
-   39954: (UU, XU, zU) => {
+   40066: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L38-L40` → after: `L38-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L38-L40) · [Before (L38-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L38-L40)

```diff
-       g: () => DU,
-       k: () => oU,
-       m: () => AU
+       d: () => CH,
+       h: () => zH,
+       i: () => hH
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L42)

```diff
-     var cU = zU(220);
+     var AH = LH(186);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L51)

```diff
-       return null !== (XU = (0, cU.b)(AU, UU)) && void 0 !== XU ? XU : null
+       return null !== (BH = (0, AH.d)(hH, HH)) && void 0 !== BH ? BH : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L56)

```diff
-       return null !== (XU = (0, cU.b)(FU, UU)) && void 0 !== XU ? XU : null
+       return null !== (BH = (0, AH.d)(tH, HH)) && void 0 !== BH ? BH : null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L59)

```diff
-   39453: (UU, XU, zU) => {
+   39550: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L62)

```diff
-       g: () => QU
+       e: () => SH
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L72-L417` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L72) · [Before (L72-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L72-L417)

```diff
-       return null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
-     }
-   },
-   39472: (UU, XU, zU) => {
-     zU.d(XU, {
-       d: () => FU
-     });
-     var cU = zU(1236);
- 
-     function yU(UU) {
-       const XU = /(\d*\.?\d+)px/.exec(UU);
-       return XU ? Number(XU[1]) : null
-     }
- 
-     function QU(UU) {
-       return UU.split(/[\s,]+/).pop()
- ... (330 more removed lines; see GitHub link above)
+       return null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L420` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L75) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L420)

```diff
-   42292: (UU, XU, zU) => {
+   37105: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L428` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L83) · [Before (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L428)

```diff
-       let [QU, AU] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [UU, XU], FU = Math.min(Number.isFinite(zU) && zU > 0 ? zU : 1, yU);
+       let [SH, hH] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [HH, BH], tH = Math.min(Number.isFinite(LH) && LH > 0 ? LH : 1, rH);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L433` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L88) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L433)

```diff
-   53727: (UU, XU, zU) => {
+   54528: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L440-L441` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L95-L96) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L440-L441)

```diff
-     var cU = zU(3176),
-       yU = zU(654);
+     var AH = LH(3171),
+       rH = LH(625);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L451` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L106) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L451)

```diff
-         XU.wasm = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.sY()) && void 0 !== zU ? zU : XU.wasm
+         BH.wasm = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.wX()) && void 0 !== LH ? LH : BH.wasm
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L460` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L115) · [Before (L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L460)

```diff
-         } = await Promise.resolve().then((() => zU(3116)));
+         } = await Promise.resolve().then((() => LH(3112)));
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L468` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L123) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L468)

```diff
-       Promise.resolve().then((() => zU(41840))).then((zU => {
+       Promise.resolve().then((() => LH(42075))).then((LH => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L474` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L129) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L474)

```diff
-         console.warn(`${QU} ${UU} didn't load, and the report couldn't be sent`, cU.error, XU)
+         console.warn(`${SH} ${HH} didn't load, and the report couldn't be sent`, AH.error, BH)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L514` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L169) · [Before (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L514)

```diff
-             const zU = UU.EAU(XU);
+             const LH = HH.VhH(BH);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L533` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L188) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L533)

```diff
-         fetch: async () => FU(await (0, cU.Q)(IU(), {
+         fetch: async () => tH(await (0, AH.M)(YH(), {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L546` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L201) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L546)

```diff
-       return zU(53736)
+       return LH(54537)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L548-L572` → after: `L203-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L203-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L203-L228) · [Before (L548-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L548-L572)

```diff
-     var pU = zU(3169),
-       aU = zU(1203),
-       tU = zU(318),
-       gU = zU(316),
-       kU = zU(687),
-       GU = zU(5318),
-       BU = zU(41795),
-       ZU = zU(41823),
-       RU = zU(42038),
-       PU = (zU(41865), zU(41877)),
-       WU = zU(41886),
-       dU = zU(41889),
-       LU = zU(41808),
-       eU = zU(42068),
-       CU = zU(42070),
-       wU = zU(41786),
- ... (9 more removed lines; see GitHub link above)
+     var uH = LH(3168),
+       QH = LH(1131),
+       WH = LH(297),
+       MH = LH(293),
+       xH = LH(642),
+       vH = LH(5265),
+       PH = LH(42034),
+       TH = LH(42060),
+       UH = LH(42259),
+       VH = (LH(42101), LH(37100)),
+       OH = LH(42117),
+       bH = LH(42125),
+       kH = LH(42129),
+       mH = LH(42049),
+       oH = LH(42275),
+       IH = LH(42281),
+ ... (10 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L586-L588` → after: `L242-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L242-L244) · [Before (L586-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L586-L588)

```diff
-         zU = (0, BU.Y)(UU),
-         cU = (0, BU.p)(UU);
-       return null !== zU && null !== cU && "function" === typeof XU.FAU && "function" === typeof XU.oAU && "function" === typeof XU.DAU ? XU : null
+         LH = (0, PH.M)(HH),
+         AH = (0, PH.j)(HH);
+       return null !== LH && null !== AH && "function" === typeof BH.PhH && "function" === typeof BH.ThH && "function" === typeof BH.UhH ? BH : null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L592` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L248) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L592)

```diff
-       return zU(53738)
+       return LH(54541)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L597-L599` → after: `L253-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L253-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L253-L255) · [Before (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L597-L599)

```diff
-       "lost" === UU && (0, wU.u)();
-       const FU = await (0, wU.N)();
-       if (null === FU || (0, BU.r)(FU) || (0, wU.c)()) return;
+       "lost" === HH && (0, fH.w)();
+       const tH = await (0, fH.R)();
+       if (null === tH || (0, PH.k)(tH) || (0, fH.e)()) return;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L602-L604` → after: `L258-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L258-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L258-L260) · [Before (L602-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L602-L604)

```diff
-       const DU = oU && (0, gU.o)(FU.adapter, null !== cU && void 0 !== cU ? cU : null, "lost" === UU, QU),
-         EU = null !== (yU = "lost" === UU ? (0, ZU.j)((0, pU.T)() ? (0, BU.Y)((0, pU.E)()) : null) : void 0) && void 0 !== yU ? yU : XU,
-         YU = oU ? (0, BU.lb)(UU, void 0, (0, ZU.c)(EU)) : null;
+       const CH = zH && (0, MH.q)(tH.adapter, null !== AH && void 0 !== AH ? AH : null, "lost" === HH, SH),
+         EH = null !== (rH = "lost" === HH ? (0, TH.i)((0, uH.U)() ? (0, PH.M)((0, uH.D)()) : null) : void 0) && void 0 !== rH ? rH : BH,
+         XH = zH ? (0, PH.X)(HH, void 0, (0, TH.c)(EH)) : (0, xH.v)() ? null : xH.f;
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L606` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L262) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L606)

```diff
-         oU || (0, kU.y)(), (0, wU.n)();
+         (0, fH.q)();
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L613` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L269) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L613)

```diff
-             const DU = (0, pU.T)(),
+             const CH = (0, uH.U)(),
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L617-L618` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L273-L274) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L617-L618)

```diff
-               } = await Promise.resolve().then((() => zU(41840)));
-             YU(UU.backend, yU, AU(DU ? (0, pU.E)() : null), {
+               } = await Promise.resolve().then((() => LH(42075)));
+             XH(HH.backend, rH, hH(CH ? (0, uH.D)() : null), {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L625` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L281) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L625)

```diff
-           }(FU, UU, EU, null !== cU && void 0 !== cU ? cU : "start_failed" === UU ? 0 : 1, {
+           }(tH, HH, EH, null !== AH && void 0 !== AH ? AH : "start_failed" === HH ? 0 : 1, {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L630-L631` → after: `L286-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L286-L287) · [Before (L630-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L630-L631)

```diff
-           console.warn(`${vU} ${FU.backend} failed at home (${UU}), and its report couldn't be sent`, IU)
-         }(0, OU.l)()
+           console.warn(`${nH} ${tH.backend} failed at home (${HH}), and its report couldn't be sent`, YH)
+         }(0, KH.f)()
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L635-L636` → after: `L291-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L291-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L291-L295) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L635-L636)

```diff
-           cU = `WebGPU failed at home (${UU}${void 0===XU.error?"":`: ${XU.error instanceof Error?XU.error.message:(0,iU.l)(XU.error)}`}) and ${YU}`;
-         console.warn(`${vU} ${cU}: the previews stop`, null !== (NU = XU.error) && void 0 !== NU ? NU : ""), (0, wU.p)(cU);
+           AH = `${zH?"WebGPU":"WebGL"} failed at home (${HH}${void 0===BH.error?"":`: ${BH.error instanceof Error?BH.error.message:(0,NH.k)(BH.error)}`}) and ${XH}`;
+         console.warn(`${nH} ${AH}: the previews stop`, null !== (GH = BH.error) && void 0 !== GH ? GH : ""), (0, fH.u)({
+           why: AH,
+           webgpu: zH
+         });
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L640` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L299) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L640)

```diff
-           } = await Promise.resolve().then((() => zU(41840)));
+           } = await Promise.resolve().then((() => LH(42075)));
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L643` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L302) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L643)

```diff
-           console.warn(`${vU} WebGPU failed at home (${UU}), and its count couldn't be sent`, aU)
+           console.warn(`${nH} ${tH.backend} failed at home (${HH}), and its count couldn't be sent`, QH)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L656-L658` → after: `L315-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L315-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L315-L317) · [Before (L656-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L656-L658)

```diff
-           boundAtMs: "start_failed" === XU ? null : (0, wU.I)(),
-           indirectHangs: (0, wU.v)(),
-           restoresSkipped: (0, wU.M)()
+           boundAtMs: "start_failed" === BH ? null : (0, fH.N)(),
+           indirectHangs: (0, fH.z)(),
+           restoresSkipped: (0, fH.Q)()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L663-L666` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L322-L325) · [Before (L663-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L663-L666)

```diff
-       if (!(0, pU.T)()) {
-         const UU = await (0, wU.N)();
-         if (null === UU || (0, BU.r)(UU)) return null;
-         if (await (0, qU.e)(await UU.load()), !(0, pU.T)()) return null
+       if (!(0, uH.U)()) {
+         const HH = await (0, fH.R)();
+         if (null === HH || (0, PH.k)(HH)) return null;
+         if (await (0, lH.d)(await HH.load()), !(0, uH.U)()) return null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L668` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L327) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L668)

```diff
-       return bU((0, pU.E)())
+       return pH((0, uH.D)())
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L677` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L336) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L677)

```diff
-               return null !== (XU = this.models.drawnUrl(UU)) && void 0 !== XU ? XU : QU.images.glbUrl(UU)
+               return null !== (BH = this.models.drawnUrl(HH)) && void 0 !== BH ? BH : SH.images.glbUrl(HH)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L681-L682` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L340-L341) · [Before (L681-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L681-L682)

```diff
-         this.images = new RU.g(AU, (UU => {
-           console.warn(`${vU} image ${UU.key.kind}:${UU.key.index}:${UU.key.word} failed`, UU.error)
+         this.images = new UH.f(hH, (HH => {
+           console.warn(`${nH} image ${HH.key.kind}:${HH.key.index}:${HH.key.word} failed`, HH.error)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L686-L687` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L345-L346) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L686-L687)

```diff
-         }), UU.startModels(), this.models = new PU.i(QU.files, ((XU, zU) => UU.buildModel(XU, zU)), (UU => {
-           console.warn(`${vU} model file ${UU.file} (${UU.url}) failed`, UU.error)
+         }), HH.startModels(), this.models = new OH.k(SH.files, ((BH, LH) => HH.buildModel(BH, LH)), (HH => {
+           console.warn(`${nH} model file ${HH.file} (${HH.url}) failed`, HH.error)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L698-L699` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L357-L358) · [Before (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L698-L699)

```diff
-           if (UU === PU.e) {
-             const UU = new DataView(zU.buffer, zU.byteOffset, dU.c),
+           if (HH === OH.d) {
+             const HH = new DataView(LH.buffer, LH.byteOffset, kH.b),
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L702` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L361) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L702)

```diff
-               QU = this.page.hostCall(KU, (() => this.host.aFU(this.id, cU, XU, zU.subarray(dU.c))));
+               SH = this.page.hostCall(iH, (() => this.host.otH(this.id, AH, BH, LH.subarray(kH.b))));
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L706` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L365) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L706)

```diff
-             this.host.gFU(this.id, zU)
+             this.host.ftH(this.id, LH)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L724` → after: `L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L383) · [Before (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L724)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.PFU(this.id, UU, XU, zU, cU))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.gtH(this.id, HH, BH, LH, AH))))
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L727` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L386) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L727)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.dFU(this.id, UU, XU, zU, cU))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.RtH(this.id, HH, BH, LH, AH))))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L730` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L389) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L730)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.BFU(this.id, UU, XU, zU))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ctH(this.id, HH, BH, LH))))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L739` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L398) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L739)

```diff
-         const yU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.model) && void 0 !== XU ? XU : -1,
+         const rH = null !== (BH = null === LH || void 0 === LH ? void 0 : LH.model) && void 0 !== BH ? BH : -1,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L744` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L403) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L744)

```diff
-           this.host.GFU(this.id, yU, QU, null !== (UU = null === zU || void 0 === zU ? void 0 : zU.flyClip) && void 0 !== UU ? UU : "", null !== (XU = null === cU || void 0 === cU ? void 0 : cU.opts) && void 0 !== XU ? XU : "", AU)
+           this.host.KtH(this.id, rH, SH, null !== (HH = null === LH || void 0 === LH ? void 0 : LH.flyClip) && void 0 !== HH ? HH : "", null !== (BH = null === AH || void 0 === AH ? void 0 : AH.opts) && void 0 !== BH ? BH : "", hH)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L748` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L407) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L748)

```diff
-         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZFU(this.id, UU, XU, zU, cU))))
+         return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.etH(this.id, HH, BH, LH, AH))))
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L769` → after: `L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L428) · [Before (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L769)

```diff
-           this.host.WFU(this.id, XU, zU, cU)
+           this.host.NtH(this.id, BH, LH, AH)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L778` → after: `L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L437) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L778)

```diff
-         this.quiet = 0, this.models.refresh(), (0, eU.e)(this.images)
+         this.quiet = 0, this.models.refresh(), (0, oH.j)(this.images)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L783` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L442) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L783)

```diff
-           const zU = XU === JU ? [] : [XU === jU ? UU : (UU | PU.h) >>> 0];
+           const LH = BH === sH ? [] : [BH === JH ? HH : (HH | OH.g) >>> 0];
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L791` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L450) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L791)

```diff
-           const UU = this.host.CFU(this.id);
+           const HH = this.host.FtH(this.id);
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L793` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L452) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L793)

```diff
-           const zU = this.host.eFU(this.id);
+           const LH = this.host.ntH(this.id);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L809` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L468) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L809)

```diff
-           XU.length > 0 && this.images.onEvent(XU), this.page.isTrapped || UU.DAU(this.id)
+           BH.length > 0 && this.images.onEvent(BH), this.page.isTrapped || HH.UhH(this.id)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L825` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L484) · [Before (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L825)

```diff
-             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${vU} a model worker was lost: ${UU}`))
+             this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${nH} a model worker was lost: ${HH}`))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L828` → after: `L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L487) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L828)

```diff
-         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Fp = {
+         }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Cu = {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L833-L838` → after: `L492-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L492-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L492-L498) · [Before (L833-L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L833-L838)

```diff
-           if (null !== XU && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
-             this.drawFrame(XU, UU)
-           } catch (zU) {
-             if (!this.stopIfTrapped(zU) && (this.stop(), (0, BU.t)(zU))) return void this.deps.onRenderFailed("frames_refused", zU);
-             console.warn(`${vU} the previews stopped: their frame threw`, zU)
-           }
+           if (null !== BH && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
+             if (this.deps.frameDue(HH)) try {
+               this.drawFrame(BH, HH)
+             } catch (LH) {
+               if (!this.stopIfTrapped(LH) && (this.stop(), (0, PH.n)(LH))) return void this.deps.onRenderFailed("frames_refused", LH);
+               console.warn(`${nH} the previews stopped: their frame threw`, LH)
+             } else this.startFrames()
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L867` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L527) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L867)

```diff
-           if (!QU.tFU()) {
+           if (!SH.ItH()) {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L871-L872` → after: `L531-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L531-L532) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L871-L872)

```diff
-             if (!QU.hAU(AU)) throw new Error("the page has a renderer already");
-             (0, wU.t)(performance.now()), this.samples = XU, (0, uU.i)((0, BU.p)(UU))
+             if (!SH.GtH(hH)) throw new Error("the page has a renderer already");
+             (0, fH.v)(performance.now()), this.samples = BH, (0, qH.d)((0, PH.j)(HH))
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L884-L885` → after: `L544-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L544-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L544-L545) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L884-L885)

```diff
-           console.warn(`${vU} an ended session's renderer didn't free`, QU)
-         } else XU.hAU(zU) && ((0, wU.t)(performance.now()), this.samples = cU, (0, uU.i)(this.registryOf(UU)))
+           console.warn(`${nH} an ended session's renderer didn't free`, SH)
+         } else BH.GtH(LH) && ((0, fH.v)(performance.now()), this.samples = AH, (0, qH.d)(this.registryOf(HH)))
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L907-L908` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L567-L568) · [Before (L907-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L907-L908)

```diff
-             return void console.warn(`${vU} the session's core kept the page's renderer`, yU)
-           }!0 === (null === (XU = this.host) || void 0 === XU ? void 0 : XU.attached()) && console.warn(`${vU} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (zU = this.host) || void 0 === zU ? void 0 : zU.tFU()) … [truncated]
+             return void console.warn(`${nH} the session's core kept the page's renderer`, rH)
+           }!0 === (null === (BH = this.host) || void 0 === BH ? void 0 : BH.attached()) && console.warn(`${nH} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (LH = this.host) || void 0 === LH ? void 0 : LH.ItH()) … [truncated]
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L927-L928` → after: `L587-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L587-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L587-L588) · [Before (L927-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L927-L928)

```diff
-         if (!this.guarded((() => (QU.oAU(AU, FU), yU.open(AU, oU, DU, UU))))) throw this.hostCall(void 0, (() => {
-           QU.DAU(AU)
+         if (!this.guarded((() => (SH.ThH(hH, tH), rH.open(hH, zH, CH, HH))))) throw this.hostCall(void 0, (() => {
+           SH.UhH(hH)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L935` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L595) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L935)

```diff
-         if (this.prefetched || this.isStopped || (0, wU.c)() || null !== (0, wU.F)()) return;
+         if (this.prefetched || this.isStopped || (0, fH.e)() || null !== (0, fH.K)()) return;
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L945` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L605) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L945)

```diff
-         return this.prefetchedOr(UU, cU.Q)
+         return this.prefetchedOr(HH, AH.M)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L953` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L613) · [Before (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L953)

```diff
-           XU = await Promise.all([UU, this.deps.images.lifeformAtlasUrl(eU.b)]).catch((() => null));
+           BH = await Promise.all([HH, this.deps.images.lifeformAtlasUrl(oH.e)]).catch((() => null));
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L987` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L647) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L987)

```diff
-         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${vU} the model workers didn't start: models won't draw in the previews`, UU))
+         this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${nH} the model workers didn't start: models won't draw in the previews`, HH))
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L997` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L657) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L997)

```diff
-         return this.module = UU, null === this.host && (this.host = this.guarded((() => new UU.FAU)), this.tellInGame(), this.handOverShaderPack()), this.host
+         return this.module = HH, null === this.host && (this.host = this.guarded((() => new HH.PhH)), this.tellInGame(), this.handOverShaderPack()), this.host
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1004` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L664) · [Before (L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1004)

```diff
-           UU.RFU(this.deps.game.inGame())
+           HH.qtH(this.deps.game.inGame())
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1013` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L673) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1013)

```diff
-           UU.QyU(...XU) || console.warn(`${vU} the host refused the shader pack: previews draw without it at home`)
+           HH.PrH(...BH) || console.warn(`${nH} the host refused the shader pack: previews draw without it at home`)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1020` → after: `L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L680) · [Before (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1020)

```diff
-           this.stop(), console.warn(`${vU} the previews stopped: ${UU} threw`, zU)
+           this.stop(), console.warn(`${nH} the previews stopped: ${HH} threw`, LH)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1027` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L687) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1027)

```diff
-           XU.wasm = null === zU ? XU.wasm : this.hostCall(XU.wasm, (() => zU.sY()))
+           BH.wasm = null === LH ? BH.wasm : this.hostCall(BH.wasm, (() => LH.wX()))
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1040` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L700) · [Before (L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1040)

```diff
-             yU = UU.kFU(cU)
+             rH = HH.ltH(AH)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1057` → after: `L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L717) · [Before (L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1057)

```diff
-         return null !== UU && this.guarded((() => UU.tFU())) ? UU : (this.opening ??= this.openAtHome().finally((() => {
+         return null !== HH && this.guarded((() => HH.ItH())) ? HH : (this.opening ??= this.openAtHome().finally((() => {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1063` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L723) · [Before (L1063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1063)

```diff
-         const XU = null !== (UU = this.module) && void 0 !== UU ? UU : await this.loadModule();
+         const BH = null !== (HH = this.module) && void 0 !== HH ? HH : await this.loadModule();
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1066` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L726) · [Before (L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1066)

```diff
-           cU = () => this.guarded((() => zU.tFU()));
+           AH = () => this.guarded((() => LH.ItH()));
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1068` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L728) · [Before (L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1068)

```diff
-         if (null !== (0, wU.F)() || (0, wU.c)()) return null;
+         if (null !== (0, fH.K)() || (0, fH.e)()) return null;
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1076` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L736) · [Before (L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1076)

```diff
-           FU = await (0, BU.B)(XU, "previewRenderer", yU, AU, fU.e, QU)
+           tH = await (0, PH.q)(BH, "previewRenderer", rH, hH, gH.i, SH)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1078` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L738) · [Before (L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1078)

```diff
-           throw oU instanceof LU.c ? this.stopForTrap(oU) : (0, BU.x)(oU) && await this.deps.onRenderFailed("start_failed", oU), oU
+           throw zH instanceof mH.e ? this.stopForTrap(zH) : (0, PH.p)(zH) && await this.deps.onRenderFailed("start_failed", zH), zH
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1080` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L740) · [Before (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1080)

```diff
-         return this.guarded((() => zU.hAU(FU))) ? ((0, wU.t)(performance.now()), this.samples = AU, this.pageCanvas = yU, (0, uU.i)(this.registryOf(XU)), zU) : cU() ? zU : null
+         return this.guarded((() => LH.GtH(tH))) ? ((0, fH.v)(performance.now()), this.samples = hH, this.pageCanvas = rH, (0, qH.d)(this.registryOf(BH)), LH) : AH() ? LH : null
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1099-L1100` → after: `L759-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L759-L760) · [Before (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1099-L1100)

```diff
-             const XU = UU.LFU();
-             for (let UU = 0; UU + 1 < XU.length; UU += 2) XU[UU] === GU.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(XU[UU], XU[UU + 1])
+             const BH = HH.jtH();
+             for (let HH = 0; HH + 1 < BH.length; HH += 2) BH[HH] === vH.F.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(BH[HH], BH[HH + 1])
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1103-L1105` → after: `L763-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L763-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L763-L765) · [Before (L1103-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1103-L1105)

```diff
-             if (QU === lU) return this.stop(), void this.deps.onFatal(UU.NFU(), UU.IFU());
-             if (QU === xU) return this.stop(), void console.warn(`${vU} the previews stopped: the page's renderer went with its session`);
-             (0, tU.b)(XU), this.startFrames()
+             if (SH === dH) return this.stop(), void this.deps.onFatal(HH.btH(), HH.ktH());
+             if (SH === aH) return this.stop(), void console.warn(`${nH} the previews stopped: the page's renderer went with its session`);
+             (0, WH.e)(BH), this.startFrames()
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1107` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L767) · [Before (L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1107)

```diff
-             const XU = UU.pFU();
+             const BH = HH.mtH();
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1109-L1110` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L769-L770) · [Before (L1109-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1109-L1110)

```diff
-             const zU = XU[2] === GU.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
-             this.deps.onRenderFailed(zU, void 0, XU[1], XU[2] === GU.Yc.RESTORE_LOST)
+             const LH = BH[2] === vH.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
+             this.deps.onRenderFailed(LH, void 0, BH[1], BH[2] === vH.Vc.RESTORE_LOST)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1118` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L778) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1118)

```diff
-         return null !== this.module && ((0, LU.i)(this.module) || "failed" === (0, pU.A)())
+         return null !== this.module && ((0, mH.k)(this.module) || "failed" === (0, uH.B)())
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1139` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L799) · [Before (L1139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1139)

```diff
-           lcU: (XU, zU) => {
+           trH: (BH, LH) => {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1141` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L801) · [Before (L1141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1141)

```diff
-               UU.lcU(XU, zU)
+               HH.trH(BH, LH)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1144` → after: `L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L804) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1144)

```diff
-           xcU: XU => {
+           zrH: BH => {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1146` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L806) · [Before (L1146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1146)

```diff
-               UU.xcU(XU)
+               HH.zrH(BH)
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1152` → after: `L812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L812) · [Before (L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1152)

```diff
-         return !!this.isTrapped && (this.stopped || (this.stop(), (0, uU.i)(null)), !0)
+         return !!this.isTrapped && (this.stopped || (this.stop(), (0, qH.d)(null)), !0)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1155` → after: `L815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L815) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1155)

```diff
-         return !(null === this.module || !(0, LU.k)(this.module, UU)) && (this.stopForTrap(UU), !0)
+         return !(null === this.module || !(0, mH.o)(this.module, HH)) && (this.stopForTrap(HH), !0)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1158` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L818) · [Before (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1158)

```diff
-         this.stop(), (0, uU.i)(null), (0, HU.e)("previews", UU)
+         this.stop(), (0, qH.d)(null), (0, RH.h)("previews", HH)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1165-L1166` → after: `L825-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L825-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L825-L826) · [Before (L1165-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1165-L1166)

```diff
-         const zU = `${UU}:${XU}`;
-         this.loggedErrors.has(zU) || (this.loggedErrors.add(zU), console.warn(`${vU} error ${UU} (detail ${XU})`))
+         const LH = `${HH}:${BH}`;
+         this.loggedErrors.has(LH) || (this.loggedErrors.add(LH), console.warn(`${nH} error ${HH} (detail ${BH})`))
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js` (Changed code · before: `L1173` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f0b5e6d38580617dae520d8c692bd936eadd02c0b8f4685f33c10e5168134e47) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L833) · [Before (L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/wasmClientPreviews.js#L1173)

```diff
-         const UU = (0, WU.p)(aU.clientSideServerUrls.staticUrl, {
+         const HH = (0, bH.j)(QH.clientSideServerUrls.staticUrl, {
```
