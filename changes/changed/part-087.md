# Changed — Bundle Modifications Report (Part 087 / 137)

- **Updated at**: `2026-11-24T07:07 JST`
- **Part**: `87 / 137` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 086](part-086.md) · [Part 088 →](part-088.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/92.js` (w4ddu.56408518 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/92.js` (3531 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca)

#### 883. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7197-L7200` → after: `L7037-L7040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7037-L7040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7037-L7040) · [Before (L7197-L7200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7197-L7200)

```diff
-         const nC = null !== (QC = CC.gravity) && void 0 !== QC ? QC : [0, 0, 0];
-         bC.gravity = new UC.Eg(nC[0], nC[1], nC[2]);
-         for (const oC of CC.colorGradients) bC.addColorGradient(oC.timeFraction, (0, HC.n)(oC.minColor), oC.maxColor ? (0, HC.n)(oC.maxColor) : void 0);
-         const fC = new zq(this.MN, bC, CC, zC, (CC => {
+         const yk = null !== (Xk = kk.gravity) && void 0 !== Xk ? Xk : [0, 0, 0];
+         ik.gravity = new rk.Ge(yk[0], yk[1], yk[2]);
+         for (const ak of kk.colorGradients) ik.addColorGradient(ak.timeFraction, (0, uk.l)(ak.minColor), ak.maxColor ? (0, uk.l)(ak.maxColor) : void 0);
+         const lk = new ra(this.qZ, ik, kk, Fk, (kk => {
```

#### 884. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7206` → after: `L7046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7046) · [Before (L7206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7206)

```diff
-         (0, mC.p)(this.MN, CC)
+         (0, pk.o)(this.qZ, kk)
```

#### 885. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7209` → after: `L7049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7049) · [Before (L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7209)

```diff
-         "critical" === CC && (0, mC.n)(this.MN, mC.q, [zC[0], zC[1], zC[2]], ZC)
+         "critical" === kk && (0, pk.k)(this.qZ, pk.s, [Fk[0], Fk[1], Fk[2]], Ik)
```

#### 886. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7214` → after: `L7054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7054) · [Before (L7214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7214)

```diff
-         for (const CC of this.textures.values())(0, xC.C)(CC);
+         for (const kk of this.textures.values())(0, Kk.A)(kk);
```

#### 887. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7218` → after: `L7058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7058) · [Before (L7218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7218)

```diff
-         const ZC = "string" === typeof CC ? `${CC}|${zC?"mips":"flat"}` : `|${CC.kind}`;
+         const Ik = "string" === typeof kk ? `${kk}|${Fk?"mips":"flat"}` : `|${kk.kind}`;
```

#### 888. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7221-L7222` → after: `L7061-L7062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7061-L7062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7061-L7062) · [Before (L7221-L7222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7221-L7222)

```diff
-           const wC = this.MN.Vg.Km();
-           QC = "string" === typeof CC ? (0, xC.p)(wC, (0, SC.d)(CC), zC) : function(CC) {
+           const Tk = this.qZ.Xw.mG();
+           Xk = "string" === typeof kk ? (0, Kk.t)(Tk, (0, wk.c)(kk), Fk) : function(kk) {
```

#### 889. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7228` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7068) · [Before (L7228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7228)

```diff
-                 samplingMode: xC.h.nearest,
+                 samplingMode: Kk.i.nearest,
```

#### 890. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7231-L7232` → after: `L7071-L7072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7071-L7072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7071-L7072) · [Before (L7231-L7232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7231-L7232)

```diff
-               QC = (0, JC.n)(CC, "smokePuff", ZC),
-               wC = (0, JC.j)(QC);
+               Xk = (0, sk.k)(kk, "smokePuff", Ik),
+               Tk = (0, sk.h)(Xk);
```

#### 891. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7235` → after: `L7075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7075) · [Before (L7235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7235)

```diff
-             })), (0, JC.V)(QC, !0, !1), (0, xC.U)(QC), QC
+             })), (0, sk.T)(Xk, !0, !1), (0, Kk.R)(Xk), Xk
```

#### 892. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7244-L7245` → after: `L7084-L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7084-L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7084-L7085) · [Before (L7244-L7245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7244-L7245)

```diff
-         this.MN = CC, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = CC => {
-           this.offset = (this.offset + Math.min(CC, 250) / 1e3 * 1.2 * Qq) % 1, (0, JC.J)(this.material, -this.offset)
+         this.qZ = kk, this.node = null, this.material = null, this.look = "", this.offset = 0, this.slide = kk => {
+           this.offset = (this.offset + Math.min(kk, 250) / 1e3 * 1.2 * Ma) % 1, (0, sk.L)(this.material, -this.offset)
```

#### 893. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7250-L7251` → after: `L7090-L7091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7090-L7091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7090-L7091) · [Before (L7250-L7251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7250-L7251)

```diff
-         const zC = this.MN.Vg,
-           ZC = (0, RC.n)(zC, "routeChevrons", function(CC) {
+         const Fk = this.qZ.Xw,
+           Ik = (0, Pk.m)(Fk, "routeChevrons", function(kk) {
```

#### 894. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7271` → after: `L7111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7111) · [Before (L7271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7271)

```diff
-         ZC.material = this.materialFor(CC.colour, CC.alpha), ZC.tS = !1, ZC.receiveShadows = !1, ZC.Hg = !0, zC.jS(ZC, !1, CC.cells[0].pos), this.node = ZC, this.MN.on("afterRender", this.slide)
+         Ik.material = this.materialFor(kk.colour, kk.alpha), Ik.gw = !1, Ik.receiveShadows = !1, Ik.ne = !0, Fk.hw(Ik, !1, kk.cells[0].pos), this.node = Ik, this.qZ.on("afterRender", this.slide)
```

#### 895. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7278` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7118) · [Before (L7278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7278)

```diff
-         this.node && (this.MN.off("afterRender", this.slide), this.node.dispose(), this.node = null)
+         this.node && (this.qZ.off("afterRender", this.slide), this.node.dispose(), this.node = null)
```

#### 896. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7281` → after: `L7121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7121) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7281)

```diff
-         const ZC = `${CC} ${zC}`;
+         const Ik = `${kk} ${Fk}`;
```

#### 897. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7283` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7123) · [Before (L7283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7283)

```diff
-         this.material && this.look === ZC || (null === (QC = this.material) || void 0 === QC || QC.dispose(!0, !0), this.material = Io(this.MN.Vg.Km(), CC, zC), this.look = ZC);
+         this.material && this.look === Ik || (null === (Xk = this.material) || void 0 === Xk || Xk.dispose(!0, !0), this.material = Qa(this.qZ.Xw.mG(), kk, Fk), this.look = Ik);
```

#### 898. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7287` → after: `L7127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7127) · [Before (L7287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7287)

```diff
-     var bq = ZC(38967);
+     var Fq = Ik(39134);
```

#### 899. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7290` → after: `L7130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7130) · [Before (L7290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7290)

```diff
-         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new bq.b((() => zo.e.get("forcedCameraDirectionTransitionMs")), (CC => {
+         this.particles = void 0, this.meshes = void 0, this.pools = void 0, this.routeChevrons = void 0, this.entityPresentation = void 0, this.mobModels = void 0, this.cameraFar = void 0, this.cameraTurn = new Fq.d((() => Ml.e.get("forcedCameraDirectionTransitionMs")), (kk => {
```

#### 900. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7295` → after: `L7135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7135) · [Before (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7295)

```diff
-         return Boolean(SC.c.getModelOverride(CC))
+         return Boolean(wk.b.getModelOverride(kk))
```

#### 901. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7327-L7331` → after: `L7167-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7167-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7167-L7171) · [Before (L7327-L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7327-L7331)

```diff
-     var fq = ZC(1275),
-       oq = ZC(4366),
-       qq = ZC(38824),
-       Fq = ZC(1733),
-       Wq = ZC(1692);
+     var Xq = Ik(1301),
+       Tq = Ik(4423),
+       iq = Ik(38979),
+       yq = Ik(1745),
+       lq = Ik(1712);
```

#### 902. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7455` → after: `L7295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7295) · [Before (L7455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7455)

```diff
-         super(`${Nq.name} has been mutated during iteration`)
+         super(`${aq.name} has been mutated during iteration`)
```

#### 903. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7467` → after: `L7307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7307) · [Before (L7467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7467)

```diff
-           nC = null !== (zC = null === bC || void 0 === bC || null === (ZC = bC.persisted) || void 0 === ZC || null === (QC = ZC.shared) || void 0 === QC ? void 0 : QC.passkeyLastUpdated) && void 0 !== zC ? zC : 0;
+           yk = null !== (Fk = null === ik || void 0 === ik || null === (Ik = ik.persisted) || void 0 === Ik || null === (Xk = Ik.shared) || void 0 === Xk ? void 0 : Xk.passkeyLastUpdated) && void 0 !== Fk ? Fk : 0;
```

#### 904. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7477-L7484` → after: `L7317-L7324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7317-L7324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7317-L7324) · [Before (L7477-L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7477-L7484)

```diff
-     var Aq = ZC(38976),
-       xq = ZC(8738),
-       Jq = ZC(38986),
-       Iq = ZC(4342),
-       iq = ZC(4428),
-       vq = ZC(1263),
-       eq = ZC(38992),
-       hq = ZC(4355);
+     var Hq = Ik(39149),
+       Jq = Ik(8696),
+       xq = Ik(39162),
+       Pq = Ik(4395),
+       Kq = Ik(4491),
+       Qq = Ik(1287),
+       sq = Ik(39171),
+       Vq = Ik(4411);
```

#### 905. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7487-L7489` → after: `L7327-L7329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7327-L7329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7327-L7329) · [Before (L7487-L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7487-L7489)

```diff
-         this.MN = CC, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.MN.camera.tL = (CC, zC) => {
-           const ZC = this.MN.camera.cL;
-           this.MN.JR.XzC(this.MN.qE).cameraZoomChanged(zC, CC), 0 !== ZC && 0 === this.MN.camera.cL && this.disableFrontFacing()
+         this.qZ = kk, this.temporaryThirdPersonTimeout = null, this.startedTemporaryThirdPersonFromFirstPerson = !1, this.locked = !1, this.lockedZoom = 0, this.deferredZoom = null, this.deferredThirdPersonEndsAt = null, this.qZ.camera.EY = (kk, Fk) => {
+           const Ik = this.qZ.camera.JY;
+           this.qZ.MJ.BFk(this.qZ.oR).cameraZoomChanged(Fk, kk), 0 !== Ik && 0 === this.qZ.camera.JY && this.disableFrontFacing()
```

#### 906. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7491` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7331) · [Before (L7491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7491)

```diff
-         const zC = pC.o.subscribe("SwapCameraZoom", (() => {
+         const Fk = Hk.g.subscribe("SwapCameraZoom", (() => {
```

#### 907. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7498` → after: `L7338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7338) · [Before (L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7498)

```diff
-           this.endTemporaryThirdPerson(), this.MN.camera.WU.reset(), pC.o.unsubscribe(zC), ZC()
+           this.endTemporaryThirdPerson(), this.qZ.camera.pY.reset(), Hk.g.unsubscribe(Fk), Ik()
```

#### 908. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7506` → after: `L7346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7346) · [Before (L7506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7506)

```diff
-         if (CC) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.MN.camera.cL, void(this.locked = !0);
+         if (kk) return this.endTemporaryThirdPerson(), this.disableFrontFacing(), this.lockedZoom = this.qZ.camera.JY, void(this.locked = !0);
```

#### 909. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7517` → after: `L7357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7357) · [Before (L7517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7517)

```diff
-         return this.locked ? null !== (CC = null === (zC = this.deferredZoom) || void 0 === zC ? void 0 : zC.zoom) && void 0 !== CC ? CC : this.lockedZoom : this.MN.camera.cL
+         return this.locked ? null !== (kk = null === (Fk = this.deferredZoom) || void 0 === Fk ? void 0 : Fk.zoom) && void 0 !== kk ? kk : this.lockedZoom : this.qZ.camera.JY
```

#### 910. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7523-L7524` → after: `L7363-L7364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7363-L7364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7363-L7364) · [Before (L7523-L7524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7523-L7524)

```diff
-             const CC = this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing;
-             if (!(0 === this.MN.camera.cL && !CC)) return;
+             const kk = this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing;
+             if (!(0 === this.qZ.camera.JY && !kk)) return;
```

#### 911. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7536` → after: `L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7376) · [Before (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7536)

```diff
-         this.MN.pR.canUseZoomKey || pC.o.bp("showBottomMessage", {
+         this.qZ.gJ.canUseZoomKey || Hk.g.GL("showBottomMessage", {
```

#### 912. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7550` → after: `L7390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7390) · [Before (L7550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7550)

```diff
-         const zC = CC - this.MN.camera.cL;
+         const Fk = kk - this.qZ.camera.JY;
```

#### 913. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7558-L7559` → after: `L7398-L7399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7398-L7399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7398-L7399) · [Before (L7558-L7559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7558-L7559)

```diff
-         const zC = this.MN.camera.cL;
-         CC < 0 ? this.MN.camera.cL = 0 : CC > (this.MN.pR.maxPlayerZoom || 10) ? this.MN.camera.cL = this.MN.pR.maxPlayerZoom || 10 : this.MN.camera.cL = CC, this.onCameraZoomSet(zC, CC)
+         const Fk = this.qZ.camera.JY;
+         kk < 0 ? this.qZ.camera.JY = 0 : kk > (this.qZ.gJ.maxPlayerZoom || 10) ? this.qZ.camera.JY = this.qZ.gJ.maxPlayerZoom || 10 : this.qZ.camera.JY = kk, this.onCameraZoomSet(Fk, kk)
```

#### 914. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7562` → after: `L7402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7402) · [Before (L7562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7562)

```diff
-         this.MN.JR.XzC(this.MN.qE).shouldChangeCameraZoom(CC) && (0 === this.MN.camera.cL && 1 === CC ? CC++ : 2 === this.MN.camera.cL && -1 === CC && CC--, this.setCameraZoomNoValidation(this.MN.camera.cL + CC))
+         this.qZ.MJ.BFk(this.qZ.oR).shouldChangeCameraZoom(kk) && (0 === this.qZ.camera.JY && 1 === kk ? kk++ : 2 === this.qZ.camera.JY && -1 === kk && kk--, this.setCameraZoomNoValidation(this.qZ.camera.JY + kk))
```

#### 915. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7565` → after: `L7405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7405) · [Before (L7565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7565)

```diff
-         this.locked || (this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.MN.camera.cL ? this.setCameraZoom(this.MN.pR.zoomOutDistance || 3) : (this.setCameraZoom(this.MN.pR.zoomOutDistance || 3), 0 !== th … [truncated]
+         this.locked || (this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing ? (this.disableFrontFacing(), this.setCameraZoom(0)) : 0 === this.qZ.camera.JY ? this.setCameraZoom(this.qZ.gJ.zoomOutDistance || 3) : (this.setCameraZoom(this.qZ.gJ.zoomOutDistance || 3), 0 !== th … [truncated]
```

#### 916. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7568` → after: `L7408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7408) · [Before (L7568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7568)

```diff
-         this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing = !1, this.MN.camera.Qp[0] = 0, this.MN.camera.Qp[1] = 0, this.MN.camera.Qp[2] = 0
+         this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing = !1, this.qZ.camera.sq[0] = 0, this.qZ.camera.sq[1] = 0, this.qZ.camera.sq[2] = 0
```

#### 917. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7571` → after: `L7411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7411) · [Before (L7571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7571)

```diff
-         this.MN.JR.getState(this.MN.qE, "cameraShake").frontFacing = !0, this.MN.camera.Qp[0] = Math.PI, this.MN.camera.Qp[1] = 0, this.MN.camera.Qp[2] = Math.PI
+         this.qZ.MJ.getState(this.qZ.oR, "cameraShake").frontFacing = !0, this.qZ.camera.sq[0] = Math.PI, this.qZ.camera.sq[1] = 0, this.qZ.camera.sq[2] = Math.PI
```

#### 918. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7574` → after: `L7414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7414) · [Before (L7574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7574)

```diff
-         this.MN.JR.XzC(this.MN.qE).cameraZoomSet(CC, zC), pC.o.bp("cameraZoomSet", this.MN.camera.cL), 0 === this.MN.camera.cL && this.disableFrontFacing()
+         this.qZ.MJ.BFk(this.qZ.oR).cameraZoomSet(kk, Fk), Hk.g.GL("cameraZoomSet", this.qZ.camera.JY), 0 === this.qZ.camera.JY && this.disableFrontFacing()
```

#### 919. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7577-L7578` → after: `L7417-L7418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7417-L7418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7417-L7418) · [Before (L7577-L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7577-L7578)

```diff
-     var Yq = ZC(36451),
-       dq = ZC(39e3);
+     var Sq = Ik(36562),
+       oq = Ik(39180);
```

#### 920. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7588` → after: `L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7428) · [Before (L7588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7588)

```diff
-         this.MN = CC, this.pointerLockWrapper = zC, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = CC => {
+         this.qZ = kk, this.pointerLockWrapper = Fk, this.active = !1, this.hasPoint = !1, this.clientX = 0, this.clientY = 0, this.tapListener = null, this.onPointerMove = kk => {
```

#### 921. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7592` → after: `L7432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7432) · [Before (L7592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7592)

```diff
-           "mouse" !== CC.pointerType ? "pen" !== CC.pointerType && !cq(CC) || !this.MN.container.element.contains(CC.target) || (0, Yq.h)(CC.target) || null === (zC = this.tapListener) || void 0 === zC || zC.call(this, CC.clientX, CC.clientY) : this.followPoint(CC.clientX, CC.cli … [truncated]
+           "mouse" !== kk.pointerType ? "pen" !== kk.pointerType && !pq(kk) || !this.qZ.container.element.contains(kk.target) || (0, Sq.j)(kk.target) || null === (Fk = this.tapListener) || void 0 === Fk || Fk.call(this, kk.clientX, kk.clientY) : this.followPoint(kk.clientX, kk.cli … [truncated]
```

#### 922. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7596` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7436) · [Before (L7596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7596)

```diff
-         CC !== this.active && (this.active = CC, this.MN.container.kE(!CC), CC ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(lq)) : (window.removeEventListener(" … [truncated]
+         kk !== this.active && (this.active = kk, this.qZ.container.KU(!kk), kk ? (window.addEventListener("pointermove", this.onPointerMove), window.addEventListener("pointerdown", this.onPointerDown), this.pointerLockWrapper.requestFreeCursor(nq)) : (window.removeEventListener(" … [truncated]
```

#### 923. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7608` → after: `L7448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7448) · [Before (L7608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7608)

```diff
-         const QC = this.MN.container.canvas.getBoundingClientRect();
+         const Xk = this.qZ.container.canvas.getBoundingClientRect();
```

#### 924. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7622` → after: `L7462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7462) · [Before (L7622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7622)

```diff
-       return "mouse" === CC.pointerType || !Hn.b.get("isTouchScreen")
+       return "mouse" === kk.pointerType || !uy.d.get("isTouchScreen")
```

#### 925. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7624-L7628` → after: `L7464-L7468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7464-L7468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7464-L7468) · [Before (L7624-L7628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7624-L7628)

```diff
-     var uq = ZC(6480),
-       rq = ZC(37275),
-       sq = ZC(1887),
-       Tq = ZC(39008),
-       aq = ZC(38923);
+     var uq = Ik(6473),
+       bq = Ik(37447),
+       Rq = Ik(1916),
+       Uq = Ik(39190),
+       Cq = Ik(39087);
```

#### 926. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7631` → after: `L7471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7471) · [Before (L7631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7631)

```diff
-         this.MN = CC, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
+         this.qZ = kk, this.enabled = !1, this.movesFlyIt = !1, this.canUsefreeCam = !1, this.blocked = !1, this.tickHandler = null, this.inputs = {
```

#### 927. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7641-L7642` → after: `L7481-L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7481-L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7481-L7482) · [Before (L7641-L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7641-L7642)

```diff
-         }, this.flyAccel = new uq.e, this.flyVertMoveDir = 0, this.toggles = new Wf.f((CC => {
-           this.canUsefreeCam = CC, this.enabled && !this.canUsefreeCam && this.IK(!1), pC.o.bp("freeCameraChanged")
+         }, this.flyAccel = new uq.b, this.flyVertMoveDir = 0, this.toggles = new tl.h((kk => {
+           this.canUsefreeCam = kk, this.enabled && !this.canUsefreeCam && this.Av(!1), Hk.g.GL("freeCameraChanged")
```

#### 928. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7644` → after: `L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7484) · [Before (L7644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7644)

```diff
-         const zC = pC.o.subscribe("userContextUpdated", (CC => {
+         const Fk = Hk.g.subscribe("userContextUpdated", (kk => {
```

#### 929. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7648` → after: `L7488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7488) · [Before (L7648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7648)

```diff
-           pC.o.unsubscribe(zC), this.IK(!1);
+           Hk.g.unsubscribe(Fk), this.Av(!1);
```

#### 930. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7665` → after: `L7505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7505) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7665)

```diff
-         this.IK(!this.enabled)
+         this.Av(!this.enabled)
```

#### 931. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7669` → after: `L7509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7509) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7669)

```diff
-         return this.panelMovesFly() || this.enabled && !(null === (CC = this.MN.bloxd.client) || void 0 === CC || !CC.isReplayMode())
+         return this.panelMovesFly() || this.enabled && !(null === (kk = this.qZ.bloxd.client) || void 0 === kk || !kk.isReplayMode())
```

#### 932. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7675` → after: `L7515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7515) · [Before (L7675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7675)

```diff
-         CC ? (this.IK(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, pC.o.bp("freeCameraChanged"))) : this.movesFlyIt && this.IK(!1)
+         kk ? (this.Av(!0), this.enabled && !this.movesFlyIt && (this.movesFlyIt = !0, Hk.g.GL("freeCameraChanged"))) : this.movesFlyIt && this.Av(!1)
```

#### 933. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7678` → after: `L7518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7518) · [Before (L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7678)

```diff
-         CC !== this.blocked && (this.blocked = CC, CC && this.IK(!1), pC.o.bp("freeCameraChanged"))
+         kk !== this.blocked && (this.blocked = kk, kk && this.Av(!1), Hk.g.GL("freeCameraChanged"))
```

#### 934. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7689` → after: `L7529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7529) · [Before (L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7689)

```diff
-           if (CC === QC) return !(0, aq.e)() && (this.inputs[QC] = ZC, ZC);
+           if (kk === Xk) return !(0, Cq.b)() && (this.inputs[Xk] = Ik, Ik);
```

#### 935. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7696` → after: `L7536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7536) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7696)

```diff
-         for (const QC of sq.g) {
+         for (const Xk of Rq.l) {
```

#### 936. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7698` → after: `L7538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7538) · [Before (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7698)

```diff
-           if (null !== (ZC = sq.o[QC]) && void 0 !== ZC && ZC.includes(zC)) return !0
+           if (null !== (Ik = Rq.s[Xk]) && void 0 !== Ik && Ik.includes(Fk)) return !0
```

#### 937. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7703` → after: `L7543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7543) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7703)

```diff
-         (rq.b.isCameraDetachedFromPlayer(this.MN) || rq.b.detachCamera(this.MN)) && (this.tickHandler = CC => {
+         (bq.b.isCameraDetachedFromPlayer(this.qZ) || bq.b.detachCamera(this.qZ)) && (this.tickHandler = kk => {
```

#### 938. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7705` → after: `L7545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7545) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7705)

```diff
-         }, this.MN.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
+         }, this.qZ.on("renderTickBegin", this.tickHandler), this.enabled = !0, this.notifyStateChanged(!0))
```

#### 939. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7709-L7711` → after: `L7549-L7551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7549-L7551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7549-L7551) · [Before (L7709-L7711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7709-L7711)

```diff
-         this.tickHandler && (this.MN.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !rq.b.isCameraDetachedFromPlayer(this.MN) || null !== (CC = this.MN.bloxd.client) && void 0 !== CC && CC.isReplayMode() || rq.b.reattachCamera(this.MN), this.clearMovementInpu … [truncated]
-         const ZC = null !== (zC = this.MN.bloxd.client) && void 0 !== zC && zC.isReplayMode() ? void 0 : this.MN.JR.TzC();
-         for (const QC of ["forward", "backward", "left", "right"]) ZC && this.MN.inputs.state[QC] && (ZC[QC] = !0);
+         this.tickHandler && (this.qZ.off("renderTickBegin", this.tickHandler), this.tickHandler = null), !bq.b.isCameraDetachedFromPlayer(this.qZ) || null !== (kk = this.qZ.bloxd.client) && void 0 !== kk && kk.isReplayMode() || bq.b.reattachCamera(this.qZ), this.clearMovementInpu … [truncated]
+         const Ik = null !== (Fk = this.qZ.bloxd.client) && void 0 !== Fk && Fk.isReplayMode() ? void 0 : this.qZ.MJ.mFk();
+         for (const Xk of ["forward", "backward", "left", "right"]) Ik && this.qZ.inputs.state[Xk] && (Ik[Xk] = !0);
```

#### 940. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7738` → after: `L7578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7578) · [Before (L7738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7738)

```diff
-         if ((null === (zC = this.MN.bloxd.client) || void 0 === zC || !zC.isReplayMode()) && !this.MN.JR.EzC(this.MN.qE).isAlive) return void this.IK(!1);
+         if ((null === (Fk = this.qZ.bloxd.client) || void 0 === Fk || !Fk.isReplayMode()) && !this.qZ.MJ.WFk(this.qZ.oR).isAlive) return void this.Av(!1);
```

#### 941. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7741-L7742` → after: `L7581-L7582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7581-L7582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7581-L7582) · [Before (L7741-L7742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7741-L7742)

```diff
-           wC = QC * this.MN.Jm,
-           bC = this.MN.camera.heading,
+           Tk = Xk * this.qZ.WG,
+           ik = this.qZ.camera.heading,
```

#### 942. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7759` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7599) · [Before (L7759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7759)

```diff
-         const pC = (0, uq.i)(this.flyAccel, MC, gC, SC, wC);
+         const Hk = (0, uq.f)(this.flyAccel, jk, ek, wk, Tk);
```

#### 943. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7761` → after: `L7601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7601) · [Before (L7761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7761)

```diff
-         const PC = 12 * (1 + this.flyAccel.Mw);
+         const Jk = 12 * (1 + this.flyAccel.wT);
```

#### 944. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7765` → after: `L7605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7605) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7765)

```diff
-           const CC = (NC > 1 ? 1 / NC : 1) * PC * QC;
+           const kk = (Zk > 1 ? 1 / Zk : 1) * Jk * Xk;
```

#### 945. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7770-L7771` → after: `L7610-L7611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7610-L7611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7610-L7611) · [Before (L7770-L7771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7770-L7771)

```diff
-         const xC = this.MN.JR.yG(this.MN.camera.YL);
-         this.MN.JR.setPosition(this.MN.camera.YL, [xC[0] + GC, xC[1] + AC, xC[2] + RC])
+         const Qk = this.qZ.MJ.OJ(this.qZ.camera.aY);
+         this.qZ.MJ.setPosition(this.qZ.camera.aY, [Qk[0] + xk, Qk[1] + Kk, Qk[2] + Pk])
```

#### 946. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7775` → after: `L7615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7615) · [Before (L7775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7775)

```diff
-         pC.o.bp("freeCameraChanged"), (0, Tq.e)(CC), null !== (zC = this.MN.bloxd.client) && void 0 !== zC && zC.isReplayMode() && pC.o.bp("replayViewer|uiRefresh")
+         Hk.g.GL("freeCameraChanged"), (0, Uq.c)(kk), null !== (Fk = this.qZ.bloxd.client) && void 0 !== Fk && Fk.isReplayMode() && Hk.g.GL("replayViewer|uiRefresh")
```

#### 947. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7778-L7784` → after: `L7618-L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7618-L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7618-L7624) · [Before (L7778-L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7778-L7784)

```diff
-     var Dq = ZC(1806),
-       jq = ZC(39015),
-       yq = ZC(39005),
-       Lq = ZC(39036),
-       Uq = ZC(37486),
-       Bq = ZC(39028),
-       Oq = ZC(38755);
+     var cq = Ik(1844),
+       Wq = Ik(39196),
+       fq = Ik(39183),
+       Bq = Ik(39217),
+       dq = Ik(37670),
+       Yq = Ik(39209),
+       Aq = Ik(38918);
```

#### 948. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7788-L7790` → after: `L7628-L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7628-L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7628-L7630) · [Before (L7788-L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7788-L7790)

```diff
-       wC.heading = zC + CC.Qp[1] + (QC ? CC.cameraRotationOffset[1] : 0);
-       const bC = ZC + CC.Qp[0] + (QC ? CC.cameraRotationOffset[0] : 0);
-       (0, yq.j)((0, yq.c)(wC.heading, bC, kq), wC)
+       Tk.heading = Fk + kk.sq[1] + (Xk ? kk.cameraRotationOffset[1] : 0);
+       const ik = Ik + kk.sq[0] + (Xk ? kk.cameraRotationOffset[0] : 0);
+       (0, fq.n)((0, fq.h)(Tk.heading, ik, gq), Tk)
```

#### 949. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7796` → after: `L7636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7636) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7796)

```diff
-       GC().set(CF, wC[0], wC[1], 0), GC().gq(CF, CF, GC().ZERO, CC.Cp + CC.Qp[2] + nC[2]), GC().io(CF, CF, GC().ZERO, ZC + CC.Qp[0] + nC[0]), GC().mo(CF, CF, GC().ZERO, zC + CC.Qp[1] + nC[1]), GC().add(bC, bC, CF)
+       xk().set(hq, Tk[0], Tk[1], 0), xk().wi(hq, hq, xk().ZERO, kk.ta + kk.sq[2] + yk[2]), xk().ti(hq, hq, xk().ZERO, Ik + kk.sq[0] + yk[0]), xk().ei(hq, hq, xk().ZERO, Fk + kk.sq[1] + yk[1]), xk().add(ik, ik, hq)
```

#### 950. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7802` → after: `L7642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7642) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7802)

```diff
-       return rq.b.copyReattachedTargetPosition(CC, ZF) ? CC.camera.Rk(ZF, zC, ZC, rq.b.getSavedZoomDistance(CC), QC) : null
+       return bq.b.copyReattachedTargetPosition(kk, Dq) ? kk.camera.qD(Dq, Fk, Ik, bq.b.getSavedZoomDistance(kk), Xk) : null
```

#### 951. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7806` → after: `L7646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7646) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7806)

```diff
-       return (0, Bq.e)(CC) ? (0, uC.c)(CC) : null
+       return (0, Yq.g)(kk) ? (0, Nk.c)(kk) : null
```

#### 952. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7810` → after: `L7650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7650) · [Before (L7810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7810)

```diff
-         this.MN = CC, this.view = zC, this.pickEntity = ZC, this.defaultPose = (0, dq.k)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (CC, zC, ZC) => this.pickDistance(CC, zC, ZC, this.MN.SCC), t … [truncated]
+         this.qZ = kk, this.view = Fk, this.pickEntity = Ik, this.defaultPose = (0, oq.j)(), this.feet = [0, 0, 0], this.aim = [0, 0, 0], this.localFrom = [0, 0, 0], this.pastBlocks = [0, 0, 0], this.pickTargetedBlock = (kk, Fk, Ik) => this.pickDistance(kk, Fk, Ik, this.qZ.skk), t … [truncated]
```

#### 953. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7813-L7814` → after: `L7653-L7654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7653-L7654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7653-L7654) · [Before (L7813-L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7813-L7814)

```diff
-           return null !== (QC = this.pickEntity(CC, zC, null !== wC && void 0 !== wC ? wC : ZC)) && void 0 !== QC ? QC : wC
-         }, this.isUntargeted = CC => !this.MN.SCC(CC)
+           return null !== (Xk = this.pickEntity(kk, Fk, null !== Tk && void 0 !== Tk ? Tk : Ik)) && void 0 !== Xk ? Xk : Tk
+         }, this.isUntargeted = kk => !this.qZ.skk(kk)
```

#### 954. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7817` → after: `L7657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7657) · [Before (L7817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7817)

```diff
-         return this.MN.mCC
+         return this.qZ.Nkk
```

#### 955. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7821` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7661) · [Before (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7821)

```diff
-         return null !== zC && this.MN.JR.lL(zC) ? (0, tf.getDrawnPosition)(this.MN, zC, this.feet) : null
+         return null !== Fk && this.qZ.MJ.ZY(Fk) ? (0, Wl.getDrawnPosition)(this.qZ, Fk, this.feet) : null
```

#### 956. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7826-L7827` → after: `L7666-L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7666-L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7666-L7667) · [Before (L7826-L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7826-L7827)

```diff
-           return CC.JR.lL(zC) ? ((0, tf.getDrawnPosition)(CC, zC, ZC), null !== CC.bloxd.getLifeformType(zC) && (ZC[1] += CC.bloxd.getLifeformEyeHeight(zC)), ZC) : null
-         }(this.MN, zC, this.aim)
+           return kk.MJ.ZY(Fk) ? ((0, Wl.getDrawnPosition)(kk, Fk, Ik), null !== kk.bloxd.getLifeformType(Fk) && (Ik[1] += kk.bloxd.getLifeformEyeHeight(Fk)), Ik) : null
+         }(this.qZ, Fk, this.aim)
```

#### 957. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7832` → after: `L7672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7672) · [Before (L7832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7832)

```diff
-         return null === bC ? null : bC === this.MN.qE ? this.view.heading : null !== (zC = null !== (ZC = null === (QC = (0, uf.getCaughtUpMeshRotation)(this.MN, bC)) || void 0 === QC ? void 0 : QC.renderRotation[1]) && void 0 !== ZC ? ZC : null === (wC = this.MN.JR.MzC(bC)) || v … [truncated]
+         return null === ik ? null : ik === this.qZ.oR ? this.view.heading : null !== (Fk = null !== (Ik = null === (Xk = (0, Rl.getCaughtUpMeshRotation)(this.qZ, ik)) || void 0 === Xk ? void 0 : Xk.renderRotation[1]) && void 0 !== Ik ? Ik : null === (Tk = this.qZ.MJ.KFk(ik)) || v … [truncated]
```

#### 958. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7836-L7838` → after: `L7676-L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7676-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7676-L7678) · [Before (L7836-L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7836-L7838)

```diff
-           MN: QC
-         } = this, wC = QC.camera.Yk(QC.wzC(CC, null, this.localFrom), zC, ZC);
-         return wC < ZC - 1e-6 ? wC : null
+           qZ: Xk
+         } = this, Tk = Xk.camera.ZD(Xk.ZFk(kk, null, this.localFrom), Fk, Ik);
+         return Tk < Ik - 1e-6 ? Tk : null
```

#### 959. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7851` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7691) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7851)

```diff
-         const wC = this.MN.CM(CC, zC, ZC, QC);
+         const Tk = this.qZ.rZ(kk, Fk, Ik, Xk);
```

#### 960. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7855` → after: `L7695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7695) · [Before (L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7855)

```diff
-         return (0, Dq.w)(this.MN.Vg.Lk().fov)
+         return (0, cq.A)(this.qZ.Xw.PD().fov)
```

#### 961. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7858` → after: `L7698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7698) · [Before (L7858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7858)

```diff
-         return (0, Dq.w)((0, Oq.getSettingsFov)())
+         return (0, cq.A)((0, Aq.getSettingsFov)())
```

#### 962. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7863-L7864` → after: `L7703-L7704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7703-L7704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7703-L7704) · [Before (L7863-L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7863-L7864)

```diff
-         } = this.MN.Vg, zC = CC.getRenderWidth(), ZC = CC.getRenderHeight();
-         return zC > 0 && ZC > 0 ? zC / ZC : 1
+         } = this.qZ.Xw, Fk = kk.getRenderWidth(), Ik = kk.getRenderHeight();
+         return Fk > 0 && Ik > 0 ? Fk / Ik : 1
```

#### 963. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7868` → after: `L7708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7708) · [Before (L7868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7868)

```diff
-           MN: CC
+           qZ: kk
```

#### 964. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7877` → after: `L7717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7717) · [Before (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7877)

```diff
-           null !== wC && (CC.lB(QF, zC.position), zF(CC.camera, ZC, QC, bC, rq.b.getSavedRigShift(CC), zC.position)), Vq(CC.camera, ZC, QC, bC, zC)
+           null !== Tk && (kk.Km(Mq, Fk.position), rq(kk.camera, Ik, Xk, ik, bq.b.getSavedRigShift(kk), Fk.position)), mq(kk.camera, Ik, Xk, ik, Fk)
```

#### 965. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7879-L7880` → after: `L7719-L7720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7719-L7720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7719-L7720) · [Before (L7879-L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7879-L7880)

```diff
-         const QC = 0 !== zC.uL;
-         return GC().copy(ZC.position, zC.yG()), zF(zC, zC.heading, zC.pitch, QC, CC.Vg.Lk().Vk, ZC.position), Vq(zC, zC.heading, zC.pitch, QC, ZC), ZC
+         const Xk = 0 !== Fk.VY;
+         return xk().copy(Ik.position, Fk.OJ()), rq(Fk, Fk.heading, Fk.pitch, Xk, kk.Xw.PD().KD, Ik.position), mq(Fk, Fk.heading, Fk.pitch, Xk, Ik), Ik
```

#### 966. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7883` → after: `L7723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7723) · [Before (L7883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7883)

```diff
-     var fF = ZC(36454);
+     var XL = Ik(36571);
```

#### 967. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7886` → after: `L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7726) · [Before (L7886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7886)

```diff
-         this.MN = CC, this.fN = zC, this.pointer = ZC, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
+         this.qZ = kk, this.XZ = Fk, this.pointer = Ik, this.eye = [0, 0, 0], this.ray = [0, 0, 0], this.screenPoint = [0, 0], this.lastPick = {
```

#### 968. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7900` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7740) · [Before (L7900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7900)

```diff
-         const QC = MF(this.MN, this.eye);
+         const Xk = qL(this.qZ, this.eye);
```

#### 969. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7904` → after: `L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7744) · [Before (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7904)

```diff
-             fC = null === nC || nC <= mq ? bC : nC;
+             lk = null === yk || yk <= vq ? ik : yk;
```

#### 970. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7906` → after: `L7746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7746) · [Before (L7906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7906)

```diff
-         }(QC, ZC, this.copyRay(), this.fN.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(QC), !0
+         }(Xk, Ik, this.copyRay(), this.XZ.pickCursorTarget, this.tapPoint), this.hasTapPoint = !0, this.faceTap(Xk), !0
```

#### 971. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7910` → after: `L7750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7750) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7910)

```diff
-           MN: ZC
+           qZ: Ik
```

#### 972. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7914` → after: `L7754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7754) · [Before (L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7914)

```diff
-         if (zC && (0, fF.h)(this.screenPoint[1])) return;
+         if (Fk && (0, XL.i)(this.screenPoint[1])) return;
```

#### 973. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7924` → after: `L7764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7764) · [Before (L7924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7924)

```diff
-           if (null === nC || nC <= mq) return (0, dq.h)(ZC, wC);
+           if (null === yk || yk <= vq) return (0, oq.f)(Ik, Tk);
```

#### 974. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7927` → after: `L7767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7767) · [Before (L7927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7927)

```diff
-           if (fC < Eq) return (0, dq.h)(ZC, wC);
+           if (lk < Oq) return (0, oq.f)(Ik, Tk);
```

#### 975. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7929` → after: `L7769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7769) · [Before (L7929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7929)

```diff
-         }(wC, CC, QC, this.fN.pickCursorTarget, this.cursorAim), (0, dq.h)(wC, bC.eye), (0, dq.h)(CC, bC.camera), (0, dq.h)(QC, bC.ray), this.msSincePick = 0), NF(ZC, this.cursorAim, rq.b.getPlayerFacingHeading(ZC), rq.b.getPlayerFacingPitch(ZC))
+         }(Tk, kk, Xk, this.XZ.pickCursorTarget, this.cursorAim), (0, oq.f)(Tk, ik.eye), (0, oq.f)(kk, ik.camera), (0, oq.f)(Xk, ik.ray), this.msSincePick = 0), aL(Ik, this.cursorAim, bq.b.getPlayerFacingHeading(Ik), bq.b.getPlayerFacingPitch(Ik))
```

#### 976. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7933` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7773) · [Before (L7933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7933)

```diff
-           MN: zC
+           qZ: Fk
```

#### 977. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7945` → after: `L7785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7785) · [Before (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7945)

```diff
-           MN: CC
+           qZ: kk
```

#### 978. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7966` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7806) · [Before (L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7966)

```diff
-         }(zC.heading + zC.Qp[1], zC.pitch + zC.Qp[0], zC.Cp + zC.Qp[2], CC.Vg.Lk().fov, this.fN.getAspectRatio(), ZC, QC, this.ray)
+         }(Fk.heading + Fk.sq[1], Fk.pitch + Fk.sq[0], Fk.ta + Fk.sq[2], kk.Xw.PD().fov, this.XZ.getAspectRatio(), Ik, Xk, this.ray)
```

#### 979. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7980` → after: `L7820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7820) · [Before (L7980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7980)

```diff
-       WF.heading = ZC, WF.pitch = QC, (0, yq.j)(zC, WF), rq.b.setPlayerFacing(CC, WF.heading, WF.pitch)
+       lL.heading = Ik, lL.pitch = Xk, (0, fq.n)(Fk, lL), bq.b.setPlayerFacing(kk, lL.heading, lL.pitch)
```

#### 980. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7984` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7824) · [Before (L7984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7984)

```diff
-       return GC().copy(zC, CC.bloxd.getLifeformEyePos(CC.qE, !1))
+       return xk().copy(Fk, kk.bloxd.getLifeformEyePos(kk.oR, !1))
```

#### 981. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7986` → after: `L7826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7826) · [Before (L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7986)

```diff
-     var gF = ZC(39042);
+     var LL = Ik(39221);
```

#### 982. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L7999-L8002` → after: `L7839-L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7839-L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7839-L7842) · [Before (L7999-L8002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L7999-L8002)

```diff
-         if (QC) return this.pointedAt.heading = CC, this.pointedAt.pitch = zC, this.heading = (0, Lq.b)(this.heading, 0, 0, this.pointedAt, ZC, wC), wC;
-         if (!this.hasWritten) return wC.VY = 0, wC.Zm = 0, wC.pointedAt = void 0, wC;
-         const bC = (0, yq.t)(this.writtenHeading, CC);
-         return this.heading = (0, Lq.b)(this.heading, bC, zC - this.writtenPitch, void 0, ZC, wC), wC
+         if (Xk) return this.pointedAt.heading = kk, this.pointedAt.pitch = Fk, this.heading = (0, Bq.c)(this.heading, 0, 0, this.pointedAt, Ik, Tk), Tk;
+         if (!this.hasWritten) return Tk.JG = 0, Tk.xG = 0, Tk.pointedAt = void 0, Tk;
+         const ik = (0, fq.C)(this.writtenHeading, kk);
+         return this.heading = (0, Bq.c)(this.heading, ik, Fk - this.writtenPitch, void 0, Ik, Tk), Tk
```

#### 983. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8025` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7865) · [Before (L8025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8025)

```diff
-         FC = null !== qC && qC > mq ? qC : Math.max(mq, oC);
+         Lk = null !== qk && qk > vq ? qk : Math.max(vq, ak);
```

#### 984. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8034-L8035` → after: `L7874-L7875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7874-L7875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7874-L7875) · [Before (L8034-L8035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8034-L8035)

```diff
-         wC = Math.max(-QC, Math.min(QC, (0, yq.t)(CC, zC)));
-       return (0, yq.s)(CC + wC)
+         Tk = Math.max(-Xk, Math.min(Xk, (0, fq.C)(kk, Fk)));
+       return (0, fq.y)(kk + Tk)
```

#### 985. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8039-L8042` → after: `L7879-L7882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7879-L7882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7879-L7882) · [Before (L8039-L8042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8039-L8042)

```diff
-         this.MN = CC, this.cameraController = zC, this.freeCameraController = ZC, this.cursor = QC, this.fN = void 0, this.director = void 0, this.view = new pF, this.look = {
-           VY: 0,
-           Zm: 0
-         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.HCC = [0, 0, 0], this.ECC = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
+         this.qZ = kk, this.cameraController = Fk, this.freeCameraController = Ik, this.cursor = Xk, this.XZ = void 0, this.director = void 0, this.view = new ZL, this.look = {
+           JG: 0,
+           xG: 0
+         }, this.cursorAim = void 0, this.screen = void 0, this.facing = "movement", this.mouseTurns = "view", this.detached = !1, this.eye = [0, 0, 0], this.ckk = [0, 0, 0], this.Wkk = [0, 0, 0], this.rayDirection = [0, 0, 0], this.cameraPosition = [0, 0, 0], this.aim = [0, 0, 0] … [truncated]
```

#### 986. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8059` → after: `L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7899) · [Before (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8059)

```diff
-           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && CC.fN.jzC([])
+           "undefined" !== typeof document && "hidden" === document.visibilityState && performance.now() - this.lastFrameMs > 1e3 && kk.XZ.MFk([])
```

#### 987. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8061-L8062` → after: `L7901-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7901-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7901-L7902) · [Before (L8061-L8062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8061-L8062)

```diff
-         CC.on("ZN", FC), QC.listenForTaps(((zC, ZC) => {
-           this.aimAtClientPoint(zC, ZC), CC.RCC()
+         kk.on("Dt", Lk), Xk.listenForTaps(((Fk, Ik) => {
+           this.aimAtClientPoint(Fk, Ik), kk.okk()
```

#### 988. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8064` → after: `L7904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7904) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8064)

```diff
-         const WC = pC.o.subscribe("localPlayerTeleported", (CC => {
+         const tk = Hk.g.subscribe("localPlayerTeleported", (kk => {
```

#### 989. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8071` → after: `L7911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7911) · [Before (L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8071)

```diff
-           nC(), QC.listenForTaps(null), pC.o.unsubscribe(WC), CC.off("beforeRender", fC), CC.off("afterRender", oC), CC.off("beforePhysicsTick", qC), CC.off("ZN", FC), this.release({
+           yk(), Xk.listenForTaps(null), Hk.g.unsubscribe(tk), kk.off("beforeRender", lk), kk.off("afterRender", ak), kk.off("beforePhysicsTick", qk), kk.off("Dt", Lk), this.release({
```

#### 990. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8073` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7913) · [Before (L8073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8073)

```diff
-           }), this.screen.clear(), CC.fN.jzC([])
+           }), this.screen.clear(), kk.XZ.MFk([])
```

#### 991. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8083` → after: `L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7923) · [Before (L8083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8083)

```diff
-         const zC = (0, Lq.d)(CC);
+         const Fk = (0, Bq.e)(kk);
```

#### 992. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8097` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7937) · [Before (L8097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8097)

```diff
-         if (this.lastFrameMs = performance.now(), null !== (zC = this.MN.bloxd.client) && void 0 !== zC && zC.isReplayMode()) return this.MN.fN.jzC([]), this.yieldToReplay(), void this.screen.clear();
+         if (this.lastFrameMs = performance.now(), null !== (Fk = this.qZ.bloxd.client) && void 0 !== Fk && Fk.isReplayMode()) return this.qZ.XZ.MFk([]), this.yieldToReplay(), void this.screen.clear();
```

#### 993. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8100-L8103` → after: `L7940-L7943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7940-L7943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7940-L7943) · [Before (L8100-L8103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8100-L8103)

```diff
-         } = this.MN;
-         this.detached || this.view.followBody(rq.b.getPlayerFacingHeading(this.MN));
-         const QC = rq.b.takeLookPointed(this.MN);
-         null !== ZC.dU || null !== ZC.KU || null === this.mouseTurns && !QC ? (this.look.VY = 0, this.look.Zm = 0, this.look.pointedAt = void 0) : this.view.readLook(ZC.heading, ZC.pitch, "look" === this.mouseTurns, QC, this.look);
+         } = this.qZ;
+         this.detached || this.view.followBody(bq.b.getPlayerFacingHeading(this.qZ));
+         const Xk = bq.b.takeLookPointed(this.qZ);
+         null !== Ik.rY || null !== Ik.hY || null === this.mouseTurns && !Xk ? (this.look.JG = 0, this.look.xG = 0, this.look.pointedAt = void 0) : this.view.readLook(Ik.heading, Ik.pitch, "look" === this.mouseTurns, Xk, this.look);
```

#### 994. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8105` → after: `L7945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7945) · [Before (L8105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8105)

```diff
-         if (this.MN.fN.jzC(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !wC) return void this.release();
+         if (this.qZ.XZ.MFk(this.director.getLoadingPositions()), this.syncShownSettings(), this.screen.show(this.director.getScreenFade(), this.director.getSettings()), !Tk) return void this.release();
```

#### 995. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8108` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7948) · [Before (L8108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8108)

```diff
-         "movement" !== this.facing || bC || this.turnBodyTowardsMovement(CC), this.cursorAim.ZN(CC), this.applyPose(wC)
+         "movement" !== this.facing || ik || this.turnBodyTowardsMovement(kk), this.cursorAim.Dt(kk), this.applyPose(Tk)
```

#### 996. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8114` → after: `L7954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7954) · [Before (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8114)

```diff
-         return !rq.b.isCameraDetachedFromPlayer(this.MN) && (this.setControlsLocked(!0), rq.b.detachCamera(this.MN, {
+         return !bq.b.isCameraDetachedFromPlayer(this.qZ) && (this.setControlsLocked(!0), bq.b.detachCamera(this.qZ, {
```

#### 997. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8116` → after: `L7956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7956) · [Before (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8116)

```diff
-         }) ? (this.detached = !0, this.MN.yp = this.MN.bloxd.getBlockReach(this.MN.qE), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
+         }) ? (this.detached = !0, this.qZ.WH = this.qZ.bloxd.getBlockReach(this.qZ.oR), this.publishView(), !0) : (this.setControlsLocked(!1), !1))
```

#### 998. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8122` → after: `L7962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7962) · [Before (L8122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8122)

```diff
-           MN: ZC
+           qZ: Ik
```

#### 999. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8125-L8126` → after: `L7965-L7966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7965-L7966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7965-L7966) · [Before (L8125-L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8125-L8126)

```diff
-         } = ZC, wC = rq.b.getPlayerFacingHeading(ZC), bC = rq.b.getPlayerFacingPitch(ZC), nC = null !== (zC = wF(ZC, wC, bC, this.reattachedPosition)) && void 0 !== zC ? zC : rq.b.getSavedZoomDistance(ZC);
-         this.giveUpView(), rq.b.reattachCamera(ZC), QC.uL = nC, QC.heading = wC, QC.pitch = bC, QC.Wk(), (0, oo.r)(ZC), this.setControlsLocked(!1, CC)
+         } = Ik, Tk = bq.b.getPlayerFacingHeading(Ik), ik = bq.b.getPlayerFacingPitch(Ik), yk = null !== (Fk = kL(Ik, Tk, ik, this.reattachedPosition)) && void 0 !== Fk ? Fk : bq.b.getSavedZoomDistance(Ik);
+         this.giveUpView(), bq.b.reattachCamera(Ik), Xk.VY = yk, Xk.heading = Tk, Xk.pitch = ik, Xk.lD(), (0, ya.r)(Ik), this.setControlsLocked(!1, kk)
```

#### 1000. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8129` → after: `L7969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7969) · [Before (L8129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8129)

```diff
-         this.detached && (this.giveUpView(), rq.b.setFacingMode(this.MN, "frozen"), this.setControlsLocked(!1, {
+         this.detached && (this.giveUpView(), bq.b.setFacingMode(this.qZ, "frozen"), this.setControlsLocked(!1, {
```

#### 1001. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8134` → after: `L7974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7974) · [Before (L8134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8134)

```diff
-         this.detached = !1, this.MN.HCC = null, this.MN.ECC = null, this.publishView()
+         this.detached = !1, this.qZ.ckk = null, this.qZ.Wkk = null, this.publishView()
```

#### 1002. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8138` → after: `L7978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7978) · [Before (L8138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8138)

```diff
-         this.cursor.setActive("cursor" === CC), "cursor" !== CC && this.cursorAim.forgetTap(), Hn.b.get("scriptedCameraFacing") !== CC && Hn.b.set({
+         this.cursor.setActive("cursor" === kk), "cursor" !== kk && this.cursorAim.forgetTap(), uy.d.get("scriptedCameraFacing") !== kk && uy.d.set({
```

#### 1003. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8145-L8146` → after: `L7985-L7986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7985-L7986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7985-L7986) · [Before (L8145-L8146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8145-L8146)

```diff
-           MN: ZC
-         } = this, QC = ZC.JR.MzC(ZC.qE);
+           qZ: Ik
+         } = this, Xk = Ik.MJ.KFk(Ik.oR);
```

#### 1004. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8148` → after: `L7988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7988) · [Before (L8148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8148)

```diff
-         const bC = null !== (zC = QC.ridingVehicleEId) && void 0 !== zC ? zC : null;
+         const ik = null !== (Fk = Xk.ridingVehicleEId) && void 0 !== Fk ? Fk : null;
```

#### 1005. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8150-L8151` → after: `L7990-L7991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR7990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L7990-L7991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L7990-L7991) · [Before (L8150-L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8150-L8151)

```diff
-             if (!(0, Uq.b)(CC, zC)) return !0;
-             const ZC = CC.bloxd.getResolvedPhysicsSettings(CC.qE, CC.JR.yCC(CC.qE).physicsState);
+             if (!(0, dq.d)(kk, Fk)) return !0;
+             const Ik = kk.bloxd.getResolvedPhysicsSettings(kk.oR, kk.MJ.FFk(kk.oR).physicsState);
```

#### 1006. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8163` → after: `L8003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8003) · [Before (L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8163)

```diff
-           MN: zC
+           qZ: Fk
```

#### 1007. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8167` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8007) · [Before (L8167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8167)

```diff
-         zC.JR.setPosition(ZC.YL, CC.position), ZC.heading = (0, yq.s)(CC.heading), ZC.pitch = (0, yq.g)(CC.pitch), ZC.Wk(), (0, oo.r)(zC), zC.Vg.Lk().fov = (0, Dq.j)(CC.fov), this.view.noteWritten(ZC.heading, ZC.pitch), (0, dq.h)(CC.position, this.cameraPosition), "camera" === th … [truncated]
+         Fk.MJ.setPosition(Ik.aY, kk.position), Ik.heading = (0, fq.y)(kk.heading), Ik.pitch = (0, fq.k)(kk.pitch), Ik.lD(), (0, ya.r)(Fk), Fk.Xw.PD().fov = (0, cq.k)(kk.fov), this.view.noteWritten(Ik.heading, Ik.pitch), (0, oq.f)(kk.position, this.cameraPosition), "camera" === th … [truncated]
```

#### 1008. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8171` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8011) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8171)

```diff
-           MN: zC
+           qZ: Fk
```

#### 1009. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8175` → after: `L8015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8015) · [Before (L8175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8175)

```diff
-         GF(MF(zC, this.eye), CC, (0, yq.c)(ZC.heading, ZC.pitch, this.rayDirection), zC.yp, this.fN.pickTargetedBlock, this.aim), NF(zC, this.aim, ZC.heading, ZC.pitch)
+         eL(qL(Fk, this.eye), kk, (0, fq.h)(Ik.heading, Ik.pitch, this.rayDirection), Fk.WH, this.XZ.pickTargetedBlock, this.aim), aL(Fk, this.aim, Ik.heading, Ik.pitch)
```

#### 1010. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8179` → after: `L8019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8019) · [Before (L8179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8179)

```diff
-           MN: CC
+           qZ: kk
```

#### 1011. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8181` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8021) · [Before (L8181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8181)

```diff
-         CC.HCC = CC.wzC(MF(CC, this.eye), null, this.HCC), CC.ECC = rq.b.copyPlayerFacingDirection(CC, this.ECC)
+         kk.ckk = kk.ZFk(qL(kk, this.eye), null, this.ckk), kk.Wkk = bq.b.copyPlayerFacingDirection(kk, this.Wkk)
```

#### 1012. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8184` → after: `L8024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8024) · [Before (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8184)

```diff
-     var xF = ZC(33998);
+     var JL = Ik(34008);
```

#### 1013. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8191` → after: `L8031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8031) · [Before (L8191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8191)

```diff
-       return null !== (ZC = null !== (QC = CC.inclination) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.inclination) && void 0 !== ZC ? ZC : -.2
+       return null !== (Ik = null !== (Xk = kk.inclination) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.inclination) && void 0 !== Ik ? Ik : -.2
```

#### 1014. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8197` → after: `L8037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8037) · [Before (L8197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8197)

```diff
-         return null !== (ZC = null !== (QC = CC.useSunPosition) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.useSunPosition) && void 0 !== ZC ? ZC : IF
+         return null !== (Ik = null !== (Xk = kk.useSunPosition) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.useSunPosition) && void 0 !== Ik ? Ik : PL
```

#### 1015. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8202-L8203` → after: `L8042-L8043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8042-L8043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8042-L8043) · [Before (L8202-L8203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8202-L8203)

```diff
-           return null !== (ZC = null !== (QC = CC.sunPosition) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.sunPosition) && void 0 !== ZC ? ZC : iF
-         }(CC, zC), nC = new UC.Eg(QC, wC, bC);
+           return null !== (Ik = null !== (Xk = kk.sunPosition) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.sunPosition) && void 0 !== Ik ? Ik : KL
+         }(kk, Fk), yk = new rk.Ge(Xk, Tk, ik);
```

#### 1016. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8216` → after: `L8056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8056) · [Before (L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8216)

```diff
-       const wC = null !== ZC && void 0 !== ZC ? ZC : vF(CC, zC),
+       const Tk = null !== Ik && void 0 !== Ik ? Ik : QL(kk, Fk),
```

#### 1017. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8219` → after: `L8059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8059) · [Before (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8219)

```diff
-           return null !== (ZC = null !== (QC = CC.azimuth) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.azimuth) && void 0 !== ZC ? ZC : .55
+           return null !== (Ik = null !== (Xk = kk.azimuth) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.azimuth) && void 0 !== Ik ? Ik : .55
```

#### 1018. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8223` → after: `L8063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8063) · [Before (L8223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8223)

```diff
-           return null !== (ZC = null !== (QC = CC.up) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.up) && void 0 !== ZC ? ZC : JF
+           return null !== (Ik = null !== (Xk = kk.up) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.up) && void 0 !== Ik ? Ik : xL
```

#### 1019. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8227-L8228` → after: `L8067-L8068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8067-L8068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8067-L8068) · [Before (L8227-L8228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8227-L8228)

```diff
-         qC = new UC.Eg(Math.cos(oC) * Math.cos(fC), Math.sin(-fC), Math.sin(oC) * Math.cos(fC)),
-         FC = new UC.Eg(nC[0], nC[1], nC[2]),
+         qk = new rk.Ge(Math.cos(ak) * Math.cos(lk), Math.sin(-lk), Math.sin(ak) * Math.cos(lk)),
+         Lk = new rk.Ge(yk[0], yk[1], yk[2]),
```

#### 1020. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8230-L8231` → after: `L8070-L8071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8070-L8071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8070-L8071) · [Before (L8230-L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8230-L8231)

```diff
-       UC.Quaternion.FromUnitVectorsToRef(UC.Eg.UpReadOnly, FC, WC);
-       const NC = new UC.Eg;
+       rk.Quaternion.FromUnitVectorsToRef(rk.Ge.UpReadOnly, Lk, tk);
+       const Zk = new rk.Ge;
```

#### 1021. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8257-L8259` → after: `L8097-L8099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8097-L8099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8097-L8099) · [Before (L8257-L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8257-L8259)

```diff
-         this.MN = CC, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
-         const zC = this.MN.pR.skyBox;
-         "object" === typeof zC && "earth" === zC.type && (this.earthSkyBox = zC), this.sunOpacity = this.MN.pR.dayNightSunOpacity, this.moonOpacity = this.MN.pR.dayNightMoonOpacity;
+         this.qZ = kk, this.starsMesh = null, this.starsMat = null, this.sunMesh = null, this.sunMat = null, this.moonMesh = null, this.moonMat = null, this.sunOpacity = null, this.moonOpacity = null, this.earthSkyBox = null;
+         const Fk = this.qZ.gJ.skyBox;
+         "object" === typeof Fk && "earth" === Fk.type && (this.earthSkyBox = Fk), this.sunOpacity = this.qZ.gJ.dayNightSunOpacity, this.moonOpacity = this.qZ.gJ.dayNightMoonOpacity;
```

#### 1022. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8274` → after: `L8114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8114) · [Before (L8274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8274)

```diff
-         })), this.syncSunAndMoon(), this.setStarOpacity(this.MN.pR.dayNightStarOpacity)
+         })), this.syncSunAndMoon(), this.setStarOpacity(this.qZ.gJ.dayNightStarOpacity)
```

#### 1023. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8276` → after: `L8116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8116) · [Before (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8276)

```diff
-       tzC() {
+       rFk() {
```

#### 1024. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8286` → after: `L8126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8126) · [Before (L8286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8286)

```diff
-         "object" === typeof CC && "earth" === CC.type ? this.earthSkyBox = CC : this.earthSkyBox = null, this.syncSunAndMoon()
+         "object" === typeof kk && "earth" === kk.type ? this.earthSkyBox = kk : this.earthSkyBox = null, this.syncSunAndMoon()
```

#### 1025. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8301-L8303` → after: `L8141-L8143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8141-L8143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8141-L8143) · [Before (L8301-L8303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8301-L8303)

```diff
-         null === CC && (null === (ZC = this.sunMesh) || void 0 === ZC || ZC.IK(!1));
-         null === zC && (null === (QC = this.moonMesh) || void 0 === QC || QC.IK(!1));
-         null === CC && null === zC || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== CC && ((0, DC.e)(this.sunMat, {
+         null === kk && (null === (Ik = this.sunMesh) || void 0 === Ik || Ik.Av(!1));
+         null === Fk && (null === (Xk = this.moonMesh) || void 0 === Xk || Xk.Av(!1));
+         null === kk && null === Fk || (this.ensureCreated(), this.applySizes(), this.positionSunAndMoon(), null !== kk && ((0, Yk.g)(this.sunMat, {
```

#### 1026. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8305` → after: `L8145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8145) · [Before (L8305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8305)

```diff
-         }), this.sunMesh.IK(!0)), null !== zC && ((0, DC.e)(this.moonMat, {
+         }), this.sunMesh.Av(!0)), null !== Fk && ((0, Yk.g)(this.moonMat, {
```

#### 1027. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8307` → after: `L8147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8147) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8307)

```diff
-         }), this.moonMesh.IK(!0)))
+         }), this.moonMesh.Av(!0)))
```

#### 1028. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8311` → after: `L8151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8151) · [Before (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8311)

```diff
-         KF(CC) ? (this.ensureCreated(), (0, DC.e)(this.starsMat, {
+         zL(kk) ? (this.ensureCreated(), (0, Yk.g)(this.starsMat, {
```

#### 1029. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8313` → after: `L8153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8153) · [Before (L8313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8313)

```diff
-         }), this.starsMesh.IK(!0)) : null === (zC = this.starsMesh) || void 0 === zC || zC.IK(!1)
+         }), this.starsMesh.Av(!0)) : null === (Fk = this.starsMesh) || void 0 === Fk || Fk.Av(!1)
```

#### 1030. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8318-L8320` → after: `L8158-L8160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8158-L8160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8158-L8160) · [Before (L8318-L8320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8318-L8320)

```diff
-           Vg: CC
-         } = this.MN, {
-           sS: zC
+           Xw: kk
+         } = this.qZ, {
+           Yw: Fk
```

#### 1031. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8322-L8323` → after: `L8162-L8163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8162-L8163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8162-L8163) · [Before (L8322-L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8322-L8323)

```diff
-         this.starsMesh = (0, RC.n)(CC, "dayNightStars", (0, AC.i)());
-         const ZC = xF.e.map((CC => xF.h + CC)),
+         this.starsMesh = (0, Pk.m)(kk, "dayNightStars", (0, Qk.k)());
+         const Ik = JL.h.map((kk => JL.l + kk)),
```

#### 1032. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8325` → after: `L8165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8165) · [Before (L8325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8325)

```diff
-             rootUrl: xF.h,
+             rootUrl: JL.l,
```

#### 1033. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8329` → after: `L8169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8169) · [Before (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8329)

```diff
-             samplingMode: xC.h.nearest
+             samplingMode: Kk.i.nearest
```

#### 1034. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8331` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8171) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8331)

```diff
-           wC = (0, xC.n)(zC, QC),
+           Tk = (0, Kk.q)(Fk, Xk),
```

#### 1035. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8335-L8336` → after: `L8175-L8176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8175-L8176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8175-L8176) · [Before (L8335-L8336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8335-L8336)

```diff
-             alphaMode: eC.c.add,
-             transparencyMode: eC.t.alphaBlend
+             alphaMode: vk.d.add,
+             transparencyMode: vk.r.alphaBlend
```

#### 1036. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8338` → after: `L8178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8178) · [Before (L8338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8338)

```diff
-         this.starsMat = (0, DC.d)({
+         this.starsMat = (0, Yk.e)({
```

#### 1037. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8340` → after: `L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8180) · [Before (L8340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8340)

```diff
-           sS: zC,
+           Yw: Fk,
```

#### 1038. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8343-L8344` → after: `L8183-L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8183-L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8183-L8184) · [Before (L8343-L8344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8343-L8344)

```diff
-         const nC = iC.e.BILLBOARDMODE_ALL | iC.e.BILLBOARDMODE_USE_POSITION;
-         this.sunMesh = (0, RC.n)(CC, "dayNightSun", (0, AC.g)({
+         const yk = zk.d.BILLBOARDMODE_ALL | zk.d.BILLBOARDMODE_USE_POSITION;
+         this.sunMesh = (0, Pk.m)(kk, "dayNightSun", (0, Qk.i)({
```

#### 1039. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8347` → after: `L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8187) · [Before (L8347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8347)

```diff
-         })), this.sunMat = dF(zC, "dayNightSun", xF.l), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = nC, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, RC.n)(CC, "dayNightMoon", (0, AC.g)({
+         })), this.sunMat = oL(Fk, "dayNightSun", JL.n), this.sunMesh.material = this.sunMat, this.sunMesh.billboardMode = yk, this.setupSkyMesh(this.sunMesh), this.moonMesh = (0, Pk.m)(kk, "dayNightMoon", (0, Qk.i)({
```

#### 1040. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8350` → after: `L8190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8190) · [Before (L8350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8350)

```diff
-         })), this.moonMat = dF(zC, "dayNightMoon", xF.d), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = nC, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.IK(!1), this.sunMesh.IK(!1), this.moonMesh.IK(!1)
+         })), this.moonMat = oL(Fk, "dayNightMoon", JL.d), this.moonMesh.material = this.moonMat, this.moonMesh.billboardMode = yk, this.setupSkyMesh(this.moonMesh), this.applySizes(), this.starsMesh.Av(!1), this.sunMesh.Av(!1), this.moonMesh.Av(!1)
```

#### 1041. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8353` → after: `L8193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8193) · [Before (L8353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8353)

```diff
-         CC.infiniteDistance = !0, CC.renderingGroupId = -1, CC.tS = !1, CC.Hg = !0, CC.Xg = !0, CC.applyFog = !1, this.MN.Vg.jS(CC, !1, this.MN.YN, !1)
+         kk.infiniteDistance = !0, kk.renderingGroupId = -1, kk.gw = !1, kk.ne = !0, kk.ue = !0, kk.applyFog = !1, this.qZ.Xw.hw(kk, !1, this.qZ.SZ, !1)
```

#### 1042. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8359-L8362` → after: `L8199-L8202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8199-L8202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8199-L8202) · [Before (L8359-L8362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8359-L8362)

```diff
-           Vg: CC
-         } = this.MN, zC = .8 * CC.Lk().far, ZC = function() {
-           const CC = SC.c.getSkyBox("default");
-           return "earth" === (null === CC || void 0 === CC ? void 0 : CC.type) ? CC : void 0
+           Xw: kk
+         } = this.qZ, Fk = .8 * kk.PD().far, Ik = function() {
+           const kk = wk.b.getSkyBox("default");
+           return "earth" === (null === kk || void 0 === kk ? void 0 : kk.type) ? kk : void 0
```

#### 1043. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8364` → after: `L8204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8204) · [Before (L8364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8364)

```diff
-         (0, YC.p)(this.sunMesh, QC.x * zC, QC.y * zC, QC.z * zC);
+         (0, nk.q)(this.sunMesh, Xk.x * Fk, Xk.y * Fk, Xk.z * Fk);
```

#### 1044. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8367` → after: `L8207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8207) · [Before (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8367)

```diff
-         (0, YC.p)(this.moonMesh, bC.x * zC, bC.y * zC, bC.z * zC)
+         (0, nk.q)(this.moonMesh, ik.x * Fk, ik.y * Fk, ik.z * Fk)
```

#### 1045. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8372-L8373` → after: `L8212-L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8212-L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8212-L8213) · [Before (L8372-L8373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8372-L8373)

```diff
-           Vg: CC
-         } = this.MN, {
+           Xw: kk
+         } = this.qZ, {
```

#### 1046. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8375-L8376` → after: `L8215-L8216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8215-L8216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8215-L8216) · [Before (L8375-L8376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8375-L8376)

```diff
-         } = CC.Lk(), ZC = .95 * zC;
-         this.starsMesh.sq.set(ZC, ZC, ZC);
+         } = kk.PD(), Ik = .95 * Fk;
+         this.starsMesh.ci.set(Ik, Ik, Ik);
```

#### 1047. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8379` → after: `L8219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8219) · [Before (L8379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8379)

```diff
-         this.sunMesh.sq.set(wC, wC, wC);
+         this.sunMesh.ci.set(Tk, Tk, Tk);
```

#### 1048. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8381` → after: `L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8221) · [Before (L8381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8381)

```diff
-         this.moonMesh.sq.set(bC, bC, bC)
+         this.moonMesh.ci.set(ik, ik, ik)
```

#### 1049. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8394` → after: `L8234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8234) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8394)

```diff
-         samplingMode: xC.h.nearest,
+         samplingMode: Kk.i.nearest,
```

#### 1050. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8399` → after: `L8239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8239) · [Before (L8399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8399)

```diff
-       return (0, DC.d)({
+       return (0, Yk.e)({
```

#### 1051. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8401` → after: `L8241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8241) · [Before (L8401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8401)

```diff
-         sS: CC,
+         Yw: kk,
```

#### 1052. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8410-L8420` → after: `L8250-L8260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8250-L8260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8250-L8260) · [Before (L8410-L8420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8410-L8420)

```diff
-     var mF = ZC(4179),
-       HF = ZC(37731),
-       EF = ZC(37184),
-       lF = ZC(37456),
-       XF = ZC(37290),
-       cF = ZC(728),
-       uF = ZC(2770),
-       rF = ZC(4238),
-       sF = ZC(94),
-       TF = ZC(296),
-       aF = ZC(39051);
+     var vL = Ik(4210),
+       EL = Ik(37902),
+       OL = Ik(37370),
+       nL = Ik(37643),
+       GL = Ik(37461),
+       pL = Ik(768),
+       uL = Ik(2717),
+       bL = Ik(4269),
+       RL = Ik(113),
+       UL = Ik(309),
+       CL = Ik(39224);
```

#### 1053. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8424` → after: `L8264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8264) · [Before (L8424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8424)

```diff
-       return (0, TF.k)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
+       return (0, UL.l)() ? "shaderPack:failedWebGpuDisabledUntilRestart" : "shaderPack:failedNoWebGpu"
```

#### 1054. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8428` → after: `L8268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8268) · [Before (L8428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8428)

```diff
-       return `${CC.getMode()}|${CC.lS()}`
+       return `${kk.getMode()}|${kk.Nw()}`
```

#### 1055. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8432` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8272) · [Before (L8432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8432)

```diff
-       console.error(`Shader pack failed to compile for "${CC.failure.material}":`, CC.failure.message)
+       console.error(`Shader pack failed to compile for "${kk.failure.material}":`, kk.failure.message)
```

#### 1056. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8436` → after: `L8276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8276) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8436)

```diff
-         this.page = CC, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, pC.o.subscribe(tF, (CC => {
+         this.page = kk, this.lastPassedCheck = null, this.checkGeneration = 0, this.checksRunning = 0, this.heldFailures = [], this.inGame = !1, this.game = 0, this.notifiedModelFallback = !1, this.failedModelCode = new Set, Hk.g.subscribe(NL, (kk => {
```

#### 1057. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8442` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8282) · [Before (L8442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8442)

```diff
-           zC === this.game && this.inGame && pC.o.bp("chat", (0, rF.j)(ZC, QC))
+           Fk === this.game && this.inGame && Hk.g.GL("chat", (0, bL.j)(Ik, Xk))
```

#### 1058. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8450` → after: `L8290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8290) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8450)

```diff
-         if ((0, Vn.k)("webgpuloss")) {
+         if ((0, My.o)("webgpuloss")) {
```

#### 1059. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8452` → after: `L8292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8292) · [Before (L8452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8452)

```diff
-             status: "wZ"
+             status: "iI"
```

#### 1060. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8454` → after: `L8294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8294) · [Before (L8454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8454)

```diff
-           (0, Cf.d)((QC => QC.noteJsJoin(zC, CC, ZC)))
+           (0, kl.c)((Xk => Xk.noteJsJoin(Fk, kk, Ik)))
```

#### 1061. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8457-L8459` → after: `L8297-L8299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8297-L8299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8297-L8299) · [Before (L8457-L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8457-L8459)

```diff
-           status: "wZ"
-         } : (pC.o.bp("matchmakeAndPlayStepCompleted", {
-           step: Gz.l.SHADER_PACK,
+           status: "iI"
+         } : (Hk.g.GL("matchmakeAndPlayStepCompleted", {
+           step: KF.j.SHADER_PACK,
```

#### 1062. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8461` → after: `L8301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8301) · [Before (L8461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8461)

```diff
-         }), "ok" === bC.status && (this.inGame = !0, void 0 !== bC.couldntRun && this.notify(rF.b, bC.couldntRun), CC && !CC.isRunning() && this.notify("shaderPack:offInThisGame"), CC && this.failedModelCode.has(CC.defineFor("model")) && this.notifyModelFallback(), this.recheck(C … [truncated]
+         }), "ok" === ik.status && (this.inGame = !0, void 0 !== ik.couldntRun && this.notify(bL.c, ik.couldntRun), kk && !kk.isRunning() && this.notify("shaderPack:offInThisGame"), kk && this.failedModelCode.has(kk.defineFor("model")) && this.notifyModelFallback(), this.recheck(k … [truncated]
```

#### 1063. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8486-L8487` → after: `L8326-L8327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8326-L8327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8326-L8327) · [Before (L8486-L8487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8486-L8487)

```diff
-           const oC = null !== (nC = null !== bC && void 0 !== bC ? bC : null === wC || void 0 === wC ? void 0 : wC.message) && void 0 !== nC ? nC : wC,
-             qC = () => fC.packVariant === CC.defineFor(fC.program) && ("model" === fC.program || fC.lighting === CC.lS());
+           const ak = null !== (yk = null !== ik && void 0 !== ik ? ik : null === Tk || void 0 === Tk ? void 0 : Tk.message) && void 0 !== yk ? yk : Tk,
+             qk = () => lk.packVariant === kk.defineFor(lk.program) && ("model" === lk.program || lk.lighting === kk.Nw());
```

#### 1064. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8489` → after: `L8329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8329) · [Before (L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8489)

```diff
-             ZC || (this.failedModelCode.add(fC.packVariant), this.inGame && qC() && (console.error(`Shader pack program ${QC} failed in game, so its models are drawn without the pack:`, oC), this.notifyModelFallback()))
+             Ik || (this.failedModelCode.add(lk.packVariant), this.inGame && qk() && (console.error(`Shader pack program ${Xk} failed in game, so its models are drawn without the pack:`, ak), this.notifyModelFallback()))
```

#### 1065. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8495` → after: `L8335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8335) · [Before (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8495)

```diff
-               console.error(`Shader pack program ${QC} failed in game:`, oC)
+               console.error(`Shader pack program ${Xk} failed in game:`, ak)
```

#### 1066. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8521` → after: `L8361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8361) · [Before (L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8521)

```diff
-         const bC = null !== (QC = (0, aF.harnessShaderPackMode)()) && void 0 !== QC ? QC : (0, cF.g)(zC);
+         const ik = null !== (Xk = (0, CL.harnessShaderPackMode)()) && void 0 !== Xk ? Xk : (0, pL.j)(Fk);
```

#### 1067. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8523` → after: `L8363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8363) · [Before (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8523)

```diff
-           if ((0, tb.m)(wC.variants, bC)) {
+           if ((0, Yi.f)(Tk.variants, ik)) {
```

#### 1068. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8535` → after: `L8375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8375) · [Before (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8535)

```diff
-           if (!(0, tb.m)(wC.pack.variants, bC)) return {
+           if (!(0, Yi.f)(Tk.pack.variants, ik)) return {
```

#### 1069. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8543-L8547` → after: `L8383-L8387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8383-L8387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8383-L8387) · [Before (L8543-L8547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8543-L8547)

```diff
-               const zC = (0, uF.i)();
-               if ("default" === (null === zC || void 0 === zC ? void 0 : zC.source)) return (0, TF.k)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
-               return !0 === (null === zC || void 0 === zC || null === (CC = zC.fallbackReason) || void 0 === CC ? void 0 : CC.endsWith(sF.d)) ? "shaderPack:failedNoWebGpu" : null
-             }()) && void 0 !== nC ? nC : function() {
-               const CC = (0, uF.i)();
+               const Fk = (0, uL.e)();
+               if ("default" === (null === Fk || void 0 === Fk ? void 0 : Fk.source)) return (0, UL.l)() ? "shaderPack:failedWebGpuOff" : "shaderPack:failedNoWebGpu";
+               return !0 === (null === Fk || void 0 === Fk || null === (kk = Fk.fallbackReason) || void 0 === kk ? void 0 : kk.endsWith(RL.e)) ? "shaderPack:failedNoWebGpu" : null
+             }()) && void 0 !== yk ? yk : function() {
+               const kk = (0, uL.e)();
```

#### 1070. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8561-L8562` → after: `L8401-L8402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8401-L8402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8401-L8402) · [Before (L8561-L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8561-L8562)

```diff
-         return "wZ" === oC.status ? {
-           status: "wZ"
+         return "iI" === ak.status ? {
+           status: "iI"
```

#### 1071. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8594` → after: `L8434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8434) · [Before (L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8594)

```diff
-               message: `The check failed: ${QC instanceof Error?QC.message:String(QC)}`
+               message: `The check failed: ${Xk instanceof Error?Xk.message:String(Xk)}`
```

#### 1072. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8611` → after: `L8451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8451) · [Before (L8611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8611)

```diff
-         this.lastPassedCheck = null, this.endGame(), pC.o.bp(rF.f, "shaderPack:failedToCompile")
+         this.lastPassedCheck = null, this.endGame(), Hk.g.GL(bL.f, "shaderPack:failedToCompile")
```

#### 1073. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8622` → after: `L8462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8462) · [Before (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8622)

```diff
-         pC.o.bp(tF, ZC, !0)
+         Hk.g.GL(NL, Ik, !0)
```

#### 1074. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8625-L8626` → after: `L8465-L8466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8465-L8466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8465-L8466) · [Before (L8625-L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8625-L8626)

```diff
-     var UF = ZC(38569),
-       BF = ZC(39060);
+     var dL = Ik(38742),
+       YL = Ik(39230);
```

#### 1075. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8629` → after: `L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8469) · [Before (L8629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8629)

```diff
-         this.MN = CC, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new YF(CC), this.setupSkyBox(), this.setupFog(), this.setupLighting()
+         this.qZ = kk, this.skyBoxMesh = null, this.earthSkyKey = null, this.skyBoxRequestId = 0, this.dayAndNightSky = void 0, this.dayAndNightSky = new SL(kk), this.setupSkyBox(), this.setupFog(), this.setupLighting()
```

#### 1076. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8635-L8636` → after: `L8475-L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8475-L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8475-L8476) · [Before (L8635-L8636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8635-L8636)

```diff
-         this.MN.Vg.tzC = () => {
-           this.updateSkyboxSize(), this.dayAndNightSky.tzC()
+         this.qZ.Xw.rFk = () => {
+           this.updateSkyboxSize(), this.dayAndNightSky.rFk()
```

#### 1077. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8639` → after: `L8479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8479) · [Before (L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8639)

```diff
-           CC(), this.MN.Vg.tzC = null, this.skyBoxRequestId++, null === (zC = this.skyBoxMesh) || void 0 === zC || zC.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.MN.Vg.B3 = null, this.MN.Vg.model.earthSky = null
+           kk(), this.qZ.Xw.rFk = null, this.skyBoxRequestId++, null === (Fk = this.skyBoxMesh) || void 0 === Fk || Fk.dispose(!1, !0), this.skyBoxMesh = null, this.earthSkyKey = null, this.qZ.Xw.Fkk = null, this.qZ.Xw.model.earthSky = null
```

#### 1078. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8645-L8646` → after: `L8485-L8486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8485-L8486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8485-L8486) · [Before (L8645-L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8645-L8646)

```diff
-           Vg: CC
-         } = this.MN, {
+           Xw: kk
+         } = this.qZ, {
```

#### 1079. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8648-L8649` → after: `L8488-L8489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8488-L8489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8488-L8489) · [Before (L8648-L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8648-L8649)

```diff
-         } = CC.Lk();
-         this.skyBoxMesh.sq.set(zC, zC, zC)
+         } = kk.PD();
+         this.skyBoxMesh.ci.set(Fk, Fk, Fk)
```

#### 1080. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8652` → after: `L8492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8492) · [Before (L8652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8652)

```diff
-         if (this.MN.zg)
+         if (this.qZ.ke)
```

#### 1081. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8654` → after: `L8494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8494) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8654)

```diff
-             const CC = "object" === typeof zC ? zC : {
+             const kk = "object" === typeof Fk ? Fk : {
```

#### 1082. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8661-L8663` → after: `L8501-L8503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8501-L8503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8501-L8503) · [Before (L8661-L8663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8661-L8663)

```diff
-               } = eF(CC, "earth" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) ? ZC : void 0);
-             this.MN.Vg.B3 = [QC, wC, bC]
-           } else this.MN.Vg.B3 = null
+               } = sL(kk, "earth" === (null === Ik || void 0 === Ik ? void 0 : Ik.type) ? Ik : void 0);
+             this.qZ.Xw.Fkk = [Xk, Tk, ik]
+           } else this.qZ.Xw.Fkk = null
```

#### 1083. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8666-L8668` → after: `L8506-L8508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8506-L8508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8506-L8508) · [Before (L8666-L8668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8666-L8668)

```diff
-         const zC = "string" === typeof CC ? CC : CC.type,
-           ZC = SC.c.getSkyBox(zC);
-         if (void 0 === ZC && "earth" !== zC) return void console.error(`Skybox "${zC}" not found, ignoring update...`);
+         const Fk = "string" === typeof kk ? kk : kk.type,
+           Ik = wk.b.getSkyBox(Fk);
+         if (void 0 === Ik && "earth" !== Fk) return void console.error(`Skybox "${Fk}" not found, ignoring update...`);
```

#### 1084. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8674` → after: `L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8514) · [Before (L8674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8674)

```diff
-           if (zW(CC, zC) === (null === (wC = (0, EF.e)(this.earthSkyKey)) || void 0 === wC ? void 0 : wC.dithering)) return void CW(this.skyBoxMesh, this.earthSkyKey, CC, zC)
+           if (rL(kk, Fk) === (null === (Tk = (0, OL.d)(this.earthSkyKey)) || void 0 === Tk ? void 0 : Tk.dithering)) return void hL(this.skyBoxMesh, this.earthSkyKey, kk, Fk)
```

#### 1085. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8677-L8679` → after: `L8517-L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8517-L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8517-L8519) · [Before (L8677-L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8677-L8679)

```diff
-           sS: bC,
-           CS: nC
-         } = this.MN.Vg, fC = "earth" === zC || "earth" === ZC.type;
+           Yw: ik,
+           Tw: yk
+         } = this.qZ.Xw, lk = "earth" === Fk || "earth" === Ik.type;
```

#### 1086. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8681` → after: `L8521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8521) · [Before (L8681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8681)

```diff
-           (0, HF.b)();
+           (0, EL.e)();
```

#### 1087. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8685` → after: `L8525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8525) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8685)

```diff
-         const oC = (0, RC.n)(this.MN.Vg, mF.b.SKYBOX, (0, AC.i)()),
+         const ak = (0, Pk.m)(this.qZ.Xw, vL.c.SKYBOX, (0, Qk.k)()),
```

#### 1088. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8690` → after: `L8530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8530) · [Before (L8690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8690)

```diff
-             zC = (0, BF.e)(Hn.b.get("clientEscMenuOptions").pixelScale),
+             Fk = (0, YL.d)(uy.d.get("clientEscMenuOptions").pixelScale),
```

#### 1089. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8695` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8535) · [Before (L8695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8695)

```diff
-               reflectionTexture: (0, xC.n)(bC, {
+               reflectionTexture: (0, Kk.q)(ik, {
```

#### 1090. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8702` → after: `L8542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8542) · [Before (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8702)

```diff
-           oC.material = (0, DC.d)({
+           ak.material = (0, Yk.e)({
```

#### 1091. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8704` → after: `L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8544) · [Before (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8704)

```diff
-             sS: bC,
+             Yw: ik,
```

#### 1092. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8709` → after: `L8549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8549) · [Before (L8709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8709)

```diff
-         oC.tS = !1, oC.Xg = !0, oC.Hg = !0, oC.applyFog = this.shouldApplyFogToSkyBox(), oC.renderingGroupId = -1, oC.ug();
+         ak.gw = !1, ak.ue = !0, ak.ne = !0, ak.applyFog = this.shouldApplyFogToSkyBox(), ak.renderingGroupId = -1, ak.Ce();
```

#### 1093. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8711` → after: `L8551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8551) · [Before (L8711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8711)

```diff
-         (0, DC.e)(FC, {
+         (0, Yk.g)(Lk, {
```

#### 1094. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8716` → after: `L8556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8556) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8716)

```diff
-         }), (0, Qz.f)(FC), (0, UF.c)(oC, (() => {
+         }), (0, iF.d)(Lk), (0, dL.b)(ak, (() => {
```

#### 1095. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8722` → after: `L8562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8562) · [Before (L8722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8722)

```diff
-         null === (ZC = this.skyBoxMesh) || void 0 === ZC || ZC.dispose(!1, !0), this.skyBoxMesh = CC, this.earthSkyKey = zC, this.updateSkyboxSize(), CC && this.MN.Vg.jS(CC, !1, this.MN.YN, !1), this.MN.Vg.model.earthSky = null !== (QC = zC && (0, EF.e)(zC)) && void 0 !== QC ? QC … [truncated]
+         null === (Ik = this.skyBoxMesh) || void 0 === Ik || Ik.dispose(!1, !0), this.skyBoxMesh = kk, this.earthSkyKey = Fk, this.updateSkyboxSize(), kk && this.qZ.Xw.hw(kk, !1, this.qZ.SZ, !1), this.qZ.Xw.model.earthSky = null !== (Xk = Fk && (0, OL.d)(Fk)) && void 0 !== Xk ? Xk … [truncated]
```

#### 1096. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8726` → after: `L8566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8566) · [Before (L8726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8726)

```diff
-         const CC = pC.o.subscribe("fogChunkDistanceChanged", (() => {
+         const kk = Hk.g.subscribe("fogChunkDistanceChanged", (() => {
```

#### 1097. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8742` → after: `L8582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8582) · [Before (L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8742)

```diff
-           pC.o.unsubscribe(CC), zC(), ZC(), QC(), wC()
+           Hk.g.unsubscribe(kk), Fk(), Ik(), Xk(), Tk()
```

#### 1098. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8746` → after: `L8586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8586) · [Before (L8746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8746)

```diff
-         return !0 === this.MN.pR.fogOnSkybox
+         return !0 === this.qZ.gJ.fogOnSkybox
```

#### 1099. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8750` → after: `L8590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8590) · [Before (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8750)

```diff
-         const ZC = null !== (CC = this.MN.pR.fogChunkDistanceOverride) && void 0 !== CC ? CC : Hn.b.get("clientEscMenuOptions").fogChunkDistance,
+         const Ik = null !== (kk = this.qZ.gJ.fogChunkDistanceOverride) && void 0 !== kk ? kk : uy.d.get("clientEscMenuOptions").fogChunkDistance,
```

#### 1100. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8756` → after: `L8596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8596) · [Before (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8756)

```diff
-         bC && (null === (zC = (0, EF.e)(bC)) || void 0 === zC ? void 0 : zC.fog) !== wC && (0, JC.ab)(bC, {
+         ik && (null === (Fk = (0, OL.d)(ik)) || void 0 === Fk ? void 0 : Fk.fog) !== Tk && (0, sk.ab)(ik, {
```

#### 1101. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8758` → after: `L8598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8598) · [Before (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8758)

```diff
-         }), QC && QC.applyFog !== wC && (QC.applyFog = wC, (0, UF.c)(QC, (() => {
+         }), Xk && Xk.applyFog !== Tk && (Xk.applyFog = Tk, (0, dL.b)(Xk, (() => {
```

#### 1102. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8760-L8766` → after: `L8600-L8606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8600-L8606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8600-L8606) · [Before (L8760-L8766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8760-L8766)

```diff
-         }), this.MN.Vg.CS));
-         const nC = this.MN.pR.fogColourOverride,
-           oC = nC ? (0, fC.N)(nC) : kF;
-         let qC = 100 * gC.f.Ig,
-           FC = 101 * gC.f.Ig;
-         const WC = this.MN.pR.fogBlockDistanceOverride;
-         (0, XC.H)(WC) ? !Hn.b.get("clientEscMenuOptions").showFog && (0, XC.H)(this.MN.pR.fogChunkDistanceOverride) || (qC = gC.f.Ig * ZC, FC = 0 === ZC ? 5 : gC.f.Ig * (ZC + 1)): (qC = 0, FC = WC), (0, lF.r)(this.MN.Vg, qC, FC, oC)
+         }), this.qZ.Xw.Tw));
+         const yk = this.qZ.gJ.fogColourOverride,
+           ak = yk ? (0, lk.W)(yk) : gL;
+         let qk = 100 * ek.f.se,
+           Lk = 101 * ek.f.se;
+         const tk = this.qZ.gJ.fogBlockDistanceOverride;
+         (0, Uk.Q)(tk) ? !uy.d.get("clientEscMenuOptions").showFog && (0, Uk.Q)(this.qZ.gJ.fogChunkDistanceOverride) || (qk = ek.f.se * Ik, Lk = 0 === Ik ? 5 : ek.f.se * (Ik + 1)): (qk = 0, Lk = tk), (0, nL.m)(this.qZ.Xw, qk, Lk, ak)
```

#### 1103. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8782` → after: `L8622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8622) · [Before (L8782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8782)

```diff
-           wC = pC.o.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
+           Tk = Hk.g.subscribe("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 1104. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8786` → after: `L8626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8626) · [Before (L8786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8786)

```diff
-           CC(), zC(), ZC(), QC(), pC.o.unsubscribe(wC)
+           kk(), Fk(), Ik(), Xk(), Hk.g.unsubscribe(Tk)
```

#### 1105. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8792-L8793` → after: `L8632-L8633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8632-L8633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8632-L8633) · [Before (L8792-L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8792-L8793)

```diff
-         } = this.MN.pR, zC = Hn.b.get("clientEscMenuOptions").enableLighting, ZC = null !== CC && void 0 !== CC ? CC : zC, QC = this.MN.Vg.lS !== ZC;
-         this.MN.Vg.lS = ZC, QC && ((0, XF.e)(), ZC && this.MN.JA.requeueChunksForLighting(), LF.lightingChanged(this.MN.zg));
+         } = this.qZ.gJ, Fk = uy.d.get("clientEscMenuOptions").enableLighting, Ik = null !== kk && void 0 !== kk ? kk : Fk, Xk = this.qZ.Xw.Nw !== Ik;
+         this.qZ.Xw.Nw = Ik, Xk && ((0, GL.e)(), Ik && this.qZ.Bx.requeueChunksForLighting(), BL.lightingChanged(this.qZ.ke));
```

#### 1106. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8798-L8799` → after: `L8638-L8639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8638-L8639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8638-L8639) · [Before (L8798-L8799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8798-L8799)

```diff
-         } = this.MN.pR;
-         this.MN.Vg.skyLightColourOverride = wC ? (0, fC.N)(wC) : null, this.MN.Vg.ambientLightColourOverride = bC ? (0, fC.N)(bC) : null, this.MN.Vg.visionMinLightColour = nC ? (0, fC.N)(nC) : null
+         } = this.qZ.gJ;
+         this.qZ.Xw.skyLightColourOverride = Tk ? (0, lk.W)(Tk) : null, this.qZ.Xw.ambientLightColourOverride = ik ? (0, lk.W)(ik) : null, this.qZ.Xw.visionMinLightColour = yk ? (0, lk.W)(yk) : null
```

#### 1107. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8807` → after: `L8647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8647) · [Before (L8807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8807)

```diff
-       const aC = null === (wC = null !== (bC = ZC.infiniteDistance) && void 0 !== bC ? bC : null === QC || void 0 === QC ? void 0 : QC.infiniteDistance) || void 0 === wC || wC;
+       const Bk = null === (Tk = null !== (ik = Ik.infiniteDistance) && void 0 !== ik ? ik : null === Xk || void 0 === Xk ? void 0 : Xk.infiniteDistance) || void 0 === Tk || Tk;
```

#### 1108. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8809-L8810` → after: `L8649-L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8649-L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8649-L8650) · [Before (L8809-L8810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8809-L8810)

```diff
-       const tC = null !== (nC = ZC.sunPosition) && void 0 !== nC ? nC : null === QC || void 0 === QC ? void 0 : QC.sunPosition,
-         DC = null !== (fC = ZC.up) && void 0 !== fC ? fC : null === QC || void 0 === QC ? void 0 : QC.up;
+       const dk = null !== (yk = Ik.sunPosition) && void 0 !== yk ? yk : null === Xk || void 0 === Xk ? void 0 : Xk.sunPosition,
+         Yk = null !== (lk = Ik.up) && void 0 !== lk ? lk : null === Xk || void 0 === Xk ? void 0 : Xk.up;
```

#### 1109. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8813-L8820` → after: `L8653-L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8653-L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8653-L8660) · [Before (L8813-L8820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8813-L8820)

```diff
-         inclination: null !== (oC = null !== (qC = ZC.inclination) && void 0 !== qC ? qC : null === QC || void 0 === QC ? void 0 : QC.inclination) && void 0 !== oC ? oC : -.2,
-         turbidity: null !== (FC = null !== (WC = ZC.turbidity) && void 0 !== WC ? WC : null === QC || void 0 === QC ? void 0 : QC.turbidity) && void 0 !== FC ? FC : 10,
-         luminance: null !== (NC = null !== (MC = ZC.luminance) && void 0 !== MC ? MC : null === QC || void 0 === QC ? void 0 : QC.luminance) && void 0 !== NC ? NC : .1,
-         rayleigh: null !== (gC = null !== (SC = ZC.rayleigh) && void 0 !== SC ? SC : null === QC || void 0 === QC ? void 0 : QC.rayleigh) && void 0 !== gC ? gC : 2,
-         mieCoefficient: null !== (pC = null !== (PC = ZC.mieCoefficient) && void 0 !== PC ? PC : null === QC || void 0 === QC ? void 0 : QC.mieCoefficient) && void 0 !== pC ? pC : .005,
-         mieDirectionalG: null !== (GC = null !== (RC = ZC.mieDirectionalG) && void 0 !== RC ? RC : null === QC || void 0 === QC ? void 0 : QC.mieDirectionalG) && void 0 !== GC ? GC : .8,
-         distance: null !== (AC = null !== (xC = ZC.distance) && void 0 !== xC ? xC : null === QC || void 0 === QC ? void 0 : QC.distance) && void 0 !== AC ? AC : 500,
-         useSunPosition: null !== (IC = null !== (iC = ZC.useSunPosition) && void 0 !== iC ? iC : null === QC || void 0 === QC ? void 0 : QC.useSunPosition) && void 0 !== IC ? IC : IF,
+         inclination: null !== (ak = null !== (qk = Ik.inclination) && void 0 !== qk ? qk : null === Xk || void 0 === Xk ? void 0 : Xk.inclination) && void 0 !== ak ? ak : -.2,
+         turbidity: null !== (Lk = null !== (tk = Ik.turbidity) && void 0 !== tk ? tk : null === Xk || void 0 === Xk ? void 0 : Xk.turbidity) && void 0 !== Lk ? Lk : 10,
+         luminance: null !== (Zk = null !== (jk = Ik.luminance) && void 0 !== jk ? jk : null === Xk || void 0 === Xk ? void 0 : Xk.luminance) && void 0 !== Zk ? Zk : .1,
+         rayleigh: null !== (ek = null !== (wk = Ik.rayleigh) && void 0 !== wk ? wk : null === Xk || void 0 === Xk ? void 0 : Xk.rayleigh) && void 0 !== ek ? ek : 2,
+         mieCoefficient: null !== (Hk = null !== (Jk = Ik.mieCoefficient) && void 0 !== Jk ? Jk : null === Xk || void 0 === Xk ? void 0 : Xk.mieCoefficient) && void 0 !== Hk ? Hk : .005,
+         mieDirectionalG: null !== (xk = null !== (Pk = Ik.mieDirectionalG) && void 0 !== Pk ? Pk : null === Xk || void 0 === Xk ? void 0 : Xk.mieDirectionalG) && void 0 !== xk ? xk : .8,
+         distance: null !== (Kk = null !== (Qk = Ik.distance) && void 0 !== Qk ? Qk : null === Xk || void 0 === Xk ? void 0 : Xk.distance) && void 0 !== Kk ? Kk : 500,
+         useSunPosition: null !== (Vk = null !== (zk = Ik.useSunPosition) && void 0 !== zk ? zk : null === Xk || void 0 === Xk ? void 0 : Xk.useSunPosition) && void 0 !== Vk ? Vk : PL,
```

#### 1110. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8822-L8825` → after: `L8662-L8665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8662-L8665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8662-L8665) · [Before (L8822-L8825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8822-L8825)

```diff
-         cameraOffset: [null !== (vC = null !== (eC = ZC.xCameraOffset) && void 0 !== eC ? eC : null === QC || void 0 === QC ? void 0 : QC.xCameraOffset) && void 0 !== vC ? vC : 0, null !== (hC = null !== (KC = ZC.yCameraOffset) && void 0 !== KC ? KC : null === QC || void 0 === QC … [truncated]
-         azimuth: null !== (mC = null !== (HC = ZC.azimuth) && void 0 !== HC ? HC : null === QC || void 0 === QC ? void 0 : QC.azimuth) && void 0 !== mC ? mC : .55,
-         sunPosition: [null !== (EC = null === tC || void 0 === tC ? void 0 : tC[0]) && void 0 !== EC ? EC : iF[0], null !== (lC = null === tC || void 0 === tC ? void 0 : tC[1]) && void 0 !== lC ? lC : iF[1], null !== (XC = null === tC || void 0 === tC ? void 0 : tC[2]) && void 0  … [truncated]
-         up: [null !== (cC = null === DC || void 0 === DC ? void 0 : DC[0]) && void 0 !== cC ? cC : JF[0], null !== (uC = null === DC || void 0 === DC ? void 0 : DC[1]) && void 0 !== uC ? uC : JF[1], null !== (rC = null === DC || void 0 === DC ? void 0 : DC[2]) && void 0 !== rC ?  … [truncated]
+         cameraOffset: [null !== (Sk = null !== (vk = Ik.xCameraOffset) && void 0 !== vk ? vk : null === Xk || void 0 === Xk ? void 0 : Xk.xCameraOffset) && void 0 !== Sk ? Sk : 0, null !== (Ek = null !== (Ok = Ik.yCameraOffset) && void 0 !== Ok ? Ok : null === Xk || void 0 === Xk … [truncated]
+         azimuth: null !== (pk = null !== (uk = Ik.azimuth) && void 0 !== uk ? uk : null === Xk || void 0 === Xk ? void 0 : Xk.azimuth) && void 0 !== pk ? pk : .55,
+         sunPosition: [null !== (bk = null === dk || void 0 === dk ? void 0 : dk[0]) && void 0 !== bk ? bk : KL[0], null !== (Rk = null === dk || void 0 === dk ? void 0 : dk[1]) && void 0 !== Rk ? Rk : KL[1], null !== (Uk = null === dk || void 0 === dk ? void 0 : dk[2]) && void 0  … [truncated]
+         up: [null !== (Ck = null === Yk || void 0 === Yk ? void 0 : Yk[0]) && void 0 !== Ck ? Ck : xL[0], null !== (Nk = null === Yk || void 0 === Yk ? void 0 : Yk[1]) && void 0 !== Nk ? Nk : xL[1], null !== (ck = null === Yk || void 0 === Yk ? void 0 : Yk[2]) && void 0 !== ck ?  … [truncated]
```

#### 1111. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8839` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8679) · [Before (L8839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8839)

```diff
-       }(CC, zC, null !== (sC = null !== (TC = ZC.vertexTint) && void 0 !== TC ? TC : null === QC || void 0 === QC ? void 0 : QC.vertexTint) && void 0 !== sC ? sC : [255, 255, 255])
+       }(kk, Fk, null !== (Wk = null !== (fk = Ik.vertexTint) && void 0 !== fk ? fk : null === Xk || void 0 === Xk ? void 0 : Xk.vertexTint) && void 0 !== Wk ? Wk : [255, 255, 255])
```

#### 1112. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8844` → after: `L8684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8684) · [Before (L8844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8844)

```diff
-       return null !== (ZC = null !== (QC = CC.dithering) && void 0 !== QC ? QC : null === zC || void 0 === zC ? void 0 : zC.dithering) && void 0 !== ZC && ZC
+       return null !== (Ik = null !== (Xk = kk.dithering) && void 0 !== Xk ? Xk : null === Fk || void 0 === Fk ? void 0 : Fk.dithering) && void 0 !== Ik && Ik
```

#### 1113. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8846-L8847` → after: `L8686-L8687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8686-L8687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8686-L8687) · [Before (L8846-L8847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8846-L8847)

```diff
-     var ZW = ZC(37121);
-     const QW = XC.x / 8,
+     var DL = Ik(37319);
+     const ML = Uk.D / 8,
```

#### 1114. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8851` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8691) · [Before (L8851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8851)

```diff
-         for (let zC = 0; zC <= XC.x; zC += QW) CC.push({
+         for (let Fk = 0; Fk <= Uk.D; Fk += ML) kk.push({
```

#### 1115. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8853` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8693) · [Before (L8853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8853)

```diff
-           isChunkBound: zC % XC.x === 0
+           isChunkBound: Fk % Uk.D === 0
```

#### 1116. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8860` → after: `L8700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8700) · [Before (L8860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8860)

```diff
-         this.MN = CC, this.rendererId = zC, this.config = ZC, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
+         this.qZ = kk, this.rendererId = Fk, this.config = Ik, this.tornDown = !1, this.borderMesh = null, this.subdivMesh = null, this.borderMaterial = null, this.subdivMaterial = null, this.lastChunkI = NaN, this.lastChunkJ = NaN, this.lastChunkK = NaN, this.planeThickness = voi … [truncated]
```

#### 1117. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8862` → after: `L8702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8702) · [Before (L8862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8862)

```diff
-         })), nW.registerRenderer(this.MN, this)
+         })), It.registerRenderer(this.qZ, this)
```

#### 1118. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8865` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8705) · [Before (L8865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8865)

```diff
-         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), nW.unregisterRenderer(this.MN, this))
+         this.tornDown || (this.tornDown = !0, this.disposeMeshes(), It.unregisterRenderer(this.qZ, this))
```

#### 1119. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8873` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8713) · [Before (L8873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8873)

```diff
-         }, CC.on("ZN", nW.tickHandler))
+         }, kk.on("Dt", It.tickHandler))
```

#### 1120. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8876` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8716) · [Before (L8876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8876)

```diff
-         delete nW.allRenderers[zC.rendererId], nW.tickHandler && 0 === Object.keys(nW.allRenderers).length && (CC.off("ZN", nW.tickHandler), nW.tickHandler = null)
+         delete It.allRenderers[Fk.rendererId], It.tickHandler && 0 === Object.keys(It.allRenderers).length && (kk.off("Dt", It.tickHandler), It.tickHandler = null)
```

#### 1121. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8887` → after: `L8727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8727) · [Before (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8887)

```diff
-         const QC = [(0, XC.v)(CC), (0, XC.v)(zC), (0, XC.v)(ZC)],
+         const Xk = [(0, Uk.z)(kk), (0, Uk.z)(Fk), (0, Uk.z)(Ik)],
```

#### 1122. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8895` → after: `L8735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8735) · [Before (L8895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8895)

```diff
-                     (wC.isChunkBound && bC.isChunkBound ? zC : ZC).push(...QC(CC, FW(wC.offset), FW(bC.offset)))
+                     (Tk.isChunkBound && ik.isChunkBound ? Fk : Ik).push(...Xk(kk, yt(Tk.offset), yt(ik.offset)))
```

#### 1123. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8898` → after: `L8738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8738) · [Before (L8898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8898)

```diff
-         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${CC}-${zC}-${ZC}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", wC, this.borderMaterial, QC), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${CC}-${zC}-${ZC}`, t … [truncated]
+         this.borderMaterial = this.createPlaneMaterial(`chunkBorderMat-${kk}-${Fk}-${Ik}`, this.config.borderColor), this.borderMesh = this.addPlanes("chunkBorders", Tk, this.borderMaterial, Xk), this.subdivMaterial = this.createPlaneMaterial(`chunkSubdivMat-${kk}-${Fk}-${Ik}`, t … [truncated]
```

#### 1124. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8901-L8902` → after: `L8741-L8742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8741-L8742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8741-L8742) · [Before (L8901-L8902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8901-L8902)

```diff
-         const wC = (0, RC.n)(this.MN.Vg, CC, function(CC) {
-           return (0, ZW.i)(CC.map((CC => {
+         const Tk = (0, Pk.m)(this.qZ.Xw, kk, function(kk) {
+           return (0, DL.e)(kk.map((kk => {
```

#### 1125. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8904` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8744) · [Before (L8904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8904)

```diff
-             return [(0, AC.g)({
+             return [(0, Qk.i)({
```

#### 1126. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8910` → after: `L8750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8750) · [Before (L8910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8910)

```diff
-         return wC.material = ZC, wC.tS = !1, this.MN.Vg.jS(wC, !0, QC), wC
+         return Tk.material = Ik, Tk.gw = !1, this.qZ.Xw.hw(Tk, !0, Xk), Tk
```

#### 1127. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8914` → after: `L8754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8754) · [Before (L8914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8914)

```diff
-         return (0, DC.d)({
+         return (0, Yk.e)({
```

#### 1128. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8916` → after: `L8756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8756) · [Before (L8916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8916)

```diff
-           sS: this.MN.Vg.sS,
+           Yw: this.qZ.Xw.Yw,
```

#### 1129. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8918` → after: `L8758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8758) · [Before (L8918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8918)

```diff
-             ...JC.c,
+             ...sk.d,
```

#### 1130. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8923` → after: `L8763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8763) · [Before (L8923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8923)

```diff
-             transparencyMode: eC.t.alphaBlend
+             transparencyMode: vk.r.alphaBlend
```

#### 1131. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8933` → after: `L8773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8773) · [Before (L8933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8933)

```diff
-     const fW = XC.x / 2,
+     const Xt = Uk.D / 2,
```

#### 1132. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8936-L8937` → after: `L8776-L8777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8776-L8777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8776-L8777) · [Before (L8936-L8937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8936-L8937)

```diff
-         [CC, XC.x, zC, fW, ZC, 0, 0],
-         [CC, XC.x, zC, fW, ZC, oW, 0]
+         [kk, Uk.D, Fk, Xt, Ik, 0, 0],
+         [kk, Uk.D, Fk, Xt, Ik, Tt, 0]
```

#### 1133. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8939-L8940` → after: `L8779-L8780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8779-L8780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8779-L8780) · [Before (L8939-L8940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8939-L8940)

```diff
-         [XC.x, CC, fW, zC, ZC, 0, 0],
-         [XC.x, CC, fW, zC, ZC, 0, oW]
+         [Uk.D, kk, Xt, Fk, Ik, 0, 0],
+         [Uk.D, kk, Xt, Fk, Ik, 0, Tt]
```

#### 1134. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8942-L8943` → after: `L8782-L8783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8782-L8783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8782-L8783) · [Before (L8942-L8943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8942-L8943)

```diff
-         [CC, XC.x, ZC, zC, fW, 0, oW],
-         [XC.x, CC, ZC, zC, fW, oW, 0]
+         [kk, Uk.D, Ik, Fk, Xt, 0, Tt],
+         [Uk.D, kk, Ik, Fk, Xt, Tt, 0]
```

#### 1135. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8947` → after: `L8787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8787) · [Before (L8947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8947)

```diff
-       return 0 === CC ? -.01 : CC === XC.x ? XC.x + wW : CC + wW
+       return 0 === kk ? -.01 : kk === Uk.D ? Uk.D + kt : kk + kt
```

#### 1136. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8953` → after: `L8793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8793) · [Before (L8953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8953)

```diff
-         this.MN = CC, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(WW), this.sampleZ = new Float64Array(WW), this.sampleY = new Float64Array(WW), this.sampleAirborne = new Uint8Array(WW), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
+         this.qZ = kk, this.config = null, this.renderCallback = null, this.sampleX = new Float64Array(lt), this.sampleZ = new Float64Array(lt), this.sampleY = new Float64Array(lt), this.sampleAirborne = new Uint8Array(lt), this.worldOffset = [0, 0, 0], this.playerPos = [0, 0, 0], … [truncated]
```

#### 1137. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8971` → after: `L8811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8811) · [Before (L8971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8971)

```diff
-         this.config = CC, this.renderer.setColour(CC.colour), this.renderCallback || (this.renderCallback = CC => this.onBeforeRender(CC), this.MN.on("beforeRender", this.renderCallback))
+         this.config = kk, this.renderer.setColour(kk.colour), this.renderCallback || (this.renderCallback = kk => this.onBeforeRender(kk), this.qZ.on("beforeRender", this.renderCallback))
```

#### 1138. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8979` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8819) · [Before (L8979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8979)

```diff
-         const CC = this.MN.JR.lL(this.MN.qE);
+         const kk = this.qZ.MJ.ZY(this.qZ.oR);
```

#### 1139. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8981` → after: `L8821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8821) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8981)

```diff
-         GC().copy(this.worldOffset, this.MN.YN), GC().add(this.playerPos, CC.nB, this.worldOffset);
+         xk().copy(this.worldOffset, this.qZ.SZ), xk().add(this.playerPos, kk.Im, this.worldOffset);
```

#### 1140. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L8990` → after: `L8830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8830) · [Before (L8990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L8990)

```diff
-         if (vo.endAtSolidFace && this.MN.fN.Sy(Math.floor(zC[0]), Math.floor(zC[1]), Math.floor(zC[2]))) {
+         if (Va.endAtSolidFace && this.qZ.XZ.lB(Math.floor(Fk[0]), Math.floor(Fk[1]), Math.floor(Fk[2]))) {
```

#### 1141. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9009` → after: `L8849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8849) · [Before (L9009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9009)

```diff
-           pC = fC.c.lerp(gC, zC[1], SC),
+           Hk = lk.e.lerp(ek, Fk[1], wk),
```

#### 1142. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9037` → after: `L8877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8877) · [Before (L9037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9037)

```diff
-         return this.MN.fN.Sy(CC, zC, ZC) && !this.MN.fN.Sy(CC, zC + 1, ZC)
+         return this.qZ.XZ.lB(kk, Fk, Ik) && !this.qZ.XZ.lB(kk, Fk + 1, Ik)
```

#### 1143. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9040` → after: `L8880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8880) · [Before (L9040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9040)

```diff
-         this.renderCallback && (this.MN.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
+         this.renderCallback && (this.qZ.off("beforeRender", this.renderCallback), this.renderCallback = null), this.renderer.dispose()
```

#### 1144. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9043-L9044` → after: `L8883-L8884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8883-L8884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8883-L8884) · [Before (L9043-L9044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9043-L9044)

```diff
-     var gW = ZC(36687),
-       SW = ZC(37640);
+     var tt = Ik(36848),
+       Zt = Ik(37811);
```

#### 1145. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9047` → after: `L8887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8887) · [Before (L9047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9047)

```diff
-         this.MN = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (CC, zC, ZC, QC, wC) => {
+         this.qZ = void 0, this.bloxd = void 0, this.bloxdSetBlockNoMulti = (kk, Fk, Ik, Xk, Tk) => {
```

#### 1146. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9049` → after: `L8889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8889) · [Before (L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9049)

```diff
-         }, this.MN = CC, this.bloxd = zC
+         }, this.qZ = kk, this.bloxd = Fk
```

#### 1147. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9052` → after: `L8892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8892) · [Before (L9052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9052)

```diff
-         if (!(wC in SW.f)) return console.error(`Called for non multiblock ${wC}`), !1;
+         if (!(Tk in Zt.d)) return console.error(`Called for non multiblock ${Tk}`), !1;
```

#### 1148. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9059-L9061` → after: `L8899-L8901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8899-L8901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8899-L8901) · [Before (L9059-L9061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9059-L9061)

```diff
-           of SW.f[wC].positions) {
-           const wC = this.bloxd.rG(zC + nC, ZC + fC, QC + oC);
-           if (this.MN.SCC(wC) || !this.bloxd.playerCanChangePos(CC, zC + nC, ZC + fC, QC + oC, FC.g[bC].id)) return !1
+           of Zt.d[Tk].positions) {
+           const Tk = this.bloxd.QJ(Fk + yk, Ik + lk, Xk + ak);
+           if (this.qZ.skk(Tk) || !this.bloxd.playerCanChangePos(kk, Fk + yk, Ik + lk, Xk + ak, Lk.g[ik].id)) return !1
```

#### 1149. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9073` → after: `L8913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8913) · [Before (L9073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9073)

```diff
-           of SW.f[zC].positions) ZC.push([CC[0] + wC, CC[1] + bC, CC[2] + nC]);
+           of Zt.d[Fk].positions) Ik.push([kk[0] + Tk, kk[1] + ik, kk[2] + yk]);
```

#### 1150. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9094` → after: `L8934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8934) · [Before (L9094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9094)

```diff
-             of SW.f[wC].positions) {
+             of Zt.d[Tk].positions) {
```

#### 1151. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9098` → after: `L8938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8938) · [Before (L9098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9098)

```diff
-               MC = this.bloxd.rG(wC, WC, NC);
+               jk = this.bloxd.QJ(Tk, tk, Zk);
```

#### 1152. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9111` → after: `L8951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8951) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9111)

```diff
-             block: (0, FC.e)(CC),
+             block: (0, Lk.f)(kk),
```

#### 1153. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9125-L9126` → after: `L8965-L8966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8965-L8966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8965-L8966) · [Before (L9125-L9126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9125-L9126)

```diff
-         } = SW.b[CC], oC = zC - bC, qC = ZC - nC, FC = QC - fC, WC = this.bloxd.rG(oC, qC, FC);
-         if (WC in SW.f)
+         } = Zt.b[kk], ak = Fk - ik, qk = Ik - yk, Lk = Xk - lk, tk = this.bloxd.QJ(ak, qk, Lk);
+         if (tk in Zt.d)
```

#### 1154. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9133` → after: `L8973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8973) · [Before (L9133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9133)

```diff
-             of SW.f[WC].positions)
+             of Zt.d[tk].positions)
```

#### 1155. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9151-L9152` → after: `L8991-L8992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR8991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L8991-L8992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L8991-L8992) · [Before (L9151-L9152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9151-L9152)

```diff
-         const fC = this.bloxd.rG(CC, zC, ZC),
-           oC = null !== (wC = this.getRestoredTop(CC, zC, ZC, fC, QC, nC)) && void 0 !== wC ? wC : QC;
+         const lk = this.bloxd.QJ(kk, Fk, Ik),
+           ak = null !== (Tk = this.getRestoredTop(kk, Fk, Ik, lk, Xk, yk)) && void 0 !== Tk ? Tk : Xk;
```

#### 1156. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9166` → after: `L9006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9006) · [Before (L9166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9166)

```diff
-             of SW.f[QC].positions) {
+             of Zt.d[Xk].positions) {
```

#### 1157. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9170` → after: `L9010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9010) · [Before (L9170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9170)

```diff
-             this.bloxd.rG(QC, qC, FC) === CC && bC(QC, qC, FC, 0, !0)
+             this.bloxd.QJ(Xk, qk, Lk) === kk && ik(Xk, qk, Lk, 0, !0)
```

#### 1158. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9186` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9026) · [Before (L9186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9186)

```diff
-             of SW.f[QC].positions) {
+             of Zt.d[Xk].positions) {
```

#### 1159. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9190-L9192` → after: `L9030-L9032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9030-L9032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9030-L9032) · [Before (L9190-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9190-L9192)

```diff
-             if (!this.bloxd.Gy(QC, MC, gC)) continue;
-             const SC = this.bloxd.rG(QC, MC, gC),
-               pC = !this.MN.qM.Sy(SC);
+             if (!this.bloxd.jB(Xk, jk, ek)) continue;
+             const wk = this.bloxd.QJ(Xk, jk, ek),
+               Hk = !this.qZ.yj.lB(wk);
```

#### 1160. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9201` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9041) · [Before (L9201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9201)

```diff
-         return !!nC && (null === (bC = FC.g[this.bloxd.rG(CC, zC, ZC)]) || void 0 === bC ? void 0 : bC.meta.rootId) === FC.g[nC].meta.rootId
+         return !!yk && (null === (ik = Lk.g[this.bloxd.QJ(kk, Fk, Ik)]) || void 0 === ik ? void 0 : ik.meta.rootId) === Lk.g[yk].meta.rootId
```

#### 1161. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9208-L9209` → after: `L9048-L9049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9048-L9049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9048-L9049) · [Before (L9208-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9208-L9209)

```diff
-         if (null === bC || !oC || qC === fC.meta.rootId || qC === oC.meta.rootId || !this.bloxd.Gy(CC, zC - 1, ZC)) return null;
-         const WC = FC.g[this.bloxd.rG(CC, zC - 1, ZC)];
+         if (null === ik || !ak || qk === lk.meta.rootId || qk === ak.meta.rootId || !this.bloxd.jB(kk, Fk - 1, Ik)) return null;
+         const tk = Lk.g[this.bloxd.QJ(kk, Fk - 1, Ik)];
```

#### 1162. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9216-L9217` → after: `L9056-L9057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9056-L9057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9056-L9057) · [Before (L9216-L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9216-L9217)

```diff
-         if (!WC && !NC || !this.bloxd.Gy(CC, zC + 1, ZC)) return;
-         const MC = this.bloxd.rG(CC, zC + 1, ZC),
+         if (!tk && !Zk || !this.bloxd.jB(kk, Fk + 1, Ik)) return;
+         const jk = this.bloxd.QJ(kk, Fk + 1, Ik),
```

#### 1163. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9226` → after: `L9066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9066) · [Before (L9226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9226)

```diff
-     var PW = ZC(9252);
+     var et = Ik(9244);
```

#### 1164. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9230` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9070) · [Before (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9230)

```diff
-       (null === CC || void 0 === CC ? void 0 : CC.chestStr) !== XC.i || Object.isFrozen(CC) || (CC.chestStr = (0, XC.G)(CC.chestStr))
+       (null === kk || void 0 === kk ? void 0 : kk.chestStr) !== Uk.e || Object.isFrozen(kk) || (kk.chestStr = (0, Uk.O)(kk.chestStr))
```

#### 1165. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9237` → after: `L9077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9077) · [Before (L9237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9237)

```diff
-         if (this.storage.get(CC, zC, ZC) && console.error(new Error(`adding chunk x y z ${CC} ${zC} ${ZC} to dataowner that already exists`).stack), 0 === QC.length) return void this.storage.set(CC, zC, ZC, GW);
+         if (this.storage.get(kk, Fk, Ik) && console.error(new Error(`adding chunk x y z ${kk} ${Fk} ${Ik} to dataowner that already exists`).stack), 0 === Xk.length) return void this.storage.set(kk, Fk, Ik, wt);
```

#### 1166. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9248-L9249` → after: `L9088-L9089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9088-L9089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9088-L9089) · [Before (L9248-L9249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9248-L9249)

```diff
-           (CC[0] > 31 || CC[1] > 31 || CC[2] > 31 || CC[0] < 0 || CC[1] < 0 || CC[2] < 0) && (CC = (0, XC.eb)(CC));
-           const zC = null !== nC && void 0 !== nC ? nC : {
+           (kk[0] > 31 || kk[1] > 31 || kk[2] > 31 || kk[0] < 0 || kk[1] < 0 || kk[2] < 0) && (kk = (0, Uk.ib)(kk));
+           const Fk = null !== yk && void 0 !== yk ? yk : {
```

#### 1167. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9253` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9093) · [Before (L9253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9253)

```diff
-           RW(zC.persisted), wC[`${CC[0]}|${CC[1]}|${CC[2]}`] = zC
+           Ht(Fk.persisted), Tk[`${kk[0]}|${kk[1]}|${kk[2]}`] = Fk
```

#### 1168. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9282` → after: `L9122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9122) · [Before (L9282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9282)

```diff
-           if ((0, XC.H)(CC)) console.error("ChunkInfo block at local pos", nC, "was nullish:", CC);
+           if ((0, Uk.Q)(kk)) console.error("ChunkInfo block at local pos", yk, "was nullish:", kk);
```

#### 1169. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9295` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9135) · [Before (L9295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9295)

```diff
-           bC = [CC * gC.f.Ig, zC * gC.f.Ig, ZC * gC.f.Ig];
+           ik = [kk * ek.f.se, Fk * ek.f.se, Ik * ek.f.se];
```

#### 1170. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9300` → after: `L9140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9140) · [Before (L9300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9300)

```diff
-             wC = this.bloxd.rG(ZC[0], ZC[1], ZC[2]);
+             Tk = this.bloxd.QJ(Ik[0], Ik[1], Ik[2]);
```

#### 1171. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9306-L9308` → after: `L9146-L9148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9146-L9148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9146-L9148) · [Before (L9306-L9308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9306-L9308)

```diff
-         const QC = (0, XC.Q)(CC),
-           wC = (0, XC.Q)(zC),
-           bC = (0, XC.Q)(ZC),
+         const Xk = (0, Uk.X)(kk),
+           Tk = (0, Uk.X)(Fk),
+           ik = (0, Uk.X)(Ik),
```

#### 1172. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9311` → after: `L9151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9151) · [Before (L9311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9311)

```diff
-         delete nC[`${(0,XC.U)(CC)}|${(0,XC.U)(zC)}|${(0,XC.U)(ZC)}`]
+         delete yk[`${(0,Uk._)(kk)}|${(0,Uk._)(Fk)}|${(0,Uk._)(Ik)}`]
```

#### 1173. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9316` → after: `L9156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9156) · [Before (L9316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9316)

```diff
-         const bC = gC.f.Ig;
+         const ik = ek.f.se;
```

#### 1174. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9323` → after: `L9163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9163) · [Before (L9323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9323)

```diff
-         return this.storage.get((0, XC.Q)(CC), (0, XC.Q)(zC), (0, XC.Q)(ZC))[`${(0,XC.U)(CC)}|${(0,XC.U)(zC)}|${(0,XC.U)(ZC)}`]
+         return this.storage.get((0, Uk.X)(kk), (0, Uk.X)(Fk), (0, Uk.X)(Ik))[`${(0,Uk._)(kk)}|${(0,Uk._)(Fk)}|${(0,Uk._)(Ik)}`]
```

#### 1175. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9338-L9340` → after: `L9178-L9180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9178-L9180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9178-L9180) · [Before (L9338-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9338-L9340)

```diff
-         const bC = (0, XC.Q)(CC),
-           nC = (0, XC.Q)(zC),
-           fC = (0, XC.Q)(ZC);
+         const ik = (0, Uk.X)(kk),
+           yk = (0, Uk.X)(Fk),
+           lk = (0, Uk.X)(Ik);
```

#### 1176. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9343` → after: `L9183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9183) · [Before (L9343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9343)

```diff
-         const qC = `${(0,XC.U)(CC)}|${(0,XC.U)(zC)}|${(0,XC.U)(ZC)}`,
+         const qk = `${(0,Uk._)(kk)}|${(0,Uk._)(Fk)}|${(0,Uk._)(Ik)}`,
```

#### 1177. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9349` → after: `L9189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9189) · [Before (L9349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9349)

```diff
-         const bC = arguments.length >= 4 ? QC : this.getBlockData(CC, zC, ZC);
+         const ik = arguments.length >= 4 ? Xk : this.getBlockData(kk, Fk, Ik);
```

#### 1178. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9364-L9367` → after: `L9204-L9207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9204-L9207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9204-L9207) · [Before (L9364-L9367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9364-L9367)

```diff
-     var xW = ZC(36897),
-       JW = ZC(39068),
-       IW = ZC(39071),
-       iW = ZC(37892),
+     var xt = Ik(37079),
+       Pt = Ik(39239),
+       Kt = Ik(39241),
+       Qt = Ik(38063),
```

#### 1179. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9374` → after: `L9214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9214) · [Before (L9374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9374)

```diff
-         this.bloxd = void 0, this.books = new Map, this.bloxd = CC, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.MN.qE)
+         this.bloxd = void 0, this.books = new Map, this.bloxd = kk, this.bloxd.isClient && this.onPlayerJoin(this.bloxd.qZ.oR)
```

#### 1180. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9390` → after: `L9230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9230) · [Before (L9390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9390)

```diff
-           wC = (0, IW.e)(null !== ZC && void 0 !== ZC ? ZC : KW);
+           Tk = (0, Kt.c)(null !== Ik && void 0 !== Ik ? Ik : St);
```

#### 1181. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9405` → after: `L9245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9245) · [Before (L9405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9405)

```diff
-         return void 0 !== wC ? wC : Object.hasOwn(QC.base, zC) ? QC.base[zC] : void 0
+         return void 0 !== Tk ? Tk : Object.hasOwn(Xk.base, Fk) ? Xk.base[Fk] : void 0
```

#### 1182. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9416` → after: `L9256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9256) · [Before (L9416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9416)

```diff
-           zC(nC, null !== (bC = null === wC || void 0 === wC ? void 0 : wC.get(nC)) && void 0 !== bC ? bC : QC[nC])
+           Fk(yk, null !== (ik = null === Tk || void 0 === Tk ? void 0 : Tk.get(yk)) && void 0 !== ik ? ik : Xk[yk])
```

#### 1183. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9424` → after: `L9264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9264) · [Before (L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9424)

```diff
-         return void 0 !== QC && (QC.base !== JW.c || (null !== (zC = null === (ZC = QC.overrides) || void 0 === ZC ? void 0 : ZC.size) && void 0 !== zC ? zC : 0) > 0)
+         return void 0 !== Xk && (Xk.base !== Pt.c || (null !== (Fk = null === (Ik = Xk.overrides) || void 0 === Ik ? void 0 : Ik.size) && void 0 !== Fk ? Fk : 0) > 0)
```

#### 1184. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9432` → after: `L9272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9272) · [Before (L9432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9432)

```diff
-           Vn: wC,
+           Tl: Tk,
```

#### 1185. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9444` → after: `L9284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9284) · [Before (L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9444)

```diff
-               Vn: fC,
+               Tl: lk,
```

#### 1186. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9448` → after: `L9288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9288) · [Before (L9448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9448)

```diff
-               Vn: fC,
+               Tl: lk,
```

#### 1187. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9457` → after: `L9297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9297) · [Before (L9457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9457)

```diff
-         Array.isArray(wC) ? bC = wC : (bC = eW, eW[0] = wC, eW.length = 1);
+         Array.isArray(Tk) ? ik = Tk : (ik = Vt, Vt[0] = Tk, Vt.length = 1);
```

#### 1188. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9515` → after: `L9355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9355) · [Before (L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9515)

```diff
-         if (!1 !== this.bloxd.qM.metadatas[ZC].stackable) {
+         if (!1 !== this.bloxd.yj.metadatas[Ik].stackable) {
```

#### 1189. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9525-L9526` → after: `L9365-L9366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9365-L9366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9365-L9366) · [Before (L9525-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9525-L9526)

```diff
-             Cf: 0,
-             qn: null,
+             il: 0,
+             jy: null,
```

#### 1190. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9539` → after: `L9379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9379) · [Before (L9539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9539)

```diff
-             qn: MC,
+             jy: jk,
```

#### 1191. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9543-L9544` → after: `L9383-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9383-L9384) · [Before (L9543-L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9543-L9544)

```diff
-           Cf: NC / qC,
-           qn: MC,
+           il: Zk / qk,
+           jy: jk,
```

#### 1192. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9574` → after: `L9414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9414) · [Before (L9574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9574)

```diff
-         if (!1 !== this.bloxd.qM.metadatas[zC].stackable) {
+         if (!1 !== this.bloxd.yj.metadatas[Fk].stackable) {
```

#### 1193. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9594` → after: `L9434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9434) · [Before (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9594)

```diff
-           qn: bC,
+           jy: ik,
```

#### 1194. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9642-L9643` → after: `L9482-L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9482-L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9482-L9483) · [Before (L9642-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9642-L9643)

```diff
-       const ZC = JW.f[CC];
-       return ZC ? void 0 === zC ? ZC : (zC <= 0 && (zC = 1), ZC.map((CC => {
+       const Ik = Pt.e[kk];
+       return Ik ? void 0 === Fk ? Ik : (Fk <= 0 && (Fk = 1), Ik.map((kk => {
```

#### 1195. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9654-L9657` → after: `L9494-L9497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9494-L9497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9494-L9497) · [Before (L9654-L9657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9654-L9657)

```diff
-     var mW = ZC(38309),
-       HW = ZC(38312),
-       EW = ZC(1183),
-       lW = ZC(6484);
+     var Et = Ik(38469),
+       Ot = Ik(38474),
+       nt = Ik(1231),
+       Gt = Ik(6475);
```

#### 1196. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9661` → after: `L9501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9501) · [Before (L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9661)

```diff
-           ...xW.m
+           ...xt.j
```

#### 1197. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9665-L9667` → after: `L9505-L9507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9505-L9507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9505-L9507) · [Before (L9665-L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9665-L9667)

```diff
-     var cW = ZC(38300),
-       uW = ZC(37475),
-       rW = ZC(34162);
+     var ut = Ik(38460),
+       bt = Ik(37660),
+       Rt = Ik(34180);
```

#### 1198. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9671` → after: `L9511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9511) · [Before (L9671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9671)

```diff
-         this.bloxd = CC, this.enchanter = void 0, sW ??= new uW.d(xW.m), this.enchanter = sW
+         this.bloxd = kk, this.enchanter = void 0, Ut ??= new bt.c(xt.j), this.enchanter = Ut
```

#### 1199. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9674` → after: `L9514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9514) · [Before (L9674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9674)

```diff
-         return this.bloxd.isClient && console.assert(CC === this.bloxd.MN.qE || CC === this.bloxd.MN.mCC, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(zC)
+         return this.bloxd.isClient && console.assert(kk === this.bloxd.qZ.oR || kk === this.bloxd.qZ.Nkk, "eId in client getPossibleEnchantments must be local player"), this.enchanter.getPossibleEnchantmentsForItem(Fk)
```

#### 1200. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9677-L9680` → after: `L9517-L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9517-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9517-L9520) · [Before (L9677-L9680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9677-L9680)

```diff
-         if (this.bloxd.isClient && console.assert(CC === this.bloxd.MN.qE || CC === this.bloxd.MN.mCC, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(CC, "canCraft")) return !1;
-         if (!(0, rW.t)(ZC)) return !1;
-         const QC = this.bloxd.JR.SzC(CC).getItemAtIdx(zC);
-         return 0 !== this.getPossibleEnchantments(CC, null === QC || void 0 === QC ? void 0 : QC.name).length && !(!QC || (0, rW.p)(QC.attributes))
+         if (this.bloxd.isClient && console.assert(kk === this.bloxd.qZ.oR || kk === this.bloxd.qZ.Nkk, "eId in client canUseEnchantingTable must be local player"), !this.bloxd.getClientPredictedOption(kk, "canCraft")) return !1;
+         if (!(0, Rt.r)(Ik)) return !1;
+         const Xk = this.bloxd.MJ.sFk(kk).getItemAtIdx(Fk);
+         return 0 !== this.getPossibleEnchantments(kk, null === Xk || void 0 === Xk ? void 0 : Xk.name).length && !(!Xk || (0, Rt.n)(Xk.attributes))
```

#### 1201. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9683` → after: `L9523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9523) · [Before (L9683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9683)

```diff
-         return (0, rW.t)(CC)
+         return (0, Rt.r)(kk)
```

#### 1202. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9694-L9697` → after: `L9534-L9537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9534-L9537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9534-L9537) · [Before (L9694-L9697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9694-L9697)

```diff
-     }(0, FC.k)("Coal Ore"), (0, FC.k)("Iron Ore"), (0, FC.k)("Gold Ore"), (0, FC.k)("Diamond Ore"), (0, FC.k)("Moonstone Ore"), (0, FC.k)("Pure Coal Ore"), (0, FC.k)("Pure Iron Ore"), (0, FC.k)("Pure Gold Ore"), (0, FC.k)("Pure Diamond Ore"), (0, FC.k)("Pure Moonstone Ore"), (0,  … [truncated]
-     var aW = ZC(37493),
-       tW = ZC(36926),
-       DW = ZC(37496);
+     }(0, Lk.j)("Coal Ore"), (0, Lk.j)("Iron Ore"), (0, Lk.j)("Gold Ore"), (0, Lk.j)("Diamond Ore"), (0, Lk.j)("Moonstone Ore"), (0, Lk.j)("Pure Coal Ore"), (0, Lk.j)("Pure Iron Ore"), (0, Lk.j)("Pure Gold Ore"), (0, Lk.j)("Pure Diamond Ore"), (0, Lk.j)("Pure Moonstone Ore"), (0,  … [truncated]
+     var Nt = Ik(37674),
+       ct = Ik(37101),
+       Wt = Ik(37680);
```

#### 1203. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9699-L9700` → after: `L9539-L9540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9539-L9540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9539-L9540) · [Before (L9699-L9700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9699-L9700)

```diff
-     const jW = new Set(tW.i.map((function(CC) {
-       return `${CC}ByBlock`
+     const ft = new Set(ct.g.map((function(kk) {
+       return `${kk}ByBlock`
```

#### 1204. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9704` → after: `L9544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9544) · [Before (L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9704)

```diff
-       return void 0 === zC ? CC : {
+       return void 0 === Fk ? kk : {
```

#### 1205. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9725` → after: `L9565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9565) · [Before (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9725)

```diff
-         const QC = null !== (ZC = this.resolved) && void 0 !== ZC ? ZC : this.buildResolvedSettings(CC, zC);
+         const Xk = null !== (Ik = this.resolved) && void 0 !== Ik ? Ik : this.buildResolvedSettings(kk, Fk);
```

#### 1206. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9731` → after: `L9571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9571) · [Before (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9731)

```diff
-         const QC = null !== (ZC = this.blockLookups) && void 0 !== ZC ? ZC : this.buildBlockLookups(CC, zC);
+         const Xk = null !== (Ik = this.blockLookups) && void 0 !== Ik ? Ik : this.buildBlockLookups(kk, Fk);
```

#### 1207. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9738` → after: `L9578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9578) · [Before (L9738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9738)

```diff
-         const ZC = (0, aW.k)(CC, zC),
+         const Ik = (0, Nt.l)(kk, Fk),
```

#### 1208. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9754` → after: `L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9594) · [Before (L9754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9754)

```diff
-         const ZC = (0, aW.i)(CC).getBlockLookupsForTier(zC),
+         const Ik = (0, Nt.h)(kk).getBlockLookupsForTier(Fk),
```

#### 1209. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9760` → after: `L9600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9600) · [Before (L9760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9760)

```diff
-         const bC = (0, aW.k)(CC, zC);
+         const ik = (0, Nt.l)(kk, Fk);
```

#### 1210. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9762-L9763` → after: `L9602-L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9602-L9603) · [Before (L9762-L9763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9762-L9763)

```diff
-           speedMultiplier: void 0 === wC ? ZC.speedMultiplier : (0, aW.f)(yW(bC.speedMultiplierByBlock, wC)),
-           canAutoStep: void 0 === QC ? ZC.canAutoStep : (0, aW.c)(yW(bC.canAutoStepByBlock, QC))
+           speedMultiplier: void 0 === Tk ? Ik.speedMultiplier : (0, Nt.e)(Bt(ik.speedMultiplierByBlock, Tk)),
+           canAutoStep: void 0 === Xk ? Ik.canAutoStep : (0, Nt.b)(Bt(ik.canAutoStepByBlock, Xk))
```

#### 1211. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9767` → after: `L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9607) · [Before (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9767)

```diff
-     var UW = ZC(38012);
+     var Yt = Ik(38174);
```

#### 1212. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9771` → after: `L9611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9611) · [Before (L9771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9771)

```diff
-         this.vq = new WeakMap
+         this.eq = new WeakMap
```

#### 1213. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9774` → after: `L9614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9614) · [Before (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9774)

```diff
-         return bC && (QC > zC || wC > ZC) ? (this.vq.set(CC, {
+         return ik && (Xk > Fk || Tk > Ik) ? (this.eq.set(kk, {
```

#### 1214. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9780` → after: `L9620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9620) · [Before (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9780)

```diff
-         }) : (this.vq.delete(CC), {
+         }) : (this.eq.delete(kk), {
```

#### 1215. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9786` → after: `L9626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9626) · [Before (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9786)

```diff
-         return this.vq.get(CC)
+         return this.eq.get(kk)
```

#### 1216. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9789` → after: `L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9629) · [Before (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9789)

```diff
-         this.vq.delete(CC)
+         this.eq.delete(kk)
```

#### 1217. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9792-L9793` → after: `L9632-L9633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9632-L9633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9632-L9633) · [Before (L9792-L9793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9792-L9793)

```diff
-     var kW = ZC(9299),
-       VW = ZC(39076);
+     var mt = Ik(9278),
+       ht = Ik(39243);
```

#### 1218. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9796` → after: `L9636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9636) · [Before (L9796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9796)

```diff
-         this.isClient = zC, this.callbacks = ZC, this.MN = void 0, this.JR = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.qM = new  … [truncated]
+         this.isClient = Fk, this.callbacks = Ik, this.qZ = void 0, this.MJ = void 0, this.multiblockManager = void 0, this.blockDataOwner = void 0, this.craftingManager = void 0, this.enchantingManager = void 0, this.entityNames = {}, this.meshParticleSystems = {}, this.yj = new  … [truncated]
```

#### 1219. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9819` → after: `L9659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9659) · [Before (L9819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9819)

```diff
-         this.multiblockManager.TY(CC, zC, ZC, QC, wC, bC)
+         this.multiblockManager.lG(kk, Fk, Ik, Xk, Tk, ik)
```

#### 1220. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9822` → after: `L9662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9662) · [Before (L9822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9822)

```diff
-         const bC = this.rG(CC, zC, ZC);
+         const ik = this.QJ(kk, Fk, Ik);
```

#### 1221. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9827` → after: `L9667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9667) · [Before (L9827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9827)

```diff
-         return wC in SW.f ? this.multiblockManager.playerCanPlaceItem(CC, zC, ZC, QC, wC) : this.playerCanChangePos(CC, zC, ZC, QC, wC, bC)
+         return Tk in Zt.d ? this.multiblockManager.playerCanPlaceItem(kk, Fk, Ik, Xk, Tk) : this.playerCanChangePos(kk, Fk, Ik, Xk, Tk, ik)
```

#### 1222. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9832` → after: `L9672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9672) · [Before (L9832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9832)

```diff
-         return this.isClient ? this.Gy(zC, ZC, QC) && this.posSatisfiesModifyConstraints(CC, zC, ZC, QC) && (!this.MN.qM.Sy(wC) || this.MN.fN.wT.has(wC) || !this.MN.JR.QzC(zC, ZC, QC, this.MN.qM.Xs(wC), bC ? CC : null)) : this.Gy(zC, ZC, QC) && this.posSatisfiesModifyConstraints( … [truncated]
+         return this.isClient ? this.jB(Fk, Ik, Xk) && this.posSatisfiesModifyConstraints(kk, Fk, Ik, Xk) && (!this.qZ.yj.lB(Tk) || this.qZ.XZ.iN.has(Tk) || !this.qZ.MJ.tFk(Fk, Ik, Xk, this.qZ.yj.XN(Tk), ik ? kk : null)) : this.jB(Fk, Ik, Xk) && this.posSatisfiesModifyConstraints( … [truncated]
```

#### 1223. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9841` → after: `L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9681) · [Before (L9841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9841)

```diff
-         return 1 === zC ? `Partially Full ${CC}` : 2 === zC ? `Half Full ${CC}` : 3 === zC ? `Nearly Full ${CC}` : 4 === zC ? CC : "Bowl"
+         return 1 === Fk ? `Partially Full ${kk}` : 2 === Fk ? `Half Full ${kk}` : 3 === Fk ? `Nearly Full ${kk}` : 4 === Fk ? kk : "Bowl"
```

#### 1224. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9847-L9849` → after: `L9687-L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9687-L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9687-L9689) · [Before (L9847-L9849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9847-L9849)

```diff
-         if (CC && CC !== kW.b) {
-           if (this.qM.metadatas[CC]) return this.qM.metadatas[CC].id;
-           throw new Error(`Invalid block name. You sent ${CC}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
+         if (kk && kk !== mt.c) {
+           if (this.yj.metadatas[kk]) return this.yj.metadatas[kk].id;
+           throw new Error(`Invalid block name. You sent ${kk}. The only valid item names are 'Air' and those contained within the blockMetadata/itemMetadata files or those registered with the api`)
```

#### 1225. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9854` → after: `L9694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9694) · [Before (L9854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9854)

```diff
-         return CC && CC !== kW.b ? this.qM.metadatas[CC].name : kW.b
+         return kk && kk !== mt.c ? this.yj.metadatas[kk].name : mt.c
```

#### 1226. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9857` → after: `L9697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9697) · [Before (L9857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9857)

```diff
-         return CC && CC !== kW.b ? this.getItemTypeObjImpl(CC) : null
+         return kk && kk !== mt.c ? this.getItemTypeObjImpl(kk) : null
```

#### 1227. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9860-L9861` → after: `L9700-L9701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9700-L9701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9700-L9701) · [Before (L9860-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9860-L9861)

```diff
-         if (!CC || CC === kW.b) return kW.d;
-         const zC = this.qM.metadatas[CC];
+         if (!kk || kk === mt.c) return mt.g;
+         const Fk = this.yj.metadatas[kk];
```

#### 1228. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9863-L9864` → after: `L9703-L9704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9703-L9704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9703-L9704) · [Before (L9863-L9864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9863-L9864)

```diff
-           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${CC}`);
-           throw new Error(`Item ${CC} not found in registry`)
+           if (this.isExecutingUserCode()) return void console.error(`No metadata for item: ${kk}`);
+           throw new Error(`Item ${kk} not found in registry`)
```

#### 1229. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9869` → after: `L9709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9709) · [Before (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9869)

```diff
-         if (VW.c.has(ZC) && (this.isClient || "Player" === this.getEntityType(CC))) {
+         if (ht.e.has(Ik) && (this.isClient || "Player" === this.getEntityType(kk))) {
```

#### 1230. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9871-L9872` → after: `L9711-L9712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9711-L9712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9711-L9712) · [Before (L9871-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9871-L9872)

```diff
-             wC = this.getClientPredictedOption(CC, (0, VW.d)(QC, ZC));
-           if (!(0, XC.H)(wC)) return wC
+             Tk = this.getClientPredictedOption(kk, (0, ht.g)(Xk, Ik));
+           if (!(0, Uk.Q)(Tk)) return Tk
```

#### 1231. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9878-L9879` → after: `L9718-L9719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9718-L9719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9718-L9719) · [Before (L9878-L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9878-L9879)

```diff
-         const QC = null === (ZC = this.qM.metadatas[CC]) || void 0 === ZC ? void 0 : ZC[zC];
-         return (0, XC.H)(QC) && "displayName" === zC ? this.getItemName(CC) : QC
+         const Xk = null === (Ik = this.yj.metadatas[kk]) || void 0 === Ik ? void 0 : Ik[Fk];
+         return (0, Uk.Q)(Xk) && "displayName" === Fk ? this.getItemName(kk) : Xk
```

#### 1232. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9889` → after: `L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9729) · [Before (L9889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9889)

```diff
-         return qC ? Math.max(0, null !== (bC = this.getItemStat(CC, qC, "attackRange")) && void 0 !== bC ? bC : nC) : nC
+         return qk ? Math.max(0, null !== (ik = this.getItemStat(kk, qk, "attackRange")) && void 0 !== ik ? ik : yk) : yk
```

#### 1233. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9893` → after: `L9733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9733) · [Before (L9893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9893)

```diff
-         return null !== (zC = this.getClientPredictedOption(CC, "blockReach")) && void 0 !== zC ? zC : gC.f.yp
+         return null !== (Fk = this.getClientPredictedOption(kk, "blockReach")) && void 0 !== Fk ? Fk : ek.f.WH
```

#### 1234. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9899-L9904` → after: `L9739-L9744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9739-L9744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9739-L9744) · [Before (L9899-L9904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9899-L9904)

```diff
-           const nC = null === (QC = xW.m[null === ZC || void 0 === ZC ? void 0 : ZC.name]) || void 0 === QC ? void 0 : QC.harvests,
-             oC = null === (wC = xW.m[null === ZC || void 0 === ZC ? void 0 : ZC.name]) || void 0 === wC ? void 0 : wC.level;
-           return !(0, fC.pc)({
-             blockHarvestType: this.qM.metadatas[zC].harvestType,
-             blockHarvestLevel: this.qM.metadatas[zC].harvestLevel,
-             harvestLevel: null !== (bC = this.getItemStat(CC, zC, "harvestLevel")) && void 0 !== bC ? bC : 0,
+           const yk = null === (Xk = xt.j[null === Ik || void 0 === Ik ? void 0 : Ik.name]) || void 0 === Xk ? void 0 : Xk.harvests,
+             ak = null === (Tk = xt.j[null === Ik || void 0 === Ik ? void 0 : Ik.name]) || void 0 === Tk ? void 0 : Tk.level;
+           return !(0, lk.Ic)({
+             blockHarvestType: this.yj.metadatas[Fk].harvestType,
+             blockHarvestLevel: this.yj.metadatas[Fk].harvestLevel,
+             harvestLevel: null !== (ik = this.getItemStat(kk, Fk, "harvestLevel")) && void 0 !== ik ? ik : 0,
```

#### 1235. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9912` → after: `L9752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9752) · [Before (L9912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9912)

```diff
-         return (0, fC.Ld)(this.getItemStat(CC, zC, "drops"), this.getItemStat(CC, zC, "specialToolDrop"), (() => this.getMetaInfo(zC).rootName), ZC)
+         return (0, lk.Zd)(this.getItemStat(kk, Fk, "drops"), this.getItemStat(kk, Fk, "specialToolDrop"), (() => this.getMetaInfo(Fk).rootName), Ik)
```

#### 1236. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9916` → after: `L9756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9756) · [Before (L9916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9916)

```diff
-         return zC && null !== (ZC = null === (QC = FC.g[CC]) || void 0 === QC ? void 0 : QC.aq) && void 0 !== ZC ? ZC : 1
+         return Fk && null !== (Ik = null === (Xk = Lk.g[kk]) || void 0 === Xk ? void 0 : Xk.nq) && void 0 !== Ik ? Ik : 1
```

#### 1237. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9927` → after: `L9767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9767) · [Before (L9927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9927)

```diff
-         return this.MN.JR.YCC(CC, "inventory") ? this.MN.JR.SzC(CC).getItemAtSelectedSlot() : null
+         return this.qZ.MJ.Ukk(kk, "inventory") ? this.qZ.MJ.sFk(kk).getItemAtSelectedSlot() : null
```

#### 1238. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9930` → after: `L9770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9770) · [Before (L9930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9930)

```diff
-         return (0, Az.i)(this.MN, CC, !1).length >= 1
+         return (0, sF.f)(this.qZ, kk, !1).length >= 1
```

#### 1239. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9934` → after: `L9774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9774) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9934)

```diff
-         const QC = this.qM.metadatas;
+         const Xk = this.yj.metadatas;
```

#### 1240. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9940` → after: `L9780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9780) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9940)

```diff
-             !(0, XC.H)(zC) && (void 0 === wC || zC > wC) && (wC = zC);
+             !(0, Uk.Q)(Fk) && (void 0 === Tk || Fk > Tk) && (Tk = Fk);
```

#### 1241. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9946` → after: `L9786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9786) · [Before (L9946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9946)

```diff
-             void 0 === ZC && (ZC = (0, VW.d)(this.getItemName(fC), "stoodOnSpeedMultiplier"), this.stoodOnOptions[fC] = ZC), void 0 === nC && (nC = this.getPlayerReader(CC));
+             void 0 === Ik && (Ik = (0, ht.g)(this.getItemName(lk), "stoodOnSpeedMultiplier"), this.stoodOnOptions[lk] = Ik), void 0 === yk && (yk = this.getPlayerReader(kk));
```

#### 1242. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9949` → after: `L9789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9789) · [Before (L9949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9949)

```diff
-           }(0, XC.H)(zC) && (this.stoodOnKnown[fC] || (this.stoodOnDefaults[fC] = this.getDefaultItemStat(fC, "stoodOnSpeedMultiplier"), this.stoodOnKnown[fC] = !0), zC = this.stoodOnDefaults[fC]), !(0, XC.H)(zC) && (void 0 === wC || zC > wC) && (wC = zC)
+           }(0, Uk.Q)(Fk) && (this.stoodOnKnown[lk] || (this.stoodOnDefaults[lk] = this.getDefaultItemStat(lk, "stoodOnSpeedMultiplier"), this.stoodOnKnown[lk] = !0), Fk = this.stoodOnDefaults[lk]), !(0, Uk.Q)(Fk) && (void 0 === Tk || Fk > Tk) && (Tk = Fk)
```

#### 1243. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9951` → after: `L9791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9791) · [Before (L9951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9951)

```diff
-         return null !== (ZC = wC) && void 0 !== ZC ? ZC : 1
+         return null !== (Ik = Tk) && void 0 !== Ik ? Ik : 1
```

#### 1244. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9954` → after: `L9794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9794) · [Before (L9954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9954)

```diff
-         const zC = this.qM.metadatas,
+         const Fk = this.yj.metadatas,
```

#### 1245. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9960` → after: `L9800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9800) · [Before (L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9960)

```diff
-           (0, XC.H)(CC) || (ZC.push(wC), QC.push(Number(CC)))
+           (0, Uk.Q)(kk) || (Ik.push(Tk), Xk.push(Number(kk)))
```

#### 1246. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9968` → after: `L9808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9808) · [Before (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9968)

```diff
-         const QC = this.qM.metadatas;
+         const Xk = this.yj.metadatas;
```

#### 1247. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9973` → after: `L9813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9813) · [Before (L9973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9973)

```diff
-             const zC = (0, VW.d)(this.getItemName(CC), "stoodOnSpeedMultiplier");
+             const Fk = (0, ht.g)(this.getItemName(kk), "stoodOnSpeedMultiplier");
```

#### 1248. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9984` → after: `L9824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9824) · [Before (L9984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9984)

```diff
-           if (!(0, XC.H)(ZC))
+           if (!(0, Uk.Q)(Ik))
```

#### 1249. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L9995` → after: `L9835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9835) · [Before (L9995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L9995)

```diff
-         return 1 === zC ? QC = .5 * ZC : 2 === zC ? QC = .75 * ZC : zC >= this.maxBunnyHops && (QC = ZC), 1 + QC
+         return 1 === Fk ? Xk = .5 * Ik : 2 === Fk ? Xk = .75 * Ik : Fk >= this.maxBunnyHops && (Xk = Ik), 1 + Xk
```

#### 1250. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10008` → after: `L9848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9848) · [Before (L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10008)

```diff
-         return this.MN.pickBlock(zC, ZC, this.getBlockReach(CC))
+         return this.qZ.pickBlock(Fk, Ik, this.getBlockReach(kk))
```

#### 1251. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10021-L10022` → after: `L9861-L9862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9861-L9862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9861-L9862) · [Before (L10021-L10022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10021-L10022)

```diff
-         CC.attributes.customAttributes = Object.assign(null !== (QC = CC.attributes.customAttributes) && void 0 !== QC ? QC : {}, {
-           author: this.getEntityName(this.isClient ? this.MN.qE : ZC),
+         kk.attributes.customAttributes = Object.assign(null !== (Xk = kk.attributes.customAttributes) && void 0 !== Xk ? Xk : {}, {
+           author: this.getEntityName(this.isClient ? this.qZ.oR : Ik),
```

#### 1252. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10029` → after: `L9869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9869) · [Before (L10029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10029)

```diff
-         bC !== nC && this.TY(CC, zC, ZC, (0, FC.k)(nC))
+         ik !== yk && this.lG(kk, Fk, Ik, (0, Lk.j)(yk))
```

#### 1253. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10034` → after: `L9874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9874) · [Before (L10034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10034)

```diff
-         return `${QC[0]}|meta|${null!==(ZC=QC[2])&&void 0!==ZC?ZC:"rot1"}|${zC>0?"full":"empty"}`
+         return `${Xk[0]}|meta|${null!==(Ik=Xk[2])&&void 0!==Ik?Ik:"rot1"}|${Fk>0?"full":"empty"}`
```

#### 1254. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10041` → after: `L9881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9881) · [Before (L10041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10041)

```diff
-           return `${0===zC?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(wC=QC[2])&&void 0!==wC?wC:"rot1"}|books${zC}`
+           return `${0===Fk?"Empty Bookshelf":"Bookshelf"}|meta|${null!==(Tk=Xk[2])&&void 0!==Tk?Tk:"rot1"}|books${Fk}`
```

#### 1255. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10048` → after: `L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9888) · [Before (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10048)

```diff
-         const wC = this.JR.SzC(CC).getItems();
+         const Tk = this.MJ.sFk(kk).getItems();
```

#### 1256. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10051` → after: `L9891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9891) · [Before (L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10051)

```diff
-           if (fC.n.includes(null === CC || void 0 === CC ? void 0 : CC.name)) {
+           if (lk.t.includes(null === kk || void 0 === kk ? void 0 : kk.name)) {
```

#### 1257. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10065` → after: `L9905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9905) · [Before (L10065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10065)

```diff
-           CC <= 0 ? zC.setItemSlot(ZC, kW.b, null) : zC.setItemSlot(ZC, QC.name, CC, QC.attributes)
+           kk <= 0 ? Fk.setItemSlot(Ik, mt.c, null) : Fk.setItemSlot(Ik, Xk.name, kk, Xk.attributes)
```

#### 1258. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10069` → after: `L9909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9909) · [Before (L10069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10069)

```diff
-         if (this.JR.YCC(CC, "itemState")) return "Item";
+         if (this.MJ.Ukk(kk, "itemState")) return "Item";
```

#### 1259. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10073` → after: `L9913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9913) · [Before (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10073)

```diff
-           return -1 === CC ? zC : zC.slice(0, CC)
+           return -1 === kk ? Fk : Fk.slice(0, kk)
```

#### 1260. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10075` → after: `L9915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9915) · [Before (L10075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10075)

```diff
-         return console.error(new Error(`Tried to get entity type for entity ${CC} but it doesn't exist in networked state`).stack), null
+         return console.error(new Error(`Tried to get entity type for entity ${kk} but it doesn't exist in networked state`).stack), null
```

#### 1261. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10081` → after: `L9921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9921) · [Before (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10081)

```diff
-           nC = GC().copy(this.tempVec2, gC.o[bC.pose]);
+           yk = xk().copy(this.tempVec2, ek.p[ik.pose]);
```

#### 1262. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10085-L10086` → after: `L9925-L9926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9925-L9926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9925-L9926) · [Before (L10085-L10086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10085-L10086)

```diff
-         if (zC.type === lW.r.DEFAULT) {
-           const zC = (0, mW.h)(this.qB(CC), this.getLifeformType(CC));
+         if (Fk.type === Gt.n.DEFAULT) {
+           const Fk = (0, Et.g)(this.qm(kk), this.getLifeformType(kk));
```

#### 1263. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10091` → after: `L9931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9931) · [Before (L10091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10091)

```diff
-         QC && (qC += Math.max(Math.abs(QC[0]), Math.abs(QC[2])), FC += QC[1]), (qC > HW.i || FC > HW.e) && ((zC.type !== lW.r.DEFAULT || QC) && this.onCollisionBoxCapped(), qC = Math.min(qC, HW.i), FC = Math.min(FC, HW.e)), this.updatePositionAndPhysicsImpl(CC, zC, ZC, null !== Q … [truncated]
+         Xk && (qk += Math.max(Math.abs(Xk[0]), Math.abs(Xk[2])), Lk += Xk[1]), (qk > Ot.h || Lk > Ot.d) && ((Fk.type !== Gt.n.DEFAULT || Xk) && this.onCollisionBoxCapped(), qk = Math.min(qk, Ot.h), Lk = Math.min(Lk, Ot.d)), this.updatePositionAndPhysicsImpl(kk, Fk, Ik, null !== X … [truncated]
```

#### 1264. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10094-L10095` → after: `L9934-L9935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9934-L9935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9934-L9935) · [Before (L10094-L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10094-L10095)

```diff
-         const bC = this.MN.JR.lL(CC),
-           nC = null === ZC && ((0, BC.t)(zC.type) || zC.type === lW.r.SLEEPING),
+         const ik = this.qZ.MJ.ZY(kk),
+           yk = null === Ik && ((0, Dk.s)(Fk.type) || Fk.type === Gt.n.SLEEPING),
```

#### 1265. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10097` → after: `L9937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9937) · [Before (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10097)

```diff
-         this.MN.JR.LzC(CC, fC.width, fC.height, fC.width)
+         this.qZ.MJ.FIk(kk, lk.width, lk.height, lk.width)
```

#### 1266. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10101` → after: `L9941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9941) · [Before (L10101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10101)

```diff
-         const ZC = this.MN.JR.lL(CC),
+         const Ik = this.qZ.MJ.ZY(kk),
```

#### 1267. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10104` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9944) · [Before (L10104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10104)

```diff
-         const wC = null !== (zC = ZC.YN) && void 0 !== zC ? zC : this.MN.YN,
+         const Tk = null !== (Fk = Ik.SZ) && void 0 !== Fk ? Fk : this.qZ.SZ,
```

#### 1268. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10120` → after: `L9960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9960) · [Before (L10120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10120)

```diff
-                   const bC = !0 === QC ? BW : QC;
+                   const ik = !0 === Xk ? At : Xk;
```

#### 1269. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10125` → after: `L9965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9965) · [Before (L10125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10125)

```diff
-           }(ZC.DCC, wC, QC.width, QC.height, ((zC, ZC, QC) => this.Gy(zC, ZC, QC) ? this.getBlockCollisionForPlayer(CC, zC, ZC, QC, this.getClientPredictedBlock(CC, zC, ZC, QC)) : null));
+           }(Ik.Mkk, Tk, Xk.width, Xk.height, ((Fk, Ik, Xk) => this.jB(Fk, Ik, Xk) ? this.getBlockCollisionForPlayer(kk, Fk, Ik, Xk, this.getClientPredictedBlock(kk, Fk, Ik, Xk)) : null));
```

#### 1270. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10129` → after: `L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9969) · [Before (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10129)

```diff
-         const zC = this.MN.JR.lL(CC),
+         const Fk = this.qZ.MJ.ZY(kk),
```

#### 1271. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10131` → after: `L9971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9971) · [Before (L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10131)

```diff
-         void 0 !== ZC && (this.playerBodyGrowth.clear(zC), this.MN.JR.LzC(CC, ZC.width, ZC.height, ZC.width))
+         void 0 !== Ik && (this.playerBodyGrowth.clear(Fk), this.qZ.MJ.FIk(kk, Ik.width, Ik.height, Ik.width))
```

#### 1272. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10135` → after: `L9975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9975) · [Before (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10135)

```diff
-         return null !== (zC = null === (ZC = this.vehicleSettingOverridesByEId.get(CC)) || void 0 === ZC ? void 0 : ZC.getOverrides()) && void 0 !== zC ? zC : null
+         return null !== (Fk = null === (Ik = this.vehicleSettingOverridesByEId.get(kk)) || void 0 === Ik ? void 0 : Ik.getOverrides()) && void 0 !== Fk ? Fk : null
```

#### 1273. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10156` → after: `L9996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR9996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L9996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L9996) · [Before (L10156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10156)

```diff
-         return this.JR.yCC(CC).physicsState
+         return this.MJ.FFk(kk).physicsState
```

#### 1274. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10162` → after: `L10002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10002) · [Before (L10162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10162)

```diff
-           this.updatePositionAndPhysics(zC, ZC, !1, null !== CC && void 0 !== CC ? CC : void 0, !0)
+           this.updatePositionAndPhysics(Fk, Ik, !1, null !== kk && void 0 !== kk ? kk : void 0, !0)
```

#### 1275. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10168` → after: `L10008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10008) · [Before (L10168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10168)

```diff
-         return void 0 === QC ? (0, aW.k)(zC.type, zC.tier) : QC.getResolvedSettings(zC.type, zC.tier)
+         return void 0 === Xk ? (0, Nt.l)(Fk.type, Fk.tier) : Xk.getResolvedSettings(Fk.type, Fk.tier)
```

#### 1276. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10173` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10013) · [Before (L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10173)

```diff
-         return void 0 === QC ? (0, aW.i)(zC.type).getBlockLookupsForTier(zC.tier) : QC.getBlockLookups(zC.type, zC.tier)
+         return void 0 === Xk ? (0, Nt.h)(Fk.type).getBlockLookupsForTier(Fk.tier) : Xk.getBlockLookups(Fk.type, Fk.tier)
```

#### 1277. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10178-L10179` → after: `L10018-L10019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10018-L10019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10018-L10019) · [Before (L10178-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10178-L10179)

```diff
-           JR: ZC
-         } = this.MN, QC = ZC.getState(CC, ZC.names.Zg);
+           MJ: Ik
+         } = this.qZ, Xk = Ik.getState(kk, Ik.names.Fe);
```

#### 1278. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10183-L10185` → after: `L10023-L10025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10023-L10025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10023-L10025) · [Before (L10183-L10185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10183-L10185)

```diff
-         const ZC = (0, BC.b)(CC);
-         if (null === ZC) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${CC}"`);
-         const QC = this.MN.JR.eT(null !== zC && void 0 !== zC ? zC : this.MN.qE),
+         const Ik = (0, Dk.c)(kk);
+         if (null === Ik) return void console.error(`useConsumableVehicle called with non-consumable-vehicle item "${kk}"`);
+         const Xk = this.qZ.MJ.aN(null !== Fk && void 0 !== Fk ? Fk : this.qZ.oR),
```

#### 1279. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10189-L10190` → after: `L10029-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10029-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10029-L10030) · [Before (L10189-L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10189-L10190)

```diff
-           } = (0, aW.k)(wC.type, wC.tier);
-         QC.Np[1] = 0, QC.applyImpulse([0, bC, 0]), this.useConsumableVehicleImpl(zC, CC, ZC)
+           } = (0, Nt.l)(Tk.type, Tk.tier);
+         Xk.TH[1] = 0, Xk.applyImpulse([0, ik, 0]), this.useConsumableVehicleImpl(Fk, kk, Ik)
```

#### 1280. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10193` → after: `L10033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10033) · [Before (L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10193)

```diff
-         const QC = this.MN.JR.eT(CC),
+         const Xk = this.qZ.MJ.aN(kk),
```

#### 1281. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10203` → after: `L10043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10043) · [Before (L10203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10203)

```diff
-           bC = this.isClient ? wC : Math.max(0, wC - gC.f.gliderFuelServerLeewayMs);
+           ik = this.isClient ? Tk : Math.max(0, Tk - ek.f.gliderFuelServerLeewayMs);
```

#### 1282. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10207` → after: `L10047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10047) · [Before (L10207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10207)

```diff
-         (0, UW.h)(this.MN, CC, zC, ZC)
+         (0, Yt.i)(this.qZ, kk, Fk, Ik)
```

#### 1283. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10211` → after: `L10051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10051) · [Before (L10211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10211)

```diff
-         for (const ZC of this.MN.JR.YH(this.MN.JR.names.Xx)) ZC.og === CC && zC.push(ZC.mH);
+         for (const Ik of this.qZ.MJ.ku(this.qZ.MJ.names.zK)) Ik.le === kk && Fk.push(Ik.Xu);
```

#### 1284. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10218` → after: `L10058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10058) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10218)

```diff
-           const [wC, bC, nC] = fC.pos, oC = QC.get(wC, bC, nC), [qC, FC, WC] = [CC * gC.f.Ig, zC * gC.f.Ig, ZC * gC.f.Ig];
+           const [Tk, ik, yk] = lk.pos, ak = Xk.get(Tk, ik, yk), [qk, Lk, tk] = [kk * ek.f.se, Fk * ek.f.se, Ik * ek.f.se];
```

#### 1285. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10233` → after: `L10073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10073) · [Before (L10233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10233)

```diff
-         null === ZC && (console.error(new Error(`No lifeform type found for lifeformId: ${CC}, defaulting to player eye height`).stack), ZC = "Player");
+         null === Ik && (console.error(new Error(`No lifeform type found for lifeformId: ${kk}, defaulting to player eye height`).stack), Ik = "Player");
```

#### 1286. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10235-L10236` → after: `L10075-L10076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10075-L10076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10075-L10076) · [Before (L10235-L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10235-L10236)

```diff
-           wC = null !== (zC = null === QC || void 0 === QC ? void 0 : QC[1]) && void 0 !== zC ? zC : 0,
-           bC = this.MN.JR.MzC(CC);
+           Tk = null !== (Fk = null === Xk || void 0 === Xk ? void 0 : Xk[1]) && void 0 !== Fk ? Fk : 0,
+           ik = this.qZ.MJ.KFk(kk);
```

#### 1287. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10241` → after: `L10081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10081) · [Before (L10241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10241)

```diff
-         } = (0, cW.e)(ZC), oC = wC + fC * this.qB(CC) * nC;
+         } = (0, ut.c)(Ik), ak = Tk + lk * this.qm(kk) * yk;
```

#### 1288. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10259-L10260` → after: `L10099-L10100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10099-L10100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10099-L10100) · [Before (L10259-L10260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10259-L10260)

```diff
-       wzC(CC, zC) {
-         return GC().subtract(null !== zC && void 0 !== zC ? zC : GC().create(), CC, this.MN.YN)
+       ZFk(kk, Fk) {
+         return xk().subtract(null !== Fk && void 0 !== Fk ? Fk : xk().create(), kk, this.qZ.SZ)
```

#### 1289. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10263` → after: `L10103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10103) · [Before (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10263)

```diff
-         return GC().add(null !== zC && void 0 !== zC ? zC : GC().create(), CC, this.MN.YN)
+         return xk().add(null !== Fk && void 0 !== Fk ? Fk : xk().create(), kk, this.qZ.SZ)
```

#### 1290. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10273` → after: `L10113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10113) · [Before (L10273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10273)

```diff
-         this.Gy(CC, zC, ZC) && (null === (wC = (bC = this.callbacks).justBeforeBlockAdded) || void 0 === wC || wC.call(bC, CC, zC, ZC, QC), "Bookshelf" === this.getMetaInfo(QC).rootName && void 0 === (null === (nC = this.blockDataOwner.getBlockData(CC, zC, ZC)) || void 0 === nC | … [truncated]
+         this.jB(kk, Fk, Ik) && (null === (Tk = (ik = this.callbacks).justBeforeBlockAdded) || void 0 === Tk || Tk.call(ik, kk, Fk, Ik, Xk), "Bookshelf" === this.getMetaInfo(Xk).rootName && void 0 === (null === (yk = this.blockDataOwner.getBlockData(kk, Fk, Ik)) || void 0 === yk | … [truncated]
```

#### 1291. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10284` → after: `L10124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10124) · [Before (L10284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10284)

```diff
-         const QC = this.MN.JR.yCC(CC);
+         const Xk = this.qZ.MJ.FFk(kk);
```

#### 1292. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10286-L10287` → after: `L10126-L10127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10126-L10127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10126-L10127) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10286-L10287)

```diff
-         const wC = this.MN.JR.eT(CC);
-         wC.Np[0] = 0, wC.Np[2] = 0, ZC && (wC.Np[1] > 0 && (wC.Np[1] = 0), wC.Vr[1] > 0 && (wC.Vr[1] = 0), this.MN.JR.MzC(CC).hitInPrevTick = !0);
+         const Tk = this.qZ.MJ.aN(kk);
+         Tk.TH[0] = 0, Tk.TH[2] = 0, Ik && (Tk.TH[1] > 0 && (Tk.TH[1] = 0), Tk.YC[1] > 0 && (Tk.YC[1] = 0), this.qZ.MJ.KFk(kk).hitInPrevTick = !0);
```

#### 1293. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10291` → after: `L10131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10131) · [Before (L10291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10291)

```diff
-         zC[0] = fC.c.clampAbs(zC[0], bC), zC[1] = fC.c.clampAbs(zC[1], bC), zC[2] = fC.c.clampAbs(zC[2], bC), wC.applyImpulse(zC)
+         Fk[0] = lk.e.clampAbs(Fk[0], ik), Fk[1] = lk.e.clampAbs(Fk[1], ik), Fk[2] = lk.e.clampAbs(Fk[2], ik), Tk.applyImpulse(Fk)
```

#### 1294. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10293` → after: `L10133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10133) · [Before (L10293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10293)

```diff
-       SzC(CC) {
+       sFk(kk) {
```

#### 1295. `bundles/bloxd.io/chunks/js/92.js` (Changed code · before: `L10295` → after: `L10135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562caR10135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0470041672eab75b6463e6d6cbd8d374cd65561c...build/bloxd.io/31kiid.1299b0d6#diff-89a1960c4af07210b8f29a3da82ab9c13b693920aa532642d03a4836bef562ca) · [After (L10135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/92.js#L10135) · [Before (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0470041672eab75b6463e6d6cbd8d374cd65561c/bundles/bloxd.io/chunks/js/92.js#L10295)

```diff
-         return null === (zC = this.MN.JR.gzC(CC)) || void 0 === zC ? void 0 : zC.inventory
+         return null === (Fk = this.qZ.MJ.QFk(kk)) || void 0 === Fk ? void 0 : Fk.inventory
```
