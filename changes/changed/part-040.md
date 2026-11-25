# Changed — Bundle Modifications Report (Part 040 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `40 / 56` (**394** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 039](part-039.md) · [Part 041 →](part-041.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (902 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226)

#### 114. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L790` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L794) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L790)

```diff
-             return jQ.yb.FaceMovement
+             return hM.kb.FaceMovement
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L805` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L809) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L805)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new CQ.b(this.nJ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (QQ = (WQ = this.opt … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new oM.d(this.uL), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (MM = (rM = this.opt … [truncated]
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L816-L817` → after: `L820-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L820-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L820-L821) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L816-L817)

```diff
-           zQ = 0 !== (XQ & jQ.Hb.LookPointed);
-         if (null === this.mouseTurns && !zQ) return TQ.jR = 0, TQ.yR = 0, void(TQ.pointedAt = void 0);
+           aM = 0 !== (iM & hM.qb.LookPointed);
+         if (null === this.mouseTurns && !aM) return jM.PD = 0, jM.nD = 0, void(jM.pointedAt = void 0);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L821` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L825) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L821)

```diff
-           nJ: FQ
+           uL: nM
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L827` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L831) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L827)

```diff
-           XQ = Math.min(QQ.length, jQ.ie);
+           iM = Math.min(MM.length, hM.Kd);
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L829` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L833) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L829)

```diff
-           for (let XQ = 0; XQ < 3; XQ++) WQ[3 * wQ + XQ] = Math.floor(QQ[wQ][XQ] / jQ.H);
+           for (let iM = 0; iM < 3; iM++) rM[3 * OM + iM] = Math.floor(MM[OM][iM] / hM.A);
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L834` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L838) · [Before (L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L834)

```diff
-           nB: WQ,
+           Sd: rM,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L843` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L847) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L843)

```diff
-         null !== QQ && (0, jQ.If)(QQ, 0, this.nB, this.centresLen) && (this.centresUnsent = !1)
+         null !== MM && (0, hM.Kf)(MM, 0, this.Sd, this.centresLen) && (this.centresUnsent = !1)
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L847` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L851) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L847)

```diff
-         return null !== (QQ = null === (WQ = (XQ = this.options).screen) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : nQ
+         return null !== (MM = null === (rM = (iM = this.options).screen) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : BM
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L851` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L855) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L851)

```diff
-         return (null !== (QQ = this.options.isPageHidden) && void 0 !== QQ ? QQ : xQ)()
+         return (null !== (MM = this.options.isPageHidden) && void 0 !== MM ? MM : XM)()
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L855` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L859) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L855)

```diff
-         return null !== (QQ = null === (WQ = (XQ = this.options).now) || void 0 === WQ ? void 0 : WQ.call(XQ)) && void 0 !== QQ ? QQ : performance.now()
+         return null !== (MM = null === (rM = (iM = this.options).now) || void 0 === rM ? void 0 : rM.call(iM)) && void 0 !== MM ? MM : performance.now()
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L858-L862` → after: `L862-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L862-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L862-L868) · [Before (L858-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L858-L862)

```diff
-     var NQ = XQ(40994);
-     const ZQ = jQ.H * jQ.H * jQ.H,
-       OQ = Math.log2(jQ.H),
-       KQ = jQ.H - 1,
-       mQ = jQ.T.BYTES / 4,
+     var KM = iM(40165),
+       qM = iM(41871);
+     const TM = hM.A * hM.A * hM.A,
+       VM = Math.log2(hM.A),
+       cM = hM.A - 1,
+       Mr = 65535,
+       rr = hM.M.BYTES / 4,
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L866` → after: `L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L872) · [Before (L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L866)

```diff
-       return QQ * jQ.H * jQ.H + WQ * jQ.H + XQ
+       return MM * hM.A * hM.A + rM * hM.A + iM
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L886` → after: `L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L892) · [Before (L886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L886)

```diff
-         this.table = QQ, this.slot = WQ, this.generation = XQ, this.epoch = wQ, this.Gr = new WW(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = MQ, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = MM, this.slot = rM, this.generation = iM, this.epoch = OM, this.Xm = new Sr(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ir, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L893` → after: `L899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L899) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L893)

```diff
-           WQ = this.layers ??= new Uint16Array(jQ.H);
+           rM = this.layers ??= new Uint16Array(hM.A);
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L950-L951` → after: `L956-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L956-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L956-L957) · [Before (L950-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L950-L951)

```diff
-       const XQ = QQ[WQ * jQ.H];
-       for (let wQ = 0; wQ < jQ.H; wQ++) {
+       const iM = MM[rM * hM.A];
+       for (let OM = 0; OM < hM.A; OM++) {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L953-L954` → after: `L959-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L959-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L959-L960) · [Before (L953-L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L953-L954)

```diff
-         for (let WQ = 0; WQ < jQ.H; WQ++)
-           if (QQ[qQ + WQ] !== XQ) return 65535
+         for (let rM = 0; rM < hM.A; rM++)
+           if (MM[SM + rM] !== iM) return Mr
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L968-L970` → after: `L974-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L974-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L974-L976) · [Before (L968-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L968-L970)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, TQ === jQ.X.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (TQ !== jQ.X.Stored && TQ !== jQ.X.Unloaded) throw new IQ.d(`ChunkSlot flags ${TQ}`);
-         const zQ = (0, NQ.e)(QQ, WQ, XQ);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, jM === hM.Q.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (jM !== hM.Q.Stored && jM !== hM.Q.Unloaded) throw new HM.d(`ChunkSlot flags ${jM}`);
+         const aM = (0, qM.b)(MM, rM, iM);
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L972` → after: `L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L978) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L972)

```diff
-         if (TQ === jQ.X.Unloaded) return void this.chunks.delete(zQ);
+         if (jM === hM.Q.Unloaded) return void this.chunks.delete(aM);
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L982-L983` → after: `L988-L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L988-L989) · [Before (L982-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L982-L983)

```diff
-           WQ = jQ.x.chunkSlotsPtr(QQ, 0),
-           XQ = jQ.x.chunkSlotsLen(QQ, 0);
+           rM = hM.v.chunkSlotsPtr(MM, 0),
+           iM = hM.v.chunkSlotsLen(MM, 0);
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L988-L989` → after: `L994-L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L994-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L994-L995) · [Before (L988-L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L988-L989)

```diff
-           WQ = jQ.x.walkThroughPtr(QQ, 0),
-           XQ = jQ.x.walkThroughLen(QQ, 0);
+           rM = hM.v.walkThroughPtr(MM, 0),
+           iM = hM.v.walkThroughLen(MM, 0);
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1002` → after: `L1008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1008) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1002)

```diff
-         QQ !== this.slotsBuffer && (this.slotsBuffer = QQ, this.slots = null !== (WQ = (0, IQ.n)(Uint32Array, QQ, this.slotsPtr, this.slotsLen * mQ, "the chunk directory")) && void 0 !== WQ ? WQ : TW);
+         MM !== this.slotsBuffer && (this.slotsBuffer = MM, this.slots = null !== (rM = (0, HM.l)(Uint32Array, MM, this.slotsPtr, this.slotsLen * rr, "the chunk directory")) && void 0 !== rM ? rM : nr);
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1008` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1014) · [Before (L1008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1008)

```diff
-           return null !== (XQ = (0, IQ.n)(Uint16Array, QQ, WQ, ZQ, "a chunk's voxels")) && void 0 !== XQ ? XQ : MQ
+           return null !== (iM = (0, HM.l)(Uint16Array, MM, rM, TM, "a chunk's voxels")) && void 0 !== iM ? iM : ir
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1016` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1022) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1016)

```diff
-         return null !== (wQ = this.chunks.get((0, NQ.e)(QQ, WQ, XQ))) && void 0 !== wQ ? wQ : null
+         return null !== (OM = this.chunks.get((0, qM.b)(MM, rM, iM))) && void 0 !== OM ? OM : null
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1029` → after: `L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1035) · [Before (L1029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1029)

```diff
-         return null !== (wQ = sQ.written(FQ)) && void 0 !== wQ ? wQ : sQ.voxelData()[FQ]
+         return null !== (OM = PM.written(nM)) && void 0 !== OM ? OM : PM.voxelData()[nM]
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1038` → after: `L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1044) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1038)

```diff
-         return null !== (wQ = null === (qQ = this.chunks.get((0, NQ.e)(QQ, WQ, XQ))) || void 0 === qQ ? void 0 : qQ.Sj) && void 0 !== wQ ? wQ : null
+         return null !== (OM = null === (SM = this.chunks.get((0, qM.b)(MM, rM, iM))) || void 0 === SM ? void 0 : SM.Kh) && void 0 !== OM ? OM : null
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1041` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1047) · [Before (L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1041)

```diff
-         const FQ = jQ.H;
+         const nM = hM.A;
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1050` → after: `L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1056) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1050)

```diff
-               const BQ = this.chunks.get((0, NQ.e)(qQ, gQ, wQ));
+               const JM = this.chunks.get((0, qM.b)(SM, zM, OM));
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1055` → after: `L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1061) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1055)

```diff
-                 pQ = BQ.UI,
+                 EM = JM.NH,
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1059` → after: `L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1065) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1059)

```diff
-                 if (65535 === WQ || 0 !== zQ[WQ]) {
+                 if (rM === Mr || 0 !== aM[rM]) {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1091` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1103) · [Before (L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1091)

```diff
-         QQ !== this.walkBuffer && (this.walkBuffer = QQ, this.walk = null !== (WQ = (0, IQ.n)(Uint32Array, QQ, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== WQ ? WQ : TW);
+         MM !== this.walkBuffer && (this.walkBuffer = MM, this.walk = null !== (rM = (0, HM.l)(Uint32Array, MM, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== rM ? rM : nr);
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1096` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1108) · [Before (L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1096)

```diff
-         const wQ = (0, NQ.e)(QQ >> OQ, WQ >> OQ, XQ >> OQ);
+         const OM = (0, qM.b)(MM >> VM, rM >> VM, iM >> VM);
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1100-L1106` → after: `L1112-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1112-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1112-L1119) · [Before (L1100-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1100-L1106)

```diff
-     var FW = XQ(38792),
-       PW = XQ(38084),
-       gW = XQ(37091),
-       JW = XQ(36920),
-       rW = XQ(34469),
-       IW = XQ(39391),
-       jW = XQ(231);
+     var Lr = iM(39507),
+       mr = iM(38784),
+       Hr = iM(39210),
+       hr = iM(37758),
+       Jr = iM(37554),
+       dr = iM(34985),
+       yr = iM(40173),
+       lr = iM(181);
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1568-L1572` → after: `L1581-L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1581-L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1581-L1628) · [Before (L1568-L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1568-L1572)

```diff
-       GW = 8;
-     var UW = XQ(37052),
-       bW = XQ(37074),
-       vW = XQ(37067),
-       dW = XQ(291);
+       br = 8,
+       wr = [
+         [20, 3],
+         [23, 3],
+         [26, 2],
+         [30, 3],
+         [57, 4],
+         [83, 2],
+         [86, 2],
+         [115, 3],
+         [125, 4],
+         [129, 4],
+         [137, 4],
+         [192, 4],
+         [196, 3],
+         [199, 3],
+ ... (32 more added lines; see GitHub link above)
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1575-L1576` → after: `L1631-L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1631-L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1631-L1632) · [Before (L1575-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1575-L1576)

```diff
-         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dW.e;
-         this.sheet = QQ, this.onError = WQ, this.idle = XQ, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = QQ => {
+         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Rr.d;
+         this.sound = MM, this.onError = rM, this.idle = iM, this.queue = [], this.asked = new Set, this.cancelIdle = null, this.gen = 0, this.onIdle = MM => {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1603-L1604` → after: `L1659-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1659-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1659-L1660) · [Before (L1603-L1604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1603-L1604)

```diff
-         const WQ = this.sheet(QQ, !1),
-           XQ = this.sheet(QQ, !0),
+         const rM = this.sound(MM, !1),
+           iM = this.sound(MM, !0),
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1618-L1634` → after: `L1674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1674) · [Before (L1618-L1634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1618-L1634)

```diff
-     var aW = XQ(41106);
-     const lW = {
-         coneInnerAngle: 360,
-         coneOuterAngle: 360,
-         coneOuterGain: 0,
-         distanceModel: "inverse",
-         maxDistance: 1e3,
-         panningModel: "HRTF",
-         rolloffFactor: 1
-       },
-       hW = jW.h.xy * jW.h.playerEyeToHeightRatio,
-       iW = [0, 0, -1, 0, 1, 0],
-       cW = BW.indexOf("note");
- 
-     function AW(QQ) {
-       return QQ >= 0 ? Math.min(1, QQ) : 0
- ... (1 more removed lines; see GitHub link above)
+     var Wr = iM(41993);
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1648-L1649` → after: `L1687-L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1687-L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1687-L1688) · [Before (L1648-L1649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1648-L1649)

```diff
-       if ("" === QQ || null === (WQ = VW[wQ]) || void 0 === WQ || !WQ.startsWith(QQ)) return -1;
-       if (VW[wQ] === QQ) return wQ;
+       if ("" === MM || null === (rM = Gr[iM]) || void 0 === rM || !rM.startsWith(MM)) return null;
+       if (Gr[iM] === MM) return [iM, 1];
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1652` → after: `L1691-L1724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1691-L1724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1691-L1724) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1652)

```diff
-       return wQ + Math.floor(XQ() * (qQ - wQ))
+       return [iM, OM - iM]
+     }
+ 
+     function Dr(MM) {
+       let [rM, iM] = MM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
+       return 1 === iM ? rM : rM + Math.floor(OM() * iM)
+     }
+ 
+     function kr(MM) {
+       for (const rM of wr)
+         if (rM[0] <= MM && MM < rM[0] + rM[1]) return rM;
+       return null
+     }
+ 
+     function Zr(MM) {
+       const rM = [];
+ ... (18 more added lines; see GitHub link above)
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1676` → after: `L1748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1748) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1676)

```diff
-         this.createHowl = QQ, this.listener = WQ, this.now = XQ, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(BW.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
+         this.createHowl = MM, this.listener = rM, this.now = iM, this.errors = 0, this.howls = new Map, this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Float64Array(9), this.posed = !1, this.loader =  … [truncated]
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1686-L1687` → after: `L1758-L1759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1758-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1758-L1759) · [Before (L1686-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1686-L1687)

```diff
-             const PQ = 0 !== (qQ & jQ.pe.Loop);
-             qQ & jQ.pe.TwoD ? this.start(wQ, !1, zQ, TQ, sQ, PQ) : this.startSpatial(wQ, zQ, TQ, sQ, PQ, QQ, WQ, XQ, FQ, this.earDistSq(QQ, WQ, XQ))
+             const QM = 0 !== (SM & hM.Wd.Loop);
+             SM & hM.Wd.TwoD ? this.start(OM, !1, aM, jM, PM, QM, kr(OM)) : this.startSpatial(OM, aM, jM, PM, QM, MM, rM, iM, nM, this.earDistSq(MM, rM, iM), kr(OM))
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1703` → after: `L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1775) · [Before (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1703)

```diff
-             void 0 !== qQ && this.fade(qQ, WQ, XQ, 0 !== (wQ & jQ.me.StopAfter))
+             void 0 !== SM && this.fade(SM, rM, iM, 0 !== (OM & hM.Td.StopAfter))
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1713` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1785) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1713)

```diff
-         }, this.loader = new HW(((QQ, WQ) => this.sheet(QQ, WQ)), (QQ => {
+         }, this.loader = new pr(((MM, rM) => this.howl(MM, rM)), (MM => {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1729` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1795) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1729)

```diff
-       freeSheetsAfterGame() {
+       freeSoundsAfterGame() {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1731` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1797) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1731)

```diff
-           if (bW.b.has(BW[QQ])) continue;
+           if (gr.b.has(Er[Cr[MM]])) continue;
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1735` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1801) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1735)

```diff
-               qQ = this.sheets.get(XQ);
+               SM = this.howls.get(OM);
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1741` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1807) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1741)

```diff
-           if (!WQ.some((QQ => {
+           if (rM.some((MM => {
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1746-L1755` → after: `L1812-L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1812-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1812-L1817) · [Before (L1746-L1755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1746-L1755)

```diff
-             }))) continue;
-           this.unloading[QQ] += WQ.length;
-           const XQ = () => {
-             this.unloading[QQ]--, 0 === this.unloading[QQ] && this.prepareSheet(QQ)
-           };
-           for (const {
-               key: QQ,
-               howl: wQ
-             }
-             of WQ) this.sheets.delete(QQ), "loaded" === wQ.state() ? (0, UW.e)(wQ, XQ) : (wQ.unload(), XQ())
+             })))
+             for (const {
+                 key: MM,
+                 howl: iM
+               }
+               of rM) this.howls.delete(MM), "loaded" === iM.state() ? (0, tr.i)(iM) : iM.unload()
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1759` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1821) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1759)

```diff
-         if (QQ < jQ.u.PlaySound || QQ > jQ.u.SoundReset) return !1;
+         if (MM < hM.o.PlaySound || MM > hM.o.SoundReset) return !1;
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1761` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1823) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1761)

```diff
-           return (0, jQ.we)(QQ, WQ, XQ, wQ, this.handlers)
+           return (0, hM.ge)(MM, rM, iM, OM, this.handlers)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1768` → after: `L1830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1830) · [Before (L1768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1768)

```diff
-         for (let wQ = 0; wQ < 3; wQ++) WQ[2 - wQ] = jQ.A.listener(QQ, 0, wQ), WQ[5 - wQ] = jQ.A.forward(QQ, 0, wQ), WQ[8 - wQ] = jQ.A.up(QQ, 0, wQ);
+         for (let OM = 0; OM < 3; OM++) rM[2 - OM] = hM.w.listener(MM, 0, OM), rM[5 - OM] = hM.w.forward(MM, 0, OM), rM[8 - OM] = hM.w.up(MM, 0, OM);
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1782` → after: `L1844-L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1844-L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1844-L1846) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1782)

```diff
-         if (sQ < 0) return aW.e;
+         if (null === PM) return Wr.b;
+         const nM = Dr(PM),
+           QM = PM[1] > 1 ? PM : null;
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1787` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1851) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1787)

```diff
-           } = this.start(sQ, !1, WQ, 0, 1, zQ);
+           } = this.start(nM, !1, rM, 0, 1, aM, QM);
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1793` → after: `L1857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1857) · [Before (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1793)

```diff
-         if (!Number.isFinite(FQ) || !Number.isFinite(PQ) || !Number.isFinite(gQ)) return aW.e;
+         if (!Number.isFinite(zM) || !Number.isFinite(LM) || !Number.isFinite(mM)) return Wr.b;
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1799` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1863) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1799)

```diff
-           if (JQ = QQ * QQ + WQ * WQ + XQ * XQ, JQ > qQ * qQ) return aW.e
+           if (HM = MM * MM + rM * rM + iM * iM, HM > SM * SM) return Wr.b
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1801-L1802` → after: `L1865-L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1865-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1865-L1866) · [Before (L1801-L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1801-L1802)

```diff
-         const rQ = this.startSpatial(sQ, WQ, 0, 1, zQ, FQ, PQ, gQ, TQ, JQ);
-         return rQ ? this.gameSound(rQ.howl, rQ.id, !0) : aW.e
+         const hM = this.startSpatial(nM, rM, 0, 1, aM, zM, LM, mM, jM, HM, QM);
+         return hM ? this.gameSound(hM.howl, hM.id, !0) : Wr.b
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1829` → after: `L1893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1893) · [Before (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1829)

```diff
-             const sQ = this.level > 0 ? XQ / this.level : XQ > 0 && null !== (TQ = null === (zQ = this.live.get(WQ)) || void 0 === zQ ? void 0 : zQ.rel) && void 0 !== TQ ? TQ : 0;
+             const PM = this.level > 0 ? iM / this.level : iM > 0 && null !== (jM = null === (aM = this.live.get(rM)) || void 0 === aM ? void 0 : aM.rel) && void 0 !== jM ? jM : 0;
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1835` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1899) · [Before (L1835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1835)

```diff
-               return QQ > 0 && QQ < 1 / 0 ? QQ : 1
+               return MM > 0 && MM < 1 / 0 ? MM : 1
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1840` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1904) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1840)

```diff
-             return (null !== (QQ = null === (XQ = this.live.get(WQ)) || void 0 === XQ ? void 0 : XQ.rel) && void 0 !== QQ ? QQ : 0) * this.level
+             return (null !== (MM = null === (iM = this.live.get(rM)) || void 0 === iM ? void 0 : iM.rel) && void 0 !== MM ? MM : 0) * this.level
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1844` → after: `L1908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1908) · [Before (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1844)

```diff
-             return null !== (QQ = null === (XQ = this.live.get(WQ)) || void 0 === XQ ? void 0 : XQ.rel) && void 0 !== QQ ? QQ : 0
+             return null !== (MM = null === (iM = this.live.get(rM)) || void 0 === iM ? void 0 : iM.rel) && void 0 !== MM ? MM : 0
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1851` → after: `L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1915) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1851)

```diff
-                 refDistance: gW.h
+                 refDistance: hr.l
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1864-L1865` → after: `L1928-L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1928-L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1928-L1929) · [Before (L1864-L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1864-L1865)

```diff
-       startSpatial(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
-         const gQ = this.sheet(DW[QQ], !0);
+       startSpatial(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
+         const LM = this.howl(MM, !0);
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1869-L1870` → after: `L1933-L1934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1933-L1934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1933-L1934) · [Before (L1869-L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1869-L1870)

```diff
-           const XQ = DW[QQ] === cW ? null : (0, vW.f)(VW[QQ]),
-             wQ = (0, vW.e)(AW(WQ), Math.sqrt(PQ), FQ);
+           const iM = Cr[MM] === Nr ? null : (0, ur.i)(Gr[MM]),
+             OM = (0, ur.f)(Ar(rM), Math.sqrt(QM), nM);
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1873` → after: `L1937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1937) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1873)

```diff
-         const rQ = this.start(QQ, !0, WQ, XQ, wQ, qQ);
+         const HM = this.start(MM, !0, rM, iM, OM, SM, zM);
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1895` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1959) · [Before (L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1895)

```diff
-       start(QQ, WQ, XQ, wQ, qQ, TQ) {
+       start(MM, rM, iM, OM, SM, jM, aM) {
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1897-L1899` → after: `L1961-L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1961-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1961-L1963) · [Before (L1897-L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1897-L1899)

```diff
-           sQ = this.sheet(DW[QQ], WQ);
-         "unloaded" === sQ.state() && sQ.load();
-         const FQ = sQ.play(VW[QQ]),
+           nM = this.howl(MM, rM);
+         "unloaded" === nM.state() && (nM.load(), null !== aM && this.loadPick(aM, rM));
+         const QM = nM.play(tr.e),
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1917` → after: `L1981-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1981-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1981-L1989) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1917)

```diff
-       sheet(QQ, WQ) {
+       loadPick(MM, rM) {
+         let [iM, OM] = MM;
+         for (let jM = iM; jM < iM + OM; jM++) {
+           var SM;
+           const MM = this.howl(jM, rM);
+           "unloaded" === MM.state() && "loading" !== (null === (SM = this.howls.get(Fr(jM, !rM))) || void 0 === SM ? void 0 : SM.state()) && MM.load()
+         }
+       }
+       howl(MM, rM) {
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1919` → after: `L1991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1991) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1919)

```diff
-         let wQ = this.sheets.get(XQ);
+         let OM = this.howls.get(iM);
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1933` → after: `L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2005) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1933)

```diff
-           })), this.sheets.set(XQ, qQ), wQ = qQ
+           })), this.howls.set(iM, SM), OM = SM
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1977-L1978` → after: `L2049-L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2049-L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2049-L2050) · [Before (L1977-L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1977-L1978)

```diff
-     var kW = XQ(40839),
-       fW = XQ(39400);
+     var Xr = iM(41695),
+       Ir = iM(40181);
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1981` → after: `L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2053) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1981)

```diff
-         this.key = QQ, this.model = WQ, this.host = wQ, this.yJ = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.nqQ = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = MM, this.model = rM, this.host = OM, this.vL = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.pSM = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1987` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2059) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1987)

```diff
-         !this.zj && QQ >= 0 && QQ < this.yJ && QQ < jQ.Oc.Max && this.ij(QQ, QQ + 1)
+         !this.dh && MM >= 0 && MM < this.vL && MM < hM.gc.Max && this.fh(MM, MM + 1)
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1990-L1991` → after: `L2062-L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2062-L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2062-L2063) · [Before (L1990-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1990-L1991)

```diff
-         if (this.zj) return;
-         (QQ = Math.min(Math.max(Math.floor(QQ), 0), this.yJ, jQ.Oc.Max)) > this.count && this.ij(this.count, QQ), this.count = QQ;
+         if (this.dh) return;
+         (MM = Math.min(Math.max(Math.floor(MM), 0), this.vL, hM.gc.Max)) > this.count && this.fh(this.count, MM), this.count = MM;
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1996` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2068) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L1996)

```diff
-         } = this, qQ = this.nqQ !== QQ, TQ = XQ[0] !== WQ[0] || XQ[1] !== WQ[1] || XQ[2] !== WQ[2];
+         } = this, SM = this.pSM !== MM, jM = iM[0] !== rM[0] || iM[1] !== rM[1] || iM[2] !== rM[2];
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2007-L2009` → after: `L2079-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2079-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2079-L2081) · [Before (L2007-L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2007-L2009)

```diff
-             WQ = QQ * FW.b,
-             XQ = gQ * jQ.Oc.Bytes,
-             qQ = 0 !== FQ[WQ + FW.c] ? jQ.Oc.Hidden : 0;
+             rM = MM * Lr.d,
+             iM = zM * hM.gc.Bytes,
+             SM = 0 !== nM[rM + Lr.h] ? hM.gc.Hidden : 0;
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2012` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2084) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2012)

