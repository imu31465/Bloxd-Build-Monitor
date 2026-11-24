# Changed — Bundle Modifications Report (Part 018 / 140)

- **Updated at**: `2026-11-24T12:43 JST`
- **Part**: `18 / 140` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (fqwnlq.985c8f39 → 31kiid.1299b0d6 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4683 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 2127. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15535` → after: `L15591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15591) · [Before (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15535)

```diff
-       const kS = NS.getState(HS, NS.names.XK);
+       const Zk = lk.getState(Fk, lk.names.Fe);
```

#### 2128. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15538-L15541` → after: `L15594-L15597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15594-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15594-L15597) · [Before (L15538-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15538-L15541)

```diff
-       aS && (0, uS.r)(aS, aS.position.x + gS, aS.position.y + tS, aS.position.z + bS);
-       for (const uS of NS.EY(NS.names.lD))
-         if (uS.fK === HS) {
-           const HS = NS.zB(uS.AY).JF,
+       jk && (0, qk.q)(jk, jk.position.x + Ik, jk.position.y + Xk, jk.position.z + Tk);
+       for (const qk of lk.ku(lk.names.zK))
+         if (qk.le === Fk) {
+           const Fk = lk.ZY(qk.Xu).Im,
```

#### 2129. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15545` → after: `L15601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15601) · [Before (L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15545)

```diff
-           HS[0] += gS, HS[1] += tS, HS[2] += bS, zS(SS, uS.AY, HS[0] - XS, HS[1] - xS, HS[2] - qS)
+           Fk[0] += Ik, Fk[1] += Xk, Fk[2] += Tk, ck(kk, qk.Xu, Fk[0] - ik, Fk[1] - yk, Fk[2] - ak)
```

#### 2130. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15550-L15551` → after: `L15606-L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15606-L15607) · [Before (L15550-L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15550-L15551)

```diff
-       const tS = SS.zSS,
-         bS = SS.JF,
+       const Xk = kk.Mkk,
+         Tk = kk.Im,
```

#### 2131. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15559-L15560` → after: `L15615-L15616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15615-L15616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15615-L15616) · [Before (L15559-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15559-L15560)

```diff
-       const HS = SS.Hj.fY,
-         gS = SS.FQ.qHS(SS.FQ.names.XK),
+       const Fk = kk.Xw.kp,
+         Ik = kk.MJ.PFk(kk.MJ.names.Fe),
```

#### 2132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15587-L15588` → after: `L15643-L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15643-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15643-L15644) · [Before (L15587-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15587-L15588)

```diff
-         const tS = SS.FQ.tHS(gS);
-         return !!tS && (null !== tS.kY ? HS.has(tS.kY) && HS.getActuallyVisible(tS.kY) : AS(tS.mesh, uS))
+         const Xk = kk.MJ.eFk(Ik);
+         return !!Xk && (null !== Xk.Ip ? Fk.has(Xk.Ip) && Fk.getActuallyVisible(Xk.Ip) : bk(Xk.mesh, qk))
```

#### 2133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15594` → after: `L15650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15650) · [Before (L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15594)

```diff
-           tS.add(HS), HS = null === (gS = SS.FQ.THS(HS)) || void 0 === gS ? void 0 : gS.fK
+           Xk.add(Fk), Fk = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le
```

#### 2134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15602` → after: `L15658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15658) · [Before (L15602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15602)

```diff
-           const gS = SS.Hj.lL(),
+           const Ik = kk.Xw.mG(),
```

#### 2135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15605-L15607` → after: `L15661-L15663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15661-L15663) · [Before (L15605-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15605-L15607)

```diff
-           uS = null, SS.Hj.wgS() ? uS = null !== (xS = gS.frustumPlanes) && void 0 !== xS ? xS : null : null !== bS && (XS.d.GetPlanesToRef(bS.getTransformationMatrix(), qS), uS = qS), OS(null === (HS = SS.FQ.THS(SS.camera.YB)) || void 0 === HS ? void 0 : HS.fK);
-           for (const tS of SS.FQ.EY(SS.FQ.names.lD)) ZS(tS.AY) && OS(tS.fK);
-           for (const tS of SS.FQ.EY("lineToEntity")) AS(tS._line, uS) && (OS(tS.AY), OS(tS._targetEId))
+           qk = null, kk.Xw.GIk() ? qk = null !== (yk = Ik.frustumPlanes) && void 0 !== yk ? yk : null : null !== Tk && (ik.b.GetPlanesToRef(Tk.getTransformationMatrix(), ak), qk = ak), vk(null === (Fk = kk.MJ.XIk(kk.camera.aY)) || void 0 === Fk ? void 0 : Fk.le);
+           for (const Xk of kk.MJ.ku(kk.MJ.names.zK)) zk(Xk.Xu) && vk(Xk.le);
+           for (const Xk of kk.MJ.ku("lineToEntity")) bk(Xk._line, qk) && (vk(Xk.Xu), vk(Xk._targetEId))
```

#### 2136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15624` → after: `L15680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15680) · [Before (L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15624)

```diff
-         EQ: function(SS, HS) {
+         mJ: function(kk, Fk) {
```

#### 2137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15627` → after: `L15683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15683) · [Before (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15627)

```diff
-         pE: function(SS, HS) {
+         iG: function(kk, Fk) {
```

#### 2138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15630` → after: `L15686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15686) · [Before (L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15630)

```diff
-         bD: function(HS, gS) {
+         Ix: function(Fk, Ik) {
```

#### 2139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15633` → after: `L15689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15689) · [Before (L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15633)

```diff
-             XS = SS.Zk;
+             ik = kk.SZ;
```

#### 2140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15642` → after: `L15698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15698) · [Before (L15642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15642)

```diff
-               tS._awakeIndex >= 0 || US(SS.FQ.zB(tS.AY), tS.serverPosition, gS) || hS(tS)
+               Xk._awakeIndex >= 0 || Wk(kk.MJ.ZY(Xk.Xu), Xk.serverPosition, Ik) || Vk(Xk)
```

#### 2141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15649` → after: `L15705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15705) · [Before (L15649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15649)

```diff
-               fS = SS.FQ.zB(gS.AY);
+               tk = kk.MJ.ZY(Ik.Xu);
```

#### 2142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15655-L15657` → after: `L15711-L15713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15711-L15713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15711-L15713) · [Before (L15655-L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15655-L15657)

```diff
-             const aS = SS.FQ.tHS(gS.AY);
-             if (!aS || !(null !== (xS = null === (qS = aS.ngS) || void 0 === qS ? void 0 : qS.PgS) && void 0 !== xS ? xS : null === (uS = aS.mesh) || void 0 === uS ? void 0 : uS.isEnabled())) {
-               gS._skipping = !1, SS.FQ.setPosition(gS.AY, IS);
+             const jk = kk.MJ.eFk(Ik.Xu);
+             if (!jk || !(null !== (yk = null === (ak = jk.vIk) || void 0 === ak ? void 0 : ak.EIk) && void 0 !== yk ? yk : null === (qk = jk.mesh) || void 0 === qk ? void 0 : qk.isEnabled())) {
+               Ik._skipping = !1, kk.MJ.setPosition(Ik.Xu, Lk);
```

#### 2143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15660-L15661` → after: `L15716-L15717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15716-L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15716-L15717) · [Before (L15660-L15661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15660-L15661)

```diff
-             if (null !== aS.kY && cS(gS.AY, aS.kY)) {
-               dS(gS, fS.position, tS, HS), SS.FQ.setPosition(gS.AY, IS);
+             if (null !== jk.Ip && Ok(Ik.Xu, jk.Ip)) {
+               Ek(Ik, tk.position, Xk, Fk), kk.MJ.setPosition(Ik.Xu, Lk);
```

#### 2144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15667` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15723) · [Before (L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15667)

```diff
-             (GS > 100 || GS < jS) && bS().copy(KS, IS), SS.FQ.setPosition(gS.AY, KS)
+             (Hk > 100 || Hk < wk) && Tk().copy(ek, Lk), kk.MJ.setPosition(Ik.Xu, ek)
```

#### 2145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15673` → after: `L15729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15729) · [Before (L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15673)

```diff
-   37772: (SS, HS, gS) => {
+   37769: (kk, Fk, Ik) => {
```

#### 2146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15680-L15682` → after: `L15736-L15738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15736-L15738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15736-L15738) · [Before (L15680-L15682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15680-L15682)

```diff
-     var tS = gS(2022),
-       bS = gS(37104);
-     var XS = gS(37774);
+     var Xk = Ik(1844),
+       Tk = Ik(37139);
+     var ik = Ik(37777);
```

#### 2147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15691-L15692` → after: `L15747-L15748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15747-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15747-L15748) · [Before (L15691-L15692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15691-L15692)

```diff
-           kY: null,
-           ngS: null,
+           Ip: null,
+           vIk: null,
```

#### 2148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15701` → after: `L15757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15757) · [Before (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15701)

```diff
-         EQ: function(SS, HS) {
+         mJ: function(kk, Fk) {
```

#### 2149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15704-L15705` → after: `L15760-L15761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15760-L15761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15760-L15761) · [Before (L15704-L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15704-L15705)

```diff
-         bD: function(HS, gS) {
-           for (const tS of gS) SS.FQ.ZSS(tS.AY, "humanoidMesh") || qS(SS, tS, HS), tS.ngS.PgS && ((0, bS.pausesOutOfView)(SS, tS.AY, tS.kY) ? tS._pausedDt += HS : aS(SS, tS, HS))
+         Ix: function(Fk, Ik) {
+           for (const Xk of Ik) kk.MJ.Ukk(Xk.Xu, "humanoidMesh") || ak(kk, Xk, Fk), Xk.vIk.EIk && ((0, Tk.pausesOutOfView)(kk, Xk.Xu, Xk.Ip) ? Xk._pausedDt += Fk : jk(kk, Xk, Fk))
```

#### 2150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15711` → after: `L15767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15767) · [Before (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15711)

```diff
-       const [tS, bS, xS] = (0, XS.getDrawnPosition)(SS, HS.AY, uS), NS = HS._drawnPosition;
+       const [Xk, Tk, yk] = (0, ik.getDrawnPosition)(kk, Fk.Xu, qk), lk = Fk._drawnPosition;
```

#### 2151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15723` → after: `L15779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15779) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15723)

```diff
-       const gS = SS.FQ.getState(HS, "updateWalkingState");
+       const Ik = kk.MJ.getState(Fk, "updateWalkingState");
```

#### 2152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15731-L15732` → after: `L15787-L15788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15787-L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15787-L15788) · [Before (L15731-L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15731-L15732)

```diff
-           const bS = HS.AY,
-             XS = SS.FQ.getState(bS, "humanoidMesh");
+           const Tk = Fk.Xu,
+             ik = kk.MJ.getState(Tk, "humanoidMesh");
```

#### 2153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15735` → after: `L15791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15791) · [Before (L15735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15735)

```diff
-             const HS = SS.FQ.uHS(bS);
+             const Fk = kk.MJ.KFk(Tk);
```

#### 2154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15738-L15740` → after: `L15794-L15796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15794-L15796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15794-L15796) · [Before (L15738-L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15738-L15740)

```diff
-               const XS = null === (gS = SS.FQ.THS(HS)) || void 0 === gS ? void 0 : gS.fK;
-               return null === (tS = null !== (bS = XS ? SS.FQ.uHS(XS) : null) && void 0 !== bS ? bS : SS.FQ.uHS(HS)) || void 0 === tS ? void 0 : tS.speed
-             }(SS, bS)) && void 0 !== xS ? xS : HS.speed, void(fS = null !== (NS = XS.maxWalkingAngleOverride) && void 0 !== NS ? NS : HS.crouching ? .5 : null)
+               const ik = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le;
+               return null === (Xk = null !== (Tk = ik ? kk.MJ.KFk(ik) : null) && void 0 !== Tk ? Tk : kk.MJ.KFk(Fk)) || void 0 === Xk ? void 0 : Xk.speed
+             }(kk, Tk)) && void 0 !== yk ? yk : Fk.speed, void(tk = null !== (lk = ik.maxWalkingAngleOverride) && void 0 !== lk ? lk : Fk.crouching ? .5 : null)
```

#### 2155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15742` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15798) · [Before (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15742)

```diff
-           IS = HS.drawnSpeed, fS = null !== (gS = null === (tS = SS.FQ.getState(bS, "fourLeggedMesh")) || void 0 === tS ? void 0 : tS.maxWalkingAngleOverride) && void 0 !== gS ? gS : null
+           Lk = Fk.drawnSpeed, tk = null !== (Ik = null === (Xk = kk.MJ.getState(Tk, "fourLeggedMesh")) || void 0 === Xk ? void 0 : Xk.maxWalkingAngleOverride) && void 0 !== Ik ? Ik : null
```

#### 2156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15749` → after: `L15805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15805) · [Before (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15749)

```diff
-       const NS = (XS ? tS : 1.3 * xS) * gS / (2 * HS.walkingLegSwingDuration);
+       const lk = (ik ? Xk : 1.3 * yk) * Ik / (2 * Fk.walkingLegSwingDuration);
```

#### 2157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15758` → after: `L15814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15814) · [Before (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15758)

```diff
-       return null !== HS ? HS : (0, tS.h)(.16 * (SS - xS) + .9, .9, 1.4)
+       return null !== Fk ? Fk : (0, Xk.e)(.16 * (kk - yk) + .9, .9, 1.4)
```

#### 2158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15766` → after: `L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15822) · [Before (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15766)

```diff
-   37727: (SS, HS, gS) => {
+   37726: (kk, Fk, Ik) => {
```

#### 2159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15768-L15769` → after: `L15824-L15825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15824-L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15824-L15825) · [Before (L15768-L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15768-L15769)

```diff
-       e: () => NS,
-       i: () => xS
+       d: () => lk,
+       h: () => yk
```

#### 2160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15771` → after: `L15827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15827) · [Before (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15771)

```diff
-     const tS = new(gS(36415).d)(new URL(gS.p + gS.u(47), gS.b), {
+     const Xk = new(Ik(36393).c)(new URL(Ik.p + Ik.u(47), Ik.b), {
```

#### 2161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15775-L15776` → after: `L15831-L15832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15831-L15832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15831-L15832) · [Before (L15775-L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15775-L15776)

```diff
-     var bS = gS(37734),
-       XS = gS(2975);
+     var Tk = Ik(37728),
+       ik = Ik(2764);
```

#### 2162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15795` → after: `L15851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15851) · [Before (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15795)

```diff
-         const SS = await gS.e(206).then((() => gS(41533)));
+         const kk = await Ik.e(206).then((() => Ik(41517)));
```

#### 2163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15809` → after: `L15865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15865) · [Before (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15809)

```diff
-         SS instanceof ErrorEvent || (0, XS.c)("The world couldn't load. Refresh the page to keep playing.")
+         kk instanceof ErrorEvent || (0, ik.b)("The world couldn't load. Refresh the page to keep playing.")
```

#### 2164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15814` → after: `L15870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15870) · [Before (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15814)

```diff
-   37974: (SS, HS, gS) => {
+   37947: (kk, Fk, Ik) => {
```

#### 2165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15816-L15817` → after: `L15872-L15873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15872-L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15872-L15873) · [Before (L15816-L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15816-L15817)

```diff
-       b: () => XS,
-       e: () => xS,
+       d: () => ik,
+       h: () => yk,
```

#### 2166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15821-L15822` → after: `L15876-L15878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15876-L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15876-L15878) · [Before (L15821-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15821-L15822)

```diff
-       n: () => aS,
-       p: () => KS
+       m: () => tk,
+       p: () => jk,
+       t: () => ek
```

#### 2167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15824` → after: `L15880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15880) · [Before (L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15824)

```diff
-     var tS = gS(9386);
+     var Xk = Ik(9219);
```

#### 2168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15846` → after: `L15902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15902) · [Before (L15846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15846)

```diff
-         boxes: tS.m.map(bS),
+         boxes: Xk.o.map(Tk),
```

#### 2169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15851` → after: `L15907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15907) · [Before (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15851)

```diff
-         boxes: tS.s.map(bS),
+         boxes: Xk.u.map(Tk),
```

#### 2170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15864-L15865` → after: `L15920-L15921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15920-L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15920-L15921) · [Before (L15864-L15865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15864-L15865)

```diff
-         inner: uS("innerStairs", tS.p.innerLeft),
-         outer: uS("outerStairs", tS.p.outerLeft)
+         inner: qk("innerStairs", Xk.q.innerLeft),
+         outer: qk("outerStairs", Xk.q.outerLeft)
```

#### 2171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15875` → after: `L15931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15931) · [Before (L15875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15875)

```diff
-           if (null === HS) return SS ? qS : NS;
+           if (null === Fk) return kk ? ak : lk;
```

#### 2172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15880` → after: `L15936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15936) · [Before (L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15880)

```diff
-       return 0 === bS ? tS : {
+       return 0 === Tk ? Xk : {
```

#### 2173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15882` → after: `L15938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15938) · [Before (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15882)

```diff
-         key: `${tS.key}|turn${bS}`,
+         key: `${Xk.key}|turn${Tk}`,
```

#### 2174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15923` → after: `L15979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L15979) · [Before (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15923)

```diff
-         throw new Error(`Box face ${HS} has no axis for uv ${SS}`)
+         throw new Error(`Box face ${Fk} has no axis for uv ${kk}`)
```

#### 2175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15979` → after: `L16035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16035) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15979)

```diff
-   37422: (SS, HS, gS) => {
+   37447: (kk, Fk, Ik) => {
```

#### 2176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15981` → after: `L16037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16037) · [Before (L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15981)

```diff
-       c: () => uS
+       b: () => qk
```

#### 2177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15983` → after: `L16039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16039) · [Before (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15983)

```diff
-     var tS = gS(402),
+     var Xk = Ik(354),
```

#### 2178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15985` → after: `L16041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16041) · [Before (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15985)

```diff
-       XS = gS(37429);
+       ik = Ik(37450);
```

#### 2179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15991` → after: `L16047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16047) · [Before (L15991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15991)

```diff
-       return uS.isCameraDetachedFromPlayer(SS) && null !== (HS = xS.get(SS)) && void 0 !== HS ? HS : null
+       return qk.isCameraDetachedFromPlayer(kk) && null !== (Fk = yk.get(kk)) && void 0 !== Fk ? Fk : null
```

#### 2180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15996` → after: `L16052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16052) · [Before (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L15996)

```diff
-         return !SS.FQ.THS(SS.camera.YB)
+         return !kk.MJ.XIk(kk.camera.aY)
```

#### 2181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16003` → after: `L16059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16059) · [Before (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16003)

```diff
-         const NS = SS.FQ.THS(SS.camera.YB);
+         const lk = kk.MJ.XIk(kk.camera.aY);
```

#### 2182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16009` → after: `L16065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16065) · [Before (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16009)

```diff
-           uS = SS.Hj.qT().aT;
+           qk = kk.Xw.PD().KD;
```

#### 2183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16011-L16012` → after: `L16067-L16068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16067-L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16067-L16068) · [Before (L16011-L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16011-L16012)

```diff
-           followEntity: NS.fK,
-           SgS: NS.SgS,
+           followEntity: lk.le,
+           qIk: lk.qIk,
```

#### 2184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16014` → after: `L16070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16070) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16014)

```diff
-           savedZoomDistance: SS.camera.oB,
+           savedZoomDistance: kk.camera.JY,
```

#### 2185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16016` → after: `L16072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16072) · [Before (L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16016)

```diff
-           facingMode: null !== (gS = XS.facingMode) && void 0 !== gS ? gS : "frozen",
+           facingMode: null !== (Ik = ik.facingMode) && void 0 !== Ik ? Ik : "frozen",
```

#### 2186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16019-L16021` → after: `L16075-L16077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16075-L16077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16075-L16077) · [Before (L16019-L16021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16019-L16021)

```diff
-         }), SS.camera.oB = 0, SS.camera.lB = 0, uS[0] = 0, uS[1] = 0, SS.FQ.uHS(SS.HA).heading = qS.heading, SS.FQ.pY(SS.camera.YB, SS.FQ.names.lD);
-         const IS = null !== (bS = XS.position) && void 0 !== bS ? bS : SS.camera.lF();
-         return SS.FQ.setPosition(SS.camera.YB, [IS[0], IS[1], IS[2]]), tS(SS), !0
+         }), kk.camera.JY = 0, kk.camera.VY = 0, qk[0] = 0, qk[1] = 0, kk.MJ.KFk(kk.oR).heading = ak.heading, kk.MJ.Eu(kk.camera.aY, kk.MJ.names.zK);
+         const Lk = null !== (Tk = ik.position) && void 0 !== Tk ? Tk : kk.camera.Jm();
+         return kk.MJ.setPosition(kk.camera.aY, [Lk[0], Lk[1], Lk[2]]), Xk(kk), !0
```

#### 2187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16026` → after: `L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16082) · [Before (L16026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16026)

```diff
-         null === (HS = SS.FQ.AHS(SS.HA)) || void 0 === HS || HS.eqS()
+         null === (Fk = kk.MJ.BFk(kk.oR)) || void 0 === Fk || Fk.Kqk()
```

#### 2188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16036` → after: `L16092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16092) · [Before (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16036)

```diff
-         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.facing.heading) && void 0 !== HS ? HS : SS.camera.heading
+         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.facing.heading) && void 0 !== Fk ? Fk : kk.camera.heading
```

#### 2189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16041-L16042` → after: `L16097-L16098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16097-L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16097-L16098) · [Before (L16041-L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16041-L16042)

```diff
-         if (!gS) return bS().copy(HS, SS.camera.uR());
-         const tS = (0, XS.d)(gS.facing.heading, gS.facing.pitch);
+         if (!Ik) return Tk().copy(Fk, kk.camera.Am());
+         const Xk = (0, ik.b)(Ik.facing.heading, Ik.facing.pitch);
```

#### 2190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16053-L16054` → after: `L16109-L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16109-L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16109-L16110) · [Before (L16053-L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16053-L16054)

```diff
-         SS.FQ.VY(SS.camera.YB, SS.FQ.names.lD, {
-           fK: gS.followEntity,
+         kk.MJ.Tu(kk.camera.aY, kk.MJ.names.zK, {
+           le: Ik.followEntity,
```

#### 2191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16056-L16058` → after: `L16112-L16114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16112-L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16112-L16114) · [Before (L16056-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16056-L16058)

```diff
-           SgS: gS.SgS
-         }), SS.camera.oB = gS.savedZoomDistance, SS.camera.lB = gS.savedZoomDistance;
-         const bS = SS.Hj.qT().aT;
+           qIk: Ik.qIk
+         }), kk.camera.JY = Ik.savedZoomDistance, kk.camera.VY = Ik.savedZoomDistance;
+         const Tk = kk.Xw.PD().KD;
```

#### 2192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16062` → after: `L16118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16118) · [Before (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16062)

```diff
-         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.savedZoomDistance) && void 0 !== HS ? HS : 0
+         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.savedZoomDistance) && void 0 !== Fk ? Fk : 0
```

#### 2193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16065` → after: `L16121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16121) · [Before (L16065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16065)

```diff
-         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.savedRigShift) && void 0 !== HS ? HS : NS
+         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.savedRigShift) && void 0 !== Fk ? Fk : lk
```

#### 2194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16068-L16069` → after: `L16124-L16125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16124-L16125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16124-L16125) · [Before (L16068-L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16068-L16069)

```diff
-           tS = gS && SS.FQ.zB(gS.followEntity);
-         return !!tS && (gS.SgS ? gS.SgS(HS, !0, gS.followOffset) : bS().copy(HS, gS.followOffset), bS().add(HS, tS.JF, HS), !0)
+           Xk = Ik && kk.MJ.ZY(Ik.followEntity);
+         return !!Xk && (Ik.qIk ? Ik.qIk(Fk, !0, Ik.followOffset) : Tk().copy(Fk, Ik.followOffset), Tk().add(Fk, Xk.Im, Fk), !0)
```

#### 2195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16078` → after: `L16134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16134) · [Before (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16078)

```diff
-         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.facing.pitch) && void 0 !== HS ? HS : SS.camera.pitch
+         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.facing.pitch) && void 0 !== Fk ? Fk : kk.camera.pitch
```

#### 2196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16082` → after: `L16138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16138) · [Before (L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16082)

```diff
-         return kS(SS) ? fS(SS, HS) : bS().copy(HS, SS.camera.uR())
+         return Zk(kk) ? tk(kk, Fk) : Tk().copy(Fk, kk.camera.Am())
```

#### 2197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16091` → after: `L16147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16147) · [Before (L16091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16091)

```diff
-         HS(SS) ? SS.FQ.setPosition(SS.camera.YB, tS) : gS(SS, {
+         Fk(kk) ? kk.MJ.setPosition(kk.camera.aY, Xk) : Ik(kk, {
```

#### 2198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16096` → after: `L16152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16152) · [Before (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16096)

```diff
-         const qS = SS.FQ.uHS(SS.HA);
+         const ak = kk.MJ.KFk(kk.oR);
```

#### 2199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16101` → after: `L16157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16157) · [Before (L16101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16101)

```diff
-   38476: (SS, HS, gS) => {
+   38422: (kk, Fk, Ik) => {
```

#### 2200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16105-L16106` → after: `L16161-L16162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16161-L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16161-L16162) · [Before (L16105-L16106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16105-L16106)

```diff
-     var tS = gS(38256),
-       bS = gS(402),
+     var Xk = Ik(38213),
+       Tk = Ik(354),
```

#### 2201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16108-L16116` → after: `L16164-L16172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16164-L16172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16164-L16172) · [Before (L16108-L16116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16108-L16116)

```diff
-       xS = gS(198),
-       NS = gS(38484),
-       qS = gS(38286),
-       uS = gS(36771),
-       IS = gS(36773),
-       fS = gS(3811),
-       kS = gS(3870),
-       aS = gS(665),
-       KS = gS(4356);
+       yk = Ik(187),
+       lk = Ik(38424),
+       ak = Ik(38252),
+       qk = Ik(36764),
+       Lk = Ik(36772),
+       tk = Ik(3631),
+       Zk = Ik(3702),
+       jk = Ik(614),
+       ek = Ik(4210);
```

#### 2202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16140` → after: `L16196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16196) · [Before (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16140)

```diff
-           blendMode: KS.g.Standard
+           blendMode: ek.d.Standard
```

#### 2203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16143` → after: `L16199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16199) · [Before (L16143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16143)

```diff
-           SS.playParticleEffect(HS, NS ? gS : null)
+           kk.playParticleEffect(Fk, lk ? Ik : null)
```

#### 2204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16205-L16207` → after: `L16261-L16263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16261-L16263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16261-L16263) · [Before (L16205-L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16205-L16207)

```diff
-     var nS = gS(395),
-       PS = gS(672),
-       QS = gS(387);
+     var xk = Ik(346),
+       Pk = Ik(621),
+       Kk = Ik(337);
```

#### 2205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16234` → after: `L16290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16290) · [Before (L16234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16234)

```diff
-         Dk: 2.5,
+         sZ: 2.5,
```

#### 2206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16265` → after: `L16321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16321) · [Before (L16265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16265)

```diff
-           blendMode: KS.g.OneOne
+           blendMode: ek.d.OneOne
```

#### 2207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16384` → after: `L16440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16440) · [Before (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16384)

```diff
-           Dk: 0,
+           sZ: 0,
```

#### 2208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16402` → after: `L16458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16458) · [Before (L16402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16402)

```diff
-           Dk: 0,
+           sZ: 0,
```

#### 2209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16422` → after: `L16478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16478) · [Before (L16422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16422)

```diff
-           Dk: 0,
+           sZ: 0,
```

#### 2210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16481` → after: `L16537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16537) · [Before (L16481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16481)

```diff
-         ...Object.fromEntries(PS.v.map((SS => [(0, QS.Qb)(SS), {
+         ...Object.fromEntries(Pk.s.map((kk => [(0, Kk.ic)(kk), {
```

#### 2211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16601` → after: `L16657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16657) · [Before (L16601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16601)

```diff
-         ...Object.fromEntries(nS.f.map((SS => [SS, cS]))),
+         ...Object.fromEntries(xk.k.map((kk => [kk, Ok]))),
```

#### 2212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16606` → after: `L16662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16662) · [Before (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16606)

```diff
-           Dk: 0,
+           sZ: 0,
```

#### 2213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16615` → after: `L16671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16671) · [Before (L16615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16615)

```diff
-           Dk: 0,
+           sZ: 0,
```

#### 2214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16641` → after: `L16697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16697) · [Before (L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16641)

```diff
-           Dk: .05,
+           sZ: .05,
```

#### 2215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16657` → after: `L16713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16713) · [Before (L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16657)

```diff
-         this.bloxd = SS, this.eId = HS, this.qk = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.qk = SS.qk, this.type = (0, tS.h)(gS).item, this.spawnTime = Date.now()
+         this.bloxd = kk, this.eId = Fk, this.qZ = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.qZ = kk.qZ, this.type = (0, Xk.i)(Ik).item, this.spawnTime = Date.now()
```

#### 2216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16661` → after: `L16717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16717) · [Before (L16661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16661)

```diff
-         this.qk.FQ.deleteEntity(this.eId)
+         this.qZ.MJ.deleteEntity(this.eId)
```

#### 2217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16668` → after: `L16724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16724) · [Before (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16668)

```diff
-           qk: HS
+           qZ: Fk
```

#### 2218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16670` → after: `L16726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16726) · [Before (L16670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16670)

```diff
-           FQ: gS
+           MJ: Ik
```

#### 2219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16675` → after: `L16731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16731) · [Before (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16675)

```diff
-         gS.add([SS.x, SS.y, SS.z], bS, XS, null, null, !1, !1, this.eId), gS.VY(this.eId, gS.names.smoothToServerPos);
+         Ik.add([kk.x, kk.y, kk.z], Tk, ik, null, null, !1, !1, this.eId), Ik.Tu(this.eId, Ik.names.smoothToServerPos);
```

#### 2220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16678` → after: `L16734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16734) · [Before (L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16678)

```diff
-         } = (0, tS.h)(SS.type);
+         } = (0, Xk.i)(kk.type);
```

#### 2221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16680-L16681` → after: `L16736-L16737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16736-L16737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16736-L16737) · [Before (L16680-L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16680-L16681)

```diff
-           if (xS === HS.OSS) return;
-           const SS = HS.rY[HS.HA][xS];
+           if (yk === Fk.Nkk) return;
+           const kk = Fk.xR[Fk.oR][yk];
```

#### 2222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16684` → after: `L16740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16740) · [Before (L16684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16684)

```diff
-         gS.VY(this.eId, "doOnFirstTick", {
+         Ik.Tu(this.eId, "doOnFirstTick", {
```

#### 2223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16686` → after: `L16742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16742) · [Before (L16686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16686)

```diff
-             gS.VY(this.eId, "hidingMeshManager", {
+             Ik.Tu(this.eId, "hidingMeshManager", {
```

#### 2224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16688` → after: `L16744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16744) · [Before (L16688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16688)

```diff
-                 gS.VY(this.eId, gS.names.mesh, {
+                 Ik.Tu(this.eId, Ik.names.mesh, {
```

#### 2225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16690` → after: `L16746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16746) · [Before (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16690)

```diff
-                   UxS: !1
+                   Dyk: !1
```

#### 2226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16694` → after: `L16750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16750) · [Before (L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16694)

```diff
-                 gS.pY(this.eId, gS.names.mesh)
+                 Ik.Eu(this.eId, Ik.names.mesh)
```

#### 2227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16705` → after: `L16761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16761) · [Before (L16705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16705)

```diff
-           qk: tS
+           qZ: Xk
```

#### 2228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16707-L16708` → after: `L16763-L16764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16763-L16764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16763-L16764) · [Before (L16707-L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16707-L16708)

```diff
-           FQ: bS
-         } = tS, KS = tS.HA, nS = this.getSpawnPos(KS), PS = {
+           MJ: Tk
+         } = Xk, ek = Xk.oR, xk = this.getSpawnPos(ek), Pk = {
```

#### 2229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16714` → after: `L16770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16770) · [Before (L16714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16714)

```diff
-               } = vS[this.type], qS = bS.lC(this.eId), nS = this.bloxd.getClosestSolidBlock(qS), [PS, QS, DS] = qS;
+               } = nk[this.type], ak = Tk.OJ(this.eId), xk = this.bloxd.getClosestSolidBlock(ak), [Pk, Kk, Qk] = ak;
```

#### 2230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16718-L16721` → after: `L16774-L16777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16774-L16777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16774-L16777) · [Before (L16718-L16721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16718-L16721)

```diff
-                 return void(0, fS.sendColyMessage)(kS.Ig, {
-                   kx: this.eId,
-                   qI: qS,
-                   uI: SS
+                 return void(0, tk.sendColyMessage)(Zk.fg, {
+                   ty: this.eId,
+                   aL: ak,
+                   qL: kk
```

#### 2231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16724` → after: `L16780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16780) · [Before (L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16724)

```diff
-               const wS = null !== (SS = NS.type) && void 0 !== SS ? SS : jS.Boom;
+               const sk = null !== (kk = lk.type) && void 0 !== kk ? kk : wk.Boom;
```

#### 2232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16726` → after: `L16782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16782) · [Before (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16726)

```diff
-               const hS = bS.lC(KS),
+               const Vk = Tk.OJ(ek),
```

#### 2233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16731` → after: `L16787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16787) · [Before (L16731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16731)

```diff
-               XS().BI(hS, ZS) < JS + 1 && uS.e.play((0, IS.e)("cannonFire"), null !== (dS = null !== (cS = NS.volume) && void 0 !== cS ? cS : vS[this.type].volume) && void 0 !== dS ? dS : 1, ZS, JS, OS).rate(.8 + .2 * Math.random());
+               ik().BL(Vk, zk) < Sk + 1 && qk.d.play((0, Lk.f)("cannonFire"), null !== (Ek = null !== (Ok = lk.volume) && void 0 !== Ok ? Ok : nk[this.type].volume) && void 0 !== Ek ? Ek : 1, zk, Sk, vk).rate(.8 + .2 * Math.random());
```

#### 2234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16735` → after: `L16791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16791) · [Before (L16735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16735)

```diff
-                 if (XS().set(GS, 0, 0, 0), qS && !aS.j.includes(gS) && "Mesh" !== gS) return {
+                 if (ik().set(Hk, 0, 0, 0), ak && !jk.m.includes(Ik) && "Mesh" !== Ik) return {
```

#### 2235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16739` → after: `L16795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16795) · [Before (L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16739)

```diff
-                 const uS = SS.bloxd.isClient ? [...SS.FQ.lC(HS)] : SS.room.api.lC(HS);
+                 const qk = kk.bloxd.isClient ? [...kk.MJ.OJ(Fk)] : kk.room.api.OJ(Fk);
```

#### 2236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16745` → after: `L16801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16801) · [Before (L16745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16745)

```diff
-                   const bS = SS.FQ.vW(HS);
+                   const Tk = kk.MJ.aN(Fk);
```

#### 2237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16747` → after: `L16803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16803) · [Before (L16747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16747)

```diff
-                   bS && (XS = bS.rf.vec[1] / 2);
+                   Tk && (ik = Tk.kZ.vec[1] / 2);
```

#### 2238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16754` → after: `L16810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16810) · [Before (L16754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16754)

```diff
-                   return tS >= NS ? xS : XS + (tS - gS) / (NS - gS) * (xS - XS)
+                   return Xk >= lk ? yk : ik + (Xk - Ik) / (lk - Ik) * (yk - ik)
```

#### 2239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16764-L16768` → after: `L16820-L16824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16820-L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16820-L16824) · [Before (L16764-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16764-L16768)

```diff
-               }(this.qk, KS, "Player", wS, null !== (HS = null === (gS = NS.knockbackFactor) || void 0 === gS ? void 0 : gS.terrain) && void 0 !== HS ? HS : 1, 2 * NS.power, ZS, NS.ignoreProjectiles);
-               XS().scale(LS, LS, 1 / xS.e.clientTicksPerSecond), bS.vW(tS.HA).applyImpulse([LS[0], LS[1], LS[2]]), (0, fS.sendColyMessage)(kS.Ig, {
-                 kx: this.eId,
-                 qI: qS,
-                 uI: LS
+               }(this.qZ, ek, "Player", sk, null !== (Fk = null === (Ik = lk.knockbackFactor) || void 0 === Ik ? void 0 : Ik.terrain) && void 0 !== Fk ? Fk : 1, 2 * lk.power, zk, lk.ignoreProjectiles);
+               ik().scale(pk, pk, 1 / yk.f.clientTicksPerSecond), Tk.aN(Xk.oR).applyImpulse([pk[0], pk[1], pk[2]]), (0, tk.sendColyMessage)(Zk.fg, {
+                 ty: this.eId,
+                 aL: ak,
+                 qL: pk
```

#### 2240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16774` → after: `L16830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16830) · [Before (L16774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16774)

```diff
-           bS.VY(this.eId, "doOnFirstTick", {
+           Tk.Tu(this.eId, "doOnFirstTick", {
```

#### 2241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16783-L16788` → after: `L16839-L16844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16839-L16844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16839-L16844) · [Before (L16783-L16788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16783-L16788)

```diff
-         this.eId = bS.add(nS, DS, wS, null, null, !0, !1).toString(), (0, fS.sendColyMessage)(kS.Kg, {
-             kx: this.eId,
-             Kx: this.type,
-             jx: SS,
-             Gx: this.qk.camera.YM
-           }), uS.e.play((0, IS.e)("bow"), .6 * (null !== (HS = vS[this.type].volume) && void 0 !== HS ? HS : 1)).rate(.6 + .2 * Math.random()), bS.VY(this.eId, "doOnFirstTick", {
+         this.eId = Tk.add(xk, Qk, sk, null, null, !0, !1).toString(), (0, tk.sendColyMessage)(Zk.jg, {
+             ty: this.eId,
+             Zy: this.type,
+             jy: kk,
+             ey: this.qZ.camera.RY
+           }), qk.d.play((0, Lk.f)("bow"), .6 * (null !== (Fk = nk[this.type].volume) && void 0 !== Fk ? Fk : 1)).rate(.6 + .2 * Math.random()), Tk.Tu(this.eId, "doOnFirstTick", {
```

#### 2242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16790` → after: `L16846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16846) · [Before (L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16790)

```diff
-               bS.VY(this.eId, "hidingMeshManager", {
+               Tk.Tu(this.eId, "hidingMeshManager", {
```

#### 2243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16792` → after: `L16848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16848) · [Before (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16792)

```diff
-                   bS.VY(this.eId, bS.names.mesh, {
+                   Tk.Tu(this.eId, Tk.names.mesh, {
```

#### 2244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16794` → after: `L16850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16850) · [Before (L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16794)

```diff
-                     UxS: !0
+                     Dyk: !0
```

#### 2245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16798` → after: `L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16854) · [Before (L16798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16798)

```diff
-                   bS.pY(this.eId, bS.names.mesh)
+                   Tk.Eu(this.eId, Tk.names.mesh)
```

#### 2246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16806-L16807` → after: `L16862-L16863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16862-L16863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16862-L16863) · [Before (L16806-L16807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16806-L16807)

```diff
-             XS().sqrDist(bS.lC(this.eId), bS.lC(KS)) > 1e4 && ((0, fS.sendColyMessage)(kS.Lg, {
-               kx: this.eId
+             ik().sqrDist(Tk.OJ(this.eId), Tk.OJ(ek)) > 1e4 && ((0, tk.sendColyMessage)(Zk.lg, {
+               ty: this.eId
```

#### 2247. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16810-L16811` → after: `L16866-L16867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16866-L16867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16866-L16867) · [Before (L16810-L16811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16810-L16811)

```diff
-             (0, fS.sendColyMessage)(kS.Lg, {
-               kx: this.eId
+             (0, tk.sendColyMessage)(Zk.lg, {
+               ty: this.eId
```

#### 2248. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16813` → after: `L16869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16869) · [Before (L16813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16813)

```diff
-           }), null !== (gS = vS[this.type].autoRemoveAfterTime) && void 0 !== gS ? gS : 6e4, this.eId), bS.VY(this.eId, "collideTerrain", {
+           }), null !== (Ik = nk[this.type].autoRemoveAfterTime) && void 0 !== Ik ? Ik : 6e4, this.eId), Tk.Tu(this.eId, "collideTerrain", {
```

#### 2249. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16816` → after: `L16872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16872) · [Before (L16816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16816)

```diff
-               (0, qS.lxS)(bS.getState(this.eId, "physics"), bS.zB(this.eId)), bS.NNS(this.eId, bS.zB(this.eId));
+               (0, ak.llk)(Tk.getState(this.eId, "physics"), Tk.ZY(this.eId)), Tk.xlk(this.eId, Tk.ZY(this.eId));
```

#### 2250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16818-L16819` → after: `L16874-L16875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16874-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16874-L16875) · [Before (L16818-L16819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16818-L16819)

```diff
-                 tS = bS.vW(this.eId);
-               XS().length(tS.xG) > .1 && gS && ((0, NS.g)(this.qk, this.eId), !bS.ZSS(this.eId, "collideTerrain")) || (null === (SS = (HS = PS[this.type]).onHitTerrain) || void 0 === SS || SS.call(HS), gS && QS())
+                 Xk = Tk.aN(this.eId);
+               ik().length(Xk.TH) > .1 && Ik && ((0, lk.f)(this.qZ, this.eId), !Tk.Ukk(this.eId, "collideTerrain")) || (null === (kk = (Fk = Pk[this.type]).onHitTerrain) || void 0 === kk || kk.call(Fk), Ik && Kk())
```

#### 2251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16821` → after: `L16877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16877) · [Before (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16821)

```diff
-           }), bS.VY(this.eId, "collideEntitiesProjectile", {
+           }), Tk.Tu(this.eId, "collideEntitiesProjectile", {
```

#### 2252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16828-L16829` → after: `L16884-L16885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16884-L16885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16884-L16885) · [Before (L16828-L16829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16828-L16829)

```diff
-             const IS = SS.FQ.vW(HS),
-               fS = XS().copy(IS.xG, tS),
+             const Lk = kk.MJ.aN(Fk),
+               tk = ik().copy(Lk.TH, Xk),
```

#### 2253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16831-L16832` → after: `L16887-L16888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16887-L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16887-L16888) · [Before (L16831-L16832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16831-L16832)

```diff
-             XS().normalize(fS, fS), XS().scale(fS, fS, kS.speed * qS), IS.gravityMultiplier = (null !== (bS = kS.gravityMult) && void 0 !== bS ? bS : 1) * uS, IS.gu = .02, IS.Dk = (null !== (xS = kS.Dk) && void 0 !== xS ? xS : .1) * IS.gu, IS.fluidDrag = null !== (NS = kS.fluidDr … [truncated]
-           }(this.qk, this.eId, this.type, this.qk.camera.YM)
+             ik().normalize(tk, tk), ik().scale(tk, tk, Zk.speed * ak), Lk.gravityMultiplier = (null !== (Tk = Zk.gravityMult) && void 0 !== Tk ? Tk : 1) * qk, Lk.Xq = .02, Lk.sZ = (null !== (yk = Zk.sZ) && void 0 !== yk ? yk : .1) * Lk.Xq, Lk.fluidDrag = null !== (lk = Zk.fluidDr … [truncated]
+           }(this.qZ, this.eId, this.type, this.qZ.camera.RY)
```

#### 2254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16836` → after: `L16892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16892) · [Before (L16836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16836)

```diff
-         if ("torso" === vS[this.type].spawnOffset) HS = XS().clone(this.qk.FQ.lC(SS)), HS[1] += xS.e.pG / 2;
+         if ("torso" === nk[this.type].spawnOffset) Fk = ik().clone(this.qZ.MJ.OJ(kk)), Fk[1] += yk.f.NH / 2;
```

#### 2255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16843-L16844` → after: `L16899-L16900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16899-L16900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16899-L16900) · [Before (L16843-L16844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16843-L16844)

```diff
-           width: null !== (SS = null !== (HS = null === (gS = vS[this.type]) || void 0 === gS ? void 0 : gS.collisionWidth) && void 0 !== HS ? HS : null === (tS = vS[this.type]) || void 0 === tS ? void 0 : tS.collisionHeight) && void 0 !== SS ? SS : .1,
-           height: null !== (bS = null !== (XS = null === (xS = vS[this.type]) || void 0 === xS ? void 0 : xS.collisionHeight) && void 0 !== XS ? XS : null === (NS = vS[this.type]) || void 0 === NS ? void 0 : NS.collisionWidth) && void 0 !== bS ? bS : .1
+           width: null !== (kk = null !== (Fk = null === (Ik = nk[this.type]) || void 0 === Ik ? void 0 : Ik.collisionWidth) && void 0 !== Fk ? Fk : null === (Xk = nk[this.type]) || void 0 === Xk ? void 0 : Xk.collisionHeight) && void 0 !== kk ? kk : .1,
+           height: null !== (Tk = null !== (ik = null === (yk = nk[this.type]) || void 0 === yk ? void 0 : yk.collisionHeight) && void 0 !== ik ? ik : null === (lk = nk[this.type]) || void 0 === lk ? void 0 : lk.collisionWidth) && void 0 !== Tk ? Tk : .1
```

#### 2256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16849` → after: `L16905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16905) · [Before (L16849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16849)

```diff
-   37417: (SS, HS, gS) => {
+   37435: (kk, Fk, Ik) => {
```

#### 2257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16852-L16854` → after: `L16908-L16910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16908-L16910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16908-L16910) · [Before (L16852-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16852-L16854)

```diff
-       h: () => xS,
-       l: () => bS,
-       p: () => NS
+       e: () => yk,
+       g: () => Tk,
+       k: () => lk
```

#### 2258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16856` → after: `L16912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16912) · [Before (L16856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16856)

```diff
-     var tS = gS(2910);
+     var Xk = Ik(2700);
```

#### 2259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16861` → after: `L16917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16917) · [Before (L16861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16861)

```diff
-       return null !== (HS = null === (gS = bS.rY[bS.HA][SS]) || void 0 === gS ? void 0 : gS.canAttack) && void 0 !== HS && HS || xS(SS)
+       return null !== (Fk = null === (Ik = Tk.xR[Tk.oR][kk]) || void 0 === Ik ? void 0 : Ik.canAttack) && void 0 !== Fk && Fk || yk(kk)
```

#### 2260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16867` → after: `L16923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16923) · [Before (L16867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16867)

```diff
-       return null !== (HS = null === (gS = bS.rY[bS.HA][SS]) || void 0 === gS ? void 0 : gS.interactionPrompt) && void 0 !== HS ? HS : null
+       return null !== (Fk = null === (Ik = Tk.xR[Tk.oR][kk]) || void 0 === Ik ? void 0 : Ik.interactionPrompt) && void 0 !== Fk ? Fk : null
```

#### 2261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16874` → after: `L16930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16930) · [Before (L16874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16874)

```diff
-       return null !== (HS = null === (gS = bS.rY[bS.HA][SS]) || void 0 === gS ? void 0 : gS.interactable) && void 0 !== HS && HS
+       return null !== (Fk = null === (Ik = Tk.xR[Tk.oR][kk]) || void 0 === Ik ? void 0 : Ik.interactable) && void 0 !== Fk && Fk
```

#### 2262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16881` → after: `L16937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16937) · [Before (L16881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16881)

```diff
-             HS = SS.rY[SS.HA];
+             Fk = kk.xR[kk.oR];
```

#### 2263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16888` → after: `L16944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16944) · [Before (L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16888)

```diff
-       const XS = null !== SS && void 0 !== SS ? SS : tS.g.localPlayerPickActionHelper;
+       const ik = null !== kk && void 0 !== kk ? kk : Xk.f.localPlayerPickActionHelper;
```

#### 2264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16891-L16892` → after: `L16947-L16948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16947-L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16947-L16948) · [Before (L16891-L16892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16891-L16892)

```diff
-         qS = null !== (gS = XS.getPickEntityResult(null !== (bS = null !== HS && void 0 !== HS ? HS : NS.cSS) && void 0 !== bS ? bS : NS.camera.uR())) && void 0 !== gS ? gS : null;
-       return xS(qS) ? qS : null
+         ak = null !== (Ik = ik.getPickEntityResult(null !== (Tk = null !== Fk && void 0 !== Fk ? Fk : lk.Wkk) && void 0 !== Tk ? Tk : lk.camera.Am())) && void 0 !== Ik ? Ik : null;
+       return yk(ak) ? ak : null
```

#### 2265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16895` → after: `L16951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16951) · [Before (L16895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16895)

```diff
-   37176: (SS, HS, gS) => {
+   37217: (kk, Fk, Ik) => {
```

#### 2266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16897` → after: `L16953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16953) · [Before (L16897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16897)

```diff
-       d: () => IS
+       b: () => Lk
```

#### 2267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16899-L16901` → after: `L16955-L16957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16955-L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16955-L16957) · [Before (L16899-L16901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16899-L16901)

```diff
-     var tS = gS(4356),
-       bS = gS(37171),
-       XS = gS(37181);
+     var Xk = Ik(4210),
+       Tk = Ik(37215),
+       ik = Ik(37224);
```

#### 2268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16905` → after: `L16961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16961) · [Before (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16905)

```diff
-         this.qk = SS, this.now = HS, this.animations = new Map, this.warned = new Set
+         this.qZ = kk, this.now = Fk, this.animations = new Map, this.warned = new Set
```

#### 2269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16914` → after: `L16970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16970) · [Before (L16914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16914)

```diff
-         "clip" === (null === fS || void 0 === fS ? void 0 : fS.kind) && (null === IS || void 0 === IS || null === (kS = IS.getRigController()) || void 0 === kS || kS.stopClip(fS.bX));
+         "clip" === (null === tk || void 0 === tk ? void 0 : tk.kind) && (null === Lk || void 0 === Lk || null === (Zk = Lk.getRigController()) || void 0 === Zk || Zk.stopClip(tk.rT));
```

#### 2270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16916-L16917` → after: `L16972-L16973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16972-L16973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16972-L16973) · [Before (L16916-L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16916-L16917)

```diff
-           gX: tS,
-           tX: Math.max(XS, 0),
+           mT: Xk,
+           hT: Math.max(ik, 0),
```

#### 2271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16925` → after: `L16981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16981) · [Before (L16925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16925)

```diff
-         if (null === IS || void 0 === IS || IS.stopAnimation(HS), null === qS || HS !== bS.g.Custom) return void this.forget(SS, HS);
+         if (null === Lk || void 0 === Lk || Lk.stopAnimation(Fk), null === ak || Fk !== Tk.c.Custom) return void this.forget(kk, Fk);
```

#### 2272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16928-L16929` → after: `L16984-L16985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16984-L16985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16984-L16985) · [Before (L16928-L16929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16928-L16929)

```diff
-           bX: qS,
-           XX: Math.max(uS, 0),
+           rT: ak,
+           DT: Math.max(qk, 0),
```

#### 2273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16933` → after: `L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L16989) · [Before (L16933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16933)

```diff
-         const jS = null !== (NS = null === IS || void 0 === IS ? void 0 : IS.getRigController()) && void 0 !== NS ? NS : null;
+         const wk = null !== (lk = null === Lk || void 0 === Lk ? void 0 : Lk.getRigController()) && void 0 !== lk ? lk : null;
```

#### 2274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16944-L16945` → after: `L17000-L17001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17000-L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17000-L17001) · [Before (L16944-L16945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16944-L16945)

```diff
-             tX: NS,
-             gX: qS,
+             hT: lk,
+             mT: ak,
```

#### 2275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16947` → after: `L17003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17003) · [Before (L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16947)

```diff
-           } = xS, IS = (0, XS.c)(gS, qS, tS - uS, NS);
+           } = yk, Lk = (0, ik.e)(Ik, ak, Xk - qk, lk);
```

#### 2276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16953` → after: `L17009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17009) · [Before (L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16953)

```diff
-         const tS = null === (gS = this.animations.get(SS)) || void 0 === gS ? void 0 : gS.get(bS.g.Custom);
+         const Xk = null === (Ik = this.animations.get(kk)) || void 0 === Ik ? void 0 : Ik.get(Tk.c.Custom);
```

#### 2277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16958` → after: `L17014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17014) · [Before (L16958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16958)

```diff
-         return [...null !== (HS = null === (gS = this.animations.get(SS)) || void 0 === gS ? void 0 : gS.keys()) && void 0 !== HS ? HS : []]
+         return [...null !== (Fk = null === (Ik = this.animations.get(kk)) || void 0 === Ik ? void 0 : Ik.keys()) && void 0 !== Fk ? Fk : []]
```

#### 2278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16962` → after: `L17018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17018) · [Before (L16962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16962)

```diff
-         for (const [tS, bS] of null !== (gS = this.animations.get(SS)) && void 0 !== gS ? gS : []) {
+         for (const [Xk, Tk] of null !== (Ik = this.animations.get(kk)) && void 0 !== Ik ? Ik : []) {
```

#### 2279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16966` → after: `L17022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17022) · [Before (L16966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16966)

```diff
-             tX: bS.tX
+             hT: Tk.hT
```

#### 2280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16968-L16969` → after: `L17024-L17025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17024-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17024-L17025) · [Before (L16968-L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16968-L16969)

```diff
-             bX: bS.bX,
-             tX: bS.tX
+             rT: Tk.rT,
+             hT: Tk.hT
```

#### 2281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16982` → after: `L17038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17038) · [Before (L16982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16982)

```diff
-             if (null === tS || void 0 === tS || tS.stopAnimation(HS), "clip" === bS.kind) null === tS || void 0 === tS || null === (SS = tS.getRigController()) || void 0 === SS || SS.stopClip(bS.bX)
+             if (null === Xk || void 0 === Xk || Xk.stopAnimation(Fk), "clip" === Tk.kind) null === Xk || void 0 === Xk || null === (kk = Xk.getRigController()) || void 0 === kk || kk.stopClip(Tk.rT)
```

#### 2282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16989` → after: `L17045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17045) · [Before (L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L16989)

```diff
-         return null !== (HS = this.qk.FQ.getState(SS, "animator")) && void 0 !== HS ? HS : null
+         return null !== (Fk = this.qZ.MJ.getState(kk, "animator")) && void 0 !== Fk ? Fk : null
```

#### 2283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17001-L17004` → after: `L17057-L17060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17057-L17060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17057-L17060) · [Before (L17001-L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17001-L17004)

```diff
-           bX: gS,
-           gX: tS,
-           tX: bS,
-           XX: XS,
+           rT: Ik,
+           mT: Xk,
+           hT: Tk,
+           DT: ik,
```

#### 2284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17007` → after: `L17063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17063) · [Before (L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17007)

```diff
-         "noClip" === qS ? this.warnOnce(`${gS}|${uS}`, `Can't play "${gS}": ${uS} has no clip by that name`) : "ambiguous" === qS && this.warnOnce(`${gS}|${uS}`, `Can't play "${gS}" on ${uS}: several clips are called that, so give its full name`)
+         "noClip" === ak ? this.warnOnce(`${Ik}|${qk}`, `Can't play "${Ik}": ${qk} has no clip by that name`) : "ambiguous" === ak && this.warnOnce(`${Ik}|${qk}`, `Can't play "${Ik}" on ${qk}: several clips are called that, so give its full name`)
```

#### 2285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17018` → after: `L17074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17074) · [Before (L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17018)

```diff
-         this.now = HS, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.qH = new Set, this.healthFracs = new M … [truncated]
+         this.now = Fk, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.tF = new Set, this.healthFracs = new M … [truncated]
```

#### 2286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17021` → after: `L17077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17077) · [Before (L17021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17021)

```diff
-         fS(this.attachments, SS).set(HS.DX, HS)
+         tk(this.attachments, kk).set(Fk.Hi, Fk)
```

#### 2287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17028` → after: `L17084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17084) · [Before (L17028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17028)

```diff
-         return [...null !== (HS = null === (gS = this.attachments.get(SS)) || void 0 === gS ? void 0 : gS.values()) && void 0 !== HS ? HS : []]
+         return [...null !== (Fk = null === (Ik = this.attachments.get(kk)) || void 0 === Ik ? void 0 : Ik.values()) && void 0 !== Fk ? Fk : []]
```

#### 2288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17046` → after: `L17102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17102) · [Before (L17046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17046)

```diff
-         bS || (bS = Object.create(null), this.particleSystemUpdates.set(SS, bS)), (0, tS.q)(bS[HS] ??= {}, gS)
+         Tk || (Tk = Object.create(null), this.particleSystemUpdates.set(kk, Tk)), (0, Xk.l)(Tk[Fk] ??= {}, Ik)
```

#### 2289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17068` → after: `L17124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17124) · [Before (L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17068)

```diff
-         return null !== (HS = this.effects.get(SS)) && void 0 !== HS ? HS : NS
+         return null !== (Fk = this.effects.get(kk)) && void 0 !== Fk ? Fk : lk
```

#### 2290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17076` → after: `L17132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17132) · [Before (L17076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17076)

```diff
-           Ut: HS ? gS : null
+           cX: Fk ? Ik : null
```

#### 2291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17083` → after: `L17139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17139) · [Before (L17083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17083)

```diff
-         HS ? this.qH.add(SS) : this.qH.delete(SS)
+         Fk ? this.tF.add(kk) : this.tF.delete(kk)
```

#### 2292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17086` → after: `L17142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17142) · [Before (L17086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17086)

```diff
-         return this.qH.has(SS)
+         return this.tF.has(kk)
```

#### 2293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17093` → after: `L17149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17149) · [Before (L17093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17093)

```diff
-         return null !== (HS = this.healthFracs.get(SS)) && void 0 !== HS ? HS : null
+         return null !== (Fk = this.healthFracs.get(kk)) && void 0 !== Fk ? Fk : null
```

#### 2294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17096` → after: `L17152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17152) · [Before (L17096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17096)

```diff
-         this.animations.remove(SS), this.attachments.delete(SS), this.attachmentGenerations.delete(SS), this.particleSystemUpdates.delete(SS), this.effects.delete(SS), this.floating.delete(SS), this.qH.delete(SS), this.healthFracs.delete(SS)
+         this.animations.remove(kk), this.attachments.delete(kk), this.attachmentGenerations.delete(kk), this.particleSystemUpdates.delete(kk), this.effects.delete(kk), this.floating.delete(kk), this.tF.delete(kk), this.healthFracs.delete(kk)
```

#### 2295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17099` → after: `L17155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17155) · [Before (L17099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17099)

```diff
-         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.qH.clear(), this.healthFracs.clear()
+         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.tF.clear(), this.healthFracs.clear()
```

#### 2296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17112-L17115` → after: `L17168-L17171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17168-L17171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17168-L17171) · [Before (L17112-L17115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17112-L17115)

```diff
-               DX: HS,
-               wX: gS,
-               hX: tS,
-               ZX: bS
+               Hi: Fk,
+               Ji: Ik,
+               xi: Xk,
+               Pi: Tk
```

#### 2297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17118-L17120` → after: `L17174-L17176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17174-L17176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17174-L17176) · [Before (L17118-L17120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17118-L17120)

```diff
-               wX: gS,
-               hX: tS,
-               ZX: bS
+               Ji: Ik,
+               xi: Xk,
+               Pi: Tk
```

#### 2298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17124` → after: `L17180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17180) · [Before (L17124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17124)

```diff
-           zD: JSON.parse(JSON.stringify(null !== (HS = this.particleSystemUpdates.get(SS)) && void 0 !== HS ? HS : {})),
+           jK: JSON.parse(JSON.stringify(null !== (Fk = this.particleSystemUpdates.get(kk)) && void 0 !== Fk ? Fk : {})),
```

#### 2299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17126-L17128` → after: `L17182-L17184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17182-L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17182-L17184) · [Before (L17126-L17128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17126-L17128)

```diff
-           floating: null !== (gS = this.floating.get(SS)) && void 0 !== gS ? gS : null,
-           qH: this.qH.has(SS),
-           zX: this.getHealthFrac(SS)
+           floating: null !== (Ik = this.floating.get(kk)) && void 0 !== Ik ? Ik : null,
+           tF: this.tF.has(kk),
+           Ri: this.getHealthFrac(kk)
```

#### 2300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17132` → after: `L17188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17188) · [Before (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17132)

```diff
-         return this.animations.retainedTypes(SS).length > 0 || this.attachments.has(SS) || this.attachmentGenerations.has(SS) || this.particleSystemUpdates.has(SS) || this.effects.has(SS) || this.floating.has(SS) || this.qH.has(SS) || this.healthFracs.has(SS)
+         return this.animations.retainedTypes(kk).length > 0 || this.attachments.has(kk) || this.attachmentGenerations.has(kk) || this.particleSystemUpdates.has(kk) || this.effects.has(kk) || this.floating.has(kk) || this.tF.has(kk) || this.healthFracs.has(kk)
```

#### 2301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17152` → after: `L17208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17208) · [Before (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17152)

```diff
-   38141: (SS, HS, gS) => {
+   38105: (kk, Fk, Ik) => {
```

#### 2302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17154-L17155` → after: `L17210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17210) · [Before (L17154-L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17154-L17155)

```diff
-       b: () => jH,
-       d: () => OH,
+       c: () => HF,
```

#### 2303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17157` → after: `L17212-L17213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17212-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17212-L17213) · [Before (L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17157)

```diff
-       j: () => QH,
+       i: () => oF,
+       k: () => QF,
```

#### 2304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17159-L17160` → after: `L17215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17215) · [Before (L17159-L17160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17159-L17160)

```diff
-       n: () => GH,
-       q: () => DH,
+       o: () => JF,
```

#### 2305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17162-L17163` → after: `L17217-L17219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17217-L17219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17217-L17219) · [Before (L17162-L17163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17162-L17163)

```diff
-       u: () => vH,
-       v: () => wH
+       t: () => PF,
+       w: () => nF,
+       y: () => VF
```

#### 2306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17165-L17192` → after: `L17221-L17248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17221-L17248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17221-L17248) · [Before (L17165-L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17165-L17192)

```diff
-     var tS = gS(37294),
-       bS = gS(37113),
-       XS = gS(3811),
-       xS = gS(36785),
-       NS = gS(38147),
-       qS = gS(38149),
-       uS = gS(37097),
-       IS = gS(37176),
-       fS = gS(37765),
-       kS = gS(37694),
-       aS = gS(665),
-       KS = gS(160),
-       jS = gS(38173),
-       GS = gS(2340),
-       CS = gS(2692),
-       nS = gS(2354),
- ... (12 more removed lines; see GitHub link above)
+     var Xk = Ik(37327),
+       Tk = Ik(37144),
+       ik = Ik(3631),
+       yk = Ik(36783),
+       lk = Ik(38109),
+       ak = Ik(38111),
+       qk = Ik(37127),
+       Lk = Ik(37217),
+       tk = Ik(37763),
+       Zk = Ik(37691),
+       jk = Ik(614),
+       ek = Ik(149),
+       wk = Ik(38132),
+       Hk = Ik(2148),
+       Jk = Ik(2492),
+       xk = Ik(2165),
+ ... (12 more added lines; see GitHub link above)
```

#### 2307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17194-L17200` → after: `L17250-L17256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17250-L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17250-L17256) · [Before (L17194-L17200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17194-L17200)

```diff
-       YS = gS(2083);
-     var AS = gS(31),
-       yS = gS(3320),
-       VS = gS(680),
-       iS = gS(3325),
-       WS = gS(37278),
-       zS = gS(3372);
+       uk = Ik(1894);
+     var bk = Ik(34),
+       Rk = Ik(3089),
+       Uk = Ik(628),
+       Ck = Ik(3096),
+       Nk = Ik(37319),
+       ck = Ik(3147);
```

#### 2308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17202-L17218` → after: `L17258-L17264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17258-L17264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17258-L17264) · [Before (L17202-L17218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17202-L17218)

```diff
-     var pS = gS(2910),
-       sS = gS(37101),
-       BS = gS(37419),
-       MS = gS(38151),
-       FS = gS(37261),
-       RS = gS(38158),
-       TS = gS(38169),
-       oS = gS(37247),
-       lS = gS(37441),
-       mS = gS(38033),
-       eS = gS(37876),
-       rS = gS(37193),
-       SH = gS(37322),
-       HH = gS(37345),
-       gH = gS(37252),
-       tH = gS(38178),
- ... (1 more removed lines; see GitHub link above)
+     var fk = Ik(2700),
+       Bk = Ik(37134),
+       dk = Ik(37438),
+       Yk = Ik(38116),
+       Ak = Ik(37299),
+       gk = Ik(38118),
+       mk = Ik(38126),
```

#### 2309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17220-L17224` → after: `L17266-L17280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17266-L17280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17266-L17280) · [Before (L17220-L17224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17220-L17224)

```diff
-       xH = gS(37471),
-       NH = gS(37242),
-       qH = gS(37225),
-       uH = gS(37432),
-       IH = gS(37655);
+       rk = Ik(37457),
+       Dk = Ik(38010),
+       Mk = Ik(37835),
+       kF = Ik(37236),
+       FF = Ik(37352),
+       IF = Ik(37373),
+       XF = Ik(37293),
+       TF = Ik(38140),
+       iF = Ik(38143),
+       yF = Ik(37324),
+       lF = Ik(37479),
+       aF = Ik(37277),
+       qF = Ik(37259),
+       LF = Ik(37455),
+       tF = Ik(37662);
```

#### 2310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17227` → after: `L17283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17283) · [Before (L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17227)

```diff
-         this.qk = SS, this.vehicleEId = null, this.previousHeading = 0
+         this.qZ = kk, this.vehicleEId = null, this.previousHeading = 0
```

#### 2311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17235` → after: `L17291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17291) · [Before (L17235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17235)

```diff
-           FQ: bS,
+           MJ: Tk,
```

#### 2312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17237` → after: `L17293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17293) · [Before (L17237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17237)

```diff
-           HA: xS,
+           oR: yk,
```

#### 2313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17239-L17241` → after: `L17295-L17297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17295-L17297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17295-L17297) · [Before (L17239-L17241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17239-L17241)

```diff
-         } = this.qk, qS = null === (SS = bS.uHS(xS)) || void 0 === SS ? void 0 : SS.ridingVehicleEId, uS = qS && (null === (HS = bS.THS(xS)) || void 0 === HS ? void 0 : HS.fK) === qS, IS = (null === (gS = bS.THS(XS.YB)) || void 0 === gS ? void 0 : gS.fK) === xS;
-         if (!uS || !IS || null !== XS.uF || null !== (tS = NS.client) && void 0 !== tS && tS.isReplayMode()) return this.reset(), 0;
-         const fS = (0, IH.getCaughtUpMeshRotation)(this.qk, qS);
+         } = this.qZ, ak = null === (kk = Tk.KFk(yk)) || void 0 === kk ? void 0 : kk.ridingVehicleEId, qk = ak && (null === (Fk = Tk.XIk(yk)) || void 0 === Fk ? void 0 : Fk.le) === ak, Lk = (null === (Ik = Tk.XIk(ik.aY)) || void 0 === Ik ? void 0 : Ik.le) === yk;
+         if (!qk || !Lk || null !== ik.rY || null !== (Xk = lk.client) && void 0 !== Xk && Xk.isReplayMode()) return this.reset(), 0;
+         const tk = (0, tF.getCaughtUpMeshRotation)(this.qZ, ak);
```

#### 2314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17244` → after: `L17300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17300) · [Before (L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17244)

```diff
-           aS = this.vehicleEId === qS ? JS.b.computeShortestRotation(this.previousHeading, kS) : 0;
+           jk = this.vehicleEId === ak ? Sk.e.computeShortestRotation(this.previousHeading, Zk) : 0;
```

#### 2315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17248-L17250` → after: `L17304-L17306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17304-L17306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17304-L17306) · [Before (L17248-L17250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17248-L17250)

```diff
-     var kH = gS(37417),
-       aH = gS(38110),
-       KH = gS(4784);
+     var jF = Ik(37435),
+       eF = Ik(38088),
+       wF = Ik(4649);
```

#### 2316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17253-L17254` → after: `L17309-L17310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17309-L17310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17309-L17310) · [Before (L17253-L17254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17253-L17254)

```diff
-       aH.g.setPlayerRigCheck((SS => aS.j.includes(SS) && EH(SS))), (0, HH.l)(), await yS.d.requiredAssetsAreGenerated();
-       const HS = yS.d.getGenerationFailure();
+       eF.h.setPlayerRigCheck((kk => jk.m.includes(kk) && GF(kk))), (0, IF.l)(), await Rk.b.requiredAssetsAreGenerated();
+       const Fk = Rk.b.getGenerationFailure();
```

#### 2317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17256` → after: `L17312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17312) · [Before (L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17256)

```diff
-       const gS = SS.Hj.lL();
+       const Ik = kk.Xw.mG();
```

#### 2318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17258-L17262` → after: `L17314-L17318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17314-L17318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17314-L17318) · [Before (L17258-L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17258-L17262)

```diff
-       const bS = await Promise.all(aS.j.map((SS => {
-           const HS = tS.then((() => (0, KH.u)(`lifeform ${SS}`)));
-           return tS = HS, HS.then((() => nH(SS, gS))).then((SS => (AS.k.cj("matchmakeAndPlayStepCompleted", {
-             step: KS.g.SETUP_LIFEFORMS,
-             totalSubSteps: aS.j.length
+       const Tk = await Promise.all(jk.m.map((kk => {
+           const Fk = Xk.then((() => (0, wF.v)(`lifeform ${kk}`)));
+           return Xk = Fk, Fk.then((() => PF(kk, Ik))).then((kk => (bk.g.GL("matchmakeAndPlayStepCompleted", {
+             step: ek.j.SETUP_LIFEFORMS,
+             totalSubSteps: jk.m.length
```

#### 2319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17266-L17267` → after: `L17322-L17323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17322-L17323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17322-L17323) · [Before (L17266-L17267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17266-L17267)

```diff
-       for (let XS = 0; XS < aS.j.length; XS++) {
-         xS[aS.j[XS]] = bS[XS]
+       for (let ik = 0; ik < jk.m.length; ik++) {
+         yk[jk.m[ik]] = Tk[ik]
```

#### 2320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17269` → after: `L17325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17325) · [Before (L17269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17269)

```diff
-       return jH = xS, await (0, KH.u)("local player"),
+       return HF = yk, await (0, wF.v)("local player"),
```

#### 2321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17273-L17274` → after: `L17329-L17330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17329-L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17329-L17330) · [Before (L17273-L17274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17273-L17274)

```diff
-               FQ: gS,
-               HA: tS
+               MJ: Ik,
+               oR: Xk
```

#### 2322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17276-L17279` → after: `L17332-L17335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17332-L17335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17332-L17335) · [Before (L17276-L17279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17276-L17279)

```diff
-           DH(HS, SS, tS), (0, FS.u)(SS, tS), gS.VY(tS, gS.names.movementInputs), gS.VY(tS, gS.names.movement), gS.VY(tS, gS.names.updateServerOfMovement), gS.VY(tS, gS.names.playerCameraAdjustment), gS.VY(tS, gS.names.crouchingHandler), gS.VY(tS, "stepSoundOnWalk"), gS.VY(tS, "pl … [truncated]
-           const bS = gS.vW(tS);
-           bS.alwaysApplyHorizFriction = !0, bS.Dk = 0;
-           const xS = gS.THS(SS.camera.YB),
+           sF(Fk, kk, Xk), (0, Ak.p)(kk, Xk), Ik.Tu(Xk, Ik.names.movementInputs), Ik.Tu(Xk, Ik.names.movement), Ik.Tu(Xk, Ik.names.updateServerOfMovement), Ik.Tu(Xk, Ik.names.playerCameraAdjustment), Ik.Tu(Xk, Ik.names.crouchingHandler), Ik.Tu(Xk, "stepSoundOnWalk"), Ik.Tu(Xk, "pl … [truncated]
+           const Tk = Ik.aN(Xk);
+           Tk.alwaysApplyHorizFriction = !0, Tk.sZ = 0;
+           const yk = Ik.XIk(kk.camera.aY),
```

#### 2323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17281` → after: `L17337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17337) · [Before (L17281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17281)

```diff
-           SS.camera.kF = () => NS.kF(), xS.SgS = (HS, bS, XS) => {
+           kk.camera.HA = () => lk.HA(), yk.qIk = (Fk, Tk, ik) => {
```

#### 2324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17283-L17285` → after: `L17339-L17341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17339-L17341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17339-L17341) · [Before (L17283-L17285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17283-L17285)

```diff
-             const xS = gS.uHS(tS).ridingVehicleEId;
-             if (xS && !gS.ZSS(tS, gS.names.lD)) {
-               const XS = gS.uHS(tS).meshOffset,
+             const yk = Ik.KFk(Xk).ridingVehicleEId;
+             if (yk && !Ik.Ukk(Xk, Ik.names.zK)) {
+               const ik = Ik.KFk(Xk).meshOffset,
```

#### 2325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17292` → after: `L17348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17348) · [Before (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17292)

```diff
-             (0, fS.tickMovementInputsPrePhysics)(SS, HS), gS.ZSS(tS, gS.names.lD) || (0, kS.tickMovementPrePhysics)(SS, HS)
+             (0, tk.tickMovementInputsPrePhysics)(kk, Fk), Ik.Ukk(Xk, Ik.names.zK) || (0, Zk.tickMovementPrePhysics)(kk, Fk)
```

#### 2326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17296` → after: `L17352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17352) · [Before (L17296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17296)

```diff
-           } = (0, bH.c)(HS);
+           } = (0, iF.d)(Fk);
```

#### 2327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17298` → after: `L17354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17354) · [Before (L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17298)

```diff
-             NS.reset(), LS().set(bS.xG, 0, 0, 0), LS().set(bS.RV, 0, 0, 0), LS().set(bS.oV, 0, 0, 0), SS.bloxd.takeHeldPlayerBodySize(tS), gS.qNS(tS, gS.names.movement), gS.qNS(tS, gS.names.moveState);
+             lk.reset(), pk().set(Tk.TH, 0, 0, 0), pk().set(Tk.fC, 0, 0, 0), pk().set(Tk.YC, 0, 0, 0), kk.bloxd.takeHeldPlayerBodySize(Xk), Ik.Plk(Xk, Ik.names.movement), Ik.Plk(Xk, Ik.names.moveState);
```

#### 2328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17302-L17303` → after: `L17358-L17359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17358-L17359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17358-L17359) · [Before (L17302-L17303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17302-L17303)

```diff
-                   kY: HS,
-                   ngS: bS,
+                   Ip: Fk,
+                   vIk: Tk,
```

#### 2329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17310-L17312` → after: `L17366-L17368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17366-L17368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17366-L17368) · [Before (L17310-L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17310-L17312)

```diff
-               if (gS.qNS(tS, SS, {
-                   kY: HS,
-                   ngS: bS,
+               if (Ik.Plk(Xk, kk, {
+                   Ip: Fk,
+                   vIk: Tk,
```

#### 2330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17315-L17317` → after: `L17371-L17373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17371-L17373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17371-L17373) · [Before (L17315-L17317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17315-L17317)

```diff
-                 }), gS.qNS(tS, "animator", {
-                   kY: HS,
-                   ngS: bS,
+                 }), Ik.Plk(Xk, "animator", {
+                   Ip: Fk,
+                   vIk: Tk,
```

#### 2331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17319` → after: `L17375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17375) · [Before (L17319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17319)

```diff
-                 }), gS.ZSS(tS, "rigAnimation")) {
+                 }), Ik.Ukk(Xk, "rigAnimation")) {
```

#### 2332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17323` → after: `L17379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17379) · [Before (L17323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17323)

```diff
-                 gS.qNS(tS, "rigAnimation", {
+                 Ik.Plk(Xk, "rigAnimation", {
```

#### 2333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17325` → after: `L17381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17381) · [Before (L17325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17325)

```diff
-                   kY: HS
+                   Ip: Fk
```

#### 2334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17329-L17330` → after: `L17385-L17386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17385-L17386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17385-L17386) · [Before (L17329-L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17329-L17330)

```diff
-             gS.qNS(tS, gS.names.meshAttachments)
-           })), gS.VY(tS, gS.names.cameraShake), gS.VY(tS, "forcedCameraTransition"),
+             Ik.Plk(Xk, Ik.names.meshAttachments)
+           })), Ik.Tu(Xk, Ik.names.cameraShake), Ik.Tu(Xk, "forcedCameraTransition"),
```

#### 2335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17332-L17334` → after: `L17388-L17390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17388-L17390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17388-L17390) · [Before (L17332-L17334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17332-L17334)

```diff
-               const HS = SS.HA;
-               YS.d.subscribe("useInventory", (gS => {
-                 if (!0 === gS && !SS.FQ.aHS(HS)) {
+               const Fk = kk.oR;
+               uk.e.subscribe("useInventory", (Ik => {
+                 if (!0 === Ik && !kk.MJ.zFk(Fk)) {
```

#### 2336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17336-L17337` → after: `L17392-L17393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17392-L17393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17392-L17393) · [Before (L17336-L17337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17336-L17337)

```diff
-                     const tS = SS.FQ.fHS(HS);
-                     AS.k.cj("updatedInventory", tS.getItems())
+                     const Xk = kk.MJ.sFk(Fk);
+                     bk.g.GL("updatedInventory", Xk.getItems())
```

#### 2337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17339` → after: `L17395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17395) · [Before (L17339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17339)

```diff
-                   SS.FQ.VY(HS, SS.FQ.names.inventory, {
+                   kk.MJ.Tu(Fk, kk.MJ.names.inventory, {
```

#### 2338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17342-L17347` → after: `L17398-L17403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17398-L17403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17398-L17403) · [Before (L17342-L17347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17342-L17347)

```diff
-                   }), SS.FQ.kHS(SS.HA).inCreative = SS.RP.creative, AS.k.cj("playerInventoryComponentChanged")
-                 }!1 === gS && SS.FQ.aHS(HS) && (SS.FQ.pY(HS, SS.FQ.names.inventory), AS.k.cj("playerInventoryComponentChanged"))
-               })), YS.d.subscribe("creative", (gS => {
-                 SS.FQ.ZSS(HS, "inventory") && (SS.FQ.kHS(SS.HA).inCreative = gS)
-               })), AS.k.subscribe("leaveGame", (() => {
-                 SS.FQ.aHS(HS) && SS.FQ.pY(HS, SS.FQ.names.inventory)
+                   }), kk.MJ.VFk(kk.oR).inCreative = kk.gJ.creative, bk.g.GL("playerInventoryComponentChanged")
+                 }!1 === Ik && kk.MJ.zFk(Fk) && (kk.MJ.Eu(Fk, kk.MJ.names.inventory), bk.g.GL("playerInventoryComponentChanged"))
+               })), uk.e.subscribe("creative", (Ik => {
+                 kk.MJ.Ukk(Fk, "inventory") && (kk.MJ.VFk(kk.oR).inCreative = Ik)
+               })), bk.g.subscribe("leaveGame", (() => {
+                 kk.MJ.zFk(Fk) && kk.MJ.Eu(Fk, kk.MJ.names.inventory)
```

#### 2339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17355` → after: `L17411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17411) · [Before (L17355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17355)

```diff
-               FQ: tS
+               MJ: Xk
```

#### 2340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17357` → after: `L17413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17413) · [Before (L17357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17357)

```diff
-           YS.d.subscribe("numClosestPlayersVisible", (gS => {
+           uk.e.subscribe("numClosestPlayersVisible", (Ik => {
```

#### 2341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17360-L17361` → after: `L17416-L17417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17416-L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17416-L17417) · [Before (L17360-L17361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17360-L17361)

```diff
-               const HS = SS.FQ.EY("genericLifeformState");
-               for (const SS of HS) SS.meshEnabledCombinator.removeBoolean("closestVisibleX"), tS.getState(SS.AY, tS.names.XK).enabledCombinator.removeBoolean("closestVisibleX")
+               const Fk = kk.MJ.ku("genericLifeformState");
+               for (const kk of Fk) kk.meshEnabledCombinator.removeBoolean("closestVisibleX"), Xk.getState(kk.Xu, Xk.names.Fe).enabledCombinator.removeBoolean("closestVisibleX")
```

#### 2342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17372` → after: `L17428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17428) · [Before (L17372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17372)

```diff
-             const NS = tS.lC(SS.HA);
+             const lk = Xk.OJ(kk.oR);
```

#### 2343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17374` → after: `L17430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17430) · [Before (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17374)

```diff
-             const qS = tS.EY("genericLifeformState");
+             const ak = Xk.ku("genericLifeformState");
```

#### 2344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17376` → after: `L17432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17432) · [Before (L17376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17376)

```diff
-             gS.length = qS.length, gS.sort(((SS, HS) => LS().BI(tS.lC(SS.AY), NS) - LS().BI(tS.lC(HS.AY), NS)));
+             Ik.length = ak.length, Ik.sort(((kk, Fk) => pk().BL(Xk.OJ(kk.Xu), lk) - pk().BL(Xk.OJ(Fk.Xu), lk)));
```

#### 2345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17378` → after: `L17434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17434) · [Before (L17378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17378)

```diff
-             for (const bS of gS) bS.AY !== SS.HA && (uS < HS ? (bS.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), tS.getState(bS.AY, tS.names.XK).enabledCombinator.setBooleanType("closestVisibleX", !0), uS++) : (bS.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
+             for (const Tk of Ik) Tk.Xu !== kk.oR && (qk < Fk ? (Tk.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), Xk.getState(Tk.Xu, Xk.names.Fe).enabledCombinator.setBooleanType("closestVisibleX", !0), qk++) : (Tk.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
```

#### 2346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17380-L17382` → after: `L17436-L17438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17436-L17438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17436-L17438) · [Before (L17380-L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17380-L17382)

```diff
-           SS.on("mf", (function(HS) {
-             const gS = tS.lC(SS.HA),
-               NS = LS().BI(gS, bS);
+           kk.on("Dt", (function(Fk) {
+             const Ik = Xk.OJ(kk.oR),
+               lk = pk().BL(Ik, Tk);
```

#### 2347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17411-L17412` → after: `L17467-L17468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17467-L17468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17467-L17468) · [Before (L17411-L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17411-L17412)

```diff
-       const xS = (0, bH.c)(SS),
-         NS = null !== (gS = xS.meshMetadata.lifeformTypeForModelOverride) && void 0 !== gS ? gS : SS,
+       const yk = (0, iF.d)(kk),
+         lk = null !== (Ik = yk.meshMetadata.lifeformTypeForModelOverride) && void 0 !== Ik ? Ik : kk,
```

#### 2348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17416-L17417` → after: `L17472-L17473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17472-L17473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17472-L17473) · [Before (L17416-L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17416-L17417)

```diff
-         for (const SS of jS.e) qS.push(GS.h[SS][(0, CS.b)(SS)].atlasIdx);
-         uS = nS.d
+         for (const kk of wk.b) ak.push(Hk.i[kk][(0, Jk.c)(kk)].atlasIdx);
+         qk = xk.f
```

#### 2349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17421` → after: `L17477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17477) · [Before (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17421)

```diff
-         for (qS.push(gS.atlasIdx1), qS.push(gS.atlasIdx2), qS.push(gS.atlasIdx3); uS * uS < QS.r[HS].length;) uS *= 2
+         for (ak.push(Ik.atlasIdx1), ak.push(Ik.atlasIdx2), ak.push(Ik.atlasIdx3); qk * qk < Kk.q[Fk].length;) qk *= 2
```

#### 2350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17431` → after: `L17487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17487) · [Before (L17431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17431)

```diff
-         } = (0, bH.c)(SS), tS = (0, vS.f)() || !1, bS = null !== (HS = gS.lifeformTypeForModelOverride) && void 0 !== HS ? HS : SS, XS = tS ? yS.d.getModel(`${bS}_Model`, iS.c.LIFEFORM) : null, xS = XS && !XS.notFound;
+         } = (0, iF.d)(kk), Xk = (0, nk.d)() || !1, Tk = null !== (Fk = Ik.lifeformTypeForModelOverride) && void 0 !== Fk ? Fk : kk, ik = Xk ? Rk.b.getModel(`${Tk}_Model`, Ck.h.LIFEFORM) : null, yk = ik && !ik.notFound;
```

#### 2351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17434-L17437` → after: `L17490-L17493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17490-L17493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17490-L17493) · [Before (L17434-L17437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17434-L17437)

```diff
-           const SS = xS ? iS.g.LIFEFORM_ATLAS : iS.g.PLAYER_ASSET;
-           NS = yS.d.getTexture("Player_Atlas", SS).url
-         } else NS = yS.d.getTexture(`${SS}_Atlas`, iS.g.LIFEFORM_ATLAS).url;
-         let qS = xS ? XS.url : (0, FS.p)(bS, `${bS}_Model.glb`);
+           const kk = yk ? Ck.j.LIFEFORM_ATLAS : Ck.j.PLAYER_ASSET;
+           lk = Rk.b.getTexture("Player_Atlas", kk).url
+         } else lk = Rk.b.getTexture(`${kk}_Atlas`, Ck.j.LIFEFORM_ATLAS).url;
+         let ak = yk ? ik.url : (0, Ak.k)(Tk, `${Tk}_Model.glb`);
```

#### 2352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17439` → after: `L17495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17495) · [Before (L17439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17439)

```diff
-         const uS = (0, DS.c)(bS),
+         const qk = (0, Qk.e)(Tk),
```

#### 2353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17443` → after: `L17499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17499) · [Before (L17443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17443)

```diff
-               tS = (0, FS.p)(SS, `${SS}${US}`)
+               Xk = (0, Ak.k)(kk, `${kk}${Wk}`)
```

#### 2354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17447-L17453` → after: `L17503-L17509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17503-L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17503-L17509) · [Before (L17447-L17453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17447-L17453)

```diff
-             const bS = (0, zS.k)(tS);
-             if (!bS) return console.error(`Pre-reconstructed GLB for ${SS} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
-             const XS = (0, zS.k)(HS);
-             if (!XS) return console.error(`GLB for ${SS} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
-             const xS = (0, zS.e)(bS.base64),
-               NS = (0, WS.i)(gS, XS.base64);
-             if ((0, WS.v)(xS) !== NS) return console.error(`Stale pre-reconstructed model for ${SS} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
+             const Tk = (0, ck.h)(Xk);
+             if (!Tk) return console.error(`Pre-reconstructed GLB for ${kk} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
+             const ik = (0, ck.h)(Fk);
+             if (!ik) return console.error(`GLB for ${kk} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
+             const yk = (0, ck.b)(Tk.base64),
+               lk = (0, Nk.j)(Ik, ik.base64);
+             if ((0, Nk.w)(yk) !== lk) return console.error(`Stale pre-reconstructed model for ${kk} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
```

#### 2355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17462` → after: `L17518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17518) · [Before (L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17462)

```diff
-       await (0, KH.u)(`lifeform ${SS} materials`);
+       await (0, wF.v)(`lifeform ${kk} materials`);
```

#### 2356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17473` → after: `L17529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17529) · [Before (L17473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17473)

```diff
-       if (!(0, VS.K)(xS.getArmourMetadata)) {
+       if (!(0, Uk.Q)(yk.getArmourMetadata)) {
```

#### 2357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17482` → after: `L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17538) · [Before (L17482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17482)

```diff
-             Bj: gS,
+             Yw: Ik,
```

#### 2358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17489` → after: `L17545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17545) · [Before (L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17489)

```diff
-                 samplingMode: NH.h.nearest,
+                 samplingMode: aF.i.nearest,
```

#### 2359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17499` → after: `L17555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17555) · [Before (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17499)

```diff
-               (0, qH.p)(SS, mS.d, {
+               (0, qF.v)(kk, Dk.d, {
```

#### 2360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17501` → after: `L17557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17557) · [Before (L17501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17501)

```diff
-               }), (0, lS.c)(SS, (0, pS.e)().Hj), (0, rS.d)(SS), (0, qH.p)(SS, eS.f), (0, qH.Q)(SS)
+               }), (0, rk.c)(kk, (0, fk.e)().Xw), (0, kF.c)(kk), (0, qF.v)(kk, Mk.e), (0, qF.O)(kk)
```

#### 2361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17505` → after: `L17561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17561) · [Before (L17505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17505)

```diff
-         }(`${SS}ArmourMaterial`, gS, HS), OS = gS.textureOffsets, dS = gS.isArmourVisibleByDefault
+         }(`${kk}ArmourMaterial`, Ik, Fk), vk = Ik.textureOffsets, Ek = Ik.isArmourVisibleByDefault
```

#### 2362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17507` → after: `L17563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17563) · [Before (L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17507)

```diff
-       const cS = (0, DS.c)(NS);
+       const Ok = (0, Qk.e)(lk);
```

#### 2363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17509` → after: `L17565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17565) · [Before (L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17509)

```diff
-         const bS = await (0, HH.f)(gS, tS, {}).catch((SS => (console.error(`Failed to parse pre-reconstructed model for ${HS} - falling back to runtime reconstruction.`, SS, ...null !== SS && void 0 !== SS && SS.innerError ? [SS.innerError] : []), null)));
+         const Tk = await (0, IF.f)(Ik, Xk, {}).catch((kk => (console.error(`Failed to parse pre-reconstructed model for ${Fk} - falling back to runtime reconstruction.`, kk, ...null !== kk && void 0 !== kk && kk.innerError ? [kk.innerError] : []), null)));
```

#### 2364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17511-L17513` → after: `L17567-L17569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17567-L17569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17567-L17569) · [Before (L17511-L17513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17511-L17513)

```diff
-         await (0, KH.u)(`lifeform ${SS} model`), bS.addAllToScene();
-         const XS = (0, tH.h)(bS, tS);
-         if (!XS) return bS.dispose(), console.error(`Corrupt pre-reconstructed model for ${HS} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, wF.v)(`lifeform ${kk} model`), Tk.addAllToScene();
+         const ik = (0, TF.g)(Tk, Xk);
+         if (!ik) return Tk.dispose(), console.error(`Corrupt pre-reconstructed model for ${Fk} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17520` → after: `L17576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17576) · [Before (L17520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17520)

```diff
-         await (0, KH.u)(`lifeform ${SS} model`), ES = cS ? tH.g.reconstructModel(gS, cS.reconstructionSchema, HS, fS) : {
+         await (0, wF.v)(`lifeform ${kk} model`), Gk = Ok ? TF.e.reconstructModel(Ik, Ok.reconstructionSchema, Fk, tk) : {
```

#### 2366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17525` → after: `L17581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17581) · [Before (L17525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17525)

```diff
-       await (0, KH.u)(`lifeform ${SS} meshes`);
+       await (0, wF.v)(`lifeform ${kk} meshes`);
```

#### 2367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17528` → after: `L17584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17584) · [Before (L17528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17528)

```diff
-           Hj: YS
+           Xw: uk
```

#### 2368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17530-L17531` → after: `L17586-L17587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17586-L17587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17586-L17587) · [Before (L17530-L17531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17530-L17531)

```diff
-         AS = YS.fY,
-         sS = XS || !YS.gj;
+         bk = uk.kp,
+         Bk = ik || !uk.Tw;
```

#### 2369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17534-L17535` → after: `L17590-L17591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17590-L17591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17590-L17591) · [Before (L17534-L17535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17534-L17535)

```diff
-         const SS = (0, FS.j)(bS) ? JS : null !== (BS = null !== aS && void 0 !== aS && aS.includes(bS.name) ? ZS : null) && void 0 !== BS ? BS : hS;
-         SS && sS && (XS ? HS.egS(bS, !1) : YS.JY(bS)), (0, WS.o)(bS) || (0, WS.s)(bS, 1 / 512), bS.aY(), bS.material = SS, bS.sideOrientation = XH.d.CounterClockWiseSideOrientation, (0, xH.i)(bS) ? null !== KS && void 0 !== KS && KS.includes(bS.name) && (bS.noSunShadowVertices =  … [truncated]
+         const kk = (0, Ak.f)(Tk) ? Sk : null !== (dk = null !== jk && void 0 !== jk && jk.includes(Tk.name) ? zk : null) && void 0 !== dk ? dk : Vk;
+         kk && Bk && (ik ? Fk.lXk(Tk, !1) : uk.mp(Tk)), (0, Nk.r)(Tk) || (0, Nk.u)(Tk, 1 / 512), Tk.Xp(), Tk.material = kk, Tk.sideOrientation = yF.d.CounterClockWiseSideOrientation, (0, lF.i)(Tk) ? null !== ek && void 0 !== ek && ek.includes(Tk.name) && (Tk.noSunShadowVertices =  … [truncated]
```

#### 2370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17538` → after: `L17594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17594) · [Before (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17538)

```diff
-         ((0, xH.i)(bS) ? !bS.material : !bS.lL().meshes.includes(bS)) && 0 === bS.getChildMeshes().length && bS.MJ(!1)
+         ((0, lF.i)(Tk) ? !Tk.material : !Tk.mG().meshes.includes(Tk)) && 0 === Tk.getChildMeshes().length && Tk.Av(!1)
```

#### 2371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17544` → after: `L17600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17600) · [Before (L17544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17544)

```diff
-           "ArmLeftMesh" === jS.name && jS.translate(bS.VK.LeftReadOnly, SS), "ArmRightMesh" === jS.name && jS.translate(bS.VK.RightReadOnly, SS), "HeadMesh" === jS.name && jS.translate(bS.VK.DownReadOnly, SS), "LegLeftMesh" === jS.name && jS.translate(bS.VK.UpReadOnly, SS), "LegR … [truncated]
+           "ArmLeftMesh" === wk.name && wk.translate(Tk.Ge.LeftReadOnly, kk), "ArmRightMesh" === wk.name && wk.translate(Tk.Ge.RightReadOnly, kk), "HeadMesh" === wk.name && wk.translate(Tk.Ge.DownReadOnly, kk), "LegLeftMesh" === wk.name && wk.translate(Tk.Ge.UpReadOnly, kk), "LegR … [truncated]
```

#### 2372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17551` → after: `L17607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17607) · [Before (L17551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17551)

```diff
-         for (const bS of TS) bS.material && YS.JY(bS);
+         for (const Tk of mk) Tk.material && uk.mp(Tk);
```

#### 2373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17553-L17554` → after: `L17609-L17610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17609-L17610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17609-L17610) · [Before (L17553-L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17553-L17554)

```diff
-         const SS = (0, FS.p)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
-           gS = await (0, HH.c)("", HS, {
+         const kk = (0, Ak.k)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+           Ik = await (0, IF.b)("", Fk, {
```

#### 2374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17560-L17562` → after: `L17616-L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17616-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17616-L17618) · [Before (L17560-L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17560-L17562)

```diff
-           } = HS.hA();
-           if (bS.VK.DistanceSquared(SS.minimum, SS.maximum)) {
-             (0, WS.o)(HS) || (0, WS.s)(HS, 1 / 128), HS.name = "Cape", HS.nf = HS.nf.scale(.12), HS.Fj = !1, MS = HS;
+           } = Fk.vR();
+           if (Tk.Ge.DistanceSquared(kk.minimum, kk.maximum)) {
+             (0, Nk.r)(Fk) || (0, Nk.u)(Fk, 1 / 128), Fk.name = "Cape", Fk.ci = Fk.ci.scale(.12), Fk.gw = !1, Yk = Fk;
```

#### 2375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17569` → after: `L17625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17625) · [Before (L17569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17569)

```diff
-           Bj: HS,
+           Yw: Fk,
```

#### 2376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17575` → after: `L17631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17631) · [Before (L17575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17575)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (tS = xS.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== tS ? tS : {}).map((HS => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (Xk = yk.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== Xk ? Xk : {}).map((Fk => {
```

#### 2377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17578` → after: `L17634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17634) · [Before (L17578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17578)

```diff
-               numTexturesInAtlas: "default" === tS.numTexturesInAtlas ? "Player" === NS ? uS : QS.r[SS].length : tS.numTexturesInAtlas
+               numTexturesInAtlas: "default" === Xk.numTexturesInAtlas ? "Player" === lk ? qk : Kk.q[kk].length : Xk.numTexturesInAtlas
```

#### 2378. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17582` → after: `L17638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17638) · [Before (L17582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17582)

```diff
-         uH = XS ? `${SS}Preview` : SS;
+         LF = ik ? `${kk}Preview` : kk;
```

#### 2379. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17584` → after: `L17640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17640) · [Before (L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17584)

```diff
-         hf: 32,
+         St: 32,
```

#### 2380. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17608` → after: `L17664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17664) · [Before (L17608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17608)

```diff
-       }), AS.setPickableForType(uH, !XS), AS.setCullableForType(uH, !XS), (0, gH.o)(RS), {
+       }), bk.setPickableForType(LF, !ik), bk.setCullableForType(LF, !ik), (0, XF.t)(gk), {
```

#### 2381. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17617-L17618` → after: `L17673-L17674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17673-L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17673-L17674) · [Before (L17617-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17617-L17618)

```diff
-         name: `${SS}SpriteSheet${XS?"":"WithVisibleBackFaces"}`,
-         Bj: HS,
+         name: `${kk}SpriteSheet${ik?"":"WithVisibleBackFaces"}`,
+         Yw: Fk,
```

#### 2382. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17626` → after: `L17682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17682) · [Before (L17626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17626)

```diff
-             samplingMode: NH.h.nearest
+             samplingMode: aF.i.nearest
```

#### 2383. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17637` → after: `L17693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17693) · [Before (L17637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17637)

```diff
-           (0, TS.d)(SS, tS, tS, bS), (0, qH.p)(SS, oS.d), (0, lS.c)(SS, (0, pS.e)().Hj), (0, rS.d)(SS), (0, qH.Q)(SS)
+           (0, mk.c)(kk, Xk, Xk, Tk), (0, qF.v)(kk, hk.d), (0, rk.c)(kk, (0, fk.e)().Xw), (0, kF.c)(kk), (0, qF.O)(kk)
```

#### 2384. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17647-L17649` → after: `L17703-L17705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17703-L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17703-L17705) · [Before (L17647-L17649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17647-L17649)

```diff
-       const XS = (0, pS.e)().Hj.fY,
-         xS = bS ? `${SS}Preview` : SS;
-       if (!XS.hasType(xS)) throw new Error(`Thin instance manager not set up for ${SS}`);
+       const ik = (0, fk.e)().Xw.kp,
+         yk = Tk ? `${kk}Preview` : kk;
+       if (!ik.hasType(yk)) throw new Error(`Thin instance manager not set up for ${kk}`);
```

#### 2385. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17651` → after: `L17707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17707) · [Before (L17651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17651)

```diff
-       gS && XS.MJ(NS, !0);
+       Ik && ik.Av(lk, !0);
```

#### 2386. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17655` → after: `L17711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17711) · [Before (L17655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17655)

```diff
-       return XS.setGroupEnabled(NS, "armour", qS), qS && XS.setGroup(NS, "armour", "aArmourTint", 1, 1, 1, 0), jH[SS].meshApi.updateMeshOverlayColour(NS, new tS.b(0, 0, 0, 0)), jH[SS].meshApi.updateMeshLightLevels(NS, uH.c), XS.getScale(NS).scaleInPlace(HS), XS.setDirty(NS, 0), N … [truncated]
+       return ik.setGroupEnabled(lk, "armour", ak), ak && ik.setGroup(lk, "armour", "aArmourTint", 1, 1, 1, 0), HF[kk].meshApi.updateMeshOverlayColour(lk, new Xk.b(0, 0, 0, 0)), HF[kk].meshApi.updateMeshLightLevels(lk, LF.b), ik.getScale(lk).scaleInPlace(Fk), ik.setDirty(lk, 0), l … [truncated]
```

#### 2387. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17661` → after: `L17717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17717) · [Before (L17661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17661)

```diff
-         FQ: DS
+         MJ: Qk
```

#### 2388. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17664` → after: `L17720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17720) · [Before (L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17664)

```diff
-       } = (0, bH.c)(SS), cS = HS.Hj.fY, vS = QH(SS), ES = cS.TgS(vS, 0);
+       } = (0, iF.d)(kk), Ok = Fk.Xw.kp, nk = QF(kk), Gk = Ok.XXk(nk, 0);
```

#### 2389. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17666` → after: `L17722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17722) · [Before (L17666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17666)

```diff
-       "humanoidMesh" === dS.type ? (yS = wS.s, VS = wS.o) : (yS = wS.i, VS = wS.f), DS.VY(gS, DS.names.moveState), DS.VY(gS, "genericLifeformState"), DS.VY(gS, "genericLifeform", {
+       "humanoidMesh" === Ek.type ? (Rk = sk.m, Uk = sk.l) : (Rk = sk.f, Uk = sk.c), Qk.Tu(Ik, Qk.names.moveState), Qk.Tu(Ik, "genericLifeformState"), Qk.Tu(Ik, "genericLifeform", {
```

#### 2390. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17668-L17670` → after: `L17724-L17726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17724-L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17724-L17726) · [Before (L17668-L17670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17668-L17670)

```diff
-           kY: vS,
-           ngS: ES
-         }), DS.VY(gS, "RD"), DS.VY(gS, "meshRotation", {
+           Ip: nk,
+           vIk: Gk
+         }), Qk.Tu(Ik, "VK"), Qk.Tu(Ik, "meshRotation", {
```

#### 2391. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17676` → after: `L17732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17732) · [Before (L17676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17676)

```diff
-           modelYRotationOffset: null !== (bS = dS.modelYRotationOffset) && void 0 !== bS ? bS : 0
+           modelYRotationOffset: null !== (Tk = Ek.modelYRotationOffset) && void 0 !== Tk ? Tk : 0
```

#### 2392. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17679` → after: `L17735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17735) · [Before (L17679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17679)

```diff
-           const gS = SS.FQ.EHS(HS),
+           const Ik = kk.MJ.WFk(Fk),
```

#### 2393. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17681` → after: `L17737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17737) · [Before (L17681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17681)

```diff
-             bS = SS.RP.showPlayersInUnloadedChunks || !1;
+             Tk = kk.gJ.showPlayersInUnloadedChunks || !1;
```

#### 2394. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17685` → after: `L17741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17741) · [Before (L17685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17685)

```diff
-           SS.FQ.VY(HS, "inLoadedChunk", {
+           kk.MJ.Tu(Fk, "inLoadedChunk", {
```

#### 2395. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17687` → after: `L17743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17743) · [Before (L17687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17687)

```diff
-               XS = bS, xS || (tS.setBooleanType("inLoadedChunk", bS), HS !== SS.HA && (gS.isLifeformMeshEnabled = bS))
+               ik = Tk, yk || (Xk.setBooleanType("inLoadedChunk", Tk), Fk !== kk.oR && (Ik.isLifeformMeshEnabled = Tk))
```

#### 2396. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17690-L17691` → after: `L17746-L17747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17746-L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17746-L17747) · [Before (L17690-L17691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17690-L17691)

```diff
-           const NS = YS.d.subscribe("showPlayersInUnloadedChunks", (bS => {
-               xS = bS, xS ? (tS.setBooleanType("inLoadedChunk", !0), gS.isLifeformMeshEnabled = !0) : (tS.setBooleanType("inLoadedChunk", XS), HS !== SS.HA && (gS.isLifeformMeshEnabled = XS))
+           const lk = uk.e.subscribe("showPlayersInUnloadedChunks", (Tk => {
+               yk = Tk, yk ? (Xk.setBooleanType("inLoadedChunk", !0), Ik.isLifeformMeshEnabled = !0) : (Xk.setBooleanType("inLoadedChunk", ik), Fk !== kk.oR && (Ik.isLifeformMeshEnabled = ik))
```

#### 2397. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17693-L17694` → after: `L17749-L17750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17749-L17750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17749-L17750) · [Before (L17693-L17694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17693-L17694)

```diff
-             qS = AS.k.subscribe(`lifeformDisposed|${HS}`, (() => {
-               NS(), AS.k.unsubscribe(qS)
+             ak = bk.g.subscribe(`lifeformDisposed|${Fk}`, (() => {
+               lk(), bk.g.unsubscribe(ak)
```

#### 2398. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17696-L17698` → after: `L17752-L17754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17752-L17754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17752-L17754) · [Before (L17696-L17698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17696-L17698)

```diff
-         }(HS, gS), DS.VY(gS, "updateWalkingState", {
-           kY: vS,
-           ngS: ES,
+         }(Fk, Ik), Qk.Tu(Ik, "updateWalkingState", {
+           Ip: nk,
+           vIk: Gk,
```

#### 2399. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17700-L17709` → after: `L17756-L17765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17756-L17765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17756-L17765) · [Before (L17700-L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17700-L17709)

```diff
-         }), DS.VY(gS, DS.names[dS.type], {
-           kY: vS,
-           ngS: ES,
-           heldItemPositionParams: null !== (XS = dS.heldItemPositionParams) && void 0 !== XS ? XS : {},
-           maxWalkingAngleOverride: null !== (fS = dS.walkingLegSwingAngle) && void 0 !== fS ? fS : null
-         }), DS.VY(gS, "animator", {
-           kY: vS,
-           ngS: ES,
-           modelLifeformType: null !== (kS = dS.lifeformTypeForModelOverride) && void 0 !== kS ? kS : SS
-         }), aH.g.hasAnimation(SS) && DS.VY(gS, "rigAnimation", {
+         }), Qk.Tu(Ik, Qk.names[Ek.type], {
+           Ip: nk,
+           vIk: Gk,
+           heldItemPositionParams: null !== (ik = Ek.heldItemPositionParams) && void 0 !== ik ? ik : {},
+           maxWalkingAngleOverride: null !== (tk = Ek.walkingLegSwingAngle) && void 0 !== tk ? tk : null
+         }), Qk.Tu(Ik, "animator", {
+           Ip: nk,
+           vIk: Gk,
+           modelLifeformType: null !== (Zk = Ek.lifeformTypeForModelOverride) && void 0 !== Zk ? Zk : kk
+         }), eF.h.hasAnimation(kk) && Qk.Tu(Ik, "rigAnimation", {
```

#### 2400. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17711` → after: `L17767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17767) · [Before (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17711)

```diff
-           kY: vS
+           Ip: nk
```

#### 2401. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17715-L17716` → after: `L17771-L17772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17771-L17772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17771-L17772) · [Before (L17715-L17716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17715-L17716)

```diff
-             FQ: tS
-           } = HS, bS = (0, bH.c)(SS), XS = tS.EHS(gS), qS = tS.getState(gS, tS.names.XK);
+             MJ: Xk
+           } = Fk, Tk = (0, iF.d)(kk), ik = Xk.WFk(Ik), ak = Xk.getState(Ik, Xk.names.Fe);
```

#### 2402. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17719` → after: `L17775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17775) · [Before (L17719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17719)

```diff
-               XS.meshEnabledCombinator.setBooleanType(SS, HS), tS.getState(gS, tS.names.XK).enabledCombinator.setBooleanType(SS, HS)
+               ik.meshEnabledCombinator.setBooleanType(kk, Fk), Xk.getState(Ik, Xk.names.Fe).enabledCombinator.setBooleanType(kk, Fk)
```

#### 2403. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17722` → after: `L17778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17778) · [Before (L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17722)

```diff
-               const XS = tS.getState((0, xS.e)(gS), bS.meshMetadata.type);
+               const ik = Xk.getState((0, yk.c)(Ik), Tk.meshMetadata.type);
```

#### 2404. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17724` → after: `L17780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17780) · [Before (L17724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17724)

```diff
-                 HS.Hj.fY.setVisibility(XS.kY, SS)
+                 Fk.Xw.kp.setVisibility(ik.Ip, kk)
```

#### 2405. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17726` → after: `L17782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17782) · [Before (L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17726)

```diff
-               const NS = (0, pS.b)().getFollowingEntities(gS);
+               const lk = (0, fk.c)().getFollowingEntities(Ik);
```

#### 2406. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17728` → after: `L17784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17784) · [Before (L17728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17728)

```diff
-                 const bS = tS.tHS(gS);
+                 const Tk = Xk.eFk(Ik);
```

#### 2407. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17731` → after: `L17787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17787) · [Before (L17731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17731)

```diff
-                     kY: gS
+                     Ip: Ik
```

#### 2408. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17734` → after: `L17790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17790) · [Before (L17734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17734)

```diff
-                     HS.Hj.fY.MJ(gS, SS)
+                     Fk.Xw.kp.Av(Ik, kk)
```

#### 2409. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17738` → after: `L17794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17794) · [Before (L17738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17738)

```diff
-               tS.getState(gS, tS.names.XK).enabledCombinator.setBooleanType("visible", SS)
+               Xk.getState(Ik, Xk.names.Fe).enabledCombinator.setBooleanType("visible", kk)
```

#### 2410. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17742` → after: `L17798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17798) · [Before (L17742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17742)

```diff
-                 qS = HS.FQ.getState((0, xS.e)(gS), bS.meshMetadata.type);
+                 ak = Fk.MJ.getState((0, yk.c)(Ik), Tk.meshMetadata.type);
```

#### 2411. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17744` → after: `L17800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17800) · [Before (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17744)

```diff
-               const uS = (0, pS.e)().Hj.fY,
+               const qk = (0, fk.e)().Xw.kp,
```

#### 2412. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17746` → after: `L17802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17802) · [Before (L17746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17746)

```diff
-                   kY: IS
+                   Ip: Lk
```

#### 2413. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17750` → after: `L17806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17806) · [Before (L17750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17750)

```diff
-                 kS = fS ? aS.m : uS.getNodeNames(IS);
+                 Zk = tk ? jk.q : qk.getNodeNames(Lk);
```

#### 2414. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17755` → after: `L17811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17811) · [Before (L17755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17755)

```diff
-                   gS = null !== (KS = XS[SS]) && void 0 !== KS ? KS : [1, 1, 1];
+                   Ik = null !== (ek = ik[kk]) && void 0 !== ek ? ek : [1, 1, 1];
```

#### 2415. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17759` → after: `L17815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17815) · [Before (L17759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17759)

```diff
-             kS = HS.rY[HS.HA][gS];
+             Zk = Fk.xR[Fk.oR][Ik];
```

#### 2416. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17761` → after: `L17817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17817) · [Before (L17761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17761)

```diff
-           const KS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|_isAlive`, (SS => {
+           const ek = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|_isAlive`, (kk => {
```

#### 2417. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17764` → after: `L17820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17820) · [Before (L17764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17764)

```diff
-             jS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|canSee`, (SS => {
+             wk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|canSee`, (kk => {
```

#### 2418. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17767` → after: `L17823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17823) · [Before (L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17767)

```diff
-             GS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|_invisibleEffect`, (SS => {
+             Hk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|_invisibleEffect`, (kk => {
```

#### 2419. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17770` → after: `L17826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17826) · [Before (L17770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17770)

```diff
-             CS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|meshScaling`, (SS => {
+             Jk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|meshScaling`, (kk => {
```

#### 2420. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17774` → after: `L17830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17830) · [Before (L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17774)

```diff
-           if (gS === HS.HA) {
+           if (Ik === Fk.oR) {
```

#### 2421. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17778-L17779` → after: `L17834-L17835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17834-L17835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17834-L17835) · [Before (L17778-L17779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17778-L17779)

```diff
-             nS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${HS.HA}|_isAlive`, (gS => {
-               const tS = HS.FQ.vW(HS.HA);
+             xk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Fk.oR}|_isAlive`, (Ik => {
+               const Xk = Fk.MJ.aN(Fk.oR);
```

#### 2422. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17783` → after: `L17839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17839) · [Before (L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17783)

```diff
-               } else SS.gravityMultiplier = tS.gravityMultiplier, tS.gravityMultiplier = 0, tS.xG[0] = 0, tS.xG[1] = 0, tS.xG[2] = 0, tS.RV[0] = 0, tS.RV[1] = 0, tS.RV[2] = 0, tS.oV[0] = 0, tS.oV[1] = 0, tS.oV[2] = 0
+               } else kk.gravityMultiplier = Xk.gravityMultiplier, Xk.gravityMultiplier = 0, Xk.TH[0] = 0, Xk.TH[1] = 0, Xk.TH[2] = 0, Xk.fC[0] = 0, Xk.fC[1] = 0, Xk.fC[2] = 0, Xk.YC[0] = 0, Xk.YC[1] = 0, Xk.YC[2] = 0
```

#### 2423. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17786-L17787` → after: `L17842-L17843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17842-L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17842-L17843) · [Before (L17786-L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17786-L17787)

```diff
-           const PS = AS.k.subscribe(`lifeformDisposed|${gS}`, (() => {
-             AS.k.unsubscribe(KS), AS.k.unsubscribe(jS), AS.k.unsubscribe(GS), AS.k.unsubscribe(CS), AS.k.unsubscribe(nS), AS.k.unsubscribe(PS)
+           const Pk = bk.g.subscribe(`lifeformDisposed|${Ik}`, (() => {
+             bk.g.unsubscribe(ek), bk.g.unsubscribe(wk), bk.g.unsubscribe(Hk), bk.g.unsubscribe(Jk), bk.g.unsubscribe(xk), bk.g.unsubscribe(Pk)
```

#### 2424. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17789-L17790` → after: `L17845-L17846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17845-L17846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17845-L17846) · [Before (L17789-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17789-L17790)

```diff
-         }(SS, HS, gS), DS.VY(gS, DS.names.mesh, {
-           zxS: "humanoidMesh" === dS.type ? SS => {
+         }(kk, Fk, Ik), Qk.Tu(Ik, Qk.names.mesh, {
+           ryk: "humanoidMesh" === Ek.type ? kk => {
```

#### 2425. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17792` → after: `L17848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17848) · [Before (L17792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17792)

```diff
-             const bS = DS.uHS(gS),
+             const Tk = Qk.KFk(Ik),
```

#### 2426. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17796` → after: `L17852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17852) · [Before (L17796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17796)

```diff
-               xS = null !== (tS = bS.ridingVehicleEId) && void 0 !== tS ? tS : null;
+               yk = null !== (Xk = Tk.ridingVehicleEId) && void 0 !== Xk ? Xk : null;
```

#### 2427. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17799-L17800` → after: `L17855-L17856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17855-L17856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17855-L17856) · [Before (L17799-L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17799-L17800)

```diff
-               const tS = HS.bloxd.getEntityHeading(null !== xS && void 0 !== xS ? xS : gS, !0);
-               LS().bu(SS, XS, LS().ZERO, tS)
+               const Xk = Fk.bloxd.getEntityHeading(null !== yk && void 0 !== yk ? yk : Ik, !0);
+               pk().ei(kk, ik, pk().ZERO, Xk)
```

#### 2428. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17802` → after: `L17858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17858) · [Before (L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17802)

```diff
-             null !== xS && (0, MS.e)(HS, xS, SS)
+             null !== yk && (0, Yk.b)(Fk, yk, kk)
```

#### 2429. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17804-L17805` → after: `L17860-L17861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17860-L17861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17860-L17861) · [Before (L17804-L17805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17804-L17805)

```diff
-           kY: vS,
-           ngS: ES,
+           Ip: nk,
+           vIk: Gk,
```

#### 2430. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17807-L17811` → after: `L17863-L17867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17863-L17867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17863-L17867) · [Before (L17807-L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17807-L17811)

```diff
-           Fj: !1,
-           QgS: !1
-         }), DS.VY(gS, DS.names.cape);
-       const iS = (0, IS.d)(HS).getFloating((0, xS.e)(gS));
-       DS.VY(gS, "floating", iS ? {
+           gw: !1,
+           OIk: !1
+         }), Qk.Tu(Ik, Qk.names.cape);
+       const Ck = (0, Lk.b)(Fk).getFloating((0, yk.c)(Ik));
+       Qk.Tu(Ik, "floating", Ck ? {
```

#### 2431. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17813` → after: `L17869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17869) · [Before (L17813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17813)

```diff
-         Ut: iS.Ut
+         cX: Ck.cX
```

#### 2432. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17815-L17817` → after: `L17871-L17873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17871-L17873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17871-L17873) · [Before (L17815-L17817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17815-L17817)

```diff
-       const WS = DS.EHS(gS).meshEnabledCombinator.getTotalBooleanVal();
-       if (cS.MJ(vS, WS), cS.setEntityId(vS, gS), cS.setPickable(vS, (0, kH.l)(gS)), EH(SS)) {
-         DS.VY(gS, DS.names.meshAttachments);
+       const Nk = Qk.WFk(Ik).meshEnabledCombinator.getTotalBooleanVal();
+       if (Ok.Av(nk, Nk), Ok.setEntityId(nk, Ik), Ok.setPickable(nk, (0, jF.g)(Ik)), GF(kk)) {
+         Qk.Tu(Ik, Qk.names.meshAttachments);
```

#### 2433. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17820` → after: `L17876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17876) · [Before (L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17820)

```diff
-           for (const HS of aS.d) {
+           for (const Fk of jk.e) {
```

#### 2434. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17825` → after: `L17881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17881) · [Before (L17825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17825)

```diff
-       if ((0, uS.j)(HS, (0, xS.e)(gS)), "Player" === SS) {
+       if ((0, qk.h)(Fk, (0, yk.c)(Ik)), "Player" === kk) {
```

#### 2435. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17827-L17828` → after: `L17883-L17884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17883-L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17883-L17884) · [Before (L17827-L17828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17827-L17828)

```diff
-         if (qS.e[gS]) {
-           const HS = (0, xS.e)(gS),
+         if (ak.b[Ik]) {
+           const Fk = (0, yk.c)(Ik),
```

#### 2436. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17830` → after: `L17886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17886) · [Before (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17830)

```diff
-           for (const SS of hS.r) qS.e[gS][SS] && tS.updatePlayerCosmetic(HS, vS, SS, qS.e[gS][SS])
+           for (const kk of Vk.w) ak.b[Ik][kk] && Xk.updatePlayerCosmetic(Fk, nk, kk, ak.b[Ik][kk])
```

#### 2437. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17832-L17833` → after: `L17888-L17889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17888-L17889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17888-L17889) · [Before (L17832-L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17832-L17833)

```diff
-         gS === HS.HA || null !== (zS = (0, pS.b)().client) && void 0 !== zS && zS.isReplayMode() || (DS.VY(gS, "proximityHide"), AS.k.cj(`otherPlayerTeleported|${gS}`, {
-           pos: HS.FQ.lC(gS)
+         Ik === Fk.oR || null !== (ck = (0, fk.c)().client) && void 0 !== ck && ck.isReplayMode() || (Qk.Tu(Ik, "proximityHide"), bk.g.GL(`otherPlayerTeleported|${Ik}`, {
+           pos: Fk.MJ.OJ(Ik)
```

#### 2438. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17836-L17837` → after: `L17892-L17893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17892-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17892-L17893) · [Before (L17836-L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17836-L17837)

```diff
-       DS.getState(gS, DS.names.XK).size = ZS.c, DS.VY(gS, "proximityFade", {
-         serverOpacity: null !== (KS = null === (jS = HS.rY[HS.HA][gS]) || void 0 === jS ? void 0 : jS.opacity) && void 0 !== KS ? KS : 1
+       Qk.getState(Ik, Qk.names.Fe).size = zk.e, Qk.Tu(Ik, "proximityFade", {
+         serverOpacity: null !== (ek = null === (wk = Fk.xR[Fk.oR][Ik]) || void 0 === wk ? void 0 : wk.opacity) && void 0 !== ek ? ek : 1
```

#### 2439. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17840-L17841` → after: `L17896-L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17896-L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17896-L17897) · [Before (L17840-L17841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17840-L17841)

```diff
-       gS === HS.HA && (US = HS.OSS, AS.k.subscribe("initInfoReceived", (() => {
-         US = HS.OSS
+       Ik === Fk.oR && (Wk = Fk.Nkk, bk.g.subscribe("initInfoReceived", (() => {
+         Wk = Fk.Nkk
```

#### 2440. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17843-L17845` → after: `L17899-L17901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17899-L17901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17899-L17901) · [Before (L17843-L17845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17843-L17845)

```diff
-       const sS = (0, pS.b)().YF(gS);
-       ZH[(0, xS.e)(gS)] = sS, eS(HS, gS, SS, sS);
-       const BS = AS.k.subscribe("otherEntitySettings|opacity", (SS => {
+       const Bk = (0, fk.c)().qm(Ik);
+       SF[(0, yk.c)(Ik)] = Bk, Mk(Fk, Ik, kk, Bk);
+       const dk = bk.g.subscribe("otherEntitySettings|opacity", (kk => {
```

#### 2441. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17851` → after: `L17907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17907) · [Before (L17851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17851)

```diff
-           const XS = HS.FQ.WHS(gS);
+           const ik = Fk.MJ.gFk(Ik);
```

#### 2442. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17854` → after: `L17910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17910) · [Before (L17854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17854)

```diff
-         FS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|_invincible`, (SS => {
+         Ak = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|_invincible`, (kk => {
```

#### 2443. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17859` → after: `L17915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17915) · [Before (L17859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17859)

```diff
-         !SS && DS.ZSS(gS, "flashingMeshOverlay") && DS.pY(gS, "flashingMeshOverlay"), SS && !DS.ZSS(gS, "flashingMeshOverlay") && DS.VY(gS, "flashingMeshOverlay")
+         !kk && Qk.Ukk(Ik, "flashingMeshOverlay") && Qk.Eu(Ik, "flashingMeshOverlay"), kk && !Qk.Ukk(Ik, "flashingMeshOverlay") && Qk.Tu(Ik, "flashingMeshOverlay")
```

#### 2444. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17861-L17862` → after: `L17917-L17918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17917-L17918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17917-L17918) · [Before (L17861-L17862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17861-L17862)

```diff
-       RS(null === (GS = HS.rY[HS.HA][gS]) || void 0 === GS ? void 0 : GS._invincible);
-       const TS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|zIndex`, (SS => {
+       gk(null === (Hk = Fk.xR[Fk.oR][Ik]) || void 0 === Hk ? void 0 : Hk._invincible);
+       const mk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|zIndex`, (kk => {
```

#### 2445. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17865-L17866` → after: `L17921-L17922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17921-L17922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17921-L17922) · [Before (L17865-L17866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17865-L17866)

```diff
-       cS.setRenderingGroupId(vS, null !== (CS = null === (nS = HS.rY[HS.HA][gS]) || void 0 === nS ? void 0 : nS.zIndex) && void 0 !== CS ? CS : 0);
-       const oS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|overlayColour`, (SS => {
+       Ok.setRenderingGroupId(nk, null !== (Jk = null === (xk = Fk.xR[Fk.oR][Ik]) || void 0 === xk ? void 0 : xk.zIndex) && void 0 !== Jk ? Jk : 0);
+       const hk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|overlayColour`, (kk => {
```

#### 2446. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17873` → after: `L17929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17929) · [Before (L17873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17873)

```diff
-           const HS = (0, JS.M)(SS);
+           const Fk = (0, Sk.Y)(kk);
```

#### 2447. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17876` → after: `L17932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17932) · [Before (L17876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17876)

```diff
-         HS.FQ.JHS(gS).overlayColourOverride = bS
+         Fk.MJ.RFk(Ik).overlayColourOverride = Tk
```

#### 2448. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17878-L17880` → after: `L17934-L17936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17934-L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17934-L17936) · [Before (L17878-L17880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17878-L17880)

```diff
-       lS(null !== (PS = null === (QS = HS.rY[HS.HA][gS]) || void 0 === QS ? void 0 : QS.overlayColour) && void 0 !== PS ? PS : null);
-       const mS = AS.k.subscribe(`entityScale|${gS}`, (tS => {
-         ZH[(0, xS.e)(gS)] = tS, eS(HS, gS, SS, tS)
+       rk(null !== (Pk = null === (Kk = Fk.xR[Fk.oR][Ik]) || void 0 === Kk ? void 0 : Kk.overlayColour) && void 0 !== Pk ? Pk : null);
+       const Dk = bk.g.subscribe(`entityScale|${Ik}`, (Xk => {
+         SF[(0, yk.c)(Ik)] = Xk, Mk(Fk, Ik, kk, Xk)
```

#### 2449. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17885-L17886` → after: `L17941-L17942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17941-L17942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17941-L17942) · [Before (L17885-L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17885-L17886)

```diff
-         const XS = (0, bH.c)(gS),
-           NS = SS.FQ.getState((0, xS.e)(HS), XS.meshMetadata.type);
+         const ik = (0, iF.d)(Ik),
+           lk = kk.MJ.getState((0, yk.c)(Fk), ik.meshMetadata.type);
```

#### 2450. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17889` → after: `L17945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17945) · [Before (L17889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17889)

```diff
-           kY: qS
+           Ip: ak
```

#### 2451. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17894` → after: `L17950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17950) · [Before (L17894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17894)

```diff
-         } = (0, ZS.f)(tS, gS), IS = SS.Hj.fY, fS = (0, xS.e)(HS);
+         } = (0, zk.g)(Xk, Ik), Lk = kk.Xw.kp, tk = (0, yk.c)(Fk);
```

#### 2452. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17897` → after: `L17953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17953) · [Before (L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17897)

```diff
-           const SS = IS.TgS(qS, 0).scale;
+           const kk = Lk.XXk(ak, 0).scale;
```

#### 2453. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17900` → after: `L17956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17956) · [Before (L17900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17900)

```diff
-         const aS = tS * (null !== (bS = XS.modelScale) && void 0 !== bS ? bS : 1);
+         const jk = Xk * (null !== (Tk = ik.modelScale) && void 0 !== Tk ? Tk : 1);
```

#### 2454. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17902` → after: `L17958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17958) · [Before (L17902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17902)

```diff
-         const KS = SS.FQ.getState(fS, SS.FQ.names.XK);
+         const ek = kk.MJ.getState(tk, kk.MJ.names.Fe);
```

#### 2455. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17905-L17906` → after: `L17961-L17962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17961-L17962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17961-L17962) · [Before (L17905-L17906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17905-L17906)

```diff
-       const rS = AS.k.subscribe(`lifeformDisposed|${gS}`, (() => {
-         AS.k.unsubscribe(BS), AS.k.unsubscribe(FS), AS.k.unsubscribe(TS), AS.k.unsubscribe(oS), AS.k.unsubscribe(mS), AS.k.unsubscribe(rS), gS !== HS.HA && delete hH[gS]
+       const kF = bk.g.subscribe(`lifeformDisposed|${Ik}`, (() => {
+         bk.g.unsubscribe(dk), bk.g.unsubscribe(Ak), bk.g.unsubscribe(mk), bk.g.unsubscribe(hk), bk.g.unsubscribe(Dk), bk.g.unsubscribe(kF), Ik !== Fk.oR && delete zF[Ik]
```

#### 2456. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17908` → after: `L17964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17964) · [Before (L17908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17908)

```diff
-       AS.k.cj(`lifeformSetupFinished|${gS}`)
+       bk.g.GL(`lifeformSetupFinished|${Ik}`)
```

#### 2457. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17914-L17916` → after: `L17970-L17972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17970-L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17970-L17972) · [Before (L17914-L17916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17914-L17916)

```diff
-         Dt: gS,
-         wt: tS,
-         ht: bS
+         sX: Ik,
+         VX: Xk,
+         zX: Tk
```

#### 2458. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17918-L17920` → after: `L17974-L17976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17974-L17976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17974-L17976) · [Before (L17918-L17920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17918-L17920)

```diff
-       const XS = (0, xS.e)(gS);
-       qS.e[gS] = {
-         ...qS.e[gS],
+       const ik = (0, yk.c)(Ik);
+       ak.b[Ik] = {
+         ...ak.b[Ik],
```

#### 2459. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17922-L17923` → after: `L17978-L17979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17978-L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17978-L17979) · [Before (L17922-L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17922-L17923)

```diff
-       }, qS.e[XS] = {
-         ...qS.e[XS],
+       }, ak.b[ik] = {
+         ...ak.b[ik],
```

#### 2460. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17926` → after: `L17982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17982) · [Before (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17926)

```diff
-       const NS = (0, pS.e)().FQ.VHS(XS);
+       const lk = (0, fk.e)().MJ.YFk(ik);
```

#### 2461. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17928-L17930` → after: `L17984-L17986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17984-L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17984-L17986) · [Before (L17928-L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17928-L17930)

```diff
-       const uS = null !== (HS = NS.kY) && void 0 !== HS ? HS : null;
-       null !== uS && jH ? jH.Player.meshApi.updatePlayerCosmetic(XS, NS.kY, tS, bS) : console.error(`Error: ${XS} not ready for updateIngamePlayerCustomisation, ${null!==uS} ${!!jH}`)
-     }(0, XS.onGameReset)(qS.g);
+       const qk = null !== (Fk = lk.Ip) && void 0 !== Fk ? Fk : null;
+       null !== qk && HF ? HF.Player.meshApi.updatePlayerCosmetic(ik, lk.Ip, Xk, Tk) : console.error(`Error: ${ik} not ready for updateIngamePlayerCustomisation, ${null!==qk} ${!!HF}`)
+     }(0, ik.onGameReset)(ak.e);
```

#### 2462. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17936` → after: `L17992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17992) · [Before (L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17936)

```diff
-       return null !== (HS = hH[(0, xS.e)(SS)]) && void 0 !== HS ? HS : {}
+       return null !== (Fk = zF[(0, yk.c)(kk)]) && void 0 !== Fk ? Fk : {}
```

#### 2463. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17941` → after: `L17997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L17997) · [Before (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17941)

```diff
-       return null !== (HS = ZH[(0, xS.e)(SS)]) && void 0 !== HS ? HS : 1
+       return null !== (Fk = SF[(0, yk.c)(kk)]) && void 0 !== Fk ? Fk : 1
```

#### 2464. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17946` → after: `L18002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18002) · [Before (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17946)

```diff
-       return null !== (HS = null === (gS = hH[(0, xS.e)(SS)]) || void 0 === gS || null === (tS = gS.Helmet) || void 0 === tS ? void 0 : tS.itemName) && void 0 !== HS ? HS : null
+       return null !== (Fk = null === (Ik = zF[(0, yk.c)(kk)]) || void 0 === Ik || null === (Xk = Ik.Helmet) || void 0 === Xk ? void 0 : Xk.itemName) && void 0 !== Fk ? Fk : null
```

#### 2465. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17953` → after: `L18009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18009) · [Before (L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17953)

```diff
-         NS = (0, xS.e)(SS);
+         lk = (0, yk.c)(kk);
```

#### 2466. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17961-L17963` → after: `L18017-L18019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18017-L18019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18017-L18019) · [Before (L17961-L17963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17961-L17963)

```diff
-       const qS = XS.FQ.VHS(NS);
-       if (null === (null !== (bS = null === qS || void 0 === qS ? void 0 : qS.kY) && void 0 !== bS ? bS : null) || !jH) return;
-       const uS = (0, pS.b)().getLifeformType(NS),
+       const ak = ik.MJ.YFk(lk);
+       if (null === (null !== (Tk = null === ak || void 0 === ak ? void 0 : ak.Ip) && void 0 !== Tk ? Tk : null) || !HF) return;
+       const qk = (0, fk.c)().getLifeformType(lk),
```

#### 2467. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17965-L17966` → after: `L18021-L18022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18021-L18022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18021-L18022) · [Before (L17965-L17966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17965-L17966)

```diff
-       if (!(IS instanceof RS.e)) return;
-       const fS = gS ? dS.p[gS] : void 0;
+       if (!(Lk instanceof gk.b)) return;
+       const tk = Ik ? Ek.k[Ik] : void 0;
```

#### 2468. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17970-L17971` → after: `L18026-L18027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18026-L18027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18026-L18027) · [Before (L17970-L17971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17970-L17971)

```diff
-         const SS = gS ? (0, dS.l)(gS) : null,
-           bS = gS ? (0, cS.f)(gS) : null;
+         const kk = Ik ? (0, Ek.j)(Ik) : null,
+           Tk = Ik ? (0, Ok.i)(Ik) : null;
```

#### 2469. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17977` → after: `L18033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18033) · [Before (L17977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17977)

```diff
-       return "Player" === SS || "Player" === (0, bH.c)(SS).meshMetadata.lifeformTypeForModelOverride
+       return "Player" === kk || "Player" === (0, iF.d)(kk).meshMetadata.lifeformTypeForModelOverride
```

#### 2470. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17980` → after: `L18036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18036) · [Before (L17980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17980)

```diff
-         HA: SS
+         oR: kk
```

#### 2471. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17982` → after: `L18038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18038) · [Before (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17982)

```diff
-       for (const HS of aS.d) vH(SS, HS, null, null);
+       for (const Fk of jk.e) nF(kk, Fk, null, null);
```

#### 2472. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17986` → after: `L18042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18042) · [Before (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17986)

```diff
-   38162: (SS, HS, gS) => {
+   38123: (kk, Fk, Ik) => {
```

#### 2473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17990-L17994` → after: `L18046-L18050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18046-L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18046-L18050) · [Before (L17990-L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L17990-L17994)

```diff
-     var tS = gS(37294),
-       bS = gS(2910),
-       XS = gS(37432),
-       xS = gS(37113),
-       NS = gS(38169);
+     var Xk = Ik(37327),
+       Tk = Ik(2700),
+       ik = Ik(37455),
+       yk = Ik(37144),
+       lk = Ik(38126);
```

#### 2474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18008` → after: `L18064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18064) · [Before (L18008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18008)

```diff
-           if (void 0 !== gS[qS.name]) qS.lY("aAtlasIdx1", 1), qS.lY("aArmourTint", 4), qS.lY("aEnchantmentColour", 3), qS.lY("aEnchantmentSpeed", 1), qS.mY.aAtlasIdx1 = 0, qS.mY.aArmourTint = new tS.b(1, 1, 1, 0), qS.mY.aEnchantmentColour = new tS.Color3(0, 0, 0), qS.mY.aEnchantm … [truncated]
+           if (void 0 !== Ik[ak.name]) ak.jR("aAtlasIdx1", 1), ak.jR("aArmourTint", 4), ak.jR("aEnchantmentColour", 3), ak.jR("aEnchantmentSpeed", 1), ak.JR.aAtlasIdx1 = 0, ak.JR.aArmourTint = new Xk.b(1, 1, 1, 0), ak.JR.aEnchantmentColour = new Xk.Color3(0, 0, 0), ak.JR.aEnchantm … [truncated]
```

#### 2475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18010-L18012` → after: `L18066-L18068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18066-L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18066-L18068) · [Before (L18010-L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18010-L18012)

```diff
-             const SS = (0, NS.l)(bS.length);
-             for (let HS = 1; HS <= SS; HS++) qS.lY((0, NS.g)(HS), 4);
-             for (let HS = 1; HS <= SS; HS++) qS.mY[(0, NS.g)(HS)] = xS.Vector4.FromArray(bS, 4 * (HS - 1))
+             const kk = (0, lk.k)(Tk.length);
+             for (let Fk = 1; Fk <= kk; Fk++) ak.jR((0, lk.d)(Fk), 4);
+             for (let Fk = 1; Fk <= kk; Fk++) ak.JR[(0, lk.d)(Fk)] = yk.Vector4.FromArray(Tk, 4 * (Fk - 1))
```

#### 2476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18014` → after: `L18070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18070) · [Before (L18014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18014)

```diff
-           qS.lY("aOpacity", 1), qS.mY.aOpacity = 1, qS.lY("aLightLevels", 4), qS.mY.aLightLevels = (0, XS.o)()
+           ak.jR("aOpacity", 1), ak.JR.aOpacity = 1, ak.jR("aLightLevels", 4), ak.JR.aLightLevels = (0, ik.l)()
```

#### 2477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18018` → after: `L18074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18074) · [Before (L18018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18018)

```diff
-         const gS = (0, bS.e)().Hj.fY;
+         const Ik = (0, Tk.e)().Xw.kp;
```

#### 2478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18023` → after: `L18079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18079) · [Before (L18023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18023)

```diff
-         (0, bS.e)().Hj.fY.setGroupEnabled(SS, HS, gS)
+         (0, Tk.e)().Xw.kp.setGroupEnabled(kk, Fk, Ik)
```

#### 2479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18026-L18027` → after: `L18082-L18083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18082-L18083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18082-L18083) · [Before (L18026-L18027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18026-L18027)

```diff
-         const gS = (0, bS.e)().Hj.fY;
-         gS.set(SS, "aOpacity", HS), gS.JA(SS, "aOpacity", HS)
+         const Ik = (0, Tk.e)().Xw.kp;
+         Ik.set(kk, "aOpacity", Fk), Ik.pR(kk, "aOpacity", Fk)
```

#### 2480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18030-L18031` → after: `L18086-L18087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18086-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18086-L18087) · [Before (L18030-L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18030-L18031)

```diff
-         const gS = (0, bS.e)().Hj.fY;
-         gS.set(SS, "aLightLevels", HS), gS.JA(SS, "aLightLevels", HS)
+         const Ik = (0, Tk.e)().Xw.kp;
+         Ik.set(kk, "aLightLevels", Fk), Ik.pR(kk, "aLightLevels", Fk)
```

#### 2481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18034` → after: `L18090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18090) · [Before (L18034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18034)

```diff
-         const gS = (0, bS.e)().Hj.fY;
+         const Ik = (0, Tk.e)().Xw.kp;
```

#### 2482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18040-L18041` → after: `L18096-L18097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18096-L18097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18096-L18097) · [Before (L18040-L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18040-L18041)

```diff
-           } = (0, NS.j)(Number(tS));
-           this.playerAtlasVec4s[SS][bS - 1][XS] = HS[tS], gS.setGroup(SS, "notArmour", `aAtlasIdx${bS}`, this.playerAtlasVec4s[SS][bS - 1])
+           } = (0, lk.g)(Number(Xk));
+           this.playerAtlasVec4s[kk][Tk - 1][ik] = Fk[Xk], Ik.setGroup(kk, "notArmour", `aAtlasIdx${Tk}`, this.playerAtlasVec4s[kk][Tk - 1])
```

#### 2483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18046` → after: `L18102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18102) · [Before (L18046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18046)

```diff
-   38158: (SS, HS, gS) => {
+   38118: (kk, Fk, Ik) => {
```

#### 2484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18048` → after: `L18104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18104) · [Before (L18048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18048)

```diff
-       e: () => CS
+       b: () => Jk
```

#### 2485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18050` → after: `L18106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18106) · [Before (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18050)

```diff
-     var tS = gS(402),
+     var Xk = Ik(354),
```

#### 2486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18052-L18062` → after: `L18108-L18118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18108-L18118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18108-L18118) · [Before (L18052-L18062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18052-L18062)

```diff
-       XS = gS(3366),
-       xS = gS(37890),
-       NS = gS(2340),
-       qS = gS(38162),
-       uS = gS(2910),
-       IS = gS(387),
-       fS = gS(38173),
-       kS = gS(2692),
-       aS = gS(37101),
-       KS = gS(37419),
-       jS = gS(37885);
+       ik = Ik(3134),
+       yk = Ik(37855),
+       lk = Ik(2148),
+       ak = Ik(38123),
+       qk = Ik(2700),
+       Lk = Ik(337),
+       tk = Ik(38132),
+       Zk = Ik(2492),
+       jk = Ik(37134),
+       ek = Ik(37438),
+       wk = Ik(37848);
```

#### 2487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18071-L18073` → after: `L18127-L18129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18127-L18129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18127-L18129) · [Before (L18071-L18073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18071-L18073)

```diff
-         tS ??= (0, kS.b)(gS);
-         const XS = (0, NS.j)(gS, tS);
-         if (!XS) return void console.error(`Error: ${tS} not a valid cosmetic of type ${gS}`);
+         Xk ??= (0, Zk.c)(Ik);
+         const ik = (0, lk.k)(Ik, Xk);
+         if (!ik) return void console.error(`Error: ${Xk} not a valid cosmetic of type ${Ik}`);
```

#### 2488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18076` → after: `L18132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18132) · [Before (L18076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18076)

```diff
-         const IS = fS.e.indexOf(gS);
+         const Lk = tk.b.indexOf(Ik);
```

#### 2489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18079` → after: `L18135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18135) · [Before (L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18079)

```diff
-           const SS = null !== (jS = XS.atlasIdx) && void 0 !== jS ? jS : (0, NS.j)(gS, `${gS}_none`).atlasIdx;
+           const kk = null !== (wk = ik.atlasIdx) && void 0 !== wk ? wk : (0, lk.k)(Ik, `${Ik}_none`).atlasIdx;
```

#### 2490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18086` → after: `L18142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18142) · [Before (L18086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18086)

```diff
-             FQ: HS
+             MJ: Fk
```

#### 2491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18100-L18101` → after: `L18156-L18157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18156-L18157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18156-L18157) · [Before (L18100-L18101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18100-L18101)

```diff
-           fS = qS.FQ.VHS(SS);
-         if (!fS) return void console.error(`Error: ${SS} not ready for updatePlayerArmour, ${fS}`);
+           tk = ak.MJ.YFk(kk);
+         if (!tk) return void console.error(`Error: ${kk} not ready for updatePlayerArmour, ${tk}`);
```

#### 2492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18103` → after: `L18159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18159) · [Before (L18103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18103)

```diff
-           aS = qS.Hj.fY,
+           jk = ak.Xw.kp,
```

#### 2493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18105` → after: `L18161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18161) · [Before (L18105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18105)

```diff
-             kY: KS
+             Ip: ek
```

#### 2494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18112` → after: `L18168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18168) · [Before (L18112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18112)

```diff
-             const HS = (0, jS.c)(bS);
+             const Fk = (0, wk.e)(Tk);
```

#### 2495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18114` → after: `L18170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18170) · [Before (L18114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18114)

```diff
-             const NS = null !== (GS = xS.r[bS]) && void 0 !== GS ? GS : xS.r.None;
+             const lk = null !== (Hk = yk.p[Tk]) && void 0 !== Hk ? Hk : yk.p.None;
```

#### 2496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18116` → after: `L18172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18172) · [Before (L18116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18116)

```diff
-             const qS = null !== (CS = IS._[bS]) && void 0 !== CS ? CS : IS._.None;
+             const ak = null !== (Jk = Lk.ob[Tk]) && void 0 !== Jk ? Jk : Lk.ob.None;
```

#### 2497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18125` → after: `L18181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18181) · [Before (L18125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18125)

```diff
-             FQ: tS
+             MJ: Xk
```

#### 2498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18127-L18129` → after: `L18183-L18185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18183-L18185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18183-L18185) · [Before (L18127-L18129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18127-L18129)

```diff
-           XS = SS === gS.HA ? tS.zB(SS).JF : tS.lC(SS),
-           xS = SS === gS.HA ? bS().ZERO : gS.Zk,
-           NS = gS.Hj.fY;
+           ik = kk === Ik.oR ? Xk.ZY(kk).Im : Xk.OJ(kk),
+           yk = kk === Ik.oR ? Tk().ZERO : Ik.SZ,
+           lk = Ik.Xw.kp;
```

#### 2499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18134` → after: `L18190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18190) · [Before (L18134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18134)

```diff
-           XS = SS.TgS(HS, 0);
+           ik = kk.XXk(Fk, 0);
```

#### 2500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18162` → after: `L18218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18218) · [Before (L18162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18162)

```diff
-   38184: (SS, HS, gS) => {
+   38143: (kk, Fk, Ik) => {
```

#### 2501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18164` → after: `L18220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18220) · [Before (L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18164)

```diff
-       c: () => NH
+       d: () => iF
```

#### 2502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18166-L18173` → after: `L18222-L18229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18222-L18229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18222-L18229) · [Before (L18166-L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18166-L18173)

```diff
-     var tS = gS(38496),
-       bS = gS(38502),
-       XS = gS(36785),
-       xS = gS(38141),
-       NS = gS(38188),
-       qS = gS(31),
-       uS = gS(37261),
-       IS = gS(37417);
+     var Xk = Ik(38453),
+       Tk = Ik(38460),
+       ik = Ik(36783),
+       yk = Ik(38105),
+       lk = Ik(38145),
+       ak = Ik(34),
+       qk = Ik(37299),
+       Lk = Ik(37435);
```

#### 2503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18176` → after: `L18232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18232) · [Before (L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18176)

```diff
-         this.bloxd = SS, this.eId = HS, this.lifeformType = void 0, this.qk = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = gS, this.qk = SS.qk
+         this.bloxd = kk, this.eId = Fk, this.lifeformType = void 0, this.qZ = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = Ik, this.qZ = kk.qZ
```

#### 2504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18180` → after: `L18236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18236) · [Before (L18180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18180)

```diff
-         !this.bloxd.getEntityName(this.eId) && HS.defaultName && this.bloxd.setEntityName(this.eId, HS.defaultName), this.qk.FQ.add([SS.x, SS.y, SS.z], HS.physicsBodyDimensions.width, HS.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.qk.FQ.VY(this.eId, this.qk. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && Fk.defaultName && this.bloxd.setEntityName(this.eId, Fk.defaultName), this.qZ.MJ.add([kk.x, kk.y, kk.z], Fk.physicsBodyDimensions.width, Fk.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.qZ.MJ.Tu(this.eId, this.qZ. … [truncated]
```

#### 2505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18183-L18186` → after: `L18239-L18242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18239-L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18239-L18242) · [Before (L18183-L18186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18183-L18186)

```diff
-           const gS = this.qk.Hj.fY,
-             tS = null !== (SS = null === (HS = this.qk.FQ.tHS(this.eId)) || void 0 === HS ? void 0 : HS.kY) && void 0 !== SS ? SS : null,
-             bS = (0, IS.l)(this.eId);
-           null === tS && console.error(`Error: ${this.eId} not ready for pickability change to ${bS}`), gS.setPickable(tS, bS)
+           const Ik = this.qZ.Xw.kp,
+             Xk = null !== (kk = null === (Fk = this.qZ.MJ.eFk(this.eId)) || void 0 === Fk ? void 0 : Fk.Ip) && void 0 !== kk ? kk : null,
+             Tk = (0, Lk.g)(this.eId);
+           null === Xk && console.error(`Error: ${this.eId} not ready for pickability change to ${Tk}`), Ik.setPickable(Xk, Tk)
```

#### 2506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18188` → after: `L18244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18244) · [Before (L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18188)

```diff
-         this.canAttackSub = qS.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, gS), this.interactableSub = qS.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, gS), this.multilineTextBoxSub = (0, uS.u)(this.qk, this.eId), (0, xS.q)(this.lifeformType, this.qk, t … [truncated]
+         this.canAttackSub = ak.g.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Ik), this.interactableSub = ak.g.subscribe(`otherEntitySettings|${this.eId}|interactable`, Ik), this.multilineTextBoxSub = (0, qk.p)(this.qZ, this.eId), (0, yk.s)(this.lifeformType, this.qZ, t … [truncated]
```

#### 2507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18191` → after: `L18247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18247) · [Before (L18191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18191)

```diff
-         const gS = this.qk.FQ.uHS(this.eId);
+         const Ik = this.qZ.MJ.KFk(this.eId);
```

#### 2508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18195-L18196` → after: `L18251-L18252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18251-L18252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18251-L18252) · [Before (L18195-L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18195-L18196)

```diff
-             if ("yRotation" === SS ? gS.heading = HS : void 0 !== gS[SS] && (gS[SS] = HS), "armSwinging" === SS && HS) {
-               const SS = this.qk.FQ.VHS(this.eId);
+             if ("yRotation" === kk ? Ik.heading = Fk : void 0 !== Ik[kk] && (Ik[kk] = Fk), "armSwinging" === kk && Fk) {
+               const kk = this.qZ.MJ.YFk(this.eId);
```

#### 2509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18198` → after: `L18254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18254) · [Before (L18198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18198)

```diff
-             } else if ("xRotation" === SS || "yRotation" === SS || "zRotation" === SS)(0, uS.x)(this.qk, this.eId, SS, HS);
+             } else if ("xRotation" === kk || "yRotation" === kk || "zRotation" === kk)(0, qk.t)(this.qZ, this.eId, kk, Fk);
```

#### 2510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18201-L18202` → after: `L18257-L18258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18257-L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18257-L18258) · [Before (L18201-L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18201-L18202)

```diff
-               const SS = this.qk.FQ.YHS(this.eId);
-               SS.networkedHeldItemName = HS, (0, NS.updateHeldItemState)(this.qk, SS)
+               const kk = this.qZ.MJ.fFk(this.eId);
+               kk.networkedHeldItemName = Fk, (0, lk.updateHeldItemState)(this.qZ, kk)
```

#### 2511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18204-L18205` → after: `L18260-L18261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18260-L18261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18260-L18261) · [Before (L18204-L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18204-L18205)

```diff
-               const SS = this.qk.FQ.YHS(this.eId);
-               SS.networkedHeldItemEnchantmentTier = HS, (0, NS.updateHeldItemState)(this.qk, SS)
+               const kk = this.qZ.MJ.fFk(this.eId);
+               kk.networkedHeldItemEnchantmentTier = Fk, (0, lk.updateHeldItemState)(this.qZ, kk)
```

#### 2512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18211` → after: `L18267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18267) · [Before (L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18211)

```diff
-         this.qk.FQ.deleteEntity(this.eId), qS.k.cj(`lifeformDisposed|${(0,XS.e)(this.eId)}`), "Player" === this.lifeformType && qS.k.cj("playerNamesUpdated"), qS.k.unsubscribe(this.canAttackSub), qS.k.unsubscribe(this.interactableSub), qS.k.unsubscribe(this.multilineTextBoxSub)
+         this.qZ.MJ.deleteEntity(this.eId), ak.g.GL(`lifeformDisposed|${(0,ik.c)(this.eId)}`), "Player" === this.lifeformType && ak.g.GL("playerNamesUpdated"), ak.g.unsubscribe(this.canAttackSub), ak.g.unsubscribe(this.interactableSub), ak.g.unsubscribe(this.multilineTextBoxSub)
```

#### 2513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18214-L18216` → after: `L18270-L18272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18270-L18272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18270-L18272) · [Before (L18214-L18216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18214-L18216)

```diff
-         this.bloxd.setEntityName(this.eId, SS), this.bloxd.setEntityName((0, XS.e)(this.eId), SS);
-         const HS = this.qk.FQ;
-         if (HS.yHS(this.eId)) qS.k.cj(`entityNameChanged|${this.eId}`);
+         this.bloxd.setEntityName(this.eId, kk), this.bloxd.setEntityName((0, ik.c)(this.eId), kk);
+         const Fk = this.qZ.MJ;
+         if (Fk.dFk(this.eId)) ak.g.GL(`entityNameChanged|${this.eId}`);
```

#### 2514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18219` → after: `L18275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18275) · [Before (L18219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18219)

```diff
-           HS.VY(this.eId, HS.names.entityName, {
+           Fk.Tu(this.eId, Fk.names.entityName, {
```

#### 2515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18223` → after: `L18279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18279) · [Before (L18223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18223)

```diff
-         "Player" === this.lifeformType && qS.k.cj("playerNamesUpdated")
+         "Player" === this.lifeformType && ak.g.GL("playerNamesUpdated")
```

#### 2516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18226-L18232` → after: `L18282-L18288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18282-L18288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18282-L18288) · [Before (L18226-L18232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18226-L18232)

```diff
-     var kS, aS, KS = gS(38158),
-       jS = gS(672),
-       GS = gS(37367),
-       CS = gS(2910),
-       nS = gS(3811),
-       PS = gS(3870),
-       QS = gS(38102);
+     var Zk, jk, ek = Ik(38118),
+       wk = Ik(621),
+       Hk = Ik(37401),
+       Jk = Ik(2700),
+       xk = Ik(3631),
+       Pk = Ik(3702),
+       Kk = Ik(38084);
```

#### 2517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18241-L18242` → after: `L18297-L18298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18297-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18297-L18298) · [Before (L18241-L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18241-L18242)

```diff
-           (0, QS.setRigAiState)(this.qk, this.eId, null !== (gS = jS.k[HS]) && void 0 !== gS ? gS : null)
-         } else "armSwinging" === SS && HS && !this.qk.FQ.VHS(this.eId) && (0, QS.playRigAction)(this.qk, this.eId, GS.q)
+           (0, Kk.setRigAiState)(this.qZ, this.eId, null !== (Ik = wk.l[Fk]) && void 0 !== Ik ? Ik : null)
+         } else "armSwinging" === kk && Fk && !this.qZ.MJ.YFk(this.eId) && (0, Kk.playRigAction)(this.qZ, this.eId, Hk.r)
```

#### 2518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18246` → after: `L18302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18302) · [Before (L18246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18246)

```diff
-         return this.qk.FQ.getState(this.eId, SS.meshMetadata.type).kY
+         return this.qZ.MJ.getState(this.eId, kk.meshMetadata.type).Ip
```

#### 2519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18249` → after: `L18305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18305) · [Before (L18249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18249)

```diff
-         xS.b[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, SS)
+         yk.c[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, kk)
```

#### 2520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18252-L18267` → after: `L18308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18308) · [Before (L18252-L18267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18252-L18267)

```diff
-     const wS = [12, 0, 1, "h", "c", 175, 9, 7, "e", 74, 4, 8, 255, "length", "d", 227, 233, "f", "undefined", void 0, 2, 151, 239, 249, 57, 63, 6, "fromCodePoint", "push", "a", "b", 3, 33, 117, 180, 129, 91, 229, 80, 8191, 88, 13, 14, 121, "i", 211, 186, 165, 5, 172, !1, 62, 20,  … [truncated]
- 
-     function hS(...SS) {
-       return SS[wS[13]] = wS[2], typeof kS[SS[wS[1]]] === wS[18] ? kS[SS[wS[1]]] = function(...SS) {
-         for (OS(SS[wS[13]] = wS[2], SS[-wS[5]] = 'eiabhAGmcn<upKH{8"Pt[~4d@;7XDv,f6MqL+U)53>yT!x_JZsO]g=B9IYQjC%VW`kN*RFl?(Sr|^E}w#&0.z12$/:o', SS[wS[0]] = "" + (SS[wS[1]] || ""), SS[wS[4]] = SS[wS[0]].length, SS[wS[10]] = [], SS[wS[8]] = wS[1], SS[wS[9]] = wS[1], SS[wS[7]] = -wS … [truncated]
-           if (SS[wS[6]] = SS[-wS[5]].indexOf(SS[wS[0]][SS[wS[3]]]), SS[wS[6]] !== -wS[2])
-             if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[6]];
-             else {
-               OS(SS[wS[7]] += SS[wS[6]] * wS[36], SS[wS[8]] |= SS[wS[7]] << SS[wS[9]], SS[wS[9]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
-               do {
-                 OS(SS[wS[10]].push(SS[wS[8]] & wS[12]), SS[wS[8]] >>= wS[11], SS[wS[9]] -= wS[11])
-               } while (SS[wS[9]] > wS[7]);
-               SS[wS[7]] = -wS[2]
-             } return SS[wS[7]] > -wS[2] && SS[wS[10]].push((SS[wS[8]] | SS[wS[7]] << SS[wS[9]]) & wS[12]), ZS(SS[wS[10]])
-       }(aS[SS[wS[1]]]) : kS[SS[wS[1]]]
-     }
+     const sk = ["b", 0, 1, 24, 99, "a", 115, "g", 138, "f", 4, 8, 255, "length", 81, 2, 212, "e", "undefined", void 0, 211, 87, 3, 63, 6, "fromCodePoint", 7, 12, "push", "c", 48, 28, 124, 213, 149, 91, 5, 217, 8191, 88, 13, 14, 118, "h", 150, 9, 190, 187, "d", 183, !0, !1, 86, 19 … [truncated]
```

#### 2521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18278-L18279` → after: `L18319-L18320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18319-L18320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18319-L18320) · [Before (L18278-L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18278-L18279)

```diff
-     OS(kS = {}, aS = ["]YJhMgclh", "!G9^vSUm:H<RDbJ7gYo=w.}QBK#*xsR)o=VfD", '!"Qc7B++&W$4y;sX6Z3,VC|ikpzWn8b@P3P(qsdi', ':IY6E+#@0n2;JaD,csnGjE8gX"/ro&Q>(Rwh]E5|R`ODqKyf1e', "][N6MSrpaYXbAz#qO7}grCwFOBr=>hSffi", "vv.A>Rc,GQJj>8P3", '6nN]Awg2o[2Pk(ut6BqXeQx1G`c|$)<7>k+9Z|JWn"e]OU! … [truncated]
-       OS(SS[wS[13]] = wS[1], SS[-wS[16]] = [function() {
+     Sk(Zk = {}, jk = ["S1@H~0Ujr:Nx*=o7(LXg4tZ`fEzFuSYIx>M[^`EG:odP/", "lnd1Se$)*d(yfS>m5*~p,", 'u6b1(H)m[)?qkv7e"]cgm#[&^EI_fn>#o62jo<C&*T', "F@3J^;Ymo,DFU+dxFn5AZ+9qqDA]G", "/%wZ]89qgS9nM=^?I<!1PcR{w+(z(YM]", "`?|M+*<AV:Fs}#97v]@pRcmtDawgghiBo!G>Q$KD^y8_5:xxv>+UN~/", "11~MSJEm< … [truncated]
+       Sk(kk[sk[13]] = sk[1], kk[sk[16]] = [function() {
```

#### 2522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18287` → after: `L18328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18328) · [Before (L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18287)

```diff
-       }], SS[wS[4]] = wS[19], SS[wS[14]] = []);
+       }], kk[-sk[14]] = sk[19], kk[sk[15]] = []);
```

#### 2523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18289` → after: `L18330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18330) · [Before (L18289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18289)

```diff
-         OS(SS[wS[4]] = Object, SS[wS[14]][wS[28]]("".__proto__.constructor.name))
+         Sk(kk[-sk[14]] = Object, kk[sk[15]][sk[28]]("".__proto__.constructor.name))
```

#### 2524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18291-L18294` → after: `L18332-L18335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18332-L18335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18332-L18335) · [Before (L18291-L18294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18291-L18294)

```diff
-       SS: for (SS[wS[15]] = wS[1]; SS[wS[15]] < SS[-wS[16]][wS[13]]; SS[wS[15]]++) try {
-         for (SS[wS[4]] = SS[-wS[16]][SS[wS[15]]](), SS[wS[17]] = wS[1]; SS[wS[17]] < SS[wS[14]][wS[13]]; SS[wS[17]]++)
-           if (typeof SS[wS[4]][SS[wS[14]][SS[wS[17]]]] === wS[18]) continue SS;
-         return SS[wS[4]]
+       kk: for (kk[sk[11]] = sk[1]; kk[sk[11]] < kk[sk[16]][sk[13]]; kk[sk[11]]++) try {
+         for (kk[-sk[14]] = kk[sk[16]][kk[sk[11]]](), kk[sk[17]] = sk[1]; kk[sk[17]] < kk[sk[15]][sk[13]]; kk[sk[17]]++)
+           if (typeof kk[-sk[14]][kk[sk[15]][kk[sk[17]]]] === sk[18]) continue kk;
+         return kk[-sk[14]]
```

#### 2525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18296-L18298` → after: `L18337-L18339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18337-L18339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18337-L18339) · [Before (L18296-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18296-L18298)

```diff
-       return SS[wS[4]] || this
-     }() || {}, ES = vS.TextDecoder, LS = vS.Uint8Array, YS = vS.CK, AS = vS.String || String, yS = vS.Array || Array, VS = function(...SS) {
-       return OS(SS[wS[13]] = wS[1], SS[wS[29]] = new yS(wS[66]), SS[wS[30]] = AS[wS[27]] || AS.fromCharCode, SS[wS[20]] = []),
+       return kk[-sk[14]] || this
+     }() || {}, nk = Ok.TextDecoder, Gk = Ok.Uint8Array, pk = Ok.je, uk = Ok.String || String, bk = Ok.Array || Array, Rk = function(...kk) {
+       return Sk(kk[sk[13]] = sk[1], kk[sk[29]] = new bk(128), kk[-sk[30]] = uk[sk[25]] || uk.fromCharCode, kk[-sk[20]] = []),
```

#### 2526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18300-L18310` → after: `L18341-L18345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18341-L18345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18341-L18345) · [Before (L18300-L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18300-L18310)

```diff
-           for (OS(HS[wS[13]] = wS[2], HS[-wS[24]] = wS[19], HS[wS[23]] = wS[19], HS[wS[22]] = HS[wS[1]][wS[13]], SS[wS[20]][wS[13]] = wS[1]), HS[wS[21]] = wS[1]; HS[wS[21]] < HS[wS[22]];) OS(HS[wS[23]] = HS[wS[1]][HS[wS[21]]++], HS[wS[23]] <= wS[65] ? HS[-wS[24]] = HS[wS[23]] : H … [truncated]
-           return SS[wS[20]].join("")
-         }
-     }()), hS(96) in JS && function(...SS) {
-       OS(SS[wS[13]] = wS[1], SS[wS[30]] = function(...SS) {
-         for (OS(SS[wS[13]] = wS[2], SS[wS[29]] = SS[wS[1]].length, SS[-wS[33]] = [], SS[wS[31]] = wS[1]), SS[-wS[32]] = wS[1]; SS[-wS[32]] < SS[wS[29]]; SS[-wS[32]]++) SS[-wS[33]].push(SS[-wS[32]] !== wS[1] && SS[wS[1]][SS[-wS[32]]] > SS[wS[1]][SS[-wS[32]] - wS[2]] ? SS[-wS[33]][ … [truncated]
-         for (SS[wS[8]] = SS[wS[29]] - wS[2]; SS[wS[8]] >= wS[1]; SS[wS[8]]--) SS[wS[8]] !== SS[wS[29]] - wS[2] && SS[wS[1]][SS[wS[8]]] > SS[wS[1]][SS[wS[8]] + wS[2]] && (SS[-wS[33]][SS[wS[8]]] = Math.max(SS[-wS[33]][SS[wS[8]]], SS[-wS[33]][SS[wS[8]] + wS[2]] + wS[2])), SS[wS[31]] … [truncated]
-         return SS[wS[31]]
-       }, console.log(SS[wS[30]]))
-     }(), (() => {
-       if (wS[53]) {
+           for (Sk(Fk[sk[13]] = sk[2], Fk[sk[5]] = sk[19], Fk[sk[0]] = sk[19], Fk[sk[22]] = Fk[sk[1]][sk[13]], kk[-sk[20]][sk[13]] = sk[1]), Fk[-sk[21]] = sk[1]; Fk[-sk[21]] < Fk[sk[22]];) Sk(Fk[sk[0]] = Fk[sk[1]][Fk[-sk[21]]++], Fk[sk[0]] <= 127 ? Fk[sk[5]] = Fk[sk[0]] : Fk[sk[0] … [truncated]
+           return kk[-sk[20]].join("")
+         }
+     }()), (() => {
+       if (sk[50]) {
```

#### 2527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18312-L18314` → after: `L18347-L18349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18347-L18349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18347-L18349) · [Before (L18312-L18314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18312-L18314)

```diff
-           for (OS(SS[wS[13]] = wS[2], SS[wS[37]] = 'vkKPoTqALJMnrclHw}5"#B24%tZpe03!)b6<:VCfDOX8UQNEY/@[h`ua.>S?zi{~d]9&,*g+j7$;^y1R(FsG_I|mxW=', SS[wS[30]] = "" + (SS[wS[1]] || ""), SS[wS[4]] = SS[wS[30]].length, SS[wS[10]] = [], SS[wS[8]] = wS[1], SS[wS[26]] = wS[1], SS[wS[7]]  … [truncated]
-             if (SS[wS[44]] = SS[wS[37]].indexOf(SS[wS[30]][SS[wS[3]]]), SS[wS[44]] !== -wS[2])
-               if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[44]];
+           for (Sk(kk[sk[13]] = sk[2], kk[sk[5]] = 'K;&(*6=7$+%,Fl?qnPyfLUudIXZ)28tz<Ym_O}Js#3j^{EW5D"/>H|v.!i]Qxr0~w`pGSoMCTkBAbN4Vc@[a:Rheg19', kk[sk[31]] = "" + (kk[sk[1]] || ""), kk[sk[22]] = kk[sk[31]].length, kk[sk[10]] = [], kk[sk[36]] = sk[1], kk[sk[37]] = sk[1], kk[-sk[34 … [truncated]
+             if (kk[-sk[33]] = kk[sk[5]].indexOf(kk[sk[31]][kk[sk[32]]]), kk[-sk[33]] !== -sk[2])
+               if (kk[-sk[34]] < sk[1]) kk[-sk[34]] = kk[-sk[33]];
```

#### 2528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18316` → after: `L18351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18351) · [Before (L18316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18316)

```diff
-                 OS(SS[wS[7]] += SS[wS[44]] * wS[36], SS[wS[8]] |= SS[wS[7]] << SS[wS[26]], SS[wS[26]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
+                 Sk(kk[-sk[34]] += kk[-sk[33]] * sk[35], kk[sk[36]] |= kk[-sk[34]] << kk[sk[37]], kk[sk[37]] += (kk[-sk[34]] & sk[38]) > sk[39] ? sk[40] : sk[41]);
```

#### 2529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18318-L18321` → after: `L18353-L18356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18353-L18356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18353-L18356) · [Before (L18318-L18321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18318-L18321)

```diff
-                   OS(SS[wS[10]].push(SS[wS[8]] & wS[12]), SS[wS[8]] >>= wS[11], SS[wS[26]] -= wS[11])
-                 } while (SS[wS[26]] > wS[7]);
-                 SS[wS[7]] = -wS[2]
-               } return SS[wS[7]] > -wS[2] && SS[wS[10]].push((SS[wS[8]] | SS[wS[7]] << SS[wS[26]]) & wS[12]), ZS(SS[wS[10]])
+                   Sk(kk[sk[10]].push(kk[sk[36]] & sk[12]), kk[sk[36]] >>= sk[11], kk[sk[37]] -= sk[11])
+                 } while (kk[sk[37]] > sk[26]);
+                 kk[-sk[34]] = -sk[2]
+               } return kk[-sk[34]] > -sk[2] && kk[sk[10]].push((kk[sk[36]] | kk[-sk[34]] << kk[sk[37]]) & sk[12]), Vk(kk[sk[10]])
```

#### 2530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18327` → after: `L18362-L18363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18362-L18363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18362-L18363) · [Before (L18327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18327)

```diff
-         let gS = wS[50];
+         Fk(78);
+         let Ik = sk[51];
```

#### 2531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18329-L18370` → after: `L18365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18365) · [Before (L18329-L18370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18329-L18370)

```diff
-           if (!gS && (0, CS[wS[8]])()) {
-             function SS(...SS) {
-               for (OS(SS[wS[13]] = wS[2], SS[wS[55]] = '+eiNHMhgAYdKoBtarbpskmlWQCjqRTSIZVFPX{Jc6GnO>`E<D^(U}Lzfy#:_,*3@89"|~xw!v=205;4)7/u%?.[]1&$', SS[wS[30]] = "" + (SS[wS[1]] || ""), SS[wS[54]] = SS[wS[30]].length, SS[wS[14]] = [], SS[wS[48]] = wS[1], SS[wS[26]] = wS[1], SS[w … [truncated]
-                 if (SS[wS[44]] = SS[wS[55]].indexOf(SS[wS[30]][SS[wS[11]]]), SS[wS[44]] !== -wS[2])
-                   if (SS[wS[56]] < wS[1]) SS[wS[56]] = SS[wS[44]];
-                   else {
-                     OS(SS[wS[56]] += SS[wS[44]] * wS[36], SS[wS[48]] |= SS[wS[56]] << SS[wS[26]], SS[wS[26]] += (SS[wS[56]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
-                     do {
-                       OS(SS[wS[14]].push(SS[wS[48]] & wS[12]), SS[wS[48]] >>= wS[11], SS[wS[26]] -= wS[11])
-                     } while (SS[wS[26]] > wS[7]);
-                     SS[wS[56]] = -wS[2]
-                   } return SS[wS[56]] > -wS[2] && SS[wS[14]].push((SS[wS[48]] | SS[wS[56]] << SS[wS[26]]) & wS[12]), ZS(SS[wS[14]])
-             }
- 
-             function HS(...HS) {
-               return HS[wS[13]] = wS[2], typeof kS[HS[wS[1]]] === wS[18] ? kS[HS[wS[1]]] = SS(aS[HS[wS[1]]]) : kS[HS[wS[1]]]
- ... (26 more removed lines; see GitHub link above)
+           if (!Ik && (0, Jk[sk[17]])()) {
```

#### 2532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18372-L18374` → after: `L18367-L18369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18367-L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18367-L18369) · [Before (L18372-L18374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18372-L18374)

```diff
-               for (OS(SS[wS[13]] = wS[2], SS[wS[29]] = 'dSwV>#?&)Nxz"{(51K,4^79+:@6!8|;v]lGy[q_W*.2F<=prE~$%I}/DCuc3eX`0JLtsnMiThZUYbHBkAPfQgoRjamO', SS[wS[20]] = "" + (SS[wS[1]] || ""), SS[wS[31]] = SS[wS[20]].length, SS[wS[14]] = [], SS[wS[48]] = wS[1], SS[wS[57]] = wS[1], SS[w … [truncated]
-                 if (SS[wS[6]] = SS[wS[29]].indexOf(SS[wS[20]][SS[wS[3]]]), SS[wS[6]] !== -wS[2])
-                   if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[6]];
+               for (Sk(kk[sk[13]] = sk[2], kk[sk[2]] = 'X[PlVqESfLdnDMRgUmcKIaN0i|/G,8}>v6Q$xwW(j_zCk9Jht+!p*s`:b?)T~51@YB4.=^o2He;%#{u<3]yAFZOr&7"', kk[sk[0]] = "" + (kk[sk[1]] || ""), kk[-sk[44]] = kk[sk[0]].length, kk[sk[37]] = [], kk[sk[17]] = sk[1], kk[sk[24]] = sk[1], kk[sk[ … [truncated]
+                 if (kk[sk[45]] = kk[sk[2]].indexOf(kk[sk[0]][kk[sk[43]]]), kk[sk[45]] !== -sk[2])
+                   if (kk[sk[7]] < sk[1]) kk[sk[7]] = kk[sk[45]];
```

#### 2533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18376` → after: `L18371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18371) · [Before (L18376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18376)

```diff
-                     OS(SS[wS[7]] += SS[wS[6]] * wS[36], SS[wS[48]] |= SS[wS[7]] << SS[wS[57]], SS[wS[57]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
+                     Sk(kk[sk[7]] += kk[sk[45]] * sk[35], kk[sk[17]] |= kk[sk[7]] << kk[sk[24]], kk[sk[24]] += (kk[sk[7]] & sk[38]) > sk[39] ? sk[40] : sk[41]);
```

#### 2534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18378-L18379` → after: `L18373-L18374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18373-L18374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18373-L18374) · [Before (L18378-L18379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18378-L18379)

```diff
-                       OS(SS[wS[14]].push(SS[wS[48]] & wS[12]), SS[wS[48]] >>= wS[11], SS[wS[57]] -= wS[11])
-                     } while (SS[wS[57]] > wS[7]);
+                       Sk(kk[sk[37]].push(kk[sk[17]] & sk[12]), kk[sk[17]] >>= sk[11], kk[sk[24]] -= sk[11])
+                     } while (kk[sk[24]] > sk[26]);
```

#### 2535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18381-L18385` → after: `L18376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18376) · [Before (L18381-L18385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18381-L18385)

```diff
-                   } return SS[wS[7]] > -wS[2] && SS[wS[14]].push((SS[wS[48]] | SS[wS[7]] << SS[wS[57]]) & wS[12]), ZS(SS[wS[14]])
-             }
- 
-             function tS(SS) {
-               return typeof kS[SS] === wS[18] ? kS[SS] = gS(aS[SS]) : kS[SS]
+                   } return kk[sk[7]] > -sk[2] && kk[sk[37]].push((kk[sk[17]] | kk[sk[7]] << kk[sk[24]]) & sk[12]), Vk(kk[sk[37]])
```

#### 2536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18389-L18406` → after: `L18380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a2b369021a564070addea8a9b2dc054ee1e11c07...build/bloxd.io/31kiid.1299b0d6#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/31kiid.1299b0d6/bundles/bloxd.io/chunks/js/119.js#L18380) · [Before (L18389-L18406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a2b369021a564070addea8a9b2dc054ee1e11c07/bundles/bloxd.io/chunks/js/119.js#L18389-L18406)

```diff
-               SS[wS[13]] = wS[2];
-               const HS = {};
-               for (let gS of SS[wS[1]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + wS[2] || wS[2];
-               return HS
-             }
- 
-             function XS(...SS) {
-               SS[wS[13]] = wS[20];
-               const HS = buildCharMap(SS[wS[1]]),
-                 gS = buildCharMap(SS[wS[2]]);
-               for (let tS in HS)
-                 if (HS[tS] !== gS[tS]) return wS[50];
-               return Object.keys(HS).length !== Object.keys(gS).length ? wS[50] : wS[53]
-             }
- 
-             function xS(...SS) {
- ... (2 more removed lines; see GitHub link above)
+               return Fk[sk[13]] = sk[2], typeof Zk[Fk[sk[1]]] === sk[18] ? Zk[Fk[sk[1]]] = kk(jk[Fk[sk[1]]]) : Zk[Fk[sk[1]]]
```
