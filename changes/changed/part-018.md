# Changed — Bundle Modifications Report (Part 018 / 140)

- **Updated at**: `2026-11-24T11:40 JST`
- **Part**: `18 / 140` (**412** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/119.js` (31kiid.1299b0d6 → fqwnlq.985c8f39 · continued)

- **File**: `bundles/bloxd.io/chunks/js/119.js` (4692 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050)

#### 2132. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15558` → after: `L15502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15502) · [Before (L15558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15558)

```diff
-       kk.MJ.setPosition(Ik, Sk(Fk._skipped, Fk._clock.ms, Ok)), Vk(Fk), Nk.clear(), ck(kk, Ik, Xk[0] - Tk, Xk[1] - ik, Xk[2] - yk)
+       SS.FQ.setPosition(gS, JS(HS._skipped, HS._clock.ms, cS)), hS(HS), WS.clear(), zS(SS, gS, tS[0] - bS, tS[1] - XS, tS[2] - xS)
```

#### 2133. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15562-L15563` → after: `L15506-L15507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15506-L15507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15506-L15507) · [Before (L15562-L15563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15562-L15563)

```diff
-       const Xk = kk.MJ.getState(Fk, "smoothToServerPos");
-       return null !== Xk && void 0 !== Xk && Xk._skipping && !kk.MJ.XIk(Fk) ? Sk(Xk._skipped, Xk._clock.ms, Ik) : (Tk().copy(Ik, kk.MJ.OJ(Fk)), Ik)
+       const tS = SS.FQ.getState(HS, "smoothToServerPos");
+       return null !== tS && void 0 !== tS && tS._skipping && !SS.FQ.THS(HS) ? JS(tS._skipped, tS._clock.ms, gS) : (bS().copy(gS, SS.FQ.lC(HS)), gS)
```

#### 2134. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15567` → after: `L15511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15511) · [Before (L15567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15567)

```diff
-       return kk.MJ.Ukk(Fk, "smoothToServerPos") ? Uk(kk, Fk, Ik) : Tk().add(Ik, kk.MJ.ZY(Fk).Im, kk.SZ)
+       return SS.FQ.ZSS(HS, "smoothToServerPos") ? VS(SS, HS, gS) : bS().add(gS, SS.FQ.zB(HS).JF, SS.Zk)
```

#### 2135. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15576-L15579` → after: `L15520-L15523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15520-L15523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15520-L15523) · [Before (L15576-L15579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15576-L15579)

```diff
-         MJ: lk
-       } = kk, ak = kk.Xw.kp, Lk = lk.ZY(Fk).Im, tk = lk.eFk(Fk);
-       if (null !== tk && void 0 !== tk && tk.vIk) {
-         if (tk.vIk.EIk) {
+         FQ: NS
+       } = SS, qS = SS.Hj.fY, IS = NS.zB(HS).JF, fS = NS.tHS(HS);
+       if (null !== fS && void 0 !== fS && fS.ngS) {
+         if (fS.ngS.PgS) {
```

#### 2136. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15583` → after: `L15527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15527) · [Before (L15583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15583)

```diff
-           ak.setPosition(tk.Ip, Lk[0] + kk[0], Lk[1] + kk[1], Lk[2] + kk[2])
+           qS.setPosition(fS.kY, IS[0] + SS[0], IS[1] + SS[1], IS[2] + SS[2])
```

#### 2137. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15589` → after: `L15533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15533) · [Before (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15589)

```diff
-         (0, qk.q)(kk, kk.position.x + Ik, kk.position.y + Xk, kk.position.z + Tk), kk.UFk()
+         (0, uS.r)(SS, SS.position.x + gS, SS.position.y + tS, SS.position.z + bS), SS.OHS()
```

#### 2138. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15591` → after: `L15535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15535) · [Before (L15591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15591)

```diff
-       const Zk = lk.getState(Fk, lk.names.Fe);
+       const kS = NS.getState(HS, NS.names.XK);
```

#### 2139. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15594-L15597` → after: `L15538-L15541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15538-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15538-L15541) · [Before (L15594-L15597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15594-L15597)

```diff
-       jk && (0, qk.q)(jk, jk.position.x + Ik, jk.position.y + Xk, jk.position.z + Tk);
-       for (const qk of lk.ku(lk.names.zK))
-         if (qk.le === Fk) {
-           const Fk = lk.ZY(qk.Xu).Im,
+       aS && (0, uS.r)(aS, aS.position.x + gS, aS.position.y + tS, aS.position.z + bS);
+       for (const uS of NS.EY(NS.names.lD))
+         if (uS.fK === HS) {
+           const HS = NS.zB(uS.AY).JF,
```

#### 2140. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15601` → after: `L15545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15545) · [Before (L15601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15601)

```diff
-           Fk[0] += Ik, Fk[1] += Xk, Fk[2] += Tk, ck(kk, qk.Xu, Fk[0] - ik, Fk[1] - yk, Fk[2] - ak)
+           HS[0] += gS, HS[1] += tS, HS[2] += bS, zS(SS, uS.AY, HS[0] - XS, HS[1] - xS, HS[2] - qS)
```

#### 2141. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15606-L15607` → after: `L15550-L15551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15550-L15551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15550-L15551) · [Before (L15606-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15606-L15607)

```diff
-       const Xk = kk.Mkk,
-         Tk = kk.Im,
+       const tS = SS.zSS,
+         bS = SS.JF,
```

#### 2142. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15615-L15616` → after: `L15559-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15559-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15559-L15560) · [Before (L15615-L15616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15615-L15616)

```diff
-       const Fk = kk.Xw.kp,
-         Ik = kk.MJ.PFk(kk.MJ.names.Fe),
+       const HS = SS.Hj.fY,
+         gS = SS.FQ.qHS(SS.FQ.names.XK),
```

#### 2143. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15643-L15644` → after: `L15587-L15588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15587-L15588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15587-L15588) · [Before (L15643-L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15643-L15644)

```diff
-         const Xk = kk.MJ.eFk(Ik);
-         return !!Xk && (null !== Xk.Ip ? Fk.has(Xk.Ip) && Fk.getActuallyVisible(Xk.Ip) : bk(Xk.mesh, qk))
+         const tS = SS.FQ.tHS(gS);
+         return !!tS && (null !== tS.kY ? HS.has(tS.kY) && HS.getActuallyVisible(tS.kY) : AS(tS.mesh, uS))
```

#### 2144. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15650` → after: `L15594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15594) · [Before (L15650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15650)

```diff
-           Xk.add(Fk), Fk = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le
+           tS.add(HS), HS = null === (gS = SS.FQ.THS(HS)) || void 0 === gS ? void 0 : gS.fK
```

#### 2145. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15658` → after: `L15602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15602) · [Before (L15658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15658)

```diff
-           const Ik = kk.Xw.mG(),
+           const gS = SS.Hj.lL(),
```

#### 2146. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15661-L15663` → after: `L15605-L15607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15605-L15607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15605-L15607) · [Before (L15661-L15663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15661-L15663)

```diff
-           qk = null, kk.Xw.GIk() ? qk = null !== (yk = Ik.frustumPlanes) && void 0 !== yk ? yk : null : null !== Tk && (ik.b.GetPlanesToRef(Tk.getTransformationMatrix(), ak), qk = ak), vk(null === (Fk = kk.MJ.XIk(kk.camera.aY)) || void 0 === Fk ? void 0 : Fk.le);
-           for (const Xk of kk.MJ.ku(kk.MJ.names.zK)) zk(Xk.Xu) && vk(Xk.le);
-           for (const Xk of kk.MJ.ku("lineToEntity")) bk(Xk._line, qk) && (vk(Xk.Xu), vk(Xk._targetEId))
+           uS = null, SS.Hj.wgS() ? uS = null !== (xS = gS.frustumPlanes) && void 0 !== xS ? xS : null : null !== bS && (XS.d.GetPlanesToRef(bS.getTransformationMatrix(), qS), uS = qS), OS(null === (HS = SS.FQ.THS(SS.camera.YB)) || void 0 === HS ? void 0 : HS.fK);
+           for (const tS of SS.FQ.EY(SS.FQ.names.lD)) ZS(tS.AY) && OS(tS.fK);
+           for (const tS of SS.FQ.EY("lineToEntity")) AS(tS._line, uS) && (OS(tS.AY), OS(tS._targetEId))
```

#### 2147. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15680` → after: `L15624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15624) · [Before (L15680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15680)

```diff
-         mJ: function(kk, Fk) {
+         EQ: function(SS, HS) {
```

#### 2148. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15683` → after: `L15627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15627) · [Before (L15683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15683)

```diff
-         iG: function(kk, Fk) {
+         pE: function(SS, HS) {
```

#### 2149. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15686` → after: `L15630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15630) · [Before (L15686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15686)

```diff
-         Ix: function(Fk, Ik) {
+         bD: function(HS, gS) {
```

#### 2150. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15689` → after: `L15633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15633) · [Before (L15689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15689)

```diff
-             ik = kk.SZ;
+             XS = SS.Zk;
```

#### 2151. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15698` → after: `L15642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15642) · [Before (L15698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15698)

```diff
-               Xk._awakeIndex >= 0 || Wk(kk.MJ.ZY(Xk.Xu), Xk.serverPosition, Ik) || Vk(Xk)
+               tS._awakeIndex >= 0 || US(SS.FQ.zB(tS.AY), tS.serverPosition, gS) || hS(tS)
```

#### 2152. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15705` → after: `L15649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15649) · [Before (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15705)

```diff
-               tk = kk.MJ.ZY(Ik.Xu);
+               fS = SS.FQ.zB(gS.AY);
```

#### 2153. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15711-L15713` → after: `L15655-L15657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15655-L15657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15655-L15657) · [Before (L15711-L15713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15711-L15713)

```diff
-             const jk = kk.MJ.eFk(Ik.Xu);
-             if (!jk || !(null !== (yk = null === (ak = jk.vIk) || void 0 === ak ? void 0 : ak.EIk) && void 0 !== yk ? yk : null === (qk = jk.mesh) || void 0 === qk ? void 0 : qk.isEnabled())) {
-               Ik._skipping = !1, kk.MJ.setPosition(Ik.Xu, Lk);
+             const aS = SS.FQ.tHS(gS.AY);
+             if (!aS || !(null !== (xS = null === (qS = aS.ngS) || void 0 === qS ? void 0 : qS.PgS) && void 0 !== xS ? xS : null === (uS = aS.mesh) || void 0 === uS ? void 0 : uS.isEnabled())) {
+               gS._skipping = !1, SS.FQ.setPosition(gS.AY, IS);
```

#### 2154. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15716-L15717` → after: `L15660-L15661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15660-L15661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15660-L15661) · [Before (L15716-L15717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15716-L15717)

```diff
-             if (null !== jk.Ip && Ok(Ik.Xu, jk.Ip)) {
-               Ek(Ik, tk.position, Xk, Fk), kk.MJ.setPosition(Ik.Xu, Lk);
+             if (null !== aS.kY && cS(gS.AY, aS.kY)) {
+               dS(gS, fS.position, tS, HS), SS.FQ.setPosition(gS.AY, IS);
```

#### 2155. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15723` → after: `L15667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15667) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15723)

```diff
-             (Hk > 100 || Hk < wk) && Tk().copy(ek, Lk), kk.MJ.setPosition(Ik.Xu, ek)
+             (GS > 100 || GS < jS) && bS().copy(KS, IS), SS.FQ.setPosition(gS.AY, KS)
```

#### 2156. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15729` → after: `L15673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15673) · [Before (L15729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15729)

```diff
-   37769: (kk, Fk, Ik) => {
+   37772: (SS, HS, gS) => {
```

#### 2157. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15736-L15738` → after: `L15680-L15682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15680-L15682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15680-L15682) · [Before (L15736-L15738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15736-L15738)

```diff
-     var Xk = Ik(1844),
-       Tk = Ik(37139);
-     var ik = Ik(37777);
+     var tS = gS(2022),
+       bS = gS(37104);
+     var XS = gS(37774);
```

#### 2158. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15747-L15748` → after: `L15691-L15692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15691-L15692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15691-L15692) · [Before (L15747-L15748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15747-L15748)

```diff
-           Ip: null,
-           vIk: null,
+           kY: null,
+           ngS: null,
```

#### 2159. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15757` → after: `L15701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15701) · [Before (L15757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15757)

```diff
-         mJ: function(kk, Fk) {
+         EQ: function(SS, HS) {
```

#### 2160. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15760-L15761` → after: `L15704-L15705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15704-L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15704-L15705) · [Before (L15760-L15761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15760-L15761)

```diff
-         Ix: function(Fk, Ik) {
-           for (const Xk of Ik) kk.MJ.Ukk(Xk.Xu, "humanoidMesh") || ak(kk, Xk, Fk), Xk.vIk.EIk && ((0, Tk.pausesOutOfView)(kk, Xk.Xu, Xk.Ip) ? Xk._pausedDt += Fk : jk(kk, Xk, Fk))
+         bD: function(HS, gS) {
+           for (const tS of gS) SS.FQ.ZSS(tS.AY, "humanoidMesh") || qS(SS, tS, HS), tS.ngS.PgS && ((0, bS.pausesOutOfView)(SS, tS.AY, tS.kY) ? tS._pausedDt += HS : aS(SS, tS, HS))
```

#### 2161. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15767` → after: `L15711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15711) · [Before (L15767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15767)

```diff
-       const [Xk, Tk, yk] = (0, ik.getDrawnPosition)(kk, Fk.Xu, qk), lk = Fk._drawnPosition;
+       const [tS, bS, xS] = (0, XS.getDrawnPosition)(SS, HS.AY, uS), NS = HS._drawnPosition;
```

#### 2162. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15779` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15723) · [Before (L15779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15779)

```diff
-       const Ik = kk.MJ.getState(Fk, "updateWalkingState");
+       const gS = SS.FQ.getState(HS, "updateWalkingState");
```

#### 2163. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15787-L15788` → after: `L15731-L15732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15731-L15732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15731-L15732) · [Before (L15787-L15788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15787-L15788)

```diff
-           const Tk = Fk.Xu,
-             ik = kk.MJ.getState(Tk, "humanoidMesh");
+           const bS = HS.AY,
+             XS = SS.FQ.getState(bS, "humanoidMesh");
```

#### 2164. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15791` → after: `L15735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15735) · [Before (L15791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15791)

```diff
-             const Fk = kk.MJ.KFk(Tk);
+             const HS = SS.FQ.uHS(bS);
```

#### 2165. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15794-L15796` → after: `L15738-L15740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15738-L15740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15738-L15740) · [Before (L15794-L15796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15794-L15796)

```diff
-               const ik = null === (Ik = kk.MJ.XIk(Fk)) || void 0 === Ik ? void 0 : Ik.le;
-               return null === (Xk = null !== (Tk = ik ? kk.MJ.KFk(ik) : null) && void 0 !== Tk ? Tk : kk.MJ.KFk(Fk)) || void 0 === Xk ? void 0 : Xk.speed
-             }(kk, Tk)) && void 0 !== yk ? yk : Fk.speed, void(tk = null !== (lk = ik.maxWalkingAngleOverride) && void 0 !== lk ? lk : Fk.crouching ? .5 : null)
+               const XS = null === (gS = SS.FQ.THS(HS)) || void 0 === gS ? void 0 : gS.fK;
+               return null === (tS = null !== (bS = XS ? SS.FQ.uHS(XS) : null) && void 0 !== bS ? bS : SS.FQ.uHS(HS)) || void 0 === tS ? void 0 : tS.speed
+             }(SS, bS)) && void 0 !== xS ? xS : HS.speed, void(fS = null !== (NS = XS.maxWalkingAngleOverride) && void 0 !== NS ? NS : HS.crouching ? .5 : null)
```

#### 2166. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15798` → after: `L15742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15742) · [Before (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15798)

```diff
-           Lk = Fk.drawnSpeed, tk = null !== (Ik = null === (Xk = kk.MJ.getState(Tk, "fourLeggedMesh")) || void 0 === Xk ? void 0 : Xk.maxWalkingAngleOverride) && void 0 !== Ik ? Ik : null
+           IS = HS.drawnSpeed, fS = null !== (gS = null === (tS = SS.FQ.getState(bS, "fourLeggedMesh")) || void 0 === tS ? void 0 : tS.maxWalkingAngleOverride) && void 0 !== gS ? gS : null
```

#### 2167. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15805` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15749) · [Before (L15805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15805)

```diff
-       const lk = (ik ? Xk : 1.3 * yk) * Ik / (2 * Fk.walkingLegSwingDuration);
+       const NS = (XS ? tS : 1.3 * xS) * gS / (2 * HS.walkingLegSwingDuration);
```

#### 2168. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15814` → after: `L15758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15758) · [Before (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15814)

```diff
-       return null !== Fk ? Fk : (0, Xk.e)(.16 * (kk - yk) + .9, .9, 1.4)
+       return null !== HS ? HS : (0, tS.h)(.16 * (SS - xS) + .9, .9, 1.4)
```

#### 2169. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15822` → after: `L15766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15766) · [Before (L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15822)

```diff
-   37726: (kk, Fk, Ik) => {
+   37727: (SS, HS, gS) => {
```

#### 2170. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15824-L15825` → after: `L15768-L15769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15768-L15769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15768-L15769) · [Before (L15824-L15825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15824-L15825)

```diff
-       d: () => lk,
-       h: () => yk
+       e: () => NS,
+       i: () => xS
```

#### 2171. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15827` → after: `L15771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15771) · [Before (L15827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15827)

```diff
-     const Xk = new(Ik(36393).c)(new URL(Ik.p + Ik.u(47), Ik.b), {
+     const tS = new(gS(36415).d)(new URL(gS.p + gS.u(47), gS.b), {
```

#### 2172. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15831-L15832` → after: `L15775-L15776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15775-L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15775-L15776) · [Before (L15831-L15832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15831-L15832)

```diff
-     var Tk = Ik(37728),
-       ik = Ik(2764);
+     var bS = gS(37734),
+       XS = gS(2975);
```

#### 2173. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15851` → after: `L15795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15795) · [Before (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15851)

```diff
-         const kk = await Ik.e(206).then((() => Ik(41517)));
+         const SS = await gS.e(206).then((() => gS(41533)));
```

#### 2174. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15865` → after: `L15809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15809) · [Before (L15865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15865)

```diff
-         kk instanceof ErrorEvent || (0, ik.b)("The world couldn't load. Refresh the page to keep playing.")
+         SS instanceof ErrorEvent || (0, XS.c)("The world couldn't load. Refresh the page to keep playing.")
```

#### 2175. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15870` → after: `L15814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15814) · [Before (L15870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15870)

```diff
-   37947: (kk, Fk, Ik) => {
+   37974: (SS, HS, gS) => {
```

#### 2176. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15872-L15873` → after: `L15816-L15817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15816-L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15816-L15817) · [Before (L15872-L15873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15872-L15873)

```diff
-       d: () => ik,
-       h: () => yk,
+       b: () => XS,
+       e: () => xS,
```

#### 2177. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15876-L15878` → after: `L15821-L15822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15821-L15822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15821-L15822) · [Before (L15876-L15878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15876-L15878)

```diff
-       m: () => tk,
-       p: () => jk,
-       t: () => ek
+       n: () => aS,
+       p: () => KS
```

#### 2178. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15880` → after: `L15824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15824) · [Before (L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15880)

```diff
-     var Xk = Ik(9219);
+     var tS = gS(9386);
```

#### 2179. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15902` → after: `L15846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15846) · [Before (L15902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15902)

```diff
-         boxes: Xk.o.map(Tk),
+         boxes: tS.m.map(bS),
```

#### 2180. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15907` → after: `L15851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15851) · [Before (L15907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15907)

```diff
-         boxes: Xk.u.map(Tk),
+         boxes: tS.s.map(bS),
```

#### 2181. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15920-L15921` → after: `L15864-L15865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15864-L15865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15864-L15865) · [Before (L15920-L15921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15920-L15921)

```diff
-         inner: qk("innerStairs", Xk.q.innerLeft),
-         outer: qk("outerStairs", Xk.q.outerLeft)
+         inner: uS("innerStairs", tS.p.innerLeft),
+         outer: uS("outerStairs", tS.p.outerLeft)
```

#### 2182. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15931` → after: `L15875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15875) · [Before (L15931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15931)

```diff
-           if (null === Fk) return kk ? ak : lk;
+           if (null === HS) return SS ? qS : NS;
```

#### 2183. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15936` → after: `L15880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15880) · [Before (L15936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15936)

```diff
-       return 0 === Tk ? Xk : {
+       return 0 === bS ? tS : {
```

#### 2184. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15938` → after: `L15882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15882) · [Before (L15938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15938)

```diff
-         key: `${Xk.key}|turn${Tk}`,
+         key: `${tS.key}|turn${bS}`,
```

#### 2185. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L15979` → after: `L15923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15923) · [Before (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L15979)

```diff
-         throw new Error(`Box face ${Fk} has no axis for uv ${kk}`)
+         throw new Error(`Box face ${HS} has no axis for uv ${SS}`)
```

#### 2186. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16035` → after: `L15979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15979) · [Before (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16035)

```diff
-   37447: (kk, Fk, Ik) => {
+   37422: (SS, HS, gS) => {
```

#### 2187. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16037` → after: `L15981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15981) · [Before (L16037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16037)

```diff
-       b: () => qk
+       c: () => uS
```

#### 2188. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16039` → after: `L15983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15983) · [Before (L16039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16039)

```diff
-     var Xk = Ik(354),
+     var tS = gS(402),
```

#### 2189. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16041` → after: `L15985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15985) · [Before (L16041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16041)

```diff
-       ik = Ik(37450);
+       XS = gS(37429);
```

#### 2190. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16047` → after: `L15991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15991) · [Before (L16047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16047)

```diff
-       return qk.isCameraDetachedFromPlayer(kk) && null !== (Fk = yk.get(kk)) && void 0 !== Fk ? Fk : null
+       return uS.isCameraDetachedFromPlayer(SS) && null !== (HS = xS.get(SS)) && void 0 !== HS ? HS : null
```

#### 2191. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16052` → after: `L15996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R15996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L15996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L15996) · [Before (L16052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16052)

```diff
-         return !kk.MJ.XIk(kk.camera.aY)
+         return !SS.FQ.THS(SS.camera.YB)
```

#### 2192. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16059` → after: `L16003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16003) · [Before (L16059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16059)

```diff
-         const lk = kk.MJ.XIk(kk.camera.aY);
+         const NS = SS.FQ.THS(SS.camera.YB);
```

#### 2193. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16065` → after: `L16009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16009) · [Before (L16065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16065)

```diff
-           qk = kk.Xw.PD().KD;
+           uS = SS.Hj.qT().aT;
```

#### 2194. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16067-L16068` → after: `L16011-L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16011-L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16011-L16012) · [Before (L16067-L16068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16067-L16068)

```diff
-           followEntity: lk.le,
-           qIk: lk.qIk,
+           followEntity: NS.fK,
+           SgS: NS.SgS,
```

#### 2195. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16070` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16014) · [Before (L16070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16070)

```diff
-           savedZoomDistance: kk.camera.JY,
+           savedZoomDistance: SS.camera.oB,
```

#### 2196. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16072` → after: `L16016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16016) · [Before (L16072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16072)

```diff
-           facingMode: null !== (Ik = ik.facingMode) && void 0 !== Ik ? Ik : "frozen",
+           facingMode: null !== (gS = XS.facingMode) && void 0 !== gS ? gS : "frozen",
```

#### 2197. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16075-L16077` → after: `L16019-L16021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16019-L16021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16019-L16021) · [Before (L16075-L16077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16075-L16077)

```diff
-         }), kk.camera.JY = 0, kk.camera.VY = 0, qk[0] = 0, qk[1] = 0, kk.MJ.KFk(kk.oR).heading = ak.heading, kk.MJ.Eu(kk.camera.aY, kk.MJ.names.zK);
-         const Lk = null !== (Tk = ik.position) && void 0 !== Tk ? Tk : kk.camera.Jm();
-         return kk.MJ.setPosition(kk.camera.aY, [Lk[0], Lk[1], Lk[2]]), Xk(kk), !0
+         }), SS.camera.oB = 0, SS.camera.lB = 0, uS[0] = 0, uS[1] = 0, SS.FQ.uHS(SS.HA).heading = qS.heading, SS.FQ.pY(SS.camera.YB, SS.FQ.names.lD);
+         const IS = null !== (bS = XS.position) && void 0 !== bS ? bS : SS.camera.lF();
+         return SS.FQ.setPosition(SS.camera.YB, [IS[0], IS[1], IS[2]]), tS(SS), !0
```

#### 2198. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16082` → after: `L16026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16026) · [Before (L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16082)

```diff
-         null === (Fk = kk.MJ.BFk(kk.oR)) || void 0 === Fk || Fk.Kqk()
+         null === (HS = SS.FQ.AHS(SS.HA)) || void 0 === HS || HS.eqS()
```

#### 2199. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16092` → after: `L16036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16036) · [Before (L16092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16092)

```diff
-         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.facing.heading) && void 0 !== Fk ? Fk : kk.camera.heading
+         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.facing.heading) && void 0 !== HS ? HS : SS.camera.heading
```

#### 2200. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16097-L16098` → after: `L16041-L16042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16041-L16042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16041-L16042) · [Before (L16097-L16098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16097-L16098)

```diff
-         if (!Ik) return Tk().copy(Fk, kk.camera.Am());
-         const Xk = (0, ik.b)(Ik.facing.heading, Ik.facing.pitch);
+         if (!gS) return bS().copy(HS, SS.camera.uR());
+         const tS = (0, XS.d)(gS.facing.heading, gS.facing.pitch);
```

#### 2201. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16109-L16110` → after: `L16053-L16054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16053-L16054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16053-L16054) · [Before (L16109-L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16109-L16110)

```diff
-         kk.MJ.Tu(kk.camera.aY, kk.MJ.names.zK, {
-           le: Ik.followEntity,
+         SS.FQ.VY(SS.camera.YB, SS.FQ.names.lD, {
+           fK: gS.followEntity,
```

#### 2202. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16112-L16114` → after: `L16056-L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16056-L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16056-L16058) · [Before (L16112-L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16112-L16114)

```diff
-           qIk: Ik.qIk
-         }), kk.camera.JY = Ik.savedZoomDistance, kk.camera.VY = Ik.savedZoomDistance;
-         const Tk = kk.Xw.PD().KD;
+           SgS: gS.SgS
+         }), SS.camera.oB = gS.savedZoomDistance, SS.camera.lB = gS.savedZoomDistance;
+         const bS = SS.Hj.qT().aT;
```

#### 2203. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16118` → after: `L16062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16062) · [Before (L16118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16118)

```diff
-         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.savedZoomDistance) && void 0 !== Fk ? Fk : 0
+         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.savedZoomDistance) && void 0 !== HS ? HS : 0
```

#### 2204. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16121` → after: `L16065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16065) · [Before (L16121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16121)

```diff
-         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.savedRigShift) && void 0 !== Fk ? Fk : lk
+         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.savedRigShift) && void 0 !== HS ? HS : NS
```

#### 2205. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16124-L16125` → after: `L16068-L16069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16068-L16069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16068-L16069) · [Before (L16124-L16125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16124-L16125)

```diff
-           Xk = Ik && kk.MJ.ZY(Ik.followEntity);
-         return !!Xk && (Ik.qIk ? Ik.qIk(Fk, !0, Ik.followOffset) : Tk().copy(Fk, Ik.followOffset), Tk().add(Fk, Xk.Im, Fk), !0)
+           tS = gS && SS.FQ.zB(gS.followEntity);
+         return !!tS && (gS.SgS ? gS.SgS(HS, !0, gS.followOffset) : bS().copy(HS, gS.followOffset), bS().add(HS, tS.JF, HS), !0)
```

#### 2206. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16134` → after: `L16078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16078) · [Before (L16134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16134)

```diff
-         return null !== (Fk = null === (Ik = ak(kk)) || void 0 === Ik ? void 0 : Ik.facing.pitch) && void 0 !== Fk ? Fk : kk.camera.pitch
+         return null !== (HS = null === (gS = qS(SS)) || void 0 === gS ? void 0 : gS.facing.pitch) && void 0 !== HS ? HS : SS.camera.pitch
```

#### 2207. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16138` → after: `L16082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16082) · [Before (L16138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16138)

```diff
-         return Zk(kk) ? tk(kk, Fk) : Tk().copy(Fk, kk.camera.Am())
+         return kS(SS) ? fS(SS, HS) : bS().copy(HS, SS.camera.uR())
```

#### 2208. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16147` → after: `L16091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16091) · [Before (L16147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16147)

```diff
-         Fk(kk) ? kk.MJ.setPosition(kk.camera.aY, Xk) : Ik(kk, {
+         HS(SS) ? SS.FQ.setPosition(SS.camera.YB, tS) : gS(SS, {
```

#### 2209. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16152` → after: `L16096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16096) · [Before (L16152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16152)

```diff
-         const ak = kk.MJ.KFk(kk.oR);
+         const qS = SS.FQ.uHS(SS.HA);
```

#### 2210. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16157` → after: `L16101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16101) · [Before (L16157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16157)

```diff
-   38422: (kk, Fk, Ik) => {
+   38476: (SS, HS, gS) => {
```

#### 2211. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16161-L16162` → after: `L16105-L16106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16105-L16106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16105-L16106) · [Before (L16161-L16162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16161-L16162)

```diff
-     var Xk = Ik(38213),
-       Tk = Ik(354),
+     var tS = gS(38256),
+       bS = gS(402),
```

#### 2212. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16164-L16172` → after: `L16108-L16116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16108-L16116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16108-L16116) · [Before (L16164-L16172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16164-L16172)

```diff
-       yk = Ik(187),
-       lk = Ik(38424),
-       ak = Ik(38252),
-       qk = Ik(36764),
-       Lk = Ik(36772),
-       tk = Ik(3631),
-       Zk = Ik(3702),
-       jk = Ik(614),
-       ek = Ik(4210);
+       xS = gS(198),
+       NS = gS(38484),
+       qS = gS(38286),
+       uS = gS(36771),
+       IS = gS(36773),
+       fS = gS(3811),
+       kS = gS(3870),
+       aS = gS(665),
+       KS = gS(4356);
```

#### 2213. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16196` → after: `L16140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16140) · [Before (L16196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16196)

```diff
-           blendMode: ek.d.Standard
+           blendMode: KS.g.Standard
```

#### 2214. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16199` → after: `L16143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16143) · [Before (L16199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16199)

```diff
-           kk.playParticleEffect(Fk, lk ? Ik : null)
+           SS.playParticleEffect(HS, NS ? gS : null)
```

#### 2215. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16261-L16263` → after: `L16205-L16207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16205-L16207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16205-L16207) · [Before (L16261-L16263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16261-L16263)

```diff
-     var xk = Ik(346),
-       Pk = Ik(621),
-       Kk = Ik(337);
+     var nS = gS(395),
+       PS = gS(672),
+       QS = gS(387);
```

#### 2216. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16290` → after: `L16234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16234) · [Before (L16290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16290)

```diff
-         sZ: 2.5,
+         Dk: 2.5,
```

#### 2217. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16321` → after: `L16265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16265) · [Before (L16321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16321)

```diff
-           blendMode: ek.d.OneOne
+           blendMode: KS.g.OneOne
```

#### 2218. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16440` → after: `L16384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16384) · [Before (L16440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16440)

```diff
-           sZ: 0,
+           Dk: 0,
```

#### 2219. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16458` → after: `L16402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16402) · [Before (L16458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16458)

```diff
-           sZ: 0,
+           Dk: 0,
```

#### 2220. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16478` → after: `L16422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16422) · [Before (L16478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16478)

```diff
-           sZ: 0,
+           Dk: 0,
```

#### 2221. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16537` → after: `L16481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16481) · [Before (L16537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16537)

```diff
-         ...Object.fromEntries(Pk.s.map((kk => [(0, Kk.ic)(kk), {
+         ...Object.fromEntries(PS.v.map((SS => [(0, QS.Qb)(SS), {
```

#### 2222. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16657` → after: `L16601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16601) · [Before (L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16657)

```diff
-         ...Object.fromEntries(xk.k.map((kk => [kk, Ok]))),
+         ...Object.fromEntries(nS.f.map((SS => [SS, cS]))),
```

#### 2223. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16662` → after: `L16606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16606) · [Before (L16662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16662)

```diff
-           sZ: 0,
+           Dk: 0,
```

#### 2224. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16671` → after: `L16615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16615) · [Before (L16671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16671)

```diff
-           sZ: 0,
+           Dk: 0,
```

#### 2225. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16697` → after: `L16641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16641) · [Before (L16697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16697)

```diff
-           sZ: .05,
+           Dk: .05,
```

#### 2226. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16713` → after: `L16657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16657) · [Before (L16713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16713)

```diff
-         this.bloxd = kk, this.eId = Fk, this.qZ = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.qZ = kk.qZ, this.type = (0, Xk.i)(Ik).item, this.spawnTime = Date.now()
+         this.bloxd = SS, this.eId = HS, this.qk = void 0, this.type = void 0, this.spawnTime = void 0, this.distToPlayerInterval = void 0, this.autoRemoveTimeout = void 0, this.qk = SS.qk, this.type = (0, tS.h)(gS).item, this.spawnTime = Date.now()
```

#### 2227. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16717` → after: `L16661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16661) · [Before (L16717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16717)

```diff
-         this.qZ.MJ.deleteEntity(this.eId)
+         this.qk.FQ.deleteEntity(this.eId)
```

#### 2228. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16724` → after: `L16668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16668) · [Before (L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16724)

```diff
-           qZ: Fk
+           qk: HS
```

#### 2229. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16726` → after: `L16670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16670) · [Before (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16726)

```diff
-           MJ: Ik
+           FQ: gS
```

#### 2230. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16731` → after: `L16675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16675) · [Before (L16731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16731)

```diff
-         Ik.add([kk.x, kk.y, kk.z], Tk, ik, null, null, !1, !1, this.eId), Ik.Tu(this.eId, Ik.names.smoothToServerPos);
+         gS.add([SS.x, SS.y, SS.z], bS, XS, null, null, !1, !1, this.eId), gS.VY(this.eId, gS.names.smoothToServerPos);
```

#### 2231. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16734` → after: `L16678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16678) · [Before (L16734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16734)

```diff
-         } = (0, Xk.i)(kk.type);
+         } = (0, tS.h)(SS.type);
```

#### 2232. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16736-L16737` → after: `L16680-L16681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16680-L16681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16680-L16681) · [Before (L16736-L16737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16736-L16737)

```diff
-           if (yk === Fk.Nkk) return;
-           const kk = Fk.xR[Fk.oR][yk];
+           if (xS === HS.OSS) return;
+           const SS = HS.rY[HS.HA][xS];
```

#### 2233. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16740` → after: `L16684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16684) · [Before (L16740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16740)

```diff
-         Ik.Tu(this.eId, "doOnFirstTick", {
+         gS.VY(this.eId, "doOnFirstTick", {
```

#### 2234. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16742` → after: `L16686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16686) · [Before (L16742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16742)

```diff
-             Ik.Tu(this.eId, "hidingMeshManager", {
+             gS.VY(this.eId, "hidingMeshManager", {
```

#### 2235. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16744` → after: `L16688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16688) · [Before (L16744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16744)

```diff
-                 Ik.Tu(this.eId, Ik.names.mesh, {
+                 gS.VY(this.eId, gS.names.mesh, {
```

#### 2236. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16746` → after: `L16690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16690) · [Before (L16746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16746)

```diff
-                   Dyk: !1
+                   UxS: !1
```

#### 2237. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16750` → after: `L16694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16694) · [Before (L16750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16750)

```diff
-                 Ik.Eu(this.eId, Ik.names.mesh)
+                 gS.pY(this.eId, gS.names.mesh)
```

#### 2238. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16761` → after: `L16705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16705) · [Before (L16761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16761)

```diff
-           qZ: Xk
+           qk: tS
```

#### 2239. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16763-L16764` → after: `L16707-L16708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16707-L16708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16707-L16708) · [Before (L16763-L16764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16763-L16764)

```diff
-           MJ: Tk
-         } = Xk, ek = Xk.oR, xk = this.getSpawnPos(ek), Pk = {
+           FQ: bS
+         } = tS, KS = tS.HA, nS = this.getSpawnPos(KS), PS = {
```

#### 2240. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16770` → after: `L16714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16714) · [Before (L16770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16770)

```diff
-               } = nk[this.type], ak = Tk.OJ(this.eId), xk = this.bloxd.getClosestSolidBlock(ak), [Pk, Kk, Qk] = ak;
+               } = vS[this.type], qS = bS.lC(this.eId), nS = this.bloxd.getClosestSolidBlock(qS), [PS, QS, DS] = qS;
```

#### 2241. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16774-L16777` → after: `L16718-L16721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16718-L16721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16718-L16721) · [Before (L16774-L16777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16774-L16777)

```diff
-                 return void(0, tk.sendColyMessage)(Zk.fg, {
-                   ty: this.eId,
-                   aL: ak,
-                   qL: kk
+                 return void(0, fS.sendColyMessage)(kS.Ig, {
+                   kx: this.eId,
+                   qI: qS,
+                   uI: SS
```

#### 2242. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16780` → after: `L16724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16724) · [Before (L16780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16780)

```diff
-               const sk = null !== (kk = lk.type) && void 0 !== kk ? kk : wk.Boom;
+               const wS = null !== (SS = NS.type) && void 0 !== SS ? SS : jS.Boom;
```

#### 2243. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16782` → after: `L16726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16726) · [Before (L16782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16782)

```diff
-               const Vk = Tk.OJ(ek),
+               const hS = bS.lC(KS),
```

#### 2244. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16787` → after: `L16731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16731) · [Before (L16787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16787)

```diff
-               ik().BL(Vk, zk) < Sk + 1 && qk.d.play((0, Lk.f)("cannonFire"), null !== (Ek = null !== (Ok = lk.volume) && void 0 !== Ok ? Ok : nk[this.type].volume) && void 0 !== Ek ? Ek : 1, zk, Sk, vk).rate(.8 + .2 * Math.random());
+               XS().BI(hS, ZS) < JS + 1 && uS.e.play((0, IS.e)("cannonFire"), null !== (dS = null !== (cS = NS.volume) && void 0 !== cS ? cS : vS[this.type].volume) && void 0 !== dS ? dS : 1, ZS, JS, OS).rate(.8 + .2 * Math.random());
```

#### 2245. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16791` → after: `L16735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16735) · [Before (L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16791)

```diff
-                 if (ik().set(Hk, 0, 0, 0), ak && !jk.m.includes(Ik) && "Mesh" !== Ik) return {
+                 if (XS().set(GS, 0, 0, 0), qS && !aS.j.includes(gS) && "Mesh" !== gS) return {
```

#### 2246. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16795` → after: `L16739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16739) · [Before (L16795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16795)

```diff
-                 const qk = kk.bloxd.isClient ? [...kk.MJ.OJ(Fk)] : kk.room.api.OJ(Fk);
+                 const uS = SS.bloxd.isClient ? [...SS.FQ.lC(HS)] : SS.room.api.lC(HS);
```

#### 2247. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16801` → after: `L16745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16745) · [Before (L16801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16801)

```diff
-                   const Tk = kk.MJ.aN(Fk);
+                   const bS = SS.FQ.vW(HS);
```

#### 2248. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16803` → after: `L16747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16747) · [Before (L16803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16803)

```diff
-                   Tk && (ik = Tk.kZ.vec[1] / 2);
+                   bS && (XS = bS.rf.vec[1] / 2);
```

#### 2249. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16810` → after: `L16754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16754) · [Before (L16810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16810)

```diff
-                   return Xk >= lk ? yk : ik + (Xk - Ik) / (lk - Ik) * (yk - ik)
+                   return tS >= NS ? xS : XS + (tS - gS) / (NS - gS) * (xS - XS)
```

#### 2250. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16820-L16824` → after: `L16764-L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16764-L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16764-L16768) · [Before (L16820-L16824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16820-L16824)

```diff
-               }(this.qZ, ek, "Player", sk, null !== (Fk = null === (Ik = lk.knockbackFactor) || void 0 === Ik ? void 0 : Ik.terrain) && void 0 !== Fk ? Fk : 1, 2 * lk.power, zk, lk.ignoreProjectiles);
-               ik().scale(pk, pk, 1 / yk.f.clientTicksPerSecond), Tk.aN(Xk.oR).applyImpulse([pk[0], pk[1], pk[2]]), (0, tk.sendColyMessage)(Zk.fg, {
-                 ty: this.eId,
-                 aL: ak,
-                 qL: pk
+               }(this.qk, KS, "Player", wS, null !== (HS = null === (gS = NS.knockbackFactor) || void 0 === gS ? void 0 : gS.terrain) && void 0 !== HS ? HS : 1, 2 * NS.power, ZS, NS.ignoreProjectiles);
+               XS().scale(LS, LS, 1 / xS.e.clientTicksPerSecond), bS.vW(tS.HA).applyImpulse([LS[0], LS[1], LS[2]]), (0, fS.sendColyMessage)(kS.Ig, {
+                 kx: this.eId,
+                 qI: qS,
+                 uI: LS
```

#### 2251. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16830` → after: `L16774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16774) · [Before (L16830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16830)

```diff
-           Tk.Tu(this.eId, "doOnFirstTick", {
+           bS.VY(this.eId, "doOnFirstTick", {
```

#### 2252. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16839-L16844` → after: `L16783-L16788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16783-L16788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16783-L16788) · [Before (L16839-L16844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16839-L16844)

```diff
-         this.eId = Tk.add(xk, Qk, sk, null, null, !0, !1).toString(), (0, tk.sendColyMessage)(Zk.jg, {
-             ty: this.eId,
-             Zy: this.type,
-             jy: kk,
-             ey: this.qZ.camera.RY
-           }), qk.d.play((0, Lk.f)("bow"), .6 * (null !== (Fk = nk[this.type].volume) && void 0 !== Fk ? Fk : 1)).rate(.6 + .2 * Math.random()), Tk.Tu(this.eId, "doOnFirstTick", {
+         this.eId = bS.add(nS, DS, wS, null, null, !0, !1).toString(), (0, fS.sendColyMessage)(kS.Kg, {
+             kx: this.eId,
+             Kx: this.type,
+             jx: SS,
+             Gx: this.qk.camera.YM
+           }), uS.e.play((0, IS.e)("bow"), .6 * (null !== (HS = vS[this.type].volume) && void 0 !== HS ? HS : 1)).rate(.6 + .2 * Math.random()), bS.VY(this.eId, "doOnFirstTick", {
```

#### 2253. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16846` → after: `L16790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16790) · [Before (L16846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16846)

```diff
-               Tk.Tu(this.eId, "hidingMeshManager", {
+               bS.VY(this.eId, "hidingMeshManager", {
```

#### 2254. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16848` → after: `L16792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16792) · [Before (L16848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16848)

```diff
-                   Tk.Tu(this.eId, Tk.names.mesh, {
+                   bS.VY(this.eId, bS.names.mesh, {
```

#### 2255. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16850` → after: `L16794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16794) · [Before (L16850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16850)

```diff
-                     Dyk: !0
+                     UxS: !0
```

#### 2256. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16854` → after: `L16798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16798) · [Before (L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16854)

```diff
-                   Tk.Eu(this.eId, Tk.names.mesh)
+                   bS.pY(this.eId, bS.names.mesh)
```

#### 2257. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16862-L16863` → after: `L16806-L16807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16806-L16807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16806-L16807) · [Before (L16862-L16863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16862-L16863)

```diff
-             ik().sqrDist(Tk.OJ(this.eId), Tk.OJ(ek)) > 1e4 && ((0, tk.sendColyMessage)(Zk.lg, {
-               ty: this.eId
+             XS().sqrDist(bS.lC(this.eId), bS.lC(KS)) > 1e4 && ((0, fS.sendColyMessage)(kS.Lg, {
+               kx: this.eId
```

#### 2258. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16866-L16867` → after: `L16810-L16811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16810-L16811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16810-L16811) · [Before (L16866-L16867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16866-L16867)

```diff
-             (0, tk.sendColyMessage)(Zk.lg, {
-               ty: this.eId
+             (0, fS.sendColyMessage)(kS.Lg, {
+               kx: this.eId
```

#### 2259. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16869` → after: `L16813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16813) · [Before (L16869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16869)

```diff
-           }), null !== (Ik = nk[this.type].autoRemoveAfterTime) && void 0 !== Ik ? Ik : 6e4, this.eId), Tk.Tu(this.eId, "collideTerrain", {
+           }), null !== (gS = vS[this.type].autoRemoveAfterTime) && void 0 !== gS ? gS : 6e4, this.eId), bS.VY(this.eId, "collideTerrain", {
```

#### 2260. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16872` → after: `L16816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16816) · [Before (L16872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16872)

```diff
-               (0, ak.llk)(Tk.getState(this.eId, "physics"), Tk.ZY(this.eId)), Tk.xlk(this.eId, Tk.ZY(this.eId));
+               (0, qS.lxS)(bS.getState(this.eId, "physics"), bS.zB(this.eId)), bS.NNS(this.eId, bS.zB(this.eId));
```

#### 2261. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16874-L16875` → after: `L16818-L16819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16818-L16819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16818-L16819) · [Before (L16874-L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16874-L16875)

```diff
-                 Xk = Tk.aN(this.eId);
-               ik().length(Xk.TH) > .1 && Ik && ((0, lk.f)(this.qZ, this.eId), !Tk.Ukk(this.eId, "collideTerrain")) || (null === (kk = (Fk = Pk[this.type]).onHitTerrain) || void 0 === kk || kk.call(Fk), Ik && Kk())
+                 tS = bS.vW(this.eId);
+               XS().length(tS.xG) > .1 && gS && ((0, NS.g)(this.qk, this.eId), !bS.ZSS(this.eId, "collideTerrain")) || (null === (SS = (HS = PS[this.type]).onHitTerrain) || void 0 === SS || SS.call(HS), gS && QS())
```

#### 2262. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16877` → after: `L16821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16821) · [Before (L16877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16877)

```diff
-           }), Tk.Tu(this.eId, "collideEntitiesProjectile", {
+           }), bS.VY(this.eId, "collideEntitiesProjectile", {
```

#### 2263. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16884-L16885` → after: `L16828-L16829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16828-L16829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16828-L16829) · [Before (L16884-L16885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16884-L16885)

```diff
-             const Lk = kk.MJ.aN(Fk),
-               tk = ik().copy(Lk.TH, Xk),
+             const IS = SS.FQ.vW(HS),
+               fS = XS().copy(IS.xG, tS),
```

#### 2264. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16887-L16888` → after: `L16831-L16832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16831-L16832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16831-L16832) · [Before (L16887-L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16887-L16888)

```diff
-             ik().normalize(tk, tk), ik().scale(tk, tk, Zk.speed * ak), Lk.gravityMultiplier = (null !== (Tk = Zk.gravityMult) && void 0 !== Tk ? Tk : 1) * qk, Lk.Xq = .02, Lk.sZ = (null !== (yk = Zk.sZ) && void 0 !== yk ? yk : .1) * Lk.Xq, Lk.fluidDrag = null !== (lk = Zk.fluidDr … [truncated]
-           }(this.qZ, this.eId, this.type, this.qZ.camera.RY)
+             XS().normalize(fS, fS), XS().scale(fS, fS, kS.speed * qS), IS.gravityMultiplier = (null !== (bS = kS.gravityMult) && void 0 !== bS ? bS : 1) * uS, IS.gu = .02, IS.Dk = (null !== (xS = kS.Dk) && void 0 !== xS ? xS : .1) * IS.gu, IS.fluidDrag = null !== (NS = kS.fluidDr … [truncated]
+           }(this.qk, this.eId, this.type, this.qk.camera.YM)
```

#### 2265. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16892` → after: `L16836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16836) · [Before (L16892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16892)

```diff
-         if ("torso" === nk[this.type].spawnOffset) Fk = ik().clone(this.qZ.MJ.OJ(kk)), Fk[1] += yk.f.NH / 2;
+         if ("torso" === vS[this.type].spawnOffset) HS = XS().clone(this.qk.FQ.lC(SS)), HS[1] += xS.e.pG / 2;
```

#### 2266. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16899-L16900` → after: `L16843-L16844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16843-L16844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16843-L16844) · [Before (L16899-L16900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16899-L16900)

```diff
-           width: null !== (kk = null !== (Fk = null === (Ik = nk[this.type]) || void 0 === Ik ? void 0 : Ik.collisionWidth) && void 0 !== Fk ? Fk : null === (Xk = nk[this.type]) || void 0 === Xk ? void 0 : Xk.collisionHeight) && void 0 !== kk ? kk : .1,
-           height: null !== (Tk = null !== (ik = null === (yk = nk[this.type]) || void 0 === yk ? void 0 : yk.collisionHeight) && void 0 !== ik ? ik : null === (lk = nk[this.type]) || void 0 === lk ? void 0 : lk.collisionWidth) && void 0 !== Tk ? Tk : .1
+           width: null !== (SS = null !== (HS = null === (gS = vS[this.type]) || void 0 === gS ? void 0 : gS.collisionWidth) && void 0 !== HS ? HS : null === (tS = vS[this.type]) || void 0 === tS ? void 0 : tS.collisionHeight) && void 0 !== SS ? SS : .1,
+           height: null !== (bS = null !== (XS = null === (xS = vS[this.type]) || void 0 === xS ? void 0 : xS.collisionHeight) && void 0 !== XS ? XS : null === (NS = vS[this.type]) || void 0 === NS ? void 0 : NS.collisionWidth) && void 0 !== bS ? bS : .1
```

#### 2267. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16905` → after: `L16849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16849) · [Before (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16905)

```diff
-   37435: (kk, Fk, Ik) => {
+   37417: (SS, HS, gS) => {
```

#### 2268. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16908-L16910` → after: `L16852-L16854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16852-L16854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16852-L16854) · [Before (L16908-L16910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16908-L16910)

```diff
-       e: () => yk,
-       g: () => Tk,
-       k: () => lk
+       h: () => xS,
+       l: () => bS,
+       p: () => NS
```

#### 2269. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16912` → after: `L16856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16856) · [Before (L16912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16912)

```diff
-     var Xk = Ik(2700);
+     var tS = gS(2910);
```

#### 2270. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16917` → after: `L16861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16861) · [Before (L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16917)

```diff
-       return null !== (Fk = null === (Ik = Tk.xR[Tk.oR][kk]) || void 0 === Ik ? void 0 : Ik.canAttack) && void 0 !== Fk && Fk || yk(kk)
+       return null !== (HS = null === (gS = bS.rY[bS.HA][SS]) || void 0 === gS ? void 0 : gS.canAttack) && void 0 !== HS && HS || xS(SS)
```

#### 2271. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16923` → after: `L16867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16867) · [Before (L16923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16923)

```diff
-       return null !== (Fk = null === (Ik = Tk.xR[Tk.oR][kk]) || void 0 === Ik ? void 0 : Ik.interactionPrompt) && void 0 !== Fk ? Fk : null
+       return null !== (HS = null === (gS = bS.rY[bS.HA][SS]) || void 0 === gS ? void 0 : gS.interactionPrompt) && void 0 !== HS ? HS : null
```

#### 2272. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16930` → after: `L16874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16874) · [Before (L16930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16930)

```diff
-       return null !== (Fk = null === (Ik = Tk.xR[Tk.oR][kk]) || void 0 === Ik ? void 0 : Ik.interactable) && void 0 !== Fk && Fk
+       return null !== (HS = null === (gS = bS.rY[bS.HA][SS]) || void 0 === gS ? void 0 : gS.interactable) && void 0 !== HS && HS
```

#### 2273. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16937` → after: `L16881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16881) · [Before (L16937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16937)

```diff
-             Fk = kk.xR[kk.oR];
+             HS = SS.rY[SS.HA];
```

#### 2274. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16944` → after: `L16888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16888) · [Before (L16944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16944)

```diff
-       const ik = null !== kk && void 0 !== kk ? kk : Xk.f.localPlayerPickActionHelper;
+       const XS = null !== SS && void 0 !== SS ? SS : tS.g.localPlayerPickActionHelper;
```

#### 2275. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16947-L16948` → after: `L16891-L16892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16891-L16892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16891-L16892) · [Before (L16947-L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16947-L16948)

```diff
-         ak = null !== (Ik = ik.getPickEntityResult(null !== (Tk = null !== Fk && void 0 !== Fk ? Fk : lk.Wkk) && void 0 !== Tk ? Tk : lk.camera.Am())) && void 0 !== Ik ? Ik : null;
-       return yk(ak) ? ak : null
+         qS = null !== (gS = XS.getPickEntityResult(null !== (bS = null !== HS && void 0 !== HS ? HS : NS.cSS) && void 0 !== bS ? bS : NS.camera.uR())) && void 0 !== gS ? gS : null;
+       return xS(qS) ? qS : null
```

#### 2276. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16951` → after: `L16895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16895) · [Before (L16951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16951)

```diff
-   37217: (kk, Fk, Ik) => {
+   37176: (SS, HS, gS) => {
```

#### 2277. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16953` → after: `L16897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16897) · [Before (L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16953)

```diff
-       b: () => Lk
+       d: () => IS
```

#### 2278. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16955-L16957` → after: `L16899-L16901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16899-L16901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16899-L16901) · [Before (L16955-L16957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16955-L16957)

```diff
-     var Xk = Ik(4210),
-       Tk = Ik(37215),
-       ik = Ik(37224);
+     var tS = gS(4356),
+       bS = gS(37171),
+       XS = gS(37181);
```

#### 2279. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16961` → after: `L16905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16905) · [Before (L16961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16961)

```diff
-         this.qZ = kk, this.now = Fk, this.animations = new Map, this.warned = new Set
+         this.qk = SS, this.now = HS, this.animations = new Map, this.warned = new Set
```

#### 2280. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16970` → after: `L16914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16914) · [Before (L16970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16970)

```diff
-         "clip" === (null === tk || void 0 === tk ? void 0 : tk.kind) && (null === Lk || void 0 === Lk || null === (Zk = Lk.getRigController()) || void 0 === Zk || Zk.stopClip(tk.rT));
+         "clip" === (null === fS || void 0 === fS ? void 0 : fS.kind) && (null === IS || void 0 === IS || null === (kS = IS.getRigController()) || void 0 === kS || kS.stopClip(fS.bX));
```

#### 2281. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16972-L16973` → after: `L16916-L16917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16916-L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16916-L16917) · [Before (L16972-L16973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16972-L16973)

```diff
-           mT: Xk,
-           hT: Math.max(ik, 0),
+           gX: tS,
+           tX: Math.max(XS, 0),
```

#### 2282. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16981` → after: `L16925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16925) · [Before (L16981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16981)

```diff
-         if (null === Lk || void 0 === Lk || Lk.stopAnimation(Fk), null === ak || Fk !== Tk.c.Custom) return void this.forget(kk, Fk);
+         if (null === IS || void 0 === IS || IS.stopAnimation(HS), null === qS || HS !== bS.g.Custom) return void this.forget(SS, HS);
```

#### 2283. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16984-L16985` → after: `L16928-L16929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16928-L16929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16928-L16929) · [Before (L16984-L16985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16984-L16985)

```diff
-           rT: ak,
-           DT: Math.max(qk, 0),
+           bX: qS,
+           XX: Math.max(uS, 0),
```

#### 2284. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L16989` → after: `L16933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16933) · [Before (L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L16989)

```diff
-         const wk = null !== (lk = null === Lk || void 0 === Lk ? void 0 : Lk.getRigController()) && void 0 !== lk ? lk : null;
+         const jS = null !== (NS = null === IS || void 0 === IS ? void 0 : IS.getRigController()) && void 0 !== NS ? NS : null;
```

#### 2285. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17000-L17001` → after: `L16944-L16945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16944-L16945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16944-L16945) · [Before (L17000-L17001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17000-L17001)

```diff
-             hT: lk,
-             mT: ak,
+             tX: NS,
+             gX: qS,
```

#### 2286. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17003` → after: `L16947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16947) · [Before (L17003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17003)

```diff
-           } = yk, Lk = (0, ik.e)(Ik, ak, Xk - qk, lk);
+           } = xS, IS = (0, XS.c)(gS, qS, tS - uS, NS);
```

#### 2287. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17009` → after: `L16953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16953) · [Before (L17009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17009)

```diff
-         const Xk = null === (Ik = this.animations.get(kk)) || void 0 === Ik ? void 0 : Ik.get(Tk.c.Custom);
+         const tS = null === (gS = this.animations.get(SS)) || void 0 === gS ? void 0 : gS.get(bS.g.Custom);
```

#### 2288. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17014` → after: `L16958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16958) · [Before (L17014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17014)

```diff
-         return [...null !== (Fk = null === (Ik = this.animations.get(kk)) || void 0 === Ik ? void 0 : Ik.keys()) && void 0 !== Fk ? Fk : []]
+         return [...null !== (HS = null === (gS = this.animations.get(SS)) || void 0 === gS ? void 0 : gS.keys()) && void 0 !== HS ? HS : []]
```

#### 2289. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17018` → after: `L16962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16962) · [Before (L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17018)

```diff
-         for (const [Xk, Tk] of null !== (Ik = this.animations.get(kk)) && void 0 !== Ik ? Ik : []) {
+         for (const [tS, bS] of null !== (gS = this.animations.get(SS)) && void 0 !== gS ? gS : []) {
```

#### 2290. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17022` → after: `L16966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16966) · [Before (L17022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17022)

```diff
-             hT: Tk.hT
+             tX: bS.tX
```

#### 2291. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17024-L17025` → after: `L16968-L16969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16968-L16969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16968-L16969) · [Before (L17024-L17025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17024-L17025)

```diff
-             rT: Tk.rT,
-             hT: Tk.hT
+             bX: bS.bX,
+             tX: bS.tX
```

#### 2292. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17038` → after: `L16982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16982) · [Before (L17038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17038)

```diff
-             if (null === Xk || void 0 === Xk || Xk.stopAnimation(Fk), "clip" === Tk.kind) null === Xk || void 0 === Xk || null === (kk = Xk.getRigController()) || void 0 === kk || kk.stopClip(Tk.rT)
+             if (null === tS || void 0 === tS || tS.stopAnimation(HS), "clip" === bS.kind) null === tS || void 0 === tS || null === (SS = tS.getRigController()) || void 0 === SS || SS.stopClip(bS.bX)
```

#### 2293. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17045` → after: `L16989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R16989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L16989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L16989) · [Before (L17045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17045)

```diff
-         return null !== (Fk = this.qZ.MJ.getState(kk, "animator")) && void 0 !== Fk ? Fk : null
+         return null !== (HS = this.qk.FQ.getState(SS, "animator")) && void 0 !== HS ? HS : null
```

#### 2294. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17057-L17060` → after: `L17001-L17004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17001-L17004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17001-L17004) · [Before (L17057-L17060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17057-L17060)

```diff
-           rT: Ik,
-           mT: Xk,
-           hT: Tk,
-           DT: ik,
+           bX: gS,
+           gX: tS,
+           tX: bS,
+           XX: XS,
```

#### 2295. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17063` → after: `L17007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17007) · [Before (L17063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17063)

```diff
-         "noClip" === ak ? this.warnOnce(`${Ik}|${qk}`, `Can't play "${Ik}": ${qk} has no clip by that name`) : "ambiguous" === ak && this.warnOnce(`${Ik}|${qk}`, `Can't play "${Ik}" on ${qk}: several clips are called that, so give its full name`)
+         "noClip" === qS ? this.warnOnce(`${gS}|${uS}`, `Can't play "${gS}": ${uS} has no clip by that name`) : "ambiguous" === qS && this.warnOnce(`${gS}|${uS}`, `Can't play "${gS}" on ${uS}: several clips are called that, so give its full name`)
```

#### 2296. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17074` → after: `L17018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17018) · [Before (L17074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17074)

```diff
-         this.now = Fk, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.tF = new Set, this.healthFracs = new M … [truncated]
+         this.now = HS, this.animations = void 0, this.attachments = new Map, this.attachmentGenerations = new Map, this.nextAttachmentGeneration = 0, this.particleSystemUpdates = new Map, this.effects = new Map, this.floating = new Map, this.qH = new Set, this.healthFracs = new M … [truncated]
```

#### 2297. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17077` → after: `L17021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17021) · [Before (L17077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17077)

```diff
-         tk(this.attachments, kk).set(Fk.Hi, Fk)
+         fS(this.attachments, SS).set(HS.DX, HS)
```

#### 2298. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17084` → after: `L17028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17028) · [Before (L17084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17084)

```diff
-         return [...null !== (Fk = null === (Ik = this.attachments.get(kk)) || void 0 === Ik ? void 0 : Ik.values()) && void 0 !== Fk ? Fk : []]
+         return [...null !== (HS = null === (gS = this.attachments.get(SS)) || void 0 === gS ? void 0 : gS.values()) && void 0 !== HS ? HS : []]
```

#### 2299. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17102` → after: `L17046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17046) · [Before (L17102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17102)

```diff
-         Tk || (Tk = Object.create(null), this.particleSystemUpdates.set(kk, Tk)), (0, Xk.l)(Tk[Fk] ??= {}, Ik)
+         bS || (bS = Object.create(null), this.particleSystemUpdates.set(SS, bS)), (0, tS.q)(bS[HS] ??= {}, gS)
```

#### 2300. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17124` → after: `L17068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17068) · [Before (L17124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17124)

```diff
-         return null !== (Fk = this.effects.get(kk)) && void 0 !== Fk ? Fk : lk
+         return null !== (HS = this.effects.get(SS)) && void 0 !== HS ? HS : NS
```

#### 2301. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17132` → after: `L17076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17076) · [Before (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17132)

```diff
-           cX: Fk ? Ik : null
+           Ut: HS ? gS : null
```

#### 2302. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17139` → after: `L17083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17083) · [Before (L17139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17139)

```diff
-         Fk ? this.tF.add(kk) : this.tF.delete(kk)
+         HS ? this.qH.add(SS) : this.qH.delete(SS)
```

#### 2303. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17142` → after: `L17086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17086) · [Before (L17142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17142)

```diff
-         return this.tF.has(kk)
+         return this.qH.has(SS)
```

#### 2304. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17149` → after: `L17093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17093) · [Before (L17149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17149)

```diff
-         return null !== (Fk = this.healthFracs.get(kk)) && void 0 !== Fk ? Fk : null
+         return null !== (HS = this.healthFracs.get(SS)) && void 0 !== HS ? HS : null
```

#### 2305. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17152` → after: `L17096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17096) · [Before (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17152)

```diff
-         this.animations.remove(kk), this.attachments.delete(kk), this.attachmentGenerations.delete(kk), this.particleSystemUpdates.delete(kk), this.effects.delete(kk), this.floating.delete(kk), this.tF.delete(kk), this.healthFracs.delete(kk)
+         this.animations.remove(SS), this.attachments.delete(SS), this.attachmentGenerations.delete(SS), this.particleSystemUpdates.delete(SS), this.effects.delete(SS), this.floating.delete(SS), this.qH.delete(SS), this.healthFracs.delete(SS)
```

#### 2306. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17155` → after: `L17099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17099) · [Before (L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17155)

```diff
-         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.tF.clear(), this.healthFracs.clear()
+         this.animations.clear(), this.attachments.clear(), this.attachmentGenerations.clear(), this.particleSystemUpdates.clear(), this.effects.clear(), this.floating.clear(), this.qH.clear(), this.healthFracs.clear()
```

#### 2307. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17168-L17171` → after: `L17112-L17115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17112-L17115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17112-L17115) · [Before (L17168-L17171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17168-L17171)

```diff
-               Hi: Fk,
-               Ji: Ik,
-               xi: Xk,
-               Pi: Tk
+               DX: HS,
+               wX: gS,
+               hX: tS,
+               ZX: bS
```

#### 2308. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17174-L17176` → after: `L17118-L17120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17118-L17120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17118-L17120) · [Before (L17174-L17176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17174-L17176)

```diff
-               Ji: Ik,
-               xi: Xk,
-               Pi: Tk
+               wX: gS,
+               hX: tS,
+               ZX: bS
```

#### 2309. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17180` → after: `L17124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17124) · [Before (L17180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17180)

```diff
-           jK: JSON.parse(JSON.stringify(null !== (Fk = this.particleSystemUpdates.get(kk)) && void 0 !== Fk ? Fk : {})),
+           zD: JSON.parse(JSON.stringify(null !== (HS = this.particleSystemUpdates.get(SS)) && void 0 !== HS ? HS : {})),
```

#### 2310. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17182-L17184` → after: `L17126-L17128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17126-L17128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17126-L17128) · [Before (L17182-L17184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17182-L17184)

```diff
-           floating: null !== (Ik = this.floating.get(kk)) && void 0 !== Ik ? Ik : null,
-           tF: this.tF.has(kk),
-           Ri: this.getHealthFrac(kk)
+           floating: null !== (gS = this.floating.get(SS)) && void 0 !== gS ? gS : null,
+           qH: this.qH.has(SS),
+           zX: this.getHealthFrac(SS)
```

#### 2311. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17188` → after: `L17132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17132) · [Before (L17188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17188)

```diff
-         return this.animations.retainedTypes(kk).length > 0 || this.attachments.has(kk) || this.attachmentGenerations.has(kk) || this.particleSystemUpdates.has(kk) || this.effects.has(kk) || this.floating.has(kk) || this.tF.has(kk) || this.healthFracs.has(kk)
+         return this.animations.retainedTypes(SS).length > 0 || this.attachments.has(SS) || this.attachmentGenerations.has(SS) || this.particleSystemUpdates.has(SS) || this.effects.has(SS) || this.floating.has(SS) || this.qH.has(SS) || this.healthFracs.has(SS)
```

#### 2312. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17208` → after: `L17152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17152) · [Before (L17208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17208)

```diff
-   38105: (kk, Fk, Ik) => {
+   38141: (SS, HS, gS) => {
```

#### 2313. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17210` → after: `L17154-L17155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17154-L17155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17154-L17155) · [Before (L17210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17210)

```diff
-       c: () => HF,
+       b: () => jH,
+       d: () => OH,
```

#### 2314. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17212-L17213` → after: `L17157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17157) · [Before (L17212-L17213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17212-L17213)

```diff
-       i: () => oF,
-       k: () => QF,
+       j: () => QH,
```

#### 2315. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17215` → after: `L17159-L17160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17159-L17160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17159-L17160) · [Before (L17215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17215)

```diff
-       o: () => JF,
+       n: () => GH,
+       q: () => DH,
```

#### 2316. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17217-L17219` → after: `L17162-L17163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17162-L17163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17162-L17163) · [Before (L17217-L17219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17217-L17219)

```diff
-       t: () => PF,
-       w: () => nF,
-       y: () => VF
+       u: () => vH,
+       v: () => wH
```

#### 2317. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17221-L17248` → after: `L17165-L17192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17165-L17192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17165-L17192) · [Before (L17221-L17248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17221-L17248)

```diff
-     var Xk = Ik(37327),
-       Tk = Ik(37144),
-       ik = Ik(3631),
-       yk = Ik(36783),
-       lk = Ik(38109),
-       ak = Ik(38111),
-       qk = Ik(37127),
-       Lk = Ik(37217),
-       tk = Ik(37763),
-       Zk = Ik(37691),
-       jk = Ik(614),
-       ek = Ik(149),
-       wk = Ik(38132),
-       Hk = Ik(2148),
-       Jk = Ik(2492),
-       xk = Ik(2165),
- ... (12 more removed lines; see GitHub link above)
+     var tS = gS(37294),
+       bS = gS(37113),
+       XS = gS(3811),
+       xS = gS(36785),
+       NS = gS(38147),
+       qS = gS(38149),
+       uS = gS(37097),
+       IS = gS(37176),
+       fS = gS(37765),
+       kS = gS(37694),
+       aS = gS(665),
+       KS = gS(160),
+       jS = gS(38173),
+       GS = gS(2340),
+       CS = gS(2692),
+       nS = gS(2354),
+ ... (12 more added lines; see GitHub link above)
```

#### 2318. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17250-L17256` → after: `L17194-L17200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17194-L17200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17194-L17200) · [Before (L17250-L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17250-L17256)

```diff
-       uk = Ik(1894);
-     var bk = Ik(34),
-       Rk = Ik(3089),
-       Uk = Ik(628),
-       Ck = Ik(3096),
-       Nk = Ik(37319),
-       ck = Ik(3147);
+       YS = gS(2083);
+     var AS = gS(31),
+       yS = gS(3320),
+       VS = gS(680),
+       iS = gS(3325),
+       WS = gS(37278),
+       zS = gS(3372);
```

#### 2319. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17258-L17264` → after: `L17202-L17218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17202-L17218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17202-L17218) · [Before (L17258-L17264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17258-L17264)

```diff
-     var fk = Ik(2700),
-       Bk = Ik(37134),
-       dk = Ik(37438),
-       Yk = Ik(38116),
-       Ak = Ik(37299),
-       gk = Ik(38118),
-       mk = Ik(38126),
+     var pS = gS(2910),
+       sS = gS(37101),
+       BS = gS(37419),
+       MS = gS(38151),
+       FS = gS(37261),
+       RS = gS(38158),
+       TS = gS(38169),
+       oS = gS(37247),
+       lS = gS(37441),
+       mS = gS(38033),
+       eS = gS(37876),
+       rS = gS(37193),
+       SH = gS(37322),
+       HH = gS(37345),
+       gH = gS(37252),
+       tH = gS(38178),
+ ... (1 more added lines; see GitHub link above)
```

#### 2320. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17266-L17280` → after: `L17220-L17224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17220-L17224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17220-L17224) · [Before (L17266-L17280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17266-L17280)

```diff
-       rk = Ik(37457),
-       Dk = Ik(38010),
-       Mk = Ik(37835),
-       kF = Ik(37236),
-       FF = Ik(37352),
-       IF = Ik(37373),
-       XF = Ik(37293),
-       TF = Ik(38140),
-       iF = Ik(38143),
-       yF = Ik(37324),
-       lF = Ik(37479),
-       aF = Ik(37277),
-       qF = Ik(37259),
-       LF = Ik(37455),
-       tF = Ik(37662);
+       xH = gS(37471),
+       NH = gS(37242),
+       qH = gS(37225),
+       uH = gS(37432),
+       IH = gS(37655);
```

#### 2321. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17283` → after: `L17227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17227) · [Before (L17283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17283)

```diff
-         this.qZ = kk, this.vehicleEId = null, this.previousHeading = 0
+         this.qk = SS, this.vehicleEId = null, this.previousHeading = 0
```

#### 2322. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17291` → after: `L17235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17235) · [Before (L17291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17291)

```diff
-           MJ: Tk,
+           FQ: bS,
```

#### 2323. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17293` → after: `L17237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17237) · [Before (L17293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17293)

```diff
-           oR: yk,
+           HA: xS,
```

#### 2324. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17295-L17297` → after: `L17239-L17241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17239-L17241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17239-L17241) · [Before (L17295-L17297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17295-L17297)

```diff
-         } = this.qZ, ak = null === (kk = Tk.KFk(yk)) || void 0 === kk ? void 0 : kk.ridingVehicleEId, qk = ak && (null === (Fk = Tk.XIk(yk)) || void 0 === Fk ? void 0 : Fk.le) === ak, Lk = (null === (Ik = Tk.XIk(ik.aY)) || void 0 === Ik ? void 0 : Ik.le) === yk;
-         if (!qk || !Lk || null !== ik.rY || null !== (Xk = lk.client) && void 0 !== Xk && Xk.isReplayMode()) return this.reset(), 0;
-         const tk = (0, tF.getCaughtUpMeshRotation)(this.qZ, ak);
+         } = this.qk, qS = null === (SS = bS.uHS(xS)) || void 0 === SS ? void 0 : SS.ridingVehicleEId, uS = qS && (null === (HS = bS.THS(xS)) || void 0 === HS ? void 0 : HS.fK) === qS, IS = (null === (gS = bS.THS(XS.YB)) || void 0 === gS ? void 0 : gS.fK) === xS;
+         if (!uS || !IS || null !== XS.uF || null !== (tS = NS.client) && void 0 !== tS && tS.isReplayMode()) return this.reset(), 0;
+         const fS = (0, IH.getCaughtUpMeshRotation)(this.qk, qS);
```

#### 2325. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17300` → after: `L17244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17244) · [Before (L17300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17300)

```diff
-           jk = this.vehicleEId === ak ? Sk.e.computeShortestRotation(this.previousHeading, Zk) : 0;
+           aS = this.vehicleEId === qS ? JS.b.computeShortestRotation(this.previousHeading, kS) : 0;
```

#### 2326. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17304-L17306` → after: `L17248-L17250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17248-L17250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17248-L17250) · [Before (L17304-L17306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17304-L17306)

```diff
-     var jF = Ik(37435),
-       eF = Ik(38088),
-       wF = Ik(4649);
+     var kH = gS(37417),
+       aH = gS(38110),
+       KH = gS(4784);
```

#### 2327. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17309-L17310` → after: `L17253-L17254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17253-L17254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17253-L17254) · [Before (L17309-L17310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17309-L17310)

```diff
-       eF.h.setPlayerRigCheck((kk => jk.m.includes(kk) && GF(kk))), (0, IF.l)(), await Rk.b.requiredAssetsAreGenerated();
-       const Fk = Rk.b.getGenerationFailure();
+       aH.g.setPlayerRigCheck((SS => aS.j.includes(SS) && EH(SS))), (0, HH.l)(), await yS.d.requiredAssetsAreGenerated();
+       const HS = yS.d.getGenerationFailure();
```

#### 2328. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17312` → after: `L17256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17256) · [Before (L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17312)

```diff
-       const Ik = kk.Xw.mG();
+       const gS = SS.Hj.lL();
```

#### 2329. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17314-L17318` → after: `L17258-L17262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17258-L17262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17258-L17262) · [Before (L17314-L17318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17314-L17318)

```diff
-       const Tk = await Promise.all(jk.m.map((kk => {
-           const Fk = Xk.then((() => (0, wF.v)(`lifeform ${kk}`)));
-           return Xk = Fk, Fk.then((() => PF(kk, Ik))).then((kk => (bk.g.GL("matchmakeAndPlayStepCompleted", {
-             step: ek.j.SETUP_LIFEFORMS,
-             totalSubSteps: jk.m.length
+       const bS = await Promise.all(aS.j.map((SS => {
+           const HS = tS.then((() => (0, KH.u)(`lifeform ${SS}`)));
+           return tS = HS, HS.then((() => nH(SS, gS))).then((SS => (AS.k.cj("matchmakeAndPlayStepCompleted", {
+             step: KS.g.SETUP_LIFEFORMS,
+             totalSubSteps: aS.j.length
```

#### 2330. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17322-L17323` → after: `L17266-L17267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17266-L17267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17266-L17267) · [Before (L17322-L17323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17322-L17323)

```diff
-       for (let ik = 0; ik < jk.m.length; ik++) {
-         yk[jk.m[ik]] = Tk[ik]
+       for (let XS = 0; XS < aS.j.length; XS++) {
+         xS[aS.j[XS]] = bS[XS]
```

#### 2331. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17325` → after: `L17269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17269) · [Before (L17325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17325)

```diff
-       return HF = yk, await (0, wF.v)("local player"),
+       return jH = xS, await (0, KH.u)("local player"),
```

#### 2332. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17329-L17330` → after: `L17273-L17274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17273-L17274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17273-L17274) · [Before (L17329-L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17329-L17330)

```diff
-               MJ: Ik,
-               oR: Xk
+               FQ: gS,
+               HA: tS
```

#### 2333. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17332-L17335` → after: `L17276-L17279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17276-L17279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17276-L17279) · [Before (L17332-L17335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17332-L17335)

```diff
-           sF(Fk, kk, Xk), (0, Ak.p)(kk, Xk), Ik.Tu(Xk, Ik.names.movementInputs), Ik.Tu(Xk, Ik.names.movement), Ik.Tu(Xk, Ik.names.updateServerOfMovement), Ik.Tu(Xk, Ik.names.playerCameraAdjustment), Ik.Tu(Xk, Ik.names.crouchingHandler), Ik.Tu(Xk, "stepSoundOnWalk"), Ik.Tu(Xk, "pl … [truncated]
-           const Tk = Ik.aN(Xk);
-           Tk.alwaysApplyHorizFriction = !0, Tk.sZ = 0;
-           const yk = Ik.XIk(kk.camera.aY),
+           DH(HS, SS, tS), (0, FS.u)(SS, tS), gS.VY(tS, gS.names.movementInputs), gS.VY(tS, gS.names.movement), gS.VY(tS, gS.names.updateServerOfMovement), gS.VY(tS, gS.names.playerCameraAdjustment), gS.VY(tS, gS.names.crouchingHandler), gS.VY(tS, "stepSoundOnWalk"), gS.VY(tS, "pl … [truncated]
+           const bS = gS.vW(tS);
+           bS.alwaysApplyHorizFriction = !0, bS.Dk = 0;
+           const xS = gS.THS(SS.camera.YB),
```

#### 2334. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17337` → after: `L17281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17281) · [Before (L17337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17337)

```diff
-           kk.camera.HA = () => lk.HA(), yk.qIk = (Fk, Tk, ik) => {
+           SS.camera.kF = () => NS.kF(), xS.SgS = (HS, bS, XS) => {
```

#### 2335. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17339-L17341` → after: `L17283-L17285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17283-L17285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17283-L17285) · [Before (L17339-L17341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17339-L17341)

```diff
-             const yk = Ik.KFk(Xk).ridingVehicleEId;
-             if (yk && !Ik.Ukk(Xk, Ik.names.zK)) {
-               const ik = Ik.KFk(Xk).meshOffset,
+             const xS = gS.uHS(tS).ridingVehicleEId;
+             if (xS && !gS.ZSS(tS, gS.names.lD)) {
+               const XS = gS.uHS(tS).meshOffset,
```

#### 2336. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17348` → after: `L17292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17292) · [Before (L17348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17348)

```diff
-             (0, tk.tickMovementInputsPrePhysics)(kk, Fk), Ik.Ukk(Xk, Ik.names.zK) || (0, Zk.tickMovementPrePhysics)(kk, Fk)
+             (0, fS.tickMovementInputsPrePhysics)(SS, HS), gS.ZSS(tS, gS.names.lD) || (0, kS.tickMovementPrePhysics)(SS, HS)
```

#### 2337. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17352` → after: `L17296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17296) · [Before (L17352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17352)

```diff
-           } = (0, iF.d)(Fk);
+           } = (0, bH.c)(HS);
```

#### 2338. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17354` → after: `L17298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17298) · [Before (L17354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17354)

```diff
-             lk.reset(), pk().set(Tk.TH, 0, 0, 0), pk().set(Tk.fC, 0, 0, 0), pk().set(Tk.YC, 0, 0, 0), kk.bloxd.takeHeldPlayerBodySize(Xk), Ik.Plk(Xk, Ik.names.movement), Ik.Plk(Xk, Ik.names.moveState);
+             NS.reset(), LS().set(bS.xG, 0, 0, 0), LS().set(bS.RV, 0, 0, 0), LS().set(bS.oV, 0, 0, 0), SS.bloxd.takeHeldPlayerBodySize(tS), gS.qNS(tS, gS.names.movement), gS.qNS(tS, gS.names.moveState);
```

#### 2339. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17358-L17359` → after: `L17302-L17303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17302-L17303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17302-L17303) · [Before (L17358-L17359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17358-L17359)

```diff
-                   Ip: Fk,
-                   vIk: Tk,
+                   kY: HS,
+                   ngS: bS,
```

#### 2340. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17366-L17368` → after: `L17310-L17312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17310-L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17310-L17312) · [Before (L17366-L17368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17366-L17368)

```diff
-               if (Ik.Plk(Xk, kk, {
-                   Ip: Fk,
-                   vIk: Tk,
+               if (gS.qNS(tS, SS, {
+                   kY: HS,
+                   ngS: bS,
```

#### 2341. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17371-L17373` → after: `L17315-L17317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17315-L17317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17315-L17317) · [Before (L17371-L17373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17371-L17373)

```diff
-                 }), Ik.Plk(Xk, "animator", {
-                   Ip: Fk,
-                   vIk: Tk,
+                 }), gS.qNS(tS, "animator", {
+                   kY: HS,
+                   ngS: bS,
```

#### 2342. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17375` → after: `L17319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17319) · [Before (L17375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17375)

```diff
-                 }), Ik.Ukk(Xk, "rigAnimation")) {
+                 }), gS.ZSS(tS, "rigAnimation")) {
```

#### 2343. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17379` → after: `L17323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17323) · [Before (L17379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17379)

```diff
-                 Ik.Plk(Xk, "rigAnimation", {
+                 gS.qNS(tS, "rigAnimation", {
```

#### 2344. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17381` → after: `L17325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17325) · [Before (L17381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17381)

```diff
-                   Ip: Fk
+                   kY: HS
```

#### 2345. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17385-L17386` → after: `L17329-L17330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17329-L17330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17329-L17330) · [Before (L17385-L17386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17385-L17386)

```diff
-             Ik.Plk(Xk, Ik.names.meshAttachments)
-           })), Ik.Tu(Xk, Ik.names.cameraShake), Ik.Tu(Xk, "forcedCameraTransition"),
+             gS.qNS(tS, gS.names.meshAttachments)
+           })), gS.VY(tS, gS.names.cameraShake), gS.VY(tS, "forcedCameraTransition"),
```

#### 2346. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17388-L17390` → after: `L17332-L17334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17332-L17334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17332-L17334) · [Before (L17388-L17390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17388-L17390)

```diff
-               const Fk = kk.oR;
-               uk.e.subscribe("useInventory", (Ik => {
-                 if (!0 === Ik && !kk.MJ.zFk(Fk)) {
+               const HS = SS.HA;
+               YS.d.subscribe("useInventory", (gS => {
+                 if (!0 === gS && !SS.FQ.aHS(HS)) {
```

#### 2347. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17392-L17393` → after: `L17336-L17337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17336-L17337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17336-L17337) · [Before (L17392-L17393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17392-L17393)

```diff
-                     const Xk = kk.MJ.sFk(Fk);
-                     bk.g.GL("updatedInventory", Xk.getItems())
+                     const tS = SS.FQ.fHS(HS);
+                     AS.k.cj("updatedInventory", tS.getItems())
```

#### 2348. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17395` → after: `L17339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17339) · [Before (L17395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17395)

```diff
-                   kk.MJ.Tu(Fk, kk.MJ.names.inventory, {
+                   SS.FQ.VY(HS, SS.FQ.names.inventory, {
```

#### 2349. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17398-L17403` → after: `L17342-L17347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17342-L17347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17342-L17347) · [Before (L17398-L17403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17398-L17403)

```diff
-                   }), kk.MJ.VFk(kk.oR).inCreative = kk.gJ.creative, bk.g.GL("playerInventoryComponentChanged")
-                 }!1 === Ik && kk.MJ.zFk(Fk) && (kk.MJ.Eu(Fk, kk.MJ.names.inventory), bk.g.GL("playerInventoryComponentChanged"))
-               })), uk.e.subscribe("creative", (Ik => {
-                 kk.MJ.Ukk(Fk, "inventory") && (kk.MJ.VFk(kk.oR).inCreative = Ik)
-               })), bk.g.subscribe("leaveGame", (() => {
-                 kk.MJ.zFk(Fk) && kk.MJ.Eu(Fk, kk.MJ.names.inventory)
+                   }), SS.FQ.kHS(SS.HA).inCreative = SS.RP.creative, AS.k.cj("playerInventoryComponentChanged")
+                 }!1 === gS && SS.FQ.aHS(HS) && (SS.FQ.pY(HS, SS.FQ.names.inventory), AS.k.cj("playerInventoryComponentChanged"))
+               })), YS.d.subscribe("creative", (gS => {
+                 SS.FQ.ZSS(HS, "inventory") && (SS.FQ.kHS(SS.HA).inCreative = gS)
+               })), AS.k.subscribe("leaveGame", (() => {
+                 SS.FQ.aHS(HS) && SS.FQ.pY(HS, SS.FQ.names.inventory)
```

#### 2350. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17411` → after: `L17355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17355) · [Before (L17411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17411)

```diff
-               MJ: Xk
+               FQ: tS
```

#### 2351. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17413` → after: `L17357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17357) · [Before (L17413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17413)

```diff
-           uk.e.subscribe("numClosestPlayersVisible", (Ik => {
+           YS.d.subscribe("numClosestPlayersVisible", (gS => {
```

#### 2352. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17416-L17417` → after: `L17360-L17361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17360-L17361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17360-L17361) · [Before (L17416-L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17416-L17417)

```diff
-               const Fk = kk.MJ.ku("genericLifeformState");
-               for (const kk of Fk) kk.meshEnabledCombinator.removeBoolean("closestVisibleX"), Xk.getState(kk.Xu, Xk.names.Fe).enabledCombinator.removeBoolean("closestVisibleX")
+               const HS = SS.FQ.EY("genericLifeformState");
+               for (const SS of HS) SS.meshEnabledCombinator.removeBoolean("closestVisibleX"), tS.getState(SS.AY, tS.names.XK).enabledCombinator.removeBoolean("closestVisibleX")
```

#### 2353. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17428` → after: `L17372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17372) · [Before (L17428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17428)

```diff
-             const lk = Xk.OJ(kk.oR);
+             const NS = tS.lC(SS.HA);
```

#### 2354. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17430` → after: `L17374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17374) · [Before (L17430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17430)

```diff
-             const ak = Xk.ku("genericLifeformState");
+             const qS = tS.EY("genericLifeformState");
```

#### 2355. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17432` → after: `L17376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17376) · [Before (L17432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17432)

```diff
-             Ik.length = ak.length, Ik.sort(((kk, Fk) => pk().BL(Xk.OJ(kk.Xu), lk) - pk().BL(Xk.OJ(Fk.Xu), lk)));
+             gS.length = qS.length, gS.sort(((SS, HS) => LS().BI(tS.lC(SS.AY), NS) - LS().BI(tS.lC(HS.AY), NS)));
```

#### 2356. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17434` → after: `L17378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17378) · [Before (L17434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17434)

```diff
-             for (const Tk of Ik) Tk.Xu !== kk.oR && (qk < Fk ? (Tk.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), Xk.getState(Tk.Xu, Xk.names.Fe).enabledCombinator.setBooleanType("closestVisibleX", !0), qk++) : (Tk.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
+             for (const bS of gS) bS.AY !== SS.HA && (uS < HS ? (bS.meshEnabledCombinator.setBooleanType("closestVisibleX", !0), tS.getState(bS.AY, tS.names.XK).enabledCombinator.setBooleanType("closestVisibleX", !0), uS++) : (bS.meshEnabledCombinator.setBooleanType("closestVisibl … [truncated]
```

#### 2357. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17436-L17438` → after: `L17380-L17382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17380-L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17380-L17382) · [Before (L17436-L17438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17436-L17438)

```diff
-           kk.on("Dt", (function(Fk) {
-             const Ik = Xk.OJ(kk.oR),
-               lk = pk().BL(Ik, Tk);
+           SS.on("mf", (function(HS) {
+             const gS = tS.lC(SS.HA),
+               NS = LS().BI(gS, bS);
```

#### 2358. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17467-L17468` → after: `L17411-L17412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17411-L17412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17411-L17412) · [Before (L17467-L17468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17467-L17468)

```diff
-       const yk = (0, iF.d)(kk),
-         lk = null !== (Ik = yk.meshMetadata.lifeformTypeForModelOverride) && void 0 !== Ik ? Ik : kk,
+       const xS = (0, bH.c)(SS),
+         NS = null !== (gS = xS.meshMetadata.lifeformTypeForModelOverride) && void 0 !== gS ? gS : SS,
```

#### 2359. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17472-L17473` → after: `L17416-L17417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17416-L17417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17416-L17417) · [Before (L17472-L17473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17472-L17473)

```diff
-         for (const kk of wk.b) ak.push(Hk.i[kk][(0, Jk.c)(kk)].atlasIdx);
-         qk = xk.f
+         for (const SS of jS.e) qS.push(GS.h[SS][(0, CS.b)(SS)].atlasIdx);
+         uS = nS.d
```

#### 2360. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17477` → after: `L17421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17421) · [Before (L17477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17477)

```diff
-         for (ak.push(Ik.atlasIdx1), ak.push(Ik.atlasIdx2), ak.push(Ik.atlasIdx3); qk * qk < Kk.q[Fk].length;) qk *= 2
+         for (qS.push(gS.atlasIdx1), qS.push(gS.atlasIdx2), qS.push(gS.atlasIdx3); uS * uS < QS.r[HS].length;) uS *= 2
```

#### 2361. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17487` → after: `L17431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17431) · [Before (L17487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17487)

```diff
-         } = (0, iF.d)(kk), Xk = (0, nk.d)() || !1, Tk = null !== (Fk = Ik.lifeformTypeForModelOverride) && void 0 !== Fk ? Fk : kk, ik = Xk ? Rk.b.getModel(`${Tk}_Model`, Ck.h.LIFEFORM) : null, yk = ik && !ik.notFound;
+         } = (0, bH.c)(SS), tS = (0, vS.f)() || !1, bS = null !== (HS = gS.lifeformTypeForModelOverride) && void 0 !== HS ? HS : SS, XS = tS ? yS.d.getModel(`${bS}_Model`, iS.c.LIFEFORM) : null, xS = XS && !XS.notFound;
```

#### 2362. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17490-L17493` → after: `L17434-L17437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17434-L17437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17434-L17437) · [Before (L17490-L17493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17490-L17493)

```diff
-           const kk = yk ? Ck.j.LIFEFORM_ATLAS : Ck.j.PLAYER_ASSET;
-           lk = Rk.b.getTexture("Player_Atlas", kk).url
-         } else lk = Rk.b.getTexture(`${kk}_Atlas`, Ck.j.LIFEFORM_ATLAS).url;
-         let ak = yk ? ik.url : (0, Ak.k)(Tk, `${Tk}_Model.glb`);
+           const SS = xS ? iS.g.LIFEFORM_ATLAS : iS.g.PLAYER_ASSET;
+           NS = yS.d.getTexture("Player_Atlas", SS).url
+         } else NS = yS.d.getTexture(`${SS}_Atlas`, iS.g.LIFEFORM_ATLAS).url;
+         let qS = xS ? XS.url : (0, FS.p)(bS, `${bS}_Model.glb`);
```

#### 2363. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17495` → after: `L17439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17439) · [Before (L17495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17495)

```diff
-         const qk = (0, Qk.e)(Tk),
+         const uS = (0, DS.c)(bS),
```

#### 2364. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17499` → after: `L17443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17443) · [Before (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17499)

```diff
-               Xk = (0, Ak.k)(kk, `${kk}${Wk}`)
+               tS = (0, FS.p)(SS, `${SS}${US}`)
```

#### 2365. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17503-L17509` → after: `L17447-L17453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17447-L17453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17447-L17453) · [Before (L17503-L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17503-L17509)

```diff
-             const Tk = (0, ck.h)(Xk);
-             if (!Tk) return console.error(`Pre-reconstructed GLB for ${kk} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
-             const ik = (0, ck.h)(Fk);
-             if (!ik) return console.error(`GLB for ${kk} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
-             const yk = (0, ck.b)(Tk.base64),
-               lk = (0, Nk.j)(Ik, ik.base64);
-             if ((0, Nk.w)(yk) !== lk) return console.error(`Stale pre-reconstructed model for ${kk} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
+             const bS = (0, zS.k)(tS);
+             if (!bS) return console.error(`Pre-reconstructed GLB for ${SS} is no longer base64-inlined - cannot verify its build hash. Falling back to runtime reconstruction.`), null;
+             const XS = (0, zS.k)(HS);
+             if (!XS) return console.error(`GLB for ${SS} is no longer base64-inlined - cannot verify the pre-reconstructed build hash. Falling back to runtime reconstruction.`), null;
+             const xS = (0, zS.e)(bS.base64),
+               NS = (0, WS.i)(gS, XS.base64);
+             if ((0, WS.v)(xS) !== NS) return console.error(`Stale pre-reconstructed model for ${SS} - re-run \`npm run buildMeshes\`. Falling back to runtime reconstruction.`), null;
```

#### 2366. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17518` → after: `L17462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17462) · [Before (L17518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17518)

```diff
-       await (0, wF.v)(`lifeform ${kk} materials`);
+       await (0, KH.u)(`lifeform ${SS} materials`);
```

#### 2367. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17529` → after: `L17473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17473) · [Before (L17529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17529)

```diff
-       if (!(0, Uk.Q)(yk.getArmourMetadata)) {
+       if (!(0, VS.K)(xS.getArmourMetadata)) {
```

#### 2368. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17538` → after: `L17482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17482) · [Before (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17538)

```diff
-             Yw: Ik,
+             Bj: gS,
```

#### 2369. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17545` → after: `L17489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17489) · [Before (L17545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17545)

```diff
-                 samplingMode: aF.i.nearest,
+                 samplingMode: NH.h.nearest,
```

#### 2370. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17555` → after: `L17499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17499) · [Before (L17555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17555)

```diff
-               (0, qF.v)(kk, Dk.d, {
+               (0, qH.p)(SS, mS.d, {
```

#### 2371. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17557` → after: `L17501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17501) · [Before (L17557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17557)

```diff
-               }), (0, rk.c)(kk, (0, fk.e)().Xw), (0, kF.c)(kk), (0, qF.v)(kk, Mk.e), (0, qF.O)(kk)
+               }), (0, lS.c)(SS, (0, pS.e)().Hj), (0, rS.d)(SS), (0, qH.p)(SS, eS.f), (0, qH.Q)(SS)
```

#### 2372. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17561` → after: `L17505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17505) · [Before (L17561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17561)

```diff
-         }(`${kk}ArmourMaterial`, Ik, Fk), vk = Ik.textureOffsets, Ek = Ik.isArmourVisibleByDefault
+         }(`${SS}ArmourMaterial`, gS, HS), OS = gS.textureOffsets, dS = gS.isArmourVisibleByDefault
```

#### 2373. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17563` → after: `L17507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17507) · [Before (L17563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17563)

```diff
-       const Ok = (0, Qk.e)(lk);
+       const cS = (0, DS.c)(NS);
```

#### 2374. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17565` → after: `L17509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17509) · [Before (L17565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17565)

```diff
-         const Tk = await (0, IF.f)(Ik, Xk, {}).catch((kk => (console.error(`Failed to parse pre-reconstructed model for ${Fk} - falling back to runtime reconstruction.`, kk, ...null !== kk && void 0 !== kk && kk.innerError ? [kk.innerError] : []), null)));
+         const bS = await (0, HH.f)(gS, tS, {}).catch((SS => (console.error(`Failed to parse pre-reconstructed model for ${HS} - falling back to runtime reconstruction.`, SS, ...null !== SS && void 0 !== SS && SS.innerError ? [SS.innerError] : []), null)));
```

#### 2375. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17567-L17569` → after: `L17511-L17513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17511-L17513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17511-L17513) · [Before (L17567-L17569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17567-L17569)

```diff
-         await (0, wF.v)(`lifeform ${kk} model`), Tk.addAllToScene();
-         const ik = (0, TF.g)(Tk, Xk);
-         if (!ik) return Tk.dispose(), console.error(`Corrupt pre-reconstructed model for ${Fk} (no __root__) - falling back to runtime reconstruction.`), null;
+         await (0, KH.u)(`lifeform ${SS} model`), bS.addAllToScene();
+         const XS = (0, tH.h)(bS, tS);
+         if (!XS) return bS.dispose(), console.error(`Corrupt pre-reconstructed model for ${HS} (no __root__) - falling back to runtime reconstruction.`), null;
```

#### 2376. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17576` → after: `L17520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17520) · [Before (L17576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17576)

```diff
-         await (0, wF.v)(`lifeform ${kk} model`), Gk = Ok ? TF.e.reconstructModel(Ik, Ok.reconstructionSchema, Fk, tk) : {
+         await (0, KH.u)(`lifeform ${SS} model`), ES = cS ? tH.g.reconstructModel(gS, cS.reconstructionSchema, HS, fS) : {
```

#### 2377. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17581` → after: `L17525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17525) · [Before (L17581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17581)

```diff
-       await (0, wF.v)(`lifeform ${kk} meshes`);
+       await (0, KH.u)(`lifeform ${SS} meshes`);
```

#### 2378. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17584` → after: `L17528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17528) · [Before (L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17584)

```diff
-           Xw: uk
+           Hj: YS
```

#### 2379. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17586-L17587` → after: `L17530-L17531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17530-L17531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17530-L17531) · [Before (L17586-L17587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17586-L17587)

```diff
-         bk = uk.kp,
-         Bk = ik || !uk.Tw;
+         AS = YS.fY,
+         sS = XS || !YS.gj;
```

#### 2380. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17590-L17591` → after: `L17534-L17535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17534-L17535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17534-L17535) · [Before (L17590-L17591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17590-L17591)

```diff
-         const kk = (0, Ak.f)(Tk) ? Sk : null !== (dk = null !== jk && void 0 !== jk && jk.includes(Tk.name) ? zk : null) && void 0 !== dk ? dk : Vk;
-         kk && Bk && (ik ? Fk.lXk(Tk, !1) : uk.mp(Tk)), (0, Nk.r)(Tk) || (0, Nk.u)(Tk, 1 / 512), Tk.Xp(), Tk.material = kk, Tk.sideOrientation = yF.d.CounterClockWiseSideOrientation, (0, lF.i)(Tk) ? null !== ek && void 0 !== ek && ek.includes(Tk.name) && (Tk.noSunShadowVertices =  … [truncated]
+         const SS = (0, FS.j)(bS) ? JS : null !== (BS = null !== aS && void 0 !== aS && aS.includes(bS.name) ? ZS : null) && void 0 !== BS ? BS : hS;
+         SS && sS && (XS ? HS.egS(bS, !1) : YS.JY(bS)), (0, WS.o)(bS) || (0, WS.s)(bS, 1 / 512), bS.aY(), bS.material = SS, bS.sideOrientation = XH.d.CounterClockWiseSideOrientation, (0, xH.i)(bS) ? null !== KS && void 0 !== KS && KS.includes(bS.name) && (bS.noSunShadowVertices =  … [truncated]
```

#### 2381. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17594` → after: `L17538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17538) · [Before (L17594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17594)

```diff
-         ((0, lF.i)(Tk) ? !Tk.material : !Tk.mG().meshes.includes(Tk)) && 0 === Tk.getChildMeshes().length && Tk.Av(!1)
+         ((0, xH.i)(bS) ? !bS.material : !bS.lL().meshes.includes(bS)) && 0 === bS.getChildMeshes().length && bS.MJ(!1)
```

#### 2382. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17600` → after: `L17544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17544) · [Before (L17600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17600)

```diff
-           "ArmLeftMesh" === wk.name && wk.translate(Tk.Ge.LeftReadOnly, kk), "ArmRightMesh" === wk.name && wk.translate(Tk.Ge.RightReadOnly, kk), "HeadMesh" === wk.name && wk.translate(Tk.Ge.DownReadOnly, kk), "LegLeftMesh" === wk.name && wk.translate(Tk.Ge.UpReadOnly, kk), "LegR … [truncated]
+           "ArmLeftMesh" === jS.name && jS.translate(bS.VK.LeftReadOnly, SS), "ArmRightMesh" === jS.name && jS.translate(bS.VK.RightReadOnly, SS), "HeadMesh" === jS.name && jS.translate(bS.VK.DownReadOnly, SS), "LegLeftMesh" === jS.name && jS.translate(bS.VK.UpReadOnly, SS), "LegR … [truncated]
```

#### 2383. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17607` → after: `L17551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17551) · [Before (L17607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17607)

```diff
-         for (const Tk of mk) Tk.material && uk.mp(Tk);
+         for (const bS of TS) bS.material && YS.JY(bS);
```

#### 2384. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17609-L17610` → after: `L17553-L17554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17553-L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17553-L17554) · [Before (L17609-L17610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17609-L17610)

```diff
-         const kk = (0, Ak.k)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
-           Ik = await (0, IF.b)("", Fk, {
+         const SS = (0, FS.p)("Player", "cape_cuboid_18_12.glb").replace("model/gltf-binary;", ""),
+           gS = await (0, HH.c)("", HS, {
```

#### 2385. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17616-L17618` → after: `L17560-L17562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17560-L17562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17560-L17562) · [Before (L17616-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17616-L17618)

```diff
-           } = Fk.vR();
-           if (Tk.Ge.DistanceSquared(kk.minimum, kk.maximum)) {
-             (0, Nk.r)(Fk) || (0, Nk.u)(Fk, 1 / 128), Fk.name = "Cape", Fk.ci = Fk.ci.scale(.12), Fk.gw = !1, Yk = Fk;
+           } = HS.hA();
+           if (bS.VK.DistanceSquared(SS.minimum, SS.maximum)) {
+             (0, WS.o)(HS) || (0, WS.s)(HS, 1 / 128), HS.name = "Cape", HS.nf = HS.nf.scale(.12), HS.Fj = !1, MS = HS;
```

#### 2386. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17625` → after: `L17569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17569) · [Before (L17625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17625)

```diff
-           Yw: Fk,
+           Bj: HS,
```

#### 2387. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17631` → after: `L17575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17575) · [Before (L17631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17631)

```diff
-           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (Xk = yk.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== Xk ? Xk : {}).map((Fk => {
+           meshGroupsWithDifferentAtlases: Object.fromEntries(Object.entries(null !== (tS = xS.meshMetadata.meshGroupsWithDifferentAtlases) && void 0 !== tS ? tS : {}).map((HS => {
```

#### 2388. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17634` → after: `L17578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17578) · [Before (L17634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17634)

```diff
-               numTexturesInAtlas: "default" === Xk.numTexturesInAtlas ? "Player" === lk ? qk : Kk.q[kk].length : Xk.numTexturesInAtlas
+               numTexturesInAtlas: "default" === tS.numTexturesInAtlas ? "Player" === NS ? uS : QS.r[SS].length : tS.numTexturesInAtlas
```

#### 2389. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17638` → after: `L17582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17582) · [Before (L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17638)

```diff
-         LF = ik ? `${kk}Preview` : kk;
+         uH = XS ? `${SS}Preview` : SS;
```

#### 2390. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17640` → after: `L17584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17584) · [Before (L17640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17640)

```diff
-         St: 32,
+         hf: 32,
```

#### 2391. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17664` → after: `L17608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17608) · [Before (L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17664)

```diff
-       }), bk.setPickableForType(LF, !ik), bk.setCullableForType(LF, !ik), (0, XF.t)(gk), {
+       }), AS.setPickableForType(uH, !XS), AS.setCullableForType(uH, !XS), (0, gH.o)(RS), {
```

#### 2392. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17673-L17674` → after: `L17617-L17618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17617-L17618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17617-L17618) · [Before (L17673-L17674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17673-L17674)

```diff
-         name: `${kk}SpriteSheet${ik?"":"WithVisibleBackFaces"}`,
-         Yw: Fk,
+         name: `${SS}SpriteSheet${XS?"":"WithVisibleBackFaces"}`,
+         Bj: HS,
```

#### 2393. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17682` → after: `L17626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17626) · [Before (L17682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17682)

```diff
-             samplingMode: aF.i.nearest
+             samplingMode: NH.h.nearest
```

#### 2394. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17693` → after: `L17637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17637) · [Before (L17693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17693)

```diff
-           (0, mk.c)(kk, Xk, Xk, Tk), (0, qF.v)(kk, hk.d), (0, rk.c)(kk, (0, fk.e)().Xw), (0, kF.c)(kk), (0, qF.O)(kk)
+           (0, TS.d)(SS, tS, tS, bS), (0, qH.p)(SS, oS.d), (0, lS.c)(SS, (0, pS.e)().Hj), (0, rS.d)(SS), (0, qH.Q)(SS)
```

#### 2395. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17703-L17705` → after: `L17647-L17649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17647-L17649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17647-L17649) · [Before (L17703-L17705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17703-L17705)

```diff
-       const ik = (0, fk.e)().Xw.kp,
-         yk = Tk ? `${kk}Preview` : kk;
-       if (!ik.hasType(yk)) throw new Error(`Thin instance manager not set up for ${kk}`);
+       const XS = (0, pS.e)().Hj.fY,
+         xS = bS ? `${SS}Preview` : SS;
+       if (!XS.hasType(xS)) throw new Error(`Thin instance manager not set up for ${SS}`);
```

#### 2396. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17707` → after: `L17651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17651) · [Before (L17707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17707)

```diff
-       Ik && ik.Av(lk, !0);
+       gS && XS.MJ(NS, !0);
```

#### 2397. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17711` → after: `L17655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17655) · [Before (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17711)

```diff
-       return ik.setGroupEnabled(lk, "armour", ak), ak && ik.setGroup(lk, "armour", "aArmourTint", 1, 1, 1, 0), HF[kk].meshApi.updateMeshOverlayColour(lk, new Xk.b(0, 0, 0, 0)), HF[kk].meshApi.updateMeshLightLevels(lk, LF.b), ik.getScale(lk).scaleInPlace(Fk), ik.setDirty(lk, 0), l … [truncated]
+       return XS.setGroupEnabled(NS, "armour", qS), qS && XS.setGroup(NS, "armour", "aArmourTint", 1, 1, 1, 0), jH[SS].meshApi.updateMeshOverlayColour(NS, new tS.b(0, 0, 0, 0)), jH[SS].meshApi.updateMeshLightLevels(NS, uH.c), XS.getScale(NS).scaleInPlace(HS), XS.setDirty(NS, 0), N … [truncated]
```

#### 2398. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17717` → after: `L17661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17661) · [Before (L17717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17717)

```diff
-         MJ: Qk
+         FQ: DS
```

#### 2399. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17720` → after: `L17664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17664) · [Before (L17720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17720)

```diff
-       } = (0, iF.d)(kk), Ok = Fk.Xw.kp, nk = QF(kk), Gk = Ok.XXk(nk, 0);
+       } = (0, bH.c)(SS), cS = HS.Hj.fY, vS = QH(SS), ES = cS.TgS(vS, 0);
```

#### 2400. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17722` → after: `L17666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17666) · [Before (L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17722)

```diff
-       "humanoidMesh" === Ek.type ? (Rk = sk.m, Uk = sk.l) : (Rk = sk.f, Uk = sk.c), Qk.Tu(Ik, Qk.names.moveState), Qk.Tu(Ik, "genericLifeformState"), Qk.Tu(Ik, "genericLifeform", {
+       "humanoidMesh" === dS.type ? (yS = wS.s, VS = wS.o) : (yS = wS.i, VS = wS.f), DS.VY(gS, DS.names.moveState), DS.VY(gS, "genericLifeformState"), DS.VY(gS, "genericLifeform", {
```

#### 2401. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17724-L17726` → after: `L17668-L17670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17668-L17670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17668-L17670) · [Before (L17724-L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17724-L17726)

```diff
-           Ip: nk,
-           vIk: Gk
-         }), Qk.Tu(Ik, "VK"), Qk.Tu(Ik, "meshRotation", {
+           kY: vS,
+           ngS: ES
+         }), DS.VY(gS, "RD"), DS.VY(gS, "meshRotation", {
```

#### 2402. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17732` → after: `L17676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17676) · [Before (L17732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17732)

```diff
-           modelYRotationOffset: null !== (Tk = Ek.modelYRotationOffset) && void 0 !== Tk ? Tk : 0
+           modelYRotationOffset: null !== (bS = dS.modelYRotationOffset) && void 0 !== bS ? bS : 0
```

#### 2403. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17735` → after: `L17679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17679) · [Before (L17735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17735)

```diff
-           const Ik = kk.MJ.WFk(Fk),
+           const gS = SS.FQ.EHS(HS),
```

#### 2404. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17737` → after: `L17681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17681) · [Before (L17737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17737)

```diff
-             Tk = kk.gJ.showPlayersInUnloadedChunks || !1;
+             bS = SS.RP.showPlayersInUnloadedChunks || !1;
```

#### 2405. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17741` → after: `L17685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17685) · [Before (L17741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17741)

```diff
-           kk.MJ.Tu(Fk, "inLoadedChunk", {
+           SS.FQ.VY(HS, "inLoadedChunk", {
```

#### 2406. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17743` → after: `L17687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17687) · [Before (L17743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17743)

```diff
-               ik = Tk, yk || (Xk.setBooleanType("inLoadedChunk", Tk), Fk !== kk.oR && (Ik.isLifeformMeshEnabled = Tk))
+               XS = bS, xS || (tS.setBooleanType("inLoadedChunk", bS), HS !== SS.HA && (gS.isLifeformMeshEnabled = bS))
```

#### 2407. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17746-L17747` → after: `L17690-L17691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17690-L17691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17690-L17691) · [Before (L17746-L17747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17746-L17747)

```diff
-           const lk = uk.e.subscribe("showPlayersInUnloadedChunks", (Tk => {
-               yk = Tk, yk ? (Xk.setBooleanType("inLoadedChunk", !0), Ik.isLifeformMeshEnabled = !0) : (Xk.setBooleanType("inLoadedChunk", ik), Fk !== kk.oR && (Ik.isLifeformMeshEnabled = ik))
+           const NS = YS.d.subscribe("showPlayersInUnloadedChunks", (bS => {
+               xS = bS, xS ? (tS.setBooleanType("inLoadedChunk", !0), gS.isLifeformMeshEnabled = !0) : (tS.setBooleanType("inLoadedChunk", XS), HS !== SS.HA && (gS.isLifeformMeshEnabled = XS))
```

#### 2408. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17749-L17750` → after: `L17693-L17694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17693-L17694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17693-L17694) · [Before (L17749-L17750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17749-L17750)

```diff
-             ak = bk.g.subscribe(`lifeformDisposed|${Fk}`, (() => {
-               lk(), bk.g.unsubscribe(ak)
+             qS = AS.k.subscribe(`lifeformDisposed|${HS}`, (() => {
+               NS(), AS.k.unsubscribe(qS)
```

#### 2409. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17752-L17754` → after: `L17696-L17698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17696-L17698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17696-L17698) · [Before (L17752-L17754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17752-L17754)

```diff
-         }(Fk, Ik), Qk.Tu(Ik, "updateWalkingState", {
-           Ip: nk,
-           vIk: Gk,
+         }(HS, gS), DS.VY(gS, "updateWalkingState", {
+           kY: vS,
+           ngS: ES,
```

#### 2410. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17756-L17765` → after: `L17700-L17709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17700-L17709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17700-L17709) · [Before (L17756-L17765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17756-L17765)

```diff
-         }), Qk.Tu(Ik, Qk.names[Ek.type], {
-           Ip: nk,
-           vIk: Gk,
-           heldItemPositionParams: null !== (ik = Ek.heldItemPositionParams) && void 0 !== ik ? ik : {},
-           maxWalkingAngleOverride: null !== (tk = Ek.walkingLegSwingAngle) && void 0 !== tk ? tk : null
-         }), Qk.Tu(Ik, "animator", {
-           Ip: nk,
-           vIk: Gk,
-           modelLifeformType: null !== (Zk = Ek.lifeformTypeForModelOverride) && void 0 !== Zk ? Zk : kk
-         }), eF.h.hasAnimation(kk) && Qk.Tu(Ik, "rigAnimation", {
+         }), DS.VY(gS, DS.names[dS.type], {
+           kY: vS,
+           ngS: ES,
+           heldItemPositionParams: null !== (XS = dS.heldItemPositionParams) && void 0 !== XS ? XS : {},
+           maxWalkingAngleOverride: null !== (fS = dS.walkingLegSwingAngle) && void 0 !== fS ? fS : null
+         }), DS.VY(gS, "animator", {
+           kY: vS,
+           ngS: ES,
+           modelLifeformType: null !== (kS = dS.lifeformTypeForModelOverride) && void 0 !== kS ? kS : SS
+         }), aH.g.hasAnimation(SS) && DS.VY(gS, "rigAnimation", {
```

#### 2411. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17767` → after: `L17711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17711) · [Before (L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17767)

```diff
-           Ip: nk
+           kY: vS
```

#### 2412. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17771-L17772` → after: `L17715-L17716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17715-L17716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17715-L17716) · [Before (L17771-L17772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17771-L17772)

```diff
-             MJ: Xk
-           } = Fk, Tk = (0, iF.d)(kk), ik = Xk.WFk(Ik), ak = Xk.getState(Ik, Xk.names.Fe);
+             FQ: tS
+           } = HS, bS = (0, bH.c)(SS), XS = tS.EHS(gS), qS = tS.getState(gS, tS.names.XK);
```

#### 2413. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17775` → after: `L17719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17719) · [Before (L17775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17775)

```diff
-               ik.meshEnabledCombinator.setBooleanType(kk, Fk), Xk.getState(Ik, Xk.names.Fe).enabledCombinator.setBooleanType(kk, Fk)
+               XS.meshEnabledCombinator.setBooleanType(SS, HS), tS.getState(gS, tS.names.XK).enabledCombinator.setBooleanType(SS, HS)
```

#### 2414. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17778` → after: `L17722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17722) · [Before (L17778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17778)

```diff
-               const ik = Xk.getState((0, yk.c)(Ik), Tk.meshMetadata.type);
+               const XS = tS.getState((0, xS.e)(gS), bS.meshMetadata.type);
```

#### 2415. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17780` → after: `L17724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17724) · [Before (L17780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17780)

```diff
-                 Fk.Xw.kp.setVisibility(ik.Ip, kk)
+                 HS.Hj.fY.setVisibility(XS.kY, SS)
```

#### 2416. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17782` → after: `L17726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17726) · [Before (L17782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17782)

```diff
-               const lk = (0, fk.c)().getFollowingEntities(Ik);
+               const NS = (0, pS.b)().getFollowingEntities(gS);
```

#### 2417. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17784` → after: `L17728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17728) · [Before (L17784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17784)

```diff
-                 const Tk = Xk.eFk(Ik);
+                 const bS = tS.tHS(gS);
```

#### 2418. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17787` → after: `L17731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17731) · [Before (L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17787)

```diff
-                     Ip: Ik
+                     kY: gS
```

#### 2419. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17790` → after: `L17734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17734) · [Before (L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17790)

```diff
-                     Fk.Xw.kp.Av(Ik, kk)
+                     HS.Hj.fY.MJ(gS, SS)
```

#### 2420. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17794` → after: `L17738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17738) · [Before (L17794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17794)

```diff
-               Xk.getState(Ik, Xk.names.Fe).enabledCombinator.setBooleanType("visible", kk)
+               tS.getState(gS, tS.names.XK).enabledCombinator.setBooleanType("visible", SS)
```

#### 2421. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17798` → after: `L17742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17742) · [Before (L17798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17798)

```diff
-                 ak = Fk.MJ.getState((0, yk.c)(Ik), Tk.meshMetadata.type);
+                 qS = HS.FQ.getState((0, xS.e)(gS), bS.meshMetadata.type);
```

#### 2422. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17800` → after: `L17744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17744) · [Before (L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17800)

```diff
-               const qk = (0, fk.e)().Xw.kp,
+               const uS = (0, pS.e)().Hj.fY,
```

#### 2423. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17802` → after: `L17746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17746) · [Before (L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17802)

```diff
-                   Ip: Lk
+                   kY: IS
```

#### 2424. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17806` → after: `L17750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17750) · [Before (L17806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17806)

```diff
-                 Zk = tk ? jk.q : qk.getNodeNames(Lk);
+                 kS = fS ? aS.m : uS.getNodeNames(IS);
```

#### 2425. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17811` → after: `L17755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17755) · [Before (L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17811)

```diff
-                   Ik = null !== (ek = ik[kk]) && void 0 !== ek ? ek : [1, 1, 1];
+                   gS = null !== (KS = XS[SS]) && void 0 !== KS ? KS : [1, 1, 1];
```

#### 2426. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17815` → after: `L17759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17759) · [Before (L17815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17815)

```diff
-             Zk = Fk.xR[Fk.oR][Ik];
+             kS = HS.rY[HS.HA][gS];
```

#### 2427. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17817` → after: `L17761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17761) · [Before (L17817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17817)

```diff
-           const ek = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|_isAlive`, (kk => {
+           const KS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|_isAlive`, (SS => {
```

#### 2428. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17820` → after: `L17764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17764) · [Before (L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17820)

```diff
-             wk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|canSee`, (kk => {
+             jS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|canSee`, (SS => {
```

#### 2429. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17823` → after: `L17767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17767) · [Before (L17823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17823)

```diff
-             Hk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|_invisibleEffect`, (kk => {
+             GS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|_invisibleEffect`, (SS => {
```

#### 2430. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17826` → after: `L17770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17770) · [Before (L17826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17826)

```diff
-             Jk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|meshScaling`, (kk => {
+             CS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|meshScaling`, (SS => {
```

#### 2431. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17830` → after: `L17774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17774) · [Before (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17830)

```diff
-           if (Ik === Fk.oR) {
+           if (gS === HS.HA) {
```

#### 2432. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17834-L17835` → after: `L17778-L17779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17778-L17779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17778-L17779) · [Before (L17834-L17835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17834-L17835)

```diff
-             xk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Fk.oR}|_isAlive`, (Ik => {
-               const Xk = Fk.MJ.aN(Fk.oR);
+             nS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${HS.HA}|_isAlive`, (gS => {
+               const tS = HS.FQ.vW(HS.HA);
```

#### 2433. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17839` → after: `L17783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17783) · [Before (L17839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17839)

```diff
-               } else kk.gravityMultiplier = Xk.gravityMultiplier, Xk.gravityMultiplier = 0, Xk.TH[0] = 0, Xk.TH[1] = 0, Xk.TH[2] = 0, Xk.fC[0] = 0, Xk.fC[1] = 0, Xk.fC[2] = 0, Xk.YC[0] = 0, Xk.YC[1] = 0, Xk.YC[2] = 0
+               } else SS.gravityMultiplier = tS.gravityMultiplier, tS.gravityMultiplier = 0, tS.xG[0] = 0, tS.xG[1] = 0, tS.xG[2] = 0, tS.RV[0] = 0, tS.RV[1] = 0, tS.RV[2] = 0, tS.oV[0] = 0, tS.oV[1] = 0, tS.oV[2] = 0
```

#### 2434. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17842-L17843` → after: `L17786-L17787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17786-L17787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17786-L17787) · [Before (L17842-L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17842-L17843)

```diff
-           const Pk = bk.g.subscribe(`lifeformDisposed|${Ik}`, (() => {
-             bk.g.unsubscribe(ek), bk.g.unsubscribe(wk), bk.g.unsubscribe(Hk), bk.g.unsubscribe(Jk), bk.g.unsubscribe(xk), bk.g.unsubscribe(Pk)
+           const PS = AS.k.subscribe(`lifeformDisposed|${gS}`, (() => {
+             AS.k.unsubscribe(KS), AS.k.unsubscribe(jS), AS.k.unsubscribe(GS), AS.k.unsubscribe(CS), AS.k.unsubscribe(nS), AS.k.unsubscribe(PS)
```

#### 2435. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17845-L17846` → after: `L17789-L17790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17789-L17790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17789-L17790) · [Before (L17845-L17846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17845-L17846)

```diff
-         }(kk, Fk, Ik), Qk.Tu(Ik, Qk.names.mesh, {
-           ryk: "humanoidMesh" === Ek.type ? kk => {
+         }(SS, HS, gS), DS.VY(gS, DS.names.mesh, {
+           zxS: "humanoidMesh" === dS.type ? SS => {
```

#### 2436. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17848` → after: `L17792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17792) · [Before (L17848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17848)

```diff
-             const Tk = Qk.KFk(Ik),
+             const bS = DS.uHS(gS),
```

#### 2437. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17852` → after: `L17796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17796) · [Before (L17852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17852)

```diff
-               yk = null !== (Xk = Tk.ridingVehicleEId) && void 0 !== Xk ? Xk : null;
+               xS = null !== (tS = bS.ridingVehicleEId) && void 0 !== tS ? tS : null;
```

#### 2438. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17855-L17856` → after: `L17799-L17800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17799-L17800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17799-L17800) · [Before (L17855-L17856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17855-L17856)

```diff
-               const Xk = Fk.bloxd.getEntityHeading(null !== yk && void 0 !== yk ? yk : Ik, !0);
-               pk().ei(kk, ik, pk().ZERO, Xk)
+               const tS = HS.bloxd.getEntityHeading(null !== xS && void 0 !== xS ? xS : gS, !0);
+               LS().bu(SS, XS, LS().ZERO, tS)
```

#### 2439. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17858` → after: `L17802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17802) · [Before (L17858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17858)

```diff
-             null !== yk && (0, Yk.b)(Fk, yk, kk)
+             null !== xS && (0, MS.e)(HS, xS, SS)
```

#### 2440. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17860-L17861` → after: `L17804-L17805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17804-L17805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17804-L17805) · [Before (L17860-L17861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17860-L17861)

```diff
-           Ip: nk,
-           vIk: Gk,
+           kY: vS,
+           ngS: ES,
```

#### 2441. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17863-L17867` → after: `L17807-L17811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17807-L17811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17807-L17811) · [Before (L17863-L17867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17863-L17867)

```diff
-           gw: !1,
-           OIk: !1
-         }), Qk.Tu(Ik, Qk.names.cape);
-       const Ck = (0, Lk.b)(Fk).getFloating((0, yk.c)(Ik));
-       Qk.Tu(Ik, "floating", Ck ? {
+           Fj: !1,
+           QgS: !1
+         }), DS.VY(gS, DS.names.cape);
+       const iS = (0, IS.d)(HS).getFloating((0, xS.e)(gS));
+       DS.VY(gS, "floating", iS ? {
```

#### 2442. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17869` → after: `L17813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17813) · [Before (L17869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17869)

```diff
-         cX: Ck.cX
+         Ut: iS.Ut
```

#### 2443. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17871-L17873` → after: `L17815-L17817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17815-L17817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17815-L17817) · [Before (L17871-L17873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17871-L17873)

```diff
-       const Nk = Qk.WFk(Ik).meshEnabledCombinator.getTotalBooleanVal();
-       if (Ok.Av(nk, Nk), Ok.setEntityId(nk, Ik), Ok.setPickable(nk, (0, jF.g)(Ik)), GF(kk)) {
-         Qk.Tu(Ik, Qk.names.meshAttachments);
+       const WS = DS.EHS(gS).meshEnabledCombinator.getTotalBooleanVal();
+       if (cS.MJ(vS, WS), cS.setEntityId(vS, gS), cS.setPickable(vS, (0, kH.l)(gS)), EH(SS)) {
+         DS.VY(gS, DS.names.meshAttachments);
```

#### 2444. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17876` → after: `L17820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17820) · [Before (L17876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17876)

```diff
-           for (const Fk of jk.e) {
+           for (const HS of aS.d) {
```

#### 2445. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17881` → after: `L17825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17825) · [Before (L17881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17881)

```diff
-       if ((0, qk.h)(Fk, (0, yk.c)(Ik)), "Player" === kk) {
+       if ((0, uS.j)(HS, (0, xS.e)(gS)), "Player" === SS) {
```

#### 2446. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17883-L17884` → after: `L17827-L17828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17827-L17828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17827-L17828) · [Before (L17883-L17884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17883-L17884)

```diff
-         if (ak.b[Ik]) {
-           const Fk = (0, yk.c)(Ik),
+         if (qS.e[gS]) {
+           const HS = (0, xS.e)(gS),
```

#### 2447. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17886` → after: `L17830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17830) · [Before (L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17886)

```diff
-           for (const kk of Vk.w) ak.b[Ik][kk] && Xk.updatePlayerCosmetic(Fk, nk, kk, ak.b[Ik][kk])
+           for (const SS of hS.r) qS.e[gS][SS] && tS.updatePlayerCosmetic(HS, vS, SS, qS.e[gS][SS])
```

#### 2448. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17888-L17889` → after: `L17832-L17833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17832-L17833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17832-L17833) · [Before (L17888-L17889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17888-L17889)

```diff
-         Ik === Fk.oR || null !== (ck = (0, fk.c)().client) && void 0 !== ck && ck.isReplayMode() || (Qk.Tu(Ik, "proximityHide"), bk.g.GL(`otherPlayerTeleported|${Ik}`, {
-           pos: Fk.MJ.OJ(Ik)
+         gS === HS.HA || null !== (zS = (0, pS.b)().client) && void 0 !== zS && zS.isReplayMode() || (DS.VY(gS, "proximityHide"), AS.k.cj(`otherPlayerTeleported|${gS}`, {
+           pos: HS.FQ.lC(gS)
```

#### 2449. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17892-L17893` → after: `L17836-L17837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17836-L17837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17836-L17837) · [Before (L17892-L17893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17892-L17893)

```diff
-       Qk.getState(Ik, Qk.names.Fe).size = zk.e, Qk.Tu(Ik, "proximityFade", {
-         serverOpacity: null !== (ek = null === (wk = Fk.xR[Fk.oR][Ik]) || void 0 === wk ? void 0 : wk.opacity) && void 0 !== ek ? ek : 1
+       DS.getState(gS, DS.names.XK).size = ZS.c, DS.VY(gS, "proximityFade", {
+         serverOpacity: null !== (KS = null === (jS = HS.rY[HS.HA][gS]) || void 0 === jS ? void 0 : jS.opacity) && void 0 !== KS ? KS : 1
```

#### 2450. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17896-L17897` → after: `L17840-L17841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17840-L17841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17840-L17841) · [Before (L17896-L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17896-L17897)

```diff
-       Ik === Fk.oR && (Wk = Fk.Nkk, bk.g.subscribe("initInfoReceived", (() => {
-         Wk = Fk.Nkk
+       gS === HS.HA && (US = HS.OSS, AS.k.subscribe("initInfoReceived", (() => {
+         US = HS.OSS
```

#### 2451. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17899-L17901` → after: `L17843-L17845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17843-L17845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17843-L17845) · [Before (L17899-L17901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17899-L17901)

```diff
-       const Bk = (0, fk.c)().qm(Ik);
-       SF[(0, yk.c)(Ik)] = Bk, Mk(Fk, Ik, kk, Bk);
-       const dk = bk.g.subscribe("otherEntitySettings|opacity", (kk => {
+       const sS = (0, pS.b)().YF(gS);
+       ZH[(0, xS.e)(gS)] = sS, eS(HS, gS, SS, sS);
+       const BS = AS.k.subscribe("otherEntitySettings|opacity", (SS => {
```

#### 2452. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17907` → after: `L17851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17851) · [Before (L17907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17907)

```diff
-           const ik = Fk.MJ.gFk(Ik);
+           const XS = HS.FQ.WHS(gS);
```

#### 2453. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17910` → after: `L17854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17854) · [Before (L17910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17910)

```diff
-         Ak = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|_invincible`, (kk => {
+         FS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|_invincible`, (SS => {
```

#### 2454. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17915` → after: `L17859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17859) · [Before (L17915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17915)

```diff
-         !kk && Qk.Ukk(Ik, "flashingMeshOverlay") && Qk.Eu(Ik, "flashingMeshOverlay"), kk && !Qk.Ukk(Ik, "flashingMeshOverlay") && Qk.Tu(Ik, "flashingMeshOverlay")
+         !SS && DS.ZSS(gS, "flashingMeshOverlay") && DS.pY(gS, "flashingMeshOverlay"), SS && !DS.ZSS(gS, "flashingMeshOverlay") && DS.VY(gS, "flashingMeshOverlay")
```

#### 2455. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17917-L17918` → after: `L17861-L17862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17861-L17862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17861-L17862) · [Before (L17917-L17918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17917-L17918)

```diff
-       gk(null === (Hk = Fk.xR[Fk.oR][Ik]) || void 0 === Hk ? void 0 : Hk._invincible);
-       const mk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|zIndex`, (kk => {
+       RS(null === (GS = HS.rY[HS.HA][gS]) || void 0 === GS ? void 0 : GS._invincible);
+       const TS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|zIndex`, (SS => {
```

#### 2456. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17921-L17922` → after: `L17865-L17866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17865-L17866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17865-L17866) · [Before (L17921-L17922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17921-L17922)

```diff
-       Ok.setRenderingGroupId(nk, null !== (Jk = null === (xk = Fk.xR[Fk.oR][Ik]) || void 0 === xk ? void 0 : xk.zIndex) && void 0 !== Jk ? Jk : 0);
-       const hk = bk.g.subscribe(`otherEntitySettingsClientifiedEId|${Ik}|overlayColour`, (kk => {
+       cS.setRenderingGroupId(vS, null !== (CS = null === (nS = HS.rY[HS.HA][gS]) || void 0 === nS ? void 0 : nS.zIndex) && void 0 !== CS ? CS : 0);
+       const oS = AS.k.subscribe(`otherEntitySettingsClientifiedEId|${gS}|overlayColour`, (SS => {
```

#### 2457. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17929` → after: `L17873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17873) · [Before (L17929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17929)

```diff
-           const Fk = (0, Sk.Y)(kk);
+           const HS = (0, JS.M)(SS);
```

#### 2458. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17932` → after: `L17876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17876) · [Before (L17932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17932)

```diff
-         Fk.MJ.RFk(Ik).overlayColourOverride = Tk
+         HS.FQ.JHS(gS).overlayColourOverride = bS
```

#### 2459. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17934-L17936` → after: `L17878-L17880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17878-L17880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17878-L17880) · [Before (L17934-L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17934-L17936)

```diff
-       rk(null !== (Pk = null === (Kk = Fk.xR[Fk.oR][Ik]) || void 0 === Kk ? void 0 : Kk.overlayColour) && void 0 !== Pk ? Pk : null);
-       const Dk = bk.g.subscribe(`entityScale|${Ik}`, (Xk => {
-         SF[(0, yk.c)(Ik)] = Xk, Mk(Fk, Ik, kk, Xk)
+       lS(null !== (PS = null === (QS = HS.rY[HS.HA][gS]) || void 0 === QS ? void 0 : QS.overlayColour) && void 0 !== PS ? PS : null);
+       const mS = AS.k.subscribe(`entityScale|${gS}`, (tS => {
+         ZH[(0, xS.e)(gS)] = tS, eS(HS, gS, SS, tS)
```

#### 2460. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17941-L17942` → after: `L17885-L17886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17885-L17886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17885-L17886) · [Before (L17941-L17942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17941-L17942)

```diff
-         const ik = (0, iF.d)(Ik),
-           lk = kk.MJ.getState((0, yk.c)(Fk), ik.meshMetadata.type);
+         const XS = (0, bH.c)(gS),
+           NS = SS.FQ.getState((0, xS.e)(HS), XS.meshMetadata.type);
```

#### 2461. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17945` → after: `L17889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17889) · [Before (L17945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17945)

```diff
-           Ip: ak
+           kY: qS
```

#### 2462. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17950` → after: `L17894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17894) · [Before (L17950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17950)

```diff
-         } = (0, zk.g)(Xk, Ik), Lk = kk.Xw.kp, tk = (0, yk.c)(Fk);
+         } = (0, ZS.f)(tS, gS), IS = SS.Hj.fY, fS = (0, xS.e)(HS);
```

#### 2463. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17953` → after: `L17897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17897) · [Before (L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17953)

```diff
-           const kk = Lk.XXk(ak, 0).scale;
+           const SS = IS.TgS(qS, 0).scale;
```

#### 2464. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17956` → after: `L17900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17900) · [Before (L17956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17956)

```diff
-         const jk = Xk * (null !== (Tk = ik.modelScale) && void 0 !== Tk ? Tk : 1);
+         const aS = tS * (null !== (bS = XS.modelScale) && void 0 !== bS ? bS : 1);
```

#### 2465. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17958` → after: `L17902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17902) · [Before (L17958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17958)

```diff
-         const ek = kk.MJ.getState(tk, kk.MJ.names.Fe);
+         const KS = SS.FQ.getState(fS, SS.FQ.names.XK);
```

#### 2466. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17961-L17962` → after: `L17905-L17906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17905-L17906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17905-L17906) · [Before (L17961-L17962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17961-L17962)

```diff
-       const kF = bk.g.subscribe(`lifeformDisposed|${Ik}`, (() => {
-         bk.g.unsubscribe(dk), bk.g.unsubscribe(Ak), bk.g.unsubscribe(mk), bk.g.unsubscribe(hk), bk.g.unsubscribe(Dk), bk.g.unsubscribe(kF), Ik !== Fk.oR && delete zF[Ik]
+       const rS = AS.k.subscribe(`lifeformDisposed|${gS}`, (() => {
+         AS.k.unsubscribe(BS), AS.k.unsubscribe(FS), AS.k.unsubscribe(TS), AS.k.unsubscribe(oS), AS.k.unsubscribe(mS), AS.k.unsubscribe(rS), gS !== HS.HA && delete hH[gS]
```

#### 2467. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17964` → after: `L17908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17908) · [Before (L17964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17964)

```diff
-       bk.g.GL(`lifeformSetupFinished|${Ik}`)
+       AS.k.cj(`lifeformSetupFinished|${gS}`)
```

#### 2468. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17970-L17972` → after: `L17914-L17916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17914-L17916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17914-L17916) · [Before (L17970-L17972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17970-L17972)

```diff
-         sX: Ik,
-         VX: Xk,
-         zX: Tk
+         Dt: gS,
+         wt: tS,
+         ht: bS
```

#### 2469. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17974-L17976` → after: `L17918-L17920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17918-L17920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17918-L17920) · [Before (L17974-L17976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17974-L17976)

```diff
-       const ik = (0, yk.c)(Ik);
-       ak.b[Ik] = {
-         ...ak.b[Ik],
+       const XS = (0, xS.e)(gS);
+       qS.e[gS] = {
+         ...qS.e[gS],
```

#### 2470. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17978-L17979` → after: `L17922-L17923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17922-L17923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17922-L17923) · [Before (L17978-L17979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17978-L17979)

```diff
-       }, ak.b[ik] = {
-         ...ak.b[ik],
+       }, qS.e[XS] = {
+         ...qS.e[XS],
```

#### 2471. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17982` → after: `L17926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17926) · [Before (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17982)

```diff
-       const lk = (0, fk.e)().MJ.YFk(ik);
+       const NS = (0, pS.e)().FQ.VHS(XS);
```

#### 2472. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17984-L17986` → after: `L17928-L17930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17928-L17930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17928-L17930) · [Before (L17984-L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17984-L17986)

```diff
-       const qk = null !== (Fk = lk.Ip) && void 0 !== Fk ? Fk : null;
-       null !== qk && HF ? HF.Player.meshApi.updatePlayerCosmetic(ik, lk.Ip, Xk, Tk) : console.error(`Error: ${ik} not ready for updateIngamePlayerCustomisation, ${null!==qk} ${!!HF}`)
-     }(0, ik.onGameReset)(ak.e);
+       const uS = null !== (HS = NS.kY) && void 0 !== HS ? HS : null;
+       null !== uS && jH ? jH.Player.meshApi.updatePlayerCosmetic(XS, NS.kY, tS, bS) : console.error(`Error: ${XS} not ready for updateIngamePlayerCustomisation, ${null!==uS} ${!!jH}`)
+     }(0, XS.onGameReset)(qS.g);
```

#### 2473. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17992` → after: `L17936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17936) · [Before (L17992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17992)

```diff
-       return null !== (Fk = zF[(0, yk.c)(kk)]) && void 0 !== Fk ? Fk : {}
+       return null !== (HS = hH[(0, xS.e)(SS)]) && void 0 !== HS ? HS : {}
```

#### 2474. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L17997` → after: `L17941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17941) · [Before (L17997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L17997)

```diff
-       return null !== (Fk = SF[(0, yk.c)(kk)]) && void 0 !== Fk ? Fk : 1
+       return null !== (HS = ZH[(0, xS.e)(SS)]) && void 0 !== HS ? HS : 1
```

#### 2475. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18002` → after: `L17946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17946) · [Before (L18002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18002)

```diff
-       return null !== (Fk = null === (Ik = zF[(0, yk.c)(kk)]) || void 0 === Ik || null === (Xk = Ik.Helmet) || void 0 === Xk ? void 0 : Xk.itemName) && void 0 !== Fk ? Fk : null
+       return null !== (HS = null === (gS = hH[(0, xS.e)(SS)]) || void 0 === gS || null === (tS = gS.Helmet) || void 0 === tS ? void 0 : tS.itemName) && void 0 !== HS ? HS : null
```

#### 2476. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18009` → after: `L17953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17953) · [Before (L18009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18009)

```diff
-         lk = (0, yk.c)(kk);
+         NS = (0, xS.e)(SS);
```

#### 2477. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18017-L18019` → after: `L17961-L17963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17961-L17963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17961-L17963) · [Before (L18017-L18019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18017-L18019)

```diff
-       const ak = ik.MJ.YFk(lk);
-       if (null === (null !== (Tk = null === ak || void 0 === ak ? void 0 : ak.Ip) && void 0 !== Tk ? Tk : null) || !HF) return;
-       const qk = (0, fk.c)().getLifeformType(lk),
+       const qS = XS.FQ.VHS(NS);
+       if (null === (null !== (bS = null === qS || void 0 === qS ? void 0 : qS.kY) && void 0 !== bS ? bS : null) || !jH) return;
+       const uS = (0, pS.b)().getLifeformType(NS),
```

#### 2478. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18021-L18022` → after: `L17965-L17966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17965-L17966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17965-L17966) · [Before (L18021-L18022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18021-L18022)

```diff
-       if (!(Lk instanceof gk.b)) return;
-       const tk = Ik ? Ek.k[Ik] : void 0;
+       if (!(IS instanceof RS.e)) return;
+       const fS = gS ? dS.p[gS] : void 0;
```

#### 2479. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18026-L18027` → after: `L17970-L17971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17970-L17971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17970-L17971) · [Before (L18026-L18027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18026-L18027)

```diff
-         const kk = Ik ? (0, Ek.j)(Ik) : null,
-           Tk = Ik ? (0, Ok.i)(Ik) : null;
+         const SS = gS ? (0, dS.l)(gS) : null,
+           bS = gS ? (0, cS.f)(gS) : null;
```

#### 2480. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18033` → after: `L17977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17977) · [Before (L18033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18033)

```diff
-       return "Player" === kk || "Player" === (0, iF.d)(kk).meshMetadata.lifeformTypeForModelOverride
+       return "Player" === SS || "Player" === (0, bH.c)(SS).meshMetadata.lifeformTypeForModelOverride
```

#### 2481. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18036` → after: `L17980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17980) · [Before (L18036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18036)

```diff
-         oR: kk
+         HA: SS
```

#### 2482. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18038` → after: `L17982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17982) · [Before (L18038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18038)

```diff
-       for (const Fk of jk.e) nF(kk, Fk, null, null);
+       for (const HS of aS.d) vH(SS, HS, null, null);
```

#### 2483. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18042` → after: `L17986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17986) · [Before (L18042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18042)

```diff
-   38123: (kk, Fk, Ik) => {
+   38162: (SS, HS, gS) => {
```

#### 2484. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18046-L18050` → after: `L17990-L17994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R17990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L17990-L17994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L17990-L17994) · [Before (L18046-L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18046-L18050)

```diff
-     var Xk = Ik(37327),
-       Tk = Ik(2700),
-       ik = Ik(37455),
-       yk = Ik(37144),
-       lk = Ik(38126);
+     var tS = gS(37294),
+       bS = gS(2910),
+       XS = gS(37432),
+       xS = gS(37113),
+       NS = gS(38169);
```

#### 2485. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18064` → after: `L18008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18008) · [Before (L18064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18064)

```diff
-           if (void 0 !== Ik[ak.name]) ak.jR("aAtlasIdx1", 1), ak.jR("aArmourTint", 4), ak.jR("aEnchantmentColour", 3), ak.jR("aEnchantmentSpeed", 1), ak.JR.aAtlasIdx1 = 0, ak.JR.aArmourTint = new Xk.b(1, 1, 1, 0), ak.JR.aEnchantmentColour = new Xk.Color3(0, 0, 0), ak.JR.aEnchantm … [truncated]
+           if (void 0 !== gS[qS.name]) qS.lY("aAtlasIdx1", 1), qS.lY("aArmourTint", 4), qS.lY("aEnchantmentColour", 3), qS.lY("aEnchantmentSpeed", 1), qS.mY.aAtlasIdx1 = 0, qS.mY.aArmourTint = new tS.b(1, 1, 1, 0), qS.mY.aEnchantmentColour = new tS.Color3(0, 0, 0), qS.mY.aEnchantm … [truncated]
```

#### 2486. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18066-L18068` → after: `L18010-L18012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18010-L18012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18010-L18012) · [Before (L18066-L18068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18066-L18068)

```diff
-             const kk = (0, lk.k)(Tk.length);
-             for (let Fk = 1; Fk <= kk; Fk++) ak.jR((0, lk.d)(Fk), 4);
-             for (let Fk = 1; Fk <= kk; Fk++) ak.JR[(0, lk.d)(Fk)] = yk.Vector4.FromArray(Tk, 4 * (Fk - 1))
+             const SS = (0, NS.l)(bS.length);
+             for (let HS = 1; HS <= SS; HS++) qS.lY((0, NS.g)(HS), 4);
+             for (let HS = 1; HS <= SS; HS++) qS.mY[(0, NS.g)(HS)] = xS.Vector4.FromArray(bS, 4 * (HS - 1))
```

#### 2487. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18070` → after: `L18014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18014) · [Before (L18070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18070)

```diff
-           ak.jR("aOpacity", 1), ak.JR.aOpacity = 1, ak.jR("aLightLevels", 4), ak.JR.aLightLevels = (0, ik.l)()
+           qS.lY("aOpacity", 1), qS.mY.aOpacity = 1, qS.lY("aLightLevels", 4), qS.mY.aLightLevels = (0, XS.o)()
```

#### 2488. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18074` → after: `L18018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18018) · [Before (L18074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18074)

```diff
-         const Ik = (0, Tk.e)().Xw.kp;
+         const gS = (0, bS.e)().Hj.fY;
```

#### 2489. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18079` → after: `L18023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18023) · [Before (L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18079)

```diff
-         (0, Tk.e)().Xw.kp.setGroupEnabled(kk, Fk, Ik)
+         (0, bS.e)().Hj.fY.setGroupEnabled(SS, HS, gS)
```

#### 2490. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18082-L18083` → after: `L18026-L18027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18026-L18027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18026-L18027) · [Before (L18082-L18083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18082-L18083)

```diff
-         const Ik = (0, Tk.e)().Xw.kp;
-         Ik.set(kk, "aOpacity", Fk), Ik.pR(kk, "aOpacity", Fk)
+         const gS = (0, bS.e)().Hj.fY;
+         gS.set(SS, "aOpacity", HS), gS.JA(SS, "aOpacity", HS)
```

#### 2491. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18086-L18087` → after: `L18030-L18031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18030-L18031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18030-L18031) · [Before (L18086-L18087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18086-L18087)

```diff
-         const Ik = (0, Tk.e)().Xw.kp;
-         Ik.set(kk, "aLightLevels", Fk), Ik.pR(kk, "aLightLevels", Fk)
+         const gS = (0, bS.e)().Hj.fY;
+         gS.set(SS, "aLightLevels", HS), gS.JA(SS, "aLightLevels", HS)
```

#### 2492. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18090` → after: `L18034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18034) · [Before (L18090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18090)

```diff
-         const Ik = (0, Tk.e)().Xw.kp;
+         const gS = (0, bS.e)().Hj.fY;
```

#### 2493. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18096-L18097` → after: `L18040-L18041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18040-L18041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18040-L18041) · [Before (L18096-L18097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18096-L18097)

```diff
-           } = (0, lk.g)(Number(Xk));
-           this.playerAtlasVec4s[kk][Tk - 1][ik] = Fk[Xk], Ik.setGroup(kk, "notArmour", `aAtlasIdx${Tk}`, this.playerAtlasVec4s[kk][Tk - 1])
+           } = (0, NS.j)(Number(tS));
+           this.playerAtlasVec4s[SS][bS - 1][XS] = HS[tS], gS.setGroup(SS, "notArmour", `aAtlasIdx${bS}`, this.playerAtlasVec4s[SS][bS - 1])
```

#### 2494. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18102` → after: `L18046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18046) · [Before (L18102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18102)

```diff
-   38118: (kk, Fk, Ik) => {
+   38158: (SS, HS, gS) => {
```

#### 2495. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18104` → after: `L18048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18048) · [Before (L18104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18104)

```diff
-       b: () => Jk
+       e: () => CS
```

#### 2496. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18106` → after: `L18050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18050) · [Before (L18106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18106)

```diff
-     var Xk = Ik(354),
+     var tS = gS(402),
```

#### 2497. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18108-L18118` → after: `L18052-L18062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18052-L18062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18052-L18062) · [Before (L18108-L18118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18108-L18118)

```diff
-       ik = Ik(3134),
-       yk = Ik(37855),
-       lk = Ik(2148),
-       ak = Ik(38123),
-       qk = Ik(2700),
-       Lk = Ik(337),
-       tk = Ik(38132),
-       Zk = Ik(2492),
-       jk = Ik(37134),
-       ek = Ik(37438),
-       wk = Ik(37848);
+       XS = gS(3366),
+       xS = gS(37890),
+       NS = gS(2340),
+       qS = gS(38162),
+       uS = gS(2910),
+       IS = gS(387),
+       fS = gS(38173),
+       kS = gS(2692),
+       aS = gS(37101),
+       KS = gS(37419),
+       jS = gS(37885);
```

#### 2498. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18127-L18129` → after: `L18071-L18073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18071-L18073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18071-L18073) · [Before (L18127-L18129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18127-L18129)

```diff
-         Xk ??= (0, Zk.c)(Ik);
-         const ik = (0, lk.k)(Ik, Xk);
-         if (!ik) return void console.error(`Error: ${Xk} not a valid cosmetic of type ${Ik}`);
+         tS ??= (0, kS.b)(gS);
+         const XS = (0, NS.j)(gS, tS);
+         if (!XS) return void console.error(`Error: ${tS} not a valid cosmetic of type ${gS}`);
```

#### 2499. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18132` → after: `L18076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18076) · [Before (L18132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18132)

```diff
-         const Lk = tk.b.indexOf(Ik);
+         const IS = fS.e.indexOf(gS);
```

#### 2500. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18135` → after: `L18079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18079) · [Before (L18135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18135)

```diff
-           const kk = null !== (wk = ik.atlasIdx) && void 0 !== wk ? wk : (0, lk.k)(Ik, `${Ik}_none`).atlasIdx;
+           const SS = null !== (jS = XS.atlasIdx) && void 0 !== jS ? jS : (0, NS.j)(gS, `${gS}_none`).atlasIdx;
```

#### 2501. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18142` → after: `L18086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18086) · [Before (L18142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18142)

```diff
-             MJ: Fk
+             FQ: HS
```

#### 2502. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18156-L18157` → after: `L18100-L18101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18100-L18101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18100-L18101) · [Before (L18156-L18157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18156-L18157)

```diff
-           tk = ak.MJ.YFk(kk);
-         if (!tk) return void console.error(`Error: ${kk} not ready for updatePlayerArmour, ${tk}`);
+           fS = qS.FQ.VHS(SS);
+         if (!fS) return void console.error(`Error: ${SS} not ready for updatePlayerArmour, ${fS}`);
```

#### 2503. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18159` → after: `L18103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18103) · [Before (L18159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18159)

```diff
-           jk = ak.Xw.kp,
+           aS = qS.Hj.fY,
```

#### 2504. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18161` → after: `L18105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18105) · [Before (L18161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18161)

```diff
-             Ip: ek
+             kY: KS
```

#### 2505. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18168` → after: `L18112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18112) · [Before (L18168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18168)

```diff
-             const Fk = (0, wk.e)(Tk);
+             const HS = (0, jS.c)(bS);
```

#### 2506. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18170` → after: `L18114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18114) · [Before (L18170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18170)

```diff
-             const lk = null !== (Hk = yk.p[Tk]) && void 0 !== Hk ? Hk : yk.p.None;
+             const NS = null !== (GS = xS.r[bS]) && void 0 !== GS ? GS : xS.r.None;
```

#### 2507. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18172` → after: `L18116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18116) · [Before (L18172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18172)

```diff
-             const ak = null !== (Jk = Lk.ob[Tk]) && void 0 !== Jk ? Jk : Lk.ob.None;
+             const qS = null !== (CS = IS._[bS]) && void 0 !== CS ? CS : IS._.None;
```

#### 2508. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18181` → after: `L18125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18125) · [Before (L18181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18181)

```diff
-             MJ: Xk
+             FQ: tS
```

#### 2509. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18183-L18185` → after: `L18127-L18129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18127-L18129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18127-L18129) · [Before (L18183-L18185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18183-L18185)

```diff
-           ik = kk === Ik.oR ? Xk.ZY(kk).Im : Xk.OJ(kk),
-           yk = kk === Ik.oR ? Tk().ZERO : Ik.SZ,
-           lk = Ik.Xw.kp;
+           XS = SS === gS.HA ? tS.zB(SS).JF : tS.lC(SS),
+           xS = SS === gS.HA ? bS().ZERO : gS.Zk,
+           NS = gS.Hj.fY;
```

#### 2510. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18190` → after: `L18134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18134) · [Before (L18190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18190)

```diff
-           ik = kk.XXk(Fk, 0);
+           XS = SS.TgS(HS, 0);
```

#### 2511. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18218` → after: `L18162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18162) · [Before (L18218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18218)

```diff
-   38143: (kk, Fk, Ik) => {
+   38184: (SS, HS, gS) => {
```

#### 2512. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18220` → after: `L18164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18164) · [Before (L18220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18220)

```diff
-       d: () => iF
+       c: () => NH
```

#### 2513. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18222-L18229` → after: `L18166-L18173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18166-L18173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18166-L18173) · [Before (L18222-L18229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18222-L18229)

```diff
-     var Xk = Ik(38453),
-       Tk = Ik(38460),
-       ik = Ik(36783),
-       yk = Ik(38105),
-       lk = Ik(38145),
-       ak = Ik(34),
-       qk = Ik(37299),
-       Lk = Ik(37435);
+     var tS = gS(38496),
+       bS = gS(38502),
+       XS = gS(36785),
+       xS = gS(38141),
+       NS = gS(38188),
+       qS = gS(31),
+       uS = gS(37261),
+       IS = gS(37417);
```

#### 2514. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18232` → after: `L18176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18176) · [Before (L18232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18232)

```diff
-         this.bloxd = kk, this.eId = Fk, this.lifeformType = void 0, this.qZ = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = Ik, this.qZ = kk.qZ
+         this.bloxd = SS, this.eId = HS, this.lifeformType = void 0, this.qk = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.multilineTextBoxSub = void 0, this.lifeformType = gS, this.qk = SS.qk
```

#### 2515. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18236` → after: `L18180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18180) · [Before (L18236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18236)

```diff
-         !this.bloxd.getEntityName(this.eId) && Fk.defaultName && this.bloxd.setEntityName(this.eId, Fk.defaultName), this.qZ.MJ.add([kk.x, kk.y, kk.z], Fk.physicsBodyDimensions.width, Fk.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.qZ.MJ.Tu(this.eId, this.qZ. … [truncated]
+         !this.bloxd.getEntityName(this.eId) && HS.defaultName && this.bloxd.setEntityName(this.eId, HS.defaultName), this.qk.FQ.add([SS.x, SS.y, SS.z], HS.physicsBodyDimensions.width, HS.physicsBodyDimensions.height, null, null, !1, !0, this.eId), this.qk.FQ.VY(this.eId, this.qk. … [truncated]
```

#### 2516. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18239-L18242` → after: `L18183-L18186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18183-L18186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18183-L18186) · [Before (L18239-L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18239-L18242)

```diff
-           const Ik = this.qZ.Xw.kp,
-             Xk = null !== (kk = null === (Fk = this.qZ.MJ.eFk(this.eId)) || void 0 === Fk ? void 0 : Fk.Ip) && void 0 !== kk ? kk : null,
-             Tk = (0, Lk.g)(this.eId);
-           null === Xk && console.error(`Error: ${this.eId} not ready for pickability change to ${Tk}`), Ik.setPickable(Xk, Tk)
+           const gS = this.qk.Hj.fY,
+             tS = null !== (SS = null === (HS = this.qk.FQ.tHS(this.eId)) || void 0 === HS ? void 0 : HS.kY) && void 0 !== SS ? SS : null,
+             bS = (0, IS.l)(this.eId);
+           null === tS && console.error(`Error: ${this.eId} not ready for pickability change to ${bS}`), gS.setPickable(tS, bS)
```

#### 2517. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18244` → after: `L18188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18188) · [Before (L18244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18244)

```diff
-         this.canAttackSub = ak.g.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Ik), this.interactableSub = ak.g.subscribe(`otherEntitySettings|${this.eId}|interactable`, Ik), this.multilineTextBoxSub = (0, qk.p)(this.qZ, this.eId), (0, yk.s)(this.lifeformType, this.qZ, t … [truncated]
+         this.canAttackSub = qS.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, gS), this.interactableSub = qS.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, gS), this.multilineTextBoxSub = (0, uS.u)(this.qk, this.eId), (0, xS.q)(this.lifeformType, this.qk, t … [truncated]
```

#### 2518. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18247` → after: `L18191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18191) · [Before (L18247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18247)

```diff
-         const Ik = this.qZ.MJ.KFk(this.eId);
+         const gS = this.qk.FQ.uHS(this.eId);
```

#### 2519. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18251-L18252` → after: `L18195-L18196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18195-L18196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18195-L18196) · [Before (L18251-L18252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18251-L18252)

```diff
-             if ("yRotation" === kk ? Ik.heading = Fk : void 0 !== Ik[kk] && (Ik[kk] = Fk), "armSwinging" === kk && Fk) {
-               const kk = this.qZ.MJ.YFk(this.eId);
+             if ("yRotation" === SS ? gS.heading = HS : void 0 !== gS[SS] && (gS[SS] = HS), "armSwinging" === SS && HS) {
+               const SS = this.qk.FQ.VHS(this.eId);
```

#### 2520. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18254` → after: `L18198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18198) · [Before (L18254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18254)

```diff
-             } else if ("xRotation" === kk || "yRotation" === kk || "zRotation" === kk)(0, qk.t)(this.qZ, this.eId, kk, Fk);
+             } else if ("xRotation" === SS || "yRotation" === SS || "zRotation" === SS)(0, uS.x)(this.qk, this.eId, SS, HS);
```

#### 2521. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18257-L18258` → after: `L18201-L18202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18201-L18202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18201-L18202) · [Before (L18257-L18258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18257-L18258)

```diff
-               const kk = this.qZ.MJ.fFk(this.eId);
-               kk.networkedHeldItemName = Fk, (0, lk.updateHeldItemState)(this.qZ, kk)
+               const SS = this.qk.FQ.YHS(this.eId);
+               SS.networkedHeldItemName = HS, (0, NS.updateHeldItemState)(this.qk, SS)
```

#### 2522. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18260-L18261` → after: `L18204-L18205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18204-L18205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18204-L18205) · [Before (L18260-L18261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18260-L18261)

```diff
-               const kk = this.qZ.MJ.fFk(this.eId);
-               kk.networkedHeldItemEnchantmentTier = Fk, (0, lk.updateHeldItemState)(this.qZ, kk)
+               const SS = this.qk.FQ.YHS(this.eId);
+               SS.networkedHeldItemEnchantmentTier = HS, (0, NS.updateHeldItemState)(this.qk, SS)
```

#### 2523. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18267` → after: `L18211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18211) · [Before (L18267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18267)

```diff
-         this.qZ.MJ.deleteEntity(this.eId), ak.g.GL(`lifeformDisposed|${(0,ik.c)(this.eId)}`), "Player" === this.lifeformType && ak.g.GL("playerNamesUpdated"), ak.g.unsubscribe(this.canAttackSub), ak.g.unsubscribe(this.interactableSub), ak.g.unsubscribe(this.multilineTextBoxSub)
+         this.qk.FQ.deleteEntity(this.eId), qS.k.cj(`lifeformDisposed|${(0,XS.e)(this.eId)}`), "Player" === this.lifeformType && qS.k.cj("playerNamesUpdated"), qS.k.unsubscribe(this.canAttackSub), qS.k.unsubscribe(this.interactableSub), qS.k.unsubscribe(this.multilineTextBoxSub)
```

#### 2524. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18270-L18272` → after: `L18214-L18216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18214-L18216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18214-L18216) · [Before (L18270-L18272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18270-L18272)

```diff
-         this.bloxd.setEntityName(this.eId, kk), this.bloxd.setEntityName((0, ik.c)(this.eId), kk);
-         const Fk = this.qZ.MJ;
-         if (Fk.dFk(this.eId)) ak.g.GL(`entityNameChanged|${this.eId}`);
+         this.bloxd.setEntityName(this.eId, SS), this.bloxd.setEntityName((0, XS.e)(this.eId), SS);
+         const HS = this.qk.FQ;
+         if (HS.yHS(this.eId)) qS.k.cj(`entityNameChanged|${this.eId}`);
```

#### 2525. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18275` → after: `L18219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18219) · [Before (L18275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18275)

```diff
-           Fk.Tu(this.eId, Fk.names.entityName, {
+           HS.VY(this.eId, HS.names.entityName, {
```

#### 2526. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18279` → after: `L18223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18223) · [Before (L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18279)

```diff
-         "Player" === this.lifeformType && ak.g.GL("playerNamesUpdated")
+         "Player" === this.lifeformType && qS.k.cj("playerNamesUpdated")
```

#### 2527. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18282-L18288` → after: `L18226-L18232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18226-L18232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18226-L18232) · [Before (L18282-L18288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18282-L18288)

```diff
-     var Zk, jk, ek = Ik(38118),
-       wk = Ik(621),
-       Hk = Ik(37401),
-       Jk = Ik(2700),
-       xk = Ik(3631),
-       Pk = Ik(3702),
-       Kk = Ik(38084);
+     var kS, aS, KS = gS(38158),
+       jS = gS(672),
+       GS = gS(37367),
+       CS = gS(2910),
+       nS = gS(3811),
+       PS = gS(3870),
+       QS = gS(38102);
```

#### 2528. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18297-L18298` → after: `L18241-L18242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18241-L18242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18241-L18242) · [Before (L18297-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18297-L18298)

```diff
-           (0, Kk.setRigAiState)(this.qZ, this.eId, null !== (Ik = wk.l[Fk]) && void 0 !== Ik ? Ik : null)
-         } else "armSwinging" === kk && Fk && !this.qZ.MJ.YFk(this.eId) && (0, Kk.playRigAction)(this.qZ, this.eId, Hk.r)
+           (0, QS.setRigAiState)(this.qk, this.eId, null !== (gS = jS.k[HS]) && void 0 !== gS ? gS : null)
+         } else "armSwinging" === SS && HS && !this.qk.FQ.VHS(this.eId) && (0, QS.playRigAction)(this.qk, this.eId, GS.q)
```

#### 2529. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18302` → after: `L18246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18246) · [Before (L18302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18302)

```diff
-         return this.qZ.MJ.getState(this.eId, kk.meshMetadata.type).Ip
+         return this.qk.FQ.getState(this.eId, SS.meshMetadata.type).kY
```

#### 2530. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18305` → after: `L18249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18249) · [Before (L18305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18305)

```diff
-         yk.c[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, kk)
+         xS.b[this.mobType].meshApi.updateVariation(this.getThinObjectId(), this.mobType, SS)
```

#### 2531. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18308` → after: `L18252-L18267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18252-L18267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18252-L18267) · [Before (L18308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18308)

```diff
-     const sk = ["b", 0, 1, 24, 99, "a", 115, "g", 138, "f", 4, 8, 255, "length", 81, 2, 212, "e", "undefined", void 0, 211, 87, 3, 63, 6, "fromCodePoint", 7, 12, "push", "c", 48, 28, 124, 213, 149, 91, 5, 217, 8191, 88, 13, 14, 118, "h", 150, 9, 190, 187, "d", 183, !0, !1, 86, 19 … [truncated]
+     const wS = [12, 0, 1, "h", "c", 175, 9, 7, "e", 74, 4, 8, 255, "length", "d", 227, 233, "f", "undefined", void 0, 2, 151, 239, 249, 57, 63, 6, "fromCodePoint", "push", "a", "b", 3, 33, 117, 180, 129, 91, 229, 80, 8191, 88, 13, 14, 121, "i", 211, 186, 165, 5, 172, !1, 62, 20,  … [truncated]
+ 
+     function hS(...SS) {
+       return SS[wS[13]] = wS[2], typeof kS[SS[wS[1]]] === wS[18] ? kS[SS[wS[1]]] = function(...SS) {
+         for (OS(SS[wS[13]] = wS[2], SS[-wS[5]] = 'eiabhAGmcn<upKH{8"Pt[~4d@;7XDv,f6MqL+U)53>yT!x_JZsO]g=B9IYQjC%VW`kN*RFl?(Sr|^E}w#&0.z12$/:o', SS[wS[0]] = "" + (SS[wS[1]] || ""), SS[wS[4]] = SS[wS[0]].length, SS[wS[10]] = [], SS[wS[8]] = wS[1], SS[wS[9]] = wS[1], SS[wS[7]] = -wS … [truncated]
+           if (SS[wS[6]] = SS[-wS[5]].indexOf(SS[wS[0]][SS[wS[3]]]), SS[wS[6]] !== -wS[2])
+             if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[6]];
+             else {
+               OS(SS[wS[7]] += SS[wS[6]] * wS[36], SS[wS[8]] |= SS[wS[7]] << SS[wS[9]], SS[wS[9]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
+               do {
+                 OS(SS[wS[10]].push(SS[wS[8]] & wS[12]), SS[wS[8]] >>= wS[11], SS[wS[9]] -= wS[11])
+               } while (SS[wS[9]] > wS[7]);
+               SS[wS[7]] = -wS[2]
+             } return SS[wS[7]] > -wS[2] && SS[wS[10]].push((SS[wS[8]] | SS[wS[7]] << SS[wS[9]]) & wS[12]), ZS(SS[wS[10]])
+       }(aS[SS[wS[1]]]) : kS[SS[wS[1]]]
+     }
```

#### 2532. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18319-L18320` → after: `L18278-L18279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18278-L18279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18278-L18279) · [Before (L18319-L18320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18319-L18320)

```diff
-     Sk(Zk = {}, jk = ["S1@H~0Ujr:Nx*=o7(LXg4tZ`fEzFuSYIx>M[^`EG:odP/", "lnd1Se$)*d(yfS>m5*~p,", 'u6b1(H)m[)?qkv7e"]cgm#[&^EI_fn>#o62jo<C&*T', "F@3J^;Ymo,DFU+dxFn5AZ+9qqDA]G", "/%wZ]89qgS9nM=^?I<!1PcR{w+(z(YM]", "`?|M+*<AV:Fs}#97v]@pRcmtDawgghiBo!G>Q$KD^y8_5:xxv>+UN~/", "11~MSJEm< … [truncated]
-       Sk(kk[sk[13]] = sk[1], kk[sk[16]] = [function() {
+     OS(kS = {}, aS = ["]YJhMgclh", "!G9^vSUm:H<RDbJ7gYo=w.}QBK#*xsR)o=VfD", '!"Qc7B++&W$4y;sX6Z3,VC|ikpzWn8b@P3P(qsdi', ':IY6E+#@0n2;JaD,csnGjE8gX"/ro&Q>(Rwh]E5|R`ODqKyf1e', "][N6MSrpaYXbAz#qO7}grCwFOBr=>hSffi", "vv.A>Rc,GQJj>8P3", '6nN]Awg2o[2Pk(ut6BqXeQx1G`c|$)<7>k+9Z|JWn"e]OU! … [truncated]
+       OS(SS[wS[13]] = wS[1], SS[-wS[16]] = [function() {
```

#### 2533. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18328` → after: `L18287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18287) · [Before (L18328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18328)

```diff
-       }], kk[-sk[14]] = sk[19], kk[sk[15]] = []);
+       }], SS[wS[4]] = wS[19], SS[wS[14]] = []);
```

#### 2534. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18330` → after: `L18289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18289) · [Before (L18330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18330)

```diff
-         Sk(kk[-sk[14]] = Object, kk[sk[15]][sk[28]]("".__proto__.constructor.name))
+         OS(SS[wS[4]] = Object, SS[wS[14]][wS[28]]("".__proto__.constructor.name))
```

#### 2535. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18332-L18335` → after: `L18291-L18294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18291-L18294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18291-L18294) · [Before (L18332-L18335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18332-L18335)

```diff
-       kk: for (kk[sk[11]] = sk[1]; kk[sk[11]] < kk[sk[16]][sk[13]]; kk[sk[11]]++) try {
-         for (kk[-sk[14]] = kk[sk[16]][kk[sk[11]]](), kk[sk[17]] = sk[1]; kk[sk[17]] < kk[sk[15]][sk[13]]; kk[sk[17]]++)
-           if (typeof kk[-sk[14]][kk[sk[15]][kk[sk[17]]]] === sk[18]) continue kk;
-         return kk[-sk[14]]
+       SS: for (SS[wS[15]] = wS[1]; SS[wS[15]] < SS[-wS[16]][wS[13]]; SS[wS[15]]++) try {
+         for (SS[wS[4]] = SS[-wS[16]][SS[wS[15]]](), SS[wS[17]] = wS[1]; SS[wS[17]] < SS[wS[14]][wS[13]]; SS[wS[17]]++)
+           if (typeof SS[wS[4]][SS[wS[14]][SS[wS[17]]]] === wS[18]) continue SS;
+         return SS[wS[4]]
```

#### 2536. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18337-L18339` → after: `L18296-L18298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18296-L18298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18296-L18298) · [Before (L18337-L18339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18337-L18339)

```diff
-       return kk[-sk[14]] || this
-     }() || {}, nk = Ok.TextDecoder, Gk = Ok.Uint8Array, pk = Ok.je, uk = Ok.String || String, bk = Ok.Array || Array, Rk = function(...kk) {
-       return Sk(kk[sk[13]] = sk[1], kk[sk[29]] = new bk(128), kk[-sk[30]] = uk[sk[25]] || uk.fromCharCode, kk[-sk[20]] = []),
+       return SS[wS[4]] || this
+     }() || {}, ES = vS.TextDecoder, LS = vS.Uint8Array, YS = vS.CK, AS = vS.String || String, yS = vS.Array || Array, VS = function(...SS) {
+       return OS(SS[wS[13]] = wS[1], SS[wS[29]] = new yS(wS[66]), SS[wS[30]] = AS[wS[27]] || AS.fromCharCode, SS[wS[20]] = []),
```

#### 2537. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18341-L18345` → after: `L18300-L18310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18300-L18310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18300-L18310) · [Before (L18341-L18345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18341-L18345)

```diff
-           for (Sk(Fk[sk[13]] = sk[2], Fk[sk[5]] = sk[19], Fk[sk[0]] = sk[19], Fk[sk[22]] = Fk[sk[1]][sk[13]], kk[-sk[20]][sk[13]] = sk[1]), Fk[-sk[21]] = sk[1]; Fk[-sk[21]] < Fk[sk[22]];) Sk(Fk[sk[0]] = Fk[sk[1]][Fk[-sk[21]]++], Fk[sk[0]] <= 127 ? Fk[sk[5]] = Fk[sk[0]] : Fk[sk[0] … [truncated]
-           return kk[-sk[20]].join("")
-         }
-     }()), (() => {
-       if (sk[50]) {
+           for (OS(HS[wS[13]] = wS[2], HS[-wS[24]] = wS[19], HS[wS[23]] = wS[19], HS[wS[22]] = HS[wS[1]][wS[13]], SS[wS[20]][wS[13]] = wS[1]), HS[wS[21]] = wS[1]; HS[wS[21]] < HS[wS[22]];) OS(HS[wS[23]] = HS[wS[1]][HS[wS[21]]++], HS[wS[23]] <= wS[65] ? HS[-wS[24]] = HS[wS[23]] : H … [truncated]
+           return SS[wS[20]].join("")
+         }
+     }()), hS(96) in JS && function(...SS) {
+       OS(SS[wS[13]] = wS[1], SS[wS[30]] = function(...SS) {
+         for (OS(SS[wS[13]] = wS[2], SS[wS[29]] = SS[wS[1]].length, SS[-wS[33]] = [], SS[wS[31]] = wS[1]), SS[-wS[32]] = wS[1]; SS[-wS[32]] < SS[wS[29]]; SS[-wS[32]]++) SS[-wS[33]].push(SS[-wS[32]] !== wS[1] && SS[wS[1]][SS[-wS[32]]] > SS[wS[1]][SS[-wS[32]] - wS[2]] ? SS[-wS[33]][ … [truncated]
+         for (SS[wS[8]] = SS[wS[29]] - wS[2]; SS[wS[8]] >= wS[1]; SS[wS[8]]--) SS[wS[8]] !== SS[wS[29]] - wS[2] && SS[wS[1]][SS[wS[8]]] > SS[wS[1]][SS[wS[8]] + wS[2]] && (SS[-wS[33]][SS[wS[8]]] = Math.max(SS[-wS[33]][SS[wS[8]]], SS[-wS[33]][SS[wS[8]] + wS[2]] + wS[2])), SS[wS[31]] … [truncated]
+         return SS[wS[31]]
+       }, console.log(SS[wS[30]]))
+     }(), (() => {
+       if (wS[53]) {
```

#### 2538. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18347-L18349` → after: `L18312-L18314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18312-L18314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18312-L18314) · [Before (L18347-L18349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18347-L18349)

```diff
-           for (Sk(kk[sk[13]] = sk[2], kk[sk[5]] = 'K;&(*6=7$+%,Fl?qnPyfLUudIXZ)28tz<Ym_O}Js#3j^{EW5D"/>H|v.!i]Qxr0~w`pGSoMCTkBAbN4Vc@[a:Rheg19', kk[sk[31]] = "" + (kk[sk[1]] || ""), kk[sk[22]] = kk[sk[31]].length, kk[sk[10]] = [], kk[sk[36]] = sk[1], kk[sk[37]] = sk[1], kk[-sk[34 … [truncated]
-             if (kk[-sk[33]] = kk[sk[5]].indexOf(kk[sk[31]][kk[sk[32]]]), kk[-sk[33]] !== -sk[2])
-               if (kk[-sk[34]] < sk[1]) kk[-sk[34]] = kk[-sk[33]];
+           for (OS(SS[wS[13]] = wS[2], SS[wS[37]] = 'vkKPoTqALJMnrclHw}5"#B24%tZpe03!)b6<:VCfDOX8UQNEY/@[h`ua.>S?zi{~d]9&,*g+j7$;^y1R(FsG_I|mxW=', SS[wS[30]] = "" + (SS[wS[1]] || ""), SS[wS[4]] = SS[wS[30]].length, SS[wS[10]] = [], SS[wS[8]] = wS[1], SS[wS[26]] = wS[1], SS[wS[7]]  … [truncated]
+             if (SS[wS[44]] = SS[wS[37]].indexOf(SS[wS[30]][SS[wS[3]]]), SS[wS[44]] !== -wS[2])
+               if (SS[wS[7]] < wS[1]) SS[wS[7]] = SS[wS[44]];
```

#### 2539. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18351` → after: `L18316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18316) · [Before (L18351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18351)

```diff
-                 Sk(kk[-sk[34]] += kk[-sk[33]] * sk[35], kk[sk[36]] |= kk[-sk[34]] << kk[sk[37]], kk[sk[37]] += (kk[-sk[34]] & sk[38]) > sk[39] ? sk[40] : sk[41]);
+                 OS(SS[wS[7]] += SS[wS[44]] * wS[36], SS[wS[8]] |= SS[wS[7]] << SS[wS[26]], SS[wS[26]] += (SS[wS[7]] & wS[39]) > wS[40] ? wS[41] : wS[42]);
```

#### 2540. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18353-L18356` → after: `L18318-L18321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18318-L18321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18318-L18321) · [Before (L18353-L18356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18353-L18356)

```diff
-                   Sk(kk[sk[10]].push(kk[sk[36]] & sk[12]), kk[sk[36]] >>= sk[11], kk[sk[37]] -= sk[11])
-                 } while (kk[sk[37]] > sk[26]);
-                 kk[-sk[34]] = -sk[2]
-               } return kk[-sk[34]] > -sk[2] && kk[sk[10]].push((kk[sk[36]] | kk[-sk[34]] << kk[sk[37]]) & sk[12]), Vk(kk[sk[10]])
+                   OS(SS[wS[10]].push(SS[wS[8]] & wS[12]), SS[wS[8]] >>= wS[11], SS[wS[26]] -= wS[11])
+                 } while (SS[wS[26]] > wS[7]);
+                 SS[wS[7]] = -wS[2]
+               } return SS[wS[7]] > -wS[2] && SS[wS[10]].push((SS[wS[8]] | SS[wS[7]] << SS[wS[26]]) & wS[12]), ZS(SS[wS[10]])
```

#### 2541. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18362-L18363` → after: `L18327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18327) · [Before (L18362-L18363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18362-L18363)

```diff
-         Fk(78);
-         let Ik = sk[51];
+         let gS = wS[50];
```

#### 2542. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18365` → after: `L18329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18329) · [Before (L18365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18365)

```diff
-           if (!Ik && (0, Jk[sk[17]])()) {
+           if (!gS && (0, CS[wS[8]])()) {
```

#### 2543. `bundles/bloxd.io/chunks/js/119.js` (Changed code · before: `L18367-L18369` → after: `L18331-L18333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050R18331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/7838d1cf7e310f399ec5b09faad2e663cd7be999...build/bloxd.io/fqwnlq.985c8f39#diff-9d83c5e240eedc8fe4789275bbb24cc4832dc8318e96dd592575597f2fb77050) · [After (L18331-L18333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fqwnlq.985c8f39/bundles/bloxd.io/chunks/js/119.js#L18331-L18333) · [Before (L18367-L18369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/7838d1cf7e310f399ec5b09faad2e663cd7be999/bundles/bloxd.io/chunks/js/119.js#L18367-L18369)

```diff
-               for (Sk(kk[sk[13]] = sk[2], kk[sk[2]] = 'X[PlVqESfLdnDMRgUmcKIaN0i|/G,8}>v6Q$xwW(j_zCk9Jht+!p*s`:b?)T~51@YB4.=^o2He;%#{u<3]yAFZOr&7"', kk[sk[0]] = "" + (kk[sk[1]] || ""), kk[-sk[44]] = kk[sk[0]].length, kk[sk[37]] = [], kk[sk[17]] = sk[1], kk[sk[24]] = sk[1], kk[sk[ … [truncated]
-                 if (kk[sk[45]] = kk[sk[2]].indexOf(kk[sk[0]][kk[sk[43]]]), kk[sk[45]] !== -sk[2])
-                   if (kk[sk[7]] < sk[1]) kk[sk[7]] = kk[sk[45]];
+               for (OS(SS[wS[13]] = wS[2], SS[wS[55]] = '+eiNHMhgAYdKoBtarbpskmlWQCjqRTSIZVFPX{Jc6GnO>`E<D^(U}Lzfy#:_,*3@89"|~xw!v=205;4)7/u%?.[]1&$', SS[wS[30]] = "" + (SS[wS[1]] || ""), SS[wS[54]] = SS[wS[30]].length, SS[wS[14]] = [], SS[wS[48]] = wS[1], SS[wS[26]] = wS[1], SS[w … [truncated]
+                 if (SS[wS[44]] = SS[wS[55]].indexOf(SS[wS[30]][SS[wS[11]]]), SS[wS[44]] !== -wS[2])
+                   if (SS[wS[56]] < wS[1]) SS[wS[56]] = SS[wS[44]];
```