```diff
-         if ((0, jQ.Te)(zQ, 0, this.key, QQ, WQ, sQ, this.tailOf(sQ))) {
+         if ((0, hM.Oe)(aM, 0, this.key, MM, rM, PM, this.tailOf(PM))) {
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2014` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2086) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2014)

```diff
-           wQ.length = 0, this.nqQ = QQ, XQ[0] = WQ[0], XQ[1] = WQ[1], XQ[2] = WQ[2]
+           OM.length = 0, this.pSM = MM, iM[0] = rM[0], iM[1] = rM[1], iM[2] = rM[2]
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2018` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2090) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2018)

```diff
-         (QQ = Math.ceil(QQ)) <= this.yJ || this.zj || (this.records = (0, fW.d)(this.records, new Float32Array(QQ * FW.b)), this.isDirty = (0, fW.d)(this.isDirty, new Uint8Array(QQ)), this.tail = new Uint8Array(QQ * jQ.Oc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (MM = Math.ceil(MM)) <= this.vL || this.dh || (this.records = (0, Ir.e)(this.records, new Float32Array(MM * Lr.d)), this.isDirty = (0, Ir.e)(this.isDirty, new Uint8Array(MM)), this.tail = new Uint8Array(MM * hM.gc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2021` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2093) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2021)

```diff
-         this.zj || (this.zj = !0, this.host.zj(this, this.made ? this.key : null))
+         this.dh || (this.dh = !0, this.host.dh(this, this.made ? this.key : null))
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L2102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2102) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-           this.made = (0, jQ.Xe)(QQ, 0, this.key, WQ, XQ, wQ)
+           this.made = (0, hM.Se)(MM, 0, this.key, rM, iM, OM)
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2035` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2107) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2035)

```diff
-         const WQ = QQ * jQ.Oc.Bytes;
+         const rM = MM * hM.gc.Bytes;
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2046` → after: `L2118-L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2118-L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2118-L2122) · [Before (L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2046)

```diff
-     var tW = XQ(658);
+     var qr = iM(620),
+       Tr = iM(45251);
+     const Vr = new TextEncoder,
+       cr = new Uint8Array(0),
+       Mi = [0, 0, 0];
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2048` → after: `L2124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2124) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2048)

```diff
-       constructor(QQ) {
+       constructor(MM, rM) {
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2060-L2062` → after: `L2137-L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2137-L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2137-L2149) · [Before (L2060-L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2060-L2062)

```diff
-         if (XQ = QQ, !tW.j.includes(XQ)) return null;
-         var XQ;
-         const wQ = new eW(++this.keys, gQ.i.indexOf(QQ), WQ, this.host);
+         return iM = MM, qr.p.includes(iM) ? this.add({
+           lifeform: zM.j.indexOf(MM)
+         }, rM) : null;
+         var iM
+       }
+       createCosmetic(MM, rM) {
+         const iM = Tr.COSMETIC_MODEL_KEYS.get(MM);
+         return void 0 === iM ? null : this.add({
+           attachment: iM
+         }, rM)
+       }
+       add(MM, rM) {
+         const iM = new ii(++this.keys, MM, rM, this.host);
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2077` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2164) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2077)

```diff
-         this.key = QQ, this.lifeform = WQ, this.scale = XQ, this.host = wQ, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.zj = !1, this.sync()
+         this.key = MM, this.source = rM, this.scale = iM, this.host = OM, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.clip = null, this.clipBytes = cr, this.perch = null, this.owed = 1, this.dh = !1, this.sync()
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2080` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2167) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2080)

```diff
-         this.zj || (this.feet[0] = QQ[0], this.feet[1] = QQ[1], this.feet[2] = QQ[2], this.yaw = WQ, this.owed |= 2, this.sync())
+         this.dh || (this.feet[0] = MM[0], this.feet[1] = MM[1], this.feet[2] = MM[2], this.yaw = rM, this.owed |= 2, this.sync())
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2083` → after: `L2170-L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2170-L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2170-L2176) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2083)

```diff
-         this.zj || QQ === this.visible || (this.visible = QQ, this.owed |= 4, this.sync())
+         this.dh || MM === this.visible || (this.visible = MM, this.owed |= 4, this.sync())
+       }
+       setClip(MM) {
+         this.dh || MM === this.clip || (this.clip = MM, this.clipBytes = null === MM ? cr : Vr.encode(MM), this.owed |= 16, this.sync())
+       }
+       setPerch(MM) {
+         this.dh || (this.perch = MM, this.owed |= 32, this.sync())
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2086` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2179) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2086)

```diff
-         this.zj || (this.zj = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.dh || (this.dh = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2090` → after: `L2183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2183) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2090)

```diff
-         return this.write(QQ) ? (this.host.settled(this, this.zj), !0) : (this.host.owes(this), !1)
+         return this.write(MM) ? (this.host.settled(this, this.dh), !0) : (this.host.owes(this), !1)
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2095` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2188) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2095)

```diff
-           if (!(0, jQ.ef)(QQ, 0, this.key, this.lifeform, this.scale)) return !1;
+           if (!("lifeform" in this.source ? (0, hM.af)(MM, 0, this.key, this.source.lifeform, this.scale) : (0, hM.se)(MM, 0, this.key, this.source.attachment, this.scale))) return !1;
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2098` → after: `L2191-L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2191-L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2191-L2194) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2098)

```diff
-         const WQ = (2 & this.owed ? jQ.rd.Pose : 0) | (4 & this.owed ? jQ.rd.Visible : 0);
+         const {
+           owed: rM,
+           perch: iM
+         } = this, OM = (2 & rM ? hM.Ic.Pose : 0) | (4 & rM ? hM.Ic.Visible : 0) | (16 & rM ? hM.Ic.Clip : 0) | (32 & rM ? hM.Ic.Perch : 0);
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2100-L2101` → after: `L2196-L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2196-L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2196-L2198) · [Before (L2100-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2100-L2101)

```diff
-           if (!(0, jQ.cf)(QQ, 0, this.key, WQ, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
-           this.owed &= -7
+           var SM, jM;
+           if (!(0, hM.Ye)(MM, 0, this.key, OM, this.visible ? 1 : 0, iM ? 1 : 0, this.feet, this.yaw, iM ? this.host.serverId(iM.QS) : 0, null !== (SM = null === iM || void 0 === iM ? void 0 : iM.offset) && void 0 !== SM ? SM : Mi, null !== (jM = null === iM || void 0 === iM ? vo … [truncated]
+           this.owed &= -55
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2104` → after: `L2201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2201) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2104)

```diff
-           if (!(0, jQ.$e)(QQ, 0, this.key)) return !1;
+           if (!(0, hM.Ue)(MM, 0, this.key)) return !1;
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2110` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2207) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2110)

```diff
-     var nW = XQ(41204);
+     var Oi = iM(42094);
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2113` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2210) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2113)

```diff
-       return (0, nW.c)(), (0, jQ.Kf)(QQ, WQ, XQ, wQ)
+       return (0, Oi.e)(), (0, hM.Lf)(MM, rM, iM, OM)
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2115-L2116` → after: `L2212-L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2212-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2212-L2214) · [Before (L2115-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2115-L2116)

```diff
-     var YW = XQ(39409),
-       NW = XQ(40835);
+     var ji = iM(40199),
+       ai = iM(41682),
+       Pi = iM(42106);
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2132` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2230) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2132)

```diff
-       const WQ = PW.d[QQ],
+       const rM = mr.e[MM],
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2143` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2241) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2143)

```diff
-       if (null === QQ || void 0 === QQ) return jQ.xd;
+       if (null === MM || void 0 === MM) return hM.Nc;
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2145` → after: `L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2243) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2145)

```diff
-       return Number.isInteger(WQ) && WQ >= -2147483648 && WQ <= 2147483647 && String(WQ) === String(QQ) ? WQ : jQ.xd
+       return Number.isInteger(rM) && rM >= -2147483648 && rM <= 2147483647 && String(rM) === String(MM) ? rM : hM.Nc
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2149` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2247) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2149)

```diff
-       return (0, jQ.Nf)(QQ, 0, WQ, null !== XQ && void 0 !== XQ ? XQ : Number.NaN)
+       return (0, hM.Uf)(MM, 0, rM, null !== iM && void 0 !== iM ? iM : Number.NaN)
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2153` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2251) · [Before (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2153)

```diff
-         this.deps = QQ, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new YW.e((() => this.tables.getClientOption … [truncated]
+         this.deps = MM, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new ji.b((() => this.tables.getClientOption … [truncated]
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2156` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2254) · [Before (L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2156)

```diff
-         })), this.mobModels = new oW((() => this.deps.cmd())), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
+         })), this.mobModels = new ri((() => this.deps.cmd()), Ui), this.owedFrees = [], this.pendingStyle = void 0, this.pendingFar = void 0, this.farSet = !1, this.routeMesh = 0, this.routeOffset = 0, this.routeLook = "", this.routeSlide = {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2160` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2258) · [Before (L2160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2160)

```diff
-           zj: (QQ, WQ) => {
+           dh: (MM, rM) => {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2169` → after: `L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2267) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2169)

```diff
-         if (!this.isLocal(QQ)) throw new Error(`Attempted to ${WQ} for a player that is not the local player`)
+         if (!this.isLocal(MM)) throw new Error(`Attempted to ${rM} for a player that is not the local player`)
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2172-L2173` → after: `L2270-L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2270-L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2270-L2271) · [Before (L2172-L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2172-L2173)

```diff
-         const WQ = this.api.xV(QQ);
-         if (!WQ) throw new Error(`Entity ${QQ} has no replicated position`);
+         const rM = this.api.XE(MM);
+         if (!rM) throw new Error(`Entity ${MM} has no replicated position`);
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2191` → after: `L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2289) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2191)

```diff
-         this.assertLocal(QQ, "open shop"), zQ.k.mB("showShopFromServer", {
+         this.assertLocal(MM, "open shop"), aM.i.Tz("showShopFromServer", {
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2193` → after: `L2291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2291) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2193)

```diff
-           FQ: XQ
+           SS: iM
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2202` → after: `L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2300) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2202)

```diff
-         zQ.k.mB("chat", {
+         aM.i.Tz("chat", {
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2211` → after: `L2309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2309) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2211)

```diff
-         return WQ === jQ.xd ? void 0 : (0, kW.i)(this.api, WQ)
+         return rM === hM.Nc ? void 0 : (0, Xr.j)(this.api, rM)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2215` → after: `L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2313) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2215)

```diff
-         return XQ !== jQ.xd && (0, kW.e)(this.api, XQ, WQ)
+         return iM !== hM.Nc && (0, Xr.i)(this.api, iM, rM)
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2224` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2322) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2224)

```diff
-         if (!this.chunks.dataCleared(QQ, WQ, XQ)) return (0, kW.b)(this.api, QQ, WQ, XQ)
+         if (!this.chunks.dataCleared(MM, rM, iM)) return (0, Xr.e)(this.api, MM, rM, iM)
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2231-L2232` → after: `L2329-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2329-L2330) · [Before (L2231-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2231-L2232)

```diff
-         if (!Object.hasOwn(jQ.Jd, XQ)) throw new Error(`Unknown other-entity setting ${XQ}`);
-         const qQ = jQ.Jd[XQ],
+         if (!Object.hasOwn(hM.ad, iM)) throw new Error(`Unknown other-entity setting ${iM}`);
+         const SM = hM.ad[iM],
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2234-L2236` → after: `L2332-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2332-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2332-L2334) · [Before (L2234-L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2234-L2236)

```diff
-         if (TQ === jQ.xd || !this.deps.beforeWrite()) return;
-         const zQ = (0, uQ.e)(wQ);
-         if (zQ.length > 16384) throw new Error(`The other-entity setting ${XQ}'s value is over 16384 bytes`);
+         if (jM === hM.Nc || !this.deps.beforeWrite()) return;
+         const aM = (0, fM.f)(OM);
+         if (aM.length > 16384) throw new Error(`The other-entity setting ${iM}'s value is over 16384 bytes`);
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2247-L2248` → after: `L2345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2345) · [Before (L2247-L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2247-L2248)

```diff
-         const WQ = zX(QQ),
-           XQ = (WQ === jQ.xd ? 0 : this.api.queries.directorEntity(WQ)) >= jQ.Db.BYTES ? this.api.memoryData(this.api.scratch(), jQ.Db.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
+         const rM = this.drawnEntity(MM);
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2250` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2347) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2250)

```diff
-         if (1 === jQ.Db.headingIsDrawn(XQ, 0)) return jQ.Db.heading(XQ, 0);
+         if (1 === hM.nb.headingIsDrawn(rM, 0)) return hM.nb.heading(rM, 0);
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2252` → after: `L2349-L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2349-L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2349-L2369) · [Before (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2252)

```diff
-         return this.isLocal(QQ) && 0 === (jQ.x.playerFlags(wQ, 0) & jQ.ae.FreeCam) ? jQ.x.heading(wQ, 0) : null
+         return this.isLocal(MM) && 0 === (hM.v.playerFlags(iM, 0) & hM.yd.FreeCam) ? hM.v.heading(iM, 0) : null
+       }
+       getDrawnEyeHeight(MM) {
+         const rM = this.drawnEntity(MM),
+           iM = rM ? hM.nb.eyeHeight(rM, 0) : 0;
+         return iM > 0 ? iM : null
+       }
+       drawnEntity(MM) {
+         const rM = Ui(MM);
+         return rM === hM.Nc || this.api.queries.directorEntity(rM) < hM.nb.BYTES ? null : this.api.scratchData(hM.nb.BYTES, "the drawn DirectorEntity")
+       }
+       isEntityDrawn(MM) {
+         const rM = Ui(MM);
+         return rM !== hM.Nc && 1 === this.api.queries.entityDrawn(rM)
+       }
+       getPlayerIds() {
+ ... (5 more added lines; see GitHub link above)
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2255-L2258` → after: `L2372-L2375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2372-L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2372-L2375) · [Before (L2255-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2255-L2258)

```diff
-         const QQ = jQ.x.playerFlags(this.api.apiView, 0);
-         return 0 === (QQ & jQ.ae.Replay) && this.api.readDrawnPosition(this.api.localId, KW) ? {
-           onGround: 0 !== (QQ & jQ.ae.OnGround),
-           jumpHeld: 0 !== (QQ & jQ.ae.JumpHeld)
+         const MM = hM.v.playerFlags(this.api.apiView, 0);
+         return 0 === (MM & hM.yd.Replay) && this.api.readDrawnPosition(this.api.localId, zi) ? {
+           onGround: 0 !== (MM & hM.yd.OnGround),
+           jumpHeld: 0 !== (MM & hM.yd.JumpHeld)
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2261-L2262` → after: `L2378-L2382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2378-L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2378-L2382) · [Before (L2261-L2262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2261-L2262)

```diff
-       wXQ(QQ) {
-         return this.isLocal(QQ) ? this.items.Ds() : null
+       isLocalPlayerInVehicle() {
+         return (0, Hr.B)(this.deps.localPhysicsType())
+       }
+       TrM(MM) {
+         return this.isLocal(MM) ? this.items.sQ() : null
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2272` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2392) · [Before (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2272)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Ds()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sQ()
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2276` → after: `L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2396) · [Before (L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2276)

```diff
-         const XQ = (0, JW.e)(wQ.b.get("crosshairGameView"), wQ.b.get("crosshairShownOverride"));
+         const iM = (0, Jr.e)(OM.d.get("crosshairGameView"), OM.d.get("crosshairShownOverride"));
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2281-L2283` → after: `L2401-L2403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2401-L2403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2401-L2403) · [Before (L2281-L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2281-L2283)

```diff
-           sQ = 0 === (jQ.x.playerFlags(this.api.apiView, 0) & jQ.ae.ZoomFirstPerson),
-           FQ = null !== (WQ = this.tables.getClientOption("gunshotOrigin")) && void 0 !== WQ ? WQ : null;
-         return (0, JW.l)({
+           PM = 0 === (hM.v.playerFlags(this.api.apiView, 0) & hM.yd.ZoomFirstPerson),
+           nM = null !== (rM = this.tables.getClientOption("gunshotOrigin")) && void 0 !== rM ? rM : null;
+         return (0, Jr.k)({
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2286` → after: `L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2406) · [Before (L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2286)

```diff
-         }, sQ, (0, rW.c)(), FQ)
+         }, PM, (0, dr.b)(), nM)
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2289` → after: `L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2409) · [Before (L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2289)

```diff
-         wQ.b.set({
+         OM.d.set({
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2306` → after: `L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2426) · [Before (L2306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2306)

```diff
-         if (this.isLocal(QQ)) return 0 !== (jQ.x.playerFlags(this.api.apiView, 0) & jQ.ae.Crouching);
+         if (this.isLocal(MM)) return 0 !== (hM.v.playerFlags(this.api.apiView, 0) & hM.yd.Crouching);
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2308` → after: `L2428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2428) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2308)

```diff
-         return WQ !== jQ.xd && 1 === this.api.queries.entityCrouching(WQ)
+         return rM !== hM.Nc && 1 === this.api.queries.entityCrouching(rM)
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2314` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2434) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2314)

```diff
-         return 0 !== (jQ.x.playerFlags(this.api.apiView, 0) & jQ.ae.AttemptingBreak)
+         return 0 !== (hM.v.playerFlags(this.api.apiView, 0) & hM.yd.AttemptingBreak)
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2317` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2437) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2317)

```diff
-         return this.live.CQQ()
+         return this.live.pMM()
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2321` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2441) · [Before (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2321)

```diff
-         for (let WQ = 0; WQ < 3; WQ++) MW.origin[WQ] = jQ.x.MQQ(QQ, 0, WQ), MW.direction[WQ] = jQ.x.actionDir(QQ, 0, WQ);
+         for (let rM = 0; rM < 3; rM++) mi.origin[rM] = hM.v.KMM(MM, 0, rM), mi.direction[rM] = hM.v.actionDir(MM, 0, rM);
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2337-L2338` → after: `L2457-L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2457-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2457-L2458) · [Before (L2337-L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2337-L2338)

```diff
-       vWQ(QQ, WQ, XQ, wQ, qQ) {
-         return 1 === this.api.queries.terrainBlocked(wQ, QQ, WQ, XQ, zX(null !== qQ && void 0 !== qQ ? qQ : null))
+       lrM(MM, rM, iM, OM, SM) {
+         return 1 === this.api.queries.terrainBlocked(OM, MM, rM, iM, Ui(null !== SM && void 0 !== SM ? SM : null))
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2350` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2473) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2350)

```diff
-         return this.chunks.ez(QQ, WQ, XQ)
+         return this.chunks.jP(MM, rM, iM)
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2356` → after: `L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2479) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2356)

```diff
-         return 1 === wQ ? zQ : zQ.rate(wQ)
+         return 1 === OM ? aM : aM.rate(OM)
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2365-L2368` → after: `L2488-L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2488-L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2488-L2491) · [Before (L2365-L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2365-L2368)

```diff
-         if (!zQ) return aW.e;
-         const sQ = null === XQ || void 0 === XQ ? void 0 : XQ.qQ,
-           FQ = null !== (qQ = null === XQ || void 0 === XQ ? void 0 : XQ.maxHearDist) && void 0 !== qQ ? qQ : gW.e,
-           PQ = null !== (TQ = null === XQ || void 0 === XQ ? void 0 : XQ.refDistance) && void 0 !== TQ ? TQ : gW.h;
+         if (!aM) return Wr.b;
+         const PM = null === iM || void 0 === iM ? void 0 : iM.kS,
+           nM = null !== (SM = null === iM || void 0 === iM ? void 0 : iM.maxHearDist) && void 0 !== SM ? SM : hr.i,
+           QM = null !== (jM = null === iM || void 0 === iM ? void 0 : iM.refDistance) && void 0 !== jM ? jM : hr.l;
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2374` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2497) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2374)

```diff
-             if (!this.api.readPosition(QQ, ZW)) return aW.e;
+             if (!this.api.readPosition(MM, ni)) return Wr.b;
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2384-L2385` → after: `L2507-L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2507-L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2507-L2508) · [Before (L2384-L2385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2384-L2385)

```diff
-           if (0 === jQ.x.viewProj(QQ, 0, 3) && 0 === jQ.x.viewProj(QQ, 0, 7) && 0 === jQ.x.viewProj(QQ, 0, 11)) return null;
-           for (let WQ = 0; WQ < 3; WQ++) OW[WQ] = jQ.x.eye(QQ, 0, WQ)
+           if (0 === hM.v.viewProj(MM, 0, 3) && 0 === hM.v.viewProj(MM, 0, 7) && 0 === hM.v.viewProj(MM, 0, 11)) return null;
+           for (let rM = 0; rM < 3; rM++) Qi[rM] = hM.v.eye(MM, 0, rM)
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2387` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2510) · [Before (L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2387)

```diff
-         return Number.isFinite(OW[0] + OW[1] + OW[2]) ? OW : null
+         return Number.isFinite(Qi[0] + Qi[1] + Qi[2]) ? Qi : null
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2390` → after: `L2513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2513) · [Before (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2390)

```diff
-         if (!Number.isInteger(wQ) || wQ < 0 || wQ > 65535) throw new Error(`Invalid block id ${wQ}`);
+         if (!Number.isInteger(OM) || OM < 0 || OM > 65535) throw new Error(`Invalid block id ${OM}`);
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2396` → after: `L2519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2519) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2396)

```diff
-         if (1 === this.api.queries.hA(qQ, TQ, zQ, wQ)) {
+         if (1 === this.api.queries.cW(SM, jM, aM, OM)) {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2425` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2548) · [Before (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2425)

```diff
-                 look: jQ.sc.FlatOnTop,
+                 look: hM.Ob.FlatOnTop,
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2428` → after: `L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2551) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2428)

```diff
-                 look: jQ.sc.FlatOpaque,
+                 look: hM.Ob.FlatOpaque,
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2431` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2554) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2431)

```diff
-                 look: jQ.sc.Flat,
+                 look: hM.Ob.Flat,
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2436` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2559) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2436)

```diff
-                 look: jQ.sc.Chevrons, colour: [...(0, IW.c)(QQ.colour), QQ.alpha]
+                 look: hM.Ob.Chevrons, colour: [...(0, yr.c)(MM.colour), MM.alpha]
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2440` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2563) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2440)

```diff
-                 look: jQ.sc.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: hM.Ob.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2452` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2575) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2452)

```diff
-             const WQ = null !== (sQ = QQ.uvs) && void 0 !== sQ ? sQ : [];
+             const rM = null !== (PM = MM.uvs) && void 0 !== PM ? PM : [];
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2455` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2578) · [Before (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2455)

```diff
-               zQ.setFloat32(4 * (3 * XQ + QQ), null !== (FQ = WQ[QQ]) && void 0 !== FQ ? FQ : 0, !0)
+               aM.setFloat32(4 * (3 * iM + MM), null !== (nM = rM[MM]) && void 0 !== nM ? nM : 0, !0)
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2460-L2461` → after: `L2583-L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2583-L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2583-L2584) · [Before (L2460-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2460-L2461)

```diff
-         }(QQ, (0, FW.g)(WQ));
-         return (0, jQ.Le)(qQ, 0, wQ, TQ, zQ, XQ, sQ, QQ.indices.length, FQ) && this.liveMeshes.add(wQ), wQ
+         }(MM, (0, Lr.l)(rM));
+         return (0, hM.Be)(SM, 0, OM, jM, aM, iM, PM, MM.indices.length, nM) && this.liveMeshes.add(OM), OM
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2468-L2470` → after: `L2591-L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2591-L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2591-L2593) · [Before (L2468-L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2468-L2470)

```diff
-         WQ.anchor && (qQ |= jQ.tc.Anchor, QX[0] = WQ.anchor[0], QX[1] = WQ.anchor[1], QX[2] = WQ.anchor[2]), void 0 !== WQ.visible && (qQ |= jQ.tc.Visible), WQ.uvOffset && (qQ |= jQ.tc.UvOffset, WX[0] = WQ.uvOffset[0], WX[1] = WQ.uvOffset[1]);
-         const TQ = null !== (XQ = WQ.visibility) && void 0 !== XQ ? XQ : 1;
-         void 0 !== WQ.visibility && (qQ |= jQ.tc.Visibility), WQ.scale && (qQ |= jQ.tc.Scale, XX[0] = WQ.scale[0], XX[1] = WQ.scale[1], XX[2] = WQ.scale[2]), 0 !== qQ && (0, jQ.Re)(wQ, 0, QQ, qQ, WQ.visible ? 1 : 0, QX, WX, TQ, XX)
+         rM.anchor && (SM |= hM.Sb.Anchor, Hi[0] = rM.anchor[0], Hi[1] = rM.anchor[1], Hi[2] = rM.anchor[2]), void 0 !== rM.visible && (SM |= hM.Sb.Visible), rM.uvOffset && (SM |= hM.Sb.UvOffset, Ji[0] = rM.uvOffset[0], Ji[1] = rM.uvOffset[1]);
+         const jM = null !== (iM = rM.visibility) && void 0 !== iM ? iM : 1;
+         void 0 !== rM.visibility && (SM |= hM.Sb.Visibility), rM.scale && (SM |= hM.Sb.Scale, di[0] = rM.scale[0], di[1] = rM.scale[1], di[2] = rM.scale[2]), 0 !== SM && (0, hM.Ie)(OM, 0, MM, SM, rM.visible ? 1 : 0, Hi, Ji, jM, di)
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2474` → after: `L2597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2597) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2474)

```diff
-         WQ && !(0, jQ.Ne)(WQ, 0, QQ) || this.liveMeshes.delete(QQ)
+         rM && !(0, hM.Ee)(rM, 0, MM) || this.liveMeshes.delete(MM)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2523` → after: `L2649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2649) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2523)

```diff
-         const WQ = `${QQ.colour} ${QQ.alpha}`;
+         const rM = `${MM.colour} ${MM.alpha}`;
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2565` → after: `L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2691) · [Before (L2565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2565)

```diff
-         for (; XQ < QQ.length && (0, jQ.We)(WQ, 0, QQ[XQ]);) XQ++;
+         for (; iM < MM.length && (0, hM.Qe)(rM, 0, MM[iM]);) iM++;
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2569` → after: `L2695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2695) · [Before (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2569)

```diff
-           (wQ ? (0, jQ.Of)(WQ, 0, wQ.width, wQ.alpha, 1, wQ.endAtSolidFace ? 1 : 0) : (0, jQ.Of)(WQ, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (OM ? (0, hM.Vf)(rM, 0, OM.width, OM.alpha, 1, OM.endAtSolidFace ? 1 : 0) : (0, hM.Vf)(rM, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2572` → after: `L2698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2698) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2572)

```diff
-         void 0 !== qQ && (0, jQ.Mf)(WQ, 0, null !== qQ && void 0 !== qQ ? qQ : 0, null === qQ ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== SM && (0, hM.Qf)(rM, 0, null !== SM && void 0 !== SM ? SM : 0, null === SM ? 1 : 0) && (this.pendingFar = void 0)
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2577` → after: `L2703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2703) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2577)

```diff
-         XQ && wQ !== jQ.xd && (0, jQ.Yf)(XQ, 0, wQ, WQ)
+         iM && OM !== hM.Nc && (0, hM.bg)(iM, 0, OM, rM)
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2582` → after: `L2708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2708) · [Before (L2582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2582)

```diff
-         XQ && wQ !== jQ.xd && sX(XQ, wQ, WQ)
+         iM && OM !== hM.Nc && Gi(iM, OM, rM)
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2598` → after: `L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2724) · [Before (L2598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2598)

```diff
-         return WQ !== jQ.xd && 1 === this.api.queries.entityInteractable(WQ)
+         return rM !== hM.Nc && 1 === this.api.queries.entityInteractable(rM)
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2611` → after: `L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2737) · [Before (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2611)

```diff
-           return null !== QQ && void 0 !== QQ ? QQ : null
+           return null !== MM && void 0 !== MM ? MM : null
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2618` → after: `L2744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2744) · [Before (L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2618)

```diff
-         return mW[0] = jQ.x.eye(QQ, 0, 0), mW[1] = jQ.x.eye(QQ, 0, 1), mW[2] = jQ.x.eye(QQ, 0, 2), mW
+         return Li[0] = hM.v.eye(MM, 0, 0), Li[1] = hM.v.eye(MM, 0, 1), Li[2] = hM.v.eye(MM, 0, 2), Li
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2621` → after: `L2747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2747) · [Before (L2621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2621)

```diff
-         return jQ.x.cameraFar(this.api.apiView, 0)
+         return hM.v.cameraFar(this.api.apiView, 0)
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2632` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2758) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2632)

```diff
-         WQ && XQ !== jQ.xd && (0, jQ.Be)(WQ, 0, XQ)
+         rM && iM !== hM.Nc && (0, hM.me)(rM, 0, iM)
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2637-L2639` → after: `L2763-L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2763-L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2763-L2765) · [Before (L2637-L2639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2637-L2639)

```diff
-         XQ && xW(XQ, 0, NW.d.Chat, (0, uQ.e)((0, NW.j)({
-           cg: QQ,
-           Ag: WQ
+         iM && Si(iM, 0, ai.d.Chat, (0, fM.f)((0, ai.k)({
+           Kz: MM,
+           qz: rM
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2643` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2769) · [Before (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2643)

```diff
-         QQ.length <= 119 && this.sendChat(`/${QQ}`)
+         MM.length <= 119 && this.sendChat(`/${MM}`)
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2651` → after: `L2777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2777) · [Before (L2651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2651)

```diff
-           sQ = qQ.ez(QQ, WQ, XQ),
+           PM = SM.jP(MM, rM, iM),
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2654-L2655` → after: `L2780-L2781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2780-L2781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2780-L2781) · [Before (L2654-L2655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2654-L2655)

```diff
-           const [wQ, TQ, PQ] = [QQ - FQ.x, WQ - FQ.y, XQ - FQ.z], gQ = qX[qQ.ez(wQ, TQ, PQ)], JQ = null === gQ || void 0 === gQ ? void 0 : gQ.positions.some((QQ => QQ.id === sQ && QQ.x === FQ.x && QQ.y === FQ.y && QQ.z === FQ.z));
-           for (const QQ of (JQ && gQ ? gQ : FQ.main).positions) qQ.ez(wQ + QQ.x, TQ + QQ.y, PQ + QQ.z) === QQ.id && zQ(wQ + QQ.x, TQ + QQ.y, PQ + QQ.z, 0, QQ.id)
+           const [OM, jM, QM] = [MM - nM.x, rM - nM.y, iM - nM.z], zM = li[SM.jP(OM, jM, QM)], LM = null === zM || void 0 === zM ? void 0 : zM.positions.some((MM => MM.id === PM && MM.x === nM.x && MM.y === nM.y && MM.z === nM.z));
+           for (const MM of (LM && zM ? zM : nM.main).positions) SM.jP(OM + MM.x, jM + MM.y, QM + MM.z) === MM.id && aM(OM + MM.x, jM + MM.y, QM + MM.z, 0, MM.id)
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2661` → after: `L2787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2787) · [Before (L2661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2661)

```diff
-             zQ(wQ, TQ, sQ, JQ.id, qQ.ez(wQ, TQ, sQ))
+             aM(OM, jM, PM, LM.id, SM.jP(OM, jM, PM))
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2665` → after: `L2791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2791) · [Before (L2665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2665)

```diff
-           let FQ = qQ.ez(QQ, WQ + 1, XQ);
+           let nM = SM.jP(MM, rM + 1, iM);
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2677` → after: `L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2803) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2677)

```diff
-         return 0 !== qQ && 0 !== TQ && wQ.blockRootId(QQ) === wQ.blockRootId(WQ) ? zQ && XQ !== TQ ? TQ : void 0 : 0 === TQ || !zQ && 0 !== XQ ? zQ ? 0 : void 0 : TQ
+         return 0 !== SM && 0 !== jM && OM.blockRootId(MM) === OM.blockRootId(rM) ? aM && iM !== jM ? jM : void 0 : 0 === jM || !aM && 0 !== iM ? aM ? 0 : void 0 : jM
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2680` → after: `L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2806) · [Before (L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2680)

```diff
-     const PX = jQ.Gc + jQ.Kc * jQ.Tc.BYTES,
+     const ei = hM.bc + hM.fc * hM.jc.BYTES,
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2685-L2686` → after: `L2811-L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2811-L2812) · [Before (L2685-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2685-L2686)

```diff
-         bg: 0,
-         QF: null,
+         Ha: 0,
+         Pz: null,
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2690` → after: `L2816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2816) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2690)

```diff
-         get: () => () => jQ.Gd
+         get: () => () => hM.Yc
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2702` → after: `L2828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2828) · [Before (L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2702)

```diff
-         this.deps = QQ, this.Sq = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(jQ.Kc), this.ids = new Uint16Array(jQ.Kc), this.amounts = new Uint16Array(jQ.Kc), this.attrRead = new Float64Array(jQ.Kc).fill(-1 … [truncated]
+         this.deps = MM, this.ti = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(hM.fc), this.ids = new Uint16Array(hM.fc), this.amounts = new Uint16Array(hM.fc), this.attrRead = new Float64Array(hM.fc).fill(-1 … [truncated]
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2718` → after: `L2844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2844) · [Before (L2718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2718)

```diff
-         return Number.isInteger(QQ) && QQ >= 0 && QQ < this.len && 0 !== this.ids[QQ] && null !== (WQ = this.facades[QQ]) && void 0 !== WQ ? WQ : null
+         return Number.isInteger(MM) && MM >= 0 && MM < this.len && 0 !== this.ids[MM] && null !== (rM = this.facades[MM]) && void 0 !== rM ? rM : null
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2725` → after: `L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2851) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2725)

```diff
-         for (let WQ = 0; WQ < Math.min(jQ.Pd, this.len); WQ++) QQ.push(this.slot(WQ));
+         for (let rM = 0; rM < Math.min(hM.gd, this.len); rM++) MM.push(this.slot(rM));
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2730` → after: `L2856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2856) · [Before (L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2730)

```diff
-         for (let WQ = 0; WQ < Math.min(jQ.Pd - jQ.l, this.len); WQ++) 0 === this.ids[WQ] && QQ++;
+         for (let rM = 0; rM < Math.min(hM.gd - hM.i, this.len); rM++) 0 === this.ids[rM] && MM++;
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2735` → after: `L2861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2861) · [Before (L2735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2735)

```diff
-         for (let wQ = 0; wQ < Math.min(jQ.Pd, this.len); wQ++) {
+         for (let OM = 0; OM < Math.min(hM.gd, this.len); OM++) {
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2738` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2864) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2738)

```diff
-           if ((null === qQ || void 0 === qQ ? void 0 : qQ.name) === QQ) WQ += null !== (XQ = qQ.amount) && void 0 !== XQ ? XQ : 1
+           if ((null === SM || void 0 === SM ? void 0 : SM.name) === MM) rM += null !== (iM = SM.amount) && void 0 !== iM ? iM : 1
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2744` → after: `L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2870) · [Before (L2744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2744)

```diff
-         return null !== (WQ = this.instances[QQ]) && void 0 !== WQ ? WQ : 0
+         return null !== (rM = this.instances[MM]) && void 0 !== rM ? rM : 0
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2765` → after: `L2891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2891) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2765)

```diff
-         this.Sq[0] = QQ, this.Sq[1] = WQ, this.Sq[2] = XQ, this.version++
+         this.ti[0] = MM, this.ti[1] = rM, this.ti[2] = iM, this.version++
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2769-L2771` → after: `L2895-L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2895-L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2895-L2897) · [Before (L2769-L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2769-L2771)

```diff
-           WQ = jQ.x.inventoryViewPtr(QQ, 0),
-           XQ = jQ.x.inventoryVersion(QQ, 0),
-           wQ = jQ.x.selectedSlot(QQ, 0);
+           rM = hM.v.inventoryViewPtr(MM, 0),
+           iM = hM.v.inventoryVersion(MM, 0),
+           OM = hM.v.selectedSlot(MM, 0);
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2773` → after: `L2899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2899) · [Before (L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2773)

```diff
-         const qQ = jQ.x.slotIcon(QQ, 0);
+         const SM = hM.v.slotIcon(MM, 0);
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2777` → after: `L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2903) · [Before (L2777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2777)

```diff
-           zQ = TQ ? Math.min(TQ.getUint32(0, !0), jQ.Kc) : 0;
+           aM = jM ? Math.min(jM.getUint32(0, !0), hM.fc) : 0;
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2780-L2782` → after: `L2906-L2908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2906-L2908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2906-L2908) · [Before (L2780-L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2780-L2782)

```diff
-         for (let FQ = 0; FQ < jQ.Kc; FQ++) {
-           const QQ = jQ.Gc + FQ * jQ.Tc.BYTES,
-             WQ = null !== TQ && FQ < zQ ? jQ.Tc.item(TQ, QQ) : 0;
+         for (let nM = 0; nM < hM.fc; nM++) {
+           const MM = hM.bc + nM * hM.jc.BYTES,
+             rM = null !== jM && nM < aM ? hM.jc.item(jM, MM) : 0;
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2787-L2788` → after: `L2913-L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2913-L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2913-L2914) · [Before (L2787-L2788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2787-L2788)

```diff
-           const XQ = jQ.Tc.amount(TQ, QQ),
-             wQ = jQ.Tc.attrVersion(TQ, QQ);
+           const iM = hM.jc.amount(jM, MM),
+             OM = hM.jc.attrVersion(jM, MM);
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2824` → after: `L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2950) · [Before (L2824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2824)

```diff
-           FQ += 8 + (0, rQ.te)(WQ);
+           nM += 8 + (0, mM.oe)(rM);
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2850-L2851` → after: `L2976-L2977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L2976-L2977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2976-L2977) · [Before (L2850-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2850-L2851)

```diff
-           sQ = zQ === jQ.Gd ? jQ.Zb : null !== (qQ = null === (TQ = this.extras()) || void 0 === TQ ? void 0 : TQ[1]) && void 0 !== qQ ? qQ : jQ.Zb;
-         return this.settle(zQ), sQ === jQ.Zb ? null : sQ
+           PM = aM === hM.Yc ? hM.Gb : null !== (SM = null === (jM = this.extras()) || void 0 === jM ? void 0 : jM[1]) && void 0 !== SM ? SM : hM.Gb;
+         return this.settle(aM), PM === hM.Gb ? null : PM
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2878` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3004) · [Before (L2878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2878)

```diff
-         const sQ = TQ === jQ.Gd ? null : this.extras();
+         const PM = jM === hM.Yc ? null : this.extras();
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2882-L2883` → after: `L3008-L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3008-L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3008-L3009) · [Before (L2882-L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2882-L2883)

```diff
-             bg: QQ,
-             QF: WQ === jQ.Zb ? null : WQ,
+             Ha: MM,
+             Pz: rM === hM.Gb ? null : rM,
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2906` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3032) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2906)

```diff
-           if (zQ.length > 1024) return TQ(new Error(`The crafting station ${QQ}'s name is over 1024 bytes`)), null;
+           if (aM.length > 1024) return jM(new Error(`The crafting station ${MM}'s name is over 1024 bytes`)), null;
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2912-L2913` → after: `L3038-L3039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3038-L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3038-L3039) · [Before (L2912-L2913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2912-L2913)

```diff
-           FQ = qQ.queries.craftingView(null !== (wQ = null === zQ || void 0 === zQ ? void 0 : zQ.length) && void 0 !== wQ ? wQ : 0, sQ ? WQ : 0, sQ ? XQ : 0);
-         return FQ < jQ.ub.BYTES ? (qQ.reportCorruption(`crafting_view's answer of ${FQ} bytes`), null) : qQ.memoryData(qQ.scratch(), FQ, 1, "crafting_view's answer")
+           nM = SM.queries.craftingView(null !== (OM = null === aM || void 0 === aM ? void 0 : aM.length) && void 0 !== OM ? OM : 0, PM ? rM : 0, PM ? iM : 0);
+         return nM < hM.gb.BYTES ? (SM.reportCorruption(`crafting_view's answer of ${nM} bytes`), null) : SM.memoryData(SM.scratch(), nM, 1, "crafting_view's answer")
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2926-L2927` → after: `L3052-L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3052-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3052-L3053) · [Before (L2926-L2927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2926-L2927)

```diff
-         if (QQ === jQ.Fd)(0, nW.c)();
-         else if (QQ !== jQ.Gd) {
+         if (MM === hM.Uc)(0, Oi.e)();
+         else if (MM !== hM.Yc) {
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2930-L2931` → after: `L3056-L3057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3056-L3057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3056-L3057) · [Before (L2930-L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2930-L2931)

```diff
-             return (0, nW.c)(), (0, jQ.dg)(QQ, WQ, XQ)
-           }(WQ, 0, QQ) || this.deps.onError(new Error(`Sync op ${QQ}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, Oi.e)(), (0, hM.qg)(MM, rM, iM)
+           }(rM, 0, MM) || this.deps.onError(new Error(`Sync op ${MM}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2933` → after: `L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3059) · [Before (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2933)

```diff
-         return this.stopped || this.refresh(), QQ !== jQ.Gd
+         return this.stopped || this.refresh(), MM !== hM.Yc
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2940` → after: `L3066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3066) · [Before (L2940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2940)

```diff
-       bX = 1.2 * jW.h.ny,
+       fi = 1.2 * lr.f.Sy,
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2948` → after: `L3074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3074) · [Before (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2948)

```diff
-       return WQ || (aX.size >= 64 && aX.clear(), WQ = vX.encode(`{"emitRate":${QQ}}`), aX.set(QQ, WQ)), WQ
+       return rM || (xi.size >= 64 && xi.clear(), rM = Yi.encode(`{"emitRate":${MM}}`), xi.set(MM, rM)), rM
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2952` → after: `L3078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3078) · [Before (L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2952)

```diff
-       return Number.isFinite(QQ) && QQ > 0 ? QQ : 0
+       return Number.isFinite(MM) && MM > 0 ? MM : 0
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2968` → after: `L3094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3094) · [Before (L2968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2968)

```diff
-       return QQ.length > jQ._d.MaxOpts ? (XQ(new Error(`${WQ}'s particle opts are over ${jQ._d.MaxOpts} bytes of JSON`)), null) : QQ
+       return MM.length > hM.ud.MaxOpts ? (iM(new Error(`${rM}'s particle opts are over ${hM.ud.MaxOpts} bytes of JSON`)), null) : MM
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2992-L2993` → after: `L3118-L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3118-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3118-L3119) · [Before (L2992-L2993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2992-L2993)

```diff
-           qQ = null !== (XQ = WQ.half) && void 0 !== XQ ? XQ : GX;
-         if (!wQ || this.live >= jQ._d.MaxLiveKeys || this.nextKey > jQ._d.MaxKey || !iX(WQ.pos, qQ)) return RX;
+           SM = null !== (iM = rM.half) && void 0 !== iM ? iM : Zi;
+         if (!OM || this.live >= hM.ud.MaxLiveKeys || this.nextKey > hM.ud.MaxKey || !Bi(rM.pos, SM)) return Ki;
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2999` → after: `L3125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3125) · [Before (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L2999)

```diff
-               yJ: QQ.yJ,
+               vL: MM.vL,
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3007-L3009` → after: `L3133-L3135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3133-L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3133-L3135) · [Before (L3007-L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3007-L3009)

```diff
-               gravity: null !== (WQ = QQ.gravity) && void 0 !== WQ ? WQ : GX,
-               dir1: null !== (XQ = QQ.dir1) && void 0 !== XQ ? XQ : pX,
-               dir2: null !== (wQ = QQ.dir2) && void 0 !== wQ ? wQ : pX,
+               gravity: null !== (rM = MM.gravity) && void 0 !== rM ? rM : Zi,
+               dir1: null !== (iM = MM.dir1) && void 0 !== iM ? iM : ki,
+               dir2: null !== (OM = MM.dir2) && void 0 !== OM ? OM : ki,
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3015` → after: `L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3141) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3015)

```diff
-         return zQ && (0, jQ.mf)(wQ, 0, TQ, 0, jQ._d.PresetNone, 0, dX, HX, zQ) ? (this.nextKey++, this.live++, this.started = !0, new CX(this, this.session, TQ, QQ, qQ)) : RX
+         return aM && (0, hM.jf)(OM, 0, jM, 0, hM.ud.PresetNone, 0, Ni, Ai, aM) ? (this.nextKey++, this.live++, this.started = !0, new Ti(this, this.session, jM, MM, SM)) : Ki
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3027` → after: `L3153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3153) · [Before (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3027)

```diff
-         qQ && (0, jQ.kf)(WQ, 0, 0, jQ._d.PresetNone, jQ._d.HasBox, 0, dX, HX, qQ)
+         SM && (0, hM.hf)(rM, 0, 0, hM.ud.PresetNone, hM.ud.HasBox, 0, Ni, Ai, SM)
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3031-L3032` → after: `L3157-L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3157-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3157-L3158) · [Before (L3031-L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3031-L3032)

```diff
-           qQ = Math.min(Math.floor(XQ), jQ._d.MaxBurst);
-         if (!wQ || !Object.hasOwn(jQ.vc, QQ) || !(qQ > 0)) return;
+           SM = Math.min(Math.floor(iM), hM.ud.MaxBurst);
+         if (!OM || !Object.hasOwn(hM.Vb, MM) || !(SM > 0)) return;
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3035` → after: `L3161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3161) · [Before (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3035)

```diff
-         Number.isFinite(dX[0] + dX[1] + dX[2]) && (0, jQ.kf)(wQ, 0, 0, jQ.vc[QQ], jQ._d.HasBox, qQ, dX, HX, UX)
+         Number.isFinite(Ni[0] + Ni[1] + Ni[2]) && (0, hM.hf)(OM, 0, 0, hM.Vb[MM], hM.ud.HasBox, SM, Ni, Ai, oi)
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3040` → after: `L3166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3166) · [Before (L3040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3040)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !QQ || (0, jQ.nf)(QQ, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !MM || (0, hM.lf)(MM, 0)
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3047` → after: `L3173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3173) · [Before (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3047)

```diff
-         XQ && (0, jQ.of)(XQ, 0, WQ) && this.live--
+         iM && (0, hM.nf)(iM, 0, rM) && this.live--
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3064` → after: `L3190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3190) · [Before (L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3064)

```diff
-           iX(QQ, this.half) && (0, jQ.sf)(XQ, 0, this.key, jQ._d.HasBox, dX, HX, UX)
+           Bi(MM, this.half) && (0, hM.rf)(iM, 0, this.key, hM.ud.HasBox, Ni, Ai, oi)
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3070` → after: `L3196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3196) · [Before (L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3070)

```diff
-         WQ && XQ !== this.rate && (0, jQ.sf)(WQ, 0, this.key, 0, GX, GX, lX(XQ)) && (this.rate = XQ, this.emitted ||= XQ > 0)
+         rM && iM !== this.rate && (0, hM.rf)(rM, 0, this.key, 0, Zi, Zi, vi(iM)) && (this.rate = iM, this.emitted ||= iM > 0)
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3074-L3075` → after: `L3200-L3201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3200-L3201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3200-L3201) · [Before (L3074-L3075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3074-L3075)

```diff
-           XQ = Math.min(Math.floor(QQ), jQ._d.MaxBurst);
-         WQ && XQ > 0 && (0, jQ.kf)(WQ, 0, this.key, jQ._d.PresetNone, 0, XQ, GX, GX, UX) && (this.emitted = !0)
+           iM = Math.min(Math.floor(MM), hM.ud.MaxBurst);
+         rM && iM > 0 && (0, hM.hf)(rM, 0, this.key, hM.ud.PresetNone, 0, iM, Zi, Zi, oi) && (this.emitted = !0)
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3079` → after: `L3205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3205) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3079)

```diff
-           qQ = Math.min(Math.floor(XQ), jQ._d.MaxPoints, Math.floor(WQ.length / 4));
+           SM = Math.min(Math.floor(iM), hM.ud.MaxPoints, Math.floor(rM.length / 4));
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3081-L3082` → after: `L3207-L3208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3207-L3208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3207-L3208) · [Before (L3081-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3081-L3082)

```diff
-         const TQ = new Uint8Array(WQ.buffer, WQ.byteOffset, qQ * jQ._d.PointBytes);
-         (0, jQ.lf)(wQ, 0, this.key, qQ, QQ, TQ) && (this.emitted = !0)
+         const jM = new Uint8Array(rM.buffer, rM.byteOffset, SM * hM.ud.PointBytes);
+         (0, hM.if)(OM, 0, this.key, SM, MM, jM) && (this.emitted = !0)
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3091` → after: `L3217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3217) · [Before (L3091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3091)

```diff
-         (0, jQ.sf)(XQ, 0, this.key, 0, GX, GX, wQ)
+         (0, hM.rf)(iM, 0, this.key, 0, Zi, Zi, OM)
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3095` → after: `L3221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3221) · [Before (L3095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3095)

```diff
-         this.stopped = !0, QQ && (this.emitted ? (this.rate > 0 && (0, jQ.sf)(QQ, 0, this.key, 0, GX, GX, lX(0)), setTimeout((() => {
+         this.stopped = !0, MM && (this.emitted ? (this.rate > 0 && (0, hM.rf)(MM, 0, this.key, 0, Zi, Zi, vi(0)), setTimeout((() => {
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3106` → after: `L3232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3232) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3106)

```diff
-     const uX = tW.l,
+     const Vi = qr.q,
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3117` → after: `L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3243) · [Before (L3117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3117)

```diff
-         if (QQ !== jQ.xd && !UQ(wQ[TQ])) {
+         if (MM !== hM.Nc && !GM(OM[jM])) {
```

#### 326. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3132` → after: `L3258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3258) · [Before (L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3132)

```diff
-       return QQ.length >= WQ ? QQ : new Int32Array(Math.max(WQ, 2 * QQ.length))
+       return MM.length >= rM ? MM : new Int32Array(Math.max(rM, 2 * MM.length))
```

#### 327. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3144-L3146` → after: `L3270-L3272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3270-L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3270-L3272) · [Before (L3144-L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3144-L3146)

```diff
-         for (let QQ = 0; QQ + jQ.hc.BYTES <= sQ;) {
-           const WQ = jQ.hc.len(FQ, QQ);
-           wQ(jQ.hc.serverId(FQ, QQ), tX(FQ, QQ, WQ)), QQ += jQ.hc.BYTES + (0, rQ.te)(WQ)
+         for (let MM = 0; MM + hM.Jb.BYTES <= PM;) {
+           const rM = hM.Jb.len(nM, MM);
+           OM(hM.Jb.serverId(nM, MM), OO(nM, MM, rM)), MM += hM.Jb.BYTES + (0, mM.oe)(rM)
```

#### 328. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3154` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3280) · [Before (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3154)

```diff
-       const zQ = jQ.hc.kind(QQ, WQ),
+       const aM = hM.Jb.kind(MM, rM),
```

#### 329. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3157-L3161` → after: `L3283-L3287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3283-L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3283-L3287) · [Before (L3157-L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3157-L3161)

```diff
-       const FQ = jQ.hc.variation(QQ, WQ),
-         PQ = jQ.hc.pose(QQ, WQ),
-         gQ = jQ.hc.meta(QQ, WQ),
-         JQ = jQ.hc.mesh(QQ, WQ),
-         rQ = 0 !== (jQ.hc.flags(QQ, WQ) & jQ.ec.HasOpts),
+       const nM = hM.Jb.variation(MM, rM),
+         QM = hM.Jb.pose(MM, rM),
+         zM = hM.Jb.meta(MM, rM),
+         LM = hM.Jb.mesh(MM, rM),
+         mM = 0 !== (hM.Jb.flags(MM, rM) & hM.Ib.HasOpts),
```

#### 330. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3165-L3169` → after: `L3291-L3295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3291-L3295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3291-L3295) · [Before (L3165-L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3165-L3169)

```diff
-         variation: FQ === jQ.Ed ? void 0 : null !== (wQ = null !== (qQ = null === IQ || void 0 === IQ ? void 0 : IQ[FQ]) && void 0 !== qQ ? qQ : null === IQ || void 0 === IQ ? void 0 : IQ[0]) && void 0 !== wQ ? wQ : "default",
-         pose: PQ === jQ.Cc ? void 0 : null !== (TQ = jQ.Vb[PQ]) && void 0 !== TQ ? TQ : jQ.Vb[0],
-         metaInfo: gQ === jQ.Cc ? void 0 : jQ.pd[gQ],
-         meshKind: JQ === jQ.Cc ? void 0 : jQ.nd[JQ],
-         meshOpts: rQ ? LX.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + WQ + jQ.hc.BYTES, XQ)) : void 0
+         variation: nM === hM.Tc ? void 0 : null !== (OM = null !== (SM = null === HM || void 0 === HM ? void 0 : HM[nM]) && void 0 !== SM ? SM : null === HM || void 0 === HM ? void 0 : HM[0]) && void 0 !== OM ? OM : "default",
+         pose: QM === hM.$b ? void 0 : null !== (jM = hM.Bb[QM]) && void 0 !== jM ? jM : hM.Bb[0],
+         metaInfo: zM === hM.$b ? void 0 : hM.Fc[zM],
+         meshKind: LM === hM.$b ? void 0 : hM.Bc[LM],
+         meshOpts: mM ? ci.decode(new Uint8Array(MM.buffer, MM.byteOffset + rM + hM.Jb.BYTES, iM)) : void 0
```

#### 331. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3176` → after: `L3302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3302) · [Before (L3176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3176)

```diff
-         this.deps = QQ, this.wanted = 0, this.Ds = !1, this.refused = !1
+         this.deps = MM, this.wanted = 0, this.sQ = !1, this.refused = !1
```

#### 332. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3179` → after: `L3305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3305) · [Before (L3179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3179)

```diff
-         return this.Ds
+         return this.sQ
```

#### 333. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3182` → after: `L3308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3308) · [Before (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3182)

```diff
-         this.wanted = WQ ? this.wanted | QQ : this.wanted & ~QQ;
+         this.wanted = rM ? this.wanted | MM : this.wanted & ~MM;
```

#### 334. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3184` → after: `L3310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3310) · [Before (L3184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3184)

```diff
-         if (XQ === this.Ds) return;
+         if (iM === this.sQ) return;
```

#### 335. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3186` → after: `L3312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3312) · [Before (L3186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3186)

```diff
-         null !== wQ ? (0, jQ.gg)(wQ, 0, XQ ? 1 : 0) ? (this.Ds = XQ, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Ds = !1
+         null !== OM ? (0, hM.ug)(OM, 0, iM ? 1 : 0) ? (this.sQ = iM, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sQ = !1
```

#### 336. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3195` → after: `L3321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3321) · [Before (L3195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3195)

```diff
-         return this.complete || this.fill(), null !== (WQ = this.entries.get("string" === typeof QQ ? QQ : String(QQ))) && void 0 !== WQ ? WQ : null
+         return this.complete || this.fill(), null !== (rM = this.entries.get("string" === typeof MM ? MM : String(MM))) && void 0 !== rM ? rM : null
```

#### 337. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3254` → after: `L3380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3380) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3254)

```diff
-     var YX = XQ(5140);
+     var nO = iM(5200);
```

#### 338. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3257-L3258` → after: `L3383-L3384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3383-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3383-L3384) · [Before (L3257-L3258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3257-L3258)

```diff
-       if ("message" !== QQ.type || QQ.cg !== YX.gc.NewClientOptions || QQ.payloadKind !== rQ.rc.Msgpack) return null;
-       const WQ = (0, uQ.d)(QQ.payload);
+       if ("message" !== MM.type || MM.Kz !== nO.hc.NewClientOptions || MM.payloadKind !== mM.hc.Msgpack) return null;
+       const rM = (0, fM.c)(MM.payload);
```

#### 339. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3262-L3263` → after: `L3388-L3389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3388-L3389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3388-L3389) · [Before (L3262-L3263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3262-L3263)

```diff
-     var ZX = XQ(1273),
-       OX = XQ(36926);
+     var zO = iM(1242),
+       LO = iM(37559);
```

#### 340. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3268-L3270` → after: `L3394-L3396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3394-L3396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3394-L3396) · [Before (L3268-L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3268-L3270)

```diff
-         case jQ.qe.ToggleMenu: {
-           const QQ = jQ.N[WQ];
-           zQ.k.mB("toggleMenu", void 0 === QQ ? "inventory" : `inventory|${QQ}`);
+         case hM._d.ToggleMenu: {
+           const MM = hM.H[rM];
+           aM.i.Tz("toggleMenu", void 0 === MM ? "inventory" : `inventory|${MM}`);
```

#### 341. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3273-L3274` → after: `L3399-L3400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3399-L3400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3399-L3400) · [Before (L3273-L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3273-L3274)

```diff
-         case jQ.qe.EditBoard:
-           zQ.k.mB("EditBoard", {
+         case hM._d.EditBoard:
+           aM.i.Tz("EditBoard", {
```

#### 342. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3278-L3280` → after: `L3404-L3406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3404-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3404-L3406) · [Before (L3278-L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3278-L3280)

```diff
-         case jQ.qe.EditCodeBlock:
-         case jQ.qe.ViewCodeBlock:
-           zQ.k.mB("EditCodeBlock", {
+         case hM._d.EditCodeBlock:
+         case hM._d.ViewCodeBlock:
+           aM.i.Tz("EditCodeBlock", {
```

#### 343. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3282` → after: `L3408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3408) · [Before (L3282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3282)

```diff
-             canChangePos: QQ === jQ.qe.EditCodeBlock
+             canChangePos: MM === hM._d.EditCodeBlock
```

#### 344. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3285-L3286` → after: `L3411-L3412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3411-L3412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3411-L3412) · [Before (L3285-L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3285-L3286)

```diff
-         case jQ.qe.EditCustomLobbyBlock:
-           zQ.k.mB("EditCustomLobbyBlock", {
+         case hM._d.EditCustomLobbyBlock:
+           aM.i.Tz("EditCustomLobbyBlock", {
```

#### 345. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3290-L3291` → after: `L3416-L3417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3416-L3417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3416-L3417) · [Before (L3290-L3291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3290-L3291)

```diff
-         case jQ.qe.OpenIronChest:
-           zQ.k.mB("OpenIronChest", {
+         case hM._d.OpenIronChest:
+           aM.i.Tz("OpenIronChest", {
```

#### 346. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3295-L3296` → after: `L3421-L3422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3421-L3422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3421-L3422) · [Before (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3295-L3296)

```diff
-         case jQ.qe.EditNameTag:
-           zQ.k.mB("EditNameTag", null !== (FQ = null === (PQ = qQ.Ds()) || void 0 === PQ || null === (gQ = PQ.attributes.customAttributes) || void 0 === gQ ? void 0 : gQ.text) && void 0 !== FQ ? FQ : "");
+         case hM._d.EditNameTag:
+           aM.i.Tz("EditNameTag", null !== (nM = null === (QM = SM.sQ()) || void 0 === QM || null === (zM = QM.attributes.customAttributes) || void 0 === zM ? void 0 : zM.text) && void 0 !== nM ? nM : "");
```

#### 347. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3298-L3301` → after: `L3424-L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3424-L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3424-L3427) · [Before (L3298-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3298-L3301)

```diff
-         case jQ.qe.EditBook: {
-           var JQ, rQ, BQ;
-           const QQ = null === (JQ = qQ.Ds()) || void 0 === JQ ? void 0 : JQ.attributes;
-           zQ.k.mB("EditBook", {
+         case hM._d.EditBook: {
+           var LM, mM, JM;
+           const MM = null === (LM = SM.sQ()) || void 0 === LM ? void 0 : LM.attributes;
+           aM.i.Tz("EditBook", {
```

#### 348. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3303` → after: `L3429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3429) · [Before (L3303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3303)

```diff
-             title: null !== (BQ = null === QQ || void 0 === QQ ? void 0 : QQ.customDisplayName) && void 0 !== BQ ? BQ : "Title",
+             title: null !== (JM = null === MM || void 0 === MM ? void 0 : MM.customDisplayName) && void 0 !== JM ? JM : "Title",
```

#### 349. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3308` → after: `L3434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3434) · [Before (L3308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3308)

```diff
-         case jQ.qe.CantChangeBlock:
+         case hM._d.CantChangeBlock:
```

#### 350. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3312-L3313` → after: `L3438-L3439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3438-L3439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3438-L3439) · [Before (L3312-L3313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3312-L3313)

```diff
-               qQ = QQ ? XQ : wQ;
-             (WQ.getClientOption("canChange") || qQ || "You cannot modify this block" !== XQ) && zQ.k.mB("showBottomMessage", {
+               SM = MM ? iM : OM;
+             (rM.getClientOption("canChange") || SM || "You cannot modify this block" !== iM) && aM.i.Tz("showBottomMessage", {
```

#### 351. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3319-L3320` → after: `L3445-L3446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3445-L3446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3445-L3446) · [Before (L3319-L3320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3319-L3320)

```diff
-         case jQ.qe.MiddleBarStart:
-           zQ.k.mB("middleScreenBarInitiate", {
+         case hM._d.MiddleBarStart:
+           aM.i.Tz("middleScreenBarInitiate", {
```

#### 352. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3322` → after: `L3448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3448) · [Before (L3322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3322)

```diff
-             cq: 1 === XQ[0],
+             zO: 1 === iM[0],
```

#### 353. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3326-L3327` → after: `L3452-L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3452-L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3452-L3453) · [Before (L3326-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3326-L3327)

```diff
-         case jQ.qe.MiddleBarStop:
-           zQ.k.mB("middleScreenBarRemove");
+         case hM._d.MiddleBarStop:
+           aM.i.Tz("middleScreenBarRemove");
```

#### 354. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3329-L3331` → after: `L3455-L3457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3455-L3457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3455-L3457) · [Before (L3329-L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3329-L3331)

```diff
-         case jQ.qe.Hitmarker:
-           zQ.k.mB("localGunHitmarker", {
-             fW: 1 === WQ
+         case hM._d.Hitmarker:
+           aM.i.Tz("localGunHitmarker", {
+             mO: 1 === rM
```

#### 355. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3334-L3335` → after: `L3460-L3461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3460-L3461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3460-L3461) · [Before (L3334-L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3334-L3335)

```diff
-         case jQ.qe.ShotsLeft:
-           zQ.k.mB("localPlayerNewShotsLeft", wQ);
+         case hM._d.ShotsLeft:
+           aM.i.Tz("localPlayerNewShotsLeft", OM);
```

#### 356. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3337-L3338` → after: `L3463-L3464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3463-L3464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3463-L3464) · [Before (L3337-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3337-L3338)

```diff
-         case jQ.qe.AimingOverlay:
-           zQ.k.mB("aimingOverlay", 3 === (3 & WQ) ? "sniper" : "none");
+         case hM._d.AimingOverlay:
+           aM.i.Tz("aimingOverlay", 3 === (3 & rM) ? "sniper" : "none");
```

#### 357. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3340-L3341` → after: `L3466-L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3466-L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3466-L3467) · [Before (L3340-L3341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3340-L3341)

```diff
-         case jQ.qe.BottomMessage:
-           zQ.k.mB("showBottomMessage", JSON.parse(sQ()));
+         case hM._d.BottomMessage:
+           aM.i.Tz("showBottomMessage", JSON.parse(PM()));
```

#### 358. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3343-L3344` → after: `L3469-L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3469-L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3469-L3470) · [Before (L3343-L3344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3343-L3344)

```diff
-         case jQ.qe.Crosshair:
-           qQ.inaccuracy = (0, LQ.f)(wQ), (0, OX.e)().crosshairAccuracy(qQ.inaccuracy);
+         case hM._d.Crosshair:
+           SM.inaccuracy = (0, YM.h)(OM), (0, LO.e)().crosshairAccuracy(SM.inaccuracy);
```

#### 359. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3346` → after: `L3472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3472) · [Before (L3346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3346)

```diff
-         case jQ.qe.ChargeStage:
+         case hM._d.ChargeStage:
```

#### 360. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3348-L3349` → after: `L3474-L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3474-L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3474-L3475) · [Before (L3348-L3349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3348-L3349)

```diff
-         case jQ.qe.EmoteWheelClose:
-           zQ.k.mB("requestEmoteWheelClose");
+         case hM._d.EmoteWheelClose:
+           aM.i.Tz("requestEmoteWheelClose");
```

#### 361. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3351-L3352` → after: `L3477-L3478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3477-L3478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3477-L3478) · [Before (L3351-L3352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3351-L3352)

```diff
-         case jQ.qe.BlockMined:
-           zQ.k.mB("localBlockMined");
+         case hM._d.BlockMined:
+           aM.i.Tz("localBlockMined");
```

#### 362. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3355` → after: `L3481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3481) · [Before (L3355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3355)

```diff
-           throw new IQ.d(`UiEvent of no kind: what ${QQ}`)
+           throw new HM.d(`UiEvent of no kind: what ${MM}`)
```

#### 363. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3358-L3363` → after: `L3484-L3489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3484-L3489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3484-L3489) · [Before (L3358-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3358-L3363)

```diff
-     var mX = XQ(38277),
-       MX = XQ(34516),
-       Qw = XQ(2048),
-       Ww = XQ(37105),
-       Xw = XQ(34529),
-       ww = XQ(5118);
+     var HO = iM(38973),
+       hO = iM(35029),
+       JO = iM(2078),
+       dO = iM(37764),
+       yO = iM(35037),
+       lO = iM(5188);
```

#### 364. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3387` → after: `L3513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3513) · [Before (L3387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3387)

```diff
-       const TQ = () => (XQ = (0, Qw.j)(XQ, WQ()), XQ);
+       const jM = () => (iM = (0, JO.r)(iM, rM()), iM);
```

#### 365. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3395` → after: `L3521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3521) · [Before (L3395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3395)

```diff
-           return null !== wQ && zQ.push((0, Qw.k)((QQ => {
+           return null !== OM && aM.push((0, JO.u)((MM => {
```

#### 366. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3418` → after: `L3544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3544) · [Before (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3418)

```diff
-         attributes: (0, mX.c)("Gun" === (0, Xw.itemTypeOf)(WQ) ? {
+         attributes: (0, HO.b)("Gun" === (0, yO.itemTypeOf)(rM) ? {
```

#### 367. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3440` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3566) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3440)

```diff
-             displayName: null !== (wQ = gQ.attributes.customDisplayName) && void 0 !== wQ ? wQ : WQ.getDisplayName(JQ),
+             displayName: null !== (OM = zM.attributes.customDisplayName) && void 0 !== OM ? OM : rM.getDisplayName(LM),
```

#### 368. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3442` → after: `L3568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3568) · [Before (L3442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3442)

```diff
-             clipSize: null !== (qQ = null !== (TQ = null === (zQ = gQ.attributes.customAttributes) || void 0 === zQ || null === (sQ = zQ.gunStats) || void 0 === sQ ? void 0 : sQ.clipSize) && void 0 !== TQ ? TQ : null === (FQ = WQ.getGunStats(JQ)) || void 0 === FQ ? void 0 : FQ.cl … [truncated]
+             clipSize: null !== (SM = null !== (jM = null === (aM = zM.attributes.customAttributes) || void 0 === aM || null === (PM = aM.gunStats) || void 0 === PM ? void 0 : PM.clipSize) && void 0 !== jM ? jM : null === (nM = rM.getGunStats(LM)) || void 0 === nM ? void 0 : nM.cl … [truncated]
```

#### 369. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3471` → after: `L3597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3597) · [Before (L3471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3471)

```diff
-               const FQ = QQ.craftingView(XQ.station, sQ, null !== (TQ = null === (zQ = XQ.recipe) || void 0 === zQ ? void 0 : zQ.Ug) && void 0 !== TQ ? TQ : 0);
+               const nM = MM.craftingView(iM.station, PM, null !== (jM = null === (aM = iM.recipe) || void 0 === aM ? void 0 : aM.ma) && void 0 !== jM ? jM : 0);
```

#### 370. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3477` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3603) · [Before (L3477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3477)

```diff
-                 let wQ = jQ.ub.BYTES;
+                 let OM = hM.gb.BYTES;
```

#### 371. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3479-L3480` → after: `L3605-L3606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3605-L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3605-L3606) · [Before (L3479-L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3479-L3480)

```diff
-                 for (let gQ = jQ.ub.recipes(QQ, 0); gQ > 0; gQ--) {
-                   const XQ = jQ.ob.flags(QQ, wQ),
+                 for (let zM = hM.gb.recipes(MM, 0); zM > 0; zM--) {
+                   const iM = hM.$.flags(MM, OM),
```

#### 372. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3482-L3483` → after: `L3608-L3609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3608-L3609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3608-L3609) · [Before (L3482-L3483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3482-L3483)

```diff
-                       name: WQ.nameOfId(jQ.ob.item(QQ, wQ)),
-                       Ug: jQ.ob.recipe(QQ, wQ),
+                       name: rM.nameOfId(hM.$.item(MM, OM)),
+                       ma: hM.$.recipe(MM, OM),
```

#### 373. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3485-L3487` → after: `L3611-L3613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3611-L3613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3611-L3613) · [Before (L3485-L3487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3485-L3487)

```diff
-                       produces: jQ.ob.produces(QQ, wQ),
-                       haveIngredients: 0 !== (XQ & jQ.kb.HaveIngredients),
-                       listed: 0 !== (XQ & jQ.kb.Listed)
+                       produces: hM.$.produces(MM, OM),
+                       haveIngredients: 0 !== (iM & hM._.HaveIngredients),
+                       listed: 0 !== (iM & hM._.Listed)
```

#### 374. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3489-L3491` → after: `L3615-L3617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3615-L3617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3615-L3617) · [Before (L3489-L3491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3489-L3491)

```diff
-                   let zQ = jQ.ob.requires(QQ, wQ);
-                   for (wQ += jQ.ob.BYTES; zQ > 0; zQ--) {
-                     const XQ = jQ.pb.items(QQ, wQ);
+                   let aM = hM.$.requires(MM, OM);
+                   for (OM += hM.$.BYTES; aM > 0; aM--) {
+                     const iM = hM.cb.items(MM, OM);
```

#### 375. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3493-L3495` → after: `L3619-L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3619-L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3619-L3621) · [Before (L3493-L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3493-L3495)

```diff
-                       items: Bw(QQ, wQ + jQ.pb.BYTES, XQ, WQ),
-                       amt: jQ.pb.amount(QQ, wQ)
-                     }), wQ += jQ.pb.BYTES + 2 * XQ
+                       items: pO(MM, OM + hM.cb.BYTES, iM, rM),
+                       amt: hM.cb.amount(MM, OM)
+                     }), OM += hM.cb.BYTES + 2 * iM
```

#### 376. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3499-L3500` → after: `L3625-L3626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3625-L3626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3625-L3626) · [Before (L3499-L3500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3499-L3500)

```diff
-                 const TQ = jQ.ub.flags(QQ, 0);
-                 if (null === XQ.recipe || 0 === (TQ & jQ.tb.Detail)) return {
+                 const jM = hM.gb.flags(MM, 0);
+                 if (null === iM.recipe || 0 === (jM & hM.eb.Detail)) return {
```

#### 377. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3507-L3512` → after: `L3633-L3638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3633-L3638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3633-L3638) · [Before (L3507-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3507-L3512)

```diff
-                 for (let gQ = jQ.ub.ingredients(QQ, 0); gQ > 0; gQ--) {
-                   const XQ = jQ.gb.item(QQ, wQ),
-                     qQ = jQ.gb.from(QQ, wQ),
-                     TQ = jQ.gb.amount(QQ, wQ);
-                   wQ += jQ.gb.BYTES;
-                   const FQ = qQ === jQ.J ? null : Bw(QQ, wQ, qQ, WQ);
+                 for (let zM = hM.gb.ingredients(MM, 0); zM > 0; zM--) {
+                   const iM = hM.Y.item(MM, OM),
+                     SM = hM.Y.from(MM, OM),
+                     jM = hM.Y.amount(MM, OM);
+                   OM += hM.Y.BYTES;
+                   const nM = SM === hM.E ? null : pO(MM, OM, SM, rM);
```

#### 378. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3519` → after: `L3645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3645) · [Before (L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3519)

```diff
-                   Ug: PQ
+                   ma: QM
```

#### 379. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3526-L3528` → after: `L3652-L3654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3652-L3654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3652-L3654) · [Before (L3526-L3528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3526-L3528)

```diff
-                     Ug: PQ,
-                     craftAllTimes: jQ.ub.craftAllTimes(QQ, 0),
-                     roomForOne: 0 !== (TQ & jQ.tb.RoomForOne),
+                     ma: QM,
+                     craftAllTimes: hM.gb.craftAllTimes(MM, 0),
+                     roomForOne: 0 !== (jM & hM.eb.RoomForOne),
```

#### 380. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3551` → after: `L3677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3677) · [Before (L3551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3551)

```diff
-             for (let WQ = 0; WQ < jQ.Pd; WQ++) wQ.push(Pw(QQ.slot(WQ)));
+             for (let rM = 0; rM < hM.gd; rM++) OM.push(bO(MM.slot(rM)));
```

#### 381. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3561-L3562` → after: `L3687-L3688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3687-L3688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3687-L3688) · [Before (L3561-L3562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3561-L3562)

```diff
-             if (XQ > jQ.Pd) {
-               for (let WQ = jQ.Pd; WQ < XQ; WQ++) sQ.push(Pw(QQ.slot(WQ)));
+             if (iM > hM.gd) {
+               for (let rM = hM.gd; rM < iM; rM++) PM.push(bO(MM.slot(rM)));
```

#### 382. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3565-L3566` → after: `L3691-L3692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3691-L3692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3691-L3692) · [Before (L3565-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3565-L3566)

```diff
-                 pos: [...QQ.Sq],
-                 numSlots: XQ - jQ.Pd,
+                 pos: [...MM.ti],
+                 numSlots: iM - hM.gd,
```

#### 383. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3578` → after: `L3704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3704) · [Before (L3578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3578)

```diff
-           }), (0, Qw.g)("creative")),
+           }), (0, JO.p)("creative")),
```

#### 384. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3588` → after: `L3714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3714) · [Before (L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3588)

```diff
-           }), (0, Qw.f)("DisplayName", "GunStats")),
+           }), (0, JO.l)("DisplayName", "GunStats")),
```

#### 385. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3593` → after: `L3719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3719) · [Before (L3593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3593)

```diff
-             const wQ = null === (WQ = QQ.Ds()) || void 0 === WQ ? void 0 : WQ.typeObj,
+             const OM = null === (rM = MM.sQ()) || void 0 === rM ? void 0 : rM.typeObj,
```

#### 386. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3602` → after: `L3728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3728) · [Before (L3602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3602)

```diff
-             return (0, ww.w)((() => {
+             return (0, lO.y)((() => {
```

#### 387. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3609-L3616` → after: `L3735-L3742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3735-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3735-L3742) · [Before (L3609-L3616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3609-L3616)

```diff
-           hotbarSlotRequested: (0, Qw.c)("setSelectedInventorySlotI"),
-           hotbarScrolled: (0, Qw.c)("ScrollInventorySlot"),
-           numberKeyPressed: (0, Qw.c)("numkeyPressed"),
-           inventoryDropRequested: (0, Qw.c)("DropInvenItem"),
-           chestToggled: (0, Qw.c)("chestToggleFromServer"),
-           chestRefreshed: (0, Qw.c)("chestRefreshedFromServer", jw),
-           inventorySynced: (0, Qw.c)("syncedInvenFromServer", jw),
-           enchantingTableOpened: (0, Qw.c)("enchantingTable", (QQ => {
+           hotbarSlotRequested: (0, JO.d)("setSelectedInventorySlotI"),
+           hotbarScrolled: (0, JO.d)("ScrollInventorySlot"),
+           numberKeyPressed: (0, JO.d)("numkeyPressed"),
+           inventoryDropRequested: (0, JO.d)("DropInvenItem"),
+           chestToggled: (0, JO.d)("chestToggleFromServer"),
+           chestRefreshed: (0, JO.d)("chestRefreshedFromServer", RO),
+           inventorySynced: (0, JO.d)("syncedInvenFromServer", RO),
+           enchantingTableOpened: (0, JO.d)("enchantingTable", (MM => {
```

#### 388. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3619` → after: `L3745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3745) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3619)

```diff
-               ez: wQ
+               jP: OM
```

#### 389. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3664` → after: `L3790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3790) · [Before (L3664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3664)

```diff
-             QQ.closeChest(), QQ.flush(wQ), zQ.k.mB("chestClosedByPlayer")
+             MM.closeChest(), MM.flush(OM), aM.i.Tz("chestClosedByPlayer")
```

#### 390. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3672` → after: `L3798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3798) · [Before (L3672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3672)

```diff
-               Ug: wQ,
+               ma: OM,
```

#### 391. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3702` → after: `L3828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3828) · [Before (L3702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3702)

```diff
-               if (!qQ || !WQ.getClientOption("canCraft") || !(0, MX.m)(wQ) || (0, MX.k)(qQ.attributes)) return Iw;
+               if (!SM || !rM.getClientOption("canCraft") || !(0, hO.p)(OM) || (0, hO.o)(SM.attributes)) return uO;
```

#### 392. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3706` → after: `L3832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3832) · [Before (L3706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3706)

```diff
-               for (let sQ = 0; sQ < Ww.b; sQ++) {
+               for (let PM = 0; PM < dO.d; PM++) {
```

#### 393. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3714` → after: `L3840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3840) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3714)

```diff
-                 } = (0, MX.c)(wQ, sQ);
+                 } = (0, hO.f)(OM, PM);
```

#### 394. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3749` → after: `L3875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3875) · [Before (L3749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3749)

```diff
-           w6: 0,
+           VV: 0,
```

#### 395. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3752` → after: `L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3878) · [Before (L3752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3752)

```diff
-           OB: [0, 0, 0]
+           zd: [0, 0, 0]
```

#### 396. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3759` → after: `L3885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3885) · [Before (L3759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3759)

```diff
-       CQQ() {
+       pMM() {
```

#### 397. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3768-L3769` → after: `L3894-L3895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3894-L3895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3894-L3895) · [Before (L3768-L3769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3768-L3769)

```diff
-         if (this.refreshTarget(), this.isBreaking = 0 !== (jQ.x.playerFlags(QQ, 0) & jQ.ae.Breaking) && jQ.x.breakingProgress(QQ, 0) >= 0, this.isBreaking)
-           for (let WQ = 0; WQ < 3; WQ++) this.breaking[WQ] = jQ.x.breakingPos(QQ, 0, WQ)
+         if (this.refreshTarget(), this.isBreaking = 0 !== (hM.v.playerFlags(MM, 0) & hM.yd.Breaking) && hM.v.breakingProgress(MM, 0) >= 0, this.isBreaking)
+           for (let rM = 0; rM < 3; rM++) this.breaking[rM] = hM.v.breakingPos(MM, 0, rM)
```

#### 398. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3773-L3774` → after: `L3899-L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3899-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3899-L3900) · [Before (L3773-L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3773-L3774)

```diff
-           WQ = jQ.x.targetBlockId(QQ, 0);
-         if (this.hasTarget = WQ !== jQ.Ad, this.hasTarget) {
+           rM = hM.v.targetBlockId(MM, 0);
+         if (this.hasTarget = rM !== hM.Pc, this.hasTarget) {
```

#### 399. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3776-L3777` → after: `L3902-L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3902-L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3902-L3903) · [Before (L3776-L3777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3776-L3777)

```diff
-           XQ.w6 = WQ;
-           for (let WQ = 0; WQ < 3; WQ++) XQ.position[WQ] = jQ.x.targetBlock(QQ, 0, WQ), XQ.normal[WQ] = jQ.x.targetNormal(QQ, 0, WQ), XQ.OB[WQ] = jQ.x.targetAdjacent(QQ, 0, WQ)
+           iM.VV = rM;
+           for (let rM = 0; rM < 3; rM++) iM.position[rM] = hM.v.targetBlock(MM, 0, rM), iM.normal[rM] = hM.v.targetNormal(MM, 0, rM), iM.zd[rM] = hM.v.targetAdjacent(MM, 0, rM)
```

#### 400. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3785-L3788` → after: `L3911-L3914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3911-L3914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3911-L3914) · [Before (L3785-L3788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3785-L3788)

```diff
-     var Vw = XQ(40853),
-       Dw = XQ(40845),
-       pw = XQ(36674),
-       Gw = XQ(37098);
+     var sO = iM(41710),
+       DO = iM(41697),
+       kO = iM(37316),
+       ZO = iM(37761);
```

#### 401. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3793` → after: `L3919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3919) · [Before (L3793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3793)

```diff
-         this.game = new Gw.h, this.client = new Gw.h, this.Ds = 0, this.movesFly = null
+         this.game = new ZO.g, this.client = new ZO.g, this.sQ = 0, this.movesFly = null
```

#### 402. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3807` → after: `L3933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3933) · [Before (L3807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3807)

```diff
-         this.game = new Gw.h, this.movesFly = null
+         this.game = new ZO.g, this.movesFly = null
```

#### 403. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3813` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3939) · [Before (L3813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3813)

```diff
-         return (this.game._getTotalBooleanVal() ? Uw : 0) | (this.client._getTotalBooleanVal() ? bw : 0)
+         return (this.game._getTotalBooleanVal() ? oO : 0) | (this.client._getTotalBooleanVal() ? fO : 0)
```

#### 404. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3820-L3822` → after: `L3946-L3948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3946-L3948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3946-L3948) · [Before (L3820-L3822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3820-L3822)

```diff
-         if (WQ === this.Ds && null === XQ) return !0;
-         let wQ = jQ.lc.Keep;
-         return null !== XQ && (wQ = XQ ? jQ.lc.On : jQ.lc.Off), !(!QQ || !(0, jQ.Je)(QQ, 0, wQ, WQ, XQ ? 1 : 0)) && (this.Ds = WQ, this.movesFly = null, !0)
+         if (rM === this.sQ && null === iM) return !0;
+         let OM = hM.Lb.Keep;
+         return null !== iM && (OM = iM ? hM.Lb.On : hM.Lb.Off), !(!MM || !(0, hM.xe)(MM, 0, OM, rM, iM ? 1 : 0)) && (this.sQ = rM, this.movesFly = null, !0)
```

#### 405. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3829` → after: `L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3955) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3829)

```diff
-           x: sQ.b,
+           x: PM.e,
```

#### 406. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3837` → after: `L3963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3963) · [Before (L3837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3837)

```diff
-           WQ = jQ.x.viewProj;
+           rM = hM.v.viewProj;
```

#### 407. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3845` → after: `L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3971) · [Before (L3845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3845)

```diff
-         for (let XQ = 0; XQ < 3; XQ++) WQ[XQ] = jQ.x.eye(QQ, 0, XQ);
+         for (let iM = 0; iM < 3; iM++) rM[iM] = hM.v.eye(MM, 0, iM);
```

#### 408. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3850` → after: `L3976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3976) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3850)

```diff
-           WQ = jQ.x.viewProj,
+           rM = hM.v.viewProj,
```

#### 409. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3861` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3987) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3861)

```diff
-         return jQ.x.heading(this.api.apiView, 0)
+         return hM.v.heading(this.api.apiView, 0)
```

#### 410. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3864` → after: `L3990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3990) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3864)

```diff
-         return jQ.x.pitch(this.api.apiView, 0)
+         return hM.v.pitch(this.api.apiView, 0)
```

#### 411. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3867` → after: `L3993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3993) · [Before (L3867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3867)

```diff
-         return jQ.x.tanHalfFovX(this.api.apiView, 0)
+         return hM.v.tanHalfFovX(this.api.apiView, 0)
```

#### 412. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3870` → after: `L3996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R3996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3996) · [Before (L3870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3870)

```diff
-         return jQ.x.tanHalfFovY(this.api.apiView, 0)
+         return hM.v.tanHalfFovY(this.api.apiView, 0)
```

#### 413. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3890-L3892` → after: `L4016-L4018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4016-L4018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4016-L4018) · [Before (L3890-L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3890-L3892)

```diff
-           sQ = jQ.x.viewProj,
-           FQ = TQ > 0 ? WQ / TQ : 0,
-           PQ = TQ > 0 ? -XQ / TQ : 0,
+           PM = hM.v.viewProj,
+           nM = jM > 0 ? rM / jM : 0,
+           QM = jM > 0 ? -iM / jM : 0,
```

#### 414. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3920-L3923` → after: `L4046-L4049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4046-L4049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4046-L4049) · [Before (L3920-L3923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3920-L3923)

```diff
-           XQ = QQ[0] - jQ.x.origin(WQ, 0, 0),
-           wQ = QQ[1] - jQ.x.origin(WQ, 0, 1),
-           qQ = QQ[2] - jQ.x.origin(WQ, 0, 2),
-           TQ = jQ.x.viewProj;
+           iM = MM[0] - hM.v.origin(rM, 0, 0),
+           OM = MM[1] - hM.v.origin(rM, 0, 1),
+           SM = MM[2] - hM.v.origin(rM, 0, 2),
+           jM = hM.v.viewProj;
```

#### 415. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3927` → after: `L4053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4053) · [Before (L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3927)

```diff
-         return (0, sQ.e)(QQ, WQ, this.screenBandPct.x, this.screenBandPct.y)
+         return (0, PM.g)(MM, rM, this.screenBandPct.x, this.screenBandPct.y)
```

#### 416. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3930` → after: `L4056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4056) · [Before (L3930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3930)

```diff
-     var Hw = XQ(5148);
+     var AO = iM(5207);
```

#### 417. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3932` → after: `L4058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4058) · [Before (L3932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3932)

```diff
-       lw = new Uint8Array(jQ.S * jQ.R);
+       vO = new Uint8Array(hM.L * hM.I);
```

#### 418. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3935` → after: `L4061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4061) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3935)

```diff
-         this.buttons = [], this.Ds = !0
+         this.buttons = [], this.sQ = !0
```

#### 419. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3938` → after: `L4064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4064) · [Before (L3938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3938)

```diff
-         this.buttons = QQ, this.Ds = !1
+         this.buttons = MM, this.sQ = !1
```

#### 420. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3941` → after: `L4067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4067) · [Before (L3941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3941)

```diff
-         this.Ds = 0 === this.buttons.length
+         this.sQ = 0 === this.buttons.length
```

#### 421. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3944-L3946` → after: `L4070-L4072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4070-L4072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4070-L4072) · [Before (L3944-L3946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3944-L3946)

```diff
-         if (this.Ds) return;
-         const WQ = new Uint8Array(jQ.S),
-           XQ = new Uint8Array(jQ.S);
+         if (this.sQ) return;
+         const rM = new Uint8Array(hM.L),
+           iM = new Uint8Array(hM.L);
```

#### 422. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3954` → after: `L4080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4080) · [Before (L3954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3954)

```diff
-           if (wQ === jQ.S) break;
+           if (OM === hM.L) break;
```

#### 423. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3958` → after: `L4084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4084) · [Before (L3958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3958)

```diff
-           } = aw.encodeInto(TQ, lw.subarray(qQ, qQ + jQ.R));
+           } = xO.encodeInto(jM, vO.subarray(SM, SM + hM.I));
```

#### 424. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3960-L3961` → after: `L4086-L4087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4086-L4087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4086-L4087) · [Before (L3960-L3961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3960-L3961)

```diff
-           const FQ = Hw.i[zQ];
-           WQ[wQ] = "number" === typeof FQ ? FQ : 0, XQ[wQ] = sQ, wQ++, qQ += sQ
+           const nM = AO.n[aM];
+           rM[OM] = "number" === typeof nM ? nM : 0, iM[OM] = PM, OM++, SM += PM
```

#### 425. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3963` → after: `L4089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4089) · [Before (L3963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3963)

```diff
-         this.Ds = (0, jQ.xe)(QQ, 0, wQ, WQ, XQ, lw.subarray(0, qQ))
+         this.sQ = (0, hM.je)(MM, 0, OM, rM, iM, vO.subarray(0, SM))
```

#### 426. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3969-L3970` → after: `L4095-L4096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4095-L4096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4095-L4096) · [Before (L3969-L3970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3969-L3970)

```diff
-       return wQ.length <= jQ.R && function(QQ, WQ, XQ, wQ) {
-         return (0, nW.c)(), (0, jQ.uf)(QQ, WQ, XQ, wQ)
+       return OM.length <= hM.I && function(MM, rM, iM, OM) {
+         return (0, Oi.e)(), (0, hM.sf)(MM, rM, iM, OM)
```

#### 427. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3973` → after: `L4099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4099) · [Before (L3973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3973)

```diff
-     var Aw = XQ(39509);
+     var XO = iM(40312);
```

#### 428. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3979-L3981` → after: `L4105-L4107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4105-L4107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4105-L4107) · [Before (L3979-L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3979-L3981)

```diff
-         off: jQ.ce.Off,
-         key: jQ.ce.Key,
-         touch: jQ.ce.Touch
+         off: hM.Cd.Off,
+         key: hM.Cd.Key,
+         touch: hM.Cd.Touch
```

#### 429. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3986` → after: `L4112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4112) · [Before (L3986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3986)

```diff
-         this.options = QQ, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
+         this.options = MM, this.renderFrame = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.entityInfo = void 0, this.entityInfoWatch = void 0, this.particles = void 0, this.clientApi = void 0, this.scriptedCamera = void 0, this.owners = [], this.tic … [truncated]
```

#### 430. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3989` → after: `L4115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4115) · [Before (L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L3989)

```diff
-         }, this.api = QQ.api, this.tables = QQ.tables, this.onError = null !== (WQ = QQ.onError) && void 0 !== WQ ? WQ : QQ => {
+         }, this.api = MM.api, this.tables = MM.tables, this.onError = null !== (rM = MM.onError) && void 0 !== rM ? rM : MM => {
```

#### 431. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4036` → after: `L4162-L4163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4162-L4163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4162-L4163) · [Before (L4036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4036)

```diff
-           hasPackModel: QQ.hasPackModel
+           hasPackModel: MM.hasPackModel,
+           localPhysicsType: () => this.localPhysicsType
```

#### 432. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4045` → after: `L4172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4172) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4045)

```diff
-         return this.itemSources ??= rw(this.items, this.tables, (() => this.localPlayerAlive()), this.nI), this.itemSources
+         return this.itemSources ??= gO(this.items, this.tables, (() => this.localPlayerAlive()), this.aL), this.itemSources
```

#### 433. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4061` → after: `L4188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4188) · [Before (L4061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4061)

```diff
-         return null !== WQ && (XQ = WQ, wQ = 0, qQ = QQ[0], TQ = QQ[1], zQ = QQ[2], (0, nW.c)(), (0, jQ.Fe)(XQ, wQ, qQ, TQ, zQ));
+         return null !== rM && (iM = rM, OM = 0, SM = MM[0], jM = MM[1], aM = MM[2], (0, Oi.e)(), (0, hM.pe)(iM, OM, SM, jM, aM));
```

#### 434. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4069` → after: `L4196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4196) · [Before (L4069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4069)

```diff
-         return null === WQ ? (this.pendingZoom = QQ, !1) : (this.pendingZoom = null, (0, jQ.cg)(WQ, 0, QQ, 1))
+         return null === rM ? (this.pendingZoom = MM, !1) : (this.pendingZoom = null, (0, hM.mg)(rM, 0, MM, 1))
```

#### 435. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4073` → after: `L4200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4200) · [Before (L4073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4073)

```diff
-         return null !== WQ && (0, jQ._f)(WQ, 0, QQ ? 1 : 0)
+         return null !== rM && (0, hM.eg)(rM, 0, MM ? 1 : 0)
```

#### 436. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4077` → after: `L4204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4204) · [Before (L4077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4077)

```diff
-         return null !== QQ && (WQ = QQ, XQ = 0, (0, nW.c)(), (0, jQ.Gf)(WQ, XQ));
+         return null !== MM && (rM = MM, iM = 0, (0, Oi.e)(), (0, hM.Hf)(rM, iM));
```

#### 437. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4089` → after: `L4216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4216) · [Before (L4089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4089)

```diff
-         return null !== zQ && (0, jQ.if)(zQ, 0, QQ, WQ, XQ, wQ, qQ, TQ)
+         return null !== aM && (0, hM.df)(aM, 0, MM, rM, iM, OM, SM, jM)
```

#### 438. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4093` → after: `L4220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4220) · [Before (L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4093)

```diff
-         return null !== WQ && (0, jQ.fg)(WQ, 0, null !== QQ && void 0 !== QQ ? QQ : 1 / 0)
+         return null !== rM && (0, hM.tg)(rM, 0, null !== MM && void 0 !== MM ? MM : 1 / 0)
```

#### 439. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4098` → after: `L4225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4225) · [Before (L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4098)

```diff
-         return null !== wQ && xW(wQ, XQ ? rQ.Ad : 0, QQ, (0, uQ.e)(WQ))
+         return null !== OM && Si(OM, iM ? mM.ld : 0, MM, (0, fM.f)(rM))
```

#### 440. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4119` → after: `L4246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4246) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4119)

```diff
-         this.overflowGen = jQ.x.eventOverflowGen(XQ, 0), this.resyncOwed = 0 !== jQ.x.eventOverflowMask(XQ, 0), QQ.setGameHost(this), QQ.setEventWalker((QQ => {
+         this.overflowGen = hM.v.eventOverflowGen(iM, 0), this.resyncOwed = 0 !== hM.v.eventOverflowMask(iM, 0), MM.setGameHost(this), MM.setEventWalker((MM => {
```

#### 441. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4127` → after: `L4254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4254) · [Before (L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4127)

```diff
-         return "off" === this.promptWatch || this.stopped() ? null : fw(jQ.x.promptEntity(this.api.apiView, 0))
+         return "off" === this.promptWatch || this.stopped() ? null : MS(hM.v.promptEntity(this.api.apiView, 0))
```

#### 442. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4130` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4257) · [Before (L4130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4130)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? jQ.Sc.None : jQ.x.interactLabel(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? hM.ic.None : hM.v.interactLabel(this.api.apiView, 0)
```

#### 443. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4133` → after: `L4260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4260) · [Before (L4133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4133)

```diff
-         return "touch" !== this.promptWatch || this.stopped() ? 0 : jQ.x.interactIcon(this.api.apiView, 0)
+         return "touch" !== this.promptWatch || this.stopped() ? 0 : hM.v.interactIcon(this.api.apiView, 0)
```

#### 444. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4143` → after: `L4270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4270) · [Before (L4143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4143)

```diff
-         "connection" === QQ.type ? QQ.phase === rQ.E.Activated && QQ.conn !== this.activeConn && QQ.conn > this.closedThrough ? (this.endSession(), this.activeConn = QQ.conn, this.endGameGrants(), this.dropGameCamera()) : QQ.phase !== rQ.E.Left && QQ.phase !== rQ.E.Closed || QQ.c … [truncated]
+         "connection" === MM.type ? MM.phase === mM.F.Activated && MM.conn !== this.activeConn && MM.conn > this.closedThrough ? (this.endSession(), this.activeConn = MM.conn, this.endGameGrants(), this.dropGameCamera()) : MM.phase !== mM.F.Left && MM.phase !== mM.F.Closed || MM.c … [truncated]
```

#### 445. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4160-L4161` → after: `L4287-L4288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4287-L4288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4287-L4288) · [Before (L4160-L4161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4160-L4161)

```diff
-             if ("message" !== QQ.type || QQ.cg !== YX.gc.GameCodeMessage || QQ.payloadKind !== rQ.rc.Msgpack) return null;
-             const WQ = (0, uQ.d)(QQ.payload);
+             if ("message" !== MM.type || MM.Kz !== nO.hc.GameCodeMessage || MM.payloadKind !== mM.hc.Msgpack) return null;
+             const rM = (0, fM.c)(MM.payload);
```

#### 446. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4173-L4174` → after: `L4300-L4301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4300-L4301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4300-L4301) · [Before (L4173-L4174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4173-L4174)

```diff
-           if ((0, hQ.f)(QQ)) return void this.guard((() => {
-             (0, hQ.c)(QQ, XQ)
+           if ((0, pM.d)(MM)) return void this.guard((() => {
+             (0, pM.b)(MM, iM)
```

#### 447. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4204` → after: `L4331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4331) · [Before (L4204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4204)

```diff
-         this.highlightOwed = null === WQ ? !(0, jQ.Se)(QQ, 0, uw, uw, 0) : !(0, jQ.Se)(QQ, 0, WQ.pos, WQ.normal, 1)
+         this.highlightOwed = null === rM ? !(0, hM.Me)(MM, 0, TO, TO, 0) : !(0, hM.Me)(MM, 0, rM.pos, rM.normal, 1)
```

#### 448. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4217` → after: `L4344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4344) · [Before (L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4217)

```diff
-           qQ = QQ.gameNameWithVariation, TQ = null !== (FQ = (0, aQ.Fb)(qQ)) && void 0 !== FQ ? FQ : void 0, zQ = (0, lQ.s)(QQ.lobbyName), sQ = (0, lQ.I)(QQ.lobbyName)
+           SM = MM.gameNameWithVariation, jM = null !== (nM = (0, gM.Jb)(SM)) && void 0 !== nM ? nM : void 0, aM = (0, uM.w)(MM.lobbyName), PM = (0, uM.P)(MM.lobbyName)
```

#### 449. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4225` → after: `L4352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4352) · [Before (L4225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4225)

```diff
-           JQ = {};
+           LM = [];
```

#### 450. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4228` → after: `L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4355) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4228)

```diff
-           gQ = null !== (rQ = null === (IQ = this.options.gameFactory((0, aQ.Mb)(qQ))) || void 0 === IQ ? void 0 : IQ(sQ, zQ, TQ, PQ)) && void 0 !== rQ ? rQ : {}
+           zM = null !== (mM = null === (HM = this.options.gameFactory((0, gM.Mb)(SM))) || void 0 === HM ? void 0 : HM(PM, aM, jM, QM)) && void 0 !== mM ? mM : {}
```

#### 451. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4230` → after: `L4357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4357) · [Before (L4230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4230)

```diff
-           this.nI(DQ)
+           this.aL(lM)
```

#### 452. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4234-L4237` → after: `L4361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4361) · [Before (L4234-L4237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4234-L4237)

```diff
-           JQ = {
-             ...null === (jQ = (BQ = this.options).defaultPlugins) || void 0 === jQ ? void 0 : jQ.call(BQ, sQ, zQ, TQ, PQ),
-             ...gQ.plugins
-           }
+           LM = (0, RM.c)(null === (hM = (JM = this.options).defaultPlugins) || void 0 === hM ? void 0 : hM.call(JM, PM, aM, jM, QM), zM.plugins)
```

#### 453. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4239` → after: `L4363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4363) · [Before (L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4239)

```diff
-           this.nI(DQ)
+           this.aL(lM)
```

#### 454. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4241-L4242` → after: `L4365-L4366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4365-L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4365-L4366) · [Before (L4241-L4242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4241-L4242)

```diff
-         const yQ = [gQ, ...Object.values(JQ)];
-         this.owners = yQ, this.tickers = yQ.filter((QQ => void 0 !== QQ.fJ)), this.renderers = yQ.filter((QQ => void 0 !== QQ.onAfterRender)), this.receivers = yQ.filter((QQ => void 0 !== QQ.onReceivedMessageFromServer)), this.writeAltVeto(yQ), this.writeHooks(yQ), this.writePubl … [truncated]
+         const dM = [zM, ...LM];
+         this.owners = dM, this.tickers = dM.filter((MM => void 0 !== MM.bL)), this.renderers = dM.filter((MM => void 0 !== MM.onAfterRender)), this.receivers = dM.filter((MM => void 0 !== MM.onReceivedMessageFromServer)), this.writeAltVeto(dM), this.writeHooks(dM), this.writePubl … [truncated]
```

#### 455. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4268` → after: `L4392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4392) · [Before (L4268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4268)

```diff
-           this.round(this.tickers, Sw), (0, ww.d)(performance.now() - QQ)
+           this.round(this.tickers, rS), (0, lO.e)(performance.now() - MM)
```

#### 456. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4278-L4280` → after: `L4402-L4404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4402-L4404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4402-L4404) · [Before (L4278-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4278-L4280)

```diff
-           wQ = jQ.x.frameMs(XQ, 0);
-         pw.m.frame(wQ, jQ.x.heading(XQ, 0), jQ.x.pitch(XQ, 0), pw.j[QQ]);
-         const qQ = (0, ww.h)(QQ, wQ);
+           OM = hM.v.frameMs(iM, 0);
+         kO.l.frame(OM, hM.v.heading(iM, 0), hM.v.pitch(iM, 0), kO.i[MM]);
+         const SM = (0, lO.k)(MM, OM);
```

#### 457. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4295` → after: `L4419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4419) · [Before (L4295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4295)

```diff
-           this.nI(zQ)
+           this.aL(aM)
```

#### 458. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4297` → after: `L4421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4421) · [Before (L4297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4297)

```diff
-         this.showZoom(), this.items.flush(this.nI), this.writePromptWatch(), this.writeCustomButtons();
+         this.showZoom(), this.items.flush(this.aL), this.writePromptWatch(), this.writeCustomButtons();
```

#### 459. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4299` → after: `L4423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4423) · [Before (L4299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4299)

```diff
-         this.ticks = 0, (0, ww.g)(TQ, QQ, qQ, this.nI)
+         this.ticks = 0, (0, lO.i)(jM, MM, SM, this.aL)
```

#### 460. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4306` → after: `L4430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4430) · [Before (L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4306)

```diff
-           WQ = jQ.x.eventOverflowGen(QQ, 0),
+           rM = hM.v.eventOverflowGen(MM, 0),
```

#### 461. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4310` → after: `L4434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4434) · [Before (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4310)

```diff
-         const wQ = jQ.x.eventOverflowMask(QQ, 0),
+         const OM = hM.v.eventOverflowMask(MM, 0),
```

#### 462. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4312` → after: `L4436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4436) · [Before (L4312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4312)

```diff
-         0 === wQ || null === qQ || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, jQ.He)(qQ, 0, wQ);
+         0 === OM || null === SM || this.stopped() ? this.resyncOwed = !1 : this.resyncOwed = !(0, hM.ve)(SM, 0, OM);
```

#### 463. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4319` → after: `L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4443) · [Before (L4319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4319)

```diff
-         if (QQ === jQ.yc.Director) try {
+         if (MM === hM._b.Director) try {
```

#### 464. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4322` → after: `L4446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4446) · [Before (L4322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4322)

```diff
-           return this.nI(PQ), jQ.yb.None
+           return this.aL(QM), hM.kb.None
```

#### 465. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4324` → after: `L4448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4448) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4324)

```diff
-         if (!this.sessionLive || void 0 !== this.fault) return QQ === jQ.yc.AltVeto ? jQ.o.Allow : 0;
+         if (!this.sessionLive || void 0 !== this.fault) return MM === hM._b.AltVeto ? hM.j.Allow : 0;
```

#### 466. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4341-L4342` → after: `L4465-L4466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4465-L4466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4465-L4466) · [Before (L4341-L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4341-L4342)

```diff
-           case jQ.yc.AltVeto:
-           case jQ.yc.AltAction: {
+           case hM._b.AltVeto:
+           case hM._b.AltAction: {
```

#### 467. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4347` → after: `L4471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4471) · [Before (L4347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4347)

```diff
-             if (QQ === jQ.yc.AltAction) return this.first((QQ => {
+             if (MM === hM._b.AltAction) return this.first((MM => {
```

#### 468. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4355` → after: `L4479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4479) · [Before (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4355)

```diff
-             return "preventAction" === yQ ? jQ.o.Prevent : "preventPlacement" === yQ ? jQ.o.PreventPlacement : jQ.o.Allow
+             return "preventAction" === dM ? hM.j.Prevent : "preventPlacement" === dM ? hM.j.PreventPlacement : hM.j.Allow
```

#### 469. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4357` → after: `L4481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4481) · [Before (L4357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4357)

```diff
-           case jQ.yc.Click: {
+           case hM._b.Click: {
```

#### 470. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4359-L4360` → after: `L4483-L4484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4483-L4484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4483-L4484) · [Before (L4359-L4360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4359-L4360)

```diff
-               gQ = 0 !== (QQ & jQ.$.Alt),
-               JQ = 0 !== (QQ & jQ.$.HasPos),
+               zM = 0 !== (MM & hM.S.Alt),
+               LM = 0 !== (MM & hM.S.HasPos),
```

#### 471. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4364` → after: `L4488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4488) · [Before (L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4364)

```diff
-               DQ = 0 !== (QQ & jQ.$.Up),
+               lM = 0 !== (MM & hM.S.Up),
```

#### 472. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4366` → after: `L4490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4490) · [Before (L4366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4366)

```diff
-             if (0 === (QQ & jQ.$.AttackOnly) && this.first((QQ => {
+             if (0 === (MM & hM.S.AttackOnly) && this.first((MM => {
```

#### 473. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4379` → after: `L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4503) · [Before (L4379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4379)

```diff
-           case jQ.yc.ChangeBlock: {
+           case hM._b.ChangeBlock: {
```

#### 474. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4387` → after: `L4511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4511) · [Before (L4387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4387)

```diff
-           case jQ.yc.DropItem: {
+           case hM._b.DropItem: {
```

#### 475. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4395` → after: `L4519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4519) · [Before (L4395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4395)

```diff
-             return this.onError(new Error(`Unknown game call kind ${QQ}`)), 0
+             return this.onError(new Error(`Unknown game call kind ${MM}`)), 0
```

#### 476. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4399` → after: `L4523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4523) · [Before (L4399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4399)

```diff
-         const sQ = qQ === jQ.td ? null : Rw.decode(this.api.eventBytes(TQ, Math.min(qQ, zQ)));
+         const PM = SM === hM.Jc ? null : IO.decode(this.api.eventBytes(jM, Math.min(SM, aM)));
```

#### 477. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4401-L4403` → after: `L4525-L4527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4525-L4527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4525-L4527) · [Before (L4401-L4403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4401-L4403)

```diff
-           DQ: [QQ, WQ, XQ],
-           pQ: wQ,
-           GQ: sQ
+           GO: [MM, rM, iM],
+           CO: OM,
+           eO: PM
```

#### 478. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4411` → after: `L4535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4535) · [Before (L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4411)

```diff
-         })), this.mB("EditBoard", {
+         })), this.Tz("EditBoard", {
```

#### 479. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4413` → after: `L4537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4537) · [Before (L4413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4413)

```diff
-         }), this.mB("EditCodeBlock", {
+         }), this.Tz("EditCodeBlock", {
```

#### 480. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4419` → after: `L4543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4543) · [Before (L4419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4419)

```diff
-         QQ === jQ.Xc.ChestOpened ? this.items.chestOpened(XQ, wQ, qQ) : QQ !== jQ.Xc.Synced && QQ !== jQ.Xc.ChestClosed && QQ !== jQ.Xc.ChestRefreshed || this.items.touch(), this.guard((() => {
+         MM === hM.lc.ChestOpened ? this.items.chestOpened(iM, OM, SM) : MM !== hM.lc.Synced && MM !== hM.lc.ChestClosed && MM !== hM.lc.ChestRefreshed || this.items.touch(), this.guard((() => {
```

#### 481. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4422-L4423` → after: `L4546-L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4546-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4546-L4547) · [Before (L4422-L4423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4422-L4423)

```diff
-               case jQ.Xc.Synced:
-                 zQ.k.mB("syncedInvenFromServer");
+               case hM.lc.Synced:
+                 aM.i.Tz("syncedInvenFromServer");
```

#### 482. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4425-L4427` → after: `L4549-L4551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4549-L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4549-L4551) · [Before (L4425-L4427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4425-L4427)

```diff
-               case jQ.Xc.ChestOpened:
-               case jQ.Xc.ChestClosed:
-                 zQ.k.mB("chestToggleFromServer", QQ === jQ.Xc.ChestOpened, !0);
+               case hM.lc.ChestOpened:
+               case hM.lc.ChestClosed:
+                 aM.i.Tz("chestToggleFromServer", MM === hM.lc.ChestOpened, !0);
```

#### 483. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4429-L4430` → after: `L4553-L4554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4553-L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4553-L4554) · [Before (L4429-L4430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4429-L4430)

```diff
-               case jQ.Xc.ChestRefreshed:
-                 zQ.k.mB("chestRefreshedFromServer");
+               case hM.lc.ChestRefreshed:
+                 aM.i.Tz("chestRefreshedFromServer");
```

#### 484. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4432-L4434` → after: `L4556-L4558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4556-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4556-L4558) · [Before (L4432-L4434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4432-L4434)

```diff
-               case jQ.Xc.EnchantingTable:
-                 zQ.k.mB("enchantingTable", {
-                   ez: wQ,
+               case hM.lc.EnchantingTable:
+                 aM.i.Tz("enchantingTable", {
+                   jP: OM,
```

#### 485. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4438-L4439` → after: `L4562-L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4562-L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4562-L4563) · [Before (L4438-L4439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4438-L4439)

```diff
-               case jQ.Xc.HotbarRequest:
-                 zQ.k.mB("setSelectedInventorySlotI", WQ, !0);
+               case hM.lc.HotbarRequest:
+                 aM.i.Tz("setSelectedInventorySlotI", rM, !0);
```

#### 486. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4441-L4442` → after: `L4565-L4566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4565-L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4565-L4566) · [Before (L4441-L4442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4441-L4442)

```diff
-               case jQ.Xc.Scrolled:
-                 zQ.k.mB("ScrollInventorySlot", WQ);
+               case hM.lc.Scrolled:
+                 aM.i.Tz("ScrollInventorySlot", rM);
```

#### 487. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4444-L4445` → after: `L4568-L4569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4568-L4569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4568-L4569) · [Before (L4444-L4445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4444-L4445)

```diff
-               case jQ.Xc.NumberKey:
-                 zQ.k.mB("numkeyPressed", WQ + 1);
+               case hM.lc.NumberKey:
+                 aM.i.Tz("numkeyPressed", rM + 1);
```

#### 488. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4447-L4448` → after: `L4571-L4572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4571-L4572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4571-L4572) · [Before (L4447-L4448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4447-L4448)

```diff
-               case jQ.Xc.DropRequested:
-                 zQ.k.mB("DropInvenItem", 0 !== WQ);
+               case hM.lc.DropRequested:
+                 aM.i.Tz("DropInvenItem", 0 !== rM);
```

#### 489. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4451` → after: `L4575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4575) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4451)

```diff
-                 throw new IQ.d(`InventoryEvent of no kind: what ${QQ}`)
+                 throw new HM.d(`InventoryEvent of no kind: what ${MM}`)
```

#### 490. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4460` → after: `L4584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4584) · [Before (L4460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4460)

```diff
-         this.mB("shotPlayer", {
+         this.Tz("shotPlayer", {
```

#### 491. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4468-L4470` → after: `L4592-L4594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4592-L4594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4592-L4594) · [Before (L4468-L4470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4468-L4470)

```diff
-         this.mB("closeShopOnDamaged", null), this.guard((() => {
-           zQ.k.mB("damagedByOtherPlayer", {
-             jX: null,
+         this.Tz("closeShopOnDamaged", null), this.guard((() => {
+           aM.i.Tz("damagedByOtherPlayer", {
+             xj: null,
```

#### 492. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4472` → after: `L4596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4596) · [Before (L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4472)

```diff
-             iQ: QQ
+             Zj: MM
```

#### 493. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4478-L4479` → after: `L4602-L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4602-L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4602-L4603) · [Before (L4478-L4479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4478-L4479)

```diff
-           zQ.k.mB("yourAttackHit", {
-             fW: wQ,
+           aM.i.Tz("yourAttackHit", {
+             mO: OM,
```

#### 494. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4486` → after: `L4610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4610) · [Before (L4486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4486)

```diff
-         this.mB("PlayerPhysicsTypeUpdate", QQ)
+         this.localPhysicsType = MM, this.Tz("PlayerPhysicsTypeUpdate", MM)
```

#### 495. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4490` → after: `L4614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4614) · [Before (L4490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4490)

```diff
-           QQ === rQ.Md.UPDATE ? (0, cQ.j)(WQ, {
+           MM === mM.Cd.UPDATE ? (0, sM.f)(rM, {
```

#### 496. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4495` → after: `L4619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4619) · [Before (L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4495)

```diff
-           }) : iQ.b.remove(WQ)
+           }) : WM.d.remove(rM)
```

#### 497. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4502` → after: `L4626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4626) · [Before (L4502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4502)

```diff
-         this.mB("showBottomMessage", {
+         this.Tz("showBottomMessage", {
```

#### 498. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4509` → after: `L4633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4633) · [Before (L4509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4509)

```diff
-         this.mB("showBottomMessage", Aw.d)
+         this.Tz("showBottomMessage", XO.c)
```

#### 499. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4513` → after: `L4637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4637) · [Before (L4513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4513)

```diff
-         !this.zoomUnshown || QQ && this.zoomHeld || (this.zoomUnshown = !1, this.mB("cameraZoomSet", this.zoom)), this.zoomHeld = QQ
+         !this.zoomUnshown || MM && this.zoomHeld || (this.zoomUnshown = !1, this.Tz("cameraZoomSet", this.zoom)), this.zoomHeld = MM
```

#### 500. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4518-L4522` → after: `L4642-L4646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4642-L4646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4642-L4646) · [Before (L4518-L4522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4518-L4522)

```diff
-             jX: WQ,
-             BX: XQ
-           } = (0, Vw.c)(Dw.q, QQ);
-           zQ.k.mB("damagedByOtherPlayer", {
-             jX: WQ,
+             xj: rM,
+             vj: iM
+           } = (0, sO.d)(DO.u, MM);
+           aM.i.Tz("damagedByOtherPlayer", {
+             xj: rM,
```

#### 501. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4543` → after: `L4667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4667) · [Before (L4543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4543)

```diff
-                   mode: jQ.se.All,
+                   mode: hM.$d.All,
```

#### 502. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4547-L4548` → after: `L4671-L4672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4671-L4672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4671-L4672) · [Before (L4547-L4548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4547-L4548)

```diff
-               } return wQ ? XQ.size > jQ.jd ? {
-               mode: jQ.se.All,
+               } return OM ? iM.size > hM.yc ? {
+               mode: hM.$d.All,
```

#### 503. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4551` → after: `L4675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4675) · [Before (L4551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4551)

```diff
-               mode: jQ.se.Filter,
+               mode: hM.$d.Filter,
```

#### 504. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4554` → after: `L4678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4678) · [Before (L4554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4554)

```diff
-               mode: jQ.se.Off,
+               mode: hM.$d.Off,
```

#### 505. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4560` → after: `L4684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4684) · [Before (L4560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4560)

```diff
-             mode: jQ.se.All,
+             mode: hM.$d.All,
```

#### 506. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4564` → after: `L4688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4688) · [Before (L4564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4564)

```diff
-         if (XQ.mode === jQ.se.Off && !this.vetoSet) return;
+         if (iM.mode === hM.$d.Off && !this.vetoSet) return;
```

#### 507. `bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4566` → after: `L4690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226R4690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d5a9db6f98e266ac5e5e3706e17624f51f7351618d3542009df4173f175d5226) · [After (L4690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4690) · [Before (L4566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/wasmClientGame.js#L4566)

```diff
-         (0, jQ.Lf)(WQ, 0, XQ.mode, XQ.roots.length, wQ) ? this.vetoSet = XQ.mode !== jQ.se.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
+         (0, hM.Mf)(rM, 0, iM.mode, iM.roots.length, OM) ? this.vetoSet = iM.mode !== hM.$d.Off: this.onError(new Error("SetAltVeto didn't fit the command ring"))
```
